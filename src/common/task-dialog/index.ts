import { defineComponent } from "vue";

export default defineComponent({
  name: "task-dialog",
  props: {
    dialogVisible: { type: Boolean, default:() => false }
  },
  mounted() {
    console.log('eee')
  }
})