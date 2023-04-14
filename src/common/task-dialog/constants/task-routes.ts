import { TASK_NODE_CODE } from "./task-base";

// 基于NodeType定义的任务类型分类
enum NODE_TYPE {
  SYSTEM = "0", // 系统级测试
  PROJECT = "1", // 项目任务
  SITE = "2", // 中心任务
  REPORT = "3", // 报告任务
  CRA_REPORT = "4", // 专员报告任务
  SUBJECT = "5", // 受试者
}

// import SYSTEM_TASKS from "./system"
const SYSTEM_TASKS: any[] = [
  // 系统级-模拟测试任务模版配置
  {
    masterTaskCode: "0000",
    node_code: [TASK_NODE_CODE.SYSTEM_TEST_TASK],
    node_name: "系统任务测试弹窗",
    node_type: NODE_TYPE.SYSTEM,
    components: { header: "task-dialog-header", content: "task-dialog-content", footer: "task-dialog-footer" },
    size: "medium", // 弹窗的大小属性
  }
]


export const TASK_COMP_ROUTES = [...SYSTEM_TASKS];