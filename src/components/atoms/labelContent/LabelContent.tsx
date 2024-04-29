import React from 'react';

import { ErrorMessage, PassMessage } from '@/components';
import * as S from './LabelContent.styled';

interface LabelContentProps {
  className?: string;
  children: React.ReactNode;
  isRequired?: boolean;
  error?: string;
  pass?: string;
  id: string;
  label: string;
}

const LabelContent = ({
  className,
  children,
  isRequired,
  error,
  pass,
  id,
  label,
}: LabelContentProps) => {
  return (
    <S.LabelContent className={className}>
      <S.Label htmlFor={id} isRequired={isRequired}>
        {label}
      </S.Label>
      {children}
      {error && <ErrorMessage css={S.message} message={error} />}
      {pass && <PassMessage css={S.message} message={pass} />}
    </S.LabelContent>
  );
};

export default LabelContent;
