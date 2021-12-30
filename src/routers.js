import {createRouter, createWebHistory} from "vue-router";
import Home from "@/components/Home";
import PostDetail from "@/components/PostDetail";
import CreatePost from "@/components/CreatePost";
import PostEdit from "@/components/PostEdit";



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

    },
            {
        path: '/create',
        name: "create",
        component:CreatePost

    },
        {
        path: '/edit/:id',
        name: "postedit",
        component:PostEdit,
        props:true

    }



]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;