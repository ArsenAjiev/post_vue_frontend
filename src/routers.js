import {createRouter, createWebHistory} from "vue-router";
import Home from "@/components/Home";
import PostDetail from "@/components/PostDetail";



const routes = [
    {
        path: '/',
        name: "home",
        component:Home

    },
       {
        path: '/details/:id',
        name: "details",
        component:PostDetail,
        props:true

    }


]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;