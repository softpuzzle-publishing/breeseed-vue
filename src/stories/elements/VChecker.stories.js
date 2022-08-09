import VChecker from "../../templates/elements/VChecker.vue";
import { CheckerHelper } from "@/utils/ui_helper";

export default {
  title: "Elements/Checker",
  component: VChecker,
  argTypes: {
    type: {
      control: { type: "inline-radio" },
      options: ["checkbox", "radio"]
    },
    position: {
      control: { type: "inline-radio" },
      options: ["start", "end"]
    },
    shape: {
      control: { type: "inline-radio" },
      options: ["circle", "square"]
    },
    size: {
      control: { type: "inline-radio" },
      options: ["medium", "large"]
    }
  }
};

const Template = args => ({
  components: { VChecker },

  setup() {
    const HelperInstance = new CheckerHelper({ type: args.type });

    return { args, HelperInstance };
  },
  template: `
    <VChecker id="default" v-bind="args" v-model="HelperInstance.refVal.value" />

    <hr class="storybook-hr" />

    value: {{HelperInstance.refVal.value}}
  `
});
export const Default = Template.bind({});
Default.args = {};

export const Checkbox = args => ({
  components: { VChecker },

  setup() {
    const HelperInstance = new CheckerHelper({});

    return { HelperInstance };
  },
  template: `
    <VChecker type="checkbox" id="testCheckbox" label="Label" shape="circle" v-model="HelperInstance.refVal.value" />
    
    <hr class="storybook-hr" />
    
    value: {{HelperInstance.refVal.value}}
  `
});

export const GroupingCheckboxes = args => ({
  components: { VChecker },
  setup() {
    const HelperInstance = new CheckerHelper({ group: "names" });

    return {
      HelperInstance
    };
  },
  template: `
    <VChecker :type="HelperInstance.type" :group="HelperInstance.group" id="Jack" value="Jack" label="Jack" shape="circle" v-model="HelperInstance.refVal.value" />
    <VChecker :type="HelperInstance.type" :group="HelperInstance.group" id="John" value="John" label="John" shape="circle" v-model="HelperInstance.refVal.value" />
    <VChecker :type="HelperInstance.type" :group="HelperInstance.group" id="Mike" value="Mike" label="Mike" shape="circle" v-model="HelperInstance.refVal.value" />
    
    <hr class="storybook-hr" />
    
    values: {{HelperInstance.refVal.value}}
  `
});

export const GroupingRadios = args => ({
  components: { VChecker },
  setup() {
    const HelperInstance = new CheckerHelper({
      type: "radio",
      group: "radio-group"
    });

    return {
      HelperInstance
    };
  },
  template: `
    <VChecker :type="HelperInstance.type" :group="HelperInstance.group" id="radio0" value="true" label="true" shape="circle" v-model="HelperInstance.refVal.value" />
    <VChecker :type="HelperInstance.type" :group="HelperInstance.group" id="radio1" value="false" label="false" shape="circle" v-model="HelperInstance.refVal.value" />
    
    <hr class="storybook-hr" />

    value: {{HelperInstance.refVal.value}}
  `
});

export const Shape = args => ({
  components: { VChecker },
  template: `
    <VChecker id="circle" shape="circle" />
    <hr class="storybook-hr" />
    <VChecker id="square" shape="square" />
  `
});

export const Size = args => ({
  components: { VChecker },
  template: `
    <VChecker id="size-medium" label="만 14세 미만은 서비스를 이용할 수 없습니다." />
    <hr class="storybook-hr" />
    <VChecker id="size-large" label="만 14세 미만은 서비스를 이용할 수 없습니다." size="large" />
  `
});

export const CheckboxPosition = args => ({
  components: { VChecker },
  template: `
    <VChecker id="position-start" label="만 14세 미만은 서비스를 이용할 수 없습니다." />
    <hr class="storybook-hr" />
    <VChecker id="position-end" label="만 14세 미만은 서비스를 이용할 수 없습니다." position="end" />
  `
});

export const TitleSubText = args => ({
  components: { VChecker },
  template: `
    <VChecker id="title-sub" tit="근력운동" sub="10분" position="end" />
  `
});

export const VerticalTitleSubText = args => ({
  components: { VChecker },
  template: `
    <VChecker id="title-sub" tit="근력운동" sub="10분" position="end" direction="vertical" size="large" />
  `
});
