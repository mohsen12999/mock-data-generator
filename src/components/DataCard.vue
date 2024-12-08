<script setup lang="ts">
import { ref } from "vue";

import IdRow from "./IdRow.vue";
import DataRow from "./DataRow.vue";
import { getDataFromPage } from "../functions/data";

const componentList = ref([
  { name: "first_name", type: "first_name" },
  { name: "last_name", type: "last_name" },
  { name: "email", type: "email" },
  { name: "age", type: "number" },
]);

const addColumnFunction = () => {
  componentList.value.push({ name: "first_name", type: "first_name" });
};

const generateScript = () => {

  const input_data = getDataFromPage();

  // generate data

  // const link = document.createElement("a");
  // const content = document.querySelector("textarea").value;
  // const file = new Blob([content], { type: 'text/plain' });
  // link.href = URL.createObjectURL(file);
  // link.download = "sample.txt";
  // link.click();
  // URL.revokeObjectURL(link.href);
};
</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->

  <div id="data_row_card" class="card">
    <IdRow />

    <div id="component-container">
      <DataRow
        v-for="(props, index) in componentList"
        :row_name="props.name"
        :row_type="props.type"
        :key="index"
      />
    </div>

    <button type="button" @click="addColumnFunction">+ Add new Column</button>
  </div>

  <div class="card">
    <button type="button" @click="generateScript()">Generate Script</button>
  </div>

  <textarea name="" id="script_textarea"></textarea>
</template>

<style scoped>
#script_textarea {
  width: 100%;
  display: none;
}
</style>
