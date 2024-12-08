<script setup lang="ts">
import { ref } from "vue";

import IdRow from "./IdRow.vue";
import DataRow from "./DataRow.vue";

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

  // read data from page
  const elements_row = document.querySelectorAll("div#data_row_card div.row");

  // read id
  const id_row = elements_row[0];
  const checkbox_element = id_row.querySelector(
    'input[type="checkbox"].add_id_flag'
  );
  const add_id_flag = (checkbox_element as HTMLInputElement).checked;

  const input_number_element = id_row.querySelector(
    'input[type="number"].id_starter_number'
  );
  const id_starter_number = (input_number_element as HTMLInputElement).value;

  console.log({ add_id_flag, id_starter_number });

  // read every column
  const column_data = [];
  for (let index = 1; index < elements_row.length; index++) {
    const element_row = elements_row[index];

    const column_name_element = element_row.querySelector("input.column_name");
    const column_name = (column_name_element as HTMLInputElement).value;

    const column_type_element = element_row.querySelector("select.column_type");
    const column_type = (column_type_element as HTMLSelectElement).value;

    const empty_percentage_element = element_row.querySelector(
      "input.empty_percentage"
    );
    const empty_percentage = (empty_percentage_element as HTMLInputElement)
      .value;

    if (column_type != "number") {
      column_data.push({ column_name, column_type, empty_percentage });
    } else {
      const column_min_element = element_row.querySelector(
        "input.min_number_value"
      );
      const min_number_value = (column_min_element as HTMLInputElement).value;

      const column_max_element = element_row.querySelector(
        "input.max_number_value"
      );
      const max_number_value = (column_max_element as HTMLInputElement).value;

      const column_decimal_element = element_row.querySelector(
        "input.decimal_number_value"
      );
      const decimal_number_value = (column_decimal_element as HTMLInputElement)
        .value;

      column_data.push({
        column_name,
        column_type,
        empty_percentage,
        min_number_value,
        max_number_value,
        decimal_number_value,
      });
    }
  }

  console.log({ column_data });

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
