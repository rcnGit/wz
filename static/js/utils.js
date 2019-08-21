import wx from 'weixin-js-sdk';
import axios from 'axios';

export default {
    install(Vue, options) {
      //  Vue.prototype.Host='https://interface.tdyhfund.com/'
        Vue.prototype.Host="http://weixin-test-interface.tdyhfund.com/"
       // Vue.prototype.APPID='wx42b6456eeafbe956'  //生产
       Vue.prototype.APPID='wx1f686b130ea97432'
       // Vue.prototype.tgHost="http://172.16.8.54/DTCFS/html/shared_card.html" 
        Vue.prototype.tgHost="https://test-interface.tdyhfund.com:8443/dthtml/HTML5/DTCFS/html/shared_card.html"
       // Vue.prototype.tgHost='https://interface.tdyhfund.com/dthtml/HTML5/DTCFS/html/shared_card.html'   //糖罐app财富师名片页
       
       
        Vue.prototype.GasyncSDKConifg = function (tit,des) {
            var url ='https://weixin-test-interface.tdyhfund.com/wxservice/core/getProductJSSDKConfigure.mm?pageUrl='+Base64.encode(window.location.href);
	        //var url ='https://interface.tdyhfund.com/wxservice/core/getProductJSSDKConfigure.mm?pageUrl='+Base64.encode(window.location.href);
            var sharelink = window.location.href
            axios.get(url)
                .then(function (res) {
                   // console.log(res)
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: res.data.appId, // 必填，公众号的唯一标识
                    timestamp: res.data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
                    signature: res.data.signature, // 必填，签名
                    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
                })
                wx.ready(function(res) { //通过ready接口处理成功验证 // config信息验证成功后会执行ready方法
                //  console.log(meatTitle+'====meatTitle')
                //  console.log(res+'===res')
                wx.onMenuShareAppMessage({ // 分享给朋友  ,在config里面填写需要使用的JS接口列表，然后这个方法才可以用 
                    title: tit, // 分享标题
                    desc: des, // 分享描述
                    link: sharelink, // 分享链接
                    imgUrl: 'http://file0.datangwealth.com/g1/M00/16/50/rBAeX1ybKCiAEKkxAADvNDguF4c858.png?filename=share.png', // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function() {
                        // 用户确认分享后执行的回调函数
                       // alert('确认')
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                       // alert('取消')
                    }
                    });
                    wx.onMenuShareTimeline({ //分享朋友圈
                    title: tit, // 分享标题
                    link: sharelink,
                    imgUrl: 'http://file0.datangwealth.com/g1/M00/16/50/rBAeX1ybKCiAEKkxAADvNDguF4c858.png?filename=share.png', // 分享图标
                    success: function() {
                        // 用户确认分享后执行的回调函数
                       // alert('确认')
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                      //  alert('取消')
                    }
                });
            });
                // end
            })
            wx.error(function(res){//通过error接口处理失败验证
                // config信息验证失败会执行error函数
                console.log(res)
            });
        }

        
        Vue.prototype.getUrlParam = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
        }
        
    }
}
