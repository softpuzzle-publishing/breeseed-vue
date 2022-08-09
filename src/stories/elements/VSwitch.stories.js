import VSwitch from "@/templates/elements/VSwitch";
import { SwitchHelper } from "../../utils/ui_helper";

export default {
  title: "Elements/Switch",
  component: VSwitch
};

const Template = args => ({
  components: { VSwitch },
  setup() {
    const HelperInstance = new SwitchHelper({});

    return { args, HelperInstance };
  },
  template: `
    <VSwitch v-bind="args" id="default" v-model="HelperInstance.refVal.value" />
    
    <hr class="storybook-hr" />
    
    value: {{HelperInstance.refVal.value}}
  `
});
export const Default = Template.bind({});
Default.args = {};
