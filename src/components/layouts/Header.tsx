import { FC } from "react";
import { Link } from "react-router-dom";
import { Svg } from "../ui";

const Header: FC = () => {
  return (
    <header className="flex bg-black min-h-[60px] px-5 justify-end items-center">
      <Link
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 hover:bg-white"
        to="/account"
      >
        <Svg width={24} height={24} iconId="icon-user" />
      </Link>
    </header>
  );
};

export default Header;
