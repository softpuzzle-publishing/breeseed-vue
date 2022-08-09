import CheckerHelper from "@/utils/ui_helper/checker_helper";

class ChipHelper extends CheckerHelper {
  constructor({
    type = "checkbox",
    group,
    shape,
    size,
    basicColor,
    activeColor
  }) {
    super({ type, group });
    this.shape = shape;
    this.size = size;
    this.basicColor = basicColor;
    this.activeColor = activeColor;
  }
}

export default ChipHelper;
