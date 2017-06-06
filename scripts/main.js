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
      bloc2.style.display=("block");
      menu2.style.display=("block");

      bloc3.style.display=("block");
      menu3.style.display=("block");

      bloc4.style.display=("block");
      menu4.style.display=("block");

      openMenu.style.display=("none");
      text1.style.display=("none");
    }
    else
    {
      bloc4.style.display=("none");
      menu4.style.display=("none");

      bloc3.style.display=("none");
      menu3.style.display=("none");

      bloc2.style.display=("none");
      menu2.style.display=("none");

      openMenu.style.display=("block");
      text1.style.display=("block");
      text2.style.display=("none");
      text3.style.display=("none");
      text4.style.display=("none");

    }
    bloc1.classList.toggle("is-active");
  },
  false
);

img2.addEventListener(
  'click',
  function()
  {
    if(bloc2.classList.contains("is-active"))
    {
      bloc1.style.display=("block");
      menu1.style.display=("block");

      bloc3.style.display=("block");
      menu3.style.display=("block");

      bloc4.style.display=("block");
      menu4.style.display=("block");

      openMenu.style.display=("none");
      text1.style.display=("none");
    }
    else
    {
      bloc4.style.display=("none");
      menu4.style.display=("none");

      bloc3.style.display=("none");
      menu3.style.display=("none");

      bloc1.style.display=("none");
      menu1.style.display=("none");

      openMenu.style.display=("block");
      text2.style.display=("block");
      text1.style.display=("none");
      text3.style.display=("none");
      text4.style.display=("none");

    }
    bloc2.classList.toggle("is-active");
  },
  false
);

img3.addEventListener(
  'click',
  function()
  {
    if(bloc3.classList.contains("is-active"))
    {
      bloc2.style.display=("block");
      menu2.style.display=("block");

      bloc1.style.display=("block");
      menu1.style.display=("block");

      bloc4.style.display=("block");
      menu4.style.display=("block");

      openMenu.style.display=("none");
      text1.style.display=("none");
    }
    else
    {
      bloc4.style.display=("none");
      menu4.style.display=("none");

      bloc1.style.display=("none");
      menu1.style.display=("none");

      bloc2.style.display=("none");
      menu2.style.display=("none");

      openMenu.style.display=("block");
      text3.style.display=("block");
      text2.style.display=("none");
      text1.style.display=("none");
      text4.style.display=("none");

    }
    bloc3.classList.toggle("is-active");
  },
  false
);

img4.addEventListener(
  'click',
  function()
  {
    if(bloc4.classList.contains("is-active"))
    {
      bloc2.style.display=("block");
      menu2.style.display=("block");

      bloc3.style.display=("block");
      menu3.style.display=("block");

      bloc1.style.display=("block");
      menu1.style.display=("block");

      openMenu.style.display=("none");
      text4.style.display=("none");
    }
    else
    {
      bloc1.style.display=("none");
      menu1.style.display=("none");

      bloc3.style.display=("none");
      menu3.style.display=("none");

      bloc2.style.display=("none");
      menu2.style.display=("none");

      openMenu.style.display=("block");
      text4.style.display=("block");
      text2.style.display=("none");
      text3.style.display=("none");
      text1.style.display=("none");

    }
    bloc4.classList.toggle("is-active");
  },
  false
);

//Part of code for the text
menu1.addEventListener(
  'click',
  function()
  {
    if(bloc1.classList.contains("is-active"))
    {
      bloc2.style.display=("block");
      menu2.style.display=("block");

      bloc3.style.display=("block");
      menu3.style.display=("block");

      bloc4.style.display=("block");
      menu4.style.display=("block");

      openMenu.style.display=("none");
      text1.style.display=("none");
    }
    else
    {
      bloc4.style.display=("none");
      menu4.style.display=("none");

      bloc3.style.display=("none");
      menu3.style.display=("none");

      bloc2.style.display=("none");
      menu2.style.display=("none");

      openMenu.style.display=("block");
      text1.style.display=("block");
      text2.style.display=("none");
      text3.style.display=("none");
      text4.style.display=("none");

    }
    bloc1.classList.toggle("is-active");
  },
  false
);

menu2.addEventListener(
  'click',
  function()
  {
    if(bloc2.classList.contains("is-active"))
    {
      bloc1.style.display=("block");
      menu1.style.display=("block");

      bloc3.style.display=("block");
      menu3.style.display=("block");

      bloc4.style.display=("block");
      menu4.style.display=("block");

      openMenu.style.display=("none");
      text1.style.display=("none");
    }
    else
    {
      bloc4.style.display=("none");
      menu4.style.display=("none");

      bloc3.style.display=("none");
      menu3.style.display=("none");

      bloc1.style.display=("none");
      menu1.style.display=("none");

      openMenu.style.display=("block");
      text2.style.display=("block");
      text1.style.display=("none");
      text3.style.display=("none");
      text4.style.display=("none");

    }
    bloc2.classList.toggle("is-active");
  },
  false
);

menu3.addEventListener(
  'click',
  function()
  {
    if(bloc3.classList.contains("is-active"))
    {
      bloc2.style.display=("block");
      menu2.style.display=("block");

      bloc1.style.display=("block");
      menu1.style.display=("block");

      bloc4.style.display=("block");
      menu4.style.display=("block");

      openMenu.style.display=("none");
      text1.style.display=("none");
    }
    else
    {
      bloc4.style.display=("none");
      menu4.style.display=("none");

      bloc1.style.display=("none");
      menu1.style.display=("none");

      bloc2.style.display=("none");
      menu2.style.display=("none");

      openMenu.style.display=("block");
      text3.style.display=("block");
      text2.style.display=("none");
      text1.style.display=("none");
      text4.style.display=("none");

    }
    bloc3.classList.toggle("is-active");
  },
  false
);

menu4.addEventListener(
  'click',
  function()
  {
    if(bloc4.classList.contains("is-active"))
    {
      bloc2.style.display=("block");
      menu2.style.display=("block");

      bloc3.style.display=("block");
      menu3.style.display=("block");

      bloc1.style.display=("block");
      menu1.style.display=("block");

      openMenu.style.display=("none");
      text4.style.display=("none");
    }
    else
    {
      bloc1.style.display=("none");
      menu1.style.display=("none");

      bloc3.style.display=("none");
      menu3.style.display=("none");

      bloc2.style.display=("none");
      menu2.style.display=("none");

      openMenu.style.display=("block");
      text4.style.display=("block");
      text2.style.display=("none");
      text3.style.display=("none");
      text1.style.display=("none");

    }
    bloc4.classList.toggle("is-active");
  },
  false
);