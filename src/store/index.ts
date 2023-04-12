import { createStore } from 'vuex'
import taskDialogStore from '@/common/task-dialog/store';

const store = createStore({
  modules: {
    taskDialogStore
  }
})

export default store;