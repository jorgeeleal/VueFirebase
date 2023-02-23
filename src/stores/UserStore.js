import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: 'leal'
    }),
    getters: {
        mayuscula(state){
            return state.userData.toUpperCase();
        }
    },
    actions: {
        register(name){
            this.userData = name;
        }
    }

})