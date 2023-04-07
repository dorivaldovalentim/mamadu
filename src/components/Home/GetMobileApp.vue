<script setup></script>

<template>
  <section class="get-mobile-app bg-primary">
    <div class="container">
      <div class="row align-items-stretch">
        <div class="col-12 col-md-6 col-lg-6 get-mobile-app-description">
          <h2
            class="display-4 fw-bold text-white text-center text-md-start text-lg-start"
          >
            Compre <span class="text-secondary">qualquer</span> <br />
            <span class="text-secondary">coisa</span> perto de si
          </h2>

          <div
            class="d-flex justify-content-center justify-content-md-start justify-content-lg-start"
          >
            <a href=""
              ><img src="/src/assets/images/google-play.png" alt=""
            /></a>
            <a href=""
              ><img src="/src/assets/images/google-play.png" alt=""
            /></a>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-6 position-relative">
          <img
            src="/src/assets/images/get-mobile-app.png"
            alt="Mobile apps"
            class="phones-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/responsive";

.get-mobile-app-description {
  padding-block: 120px;

  @include responsive(extra-small, small) {
    padding-block: 30px 60px;
    order: 2;
  }
}
.phones-image {
  width: 650px;
  height: auto;
  top: -100px;
  right: 0;
  position: absolute;

  @include responsive(extra-small, small) {
    position: relative;
    width: 100%;
    top: 0;
  }
}
</style>