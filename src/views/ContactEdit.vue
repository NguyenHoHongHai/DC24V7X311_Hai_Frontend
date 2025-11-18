<template>
  <div v-if="contact" class="page">
    <h4 class="mb-3 text-primary">
      <i class="fas fa-edit"></i> Hiệu chỉnh Liên hệ
    </h4>

    <!-- Form tái sử dụng -->
    <ContactForm
      :contact="contact"
      @submit:contact="updateContact"
      @delete:contact="deleteContact"
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

  props: {
    id: { type: String, required: true },
  },

  data() {
    return {
      contact: null,
      message: "",
    };
  },

  methods: {
    // Lấy liên hệ theo ID
    async getContact(id) {
      try {
        this.contact = await ContactService.get(id);
      } catch (error) {
        console.error(error);

        // Điều hướng đến trang 404 nếu không tìm thấy liên hệ
        this.$router.push({
          name: "notfound",
          params: { 
            pathMatch: this.$route.path.split("/").slice(1)
          },
          query: this.$route.query,
          hash: this.$route.hash,
        });
      }
    },

    // Cập nhật liên hệ
    async updateContact(data) {
      try {
        await ContactService.update(this.contact._id, data);
        alert("Liên hệ được cập nhật thành công.");
        this.$router.push({ name: "contactbook" });
      } catch (error) {
        console.error(error);
      }
    },

    // Xóa liên hệ
    async deleteContact() {
      if (confirm("Bạn muốn xóa Liên hệ này?")) {
        try {
          await ContactService.delete(this.contact._id);
          this.$router.push({ name: "contactbook" });
        } catch (error) {
          console.error(error);
        }
      }
    },
  },

  created() {
    this.getContact(this.id);
    this.message = "";
  },
};
</script>

<style scoped>
.page {
  max-width: 600px;
  margin: 20px auto;
}
</style>
