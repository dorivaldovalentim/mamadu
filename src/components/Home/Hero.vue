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
  <header>
    <div class="container">
      <div class="row align-items-center flex-fill">
        <div class="col-12 col-md-5 col-lg-5">
          <img
            src="/src/assets/images/banner.png"
            alt="Hero image"
            class="w-100"
          />
        </div>

        <div class="col-10 col-md-5 col-lg-5">
          <h1 class="display-4 fw-bold">
            Traga a <span class="text-secondary">loja</span> <br />
            até sua <span class="text-secondary">porta</span>
          </h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <div class="d-flex">
            <a href="#" class="btn btn-primary rounded-pill fw-bold text-white"
              >Como encomendar</a
            >

            <a
              href="#"
              class="btn btn-light ms-1 rounded-pill fw-bold"
              style="background-color: #f7f7f7"
              >Ver categorias</a
            >
          </div>

          <div class="customers-pictures d-flex mt-3">
            <img
              v-for="(item, index) in data"
              :key="index"
              :src="item.image"
              :alt="'Testimonial user ' + item.name"
              :style="{ 'margin-left': (index == 0 ? 0 : -30) + 'px' }"
              class="rounded-circle"
            />

            <div class="ms-3">
              <h3 class="h6 text-nowrap fw-bold">Nossos clientes</h3>
              <p class="text-nowrap">
                <i class="bi bi-star-fill text-secondary"></i>
                {{
                  (
                    data.reduce((total, key) => (total += key.stars), 0) /
                    data.length
                  ).toFixed(1)
                }}
                ({{ data.length }} avaliações)
              </p>
            </div>
          </div>
        </div>

        <div class="col-2 col-md-2 col-lg-2">
          <ul
            class="list-unstyled d-flex flex-column align-items-end justify-content-between"
          >
            <li
              class="icons fs-4 shadow d-inline-flex my-4 justify-content-center align-items-center rounded-circle"
            >
              <i class="bi bi-apple"></i>
            </li>

            <li
              class="icons fs-4 shadow d-inline-flex my-4 justify-content-center align-items-center rounded-circle"
            >
              <i class="bi bi-apple"></i>
            </li>

            <li
              class="icons fs-4 shadow d-inline-flex my-4 justify-content-center align-items-center rounded-circle"
            >
              <i class="bi bi-apple"></i>
            </li>

            <li
              class="icons fs-4 shadow d-inline-flex my-4 justify-content-center align-items-center rounded-circle"
            >
              <i class="bi bi-apple"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.customers-pictures {
  width: 60px;
  height: 60px;
}

.icons {
  width: 50px;
  height: 50px;
}
</style>