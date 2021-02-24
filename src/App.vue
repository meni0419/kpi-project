<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Оргструктура</router-link> |
      <router-link to="/indicators">Показатели</router-link> |
      <router-link to="/tasks">Задачи</router-link> |
      <router-link to="/facts">Факты</router-link>
      <router-link to="/auth">
        <v-btn id="btn-login">
          Войти
          <v-icon right> mdi-login </v-icon>
        </v-btn>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #e60000;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#btn-login {
  text-decoration: none;
  position: absolute;
  right: 20px;
}
</style>
