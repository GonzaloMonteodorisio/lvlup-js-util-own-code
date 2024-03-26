export function isEmpty(object) {
    const safeObject = object;
    const isCountable = safeObject instanceof Object || safeObject instanceof Array;
    if (!isCountable)
        return true;
    return Object.entries(safeObject).length === 0;
}
