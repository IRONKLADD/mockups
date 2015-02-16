Cut(function(root, container) {

  Cut.Mouse(root, container, true);

  root.viewbox(300, 300);

  var swap = new Array(4);
  var column;
  makeGrid();

  function makeGrid(){

    var j = 0, i = 0,count = 0;
    column = Cut.column().appendTo(root).pin("align", .25).spacing(1);
    for (j = 0; j < board.gridY; j++) {
      var row = Cut.row().appendTo(column).spacing(1);
      for (i = 0; i < board.gridX; i++) {
        // colors as frames
        var temp = board.grid[i][j];
        var tempColor;
        var cell = Cut.anim("base:color_" + temp.color).appendTo(row).pin("pivot", 0.5);
        cell._id = count;
        count++;
        console.log(cell);
        cell.on(Cut.Mouse.START, function(point) {
          var yPos = Math.floor(this._id / board.gridX);
          if(yPos === 0){
            var xPos = this._id;
          }
          else{
            var xPos = this._id % (yPos * board.gridX);
          }
          swap[0] = xPos;
          swap[1] = yPos;

        });
        cell.on(Cut.Mouse.END, function(point) {
          var yPos = Math.floor(this._id / board.gridX);
          if(yPos === 0){
            var xPos = this._id;
          }
          else{
            var xPos = this._id % (yPos * board.gridX);
          }
          swap[2] = xPos;
          swap[3] = yPos;

          board.swap(swap[0],swap[1],swap[2],swap[3]);
          column.remove();
          makeGrid();
          
        });
      }
    }
  }
});
