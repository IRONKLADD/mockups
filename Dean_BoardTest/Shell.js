function Shell(col,numb,spec) {
	var color   = col  || randomColor()   || "black";/** PlaceHolder **/
    var number  = numb || randomNumber()  || 0; /** PlaceHolder **/
    var special = spec || randomSpecial() || "no";/** PlaceHolder **/
    var xCoord;
    var yCoord;
    this.toString = toString;
    console.log(this.toString());

    function randomColor(){
    	if(rules.getColor() != null){
    		var colorList = rules.getColor();
    		var max = colorList.length;
    		var temp = Math.floor(Math.random() * max);
    		// var temp = 3;
    		console.log(temp +" " + colorList[temp]);
    		return colorList[temp];
    	}
    	return null;
    }
    function randomNumber(){
    	if(rules.getNumber() != null){
	    	var numberList = rules.getNumber();
	    	var max = numberList.length;
	    	temp = Math.floor(Math.random() * max);
	    	return numberList[temp];
	    }
	    return false
    }
    function randomSpecial(){
    	if(rules.getSpecial != null){
	    	var specialList = rules.getSpecial();
	    	var max = specialList.length;
	    	temp = Math.floor(Math.random() * max);
	    	return specialList[temp];
	    }
	    return false;
    }
    function toString(){
    	var temp = color.substring(0,3) +"(" +number +")";
    	return temp;
    }
}