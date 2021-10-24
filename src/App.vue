<template>
  <div id="app">
    <div class="desc">
      <introduction></introduction>
      <skate-board></skate-board>
      <div class="beian">
        <a href="http://beian.miit.gov.cn" target="_blank">鄂ICP备2021014854号-1</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">

html, body, #app{
  margin: 0;
  padding: 0;
}
#app {
  min-height: 400px;
  font-family: Montserrat, Helvetica Neue, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  .desc{
    width: 80vw;
    margin: 0 auto;
    .beian{
      font-size: 13px;
      position:absolute;
      text-align:center;
      bottom:0px;
      width:80%;
      a {
        font-size: 13px;
        text-decoration: none;
        color: rgba(51, 51, 51, .54);
      }
    }
  }
}

</style>
