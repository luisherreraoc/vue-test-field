<template>
    <div>
        <form @submit.prevent="onSubmit">
            <p>
                <label for="nombre">Nombre </label>
                <input type="text" v-model="nombre" :placeholder="user.name">    
            </p>
            <p>
                <label for="apellido">Apellido </label>
                <input type="text" v-model="apellido" :placeholder="user.apellido">
            </p>

            <p>
                <input @click="toggle" type="submit" value="Actualizar">
            </p>
        </form>

        <button @click="toggle">Volver a la info.</button>        
    </div>
</template>

<script>
import users from '@/api/users'

export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            nombre: '',
            apellido: '',
        }
    },
    methods: {
        onSubmit () {
            let data = {
                'name': this.nombre,
                'apellido': this.apellido,
            }
            users.updateUser(this.user.id, data);
            this.nombre = '';
            this.apellido = '';
        },
        toggle () {
            this.$emit('ver-info')
        }
    }    
}
</script>

<style scoped>

</style>
