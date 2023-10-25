<template>
  <!-- <section id="nav-bar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <router-link to="/products" class="nav-link" style="color: black"
            >Home</router-link
          >

          <router-link to="/about" class="nav-link" style="color: black"
            >About</router-link
          >

          <router-link to="/contact" class="nav-link" style="color: black"
            >Contact</router-link
          >

          <router-link to="/products" class="nav-link" style="color: black"
            >Product</router-link
          >

          <div class="input-group w-100">
            <input
              type="text"
              class="form-control rounded-pill"
              placeholder="Search for products"
              aria-label="Search"
              aria-describedby="search-button"
            />
            <div class="input-group-append">
              <button
                class="btn btn-warning rounded-pill"
                type="submit"
                id="search-button"
              >
                Search
              </button>
            </div>
            <ul class="navbar-nav d-flex">
              <li class="nav-item">
                <a class="nav-link" href="#">Sign Up</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sign In</a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  </section> -->
  <section id="nav-bar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/products" class="nav-link" style="color: black"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" style="color: black"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" style="color: black"
              >Contact</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link" style="color: black"
              >Product</router-link
            >
          </li>
          <li class="nav-item" v-if="!registered">
            <router-link to="/signin" class="nav-link" style="color: black"
              >SignIn</router-link
            >
          </li>
          <li class="nav-item" v-if="!registered">
            <router-link to="/signup" class="nav-link" style="color: black"
              >SignUp</router-link
            >
          </li>
          <li class="nav-item" v-if="registered">
            <router-link to="/signup" class="nav-link" style="color: black"
              >Cart</router-link
            >
          </li>
        </ul>
      </div>

      <!-- Search Bar -->
      <div class="d-flex">
        <div class="input-group input-group-sm">
          <input
            type="text"
            class="form-control rounded-pill"
            placeholder="Search for products"
            aria-label="Search"
            aria-describedby="search-button"
          />
          <div class="input-group-append">
            <button
              class="btn btn-warning rounded-pill"
              type="submit"
              id="search-button"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
import liti from "@/assets/lithi.jpg";
export default {
  name: "NavbarPage",
  registered: false,
  data() {
    return {
      liti,
      registered: this.registered,
    };
  },
};
</script>
