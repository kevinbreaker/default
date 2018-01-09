<template>
    <v-container dark fluid="fluid" class="text-xs-center">
      <v-card color="blue-grey darken-2" dark>
            <v-card-title>
            <h1>{{ title }}</h1>
            <v-btn icon fab small color="green" @click="refresh"><v-icon>refresh</v-icon></v-btn>
            <v-spacer></v-spacer>
            <v-text-field
                append-icon="search"
                label="Search"
                single-line
                hide-details
                v-model="search"
            ></v-text-field>
            </v-card-title>
            <v-data-table
                v-bind:headers="headers"
                v-bind:items="items"
                v-bind:search="search"
            >
            <template slot="items" slot-scope="props">
                <td class="text-xs-center">{{ props.item.email}}</td>
                <td class="text-xs-center">{{ props.item.nome}}</td>
                <td class="text-xs-center">{{ props.item.cpf }}</td>
                <td class="text-xs-center">{{ props.item.createdAt }}</td>
                <td class="text-xs-center">{{ props.item.codigoPromo }}</td>
                <td class="text-xs-center">{{ props.item.situacao }}</td>
                <td class="text-xs-center">
                  <div class="text-xs-center">
                    <v-menu offset-y>
                      <v-btn color="info" dark slot="activator">Opções</v-btn>
                      <v-list>
                        <v-list-tile>
                          <v-list-tile-title>visualizar</v-list-tile-title>
                        </v-list-tile>
                      </v-list>
                    </v-menu>
                  </div>
                </td>
            </template>
            <template slot="pageText" slot-scope="{ pageStart, pageStop }">
                <!-- From {{ pageStart }} to {{ pageStop }} -->
            </template>
            </v-data-table>
        </v-card>
      <slot/>
    </v-container>
</template>

<script>
import userService from '../../../services/userAuthentication'
export default {
  props: ['title'],
  data () {
    return {
      max25chars: (v) => v.length <= 25 || 'Input too long!',
      tmp: '',
      search: '',
      pagination: {},
      headers: [
        { text: 'E-mail', align: 'center', value: 'email' },
        { text: 'Nome', align: 'center', sortable: false, value: 'pNome' },
        { text: 'Cpf', align: 'center', value: 'cpf' },
        { text: 'Criado Em', align: 'center', value: 'criadoEm' },
        { text: 'Codigo Promocional', align: 'center', value: 'codigoPromo' },
        { text: 'Situação (1-3)', align: 'center', value: 'situacao' }
      ],
      items: []
    }
  },
  methods: {
    async refresh () {
      try {
        const users = await userService.getUser()
        this.items = users.data
      } catch (e) {
        console.log(e.message)
      }
    }
  },
  async mounted () {
    try {
      const users = await userService.getUser()
      this.items = users.data
    } catch (e) {
      console.log(e.message)
    }
    // TODO pegar dados do admin
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
