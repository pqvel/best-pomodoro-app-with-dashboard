import { v4 as uuid } from "uuid";

type TodoConstructorType = {
  title: string;
  descr: string;
  priority: number;
  countPomodors: number;
  deadline: number;
  hashtags: string[];
};

export type TodoType = {
  readonly id: string;
  readonly leftTime: number;
  title: string;
  descr?: string;
  priority?: number;
  countPomodors?: number;
  deadline?: number;
  hashtags?: string[];
};

export class TodoModel {
  readonly id: string = uuid();
  readonly leftTime: number = 0;
  title: string;
  descr?: string;
  priority?: number;
  countPomodors?: number;
  deadline?: number;
  hashtags?: string[];

  constructor({
    title,
    descr = "",
    priority = 0,
    countPomodors = 1,
    deadline = 0,
    hashtags = [],
  }: TodoConstructorType) {
    this.title = title;
    this.descr = descr;
    this.priority = priority;
    this.countPomodors = countPomodors;
    this.deadline = deadline;
    this.hashtags = hashtags;
  }
}
