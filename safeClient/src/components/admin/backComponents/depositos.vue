<template>
    <v-container dark fluid="fluid" class="text-xs-center">
      <v-card color="blue-grey darken-2" dark>
            <v-card-title>
            <h1>{{ title }}</h1>
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
                <td class="text-xs-center">{{ props.item.name}}</td>
                <td class="text-xs-center">{{ props.item.cpf }}</td>
                <td class="text-xs-center">{{ props.item.criadoEm }}</td>
                <td class="text-xs-center">{{ props.item.saldo }}</td>
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
export default {
  props: ['title'],
  data () {
    return {
      max25chars: (v) => v.length <= 25 || 'Input too long!',
      tmp: '',
      search: '',
      pagination: {},
      headers: [
        {
          text: 'E-mail',
          align: 'center',
          sortable: false,
          value: 'name'
        },
        { text: 'Cpf', align: 'center', value: 'cpf' },
        { text: 'Criado Em', align: 'center', value: 'criadoEm' },
        { text: 'Saldo', align: 'center', value: 'saldo' },
        { text: 'Situação', align: 'center', value: 'situacao' }
      ],
      items: [
        {
          value: false,
          name: 'Antônio fulano',
          cpf: '10222039581',
          criadoEm: '10/12/2016',
          saldo: 1024.0,
          situacao: 'Cadastro Completo'
        },
        {
          value: false,
          name: 'Bernardo Hazin',
          cpf: '08945673381',
          criadoEm: '02/06/2017',
          saldo: 37.2,
          situacao: 'Cadastro Completo'
        },
        {
          value: false,
          name: 'Bernardo Hazin',
          cpf: '08945673381',
          criadoEm: '02/06/2017',
          saldo: 37.2,
          situacao: 'Cadastro Completo'
        },
        {
          value: false,
          name: 'Bernardo Hazin',
          cpf: '08945673381',
          criadoEm: '02/06/2017',
          saldo: 37.2,
          situacao: 'Cadastro Completo'
        },
        {
          value: false,
          name: 'Bernardo Hazin',
          cpf: '08945673381',
          criadoEm: '02/06/2017',
          saldo: 37.2,
          situacao: 'Cadastro Completo'
        },
        {
          value: false,
          name: 'Bernardo Hazin',
          cpf: '08945673381',
          criadoEm: '02/06/2017',
          saldo: 37.2,
          situacao: 'Cadastro Completo'
        }
      ]
    }
  },
  mounted () {
    // TODO pegar dados do admin
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
    color: white;
}
</style>
