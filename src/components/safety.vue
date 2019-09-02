<template>
  <div class="safety">
      <img src='./img/safe1.jpg'/>
      <img src='./img/safe2.png'/>
  </div>
      
  </template>
  
  <script>
  export default {
      name:'safety',
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
  .safety img{
      display: block;
      width:100%;
  }
  </style>
  