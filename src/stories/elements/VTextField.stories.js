import VTextField from "../../templates/elements/VTextField.vue";
import { TextFieldHelper } from "@/utils/ui_helper";

export default {
  title: "Elements/Text Field",
  component: VTextField,
  argTypes: {
    type: {
      control: { type: "select" },
      options: [
        "text",
        "id",
        "password",
        "search",
        "tel",
        "email",
        "number",
        "url",
        "textarea"
      ]
    },
    color: {
      control: { type: "select" },
      options: [undefined, "primary", "week"]
    },
    size: {
      control: { type: "select" },
      options: [undefined, "small", "medium", "large"]
    },
    hints: "placeholder",
    readonly: {
      control: { type: "boolean" }
    }
  }
};

const Template = args => ({
  components: { VTextField },

  setup() {
    const HelperInstance = new TextFieldHelper({ type: args.type });

    return {
      args,
      HelperInstance
    };
  },
  template: `
    <VTextField v-bind="args" :type="HelperInstance.type" :pattern="HelperInstance.pattern" v-model="HelperInstance.refVal.value" />
    
    <hr class="storybook-hr" />
    
    message: {{ HelperInstance.refVal.value }} <br />
    pattern: {{ HelperInstance.pattern }}
  `
});
export const Default = Template.bind({});
Default.args = {};

export const Color_and_Readonly = () => ({
  components: { VTextField },

  setup() {
    const HelperInstance = new TextFieldHelper({});
    HelperInstance.refVal.value = "readonly message";

    return {
      HelperInstance
    };
  },
  template: `
    <VTextField v-model="HelperInstance.refVal.value" :readonly="true" />
    
    <hr class="storybook-hr" />
    
    <VTextField color="primary" v-model="HelperInstance.refVal.value" :readonly="true" />
  `
});

export const Unit = () => ({
  components: { VTextField },
  template: `
    <VTextField unit="cm" />

    <hr class="storybook-hr" />

    <VTextField unit="mg/dL" />

    <hr class="storybook-hr" />

    <VTextField unit="°C" />

    <hr class="storybook-hr" />

    <VTextField unit="search" />
  `
});

export const Size = () => ({
  components: { VTextField },
  template: `
    <VTextField size="large" />
    
    <hr class="storybook-hr" />
    
    <VTextField size="medium" />
    
    <hr class="storybook-hr" />
    
    <VTextField size="small" />
  `
});
