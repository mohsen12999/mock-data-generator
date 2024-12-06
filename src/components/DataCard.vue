<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

// const count = ref(0)
</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->

  <div class="card"></div>

  <div class="card">

    <div class="row">
      <label for="number">
        <input type="checkbox" name="" id="" />
        add id for table
      </label>
    </div>

    <div class="row">
      <input type="text" name="" id="" />
      <select name="" id="">
        <option value="number">عدد</option>
        <option value="first_name">نام</option>
        <option value="last_name">نام خانوادگی</option>
        <option value="city">شهر</option>
        <option value="country">کشور</option>
      </select>
      <input type="text" name="" id="" />
      <button type="button">حذف ستون</button>
    </div>
    
  </div>

  <div class="card">
    <button type="button">ساخت فایل</button>
  </div>
</template>

<style scoped>
.card > * {
  margin-right: 10px;
}
</style>
