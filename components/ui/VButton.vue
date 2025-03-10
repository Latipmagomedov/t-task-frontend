<template>
    <button class="v-btn">{{ name }}</button>
</template>

<script setup lang="ts">
defineProps<{
    name: string;
}>()
</script>

<style lang="scss" scoped>
.v-btn {
    height: 40px;
    padding: 0 24px;
    border-radius: 8px;
    background-color: #000;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    cursor: pointer;
}
</style>
