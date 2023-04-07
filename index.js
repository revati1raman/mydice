var r1= Math.floor(Math.random()*6)+1;
var rimg1= "dice"+r1+".png";
document.querySelectorAll("img")[0].setAttribute("src",rimg1);
var r2= Math.floor(Math.random()*6)+1;
var rimg2= "dice"+r2+".png";
document.querySelectorAll("img")[1].setAttribute("src",rimg2);
if(r1>r2)
    document.querySelector("h1").innerHTML="🚩Player 1 wins";
else if(r1<r2)
    document.querySelector("h1").innerHTML="Player 2 wins🚩";
else
    document.querySelector("h1").innerHTML="It's a DRAW";