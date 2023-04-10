<script setup>
import Logo from "./../Logo.vue";
</script>

<template>
  <section class="subscribe bg-primary py-5">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div
          class="col-6 col-md-3 col-lg-2 mx-auto mx-md-0 mx-lg-0 py-4 position-relative"
        >
          <p class="mx-auto w-75">
            <Logo :type="2" />
          </p>
          <hr
            class="vertical-rule d-none d-md-inline-block d-lg-inline-block position-absolute border-0"
          />
        </div>

        <div class="col-12 col-md-6 col-lg-6">
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
.subscribe {
  box-shadow: 0 10px 20px #0003;

  .vertical-rule {
    height: 150px;
    background: white;
    width: 2px;
    padding: 0;
    right: -10%;
    top: 50%;
    bottom: 50%;
    transform: translateY(-50%);
  }
}
</style>