<template>
    <div>
        <div class="form-container" v-if="editar">
            <Form :user="user"
                  @ver-info="toggleEdit"/>
        </div>
        <div v-else class="info-container">
            <h2>ID: {{ user.id }}</h2>
            <h3>Nombre: {{ user.name }} {{ user.apellido }}</h3>
            <p>E-mail: {{ user.email }}</p>
            <p>Pais: {{ user.pais }}</p>
            <p>NIF: {{ user.NIF }}</p>
            <p>{{ user.activo ? 'Usuario activo' : 'Usuario inactivo' }}</p>

            <i class="fas fa-user-edit" @click="toggleEdit"></i>
        </div>

        <router-link to="/">Volver al listado</router-link>
    </div>
</template>

<script>
import users from '@/api/users'

export default {
    components: {
        // lazyload, no se carga este componente hasta que es llamado (en este caso, al cumplirse el if)
        Form: () => import('./Form.vue')
    },
    // al estarle pasando el params de la route, se declara como props
    // de esta forma se puede usar dentro de todo el componente
    props: ['id'],
    data () {
        return {
            user: {},
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
        }
    }
}
</script>

<style scope>
.fas {
    color: rgb(165, 179, 176);
    font-size: 20px;
}
</style>
