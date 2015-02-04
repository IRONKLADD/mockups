 var grid = new Array(7);
 console.log(grid);



 Swaper1x: <input type="text" id="swap1x" value=4><br>
Swaper1y: <input type="text" id="swap1y" value=4><br>
Swaper2x: <input type="text" id="swap2x" value=4><br>
Swaper2y: <input type="text" id="swap2y" value=4><br>
<input type="button" onclick= board.swap(document.getElementById('swap1x').value,
document.getElementById('swap1y').value,
document.getElementById('swap2x').value,
document.getElementById('swap2x').value) value="Submit">