<script setup>
import Logo from "./../Logo.vue";
</script>

<template>
  <section class="subscribe bg-primary py-5">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div
          class="logo col-6 col-md-3 col-lg-2 mx-auto mx-md-0 mx-lg-0 py-4 border-white border-end border-3 px-5"
        >
          <p class="mx-auto w-10">
            <Logo :type="2" />
          </p>
        </div>

        <div class="col-12 col-md-6 col-lg-8 px-2 px-md-5 px-lg-5">
          <p class="text-white text-center text-md-start text-lg-start">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
            nemo. Necessitatibus quibusdam ab architecto voluptatibus ducimus
            voluptatem illum dolore placeat quod autem quaerat dolorem numquam
            est quia, delectus incidunt nostrum?
          </p>
        </div>

        <div class="col-12 col-md-3 col-lg-2">
          <div class="d-grid gap-2">
            <a href="#" class="btn rounded-pill fw-bold bg-white btn-info"
              >Junte-se a nós</a
            >
            <a
              href="#"
              class="btn rounded-pill fw-bold bg-primary border btn-outline-light text-white"
              >Ler mais</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/responsive";

@include responsive(extra-small, small) {
  .logo {
    border: none !important;
  }
}

.subscribe {
  box-shadow: 0 10px 20px #0003;
}
</style>