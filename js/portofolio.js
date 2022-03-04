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
 
    }

    lettering();

    $("#nav_icon_drop_list_resume").hover(()=>{$("#popups").css("display","block");},()=>{$("#popups").css("display","none");});

    $(window).on("scroll",function(){
        if($(document).scrollTop()>$("#biography").offset().top){ 
            $("#nav_icon").show(1000);
        }
        if($(document).scrollTop()<$("#biography").offset().top){ 
            $("#nav_icon").hide(1000);
        }

        if($(document).scrollTop()>$("#BIO").offset().top-200){ 
            $(".bio").animate({"top":"0","opacity":"1"},1000);
        }
        
        if($(document).scrollTop()>$("#firstSectionH1").offset().top-200){ 
            $(".firstSectionElements").animate({"left":"0","opacity":"1"},1000);
        }
        
        if($(document).scrollTop()>$("#secondSectionH1").offset().top-200){ 
            $(".secondSectionElements").animate({"opacity":"1"},1000);
        }
        
        if($(document).scrollTop()>$("#thirdSectionH1").offset().top-200){ 
            $(".thirdSectionElements i").animate({"opacity":"1"},1000);
        }

        if($(document).scrollTop()>$("footer").offset().top-300){ 
            $(".sns").animate({"bottom":"0","opacity":"1"},1000);
        }

    });

    $(window).on("click",(e)=>{
        console.log(e.target);
       
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
                console.log("asas");
                $("#project_model").hide();
            }
            else if(e.target==$(".project_img")[i]){
                console.log("das");
                $("#project_model").show();
                $("#projects").show();
        
                $(".project_dashboard").hide();
                $(".project_bakery").hide();
                $(".project_register").hide();
                
                if(e.target.id=="img_dash"){
                    $(".project_dashboard").show();
                    if($(window).width()<825){
                        $("#project_model").css("top","0");
                    }
                    else{
                        $("#project_model").css("top","0");
                    }
                }
                else if(e.target.id=="img_bakery"){
                    $(".project_bakery").show();
                    if($(window).width()<825){
                        $("#project_model").css("top","200px");
                    }
                    else{
                        $("#project_model").css("top","0");
                    }
                }
                else if(e.target.id=="img_login"){
                    $(".project_register").show();
                    if($(window).width()<825){
                        $("#project_model").css("top","500px");
                    }
                    else{
                        $("#project_model").css("top","0");
                    }
                }
                break;
            }
        }
    });

    $("#hide_model").on("click",function(){
        $("#project_model").hide();
    });
});

