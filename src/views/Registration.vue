<script setup lang="ts">
import TextInput from '@/components/TextInput.vue';
import { ref } from "vue";


const newUser = ref<any>({ username: '', email: '', password: '' })
const register = () => {
  sessionStorage.setItem("user", JSON.stringify(newUser.value))
  alert("You'd sign up!")
}
</script>

<template>
  <div class="w-[calc(100vw-6rem)] h-[calc(100vh-6rem)] flex items-center justify-center p-12">
    <div class="bg-gray-50 border p-4 rounded-lg shadow-md flex flex-col space-y-2 items-center">
      <h1>Register!</h1>

      <template v-for="key in Object.keys(newUser)" :key="key">
        <TextInput v-model="newUser[key]" :is-secret="key === 'password'">
          <p class="capitalize self-start">{{ key }}</p>
        </TextInput>
      </template>
      <button @click="register">
        <p>Register</p>
      </button>
    </div>
  </div>
</template>
