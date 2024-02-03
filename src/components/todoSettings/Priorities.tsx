import { FC } from "react";

type Priority = {
  colorClass: string;
  value: number;
};

type PrioritiesProps = {
  priorities: Priority[];
  setPriority: (priority: number) => void;
};

/**
 *
 * @todo нужно переделать на input type radio3
 */
const Priorities: FC<PrioritiesProps> = ({ priorities, setPriority }) => (
  <ul>
    {priorities.map((priority) => (
      <li onClick={() => setPriority(priority.value)}></li>
    ))}
  </ul>
);

export default Priorities;
