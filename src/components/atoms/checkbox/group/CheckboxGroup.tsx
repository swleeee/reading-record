import React from 'react';

import { Checkbox } from '@/components';
import type { CheckboxGroupType } from '@/types';

interface CheckboxGroupContextType<T extends string> {
  checkedList: CheckboxGroupType<T>;
}

const createContext = <T extends string>() =>
  React.createContext<CheckboxGroupContextType<T>>({
    checkedList: {} as CheckboxGroupType<T>,
  });

const Context = createContext<string>();

interface CheckboxGroupProps<T extends string> {
  children: React.ReactNode;
  checkedList: CheckboxGroupType<T>;
}

const CheckboxGroup = <T extends string>({
  children,
  checkedList,
}: CheckboxGroupProps<T>) => {
  return (
    <Context.Provider value={{ checkedList }}>{children}</Context.Provider>
  );
};

interface AllCheckboxProps {
  className?: string;
  children: React.ReactNode;
  toggleAllChecks: (isChecked: boolean) => void;
}

const AllCheckbox = ({
  className,
  children,
  toggleAllChecks,
}: AllCheckboxProps) => {
  const { checkedList } =
    React.useContext<CheckboxGroupContextType<string>>(Context); // TODO: string -> generic type 변경

  const checkGroupList = () =>
    Object.values(checkedList).every((isChecked) => isChecked);

  const handleAllChecksToggle = () => {
    const isAllCheck = checkGroupList();

    toggleAllChecks(!isAllCheck);
  };

  return (
    <Checkbox
      className={className}
      isChecked={checkGroupList()}
      onAllSelect={handleAllChecksToggle}
    >
      {children}
    </Checkbox>
  );
};

CheckboxGroup.All = AllCheckbox;
CheckboxGroup.Item = Checkbox;

export default CheckboxGroup;
