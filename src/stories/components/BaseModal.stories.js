import BaseModal from "@/templates/components/BaseModal";
import VButton from "@/templates/elements/VButton";
import { ModalHelper } from "@/utils/ui_helper";

export default {
  title: "Components/Modal",
  component: BaseModal
};

const Template = args => ({
  components: { BaseModal, VButton },

  setup() {
    const HelperInstance = new ModalHelper({});

    return {
      HelperInstance
    };
  },
  template: `
    <VButton @click="HelperInstance.toggleModal">모달창</VButton>
    <BaseModal 
      :show="HelperInstance.isOpen.value" 
      @confirmModal="HelperInstance.toggleModal"
      @closeModal="HelperInstance.toggleModal"
    >Contents</BaseModal>
  `
});

export const Default = Template.bind({});
Default.args = {};

export const Alert = () => ({
  components: { BaseModal, VButton },

  setup() {
    const HelperInstance = new ModalHelper({});

    return {
      HelperInstance
    };
  },
  template: `
    <VButton @click="HelperInstance.toggleModal">얼럿창</VButton>
    <BaseModal 
      type="alert"
      :show="HelperInstance.isOpen.value" 
      @confirmModal="HelperInstance.toggleModal"
      @closeModal="HelperInstance.toggleModal"
    >Alert 메시지</BaseModal>
  `
});

export const Full = () => ({
  components: { BaseModal, VButton },

  setup() {
    const HelperInstance = new ModalHelper({});

    return {
      HelperInstance
    };
  },
  template: `
    <VButton @click="HelperInstance.toggleModal">전체화면</VButton>
    <BaseModal 
      type="full"
      title="title"
      :show="HelperInstance.isOpen.value" 
      @confirmModal="HelperInstance.toggleModal"
      @closeModal="HelperInstance.toggleModal"
    >Contents</BaseModal>
  `
});
