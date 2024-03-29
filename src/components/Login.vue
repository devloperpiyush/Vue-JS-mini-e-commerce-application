<template>
  <div class="login-container">
    <h1>Login Page</h1>
    <form @submit.prevent="login" class="login-form">
      <input type="text" value="user@example.com" placeholder="Username" required class="login-input">
      <input type="password" value="password" placeholder="Password" required class="login-input">
      <button type="submit" class="login-button">Login</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable  */
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';

export default {
  name: 'LoginForm',
  setup() {
  
    const router = useRouter();
    const userStore = useUserStore();

    const login = async () => {
  try {
    await userStore.loginUser();
  
    router.push('/product-details');
  } catch (error) {
    console.error('Login error:', error);
  }
};

    return {  login };
  }
}

</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.login-form {
  display: flex;
  flex-direction: column;
}

.login-input {
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>