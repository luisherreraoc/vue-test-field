<template>
  <div class="wrapper">
    <form class="filter" @submit.prevent="onSubmit">
      <label for="search">Indica tu búsqueda: </label>
      <input id="search" type="text" v-model="busqueda">
      <input type="submit" value="Submit">
    </form>

    <label><input type="radio" v-model="isActive" value="todos" />Todos</label>
    <label><input type="radio" v-model="isActive" value="active" />Activo</label>
    <label><input type="radio" v-model="isActive" value="inactive" />No activo</label>

    <ul>
      <ListadoUsers v-for="user in getFilteredUsers" 
          :key="user.id"
          :user="user"/>
    </ul>
  </div>
</template>

<script>

import ListadoUsers from './ListadoUsers.vue'
import users from '@/api/users'

export default {
  components: {
    // declarar los componentes que se utilizan dentro de este Vue file
    ListadoUsers
  },
  data () {
    return {
      users: [],
      isActive: "todos",
      busqueda: ''
    }
  },
  methods: {
    onSubmit () {
      this.getFilteredUsers;
    }
  },
  computed: {
    getActiveUsers () {
      let estado = this.isActive;

      if (estado === "todos") {
        return this.users
      } else if (estado === "active") {
        return this.users.filter(user => user.activo === true)
      } else {
        return this.users.filter(user => user.activo === false)
      }
    },
    getFilteredUsers() {
      if (this.busqueda === '') {
        return this.getActiveUsers;
      } else {
        return this.getActiveUsers.filter(user => user.pais === this.busqueda) 
      }
    }
  },
  // los valores referenciados dentro de created se han de llamar como this.
  created () {
    users.getUsers(users => {
      this.users = users;
    })
  }
}
</script>

<!-- el style scoped hace q este CSS solo se aplique al componente donde se monta -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
