import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; 

// === Thêm các thư viện Bootstrap 4 và Font Awesome ===
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createApp(App).use(router).mount("#app");
