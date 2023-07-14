var a=Math.floor(Math.random()*100)+1;


function guessNumber(){
    var a=parseInt(document.getElementById("guessfield").value);
    if(val==a)
    {
        console.log("Congratulations!!!");
    }
    else if(val < a)
    {
        
    }
}var a=Math.floor(Math.random()*100)+1;
var count=0;

function guessNumber(){
  var val=parseInt(document.getElementById("guessfield").value);
   if(val==a){
   
    document.getElementById("result").textContent=("congratulations!!!,you got the number in "+(count+1)+" tries");
}
else if(val <a)
{
    count++;
    document.getElementById("result").textContent=count+" Try with a greater number";
}
else 
{
    count++;
    document.getElementById("result").textContent=count+" Try with a smaller number";
}
}