<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ row_name: string; row_type: string }>();

const row_type_var = ref(props.row_type);

const selectChangeFunction = (e:Event) => {

  const target = e.target;
  
  if(target){
    const selectElement = target as HTMLSelectElement;
    const value = selectElement.value
    
    if(value){
      row_type_var.value = value;
    }
  }
};

</script>

<template>
  <div class="row">
    <input type="text" name="" id="" :value="row_name" />

    <select name="" id="" :value="row_type_var" @change="selectChangeFunction">
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

    <span v-if="row_type_var == 'number'">
      min:
      <input type="number" class="min_number_value" name="" id="" value="0" />
      max:
      <input
        type="number"
        class="max_number_value"
        name=""
        id=""
        value="1000"
      />
      decimal:
      <input
        type="number"
        class="decimal_number_value"
        name=""
        id=""
        value="0"
      />
    </span>

    Null percent:
    <input type="number" class="empty_percentage" name="" id="" value="0" />
    <button type="button">X</button>
  </div>
</template>

<style scoped>
.row {
  margin: 1rem;
  padding: 0.5rem;
  background-color: #f0f0f0;
  border-radius: 5px;
}

.row:hover {
  background-color: #dddddd;
}

.row > * {
  margin-right: 10px;
}

.empty_percentage {
  width: 3rem;
}

.min_number_value,
.max_number_value {
  width: 3rem;
}
</style>
