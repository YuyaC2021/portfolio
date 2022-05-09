let app=angular.module("app",[]);
app.controller("appctr",function($scope,$timeout){
    let tmpname="";
    let array={
        name:"Yuya Kawamoto",
        job:"Web developer"
    };

    $("#project_model").hide();
    $("#projects").hide();
    $("#nav_icon_drop").hide();
    
    let letter=0;
    let text="";
    var letter2;
    let count=0;
    const lettering=()=>{
        $(".index").css({opacity:"1"});
        setTimeout(()=>{
            $(".index").css({opacity:"0"});
            if(count%2==0){
                if(letter<array.name.length){
                    text+=array.name[letter];
                    $("#sutitling").html(text);
                    letter++;
                    setTimeout(lettering,150);
                }
                else if(letter==array.name.length){
                    letter++;
                    letter2=array.name.length;
                    setTimeout(lettering,1000);
                }
                else if(letter>array.name.length){
                    letter++;
                    if(letter2>0){
                        text=text.slice(0,-1);
                        $("#sutitling").html(text);
                        letter2--;
                        setTimeout(lettering,100);
                    }
                    else{
                        letter=0;
                        count++;
                        setTimeout(lettering,1000);
                    }
                }
            }
            else{
                if(letter<array.job.length){
                    text+=array.job[letter];
                    $("#sutitling").html(text);
                    letter++;
                    setTimeout(lettering,150);
                }
                else if(letter==array.job.length){
                    letter++;
                    letter2=array.job.length;
                    setTimeout(lettering,1000);
                }
                else if(letter>array.job.length){
                    letter++;
                    if(letter2>0){
                        text=text.slice(0,-1);
                        $("#sutitling").html(text);
                        letter2--;
                        setTimeout(lettering,100);
                    }
                    else{
                        letter=0;
                        count++;
                        setTimeout(lettering,1000);
                    }
                }
            }
        },100);
    }

    lettering();

    $("#nav_icon_drop_list_resume").hover(()=>{$("#popups").css("display","block");},()=>{$("#popups").css("display","none");});
    $(window).on("scroll",function(){
        if($(document).scrollTop()>$("#biography").offset().top){ 
            $("#nav_icon").show(1000);
        }
        if($(document).scrollTop()<$("#biography").offset().top){ 
            $("#nav_icon").hide(1000);
            $("#nav_icon_drop").hide(500);
        }

        if($(document).scrollTop()>$("#BIO").offset().top-200){ 
            $(".bio").animate({"top":"0","opacity":"1"},1000);
            $(".titles")[0].classList.add("togglingShow");
            $("#bioContents")[0].classList.add("contentsShow");
        }
        if($(document).scrollTop()<$("#BIO").offset().top-200){ 
            $(".titles")[0].classList.remove("togglingShow");
            $("#bioContents")[0].classList.remove("contentsShow");
        }
        
        if($(document).scrollTop()>$("#firstSectionH1").offset().top-200){ 
            $(".firstSectionElements").animate({"left":"0","opacity":"1"},1000);
            $(".titles")[1].classList.add("togglingShow");
        }

        if($(document).scrollTop()<$("#firstSectionH1").offset().top-200){ 
            $(".titles")[1].classList.remove("togglingShow");
        }
        
        if($(document).scrollTop()>$("#secondSectionH1").offset().top-200){ 
            $(".secondSectionElements").animate({"opacity":"1"},1000);
            $(".titles")[2].classList.add("togglingShow");
        }
        if($(document).scrollTop()<$("#secondSectionH1").offset().top-200){ 
            $(".titles")[2].classList.remove("togglingShow");
        }
        
        if($(document).scrollTop()>$("#thirdSectionH1").offset().top-200){ 
            $(".thirdSectionElements i").animate({"opacity":"1"},1000);
            $(".titles")[3].classList.add("togglingShow");
        }
        if($(document).scrollTop()<$("#thirdSectionH1").offset().top-200){ 
            $(".titles")[3].classList.remove("togglingShow");
        }

        if($(document).scrollTop()+$(window).height()>$("footer").offset().top+50){ 
            $("#sns")[0].classList.add("ani");
            console.log( $("#sns")[0]);
        }
        if($(document).scrollTop()+$(window).height()<$("footer").offset().top+50){ 
            $("#sns")[0].classList.remove("ani");
        }

    });


    $(window).on("click",(e)=>{
        let close_count=0;
      
        if(e.target==$("#nav_icon_img")[0]){
            $("#nav_icon_drop").toggle(500);
        }
        for(let i=0;i<$("#nav_icon_drop ul li").length;i++){
            if(e.target==$("#nav_icon_drop ul li")[i] || e.target==$("#nav_icon_drop ul li a")[i] || e.target==$("#nav_icon_drop")[0] || e.target==$("#nav_icon_drop ul")[0] || e.target==$("#nav_icon_drop ul li span")[0]){
                close_count=1;
                break;
            }
            else{
                close_count=0;
            }
        }  
        if(close_count==0 && e.target!=$("#nav_icon_img")[0]){
            $("#nav_icon_drop").hide(500);
        }
        
        let close_pro=0;
        for(let i=0;i<$(".close_project").length;i++){
            
            if(e.target==$(".close_project")[i]){
                close_pro=1;
                break;
            }
            else{
                close_pro=0;
            }
        }  
        for(let i=0;i<$(".project_img").length;i++){
            if(close_pro==0 && e.target!=$(".project_img")[i]){
                $("#project_model").hide();
            }
            else if(e.target==$(".project_img")[i]){
                $("#project_model").show();
                $("#projects").show();
        
                $(".project_dashboard").hide();
                $(".project_bakery").hide();
                $(".project_register").hide();
                $(".project_blog").hide();
                
                if(e.target.id=="img_dash"){
                    $(".project_dashboard").show();
                    if($(window).width()<825){
                        $("#project_model").css("top",`${dash}px`);
                    }
                    else{
                        $("#project_model").css("top","0");
                    }
                    $(document).scrollTop($("#dash").offset().top);
                }
                else if(e.target.id=="img_bakery"){
                    $(".project_bakery").show();
                    if($(window).width()<825){
                        $("#project_model").css("top",`${bakery}px`);
                    }
                    else{
                        $("#project_model").css("top","0");
                    }
                    $(document).scrollTop($("#bakery").offset().top);

                }
                else if(e.target.id=="img_login"){
                    $(".project_register").show();
                    if($(window).width()<825){
                        $("#project_model").css("top",`${login}px`);
                    }
                    else{
                        $("#project_model").css("top","0");
                    }
                    $(document).scrollTop($("#login").offset().top);
                }
                else if(e.target.id=="img_blog"){
                    $(".project_blog").show();
                    if($(window).width()<825){
                        $("#project_model").css("top",`${blog}px`);
                    }
                    else{
                        $("#project_model").css("top","0");
                    }
                    $(document).scrollTop($("#blog").offset().top);
                }
                break;
            }
        }
    });

    $("#hide_model").on("click",function(){
        $("#project_model").hide();
    });

    const dash=$("#dash").offset().top-$("#model_contents").offset().top;
    const bakery=$("#bakery").offset().top-$("#model_contents").offset().top;
    const login=$("#login").offset().top-$("#model_contents").offset().top;
    const blog=$("#blog").offset().top-$("#model_contents").offset().top;

});


