<script setup lang="ts">
import Modal from '@/components/Modal.vue';
import ProductList from '@/components/Product/ProductList.vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

</script>

<template>
  <Modal v-if="route.params.product" @close="router.push({ name: 'Products', replace: true })">
    <RouterView />
  </Modal>

  <div class="space-y-10">
    <h1>Products catalog</h1>

    <ProductList :products="[
      { _id: 1, name: 'Product 1', price: 2 },
      { _id: 2, name: 'Product 2', price: 28 },
      { _id: 3, name: 'Product 3', price: 10 },
      { _id: 4, name: 'Product 4', price: 14 },
      { _id: 5, name: 'Product 5', price: 2.5 },
      { _id: 6, name: 'Product 6', price: 6 },
    ]" @on-see-more-click="router.push({ name: 'ProductDetails', replace: true, params: { product: $event._id } })" />
  </div>
</template>