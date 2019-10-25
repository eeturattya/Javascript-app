//Ois pitäny nimetä englanniks heti alussa. En osaa enää itsekään tulkita 
//ilman hetken tuijottamista

//Luodaan poistonappi jokaisen listaitemin pohjalle
var poisto = document.getElementsByTagName("LI");
var i;
//luuppi tarkastamaan olemassa olevien listojen määrän
for (i = 0; i < poisto.length; i++) {
    var nappula = document.createElement("button");
    var txt = document.createTextNode("Delete");
    nappula.className = "poisto";
    nappula.appendChild(txt);
    poisto[i].appendChild(nappula);
} 

//annetaan muuttuja joka etsii poistonimiset nappulat
var sulje = document.getElementsByClassName("poisto");
var i;
var kosketus = document.getElementsByTagName("li");




//Funktio jolla syötetään rivejä!
function adding() {
//Otetaan inputkentästä syöte
    var syote = document.getElementById("text").value;
    var teksti= document.createTextNode(syote);
    var newtask = document.createElement("LI");

//Listaan syötetään käyttäjän teksti
    newtask.appendChild(teksti);
//Alert jos kenttä on tyhjä! 
    if (syote === '' ) {
        alert("Jotain taisi unohtua nyt!");
        } else {
 //alapuolella on varsinainen syöttökomento!
            var list = document.getElementById("lista")
//syöttää uusimman merkinnän aina ylimmäksi
            list.insertBefore(newtask, list.childNodes[0]);
            

            };
            //Poistonappi tyhjentämään rivin
            var nappula = document.createElement("button");
            var txt = document.createTextNode("Poista");
            nappula.className = "poisto";
            nappula.appendChild(txt);
            newtask.appendChild(nappula);
            //Luuppi tarkastaa paljonko rivejä on 
            for (i = 0; i < sulje.length; i++) {
                sulje[i].onclick = function() {
                    var div = this.parentElement;
                    div.style.display = "none";
                    }
                }
//tyhjentää kentän syötön jälkeen
    var syote = document.getElementById("text").value ="";
}



    



 




  
    
  