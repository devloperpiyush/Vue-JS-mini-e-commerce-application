<template>
  <div class="product-details">
    <div class="header">
      <cart-icon />
    </div>
    <h1>Product Details Page</h1>
    <input type="text" v-model="searchQuery" placeholder="Search by name" style="margin-bottom: 10px;">
    <div v-if="filteredProducts.length > 0" class="product-list">
      <div v-for="product in filteredProducts" :key="product.id" class="product">
        <p class="product-name">Name: {{ product.name }}</p>
        <p class="product-price">Price: {{ product.price }}</p>
        <button @click="addToCart(product)" class="add-to-cart">Add to Cart</button>
      </div>
    </div>
    <p v-else class="no-products">No products available</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import CartIcon from './CartIcon.vue';

import { useProductStore } from '@/store/product';

const productStore = useProductStore();
const products = ref(productStore.products);
const searchQuery = ref('');

const addToCart = (product) => {
  const existingProduct = productStore.cart.find(item => item.id === product.id);
  if (!existingProduct) {
    productStore.addToCart({ ...product, qty: 1 });
  }
};

const updateProductPrices = () => {
  setInterval(() => {
    products.value.forEach(product => {
      product.price = Math.floor(Math.random() * 401) + 100;
    });
  }, 5000);
};

onMounted(() => {
  updateProductPrices();
});

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    return product.name.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});
</script>

<style scoped>
.product-details {
  margin: 20px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.product {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

.product-name {
  font-weight: bold;
}

.add-to-cart {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.add-to-cart:hover {
  background-color: #0056b3;
}

.no-products {
  font-style: italic;
  margin-top: 20px;
}
</style>
