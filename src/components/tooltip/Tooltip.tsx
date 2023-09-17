import { FC, ReactNode } from "react";

const Tooltip: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="fixed right-[20px] bottom-[20px] p-4 bg-white rounded-[8px]">
      {children}
    </div>
  );
};

export default Tooltip;
