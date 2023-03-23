<script setup>
const socialNetworks = [
  { name: "LinkedIn", link: "https://facebook.com", icon: "bi-linkedin" },
  { name: "Instagram", link: "https://instagram.com", icon: "bi-instagram" },
  { name: "Twitter", link: "https://twitter.com", icon: "bi-twitter" },
  { name: "Facebook", link: "https://facebook.com", icon: "bi-facebook" },
];
</script>

<template>
  <footer class="pt-5">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-12 col-md-4 col-lg-4">
          <a href="" class="text-decoration-none">
            <h2 class="h2 fw-bold text-uppercase">
              <span class="text-primary">Mam</span
              ><span class="text-secondary">adu</span>
            </h2>
          </a>
          <p class="fw-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            labore.
          </p>
        </div>
        <div class="col-12 col-md-3 col-lg-2">
          <h3 class="h4 fw-bold text-primary">Title</h3>
          <ul class="list-unstyled">
            <li>
              <a href="" class="text-primary text-decoration-none">Link 1</a>
            </li>
            <li>
              <a href="" class="text-primary text-decoration-none">Link 2</a>
            </li>
            <li>
              <a href="" class="text-primary text-decoration-none">Link 3</a>
            </li>
            <li>
              <a href="" class="text-primary text-decoration-none">Link 4</a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-3 col-lg-2">
          <h3 class="h4 fw-bold text-primary">Title</h3>
          <ul class="list-unstyled">
            <li>
              <a href="" class="text-primary text-decoration-none">Link 1</a>
            </li>
            <li>
              <a href="" class="text-primary text-decoration-none">Link 2</a>
            </li>
            <li>
              <a href="" class="text-primary text-decoration-none">Link 3</a>
            </li>
            <li>
              <a href="" class="text-primary text-decoration-none">Link 4</a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-3 col-lg-2">
          <h3 class="h4 fw-bold text-primary">Title</h3>
          <ul class="list-unstyled">
            <li>
              <a href="" class="text-primary text-decoration-none">Link 1</a>
            </li>
            <li>
              <a href="" class="text-primary text-decoration-none">Link 2</a>
            </li>
            <li>
              <a href="" class="text-primary text-decoration-none">Link 3</a>
            </li>
            <li>
              <a href="" class="text-primary text-decoration-none">Link 4</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-bottom border-3">
        <ul class="list-unstyled d-flex">
          <li v-for="(item, index) in socialNetworks" :key="index">
            <a
              :href="item.link"
              target="_blank"
              class="bg-primary text-white btn rounded-circle me-1"
              ><i class="bi" :class="item.icon"></i
            ></a>
          </li>
        </ul>
      </div>

      <p class="py-2 text-primary text-center fw-bold">
        Copyright &copy; 2022 - <span class="text-primary">MAM</span
        ><span class="text-secondary">ADU</span>
      </p>
    </div>
  </footer>
</template>