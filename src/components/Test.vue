<template>
  <div class="hello">
    <el-button type="primary" @click="handleClick1">通用项目-弹窗</el-button>
    <el-button type="primary" @click="handleClick2">定制任务-弹窗</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// ========Task-Dialog-Model实际应用=========
import { mapActions, mapMutations } from "vuex";
import {
  OPEN_TASK,
} from "@/common/task-dialog/constants/operates-type";

export default defineComponent({
  name: "HelloWorld",
  components: {},
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions("taskDialogStore", [OPEN_TASK]),
    handleClick1() {
      return;
    },
    handleClick2() {
      const res = {
        id: 1234,
        taskName: "测试任务名称",
        masterTaskCode:"0000",
        nodeCode: "0000-0001",
        baseFormDto: {
          
        }
      };
      this[OPEN_TASK](res);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
