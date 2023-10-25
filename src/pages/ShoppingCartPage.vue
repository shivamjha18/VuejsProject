<template>
    <h1>MY CART</h1>

    <div v-if="cartItems.length>0">
        <div class="product-container" v-for="product in cartItems" :key="product.id">
            <img class="product-image" :src="product.image" />
            <div class="detail-warp">
                <h3>{{product.name}}</h3>
                <p>{{product.price}}</p>
            </div>
            <button>Remove</button>
        </div>
        <button>Checkout</button>
    </div>
    <div v-if="cartItems.length===0">
        <h3>No item in your cart</h3>
        
    </div>
    </template>
    
    <script>
    import { cartItems } from '@/temp-data';
    export default{
        name:"ProductCartPage",
        data(){
            return{
                cartItems,
            }
        }
    }
    </script>