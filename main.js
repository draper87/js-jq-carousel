$(document).ready(function () {

  $('.next i').click(
    function() {
      muoviAvanti();
    }
  )

  $('.prev i').click(
    function() {

    }
  )

})

// devo creare una funzione che permetta al carousel di visualizzare l immagine successiva quando clicco la freccia destra
function muoviAvanti() {
  $('.images img.active').removeClass('active');

  $('.images img').next('img').addClass('active');
}

// devo creare una funzione che permetta al carousel di visualizzare l immagine precedente quando clicco la freccia sinistra
function muoviIndietro() {

}
