setInterval(function(){
    x();
},3000);
setInterval(function(){
    e();
    h();
},3500);

//向上偏移负16像素
function x(){
    $(".news .center .text").css({"transform":"translateY(-16px)","transition":"1s"});
}

//归零
function e(){
    $(".news .center .text").css({"transform":"translateY(0)","transition":"0s"});
}

//把第一个移动到末尾
function h(){
    $(".news .center .text").eq(0).appendTo($(".news .center"));
}



//首页京东秒杀部分的效果（倒计时）
var zxx = {
    $: function(id){
        return document.getElementById(id);
    },
    futureDate: Date.UTC(2018, 6, 1, 8),
    obj: function(){
        return {
            sec: zxx.$("sec"),
            mini: zxx.$("mini"),
            hour: zxx.$("hour"),
//            day: zxx.$("day"),
//            month: zxx.$("month")+1,
//            year: zxx.$("year")
        }
    }
};
fnTimeCountDown(zxx.futureDate, zxx.obj());



//.search 顶部搜索条滚动到一定距离变背景颜色的功能
window.onscroll = function(){
	console.log('1');
    if(document.body.scrollTop>115){
        document.querySelector(".search").style.background="#884D61";
    }else{
       document.querySelector(".search").style.background="transparent"; 
    }
}
//js判断当前页面是否有某个元素
//var search=document.querySelector(".search");
//if(search != null){
//    console.log("这个页面有.search")
//}else{
//    console.log("这个页面没有.search")
//}


//banner轮播图
var mySwiper = new Swiper ('.banner', {
    loop: true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })



//京东直播
var swiper = new Swiper('.lunbo', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });



//后台执行
new Vue({
    el:"#app",
    data:{
        arrs:[
            {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式45c...",img:"images/weini/1.jpg",price:"￥21.80",a:"看相似"},
            {name:"安昕 良选男士船袜5双装 中筒棉袜商务男袜子吸汗透气短袜 船...",img:"images/weini/2.jpg",price:"￥38.00",a:"看相似"},
            {name:"苹果原装数据线iPhone7plus//6P/5SE/ iPadpro手机USB线...",img:"images/weini/3.jpg",price:"￥155.00",a:"看相似"},
            {name:"真皮多卡位零钱包女士卡夹信用卡包头层牛皮驾驶证皮套风琴...",img:"images/weini/4.jpg",price:"￥59.00",a:"看相似"},
            {name:"QANLIIY千里鹰便携双筒望远镜高倍高清微光",img:"images/weini/5.jpg",price:"￥138.00",a:"看相似"},
            {name:"【京东超市】蒙牛（MENGNIU）成人奶粉 全脂...",img:"images/weini/6.jpg",price:"￥27.80",a:"看相似"},
            {name:"【京东超市】清风（APP）卷纸...",img:"images/weini/7.jpg",price:"￥18.90",a:"看相似"},
            {name:"【京东超市】绿之源360°...",img:"images/weini/8.jpg",price:"￥99.00",a:"看相似"}
        ]
    }
})



//返回顶部
//由于top变量是一个保留关键字，所以声明的变量，不能为top，改成了fhdb(javascript保留词)
var fhdb=document.querySelector("#top");
console.log(fhdb);
//fhdb.addEventListener("click",function(){
//    document.body.scrollTop=0;
//    document.documentElement.scrollTop=0;
//})
fhdb.addEventListener("click",function(){
    var t=setInterval(function(){
        document.body.scrollTop=document.body.scrollTop-20;
        document.documentElement.scrollTop=document.documentElement.scrollTop-20;
//        如果返回顶部了，就把计时器清除掉
        if(document.body.scrollTop===0){
            clearInterval(t);
        }
    })
},10)
//js滚动条事件
window.onscroll=function(){
    var totop=document.getElementById("top");
    console.log(document.body.scrollTop);
    if(document.body.scrollTop>370){
        totop.style.display="inline-block";
    }else{
        totop.style.display="none";
    }
}
//js返回顶部非常麻烦
//有的同学用jquery
//$("#top").click(function(){
//    $("html,body").animate({scrollTop:0},500)
//})




var ad=document.querySelector(".ad");
var close=document.querySelector("#close");
if(sessionStorage.ad=="false"){
    ad.style.display="none";
}else{
    ad.style.display="block";
}
close.onclick=function(){
    ad.style.display="none";
    sessionStorage.ad="false";
}

