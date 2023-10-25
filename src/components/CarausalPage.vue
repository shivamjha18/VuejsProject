<template>
  <div class="carousel-inner">
    <div
      class="carousel-item active"
      v-for="product in carausal"
      :key="product.id"
    >
      <img
        :src="product.image"
        class="d-block w-100"
        alt="Wild Landscape"
        style="height: 150px"
      />
    </div>
  </div>
</template>
<script>
import { carausal } from "@/temp-data";
export default {
  name: "CarausalPage",
  //   props: ["products"],
  data() {
    return {
      carausal,
    };
  },
};
</script>
