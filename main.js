$(document).ready(function () {

  $('.next i').click(
    function() {
      muoviAvanti();
    }
  )

  $('.prev i').click(
    function() {
      muoviIndietro();
    }
  )

})

// devo creare una funzione che permetta al carousel di visualizzare l immagine successiva quando clicco la freccia destra
function muoviAvanti() {
  var immagineCorrente = $('.images img.active');
  var dotBlue = $('.nav i.active');

  immagineCorrente.removeClass('active');
  dotBlue.removeClass('active');

  if (immagineCorrente.hasClass('last')) {
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }
  else {
    immagineCorrente.next('img').addClass('active');
    dotBlue.next('i').addClass('active');
  }
}

// devo creare una funzione che permetta al carousel di visualizzare l immagine precedente quando clicco la freccia sinistra
function muoviIndietro() {
  var immagineCorrente = $('.images img.active');
  var dotBlue = $('.nav i.active');

  immagineCorrente.removeClass('active');
  dotBlue.removeClass('active');

  if (immagineCorrente.hasClass('first')) {
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  }
  else {
    immagineCorrente.prev('img').addClass('active');
    dotBlue.prev('i').addClass('active');
  }
}
