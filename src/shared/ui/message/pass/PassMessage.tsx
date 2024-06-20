import * as S from './PassMessage.styled';

interface PassMessageProps {
  className?: string;
  message: string;
}

export const PassMessage = ({ className, message }: PassMessageProps) => {
  return <S.PassMessage className={className}>{message}</S.PassMessage>;
};
