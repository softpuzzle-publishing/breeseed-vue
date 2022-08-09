import DataHelper from "@/utils/ui_helper/data_helper";

class SelectBoxHelper extends DataHelper {
  constructor({ type = "select-box", group }) {
    super({ type, group });
  }
}

export default SelectBoxHelper;
