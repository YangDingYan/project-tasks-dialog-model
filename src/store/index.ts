import Vue from 'vue'
import Vuex from 'vuex'
import taskDialogStore from '@/common/task-dialog/store'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    taskDialogStore
  }
})
