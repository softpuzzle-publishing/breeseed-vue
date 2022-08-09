import CheckerHelper from "@/utils/ui_helper/checker_helper";

class TermsFormHelper extends CheckerHelper {
  constructor({ type = "checkbox", id, group, html }) {
    super({ type, id, group });
    this.html = html;
  }
}

export default TermsFormHelper;
