"use strict";

// Pour écrire notre pseudo
let userName=prompt("Entrez votre pseudo :");
document.querySelector('.playerName').innerHTML=userName;

// Bouton qui permet de faire une nouvelle partie, elle rafraichit la page
let boutonRefaireUneNouvellePartie = document.querySelector('.reset');
console.log(boutonRefaireUneNouvellePartie)

function reset () {
    location.reload();
}

boutonRefaireUneNouvellePartie.addEventListener('click',reset);

// Bouton qui reset le score 
let boutonResetScore = document.querySelector('.resetScore');

function resetScore (){
    compteurOrdi=0;
    compteurPlayer=0;
    scoreOrdi.innerHTML=compteurOrdi;
    scorePlayer.innerHTML=compteurPlayer;
}
boutonResetScore.addEventListener('click',resetScore);



// Pour le score du joueur et de l'ordi, je l'initialise à zéro
let compteurOrdi=0;
let compteurPlayer=0;

// je récupère les parties ou je vais pouvoir mettre les scores, et je met le score initiale qui est de zéro pour le joueur et l'ordi
let scoreOrdi=document.querySelector('.scoreOrdi');
scoreOrdi.innerHTML=0;
console.log(scoreOrdi);

let scorePlayer=document.querySelector('.scorePlayer');
scorePlayer.innerHTML=0;
console.log(scorePlayer);

// configuration de pierre
let pierre=document.querySelector('.pierre').getAttribute('src');
console.log(pierre);

let pierreClick=document.querySelector('.pierre')
console.log(pierreClick);

// configuration de feuille
let feuille=document.querySelector('.feuille').getAttribute('src');
console.log(feuille);

let feuilleClick=document.querySelector('.feuille')
console.log(feuilleClick);

// configuration de ciseaux
let ciseaux=document.querySelector('.ciseaux').getAttribute('src');
console.log(ciseaux);

let ciseauxClick=document.querySelector('.ciseaux')
console.log(ciseauxClick);


// Je créer une variable ordi et le choix de l'ordi 
let ordi = "ordi";
let choixOrdi;

// Je mets mes évènements au clique d'un des trois images pierre, feuille et ciseaux. Pour les fonctions, je vais les créer juste après avec des conditions (qui sont simplement les règles du jeu du shifumi)
pierreClick.addEventListener('click',testPierre);
feuilleClick.addEventListener('click',testFeuille);
ciseauxClick.addEventListener('click',testCiseaux);


// Les différentes options possibles SI je clique sur le choix/l'image "pierre"
function testPierre(){
    
    // formule qui consiste à déterminer au hasard le choix de l'ordi, ici le choix de l'ordi sera soit 1 2 ou 3. Dans le choix 1 on le traduira par pierre, dans le choix 2 on le traduira par feuille et ainsi de suite
    choixOrdi = (Math.floor(Math.random() * 3 + 1));
    switch(ordi){
        case 1:
            choixOrdi = "pierre";
        break;
    
        case 2:
            choixOrdi = "feuille";
        break;
    
        case 3:
            choixOrdi = "ciseaux";
        break;
    }
    console.log(choixOrdi);
    if(choixOrdi == 1){
        document.querySelector('.ordi').src=("img/pierre.webp");
        document.querySelector('.resultat').innerHTML="Egalité !";
        document.querySelector('.resultat').style.backgroundColor='grey';
    }
    else{

        switch(pierreClick){
            case pierreClick:
                if(choixOrdi == 2){
                    document.querySelector('.ordi').src=("img/feuille.webp");
                    document.querySelector(".resultat").innerHTML="Feuille ! "+userName+" a perdu !";
                    document.querySelector(".resultat").style.backgroundColor='red';
                    compteurOrdi++;
                    scoreOrdi.innerHTML=compteurOrdi;
                }

                else{
                    document.querySelector('.ordi').src=("img/ciseaux.webp")
                    document.querySelector('.resultat').innerHTML="Ciseaux ! "+userName+" a gagné !";
                    document.querySelector('.resultat').style.backgroundColor='green';
                    compteurPlayer++;
                    scorePlayer.innerHTML=compteurPlayer;
                }
            break;
        }
    }
}

// Les différentes options possibles SI je clique sur le choix/l'image "feuille"
function testFeuille(){
    
    choixOrdi = (Math.floor(Math.random() * 3 + 1));

    switch(ordi){

        case 1:
            choixOrdi = "pierre";
        break;
    
        case 2:
            choixOrdi = "feuille";
        break;
    
        case 3:
            choixOrdi = "ciseaux";
        break;
    }
    console.log(choixOrdi);
    if(choixOrdi == 2){
        document.querySelector('.ordi').src=("img/feuille.webp");
        document.querySelector('.resultat').innerHTML="Egalité !";
        document.querySelector('.resultat').style.backgroundColor='grey';
    }
    else{
        switch(feuilleClick){
            case feuilleClick:
                if(choixOrdi == 3){
                    document.querySelector('.ordi').src=("img/ciseaux.webp");
                    document.querySelector('.resultat').innerHTML="Ciseaux ! "+userName+" a perdu !";//rien ne se passe
                    document.querySelector('.resultat').style.backgroundColor='red';
                    compteurOrdi++;
                    scoreOrdi.innerHTML=compteurOrdi;
                }
                else{
                    document.querySelector('.ordi').src=("img/pierre.webp")
                    document.querySelector('.resultat').innerHTML="Pierre ! "+userName+" a gagné !";
                    document.querySelector('.resultat').style.backgroundColor='green';
                    compteurPlayer++;
                    scorePlayer.innerHTML=compteurPlayer;
                }
            break;
        }
    }
}

// Les différentes options possibles SI je clique sur le choix/l'image "ciseaux"
function testCiseaux(){
    
    choixOrdi = (Math.floor(Math.random() * 3 + 1));

    switch(ordi){

        case 1:
            choixOrdi = "pierre";
        break;
    
        case 2:
            choixOrdi = "feuille";
        break;
    
        case 3:
            choixOrdi = "ciseaux";
        break;
    }

    console.log(choixOrdi);

    if(choixOrdi == 3){
        document.querySelector('.ordi').src=("img/ciseaux.webp");
        document.querySelector('.resultat').innerHTML="Egalité !";
        document.querySelector('.resultat').style.backgroundColor='grey';
    }

    else{

        switch(ciseauxClick){
            case ciseauxClick:
                if(choixOrdi == 1){
                    document.querySelector('.ordi').src=("img/pierre.webp");
                    document.querySelector('.resultat').innerHTML="Pierre ! "+userName+" a perdu !";
                    document.querySelector('.resultat').style.backgroundColor='red';
                    compteurOrdi++;
                    scoreOrdi.innerHTML=compteurOrdi;

                }

                else{
                    document.querySelector('.ordi').src=("img/feuille.webp")
                    document.querySelector('.resultat').innerHTML="Feuille ! "+userName+" a gagné !";
                    document.querySelector('.resultat').style.backgroundColor='green';
                    compteurPlayer++;
                    scorePlayer.innerHTML=compteurPlayer;

                }
            break;
        }
    }
}