import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from "./router/index"
import mitt from "mitt";
import http from "./services/service.config"
const eventBus = mitt();
const app = createApp(App);
app.config.globalProperties.eventBus = eventBus;
app.config.globalProperties.imgURL = http.defaults.baseURL.replace("/api","");
installElementPlus(app);
app.use(router);
app.mount('#app');