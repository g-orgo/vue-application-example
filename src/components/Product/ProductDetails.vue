<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const product = ref({
    _id: 0,
    name: '',
    price: 0,
    specifications: '',
    description: ''
})

onMounted(() => {
    let productsFromDB = JSON.parse(localStorage.getItem('products')!)
    if (productsFromDB.some((product: { _id: number }) => product._id === parseInt(route.params.product.toString()))) {
        product.value = productsFromDB.find((product: { _id: number }) => product._id === parseInt(route.params.product.toString()))
    }
})
</script>

<template>
    <div class="w-full flex items-center justify-between">
        <h1>{{ product.name }}</h1>
        <p class="text-sm text-gray-300 cursor-default"><i>#{{ product._id }}</i></p>
    </div>

    <div>
        <h4>Description</h4>
        <p>{{ product.description }}</p>
    </div>

    <div>
        <h4>Specifications</h4>
        <p>{{ product.specifications }}</p>
    </div>

    <div class="w-fit">
        <h4>Price</h4>
        <p>
        <p class="text-red-300 hover:text-red-500 cursor-pointer">R$ {{ (Math.round(product.price * 100) /
            100).toFixed(2).toString().replace('.',
                ',') }}</p>
        </p>
    </div>
</template>