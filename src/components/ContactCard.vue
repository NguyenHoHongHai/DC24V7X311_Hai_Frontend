<script>
import ContactService from "@/services/contact.service";

export default {
  props: {
    contact: { type: Object, required: true },
  },

  methods: {
    async deleteContact() {
      if (confirm("Bạn có chắc muốn xóa liên hệ này không?")) {
        try {
          await ContactService.delete(this.contact._id);
          alert("Xóa liên hệ thành công!");
          this.$router.push({ name: "contactbook" });
        } catch (error) {
          console.error(error);
          alert("Lỗi khi xóa liên hệ!");
        }
      }
    },
  },
};
</script>

<template>
  <div class="card p-3 border-primary">
    <!-- TIÊU ĐỀ -->
    <div class="mb-2">
      <h5 class="text-primary">
        <i class="fas fa-address-card"></i> Thông tin liên hệ
      </h5>
      <hr />
    </div>

    <!-- THÔNG TIN CƠ BẢN -->
    <div class="p-1"><strong>Tên:</strong> {{ contact.name }}</div>
    <div class="p-1"><strong>E-mail:</strong> {{ contact.email }}</div>
    <div class="p-1"><strong>Địa chỉ:</strong> {{ contact.address }}</div>
    <div class="p-1"><strong>Điện thoại:</strong> {{ contact.phone }}</div>

    <!-- GIỚI TÍNH -->
    <div class="p-1">
      <strong>Giới tính:</strong>
      <span v-if="contact.gender && contact.gender !== ''">
        {{ contact.gender === 'male' ? 'Nam' : contact.gender === 'female' ? 'Nữ' : 'Khác' }}
      </span>
      <span v-else>Chưa cập nhật</span>
    </div>

    <!-- SỞ THÍCH -->
    <div class="p-1">
      <strong>Sở thích:</strong>
      <span v-if="contact.hobbies && contact.hobbies.length > 0">
        {{ contact.hobbies.join(", ") }}
      </span>
      <span v-else>Chưa cập nhật</span>
    </div>

    <!-- SỞ TRƯỜNG -->
    <div class="p-1">
      <strong>Sở trường:</strong>
      <span v-if="contact.skills && contact.skills.length > 0">
        {{ contact.skills.join(", ") }}
      </span>
      <span v-else>Chưa cập nhật</span>
    </div>

    <!-- TÌNH TRẠNG HÔN NHÂN -->
    <div class="p-1">
      <strong>Tình trạng hôn nhân:</strong>
      <span v-if="contact.maritalStatus && contact.maritalStatus !== ''">
        {{ contact.maritalStatus }}
      </span>
      <span v-else>Chưa cập nhật</span>
    </div>

    <!-- YÊU THÍCH -->
    <div class="p-1">
      <strong>Liên hệ yêu thích:</strong>
      <i v-if="contact.favorite" class="fas fa-check text-success"></i>
      <i v-else class="fas fa-times text-danger"></i>
    </div>

    <!-- NÚT HÀNH ĐỘNG -->
    <div class="mt-4 text-center">
      <router-link
        :to="{ name: 'contact.edit', params: { id: contact._id } }"
        class="btn btn-warning btn-sm mr-2"
      >
        <i class="fas fa-edit"></i> Chỉnh sửa
      </router-link>

      <button class="btn btn-danger btn-sm" @click="deleteContact">
        <i class="fas fa-trash"></i> Xóa
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 2px solid #007bff;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 6px rgba(0, 123, 255, 0.3);
  max-width: 500px;
}

h5 {
  font-weight: 600;
}

button,
.router-link-active {
  font-weight: 500;
}
</style>
