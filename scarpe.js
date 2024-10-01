/*---------------------VISUALIZZARE LE IMMAGINI CON HOVER---------------------------*/


var scarpe=document.querySelectorAll(".scarpa_hover"); //richiamo TUTTI gli elementi con classe scarpa_hover

let imgGrande=document.querySelector("#img-grande");

scarpe.forEach(function(scarpa){//dichiaro la funzione che verrà eseguita per ogni elemento con classe scarpa_hover

    scarpa.addEventListener("mouseover",function(){

        var elementoOsservato=this.innerHTML;

        imgGrande.innerHTML=elementoOsservato;

    });
});



/*----------------------------------SCEGLIERE LA TAGLIA-----------------------------*/

//al click su bottone...
document.getElementById('aggiungi-carrello').addEventListener('click', function(e)
{

    var tagliaSelezionata = document.querySelector('.taglie.selezionata');

    if (tagliaSelezionata==null)//se la taglia non e' stata selezionata...
    {
        e.preventDefault(); //blocco l'azione di default del button che ha submit (ovvero inviare  i dati)
        document.querySelector('.avviso').style.visibility = 'visible';//e faccio apparire il messaggio
        document.querySelector('#selezione-taglia h3').style.color='rgb(153, 0, 0)';
        document.querySelector('#boxtaglie').style.border='2px solid rgb(153, 0, 0)';//do un border al contenitore delle taglie
    }
    else //altrimenti rimuovo il messaggio e faccio apparire il popup
    {   
        document.querySelector('.avviso').style.display = 'none';
        document.getElementById('popupSfondo').style.visibility='visible';//facio apparire il poppup
        setTimeout(nascondiPopup,2000); //nascondo il popup dopo 2 secondi
    }
    
});



//quando scelgo una taglia...
var taglie = document.querySelectorAll('.taglie');
//per ogni taglia applico la stessa funzione
taglie.forEach(function(taglia)
{
    taglia.addEventListener('click', function()//se clicco su una taglia
    {
        document.querySelector('#boxtaglie').style.border='none';//appena clicco su una taglia, il riquadro rosso scompare
        document.querySelector('#selezione-taglia h3').style.color='';//resetto il colore appena una taglia viene scelta

        // Rimuovo la classe 'selezionata' da TUTTE le taglie, cosi' non ci potra' essere piu' di una taglia selezionata
        taglie.forEach(function(parametro)
        {
            parametro.classList.remove('selezionata');
        });

        // Aggiungo la classe 'selezionata' solo alla taglia cliccata
        taglia.classList.add('selezionata');

        document.querySelector('.avviso').style.display = 'none';//una volta scelta la taglia, rimuovo il messaggio

        document.querySelector('#tagliaScelta').innerHTML='taglia: ' + this.textContent;//uso textContent anziche' value perche' EU (taglia) non e' un muero ma contiene lettere (EU)
    });
});


function nascondiPopup(){
    document.getElementById('popupSfondo').style.visibility='hidden';   
}