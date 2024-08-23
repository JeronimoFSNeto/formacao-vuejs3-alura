import type ICategoria from "@/interfaces/ICategoria";
import type IReceita from "@/interfaces/IReceita";

async function obterDadosURL<T>(url: string) {
  const resposta = await fetch(url);
  return resposta.json() as T;
}

export async function obterCategorias() {
  return obterDadosURL<ICategoria[]>(
    "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/86802bed06855cdccc9247dd1fa175c6ccea7dda/categorias.json"
  );
}

export async function obterReceitas() {
  return obterDadosURL<IReceita[]>(
    "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json"
  );
}

// Simulando chamada assíncrona
// await new Promise((resolve) => setTimeout(resolve, 3000));
