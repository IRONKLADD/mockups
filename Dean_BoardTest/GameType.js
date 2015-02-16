function GameType(){
	var board;
	var selected = new Array();
	var selectCount = 0;
	this._makeBoard    = _makeBoard;
	this.getBoard      = getBoard;
	this.selectShell   = selectShell;
	_makeBoard();

	function _makeBoard(){
		console.log("all good captain");
		board = new TempBoard(config.getWidth(),config.getHeight());
		console.log(board.printArr());
		console.log("poop deck");
	}
	function getBoard(){
		console.log("all good captainerino");
		console.log(board.printArr());
		return board;
	}
	function selectShell(row,col){
		selected[selectCount] = row;
		selectCount = selectCount + 1;
		selected[selectCount] = col;
		selectCount = selectCount + 1;
		if(selectCount === 4){
			var temp1 = selected[0];
			var temp2 = selected[1];
			var temp3 = selected[2];
			var temp4 = selected[3];
			console.log(temp1);
			console.log(temp2);
			console.log("HERE BE BOOTY");
			var temp5 = board.get(temp1,temp2);

			board.set(temp1,temp2,board.get(temp3,temp4));
			console.log("No problems");
			board.set(temp3,temp4,temp5);

			selectCount = 0;
		}		
	}
}