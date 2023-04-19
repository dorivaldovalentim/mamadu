<script>
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel";

export default {
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
  mounted() {
    $(".slick-carousel").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
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

        <div class="slider col-10 col-md-9 col-lg-9 slick-carousel mx-auto">
          <div v-for="(item, index) in data" :key="index" class="slide-item">
            <div
              class="shadow-small rounded-5 border-0 py-5 text-center position-relative mx-4"
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/responsive";
.products {
  margin-top: 50px;

  .title {
    font-size: 29pt;
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
    background: rgba($color: #fff, $alpha: 0.5) !important;
  }

  .slide-item {
    padding-block: 80px;
  }
}

.shadow-small {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.03);

  @include responsive(extra-small, small) {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
}
</style>

<style>
.slick-slide.slick-current.slick-active .shadow-small {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>