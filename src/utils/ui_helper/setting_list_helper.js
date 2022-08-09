import CheckerHelper from "@/utils/ui_helper/checker_helper";

class SettingListHelper extends CheckerHelper {
  constructor({ type = "checkbox", id, group, value }) {
    super({ type, id, group });
    this.value = value;
  }

  setItems(items) {
    return items;
  }
}

export default SettingListHelper;
