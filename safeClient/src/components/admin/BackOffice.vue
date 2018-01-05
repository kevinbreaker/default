<template>
  <div>
    <v-tabs dark grow>
      <v-toolbar class="cinza" color="" dark>
        <v-toolbar-title>
          <img src="https://api.asm.skype.com/v1/objects/0-eus-d2-364bcbd10267f7604b3edb4dcd40d8ae/views/imgpsh_fullsize" alt="" width="80px">
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field placeholder="Procurar" v-model="search" hide-details dark single-line>
        </v-text-field>
         <v-spacer></v-spacer>
        <v-btn icon>
        <v-icon>more_vert</v-icon>
        </v-btn>
        <v-tabs-bar class="cinza" slot="extension">
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
            Lorem ipsum
          </v-card>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: null,
      items: [
        'saques', 'clientes', 'transações', 'estatísticas'
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
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
.cinza{
  background: #323136;
}
</style>
