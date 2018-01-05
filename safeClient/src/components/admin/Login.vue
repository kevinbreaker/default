<template>
  <v-layout class="background">
    <v-flex xs4 sm4 offset-sm4>
      <div class="form">
        <v-form v-model="valid">
          <v-text-field
            label="Name"
            v-model="name"
            :rules="nameRules"
            :counter="10"
            required
          ></v-text-field>
          <v-text-field
            label="E-mail"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>
           <v-text-field
            dark
            label="Password"
            v-model="password"
            required
            focus
          ></v-text-field>
        </v-form>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: ''
      // Inserir Regex \/
      // passwordRules: [
      //   (v) => !!v || 'Senha is required',
      //   (v) =>
      // ]
    }
  },
  mounted () {
    // TODO pegar dados do admin
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form{
  height: auto;
  border: 5px solid black;
  margin-top: 100px;
  padding: 15px;
}
.background{
  
}
</style>
