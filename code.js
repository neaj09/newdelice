

// intro



window.addEventListener("scroll", function(){
  let introtxt = document.getElementById("introtxt");
  let frite = document.getElementById("fritefly1");
  let frite2 = document.getElementById("fritefly2");
  let frite3 = document.getElementById("fritefly3");
  let caprisun = document.getElementById("caprisun");
  let fire = document.getElementById("fire");
  let value = window.scrollY; 
  frite.style.top = 800 + value *-1.3 + "px";
  frite2.style.top = 850 + value *-2.3 + "px";
  frite3.style.top = 880 + value *-1.5 + "px";
  caprisun.style.top = 800 + value *-2.5 + "px";
  introtxt.style.fontSize = 50 + value *0.02 + "px";


  })



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
  openNav.classList.toggle("hide");
}





