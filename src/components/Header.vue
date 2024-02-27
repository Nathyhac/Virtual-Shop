<script setup>
import Body from './Body.vue'
</script>
<template>
  <nav class="navbar">
    <router-link to="/">
      <img src="@/assets/logo.png" alt="Our Logo" class="navbar-logo" />
    </router-link>
    <div class="navbar-links">
      <router-link to="/shops" class="navbar-link">Shops List</router-link>
      <router-link to="/items" class="navbar-link">Item List</router-link>
    </div>
    <div class="navbar-actions">
      <router-link to="/register" class="navbar-action">
        <p>Create Shop</p>
      </router-link>
      <div class="search-box">
        <input type="text" placeholder="Search" class="search-input" />
        <button class="search-button">Search</button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Add styles for your navigation */
.navbar {
  background-color: #5DA9E9;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.navbar-logo {
  max-height: 40px;
}

.navbar-links {
  display: flex;
  gap: 20px;
}

.navbar-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s;
}

.navbar-link:hover {
  color: #fff9c4; /* Change color on hover */
}

.navbar-actions {
  display: flex;
  gap: 20px;
}
.navbar-action {
  display: flex;
  gap: 20px;
  color: white;
}

.search-box {
  display: flex;
  align-items: center;
}

.search-input {
  padding: 8px;
  margin-right: 8px;
  border: none;
  border-radius: 5px;
}

.search-button {
  background-color: #555;
  color: white;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #333;
}
</style>
