import { useCallback, useMemo, useState } from "react";

export const useOpen = (defaultValue = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultValue);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((wasOpen) => !wasOpen);
  }, []);

  return useMemo(
    () => ({ isOpen, open, close, toggle }),
    [isOpen, open, close, toggle]
  );
};
