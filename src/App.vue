<template>
  <div id="app">
    <v-tabs id="nav" center-active fixed-header background-color="#2196F3" slider-color="#FFC107">
      <v-tab> <router-link to="/">Оргструктура</router-link></v-tab>
      <v-tab> <router-link to="/indicators">Показатели</router-link></v-tab>
      <v-tab> <router-link to="/tasks">Задачи</router-link></v-tab>
      <v-tab> <router-link to="/facts">Факты</router-link> </v-tab>
      <router-link to="/auth">
        <v-btn id="btn-login">
          Войти
          <v-icon right> mdi-login </v-icon>
        </v-btn>
      </router-link>
    </v-tabs>
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
  display: block;
  //padding: 10px;
  //position: fixed;
  a {
    font-weight: bold;
    color: #BCDFFB;
    &.router-link-exact-active {
      color: #ffffff;
    }
    text-decoration: none;
  }
}

#btn-login {
  margin: 5px 5px 0 0;
  text-decoration: none;
  position: absolute;
  right: 0px;
}
</style>