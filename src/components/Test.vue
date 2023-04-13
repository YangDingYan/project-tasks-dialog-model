<template>
  <div class="hello">
    <el-button @click="testClick">测试</el-button>
    <el-button type="primary" @click="handleClick1">通用项目-弹窗</el-button>
    <el-button type="primary" @click="handleClick2">定制任务-弹窗</el-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
// ========Task-Dialog-Model实际应用=========
import { mapActions, mapMutations } from "vuex";
import { OPEN_TASK } from "@/common/task-dialog/constants/operates-type";

@Component({
  methods: {
    ...mapActions("taskDialogStore", [OPEN_TASK])
    // ...mapMutations("taskDialogStore", ["openTestDialog"]),
  },
})
export default class Test extends Vue {
  testClick() {
    // this.openTestDialog();
  }
  handleClick1() {
    return;
  }
  handleClick2() {
    const res = {
      id: 1234,
      taskName: "测试任务名称",
    };
    this[OPEN_TASK](res);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
