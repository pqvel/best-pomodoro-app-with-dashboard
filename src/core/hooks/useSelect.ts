import { useState, useEffect, MouseEvent } from "react";

type UseSelectReturn = {
  isOpen: boolean;
  closeSelect: () => void;
  openSelect: (event: MouseEvent<HTMLElement>) => void;
};

export const useSelect = (): UseSelectReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.addEventListener("click", closeSelect);
    } else {
      document.body.removeEventListener("click", closeSelect);
    }

    return () => {
      document.removeEventListener("click", closeSelect);
    };
  }, [isOpen]);

  const openSelect = (event: MouseEvent<HTMLElement>) => {
    console.log("open");
    event.stopPropagation();
    setIsOpen(true);
  };

  const closeSelect = () => {
    console.log("close");
    setIsOpen(false);
  };

  return {
    isOpen,
    closeSelect,
    openSelect,
  };
};
