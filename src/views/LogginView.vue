<script setup>
import { useUserStore } from '../stores/UserStore';
import { computed } from 'vue';
//-------------------------------------------------

const useUser = useUserStore();

const mayuscula = computed(() => useUser.userData.toUpperCase())

</script>

<template>
    <h1>Loggin</h1>
    <p>Loggeado: {{ mayuscula }}</p> 
</template>