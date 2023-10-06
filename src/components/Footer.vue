<script setup lang="ts">
import logo from "../assets/images/logo.png";
</script>
<template>
  <footer class="bg-main w-screen py-6">
    <div
      class="max-w-[1440px] flex md:flex-row flex-col justify-between mx-auto items-center"
    >
      <div class="flex flex-col md:flex-rowgap-4 items-center">
        <img :src="logo" class="w-[66px] h-auto" />
        <div class="text-xs text-white">
          Phone：+66-2-2376-8273 <br />
          Email：customer@thaibang.com <br />
          Mon - Fri 09:00 ~ 21:00 (UTC+7
        </div>
      </div>
      <span class="mt-10  md:mt-0 text-white">© 2008 – 2023 SUPERWEALTH CO.,LTD</span>
    </div>
  </footer>
</template>
