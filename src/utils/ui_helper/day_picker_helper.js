import DataHelper from "@/utils/ui_helper/data_helper";

class DatePickerHelper extends DataHelper {
  constructor({ type = "day-picker", group }) {
    super({ type, group });
  }
}

export default DatePickerHelper;
