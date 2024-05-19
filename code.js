function funcSearch() {
  document.getElementById("mysearch").style.transform = "scale(1)";
  document.getElementById("i-open").style.display = "none";
  document.getElementById("i-open").style.visibility = "hidden";
  document.getElementById("i-close").style.display = "block";
  document.getElementById("i-close").style.visibility = "visible";
}

function closeSearch() {
  document.getElementById("mysearch").style.transform = "scale(0)";
  document.getElementById("i-open").style.display = "block";
  document.getElementById("i-open").style.visibility = "visible";
  document.getElementById("i-close").style.display = "none";
  document.getElementById("i-close").style.visibility = "hidden";
}

function userfunc() {
  document.getElementById("users").style.transform = "scale3d(1,1,1)";
}

function closeuser() {
  document.getElementById("users").style.transform = "scale3d(1,0,1)";
}

function bagfunc() {
  document.getElementById("mybag").style.transform = "scale3d(1,1,1)";
}

function closebag() {
  document.getElementById("mybag").style.transform = "scale3d(1,0,1)";
}

function leftside() {
  document.getElementById("myimg").style.backgroundImage =
    "url('images/main.jpg')";
  document.getElementById("leftball").style.backgroundColor = "black";
  document.getElementById("rightball").style.backgroundColor = "white";
}

function rightside() {
  document.getElementById("myimg").style.backgroundImage =
    "url('images/bg2.jpg')";
  document.getElementById("rightball").style.backgroundColor = "black";
  document.getElementById("leftball").style.backgroundColor = "white";
}

function firstD() {
  document.getElementById("bl1").style.backgroundColor = "var(--maincolor)";
  document.getElementById("bl2").style.backgroundColor = "gray";
  document.getElementById("bl3").style.backgroundColor = "gray";
  document.getElementById("maker").innerHTML = "Penelope Astrid";
  document.getElementById("jop").innerHTML = "(Marketing)";
}

function secondD() {
  document.getElementById("bl1").style.backgroundColor = "gray";
  document.getElementById("bl2").style.backgroundColor = "var(--maincolor)";
  document.getElementById("bl3").style.backgroundColor = "gray";
  document.getElementById("maker").innerHTML = "Luies Charls";
  document.getElementById("jop").innerHTML = "(Web Designer)";
}

function thirdD() {
  document.getElementById("bl1").style.backgroundColor = "gray";
  document.getElementById("bl2").style.backgroundColor = "gray";
  document.getElementById("bl3").style.backgroundColor = "var(--maincolor)";
  document.getElementById("maker").innerHTML = "jecob goeckno";
  document.getElementById("jop").innerHTML = "(HR Manager)";
}

function showVideo() {
  document.getElementById("myvideo").style.display = "block";
}

function closeVideo() {
  document.getElementById("myvideo").style.display = "none";
}

function firstS() {
  document.getElementById("bl11").style.backgroundColor = "var(--maincolor)";
  document.getElementById("bl22").style.backgroundColor = "black";
  document.getElementById("bl33").style.backgroundColor = "black";
  document.getElementById("myname").innerHTML = "Necessitatibus Saepe Eveniet";
  document.getElementById("mydesc").innerHTML =
    'The standard Lorem Ipsum passage, used since the 1500s"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ...';
}

function secondS() {
  document.getElementById("bl11").style.backgroundColor = "black";
  document.getElementById("bl22").style.backgroundColor = "var(--maincolor)";
  document.getElementById("bl33").style.backgroundColor = "black";
  document.getElementById("myname").innerHTML =
    "Quis Autem Reprehender Pariatur";
  document.getElementById("mydesc").innerHTML =
    "1914 translation by H. Rackham But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejectsSection 1.10.33 of de Finibus Bonorum et Malorum At vero eos et accusamus et iusto odio ...  ";
}

function thirdS() {
  document.getElementById("bl11").style.backgroundColor = "black";
  document.getElementById("bl22").style.backgroundColor = "black";
  document.getElementById("bl33").style.backgroundColor = "var(--maincolor)";
  document.getElementById("myname").innerHTML =
    "Voluptatem Accusantium Doloremque";
  document.getElementById("mydesc").innerHTML =
    "If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
}
