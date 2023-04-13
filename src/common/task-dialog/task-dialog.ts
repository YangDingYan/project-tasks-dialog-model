import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapActions, mapState } from 'vuex';
import { CLOSE_TASK, OPEN_TASK } from "./constants/operates-type";

@Component({
  name: "task-dialog",
  components: {
    TaskDialog
  },
  methods: {
    ...mapActions("taskDialogStore", [OPEN_TASK, CLOSE_TASK]),
  }
})
export default class TaskDialog extends Vue {
  @Prop() private msg!: string;

  @Prop({ default: false }) 
  dialogVisible!: boolean;
}