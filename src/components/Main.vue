<template>
  <div class="wrapper">
    <div class="search-wrap">

      <div>
        <label for="search">Indica tu búsqueda: </label>
        <!-- en los inputs el v-model es el q se encarga del two-way binding -->
        <input id="search" type="text" v-model="busqueda">            
      </div>

      <div>
        <label for="filtro">Buscar según: </label>
        <select v-model="filtro" name="filtro" id="filtro">
          <option value="pais">País</option>
          <option value="apellido">Apellido</option>
          <option value="nif">NIF</option>
        </select>
      </div>

    </div>

    <div>
      <p>Mostrar usuarios con estado: </p>
      <div class="radio-wrap">
        <input id="all" type="radio" class="radio-btn" v-model="isActive" value="todos" />
        <label class="radio-lbl" for="all"> Todos</label>
        <input id="active" type="radio" class="radio-btn" v-model="isActive" value="active" />
        <label class="radio-lbl" for="active"> Activo</label>
        <input id="inactive" type="radio" class="radio-btn" v-model="isActive" value="inactive" />
        <label class="radio-lbl" for="inactive"> No activo</label>           
      </div>
   
    </div>      

    <div class="users-wrapper">
      <!-- al usar v-for, Vue nos pedirá por defecto q a cada valor de la iteration le demos una :key única -->
      <ListadoUsers v-for="user in usersPerPage" 
                    :key="user.id"
                    :user="user"/>
      
    </div>

    <Pagination v-model="page" :items="getFilteredUsers.length" :perPage="mostrar"/>

    <div>
      <p>Mostrar por página: </p>
      <!-- cuando queremos bindear un valor a un input del tipo boolean o number utilizamos el v-bind (:) -->
      <!-- sin el bind el valor q le pasamos será directamente una string -->
      <input type="radio" v-model="mostrar" :value=6 /><label> 6 </label>
      <input type="radio" v-model="mostrar" :value=12 /><label> 12 </label>
      <input type="radio" v-model="mostrar" :value=16 /><label> 16 </label>      
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
      mostrar: 6,
      filtro: 'pais'
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

      let fil = this.filtro;

      if (fil === "pais") {
        return this.getActiveUsers.filter(user => 
                user.pais.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                .match(filter))
      } else if (fil === "apellido") {
        return this.getActiveUsers.filter(user => 
                user.apellido.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                .match(filter))
      } else {
        return this.getActiveUsers.filter(user => 
                user.NIF.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                .match(filter))
      }
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

select {
  background-color: rgb(205, 219, 216);
  border: 1px solid rgb(181, 192, 190)
}

.wrapper {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.search-wrap {
  display: flex; 
  justify-content: space-evenly;
  background-color: rgb(211, 226, 223);
  padding: 15px;
  border-radius: 5px;
  box-shadow: 3px 3px rgb(205, 219, 216);
}

.radio-wrap {
  display: flex;
  justify-content: space-evenly;
}

.users-wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

/* de https://codepen.io/raubaca/pen/ONzBxP */

.radio-btn {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.radio-lbl {
  position: relative;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  padding-left: 30px;
  padding-right: 10px;
  line-height: 36px;
  cursor: pointer;
}
.radio-lbl::before {
  content: " ";
  position: absolute;
  top: 6px;
  left: 0;
  display: block;
  width: 24px;
  height: 24px;
  border: 2px solid rgb(194, 204, 202);
  border-radius: 4px;
  z-index: -1;
}
.radio-btn + .radio-lbl::before {
  border-radius: 18px;
}
/* Checked */
.radio-btn:checked + .radio-lbl {
  padding-left: 10px;
  color: #fff;
}
.radio-btn:checked + .radio-lbl::before {
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(194, 204, 202);
}
/* Transition */
.radio-lbl,
.radio-lbl::before {
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
}
</style>
