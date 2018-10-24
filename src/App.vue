<template>
  <body id="app">
      <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
              <a class="navbar-item" href="https://bulma.io">
                  <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
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
                  <a class="navbar-item" href="#/login">
                     Login
                  </a>
                  <a class="navbar-item" href="#/cadastro">
                     Cadastro
                  </a>
                  <a class="navbar-item" href="#/inscricao">
                     Inscrição
                  </a>
              </div>
          </div>
      </nav>
      <section class="section">
          <router-view></router-view>
      </section>
  </body>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>
<style>
</style>
