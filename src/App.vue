<template>
  <div id="app">
    <nav>
      <router-link to="/home">Главная</router-link> |
      <router-link to="/users">Пользователи</router-link> |
      <router-link to="/profile">Профиль</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}

nav {
  margin-bottom: 20px;
  text-align: right;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: black;
}

nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
