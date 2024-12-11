import { randomElement } from "../functions/helper";
import { generatePersianFirstName, generatePersianLastName } from "./person-fa";


const companyPrefix = [
    'شرکت', 'موسسه', 'سازمان', 'بنیاد',
];

const companyField = [
    'فناوری اطلاعات', 'راه و ساختمان', 'توسعه معادن', 'استخراج و اکتشاف',
    'سرمایه گذاری', 'نساجی', 'کاریابی', 'تجهیزات اداری', 'تولیدی', 'فولاد',
];

const contract = [
    'رسمی', 'پیمانی', 'تمام وقت', 'پاره وقت', 'پروژه ای', 'ساعتی',
];

export const generatePersianCompany = () => {
    // '{{companyField}} {{firstName}}'
    const companyMaker1 = () => randomElement(companyField) + " " + generatePersianFirstName();

    // '{{companyPrefix}} {{companyField}} {{firstName}}'
    const companyMaker2 = () => randomElement(companyPrefix) + " " + companyMaker1();
    // '{{companyField}} {{lastName}}'
    const companyMaker3 = () => randomElement(companyField) + " " + generatePersianLastName();
    // '{{companyPrefix}} {{companyField}} {{lastName}}'
    const companyMaker4 = () => randomElement(companyPrefix) + " " + companyMaker3();

    return randomElement([companyMaker1, companyMaker2, companyMaker3, companyMaker4])();
}