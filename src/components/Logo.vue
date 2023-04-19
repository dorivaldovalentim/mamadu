<script setup>
const props = defineProps({
  type: {
    type: Number,
    default: 1,
  },
});

const { type } = props;

const logo = function () {
  return "/src/assets/images/logo/" + type + ".png";
};
</script>

<template>
  <img :src="logo()" alt="" class="w-100" />
</template>