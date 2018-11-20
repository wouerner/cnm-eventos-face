<template>
    <section class="section">
  <div class="container">
        <b-field
            v-model="usuario"
            label="Nome"
            type="is-success"
            message="This username is available">
            <b-input v-model="usuario" value="johnsilver" maxlength="30"></b-input>
        </b-field>
        <b-field label="senha">
            <b-input
                v-model="senha"
                type="password"
                value="iwantmytreasure"
                password-reveal>
            </b-input>
        </b-field>
    <button @click="entrar()" class="button">Entrar</button>
  </div>
    </section>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'TheLogin',
  data(){
      return {
          senha:'',
          usuario: ''
      }
  },
  props: {
    msg: String
  },
  methods:{
    ...mapActions({
        setUsuarioAction: 'usuario/setUsuarioAction'
    }),
    entrar() {
        this.setUsuarioAction({
            usuario: this.usuario,
            senha: this.senha,
            credentials: {
                createEvents: true
            }
        });

        this.$router.push('/eventos')
    }
  },
}
</script>
<style scoped>
</style>
