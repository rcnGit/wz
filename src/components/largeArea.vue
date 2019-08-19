<template>
    <div class="largeArea">
        <div class="wCard">
            <span class="wName">张颖</span><span class="wDt">{{userId}}</span><img src="./img/towDetail.png" class="towDetail"/>
        </div><!--wCard--><!---->
       
        <div class="areaTopBanner">
             <!-- <img :src="imageURL" class="areaBanner"/> -->
            <img src="./img/areaBg.png" class="topBanner"/>
            <div style="position:absolute;top:.96rem;">
            <img src="./img/areaLogo.png" class="areaLogo"/>
            <div class="areaNme" v-html="areaName"></div>
            <div class="areaIntr line5" v-html="areaSynopsis"></div>
            <div class="areaMapBox">
                <img src="./img/map.png" class="map"/>
                 <div class="expCenter">
                    <!-- <div class="expOne">杭州一部体验中心</div><div class="expOne">杭州一部体验中心</div><div class="expOne">杭州一部体验中心</div> -->
                    <div class="expOne" v-for="item in centerList" @click="jumpExp(item.groupId)">{{item.centerName}}</div>
                </div>
            </div>
           
       </div>
        
            
            
        </div><!--areaTopBanner-->
        <div class="pl26 pr26" style="margin-top:0.1rem;">
                <div class="areaBannerBoX">
                        <mt-swipe :auto="5000">
                            <mt-swipe-item><img src="./img/lin/areaBanner.png" class="areaBanner"/></mt-swipe-item>
                            <mt-swipe-item><img src="./img/lin/areaBanner.png" class="areaBanner"/></mt-swipe-item>
                            <mt-swipe-item><img src="./img/lin/areaBanner.png" class="areaBanner"/></mt-swipe-item>
                            <!-- <mt-swipe-item v-for="item in bannerList">
                                <a :href='item.urlBring'><img :src="item.imageUrl" class="areaBanner"/></a>
                            </mt-swipe-item> -->
                        </mt-swipe>
                </div>
            </div>
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
        <div class="qrCodeBox pl26 pr26">
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
    name:"largeArea",
    data:function(){
        return{
            userId: '',
            type:'',
            bannerList: [],
            areaName:'',//大区名称,
            imageURL:'',
            areaSynopsis:'',//大区概述,
            baseImg:'./img/areaBg.png',
            centerList:[],
        }
    },
    methods:{
          initS:function(className,num){
            className='.'+className;
             new Swiper (className, {
                slidesPerView : num,
                centeredSlides : false,
                slidesOffsetAfter : 30,//距离右边边30px
                //slidesOffsetBefore : 100,//距离左边距离
                })     
        },
        getBanner:function(){//获取广告配置
            let that = this;
            Indicator.open();
            var param=Base64.encode('{"userId":"'+that.userId+'","type":"3"}');//"type": "1首页2工作台3微站大区首页4微站业务部首页"
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
        getAreaInfo:function(){
            let that = this;
            Indicator.open();
            that.areaId='35f20843e84b4aeba18e689b2591d1ed'
            var param=Base64.encode('{"userId":"'+that.userId+'","areaId":"'+that.areaId+'"}');//that.user.userId
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
                    that.areaName=data.areaName//大区名称,
                    that.imageURL=data.imageURL
                    that.areaSynopsis=data.areaSynopsis//大区概述,
                    that.centerList=data.centerList
                }
            })
        },
        jumpExp:function(id){
            console.log(id)
        }
    },
    components:{Swipe, SwipeItem,Swiper},
    mounted:function(){
        this.initS('wcontainer',2.5);
    },
    created:function(){
        this.userId = this.$route.query.userId;
        this.areaId = this.$route.query.areaId;
        this.userId='DT1603225'
        this.getBanner()
        this.getAreaInfo()
    }
}
</script>

<style>
    @import 'area.css';
</style>


