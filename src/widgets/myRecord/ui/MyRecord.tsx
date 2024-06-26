import { Suspense, useState } from 'react';

import { SegmentedButton } from '@/shared/ui';
import { MY_RECORD_STATUS_OPTIONS } from '@/shared/constants';
import type { SelectOptionType } from '@/shared/model';
import MyRecordList from './list/MyRecordList';
import MyRecordListSkeleton from './list/MyRecordList.skeleton';
import * as S from './MyRecord.styled';

export const MyRecord = () => {
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>(
    MY_RECORD_STATUS_OPTIONS[0],
  );

  const handleOptionSelect = (option: SelectOptionType) => () => {
    setSelectedOption(option);
  };

  return (
    <S.Section>
      <SegmentedButton
        options={MY_RECORD_STATUS_OPTIONS}
        selectedOption={selectedOption}
        onClick={handleOptionSelect}
      />
      <Suspense fallback={<MyRecordListSkeleton />}>
        <MyRecordList
          queryStatus={selectedOption.key as 'ongoing' | 'completed'}
        />
      </Suspense>
    </S.Section>
  );
};
