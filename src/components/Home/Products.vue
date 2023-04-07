<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      data: [
        {
          stars: 4.5,
          price: 2000,
          image: "./src/assets/images/products/tomato.png",
          name: "Tomate",
        },
        {
          stars: 4.2,
          price: 2000,
          image: "./src/assets/images/products/mamao.png",
          name: "Mamão",
        },
        {
          stars: 3.7,
          price: 2000,
          image: "./src/assets/images/products/banana.png",
          name: "Banana",
        },
        {
          stars: 3.7,
          price: 2000,
          image: "./src/assets/images/products/grape.png",
          name: "Uva",
        },
        {
          stars: 3.7,
          price: 2000,
          image: "./src/assets/images/products/strawberry.png",
          name: "Morangos",
        },
      ],
    };
  },
};
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

        <swiper
          class="slider col-12 col-md-9 col-lg-9"
          :slides-per-view="3"
          :space-between="25"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            v-for="(item, index) in data"
            :key="index"
            class="slide-item col-12 col-md-3 col-lg-3"
          >
            <div class="card shadow rounded-5 py-5 text-center position-relative">
              <img
                :src="item.image"
                alt=""
                class="w-50 mx-auto position-absolute"
                style="margin-top: -120px"
              />

              <h3 class="fw-bold mt-4">{{ item.name }}</h3>

              <p class="fs-4">
                <span class="text-secondary fw-bold">{{ item.price }}</span> /
                KG
              </p>

              <p class="fs-4 mb-0">
                <i class="bi bi-star-fill text-secondary"></i>
                {{ item.stars }}
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.products {
  margin-top: 50px;

  img {
    left: 50%;
    right: 50%;
    transform: translate(-50%);
  }
}

.slider {
  padding: 100px 20px 100px;

  .card {
    height: 250px;
    max-height: 250px;
  }
}
</style>