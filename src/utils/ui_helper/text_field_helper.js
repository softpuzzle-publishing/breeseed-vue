import DataHelper from "@/utils/ui_helper/data_helper";

class TextFieldHelper extends DataHelper {
  constructor({ type = "text", group }) {
    super({ type, group });

    this.type = type == "id" ? "text" : type || "text";
    this.pattern = initialPattern(type);

    function initialPattern(type) {
      switch (type) {
        case "id":
          return "^([a-z0-9_]){6,50}$";
        case "password":
          return "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=[]{}~?:;`|/]).{6,50}$";
        case "tel":
          return "^[0-9]+$";
        default:
          return "";
      }
    }
  }
}

export default TextFieldHelper;
