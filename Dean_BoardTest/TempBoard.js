function TempBoard(X,Y) {

  var gridX = X || 3;
  var gridY = Y || 3;
  this.init = init;
  this.printArr = printArr;
  this.set = set;
  this.get = get;
  var grid = new Array(this.gridX);
  this.init();
  

  function init(){
  	for(i = 0;i<gridX;i++){
  		grid[i] = new Array(gridY);
  		for(j = 0;j<gridY;j++){
  			grid[i][j] = new Shell();
  		}
  	}
  }
  function printArr(){
  	var temp = "";
  	for(i = 0;i<gridY;i++){
  		for(j = 0;j<gridX;j++){
        console.log(grid[j][i]);
  			temp = temp +" " + grid[j][i].toString();
  		}
  		temp = temp + "\n";
  	}
  	return temp;
  }
  function set(row,column,replace){
    console.log("STIG");
    console.log(row);
    console.log(column);
    grid[row][column] = replace;
  }
  function get(row,column){
    return grid[row][column];
  }
}



