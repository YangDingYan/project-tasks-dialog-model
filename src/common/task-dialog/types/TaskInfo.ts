export class TaskInfo {
  id!: number;
  taskName!: string;
  nodeCode!: string;
  masterTaskCode!: string;

  constructor(props: any = {}) {
    Object.assign(this, {...props});
  }
} 