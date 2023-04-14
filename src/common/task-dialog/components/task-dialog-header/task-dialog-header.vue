<template>
  <header class="task-dialog-header">
    {{ taskInfo.taskName }}
  </header>
</template>

<script lang="ts" src="./task-dialog-header.ts"></script>

<style lang="scss" scoped>
.task-dialog-header {
  display: flex;
  align-items: center;
  height: 29px;
}
</style>
