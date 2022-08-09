import { ref } from "vue";
import CommonHelper from "@/utils/ui_helper/common_helper";

class ModalHelper extends CommonHelper {
  constructor({ type, group }) {
    super({ type, group });
    this.isOpen = false;
  }

  get isOpen() {
    return this._isOpen;
  }
  set isOpen(value) {
    this._isOpen = ref(value);
  }

  toggleModal = () => (this.isOpen.value = !this.isOpen.value);
  openModal = () => (this.isOpen.value = true);
  closeModal = () => (this.isOpen.value = false);
}

export default ModalHelper;
