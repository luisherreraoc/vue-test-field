<template>
    <div>
        <div class="form-container" v-if="editar" @submit.prevent="onSubmit">
            <form>
                <p>
                    <label for="nombre">Nombre </label>
                    <input type="text" v-model="nombre" :placeholder="user.name">    
                </p>
                <p>
                    <label for="apellido">Apellido </label>
                    <input type="text" v-model="apellido" :placeholder="user.apellido">
                </p>

                <p>
                    <input type="submit" value="Actualizar">
                </p>
            </form>

            <button @click="toggleEdit">Volver a la info.</button>
        </div>
        <div v-else class="info-container">
            <p>ID: {{ user.id }}</p>
            <p>Nombre: {{ user.name }} {{ user.apellido }}</p>
            <p>E-mail: {{ user.email }}</p>
            <p>Pais: {{ user.pais }}</p>
            <p>NIF: {{ user.NIF }}</p>
            <p>{{ user.activo ? 'Usuario activo' : 'Usuario inactivo' }}</p>

            <button @click="toggleEdit">Editar</button>
        </div>

        <router-link to="/">Volver al listado</router-link>
    </div>
</template>

<script>
import users from '@/api/users'

export default {
    // al estarle pasando el params de la route, se declara como props
    // de esta forma se puede usar dentro de todo el componente
    props: ['id'],
    data () {
        return {
            user: {},
            nombre: '',
            apellido: '',
            editar: false
        }
    },
    // los valores referenciados dentro de created se han de llamar como this.
    created() {
        this.user = users.getSingleUser(this.id);
    },
    methods: {
        toggleEdit () {
            this.editar = !this.editar;
        },
        onSubmit () {
            let data = {
                'name': this.nombre,
                'apellido': this.apellido,
            }
            
            users.updateUser(this.id, data);

            this.editar = false;
            this.nombre = '';
            this.apellido = '';
        }
    }
}
</script>

<style>

</style>
