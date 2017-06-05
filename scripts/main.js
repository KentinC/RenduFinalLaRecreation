var menu1 = document.querySelector(".textMenu1");
var menu2 = document.querySelector(".textMenu2");
var menu3 = document.querySelector(".textMenu3");
var menu4 = document.querySelector(".textMenu4");
var img1 = document.querySelector(".menu1 img");
var img2 = document.querySelector(".menu2 img");
var img3 = document.querySelector(".menu3 img");
var img4 = document.querySelector(".menu4 img");
var bloc1 = document.querySelector(".menu1");
var bloc2 = document.querySelector(".menu2");
var bloc3 = document.querySelector(".menu3");
var bloc4 = document.querySelector(".menu4");
var text = document.querySelector(".openMenu");

img1.addEventListener(
  'click',
  function()
  {
    if(bloc1.classList.contains("is-active"))
      {
        img2.setAttribute("src", "../../images/menu2.jpg");
        menu2.classList.add(".textMenu2");
        bloc2.style.width=("25%");
        bloc2.style.float=("left");
        
        img3.setAttribute("src", "../../images/menu3.jpg");
        menu3.classList.add(".textMenu3");
        bloc3.classList.remove(".onclick");
        
        img4.setAttribute("src", "../../images/vine.jpg");
        menu4.classList.add(".textMenu2");
        bloc4.classList.remove(".onclick");
        
        text.style.display=("none");
      }
    else
      {
        img2.setAttribute("src", "../../images/menu2mini.jpg");
        menu2.innerHTML=("");
        bloc2.style.width=("100px");
        bloc2.style.float=("right");

        img3.setAttribute("src", "../../images/menu3mini.jpg");
        menu3.innerHTML=("");
        bloc3.style.width=("100px");
        bloc3.style.float=("right");

        img4.setAttribute("src", "../../images/vinemini.jpg");
        menu4.innerHTML=("");
        bloc4.style.width=("100px");
        bloc4.style.float=("right");
        
        text.style.display=("block");
      }
    bloc1.classList.toggle("is-active");
  },
  false
  );

img2.addEventListener(
  'click',
  function()
  {
    img1.setAttribute("src", "../../images/menu1mini.jpg");
    menu1.innerHTML=("");
    bloc1.style.width=("100px");
    bloc1.style.float=("right");
    
    img3.setAttribute("src", "../../images/menu3mini.jpg");
    menu3.innerHTML=("");
    bloc3.style.width=("100px");
    bloc3.style.float=("right");
    
    img4.setAttribute("src", "../../images/vinemini.jpg");
    menu4.innerHTML=("");
    bloc4.style.width=("100px");
    bloc4.style.float=("right");
  },
  false
  );

img3.addEventListener(
  'click',
  function()
  {
    img1.setAttribute("src", "../../images/menu1mini.jpg");
    menu1.innerHTML=("");
    bloc1.style.width=("100px");
    bloc1.style.float=("right");
    
    img2.setAttribute("src", "../../images/menu2mini.jpg");
    menu2.innerHTML=("");
    bloc2.style.width=("100px");
    bloc2.style.float=("right");
    
    img4.setAttribute("src", "../../images/vinemini.jpg");
    menu4.innerHTML=("");
    bloc4.style.width=("100px");
    bloc4.style.float=("right");
  },
  false
  );

img4.addEventListener(
  'click',
  function()
  {
    img1.setAttribute("src", "../../images/menu1mini.jpg");
    menu1.innerHTML=("");
    bloc1.style.width=("100px");
    bloc1.style.float=("right");
    
    img2.setAttribute("src", "../../images/menu2mini.jpg");
    menu2.innerHTML=("");
    bloc2.style.width=("100px");
    bloc2.style.float=("right");
    
    img3.setAttribute("src", "../../images/menu3mini.jpg");
    menu3.innerHTML=("");
    bloc3.style.width=("100px");
    bloc3.style.float=("right");
  },
  false
  );