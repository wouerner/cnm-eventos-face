<template>
  <form>
        <b-field label="Nome do Evento">
            <b-input 
                type="text" 
                v-model="nome">
            </b-input>
        </b-field>

        <b-field label="Data do evento">
            <b-datepicker
                v-model="data"
                icon="calendar-today">
            </b-datepicker>
        </b-field>

        <label class="label">Descrição</label>
        <textarea v-model="descricao" class="textarea" placeholder="Descrição"></textarea>

        <a class="button is-primary" @click="salvar()">Salvar</a>
</form>
</template>

<script>
export default {
  name: 'CadastroEventoForm',
  props: {
    dados: Object
  },
    data(){
        return {
            nome: '',
            data: new Date(),
            descricao: ''
        }
    },
    methods:{
        salvar(){
            this.$emit('evento-cadastro', { nome: this.nome, data: this.data, descricao: this.descricao})
            this.nome = ''
            this.data = new Date()
            this.descricao =''
        }
    },
    mounted(){
        if (this.dados) {
            this.nome = this.dados.nome
            this.data = this.dados.data
            this.descricao = this.dados.descricao
        }
    }
}
</script>
<style scoped>
</style>
