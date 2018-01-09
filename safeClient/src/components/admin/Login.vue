<template>
  <v-layout>
    <v-flex xs4 sm4 offset-sm4 mt-5>
      <panel title="Login Administrador">
        <v-text-field
          label="Email"
          autofocus
          clearable
        ></v-text-field>
        <br>
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
          clearable
        ></v-text-field>
        <br>
        <div class="error" v-if="error">{{error}}</div>
        <br>
        <v-btn
          dark
          color="grey darken-4"
          @click="login">
          Login
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import panel from './globals/panel'
import adminService from '../../services/adminAuthentication'

export default {
  data: () => ({

  }),
  components: {
    panel
  },
  methods: {
    async login (dados) {
      const loged = await adminService.getAdmin(dados)
      console.log(loged.data)
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
