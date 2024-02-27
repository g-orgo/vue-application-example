<script lang="ts" setup>
import { ref } from "vue";
interface InputProps {
    border?: boolean;
    modelValue: string;
    isSecret: boolean;
}

const props = withDefaults(defineProps<InputProps>(), {
    isSecret: false
})

const value = ref(props.modelValue)
const secretVisibility = ref(props.isSecret)
const emit = defineEmits(["close", "update:model-value"]);

</script>
<template>
    <slot />
    <div class="flex border rounded-md items-center bg-white w-full">
        <input v-model.trim="value" :type="secretVisibility ? 'password' : 'text'"
            class="px-0.5 py-2 bg-white w-full rounded-md" @blur="emit('update:model-value', value)" />
        <p @click="secretVisibility = !secretVisibility" class="cursor-pointer" v-if="isSecret">👁</p>
    </div>
</template>
