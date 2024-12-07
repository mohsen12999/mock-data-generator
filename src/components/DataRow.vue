<script setup lang="ts">
  defineProps<{ row_name: string, row_type: string }>();
</script>

<template>
     <div class="row">
      <input type="text" name="" id="" :value="row_name" />
      <select name="" id="" :value="row_type">
        
        <option value="number">number</option>
        <option value="first_name">first_name</option>
        <option value="last_name">last_name</option>
        <option value="city">city</option>
        <option value="country">country</option>
        <option value="email">email</option>
        <option value="persian_number">عدد فارسی</option>
        <option value="persian_first_name">نام</option>
        <option value="persian_last_name">نام خانوادگی</option>
        <option value="persian_city">شهر</option>
        <option value="persian_country">کشور</option>
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