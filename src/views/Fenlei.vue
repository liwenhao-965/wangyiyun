<template>
  <div id="Fenlei"> 
      <h1>scacas</h1>
      
      <tar-btn></tar-btn>
  </div>
</template>

 <script>
import tarBtn from "../components/tarBtn.vue"
 export default {
     data(){
         return{
             active:'home'
         }
     },
     components:{
         tarBtn

     }
 }
 </script>