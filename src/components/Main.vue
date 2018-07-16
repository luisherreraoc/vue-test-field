<template>
  <div class="wrapper">

    <div>
      <label for="search">Indica tu búsqueda: </label>
      <input id="search" type="text" v-model="busqueda">
    </div>

    <div>
      <label><input type="radio" v-model="isActive" value="todos" />Todos</label>
      <label><input type="radio" v-model="isActive" value="active" />Activo</label>
      <label><input type="radio" v-model="isActive" value="inactive" />No activo</label>      
    </div>

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
  // los valores referenciados desde data se han de llamar como this.
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
        return this.getActiveUsers.filter(user => 
                user.pais.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                .includes(this.busqueda.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))); 
      }
    }
  },
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
