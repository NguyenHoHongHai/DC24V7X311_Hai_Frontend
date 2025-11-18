<template>
  <div class="page">
    <h4 class="mb-3 text-success">
      <i class="fas fa-user-plus"></i> Thêm Liên hệ
    </h4>

    <!-- Dùng lại ContactForm -->
    <ContactForm
      :contact="contact"
      @submit:contact="addContact"
    />

    <p class="text-success mt-2">{{ message }}</p>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
  components: {
    ContactForm,
  },

  data() {
    return {
      contact: {
        name: "",
        email: "",
        address: "",
        phone: "",
        gender: "",
        hobbies: [],
        skills: [],
        maritalStatus: "",
        favorite: false,
      },
      message: "",
    };
  },

  methods: {
    async addContact(data) {
      try {
        await ContactService.create(data);
        alert("Thêm mới liên hệ thành công!");
        this.$router.push({ name: "contactbook" });
      } catch (error) {
        console.error(error);
        alert("Lỗi khi thêm liên hệ!");
      }
    },
  },
};
</script>

<style scoped>
.page {
  max-width: 600px;
  margin: 20px auto;
}
</style>
