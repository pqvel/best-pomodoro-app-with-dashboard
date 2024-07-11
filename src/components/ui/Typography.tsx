import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type ChildrenProps = {
  children: ReactNode;
};

const H1: FC<ChildrenProps> = ({ children }) => (
  <h1 className="text-4xl font-bold text-black mb-4">{children}</h1>
);

const H2: FC<ChildrenProps> = ({ children }) => (
  <h2 className="text-3xl font-semibold text-gray-900 mb-3">{children}</h2>
);

const H3: FC<ChildrenProps> = ({ children }) => (
  <h3 className="text-2xl font-medium text-gray-900 mb-2">{children}</h3>
);

const H4: FC<ChildrenProps> = ({ children }) => (
  <h4 className="text-xl font-medium text-gray-800 mb-2">{children}</h4>
);

const H5: FC<ChildrenProps> = ({ children }) => (
  <h5 className="text-lg font-medium text-gray-800 mb-1">{children}</h5>
);

const H6: FC<ChildrenProps> = ({ children }) => (
  <h6 className="text-base font-medium text-gray-800">{children}</h6>
);

const P: FC<ChildrenProps> = ({ children }) => (
  <p className="text-lg text-gray-900 leading-relaxed mb-6">{children}</p>
);

const Ul: FC<ChildrenProps> = ({ children }) => (
  <ul className="list-disc list-inside text-gray-900 mb-6">{children}</ul>
);

const Ol: FC<ChildrenProps> = ({ children }) => (
  <ol className="list-decimal list-inside text-gray-900 mb-6">{children}</ol>
);

const Li: FC<ChildrenProps> = ({ children }) => (
  <li className="mb-2">{children}</li>
);

const Blockquote: FC<ChildrenProps> = ({ children }) => (
  <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-800 mb-6">
    {children}
  </blockquote>
);

const Pre: FC<ChildrenProps> = ({ children }) => (
  <pre className="bg-gray-200 p-4 rounded text-sm text-gray-900 overflow-auto mb-6">
    <code>{children}</code>
  </pre>
);

const A: FC<{ href: string; children: ReactNode }> = ({ href, children }) => (
  <Link to={href} className="text-blue-500 hover:underline">
    {children}
  </Link>
);

const Typography = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Ul,
  Ol,
  Li,
  Blockquote,
  Pre,
  A,
};

export default Typography;
