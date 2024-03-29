<template>
    <div class="home-container">
      <h1>Welcome to our E-Commerce Store!</h1>
      <div class="links-container">
        <router-link to="/product-details" class="nav-link">Product Details</router-link>
        <router-link to="/cart" class="nav-link">Cart</router-link>
      </div>
    </div>
  </template>
  
  <script>
  /* eslint-disable  */
  export default {
    name: 'Home'
  }
  </script>
  
  <style scoped>
  .home-container {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  
  .links-container {
    margin-top: 20px;
  }
  
  .nav-link {
    display: inline-block;
    margin: 0 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .nav-link:hover {
    background-color: #0056b3;
  }
  </style>
  