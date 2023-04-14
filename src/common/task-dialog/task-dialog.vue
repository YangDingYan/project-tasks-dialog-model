<template>
  <el-dialog
    :model-value="dialogVisible"
    append-to-body
    :show-close="true"
    :close-on-click-modal="false"
    :class="['task-dialog']"
    @before-close="beforeClose"
    @close="handleTaskDialogClose">
    <template #header>
      <component
        :is="taskTemplate.header"
        :task-info="taskInfo"
        :task-params="taskParams"
        ref="taskHeader"
      />
    </template>
    <div class="task-content-common">
      <component
        :is="taskTemplate.content"
        :visible="dialogVisible"
        :task-info="taskInfo"
        :task-params="taskParams"
        class="task-content-container"
        ref="taskContent"
      />
    </div>
    <template #footer>
      <component
        :is="taskTemplate.footer"
        :task-info="taskInfo"
        :task-params="taskParams"
        ref="taskFooter"
      />
    </template>
  </el-dialog>
</template>

<script lang="ts" src="./task-dialog.ts"></script>

<style lang="scss">
.task-dialog {
  .el-dialog__header {
    background: #f6f7f9;
    border-bottom: none;
  }
  .el-dialog__footer {
    background: #ffffff;
    border: 1px solid #f0f0f0;
    padding: 10px 30px !important;
    max-height: 54px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }
}
</style>
<style lang="scss" scoped></style>
