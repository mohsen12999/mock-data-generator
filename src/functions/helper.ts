export function randomElement<T>(array: T[]): T {    
    return array[Math.floor(Math.random() * array.length)];
}

export function randomNumber(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function convertToPersianNumber(number:number) {
    return number.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
}
