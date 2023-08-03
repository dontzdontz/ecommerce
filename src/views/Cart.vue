<script setup>
import { useCartStore } from "../store/useCart.js";
import { CloseBold, Remove, CirclePlus, StarFilled } from "@element-plus/icons-vue";
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";

const cartStore = useCartStore();

const { addCart,
decreaseAmount,
removeCart} = cartStore


const ruleFormRef = ref();

const ruleForm = reactive({
  username: "",
  email: "",
  mobile: "",
});

const rules = reactive({
  username: [
    { required: true, message: "请输入姓名", trigger: "change" },
    { min: 2, max: 8, message: "请输入姓名", trigger: "change" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "change" },
    { min: 6, max: 16, message: "请输入6-16位数字元密码", trigger: "change" },
  ],
  email: [
    { required: true, message: "请输入电邮", trigger: "change" },
  ],
  mobile: [
    { required: true, message: "请输入手机", trigger: "change" },
  ],
});

const submitForm = async () => {
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      ElMessage.success('成功送出订单，订单将于客服人员审查过后与您联系，谢谢。网页将于两秒钟后回到首页...')
      setTimeout(() => {
        rounter.push('')
      }, 2000)
    } 
  });
};


</script>

<template>
  <div class="hero">
    <div class="flex items-center justify-center flex-col">
      <h1 className="font-bold text-[64px] text-center text-white">
        2023 泰国热门自由行景点推荐
      </h1>
    </div>
  </div>

  <div class="mx-auto max-w-[1280px] mb-40">
    <h2 class="font-bold text-xl mb-4">訂購明細</h2>

    <div class="grid grid-col">
      <div class="bg-[#ccc] grid grid-cols-5 items-center justify-center text-center px-2 py-2 rounded font-bold">
        <span>商品名稱</span>
        <span>售價</span>
        <span>數量</span>
        <span>小計</span>
        <span>
从购物车中移除</span>
      </div>

      <el-empty v-if="!cartStore.products.length" description="目前无订购商品" class=" mb-10" />

      <div class="grid grid-cols-5 py-2 border-b items-center justify-center text-center"
        v-for="i in cartStore.products">
        <span v-html="i.title" class="text-left font-bold text-main pl-4 "></span>
        <span class="text-yellow-500 font-bold">{{ i.price.toLocaleString() }}</span>
        <span class="flex flex-row mx-auto gap-4">
          <Remove @click="decreaseAmount(i)" class="w-4 cursor-pointer hover:text-main text-gray-400" :class="{ 'cursor-not-allowed hover:text-gray-200': i.amount === 1 }" />
          <span class="font-bold">{{ i.amount }}</span>
          <CirclePlus @click="addCart(i)" class="w-4 cursor-pointer hover:text-main text-gray-400"  :class="{ 'cursor-not-allowed hover:text-gray-200': i.amount === 10  }"/>
        </span>
        <span>{{(i.amount * i.price).toLocaleString()}}</span>
        <CloseBold @click="removeCart(i)" class="w-4 mx-auto text-red-500 cursor-pointer hover:scale-[1.1]" />
      </div>

      <div class="grid grid-cols-2 w-full  gap-10 my-10">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="100px" class="flex font-bold flex-col"
          status-icon>

          <div class="bg-[#ccc] w-full text-center px-2 py-2 rounded font-bold mb-4">
            订购资讯
          </div>

          <el-form-item label="订购人姓名" prop="username">
            <el-input maxlength="8" v-model="ruleForm.username" placeholder="王大明" />
          </el-form-item>

          <el-form-item label="订购人手机" prop="mobile">
            <el-input maxlength="12" v-model="ruleForm.mobile"  placeholder="86-12345678" />
          </el-form-item>
          <el-form-item label="订购人电邮" prop="email">
            <el-input maxlength="24" v-model="ruleForm.email"  placeholder="abcd@efgh.com"/>
          </el-form-item>

        </el-form>

        <div class="flex flex-col">
          <div class="bg-[#ccc] text-center px-2 py-2 rounded font-bold mb-4">付款资讯</div>
          <div class="flex flex-row justify-between px-4 font-bold">
            <span class="text-sm">商品总计</span>
            <span class="text-yellow-500">{{ cartStore.total.toLocaleString() }}</span>
          </div>
        </div>
      </div>

      <el-divider>
      <el-icon><star-filled class="text-gray-500" /></el-icon>
    </el-divider>
      <el-button type="primary" class="w-40 mt-10 justify-self-end" @click="submitForm">确定送出</el-button>


    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  @apply relative w-screen h-[40vh] bg-center bg-cover flex items-center justify-center mb-10;
  background-image: url("../assets/images/bg2.jpg");

  &::before {
    @apply absolute left-0 bottom-0 w-full h-[120px];
    content: "";
    background: linear-gradient(0deg,
        rgba(0, 0, 0, 0.76) 0%,
        rgba(0, 0, 0, 0) 100%);
  }

  &::after {
    @apply absolute left-0 top-0 w-full h-[120px];
    content: "";
    background: linear-gradient(180deg,
        rgba(0, 0, 0, 0.76) 0%,
        rgba(0, 0, 0, 0) 100%);
  }

  h1 {
    text-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.6);
  }
}
</style>
