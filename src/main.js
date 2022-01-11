import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from "./router/index"
import mitt from "mitt";

const eventBus = mitt();
const app = createApp(App);
app.config.globalProperties.eventBus = eventBus;

installElementPlus(app);
app.use(router);
app.mount('#app');