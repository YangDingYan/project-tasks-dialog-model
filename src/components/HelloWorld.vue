<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 系统级任务弹窗 -->
    <template v-for="task in taskInfos">
      <task-dialog
        v-if="visible[task.id]"
        :key="task.id"
        :taskInfo="task"
        :dialogVisible="visible[task.id]"
      ></task-dialog>
    </template>
    <!-- 系统布局路由 -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// ========Task-Dialog-Model实际应用=========
import { mapState, mapActions } from "vuex";
import { CLOSE_TASK, OPEN_TASK } from "@/common/task-dialog/constants/operates-type";
// const TaskDialog = () => {
//   import("@/common/task-dialog/task-dialog.vue");
// };
import TaskDialog from "@/common/task-dialog/task-dialog.vue";

export default defineComponent({
  name: "HelloWorld",
  components: {
    TaskDialog,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      ee: false
    };
  },
  computed: {
    ...mapState("taskDialogStore", ["taskInfos", "visible"]),
  },
  methods: {
    ...mapActions("taskDialogStore", [OPEN_TASK, CLOSE_TASK]),
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
