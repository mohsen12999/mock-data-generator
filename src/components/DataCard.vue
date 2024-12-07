<script setup lang="ts">
import DataRow from './DataRow.vue';
import IdRow from './IdRow.vue';

// import { ref } from "vue";

// defineProps<{ msg: string }>();

// const count = ref(0)
const downloadfile = () => {
  console.log("downloadfile");

  // const link = document.createElement("a");
  // const content = document.querySelector("textarea").value;
  // const file = new Blob([content], { type: 'text/plain' });
  // link.href = URL.createObjectURL(file);
  // link.download = "sample.txt";
  // link.click();
  // URL.revokeObjectURL(link.href);
}
</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->

  <div class="card">

    <IdRow />

   <DataRow row_name="first_name" row_type="first_name" />
   <DataRow row_name="last_name" row_type="last_name" />
   <DataRow row_name="email" row_type="email" />
   <DataRow row_name="age" row_type="number" />

  </div>

  <div class="card">
    <button type="button" @click="downloadfile()">ساخت فایل</button>
  </div>
</template>


