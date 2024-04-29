import React from 'react';

import * as S from './ErrorMessage.styled';

interface ErrorMessageProps {
  className?: string;
  message: string;
}

const ErrorMessage = ({ className, message }: ErrorMessageProps) => {
  return <S.ErrorMessage className={className}>{message}</S.ErrorMessage>;
};

export default ErrorMessage;
