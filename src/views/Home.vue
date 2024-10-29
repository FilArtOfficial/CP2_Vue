<template>
  <div class="home">
    <div class="content">
      <div class="text">
        <h1>Добро пожаловать!</h1>
        <p>Это простое приложение с использованием Vue и Fake API.</p>
        <button @click="$router.push('/login')">Перейти к авторизации</button>
      </div>
      <div class="image-container">
        <img src="https://via.placeholder.com/300" alt="Welcome" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content {
  display: flex;
  gap: 20px;
  align-items: center;
}

.text {
  flex: 1;
  text-align: left;
}

.text h1 {
  color: #333;
  margin-bottom: 10px;
}

.text p {
  margin-bottom: 20px;
  font-size: 1.1em;
  color: #555;
}

.text button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
}

.text button:hover {
  background-color: #555;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
