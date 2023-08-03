<script setup lang="ts">
import logo from "../assets/images/logo.png";
import { ref, reactive, computed } from "vue";
import { ElButton, ElDialog} from "element-plus";
import { ShoppingCart } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ElMessage } from "element-plus";

const dialogVisible = ref(false);
const router = useRouter()

const ruleFormRef = ref();

const ruleForm = reactive({
  username: "",
  password: "",
});

const submitForm = async () => {
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      ElMessage.success('asdf')
    }
  });
};

const rules = reactive({
  username: [
    { required: true, message: "请输入帐号", trigger: "change" },
    { min: 6, max: 16, message: "请输入6-16位数字元帐号", trigger: "change" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "change" },
    { min: 6, max: 16, message: "请输入6-16位数字元密码", trigger: "change" },
  ],
});

const type = ref('register')

const title = computed(() => {
  return type.value === 'login' ? '登入' : '注册'
})

const switchType = (inputType) => {
  type.value = inputType
}
</script>
<template>
  <div class="max-w-[1280px] mx-auto absolute z-[999] left-1/2 -translate-x-1/2 top-10 w-screen">
    <div @click="router.push('/')" class="hover:opacity-70  cursor-pointer flex flex-row text-sm absolute top-0 z-50 left-0 items-center text-white font-bold gap-2">
      <img :src="logo"  class=" w-12"/>
      THAI BANG TOURS
    </div>
    <div class="flex flex-row items-center gap-4 absolute top-0 z-50 right-0">
      <ShoppingCart @click="router.push('/cart')" class="w-8 text-white cursor-pointer hover:scale-[1.1] transition duration-100 ease-out"/>
    <div
      class=" rounded-full w-40 border border-white py-3 flex items-center justify-center text-white hover:opacity-70 hover:bg-white hover:text-gray-500 cursor-pointer ease-in-out transition "
      @click="dialogVisible = true"
    >
      登入/注册
    </div>
    </div>
  </div>

  <el-dialog v-model="dialogVisible" :title="title" width="400px">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="flex flex-col "
      status-icon
    >

      <el-form-item label="帐号" prop="username">
        <el-input maxlength="16" v-model="ruleForm.username" placeholder="请输入6-16位数字元" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input maxlength="16" type="password" v-model="ruleForm.password" placeholder="请输入6-16位数字元" />
      </el-form-item>
      <el-form-item v-if="type === 'register'" label="手機號" prop="mobile">
        <el-input maxlength="6" v-model="ruleForm.password">
          <template #append><el-button>發送驗證碼</el-button></template>
        </el-input>
      </el-form-item>
      <el-form-item v-if="type === 'register'" label="驗證碼" prop="sms">
        <el-input maxlength="6" v-model="ruleForm.password" />
      </el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)" class="mx-auto">
          {{title}}
        </el-button>
        <p v-if="type === 'register'" @click="switchType('login')" class="text-xs text-center mt-2 hover:text-main cursor-pointer text-gray-500">已经是会员？马上登入</p>
        <p v-else @click="switchType('register')" class="text-xs text-center mt-2 hover:text-main cursor-pointer text-gray-500">立即注册</p>
    </el-form>
  </el-dialog>
</template>

<style lang="scss" >
.el-dialog__header {
  @apply text-white m-0 bg-main text-center  font-bold flex justify-center py-3 items-center;
  span {
    color: white!important;
  }
}
.el-dialog__headerbtn {
 top: 2px;
 .el-icon {
  font-size: 20px;
  color: #fff;
 }
}
</style>