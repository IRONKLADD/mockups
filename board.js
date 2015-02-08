function randInt(min, max) {
  /**
   * Returns a random integer on the interval [min, max),
   * or [0, max) if no min provided.
   *
   * Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   */
  if (!max) {
      max = min;
      min = 0;
  }
  return Math.floor(Math.random() * (max - min)) + min;
}

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function Piece(type, color, special) {
    this.type    = type;
    this.color   = color;
    this.special = special;
}

function EmptyPiece() {
    Piece.call(this);
    this.type = "Empty";
    this.toString = function() {
        return " ";
    }
}
EmptyPiece.prototype = Object.create(Piece.prototype);

function NormalPiece() {
    Piece.call(this);
    this.type = "Normal";
}
NormalPiece.prototype = Object.create(Piece.prototype);

function RedPiece() {
    Piece.call(this);
    this.color = "Red";
    this.toString = function() {
        return "\u2591";
    }
}
RedPiece.prototype = Object.create(NormalPiece.prototype);

function GreenPiece() {
    Piece.call(this);
    this.color = "Green";
    this.toString = function() {
        return "\u2592";
    }
}
GreenPiece.prototype = Object.create(NormalPiece.prototype);


function BluePiece() {
    Piece.call(this);
    this.color = "Blue";
    this.toString = function() {
        return "\u2593";
    }
}
BluePiece.prototype = Object.create(NormalPiece.prototype);

function initializeGrid(rows, cols) {
    var grid = createArray(rows, cols);

    for(r = 0; r < rows; r++) {
        for(c = 0; c < cols; c++) {
            grid[r][c] = new EmptyPiece();
        }
    }

    return grid;
}

function fillGridRandomly(grid, pieces, rows, cols) {
    rows = rows || grid.length;
    cols = cols || grid[0].length;
    n_pieces = pieces.length;

    randomPiece = function() {
        return new pieces[randInt(n_pieces)]();
    };

    for(r = 0; r < rows; r++) {
        for(c = 0; c < cols; c++) {
            grid[r][c] = randomPiece();
        }
    }

    return grid;
}

function Board(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    this.grid = initializeGrid(rows, cols);

    this.get = function(row, col) {
        return this.grid[row][col];
    }

    this.set = function(row, col, x) {
        this.grid[row][col] = x;
    }

    this.swap = function(row1, col1, row2, col2) {
        piece1 = this.get(row1, col1);
        piece2 = this.get(row2, col2);
        this.set(row1, col1, piece2);
        this.set(row2, col2, piece1);
    }

    this.toString = function() {
        var rows = "";
        for(r = 0; r < this.rows; r++) {
            var cols = "";
            for(c = 0; c < this.cols; c++) {
                cols += this.grid[r][c].toString();
            }
            rows += cols + "\n";
        }
        return rows;
    }
}
