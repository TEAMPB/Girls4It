
/*Bei Klick auf die Slideshow soll direkt das nächste Bild angezeigt werden:
 * 
 * $('#ud_slider').click(function(){
    	if(Objekt.next().hasClass("ud_slide")){
            ud_slide(Objekt.next());
        } else {
            ud_slide($('#ud_slider').children('.ud_slide').first());
        }
}); */

$(document).ready(function(e) {
    
   
    ud_slide($('#ud_slider').children('.ud_slide').first());
   
    function ud_slide(Objekt) {
        $(Objekt).slideDown(1000);
        $(Objekt).children('h3').animate({left: '80px'}, 800);
        $(Objekt).children('h3').animate({left: '90px'}, 1000);
        $(Objekt).children('h4').animate({left: '70px'}, 300);
        $(Objekt).children('h4').animate({left: '80px'}, 500);
        
        
        
        $('#ud_load').animate({width: '100%'}, 5000, function(e){
            
            $(Objekt).children('h3').animate({left: '80px'}, 600);
            $(Objekt).children('h3').animate({left: '-750px'}, 200);
            $(Objekt).children('h4').animate({left: '90px'}, 800);
            $(Objekt).children('h4').animate({left: '-750px'}, 300, function(){
                
                $(Objekt).slideUp(1000);    
                
                $('#ud_load').css('width', '0px');
                
                
                
                if(Objekt.next().hasClass("ud_slide")){
                    ud_slide(Objekt.next());
                } else {
                    ud_slide($('#ud_slider').children('.ud_slide').first());
                }
            });
            
        });
    }
});


