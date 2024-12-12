import { randomElement, randomNumber } from "../functions/helper";


const safeEmailTld = [
    'com', 'ir', 'me', 'net', 'org',
];

// https://en.wikipedia.org/wiki/.ir
const tld = [
    'biz', 'com', 'info', 'ac.ir', 'sch.ir', 'co.ir', 'ir', 'net', 'org',
];

// http://en.wikipedia.org/wiki/Category:Iranian-language_surnames
const lastNameAscii = [
    'abdullahi', 'abbasi', 'abedini', 'ahadi', 'ahmadi', 'akbari', 'alizadeh', 'asadi',
    'baraghani', 'babaei',
    'chamran',
    'ebrahimi', 'esfahani',
    'fanaei', 'farahani', 'farsi', 'fekri',
    'ghasemi', 'ghorbani',
    'hamadani', 'hamidi', 'heidari', 'hijazi', 'husseini',
    'jahanbani', 'jalili', 'jamshidi', 'javadi',
    'kadivar', 'karimi', 'kashani', 'kazmi', 'khadem', 'khalaji', 'khomeini', 'khorsandi',
    'mahdavi', 'mahmoudi', 'mahmoudieh', 'majidi', 'mazanderani', 'mirzaei', 'mokri', 'mohammady', 'mousavi',
    'nabavi', 'naceri', 'nafisi', 'najafi', 'nalci', 'namazi', 'namdar', 'nariman', 'nazari', 'nili', 'norouzi',
    'pahlavi', 'paria', 'pashaei', 'pejman',
    'qazwini',
    'rahimi', 'rahmani', 'rajaei', 'ramadani', 'rashidi', 'rezaei',
    'salari', 'salehi', 'salemi', 'shahbazi', 'shahriari', 'shahidi', 'shirazi', 'shojaei', 'soleimani', 'soomekh', 'soroush',
    'tabatabaei', 'talebi', 'tousi',
    'yazdani', 'yazdi', 'yousefi',
    'zandi', 'zare',
];

// http://en.wikipedia.org/wiki/Persian_name
const firstNameAscii = [
    'abbas', 'afshin', 'ahmad', 'ali', 'amir', 'anahita', 'anousheh', 'arash', 'ardeshir', 'arezu', 'aria', 'arian', 'arman', 'ashraf', 'atoosa', 'azadeh', 'azar',
    'babak', 'bahar', 'bahare', 'bardia', 'behnaz', 'benyamin', 'bita',
    'dalir', 'dariush', 'davoud', 'donya',
    'ebrahim', 'ehsan', 'eskandar', 'esmaeel',
    'farangis', 'farbod', 'farhad', 'farideh', 'farnaz', 'farrokh', 'farshid', 'farzaneh', 'fateme', 'fereshteh',
    'garshasp',
    'hanie', 'hashem', 'hirbod', 'hoda', 'hormoz', 'hossein',
    'jaleh', 'jamshid', 'javad',
    'kamran', 'karim', 'kasra', 'katayoun', 'kazem', 'khorshid', 'khosrow', 'kiana', 'kiarash', 'kourosh',
    'laleh', 'leila',
    'mahdi', 'mahmoud', 'mahshid', 'majid', 'manuchehr', 'marjan', 'maryam', 'marzban', 'massoud', 'mazdak', 'maziar', 'mehran', 'mehrdad', 'meysam', 'milad', 'mina', 'mithra', 'mohammad', 'mohsen', 'musa',
    'nasrin', 'nazanin', 'niloufar',
    'omid',
    'parastoo', 'parisa', 'parsa', 'parvin', 'parviz', 'payam', 'payvand', 'pedram', 'piruz', 'pouria',
    'ramin', 'reyhan', 'reza', 'roksaneh', 'rostam', 'roxana', 'roya',
    'sahar', 'saman', 'samir', 'sara', 'sassan', 'sepehr', 'sepideh', 'shahin', 'shahryar', 'shapour', 'shervin', 'shirin', 'simin', 'soheila', 'sohrab', 'soraya', 'soroush',
    'tara', 'taraneh', 'turan',
    'vahid',
    'yaghoub', 'yahya', 'yasamin', 'yasaman', 'younes', 'yousef',
    'zahra', 'zarine', 'zeynab', 'zhila',
];

const generateLastNameAscii = () => {
    return randomElement(lastNameAscii)
}

const generateFirstNameAscii = () => {
    return randomElement(firstNameAscii)
}


export const generateUserName = () => {
    // '{{lastNameAscii}}.{{firstNameAscii}}'
    const userNameFormat1 = () => randomElement(lastNameAscii) + "." + randomElement(firstNameAscii);
    // '{{firstNameAscii}}.{{lastNameAscii}}'
    const userNameFormat2 = () => randomElement(firstNameAscii) + "." + randomElement(lastNameAscii);
    // '{{firstNameAscii}}##'
    const userNameFormat3 = () => randomElement(lastNameAscii) + randomNumber(10,99);
    // '?{{lastNameAscii}}'

    return randomElement([userNameFormat1,userNameFormat2,userNameFormat3])();
}

export const generateFakeDomainName = () => {
    return randomElement(lastNameAscii) + '.'  + randomElement(tld);
}

export const generateFakeEmail = () => {
    return randomElement(lastNameAscii) + "@" + randomElement(firstNameAscii) + '.'  + randomElement(safeEmailTld);
}
