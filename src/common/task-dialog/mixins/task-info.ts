import { defineComponent } from "vue";
import { TaskInfo } from "../types/TaskInfo";

import { TASK_NODE_CODE } from '../constants/task-base';
import { TASK_COMP_ROUTES } from "../constants/task-routes";

export default defineComponent({
  name: "task-info-mixin",
  props: {
    taskInfo: {
      type: TaskInfo || null,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    taskParams() {
      let paramsTemp = {};
      if (this.taskInfo) {
        const { nodeCode, masterTaskCode } = this.taskInfo;
        paramsTemp = this.toTaskRouter(nodeCode, masterTaskCode) || {};
      }
      return paramsTemp;
    },
    // !这里获取用于渲染的dialog模块组件
    /**
     * 1. 默认的模块组件，如果会存在根据业务字段来命中不同的，能怎么更好处理?
     * 2. 
     */
    taskTemplate() {
      const components = (this.taskParams as any)?.components || { components: {} };
      return {
        header: components?.header || "task-dialog-header",
        content: components?.content || "task-dialog-content",
        footer: components?.footer || "task-dialog-footer",
        toolbar: components?.toolbar || "task-dialog-toolbar",
      }
    }
  },
  methods: {
    // ? 模拟的获取模板配置方法，会放到公共方法类中 [怎么定制]
    toTaskRouter(nodeCode: any, masterTaskCode: any, isSystemTask: number = 1) {
      for (const item of TASK_COMP_ROUTES) {
        if(item.node_code) {
          if(
            item.node_code.some((code: string) => nodeCode?.indexOf(code) > -1) || 
            item.node_code.includes(masterTaskCode) ||
            (nodeCode && nodeCode.indexOf(item.node_code) === 0)
          ) {
            return item;
          }
        }
      }
      return {};
    }
  }
})