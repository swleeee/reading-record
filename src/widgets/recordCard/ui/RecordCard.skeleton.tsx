import Skeleton from 'react-loading-skeleton';

import { SkeletonWrapper } from '@/shared/ui';
import * as S from './RecordCard.styled';

export const RecordCardSkeleton = () => {
  return (
    <S.Card>
      <SkeletonWrapper>
        <S.WriterWrapper>
          <Skeleton
            width={28}
            height={28}
            circle
            style={{ marginRight: '16px' }}
          />
          <S.Nickname>
            <Skeleton width={72} />
          </S.Nickname>
          <S.CreatedDate>
            <Skeleton width={28} />
          </S.CreatedDate>
        </S.WriterWrapper>
        <S.RecordWrapper>
          <span css={S.bookThumbnail}>
            <Skeleton height="100px" />
          </span>
          <div>
            <S.RecordComment>
              <Skeleton width="100%" height={72} />
            </S.RecordComment>
          </div>
        </S.RecordWrapper>
        <S.ControlWrapper>
          <Skeleton width={30} height={17} />
        </S.ControlWrapper>
      </SkeletonWrapper>
    </S.Card>
  );
};
