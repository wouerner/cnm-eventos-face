<template>
    <section class="section">
        <div class="container">
            <a
                href="#"
                class="button"
                @click="isEventoCadastroActive = true"
                >
                Novo Evento 
            </a>
            <div class="columns">
                <div class="column"
                     v-for="(evento, index) in eventosGetter"
                     :key="index"
                     >
                     <div class="card" >
                         <div class="card-image">
                             <figure class="image is-4by3">
                                 <img src="../assets/banner-360x250-01.jpg" alt="Placeholder image">
                             </figure>
                         </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{{evento.nome}}</p>
                                <p class="subtitle is-6">@admin</p>
                            </div>
                        </div>
                        <div class="content">{{evento.descricao}}
                            <br>
                            <b><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></b>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a
                            href="#"
                            class="card-footer-item"
                            @click="inscrever(index)"
                        >
                            Inscrição
                        </a>
                        <a href="https://www.cnm.org.br/index.php/informe/exibe/mobilizacao-avancos-da-pauta-municipalista" class="card-footer-item">Saiba mais</a>
                        <router-link  class="card-footer-item" :to="'/gerenciar/evento/' + index">Gerenciar</router-link>
                        <router-link  class="card-footer-item" :to="'/gerenciar/evento/' + index + '/inscritos'">Inscritos</router-link>
                        <a href="#" class="card-footer-item" @click="duplicar(index)">Duplicar</a>
                    </footer>
                     </div>
                </div>
            </div>
        </div>
        <b-modal :active.sync="isModalEventoActive" has-modal-card>
            <header class="modal-card-head">
                <p class="modal-card-title">Inscrição</p>
            </header>
            <div class="modal-card" style="width: auto">
                <section class="modal-card-body">
                    <Inscricao
                        :evento="inscricao"
                        :usuario="usuario"
                    />
                </section>
            </div>
        </b-modal>
        <b-modal
            :active.sync="isEventoCadastroActive" has-modal-card>
            <header class="modal-card-head">
                <p class="modal-card-title">Novo Evento</p>
            </header>
            <div class="modal-card" style="width: auto">
                <section class="modal-card-body">
                    <EventosCadastro :dados="data" @evento-cadastro="salvar($event)" />
                </section>
            </div>
        </b-modal>
</section>
</template>

<script>
import Inscricao from '../inscricao/Inscricao'
import EventosCadastro from './components/CadastroForm'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'TheEventos',
  components:{ Inscricao, EventosCadastro},
  data() {
      return {
          isModalEventoActive: false,
          isEventoCadastroActive: false,
          data: {},
          inscricao: {}
      }
  },
  props: {
    msg: String
  },
  created(){
    this.eventosAction()
  },
  computed:{
      ...mapGetters({
          eventosGetter: 'eventos/eventosGetter',
          eventoGetter: 'eventos/eventoGetter',
          usuario: 'usuario/usuarioGetter'
      }),
  },
  methods:{
      ...mapActions({
          salvarAction: 'eventos/setEventoAction',
          eventosAction: 'eventos/syncEventosAction',
      }),
      salvar(data){
          this.salvarAction(data)
      },
      duplicar(id){
          this.isEventoCadastroActive = true
          this.data = this.eventosGetter[id]
      },
      inscrever(id){
          this.isModalEventoActive = true
      //    this.isEventoCadastroActive = true
          this.inscricao = this.eventoGetter(id)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
