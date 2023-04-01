<script setup>
import { defineProps } from "vue";

defineProps({
  type: {
    type: Number,
    default: 2,
  },
});
</script>

<template>
  <img :src="'/src/assets/images/logo/1.png'" alt="" class="w-100" />
</template>