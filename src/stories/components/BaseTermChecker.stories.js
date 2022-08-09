import BaseTermChecker from "@/templates/components/BaseTermsForm";

import termsOfUse from "@/data/terms-of-use.html";
import termsOfPersonal from "@/data/terms-of-personal.html";
import { TermsFormHelper } from "@/utils/ui_helper";

export default {
  title: "Components/Term Checker",
  component: BaseTermChecker,
  argType: {
    required: {
      control: { type: "boolean" }
    }
  }
};

const Template = args => ({
  components: { BaseTermChecker },

  setup() {
    const HelperInstance = new TermsFormHelper({ html: termsOfUse });

    return {
      args,
      HelperInstance
    };
  },
  template: `
    <BaseTermChecker id="default" title="서비스 이용약관" :termsHTML="HelperInstance.html" :required="args.required" v-model="HelperInstance.refVal.value" style="height:300px;"  />
    
    <hr class="storybook-hr" />
    
    apply: {{HelperInstance.refVal.value}}
  `
});
export const Default = Template.bind({});
Default.args = {};

export const Grouping = () => ({
  components: { BaseTermChecker },

  setup() {
    const HelperInstance = new TermsFormHelper({
      id: ["applyTermsOfUse", "applyTermsOfPersonal"],
      group: "grouping",
      html: { termsOfUse, termsOfPersonal }
    });

    return {
      HelperInstance
    };
  },
  template: `
    <BaseTermChecker :id="HelperInstance.id[0]" :group="HelperInstance.group" title="서비스 이용약관" :termsHTML="HelperInstance.html.termsOfUse" :required="true" value="a" v-model="HelperInstance.refVal.value" style="height:300px;"  />
    <BaseTermChecker :id="HelperInstance.id[1]" :group="HelperInstance.group" title="개인정보 수집/이용 동의" :termsHTML="HelperInstance.html.termsOfPersonal" value="b" v-model="HelperInstance.refVal.value" style="height:300px;margin-top:30px;"  />

    <hr class="storybook-hr" />

    apply: {{HelperInstance.refVal.value}}
  `
});
