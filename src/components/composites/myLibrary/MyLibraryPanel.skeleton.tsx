import { BookListSkeleton } from '@/components';
import * as S from './MyLibraryPanel.styled';

const MyLibraryPanelSkeleton = () => {
  return (
    <S.Container>
      <BookListSkeleton />
    </S.Container>
  );
};

export default MyLibraryPanelSkeleton;
