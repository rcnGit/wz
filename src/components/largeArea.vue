<template>
    <div class="largeArea">
        <div class="wCard" v-show="wCardIf">
            <span class="wName">{{userName}}</span><span class="wDt">{{userId}}</span><img src="./img/towDetail.png" class="towDetail"/>
        </div><!--wCard--><!---->
       <div class="cover_ma" v-show="cover_maIf" @click="closeCoverMa">
           <div class="maBox">
               <img src="./img/lin/ma.png"/>
               <p>微信搜索“大唐财富服务号”</p>
           </div>
       </div>
        <div class="areaTopBanner">
             <!-- <img :src="imageURL" class="areaBanner"/> -->
            <img src="./img/areaBg.png" class="topBanner"/>
            <div style="position:absolute;top:.96rem;">
            <img src="./img/areaLogo.png" class="areaLogo"/>
            <div class="areaNme" v-html="areaName"></div>
            <div class="areaIntr line5" v-html="areaSynopsis"></div>
            <div class="areaMapBox" v-if='areaId=="d989ba87b64f439dab55797ff9e56e20"'>
                <img src="./img/map.png" class="map"/>
                <div class="location locationZ">
                    <!-- 浙江大区 -->
                    <div class="locOne locOneZ1"  @click="tolocation($event,'Z1')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="true"/><img src="./img/location.png" class="locImg" v-show="false"/>杭州体验中心</div>
                    <div class="locOne locOneZ2"  @click="tolocation($event,'Z2')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>金华体验中心</div>
                    <div class="locOne locOneZ3"  @click="tolocation($event,'Z3')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>宁波体验中心</div>
                    <div class="locOne locOneZ4"  @click="tolocation($event,'Z4')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>温州体验中心</div>
                    <div class="locOne locOneZ5"  @click="tolocation($event,'Z5')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>义乌体验中心</div>
                </div>
                 <div class="expCenter">
                    <!-- <div class="expOne">杭州一部体验中心</div><div class="expOne">杭州一部体验中心</div><div class="expOne">杭州一部体验中心</div> -->
                    <div class="expOne" v-for="item in centerList" @click="jumpExp(item.groupId)">{{item.centerName}}</div>
                </div>
             </div> <!-- -->
             <div class="areaMapBox" v-if='areaId=="708407bb88be4da89e5e59bdd4cc3c85"'>
                <img src="./img/mapX.png" class="map"/>
                <div class="location locationZ">
                    <!-- 浙江大区 -->
                    <div class="locOne locOneX1"  @click="tolocation($event,'X1')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="true"/><img src="./img/location.png" class="locImg" v-show="false"/>成都体验中心</div>
                    <div class="locOne locOneX2"  @click="tolocation($event,'X2')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>贵阳体验中心</div>
                    <div class="locOne locOneX3"  @click="tolocation($event,'X3')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>昆明体验中心</div>
                    <div class="locOne locOneX4"  @click="tolocation($event,'X4')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>南宁体验中心</div>
                    <div class="locOne locOneX5"  @click="tolocation($event,'X5')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>玉溪体验中心</div>
                    <div class="locOne locOneX6"  @click="tolocation($event,'X6')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>重庆体验中心</div>
                </div>
                 <div class="expCenter">
                    <!-- <div class="expOne">杭州一部体验中心</div><div class="expOne">杭州一部体验中心</div><div class="expOne">杭州一部体验中心</div> -->
                    <div class="expOne" v-for="item in centerList" @click="jumpExp(item.groupId)">{{item.centerName}}</div>
                </div>
             </div> <!-- -->
           
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
        <div class="activeBox pl26 pr26" v-show='activeShow'>
            <div class="areaTitle"><img src="./img/areaTitleBg.png" class="areaTitleBg"/><span class="titsp">尊享活动</span><img src="./img/more.png" class="areaMore" v-if="activeMore" @click="openActiveList()"/></div>
            <div class="activeOne" v-for="(item,index) in actList" v-if='index<=1' @click="openActiveDetail(item.oaActId,item.actName)">
                <img :src="item.bulletinPicture" class="activeImg"/>
                <div class="activeDetail" :oaActId="item.oaActId">
                    <div class="tit">{{item.actName}}</div>
                    <div class="time">活动时间：<span>{{subtext(item.beginTime,10)}}至{{subtext(item.endTime,10)}}</span></div>
                    <div class="address">活动地点：<span>{{item.location}}</span></div>
                </div>
                 <div style="clear:both;"></div>
            </div><!--activeOne-->
        </div><!--activeBox-->
        <div class="space" v-show='activeShow'></div>
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
                <div class="knowUsOne" @click="open('pingtai')">
                    <img src="./img/knowUs1.png" class="knowUsImg"/>
                    <p class="p1">平台简介</p>
                    <p class="p2">专业财富管理公司</p>
                </div>
                <div class="knowUsOne" @click="open('events')">
                    <img src="./img/knowUs2.png" class="knowUsImg"/>
                    <p class="p1">大事记</p>
                    <p class="p2">公司荣誉</p>
                </div>
                <div class="knowUsOne" @click="open('safety')">
                    <img src="./img/knowUs3.png" class="knowUsImg"/>
                    <p class="p1">安全保障</p>
                    <p class="p2">合规运作7年</p>
                </div>
                <div style="clear:both;"></div>
            </div>
        </div><!--knowUs-->
        <div class="space"></div>
        <div class="qrCodeBox pl26 pr26">
            <div class="qrCodeOne qrCodeOne1" @click="download()">
                <img src="./img/lin/ma.png" class="qrCode"/>
                <p class="qrCodeText">下载大唐财富APP</p>
            </div>
            <div class="qrCodeOne" @click="showMa">
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
            wCardIf:'',//是否显示财富师名片
            userId: '',
            userName:'',
            type:'',
            bannerList: [],
            areaName:'',//大区名称,
            areaId:'',//大区Id   708407bb88be4da89e5e59bdd4cc3c85 西南大区d989ba87b64f439dab55797ff9e56e20 浙江大区
            imageURL:'',
            actStatus:'1',//活动状态状态 0即将举办 1举办中 2已举办
            actList:'',//活动列表
            activeShow:true,//是否显示活动
            activeMore:'true',//活动更多按钮
            client:'',//终端
            areaSynopsis:'',//大区概述,
            cover_maIf:false,//放大的服务号二维码是否显示
            baseImg:'./img/areaBg.png',
            centerList:'',
            centerListZ1:[{'centerName':'直属体验中心','groupId':'175390b5ebe94ba899451f4b12041b29'},{'centerName':'杭州一部体验中心','groupId':'5533b21cc352414fbec7d012f74f243a'},{'centerName':'杭州二部体验中心','groupId':'20f6e8a1d2d6444fb3a2c9079f16b3bc'}],
            centerListZ2:[{'centerName':'金华体验中心','groupId':'f44a5f67030943038e41ae04ffe0f81d'}],
            centerListZ3:[{'centerName':'宁波三部体验中心','groupId':'d10a21a0cd80457aa07f424fe0ac1b00'},{'centerName':'宁波四部体验中心','groupId':'0bcb5dc352cd4401b892f0a7c540a198'}],
            centerListZ4:[{'centerName':' 温州一部体验中心','groupId':'07336b73be7e48f09a524ba996778deb'},{'centerName':' 温州二部体验中心','groupId':'1e4187451e294b1a90918ae8855845fe'}],
            centerListZ5:[{'centerName':'义乌体验中心','groupId':'4627cfdd362c45b8a090fd76c9ad977b'}],
            centerListX1:[{'centerName':'成都一部体验中心','groupId':'f04f44225ff444dca52bc1887b58caf0'},{'centerName':'成都二部体验中心','groupId':'30e096cd5b2944ffa49e42d802d7450f'},{'centerName':'成都三部体验中心','groupId':'7f3105fea9344409aadea1958eb86125'}],
            centerListX2:[{'centerName':'贵阳体验中心','groupId':'8997653549cb4b899cacf143c3d635df'}],
            centerListX3:[{'centerName':' 昆明一部体验中心','groupId':'e19015e0f5fb4d05933ae7b2f1196e18'},{'centerName':'昆明二部体验中心','groupId':'24a781f515734589be8698cd16b63d70'}],
            centerListX4:[{'centerName':' 南宁体验中心','groupId':'8468cc994d3b4fe889b24b8db259ca48'}],
            centerListX5:[{'centerName':'玉溪体验中心','groupId':'01e678abe8b04ea0b7b25fa8123fe314'}],
            centerListX6:[{'centerName':'重庆一部体验中心','groupId':'38eb04b2a4b843459876ac45b5f720ca'},{'centerName':'重庆二部体验中心','groupId':'57c3b8964cea49b8ba62e14754770e64'}],
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
        subtext:function(t){
            if(!t==false){
                return t.substr(0,10)
            }else{
                return '';
            }

        },
        open:function(name){
             this.$router.push({
                path:'/'+name,
                name:name,
                query:{
                    //comefrom:this.param.comefrom,//是否糖罐进入
                }
            })
        },
        closeCoverMa:function(){
            this.cover_maIf=false;//隐藏放大的二维码；
        },
        showMa:function(){
            this.cover_maIf=true;//显示放大的二维码；
        },
        download:function(){//下载大唐财富师App
            var browser = {
	            versions: function() {
	                var u = navigator.userAgent,
	                    app = navigator.appVersion;
	                return { //移动终端浏览器版本信息   
	                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
	                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
	                    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器  
	                };
	            }(),      
	            language: (navigator.browserLanguage || navigator.language).toLowerCase()
	        }
            var android = browser.versions.android;
            var iOS = browser.versions.ios;

            /*唤起APP的方法*/
            if(iOS){ 
                    window.location='tangyuanbaodatang://platformapi/startapp?param='
                    var clickedAt = +new Date;  
                    setTimeout(function(){
                        !window.document.webkitHidden && setTimeout(function(){ 
                            if (+new Date - clickedAt < 2000){  
                                window.location = 'https://interface.tdyhfund.com/launcher/download.html?channel=app&name=dtcf';  
                            }  
                        }, 500);       
                    }, 2500)
            }else if(android){
                window.location='tangyuanbaodatang://platformapi/startapp?param='+str
                var clickedAt = +new Date;  
                    setTimeout(function(){
                        !window.document.webkitHidden && setTimeout(function(){ 
                            if (+new Date - clickedAt < 2000){  
                                window.location = 'https://interface.tdyhfund.com/launcher/download.html?channel=app&name=dtcf';  
                            }  
                        }, 500);       
                    }, 2500)
                }
    
    
        },
        openActiveDetail:function(id,n){
            var actName=encodeURIComponent(n);
            if(this.client == 'IOS' || this.client == 'Android'|| this.client == '0'){//大唐财富师APP
                window.location.href=this.Host+'weixin-h5/index.html#/activeDetail?actId='+id+'&actName='+actName+'&comefrom=tangguan';
            }else{
                window.location.href=this.Host+'weixin-h5/index.html#/activeDetail?actId='+id+'&actName='+actName+'&comefrom=tangguan';
            }
        },
        openActiveList:function(){
             if(this.client == 'IOS' || this.client == 'Android'|| this.client == '0'){//大唐财富师APP
                window.location.href=this.Host+'weixin-h5/index.html#/active?areaId='+this.areaId+'&comefrom=tangguan';
            }else{
                window.location.href=this.Host+'weixin-h5/index.html#/active?areaId='+this.areaId;
            }
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
            var param=Base64.encode('{"areaId":"'+that.areaId+'"}');//that.user.userId
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
                    // that.centerList=data.centerList
                }
            })
        },
        getActive:function(){//获取活动
            let that = this;
            Indicator.open();
            var param={"pageNo":"1","actStatus":that.actStatus}//that.user.userId
            axios({
                method:'get',
                url:'https://weixin-test-interface.tdyhfund.com/wxservice/wxexternal?opName=getactiveinfo',//获取活动列表
                params:{
                    param:param,
                }
            })
            .then(function(res) {//成功之后
                Indicator.close();
                 console.log(res.data)
                var itemList=res.data.itemList;
               if(itemList.length==0){
                   if(that.actStatus==1){//状态 0即将举办 1举办中 2已举办
                       that.actStatus=0;
                       that.getActive();
                        return;
                   }else if(that.actStatus==0){
                       that.actStatus=2;
                       that.getActive();
                       return;
                   }else{
                       //隐藏该模块
                       that.activeShow=false;
                   }
               }else if(itemList.length<=2){
                that.activeMore=false;//不显示更多活动按钮
                that.actList=itemList;
               }else{
                that.activeMore=true;//显示更多活动按钮
                that.actList=itemList;
               }
                
            })
        },
        jumpExp:function(id){
            console.log(id);
            this.$router.push({
                path:'/expCenterIndex',
                name:'expCenterIndex',
                query:{
                    groupId:id,//体验中心的Id
                    areaId:this.areaId,//大区Id;
                }
            })
        },
        ifShare:function(){
            var ua = navigator.userAgent.toLowerCase();
            //android终端
            var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;  　　//ios终端
            var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
            if ((/micromessenger/i).test(ua)) {//isWeixinBrowser()//判断是不是微信 
                this.wCardIf=true;//显示分享的财富师card;
                this.userName=decodeURIComponent(this.$route.query.userName);
                return
            }
        },
        tolocation:function(e,z){
            $('.locOne').find('.locImg').show();
             $('.locOne').find('.locImgChoose').hide();
             // e.currentTarget 是你绑定事件的元素
             var obj=e.currentTarget;
             $(obj).find('.locImg').hide();
            $(obj).find('.locImgChoose').show();
            
            console.log($(this).find('.locImgChoose').length)
            if(z=='Z1'){//浙江大区
                this.centerList=this.centerListZ1;
            }else if(z=='Z2'){
                this.centerList=this.centerListZ2;
            }else if(z=='Z3'){

                this.centerList=this.centerListZ3;
                console.log(this.centerListZ3);
            }else if(z=='Z4'){
                this.centerList=this.centerListZ4;
            }else if(z=='Z5'){
                this.centerList=this.centerListZ5;
            }else if(z=='X1'){//西南大区
                this.centerList=this.centerLisX1;
            }else if(z=='X2'){
                this.centerList=this.centerListX2;
            }else if(z=='X3'){

                this.centerList=this.centerListX3;
                console.log(this.centerListX3);
            }else if(z=='X4'){
                this.centerList=this.centerListX4;
            }else if(z=='X5'){
                this.centerList=this.centerListX5;
            }else if(z=='X6'){
                this.centerList=this.centerListX6;
            }
           
        }
    },
    components:{Swipe, SwipeItem,Swiper},
    mounted:function(){
        this.initS('wcontainer',2.5);
    },
    created:function(){
        this.userId = this.$route.query.userId;
        this.areaId = this.$route.query.areaId;//大区Id
        if(this.areaId=='d989ba87b64f439dab55797ff9e56e20'){
            this.centerList=this.centerListZ1;
        }else if(this.areaId=='708407bb88be4da89e5e59bdd4cc3c85'){
            this.centerList=this.centerListX1;
        }
        
        this.ifShare();//判断是不是分享到微信
        this.client=this.$route.query.client;
        this.getBanner();
        this.getAreaInfo();
        this.getActive()//获取活动列表；
    }
}
</script>

<style>
    @import 'area.css';
    .location{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        /* background:red; */
    }
    .locOne{
        position: absolute;
        font-size: .293333rem;
        color:#000;
    }
    .locationZ .locOneZ1{
        top: 26%;
        left: 33%;
    }
    .locationZ .locOneZ2{
        top: 37%;
        left: 32%;
    }
    .locationZ .locOneZ3{
        top: 29%;
        left: 64%;
    }
    .locationZ .locOneZ4{
        top: 60%;
        left: 41%;
    }
    .locationZ .locOneZ5{
        top: 44%;
        left: 39%;
    }
    .locationZ .locOneX1{
        top: 19%;
        left: 39%;
    }
    .locationZ .locOneX2{
        top: 45%;
        left: 56%;
    }
    .locationZ .locOneX3{
        top: 55%;
        left: 35%;
    }
    .locationZ .locOneX4{
        top: 65%;
        left: 63%;
    }
    .locationZ .locOneX5{
        top: 64%;
        left: 33%;
    }
    .locationZ .locOneX6{
        top: 29%;
        left: 52%;
    }
    .locationZ .locImg{
        width:.506667rem;
        vertical-align: top;
        padding-right: 0.1rem;
    }
    .cover_ma{
        width:100%;
        height:100%;
        position: fixed;
        background-color: rgba(0,0,0,0.6);
        z-index: 99;
        top:0;
        left:0;
    }
    .maBox{
        width:4rem;
        height:5rem;
        position: absolute;
        top:50%;
        left:50%;
        margin-top:-2.5rem;
        margin-left:-2rem;
    }
    .maBox p{
        font-size:.32rem;
        margin-top:.2rem;
        text-align: center;
        color:#fff;
    }
    .maBox img{
        width:100%;
    }
</style>


