<template>
    <div name='wealthTeacherList'>
        <div class="wCard" v-show="showCard">
            <!-- <span class="wName">{{userName}}</span><span class="wDt">{{userId}}</span><img src="./img/towDetail.png" class="towDetail" @click="toCard"/> -->
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
        <div class='noData' v-if='isShowPage' style="padding-top:5.2rem;">
            <img src='./img/weihu@2x.png'/>
            <p class='noData_p1'>数据正在维护中......</p>
        </div>
        <div v-else>
        <div><img src="./img/belive.png" class="belive"/></div>
        <div class="pl26 pr26 wealthInputBox"><input placeholder="输入财富师姓名或工号查询" name="" class="wealthInput" ref='name'/><img src="./img/sou.png" class="sou" @click.stop='search'/></div>
        <div class='noData' v-if='isShow'>
            <img src='./img/cfs@2x.png'/>
            <p class='noData_p1'>未查询到该财富师</p>
            <p class='noData_p2' @click="Loadpage">查看其他财富师</p>
        </div>
        <div class="wealthBox" v-else>
            <div class="wealthOne" v-for="item in userList" @click="toShareCard(item.userId)">
                <div class="wL">
                    <img :src='item.photo' v-if="item.photo"/>
                    <img src="./img/header_default.png" v-else>
                </div> 
                <div class="wR">
                    <div class="wRtop">
                        <span class="wName">{{item.userName}}</span><span class="wDt">{{item.userId}}</span>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="wRcenter line4">{{item.synopsis}}</div>
                    <div class="wRbottom">
                        <span class="waction">{{item.operationContent}}</span>
                        <span class="wactiontime">{{timeDistance(item.operationTime)}}</span>
                    </div>
                </div>
                <img src="./img/tui.png" class="tui" v-if="item.isRecommend == 1"/>
            </div>
        </div>
             <!-- <div class="wealthOne">
                <div class="wL">
                    <img src='./img/lin/wt.png'/>
                 </div> 
                <div class="wR">
                    <div class="wRtop">
                        <span class="wName">张嘉善</span><span class="wDt">DT1913071</span>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="wRcenter line4">
                        22年国有银行、股份制银行财富管理工作经验，长期从事财富管理实务和个人财务规划，擅长股票投，长期从事财富管理实务和个人财务规划，擅长股票
                    </div>
                    <div class="wRbottom">
                        <span class="waction">她推荐了一只基金</span>
                        <span class="wactiontime">45分钟前</span>
                    </div>
                </div>
            </div> -->
        </div>
        </div>
    </div>
</template>
<script>
import { Indicator, MessageBox, Toast } from 'mint-ui';
import axios from 'axios'
export default {
    name:'wealthTeacherList',
    data:function(){
        return{
            groupId:'',
            userId:'',
            userName:'',
            userList:[],
            isShow:false,
            showCard:false,
            condition:'',
            client:'',
            centerName:'',
            isShowPage:false,
            photo:'', //头像
            mobile:'', //手机号
        }
    },
    methods:{
        timeDistance(value){
			//当前时间
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

		},
        getCenterUsers:function(){//获取广告配置
            let that = this;
            Indicator.open();
            console.log('{"groupId":"'+that.groupId+'","condition":"'+that.condition+'"}')
            var param=Base64.encode('{"groupId":"'+that.groupId+'","condition":"'+that.condition+'"}');//that.user.userId
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
                        that.isShow=false
                        that.userList=data.userList;
                    }else{
                        that.isShow=true
                    }
                }else{
                    that.isShowPage=true
                }
            })
        },
        search:function(){
           this.condition=this.$refs.name.value;//ref的dom操作
           console.log(this.condition)
           this.getCenterUsers()
        },
        Loadpage:function(){
            this.condition=''
            this.getCenterUsers() 
        },
        toShareCard(userId){
            console.log(userId)
            window.location.href=this.tgHost+'?userId='+userId
        },
        toCard(){
            window.location.href=this.tgHost+'?userId='+this.$route.query.userId
        },
        ifShare:function(){
            var ua = navigator.userAgent.toLowerCase();
            //android终端
            var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;  　　//ios终端
            var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
            if ((/micromessenger/i).test(ua)) {//isWeixinBrowser()//判断是不是微信 
                this.showCard=true;//显示分享的财富师card;
               // this.userName=decodeURIComponent(this.$route.query.userName);
                return
            }else{
                if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                    //ios
                    this.client = 'IOS'
                    this.Share('IOS')
                } else if (/(Android)/i.test(navigator.userAgent)) {
                    //android
                    this.client == 'Android'
                    this.Share('Android')
                }
            }
        },
        Share:function(cli) {
            var iconStr='[{"name":"分享","icon":"1","type":"html","module":"html_share","subMenu":""}]';	//tc
            if(cli == 'IOS'){
                window.webkit.messageHandlers.AppModel.postMessage({body: 'objc:///menuMessage:'+iconStr});
            }else{
                window.AndroidFunction.menuMessage(iconStr);
            }
        },
        getCenterInfo:function(){
            let that = this;
            Indicator.open();
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
                    if(data.centerList.length>0){
                        console.log(data.centerList[0].centerName)
                        that.centerName=data.centerList[0].centerName//体验中心名称,
                        document.title ='大唐财富 · '+ that.centerName;
                        that.GasyncSDKConifg(that.centerName+'微站','因为胜任  所以信任')
                    }
                    that.photo=data.photo;   //头像
                    that.userName= data.name;   //名称
                    that.mobile = data.mobile;  //手机号
                }else{
                    that.isShowPage=true
                }
            })
        },
    },
    created:function(){
        this.groupId = this.$route.query.groupId;
        this.ifShare();//判断是不是分享到微信
        this.getCenterUsers()
        this.getCenterInfo()
    },
    mounted:function(){    
       // 将moduleNameClick方法绑定到window下面，提供给外部调用
       window['moduleNameClick'] = (data) => {
        if(data == 'html_share'){
            let ua = navigator.userAgent.toLowerCase();
            //android终端
            let isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;  　　//ios终端
            let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
            if ((/micromessenger/i).test(ua)) {//isWeixinBrowser()//判断是不是微信 
                return
            }else{
                var urlstr = window.location.href;
                var title = this.centerName+'微站'
                var sendstr= '{"title":"'+title+'","content":"因为胜任  所以信任","urlstr":"'+urlstr+'"}'; 				
                alert(sendstr)
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
   },
}
</script>
<style>
@import 'area.css';
.belive{
    display: block;
    width: 5.173333rem;
    margin: .426667rem auto;
}
.wealthInputBox{
    position: relative;
}
.wealthInput{
    width:100%;
    height: .8rem;
    border:1px solid #EFEFEF;
    padding-left: .266667rem;
    box-sizing: border-box;
    font-size: .32rem;
    font-family:PingFang SC;
    padding-top: .113rem;
}

.sou{
    width: .373333rem;
    position: absolute;
    right:0.6rem;
    top:0.2rem;
}
.wealthInput::-webkit-input-placeholder{
            color:#999999;
        }
.wealthInput::-moz-placeholder{   /* Mozilla Firefox 19+ */
            color:#999999;
        }
.wealthInput:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
            color:#999999;
        }
.wealthInput:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
            color:#999999;
        }
.wealthBox{
        padding:.293333rem .266667rem;
        }
.wealthOne{
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 12px rgba(165,165,165,0.16);
    opacity:1;
    border-radius: .16rem;
    margin-bottom: .32rem;
    padding: .266667rem .293333rem;
    box-sizing: border-box;
    height: 4.8rem;
    position: relative;
}
.wRtop{
    padding-top: .32rem;
}
.wR,.wL{
    float: left;
}
.wR{
    width:calc(100% - 3.466667rem);
    box-sizing: border-box;
    padding-left: .373333rem;
}
.wL img{
    width: 3.466667rem;
    height: 4.266667rem;
}
.wRtop .wName{
    font-size:.426667rem;
    font-weight:bold;
    color:rgba(59,59,59,1);
    float: left;
}
.wRtop .wDt{
    font-size:.32rem;
    line-height: .426rem;
    color:rgba(112,112,112,1);
    margin-left:.346667rem;
    float: left;
    margin-top: .12rem;
    display: inline-block;
    font-weight: 500;
}
.wRcenter{
    margin-top: .346667rem;
    font-size:.293333rem;
    font-weight:400;
    line-height:.455rem;
    color:rgba(105,105,105,1);
    height:1.786rem;
    text-align: justify;
}
.wRbottom{
    margin-top: .666667rem;
}
.waction{
    font-size:.293333rem;
    color:rgba(157,96,96,1);
    float: left;
}
.wactiontime{
    font-size:.266667rem;
    color:rgba(172,172,172,1);
    float: right;
}
.tui{
    width: 1.173333rem;
    position: absolute;
    right:0rem;
    top:0rem;
}

</style>


