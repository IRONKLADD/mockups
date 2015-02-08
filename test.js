var board = new Board(15,10);
pieces = [RedPiece, GreenPiece, BluePiece];
fillGridRandomly(board.grid, pieces);

console.log(board.toString());
