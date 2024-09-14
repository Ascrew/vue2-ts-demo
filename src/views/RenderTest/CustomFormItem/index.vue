<!--
 * @Date: 2024-09-05 09:57:45
 * @LastEditors: Please set LastEditors
 * @Description: form item render
 * @FilePath: src/views/ Test/CustomFormItem/index,.vue
-->
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  name: 'CustomFormItem'
})
export default class extends Vue {
  @Prop({ default: '' })
  test!: string;

  public render() {
    debugger;
    return this.$createElement('el-input', {
      attrs: {
        disabled: false,
        placeholder: this.test
      },
      props: {
        value: ''
      },
      on: {
        input: (val: string) => {
          this.$emit('input', val);
        }
      }
    });
  }
}
</script>
