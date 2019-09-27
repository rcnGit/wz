<template>
    <div class="largeArea">
        <div id='w_CallApp' v-show="CallApp">
            <div class="tip">点击右上角按钮，然后在弹出的菜单中，点击在浏览中打开，即可安装。</div>
            <img class="guide" alt="" src="./img/guide.png">
        </div>
        <div class='noData' v-if='isShowPage' style="padding-top:5.2rem;">
            <img src='./img/weihu@2x.png'/>
            <p class='noData_p1'>数据正在维护中......</p>
        </div>
        <div v-else>
        <div class="wCard" v-show="wCardIf">
            <!-- <span class="wName">{{userName}}</span><span class="wDt">{{userId}}</span><img src="./img/towDetail.png" class="towDetail"  @click="toCard"/> -->
            <div class="cardPackUp">
                <div class="packUpLeft">
                    <img class="packAvatr" :src="photo" v-if="photo">
                    <img src="./img/header_default.png" v-else  class="packAvatr">
                    <span class="packName">{{userName}}</span>
                </div>
                <div class="packRight">
                    <img class="cardWebIcon" src="./img/cardWebIcon.png" @click="toCard">
                    <a class="phoneIcon" :href="'tel:' + mobile">
                        <img src="./img/phoneIcon.png">
                    </a>
                </div>
            </div>
        </div><!--wCard--><!---->
       <!-- <div class="cover_ma" v-show="cover_maIf" @click="closeCoverMa">
           <div class="maBox">
               <img src="./img/lin/wx@2x.png"/>
               <p>微信搜索“大唐财富服务号”</p>
           </div>
       </div> -->
       <mt-popup v-model="popupVisible" position="center" pop-transition="popup-fade" :closeOnClickModal='clickfalse'>         
            <div class="maBox">
                <img src="./img/lin/wx@2x.png"/>
                <p>微信搜索“大唐财富服务号”</p>
            </div>
        </mt-popup>
        <div class="areaTopBanner" style="min-height: 16.4rem;">
            <img :src="imageURL" class="topareaBanner" v-if="showBanner"/> 
            <img src="./img/areaBg.png" class="topareaBanner" v-else/>
            <div style="position:absolute;top:.6rem;width: 100%;">
            <img src="./img/areaLogo.png" class="areaLogo"/>
            <div class="areaNme" v-html="areaName"></div>
            <div class="areaIntr line5" v-html="areaSynopsis"></div>
            <div class="areaMapBox" v-if='areaId=="d989ba87b64f439dab55797ff9e56e20"'>
                <img src="./img/map.png" class="map"/>
                <div class="location locationZ">
                    <p class="loc_tit">私人银行服务在身边</p>
                    <!-- 浙江大区 -->
                    <div class="locOne locOneZ1"  @click="tolocation($event,'Z1','杭州')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="true"/><img src="./img/location.png" class="locImg" v-show="false"/>杭州体验中心</div>
                    <div class="locOne locOneZ2"  @click="tolocation($event,'Z2','湖州')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>湖州一部体验中心</div>
                    <div class="locOne locOneZ3"  @click="tolocation($event,'Z3','宁波')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>宁波体验中心</div>
                    <div class="locOne locOneZ4"  @click="tolocation($event,'Z4','温州')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>温州体验中心</div>
                    <div class="locOne locOneZ5"  @click="tolocation($event,'Z5','义乌')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>义乌体验中心</div>
                    <div class="locOne locOneZ6"  @click="tolocation($event,'Z6','慈溪')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>慈溪体验中心</div>
                    <div class="locOne locOneZ7"  @click="tolocation($event,'Z7','富阳')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>富阳体验中心</div>
                </div>
                 <div class="expCenter">
                    <!-- <div class="expOne">杭州一部体验中心</div><div class="expOne">杭州一部体验中心</div><div class="expOne">杭州一部体验中心</div> -->
                    <div class="expOne" v-for="item in centerList" @click="jumpExp(item.groupId)">{{item.centerName}}</div>
                </div>
             </div> <!-- -->
             <div class="areaMapBox" v-if='areaId=="708407bb88be4da89e5e59bdd4cc3c85"'>
                <img src="./img/mapX.png" class="map"/>
                <div class="location locationZ">
                    <p class="loc_tit">私人银行服务在身边</p>
                    <!-- 西南大区 -->
                    <div class="locOne locOneX1"  @click="tolocation($event,'X1','成都')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="true"/><img src="./img/location.png" class="locImg" v-show="false"/>成都体验中心</div>
                    <div class="locOne locOneX2"  @click="tolocation($event,'X2','贵阳')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>贵阳体验中心</div>
                    <div class="locOne locOneX3"  @click="tolocation($event,'X3','昆明')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>昆明体验中心</div>
                    <div class="locOne locOneX4"  @click="tolocation($event,'X4','南宁')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>南宁体验中心</div>
                    <div class="locOne locOneX5"  @click="tolocation($event,'X5','玉溪')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>玉溪体验中心</div>
                    <div class="locOne locOneX6"  @click="tolocation($event,'X6','重庆')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>重庆体验中心</div>
                </div>
                 <div class="expCenter">
                    <!-- <div class="expOne">杭州一部体验中心</div><div class="expOne">杭州一部体验中心</div><div class="expOne">杭州一部体验中心</div> -->
                    <div class="expOne" v-for="item in centerList" @click="jumpExp(item.groupId)">{{item.centerName}}</div>
                </div>
             </div> <!-- -->
            <div class="areaMapBox" v-if='areaId=="2e786cbcd4554872ab06686f72a98611"'>
                <img src="./img/mapS.png" class="map"/>
                <div class="location locationZ">
                    <p class="loc_tit">私人银行服务在身边</p>
                    <!-- 私行大区 -->
                    <div class="locOne locOnes1"  @click="tolocation($event,'s1','北京')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="true"/><img src="./img/location.png" class="locImg" v-show="false"/>北京体验中心</div>
                    <div class="locOne locOnes2"  @click="tolocation($event,'s2','温州')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>温州体验中心</div>
                    <div class="locOne locOnes3"  @click="tolocation($event,'s3','兰州')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>兰州体验中心</div>
                    <div class="locOne locOnes4"  @click="tolocation($event,'s4','南京')"><img src="./img/locationChoose.png" class="locImg locImgChoose" v-show="false"/><img src="./img/location.png" class="locImg" v-show="true"/>南京体验中心</div>
                </div>
                 <div class="expCenter">
                    <!-- <div class="expOne">杭州一部体验中心</div><div class="expOne">杭州一部体验中心</div><div class="expOne">杭州一部体验中心</div> -->
                    <div class="expOne" v-for="item in centerList" @click="jumpExp(item.groupId)">{{item.centerName}}</div>
                </div>
             </div> <!-- -->
           
       </div>
        
            
            
        </div><!--areaTopBanner-->
        <div class="pl26 pr26" style="margin-top:0.1rem;" v-show="showbannerList">
                <div class="areaBannerBoX">
                        <mt-swipe :auto="5000">
                            <!-- <mt-swipe-item><img src="./img/lin/areaBanner.png" class="areaBanner"/></mt-swipe-item>
                            <mt-swipe-item><img src="./img/lin/areaBanner.png" class="areaBanner"/></mt-swipe-item>
                            <mt-swipe-item><img src="./img/lin/areaBanner.png" class="areaBanner"/></mt-swipe-item> -->
                            <mt-swipe-item v-for="(item,index) in bannerList" :key="item.bannerId">
                                <a :href='item.urlBring' @click="czname(item.bannerName)"><img :src="item.imageUrl" class="areaBanner"/></a>
                            </mt-swipe-item>
                        </mt-swipe>
                </div>
            </div>
            <div class="space"></div>
        <div class="activeBox pl26 pr26" v-show='activeShow' style="padding-top: .53333rem;">
            <div class="areaTitle"><img src="./img/areaTitleBg.png" class="areaTitleBg"/><span class="titsp">尊享活动</span><img src="./img/more.png" class="areaMore" v-if="activeMore" @click="openActiveList()"/></div>
            <div class="activeOne" v-for="(item,index) in actList" v-if='index<=1' @click="openActiveDetail(item.oaActId,item.actName)">
                <img :src="item.bulletinPicture" class="activeImg"/>
                <div class="activeDetail" :oaActId="item.oaActId">
                    <div class="tit"  v-html="item.actName"></div>
                    <div class="time">活动时间：<span>{{subtext(item.beginTime,10)}}至{{subtext(item.endTime,10)}}</span></div>
                    <div class="address">活动地点：<span>{{item.location}}</span></div>
                </div>
                 <div style="clear:both;"></div>
            </div><!--activeOne-->
        </div><!--activeBox-->
        <div class="space" v-show='activeShow'></div>
        <div class="wealth pl26 pr26">
            <div class="areaTitle"><img src="./img/areaTitleBg.png" class="areaTitleBg"/><span class="titsp">尊享财富</span></div>
            <div class="wealthTop"><span>立足高端客户</span><span class="shuline">|</span><span>全市场精挑细选</span><span class="shuline">|</span><span>综合金融服务平台</span></div>
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
            <div class="wealth_p">大唐财富体系下的业务范围涵盖现金管理、债券投资、股权投资、家族信托等投资项目，多方面满足高净值客户的投资需求。</div>
        </div><!--wealth-->
        <div class="space"></div>
        <div class="knowUs pl26 pr26">
            <div class="areaTitle"><img src="./img/areaTitleBg.png" class="areaTitleBg"/><span class="titsp">了解大唐</span></div>
            <div class="knowUsMain">
                <div class="knowUsOne" v-for="(item,index) in PlatFormInfoList" v-if="PlatFormInfoList.length<4" @click="open(item.clickUrl)">
                    <img :src='item.iconUrl' class="knowUsImg"/>
                    <p class="p1" v-html="item.name"></p>
                    <p class="p2" v-html="item.infoDescription"></p>
                </div>
                <!-- <div class="knowUsOne" @click="open('pingtai')">
                    <img src="./img/knowUs1.png" class="knowUsImg"/>
                    <p class="p1">平台简介</p>
                    <p class="p2">私行服务平台</p>
                </div>
                <div class="knowUsOne" @click="open('events')">
                    <img src="./img/knowUs2.png" class="knowUsImg"/>
                    <p class="p1">大事记</p>
                    <p class="p2">平台荣誉</p>
                </div>
                <div class="knowUsOne" @click="open('safety')">
                    <img src="./img/knowUs3.png" class="knowUsImg"/>
                    <p class="p1">安全保障</p>
                    <p class="p2">合规运作8年</p>
                </div> -->
                <div style="clear:both;"></div>
            </div>
        </div><!--knowUs-->
        <div class="space"></div>
        <div class="qrCodeBox pl26 pr26">
            <div class="qrCodeOne qrCodeOne1" @click="download()">
                <img src="./img/lin/app@2x.png" class="qrCode"/>
                <p class="qrCodeText">下载大唐财富APP</p>
            </div>
            <div class="qrCodeOne" @click="showMa">
                <img src="./img/lin/wx@2x.png" class="qrCode"/>
                <p class="qrCodeText">关注微信服务号</p>
            </div>
            <div style="clear:both;"></div>
        </div><!--qrCodeBox-->
        </div>
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
            CallApp:false,
            isShowPage:false,
            showBanner:true,
            showbannerList:false,
            popupVisible:false,
            clickfalse:true,
            wCardIf:'',//是否显示财富师名片
            userId: '',
            userName:'',
            photo:'', //头像
            mobile:'', //手机号
            type:'',
            bannerList: [],
            areaName:'',//大区名称,
            areaId:'',//大区Id   708407bb88be4da89e5e59bdd4cc3c85 西南大区d989ba87b64f439dab55797ff9e56e20 浙江大区
            imageURL:'',
            actStatus:'1',//活动状态状态 0即将举办 1举办中 2已举办
            actList:'',//活动列表
            activeShow:true,//是否显示活动
            activeMore:true,//活动更多按钮
            length:'',
            length2:'',
            length3:'',
            client:'',//终端
            areaSynopsis:'',//大区概述,
            cover_maIf:false,//放大的服务号二维码是否显示
            baseImg:'./img/areaBg.png',
            centerList:'',
            shareflag:'',
            showitem1:false,
            PlatFormInfoList:[],
            centerListZ1:[{'centerName':'直属体验中心','groupId':'175390b5ebe94ba899451f4b12041b29'},{'centerName':'杭州一部体验中心','groupId':'5533b21cc352414fbec7d012f74f243a'},{'centerName':'杭州二部体验中心','groupId':'20f6e8a1d2d6444fb3a2c9079f16b3bc'}],
            centerListZ2:[{'centerName':'湖州一部体验中心','groupId':'20c5823bcbc641b089d7ff8ff60667dc'}],
            centerListZ3:[{'centerName':'宁波市区体验中心','groupId':'d10a21a0cd80457aa07f424fe0ac1b00'},{'centerName':'余姚体验中心','groupId':'0bcb5dc352cd4401b892f0a7c540a198'}],
            centerListZ4:[{'centerName':' 温州一部体验中心','groupId':'07336b73be7e48f09a524ba996778deb'},{'centerName':' 温州二部体验中心','groupId':'1e4187451e294b1a90918ae8855845fe'}],
            centerListZ5:[{'centerName':'义乌体验中心','groupId':'4627cfdd362c45b8a090fd76c9ad977b'}],
            centerListZ6:[{'centerName':'慈溪体验中心','groupId':'21abe5a8e3c44641ac297c5c3d67326b'}],
            centerListZ7:[{'centerName':'富阳体验中心','groupId':'ede9999beccd40208a06049271653e0c'}],
            centerListX1:[{'centerName':'成都一部体验中心','groupId':'f04f44225ff444dca52bc1887b58caf0'},{'centerName':'成都二部体验中心','groupId':'30e096cd5b2944ffa49e42d802d7450f'},{'centerName':'成都三部体验中心','groupId':'7f3105fea9344409aadea1958eb86125'}],
            centerListX2:[{'centerName':'贵阳体验中心','groupId':'8997653549cb4b899cacf143c3d635df'}],
            centerListX3:[{'centerName':' 昆明一部体验中心','groupId':'e19015e0f5fb4d05933ae7b2f1196e18'},{'centerName':'昆明二部体验中心','groupId':'24a781f515734589be8698cd16b63d70'}],
            centerListX4:[{'centerName':' 南宁体验中心','groupId':'8468cc994d3b4fe889b24b8db259ca48'}],
            centerListX5:[{'centerName':'玉溪体验中心','groupId':'01e678abe8b04ea0b7b25fa8123fe314'}],
            centerListX6:[{'centerName':'重庆一部体验中心','groupId':'38eb04b2a4b843459876ac45b5f720ca'},{'centerName':'重庆二部体验中心','groupId':'57c3b8964cea49b8ba62e14754770e64'}],
            centerListS1:[{'centerName':'私行第一体验中心','groupId':'8026d2d41c5d4c90a703bd5b58a4ac7e'},{'centerName':'私行第二体验中心','groupId':'0cf3dc41531a4ab0bfa07b59c66a6b37'},{'centerName':'私行第五体验中心','groupId':'b0219c64227b4bcc8ac3ee5507dc18c4'},{'centerName':'私行第七体验中心','groupId':'c8cd1b66f57742bfa752a9016162730f'},{'centerName':'私行第八体验中心','groupId':'9bbd01b440c644be9f05e191fe431756'},{'centerName':'私行第九体验中心','groupId':'c3de10b461ea4303b72a1468fc173d31'}],
            centerListS2:[{'centerName':'私行第六体验中心','groupId':'446830e0762c463e86bc16af8276802c'}],
            centerListS3:[{'centerName':' 私行第四体验中心','groupId':'57a985dc14db4854a9e89034a8e7a04d'}],
            centerListS4:[{'centerName':' 私行第三体验中心','groupId':'07e4854378674ac7b99dd57c55817d15'}],
       }
    },
    methods:{
        toCard(){
            if(!this.$route.query.shareUserId == false){
                var userid = this.$route.query.shareUserId
            }else{
                var userid = this.userId
            }
            var ua = navigator.userAgent.toLowerCase();
            var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;  　　//ios终端
            var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
            if ((/micromessenger/i).test(ua)) {//isWeixinBrowser()//判断是不是微信 
                window.location.href=this.tgHost+'?userId='+userid+'&channel=5&shareflag=1'
                return
            }else{
                window.location.href=this.tgHost+'?userId='+userid+'&channel=5'
            }
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
        subtext:function(t){
            if(!t==false){
                return t.substr(0,10)
            }else{
                return '';
            }

        },
        open:function(name){
            if(!name == false){
                window.location.href=name
            }
            /*
             this.$router.push({
                path:'/'+name,
                name:name,
                query:{
                    Name: encodeURIComponent(this.areaName)
                    //comefrom:this.param.comefrom,//是否糖罐进入
                }
            })*/
        },
        closeCoverMa:function(){
            this.cover_maIf=false;//隐藏放大的二维码；
        },
        showMa:function(){
            this.popupVisible=true
            //this.cover_maIf=true;//显示放大的二维码；
            _czc.push(['_trackEvent', this.areaName+'服务号二维码' ,'H5AreaWXClick']);//大区服务号二维码点击量
        },
        download:function(){//下载大唐财富师App
            if(!this.shareflag == false){
            var ua = navigator.userAgent.toLowerCase();
            var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;  　　//ios终端
            var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
            if ((/micromessenger/i).test(ua)) {//isWeixinBrowser()//判断是不是微信 
                this.CallApp=true
                window.scrollTo(0,0);
                return
            }else{
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
                        }, 500)
                }else if(android){
                    window.location='tangyuanbaodatang://platformapi/startapp?param='
                    var clickedAt = +new Date;  
                        setTimeout(function(){
                            !window.document.webkitHidden && setTimeout(function(){ 
                                if (+new Date - clickedAt < 5000){  
                                    window.location = 'https://interface.tdyhfund.com/launcher/download.html?channel=app&name=dtcf';  
                                }  
                            }, 800);       
                        }, 800)
                    }
            }
            _czc.push(['_trackEvent', this.areaName+'APP二维码' ,'H5AreaAPPClick']);//大区APP二维码点击量
            }
        },
        openActiveDetail:function(id,n){
            var actName=encodeURIComponent(n);
            var ua = navigator.userAgent.toLowerCase();
            var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;  　　//ios终端
            var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
            if ((/micromessenger/i).test(ua)) {//isWeixinBrowser()//判断是不是微信 
                 window.location.href=this.Host+'weixin-h5/index.html#/activeDetail?actId='+id+'&actName='+actName;
                return
            }else{
                //window.location.href=this.Host+'weixin-h5/index.html#/activeDetail?actId='+id+'&actName='+actName+'&comefrom=tangguan';
                //return;
                var sendstr= '{"title":"活动详情","activeId":"'+id+'"}'; 				
               // alert(sendstr)
                if(!this.shareflag == false){
                    window.location.href=this.Host+'weixin-h5/index.html#/activeDetail?actId='+id+'&actName='+actName;
                    return
                }else{
                    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                        //ios
                        window.webkit.messageHandlers.AppModel.postMessage({body: 'objc:///jumpActive:'+sendstr});
                    } else if (/(Android)/i.test(navigator.userAgent)) {
                        //android
                        window.AndroidFunction.jumpActive(sendstr);
                    }
                }
            }
            
        },
        openActiveList:function(){
            var ua = navigator.userAgent.toLowerCase();
            var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;  　　//ios终端
            var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
            if ((/micromessenger/i).test(ua)) {//isWeixinBrowser()//判断是不是微信 
                window.location.href=this.Host+'weixin-h5/index.html#/active?areaId='+this.areaId+'&userId='+this.userId;
                return
            }else{
                if(!this.shareflag == false){
                    window.location.href=this.Host+'weixin-h5/index.html#/active?areaId='+this.areaId+'&userId='+this.userId;
                    return
                }else{
                    window.location.href=this.Host+'weixin-h5/index.html#/active?areaId='+this.areaId+'&comefrom=tangchao&Name='+encodeURIComponent(this.areaName)+'&userId='+this.userId;
                    return;
                }
                
            }
            _czc.push(['_trackEvent', this.areaName+'活动' ,'H5AreaEventsClick']);//大区活动更多点击量
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
                        that.showbannerList=true
                        that.bannerList=data.bannerList;
                    }else{
                        that.showbannerList=false
                    }
                }else{
                    that.isShowPage=true
                }
            })
        },
        getAreaInfo:function(){
            let that = this;
            Indicator.open();
            var param=Base64.encode('{"areaId":"'+that.areaId+'","userId":"'+that.userId+'"}');//that.user.userId
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
                    if(!data.imageURL == false){
                        that.showBanner=true
                        that.imageURL=data.imageURL
                    }else{
                        that.showBanner=false
                    }
                    that.areaSynopsis=data.areaSynopsis//大区概述,
                    // that.centerList=data.centerList
                    document.title ='大唐财富 · '+ that.areaName;
                    that.GasyncSDKConifg(that.areaName+'微站','私人银行服务的领航者')
                    _czc.push(['_trackEvent', '大区首页' ,'H5AreaHomepage','all']);//大区首页
                    _czc.push(['_trackEvent', that.areaName+'大区首页' ,'H5AreaHomepage',that.areaName]);//大区首页
                }else{
                    that.isShowPage=true
                }
            })
        },
        getuserName:function(){
            if(!this.$route.query.shareUserId == false){
                var userid = this.$route.query.shareUserId
            }else{
                var userid = this.userId
            }
            let that = this;
            Indicator.open();
            var param=Base64.encode('{"areaId":"'+that.areaId+'","userId":"'+userid+'"}');//that.user.userId
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
                    that.photo=data.photo;   //头像
                    that.userName= data.name;   //名称
                    that.mobile = data.mobile;  //手机号
                }
            })
        },
        getActive:function(id){//获取活动
            let that = this;
            Indicator.open();
            var param={"pageNo":"1","actStatus":that.actStatus,"officeId":that.$route.query.areaId}
            axios({
                method:'get',
                url:'/wxservice/wxexternal?opName=getactiveinfo',//获取活动列表
                params:{
                    param:param,
                }
            })
            .then(function(res) {//成功之后
                Indicator.close();
                console.log(res.data)
                var retCode=res.data.retCode
                var itemList=res.data.itemList;
                if(retCode == 0){
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
                        if(itemList.length!=0 && that.actStatus==1){
                            that.showitem1=true
                        }
                    // that.activeMore=false;//不显示更多活动按钮
                        if(that.actStatus==1){//状态 0即将举办 1举办中 2已举办
                            that.length=itemList.length
                            that.actStatus=0;
                            that.getActive('1');
                            that.actList=itemList;
                            return;
                        }else if(that.actStatus==0){
                            that.length2=itemList.length
                            if(that.length2+that.length<=2){
                                that.actStatus=2;
                                if(that.length2==0){
                                    that.getActive('1');
                                }
                                if(that.showitem1 == false){
                                    that.actList=itemList;
                                }
                                return;
                            }
                        }else{
                            that.length3=itemList.length
                            if(that.length2+that.length+that.length3<=2){
                                that.activeMore=false;//不显示更多活动按钮
                            // return;
                            }
                            that.actList=itemList;
                        }
                    }else{
                        that.activeMore=true;//显示更多活动按钮
                        if(id != '1'){
                            that.actList=itemList;
                        }
                    }
                }
            })
        },
        getPlatFormInfoList:function(){//了解大唐
            let that = this;
            var param=Base64.encode('{"infoType":"1"}');
            axios({
                method:'get',
                url:'/olmgweb/InfoApiController/getPlatFormInfoList',//平台资料管理
                params:{
                    param:param,
                    osFlag:'3'
                }
            })
            .then(function(res) {//成功之后
                var data=Base64.decode(res.data);
                data=jQuery.parseJSON(data);
                console.log(data)
                var retCode=data.retCode;
                var retMsg=data.retMsg;
                if(retCode == 0){
                    that.PlatFormInfoList=data.itemList;
                }else{
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
                    userId:this.userId,
                    userName:this.$route.query.userName,
                    shareflag:this.shareflag,
                    shareUserId:this.$route.query.shareUserId,
                    showCard:this.$route.query.showCard,
                    shareId:this.$route.query.shareId,
                }
            })
        },
        ifShare:function(){
            var ua = navigator.userAgent.toLowerCase();
            //android终端
            var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;  　　//ios终端
            var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
            if ((/micromessenger/i).test(ua)) {//isWeixinBrowser()//判断是不是微信 
                if(this.$route.query.showCard != 0){
                    if(!this.userId == false){
                        this.wCardIf=true;//显示分享的财富师card;
                    }
                }
                //this.userName=decodeURIComponent(this.$route.query.userName);
                return
            }else{
                if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                    //ios
                    this.client = 'IOS'
                    if(!this.shareflag == false){ 
                        this.wCardIf=true;//显示分享的财富师card;
                    }else{
                        this.Share('IOS')
                    }
                } else if (/(Android)/i.test(navigator.userAgent)) {
                    //android
                    this.client == 'Android'
                    if(!this.shareflag == false){ 
                        this.wCardIf=true;//显示分享的财富师card;
                    }else{
                        this.Share('Android')
                    }
                }
            }
        },
        Share:function(cli) {
            var iconStr='[{"name":"分享","icon":"1","type":"html","module":"html_share","subMenu":""}]';	//tc
            // pass("menuMessage",iconStr);//tc
            if(cli == 'IOS'){
                window.webkit.messageHandlers.AppModel.postMessage({body: 'objc:///menuMessage:'+iconStr});
            }else{
                window.AndroidFunction.menuMessage(iconStr);
            }
        },
        tolocation:function(e,z,c){
            _czc.push(['_trackEvent', this.areaName+'地图','H5AreaMapsClick',c]);//大区地图点击量
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
            }else if(z=='Z6'){
                this.centerList=this.centerListZ6;
            }else if(z=='Z7'){
                this.centerList=this.centerListZ7;
            }else if(z=='X1'){//西南大区

                this.centerList=this.centerListX1;
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
            }else if(z=='s1'){//私行大区
            
                this.centerList=this.centerListS1;
            }else if(z=='s2'){
                this.centerList=this.centerListS2;
            }else if(z=='s3'){
                this.centerList=this.centerListS3;
            }else if(z=='s4'){
                this.centerList=this.centerListS4;
            }
           
        },
        czname(name){
            _czc.push(['_trackEvent', this.areaName+'banner','H5AreaBannerClick',name]);//大区banner点击量
        }
    },
    components:{Swipe, SwipeItem,Swiper},
    mounted:function(){
        window['moduleNameClick'] = (data) => {
        if(data == 'html_share'){
            let ua = navigator.userAgent.toLowerCase();
            //android终端
            let isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;  　　//ios终端
            let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
            if ((/micromessenger/i).test(ua)) {//isWeixinBrowser()//判断是不是微信 
                return
            }else{
                if(!this.$route.query.shareId ==false){
                    var urlstr = location.href.split('?')[0]+'?userId='+this.$route.query.shareId+'&areaId='+this.$route.query.areaId+'&userName='+this.$route.query.userName+'&shareflag=1';
                }else{
                    var urlstr = window.location.href+'&shareflag=1';
                }
                var title = this.areaName+'微站'
                var sendstr= '{"title":"'+title+'","content":"私人银行服务的领航者","urlstr":"'+urlstr+'"}'; 				
               // alert(sendstr)
                if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                    //ios
                    window.webkit.messageHandlers.AppModel.postMessage({body: 'objc:///shareMessage:'+sendstr});
                } else if (/(Android)/i.test(navigator.userAgent)) {
                    //android
                    window.AndroidFunction.shareMessage(sendstr);
                }
            }
        }
       }
        this.initS('wcontainer',2.5);
        
    },
    created:function(){
        this.shareflag=this.$route.query.shareflag;
        this.userId = this.$route.query.userId;
        this.areaId = this.$route.query.areaId;//大区Id
        if(this.areaId=='d989ba87b64f439dab55797ff9e56e20'){
            this.centerList=this.centerListZ1;
        }else if(this.areaId=='708407bb88be4da89e5e59bdd4cc3c85'){
            this.centerList=this.centerListX1;
        }else if(this.areaId=='2e786cbcd4554872ab06686f72a98611'){
            this.centerList=this.centerListS1;
        }
        this.ifShare();//判断是不是分享到微信
        //this.client=this.$route.query.client;
        this.getBanner();
        this.getAreaInfo();
        this.getuserName();
        this.getActive()//获取活动列表；
        this.getPlatFormInfoList()//了解大唐
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
        top: 10%;
        left: 36%;
    }
    .locationZ .locOneZ3{
        top: 29%;
        left: 64%;
    }
    .locationZ .locOneZ4{
        top: 61%;
        left: 41%;
    }
    .locationZ .locOneZ5{
        top: 50%;
        left: 46%;
    }
    .locationZ .locOneZ6{
        top: 23%;
        left: 59%;
    }
      .locationZ .locOneZ7{
        top: 33%;
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
      .locationZ .locOnes1{
        top: 14%;
        left: 55%;
    }
    .locationZ .locOnes2{
        top: 64%;
        left: 65%;
    }
    .locationZ .locOnes3{
        top: 31%;
        left: 14%;
    }
    .locationZ .locOnes4{
        top: 47%;
        left: 64%;
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
    .loc_tit{
        width: 4.053333rem;
        height: .773333rem;
        background:rgba(255,255,255,1);
        opacity:0.71;
        border-radius:0 0 .16rem .16rem;
        margin: .133333rem auto;
        line-height: .773333rem;
        color: #2C567C;
        font-size: .373333rem;
    }
</style>


