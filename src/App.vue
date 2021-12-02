<template>
  <div id="app">
    <div id='titleBar'>
      <img src='forumLogo.png'/>
    </div>
    <router-view />
    <div id='footnote'>
      <a href=''>Git Hub</a>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#titleBar img {
  
}

#footnote {
  bottom: 0;
  position: absolute;
  width: 100%;
}
</style>
