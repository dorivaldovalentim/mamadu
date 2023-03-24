<script setup></script>

<template>
  <section class="get-mobile-app bg-primary">
    <div class="container">
      <div class="row align-items-stretch">
        <div class="col-12 col-md-6 col-lg-6 get-mobile-app-description">
          <h2 class="text-white">
            Compre <span class="text-secondary">qualquer coisa</span> perto de
            si
          </h2>
          <div class="d-flex">
            <a href=""><img src="/src/assets/images/google-play.png" alt=""></a>
            <a href=""><img src="/src/assets/images/google-play.png" alt=""></a>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-6 position-relative">
          <img
            src="/src/assets/images/get-mobile-app.png"
            alt="Mobile apps"
            class="phones-image position-absolute"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.get-mobile-app-description {
  padding-block: 150px;
}
.phones-image {
  width: 650px;
  height: auto;
  top: -100px;
  right: 0;
}
</style>