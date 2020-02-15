const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use('/water.png/', express.static('./water.png'));
app.use('/miss.png/', express.static('./miss.png'));
app.use('/hit.png/', express.static('./hit.png'));

var seas=[];
var scores = [];
const empty = 0;
var hit = 2;
var miss = 1;
var guess1 = 0;
var countTries = 0;
var countMisses = 0;
var countHits = 0;
var an="";
var loc=0;
    var aircraft = 5;
    var battleship = 4;
	var cruiser = 3;
	var submarine = 3;
    var destroyer = 2;
	var ships = [aircraft, battleship, cruiser, submarine, destroyer];
    var randFunction = Math.floor(Math.random()*2);
          var state=0;
          var shiptype=0;
          var view=0;
          var board= "";
          var html = "";
          var line = "";

//CALLINGS
initGame(100);
//sayHello("Joanna");
//alert('name');
//alert(sayHello);
runLocator(randFunction, ships);

//creates ass. array
function initGame(n){  
        seas[i] = new Array();
        
        for (var i=0; i<n; i++){
         
             seas[i]={
                  loc: loc[i],
                  view: view[i],
                  state: state[i],
                  shiptype: shiptype[i]
              }; 
            // adds number to terminals view
            seas[i].loc=i;
            seas[i].view=0;
            seas[i].state=0;
            seas[i].shiptype=0;
        } 
};

//chooses randomly (from ships array) for each ship to be sideways or horizontal
function runLocator(randFunction, ships) {
		
		for (var i = 0; i < ships.length; i++) {
			if (randFunction == 1) {
				locateSideways(ships[i]);
				randFunction = Math.floor(Math.random()*2);
			} else {
				locateDown(ships[i]);
				randFunction = Math.floor(Math.random()*2);
			}
		}
	}	

function locateSideways(ship) {
		switch (ship) {
			case 2:
				var loc = Math.floor(Math.random()*98);
				var locate = true;
				
				while (locate) {
					if (!(seas[loc] > 1) && !(seas[loc + 1] > 1) && !((loc + 1) % 10 == 0)) {

                    // adds number to terminals view 
                    seas[loc].loc=loc;
                    seas[loc].view=0;
                    seas[loc].state=0;
                    seas[loc].shiptype=2;
                    seas[loc+1].loc=loc+1;
                    seas[loc+1].view=0;
                    seas[loc+1].state=0;
                    seas[loc+1].shiptype=2;

                    locate = false;
                     
					}else {
						loc = Math.floor(Math.random()*98);
					}
				}
				break;
			case 3:
				var loc = Math.floor(Math.random()*98);
				var locate = true;
				
				while (locate) {
				
					if (!(seas[loc] > 1) && !(seas[loc + 1] > 1) &&  !(seas[loc + 2] > 1)
						&& !((loc + 1) % 10 == 0) && !((loc + 2) % 10 == 0)) {
                        
                        seas[loc].loc=loc;
                        seas[loc].view=0;
                        seas[loc].state=0;
                        seas[loc].shiptype=3;
                        seas[loc+1].loc=loc+1;
                        seas[loc+1].view=0;
                        seas[loc+1].state=0;
                        seas[loc+1].shiptype=3;
                        seas[loc+2].loc=loc+2;
                        seas[loc+2].view=0;
                        seas[loc+2].state=0;
                        seas[loc+2].shiptype=3;

						locate = false;
					}else {
						loc = Math.floor(Math.random()*98);
					}
				}
				break;
			case 4:
				var loc = Math.floor(Math.random()*98);
				var locate = true;
				
				while (locate) {
				
					if (!(seas[loc] > 1) && !(seas[loc + 1] > 1) && !(seas[loc + 2] > 1) 
						&& !(seas[loc + 3] > 1)&& !((loc + 1) % 10 == 0) && !((loc + 2) % 10 == 0)
						&& !((loc + 3) % 10 == 0)){
                        seas[loc].loc=loc;
                        seas[loc].view=0;
                        seas[loc].state=0;
                        seas[loc].shiptype=4;
                        seas[loc+1].loc=loc+1;
                        seas[loc+1].view=0;
                        seas[loc+1].state=0;
                        seas[loc+1].shiptype=4;
                        seas[loc+2].loc=loc+2;
                        seas[loc+2].view=0;
                        seas[loc+2].state=0;
                        seas[loc+2].shiptype=4;
                        seas[loc+3].loc=loc+3;
                        seas[loc+3].view=0;
                        seas[loc+3].state=0;
                        seas[loc+3].shiptype=4;
                        
						locate = false;
					}else {
						loc = Math.floor(Math.random()*98);
					}
				}
				break;
			case 5:
				var loc = Math.floor(Math.random()*98);
				var locate = true;
				
				while (locate) {
				
					if (!(seas[loc] > 1) && !(seas[loc + 1] > 1) && !(seas[loc + 2] > 1) 
						&& !(seas[loc + 3] > 1) && !(seas[loc + 4] > 1)&& !((loc + 1) % 10 == 0) && !((loc + 2) % 10 == 0)
						&& !((loc + 3) % 10 == 0)&& !((loc + 4) % 10 == 0)){
                        seas[loc].loc=loc;
                        seas[loc].view=0;
                        seas[loc].state=0;
                        seas[loc].shiptype=5;
                        seas[loc+1].loc=loc+1;
                        seas[loc+1].view=0;
                        seas[loc+1].state=0;
                        seas[loc+1].shiptype=5;
                        seas[loc+2].loc=loc+2;
                        seas[loc+2].view=0;
                        seas[loc+2].state=0;
                        seas[loc+2].shiptype=5;
                        seas[loc+3].loc=loc+3;
                        seas[loc+3].view=0;
                        seas[loc+3].state=0;
                        seas[loc+3].shiptype=5;
                        seas[loc+4].loc=loc+4;
                        seas[loc+4].view=0;
                        seas[loc+4].state=0;
                        seas[loc+4].shiptype=5;
						locate = false;
					}else {
						loc = Math.floor(Math.random()*98);
					}	
				}
				break;
		}
		
	}
function locateDown(ship) {
		switch (ship) {
			case 2:
				var loc = Math.floor(Math.random()*89);
				var locate = true;
				while (locate) {
					if (!(seas[loc] > 1) && !(seas[loc+10] > 1)) {
					
            // adds number to terminals view
            seas[loc].loc=loc;
            seas[loc].view=0;
            seas[loc].state=0;
            seas[loc].shiptype=2;
                  
            // adds number to terminals view
            seas[loc+10].loc=loc+10;
            seas[loc+10].view=0;
            seas[loc+10].state=0;
            seas[loc+10].shiptype=2;
						locate = false;
					}else {
						loc = Math.floor(Math.random()*89);
					}
				}
				break;
			case 3:
				var loc = Math.floor(Math.random()*79);
				var locate = true;
				while (locate) {
					if (!(seas[loc] > 1) && !(seas[loc+10] > 1) && !(seas[loc+20] > 1)) {
                        seas[loc].loc=loc;
                        seas[loc].view=0;
                        seas[loc].state=0;
                        seas[loc].shiptype=3;
                        seas[loc+10].loc=loc+10;
                        seas[loc+10].view=0;
                        seas[loc+10].state=0;
                        seas[loc+10].shiptype=3;
                        seas[loc+20].loc=loc+20;
                        seas[loc+20].view=0;
                        seas[loc+20].state=0;
                        seas[loc+20].shiptype=3;
                        
						locate = false;
					}else {
						loc = Math.floor(Math.random()*79);
					}
				}
				break;
			case 4:
				var loc = Math.floor(Math.random()*69);
				var locate = true;
				while (locate) {
					if (!(seas[loc] > 1) && !(seas[loc+10] > 1) && !(seas[loc+20] > 1)
					    && !(seas[loc+30] > 1)) {
                        
                        seas[loc].loc=loc;
                        seas[loc].view=0;
                        seas[loc].state=0;
                        seas[loc].shiptype=4;
                        seas[loc+10].loc=loc+10;
                        seas[loc+10].view=0;
                        seas[loc+10].state=0;
                        seas[loc+10].shiptype=4;
                        seas[loc+20].loc=loc+20;
                        seas[loc+20].view=0;
                        seas[loc+20].state=0;
                        seas[loc+20].shiptype=4;
                        seas[loc+30].loc=loc+30;
                        seas[loc+30].view=0;
                        seas[loc+30].state=0;
                        seas[loc+30].shiptype=4;
                        
						locate = false;
					}else {
						loc = Math.floor(Math.random()*69);
					}
				}
				break;
			case 5:
				var loc = Math.floor(Math.random()*59);
				var locate = true;
				while (locate) {
					if (!(seas[loc] > 1) && !(seas[loc+10] > 1) && !(seas[loc+20] > 1)
					    && !(seas[loc+30] > 1) && !(seas[loc+40] > 1)){
                        seas[loc].loc=loc;
                        seas[loc].view=0;
                        seas[loc].state=0;
                        seas[loc].shiptype=5;
                        seas[loc+10].loc=loc+10;
                        seas[loc+10].view=0;
                        seas[loc+10].state=0;
                        seas[loc+10].shiptype=5;
                        seas[loc+20].loc=loc+20;
                        seas[loc+20].view=0;
                        seas[loc+20].state=0;
                        seas[loc+20].shiptype=5;
                        seas[loc+30].loc=loc+30;
                        seas[loc+30].view=0;
                        seas[loc+30].state=0;
                        seas[loc+30].shiptype=5;
                        seas[loc+40].loc=loc+40;
                        seas[loc+40].view=0;
                        seas[loc+40].state=0;
                        seas[loc+40].shiptype=5;
                    locate = false;
					}else {
						loc = Math.floor(Math.random()*59);
					}
				}
				break;
		}	
	}
 
//**********ROUTES************************

app.get('/', (req, res) => {
    var html = "";
    html += htmlStart();
    html += htmlNewGame();
    html += htmlScore();
    html += htmlStats();
    html += htmlEnd();
    res.send (html); 
});

app.get('/newGame/', (req,res) => {
    countTries = 0;
	countMisses = 0;
	countHits = 0;
	var html = "";
	html += htmlStart();
    html +=htmlName();
    initGame(100);
    runLocator(randFunction, ships);
	html += htmlEnd();
	res.send (html);
	console.log("Starting new game");
	
});
 app.post('/newGame/:name', (req, res) => {
     console.log(req.params);
     console.log(req.params.name);
     tt='';
     //tt+=gl(req.params.name);
     tt+="<h2>You have 25 tries</h2>";
     tt+="<h1>Good Luck!</h1>";
     tt+="<a href='http://localhost:3200/api/guess/11'>";
	 tt+="<button>start</button></a>";
     res.send(tt);
});  

app.get('/api/guess/:id', (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    console.log(req.params.id+1);
    console.log(sum([req.params.id,1])); //shows actual loc# ->may convert instead ofguess.id to match
    console.log(seas); //shows board in terminal 
   
    if(seas[parseInt(req.params.id)].state='0'){
       if ((seas[parseInt(req.params.id)].state='1')&&(seas[parseInt(req.params.id)].shiptype>1)){//hit
          countHits++;
           countTries++;
            an='<h3>YEAH!</h3>';   
        }else{
            (seas[parseInt(req.params.id)].state='1');//miss
            countMisses++;
            countTries++;
            an='<h3>Ups!</h3>';
       }
    }
    
    //creates clikable(link) BOARD
    var board="";
    board='<h2>Battleship Game Board</h2>'
     +an +"TRIES: "+countTries+ " HITS: " +countHits + " Miss: "+countMisses+ " ship type " + seas[req.params.id].shiptype+"</br>";//)  
    
        var i;  
        for (i = 0; i < seas.length; i++){  

            board += "<a href=";    
            var temp = "http://localhost:3200/api/guess/" + i; 
            var quoteText = `"${temp}"`;   
            board +=  quoteText + ">";     
               //now board="<a href="http://localhost:3200/api/guess/i"> later+ </a>
                //adds pictures
                if ((seas[i].state==1)&&(seas[i].shiptype==0)){
                    board += "<img src='/miss.png'>";
                    
                } else if((seas[i].state==1)&&(seas[i].shiptype>1)){
                    board += "<img src='/hit.png'>";
                    
                } else if((seas[i].shiptype>1)&&(seas[i].state==0)){
                    board += "<img src='/water.png'>";
                }else {
                    board += "<img src='/water.png'>";
                };
                //breaks items every 10th element
                if ((i-9) % 10 === 0) {
                    board+='<br>';
                }  
             board += "</a>";   

             if ((seas[i].state) === '0'){ 
                 board += " X ";
                }else{
                    board = board + "";

             }
         /*  may implement later to show what ships was just sunk using perhaps seas[id].view   
         var a =0;  
                if((seas[req.params.id].shiptype==5)&&(seas[req.params.id].state==1)){

                    a++;
                    if(a==5){
                        an="You hit aircraft!";
                }
                };
                if((seas[req.params.id].shiptype==4)&&(seas[req.params.id].state==1)){
                    var b=0;
                        b++;
                    if(b==4){
                        an="You hit battleship!"
                    }
                };
                if((seas[req.params.id].shiptype==3)&&(seas[req.params.id].state==1)){
                    var c=0;
                        c++;
                    if(c==2){
                        an="I bet it was a submarine!"
                    }
                };
                if((seas[req.params.id].shiptype==2)&&(seas[req.params.id].state==1)){
                    var d=0;
                        d++;
                    if(d==2){
                        an="You hit destroyer!"
                    }  
            };          */
        };
    
     if (seas[req.params.id].state='1'){                        
            // an="a kuku"; 
    }    
    if (countHits == 17){
		board += '<h1>You sunk the battleships!</h1>'
	}
	if (countTries >= 25){
		board += '<h1>Sorry! Ships escaped!</h1>'
	}
    res.send(board);
    res.end();
})


//****************FUNCTIONS**********************

function htmlStart(){
    var str = "";
    str += '<!DOCTYPE html>';
    str += "<html>";
    str += "<head>";
    str += "</head>";
    str += "<body>";
    str += "<h1>Welcome to Battleship Game</h1>";
    return str;
}

function htmlStats(){
	var str = '';
	str += '<p>Hits:' + countHits + '</p>';
	str += '<p>Misses:' + countMisses + '</p>';
	str += '<p>Tries:' + countTries + '</p>';
	return str;
};

function htmlNewGame(){
	var str = '';
	str += '<a href="http://localhost:3200/newgame/"><button>NewGame</button></a>';
	return str;
};

function htmlScore(){
	var str = '';
	str += "<p>SCORES</p>"
	var n = scores.length;
	if(n > 0){
		for(var i = 0; i < n; i++){
			str += '<p>Misses Before Win: ' + scores[i] + '</p>';
		}
	} else {
		str += '<p>no scores yet</p>'
	}
	return str;
};    

function htmlName(){
    var n="";
    n += "<h3>Write your name here:</h3>";
    n+="<form action='/newGame/:name' method='POST'>";
    n+="<input type='text' name='name'/>";
    n+="<button type='submit'>Submit</button>"
    n+="</form>";
    
    //var g = '';
	//temp = '<a href="http://localhost:3200';
   // g+=`"${temp}"`; 
    //g +='/api/guess/11"><button>start</button></a>';
	//n+=g;
    return n;
};

function htmlEnd(){
var str = '';
str += '</body>';
str += '</html>';
return str;
};

function gl(){
    var g='';
    g+='<h1>Good LUCK!</h1>' 
    return g;
};

function sum(input){
             
 if (toString.call(input) !== "[object Array]")
    return false;
      
            var total =  0;
            for(var i=0;i<input.length;i++)
              {                  
                if(isNaN(input[i])){
                continue;
                 }
                  total += Number(input[i]);
               }
             return total;
};

function sayHello(name){
    alert('hi');
    var noname=true;
//    while(noname){
//    var name= window.prompt("Enter your name:");
//        return parseInt(name);
//    }
   // alert.log('Hello '+ name);
    console.log('Hello '+ name);
    name='<h1>hi</h1>';
    return parseInt(name);
};
function alert(x){ 
            x === 'undefined' ? window.prompt(x) : console.log(x); return; 
 }; 
 
//app.listen(3200, () => console.log('Listening'))

//dynamic port assigment
const PORT = process.env.PORT || 3200  //dynamic port assigment 
console.log("Listening on port " + PORT + ", go to http://localhost:" + PORT);
app.listen(PORT);
