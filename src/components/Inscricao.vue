<template>
            <form action="">
        <b-field label="Nome completo">
            <b-input v-model="name"></b-input>
        </b-field>

        <b-field label="Tipo de Inscrição" >
            <b-input
                     maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Razão Social">
            <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <div class="columns">
            <div class="column">
                <b-field label="CPF">
                    <b-input 
                         password-reveal>
                    </b-input>
                </b-field>
            </div>
            <div class="column">
                <b-field label="Endereço">
                    <b-input 
                         password-reveal>
                    </b-input>
                </b-field>
            </div>
        </div>
        <b-field label="Tipo de Inscrição">
            <b-input 
                 password-reveal>
            </b-input>
        </b-field>

        <b-field label="Hotel">
            <b-input
                 password-reveal>
            </b-input>
        </b-field>
        <b-field label="Acompanhante">
            <b-input
                 password-reveal>
            </b-input>
        </b-field>
        <b-field label="Voo">
            <b-input
                 password-reveal>
            </b-input>
        </b-field>
        <a class="button">Salvar</a>
  </form>
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
