import DataHelper from "@/utils/ui_helper/data_helper";

class SwiperTabHelper extends DataHelper {
  constructor({ type, slidesPerView }) {
    super({ type });
    this.slidesPerView = slidesPerView;
  }

  getSwiper = swiper => {
    this.swiper = swiper;
  };
}

export default SwiperTabHelper;
