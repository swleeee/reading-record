import React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  isMounted: boolean;
  container: string;
}

const Portal = ({ children, isMounted, container }: PortalProps) => {
  if (!isMounted) return null;

  const portal = document.querySelector(container);
  return portal ? createPortal(children, portal) : null;
};

const MemoizedPortal = React.memo(Portal);
MemoizedPortal.displayName = 'MemoizedPortal';

export default MemoizedPortal;
