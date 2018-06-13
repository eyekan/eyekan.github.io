//sort分类页面
new Vue({
    el:"#sortapp",
    data:{
        arrs:[
            {h3:"休闲零食",img1:"images/sort/b1.png",p1:"坚果炒货",img2:"images/sort/b2.jpg",p2:"糖巧",img3:"images/sort/b3.png",p3:"休闲零食",img4:"images/sort/b4.png",p4:"肉干肉脯",img5:"images/sort/b5.jpg",p5:"饼干蛋糕",img6:"images/sort/b6.png",p6:"蜜饯果干",img7:"images/sort/b7.png",p7:"无糖食品"},
            {h3:"休闲零食",img1:"images/sort/1.jpg",p1:"坚果炒货",img2:"images/sort/2.jpg",p2:"糖巧",img3:"images/sort/3.jpg",p3:"休闲零食",img4:"images/sort/4.jpg",p4:"肉干肉脯",img5:"images/sort/5.jpg",p5:"饼干蛋糕",img6:"images/sort/6.jpg",p6:"蜜饯果干",img7:"images/sort/7.jpg",p7:"无糖食品"},
            {h3:"休闲零食",img1:"images/sort/b8.png",p1:"无糖食品",img2:"images/sort/b9.jpg",p2:"无糖食品",img3:"images/sort/b10.png",p3:"无糖食品",img4:"images/sort/b11.png",p4:"无糖食品",img5:"images/sort/b12.png",p5:"无糖食品",img6:"images/sort/b13.png",p6:"无糖食品",img7:"images/sort/b14.png",p7:"无糖食品"},
            {h3:"休闲零食",img1:"images/sort/1.jpg",p1:"坚果炒货",img2:"images/sort/2.jpg",p2:"糖巧",img3:"images/sort/3.jpg",p3:"休闲零食",img4:"images/sort/4.jpg",p4:"肉干肉脯",img5:"images/sort/5.jpg",p5:"饼干蛋糕",img6:"images/sort/6.jpg",p6:"蜜饯果干",img7:"images/sort/b15.jpg",p7:"无糖食品"},
            {h3:"休闲零食",img1:"images/sort/c1.png",p1:"坚果炒货",img2:"images/sort/c2.jpg",p2:"糖巧",img3:"images/sort/c3.jpg",p3:"休闲零食",img4:"images/sort/c4.jpg",p4:"肉干肉脯",img5:"images/sort/c5.png",p5:"饼干蛋糕",img6:"images/sort/c6.png",p6:"蜜饯果干",img7:"images/sort/c7.jpg",p7:"无糖食品"},
            {h3:"休闲零食",img1:"images/sort/c8.png",p1:"坚果炒货",img2:"images/sort/c9.jpg",p2:"糖巧",img3:"images/sort/c10.jpg",p3:"休闲零食",img4:"images/sort/c11.jpg",p4:"肉干肉脯",img5:"images/sort/c12.jpg",p5:"饼干蛋糕",img6:"images/sort/6.jpg",p6:"蜜饯果干",img7:"images/sort/7.jpg",p7:"无糖食品"},
            {h3:"休闲零食",img1:"images/sort/d1.png",p1:"坚果炒货",img2:"images/sort/d2.png",p2:"糖巧",img3:"images/sort/d3.jpg",p3:"休闲零食",img4:"images/sort/d4.jpg",p4:"肉干肉脯",img5:"images/sort/d5.jpg",p5:"饼干蛋糕",img6:"images/sort/d6.jpg",p6:"蜜饯果干",img7:"images/sort/d7.jpg",p7:"无糖食品"},
            {h3:"休闲零食",img1:"images/sort/1.jpg",p1:"坚果炒货",img2:"images/sort/2.jpg",p2:"糖巧",img3:"images/sort/d8.jpg",p3:"休闲零食",img4:"images/sort/d9.jpg",p4:"肉干肉脯",img5:"images/sort/d10.jpg",p5:"饼干蛋糕",img6:"images/sort/d11.jpg",p6:"蜜饯果干",img7:"images/sort/d12.jpg",p7:"无糖食品"},
            {h3:"休闲零食",img1:"images/sort/e1.jpg",p1:"拉杆箱",img2:"images/sort/e2.jpg",p2:"时尚男包",img3:"images/sort/e3.jpg",p3:"男士腰带",img4:"images/sort/e4.jpg",p4:"男包上新",img5:"images/sort/e5.jpg",p5:"自营女包",img6:"images/sort/e6.jpg",p6:"双肩包",img7:"images/sort/e7.jpg",p7:"新款钱包"},
            {h3:"休闲零食",img1:"images/sort/e8.jpg",p1:"坚果炒货",img2:"images/sort/e9.jpg",p2:"糖巧",img3:"images/sort/3.jpg",p3:"休闲零食",img4:"images/sort/4.jpg",p4:"肉干肉脯",img5:"images/sort/5.jpg",p5:"饼干蛋糕",img6:"images/sort/6.jpg",p6:"蜜饯果干",img7:"images/sort/7.jpg",p7:"无糖食品"}
        ]
    }
})


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
            sortmainli[j].style.backgroundColor = "#f5f5f5";
            sortmainli[j].style.color = "#000";
        }
        this.style.backgroundColor = "#fff";
        this.style.color = "red";
        sortrow[this.aa].setAttribute("class","appear");
    } 
}






