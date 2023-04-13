<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <template v-for="task in taskInfos">
      <task-dialog
        v-if="visible[task.id]"
        v-show="visible[task.id]"
        :key="task.id"
        :taskInfo="testee(task)"
        :dialogVisible="visible[task.id]"
      ></task-dialog>
    </template>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapActions, mapState } from 'vuex';
import { CLOSE_TASK, OPEN_TASK } from "@/common/task-dialog/constants/operates-type";
// const TaskDialog = () => {
//   import("@/common/task-dialog/components/task-dialog.vue")
// }
import TaskDialog from '@/common/task-dialog/task-dialog.vue'

@Component({
  components: {
    TaskDialog
  },
  computed: {
    ...mapState("taskDialogStore", ["taskInfos", "visible", "testVisible"])
  },
  methods: {
    ...mapActions("taskDialogStore", [OPEN_TASK, CLOSE_TASK]),
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
