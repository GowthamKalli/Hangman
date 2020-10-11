var canvas;
var gameState = 0;
var form;
var lang;



function preload()
{
	
}

function setup() {

   canvas = createCanvas(window.innerWidth,window.innerHeight);

   form = new Form()
   lang = new Languages();

   if(gameState === 0){

     form.display();

   }


}


function draw() {

  
}



