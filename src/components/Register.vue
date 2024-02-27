<script setup>
import { ref } from "vue";
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");

const OnSubmit=()=>{
    console.log("successfully signed-up ")
}
</script>

<template>
  <div class="register-container">
    <h1>Register to become a shop owner</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="firstName">First name</label>
        <input type="text" name="firstName" v-model="firstName" />
      </div>
      <div class="form-group">
        <label for="lastName">Last name</label>
        <input type="text" name="lastName" v-model="lastName" />
      </div>
      <div class="form-group">
        <label for="Email">Email</label>
        <input type="email" name="Email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password" />
      </div>
      <button type="submit" @click="OnSubmit">Submit</button>
    </form>
  </div>
</template>

<style scoped>

.register-container {
  max-width: 500px;
  margin: 0 auto;
}

form {
  background-color:003F91;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
}

button {
  background: rgb(31, 31, 192);
  border: none;
  border-radius: 3px;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

button:hover {
  background: rgb(22, 22, 138);
}
</style>
