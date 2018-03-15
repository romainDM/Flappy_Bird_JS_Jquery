function bougerHaut(){
$(".bird").animate({marginBottom:'+=100px'}, speed=200, easing="swing");
     }

function bougerBas(){
$(".bird").animate({marginTop:'+=100px'}, speed=200, easing="swing");
     }

function bougerGauche(){
$(".bird").animate({marginRight:'+=100px'}, speed=200, easing="swing");
     }

function bougerDroite(){
$(".bird").animate({marginLeft:'+=100px'}, speed=200, easing="swing");
     }

function tuyauAnimation(){
  $("#tuyau").animate({marginRight:'+=1000px'},speed=4000 , easing="linear");
}

tuyauAnimation();





$(document).keyup(function(touche){ // on écoute l'évènement keyup()
           var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
           if(appui == 38){
               bougerHaut();
           }
});


$(document).keyup(function(touche){ // on écoute l'évènement keyup()
            var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
            if(appui == 40){
                bougerBas();
           }
});


$(document).keyup(function(touche){ // on écoute l'évènement keyup()
            var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
            if(appui == 37){
                bougerGauche();
           }
});


$(document).keyup(function(touche){ // on écoute l'évènement keyup()
            var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
            if(appui == 39){
                bougerDroite();
           }
});
