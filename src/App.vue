<script setup>

import Header from './components/Header.vue';
import Footer from "@/components/Footer.vue"
</script>

<template>
   <Header/>
   <div>
    <router-view />
   </div>
  
   <Footer />
   
</template>


