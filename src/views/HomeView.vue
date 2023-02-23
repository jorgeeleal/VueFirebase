<script setup>  
import { useUserStore } from '../stores/UserStore'; 
//-----------------------------------------------------
    const useUser = useUserStore();

</script>

<template>
    <h1>Home</h1>
    <p>Hola, {{ useUser.userData }}</p>
</template>