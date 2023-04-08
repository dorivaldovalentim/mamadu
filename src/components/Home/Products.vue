<script>
// Import Swiper Vue.js components
import { Autoplay } from "swiper";

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
      modules: [Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      activedItem: 0,
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
        <div
          class="col-12 col-md-3 col-lg-3 text-center text-md-start text-lg-start"
        >
          <h2 class="title fw-bold text-primary lh-base">
            Nossos produtos mais vendidos
          </h2>
          <a href="" class="btn btn-primary rounded-pill mt-4 px-4"
            >Ver todos</a
          >
        </div>

        <swiper
          class="slider col-9 col-md-9 col-lg-9"
          :space-between="25"
          :grabCursor="true"
          :loop="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :breakpoints="{
            '640': {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }"
          :modules="modules"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            v-for="(item, index) in data"
            :key="index"
            class="slide-item col-12 col-md-3 col-lg-3"
          >
            <div
              :class="{ shadow: activedItem == index }"
              class="card shadow-small rounded-5 border-0 py-5 text-center position-relative"
            >
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
@import "@/assets/scss/responsive";

.products {
  margin-top: 50px;

  .title {
    font-size: 25pt;
  }

  img {
    left: 50%;
    right: 50%;
    transform: translate(-50%);
  }
}

.slider {
  padding: 100px 20px 100px;

  .card {
    height: 500px;
    max-height: 250px;
  }
}

.shadow-small {
  @include responsive(extra-small, small) {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
}
</style>