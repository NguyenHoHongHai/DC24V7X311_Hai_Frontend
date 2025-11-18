import { createWebHistory, createRouter } from "vue-router";

// Import các trang (views)
import ContactBook from "@/views/ContactBook.vue";
import ContactAdd from "@/views/ContactAdd.vue";
import ContactEdit from "@/views/ContactEdit.vue";

const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },

  {
    path: "/add",
    name: "contact.add",
    component: ContactAdd,
  },

  {
    path: "/contacts/:id",
    name: "contact.edit",
    component: ContactEdit,
    props: true, // cho phép truyền params vào component
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
