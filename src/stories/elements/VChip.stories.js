import VChip from "../../templates/elements/VChip.vue";
import { ChipHelper } from "@/utils/ui_helper";

export default {
  title: "Elements/Chip",
  component: VChip,
  argTypes: {
    type: {
      control: { type: "select" },
      options: [undefined, "checkbox", "radio"]
    },
    shape: {
      control: { type: "inline-radio" },
      options: ["rounded", "square"]
    },
    size: {
      control: { type: "select" },
      options: ["extra-small", "small", "medium", "large"]
    },
    basicColor: {
      control: { type: "select" },
      options: [undefined, "primary", "warning", "dark", "grey", "week"]
    },
    activeColor: {
      control: { type: "select" },
      options: [undefined, "primary", "warning", "dark", "grey", "week"]
    }
  }
};

const Template = args => ({
  components: { VChip },
  setup() {
    return { args };
  },
  template: '<VChip id="chip" v-bind="args" />'
});
export const Default = Template.bind({});
Default.args = {
  label: "label"
};

export const Label = args => ({
  components: { VChip },

  template: `
    <VChip id="checkbox" label="Label" size="medium" basic-color="grey" />
  `
});

export const CheckboxButton = args => ({
  components: { VChip },

  setup() {
    const HelperInstance = new ChipHelper({
      size: "medium",
      basicColor: "grey",
      activeColor: "primary"
    });
    HelperInstance.refVal.value = true;

    return { HelperInstance };
  },
  template: `
    <VChip :type="HelperInstance.type" id="checkbox" label="chip0" :size="HelperInstance.size" :basic-color="HelperInstance.basicColor" :active-color="HelperInstance.activeColor" v-model="HelperInstance.refVal.value" />
    
    <hr class="storybook-hr" />
    
    value: {{ HelperInstance.refVal.value }}
  `
});

export const GroupingCheckboxButtons = args => ({
  components: { VChip },

  setup() {
    const HelperInstance = new ChipHelper({ group: "checkboxes" });
    HelperInstance.refVal.value = ["chip1"];

    return { HelperInstance };
  },
  template: `
    <VChip :type="HelperInstance.type" :group="HelperInstance.group" id="checkboxes0" value="chip0" label="chip0" size="medium" basic-color="grey" active-color="primary" v-model="HelperInstance.refVal.value" />
    <VChip :type="HelperInstance.type" :group="HelperInstance.group" id="checkboxes1" value="chip1" label="chip1" size="medium" basic-color="grey" active-color="primary" v-model="HelperInstance.refVal.value" />
    <VChip :type="HelperInstance.type" :group="HelperInstance.group" id="checkboxes2" value="chip2" label="chip2" size="medium" basic-color="grey" active-color="primary" v-model="HelperInstance.refVal.value" />
    
    <hr class="storybook-hr" />
    
    values: {{ HelperInstance.refVal.value }}
  `
});

export const radioButton = args => ({
  components: { VChip },

  setup() {
    const HelperInstance = new ChipHelper({ type: "radio" });

    return { HelperInstance };
  },
  template: `
    <VChip :type="HelperInstance.type" id="radio" value="chip0" label="chip0" size="medium" basic-color="grey" active-color="primary" v-model="HelperInstance.refVal.value" />
    
    <hr class="storybook-hr" />
    
    value: {{ HelperInstance.refVal.value }}
  `
});

export const GroupingRadioButtons = args => ({
  components: { VChip },

  setup() {
    const HelperInstance = new ChipHelper({ type: "radio", group: "radios" });

    return { HelperInstance };
  },
  template: `
    <VChip :type="HelperInstance.type" :group="HelperInstance.group" id="radios0" value="chip0" label="chip0" size="medium" basic-color="grey" active-color="primary" v-model="HelperInstance.refVal.value" />
    <VChip :type="HelperInstance.type" :group="HelperInstance.group" id="radios1" value="chip1" label="chip1" size="medium" basic-color="grey" active-color="primary" v-model="HelperInstance.refVal.value" />
    <VChip :type="HelperInstance.type" :group="HelperInstance.group" id="radios2" value="chip2" label="chip2" size="medium" basic-color="grey" active-color="primary" v-model="HelperInstance.refVal.value" />
    
    <hr class="storybook-hr" />
    
    value: {{ HelperInstance.refVal.value }}
  `
});

export const Shape = args => ({
  components: { VChip },

  template: `
    <VChip id="checkbox" label="Label" shape="rounded" />

    <hr class="storybook-hr" />

    <VChip id="checkbox" label="Label" shape="square" />

  `
});

export const Size = args => ({
  components: { VChip },

  template: `
    <VChip id="checkbox" label="Label" size="small" />

    <hr class="storybook-hr" />

    <VChip id="checkbox" label="Label" size="medium" />

    <hr class="storybook-hr" />

    <VChip id="checkbox" label="Label" size="large" />
  `
});

export const Color = args => ({
  components: { VChip },

  template: `
    <VChip id="checkbox" label="Label" color="medium" basic-color="default" />

    <hr class="storybook-hr" />
    
    <VChip id="checkbox" label="Label" color="medium" basic-color="primary" />

    <hr class="storybook-hr" />

    <VChip id="checkbox" label="Label" color="medium" basic-color="dark" />

    <hr class="storybook-hr" />

    <VChip id="checkbox" label="Label" color="medium" basic-color="grey" />

    <hr class="storybook-hr" />

    <VChip id="checkbox" label="Label" color="medium" basic-color="week" />
  `
});
