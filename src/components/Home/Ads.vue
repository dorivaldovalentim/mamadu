<script setup>
</script>

<template>
  <section class="ads">
    <div class="container">
      <div class="row align-items-center">
        <div
          class="col-12 col-md-6 col-lg-6 text-center text-md-start text-lg-start"
        >
          <h2 class="text-white">
            <span class="display-2">Obtenha até</span> <br />
            <span class="display-3 fw-bold">15% de desconto</span>
          </h2>

          <a href="#" class="btn rounded-pill fw-bold bg-white btn-info"
            >Comprar agora</a
          >
        </div>

        <div class="col-12 col-md-6 col-lg-6">
          <img src="/src/assets/images/ads.png" alt="" class="w-100" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.ads {
  background-image: linear-gradient(to right, #0009, #0009),
    url(/src/assets/images/bg-ads.jpeg);
}
</style>