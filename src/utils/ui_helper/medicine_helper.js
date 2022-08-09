import CheckerHelper from "@/utils/ui_helper/checker_helper";

class MedicineHelper extends CheckerHelper {
  constructor({ type = "checkbox", id, group }) {
    super({ type, id, group });
  }

  modifySchedule(medicine) {
    alert(medicine);
  }
}

export default MedicineHelper;
