<template>
    <div>
        <div class="form-container">
            <form>

            </form>
        </div>
        <div class="info-container">
            <p>ID: {{ user.id }}</p>
            <p>Nombre: {{ user.name }} {{ user.apellido }}</p>
            <p>E-mail: {{ user.email }}</p>
            <p>NIF: {{ user.NIF }}</p>
            <p>{{ user.activo ? 'Usuario activo' : 'Usuario inactivo' }}</p>
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
            user: {}
        }
    },
    // los valores referenciados dentro de created se han de llamar como this.
    created() {
        this.user = users.getSingleUser(this.id);
    }
}
</script>

<style>

</style>
