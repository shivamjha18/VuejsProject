<template>
  <!-- <div class="new-arrivals">
    <div v-for="product in products" :key="product.id">
      <img :src="product.image" />
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }}</p>
      <router-link :to="'/products/' + product.id"
        ><button>View Details</button></router-link
      >
      <button>Add To Cart</button>
    </div>
  </div> -->

  <!------Featured Categories----->
  <section class="new-arrivals">
    <div id="site">
      <div class="container">
        <div class="title-box">
          <h2>Mithila's Arrivals</h2>
        </div>
        <div class="row">
          <div class="col-md-3" v-for="product in products" :key="product.id">
            <div class="product-top">
              <img :src="product.image" class="product-image" />
            </div>

            <div class="product-bottom text-center">
              <h3>{{ product.name }}</h3>
              <div
                class="product-description"
                data-name="Mirror"
                data-price="10"
              >
                <p class="product-price">{{ product.price }}</p>
              </div>
              <button
                type="button"
                class="btn btn-secondary flipkart-button"
                title="Add to Cart"
              >
                <i class="fas fa-shopping-cart" @click="addToCart"></i>
              </button>

              <router-link :to="'products/' + product.id">
                <button
                  type="button"
                  class="btn btn-secondary flipkart-button"
                  title="Add to Cart"
                >
                  <i class="fas fa-bars"></i></button
              ></router-link>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { products } from "@/temp-data";

export default {
  name: "ProductList",
  props: ["products"],
  methods: {
    addToCart() {
      alert("You need to sign in first.");
    },
  },
};
</script>
