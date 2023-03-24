<script setup>
const data = [
  {
    stars: 4.5,
    image: "./src/assets/images/testimonial/user.webp",
    name: "Fácil encomendar",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum nam expedita reprehenderit magnam voluptas aliquid alias",
  },
  {
    stars: 4.2,
    image: "./src/assets/images/testimonial/user.jpeg",
    name: "Entrega rápida",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum nam expedita reprehenderit magnam voluptas aliquid alias",
  },
  {
    stars: 3.7,
    image: "./src/assets/images/testimonial/user.webp",
    name: "Pagamento seguro",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum nam expedita reprehenderit magnam voluptas aliquid alias",
  },
];
</script>

<template>
  <section class="testimonials py-4 my-5">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-12 col-md-5 col-lg-5">
          <div class="testimonial-image">
            <img
              src="/src/assets/images/testimonial/banner.png"
              alt="Testimonials image"
            />
          </div>
        </div>

        <div class="col-12 col-md-7 col-lg-7">
          <h2 class="h2 fw-bold text-primary">
            O que nossos clientes <br />
            dizem sobre nós
          </h2>

          <div>
            <div
              v-for="(item, index) in data"
              :key="index"
              class="d-flex align-items-center"
            >
              <img
                :src="item.image"
                :alt="'Testimonial user ' + item.name"
                class="col-2 me-3 rounded-circle"
              />

              <div>
                <h3>{{ item.name }}</h3>
                <p v-html="item.testimonial"></p>
                <p>
                  <i
                    v-for="i in 5"
                    :key="i"
                    :class="{
                      'text-secondary': item.stars >= i,
                      'bi-star-fill': item.stars >= i,
                      'bi-star': !(item.stars >= i),
                    }"
                    class="bi me-1"
                  ></i>
                  {{ item.stars }}
                  <!-- {{
                    data.reduce((total, key) => (total += key.stars), 0) /
                    data.length
                  }} -->
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.testimonial-image {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 20px;
    width: 400px;
    height: 400px;
    background: $secondary-color;
    border-radius: 50%;
    z-index: -1;
  }
}
</style>