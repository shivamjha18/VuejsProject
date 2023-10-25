<template>
  <CarausalPage :products="products" />
  <ProductList :products="products" />
</template>

<script>
import { products } from "../temp-data";
import ProductList from "@/components/ProductList.vue";
import CarausalPage from "@/components/CarausalPage.vue";

export default {
  name: "ProductPage",
  components: {
    ProductList,
    CarausalPage,
  },
  data() {
    return {
      products,
    };
  },
};
</script>
