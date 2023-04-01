<script setup>
const data = [
  {
    icon: "bi-cart-dash-fill",
    title: "Fácil encomendar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum nam expedita reprehenderit magnam voluptas aliquid alias",
  },
  {
    icon: "bi-truck",
    title: "Entrega rápida",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum nam expedita reprehenderit magnam voluptas aliquid alias",
  },
  {
    icon: "bi-credit-card",
    title: "Pagamento seguro",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum nam expedita reprehenderit magnam voluptas aliquid alias",
  },
];
</script>

<template>
  <section id="why-choose-us" class="why-choose-us">
    <div class="container">
      <div
        class="row justify-content-start justify-content-md-start justify-content-lg-around my-5"
      >
        <h2 class="display-5 fw-bold text-center text-primary">
          Porque nos escolher?
        </h2>

        <div
          v-for="(item, index) in data"
          :key="index"
          class="col-12 col-md-6 col-lg-4 d-flex"
        >
          <i class="bi me-4 fs-1" :class="item.icon"></i>
          <div>
            <h3 class="h4 fw-bold text-primary">{{ item.title }}</h3>
            <p v-html="item.description" class="text-primary"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.why-choose-us {
  margin-top: 150px;

  h2 {
    margin-bottom: 70px;
  }
}
</style>