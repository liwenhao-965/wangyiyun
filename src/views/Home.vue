<template>
  <div class="home" id="home">
    <div class="head-one">
      <div >
         <Icon type="ios-mic-outline"  size = "30"/>
      </div>
          <Input v-model="value4" 
     placeholder="输入歌手名字" 
     style="width: 280px"
     background-color= "#fff"
      />
      <div class="dingzhiyuan">
   <van-icon name="music-o" size="40" />
      </div>
    </div>
     
     <div class="bannner"  >
        <Carousel autoplay v-model="value2" loop :height = "200"  >
        <CarouselItem v-for="(item,index) in banner" :key="index">
            <img class="imgdaxiao" :src="item.imageUrl" />
        </CarouselItem>
        </Carousel>
     </div>

      <div class="grid">
        <div class="grid-child1"> 
            <div class="grid-child11">
             <Icon type="md-calendar" 
             color="white" 
             size = "40"
            /> </div>                
        </div>
        <div class="grid-child2">
           <div class="grid-child21">
             <Icon type="md-musical-notes />" 
             color="white" 
             size = "35"
            /> </div>    

        </div>
        <div class="grid-child3">
          <div class="grid-child31">
             <Icon type="ios-stats"
             color="white" 
             size = "40"
            /> </div>    

        </div>
        <div class="grid-child4">
          <div class="grid-child41">
             <Icon type="ios-radio" 
             color="white" 
             size = "40"
            /> </div>    

        </div>
        <div class="grid-child5">
          <div class="grid-child51">
             <Icon type="md-aperture" 
             color="white" 
             size = "40"
            /> </div>    

        </div>

      </div>

    <div class="meirituijiangedan">
      <div style="margin-left:-13px">每日推荐</div>
      <div style="margin-left:-15px">歌单</div>
      <div>排行榜</div>
      <div>电台</div>
      <div>直播</div>
    </div>

    <div class="tuijiangedan">
      <div style="font-weight:bold;font-size:20px; position:absolute;left:5px; " >推荐歌单</div>
      <div class="annniu">查看更多</div>
    </div>

    <div class="musicList">
      <div class="musicList-one">
                <img src="../assets/listpic/u=1148804569,2536594750&fm=26&gp=0.jpg" 
                alt=""
               >
                <span>[一周新歌推荐]</span>
      </div>
      <div class="musicList-one">
                <img src="../assets/listpic/u=2247500254,2246455067&fm=26&gp=0.jpg" 
                alt=""
               >
                <span>[一周新歌推荐]</span>

      </div>
      <div class="musicList-one">
                <img src="../assets/listpic/u=2980896150,1513192047&fm=26&gp=0.jpg" 
                alt=""
               
                 >
                <span>[一周新歌推荐]</span>
      </div>
      <div class="musicList-one">
                <img src="../assets/listpic/u=3106299955,1726578448&fm=26&gp=0.jpg" 
                alt=""
               >
                <span>[一周新歌推荐]</span>
      </div>
       <div class="musicList-one">
                <img src="../assets/listpic/u=3842516634,1204275282&fm=26&gp=0.jpg" 
                alt=""
               >
                <span>[一周新歌推荐]</span>
       </div>
    </div>


<div class="musicliebiao" v-for="(item,index) in musiclist" :key="index">
  <div class="musicliebiao1">
    <img :src="item.imgUrl" alt="">
  </div>
  <div class="musicliebiao2">
    <p style="font-weight:bold">{{item.singername}}</p>
    <p>{{item.zhanghuimei}}</p>
  </div>
  <div class="musicliebiao3"><van-icon name="music"  size="40" color="#ee0a1d"/></div>
</div>

<div class="zhangao"></div>

 <tar-btn></tar-btn>

  </div>
</template>

<script>
// @ is an alias to /src
import tarBtn from "../components/tarBtn.vue"
import axios from "axios"


export default {
  name: "home",
  created(){
    axios.get("http://localhost:3000/banner")
    .then(res=>{console.log(res.data.banners);
      return this.banner = res.data.banners;
    })
    .catch(err=>{console.log(err);})
         
  },
  data: function(){
    return {
              value4: '',
              value2: 0,
              banner:"",
              musiclist:[
                {imgUrl:"http://p2.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62",singername:"张惠妹",zhanghuimei:"台湾歌手张惠妹"},
                {imgUrl:"http://p2.music.126.net/1EN_iqQWU_E3DafzEOh3cA==/3302932937408956.jpg?param=62y62",singername:"Fin乐团",zhanghuimei:"独立音乐人"},
                {imgUrl:"http://p2.music.126.net/ZuktZvjcxpYBjcWC3gmbPg==/19027048718765608.jpg?param=62y62",singername:"万小利",zhanghuimei:"民谣歌手"},
                {imgUrl:"http://p2.music.126.net/v_zYgE9kmAwVGWV2c8hFxA==/7943971513291094.jpg?param=62y62",singername:"音乐人赵雷",zhanghuimei:"说唱歌手"},
                {imgUrl:"http://p2.music.126.net/6wPGl_ddgAbJTx5kOohcyw==/109951163892302996.jpg?param=62y62",singername:"王三簿",zhanghuimei:"音乐人"}

              ]
    };
  },
  components:{
    tarBtn
  }

};
</script>

<style lang="less" scoped>

#home{  
  .head-one{
  display: flex;
   height: 40px;
  margin-top: 5%;
  margin-left: 1%;
  .dingzhiyuan{
    width: 40px;
    height: 40px;
    background-color:honeydew;
    margin-left: 15px;
    border-radius: 50px;
    animation: demo 6s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    @keyframes demo {
      from{ transform: rotate(0deg);}
      to{ transform: rotate(360deg);}
    }
  }
}
  .imgdaxiao{
    width: 350px;
    height: 200px;
    border-radius: 20px;
    transform: translate(4%);
  }
  .grid{
    margin-top: 10px;
    height: 60px;
    display: flex;
     justify-content: space-around;
    .grid-child1{
      width: 60px;
      background-color:#ff2f30;
      border-radius: 50px;
      .grid-child11{
        transform: translate(10px,8px);
      }
    }
        .grid-child2{
      width: 60px;
      background-color:#ff2f30;
      border-radius: 50px;
       .grid-child21{
        transform: translate(10px,10px);
      }
    }
        .grid-child3{
      width: 60px;
      background-color:#ff2f30;
      border-radius: 50px;
       .grid-child31{
        transform: translate(10px,8px);
      }
    }
        .grid-child4{
      width: 60px;
      background-color:#ff2f30;
      border-radius: 50px;
       .grid-child41{
        transform: translate(10px,8px);
      }
    }
        .grid-child5{
      width: 60px;
       background-color:#ff2f30;
      border-radius: 50px;
       .grid-child51{
        transform: translate(10px,8px);
      }
    }
  }
  .meirituijiangedan{
    display: flex;
    justify-content: space-around;
    margin-top: 5px;
    height: 20px;
    font-size: 15px;
  }
  .tuijiangedan{
    height: 30px;
    margin-top: 30px;
    overflow: hidden;
    .annniu{
      height: 25px;
      width: 70px;
     border:2px solid rgb(199, 185, 185);
     margin-left: 80%;
     margin-top: 2px;
     border-radius: 20px;
     text-align: center;
     
    }
  }
  .musicList{
    display: flex;
    justify-content:space-between;
    height: 150px;
    flex-wrap:nowrap;
    
    overflow-y: hidden;
    overflow-x:scroll;
    &::-webkit-scrollbar{
      display: none;
    }
    .musicList-one{
      margin-left: 5px;
      flex-shrink: 0;
      width: 115px;
      height: 146px;
      img {
        width:113px;
        height:113px; 
        border-radius:20px;
      }
   
    }
  } 
  .musicliebiao{
    margin-left: 10px;
    height: 80px;
    margin-top: 20px;
    display: flex;
    .musicliebiao1{
      width: 80px;
      img {
              width: 80px;
      height: 80px;
      border-radius: 10px;
      }
    }
    .musicliebiao2{
      flex-grow: 1;
      p {
        margin-top: 10px;
        margin-left: 40px;
      }
    }
    .musicliebiao3{
      width: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .zhangao{
    height: 60px;
  }

}

</style>
