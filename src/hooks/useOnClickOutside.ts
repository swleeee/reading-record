import { useEffect } from 'react';

type RefType<T> = React.RefObject<T>;

export const useOnClickOutside = (
  ref: RefType<HTMLElement>,
  handler: (e: MouseEvent) => void,
) => {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler(e);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref, handler]);
};
