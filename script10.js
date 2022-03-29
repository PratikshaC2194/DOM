//DATA OBJECT MODEL

// Q.1 Write the code to access element which is having id as "text"

//document.getElementById("elevation")

function clickme(){
   // console.log("My button is clicked");

 let result = document.getElementByClassName("dummy1").innerText="This is a class name tag"
 result[0].innerText="HELLO WORLD"
 //document.getElementByID("dummy").innerText="This is a ID"

 let result = document.getElementById("dummy").innerText="This is a ID tag"
 result[0].innerText="HELLO WORLD"

 let result = document.getElementByTagName("tag").innerText="This is a div tag"
 result[0].innerText="HELLO WORLD"

 //Q.2.
 //<h1>Hello </h1>
 //change to hello world
 document.getElementById("change").innerText="Hello World"

 //Q3.

//in html
//<button onclick="clickme()">Change flex direction</button></Click>

//css
//#container
//{

//display: flex;

//}
//.box
//{
  //  height:200px;
    //width:200px;
    //border:2px solid red;
    
//}
//function cclickme()
  //  {
    //    document.getElementById("container").style.flexdirection="coloumn"
    //}


//Q 4.
//html
<div id="chnage"></div>
<button onClick="clickme()">Click me</button>
//js
function clickme()
document.getElementById("change").style.color="red";
document.getElementById("change").style.backgroundcolor="yellow";


//Q 5

fucntion clickme()
//<div id="change"></div>

{
    document.getElementById("changed").innerText="Elevation Academy"
}

//Q6 

function getoption()
{
    var result =document.getElementById("text");
    var result2=result.value
    document.getElementById("output").innerText=result2
}

