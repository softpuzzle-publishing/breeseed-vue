import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import globalMixin from "./mixins/global";
import mitt from "mitt";
import { SetupCalendar } from "v-calendar";
import ResourceManager from "@/plugins/resource_manager";

const emitter = mitt();
const app = createApp(App).directive("hoist", el => {
  if (!el) {
    return;
  }

  const content = el.tagName === "TEMPLATE" ? el.content : el;
  if (content.children.length === 1) {
    [...el.attributes].forEach(attr =>
      content.firstChild.setAttribute(attr.name, attr.value)
    );
  }

  if (el.tagName === "TEMPLATE") {
    el.replaceWith(el.content);
  } else {
    el.replaceWith(...el.children);
  }
});

app.mixin(globalMixin);
app.use(SetupCalendar, {});

global.env = process.env;
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.global = global;
app.config.globalProperties.resourceManager = ResourceManager;

app.use(router).mount("#app");
