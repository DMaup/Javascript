var $form = $("form#form");
var $notes = $("div#notes");
var $note = $("div.note");
var $ajouter = $("button#ajouter");
var $titre = $("input#titre");
var $desc = $("input#desc")
var $valider = $("input#valider");
var $supprimer = $("button.supprimer");
// initialisation du formulaire de saisie en caché 
$form.hide();
$note.hide();
// affichage des zones de saisie en cas de click sur le plus
$ajouter.click(function(){
    $form.show();
});

// en cas de validation des zones créer une note
$form.submit(function(event){
    event.preventDefault(); //evite de recharger la page apres un submit
    // tester si le titre de la note est vide alors sortir de la function
    if($titre.val() == "") {
        alert("Le titre ne peut pas être vide");
        return;
    }
    // charger les valeurs de la note dans les variables
    var item_titre = $titre.val();
    var item_desc = $desc.val();
    var item_date = new Date().toLocaleString("fr");
    var elements = "<div class='note'>";
            elements += "<div class='pins_note'>"+"</div>";
            elements += "<div class='titre_note'>"  +item_titre+"</div>";
            elements += "<div class='desc_note'>"   +item_desc+"</div>";
            elements += "<a   class='date_note'>"   +item_date+"</a>";
            elements += "<button type='button' class='supprimer'"+">x</button>";
        elements += "</div>";
    // charge l'objet jquery dans la variable
    var $elements = $( elements );
    // ajouter la variable élément dans l'objet notes
    $notes.append($elements);
    // vider et effacer les zones saisie en bas a droite
    $titre.val("");
    $desc.val("");
    $form.hide();
});

// sur l'event de click du bouton supprimer je remonte sur l'objet parent pour le raffraichir et le supprimer
$notes.on("click", ".supprimer", function(){
    $(this).parent().remove();
});
