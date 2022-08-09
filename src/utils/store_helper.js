/**
 * Author:			Hyemin Kang, Medi Plus Solution
 * Project Name:	secondwindfrontendtest
 * Create date:		2022/04/06
 * Last Modified:	2022/04/06
 * Description: vuex Store 사용 helper, 여러 컴포넌트에서 store 사용이 쉽게 정리
 *
 * @ignore
 */
"use strict";

import { computed } from "vue";
import { useStore } from "vuex";

const StoreHelper = () => {
  const store = useStore();

  // const headerTitle = computed(() => { return store.state.headerTitle; });
  // const setHeaderTitle = ( newTitle ) => store.commit('setHeaderTitle', newTitle );
  const headerObject = computed(() => {
    return {
      headerType: store.state.headerType,
      headerTitle: store.state.headerTitle,
      headerButtons: store.state.headerButtons
    };
  });
  const setHeader = newHeader => store.commit("setHeader", newHeader);

  return {
    headerObject,
    setHeader
  };
};

export default StoreHelper;
