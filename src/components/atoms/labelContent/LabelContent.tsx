import React from 'react';

import * as S from './LabelContent.styled';

interface LabelContentProps {
  className?: string;
  children: React.ReactNode;
  isRequired?: boolean;
  error?: string;
  id: string;
  label: string;
}

const LabelContent = ({
  className,
  children,
  isRequired,
  error,
  id,
  label,
}: LabelContentProps) => {
  return (
    <S.LabelContent className={className}>
      <S.Label htmlFor={id} isRequired={isRequired}>
        {label}
      </S.Label>
      {children}
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.LabelContent>
  );
};

export default LabelContent;
