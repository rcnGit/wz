<template>
  <div class="events">
      <img src='./img/event1.jpg'/>
      <img src='./img/event2.jpg'/>
      <img src='./img/event3.jpg'/>
      <img src='./img/event4.jpg'/>
      <img src='./img/event5.png'/>
      <img src='./img/event6.jpg'/>
      <img src='./img/event7.png'/>
  </div>
      
  </template>
  
  <script>
  export default {
      name:'events',
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
  .events img{
      display: block;
      width:100%;
  }
  </style>
  