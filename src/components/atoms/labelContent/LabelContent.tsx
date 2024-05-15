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
  tooltip?: React.ReactNode;
}

const LabelContent = ({
  className,
  children,
  isRequired,
  error,
  pass,
  id,
  label,
  tooltip,
}: LabelContentProps) => {
  return (
    <S.LabelContent className={className}>
      <S.LabelWrapper>
        <S.Label htmlFor={id} isRequired={isRequired}>
          {label}
        </S.Label>
        {tooltip && tooltip}
      </S.LabelWrapper>
      {children}
      {error && <ErrorMessage css={S.message} message={error} />}
      {pass && <PassMessage css={S.message} message={pass} />}
    </S.LabelContent>
  );
};

export default LabelContent;
