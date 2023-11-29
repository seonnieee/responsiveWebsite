$(function(){
            $("#burger_menu").click(function(){
                $("#toggle_menu2").slideToggle();
            });
        });

        $(window).resize(function(){
            if(window.innerWidth>=599){
                $("#toggle_menu2").hide();
            };
        });
