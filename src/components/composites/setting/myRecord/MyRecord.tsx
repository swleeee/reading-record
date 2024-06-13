import { Suspense, useState } from 'react';

import { SegmentedButton } from '@/components';
import { MY_RECORD_STATUS_OPTIONS } from '@/constants';
import type { SelectOptionType } from '@/types';
import MyRecordList from './list/MyRecordList';
import MyRecordListSkeleton from './list/MyRecordList.skeleton';
import * as S from './MyRecord.styled';

const MyRecord = () => {
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
      {/* TODO: 스켈레톤 UI 적용 예정 */}
      <Suspense fallback={<MyRecordListSkeleton />}>
        <MyRecordList
          queryStatus={selectedOption.key as 'ongoing' | 'completed'}
        />
      </Suspense>
    </S.Section>
  );
};

export default MyRecord;
