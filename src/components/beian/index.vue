<template>
  <div class="beian">
    <a href="http://beian.miit.gov.cn" target="_blank">鄂ICP备2021014854号-1</a>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="scss">
.beian{
  font-size: 13px;
  position:absolute;
  text-align:center;
  bottom:0px;
  width:80%; /* 正常情况应该是100% */
  a {
    font-size: 13px;
    text-decoration: none;
    color: rgba(51, 51, 51, .54);
    &:hover{
       color:#f33;
      &:after{
         width:100%;
       }
    }
  }
}
</style>