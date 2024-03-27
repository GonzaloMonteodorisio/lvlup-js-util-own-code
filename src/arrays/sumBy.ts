import { arraylable } from "./arraylable";

// Le pasamos un accesor para que el cliente defina lo que quiere sumar (por ejemplo, qué atributos de un objeto)

export function sumBy<T>(dataSource: T[], accesor: (item: T) => number): number {
  console.info('dataSource: ', dataSource)
  return arraylable(dataSource).reduce((sum: number, item: T) => sum + accesor(item), 0)
}

// Implementación
/*

interface Item {
  value: number
}


const data: Item[] = [
  {value: 5},
  {value: 10},
  {value: 15}
]

const accesor = (item: Item) => item.value

const total = sumBy(data, accesor)
*/