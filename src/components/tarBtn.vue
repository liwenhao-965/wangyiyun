<template>
    <van-tabbar v-model="active">
  <van-tabbar-item name="search" to="/" icon="search">发现</van-tabbar-item>
  <van-tabbar-item name="home" to = "/Fenlei" icon="home-o">云村</van-tabbar-item>
  <van-tabbar-item name="friends" icon="friends-o">我的</van-tabbar-item>
  <van-tabbar-item name="setting" icon="setting-o">账号</van-tabbar-item>
</van-tabbar>
</template>

 <script>
 export default {
     data(){
         return{
             active: "search"
         }
     },
     mounted(){
         switch (this.$route.path) {
             case "/Fenlei":
                 this.active = "home"
                  break;
                  
            case "/":

                this.active = "search"
                 break;
         
             default:
                this.active = "search"
                 break;
         }
     }
     
 }
 </script>