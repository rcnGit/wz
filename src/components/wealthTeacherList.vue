<template>
    <div name='wealthTeacherList'>
        <div class="wCard" v-show="showCard">
            <span class="wName">张颖</span><span class="wDt">DT1928394</span><img src="./img/towDetail.png" class="towDetail"/>
        </div><!--wCard--><!---->
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
                    <img :src='item.photo'/>
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
            userList:[],
            isShow:false,
            showCard:false,
            condition:''
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
        }
    },
    created:function(){
        this.groupId = this.$route.query.groupId;
        this.getCenterUsers()
    }
}
</script>
<style>
@import 'area.css';
.belive{
    display: block;
    width:70%;
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
    margin-top: .11rem;
    display: inline-block;
}
.wRcenter{
    margin-top: .346667rem;
    font-size:.293333rem;
    font-weight:400;
    line-height:.455rem;
    color:rgba(105,105,105,1);
    height:1.786rem;
    text-align: left;
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
.noData{
    padding-top: 3.6rem;
}
.noData img{
    width: 2.5rem;
    margin: 0 auto;
}
.noData p{
    font-size: .426667rem;
}
.noData_p1{
    padding-top: .7rem;
    color: #363636;
}
.noData_p2{
    padding-top: .3rem;
    color: rgb(223, 30, 29);
}
</style>


