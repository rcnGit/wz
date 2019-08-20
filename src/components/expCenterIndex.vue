<template>
    <div class="expCenterIndex">
        <div class="wCard">
            <span class="wName">张颖</span><span class="wDt">DT1928394</span><img src="./img/towDetail.png" class="towDetail"/>
        </div><!--wCard--><!---->
        <div class="areaTopBanner tiyanTop">
           <div class="backArea">返回大区</div>
            <!-- <img :src="imageURL" class="areaBanner"/> -->
            <img src="./img/tiyanBg.png" class="topBanner"/>
            <div style="position:absolute;top:.96rem;width: 100%;">
            <img src="./img/areaLogo.png" class="areaLogo"/>
            <div class="areaNme" v-html="centerName"></div>
            <div class="areaIntr line5" v-html="centerSynopsis"></div>
            <!-- <div class="areaMapBox">
                <img src="./img/map.png" class="map"/>
                 <div class="expCenter">
                    <div class="expOne">杭州一部体验中心</div><div class="expOne">杭州一部体验中心</div><div class="expOne">杭州一部体验中心</div>
                </div>
            </div> -->
           
        </div>
        <div class="wealthTeacherBox">
               <div class="swiper-container wealthTeacherContainer">
                    <div class="swiper-wrapper">
                         <div class="swiper-slide" v-for="(item,index) in userList">
                            <div class="Card" >
                                <img :src="item.photo" class="card_left"/>
                                <img src="./img/cardback.png" class="card_right"/>
                                <p class="card_name">{{item.userName}}</p>
                                <p class="card_num">{{item.userId}}</p>
                                <p class="card_content">{{item.synopsis}}</p>
                                <p class="card_des">{{item.operationContent}}</p>
                                <p class="card_time">{{timeDistance(item.operationTime)}}</p>
                            </div>
                        </div>
                        <!-- <div class="swiper-slide">
                            <div class="Card">
                                <img src="./img/lin/wt.png" class="card_left"/>
                                <img src="./img/cardback.png" class="card_right"/>
                                <p class="card_name">张嘉善</p>
                                <p class="card_num">DT1913071</p>
                                <p class="card_content">22年国有银行、股份制银行财富管理工作经验，长期从事财富管理实务和个人财务规划，擅长股票投...务和个人财务规划，擅长股票投...</p>
                                <p class="card_des">她推荐了一只基金  </p>
                                <p class="card_time">45分钟前</p>
                            </div>
                        </div> -->

                    </div>
              </div>
           </div> <!--wealthTeacherBox  -->
        </div><!--areaTopBanner-->
        <div class="activeBox pl26 pr26">
            <div class="areaTitle"><img src="./img/areaTitleBg.png" class="areaTitleBg"/><span class="titsp">尊享活动</span><img src="./img/more.png" class="areaMore"/></div>
            <div class="activeOne">
                <img src="./img/lin/active.png" class="activeImg"/>
                <div class="activeDetail">
                    <div class="tit">家族信托业务新业务分享</div>
                    <div class="time">活动时间：<span>2018-12-06至2018-12-06</span></div>
                    <div class="address">活动地点：<span>浙江省杭州市江干区钱江路1366号华润大厦B座2508</span></div>
                </div>
                 <div style="clear:both;"></div>
            </div><!--activeOne-->
           
            <div class="activeOne" style="margin-top:0;">
                <img src="./img/lin/active.png" class="activeImg"/>
                <div class="activeDetail">
                    <div class="tit">家族信托业务新业务分享</div>
                    <div class="time">活动时间：<span>2018-12-06至2018-12-06</span></div>
                    <div class="address">活动地点：<span>浙江省杭州市江干区钱江路1366号华润大厦B座2508</span></div>
                </div>
                 <div style="clear:both;"></div>
            </div><!--activeOne-->
        </div><!--activeBox-->
        <!-- <div class="space"></div> -->
        
        <div class="pl26 pr26" style="margin-top:0.1rem;background:#F9F9F9;padding: .24rem .32rem;">
            <div class="areaBannerBoX">
                    <mt-swipe :auto="5000">
                        <!-- <mt-swipe-item><img src="./img/lin/areaBanner.png" class="areaBanner"/></mt-swipe-item>
                        <mt-swipe-item><img src="./img/lin/areaBanner.png" class="areaBanner"/></mt-swipe-item>
                        <mt-swipe-item><img src="./img/lin/areaBanner.png" class="areaBanner"/></mt-swipe-item> -->
                        <mt-swipe-item v-for="item in bannerList" :key="item.bannerId">
                            <a :href='item.urlBring'><img :src="item.imageUrl" class="areaBanner"/></a>
                        </mt-swipe-item>
                    </mt-swipe>
            </div>
        </div>
        <div class="contactUs pl26 pr26">
            <div class="areaTitle"><img src="./img/areaTitleBg.png" class="areaTitleBg"/><span class="titsp">联系我们</span></div>
            <p class="contacTel">联系电话：{{phone}}</p>
            <p class="contacAdd">地址：{{city}}</p>
            <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:221px;margin:.26rem auto;" @click="getClickInfo" :scroll-wheel-zoom='true'>
            </baidu-map>
        </div><!--knowUs-->
        <div class="space"></div>
        <div class="wealth pl26 pr26">
            <div class="areaTitle"><img src="./img/areaTitleBg.png" class="areaTitleBg"/><span class="titsp">尊享财富</span></div>
            <div class="wealthTop"><span>立足高端客户</span><span>|</span><span>全市场精挑细选</span><span>|</span><span>综合金融服务平台</span></div>
            <div class="swiper-container pindao wcontainer">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src='./img/wealthImg1.png' class='wealthImg'/>
                    </div>
                    <div class="swiper-slide">
                        <img src='./img/wealthImg2.png' class='wealthImg'/>
                    </div>
                    <div class="swiper-slide">
                        <img src='./img/wealthImg3.png' class='wealthImg'/>
                    </div>
                   <div class="swiper-slide">
                        <img src='./img/wealthImg4.png' class='wealthImg'/>
                    </div>
                    <div class="swiper-slide">
                        <img src='./img/wealthImg5.png' class='wealthImg'/>
                    </div>
                </div>
            
            </div>
            <div>大唐财富体系下的业务范围涵盖现金管理、债券投资、股权投资、家族信托等投资项目，多方面满足高净值客户的投资需求。</div>
        </div><!--wealth-->
        <div class="space"></div>
        <div class="knowUs pl26 pr26">
            <div class="areaTitle"><img src="./img/areaTitleBg.png" class="areaTitleBg"/><span class="titsp">了解大唐</span></div>
            <div class="knowUsMain">
                <div class="knowUsOne">
                    <img src="./img/knowUs1.png" class="knowUsImg"/>
                    <p class="p1">公司简介</p>
                    <p class="p2">专业财富管理公司</p>
                </div>
                <div class="knowUsOne">
                    <img src="./img/knowUs2.png" class="knowUsImg"/>
                    <p class="p1">大事记</p>
                    <p class="p2">公司荣誉</p>
                </div>
                <div class="knowUsOne">
                    <img src="./img/knowUs3.png" class="knowUsImg"/>
                    <p class="p1">安全保障</p>
                    <p class="p2">合规运作7年</p>
                </div>
                <div style="clear:both;"></div>
            </div>
        </div><!--knowUs-->
        <div class="space"></div>
        <div class="qrCodeBox  pl26 pr26">
            <div class="qrCodeOne qrCodeOne1">
                <img src="./img/lin/ma.png" class="qrCode"/>
                <p class="qrCodeText">下载大唐财富APP</p>
            </div>
            <div class="qrCodeOne" >
                <img src="./img/lin/ma.png" class="qrCode"/>
                <p class="qrCodeText">关注微信服务号</p>
            </div>
            <div style="clear:both;"></div>
        </div><!--qrCodeBox-->
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Swiper from 'swiper';
import { Indicator, MessageBox, Toast } from 'mint-ui';
import axios from 'axios'
export default {
    name:"expCenterIndex",
    data:function(){
        return{
            center: {lng: '', lat: ''},
            zoom: 13,
            centerName:'',
            imageURL:'',
            centerSynopsis:'',
            bannerList:[],
            userList:[],
            phone:'',
            city:''
        }
    },
    methods:{
        timeDistance(value){
			//当前时间磋
            let nowt = Math.round(new Date() / 1000)
            console.log(nowt)
			let times = (nowt - value / 1000);
			if(times>31536000){
				return `${parseInt(times/31536000)}年前`
			}else if(times>=86400&&times<31536000){
				return `${parseInt(times/86400)}天前`;
			}else if(times>=3600&&times<86400){
				return `${parseInt(times/3600)}小时前`;
			}else if(times>60&&times<3600){
				return `${parseInt(times/60)}分钟前`;
			}else if(times<60){return '刚刚'}

		},
          initS:function(className,num){
            className='.'+className;
             new Swiper (className, {
                slidesPerView : num,
                centeredSlides : false,
                slidesOffsetAfter : 30,//距离右边边30px
                //slidesOffsetBefore : 100,//距离左边距离
                })     
        },
        initS2:function(className,num){
            className='.'+className;
            setTimeout(function() {
             new Swiper (className, {
                slidesPerView : num,
                spaceBetween: -20,
                centeredSlides: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

            })
            },1000)     
        },
        handler ({BMap, map}) {
        this.getCenterInfo()
        console.log(this.phone)
        var myValue = this.city;//查询的详细地址
        setPlace();
          function setPlace(){
            map.clearOverlays();    //清除地图上所有覆盖物
            function myFun(){
              console.log(local.getResults().getPoi(0).point)
              var poi = local.getResults().getPoi(0);    //获取第一个智能搜索的结果
              var lng =poi.point.lng;
              var lat =poi.point.lat;
              var point = new BMap.Point(lng,lat)
              map.centerAndZoom(point, 13)
              var marker = new BMap.Marker(point) // 创建标注
              map.addOverlay(marker) // 将标注添加到地图中
              var labelContent =
                '<div style=""><p>'
                + "工作地点"
                + '</p>'
                +'<p style="color:#6F6F6F;font-size:.32rem;white-space: normal;width:5rem;">'
                + myValue
                + '</p></div>';
            
            var label = new BMap.Label(labelContent, {offset:new BMap.Size(-50,-80)});
                    label.setStyle({
                        color : "black",
                        fontSize : ".346667rem",
                        backgroundColor :"#FFF",
                        border :"0px solid #1E90FF",
                        padding:".3rem .3rem .3rem 0",
                        boxShadow: "0px .053rem .16rem rgba(0,0,0,0.16)",
                    });
                    marker.setLabel(label); 
                var circle = new BMap.Circle(point, 6, { strokeColor: 'Red', strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' })
                map.addOverlay(circle)
            }
            var local = new BMap.LocalSearch(map, { //智能搜索
              onSearchComplete: myFun
            });
            local.search(myValue);
          }
      
    },
    getClickInfo (e) {
    //   console.log(e.point.lng)
    //   console.log(e.point.lat)
    //   this.center.lng = e.point.lng
    //   this.center.lat = e.point.lat
    },
    getBanner:function(){//获取广告配置
        let that = this;
        Indicator.open();
        var param=Base64.encode('{"userId":"'+that.userId+'","type":"4"}');//"type": "1首页2工作台3微站大区首页4微站业务部首页"
        axios({
            method:'get',
            url:'/olmgweb/tcApiController/getTcBanner',//获取banner列表
            params:{
                param:param,
                osFlag:'3'
            }
        })
        .then(function(res) {//成功之后
            Indicator.close();
            var data=Base64.decode(res.data);
            data=jQuery.parseJSON(data);
            console.log(data)
            var retCode=data.retCode;
            var retMsg=data.retMsg;
            if(retCode == 0){
                if(data.bannerList.length>0){
                    that.bannerList=data.bannerList;
                }
            }
        })
    },
    getCenterInfo:function(){
        let that = this;
        Indicator.open();
        that.groupId = that.$route.query.groupId;
        //that.groupId='30e096cd5b2944ffa49e42d802d7450f'
        var param=Base64.encode('{"groupId":"'+that.groupId+'"}');
        axios({
            method:'get',
            url:'/olmgweb/wzApiController/getAreaAndCenterInfo',//获取大区信息及其下属体验中心信息
            params:{
                param:param,
                osFlag:'3'
            }
        })
        .then(function(res) {//成功之后
            Indicator.close();
            var data=Base64.decode(res.data);
            data=jQuery.parseJSON(data);
            console.log(data)
            var retCode=data.retCode;
            var retMsg=data.retMsg;
            if(retCode == 0){
                console.log(data.centerList[0].centerName)
                that.centerName=data.centerList[0].centerName//体验中心名称,
                that.imageURL=data.centerList[0].imageURL
                that.centerSynopsis=data.centerList[0].centerSynopsis//体验中心概述,
                that.phone = data.centerList[0].phone
                that.city = data.centerList[0].city
            }
        })
    },
    getCenterUsers:function(){
        let that = this;
        Indicator.open();
        that.groupId = that.$route.query.groupId;
        var param=Base64.encode('{"groupId":"'+that.groupId+'","condition":""}');
        axios({
            method:'get',
            url:'/olmgweb/wzApiController/getCenterUsers',//获取体验中心下属全部财富师信息
            params:{
                param:param,
                osFlag:'3'
            }
        })
        .then(function(res) {//成功之后
            Indicator.close();
            var data=Base64.decode(res.data);
            data=jQuery.parseJSON(data);
            console.log(data)
            var retCode=data.retCode;
            var retMsg=data.retMsg;
            if(retCode == 0){
                if(data.userList.length>0){
                    that.userList=data.userList;
                }
            }
        })
    }
    },
    components:{Swipe, SwipeItem,Swiper},
    mounted:function(){
        this.initS('wcontainer',2.5);
        this.initS2('wealthTeacherContainer',1.2);
        // new swiper = new Swiper('.wealthTeacherContainer', {
        //     slidesPerView: 3,
        //     spaceBetween: 30,
        //     pagination: {
        //         el: '.swiper-pagination',
        //         clickable: true,
        //     },
        // });
    },
    created:function(){
        this.userId = this.$route.query.userId;
       // this.userId='DT1603225'
        this.getCenterUsers()
        this.getCenterInfo()
        this.getBanner()
        
    }
}
</script>

<style>
    @import 'area.css';
    .tiyanTop{
        min-height: 12rem;
    }
    .tiyanTop .areaIntr{
        color: #4D3838;
        text-shadow: none;
        font-weight: 400;
        margin-bottom: .5rem;
    }
    .backArea{
        width:2.293333rem;
        height:.746667rem;
        line-height: .746667rem;
        color:#fff;
        font-size: .373333rem;
        top:.266667rem;
        position: absolute;
        background:#B29360;
        border-radius:0px 40px 40px 0px
    }
    .wealthTeacherBox{
        height: 5.1rem;
        margin-top: -1rem;
        background: #f5f5f5;
    }
    .wealthTeacherContainer {
        width:100%;
        height: 4.586667rem;
    }
    .wealthTeacherContainer .swiper-slide{
      text-align: center;
      font-size: 18px;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
	  transition: 300ms;
	  transform: scale(0.8);
    }
	.wealthTeacherContainer .swiper-slide-active,.wealthTeacherContainer .swiper-slide-duplicate-active{
      transform: scale(1);
	}
    .card_left{
        width: 5.333333rem;
        height: 4.586667rem;
        z-index: 1000;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 10px;
    }
    .card_right {
        width: 55.8%;
        height: 4.586667rem;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1000;
    }
    .card_name{
        position: absolute;
        top: 20%;
        left: 54%;
        color: #3B3B3B;
        z-index: 1000;
        font-weight: 600;
        font-size: .4rem;
    }
    .card_num{
        position: absolute;
        top: 23%;
        right: 2%;
        color: #707070;
        z-index: 1000;
        font-size: .266667rem;
    }
    .card_content{
        position: absolute;
        top: 40%;
        left: 53%;
        color: #696969;
        z-index: 1000;
        font-size: .266667rem;
        width: 2.9rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
    }
    .card_des{
        position: absolute;
        bottom: 2%;
        left: 48%;
        color: #9D6060;
        z-index: 1000;
        font-size: .266667rem;
    }
    .card_time{
       position: absolute;
        bottom: 2%;
        right: 2%;
        color: #ACACAC;
        z-index: 1000;
        font-size: .266667rem; 
    }
    .contactUs{
        padding-top: .506667rem;
    }
    .contactUs p{
        font-size: .32rem;
        color: #000;
        line-height: .533333rem;
        text-align: left;
        padding-left: .4rem;
    }
    .contacTel{
        padding-top: .48rem;
    }
</style>


