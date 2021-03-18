var listaSpesa = ["uova", "latte", "burro"];


// clono, assegno elementi array al template e "stampo"
for( var i = 0; i < listaSpesa.length; i++ ){

    var template = $(".template li").clone();
    template.prepend(listaSpesa[i]);
    $(".lista").append(template);

}

// cancello elementi al click su x usando .on

$(".lista").on("click", ".delete__item", function(){
    $(this).parent().remove();
});