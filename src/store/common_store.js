/**
 * Author:			Hyemin Kang, Medi Plus Solution
 * Project Name:	secondwindfrontendtest
 * Create date:		2022/04/01
 * Last Modified:	2022/04/01
 * Description: vuex Store 생성, 앱 전역에서 관리할 데이터 관리 plugin
 *
 * @ignore
 */
"use strict";

import { createStore } from "vuex";

/*
state: 앱 전역에서 공통으로 관리할 데이터 정의
mutations: state에 정의한 데이터 핸들링 ( sync )
actions: state에 정의한 데이터 핸들링 ( async )
 */
import HeaderMain from "@/templates/layouts/HeaderMain";
import HeaderSub from "@/templates/layouts/HeaderSub";
import { markRaw } from "vue";

const CommonStore = createStore({
  state() {
    return {
      headerType: undefined,
      headerTitle: undefined,
      headerButtons: undefined
    };
  },
  getters: {
    getHeaderTitle: state => {
      return state.headerTitle;
    },
    getHeader: state => {
      return {
        headerType: state.headerType,
        headerTitle: state.headerTitle,
        headerButtons: state.headerButtons
      };
    }
  },
  mutations: {
    setHeaderTitle: (state, newTitle) => {
      console.log(
        "store setHeaderTitle old: " + state.headerTitle + " new:" + newTitle
      );
      state.headerTitle = newTitle;
    },
    setHeader: (state, newHeader) => {
      state.headerType = (function() {
        switch (newHeader.headerType) {
          case "MainHeader":
            return markRaw(HeaderMain);
          case "SubHeader":
            return markRaw(HeaderSub);
          default:
            return undefined;
        }
      })();
      state.headerTitle = newHeader.headerTitle;
      state.headerButtons = newHeader.headerButtons;
    }
  }
});

export { CommonStore };
