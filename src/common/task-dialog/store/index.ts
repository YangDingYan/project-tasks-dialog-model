import {
  OPEN_TASK, OPEN_TASK_DIALOG,
  CLOSE_TASK, CLOSE_TASK_DIALOG, CLOSED_TASK,
  REFRESH_TASK,
} from "../constants/operates-type";
import { TaskInfo } from "../types/TaskInfo"; 

export default {
  state: {
    TaskInfo: new TaskInfo(),
    taskInfos: [], // 是否可以用Map重写?
    visible: {},
  },
  getters: {
    getVisible(state: any) {
      return state.visible;
    }
  },
  mutations: {
    [OPEN_TASK](state: any, value: any) {
      // !好像是可以用Map接口重写
      const taskIndex = state.taskInfos.findIndex((task: any) => +task.id === +value.id);
      const openTask = new TaskInfo(value);
      if(taskIndex === -1) {
        state.taskInfos.push(openTask);
      } else {
        state.taskInfos[taskIndex] = openTask;
      }
    },
    [OPEN_TASK_DIALOG](state: any, value: any) {
      // !这个visible的结构也可以更改, 来优化这里操作
      // const visible = Object.assign({}, state.visible);
      // visible[value.id] = true;
      // state.visible = visible;
      state.visible[value.id] = true;
    },
    [CLOSE_TASK](state: any, value: any) {
      const visible = Object.assign({}, state.visible);
      setTimeout(() => {
        delete visible[value.id];
        state.visible = visible;
      }, 200);
    },
    [CLOSED_TASK](state: any, value: any) {
      const taskIndex = state.taskInfos.findIndex((task:any) => {
        return +task.id === +value.id;
      });
      if(taskIndex > -1) {
        state.taskInfos.splice(taskIndex, 1);
      }
    },
    [CLOSE_TASK_DIALOG](state: any, value: any) {
      // const visible = Object.assign({}, state.visible);
      // visible[value.id] = false;
      // state.visible = visible;
      state.visible[value.id] = false;
      return;
    }
  },
  actions: {
    [OPEN_TASK](_store: any, task: any) {
      _store.commit(OPEN_TASK, task);
      setTimeout(() => {
        _store.commit(OPEN_TASK_DIALOG, task);
      }, 200);
    },
    [CLOSE_TASK](_store:any, task:any){
      _store.commit(CLOSE_TASK_DIALOG, task);
      setTimeout(() => {
        _store.commit(CLOSE_TASK, task);
        _store.commit(CLOSED_TASK, task);
      }, 200)
    }
  },
  namespaced: true,
};