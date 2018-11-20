<template>
    <body id="app">
        <nav
            v-if="Object.keys(usuario).length > 0"
            class="navbar is-fixed-top has-background-light" 
            role="navigation" 
            aria-label="main navigation"
        >
            <div class="navbar-brand">
                <a class="navbar-item">
                    <!-- img src="./assets/logo.png" width="112" height="28"-->
                </a>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="#/eventos">
                        Eventos
                    </a>
                    <a class="navbar-item" href="#/inscricao">
                        Inscrição
                    </a>
                </div>
                <div class="navbar-end">
                    <b-dropdown v-model="navigation" position="is-bottom-left">
                        <a class="navbar-item" slot="trigger">
                            <span>{{usuario.usuario}}</span>
                            <b-icon icon="menu-down"></b-icon>
                        </a>
                        <b-dropdown-item  @click="sair()" value="logout">
                            <b-icon icon="logout"></b-icon>
                            Sair
                        </b-dropdown-item>
                        <b-dropdown-item has-link value="logout">
                            <router-link :to="'/cadastro'">Meus Dados</router-link>
                        </b-dropdown-item>
                    </b-dropdown>
                </div>
          </div>
      </nav>
      <section class="section">
          <router-view></router-view>
      </section>
  </body>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
        return {
            navigation: false
        }
  },
  components: {
    HelloWorld
  },
    computed:{
        ...mapGetters({
            usuario: 'usuario/usuarioGetter'
        })
    },
    methods: {
        ...mapActions({
            sairAction: 'usuario/removeUsuarioAction'
        }),
        sair(){
            this.sairAction();
            this.$router.push('/login')
        }
    }
}
</script>
<style>
</style>
