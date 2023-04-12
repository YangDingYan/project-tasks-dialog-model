import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { CLOSE_TASK } from "./constants/operates-type";
import { TaskInfo } from "./types/TaskInfo";

export default defineComponent({
  name: "task-dialog",
  props: {
    dialogVisible: {
      type: Boolean,
      default: () => false
    },
    taskInfo: {
      type: TaskInfo,
      default: () => { }
    }
  },
  computed: {
    dialogVisibleSelf(): Boolean {
      return this.dialogVisible;
    }
  },
  methods: {
    ...mapActions("taskDialogStore", [CLOSE_TASK]),
    handleTaskDialogClose() {
      // debugger;
      this[CLOSE_TASK](this.taskInfo);
    },
    beforeClose(done: any) {
      debugger;
    }
  },
  mounted() {
    console.log('eee')
  }
})