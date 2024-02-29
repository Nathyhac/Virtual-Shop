import { createRouter, createWebHistory } from 'vue-router'
import Body from "@/components/Body.vue"
import Register from "@/components/Register.vue"
import Item from "@/components/owner/AddItem.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:"/",
    component:Body
   },
   {
    path:"/Register",
    component:Register
   },
   {
    path:"/add",
    component:Item
   }
  
  ]
})

export default router
