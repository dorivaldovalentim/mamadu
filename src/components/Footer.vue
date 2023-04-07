<script setup>
import Logo from "./Logo.vue";

const socialNetworks = [
  { name: "LinkedIn", link: "https://linkedin.com", icon: "bi-linkedin" },
  { name: "Instagram", link: "https://instagram.com", icon: "bi-instagram" },
  { name: "Twitter", link: "https://twitter.com", icon: "bi-twitter" },
  { name: "Facebook", link: "https://facebook.com", icon: "bi-facebook" },
];

const data = [
  {
    title: "Suporte",
    links: [
      { label: "Conta", link: "#" },
      { label: "Centro de ajuda", link: "#" },
      { label: "Feedbacks", link: "#" },
      { label: "Acessibilidade", link: "#" },
    ],
  },
  {
    title: "Links úteis",
    links: [
      { label: "Pagamentos e taxas", link: "#" },
      { label: "Termos de serviço", link: "#" },
      { label: "Política de Privacidade", link: "#" },
      { label: "Sobre nós", link: "#" },
    ],
  },
  {
    title: "Nosso menu",
    links: [
      { label: "Mais vendidos", link: "#" },
      { label: "Categorias", link: "#" },
    ],
  },
];
</script>

<template>
  <footer>
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-12 col-md-4 col-lg-4">
          <a href="" class="text-decoration-none d-inline-block w-25">
            <Logo />
          </a>

          <p class="fs-5 pe-2 mt-4 text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            labore.
          </p>
        </div>
        <div
          class="col-12 col-md-3 col-lg-2"
          v-for="(item, index) in data"
          :key="index"
        >
          <h3 class="h4 fw-bold text-primary mb-4">{{ item.title }}</h3>

          <ul class="list-unstyled" v-if="item.links && item.links.length">
            <li
              class="mb-4"
              v-for="(subItem, subIndex) in item.links"
              :key="subIndex"
            >
              <a :href="subItem.link" class="text-decoration-none">{{
                subItem.label
              }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-bottom border-3 mt-3">
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

      <p class="py-3 text-primary text-center fw-bold">
        Copyright &copy; 2022 - <span class="text-primary">MAM</span
        ><span class="text-secondary">ADU</span>
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin-top: 150px;

  a {
    color: #9ea8c2;
  }
}
</style>