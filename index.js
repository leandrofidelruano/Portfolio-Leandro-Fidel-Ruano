document.addEventListener("DOMContentLoaded", () => {
  // Cargar el JSON según el idioma seleccionado
  function loadLanguage(lang) {
    $.getJSON('lang/' + lang + ".json", function (data) {
      // Update header texts
      for (let key in data.header) {
        $("#" + key).text(data.header[key]);
      }
      /*$("#aboutMe").text(data.header.aboutMe);
      $("#proyects").text(data.header.proyects);
      $("#experience").text(data.header.experience);
      $("#resources").text(data.header.resources);
      $("#contact").text(data.header.contact);*/
    });

    $.getJSON('lang/' + lang + ".json", function (data) {
      // Update main texts
      $("#resources").text(data.main.resources);
    });
    
    $.getJSON('lang/' + lang + ".json", function (data) {
      // Update cards texts
      $("#cardSubTitle1").text(data.cardSubTitle1);
      $("#cardSubTitle2").text(data.cardSubTitle2);

      let cards = 16; // update this to the max number of cards
      for (let i = 1; i <= cards; i++) {
        $("#cardTitle" + i).text(data["card" + i]["cardTitle" + i]);
        $("#cardDescription" + i).text(data["card" + i]["cardDescription" + i]);
      }
      /*
      $("#cardTitle1").text(data.card1.cardTitle1);
      $("#cardDescription1").text(data.card1.cardDescription1);
      
      $("#cardTitle2").text(data.card2.cardTitle2);
      $("#cardDescription2").text(data.card2.cardDescription2);

      $("#cardTitle3").text(data.card3.cardTitle3);
      $("#cardDescription3").text(data.card3.cardDescription3);

      $("#cardTitle4").text(data.card4.cardTitle4);
      $("#cardDescription4").text(data.card4.cardDescription4);

      $("#cardTitle5").text(data.card5.cardTitle5);
      $("#cardDescription5").text(data.card5.cardDescription5);

      $("#cardTitle6").text(data.card6.cardTitle6);
      $("#cardDescription6").text(data.card6.cardDescription6);

      $("#cardTitle7").text(data.card7.cardTitle7);
      $("#cardDescription7").text(data.card7.cardDescription7);

      $("#cardTitle8").text(data.card8.cardTitle8);
      $("#cardDescription8").text(data.card8.cardDescription8);
      */
      $("#resources").text(data.resources);
    });
  }
  
  // Change language
  document.getElementById("languageSelector").addEventListener("change", function() {
    var selectedLanguage = $(this).val();
    loadLanguage(selectedLanguage);
  });
  
  // Default language
  loadLanguage("es");
});