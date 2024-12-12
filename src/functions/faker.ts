import { generateFakeAddress, generateFakeCity, generateFakeCountry } from "../provider/address";
import { generatePersianAddress, generatePersianCity, GeneratePersianCountry } from "../provider/address-fa";
import { generateFakeDomainName, generateFakeEmail } from "../provider/Internet";
import { generateFakeFirstName, generateFakeFullname, generateFakeLastName } from "../provider/person";
import { generateNationalCode, generatePersianFirstName, generatePersianFullName, generatePersianLastName } from "../provider/person-fa";
import { randomNumber } from "./helper";

export function generatedFakeField(
  field_type: string,
  empty_percentage: string,

  min_number_value?: string,
  max_number_value?: string,
  decimal_number_value?: string
): string | undefined {

  if (empty_percentage !== "0" && empty_percentage !== "") {
    if(empty_percentage === "100") return undefined;

    const data_chance = Math.floor(Math.random() * 100);
    if (data_chance < Number(empty_percentage)) {
      return undefined;
    }
  }

  switch (field_type) {
    case "number":
      return generatedFakeNumber(
        min_number_value,
        max_number_value,
        decimal_number_value
      );

    case "first_name":
      return generateFakeFirstName();
    case "last_name":
      return generateFakeLastName();
    case "full_name":
      return generateFakeFullname();
    case "city":
      return generateFakeCity();
    case "country":
      return generateFakeCountry();
    case "email":
      return generateFakeEmail();
    case "website":
      return generateFakeDomainName();
    case "address":
      return generateFakeAddress();

    // TODO: add more fake data
    // case "phone_number":
    //   return "+989123456789";
    // case "text":
    //   return "Lorem ipsum dolor sit amet";
    // case "persian_number":
    //   return "۴۵۴۱۴۲۱۲۳۴۵۶۷۸۹";

    case "persian_first_name":
      return generatePersianFirstName();
    case "persian_last_name":
      return generatePersianLastName();
    case "persian_full_name":
      return generatePersianFullName();
    case "persian_id":
      return generateNationalCode();
    case "persian_country":
      return GeneratePersianCountry();
    case "persian_city":
      return generatePersianCity();
    case "persian_address":
      return generatePersianAddress();

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
  const random_number = randomNumber(min_number, max_number);

  if (decimal_number === 0 || !decimal_number) {
    return random_number.toString();
  }

  // decimal part
  const max_decimal = Math.pow(10, decimal_number);
  const decimal_part = Math.floor(Math.random() * max_decimal);

  return random_number.toString() + "." + decimal_part.toString();
}
