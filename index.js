var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
var pik="images/dice"+randomNumber1+".png";
var change=document.querySelectorAll("img")[0];
change.setAttribute("src",pik);
var randomNumber2=Math.floor(Math.random()*6)+1;
var pik1="images/dice"+randomNumber2+".png";
var change1=document.querySelectorAll("img")[1];
change1.setAttribute("src",pik1);
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🎉Player1 wins";
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML="Player2 Wins🎊";
}
else
{
  document.querySelector("h1").innerHTML="Draw Match";
}
// console.log(randomNumber1);
// alert("Working!");
