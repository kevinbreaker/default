<template>
  <div>
    <v-tabs dark grow>
      <v-toolbar color="grey darken-3" dark>
        <v-toolbar-title>
          <img src="../../../imgs/safeFounds.png" alt="" width="80px">
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <h2><i>Marcos sliva</i></h2>
         <v-spacer></v-spacer>
        <v-btn icon>
        <v-icon>more_vert</v-icon>
        </v-btn>
        <v-tabs-bar color="grey darken-3" slot="extension">
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tabs-item
            v-for="(item, i) in items"
            :key="i"
            :href="'#tab-' + (i + 1)"
          >
            {{ item }}
          </v-tabs-item>
        </v-tabs-bar>
      </v-toolbar>
      <v-tabs-items>
        <v-tabs-content
          v-for="i in 5"
          :key="i"
          :id="'tab-' + i"
        >
          <v-card flat>
            <div v-if="i === 1"><lista-saques title="Saques"></lista-saques></div>
            <div v-if="i === 2"><lista-depositos title="Depósitos"></lista-depositos></div>
            <div v-if="i === 3"><lista-clientes title="Clientes"></lista-clientes></div>
            <div v-if="i === 4"><lista-transferencias title="Transações"></lista-transferencias></div>
            <div v-if="i === 5"></div>
          </v-card>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>

<script>
import listaClientes from './backComponents/clientes'
import listaSaques from './backComponents/saques'
import listaDepositos from './backComponents/depositos'
import listaTransferencias from './backComponents/transferencias'

export default {
  data () {
    return {
      search: null,
      items: [
        'saques', 'depósitos', 'clientes', 'transações', 'estatísticas'
      ]
    }
  },
  components: {
    listaClientes,
    listaSaques,
    listaDepositos,
    listaTransferencias
  },
  mounted () {
    // TODO pegar dados do admin
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{

}
h2{
  color:white;
}
</style>
