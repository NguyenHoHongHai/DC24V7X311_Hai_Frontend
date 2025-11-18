<template>
  <div class="page">

    <h4 class="mb-3 text-primary">
      <i class="fas fa-user-edit"></i>
      {{ contactLocal._id ? "Cập nhật thông tin liên hệ" : "Thêm liên hệ mới" }}
    </h4>

    <form @submit.prevent="submitForm">

      <!-- Họ tên -->
      <div class="form-group mb-3">
        <label><strong>Họ và tên:</strong></label>
        <input v-model="contactLocal.name" type="text" class="form-control" required />
      </div>

      <!-- Email -->
      <div class="form-group mb-3">
        <label><strong>Email:</strong></label>
        <input v-model="contactLocal.email" type="email" class="form-control" />
      </div>

      <!-- Địa chỉ -->
      <div class="form-group mb-3">
        <label><strong>Địa chỉ:</strong></label>
        <input v-model="contactLocal.address" type="text" class="form-control" />
      </div>

      <!-- Điện thoại -->
      <div class="form-group mb-3">
        <label><strong>Điện thoại:</strong></label>
        <input v-model="contactLocal.phone" type="text" class="form-control" />
      </div>

      <!-- Giới tính -->
      <div class="form-group mb-3">
        <label><strong>Giới tính:</strong></label><br />

        <div class="form-check form-check-inline">
          <input v-model="contactLocal.gender" class="form-check-input" type="radio" value="male" />
          <label class="form-check-label">Nam</label>
        </div>

        <div class="form-check form-check-inline">
          <input v-model="contactLocal.gender" class="form-check-input" type="radio" value="female" />
          <label class="form-check-label">Nữ</label>
        </div>

        <div class="form-check form-check-inline">
          <input v-model="contactLocal.gender" class="form-check-input" type="radio" value="other" />
          <label class="form-check-label">Khác</label>
        </div>
      </div>

      <!-- Sở thích -->
      <div class="form-group mb-3">
        <label><strong>Sở thích:</strong></label>
        <div v-for="(h, index) in hobbies" :key="index" class="form-check">
          <input class="form-check-input" type="checkbox" :value="h" v-model="contactLocal.hobbies" />
          <label class="form-check-label">{{ h }}</label>
        </div>
      </div>

      <!-- Sở trường -->
      <div class="form-group mb-3">
        <label><strong>Sở trường:</strong></label>
        <div v-for="(s, index) in skills" :key="index" class="form-check">
          <input class="form-check-input" type="checkbox" :value="s" v-model="contactLocal.skills" />
          <label class="form-check-label">{{ s }}</label>
        </div>
      </div>

      <!-- Tình trạng hôn nhân -->
      <div class="form-group mb-3">
        <label><strong>Tình trạng hôn nhân:</strong></label>
        <select v-model="contactLocal.maritalStatus" class="form-control">
          <option value="">-- Chọn --</option>
          <option value="Độc thân">Độc thân</option>
          <option value="Đã kết hôn">Đã kết hôn</option>
          <option value="Ly hôn">Ly hôn</option>
        </select>
      </div>

      <!-- Yêu thích -->
      <div class="form-group mb-3">
        <label><strong>Liên hệ yêu thích:</strong></label>
        <input type="checkbox" v-model="contactLocal.favorite" class="ml-2" /> Có
      </div>

      <!-- Nút -->
      <div class="text-center mt-4">
        <button class="btn btn-primary" type="submit">
          <i class="fas fa-save"></i>
          {{ contactLocal._id ? "Cập nhật" : "Thêm mới" }}
        </button>

        <button v-if="contactLocal._id" class="btn btn-danger ml-2" type="button" @click="deleteForm">
          <i class="fas fa-trash"></i> Xóa
        </button>

        <button class="btn btn-secondary ml-2" type="button" @click="Cancel">
          <i class="fas fa-arrow-left"></i> Thoát
        </button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  emits: ["submit:contact", "delete:contact"],
  props: {
    contact: Object,
  },

  data() {
    return {
      contactLocal: { ...this.contact },
      hobbies: ["Đọc sách", "Nghe nhạc", "Thể thao", "Du lịch", "Ẩm thực"],
      skills: ["Lập trình", "Giao tiếp", "Thiết kế", "Phân tích", "Quản lý"],
    };
  },

  methods: {
    submitForm() {
      this.$emit("submit:contact", this.contactLocal);
    },

    deleteForm() {
      this.$emit("delete:contact", this.contactLocal._id);
    },

    Cancel() {
      this.$router.push({ name: "contactbook" });
    },
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
