
//返回顶部
$("#top").click(function(){
    $("html,body").animate({scrollTop:0},500)
})


//.search 顶部搜索条滚动到一定距离变的功能
window.onscroll = function(){
    if(document.querySelector(".search")!==null){
    if(document.body.scrollTop>60){
       
        document.querySelector(".search").style.top = "0";
        document.querySelector(".sort .main .zhuti .col-xs-3").style.top = "60px";
    }else{
       
        document.querySelector(".search").style.top = "auto";
        document.querySelector(".sort .main .zhuti .col-xs-3").style.top = "120px";
    }
  

}
}

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

//顶部广告
var ad=document.querySelector(".ad");
var close=document.querySelector("#close");
if(ad!==null){
    if(sessionStorage.ad=="false"){
        ad.style.display="none";
    }else{
        ad.style.display="block";
    }
    close.onclick=function(){
        ad.style.display="none";
        sessionStorage.ad="false";
    }
}




//后台执行
new Vue({
    el:"#app",
    data:{
        arrs:[
            {img:"images/biao/1.jpg",price:"￥4600",del:"￥6700"},
            {img:"images/biao/2.jpg",price:"￥2300",del:"￥6200"},
            {img:"images/biao/3.jpg",price:"￥4580",del:"￥7700"},
            {img:"images/biao/4.jpg",price:"￥32100",del:"￥5300"},
            {img:"images/biao/5.jpg",price:"￥6400",del:"￥5700"},
            {img:"images/biao/6.jpg",price:"￥3300",del:"￥5800"},
            {img:"images/biao/7.jpg",price:"￥5300",del:"￥8900"},
            {img:"images/biao/8.jpg",price:"￥7300",del:"￥10200"},
            {img:"images/biao/9.jpg",price:"￥2380",del:"￥5700"},
            {img:"images/biao/10.jpg",price:"￥8300",del:"￥10300"},
            {img:"images/biao/11.jpg",price:"￥9300",del:"￥12000"},
            {img:"images/biao/12.jpg",price:"￥2100",del:"￥4000"},
            {img:"images/biao/13.jpg",price:"￥12300",del:"￥18000"},
            {img:"images/biao/14.jpg",price:"￥3300",del:"￥6700"},
            {img:"images/biao/15.jpg",price:"￥2800",del:"￥5600"},
            {img:"images/biao/16.jpg",price:"￥22300",del:"￥6680"},
            {img:"images/biao/17.jpg",price:"￥25600",del:"￥31000"},
            {img:"images/biao/18.jpg",price:"￥2080",del:"￥6700"},
            {img:"images/biao/19.jpg",price:"￥2540",del:"￥9700"},
            {img:"images/biao/1.jpg",price:"￥1230",del:"￥17900"},
        ]
    }
});





//选项卡
var sortmainli=document.querySelectorAll(".sort .main li");
var sortrow=document.querySelectorAll(".sort .main .col-xs-9 .box");
console.log(sortrow);
for(var z=0;z<sortrow.length;z++){
    sortrow[z].setAttribute("class","disappear");
}

sortrow[0].setAttribute("class","appear");

for(var i=0;i<sortmainli.length;i++){
    sortmainli[i].aa=i;
    sortmainli[i].onclick=function(){
        for(var j=0;j<sortrow.length;j++){
           sortrow[j].setAttribute("class","disappear");
            sortmainli[j].style.backgroundColor = "#fff";
            sortmainli[j].style.color = "#555";
        }
        this.style.backgroundColor = "#555";
        this.style.color = "#fff";
        sortrow[this.aa].setAttribute("class","appear");
    } 
}






new Vue ({
    el:"#sortapp",
    data:{
        arrs:[
            {img:"images/sort/tuijian/1.jpg",p:"——猜你喜欢——",img1:"images/sort/tuijian/biao (1).png",p1:"机械表",
            img2:"images/sort/tuijian/biao (2).png",p2:"石英表",
            img3:"images/sort/tuijian/biao (3).png",p3:"钢带手表",
            img4:"images/sort/tuijian/biao (4).png",p4:"商务休闲",
            img5:"images/sort/tuijian/biao (5).png",p5:"男表",
            img6:"images/sort/tuijian/biao (6).png",p6:"女表",
            p0:"——国际馆——",img7:"images/sort/tuijian/guoji (1).png",p7:"法式表",
            img8:"images/sort/tuijian/guoji (2).png",p8:"欧美表",
            img9:"images/sort/tuijian/guoji (3).png",p9:"德国表",
            img10:"images/sort/tuijian/guoji (4).png",p10:"日系表",
            img11:"images/sort/tuijian/guoji (5).png",p11:"国产表",
            img12:"images/sort/tuijian/guoji (6).png",p12:"瑞士表",
             pa:"——热门品牌——",img13:"images/sort/tuijian/remen (1).png",p13:"天梭",
            img14:"images/sort/tuijian/remen (2).png",p14:"爱保时",
            img15:"images/sort/tuijian/remen (3).png",p15:"浪琴",
            img16:"images/sort/tuijian/remen (4).png",p16:"欧米茄",
            img17:"images/sort/tuijian/remen (5).png",p17:"赫柏林",
            img18:"images/sort/tuijian/remen (6).png",p18:"迪沃斯",
            img19:"images/sort/tuijian/remen (7).png",p19:"库尔沃",
            img20:"images/sort/tuijian/remen (8).png",p20:"美度",
            img21:"images/sort/tuijian/remen (9).png",p21:"柏高",
            },
        ],  
    }
});
new Vue ({
    el:"#sortapps",
    data:{
        arrs:[
            {img:"images/sort/dingji/01.png",img1:"images/sort/dingji/1.png",p1:"江诗丹顿",
            img2:"images/sort/dingji/2.png",p2:"宝玑",
            img3:"images/sort/dingji/3.png",p3:"积家",
            img4:"images/sort/dingji/4.png",p4:"亨利慕时",
            img5:"images/sort/dingji/5.png",p5:"伯爵",
            img6:"images/sort/dingji/6.png",p6:"宝珀",
            img7:"images/sort/dingji/7.png",p7:"柏高",
            img8:"images/sort/dingji/8.png",p8:"朗格",
            img9:"images/sort/dingji/9.png",p9:"百达翡丽",
            img10:"images/sort/dingji/10.png",p10:"格拉苏蒂·原创",
            img11:"images/sort/dingji/11.png",p11:"爱彼",
            img12:"images/sort/dingji/12.png",p12:"雅克德罗",
             img13:"images/sort/dingji/13.png",p13:"芝柏",
            img14:"images/sort/dingji/14.png",p14:"宇舶",
            img15:"images/sort/dingji/15.png",p15:"雅典",
            img16:"images/sort/dingji/16.jpg",p16:"法穆兰",
            img17:"images/sort/dingji/17.png",p17:"豪朗时",
            img18:"images/sort/dingji/18.jpg",p18:"播威",
            
            },
        ],  
    }
});
new Vue ({
    el:"#sortappa",
    data:{
        arrs:[
            {img:"images/sort/shehua/01.png",img1:"images/sort/shehua/1.png",p1:"欧米茄",
            img2:"images/sort/shehua/2.png",p2:"劳力士",
            img3:"images/sort/shehua/3.png",p3:"库尔沃",
            img4:"images/sort/shehua/4.png",p4:"沛纳海",
            img5:"images/sort/shehua/5.png",p5:"莫勒",
            img6:"images/sort/shehua/6.png",p6:"世纪",
            img7:"images/sort/shehua/7.png",p7:"帝舵",
            img8:"images/sort/shehua/8.png",p8:"艾美达",
            img9:"images/sort/shehua/9.png",p9:"泰格豪雅",
            img10:"images/sort/shehua/10.png",p10:"诺美纳",
            img11:"images/sort/shehua/11.png",p11:"万国",
            img12:"images/sort/shehua/12.png",p12:"百年灵",
             img13:"images/sort/shehua/13.png",p13:"卡地亚",
            img14:"images/sort/shehua/14.png",p14:"瑞宝",
            img15:"images/sort/shehua/15.png",p15:"依百克",
            img16:"images/sort/shehua/16.png",p16:"梵德宝",
            img17:"images/sort/shehua/17.png",p17:"艾美",
            img18:"images/sort/shehua/18.png",p18:"真力时",
            img19:"images/sort/shehua/19.png",p19:"肖邦",
            img20:"images/sort/shehua/20.png",p20:"昆仑",
            img21:"images/sort/shehua/21.jpg",p21:"宝格丽",
            img22:"images/sort/shehua/22.jpg",p22:"万宝龙",
            img23:"images/sort/shehua/23.jpg",p23:"宝齐莱",
            img24:"images/sort/shehua/24.jpg",p24:"豪利时",
            
            },
        ],  
    }
});
new Vue ({
    el:"#sortappb",
    data:{
        arrs:[
            {img:"images/sort/qingshe/01.jpg",img1:"images/sort/qingshe/she (1).png",p1:"天梭",
            img2:"images/sort/qingshe/she (2).png",p2:"浪琴",
            img3:"images/sort/qingshe/she (3).png",p3:"爱保时",
            img4:"images/sort/qingshe/she (4).png",p4:"美度",
            img5:"images/sort/qingshe/she (5).png",p5:"迪沃斯",
            img6:"images/sort/qingshe/she (6).png",p6:"汉米尔顿",
            img7:"images/sort/qingshe/she (7).png",p7:"赫柏林",
            img8:"images/sort/qingshe/she (8).png",p8:"西铁域",
            img9:"images/sort/qingshe/she (9).png",p9:"康斯登",
            img10:"images/sort/qingshe/she (10).png",p10:"爱罗",
            img11:"images/sort/qingshe/she (11).png",p11:"摩凡陀",
            img12:"images/sort/qingshe/she (12).png",p12:"时度",
             img13:"images/sort/qingshe/she (13).png",p13:"摩纹",
            img14:"images/sort/qingshe/she (14).png",p14:"博莱士",
            img15:"images/sort/qingshe/she (15).png",p15:"雷达",
            img16:"images/sort/qingshe/she (16).png",p16:"雪铁纳",
            img17:"images/sort/qingshe/she (17).png",p17:"查梅斯",
            img18:"images/sort/qingshe/she (18).png",p18:"豪度",
            img19:"images/sort/qingshe/she (19).png",p19:"名士",
            img20:"images/sort/qingshe/she (20).png",p20:"雷米格",
            img21:"images/sort/qingshe/she (21).png",p21:"菲拉格慕",
            img22:"images/sort/qingshe/she (22).png",p22:"梅花",
            img23:"images/sort/qingshe/she (23).png",p23:"荣汉斯",
            img24:"images/sort/qingshe/she (24).png",p24:"依波路",
            img25:"images/sort/qingshe/she (25).png",p25:"雍加毕索",
            img26:"images/sort/qingshe/she (26).png",p26:"瑞士军表",
            img27:"images/sort/qingshe/she (27).png",p27:"优立时",
            img28:"images/sort/qingshe/she (28).png",p28:"天铭",
            img29:"images/sort/qingshe/she (29).png",p29:"劳特莱",
            img30:"images/sort/qingshe/she (30).png",p30:"绮年华",
            img31:"images/sort/qingshe/she (31).png",p31:"特工",
            img32:"images/sort/qingshe/she (32).png",p32:"雷蒙威",
            img33:"images/sort/qingshe/she (33).png",p33:"Alpina",
            img34:"images/sort/qingshe/she (34).png",p34:"PILO & CO",
            img35:"images/sort/qingshe/she (35).png",p35:"DVH",
            img36:"images/sort/qingshe/she (36).png",p36:"哈伯曼",
            img37:"images/sort/qingshe/she (37).png",p37:"爱马仕",
            img38:"images/sort/qingshe/she (38).png",p38:"英纳格",
            
            },
        ],  
    }
});
new Vue ({
    el:"#sortappc",
    data:{
        arrs:[
            {img:"images/sort/shishang/01.png",img1:"images/sort/shishang/shang (1).png",p1:"欧米茄",
            img2:"images/sort/shishang/shang (2).png",p2:"劳力士",
            img3:"images/sort/shishang/shang (3).jpg",p3:"库尔沃",
            img4:"images/sort/shishang/shang (4).jpg",p4:"沛纳海",
            img5:"images/sort/shishang/shang (5).jpg",p5:"莫勒",
            img6:"images/sort/shishang/shang (6).jpg",p6:"世纪",
            img7:"images/sort/shishang/shang (7).jpg",p7:"帝舵",
            img8:"images/sort/shishang/shang (8).jpg",p8:"艾美达",
            img9:"images/sort/shishang/shang (9).jpg",p9:"泰格豪雅",
            img10:"images/sort/shishang/shang (10).jpg",p10:"诺美纳",
            img11:"images/sort/shishang/shang (11).jpg",p11:"万国",
            img12:"images/sort/shishang/shang (12).jpg",p12:"百年灵",
             img13:"images/sort/shishang/shang (13).jpg",p13:"卡地亚",
            img14:"images/sort/shishang/shang (14).jpg",p14:"瑞宝",
            img15:"images/sort/shishang/shang (15).jpg",p15:"依百克",
            img16:"images/sort/shishang/shang (16).jpg",p16:"梵德宝",
            img17:"images/sort/shishang/shang (17).jpg",p17:"艾美",
            img18:"images/sort/shishang/shang (18).jpg",p18:"真力时",
            img19:"images/sort/shishang/shang (19).jpg",p19:"肖邦",
            img20:"images/sort/shishang/shang (20).jpg",p20:"昆仑",
            img21:"images/sort/shishang/shang (21).jpg",p21:"宝格丽",
            img22:"images/sort/shishang/shang (22).jpg",p22:"万宝龙",
            img23:"images/sort/shishang/shang (23).jpg",p23:"宝齐莱",
            img24:"images/sort/shishang/shang (24).jpg",p24:"豪利时",
            img25:"images/sort/shishang/shang (25).jpg",p25:"豪利时",
            img26:"images/sort/shishang/shang (26).jpg",p26:"豪利时",
            
            },
        ],  
    }
});
new Vue ({
    el:"#sortappd",
    data:{
        arrs:[
            {img:"images/sort/guochan/1.png",img1:"images/sort/guochan/guo (1).png",p1:"飞亚达",
            img2:"images/sort/guochan/guo (2).png",p2:"海鸥",
            img3:"images/sort/guochan/guo (3).png",p3:"颂拓",
            img4:"images/sort/guochan/guo (4).png",p4:"上海",
            img5:"images/sort/guochan/guo (5).png",p5:"华为",
            img6:"images/sort/guochan/guo (6).png",p6:"佳明",
            img7:"images/sort/guochan/guo (7).png",p7:"SWISS MILITA",
            img8:"images/sort/guochan/guo (8).png",p8:"孔雀",
            img9:"images/sort/guochan/guo (9).png",p9:"尖刀",
            img10:"images/sort/guochan/guo (10).png",p10:"廊桥表",
            
            
            },
        ],  
    }
});
new Vue ({
    el:"#sortappe",
    data:{
        arrs:[
            {img:"images/sort/biaodai/1.jpg",img1:"images/sort/biaodai/dai (1).png",p1:"积优",
            img2:"images/sort/biaodai/dai (2).png",p2:"奇美拉",
            img3:"images/sort/biaodai/dai (3).png",p3:"欧时浩",
            img4:"images/sort/biaodai/dai (4).png",p4:"海奕施",
            img5:"images/sort/biaodai/dai (5).png",p5:"赫柏林",
            img6:"images/sort/biaodai/dai (6).png",p6:"迪沃斯",
            },
        ],  
    }
});


