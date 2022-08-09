import BaseChipList from "@/templates/components/BaseChipList";
import { ChipListHelper } from "@/utils/ui_helper";

export default {
  title: "Components/ChipList",
  component: BaseChipList
};

const Template = args => ({
  components: { BaseChipList },

  setup() {
    const HelperInstance = new ChipListHelper({
      type: "checkbox",
      group: "default",
      shape: "rounded",
      size: "small",
      basicColor: "week",
      activeColor: "primary"
    });

    return {
      HelperInstance
    };
  },
  template: `
    <BaseChipList 
      type="checkbox" group="default" shape="rounded" size="small"
      basic-color="week"
      active-color="primary"
      :items="HelperInstance.setItems([{
        label: 'label',
        value: '0'
      }, 2, {
        label: 'label'
      }])"
      v-model="HelperInstance.refVal.value"
    />
    
    <hr class="storybook-hr" />
    
    {{HelperInstance.refVal.value}}
  `
});
export const Default = Template.bind({});
Default.args = {};
