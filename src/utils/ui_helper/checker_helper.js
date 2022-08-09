import DataHelper from "@/utils/ui_helper/data_helper";

class CheckerHelper extends DataHelper {
  constructor({ type = "checkbox", id, group }) {
    super({ type, group });
    this.id = id;
  }
}

export default CheckerHelper;
