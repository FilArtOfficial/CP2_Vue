<template>
    <div class="profile">
      <h1>Профиль пользователя</h1>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-else-if="user">
        <img :src="user.image" alt="User Image" />
        <p>{{ user.firstName }} {{ user.lastName }}</p>
        <p>{{ user.email }}</p>
      </div>
      <p v-else>Загрузка...</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: null,
        error: null,
      };
    },
    async created() {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('https://dummyjson.com/auth/me', {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        });
  
        const data = await response.json();
        if (response.ok) {
          this.user = data;
        } else {
          this.error = data.message;
        }
      } catch (err) {
        this.error = 'Не удалось загрузить профиль';
      }
    },
  };
  </script>
  
  <style>
  .error {
    color: red;
  }
  </style>
  