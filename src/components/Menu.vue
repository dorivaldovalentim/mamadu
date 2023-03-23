<script setup>
const data = [
  { label: "Início", link: "/", items: [] },
  {
    label: "Sobre",
    link: "/sobre",
    subitems: [
      { label: "História", link: "/historia" },
      { label: "Contactos", link: "/contactos" },
    ],
  },
];
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a href="/" class="navbar-brand fw-bold text-uppercase"
        ><span class="text-primary">Mam</span
        ><span class="text-secondary">adu</span></a
      >

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li
            v-for="(item, index) in data"
            :key="index"
            :class="{ dropdown: item.subitems && item.subitems.length }"
            class="nav-item"
          >
            <a
              v-if="!(item.subitems && item.subitems.length)"
              :href="item.link"
              class="nav-link text-primary fw-bold"
              >{{ item.label }}</a
            >

            <a
              v-if="item.subitems && item.subitems.length"
              :href="item.link"
              class="nav-link dropdown-toggle text-primary fw-bold"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ item.label }}
            </a>

            <ul class="dropdown-menu">
              <li
                v-for="(subitem, subitemIndex) in item.subitems"
                :key="subitemIndex"
              >
                <a :href="subitem.link" class="dropdown-item">{{
                  subitem.label
                }}</a>
              </li>
            </ul>
          </li>
        </ul>

        <form class="d-flex" role="search">
          <button class="btn" type="submit">
            <i class="bi bi-search"></i>
          </button>

          <RouterLink to="/login" class="btn btn-primary rounded-pill px-4"
            >Iniciar sessão</RouterLink
          >
        </form>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
// @import './../assets/scss/variables';
.dropdown-toggle::after {
  content: none;
}
</style>