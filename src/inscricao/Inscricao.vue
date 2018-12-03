<template>
    <form action="">
        <h1 class="title">{{evento.nome}}</h1>
        <b-field label="Nome completo">
            <b-input
                v-model="usuario.usuario"
                disabled="true"
                ></b-input>
        </b-field>

        <a @click="salvar()" class="button">Salvar</a>
  </form>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Inscricao',
  data(){
    return {
        usuarioId: '1',
        eventoId: '1'
    }
  },
  props: {
    evento: Object,
    usuario: Object
  },
  methods:{
    ...mapActions({
        setInscricaoAction: 'inscricao/setInscricaoAction',
    }),
    salvar(){
        this.setInscricaoAction({usuarioId: this.usuarioId, eventoId: this.eventoId})
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
