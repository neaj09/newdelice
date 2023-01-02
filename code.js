

// intro



// window.addEventListener("scroll", function(){
//   let introtxt = document.getElementById("introtxt");
//   let frite = document.getElementById("fritefly1");
//   let frite2 = document.getElementById("fritefly2");
//   let frite3 = document.getElementById("fritefly3");
//   let caprisun = document.getElementById("caprisun");
//   let btn = document.getElementById("btnintro");
//   let value = window.scrollY;
//   if (value <=500 ){
//   btn.classList.remove("hide");
//   introtxt.classList.remove("hide");
//   frite.style.top = 800 + value *-1.3 + "px";
//   frite2.style.top = 850 + value *-2.5 + "px";
//   frite3.style.top = 880 + value *-1.5 + "px";
//   caprisun.style.top = 800 + value *-2 + "px";
//   btn.style.top = 390 + value *1.01 + "px";
//   introtxt.style.fontSize = 55 + value *-0.04 + "px";
//   introtxt.style.top = 250 + value *1.01 + "px";
// }
// else {
//   btn.classList.add("hide");
//   introtxt.classList.add("hide");
 
// }
//   }) 




// sidenav et controleur
function toggleNav() {
   let sideNav = document.getElementById("mySidenav");
   let openNav = document.getElementById("openNav");
   let footer = document.getElementById("footer");
   sideNav.classList.toggle("open");
   openNav.classList.toggle("hide");
   bodyContent.classList.toggle("pushBody");
   sideNav.classList.toggle("stopscroll");
   document.body.classList.toggle("stopscroll");
 }

 function closeNav() {
  sideNav.classList.toggle("open");
  openNav.classList.toggle("hide");
}








  function showContent(contentId){
   
    let contentHTML = '';
    switch (contentId){
      case 'burgers':

         // MENU BURGERS

        contentHTML = "<h1 class='titlesection'>MENUS BURGERS</h1>" +
  
   "<section id='sectionburger' class='menusection'>"+
      "<div class='rayon' oncontextmenu='return false;' onkeydown='return false;' onmousedown='return false;'>"+

         "<div class='produit'>"+
            "<img class='imgproduit' src='img/produit/cheese.png' alt='Le menu burger double cheese' >"+
                  "<div class='infos'>"+
                     "<div class='titleandinfo'>"+
                        "<h2 class='titleproduit'>CHEESE</h2>"+
                        "<h3 class='info'>Steak, cheddar</h3>"+
                     "</div>"+
                     "<p class='prix'>5€90</p>"+
                  "</div>"+
         "</div>"+

         "<div class='produit'>"+
            "<img class='imgproduit' src='img/produit/doublecheese.png' alt='Le menu burger double cheese' >"+
                  "<div class='infos'>"+
                     "<div class='titleandinfo'>"+
                        "<h2 class='titleproduit'>DOUBLE</h2>"+
                        "<h3 class='info'>2 steaks, cheddar</h3>"+
                     "</div>"+
                     "<p class='prix'>5€90</p>"+
                  "</div>"+
         "</div>"+

         "<div class='produit'>"+
            "<img class='imgproduit' src='img/produit/triplecheese.png' alt='Le menu burger double cheese' >"+
                  "<div class='infos'>"+
                     "<div class='titleandinfo'>"+
                        "<h2 class='titleproduit'>TRIPLE</h2>"+
                        "<h3 class='info'>3 steaks, cheddar</h3>"+
                        "</div>"+
                     "<p class='prix'>5€90</p>"+
                  "</div>"+
         "</div>"+

                  "<div class='produit'>"+
            "<img class='imgproduit' src='img/produit/fish.png' alt='Le menu burger double cheese'>"+
                  "<div class='infos'>"+
                     "<div class='titleandinfo'>"+
                        "<h2 class='titleproduit'>FISH</h2>"+
                        "<h3 class='info'>Poisson pane, cheddar</h3>"+
                        "</div>"+
                     "<p class='prix'>5€90</p>"+
                  "</div>"+
         "</div>"+

         "<div class='produit'>"+
            "<img class='imgproduit' src='img/produit/Chicken.png' alt='Le menu burger double cheese'>"+
                  "<div class='infos'>"+
                     "<div class='titleandinfo'>"+
                        "<h2 class='titleproduit'>CHICKEN</h2>"+
                        "<h3 class='info'>poulet pane, cheddar</h3>"+
                        "</div>"+
                     "<p class='prix'>5€90</p>"+
                  "</div>"+
         "</div>"+

         "<div class='produit'>" +
            "<img class='imgproduit' src='img/produit/croustychicken.png' alt='Le menu burger double cheese'>"+
                  "<div class='infos'>" +
                     "<div class='titleandinfo'>" +
                        "<h2 class='titleproduit'>CROUSTY<br>CHICKEN</h2>"+
                        "<h3 class='info'>poulet pane, rösty, cheddar</h3>"+
                     "</div>"+
                     "<p class='prix'>5€90</p>"+
                  "</div>"+
         "</div>"+

         "<div class='produit'>"+
            "<img class='imgproduit' src='img/produit/biggy.png' alt='Le menu burger double cheese'>"+  
                  "<div class='infos'>"+
                     "<div class='titleandinfo'>"+
                        "<h2 class='titleproduit'>BIGGY</h2>"+
                        "<h3 class='info'>2 steaks, cheddar</h3>"+
                        "</div>"+
                     "<p class='prix'>5€90</p>"+
                  "</div>"+
         "</div>"+

         "<div class='produit'>"+
            "<img class='imgproduit' src='img/produit/croustysteak.png' alt='Le menu burger double cheese'>"+
                  "<div class='infos'>"+
                     "<div class='titleandinfo'>"+
            "<h2 class='titleproduit surdeuxlignes'>CROUSTY<br>STEAK</h2>"+
                        "<h3 class='info'>2 steaks, rösty, cheddar</h3>"+
                        "</div>"+
                     "<p class='prix'>5€90</p>"+
                  "</div>"+
         "</div>"+

         "<div class='produit'>"+
            "<img class='imgproduit' src='img/produit/bueno.png' alt='Le menu burger double cheese'>"+
                  "<div class='infos'>"+
                     "<div class='titleandinfo'>"+
                        "<h2 class='titleproduit'>BUENO</h2>"+
                        "<h3 class='info'>steak, rösty, chêvre</h3>"+
                        "</div>"+
                     "<p class='prix'>5€90</p>"+
                  "</div>"+
         "</div>"

         "<div class='produit'>"+
            "<img class='imgproduit' src='img/produit/B3.png' alt='Le menu burger double cheese'>"+
                  "<div class='infos'>"+
                     "<div class='titleandinfo'>"+
                        "<h2 class='titleproduit'>B3</h2>"+
                        "h3 class='info'>2 steaks, bacon, chêvre, cheddar</h3>"+
                        "</div>"+
                     "<p class='prix'>5€90</p>"+
                  "</div>"+
         "</div>"+

         "<div class='produit'>"+
            "<img class='imgproduit' src='img/produit/180.png' alt='Le menu burger double cheese'>"+
                  "<div class='infos'>"+
                     "<div class='titleandinfo'>"+
                        "<h2 class='titleproduit'>180</h2>"+
                        "<h3 class='info'>steak, escalope marinée, cheddar</h3>"+
                        "</div>"+
                     "<p class='prix'>5€90</p>"+
                  "</div>"+
         "</div>"+

      "</div>"+
   "</section>";

        break;


      case 'tacos':

         // MENU TACOS


        contentHTML = "<h1 class='titlesection'>MENUS TACOS</h1>" +
  
   "<section id='sectionTacos' class='menusection'>"+
      "<div class='rayon' oncontextmenu='return false;' onkeydown='return false;' onmousedown='return false;'>"+

         "<div class='produit'>"+
            "<img class='imgproduit' src='img/produit/tacosm.png' alt='une photo du Tacos M' >"+
                  "<div class='infos'>"+
                     "<div class='titleandinfo'>"+
                        "<h2 class='titleproduit'>TACOS M</h2>"+
                        "<h3 class='info'>1 viande au choix</h3>"+
                     "</div>"+
                     "<p class='prix'>5€90</p>"+
                  "</div>"+
         "</div>"+

         "<div class='produit'>"+
            "<img class='imgproduit' src='img/produit/tacosL.png' alt='une photo du Tacos L' >"+
                  "<div class='infos'>"+
                     "<div class='titleandinfo'>"+
                        "<h2 class='titleproduit'>TACOS L</h2>"+
                        "<h3 class='info'>2 viandes aux choix</h3>"+
                     "</div>"+
                     "<p class='prix'>5€90</p>"+
                  "</div>"+
         "</div>"+

         "<div class='produit'>"+
            "<img class='imgproduit' src='img/produit/tacosXL.png' alt='une photo du Tacos XL'>"+
                  "<div class='infos'>"+
                     "<div class='titleandinfo'>"+
                        "<h2 class='titleproduit'>TACOS XL</h2>"+
                        "<h3 class='info'>3 viandes aux choix</h3>"+
                        "</div>"+
                     "<p class='prix'>5€90</p>"+
                  "</div>"+
         "</div>"+

   "</section>";

        break;

      case 'texmex':
        contentHTML = '<p>Contenu HTML pour les plats texmex</p>';

        break;

      case 'desserts':
        contentHTML = '<p>Contenu HTML pour les desserts</p>';

        break;
}


    // Affiche le contenu HTML dans le div avec l'identifiant "content"
  document.getElementById('content').innerHTML = contentHTML;

window.addEventListener('popstate', function(event) {
  // Récupère l'identifiant de contenu à partir de l'objet d'état
  const contentId = event.state.contentId;
  // Affiche le contenu correspondant en utilisant la fonction showContent
  showContent(contentId);
});

}

    
//   // Modifie l'URL en ajoutant l'identifiant de contenu à l'historique du navigateur
//   window.history.pushState({ contentId: contentId }, '', `?contentId=${contentId}`);


window.onload = function() {
  showContent('burgers');
};







