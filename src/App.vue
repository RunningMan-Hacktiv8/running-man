<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img src="https://fontmeme.com/permalink/180824/163d797065844d319a5f61ffae1d4b76.png" alt="pixel-fonts" border="0"></router-link> ----
      <router-link to="/play"><img src="https://fontmeme.com/permalink/180824/70bbab355fe4451bc1aad4438daf2163.png" alt="pixel-fonts" border="0"></router-link> ---- 
      <router-link to="/listRoom"><img src="https://fontmeme.com/permalink/180824/a45602d85fbaa77483177729ff85c7c2.png" alt="pixel-fonts" border="0"></router-link>  
    </div>
    <router-view/>
  </div>
</template>


<script>
// const soundSonicStart =
//   "https://wingless-seraph.net/sound/voice/03_jakigan_before.wav";

// var audio = new Audio(soundMarioWin);
// audio.play();


export default {};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  background-color: black;
}
#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
