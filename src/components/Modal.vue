<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

const modal = ref<HTMLDivElement>();
const emit = defineEmits(["close"]);

onClickOutside(modal, () => emit("close"));

</script>
<template>
    <teleport to="#modal">
        <div class="absolute w-full h-screen inset-0 bg-black bg-opacity-40 z-50 flex justify-center py-10">
            <div ref="modal" class="shadow-lg rounded-lg h-fit">
                <div
                    class="bg-white p-4 flex flex-col space-y-4 border-x border-t rounded-md w-full max-h-[calc(100vh-200px)] overflow-y-auto">
                    <slot />
                </div>
            </div>
        </div>
    </teleport>
</template>
