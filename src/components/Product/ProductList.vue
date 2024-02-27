<script setup lang="ts">
interface ProductListProps {
    products: {
        _id: number,
        name: string,
        price: number,
    }[]
}
const props = withDefaults(defineProps<ProductListProps>(), {})
const emit = defineEmits(['onSeeMoreClick'])
</script>
<template>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <template v-for="product in products" :key="product._id">
            <div class="p-4 bg-blue-50 rounded-2xl border border-blue-300 shadow-lg cursor-pointer">
                <div class="w-full flex items-center justify-between">
                    <p class="text-lg">{{ product.name }}</p>
                    <p class="text-red-500">R$ {{ (Math.round(product.price * 100) / 100).toFixed(2).toString().replace('.',
                        ',') }}</p>
                </div>
                <div class="w-fit ml-auto mt-5">
                    <button class="bg-blue-200 border-blue-300" @click="emit('onSeeMoreClick', product)">
                        <p class="text-sm font-bold text-gray-600">See more!</p>
                    </button>
                </div>
            </div>
        </template>
    </div>
</template>
