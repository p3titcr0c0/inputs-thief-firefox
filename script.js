"use strict";

/*************************************************************/
/*                                                           */
/*----------------clef 1001->1010 = variables----------------*/
/*                                                           */
/* clef1000 = liste de tout les inputs                       */
/* clef1001 = site visité actuellement                       */
/* clef1002 = liste des values des inputs dans clef1000      */
/* clef1003 = objet Date()                                   */
/* clef1004 = liste -> [date+heure, site, [tous les inputs]] */
/* clef1005 =                                                */
/*                                                           */
/*----------clef 1001->1010 = variables temporaires----------*/
/*                                                           */
/* clef9991 = compteur de boucle (temporaire)                */
/* clef9992 = ancienne variable clef1004                     */
/* clef9993 =                                                */
/*                                                           */
/*--------------fonction 1001->1010 = fonctions--------------*/
/*                                                           */
/* funct1001 = creation complete de la clef1005              */
/* funct1002 =                                               */
/*                                                           */
/*************************************************************/

document.addEventListener('click', funct1001);
document.addEventListener("keydown", function (event){if (event.keyCode == 13){funct1001()}});

function funct1001(){
	var clef9992 = [null, null, null];
	var clef1000 = Array.prototype.slice.call(document.getElementsByTagName('input'),0);
	var clef1001 = document.location.href;
	var clef1002 = [];
	for (let clef9991=0; clef9991!=clef1000.length ; clef9991++){
		if (clef1000[clef9991].getAttribute("type") != "hidden"){
			clef1002.push(clef1000[clef9991].value);
		}
	}
	const clef1003 = new Date();
	var clef1004 = [];
	/*var clef1004 = [clef1003.getDate()+"/"+(clef1003.getMonth()+1)+"/"+(clef1003.getYear()+1900)+" | "+clef1003.getHours()+":"+clef1003.getMinutes()];
	*/clef1004.push(clef1001, clef1002);
	if (funct1002(clef1004, clef9992) == true){
		console.log(clef1004);
	}
}

function funct1002(clef9998,clef9999){
	if (clef9998[2] != clef9999[2]){
		return true;
	} else {
		return false;
	}
}