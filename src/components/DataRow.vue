<script setup lang="ts">
  defineProps<{ row_name: string, row_type: string }>();
</script>

<template>
     <div class="row">
      <input type="text" name="" id="" :value="row_name" />
      <select name="" id="" :value="row_type">
        <option value="number">عدد</option>
        <option value="first_name">نام</option>
        <option value="last_name">نام خانوادگی</option>
        <option value="email">ایمیل</option>
        <option value="city">شهر</option>
        <option value="country">کشور</option>
      </select>
      درصد خالی بودن:
      <input type="number" class="empty_percentage" name="" id="" value="0" />
      <button type="button">حذف ستون</button>
    </div>
</template>


<style scoped>
.row {
  margin: 1rem;
  padding: .5rem;
  background-color: #f0f0f0;
  border-radius: 5px;
}

.row:hover{
  background-color: #dddddd;
}

.row > * {
  margin-right: 10px;
}

.empty_percentage{
  width: 3rem;
}
</style>