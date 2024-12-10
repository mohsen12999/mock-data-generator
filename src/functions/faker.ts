export function generatedFakeField(
  field_type: string,
  empty_percentage: string,

  min_number_value?: string,
  max_number_value?: string,
  decimal_number_value?: string
): string | undefined {
  const data_chance = Math.floor(Math.random() * 100);
  if (data_chance < Number(empty_percentage)) {
    return undefined;
  }

  switch (field_type) {
    case "number":
      return generatedFakeNumber(
        min_number_value,
        max_number_value,
        decimal_number_value
      );

    default:
      return "";
  }
}

export function generatedFakeNumber(
  min_number_value?: string,
  max_number_value?: string,
  decimal_number_value?: string
): string {
  const min_number = Number(min_number_value);
  const max_number = Number(max_number_value);
  const decimal_number = Number(decimal_number_value);
  const random_number =
    Math.floor(Math.random() * (max_number - min_number + 1)) + min_number;
  if (decimal_number === 0 || !decimal_number) {
    return random_number.toString();
  }

  // decimal part
  const max_decimal = Math.pow(10, decimal_number);
  const decimal_part = Math.floor(Math.random() * max_decimal);

  return random_number.toString() + "." + decimal_part.toString();
}
