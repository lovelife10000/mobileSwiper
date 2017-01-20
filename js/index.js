$(document).ready(function(){

//变量声明
var pageNow=1; //当前页码数
var maxpage=8; //共计页码数
var pageOld=1; //上一页页码数
var isAnimation=false; //是否正在动画
var winWidth;//宽度
var winHeight;//高度

//监听窗口
function checkWinSize(){  
    winWidth = $(window).width();
    winHeight = $(window).height();
    $('.page-wrap').width(winWidth);
    $('.page-wrap').height(winHeight);

    //横屏
    if(winWidth>winHeight){

    }

    //竖屏    
    else{

    }
}

//翻页事件绑定
window.onload=function(){
    $(document).on("touchmove",function(event){event.preventDefault(); },false);//禁用默认的滚动条
    $(window).keydown(function(event){choosepage(event.keyCode);})//模拟键盘上下键操作
    $(document).swipeUp(function(){nextpage();})
    $(document).swipeDown(function(){prepage();})        
    checkWinSize();
    }

//窗口重置事件绑定
$(window).resize(function(){checkWinSize();});

//下一页
function nextpage(){        
    if(isAnimation==false){
        pageOld=pageNow;
        if(pageNow==maxpage){
            //pageNow=1;
            return;
            }
        else{
            pageNow++;
            }
        gopage("up");
        }
    }

//上一页
function prepage(){     
    if(isAnimation==false){
        pageOld=pageNow;
        if(pageNow==1){
            //pageNow=maxpage;
            return;
            }
        else{
            pageNow--;
            }
        gopage("down");
        }
    }

//翻页方法
function gopage(state){     
    var nextCss=".page"+pageNow;
    var preCss=".page"+pageOld;
    var Outcss;
    var Incss;
    
    if(state=="up"){       
        Outcss="page-moveToUpBox";//设置上滑时，上一页的出场动画
        Incss="page-moveFromBottomBox";//设置上滑时，下一页的入场动画
        }
    else if(state=="down"){     
        Outcss="page-moveToBottomBox";//设置下滑时，上一页的出场动画       
        Incss="page-moveFromUpBox";//设置下滑时，下一页的入场动画
        }

    isAnimation=true;

    $(nextCss).removeClass("hide");
    $(preCss).addClass(Outcss);
    $(nextCss).addClass(Incss);
    
    setTimeout(function(){  
        //对上一页的操作
        $(preCss).removeClass(Outcss);
        $(preCss).removeClass("current");
        $(preCss).addClass("hide");        

        //对当前页的操作
        $(nextCss).addClass("current");
        $(nextCss).removeClass(Incss);        

        isAnimation=false;
        },600);
    }

//上下键模拟滑屏
function choosepage(keycode){       
    if(keycode==38){
        prepage();
    }
    else if(keycode==40){
        nextpage();
    }
}

//载入第一页
function loading(){     
    if(document.readyState == "complete"){ 
        $("#loading").hide();
        $(".content").show();
    }
}

























});
