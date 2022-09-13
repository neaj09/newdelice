

// sidenav et controleur
function toggleNav() {
   let sideNav = document.getElementById("mySidenav");
   let openNav = document.getElementById("openNav");
   let footer = document.getElementById("footer");
   sideNav.classList.toggle("open");
   openNav.classList.toggle("hide");
   bodyContent.classList.toggle("pushBody");
   footer.classList.toggle("hide");
   sideNav.classList.toggle("stopscroll");
   document.body.classList.toggle("stopscroll");
 }

 function closeNav() {
  sideNav.classList.toggle("open");
  openNav.classList.toggle("hide")
}



// const allimgProduits = document.querySelectorAll(".imgproduit");
// for (i=0; i < allimgProduits.length; i++){
//   let imgProduit = allimgProduits[i];
//   imgProduit.addEventListener("mouseenter", function() {
//     this.classList.add("imgproduithover")
//   });
//   imgProduit.addEventListener("mouseleave", function() {
//     this.classList.remove("imgproduithover")
//   });
//   imgProduit.addEventListener("click", function() {
//         this.classList.remove("imgproduit:hover")
//         this.classList.toggle("imgproduitclick");
//   })
// }



const buttonsSection = document.querySelectorAll(".buttonSection");
for (i=0; i < buttonsSection.length; i++){
  let buttonSection = buttonsSection[i];
buttonSection.addEventListener("click", function openSection(){
  this.nextElementSibling.classList.toggle("hide")
})
}




