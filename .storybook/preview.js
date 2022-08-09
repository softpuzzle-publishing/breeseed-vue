import { app } from '@storybook/vue3';
import router from '@/router.js'
import { CommonStore } from '@/store/common_store'
import mitt from 'mitt'
import { SetupCalendar } from 'v-calendar';
import globalMixin from '@/mixins/global'
import ResourceManager from "@/plugins/resource_manager";
import '/src/assets/styles/site.scss'

const store = CommonStore
const emitter = mitt();

app.use(store)
app.use(router)
app.mixin(globalMixin)
app.use(SetupCalendar, {})

global.env = process.env;
app.config.globalProperties.emitter = emitter
app.config.globalProperties.global = global
app.config.globalProperties.resourceManager = ResourceManager;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
