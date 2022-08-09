import CommonHelper from "@/utils/ui_helper/common_helper";

class RankListHelper extends CommonHelper {
  constructor({ type, group }) {
    super({ type, group });
  }

  setItems(items) {
    items.forEach(function(item, index) {
      let tit, num;

      tit = item.tit || "";
      num = item.num || "";

      items[index] = { tit, num };
    });

    return items;
  }
}

export default RankListHelper;
