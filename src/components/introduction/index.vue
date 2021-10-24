<template>
  <div class="introduction">
    <p>
      <b>Bai</b>
    </p>
    <ul class="intro-list">
      <li>
        <a href="https://blog.mua.blue" target="_blank">博客</a>
      </li>
      <li>
        <a href="https://seat.mua.blue" target="_blank">座位预约</a>
      </li>
      <li>
        <a href="https://chaoxing.mua.blue" target="_blank">超星签到</a>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>

.introduction {
  padding-top: 0px;
  p {
    font-size: 15px;
    line-height: 2em;
    margin: 0;
    letter-spacing: 2px;
    text-decoration: none;
    transition: color .2s ease;
    padding-top:12px;
  }
  .intro-list{
    align-self: center;
    color: rgba(51, 51, 51, .62);
    display: flex;
    justify-content: center;
    padding:0;
    li{
      margin: 6px;
      list-style: none;
      opacity: 1;
      transform:translateY(10px);
      a{
        font-size: 13px;
        display: inline-block;
        transition: all .5s;
        position: relative;
        text-decoration: none;
        color:inherit;
        &:after{
          transition: all .5s;
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 1px;
          background-color:rgba(51, 51, 51, .54);
        }
        &:hover{
          color:#f33;
          &:after{
            width:100%;
          }
        }
      }
    }
  }
}
</style>
