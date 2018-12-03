<template>
    <section class="section">
      <div class="container">
          <h1 class="title">Eventos</h1>
          <h2 class="subtitle">Editar</h2>
          <EventoCadastro
              v-if="Object.keys(evento).length > 0"
              :dados="evento"
          />
      </div>
    </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import EventoCadastro from './components/CadastroForm'

export default {
  name: 'TheGerenciarEvento',
  components:{ EventoCadastro },
  data(){
      return {
          senha:'',
          usuario: '',
          evento: {}
      }
  },
  props: {
    msg: String
  },
  computed: {
      ...mapGetters({
          eventoGetter:'eventos/eventoGetter'
      }),
  },
  mounted(){
      const id = this.$route.params.id;
      this.evento = this.eventoGetter(id);
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
