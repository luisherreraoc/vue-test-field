<template>
    <div class="wrapper">
        <div class="user-info">
            <p>
                {{ user.name }} 
                {{ user.apellido }}
            </p>
            <p>
                {{ user.email }}
            </p>            
        </div>
        <!-- otra opción para pasar el :to del router link:
            un objeto que incluye el nombre del path (declarado en el router)
            y el valor que referenciamos como params -->
        <p class="edit-options">
            <router-link class="goTo" :to="{name: 'details', params: {id: user.id}}"><i class="fas fa-address-card"></i></router-link>
            <i @click="deleteUser(user.id)" class="fas fa-archive"></i>
        </p>
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
    methods: {
        deleteUser(id) {
            users.archiveUser(id);
        }
    }
}
</script>

<!-- el style scoped hace q este CSS solo se aplique al componente donde se monta -->
<style scoped>
    .wrapper {
        padding: 30px 40px;
        margin: 10px auto;
        width: 250px;
        height: 100px;
    }
    .wrapper p {
        margin: 0;
    }
    .fas {
        color: rgb(182, 196, 193);
        font-size: 20px;
    }
    .edit-options {
        display: flex;
        justify-content: space-around;
        padding: 10px;
    }
    .user-info {
        padding: 10px;
        background-color: rgb(194, 211, 208);
        border: 1px solid rgb(168, 180, 178);
        border-radius: 4px;
        box-shadow: 2px 2px rgb(168, 180, 178);
    }
</style>
