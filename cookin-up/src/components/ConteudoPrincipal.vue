<script lang="ts">
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';
import Tag from './Tag.vue';

  export default {
    data() {
      return {
        ingredientes: [
          "Manteiga",
          "Orengano",
          "Cebola",
          "Azeite",
          "Sal",
          "Pimenta-do-reino"
        ]
    }
  },
  components: { SelecionarIngredientes, SuaLista, Tag }
}
</script>

<template>
  
  <main class="conteudo-principal">

    <SuaLista :ingredientes="ingredientes" />
    <SelecionarIngredientes />
  

  </main>
  
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

</style>