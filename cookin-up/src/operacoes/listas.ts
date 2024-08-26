// export function itensDeLista1EstaoEmLista2(
//   lista1: unknown[],
//   lista2: unknown[]
// ): boolean {
//   for (const item of lista1) {
//     if (!lista2.includes(item)) {
//       return false;
//     }
//   }
//   return true;
// }

export function itensDeLista1EstaoEmLista2(
  lista1: unknown[],
  lista2: unknown[]
) {
  return lista1.every((itemLista1) => lista2.includes(itemLista1));
}
