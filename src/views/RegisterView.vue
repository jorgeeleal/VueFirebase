<script setup>
import { useUserStore } from '../stores/UserStore';
//-------------------------------------------------

const useUser = useUserStore();
</script>

<template>
    <h1>Register</h1>
    <button @click="useUser.register('Fernanda')">Registro</button>
</template>