var roll_btn=document.getElementById("button")
roll_btn.addEventListener('click',function(e){



var random1=Math.floor(Math.random()*6)+1

var randomimg1="images/dice"+random1+".png"

var img1=document.getElementById("img1")
img1.setAttribute("src",randomimg1)

var random2=Math.floor(Math.random()*6)+1

var randomimg2="images/dice"+random2+".png"

var img2=document.getElementById("img2")
img2.setAttribute("src",randomimg2)

var respointer=document.getElementById("result")
if(random1>random2)
respointer.innerHTML="player1 wins"
else if(random1<random2)
respointer.innerHTML="player2 wins"
else
respointer.innerHTML="draw"

})