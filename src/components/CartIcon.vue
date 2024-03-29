<template>
    <div class="cart-icon" @click="goToCart">
        🛒 <span class="cart-value">{{ cartValue }}</span>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '@/store/product';

const router = useRouter();
const productStore = useProductStore();
const cartValue = computed(() => productStore.cart.length);

const goToCart = () => {
    router.push('/cart');
};
</script>

<style scoped>
.cart-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
}

.cart-value {
    margin-left: 4px;
    background-color: #007bff;
    color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>