function Board(gridY,gridX) {

  this.gridX = gridX || 7;
  this.gridY = gridY || 3;
  this.init = init;
  this.swap = swap;
  this.genRandom = genRandom;
  this.printArr = printArr;
  this.initInner = initInner;
  var grid = new Array(this.gridX);
  this.grid = grid;
  this.init();
  

  function init(){
  	for(i = 0;i<this.gridX;i++){
  		grid[i] = new Array(this.gridY);
  		for(j = 0;j<this.gridY;j++){
  			grid[i][j] = genRandom();
  		}
  	}
  }
  function initInner(current){
  	console.log("called on " + current);
  	for(j = 0;j<3;j++){
  		current[j] = genRandom();
  	}
  	console.log(current);
  }
  function swap(temp1,temp2,temp3,temp4){
	console.log("Got1" + temp1);  	
	console.log("Got2" + temp2);
	console.log("Got3" + temp3);
	console.log("Got4" + temp4);

  	var temp = grid[temp1][temp2];
  	grid[temp1][temp2] = grid[temp3][temp4];
  	grid[temp3][temp4] = temp;
  	this.printArr(); 	
  }
  function genRandom(){
  	temp = Math.floor(Math.random() * (4 - 1)) + 1;
  	if(temp === 1){
  		return "Red";
  	}
  	else if(temp == 2){
  		return "Blu";
  	}
  	else{
  		return "Yel";
  	}
  }
  /*function printArr(){
  	var temp = "";
  	console.log(this.gridX);
  	for(i = 0;i<this.gridX;i++){
  		temp = temp + i + "|" +grid[i] + " ";
  	}
  	console.log(temp);
  }*/
  function printArr(){
  	var temp = "";
  	for(i = 0;i<this.gridY;i++){
  		for(j = 0;j<this.gridX;j++){
  			temp = temp +" " + this.grid[j][i];
  		}
  		temp = temp + "\n";
  	}
  	console.log(temp);
  	return temp;
  }
  
  

}


var x = document.createElement("INPUT");
x.setAttribute("type", "text");
x.setAttribute("value", "Hello World!");
x.setAttribute("offsetLeft", '200000px');
x.name="dsfsdfsf";
document.body.appendChild(x);

var board = new Board(10,10);
console.log(board.grid[0][0]);
board.printArr();


