export class TaskInfo {
  id!: number;
  taskName!: string;

  constructor(props: any = {}) {
    Object.assign(this, {...props});
  }
} 