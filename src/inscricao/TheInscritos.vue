<template>
    <section class="section">
        <div class="container">
            <b-table :data="data" :columns="columns"></b-table>
        </div>
    </section>
</template>

<script>
import Inscricao from './Inscricao'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Login',
  components:{ Inscricao},
  data() {
      return {
          isModalEventoActive: false,
          isEventoCadastroActive: false,
          data: [
              { 'id': 1, 'first_name': 'Jesse' },
              { 'id': 2, 'first_name': 'John' },
          ],
          columns: [
              {
                  field: 'id',
                  label: 'ID',
                  width: '40',
                  numeric: true
              },
              {
                  field: 'first_name',
                  label: 'Nome',
                  centered: true
              },
          ]
      }
  },
  props: {
    msg: String
  },
  created(){
    this.syncInscricoesAction()
  },
  computed:{
      ...mapGetters({
          inscricoesGetter: 'inscricoes/inscricoesGetter'
      }),
  },
  methods:{
      ...mapActions({
          syncInscricoesAction: 'inscricoes/syncInscricoesAction',
      }),
      salvar(data){
          this.salvarAction(data)
      },
      duplicar(id){
          this.isEventoCadastroActive = true
          this.data = this.eventosGetter[id]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
