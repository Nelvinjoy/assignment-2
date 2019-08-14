<template>
  <div id="app">
    <div class="maine">
    <h1 class="main">Register</h1>
    <div id="nav">
      <router-link to="/">Sign Up</router-link> |
      <router-link to="/dashboard">Dashboard</router-link>
    </div>
    </div><br>
    <br>
    <br> <br> <br>
    <router-view />
  </div>
</template>

<style>
.maine{
background-color: black;
color: gold;
  height: 70px;
}
.main{
  float:left;
  margin-left: 20%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  float:right;
  margin-right: 25%;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: gold;
}
</style>
