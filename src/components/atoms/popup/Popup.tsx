import React, { useRef, useState } from 'react';

import { useOnClickOutside } from '@/hooks';
import * as S from './Popup.styled';

interface PopupProps {
  className?: string;
  children: React.ReactNode;
  render: (
    handleStateChange: (state: boolean) => () => void,
  ) => React.ReactNode;
}

const Popup = ({ className, children, render }: PopupProps) => {
  const popupRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state: boolean) => () => {
    setIsOpen(state);
  };

  useOnClickOutside(popupRef, handleStateChange(false));

  return (
    <S.Popup className={className} ref={popupRef}>
      <S.Button
        type="button"
        aria-label="open popup"
        onClick={handleStateChange(true)}
      >
        {children}
      </S.Button>
      {isOpen && <S.PopupContent>{render(handleStateChange)}</S.PopupContent>}
    </S.Popup>
  );
};

export default Popup;
