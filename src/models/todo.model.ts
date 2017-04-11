export default class TodoModel {
  public task: string;
  public assignee: string;
  public completed = false;

  constructor(task: string) {
    this.task = task;
  }
}
