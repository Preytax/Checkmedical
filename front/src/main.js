import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* Vendor CSS Files */
import "@/assets/vendor/fontawesome-free/css/all.min.css";
import "@/assets/vendor/animate.css/animate.min.css";
import "@/assets/vendor/bootstrap/css/bootstrap.min.css";
import "@/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "@/assets/vendor/boxicons/css/boxicons.min.css";
import "@/assets/vendor/glightbox/css/glightbox.min.css";
import "@/assets/vendor/remixicon/remixicon.css";
import "@/assets/vendor/swiper/swiper-bundle.min.css";

/* Template Main CSS File */
import "@/assets/css/style.css";

createApp(App).use(router).mount('#app')
