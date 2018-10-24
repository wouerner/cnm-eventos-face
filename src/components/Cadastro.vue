<template>
  <div class="container">
    <section>
        <b-field label="Nome completo">
            <b-input v-model="name"></b-input>
        </b-field>

        <b-field label="CPF" >
            <b-input
                     maxlength="30">
            </b-input>
        </b-field>

        <b-field label="E-mail">
            <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <div class="columns">
            <div class="column">
                <b-field label="Celular">
                    <b-input 
                         password-reveal>
                    </b-input>
                </b-field>
            </div>
            <div class="column">
                <b-field label="Telefone">
                    <b-input 
                         password-reveal>
                    </b-input>
                </b-field>
            </div>
        </div>

        <b-field label="UF">
            <b-input 
                 value="iwantmytreasure"
                 password-reveal>
            </b-input>
        </b-field>

        <div class="columns">
            <div class="column">
                <b-field label="Municipio">
                    <b-input
                             password-reveal>
                    </b-input>
                </b-field>
            </div>
            <div class="column">
                <b-field label="UF">
                    <b-input
                         password-reveal>
                    </b-input>
                </b-field>
            </div>
        </div>
        <b-field label="Cargo">
            <b-input
                     password-reveal>
            </b-input>
        </b-field>
        <div class="columns">
            <div class="column">
                <b-field label="Senha">
                    <b-input type="password"
                             value="iwantmytreasure"
                             password-reveal>
                    </b-input>
                </b-field>
            </div>
            <div class="column">
                <b-field label="Senha">
                    <b-input type="password"
                             value="iwantmytreasure"
                             password-reveal>
                    </b-input>
                </b-field>
            </div>
        </div>
        <a class="button">Salvar</a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
