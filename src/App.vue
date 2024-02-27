<script setup lang="ts">

import { useStorage } from '@vueuse/core';
import { RouterLink, RouterView } from 'vue-router'

const productsData = useStorage('products', [
  { _id: 1, name: 'Product 1', price: 2, specifications: 'This is a good product indeed', description: 'A great product to wash feets!' },
  { _id: 2, name: 'Product 2', price: 28, specifications: 'This is a great product', description: 'A great product to brush teeth!' },
  { _id: 3, name: 'Product 3', price: 10, specifications: 'This is a awesome product', description: 'A great product to clean your house!' },
  { _id: 4, name: 'Product 4', price: 14, specifications: 'This is a great product indeed', description: 'A great product to bring back mondays joy!' },
  { _id: 5, name: 'Product 5', price: 2.5, specifications: 'This is a good product', description: 'A great product to drink!' },
  { _id: 6, name: 'Product 6', price: 6, specifications: 'This is a awesome product indeed', description: 'A great product to eat!' }
])

</script>

<template>
  <header>
    <nav class="py-4 space-x-3 px-2 bg-gray-50 border-b flex">
      <div class="hover:bg-gray-200 duration-300 px-1 rounded">
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div class="hover:bg-gray-200 duration-300 px-1 rounded">
        <RouterLink to="/products">Product Catalog</RouterLink>
      </div>
      <div class="hover:bg-gray-200 duration-300 px-1 rounded">
        <RouterLink to="/register">User Registration</RouterLink>
      </div>
      <div class="hover:bg-gray-200 duration-300 px-1 rounded">
        <RouterLink to="/profile">User Profile (Needs register)</RouterLink>
      </div>
    </nav>
  </header>
  <div class="px-12 py-4">
    <RouterView />
  </div>
  <div id="modal" class="modal-view"></div>
</template>

<style></style>
