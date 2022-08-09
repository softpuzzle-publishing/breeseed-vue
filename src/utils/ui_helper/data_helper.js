import { ref } from "vue";
import CommonHelper from "@/utils/ui_helper/common_helper";

class DataHelper extends CommonHelper {
  constructor({ type, group }) {
    super({ type, group });
    this.refVal = initialValue({ type: this.type, group: this.group });

    function initialValue({ type, group }) {
      switch (type) {
        case "day-picker":
          return (() => {
            const date = new Date();
            const year = date.getFullYear();
            const month = ("0" + (1 + date.getMonth())).slice(-2);
            const day = ("0" + date.getDate()).slice(-2);

            return year + month + day;
          })();
        case "select-box":
        case "select-modal":
          return "";
        case "checkbox":
          return group ? [] : false;
        case "AM/PM":
        case "TwentyFourHour":
        case "board-img-list":
          return [];
        case "radio":
          return "";
        default:
          return null;
      }
    }
  }

  get refVal() {
    return this._refVal;
  }
  set refVal(value) {
    this._refVal = ref(value);
  }

  setItems(items) {
    let redefinition = [];

    items.forEach(function(item, index) {
      let label, tit, sub, value;

      if (typeof item == "object") {
        label = item.label || item.tit || item.value;
        tit = item.tit || "";
        sub = item.sub || "";
        value =
          item.value || item.value === 0 ? item.value : item.label || item.tit;
      } else {
        label = item;
        tit = undefined;
        sub = undefined;
        value = item;
      }

      redefinition[index] = { label, tit, sub, value };
    });

    return redefinition;
  }

  // setMultiItems (items) {
  //   items.forEach(function (item, index) {
  //     let label, tit, sub, value;
  //
  //     if(typeof(item)=='object') {
  //       label = item.label || item.tit || item.value
  //       tit = item.tit || item.label || item.value || ''
  //       sub = item.sub || ''
  //       value = (item.value || item.value===0) ? item.value : (item.label || item.tit)
  //     } else {
  //       label = item;
  //       tit = item;
  //       value = item;
  //     }
  //
  //     items[index] = {label, tit, sub, value}
  //   })
  //
  //   return items
  // }

  setValue = value => (this.refVal.value = value);
}

export default DataHelper;
