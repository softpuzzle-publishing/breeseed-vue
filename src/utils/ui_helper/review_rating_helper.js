import CheckerHelper from "@/utils/ui_helper/checker_helper";

class ReviewRatingHelper extends CheckerHelper {
  constructor({ type = "radio", group }) {
    super({ type, group });
  }
}

export default ReviewRatingHelper;
