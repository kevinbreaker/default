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
                <td class="text-xs-center">{{ props.item.tipo }}</td>
                <td class="text-xs-center">{{ props.item.aprovador }}</td>
                <td class="text-xs-center">{{ props.item.data }}</td>
                <td class="text-xs-center">{{ props.item.valor }}</td>
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
        { text: 'Cliente', align: 'center', sortable: false, value: 'name' },
        { text: 'Tipo', align: 'center', value: 'tipo' },
        { text: 'Aprovador', align: 'center', value: 'aprovador' },
        { text: 'data', align: 'center', value: 'data' },
        { text: 'valor', align: 'center', value: 'valor' }
      ],
      items: [
        {
          value: false,
          name: 'Antônio fulano',
          tipo: 'Débito',
          aprovador: 'Junior',
          data: '10/12/2016',
          valor: 3200.0
        },
        {
          value: false,
          name: 'Bernardo Hazin',
          tipo: 'Crédito',
          aprovador: 'Junior2',
          data: '02/06/2017',
          valor: 200.0
        },
        {
          value: false,
          name: 'Bernardo Hazin',
          tipo: 'Crédito',
          aprovador: 'Junior2',
          data: '02/06/2017',
          valor: 200.0
        },
        {
          value: false,
          name: 'Bernardo Hazin',
          tipo: 'Crédito',
          aprovador: 'Junior2',
          data: '02/06/2017',
          valor: 200.0
        },
        {
          value: false,
          name: 'Bernardo Hazin',
          tipo: 'Crédito',
          aprovador: 'Junior2',
          data: '02/06/2017',
          valor: 200.0
        },
        {
          value: false,
          name: 'Bernardo Hazin',
          tipo: 'Crédito',
          aprovador: 'Junior2',
          data: '02/06/2017',
          valor: 200.0
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
