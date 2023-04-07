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

const socialNetworks = [
  { name: "LinkedIn", link: "https://linkedin.com", icon: "bi-linkedin" },
  { name: "Instagram", link: "https://instagram.com", icon: "bi-instagram" },
  { name: "Twitter", link: "https://twitter.com", icon: "bi-twitter" },
  { name: "Facebook", link: "https://facebook.com", icon: "bi-facebook" },
];
</script>

<template>
  <header class="mt-5 d-flex">
    <div class="container d-flex">
      <div class="row align-items-center">
        <div class="col-12 col-md-5 col-lg-5">
          <img
            src="/src/assets/images/banner.png"
            alt="Hero image"
            class="w-100"
          />
        </div>

        <div class="col-12 col-md-5 col-lg-5">
          <h1 class="text-center text-md-start text-lg-start display-4 fw-bold">
            Traga a <span class="text-secondary">loja</span> <br />
            até sua <span class="text-secondary">porta</span>
          </h1>

          <p
            class="my-4 fs-4 text-primary text-center text-md-start text-lg-start"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div class="d-none d-md-flex d-lg-flex">
            <a href=""
              ><img src="/src/assets/images/google-play.png" alt=""
            /></a>
            <a href=""
              ><img src="/src/assets/images/google-play.png" alt=""
            /></a>
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
            class="list-unstyled d-none d-md-flex d-lg-flex flex-column align-items-end justify-content-between"
          >
            <li
              v-for="(item, index) in socialNetworks"
              :key="index"
              class="icons fs-4 shadow d-inline-flex justify-content-center align-items-center rounded-circle"
            >
              <a :href="item.link" target="_blank" class="text-primary"
                ><i class="bi" :class="item.icon"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: calc(100vh - 155px);
  min-height: 500px;
  margin-bottom: 100px;
}
.customers-pictures {
  width: 60px;
  height: 60px;
}

.icons {
  width: 50px;
  height: 50px;
  margin-block: 30px;
}
</style>