import VSelectBox from "../../templates/elements/VSelectBox";
import { SelectBoxHelper } from "@/utils/ui_helper";

export default {
  title: "Elements/SelectBox",
  component: VSelectBox,
  argTypes: {
    type: {
      control: { type: "select" },
      options: [undefined, "select-modal"]
    },
    color: {
      control: { type: "select" },
      options: [undefined, "primary", "week"]
    },
    readonly: {
      control: { type: "boolean" }
    }
  }
};

const Template = args => ({
  components: { VSelectBox },

  setup() {
    const HelperInstance = new SelectBoxHelper({
      type: args.type,
      group: "default"
    });
    HelperInstance.refVal.value = 3;

    return {
      args,
      HelperInstance
    };
  },
  template: `
    <VSelectBox :color="args.color" :type="HelperInstance.type" :group="HelperInstance.group" :readonly="args.readonly" hints="placeholder" :items="HelperInstance.setItems([{
      label: 'value0value0value0value0value0value0value0value0value0value0value0',
      value: 0,
    }, 1, 2, 3, 4, 5, 6, {
      value: 7,
    }, 8, 9, 10])" v-model="HelperInstance.refVal.value" />
    
    <hr class="storybook-hr" />

    selected value: {{HelperInstance.refVal.value}}
  `
});
export const Default = Template.bind({});
Default.args = {};
