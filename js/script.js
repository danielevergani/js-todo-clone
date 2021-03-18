var listaSpesa = ["uova", "latte", "burro"];


// clono e assegno info al template
for( var i = 0; i < listaSpesa.length; i++ ){

    var template = $(".template li").clone();
    template.prepend(listaSpesa[i]);
    $(".lista").append(template);
    
}

