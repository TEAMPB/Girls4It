/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* normale javascript funktionen sind immer so aufgebaut:
 * 
 *  function <hier einen funktionsnamen einfügen>{
 *     tue etwas;
 *  }
 *  
 */

function maleBereichRot(){
    /* document bezeichnet den Webseiten-Rahmen */
    /* den gefundenen Bereich in eine Variable speichern */
    var malBereich = document.getElementById('malbarerBereich');
    
    /* wenn der Malbereich nicht leer ist, färbe ihn um */
    if(malBereich !== null){
        malBereich.style.backgroundColor = 'red';
    }
    
}

function maleBereichGruenMitjQuery(){
    /* jQuery sucht mit # nach ID's und mit . nach Klassen */
    /* jQuery kann mit css einen beliebigen style Parameter abändern*/
    $('#malbarerBereich').css('background-color','green');
}