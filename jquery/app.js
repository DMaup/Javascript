
var $element = $("h1") // $ devant est une convention personnelle
console.log($element);

//change styles
$element.css("color","blue");
$element.css({
    "color": "red",
    "border": "1px solid red",
    "font-size" : "26px",
    backgroundColor : "yellow" // on peut utiliser les clefs directes de syntaxe du javascript
})
// pop up
var $popup = $("#popup");
var $open = $("#open");
var flag = false

$open.click(function(){
    //$popup.show(1000//* optionnal */);
    //$popup.fadeIn(2000); optionnnel
    //flag=!flag
    //if (flag) {
        // $popup.slideDown(500);
    // }
    // else{
        //$popup.hide();
        //$popup.fadeOut(2000);
        //$popup.slideUp(1500);
    // }
    //$popup.toggle(1000);
    //$popup.fadeToggle(2000);

        // remove class
    //$popup.removeClass("active")

    $popup.slideToggle(1500, function(){

        //adding class
        //$popup.addClass("active");

    });
    // toggleClass("active")
    $popup.toggleClass("active");
});

// color picker
var $range = $("input[type='range']");
var $color_rect = $("#color-rect");
var color = {
    red:0,
    green:0,
    blue:0,
    getRGB: function(){
        //this reference l'objet jquery courant
        var rgb = "rgb(";
        rgb += color.red;
        rgb += ", ";
        rgb += color.green;
        rgb += ", ";
        rgb += color.blue;
        rgb += ")";
        return rgb;

    }
};

$range.change(function(){
    //console.log($(this));
    var id = $(this).attr("id"); //recupere n'importe quel attribut dans la balise
    //console.log(id)
    // recupere la value d'un input
    color[id]= $(this).val();
    //console.log(color);
    $color_rect.css("background-color", color.getRGB() );
});

var interval = setInterval(function(){

    $range.each(function(){

        var id = $(this).attr("id");
        color[id] = $(this).val();
        $color_rect.css("background-color", color.getRGB() );

    });
    
},100);

//diaporama

var $diaporama = $("#diaporama");
var $slides = $(".bg_img");
var $current_slide = $slides.first(); // agit  comme un pointeur
var isAnimated = false;

$diaporama.click( function() {
    if (isAnimated){
        return;
    }
    isAnimated = true;
    $current_slide.fadeOut(500, function(){ // se lance au bout des 500 milliseconds
        $current_slide = $current_slide.next(); //.prev pour la precedente
        if($current_slide.length == 0) {
            $current_slide = $slides.first(); //.last pour la dernière
        }
        $current_slide.fadeIn(500, function(){
            isAnimated = false;
        });
    });
})

//precedent suivant

var $defil = $("#prev, #next");

$defil.click(function(){
    if (isAnimated){
        return;
    }
    isAnimated = true;
    $current_slide.fadeOut(500, function(){ // se lance au bout des 500 milliseconds
        var id = $(this).attr("id");
        if( id=="next") {
            $current_slide = $current_slide.next(); //.prev pour la precedente
        }
        else {
            $current_slide = $current_slide.prev(); //.prev pour la precedente
        }
        if($current_slide.length == 0) {
            if(id=="next") {
                $current_slide = $slides.first(); //.last pour la dernière
            }
            else {
                $current_slide = $slides.last(); //.last pour la dernière
            }
        }
        $current_slide.fadeIn(500, function(){
            isAnimated = false;
        });
    });
})
//Diaporama arrows
var $diaporama = $("#diaporama");
var $slides = $(".bg_img");
var $current_slide = $slides.first();
var $arrows = $(".arrow");
$arrows.click(function(){
    if( isAnimated ){
        return;
    }
    isAnimated = true;
    var id = $(this).attr("id");
    $current_slide.fadeOut(500, function(){
        if( id == "prev" ){
            //On récupère l'élément précedent avec la classe bg_img (évite d'attraper les fleches)
            $current_slide = $current_slide.prev(".bg_img");
            if( $current_slide.length == 0 ){
                $current_slide = $slides.last();
            }
        }
        else {
            //On récupère l'élément suivant avec la classe bg_img (évite d'attraper les fleches)
            $current_slide = $current_slide.next(".bg_img");
            if( $current_slide.length == 0 ){
                $current_slide = $slides.first();
            }
        }
        $current_slide.fadeIn(500, function(){
            isAnimated = false;
        });
    });
});
// Shi fu mi
var rand = function ( min, max) {
    return Math.round( Math.random()* (max-min)+min);
}
var $joue = $("#game .icon");
var $result = $("#result");
var $player = $("#player");
var $pc = $("#pc");
$joue.click(function() {
    var jeu_pc = "";
    var jeu_player = "";
    var jeu_rules = ["shi","fu","mi"];
    var resultat = "perdu";
    jeu_player = $(this).attr("id");
    jeu_pc = jeu_rules[rand(0,2)];
    console.log(jeu_player, jeu_pc)
    if(jeu_pc == jeu_player) {
        resultat = "égalité"
    }
    else if ((jeu_player == "shi" && jeu_pc == "mi")
             || (jeu_player =="mi" && jeu_pc == "fu")
             || (jeu_player =="fu" && jeu_pc == "shi")) {
        resultat = "gagné";
    }
    else if ((jeu_pc == "shi" && jeu_pc == "mi")
    || (jeu_pc =="mi" && jeu_player == "fu")
    || (jeu_pc =="fu" && jeu_player == "shi")) {
        resultat = "perdu";
    }
    //affichage
    $result.text(resultat); // agit comme textcontent$

    $player.removeClass("shi fu mi");
    $pc.removeClass("shi fu mi");

    $player.addClass(jeu_player);
    $pc.addClass(jeu_pc);
});

// morpion

// Je clique sur un td
// je recuperer les positions de mon élément dans le tableau

$td = $("td"); //charge toute la table
var joueur = "X";
var combinaisons = [
    [ {x:0, y:0},{x:1, y:0},{x:2, y:0} ],
    [ {x:0, y:1},{x:1, y:1},{x:2, y:1} ],
    [ {x:0, y:2},{x:1, y:2},{x:2, y:2} ],
    [ {x:0, y:0},{x:0, y:1},{x:0, y:2} ], 
    [ {x:1, y:0},{x:1, y:1},{x:1, y:2} ], 
    [ {x:2, y:0},{x:2, y:1},{x:2, y:2} ], 
    [ {x:0, y:0},{x:1, y:1},{x:2, y:2} ],
    [ {x:2, y:0},{x:1, y:1},{x:0, y:2} ]
];
var array_playerX = [];
var array_playerO = [];
var playerX = false;
var victory = false;

$td.click(function(){
    var position = {
        x:0, //idem=> $(this).parent().children().index($(this))
        y:0  //idem=> $(this).parent().parent().children().index($("this"))
    };
    // je reconstruis le set d'index du tableau HTML à partir de Jquery 
    // Je récupère d'abord l'élément parent
    var $tr_parent = $(this).parent();
    // Je récupère tous les enfants ensuite du parent
    var $td_children = $tr_parent.children(); // var $td_children = $(this).parent().children();

    position.x = $td_children.index($(this));

    var $table_parent = $tr_parent.parent();
    var $tr_children = $table_parent.children();

    position.y = $tr_children.index ($tr_parent);

    // Chaque click si la case n'est pas déja utilisée écrira soit x soit o suivant le tour du joueur
    if($(this).text() != "" || victory) {
        return;
    }
    // Afficher le X ou le O pour chaque joueur puis stocker l'historique des coups joués
    if(playerX) {
        $(this).text("X");
        array_playerX.push(position);
    }
    else {
        $(this).text("O");
        array_playerO.push(position);
    }
    // on verifie une liste de combinaison gagnante dans un tableau
    if (checkVictory(array_playerX)){
        alert("Player X Winn !");
        victory = true;
    }
    else if (checkVictory(array_playerO)){
        alert("Player O Winn !");
        victory = true;        
    }

    // changer de joueur à la fin
    playerX = !playerX;
})
var checkVictory = function (array_player){
    for(var combinaison of combinaisons) {
        var counter = 0;
        for(var position of combinaison) {
            for(var history of array_player) {
                if(history.x == position.x && history.y == position.y){
                    counter++;
                    break;
                }
            }
        }
        if (counter ==3){
            return true;
        }
    }
    return false;
}

//memory
/*
var carte = [0,0,0,0,0,0,0,0,0,0,0,0];
var couleur = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "marroon"
];
var $rectangle = $("#memory .item");
var nb_carte_click = 1
var tirage_effectue = false;
    //remplir aléatoirement les couleurs dans les rectangles

    // je tire une carte au hasard
    var rand_carte = function ( min, max) {
        return Math.round( Math.random()* (max-min)+min);
    }

    var tirage = function(){
        // pour les 6 couleurs
        for ( var coul = O; coul < 6; coul++) {
            // je tire une première carte sur 12
            var carte_tirée = carte[rand_carte(0,11)];
            for (var tirage = 1; tirage < 3; tirage++) {
            // si la carte tirée est vide alors 
                if (carte[carte_tirée] == 0){
                    // je la charge avec la couleur de la boucle
                    carte[carte_tirée] == coul;
                }
            }
            tirage_effectue = true;
        }
    }
    // Function en cas de click sur une carte
    $rectangle.click(function(){
        // si tirage pas efffectué alors je le fait
        if (!tirage_effectue) {
            tirage()
        }
        //si le nombre de carte cliqué est égal à 1
        if(nb_carte_click == 1) {
            return;
        }
        Else {
            // Les cartes retournées sont-elles identiques


            // si elles sont identiques alors je les laisse retournées sinon je les retourne encore
        }
    });
*/
// MEMORY

// var memos = [
//     "red",
//     "red",
//     "green",
//     "green",
//     "blue",
//     "blue",
//     "purple",
//     "purple",
//     "yellow",
//     "yellow",
//     "brown",
//     "brown"
// ];
// var $items = $(".item");
// var $score = $("#score");
// var nb_active = 0;
// var index_first_element = 0;
// var score = 0;
// var shuffle = function( array ){
//     for( var i=0; i< array.length; i++ ){
//         var rand = Math.round(Math.random() * i);
//         var temp = array[rand];
//         array[rand] = array[i];
//         array[i] = temp;
//     }
// }
// var initGame = function(){
//     score = 0;
//     $score.text( score );
//     shuffle( memos );
//     $items.removeClass("active red green blue purple yellow brown");
//     $items.each(function(index){
//         $(this).addClass( memos[index] );
//     });
// }
// initGame();
// $items.click(function(){
//     if( nb_active == 2 || $(this).hasClass("active") ){
//         return;
//     }
//     score ++;
//     $score.text( score );
//     nb_active ++;
//     $(this).addClass("active");
//     var index = $items.index( $(this) );
//     if( nb_active == 1 ){
//         index_first_element = index;
//     }
//     else {
//         var $_this = $(this);
//         if( memos[index_first_element] == memos[index] ){
//             nb_active = 0;
//         }
//         else {
//             setTimeout(function(){
//                 // Attention a la porté du this! dépend de la fonction
//                 $_this.removeClass("active");
//                 $items.eq(index_first_element).removeClass("active");
//                 nb_active = 0;
//             }, 1000);
//         }
//     }
//     var $active = $(".active");
//     if( $active.length == memos.length ){
//         setTimeout(function(){
//             alert("Terminé !");
//             initGame();
//         }, 1000);
//     }
// });
// //
// // filtre
// //
// var $cars = $(".car");
// var $mark_selector = $("#mark");
// var $color_checkboxes = $("input[type='checkbox']");

// $mark_selector.change(function(){

//     var mark = $(this).val();

//     if (mark == "all" ){
//         $cars.show();
//     }
//     else{
//         $cars.each(function(){
//             if($(this).attr("data-mark") != mark) {
//                 $(this).hide();
//             }
//             else{
//                 $(this).show();
//             }
//         });
//     }
// });
// var colors = {
//     red:false,
//     yellow: false,
//     blue:false,
//     pink:false
// };
// $color_checkboxes.change(function(){
//     //verifie si checker

//     var color_key = $(this).val(); //.val retourne la value de l'objet en jquery

//     if ($(this).is(":checked")){
//         colors[color_key] = true ;
//     }
//     else{
//         colors[color_key] = false;
//     }
//     $cars.each(function(){
//         var car_color = $(this).attr("data-color");
//         if (!colors[car_color]){
//             $(this).hide();
//         }
//         else {
//             $(this).show();
//         }
//     });
// });

// memory
var $cars = $(".car");
var $inputs = $("#filter input, #filter select");
var $mark_selector = $("#mark");
var $color_checkboxes = $("#filter input[type='checkbox']");
var $min_price = $("input#min_price");
var $max_price = $("input#max_price");
var filters = {
    mark: "",
    colors: {
        red:false,
        blue:false,
        yellow:false,
        pink:false
    },
    min_price:0,
    max_price:80000
};
$inputs.change(function(){
    //chargement des filtres
    filters.mark = $mark_selector.val();
    $color_checkboxes.each(function(){
        var value = $(this).val();
        var state = $(this).is(":checked");
        filters.colors[value] = state;
    })
    filters.min_price = parseInt( $min_price.val(),10 );
    filters.max_price = parseInt( $max_price.val(),10 );

    console.log(filters);

    //cache toutes les voitures par defaut
    $cars.hide();

    // la variable charge la liste des voitures à affichée et filtrée
    var $cars_filtered = $cars;

    // .filter() filtre le set d'element avec des selecteurs css
    if (filters.mark != "all"){
        $cars_filtered = $cars.filter("[data-mark="+filters.mark+"]");
    }

    if (filters.colors.blue
    || filters.colors.red
    || filters.colors.pink
    || filters.colors.yellow){
        $cars_filtered.each(function(){
                var data_color = $(this).attr("data-color");
                    // not() retire la liste du set d'element à filtrer
                    if (!filters.colors[ data_color]){
                        $cars_filtered = $cars_filtered.not($(this));
                    }
        })
    }
    $cars_filtered.each(function(){
        var price = parseInt ($(this).attr("data-price"),10);
        if(price < filters.min_price || price > filters.max_price){
            $cars_filtered = $cars_filtered.not($(this)); // enleve l'objet de l'élément Jquery
        }
    })
    $cars_filtered.show();
});

//gestion des inputs range
    

var $range_min = $('input#min_price');
var $range_max = $('input#max_price');
var $display_min_price = $('span#display_min_price');
var $display_max_price = $('span#display_max_price');
var range_interval = null; 
var manage_ranges = function(){
    range_interval = setInterval(function(){

        var min = $min_price.val(); // deja declarées plus haut dans le code
        var max = $max_price.val(); // deja declarées plus haut dans le code
        $min_price.attr("max", max);// le "max" correspond à l'attribut du range html
        $max_price.attr("min", min);// si on met une variable ou une valeur on charge l'atribue sinon on le lit seulement 

        $display_min_price.text( min );
        $display_max_price.text( max );

    },100);
    // permet de stopper la fonction interval lorsque l'on utilise par l'input range
};
var $prices = $min_price.add($max_price); // permet de fusionner plusieurs elements Jquery
$prices
    .mousedown(function(){
        manage_ranges();
})
    .mouseup(function(){
        clearInterval ( range_interval );
});

// generation version organisé

// var $form = $("form");
// var $shop_item = $("input#shop-item");
// var $shop_price = $("input#shop-price");
// var $cart = $("ul#cart");
// $form.submit(function(event){
//     event.preventDefault(); //evite de recharger la page apres un submit
//     var item_name = $shop_item.val();
//     var item_price = $shop_price.val();
//     var $li = $("<li>"); // charger la balise pour créer l'element
//     // generation container
//     var $item_container = $("<div>");
//     $item_container.addClass("item-container");
//     // generation titre
//     var $item_name = $("<h6>");
//     $item_name.text (item_name); 
//     $item_container.append($item_name);
//     // generation price
//     var $item_price = $("<p>");
//     $item_price.text(item_price + "€/kg");
//     $item_container.append($item_price);
//     //$li n'est pas encore dans le html
//     $li.append($item_container)
//     //$cart est déjà dans le html
//     $cart.append( $li );
//     $shop_item.val("");
//     $shop_price.val("");
// });

// Generation version html
    var $form = $("form");
    var $shop_item = $("input#shop-item");
    var $shop_price = $("input#shop-price");
    var $cart = $("ul#cart");

$form.submit(function(event){
    event.preventDefault(); //evite de recharger la page apres un submit
    var item_name = $shop_item.val();
    var item_price = $shop_price.val();
    var elements = "<li>";
            elements += "<div class='item-container'>";
                elements += "<h6>" + item_name + "</h6>";
                elements += "<p>" + item_price + "€/kg </p>";
            elements += "</div>";
        elements += "</li>";
    var $elements = $( elements );
  
    $cart.append( $elements );
    $shop_item.val("");
    $shop_price.val("");
});