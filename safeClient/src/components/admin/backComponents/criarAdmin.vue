<template>
  <v-layout>
    <v-flex mt-5 mb-5 xs6 offset-xs3>
      <panel title="Criar Administrador" id="form">
        <form id="form">
          <v-text-field
            label="Email"
            v-model="email"
            :rules="[v => !!v || 'Preencha este campo']"
            autofocus
            clearable
            required
          ></v-text-field>
          <br>
          <v-text-field
            name="senha"
            label="Senha"
            hint="Pelo menos 8 digitos"
            v-model="password"
            :rules="[v => v && v.length >= 8 || 'Pelo menos 8 digitos']"
            :append-icon="e1 ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (e1 = !e1)"
            :type="e1 ? 'password' : 'text'"
            counter
            required
          ></v-text-field>
          <br>
          <v-text-field
            label="Cpf"
            type="text"
            :rules="rules"
            v-model="cpf"
            clearable
            required
          ></v-text-field>
          <br>
          <v-select
            v-bind:items="items"
            v-model="nivelAcesso"
            label="Nivel de acesso"
            data-vv-name="select"
            required
          ></v-select>
          <br>
          <div class="error" v-if="error">{{error}}</div>
          <v-btn
            dark
            color="grey darken-4"
            @click="registrar">
            Registrar
          </v-btn>
        </form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import panel from '../globals/panel'
import adminService from '../../../services/adminAuthentication'

export default {
  data () {
    return {
      cpf: null,
      error: null,
      email: null,
      password: null,
      nivelAcesso: null,
      e1: false,
      rules: [
        (v) => !!v || 'Preencha esse campo',
        (v) => /\d+/.test(v) || 'Cpf inválido'
      ],
      items: ['1', '2', '3', '4']
    }
  },
  methods: {
    async registrar () {
      const dados = {
        cpf: this.cpf,
        username: this.email,
        password: this.password,
        nivelAcesso: this.nivelAcesso
      }
      document.getElementsByTagName('form')[0].checkValidity()
      ? await adminService.postAdmin(dados)
      : null
    }
  },
  components: {
    panel
  },
  mounted () {
    // TODO pegar dados do admin
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
