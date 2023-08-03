<script setup>
import logo from "../assets/images/logo.png";
import sight from "../assets/images/sight.png";
import star from "../assets/images/star.svg";
import Title from "../components/Title.vue";
import { ElMessage } from "element-plus";
import { useCartStore } from "../store/useCart";
import { ShoppingCart, Calendar } from "@element-plus/icons-vue";

import { onMounted, ref } from "vue";

const cartStore = useCartStore()
const isLoading = ref(true)

const features = [
  {
    title: '發掘玩樂靈感',
    content: '提供近50萬種吃喝玩樂、租車、住宿等體驗，帶你發現更好玩的世界',
  },
  {
    title: '享 Klook 會員禮遇',
    content: '註冊帳戶即可輕鬆解鎖會員獨享價、加倍賺積分',
  },
  {
    title: '預訂簡單快速',
    content: '享極速預訂、免排隊入場、免費取消等服務，輕鬆玩，無負擔',
  },
  {
    title: '玩樂品質保證',
    content: '活動評價公開，專業客服團隊協助，安心出遊不踩雷',
  },
]

const sights = [
  {
    title: '小资泰国漫游,曼谷河畔五星酒店,嘟嘟车游老城区,华欣绝美下午茶,欧式水上市场,无购物五日',
    date: '出團日期：08/07、08/21、08/25',
     id: 99,
    price: 16899,
  },
  {
    title: '北碧赛福瑞长颈鹿,水上泡泡咖啡厅,曼谷五星酒店两晚,水流虾海陆飨宴五日',
    date: '出團日期：10/17、10/21、11/25',
     id: 98,
    price: 9900,
  },
  {
    title: '全程五星x华欣散策时光,嘟嘟车游老曼谷,欧式水上市场,周末双市集,无购物五日',
    date: '出團日期：10/27、11/01、11/17',
     id: 97,
    price: 43200,
  },
  {
    title: '旗舰华欣,全程五星酒店,赛福瑞动物园,秘境沙滩,雨林咖啡厅,无购物五日',
    date: '出團日期：12/07、12/21、12/25',
     id: 96,
    price: 34500,
  },
]

const trips = [
  {
    title: '特选曼芭夜未眠 <br> 曼谷国际五星1晚',
    subtitle: 'GUIDED TOUR',
    time: '1hour',
    stars: 5,
    id: 1,
    price: 9999,
  },
  {
    title: '曼谷、桂河、佛统经典５日－穿越茉莉古城体验悬崖火车、夜游昭披耶河',
    subtitle: 'GUIDED TOUR',
    time: '1hour',
    stars: 5,
    id: 2,
    price: 18000,
  },
  {
    title: '星光高空酒吧6日',
    subtitle: 'GUIDED TOUR',
    time: '1hour',
    stars: 5,
    id: 3,
    price: 300,
  },
  {
    title: '五星ANANTARA x 下午茶<br>茵他侬国家公园、天灯祈福、王府帝王宴、无购物五日',
    subtitle: 'Entry ticket',
    time: '1hour',
    stars: 5,
    id: 4,
    price: 57800,
  },
  {
    title: '曼芭泰震撼～艳阳格兰岛、东芭海豚剧场、全程五星饭店五日',
    subtitle: 'GUIDED TOUR',
    time: '1hour',
    stars: 5,
    id: 5,
    price: 23780,
  },
  {
    title: '船游水上人家<br>阳光格兰岛',
    subtitle: 'GUIDED TOUR',
    time: '1hour',
    stars: 5,
    id: 6,
    price: 12570,
  },
  {
    title: '与长颈鹿有约<br>五星海景百汇',
    subtitle: 'GUIDED TOUR',
    time: '1hour',
    stars: 5,
    id: 7,
    price: 6899,
  },
  {
    title: '庄园泰服体验、农场DIY药草包',
    subtitle: 'Entry ticket',
    time: '1hour',
    stars: 4,
    id: 8,
    price: 3000,
  },
]

const purchase  = (item) => {


  cartStore.addCart({
    title: item.title,
    id: item.id,
    amount: 1,
    price: item.price
  })
}


const getImageUrl = (index) => {
  console.log(index)
  return new URL(`../assets/images/0${index}.png`, import.meta.url)
}

onMounted(() => {
  setTimeout(() => isLoading.value = false, 200)
})

</script>

<template>
  <div class="hero">
    <div class="flex items-center justify-center flex-col">
      <img :src="logo" class="w-[120px] mb-4" />
      <h1 className="font-bold text-3xl md:text-[64px] flex flex-col md:gap-12 text-center text-white">
        <p>一起留下</p>
        <p>
        “泰”过美好的记忆</p>
      </h1>
    </div>
  </div>
  <div class="max-w-[1440px] px-10 md:px-40 lg:px-0 mx-auto">
    <Title>
      为什么泰国旅游首选 THAI BANG ？
    </Title>

    <div class="flex flex-wrap mb-[120px] grid-cols-4 gap-16 items-center justify-between">
      <div v-for="i in features" class="flex w-[240px] flex-col gap-4">
        <h4 class="text-main font-bold text-2xl" v-html="i.title"></h4>
        <p v-html="i.content"></p>
      </div>
    </div>

    <Title>
      难忘的旅行经历
    </Title>

    <div class="grid mb-[120px] grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start justify-between">
      <el-skeleton v-if="isLoading" style="width: 240px" animated v-for="i in 8">
        <template #template>
          <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
          <div style="padding: 14px">
            <el-skeleton-item variant="p" style="width: 50%" />
            <div
              style="
                display: flex;
                align-items: center;
                justify-items: space-between;
              "
            >
              <el-skeleton-item variant="text" style="margin-right: 16px" />
              <el-skeleton-item variant="text" style="width: 30%" />
            </div>
          </div>
        </template>
      </el-skeleton>

      <div  v-else v-for="(i, index) in trips" class="flex hover:scale-[1.05] transition duration-300 flex-col gap-4 border rounded-md pb-4 overflow-hidden">
        <div class="w-full h-40 bg-cover bg-center " :style="{ backgroundImage: `url(${getImageUrl(index + 1)})` }">
        </div>

       <div class="flex flex-col gap-2 px-4">
        <span class="bg-gray-500 rounded py-1 w-28 text-center text-white font-bold text-xs">{{ i.subtitle.toUpperCase() }}</span>
        <h4 class="text-main font-bold text-sm" v-html="i.title"></h4>
        <div class="flex flex-row items-center gap-1">
          <img :src="star" v-for="perStar in i.stars"/>
        </div>
        <div class="text-xl self-end font-bold text-yellow-500">
          ${{ (i.price).toLocaleString() }}
        </div>
        <el-button type="primary" plain :icon="ShoppingCart"  @click="purchase(i)">加入购物车</el-button>
       </div>
      </div>
    </div>

    <Title>
      你不能错过的热门景点
    </Title>

    <div class="flex flex-wrap flex-row gap-10 justify-between mb-[120px]" >
      <div class="w-full md:w-2/5 flex flex-col gap-4">
        <img :src="sight" />
        <p>探索泰式幸福，感受友善态度及亲切服务，邀您一起体验泰国魅力。<br>好好放松一下吧！</p>
      </div>

      <div class="flex flex-1 flex-col justify-between">
        <div class="flex flex-col border-b py-2 hover:opacity-70 cursor-pointer relative " v-for="i in sights">
          <h4 class="font-bold text-main">{{ i.title }}</h4>
          <span class="flex flex-row text-sm mt-2"><Calendar class="w-4 mr-2 text-red-300" />{{ i.date }}</span>
          <span class="text-yellow-500 absolute left-0 xs:right-4 xs:left-[unset] xs:top-4 xs:bottom-[unset] bottom-2 text-xl font-bold">${{ (i.price).toLocaleString() }}</span>
          <el-button plain type="primary" class="w-32 self-end" :icon="ShoppingCart"  @click="purchase(i)">加入购物车</el-button>
        </div>
      </div>
    </div>

   
  </div>

</template>

<style lang="scss" scoped>
.hero {
  @apply relative w-screen h-[80vh] bg-center flex items-center justify-center mb-32;
  background-image: url('../assets/images/bg.png');

  &::before {
    @apply absolute left-0 bottom-0 w-full h-[120px];
    content: '';
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.76) 0%, rgba(0, 0, 0, 0.00) 100%);
  }

  &::after {
    @apply absolute left-0 top-0 w-full h-[120px];
    content: '';
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.76) 0%, rgba(0, 0, 0, 0.00) 100%);
  }

  h1 {
    text-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.60);
  }
}
</style>
