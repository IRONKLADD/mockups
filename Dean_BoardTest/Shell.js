function Shell(col,numb,spec,shellType) {
	var color   = col       || randomColor()   || "black";      /** PlaceHolder **/
    var number  = numb      || randomNumber()  || 0;            /** PlaceHolder **/
    var special = spec      || false           || null;         /** PlaceHolder **/
    var type    = shellType || randomType()    || null;   /** PlaceHolder **/
    var xCoord;
    var yCoord;
    this.toString = toString;
    console.log(this.toString());

    function randomColor(){
    	if(config.getColor() != null){
    		var colorList = config.getColor();
    		var max = colorList.length;
    		var temp = Math.floor(Math.random() * max);
    		// var temp = 3;
    		console.log(temp +" " + colorList[temp]);
    		return colorList[temp];
    	}
    	return false;
    }
    function randomNumber(){
        console.log("stuff");
    	if(config.getNumber() != null){
	    	var numberList = config.getNumber();
	    	var max = numberList.length;
	    	temp = Math.floor(Math.random() * max);
	    	return numberList[temp];
	    }
	    return false
    }
    /*function randomSpecial(){
    	if(config.getSpecial != null){
	    	var specialList = config.getSpecial();
	    	var max = specialList.length;
	    	temp = Math.floor(Math.random() * max);
	    	return specialList[temp];
	    }
	    return false;
    }*/
    function randomType(){
        console.log(config.getType())
        if(config.getType() != null){
            var typeList = config.getSpecial();
            var max = typeList.length;
            temp = Math.floor(Math.random() * max);
            return typeList[temp];
        }
        return false;
    }
    function toString(){
    	var temp = color.substring(0,3) +"(" +number +")";
    	return temp;
    }
}