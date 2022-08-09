import BaseCheckerList from "@/templates/components/BaseCheckerList";
import { CheckerListHelper } from "@/utils/ui_helper";

export default {
  title: "Components/Checker List",
  component: BaseCheckerList
};

const Template = args => ({
  components: { BaseCheckerList },

  setup() {
    const HelperInstance = new CheckerListHelper({ group: "default" });

    HelperInstance.refVal.value = [3];

    return {
      HelperInstance
    };
  },
  template: `
    <BaseCheckerList :type="HelperInstance.type" :group="HelperInstance.group" :items="HelperInstance.setItems([{
      label: 'value0value0value0value0value0value0value0value0value0value0value0',
      value: 0,
    }, 1, {
      value: 2,
    }, 3, {
      tit: 'title',
      sub: 'sub',
      value: 4,
    }, {
      tit: 'title',
      sub: 'sub',
    }])" v-model="HelperInstance.refVal.value" />
    
    <hr class="storybook-hr" />
    
    values: {{HelperInstance.refVal.value}}
  `
});
export const Default = Template.bind({});
Default.args = {};

export const RadioList = () => ({
  components: { BaseCheckerList },

  setup() {
    const HelperInstance = new CheckerListHelper({
      type: "radio",
      group: "radio-list"
    });

    return {
      HelperInstance
    };
  },
  template: `
    <BaseCheckerList :type="HelperInstance.type" :group="HelperInstance.group" :items="HelperInstance.setItems([{
      label: 'value0value0value0value0value0value0value0value0value0value0value0',
      value: 0,
    }, 1, {
      value: 2,
    }, 3])" v-model="HelperInstance.refVal.value" />
    
    <hr class="storybook-hr" />
    
    values: {{HelperInstance.refVal.value}}
  `
});

export const CheckboxList = () => ({
  components: { BaseCheckerList },

  setup() {
    const HelperInstance = new CheckerListHelper({
      type: "checkbox",
      group: "checkbox-list"
    });

    return {
      HelperInstance
    };
  },
  template: `
    <BaseCheckerList :type="HelperInstance.type" :group="HelperInstance.group" :items="HelperInstance.setItems([{
      label: 'value0value0value0value0value0value0value0value0value0value0value0',
      value: 0,
    }, 1, {
      value: 2,
    }, 3])" v-model="HelperInstance.refVal.value" />
    
    <hr class="storybook-hr" />
    
    values: {{HelperInstance.refVal.value}}
  `
});
