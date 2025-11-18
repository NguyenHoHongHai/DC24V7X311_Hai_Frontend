<template>
  <div class="page">
    <h4 class="mb-3 text-primary">
      <i class="fas fa-user-edit"></i> Cập nhật thông tin liên hệ
    </h4>

    <form @submit.prevent="updateContact">
      <!-- Họ tên -->
      <div class="form-group mb-3">
        <label><strong>Họ và tên:</strong></label>
        <input v-model="contact.name" type="text" class="form-control" required />
      </div>

      <!-- Email -->
      <div class="form-group mb-3">
        <label><strong>Email:</strong></label>
        <input v-model="contact.email" type="email" class="form-control" />
      </div>

      <!-- Địa chỉ -->
      <div class="form-group mb-3">
        <label><strong>Địa chỉ:</strong></label>
        <input v-model="contact.address" type="text" class="form-control" />
      </div>

      <!-- Điện thoại -->
      <div class="form-group mb-3">
        <label><strong>Điện thoại:</strong></label>
        <input v-model="contact.phone" type="text" class="form-control" />
      </div>

      <!-- Giới tính -->
      <div class="form-group mb-3">
        <label><strong>Giới tính:</strong></label><br />
        <div class="form-check form-check-inline">
          <input v-model="contact.gender" class="form-check-input" type="radio" value="male" />
          <label class="form-check-label">Nam</label>
        </div>
        <div class="form-check form-check-inline">
          <input v-model="contact.gender" class="form-check-input" type="radio" value="female" />
          <label class="form-check-label">Nữ</label>
        </div>
        <div class="form-check form-check-inline">
          <input v-model="contact.gender" class="form-check-input" type="radio" value="other" />
          <label class="form-check-label">Khác</label>
        </div>
      </div>

      <!-- Sở thích -->
      <div class="form-group mb-3">
        <label><strong>Sở thích:</strong></label>
        <div v-for="(h, index) in hobbies" :key="index" class="form-check">
          <input class="form-check-input" type="checkbox" :value="h" v-model="contact.hobbies" />
          <label class="form-check-label">{{ h }}</label>
        </div>
      </div>

      <!-- Sở trường -->
      <div class="form-group mb-3">
        <label><strong>Sở trường:</strong></label>
        <div v-for="(s, index) in skills" :key="index" class="form-check">
          <input class="form-check-input" type="checkbox" :value="s" v-model="contact.skills" />
          <label class="form-check-label">{{ s }}</label>
        </div>
      </div>

      <!-- Tình trạng hôn nhân -->
      <div class="form-group mb-3">
        <label><strong>Tình trạng hôn nhân:</strong></label>
        <select v-model="contact.maritalStatus" class="form-control">
          <option value="">-- Chọn --</option>
          <option value="Độc thân">Độc thân</option>
          <option value="Đã kết hôn">Đã kết hôn</option>
          <option value="Ly hôn">Ly hôn</option>
        </select>
      </div>

      <!-- Yêu thích -->
      <div class="form-group mb-3">
        <label><strong>Liên hệ yêu thích:</strong></label>
        <input type="checkbox" v-model="contact.favorite" class="ml-2" /> Có
      </div>

      <div class="text-center mt-4">
        <button class="btn btn-primary" type="submit">
          <i class="fas fa-save"></i> Cập nhật
        </button>
        <button class="btn btn-secondary" type="button" @click="goBack">
          <i class="fas fa-arrow-left"></i> Quay lại
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import ContactService from "@/services/contact.service";

export default {
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

      hobbies: ["Đọc sách", "Nghe nhạc", "Thể thao", "Du lịch", "Ẩm thực"],
      skills: ["Lập trình", "Giao tiếp", "Thiết kế", "Phân tích", "Quản lý"],
    };
  },

  methods: {
    async getContact(id) {
      this.contact = await ContactService.get(id);
    },

    async updateContact() {
      await ContactService.update(this.contact._id, this.contact);
      alert("Cập nhật thành công!");
      this.$router.push({ name: "contactbook" });
    },

    goBack() {
      this.$router.push({ name: "contactbook" });
    },
  },

  mounted() {
    this.getContact(this.$route.params.id);
  },
};
</script>

<style scoped>
.page {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #007bff;
  border-radius: 8px;
  background: white;
}
</style>
