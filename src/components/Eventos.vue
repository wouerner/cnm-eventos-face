<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column"
                     v-for=" n in [1,2]"
                     :key="n"
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
                                <p class="title is-4">Mobilização: Avanços da Pauta Municipalista</p>
                                <p class="subtitle is-6">@admin</p>
                            </div>
                        </div>
                        <div class="content">
                            Convocamos todos os municipalistas a estarem em Brasília nos dias 19 e 20 de novembro para uma grande mobilização municipalista.
                            <br>
                            <b><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></b>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a
                            href="#"
                            class="card-footer-item"
                            @click="isModalEventoActive = true">
                            Inscrição
                        </a>
                        <a href="https://www.cnm.org.br/index.php/informe/exibe/mobilizacao-avancos-da-pauta-municipalista" class="card-footer-item">Saiba mais</a>
                        <a href="/gerenciar" class="card-footer-item">Gerenciar</a>
                    </footer>
                     </div>
                </div>
            </div>

            <div class="columns">
                <div
                    class="column"
                    v-for=" n in [1,2,3]"
                    :key="n"
                    >
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">Eventos</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                </div>
                            </div>

                            <div class="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                <a href="#">#css</a> <a href="#">#responsive</a>
                                <br>
                                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <a href="#" class="card-footer-item">Programação</a>
                            <a href="#" class="card-footer-item">Inscrição</a>
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
                    <Inscricao />
                </section>
            </div>
        </b-modal>
</section>
</template>

<script>
import Inscricao from './Inscricao'

export default {
  name: 'Login',
  components:{ Inscricao },
  data() {
      return {
          isModalEventoActive: false
      }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
