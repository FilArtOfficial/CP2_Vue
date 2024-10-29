<template>
  <div class="users">
    <h1>Список пользователей</h1>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id" class="user-item">
        {{ user.firstName }} {{ user.lastName }} - {{ user.email }}
      </li>
    </ul>
    <p v-else>Загрузка пользователей...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    this.users = data.users;
  },
};
</script>

<style scoped>
.user-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
