/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function aendereFarbeWithJQuery(farbe){
    $('#colourful-div').css('background-color',farbe);
}

function aendereFarbe(farbe){
    var div = document.getElementById('colourful-div');
    div.style.backgroundColor = farbe;
}

function faerbeRot(){
    aendereFarbe('RED');
}

function faerbeBlau(){
    aendereFarbe('BLUE');
}

function faerbeGruen(){
    aendereFarbe('GREEN');
}
