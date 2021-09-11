$(function(){

    //影片展開
    $(".video-1").css({"padding-top":"80px"});
    $(".video-1").animate({"padding-top": "0px"},1500);

    //LOGO,小標移動
    $(window).scroll(function(){
        var scrollNull = $("html,body").scrollTop();
        var $windowWidth = window.innerWidth

        $(".title-s-1").css("opacity",0 + scrollNull*0.004)
        if($windowWidth >= 600){
            $(".title-s-1").animate({"letter-spacing":5}, 1000)
        }else if(600 >= $windowWidth && $windowWidth > 400){
            $(".title-s-1").animate({"letter-spacing":3}, 1000)
        };

        if($windowWidth > 1900){
            if(scrollNull <= $windowWidth*0.5){
                $(".logo-1").css("top",scrollNull+10)
                $(".title-s-1").css("top",scrollNull+140)
            }else{
                $(".logo-1").css("top",$windowWidth*0.5)
                $(".title-s-1").css("top",$windowWidth*0.5+140)
            }
        }else if(1900 >= $windowWidth && $windowWidth > 1600){
            if(scrollNull <= $windowWidth*0.5){
                $(".logo-1").css("top",scrollNull +10)
                $(".title-s-1").css("top",scrollNull +140)
            }else{
                $(".logo-1").css("top",$windowWidth*0.5)
                $(".title-s-1").css("top",$windowWidth*0.5+140)
            }
        }else if(1600 >= $windowWidth && $windowWidth > 1400){
            if(scrollNull <= $windowWidth*0.45){
                $(".logo-1").css("top",scrollNull +10)
                $(".title-s-1").css("top",scrollNull +140)
            }else{
                $(".logo-1").css("top",$windowWidth*0.45+10)
                $(".title-s-1").css("top",$windowWidth*0.45+140)
            }
        }else if(1400 >= $windowWidth && $windowWidth > 1200){
            if(scrollNull <= $windowWidth*0.45){
                $(".logo-1").css("top",scrollNull +10)
                $(".title-s-1").css("top",scrollNull +140)
            }else{
                $(".logo-1").css("top",$windowWidth*0.45+10)
                $(".title-s-1").css("top",$windowWidth*0.45+140)
            }
        }else if(1400 >= $windowWidth && $windowWidth > 1200){
            if(scrollNull <= $windowWidth*0.45){
                $(".logo-1").css("top",scrollNull +10)
                $(".title-s-1").css("top",scrollNull +140)
            }else{
                $(".logo-1").css("top",$windowWidth*0.45+10)
                $(".title-s-1").css("top",$windowWidth*0.45+140)
            }
        }else if(1200 >= $windowWidth && $windowWidth > 700){
            if(scrollNull <= $windowWidth*0.45){
                $(".logo-1").css("top",scrollNull +10)
                $(".title-s-1").css("top",scrollNull +120)
            }else{
                $(".logo-1").css("top",$windowWidth*0.45+10)
                $(".title-s-1").css("top",$windowWidth*0.45+120)
            }
        }else if(700 >= $windowWidth && $windowWidth > 600){
            if(scrollNull <= $windowWidth*0.55){
                $(".logo-1").css("top",scrollNull +10)
                $(".title-s-1").css("top",scrollNull +120)
            }else{
                $(".logo-1").css("top",$windowWidth*0.55+10)
                $(".title-s-1").css("top",$windowWidth*0.55+120)
            }
        }else if(600 >= $windowWidth && $windowWidth > 400){
            if(scrollNull <= $windowWidth*0.53){
                $(".logo-1").css("top",scrollNull +10)
                $(".title-s-1").css("top",scrollNull +100)
            }else{
                $(".logo-1").css("top",$windowWidth*0.54+10)
                $(".title-s-1").css("top",$windowWidth*0.54+100)
            }
        }else if(400 >= $windowWidth && $windowWidth > 300){
            if(scrollNull <= $windowWidth*0.6){
                $(".logo-1").css("top",scrollNull +10)
                $(".title-s-1").css("top",scrollNull +90)
            }else{
                $(".logo-1").css("top",$windowWidth*0.58+10)
                $(".title-s-1").css("top",$windowWidth*0.58+90)
            }
        }
    });

    //影片縮放
    $(window).scroll(function(){
        var $windowWidth = window.innerWidth;
        var scrollNull = $("html,body").scrollTop();
        
        if($windowWidth > 1050){
            $(".video-1").css({"width":scrollNull*0.35+$windowWidth*0.87,"maxWidth":$windowWidth});
        }else{
            $(".video-2").css({"width":scrollNull*0.35+$windowWidth*0.87,"maxWidth":$windowWidth});
        }
    });
    //背景變色
    $(window).scroll(function(){
        var scrollNull = $("html,body").scrollTop();
        var $windowWidth = window.innerWidth;
        if($windowWidth > 1600){
            $(".back-1").css("opacity",1-scrollNull*0.0017);
        }else if(1600 >= $windowWidth && $windowWidth > 1400){
            $(".back-1").css("opacity",1-scrollNull*0.002);
        }else if(1400 >= $windowWidth && $windowWidth > 1200){
            $(".back-1").css("opacity",1-scrollNull*0.0025);
        }else if(1200 >= $windowWidth && $windowWidth > 1050){
            $(".back-1").css("opacity",1-scrollNull*0.0025);
        }else if(1050 >= $windowWidth && $windowWidth > 900){
            $(".back-1").css("opacity",1-scrollNull*0.0028);
        }else if(900 >= $windowWidth && $windowWidth > 600){
            $(".back-1").css("opacity",1-scrollNull*0.004);
        }else if(600 >= $windowWidth && $windowWidth > 400){
            $(".back-1").css("opacity",1-scrollNull*0.004);
        }else if(400 >= $windowWidth && $windowWidth > 300){
            $(".back-1").css("opacity",1-scrollNull*0.005);
        }
    });

    //大標切色,大標移動
    $(window).scroll(function(){
        var scrollNull = $("html,body").scrollTop();
        var $windowWidth = window.innerWidth
        if(window.innerWidth > 1900){
            if(scrollNull > $windowWidth*0.5){
                $(".title-l-1-2").css("top",$windowWidth*0.3)
            }else{
                $(".title-l-1-2").css("top",scrollNull*0.055+15+"vw",);
            }
        }else if(1900 >= $windowWidth && $windowWidth > 1600){
            if(scrollNull > $windowWidth*0.5){
                $(".title-l-1-2").css("top",$windowWidth*0.3)
            }else{
                $(".title-l-1-2").css("top",scrollNull*0.065+15+"vw",);
            }
        }else if(1600 >= $windowWidth && $windowWidth > 1400){
            if(scrollNull > $windowWidth*0.55){
                $(".title-l-1-2").css("top",$windowWidth*0.3)
            }else{
                $(".title-l-1-2").css("top",scrollNull*0.065+15+"vw",);
            }
        }else if(1400 >= $windowWidth && $windowWidth > 1200){
            if(scrollNull > $windowWidth*0.53){
                $(".title-l-1-2").css("top",$windowWidth*0.3)
            }else{
                $(".title-l-1-2").css("top",scrollNull*0.08+15+"vw",);
            }
        }else if(1200 >= $windowWidth && $windowWidth > 1050){
            if(scrollNull > $windowWidth*0.53){
                $(".title-l-1-2").css("top",$windowWidth*0.3)
            }else{
                $(".title-l-1-2").css("top",scrollNull*0.1+15+"vw",);
            }
        }else if(1050 >= $windowWidth && $windowWidth > 950){
            if(scrollNull > $windowWidth*0.65){
                $(".title-l-1-2").css("top",$windowWidth*0.5)
            }else{
                $(".title-l-1-2").css("top",scrollNull*0.11+15+"vw",);
            }
        }else if(950 >= $windowWidth && $windowWidth > 800){
            if(scrollNull > $windowWidth*0.65){
                $(".title-l-1-2").css("top",$windowWidth*0.5)
            }else{
                $(".title-l-1-2").css("top",scrollNull*0.13+15+"vw",);
            }
        }else if(800 >= $windowWidth && $windowWidth > 700){
            if(scrollNull > $windowWidth*0.65){
                $(".title-l-1-2").css("top",$windowWidth*0.5)
            }else{
                $(".title-l-1-2").css("top",scrollNull*0.14+21+"vw",);
            }
        }else if(700 >= $windowWidth && $windowWidth > 600){
            if(scrollNull > $windowWidth*0.65){
                $(".title-l-1-2").css("top",$windowWidth*0.5)
            }else{
                $(".title-l-1-2").css("top",scrollNull*0.17+30+"vw",);
            }
        }else if(600 >= $windowWidth && $windowWidth > 500){
            if(scrollNull > $windowWidth*0.65){
                $(".title-l-1-2").css("top",$windowWidth*0.5)
            }else{
                $(".title-l-1-2").css("top",scrollNull*0.2+30+"vw",);
            }
        }else if(500 >= $windowWidth && $windowWidth > 400){
            if(scrollNull > $windowWidth*0.73){
                $(".title-l-1-2").css("top",$windowWidth*0.5)
            }else{
                $(".title-l-1-2").css("top",scrollNull*0.25+30+"vw",);
            }
        }else if(400 >= $windowWidth && $windowWidth > 350){
            if(scrollNull > $windowWidth*0.65){
                $(".title-l-1-2").css("top",$windowWidth*0.5)
            }else{
                $(".title-l-1-2").css("top",scrollNull*0.3+40+"vw",);
            }
        }else if(350 >= $windowWidth && $windowWidth > 300){
            if(scrollNull > $windowWidth*0.75){
                $(".title-l-1-2").css("top",$windowWidth*0.5)
            }else{
                $(".title-l-1-2").css("top",scrollNull*0.3+40+"vw",);
            }
        }
    });

    $(window).scroll(function(){
        var scrollNull = $("html,body").scrollTop();
        var $windowWidth = window.innerWidth
        if($windowWidth > 1900){
            if(scrollNull > $windowWidth*0.5){
                $(".title-l-1-1").css("top",$windowWidth*0.3)
            }else{
                $(".title-l-1-1").css("top",scrollNull*0.055-23+"vw",);
            }
        }else if(1900 >= $windowWidth && $windowWidth > 1600 ){
                if(scrollNull > $windowWidth*0.5){
                    $(".title-l-1-1").css("top",$windowWidth*0.3)
                }else{
                    $(".title-l-1-1").css("top",scrollNull*0.065-23+"vw",);
                }
        }else if(1600 >= $windowWidth && $windowWidth > 1400 ){
            if(scrollNull > $windowWidth*0.55){
                $(".title-l-1-1").css("top",$windowWidth*0.3)
            }else{
                $(".title-l-1-1").css("top",scrollNull*0.065-23+"vw",);
            }
        }else if(1400 >= $windowWidth && $windowWidth > 1200 ){
            if(scrollNull > $windowWidth*0.53){
                $(".title-l-1-1").css("top",$windowWidth*0.3)
            }else{
                $(".title-l-1-1").css("top",scrollNull*0.08-23+"vw",);
            }
        }else if(1200 >= $windowWidth && $windowWidth > 1050){
            if(scrollNull > $windowWidth*0.53){
                $(".title-l-1-1").css("top",$windowWidth*0.3)
            }else{
                $(".title-l-1-1").css("top",scrollNull*0.1-23+"vw",);
            }
        }else if(1050 >= $windowWidth && $windowWidth > 950){
            if(scrollNull > $windowWidth*0.65){
                $(".title-l-1-1").css("top",$windowWidth*0.5)
            }else{
                $(".title-l-1-1").css("top",scrollNull*0.11-23+"vw",);
            }
        }else if(950 >= $windowWidth && $windowWidth > 800){
            if(scrollNull > $windowWidth*0.65){
                $(".title-l-1-1").css("top",$windowWidth*0.5)
            }else{
                $(".title-l-1-1").css("top",scrollNull*0.13-23+"vw",);
            }
        }else if(800 >= $windowWidth && $windowWidth > 700){
            if(scrollNull > $windowWidth*0.65){
                $(".title-l-1-1").css("top",$windowWidth*0.5)
            }else{
                $(".title-l-1-1").css("top",scrollNull*0.14-17+"vw",);
            }
        }else if(700 >= $windowWidth && $windowWidth > 600){
            if(scrollNull > $windowWidth*0.65){
                $(".title-l-1-1").css("top",$windowWidth*0.5)
            }else{
                $(".title-l-1-1").css("top",scrollNull*0.17-22+"vw",);
            }
        }else if(600 >= $windowWidth && $windowWidth > 500){
            if(scrollNull > $windowWidth*0.65){
                $(".title-l-1-1").css("top",$windowWidth*0.5)
            }else{
                $(".title-l-1-1").css("top",scrollNull*0.2-22+"vw",);
            }
        }else if(500 >= $windowWidth && $windowWidth > 400){
            if(scrollNull > $windowWidth*0.73){
                $(".title-l-1-1").css("top",$windowWidth*0.5)
            }else{
                $(".title-l-1-1").css("top",scrollNull*0.25-22+"vw",);
            }
        }else if(400 >= $windowWidth && $windowWidth > 350){
            if(scrollNull > $windowWidth*0.65){
                $(".title-l-1-1").css("top",$windowWidth*0.5)
            }else{
                $(".title-l-1-1").css("top",scrollNull*0.3-22+"vw",);
            }
        }else if(350 >= $windowWidth && $windowWidth > 300){
            if(scrollNull > $windowWidth*0.75){
                $(".title-l-1-1").css("top",$windowWidth*0.5)
            }else{
                $(".title-l-1-1").css("top",scrollNull*0.3-22+"vw",);
            }
        }
    });
    
    //圖片滑動
    function move(e){
        var scrollNull = $("html,body").scrollTop();
        var $windowWidth = window.innerWidth;
        if($windowWidth > 1900){
            $(function(){
                //S1圖片滑動
                if(scrollNull > $windowWidth*0.43){   
                    $(".image-2-1").mousewheel().animate({"top":-$windowWidth*0.43- scrollNull*0.05},400)  
                }
                if(scrollNull > $windowWidth*0.47){   
                    $(".image-2-2").mousewheel().animate({"top":-$windowWidth*0.275- scrollNull*0.05},400)      
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-3").mousewheel().animate({"top":-$windowWidth*0.125- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-4").mousewheel().animate({"top":$windowWidth*0.11- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-5").mousewheel().animate({"top":$windowWidth*0.23- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-6").mousewheel().animate({"top":$windowWidth*0.445- scrollNull*0.05},400)    
                }
    
                //S2圖片滑動
                if(scrollNull > $windowWidth*1.5){   
                    $(".image-3-1").mousewheel().animate({"top":$windowWidth*0.3- scrollNull*0.05},400)    
                }
    
                //S3圖片時間差滑動
                if(scrollNull >$windowWidth*3.1){
                    $(".left-3-3").mousewheel().animate({"top":150},400)
                }else{
                $(".left-3-3").mousewheel().animate({"top":$windowWidth*0.067-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*2.98){
                    $(".left-3-2").mousewheel().animate({"top":150},400)
                }else{
                $(".left-3-2").mousewheel().animate({"top":$windowWidth*0.064-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*2.8){
                    $(".left-3-1").mousewheel().animate({"top":150},400)
                }else{
                $(".left-3-1").mousewheel().animate({"top":$windowWidth*0.06-scrollNull*0.02+"vw"},400)
                }
                
                console.log(scrollNull);
                console.log("22222");
            
            })
        }else if(1900 >= $windowWidth && $windowWidth > 1600){
            $(function(){
                //S1圖片滑動
                if(scrollNull > $windowWidth*0.3){   
                    $(".image-2-1").mousewheel().animate({"top":-$windowWidth*0.46- scrollNull*0.05},400)  
                }
                if(scrollNull > $windowWidth*0.4){   
                    $(".image-2-2").mousewheel().animate({"top":-$windowWidth*0.275- scrollNull*0.05},400)      
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-3").mousewheel().animate({"top":-$windowWidth*0.125- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-4").mousewheel().animate({"top":$windowWidth*0.11- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-5").mousewheel().animate({"top":$windowWidth*0.23- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-6").mousewheel().animate({"top":$windowWidth*0.445- scrollNull*0.05},400)    
                }
    
                //S2圖片滑動
                if(scrollNull > $windowWidth*1.5){   
                    $(".image-3-1").mousewheel().animate({"top":$windowWidth*0.3- scrollNull*0.05},400)    
                }
    
                //S3圖片時間差滑動
                if(scrollNull >$windowWidth*3.3){
                    $(".left-3-3").mousewheel().animate({"top":10+"vw"},400)
                }else{
                $(".left-3-3").mousewheel().animate({"top":$windowWidth*0.073-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*3.15){
                    $(".left-3-2").mousewheel().animate({"top":10+"vw"},400)
                }else{
                $(".left-3-2").mousewheel().animate({"top":$windowWidth*0.07-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*3){
                    $(".left-3-1").mousewheel().animate({"top":10+"vw"},400)
                }else{
                $(".left-3-1").mousewheel().animate({"top":$windowWidth*0.066-scrollNull*0.02+"vw"},400)
                }
                
                console.log(scrollNull);
                console.log("22222");
            
            })
        }else if(1600 >= $windowWidth && $windowWidth > 1400){
            $(function(){
                //S1圖片滑動
                if(scrollNull > $windowWidth*0.2){   
                    $(".image-2-1").animate({"top":-$windowWidth*0.51- scrollNull*0.05},400) 
                }
                if(scrollNull > $windowWidth*0.47){   
                    $(".image-2-2").mousewheel().animate({"top":-$windowWidth*0.275- scrollNull*0.05},400)      
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-3").mousewheel().animate({"top":-$windowWidth*0.125- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-4").mousewheel().animate({"top":$windowWidth*0.11- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-5").mousewheel().animate({"top":$windowWidth*0.23- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-6").mousewheel().animate({"top":$windowWidth*0.445- scrollNull*0.05},400)    
                }
    
                //S2圖片滑動
                if(scrollNull > $windowWidth*1.5){   
                    $(".image-3-1").mousewheel().animate({"top":$windowWidth*0.3- scrollNull*0.05},400)    
                }
    
                //S3圖片時間差滑動
                if(scrollNull >$windowWidth*3.3){
                    $(".left-3-3").mousewheel().animate({"top":10+"vw"},400)
                }else{
                $(".left-3-3").mousewheel().animate({"top":$windowWidth*0.073-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*3.15){
                    $(".left-3-2").mousewheel().animate({"top":10+"vw"},400)
                }else{
                $(".left-3-2").mousewheel().animate({"top":$windowWidth*0.07-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*3){
                    $(".left-3-1").mousewheel().animate({"top":10+"vw"},400)
                }else{
                $(".left-3-1").mousewheel().animate({"top":$windowWidth*0.066-scrollNull*0.02+"vw"},400)
                }
                
                console.log(scrollNull);
                console.log("22222");
            
            })
        }else if(1400 >= $windowWidth && $windowWidth > 1300){
            $(function(){
                //S1圖片滑動
                if(scrollNull > $windowWidth*0.15){   
                    $(".image-2-1").mousewheel().animate({"top":-$windowWidth*0.55- scrollNull*0.05},400)  
                }
                if(scrollNull > $windowWidth*0.4){   
                    $(".image-2-2").mousewheel().animate({"top":-$windowWidth*0.275- scrollNull*0.05},400)      
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-3").mousewheel().animate({"top":-$windowWidth*0.125- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-4").mousewheel().animate({"top":$windowWidth*0.11- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-5").mousewheel().animate({"top":$windowWidth*0.22- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-6").mousewheel().animate({"top":$windowWidth*0.44- scrollNull*0.05},400)    
                }
    
                //S2圖片滑動
                if(scrollNull > $windowWidth*1.5){   
                    $(".image-3-1").mousewheel().animate({"top":$windowWidth*0.3- scrollNull*0.05},400)    
                }
    
                //S3圖片時間差滑動
                if(scrollNull >$windowWidth*3.25){
                    $(".left-3-3").mousewheel().animate({"top":10+"vw"},400)
                }else{
                $(".left-3-3").mousewheel().animate({"top":$windowWidth*0.073-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*3.1){
                    $(".left-3-2").mousewheel().animate({"top":10+"vw"},400)
                }else{
                $(".left-3-2").mousewheel().animate({"top":$windowWidth*0.07-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*2.95){
                    $(".left-3-1").mousewheel().animate({"top":10+"vw"},400)
                }else{
                $(".left-3-1").mousewheel().animate({"top":$windowWidth*0.066-scrollNull*0.02+"vw"},400)
                }
                
                console.log(scrollNull);
                console.log("22222");
            
            })
        }else if(1300 >= $windowWidth && $windowWidth > 1200){
            $(function(){
                //S1圖片滑動
                if(scrollNull > $windowWidth*0.05){   
                    $(".image-2-1").mousewheel().animate({"top":-$windowWidth*0.59- scrollNull*0.05},400)  
                }
                if(scrollNull > $windowWidth*0.35){   
                    $(".image-2-2").mousewheel().animate({"top":-$windowWidth*0.3- scrollNull*0.05},400)      
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-3").mousewheel().animate({"top":-$windowWidth*0.125- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-4").mousewheel().animate({"top":$windowWidth*0.11- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-5").mousewheel().animate({"top":$windowWidth*0.22- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*1){   
                    $(".image-2-6").mousewheel().animate({"top":$windowWidth*0.44- scrollNull*0.05},400)    
                }
    
                //S2圖片滑動
                if(scrollNull > $windowWidth*1.5){   
                    $(".image-3-1").mousewheel().animate({"top":$windowWidth*0.3- scrollNull*0.05},400)    
                }
    
                //S3圖片時間差滑動
                if(scrollNull >$windowWidth*3.25){
                    $(".left-3-3").mousewheel().animate({"top":10+"vw"},400)
                }else{
                $(".left-3-3").mousewheel().animate({"top":$windowWidth*0.073-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*3.1){
                    $(".left-3-2").mousewheel().animate({"top":10+"vw"},400)
                }else{
                $(".left-3-2").mousewheel().animate({"top":$windowWidth*0.07-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*2.95){
                    $(".left-3-1").mousewheel().animate({"top":10+"vw"},400)
                }else{
                $(".left-3-1").mousewheel().animate({"top":$windowWidth*0.066-scrollNull*0.02+"vw"},400)
                }
                
                console.log(scrollNull);
                console.log("22222");
            
            })
        }else if(1200 >= $windowWidth && $windowWidth > 1050){
            $(function(){
                //S1圖片滑動
                if(scrollNull > $windowWidth*0.1){   
                    $(".image-2-1").mousewheel().animate({"top":-$windowWidth*0.63- scrollNull*0.05},400)  
                }
                if(scrollNull > $windowWidth*0.3){   
                    $(".image-2-2").mousewheel().animate({"top":-$windowWidth*0.29- scrollNull*0.05},400)      
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-3").mousewheel().animate({"top":-$windowWidth*0.13- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-4").mousewheel().animate({"top":$windowWidth*0.10- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-5").mousewheel().animate({"top":$windowWidth*0.22- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-6").mousewheel().animate({"top":$windowWidth*0.43- scrollNull*0.05},400)    
                }
    
                //S2圖片滑動
                if(scrollNull > $windowWidth*1.5){   
                    $(".image-3-1").mousewheel().animate({"top":$windowWidth*0.3- scrollNull*0.05},400)    
                }
    
                //S3圖片時間差滑動
                if(scrollNull >$windowWidth*3.6){
                    $(".left-3-3").mousewheel().animate({"top":10+"vw"},400)
                }else{
                $(".left-3-3").mousewheel().animate({"top":$windowWidth*0.082-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*3.4){
                    $(".left-3-2").mousewheel().animate({"top":10+"vw"},400)
                }else{
                $(".left-3-2").mousewheel().animate({"top":$windowWidth*0.079-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*3.2){
                    $(".left-3-1").mousewheel().animate({"top":10+"vw"},400)
                }else{
                $(".left-3-1").mousewheel().animate({"top":$windowWidth*0.075-scrollNull*0.02+"vw"},400)
                }
                
                console.log(scrollNull);
                console.log("22222");
            
            })
        }else if(1050 >= $windowWidth && $windowWidth > 900){
            $(function(){
                //S1圖片滑動
                if(scrollNull > $windowWidth*0.1){   
                    $(".image-2-1").mousewheel().animate({"top":-$windowWidth*0.65- scrollNull*0.05},400)  
                }
                if(scrollNull > $windowWidth*0.2){   
                    $(".image-2-2").mousewheel().animate({"top":-$windowWidth*0.35- scrollNull*0.05},400)      
                }
                if(scrollNull > $windowWidth*0.35){   
                    $(".image-2-3").mousewheel().animate({"top":-$windowWidth*0.13- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-4").mousewheel().animate({"top":$windowWidth*0.30- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-5").mousewheel().animate({"top":$windowWidth*0.45- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-6").mousewheel().animate({"top":$windowWidth*0.73- scrollNull*0.05},400)    
                }
    
                //S2圖片滑動
                if(scrollNull > $windowWidth*1.0){   
                    $(".image-3-1").mousewheel().animate({"top":$windowWidth*0.3- scrollNull*0.05},400)    
                }
    
                //S3圖片時間差滑動
                if(scrollNull >$windowWidth*4.2){
                    $(".left-3-3").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-3").mousewheel().animate({"top":$windowWidth*0.095-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*4){
                    $(".left-3-2").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-2").mousewheel().animate({"top":$windowWidth*0.09-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*3.8){
                    $(".left-3-1").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-1").mousewheel().animate({"top":$windowWidth*0.085-scrollNull*0.02+"vw"},400)
                }
                
    
                console.log("22222");
            
            })
        }else if(900 >= $windowWidth && $windowWidth > 800){
            $(function(){
                //S1圖片滑動
                if(scrollNull > $windowWidth*0.1){   
                    $(".image-2-1").mousewheel().animate({"top":-$windowWidth*0.65- scrollNull*0.05},400)  
                }
                if(scrollNull > $windowWidth*0.2){   
                    $(".image-2-2").mousewheel().animate({"top":-$windowWidth*0.35- scrollNull*0.05},400)      
                }
                if(scrollNull > $windowWidth*0.35){   
                    $(".image-2-3").mousewheel().animate({"top":-$windowWidth*0.13- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-4").mousewheel().animate({"top":$windowWidth*0.30- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-5").mousewheel().animate({"top":$windowWidth*0.45- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-6").mousewheel().animate({"top":$windowWidth*0.73- scrollNull*0.05},400)    
                }
    
                //S2圖片滑動
                if(scrollNull > $windowWidth*1.0){   
                    $(".image-3-1").mousewheel().animate({"top":$windowWidth*0.3- scrollNull*0.05},400)    
                }
    
                //S3圖片時間差滑動
                if(scrollNull >$windowWidth*4.2){
                    $(".left-3-3").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-3").mousewheel().animate({"top":$windowWidth*0.095-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*4){
                    $(".left-3-2").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-2").mousewheel().animate({"top":$windowWidth*0.09-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*3.8){
                    $(".left-3-1").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-1").mousewheel().animate({"top":$windowWidth*0.085-scrollNull*0.02+"vw"},400)
                }
                
    
                console.log("22222");
            
            })
        }else if(800 >= $windowWidth && $windowWidth > 700){
            $(function(){
                //S1圖片滑動
                if(scrollNull > $windowWidth*0.08){   
                    $(".image-2-1").mousewheel().animate({"top":-$windowWidth*0.65- scrollNull*0.05},400)  
                }
                if(scrollNull > $windowWidth*0.2){   
                    $(".image-2-2").mousewheel().animate({"top":-$windowWidth*0.35- scrollNull*0.05},400)      
                }
                if(scrollNull > $windowWidth*0.35){   
                    $(".image-2-3").mousewheel().animate({"top":-$windowWidth*0.13- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-4").mousewheel().animate({"top":$windowWidth*0.30- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-5").mousewheel().animate({"top":$windowWidth*0.45- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-6").mousewheel().animate({"top":$windowWidth*0.9- scrollNull*0.05},400)    
                }
    
                //S2圖片滑動
                if(scrollNull > $windowWidth*1.0){   
                    $(".image-3-1").mousewheel().animate({"top":$windowWidth*0.3- scrollNull*0.05},400)    
                }
    
                //S3圖片時間差滑動
                if(scrollNull >$windowWidth*4.6){
                    $(".left-3-3").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-3").mousewheel().animate({"top":$windowWidth*0.11-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*4.4){
                    $(".left-3-2").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-2").mousewheel().animate({"top":$windowWidth*0.105-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*4.1){
                    $(".left-3-1").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-1").mousewheel().animate({"top":$windowWidth*0.1-scrollNull*0.02+"vw"},400)
                }
                
    
                console.log("22222");
            
            })
        }else if(700 >= $windowWidth && $windowWidth > 600){
            $(function(){
                //S1圖片滑動
                if(scrollNull > $windowWidth*0.05){   
                    $(".image-2-1").mousewheel().animate({"top":-$windowWidth*0.55- scrollNull*0.05},400)  
                }
                if(scrollNull > $windowWidth*0.1){   
                    $(".image-2-2").mousewheel().animate({"top":-$windowWidth*0.35- scrollNull*0.05},400)      
                }
                if(scrollNull > $windowWidth*0.2){   
                    $(".image-2-3").mousewheel().animate({"top":-$windowWidth*0.13- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-4").mousewheel().animate({"top":$windowWidth*0.30- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-5").mousewheel().animate({"top":$windowWidth*0.45- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-6").mousewheel().animate({"top":$windowWidth*0.75- scrollNull*0.05},400)    
                }
    
                //S2圖片滑動
                if(scrollNull > $windowWidth*1.0){   
                    $(".image-3-1").mousewheel().animate({"top":$windowWidth*0.3- scrollNull*0.05},400)    
                }
    
                //S3圖片時間差滑動
                if(scrollNull >$windowWidth*4.6){
                    $(".left-3-3").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-3").mousewheel().animate({"top":$windowWidth*0.11-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*4.4){
                    $(".left-3-2").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-2").mousewheel().animate({"top":$windowWidth*0.105-scrollNull*0.02+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*4.1){
                    $(".left-3-1").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-1").mousewheel().animate({"top":$windowWidth*0.1-scrollNull*0.02+"vw"},400)
                }
                
    
                console.log("22222");
            
            })
        }else if(600 >= $windowWidth && $windowWidth > 500){
            $(function(){
                //S1圖片滑動
                if(scrollNull > $windowWidth*0.01){ 
                    $(".image-2-1").mousewheel().animate({"top":-$windowWidth*0.62- scrollNull*0.05},400)  
                }
                if(scrollNull > $windowWidth*0.1){   
                    $(".image-2-2").mousewheel().animate({"top":-$windowWidth*0.35- scrollNull*0.05},400)      
                }
                if(scrollNull > $windowWidth*0.2){   
                    $(".image-2-3").mousewheel().animate({"top":-$windowWidth*0.13- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-4").mousewheel().animate({"top":$windowWidth*0.30- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-5").mousewheel().animate({"top":$windowWidth*0.45- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-6").mousewheel().animate({"top":$windowWidth*0.75- scrollNull*0.05},400)    
                }
    
                //S2圖片滑動
                if(scrollNull > $windowWidth*1.0){   
                    $(".image-3-1").mousewheel().animate({"top":$windowWidth*0.3- scrollNull*0.05},400)    
                }
    
                //S3圖片時間差滑動
                if(scrollNull >$windowWidth*5.4){
                    $(".left-3-3").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-3").mousewheel().animate({"top":$windowWidth*0.155-scrollNull*0.024+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*5.2){
                    $(".left-3-2").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-2").mousewheel().animate({"top":$windowWidth*0.135-scrollNull*0.022+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*4.4){
                    $(".left-3-1").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-1").mousewheel().animate({"top":$windowWidth*0.1-scrollNull*0.02+"vw"},400)
                }
                
    
                console.log("22222");
            
            })
        }else if(500 >= $windowWidth && $windowWidth > 400){
            $(function(){
                //S1圖片滑動
                if(scrollNull >= $windowWidth*0){ 
                    $(".image-2-1").mousewheel().animate({"top":-$windowWidth*0.65- scrollNull*0.05},400)  
                }
                if(scrollNull > $windowWidth*0.1){   
                    $(".image-2-2").mousewheel().animate({"top":-$windowWidth*0.35- scrollNull*0.05},400)      
                }
                if(scrollNull > $windowWidth*0.2){   
                    $(".image-2-3").mousewheel().animate({"top":-$windowWidth*0.13- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-4").mousewheel().animate({"top":$windowWidth*0.30- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-5").mousewheel().animate({"top":$windowWidth*0.45- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-6").mousewheel().animate({"top":$windowWidth*1.3- scrollNull*0.05},400)    
                }
    
                //S2圖片滑動
                if(scrollNull > $windowWidth*1.0){   
                    $(".image-3-1").mousewheel().animate({"top":$windowWidth*0.3- scrollNull*0.05},400)    
                }
    
                //S3圖片時間差滑動
                if(scrollNull >$windowWidth*5.8){
                    $(".left-3-3").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-3").mousewheel().animate({"top":$windowWidth*0.18-scrollNull*0.024+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*5.6){
                    $(".left-3-2").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-2").mousewheel().animate({"top":$windowWidth*0.155-scrollNull*0.022+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*4.4){
                    $(".left-3-1").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-1").mousewheel().animate({"top":$windowWidth*0.1-scrollNull*0.02+"vw"},400)
                }
                
    
                console.log(scrollNull);
            
            })
        }else if(400 >= $windowWidth && $windowWidth > 350){
            $(function(){
                //S1圖片滑動
                if(scrollNull >= $windowWidth*0){ 
                    $(".image-2-1").mousewheel().animate({"top":-$windowWidth*0.62- scrollNull*0.05},400)  
                }
                if(scrollNull > $windowWidth*0.1){   
                    $(".image-2-2").mousewheel().animate({"top":-$windowWidth*0.35- scrollNull*0.05},400)      
                }
                if(scrollNull > $windowWidth*0.2){   
                    $(".image-2-3").mousewheel().animate({"top":-$windowWidth*0.13- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-4").mousewheel().animate({"top":$windowWidth*0.30- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-5").mousewheel().animate({"top":$windowWidth*0.45- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-6").mousewheel().animate({"top":$windowWidth*1.4- scrollNull*0.05},400)    
                }

                //S2圖片滑動
                if(scrollNull > $windowWidth*1.0){   
                    $(".image-3-1").mousewheel().animate({"top":$windowWidth*0.3- scrollNull*0.05},400)    
                }
    
                //S3圖片時間差滑動
                if(scrollNull >$windowWidth*6.2){
                    $(".left-3-3").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-3").mousewheel().animate({"top":$windowWidth*0.18-scrollNull*0.024+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*5.9){
                    $(".left-3-2").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-2").mousewheel().animate({"top":$windowWidth*0.155-scrollNull*0.022+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*4.4){
                    $(".left-3-1").mousewheel().animate({"top":8+"vw"},400)
                }else{
                $(".left-3-1").mousewheel().animate({"top":$windowWidth*0.1-scrollNull*0.02+"vw"},400)
                }
                
    
                console.log(scrollNull);
            
            })
        }else if(350 >= $windowWidth && $windowWidth > 300){
            $(function(){
                //S1圖片滑動
                if(scrollNull >= $windowWidth*0){ 
                    $(".image-2-1").mousewheel().animate({"top":-$windowWidth*0.62- scrollNull*0.05},400)  
                }
                if(scrollNull > $windowWidth*0.1){   
                    $(".image-2-2").mousewheel().animate({"top":-$windowWidth*0.35- scrollNull*0.05},400)      
                }
                if(scrollNull > $windowWidth*0.2){   
                    $(".image-2-3").mousewheel().animate({"top":-$windowWidth*0.13- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-4").mousewheel().animate({"top":$windowWidth*0.30- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-5").mousewheel().animate({"top":$windowWidth*0.45- scrollNull*0.05},400)    
                }
                if(scrollNull > $windowWidth*0.5){   
                    $(".image-2-6").mousewheel().animate({"top":$windowWidth*1.85- scrollNull*0.05},400)    
                }
    
                //S2圖片滑動
                if(scrollNull > $windowWidth*1.0){   
                    $(".image-3-1").mousewheel().animate({"top":$windowWidth*0.3- scrollNull*0.05},400)    
                }
    
                //S3圖片時間差滑動
                if(scrollNull >$windowWidth*7.8){
                    $(".left-3-3").mousewheel().animate({"top":8+"vw"},400)
                }else{
                    $(".left-3-3").mousewheel().animate({"top":$windowWidth*0.23-scrollNull*0.024+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*7.6){
                    $(".left-3-2").mousewheel().animate({"top":8+"vw"},400)
                }else{
                    $(".left-3-2").mousewheel().animate({"top":$windowWidth*0.2-scrollNull*0.022+"vw"},400)
                }
    
                if(scrollNull > $windowWidth*4.4){
                    $(".left-3-1").mousewheel().animate({"top":8+"vw"},400)
                }else{
                    $(".left-3-1").mousewheel().animate({"top":$windowWidth*0.1-scrollNull*0.02+"vw"},400)
                }
                
    
                console.log(scrollNull);
            
            })
        }
    }
    
    //防抖
    function debounce(fn){
        var timerID=null
        return function(){
        var arg=arguments[0]   //获取事件
            if(timerID){
            clearTimeout (timerID)
            }
            timerID=setTimeout( function(){
            fn(arg)              //事件传入函数
            },100)
        }
    }
    
    $(document).on("scroll",debounce(move));
    
    //S2滾動標題
    $(function(){
        var $windowWidth = window.innerWidth;
        //0.定義變量保存偏移位
        var offset =0;
        //1.讓圖片滾動起來
        var timer ;
        function autoplay(){
            timer=setInterval(function(){
            if($windowWidth >1000){
                offset += 1
                if(offset >= 1400){
                offset = 0;
                }
            }else if(1000 >= $windowWidth && $windowWidth > 800){
                offset += 0.9
                if(offset >= 1000){
                    offset = 0;
                }
            }else if(800 >= $windowWidth && $windowWidth > 600){
                offset += 0.8
                if(offset >= 800){
                    offset = 0;
                }
            }else if(600 >= $windowWidth && $windowWidth > 450){
                offset += 0.7
                if(offset >= 600){
                    offset = 0;
                }
            }else if(450 >= $windowWidth && $windowWidth > 350){
                offset += 0.6
                if(offset >= 500){
                    offset = 0;
                }
            }else if(350 >= $windowWidth ){
                offset += 0.5
                if(offset >= 400){
                    offset = 0;
                }
            }
            $(".title-l-3 ul").css("marginLeft",offset)
        },25);
        }
        autoplay();
        //2.監聽li的移入和移出事件
        $(".title-l-3 ul li").hover(function(){
            //停止滾動
            clearInterval(timer);
        },function(){
            //繼續滾動
            autoplay();
        });
    
        
    })


});



