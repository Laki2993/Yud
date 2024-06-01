
let Language = document.getElementById("l1");
let MOd = document.getElementById("modify");
let Sel = document.getElementById("sel");
Language.addEventListener('click',()=>{
MOd.className ="mod1"
})
let SelectBtn = document.getElementById("selLen");
SelectBtn.onclick = (event) =>{
  MOd.className = "mod";
  event.preventDefault();
  if(Sel.selectedIndex == 0){
  document.getElementById("txt1").innerHTML ="Калькуляторы - незаменимый инструмент в<br> повседневной жизни. Они помогают быстро<br>и точно решать математические задачи, делать<br> финансовые расчеты и многое другое. "
  document.getElementById("txt2").innerHTML = "Но что делать, если у вас нет обычного калькулятора? ";
  document.getElementById("txt3").innerHTML = "В этом случае на помощь приходит наш сайт , который<br> доступен  на пк и мобильных устройствах.<br>Стандартные сложение,вычитание,умножение,деление, <br> а так интегралы,синус,косинус и прочее имеется на<br> нашем сайте."
  document.getElementById("a1").innerHTML = "О приложении";
  document.getElementById("a2").innerHTML = "Условия обслуживания";
  document.getElementById("a3").innerHTML = "Политика конфиденциальности";
  document.getElementById("a4").innerHTML = "Популярные задачи";
  document.getElementById("a5").innerHTML = "Язык";
  }
  else{
  document.getElementById("txt1").innerHTML = " Calculators are an indispensable tool in everyday life. They help quickly<br>and accurately solve mathematical problems, do financial calculations and much more.";
  document.getElementById("txt2").innerHTML = "But what if you don't have a regular calculator?";
  document.getElementById("txt3").innerHTML ="  In this case, our website comes to the rescue, which is available on PCs and mobile devices.<br>Standard addition,subtraction,multiplication,division, <br> aswell as integrals,sine,cosine, etc. are available on our website.";
  document.getElementById("a1").innerHTML = "About the app";
  document.getElementById("a2").innerHTML = "Terms of service";
  document.getElementById("a3").innerHTML = "Privacy policy";
  document.getElementById("a4").innerHTML = "Popular tasks";
  document.getElementById("a5").innerHTML = "Language";
  }
}
