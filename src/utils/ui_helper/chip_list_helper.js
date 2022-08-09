import ChipHelper from "@/utils/ui_helper/chip_helper";

class ChipListHelper extends ChipHelper {
  constructor({
    type = "checkbox",
    group,
    shape,
    size,
    basicColor,
    activeColor
  }) {
    super({ type, group, shape, size, basicColor, activeColor });
  }
}

export default ChipListHelper;
