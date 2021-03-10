/*
 // --- SOLUZIONE 1 ---

//Dichiaro la variabile e inserisco dentro il
//collegamento all'a contente il simbolo del menù
var hamburgerMenu = $('.header-right > a');

//Al click sul hamburgerMenu viene eseguita questa funzione
hamburgerMenu.click(function() {
  //Richiamiamo la lista contente il menù e gli assegniamo una variabile
  var listaMenu = $('.hamburger-menu');
  //Diciamo alla lista contente il menù che deve farsi vedere
  listaMenu.show();
});

//Dichiariamo la variabile hamburgerMenuChiusura che riprende il pulsante di chiusura
var hamburgerMenuChiusura = $('.close');

//Al click su hamburgerMenuChiusura la funzione nasconderà listaMenu
hamburgerMenuChiusura.click(function () {
  //Richiamiamo la lista contente il menù
  var listaMenu = $('.hamburger-menu');
  //Diciamo alla lista contente il menù che deve nascondersi
  listaMenu.hide();
});
/*

/*
// --- SOLUZIONE 2 ---

//Dichiaro la variabile e inserisco dentro il
//collegamento all'a contente il simbolo del menù
var hamburgerMenu = $('.header-right > a');

//Al click sul hamburgerMenu viene eseguita questa funzione
hamburgerMenu.click(function() {
  //Richiamiamo la lista contente il menù e gli assegniamo una variabile
  var listaMenu = $('.hamburger-menu');
  //Diciamo alla lista contente il menù che deve farsi vedere
  listaMenu.css({display:'block'});
});

//Dichiariamo la variabile hamburgerMenuChiusura che riprende il pulsante di chiusura
var hamburgerMenuChiusura = $('.close');

//Al click su hamburgerMenuChiusura la funzione nasconderà listaMenu
hamburgerMenuChiusura.click(function () {
  //Richiamiamo la lista contente il menù
  var listaMenu = $('.hamburger-menu');
  //Diciamo alla lista contente il menù che deve nascondersi
  listaMenu.css({display:'none'});
});
*/

// --- SOLUZIONE 3 ---

//Dichiaro la variabile e inserisco dentro il
//collegamento all'a contente il simbolo del menù
var hamburgerMenu = $('.header-right > a');

//Al click sul hamburgerMenu viene eseguita questa funzione
hamburgerMenu.click(function() {
  //Richiamiamo la lista contente il menù e gli assegniamo una variabile
  var listaMenu = $('.hamburger-menu');
  //Diciamo alla lista contente il menù che deve farsi vedere
  listaMenu.addClass('active');
});

//Dichiariamo la variabile hamburgerMenuChiusura che riprende il pulsante di chiusura
var hamburgerMenuChiusura = $('.close');

//Al click su hamburgerMenuChiusura la funzione nasconderà listaMenu
hamburgerMenuChiusura.click(function () {
  //Richiamiamo la lista contente il menù
  var listaMenu = $('.hamburger-menu');
  //Diciamo alla lista contente il menù che deve nascondersi
  listaMenu.removeClass('active');
});
