<script setup lang="ts">
import { onMounted, ref } from 'vue';

const user = ref({ username: '', email: '', password: '' })

onMounted(() => {
  user.value = JSON.parse(sessionStorage.getItem('user')!)
})
</script>

<template>
  <div class="w-[calc(100vw-6rem)] h-[calc(100vh-6rem)] flex flex-col items-center justify-center p-12">

    <div class="border rounded-md p-12 border-teal-300 bg-teal-100">
      <div class="w-1/5 mx-auto mb-4 select-none flex flex-col items-center">
        <img src="../assets/logo.svg" alt="Vue logo" width="50%" draggable="false">
      </div>

      <h1>Welcome, {{ user.username }}.</h1>
      <p>Your e-mail is {{ user.email }}. You got 1 product(s) in shop right now... <span
          @click="$router.push({ name: 'ProductDetails', params: { product: Math.floor(Math.random() * 6) + 1 }, replace: true })"
          class="text-emerald-500 hover:text-emerald-800 hover:underline duration-200 cursor-pointer">click to see
          it.</span></p>
    </div>
  </div>
</template>