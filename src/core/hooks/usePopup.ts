import { useState } from "react";

type UsePopupReturnType = {
  isOpen: boolean;
  togglePopup: () => void;
};

export const usePopup = (): UsePopupReturnType => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const togglePopup = (): void => {
    setOpen((isOpen) => !isOpen);
  };

  return {
    isOpen,
    togglePopup,
  };
};
