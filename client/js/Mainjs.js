let SSS = Math.sin(2);
console.log(SSS);
let Input = document.getElementById("in");
let Language = document.getElementById("1l");
let MOd = document.getElementById("modify");
let Sel = document.getElementById("sel");
let SelectBtn = document.getElementById("selLen");
SelectBtn.onclick = (event) =>{
  Language.addEventListener('click',()=>{
    MOd.className ="mod1"
  })
  MOd.className = "mod";
  event.preventDefault();
  if(Sel.selectedIndex == 0){
    Otvet.innerHTML = "Решить";
    document.getElementById("a1").innerHTML = "О приложении";
    document.getElementById("a2").innerHTML = "Условия обслуживания";
    document.getElementById("a3").innerHTML = "Политика конфиденциальности";
    document.getElementById("a4").innerHTML = "Популярные задачи";
    document.getElementById("a5").innerHTML = "Язык";
  }
  else{
    Otvet.innerHTML = "Solve";
    document.getElementById("a1").innerHTML = "About the app";
    document.getElementById("a2").innerHTML = "Terms of service";
    document.getElementById("a3").innerHTML = "Privacy policy";
    document.getElementById("a4").innerHTML = "Popular tasks";
    document.getElementById("a5").innerHTML = "Language";
  }
}
let Lanlink = document.getElementById("a5");
Lanlink.addEventListener("click",()=>{ 
  MOd.className = "mod1";
});
// document.getElementById("b1").addEventListener("click",() =>{Input.value += 'x'; });
// document.getElementById("b2").addEventListener("click",() =>{Input.value += 'y'; });
// document.getElementById("b3").addEventListener("click",() =>{Input.value += '('; });
// document.getElementById("b4").addEventListener("click",() =>{Input.value += ')'; });
// // document.getElementById("b5").addEventListener("click",() =>{Input.value += '%'; });
// document.getElementById("b6").addEventListener("click",() =>{Input.value += '<'; });
// document.getElementById("b7").addEventListener("click",() =>{Input.value += '>'; });

document.getElementById("b8").addEventListener("click",() =>{ 
  if(document.getElementById("b8").style.backgroundColor === "white"){
    document.getElementById("b8").style.backgroundColor = "pink" ;
  }
  else{
    document.getElementById("b8").style.backgroundColor = "white";
    }
  }
);

document.getElementById("b9").addEventListener("click",() =>{
  if(document.getElementById("b9").style.backgroundColor === "white"){
    document.getElementById("b9").style.backgroundColor = "pink" ;
  }
  else{
    document.getElementById("b9").style.backgroundColor = "white";
    }
  }
 );


document.getElementById("b10").addEventListener("click",() =>{
  if(document.getElementById("b10").style.backgroundColor === "white"){
    document.getElementById("b10").style.backgroundColor = "pink" ;
  }
  else{
    document.getElementById("b10").style.backgroundColor = "white";
    }
  }
 );
document.getElementById("b11").addEventListener("click",() =>{Input.value += '1'; });
document.getElementById("b12").addEventListener("click",() =>{Input.value += '2'; });
document.getElementById("b13").addEventListener("click",() =>{Input.value += '3'; });
document.getElementById("b14").addEventListener("click",() =>{Input.value += '+'; });
document.getElementById("b15").addEventListener("click",() =>{
  if(document.getElementById("b15").style.backgroundColor === "white"){
    document.getElementById("b15").style.backgroundColor = "pink" ;
  }
  else{
    document.getElementById("b15").style.backgroundColor = "white";
    }
  }
 );
document.getElementById("b16").addEventListener("click",() =>{
  if(document.getElementById("b16").style.backgroundColor === "white"){
    document.getElementById("b16").style.backgroundColor = "pink" ;
  }
  else{
    document.getElementById("b16").style.backgroundColor = "white";
    }
  });
document.getElementById("b17").addEventListener("click",() =>{
  document.getElementById("x").style.display = "grid";
  if(document.getElementById("b17").style.backgroundColor === "white"){
    document.getElementById("b17").style.backgroundColor = "pink" ;
  }
  else{
    document.getElementById("b17").style.backgroundColor = "white";
    }
  });
document.getElementById("b18").addEventListener("click",() =>{Input.value += '4'; });
document.getElementById("b19").addEventListener("click",() =>{Input.value += '5'; });
document.getElementById("b20").addEventListener("click",() =>{Input.value += '6'; });
document.getElementById("b21").addEventListener("click",() =>{Input.value += '-'; });
document.getElementById("b22").addEventListener("click",() =>{Input.value += '(';   });
document.getElementById("b23").addEventListener("click",() =>{Input.value += ')'; });
document.getElementById("b24").addEventListener("click",() =>{Input.value += '>'; });
document.getElementById("b25").addEventListener("click",() =>{Input.value += '7'; });
document.getElementById("b26").addEventListener("click",() =>{Input.value += '8'; });
document.getElementById("b27").addEventListener("click",() =>{Input.value += '9'; });   
document.getElementById("b28").addEventListener("click",() =>{Input.value += '^'; });
document.getElementById("b29").addEventListener("click",() =>{Input.value += "<"});
document.getElementById("b30").addEventListener("click",() =>{Input.value = ''; });
document.getElementById("b31").addEventListener("click",() =>{Input.value += '3.14'; });
document.getElementById("b32").addEventListener("click",() =>{Input.value += '0'; });
document.getElementById("b33").addEventListener("click",() =>{Input.value += ','; });
document.getElementById("b34").addEventListener("click",() =>{Input.value += '='; });
document.getElementById("b35").addEventListener("click",() =>{Input.value += '/'; });
let Vision = document.getElementById("vision");
Vision.addEventListener("click",()=>{
  if(Vision.className == "vision"){
  document.body.style.backgroundColor = "black";
  document.getElementById("btncalc").style.backgroundColor = "#414141";
  Vision.className = "vision1";
  }
  else{
    document.body.style.backgroundColor = "#FEDDDD";
    document.getElementById("btncalc").style.backgroundColor = "#ffffff";
    Vision.className = "vision"
  }
})

let Board = document.getElementById("board");
Board.addEventListener("click",()=>{
if(Board.className == "board1"){
  document.getElementById("btncalc").className = "buttons"
  Board.className = "board";
}
else{
document.getElementById("btncalc").className = "buttons1"
Board.className = "board1";
}

})
let Complete = document.getElementById("Complete");
let Inp = document.getElementById("inp");
let Otvet = document.getElementById("Reshit");
let Ol = document.getElementById("Ol");
let btnwinexit = document.getElementById("btnwinexit").addEventListener("click",()=>{
  Complete.style.animationName = "exit";
  setTimeout(() => Complete.style.display = "none", 500);
  setTimeout(() => Complete.style.animationName = "exitt", 500);
})

Otvet.addEventListener("click",()=>{
  Complete.style.display = "flex";
  let Ev = eval(Input.value);
  var B = document.createElement('li');
  B.append(Ev);
  Ol.append(B);

  if(document.getElementById("b8").style.backgroundColor=== "pink"){
    let sin = "Sin "+Input.value + " = "+ Math.sin(Input.value);
    let B = document.createElement('li');
    B.append(sin);
    Ol.append(B);
    document.getElementById("b8").style.backgroundColor = "white";
  }
  if(document.getElementById("b9").style.backgroundColor=== "pink"){
    let cos = "Cos "+Input.value + " = "+ Math.cos(Input.value);
    let B = document.createElement('li');
    B.append(cos);
    Ol.append(B);
    document.getElementById("b9").style.backgroundColor = "white";
  }
  if(document.getElementById("b10").style.backgroundColor=== "pink"){
    let tg = "tg "+Input.value + " = "+ Math.tan(Input.value);
    let B = document.createElement('li');
    B.append(tg);
    Ol.append(B);
    document.getElementById("b10").style.backgroundColor = "white";
  }
  if(document.getElementById("b15").style.backgroundColor=== "pink"){
    let Ctg = "Ctg " + Input.value + " = "+  Math.cos(Input.value)/Math.sin(Input.value);
    let B = document.createElement('li');
    B.append(Ctg);
    Ol.append(B);
    document.getElementById("b15").style.backgroundColor = "white";
  }
  if(document.getElementById("b16").style.backgroundColor=== "pink"){
    let koren = "√ " + Input.value + " = "+  Math.sqrt(Input.value);
    let B = document.createElement('li');
    B.append(koren);
    Ol.append(B);
    document.getElementById("b16").style.backgroundColor = "white";
  }
  
  if(document.getElementById("b17").style.backgroundColor=== "pink"){
     
    switch (document.getElementById("x").selectedIndex) {
      case 0:
        var pow = Input.value +" ¹ " + " = "+  Math.pow(Input.value,1);
        var B = document.createElement('li');
        B.append(pow);
        Ol.append(B);
        break;
  
        case 1:
        var pow = Input.value +" ² " + " = "+  Math.pow(Input.value,2);
        var B = document.createElement('li');
        B.append(pow);
        Ol.append(B);
        break;
  
        case 2:
        var pow = Input.value +" ³ " + " = "+  Math.pow(Input.value,3);
        var B = document.createElement('li');
        B.append(pow);
        Ol.append(B);
        break;
  
        case 3:
        var pow = Input.value +" ⁴ " + " = "+  Math.pow(Input.value,4);
        var B = document.createElement('li');
        B.append(pow);
        Ol.append(B);
        break;
  
        case 4:
        var pow = Input.value +" ⁵ " + " = "+  Math.pow(Input.value,5);
        var B = document.createElement('li');
        B.append(pow);
        Ol.append(B);
        break;
  
        case 5:
        var pow = Input.value +" ⁶ " + " = "+  Math.pow(Input.value,6);
        var B = document.createElement('li');
        B.append(pow);
        Ol.append(B);
        break;
  
        case 6:
        var pow = Input.value +" ⁷ " + " = "+  Math.pow(Input.value,7);
        var B = document.createElement('li');
        B.append(pow);
        Ol.append(B);
        break;
  
        case 7:
        var pow = Input.value +" ⁸ " + " = "+  Math.pow(Input.value,8);
        var B = document.createElement('li');
        B.append(pow);
        Ol.append(B);
        break;
  
        case 8:
        var pow = Input.value +" ⁹ " + " = "+  Math.pow(Input.value,9);
        var B = document.createElement('li');
        B.append(pow);
        Ol.append(B);
        break;
  
        case 9:
        var pow = Input.value +" ¹⁰ " + " = "+  Math.pow(Input.value,10);
        var B = document.createElement('li');
        B.append(pow);
        Ol.append(B);
        break;
  
      default:
        break;
    }
    document.getElementById("x").style.display = "none";
    document.getElementById("b17").style.backgroundColor = "white";
  };
})

 




