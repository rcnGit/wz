<template>
  <div class="pingtai">
       <img src='./img/intr1.png'/>
       <img src='./img/intr2.jpg'/>
       <img src='./img/intr3.jpg'/>
       <img src='./img/intr4.jpg'/>
       <img src='./img/intr5.jpg'/>
       <img src='./img/intr6.jpg'/>
       <img src='./img/intr7.png'/>
  </div>
      
  </template>
  
  <script>
  export default {
      name:'pingtai',
      data:function(){
          return{
            name:''
          }
      },
      created:function(){
        this.name=decodeURIComponent(this.$route.query.Name)
        this.GasyncSDKConifg(this.name+'微站','私人银行服务的领航者')
      }
  }
  </script>
  
  <style>
  .pingtai img{
      display: block;
      width:100%;
  }
  </style>
  