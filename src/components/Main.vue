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

    <ul class="users-wrapper">
      <ListadoUsers v-for="user in usersPerPage" 
                    :key="user.id"
                    :user="user"/>
    </ul>

    <Pagination v-model="page" :items="getFilteredUsers.length" :perPage="mostrar"/>

    <div>
      <p>Mostrar por página: </p>
      <label><input type="radio" v-model="mostrar" :value=6 />6</label>
      <label><input type="radio" v-model="mostrar" :value=12 />12</label>
      <label><input type="radio" v-model="mostrar" :value=16 />16</label>      
    </div>    

  </div>
</template>

<script>

import ListadoUsers from './ListadoUsers.vue'
import Pagination from './Pagination.vue'
import users from '@/api/users'
import getArraySection from '../arraysec.js'

export default {
  components: {
    // declarar los componentes que se utilizan dentro de este Vue file
    ListadoUsers,
    Pagination
  },
  data () {
    return {
      users: [],
      isActive: "todos",
      busqueda: '',
      page: 1,
      mostrar: 6
    }
  },
  // los valores referenciados desde data se han de llamar como this.
  computed: {
    usersPerPage () {
      return getArraySection(this.getFilteredUsers, this.page, this.mostrar)
    },
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
      let filter = new RegExp(this.busqueda.normalize('NFD').replace(/[\u0300-\u036f]/g, ""), 'i')
      return this.getActiveUsers.filter(user => 
              user.pais.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
              .match(filter))
    }
  },
  watch: {
    busqueda: function() {
      this.watchFunction();
    }
  },
  methods: {
    watchFunction () {
      console.log('I`m being called on busqueda update!')
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
  .wrapper {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  .users-wrapper {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
