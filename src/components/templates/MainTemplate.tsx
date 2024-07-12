import { FC } from "react";
import clsx from "clsx";
import Aside from "../layouts/Aside";
import Header from "../layouts/Header";
import { useAppSelector } from "../../core/redux/app/hooks";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const MainTemplate: FC<Props> = ({ children }) => {
  const image = useAppSelector((state) => state.settings.dashboardBgImg);

  return (
    <>
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Aside />
        <main
          className={clsx(
            "scroll relative w-full min-h-full overflow-auto p-5 bg-center bg-cover",
            image.className
          )}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default MainTemplate;
