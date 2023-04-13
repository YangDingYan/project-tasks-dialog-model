<template>
  <el-dialog
    v-model="dialogVisible"
    append-to-body
    :show-close="true"
    :class="[]"
    @before-close="beforeClose"
    @close="handleTaskDialogClose">
    dd
    <template #title>
      <component
        :is="ee"
        :task-info="taskInfo"
        :task-params="taskParams"
        ref="taskHeader"
      />
    </template>
    <template>
      <component
        :is="ee"
        :visible="ee"
        :task-info="taskInfo"
        :task-params="taskParams"
        class="task-content-container"
        ref="taskContent"
      ></component>
    </template>
    <template #footer>
      <component
        :is="ee"
        :task-info="taskInfo"
        :task-params="taskParams"
        @submit="handleSubmit"
        @cancel="handleCancel"
        ref="taskFooter"
      />
    </template>
  </el-dialog>
</template>

<script lang="ts" src="./task-dialog.ts"></script>

<style lang="scss" scoped></style>
