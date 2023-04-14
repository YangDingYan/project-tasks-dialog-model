import { defineComponent } from "vue";
import { TaskInfo } from "../../types/TaskInfo";

export default defineComponent({
  name: "task-dialog-header",
  props: {
    taskParams: {
      default: () => {
        return {};
      }
    },
    taskInfo: {
      type: TaskInfo,
      default: () => {
        return {};
      }
    }
  }
})