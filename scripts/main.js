// We get our variables first.
// First the text on the images
var menu1 = document.querySelector(".textMenu1");
var menu2 = document.querySelector(".textMenu2");
var menu3 = document.querySelector(".textMenu3");
var menu4 = document.querySelector(".textMenu4");
// Then the images
var img1 = document.querySelector(".menu1 img");
var img2 = document.querySelector(".menu2 img");
var img3 = document.querySelector(".menu3 img");
var img4 = document.querySelector(".menu4 img");
// Then we take the all bloc
var bloc1 = document.querySelector(".menu1");
var bloc2 = document.querySelector(".menu2");
var bloc3 = document.querySelector(".menu3");
var bloc4 = document.querySelector(".menu4");
//And finally the text to show when the menu is open.
var text1 = document.querySelector(".text1");
var text2 = document.querySelector(".text2");
var text3 = document.querySelector(".text3");
var text4 = document.querySelector(".text4");

var openMenu = document.querySelector(".openMenu");


// Part of code for the basic image
img1.addEventListener(
  'click',
  function()
  {
    if(bloc1.classList.contains("is-active"))
    {

      img2.setAttribute("src", "../../images/menu2.jpg");
      menu2.style.display=("block");
      bloc2.style.width=("25%");
      bloc2.style.float=("left");

      img3.setAttribute("src", "../../images/menu3.jpg");
      menu3.style.display=("block");
      bloc3.style.width=("25%");
      bloc3.style.float=("left");

      img4.setAttribute("src", "../../images/vine.jpg");
      menu4.style.display=("block");
      bloc4.style.width=("25%");
      bloc4.style.float=("left");

      openMenu.style.display=("none");
      text1.style.display=("none");
      
      bloc1.classList.remove("is-active");
    }
    else
    {
      img4.setAttribute("src", "../../images/vinemini.jpg");
      menu4.style.display=("none");
      bloc4.style.width=("100px");
      bloc4.style.float=("right");

      img3.setAttribute("src", "../../images/menu3mini.jpg");
      menu3.style.display=("none");
      bloc3.style.width=("100px");
      bloc3.style.float=("right");

      img2.setAttribute("src", "../../images/menu2mini.jpg");
      menu2.style.display=("none");
      bloc2.style.width=("100px");
      bloc2.style.float=("right");

      openMenu.style.display=("block");
      text1.style.display=("block");
      text2.style.display=("none");
      text3.style.display=("none");
      text4.style.display=("none");
      
      bloc1.classList.add("is-active");
    }
    bloc2.classList.remove("is-active");
    bloc3.classList.remove("is-active");
    bloc4.classList.remove("is-active");
  },
  false
);

img2.addEventListener(
  'click',
  function()
  {
    if(bloc2.classList.contains("is-active"))
    {
      img4.setAttribute("src", "../../images/vine.jpg");
      menu4.style.display=("block");
      bloc4.style.width=("25%");
      bloc4.style.float=("left");

      img3.setAttribute("src", "../../images/menu3.jpg");
      menu3.style.display=("block");
      bloc3.style.width=("25%");
      bloc3.style.float=("left");

      img1.setAttribute("src", "../../images/menu1.jpg");
      menu1.style.display=("block");
      bloc1.style.width=("25%");
      bloc1.style.float=("left");

      openMenu.style.display=("none");
      text2.style.display=("none");
      
      bloc2.classList.remove("is-active");
    }
    else
    {
      img4.setAttribute("src", "../../images/vinemini.jpg");
      menu4.style.display=("none");
      bloc4.style.width=("100px");
      bloc4.style.float=("right");

      img3.setAttribute("src", "../../images/menu3mini.jpg");
      menu3.style.display=("none");
      bloc3.style.width=("100px");
      bloc3.style.float=("right");

      img1.setAttribute("src", "../../images/menu1mini.jpg");
      menu1.style.display=("none");
      bloc1.style.width=("100px");
      bloc1.style.float=("right");

      openMenu.style.display=("block");
      text2.style.display=("block");
      text1.style.display=("none");
      text3.style.display=("none");
      text4.style.display=("none");
      
      bloc2.classList.add("is-active");
    }
    bloc1.classList.remove("is-active");
    bloc3.classList.remove("is-active");
    bloc4.classList.remove("is-active");
  },
  false
);

img3.addEventListener(
  'click',
  function()
  {
    if(bloc3.classList.contains("is-active"))
    {
      img4.setAttribute("src", "../../images/vine.jpg");
      menu4.style.display=("block");
      bloc4.style.width=("25%");
      bloc4.style.float=("left");

      img2.setAttribute("src", "../../images/menu2.jpg");
      menu2.style.display=("block");
      bloc2.style.width=("25%");
      bloc2.style.float=("left");

      img1.setAttribute("src", "../../images/menu1.jpg");
      menu1.style.display=("block");
      bloc1.style.width=("25%");
      bloc1.style.float=("left");

      openMenu.style.display=("none");
      text3.style.display=("none");
      
      bloc3.classList.remove("is-active");
    }
    else
    {
      img4.setAttribute("src", "../../images/vinemini.jpg");
      menu4.style.display=("none");
      bloc4.style.width=("100px");
      bloc4.style.float=("right");

      img2.setAttribute("src", "../../images/menu2mini.jpg");
      menu2.style.display=("none");
      bloc2.style.width=("100px");
      bloc2.style.float=("right");

      img1.setAttribute("src", "../../images/menu1mini.jpg");
      menu1.style.display=("none");
      bloc1.style.width=("100px");
      bloc1.style.float=("right");

      openMenu.style.display=("block");
      text3.style.display=("block");
      text1.style.display=("none");
      text2.style.display=("none");
      text4.style.display=("none");
      
      bloc3.classList.add("is-active");
    }
    bloc1.classList.remove("is-active");
    bloc2.classList.remove("is-active");
    bloc4.classList.remove("is-active");
  },
  false
);

img4.addEventListener(
  'click',
  function()
  {
    if(bloc4.classList.contains("is-active"))
    {
      img3.setAttribute("src", "../../images/menu3.jpg");
      menu3.style.display=("block");
      bloc3.style.width=("25%");
      bloc3.style.float=("left");

      img2.setAttribute("src", "../../images/menu2.jpg");
      menu2.style.display=("block");
      bloc2.style.width=("25%");
      bloc2.style.float=("left");

      img1.setAttribute("src", "../../images/menu1.jpg");
      menu1.style.display=("block");
      bloc1.style.width=("25%");
      bloc1.style.float=("left");

      openMenu.style.display=("none");
      text4.style.display=("none");
      
      bloc4.classList.remove("is-active");
    }
    else
    {
      img3.setAttribute("src", "../../images/menu3mini.jpg");
      menu3.style.display=("none");
      bloc3.style.width=("100px");
      bloc3.style.float=("right");

      img2.setAttribute("src", "../../images/menu2mini.jpg");
      menu2.style.display=("none");
      bloc2.style.width=("100px");
      bloc2.style.float=("right");

      img1.setAttribute("src", "../../images/menu1mini.jpg");
      menu1.style.display=("none");
      bloc1.style.width=("100px");
      bloc1.style.float=("right");

      openMenu.style.display=("block");
      text4.style.display=("block");
      text2.style.display=("none");
      text3.style.display=("none");
      text1.style.display=("none");
      
      bloc4.classList.add("is-active");
    }
    bloc2.classList.remove("is-active");
    bloc3.classList.remove("is-active");
    bloc1.classList.remove("is-active");
  },
  false
);


