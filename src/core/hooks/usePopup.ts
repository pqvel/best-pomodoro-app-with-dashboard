import { useEffect, useState } from "react";

type UsePopupReturnType = {
  isOpen: boolean;
  togglePopup: () => void;
};

const ESCAPE = "Escape";

export const usePopup = (): UsePopupReturnType => {
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", escapeClosePpopup);
    } else {
      document.removeEventListener("keydown", escapeClosePpopup);
    }

    return () => document.removeEventListener("keydown", escapeClosePpopup);
  }, [isOpen]);

  const escapeClosePpopup = (e: KeyboardEvent) => {
    if (e.key === ESCAPE) {
      setOpen(false);
    }
  };

  const togglePopup = (): void => {
    setOpen((isOpen) => !isOpen);
  };

  return {
    isOpen,
    togglePopup,
  };
};
