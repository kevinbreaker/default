<template>
  <div>
    <v-tabs dark grow>
      <v-toolbar color="grey darken-3" dark>
        <v-toolbar-title>
          <img src="../../../imgs/safeFounds.png" alt="" width="80px">
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <h2 v-bind="session">{{session}}</h2>
          <v-spacer></v-spacer>
         <!--  -->
          <div class="text-xs-center">
            <v-menu offset-y>
              <v-btn fab small dark slot="activator"><v-icon>more_vert</v-icon></v-btn>
              <v-list>
                <v-list-tile class="lista">
                  <v-list-tile-title>Log Out</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </div>
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
          v-for="i in 6"
          :key="i"
          :id="'tab-' + i"
        >
          <v-card flat>
            <div v-if="i === 1"><lista-saques title="Saques"></lista-saques></div>
            <div v-if="i === 2"><lista-depositos title="Depósitos"></lista-depositos></div>
            <div v-if="i === 3"><lista-clientes title="Clientes"></lista-clientes></div>
            <div v-if="i === 4"><lista-transferencias title="Transações"></lista-transferencias></div>
            <div v-if="i === 6"><criar-admin></criar-admin></div>
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
import criarAdmin from './backComponents/criarAdmin'
import axios from 'axios'

export default {
  data () {
    return {
      search: null,
      session: null,
      items: [
        'saques', 'depósitos', 'clientes', 'transações', 'estatísticas', 'Criar Admin'
      ]
    }
  },
  components: {
    listaClientes,
    listaSaques,
    listaDepositos,
    listaTransferencias,
    criarAdmin
  },
  mounted () {
    // TODO pegar dados do admin
    axios.post('/sessionStatus', 'funcionou')
    this.session = axios.get('/sessionStatus').then((data) => {
      return data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lista:hover{
  background: lightgrey;
  cursor: pointer;
}
</style>
