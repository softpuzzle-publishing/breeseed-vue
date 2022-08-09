import CheckerHelper from "@/utils/ui_helper/checker_helper";

class CheckerListHelper extends CheckerHelper {
  constructor({ type = "checkbox", group }) {
    super({ type, group });
  }
}

export default CheckerListHelper;
