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

// inserisco elemento da input

$("#ins__item").keypress(function(e){
    if ( e.which == 13 ){
        if ( $(this).val() != "" ){
            var nItem =  $(this).val();
            var template = $(".template li").clone();
            template.prepend(nItem);
            $(".lista").append(template); 
            $(this).val("");
        }
    }
});