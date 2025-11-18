<template>
  <div class="page">
    <h4 class="mb-3">
      <i class="fas fa-user-plus text-success"></i> Thêm liên hệ mới
    </h4>

    <form @submit.prevent="addContact">
      <!-- Họ tên -->
      <div class="form-group mb-3">
        <label><strong>Họ và tên:</strong></label>
        <input
          v-model="contact.name"
          type="text"
          class="form-control"
          placeholder="Nhập họ tên..."
          required
        />
      </div>

      <!-- Email -->
      <div class="form-group mb-3">
        <label><strong>Email:</strong></label>
        <input
          v-model="contact.email"
          type="email"
          class="form-control"
          placeholder="Nhập email..."
        />
      </div>

      <!-- Địa chỉ -->
      <div class="form-group mb-3">
        <label><strong>Địa chỉ:</strong></label>
        <input
          v-model="contact.address"
          type="text"
          class="form-control"
          placeholder="Nhập địa chỉ..."
        />
      </div>

      <!-- Điện thoại -->
      <div class="form-group mb-3">
        <label><strong>Điện thoại:</strong></label>
        <input
          v-model="contact.phone"
          type="text"
          class="form-control"
          placeholder="Nhập số điện thoại..."
        />
      </div>

      <!-- Giới tính -->
      <div class="form-group mb-3">
        <label><strong>Giới tính:</strong></label><br />
        <div class="form-check form-check-inline">
          <input
            v-model="contact.gender"
            class="form-check-input"
            type="radio"
            id="male"
            value="male"
          />
          <label class="form-check-label" for="male">Nam</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            v-model="contact.gender"
            class="form-check-input"
            type="radio"
            id="female"
            value="female"
          />
          <label class="form-check-label" for="female">Nữ</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            v-model="contact.gender"
            class="form-check-input"
            type="radio"
            id="other"
            value="other"
          />
          <label class="form-check-label" for="other">Khác</label>
        </div>
      </div>

      <!-- Sở thích -->
      <div class="form-group mb-3">
        <label><strong>Sở thích:</strong></label>
        <div
          class="form-check"
          v-for="(hobby, index) in hobbies"
          :key="'hobby-' + index"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :id="'hobby-' + index"
            :value="hobby"
            v-model="contact.hobbies"
          />
          <label class="form-check-label" :for="'hobby-' + index">
            {{ hobby }}
          </label>
        </div>
      </div>

      <!-- Sở trường -->
      <div class="form-group mb-3">
        <label><strong>Sở trường:</strong></label>
        <div
          class="form-check"
          v-for="(skill, index) in skills"
          :key="'skill-' + index"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :id="'skill-' + index"
            :value="skill"
            v-model="contact.skills"
          />
          <label class="form-check-label" :for="'skill-' + index">
            {{ skill }}
          </label>
        </div>
      </div>

      <!-- Liên hệ yêu thích -->
      <div class="form-group mb-3">
        <label><strong>Liên hệ yêu thích:</strong></label>
        <input
          v-model="contact.favorite"
          type="checkbox"
          class="ml-2"
        /> Có
      </div>

      <!-- Nút hành động -->
      <div class="text-center mt-4">
        <button class="btn btn-success mr-2" type="submit">
          <i class="fas fa-save"></i> Lưu
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
        gender: "male",
        hobbies: [],
        skills: [],
        favorite: false,
      },
      hobbies: ["Đọc sách", "Nghe nhạc", "Thể thao", "Du lịch", "Ẩm thực"],
      skills: ["Lập trình", "Giao tiếp", "Thiết kế", "Phân tích", "Quản lý"],
    };
  },
  methods: {
    async addContact() {
      try {
        await ContactService.create(this.contact);
        alert("Thêm liên hệ thành công!");
        this.$router.push({ name: "contactbook" });
      } catch (error) {
        console.error(error);
        alert("Lỗi khi thêm liên hệ!");
      }
    },
    goBack() {
      this.$router.push({ name: "contactbook" });
    },
  },
};
</script>

<style scoped>
.page {
  max-width: 600px;
  margin: 20px auto;
  text-align: left;
  border: 2px solid #007bff;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 6px rgba(0, 123, 255, 0.2);
}
label {
  font-weight: 500;
}
</style>
