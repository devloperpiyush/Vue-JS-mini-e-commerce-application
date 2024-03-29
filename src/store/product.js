import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
        { id: 1, name: 'iPhone 13', price: 200, deliveryFee: 0 },
        { id: 2, name: 'Samsung Galaxy S21', price: 100, deliveryFee: 0 },
        { id: 3, name: 'Google Pixel 6', price: 50, deliveryFee: 0 },
        { id: 4, name: 'OnePlus 9 Pro', price: 899, deliveryFee: 0 },
        { id: 5, name: 'Xiaomi Mi 11', price: 749, deliveryFee: 0 },
        { id: 6, name: 'Sony Xperia 1 III', price: 1299, deliveryFee: 0 }
      ],      
    cart: []
  }),
  actions: {
    addToCart(product) {
      this.cart.push(product);
    },
  },
  getters: {
    getProducts() {
      return this.products;
    },
  }
});
