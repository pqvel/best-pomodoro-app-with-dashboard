import { FC } from "react";
import Aside from "@/components/layouts/Aside";
import Header from "@/components/layouts/Header";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const MainTemplate: FC<Props> = ({ children }) => (
  <>
    <Header />
    <div className="flex flex-1 overflow-hidden">
      <Aside />
      <main className="w-full min-h-full overflow-auto scroll p-5">
        {children}
      </main>
    </div>
  </>
);

export default MainTemplate;
