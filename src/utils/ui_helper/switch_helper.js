import CheckerHelper from "@/utils/ui_helper/checker_helper";

class SwitchHelper extends CheckerHelper {
  constructor({ type = "checkbox", group }) {
    super({ type, group });
  }
}

export default SwitchHelper;
