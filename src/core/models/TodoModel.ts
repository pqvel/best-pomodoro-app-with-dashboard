import { v4 as uuid } from "uuid";

export interface ITodo {
  readonly id: string;
  readonly leftTime: number;
  title: string;
  descr?: string;
  priority?: number;
  deadline?: number;
  hashtags?: string[];
}

type TodoModelConstructor = {
  title: string;
  descr?: string;
  priority: number;
  deadline: number;
  hashtags: string[];
};

export class TodoModel implements ITodo {
  readonly id: string = uuid();
  readonly leftTime: number = 0;
  title: string;
  descr?: string;
  priority?: number;
  deadline?: number;
  hashtags?: string[];

  constructor({
    title,
    descr = "",
    priority = 0,
    deadline = 0,
    hashtags = [],
  }: TodoModelConstructor) {
    this.title = title;
    this.descr = descr;
    this.priority = priority;
    this.deadline = deadline;
    this.hashtags = hashtags;
  }
}
