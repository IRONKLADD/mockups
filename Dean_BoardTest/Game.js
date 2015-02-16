

var config = new Configuration();
var game   = new GameType();
console.log(game);
console.log(config.getColor());
console.log("Stuff");
game.getBoard().printArr();
game.selectShell(0,0);
console.log("inbetween");
game.selectShell(2,2);
game.getBoard().printArr();
console.log("Stuff2");