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
      ],
    };
  },
};
</script>

<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-12 col-md-5 col-lg-5">
          <div class="testimonial-image">
            <img
              src="/src/assets/images/testimonial/banner.png"
              alt="Testimonials image"
              class="w-100"
            />
          </div>
        </div>

        <div class="col-12 col-md-7 col-lg-7 ps-md-5 ps-lg-5">
          <h2
            class="h1 fw-bold text-primary text-center text-md-start text-lg-start"
          >
            O que nossos clientes <br />
            dizem sobre nós
          </h2>

          <swiper
            class="slider col-12 col-md-10 col-lg-10 mt-5 mx-0"
            :slides-per-view="1"
            :space-between="25"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide
              v-for="(item, index) in data"
              :key="index"
              class="d-flex align-items-center flex-column flex-md-row flex-lg-row"
            >
              <img
                :src="item.image"
                :alt="'Testimonial user ' + item.name"
                class="col-5 col-md-2 col-lg-2 me-3 rounded-circle"
              />

              <div>
                <h3 class="text-center text-md-start text-lg-start">
                  {{ item.name }}
                </h3>
                <p
                  v-html="item.testimonial"
                  class="text-center text-md-start text-lg-start"
                ></p>
                <p class="text-center text-md-start text-lg-start">
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
                </p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/responsive";

.testimonials {
  margin-block: 150px;

  @include responsive(extra-small, small) {
    margin-block: 50px;
  }
}
</style>