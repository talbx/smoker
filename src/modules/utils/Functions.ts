export function asList<T>(...elements: T[]): T[]{
    const list = new Array<T>();
    elements.forEach(e => list.push(e));
    return list;
}