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
                <td class="text-xs-center">{{ props.item.data }}</td>
                <td class="text-xs-center">{{ props.item.saldo }}</td>
                <td class="text-xs-center">{{ props.item.codigo }}</td>
                <td class="text-xs-center">
                    <v-btn color="green" >Aprovar</v-btn>
                    <v-btn color="red" >Estornar</v-btn>
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
          text: 'Cliente',
          align: 'center',
          sortable: false,
          value: 'name'
        },
        { text: 'Cpf', align: 'center', value: 'cpf' },
        { text: 'Data', align: 'center', value: 'data' },
        { text: 'Valor', align: 'center', value: 'saldo' },
        { text: 'Código', align: 'center', value: 'codigo' }
      ],
      items: [
        {
          value: false,
          name: 'Antônio fulano',
          cpf: '10222039581',
          data: '10/12/2016',
          saldo: 1024.0,
          codigo: '2215'
        },
        {
          value: false,
          name: 'Bernardo Hazin',
          cpf: '08945673381',
          data: '02/06/2017',
          saldo: 37.2,
          codigo: '2234'
        },
        {
          value: false,
          name: 'Bernardo Hazin',
          cpf: '08945673381',
          data: '02/06/2017',
          saldo: 37.2,
          codigo: '2234'
        },
        {
          value: false,
          name: 'Bernardo Hazin',
          cpf: '08945673381',
          data: '02/06/2017',
          saldo: 37.2,
          codigo: '2234'
        },
        {
          value: false,
          name: 'Bernardo Hazin',
          cpf: '08945673381',
          data: '02/06/2017',
          saldo: 37.2,
          codigo: '2234'
        },
        {
          value: false,
          name: 'Bernardo Hazin',
          cpf: '08945673381',
          data: '02/06/2017',
          saldo: 37.2,
          codigo: '2234'
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
</style>
