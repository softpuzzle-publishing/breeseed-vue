import VButton from "../../templates/elements/VButton.vue";

export default {
  title: "Elements/Button",
  component: VButton,
  argTypes: {
    // onClick: {},
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"]
    },
    shape: {
      control: { type: "select" },
      options: ["square", "rounded"]
    },
    color: {
      control: { type: "select" },
      options: ["", "primary", "primary-border", "dark", "grey", "week"]
    }
  }
};

const Template = args => ({
  components: { VButton },
  setup() {
    return { args };
  },
  template: `
    <VButton v-bind="(function(){
      delete args.slotcontent
      return args;
    })()">${args.slotcontent}</VButton>
  `
});
export const Default = Template.bind({});
Default.args = {
  slotcontent: `Button`
};

export const Size = args => ({
  components: { VButton },
  template: `
    <VButton size="large">Large</VButton>
    <hr class="storybook-hr" />
    <VButton size="medium">Medium</VButton>
    <hr class="storybook-hr" />
    <VButton size="small">Small</VButton>
    <hr class="storybook-hr" />
    <VButton size="extra-small">Extra Small</VButton>
  `
});

export const Color = args => ({
  components: { VButton },
  template: `
    <VButton>Default</VButton>
    <hr class="storybook-hr" />
    <VButton color="primary">Primary</VButton>
    <hr class="storybook-hr" />
    <VButton color="dark">Dark</VButton>
    <hr class="storybook-hr" />
    <VButton color="grey">Grey</VButton>
  `
});

export const CustomizedStyles = args => ({
  components: { VButton },
  template: `
    <VButton color="primary" style="width:100%;height:27px;font-size:12px;font-weight:normal;">customized styles</VButton>
  `
});
