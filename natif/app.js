/*
DOM: Document Object Model
l'ensemble des éléments html du document
*/
var element = document.getElementById("test");
var button = document.getElementById("action");
var flag = true;
var popup = document.getElementById("popup");
var rectangle = document.getElementById("couleur");

button.onclick = function(){
    var colors = {
        text: "red",
        bg: "yellow"
    };
    flag = !flag;
    if(flag){
        colors.text = "yellow";
        colors.bg = "red";
    }

    element.style.color = colors.text;
    element.style.backgroundColor = colors.bg;
    element.innerHTML = "remplacement";

    // affichage popup
    
    popup.style.display = "block";
    popup.classList.add("show");
/*
    // Pickcolor

    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    couleur.style.backgroundColor = `rgb(${red},${green},${blue})`    //couleur.style.backgroundColor = "rgb("+ red + "," + green + "," + blue +")";
*/
}

var range_colors = {
    wred: document.getElementById("red"),
    wgreen: document.getElementById("green"),
    wblue: document.getElementById("blue")
};

var range_inputs = {
    red : document.getElementById("red"),
    green : document.getElementById("green"),
    blue : document.getElementById("blue")
};
var range_inputs = document.querySelectorAll("input[type='range']");

var color = {
    red:0,
    green:0,
    blue:0
};

function changeColors(id, value) {
    color[id] = value; // color["red"] = 200
    rectangle.style.backgroundColor = `rgb(${color.red},${color.green},${color.blue})`;
}

range_inputs.forEach(function(element){ //boucle sur chacun
    // sur chaque input on appelle l'element onchange
    element.onchange = function () {
        changeColors(element.id,element.value);
    }
})

// recuperer des champs
var submit_btn = document.querySelector("input[type='submit']");
var username_input = document.getElementById("username");
var msg_div = document.getElementById("msg");

submit_btn.onclick = function () {
    var username = username_input.value;
    msg_div.innerText = "vous vous appelez " + username;
    console.log(username);
}

// field validation
/*
nom 8 caractères et pas de chiffres
password 8 caractères et au moins 1 chiffre
confirm = password même password
code postal 3 ou 5 chiffres

*/
var send_form = document.getElementById("send_form");
var info_inputs = {
    username             : document.getElementById("name"),
    error_username       : document.querySelector("#name + .error"),
    passwd               : document.getElementById("password"),
    error_passwd         : document.querySelector("#password + .error"),
    passwd_confirm       : document.getElementById("password_confirm"),
    error_passwd_confirm : document.querySelector("#password_confirm + .error"),
    code_postal          : document.getElementById("cp"),
    error_code_postal    : document.querySelector("#cp + .error"),
}
var errors = document.getElementsByClassName("error");
send_form.onclick = function() {

    for (var error of errors ) {
        error.innerText = "";
    }

    if( info_inputs.username.value.length < 8 ) {
        info_inputs.error_username.innerText += "Pas assez de caractères !";
    }
    if( info_inputs.username.value.search(/\d/) != -1 ) { //expression rationnelle
        info_inputs.error_username.innerText += "Il n y a pas de chiffre dans le nom";
    }
    if( info_inputs.passwd.value.length < 8 ) {
        info_inputs.error_passwd.innerText = "pas assez de caractères !";
    }
    if( info_inputs.passwd.value.search(/\d/) == -1 ) {
        info_inputs.error_passwd.innerText = "au moins un chiffre !";
    }
    if( info_inputs.passwd_confirm.value != info_inputs.passwd.value ) {
        info_inputs.error_passwd_confirm.innerText = "mot de passe différent !";
    }
    if( info_inputs.code_postal.value.length != 5 ) {
        info_inputs.error_code_postal.innerText = "code postal erroné !";
    }
    if(
        !Number.isInteger ( parseFloat( info_inputs.code_postal.value ) ) 
        || parseFloat( info_inputs.code_postal.value ) < 0
    ){
        info_inputs.error_code_postal.innerText = "code postal erroné !";
        }
}
//mini game utilisation event mouse

var carre = document.getElementById("carre");
carre.onmouseenter = function () {
    var pos = {
        left: Math.random() * (400-25),
        top: Math.random() * (300-25)
    };
carre.style.top = pos.top + "px";
carre.style.left = pos.left + "px";
}

carre.onclick = function () {
    alert("Gagné !");
    carre.onmouseenter = null;
    carre.onclick = null;
    carre.style.backgroundColor = "green";
}

// car game utilisation du keyboard
var car = document.getElementById("car");
var car_pos = {
    left: 0,
    top: 0
}

var cargame = document.getElementById("cargame")
var car_sizes = {
    width:car.clientWidth,
    height:car.clientHeight,
    limitWidth:cargame.clientWidth,
    limitHeight:cargame.clientHeight
}

document.body.onkeydown = function ( event ) { // tous les evenements peuvent utilser cet argument event
    if( event.key == "z" ) {
        car_pos.top -= 2;
        car.classList.add("vertical");
    }
    else if( event.key == "s" ) {
        car_pos.top += 2;
        car.classList.add("vertical");
    }
    else if( event.key == "d" ) {
        car_pos.left += 2;
        car.classList.remove("vertical");
    }
    else if( event.key == "q" )  {
        car_pos.left -= 2;
        car.classList.remove("vertical");
    }
    if ( car_pos.top < 0 ) {
        car_pos.top = 0
    }
    if ( car_pos.left < 0 ) {
        car_pos.left = 0
    }
    if (car_pos.top > (car_sizes.limitHeight-car_sizes.Height)) {
        car_pos.top = (car_sizes.limitHeight-car_sizes.Height)
    }
    if ( car_pos.left > (car_sizes.limitWidth-car_sizes.width)) {
        car_pos.left = (car_sizes.limitWidth-car_sizes.width)
    }
    car.style.top = car_pos.top + "px";
    car.style.left = car_pos.left + "px";
}
// Utilisation des dates
var fr_days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
var fr_months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juiller","Août","Septembre","Octobre","Novembre","Décembre"];
var today = new Date();
var day =  fr_days[ today.getDay() ];
var date = today.getDate();
var month = fr_months[ today.getMonth() ];
var today_str = day + " " + date + " " + month;
document.querySelector("h1").textContent = today_str;

// Chronometre

var chrono_div = document.getElementById("chrono");
var time_div = document.getElementById("time");
var timer = 0;
var chrono_interval = null;

chrono_div.onclick = function () {
    if(!timer) {
        timer = Date.now();
        time_div.textContent = "0s";
        chrono_div.textContent = "Stop";
        // affiche le temps passé toutes les 100 ms
        chrono_interval = setInterval( function (){
            time_div.textContent = ((Date.now() - timer)/1000).toFixed(1) + "s";
        },100);
    }
    else {
        // coupe l'intervalle d'affichage
        clearInterval( chrono_interval);
        timer = Date.now() - timer;
        time_div.textContent = (timer/1000).toFixed(1) + "s";
        chrono_div.textContent = "Start";
        timer = 0;
    }
}
// minuteur
setTimeout(function(){
    console.log("5 secondes sont passées");
},5000);

// Generation d'Element dans une liste de courses
var list_ul = document.getElementById("list");
var item = document.createElement("li"); // genere un element 
var shop_add = document.getElementById("shop-add");
var shop_item = document.getElementById("shop-item");
item.style.fontSize = "20px";
var element_exist =  false;
var item_name = shop_item.value;
var form = document.querySelector("form");
//ajoute un element dans la liste du document


// sur le click du bouton ajouter mettre à jour la liste
form.onsubmit = function(event){
    // ne pas faire les actions par defaut comme l'envoie de la page au serveur
    event.preventDefault();

    //Alternative à la boucle foreach mais moins performante
    var item_name = shop_item.value;
    if( !item_name ){ // evite le rajout à vide en sortant de la fonction
        return;
    }
    /*
    var items = list_ul.querySelectorAll("li");
    items.forEach(function(element){
        if(element.textContent == item_name){
            element_exist = true;
        }
    */
    
    var items = list_ul.querySelectorAll("li");
    for(var the_item of items){
        if(the_item.textContent.toLowerCase() == item_name.toLowerCase()){
            shop_item.value = "";
            return;
       }
    }    

     if (element_exist){
         return;
     }

    var item = document.createElement("li")
    item.textContent = item_name;
    list_ul.appendChild( item );
    shop_item.value = "";

}

// GENERATION D'ELEMENT

var $form = $("form");
var $shop_item = $("input#shop-item");
var $price_item = $("input#price-item");
var $cart = $("ul#cart");

$form.submit(function( event ){
    event.preventDefault();
    var item_name = $shop_item.val();
    var item_price = $price_item.val();
    /* Generation element liste */
    // var $li = $("<li>");
    // /* Generation container */
    // var $item_container = $("<div>");
    // $item_container.addClass("item-container");
    // /* Generation titre */
    // var $item_name = $("<h6>");
    // $item_name.text( item_name );
    // /* Generation du prix */
    // var $item_price = $("<p>");
    // $item_price.text( item_price + "€/Kg" );
    // $item_container.append( $item_name );
    // $item_container.append( $item_price );
    // // $li n'est pas encore dans le html
    // $li.append( $item_container );
    // // $cart est déja dans le html
    // $cart.append( $li );
    var elements = "<li>";
                elements += "<div class='item-container'>";
                elements += "<h6>" + item_name + "</h6>";
                elements += "<p>" + item_price + " €/Kg </p>";
            elements += "</div>";
        elements += "</li>";
    // $("<li><div><h6></h6><p></p></div></li>")
    // Converti tout le html en argument en élément Jquery
    var $elements = $( elements );
    // Ajoute à la liste ul présente dans le html
    $cart.append( $elements );
    //Vider les champs
 
});
