<template>
    <div class="li-wrapper">
        <li>
            {{ user.name }} 
            {{ user.apellido }}
        </li>
        <li>
            {{ user.email }}
        </li>

        <button >
            <!-- otra opción para pasar el :to del router link:
                un objeto que incluye el nombre del path (declarado en el router)
                y el valor que referenciamos como params -->
            <router-link :to="{name: 'details', params: {id: user.id}}"> Detalles</router-link>
        </button>
    </div>    
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>

<!-- el style scoped hace q este CSS solo se aplique al componente donde se monta -->
<style scoped>
    .li-wrapper {
        padding: 20px 40px;
        margin: 10px auto;
        width: 250px;
        height: 100px;
    }
</style>
