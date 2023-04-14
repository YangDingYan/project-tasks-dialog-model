import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { CLOSE_TASK } from "./constants/operates-type";
import { TaskInfo } from "./types/TaskInfo";
import TaskInfoMixin from "./mixins/task-info";

//! 内置dialog模块组件引用
import TaskDialogHeader from "./components/task-dialog-header/task-dialog-header.vue";
import TaskDialogContent from "./components/task-dialog-content/task-dialog-content.vue";
import TaskDialogFooter from "./components/task-dialog-footer/task-dialog-footer.vue";

export default defineComponent({
  name: "task-dialog",
  mixins: [TaskInfoMixin],
  components: {
    TaskDialogHeader,
    TaskDialogContent,
    TaskDialogFooter
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: () => false
    },
    taskInfo: {
      type: TaskInfo,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    dialogVisibleSelf() {
      return this.dialogVisible;
    }
  },
  methods: {
    ...mapActions("taskDialogStore", [CLOSE_TASK]),
    handleTaskDialogClose() {
      this[CLOSE_TASK](this.taskInfo);
    },
    beforeClose(done: any) {
      done();
    }
  },
  mounted() {
    return;
  }
})