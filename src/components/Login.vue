<template>
  <div class="container">
    <section>
        <b-field label="Nome"
                 type="is-success"
                 message="This username is available">
            <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="senha">
            <b-input type="password"
                     value="iwantmytreasure"
                     password-reveal>
            </b-input>
        </b-field>
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
