import { typeOf } from "../misc";
export function isObjectLike(value) {
    return (!(value instanceof Date) &&
        !(value instanceof RegExp) &&
        !(Array.isArray(value)) &&
        typeOf(value) === 'Object');
}
