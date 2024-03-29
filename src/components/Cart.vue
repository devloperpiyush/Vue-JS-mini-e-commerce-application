<template>
  <div class="cart-container">
    <h1 class="cart-title">Your Cart</h1>
    <div v-if="cartItems.length > 0" class="cart-items">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <slot name="name" :item="item">{{ item.name }}</slot>
        <slot name="price" :item="item">${{ item.price }}</slot>
        <div class="quantity-controls">
          <button @click="decreaseQuantity(item)" class="quantity-button">-</button>
          <slot name="quantity" :item="item">{{ item.qty }}</slot>
          <button @click="increaseQuantity(item)" class="quantity-button">+</button>
        </div>
        <button @click="removeFromCart(item)" class="remove-button">Remove</button>
      </div>
      <div class="cart-total">
        <p>Subtotal: ${{ subtotal }}</p>
        <p>Delivery Fee: ${{ deliveryFee }}</p>
        <p>Promotional Discount: ${{ 0 }}</p>
        <p>Total: ${{ total }}</p>
      </div>
    </div>
    <p v-else class="empty-cart">Your cart is empty</p>
  </div>
</template>

<script>
/* eslint-disable */
import { ref, computed, onMounted } from 'vue';
import { useProductStore } from '@/store/product';

export default {
  name: 'Cart',
  setup() {
    const productStore = useProductStore();
    const cartItems = ref(productStore.cart);

    const subtotal = computed(() => {
      return cartItems.value.reduce((acc, item) => acc + (item.price * item.qty), 0);
    });

    const deliveryFee = computed(() => {
      return subtotal.value >= 500 ? 0 : 50;
    });

    const promotionalDiscount = computed(() => {
      return 0;
    });

    const total = computed(() => {
      return subtotal.value + deliveryFee.value - promotionalDiscount.value;
    });

    const increaseQuantity = (item) => {
      const existingItem = cartItems.value.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.qty++;
      }
    };

    const decreaseQuantity = (item) => {
      const existingItem = cartItems.value.find(cartItem => cartItem.id === item.id);
      if (existingItem && existingItem.qty > 1) {
        existingItem.qty--;
      }
    };

    const removeFromCart = (item) => {
      const index = cartItems.value.findIndex(cartItem => cartItem.id === item.id);
      if (index !== -1) {
        cartItems.value.splice(index, 1);
      }
    };

    return {
      cartItems,
      subtotal,
      deliveryFee,
      promotionalDiscount,
      total,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
    };
  }
}
</script>

<style scoped>
.cart-items {
  margin-bottom: 20px;
}

.cart-item {
  margin-bottom: 10px;
}

.quantity-controls button:hover {
  background-color: #0056b3;
}

.remove-from-cart {
  cursor: pointer;
  background-color: #dc3545;
  color: white;

}

.remove-from-cart:hover {
  background-color: #c82333;
}

.cart-total {
  font-weight: bold;
}
</style>
