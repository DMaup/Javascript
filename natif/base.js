// ecrire dans la console

console.log("hello log");
// alert("Hello!");

//déclaration de variables
var number = 5;
var boolean = true;
var booleanf = false;
var str = 'test';
var array = [];
var mixedarray = ["test", 5, []];
var colors = {
        red: '#f00',
        green: '#0f0',
        blue: '#00f'
};
var vehicle ={
        car:{
            vw: '400'
        },
        truck:{
            semi:'500'
        }
    };

//opérateurs

var add = 1 + 2 - 4*5/8;
var concat = 'ma voiture est une ' + vehicle.truck.semi;
var stroperation = 1 + '2';
var iterator = 0;
iterator++; // add 1
iterator--; //remove 1
var numeric = 0;
numeric = numeric + 4;
numeric += 4;//add value to itself ou * - + / 
var modulo = 10%3;
var math = Math.round(0.5); //arrondi
    math = Math.floor(2.5); //inférieur
    math = Math.ceil(25);   //supérieur
    math = Math.sqrt(25);   //racine carrée
    math = 5**3;            //puissance

    // opératuer de comparaison
    var a = true;
    var b = 1;
    var c = false;


if( a || b ){
    console.log('ou');
}  //ou
if( a && b ){
    console.log('et');
}  //et
if( a == b ){
    console.log('égal');
}  //égal
if( a === b ){
    console.log('égal');
}  //operateur typé
if( a != b ){
    console.log('différent');
}
if( a !== b ){
    console.log('différent typé');
}
if( !a ){
    console.log('not');
}   //si not a
if( a ){
    console.log('si')
}
else if( b ){
    console.log('si non');
}
else if( c ){
    console.log('si non');
}
else{
    console.log('sinon');
}
// boulcles
var counter = 0;
while( counter <3) {
    console.log(counter);
    counter++;
}
 for(var i=0; i<5; i++){
     console.log('i=' + i );
}

var tab = [2,4,6,8,10];

for (var j=0; j < tab.length; j++){ // tab.lenght retourne la longueur du tableau
   
    }
for (var j=0; j < tab.length; j++){ // tab.lenght retourne la longueur du tableau
        console.log(tab[j]);
}

for(var element of tab){// parcourt tous les elements du tableau
    
    if(element==4){
        continue;
    }
    if(element==8){
        break;
    }
        console.log(element);
}

for(var key in tab){// parcourt les clés du tableau
    console.log(key);
}

//fonctions

function addition( arg1, arg2){
    return arg1 + arg2;
}

var resultat = addition(4,6);
console.log(resultat);

var soustraction = function(arg1, arg2){
    return arg1 - arg2;
}
console.log(soustraction(8,5));

var top; //a ne jamais utiliser
"class" : //a ne jamais utiliser
//pas de tiret







