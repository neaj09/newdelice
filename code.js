

// intro



window.addEventListener("scroll", function(){
  let introtxt = document.getElementById("introtxt");
  let frite = document.getElementById("fritefly1");
  let frite2 = document.getElementById("fritefly2");
  let frite3 = document.getElementById("fritefly3");
  let caprisun = document.getElementById("caprisun");
  let btn = document.getElementById("btnintro");
  let value = window.scrollY;
  if (value <=500){ 
  btn.classList.remove("hide");
  introtxt.classList.remove("hide");
  frite.style.top = 800 + value *-1.3 + "px";
  frite2.style.top = 850 + value *-2.5 + "px";
  frite3.style.top = 880 + value *-1.5 + "px";
  caprisun.style.top = 800 + value *-2 + "px";
  btn.style.top = 390 + value *1.01 + "px";
  introtxt.style.fontSize = 55 + value *-0.04 + "px";
  introtxt.style.top = 250 + value *1.01 + "px";
}
else {
  btn.classList.add("hide");
  introtxt.classList.add("hide");
 
}
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

var cacheimgs = document.querySelectorAll(".cacheimg");
 for (var i=0; i<cacheimgs.length; i++)
  cacheimgs[i].addEventListener("click", function(){
  this.style.opacity = "0";

});


