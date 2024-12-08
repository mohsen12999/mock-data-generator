
export function getDataFromPage() {
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

  return {add_id_flag, id_starter_number, column_data}

}