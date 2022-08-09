/**
 * Author:            Hyemin Kang, Medi Plus Solution
 * Project Name:    secondwindfrontendtest
 * Create date:        2022/06/22
 * Last Modified:    2022/06/22
 * Description: 리소스 관리를 위한 함수 정리 ( static style 로 사용하기 위해서 object 로 생성 )
 *
 * @ignore
 */
"use strict";

const ResourceManager = {
  getIMG: fileUrl => {
    return require(process.env.VUE_APP_IMG_PATH + fileUrl);
  },
  getAniJson: fileUrl => {
    return require(process.env.VUE_APP_ANI_PATH + fileUrl);
  }
};

module.exports = ResourceManager;
