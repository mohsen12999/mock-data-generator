export function RandomElement<T>(array: T[]): T {    
    return array[Math.floor(Math.random() * array.length)];
}