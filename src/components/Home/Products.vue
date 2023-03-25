<script setup>
const data = [
  {
    stars: 4.5,
    price: 2000,
    image: "./src/assets/images/products/mamao.png",
    name: "Fácil encomendar",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum nam expedita reprehenderit magnam voluptas aliquid alias",
  },
  {
    stars: 4.2,
    price: 2000,
    image: "./src/assets/images/products/mamao.png",
    name: "Entrega rápida",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum nam expedita reprehenderit magnam voluptas aliquid alias",
  },
  {
    stars: 3.7,
    price: 2000,
    image: "./src/assets/images/products/mamao.png",
    name: "Pagamento seguro",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum nam expedita reprehenderit magnam voluptas aliquid alias",
  },
  {
    stars: 3.7,
    price: 2000,
    image: "./src/assets/images/products/mamao.png",
    name: "Pagamento seguro",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum nam expedita reprehenderit magnam voluptas aliquid alias",
  },
  {
    stars: 3.7,
    price: 2000,
    image: "./src/assets/images/products/mamao.png",
    name: "Pagamento seguro",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum nam expedita reprehenderit magnam voluptas aliquid alias",
  },
];
</script>

<template>
  <section id="products" class="products py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-3 col-lg-3">
          <h2 class="h3 fw-bold text-primary pe-4">
            Nossos produtos mais vendidos
          </h2>
          <a href="" class="btn btn-primary rounded-pill">Ver todos</a>
        </div>

        <div
          v-for="(item, index) in data"
          :key="index"
          class="col-12 col-md-3 col-lg-3 mb-5"
        >
          <div class="card shadow rounded-5 py-5 text-center">
            <img
              :src="item.image"
              alt=""
              class="w-50 mx-auto"
              style="margin-top: -120px"
            />

            <h3 class="fw-bold mt-4">{{ item.name }}</h3>

            <p class="fs-4">
              <span class="text-secondary fw-bold">{{ item.price }}</span> / KG
            </p>

            <p class="fs-4 mb-0">
              <i class="bi bi-star-fill text-secondary"></i>
              {{ item.stars }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.products {
  margin-top: 200px;
}
</style>