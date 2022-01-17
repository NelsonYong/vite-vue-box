import { createApp } from 'vue';
import App from './App.vue';
import { setupGlobDirectives } from './directives';
import { routers } from './routers';
// import Vant from 'vant';
// import 'vant/lib/index.css';
import store from './store';

const app = createApp(App);

app.use(routers);
app.use(store);
// app.use(Vant);

setupGlobDirectives(app);

// 挂载应用
app.mount('#app');
