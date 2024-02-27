import { createRouter, createWebHistory } from 'vue-router'
import Body from "@/components/Body.vue"
import Register from "@/components/Register.vue"



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
   }
  
  ]
})

export default router
