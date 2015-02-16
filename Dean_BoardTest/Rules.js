function Rules(rulesFile){
	var allowedColor = new Array();
	var allowedNumber = new Array();
	var allowedSpecial = new Array();
	this.getColor = getColor;
	this.getNumber = getNumber;
	this.getNumber = getNumber;

	allowedColor = ["Red","Blue","Yellow"];
	allowedNumber = [1,2,3,4,5];
	allowedSpecial = null;


	function getColor(){
		return allowedColor;
	}
	function getNumber(){
		return allowedNumber;
	}
	function getSpecial(){
		return allowedSpecial;
	}



}