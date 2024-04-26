import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

import { useToast } from '@/hooks';
import { useSignup } from '@/services';
import { ERROR_MSG, GENDER_OPTIONS, TOAST } from '@/assets';
import type { CheckboxGroupType, SelectOptionType } from '@/types';

const TERM_AGREEMENT = { term: false, policy: false, age: false };

interface FormType {
  email: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
  birth: { year: string; month: string; day: string };
  gender: SelectOptionType;
  termOfAgreements: CheckboxGroupType<keyof typeof TERM_AGREEMENT>;
}

const useSignupForm = () => {
  const navigate = useNavigate();

  const {
    formState: { errors },
    watch,
    register,
    clearErrors,
    setError,
    setValue,
    handleSubmit,
  } = useForm<FormType>({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
      nickname: '',
      birth: { year: '', month: '', day: '' },
      gender: GENDER_OPTIONS[0],
      termOfAgreements: TERM_AGREEMENT,
    },
  });
  const { mutate: createUser } = useSignup();
  const { addToast } = useToast();

  const getBirthDateValid = () => {
    const date = `${watch('birth.year')}-${watch('birth.month')}-${watch(
      'birth.day',
    )}`;
    const formattedDate = dayjs(date, 'YYYY-MM-DD', true);

    return formattedDate.isValid();
  };

  const checkBirthDateValidate = (
    key: keyof FormType['birth'],
    value: string,
  ) => {
    switch (key) {
      case 'year': {
        if (+value < 1900 || +value > new Date().getFullYear()) {
          return ERROR_MSG.INVALID_YEAR;
        }
        break;
      }
      case 'month':
        {
          if (+value < 1 || +value > 12) {
            return ERROR_MSG.INVALID_MONTH;
          }
        }
        break;
      case 'day':
        {
          if (+value < 1 || +value > 31) {
            return ERROR_MSG.INVALID_DAY;
          }
        }
        break;
    }

    if (getBirthDateValid()) {
      clearErrors('birth');
    }

    return true;
  };

  const checkBirthDateError = () => {
    let hasError = false;

    if (!getBirthDateValid()) {
      setError('birth', {
        type: 'validate',
        message: ERROR_MSG.INVALID_DATE,
      });
      hasError = true;
    }

    return hasError;
  };

  const checkAgreementRequiredError = () => {
    let hasError = false;

    if (
      !watch('termOfAgreements.age') ||
      !watch('termOfAgreements.policy') ||
      !watch('termOfAgreements.term')
    ) {
      setError('termOfAgreements', {
        type: 'required',
        message: ERROR_MSG.REQUIRED,
      });
      hasError = true;
    }

    return hasError;
  };

  // TODO: 추후 data 이용 예정
  const handleAccountCreate = handleSubmit(
    (data) => {
      const hasError = checkAgreementRequiredError() || checkBirthDateError();

      if (hasError) {
        return;
      }

      const { year, month, day } = data.birth;

      const req = {
        email: data.email,
        password: data.password,
        options: {
          data: {
            nickname: data.nickname,
            gender: data.gender.key as 'm' | 'f', // TODO: 타입 좁히기 필요
            birth: `${year}-${month}-${day}`,
            termsFlag: data.termOfAgreements.term,
            privacyFlag: data.termOfAgreements.policy,
            ageFlag: data.termOfAgreements.age,
          },
        },
      };

      createUser(req, {
        onSuccess: () => {
          addToast(TOAST.SUCCESS.SIGNUP);
          navigate('/login');
        },
        onError: (error) => {
          switch (error.message) {
            case 'User already registered':
              addToast(TOAST.WARNING.AUTH_ALREADY_REGISTERED);
          }
        },
      });
    },
    () => {
      checkAgreementRequiredError();
      checkBirthDateError();
    },
  );

  const handleBirthChange =
    (key: keyof FormType['birth']) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const filteredValue = value.replace(/[^\d]/g, '');

      setValue(`birth.${key}`, filteredValue);
    };

  const handleTermItemSelect = (
    key: keyof typeof TERM_AGREEMENT,
    isChecked: boolean,
  ) => {
    setValue(`termOfAgreements.${key}`, !isChecked);

    if (
      Object.values(watch('termOfAgreements')).every((isChecked) => isChecked)
    ) {
      clearErrors('termOfAgreements');
    }
  };

  const handleTermAllSelect = (isChecked: boolean) => {
    const entries = Object.entries(watch('termOfAgreements')) as [
      keyof typeof TERM_AGREEMENT,
      boolean,
    ][];

    const termOfAgreements = entries.reduce((acc, [key]) => {
      acc[key] = isChecked;

      return acc;
    }, {} as CheckboxGroupType<keyof typeof TERM_AGREEMENT>);

    setValue(`termOfAgreements`, termOfAgreements);

    if (isChecked) {
      clearErrors('termOfAgreements');
    }
  };

  const handleGenderOptionSelect = (option: SelectOptionType) => () => {
    setValue('gender', option);
  };

  return {
    errors,
    watch,
    register,
    checkBirthDateValidate,
    handleGenderOptionSelect,
    handleTermAllSelect,
    handleTermItemSelect,
    handleBirthChange,
    handleAccountCreate,
  };
};

export default useSignupForm;
