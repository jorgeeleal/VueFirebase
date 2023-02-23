import { createRouter, createWebHistory } from "vue-router";
                       // -- Evitar el # al momento de generar las rutas
//---------------------------------------------------------------------

const routes = [
    {path: '/', component: () => import('./views/HomeView.vue')},
    {path: '/loggin', component: () => import('./views/LogginView.vue')},
    {path: '/register', component: () => import('./views/RegisterView.vue')},
    {path: '/:pathMatch(.*)*', component: () => import('./views/PageNotFoundView.vue')}
]

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;

