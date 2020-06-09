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

  $('.nav i').click(
    function() {
      var immagineCorrente = $('.images img.active');
      var dotBlue = $('.nav i.active');

      if (!($(this).hasClass('active'))) {
        immagineCorrente.removeClass('active');
        dotBlue.removeClass('active');
        $(this).addClass('active');
        if ($(this).hasClass('first')) {
          $('.images img.first').addClass('active');
        }
        else if ($(this).hasClass('second')) {
          $('.images img.second').addClass('active');
        }
        else if ($(this).hasClass('third')) {
          $('.images img.third').addClass('active');
        }
        else {
          $('.images img.last').addClass('active');
        }
      }
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

// devo creare una funzione che quando clicco su un pallino l immagine corrispondente venga visualizzata
// function cliccaPallino() {
//   var immagineCorrente = $('.images img.active');
//   var dotBlue = $('.nav i.active');
//
//   if (!($(this).hasClass('active'))) {
//     immagineCorrente.removeClass('active');
//     dotBlue.removeClass('active');
//   }
// }
