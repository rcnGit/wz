<template>
    <div class="expCenterIndex">
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
        <div class="areaTopBanner tiyanTop" style="min-height: 12rem;">
           <div class="backArea" @click="backArea" v-if='ifBackarea'>返回大区</div>
            <img :src="imageURL" class="topexpBanner" v-if="showBanner"/>
            <img src="./img/tiyanBg.png" class="topexpBanner" v-else/>
            <div style="position:absolute;top:.96rem;width: 100%;">
            <img src="./img/logo.png" class="tiyLogo"/>
            <div class="areaNme" v-html="centerName" style="padding-top: .2rem"></div>
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
                    <div class="swiper-wrapper" @click="toWealthList">
                         <div class="swiper-slide" v-for="(item,index) in userList" v-if="userList.length>1" style="box-shadow:0px 0px .16rem rgba(165,165,165,0.16);border-radius: .24rem">
                            <div class="Card" >
                                <img :src='item.photo' v-if="item.photo"  class="card_left"/>
                                <img src="./img/header_default.png" v-else  class="card_left">
                                <img src="./img/cardback.png" class="card_right" />
                                <p class="card_name">{{item.userName}}</p>
                                <p class="card_num">{{item.userId}}</p>
                                <p class="card_content" v-html="item.synopsis"></p>
                                <p class="card_des">{{item.operationContent}}</p>
                                <p class="card_time">{{timeDistance(item.operationTime)}}</p>
                            </div>
                        </div>
                        <div class="" v-for="(item,index) in userList" v-if="userList.length==1" style="box-shadow:0px 0px .16rem rgba(165,165,165,0.16);border-radius: .24rem;border-radius: 0.24rem;width: 315px;margin-right: -20px;">
                            <div class="Card" >
                                <img :src='item.photo' v-if="item.photo"  class="card_left" style="left: 20px"/>
                                <img src="./img/header_default.png" v-else  class="card_left" style="left: 20px">
                                <img src="./img/cardback.png" class="card_right" style="right: 20px"/>
                                <p class="card_name" style="left: 50%">{{item.userName}}</p>
                                <p class="card_num" style="right: 8.4%">{{item.userId}}</p>
                                <p class="card_content" v-html="item.synopsis" style="left:48%"></p>
                                <p class="card_des" style="left: 44%">{{item.operationContent}}</p>
                                <p class="card_time" style="right: 8.4%">{{timeDistance(item.operationTime)}}</p>
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
        <div class="activeBox pl26 pr26" v-show='activeShow'>
            <div class="areaTitle"><img src="./img/areaTitleBg.png" class="areaTitleBg"/><span class="titsp">尊享活动</span><img src="./img/more.png" class="areaMore" v-if="activeMore" @click="openActiveList()"/></div>
            <div class="activeOne" v-for="(item,index) in actList" v-if='index<=1' @click="openActiveDetail(item.oaActId,item.actName)">
                <img :src="item.bulletinPicture" class="activeImg"/>
                <div class="activeDetail">
                    <div class="tit" v-html="item.actName"></div>
                    <div class="time">活动时间：<span>{{subtext(item.beginTime,10)}}至{{subtext(item.endTime,10)}}</span></div>
                    <div class="address">活动地点：<span>{{item.location}}</span></div>
                </div>
                 <div style="clear:both;"></div>
            </div><!--activeOne-->
           
        </div><!--activeBox-->
        <!-- <div class="space"></div> -->
        
        <div class="pl26 pr26" style="margin-top:0.1rem;background:#F9F9F9;padding: .24rem .32rem 0;" v-show="showbannerList">
            <div class="areaBannerBoX">
                    <mt-swipe :auto="5000">
                        <!-- <mt-swipe-item><img src="./img/lin/areaBanner.png" class="areaBanner"/></mt-swipe-item>
                        <mt-swipe-item><img src="./img/lin/areaBanner.png" class="areaBanner"/></mt-swipe-item>
                        <mt-swipe-item><img src="./img/lin/areaBanner.png" class="areaBanner"/></mt-swipe-item> -->
                        <mt-swipe-item v-for="item in bannerList" :key="item.bannerId">
                            <a :href='item.urlBring' @click="czname(item.bannerName)"><img :src="item.imageUrl" class="areaBanner"/></a>
                        </mt-swipe-item>
                    </mt-swipe>
            </div>
        </div>
        <div class="space"></div>
        <div class="contactUs pl26 pr26">
            <div class="areaTitle"><img src="./img/areaTitleBg.png" class="areaTitleBg"/><span class="titsp">联系我们</span></div>
            <p class="contacTel">联系电话：{{phone}}</p>
            <p class="contacAdd">联系地址：{{city}}</p>
            <baidu-map :center="center" :zoom="zoom" @ready="getCenterInfo" style="height:221px;margin:.5333rem auto;" @touchstart="getClickInfo" :scroll-wheel-zoom='true'>
            </baidu-map>
        </div><!--knowUs-->
        <div class="space"></div>
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
                <div class="knowUsOne" @click="open('pingtai')">
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
                </div>
                <div style="clear:both;"></div>
            </div>
        </div><!--knowUs-->
        <div class="space"></div>
        <div class="qrCodeBox  pl26 pr26">
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
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Swiper from 'swiper';
import { Indicator, MessageBox, Toast } from 'mint-ui';
import axios from 'axios'
import wx from 'weixin-js-sdk';
export default {
    name:"expCenterIndex",
    data:function(){
        return{
            CallApp:false,
            isShowPage:false,
            showBanner:true,
            showbannerList:false,
            popupVisible:false,
            clickfalse:true,
            center: {lng: '', lat: ''},
            zoom: 13,
            centerName:'',
            imageURL:'',
            centerSynopsis:'',
            bannerList:[],
            userList:[],
            phone:'',
            city:'',
            areaId:'',//大区Id
            userName:'',
            ifBackarea:false,//是否显示返回大区的按钮
            wCardIf:'',//是否显示财富师名片
            userId: '',
            photo:'', //头像
            mobile:'', //手机号
            actStatus:'1',//活动状态状态 0即将举办 1举办中 2已举办
            actList:'',//活动列表
            activeShow:true,//是否显示活动
            activeMore:true,//活动更多按钮
            client:'',//终端
            cover_maIf:false,//放大的服务号二维码是否显示
            length:'',
            length2:'',
            length3:'',
            shareflag:'',
            showitem1:false,
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
        backArea:function(){
             this.$router.push({
                path:'/largeArea',
                name:'largeArea',
                query:{
                    areaId:this.areaId,//
                    userId:this.$route.query.userId,//userId;
                    shareflag:this.$route.query.shareflag,
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
            /*
            let ua = navigator.userAgent.toLowerCase();
            //android终端
            let isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;  　　//ios终端
            let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
            if ((/micromessenger/i).test(ua)) {//isWeixinBrowser()//判断是不是微信 
                return
            }else{
                var iconStr='[{"name":"分享","icon":"1","type":"html","module":"html_share","subMenu":""}]';	//tc
			   // pass("menuMessage",iconStr);//tc
                console.log(iconStr)
                if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                    //ios
                    window.webkit.messageHandlers.AppModel.postMessage({body: 'objc:///menuMessage:'+iconStr});
                } else if (/(Android)/i.test(navigator.userAgent)) {
                    //android
                    window.AndroidFunctionSetting.menuMessage(iconStr);
                }
            }*/
            var iconStr='[{"name":"分享","icon":"1","type":"html","module":"html_share","subMenu":""}]';	//tc
            // pass("menuMessage",iconStr);//tc
            if(cli == 'IOS'){
                window.webkit.messageHandlers.AppModel.postMessage({body: 'objc:///menuMessage:'+iconStr});
            }else{
                window.AndroidFunction.menuMessage(iconStr);
            }
        },
        timeDistance(value){
            //当前时间磋
            if(!value == false){
                let nowt = Math.round(new Date() / 1000)
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
       // this.getCenterInfo()
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
                '<div style=""><p style="font-weight:600;">'
                + "联系地址"
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
    //   console.log(e.point.lat)
        var city=this.city
        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;  　　//ios终端
        var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
        if ((/micromessenger/i).test(ua)) {//isWeixinBrowser()//判断是不是微信 
            const backUrl = encodeURIComponent(location.href.split('#')[0])
            axios.get('/wxservice/core/getJSSDKConfigure.mm?pageUrl='+backUrl)
                .then(function (res) {
                    // console.log(res)
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: res.data.appId, // 必填，公众号的唯一标识
                    timestamp: res.data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
                    signature: res.data.signature, // 必填，签名
                    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage','openLocation'] // 必填，需要使用的JS接口列表
                })
                wx.ready(function(res) { //通过ready接口处理成功验证 // config信息验证成功后会执行ready方法
                    wx.openLocation({
                        latitude: parseFloat(e.point.lat),//目的地latitude
                        longitude: parseFloat(e.point.lng),//目的地longitude
                        name: city,
                        address: city,
                        scale: 15,//地图缩放大小，可根据情况具体调整
                        infoUrl: '', // 在查看位置界面底部显示的超链接,可点击跳转
                        success: function (res) {
                            //   alert('成功');	        
                        },
                    });
                })
            })
            wx.error(function(res){//通过error接口处理失败验证
                // config信息验证失败会执行error函数
                console.log(res)
            });
        }else{
            if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                //ios
                
            } else if (/(Android)/i.test(navigator.userAgent)) {
                //android
                
            }
        }
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
    getCenterInfo:function({BMap, map}){
        let that = this;
        Indicator.open();
        that.groupId = that.$route.query.groupId;
        var param=Base64.encode('{"groupId":"'+that.groupId+'","userId":"'+that.userId+'"}');
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
                if(!data.areaId==false){
                    that.ifBackarea=true;//显示返回按钮；
                    that.areaId=data.areaId
                }else{
                    that.ifBackarea=false;//隐藏返回按钮；
                }
                if(data.centerList.length>0){
                    console.log(data.centerList[0].centerName)
                    that.centerName=data.centerList[0].centerName//体验中心名称
                    if(!data.centerList[0].imageURL == false){
                        that.showBanner=true
                        that.imageURL=data.centerList[0].imageURL
                    }else{
                        that.showBanner=false
                    }
                    that.centerSynopsis=data.centerList[0].centerSynopsis//体验中心概述,
                    that.phone = data.centerList[0].phone
                    that.city = data.centerList[0].address
                    document.title ='大唐财富 · '+ that.centerName
                    that.GasyncSDKConifg(that.centerName+'微站','因为胜任  所以信任')
                    _czc.push(['_trackEvent', '体验中心页' ,'H5DepartmentHomepage','all']);//体验中心页
                    _czc.push(['_trackEvent', that.centerName+'页' ,'H5DepartmentHomepage',that.centerName]);//体验中心页
                }
                that.handler({BMap, map})
                
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
        that.groupId = that.$route.query.groupId;
        var param=Base64.encode('{"groupId":"'+that.groupId+'","userId":"'+userid+'"}');
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
            }else{
                that.isShowPage=true
            }
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
                    Name: encodeURIComponent(this.centerName)
                    //comefrom:this.param.comefrom,//是否糖罐进入
                }
            })
        },
        closeCoverMa:function(){
            this.cover_maIf=false;//隐藏放大的二维码；
        },
        showMa:function(){
           // this.cover_maIf=true;//显示放大的二维码；
           this.popupVisible=true;
            _czc.push(['_trackEvent', this.centerName+'服务号二维码' ,'H5DepartmentWXClick']);//体验中心服务号二维码点击量
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
                                if (+new Date() - clickedAt < 5000){
                                    window.location = 'https://interface.tdyhfund.com/launcher/download.html?channel=app&name=dtcf';  
                                }  
                            }, 800);       
                        }, 800)
                    }
            }
            _czc.push(['_trackEvent', this.centerName+'APP二维码' ,'H5DepartmentAPPClick']);//体验中心APP二维码点击量 
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
                window.location.href=this.Host+'weixin-h5/index.html#/active?groupId='+this.$route.query.groupId;
                return
            }else{
                if(!this.shareflag == false){
                    window.location.href=this.Host+'weixin-h5/index.html#/active?groupId='+this.$route.query.groupId;
                    return
                }else{
                    window.location.href=this.Host+'weixin-h5/index.html#/active?groupId='+this.$route.query.groupId+'&comefrom=tangchao&Name='+encodeURIComponent(this.centerName);
                }
                return;
            }
            _czc.push(['_trackEvent', this.centerName+'活动' ,'H5DepartmentEventsClick']);//体验中心活动更多点击量
        },
        getActive:function(id){//获取活动
            let that = this;
            Indicator.open();
            var param={"pageNo":"1","actStatus":that.actStatus,"officeId":that.$route.query.groupId}
            console.log(param)
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
                                console.log(2)
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
        toWealthList(){
            _czc.push(['_trackEvent', this.centerName+'财富师card' ,'H5DepartmentFinancialPlannersCardClick']);//体验中心财富师card点击量
            console.log(this.groupId)
            this.$router.push({
                path:'/wealthTeacherList',
                name:'wealthTeacherList',
                query:{
                    groupId:this.groupId,//体验中心的Id
                    userId:this.$route.query.userId,//userId;
                    userName:this.$route.query.userName,
                    shareflag:this.shareflag,
                    shareUserId:this.$route.query.shareUserId,
                    showCard:this.$route.query.showCard,
                    shareId:this.$route.query.shareId,
                }
            })
        },
        czname(name){
            _czc.push(['_trackEvent', this.centerName+'banner','H5DepartmentBannerClick',name]);//大区banner点击量
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
                    var urlstr = location.href.split('?')[0]+'?userId='+this.$route.query.shareId+'&groupId='+this.$route.query.groupId+'&areaId='+this.$route.query.areaId+'&userName='+this.$route.query.userName+'&shareflag=1';
                }else{
                    var urlstr = window.location.href+'&shareflag=1';
                }
                var title = this.centerName+'微站'
                var sendstr= '{"title":"'+title+'","content":"因为胜任  所以信任","urlstr":"'+urlstr+'"}'; 				
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
        this.initS2('wealthTeacherContainer',1.2);
        // new swiper = new Swiper('.wealthTeacherContainer', {
        //     slidesPerView: 3,
        //     spaceBetween: 30,
        //     pagination: {
        //         el: '.swiper-pagination',
        //         clickable: true,
        //     },
        // });
        // 将moduleNameClick方法绑定到window下面，提供给外部调用
        
       
    },
    created:function(){
        this.userId = this.$route.query.userId;
         //this.client=this.$route.query.client;
         this.areaId=this.$route.query.areaId;
         this.shareflag=this.$route.query.shareflag;
         if(!this.areaId==false){
            this.ifBackarea=true;//显示返回按钮；
         }else{
            this.ifBackarea=false;//隐藏返回按钮；
         }
         this.ifShare();//是否显示分享的财富师card;
        this.getCenterUsers();
        //this.getCenterInfo();
        this.getuserName();
        this.getBanner();
        this.getActive()//获取活动列表；
    }
}
</script>

<style>
    @import 'area.css';
    .tiyanTop .areaIntr{
        color: #4D3838;
        text-shadow: none;
        font-weight: 400;
        margin: .87rem auto .5rem;
    }
    .backArea{
        width:2.293333rem;
        height:.746667rem;
        line-height: .8rem;
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
        width: 4.586667rem;
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
        right: 2.4%;
        color: #707070;
        z-index: 1000;
        font-size: .266667rem;
        font-weight: 500;
    }
    .card_content{
        position: absolute;
        top: 40%;
        left: 53%;
        color: #696969;
        z-index: 1000;
        font-size: .266667rem;
        width: 3.7rem;
        text-align: justify;
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
        left: 50%;
        color: #9D6060;
        z-index: 1000;
        font-size: .266667rem;
    }
    .card_time{
       position: absolute;
        bottom: 2%;
        right: 2.4%;
        color: #ACACAC;
        z-index: 1000;
        font-size: .266667rem; 
    }
    .contactUs{
        padding-top: .53333rem;
        background: #fff;
    }
    .contactUs p{
        font-size: .32rem;
        color: #000;
        line-height: .533333rem;
        text-align: left;
        padding-left: .4rem;
    }
    .contacTel{
        padding-top: .5333rem;
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


