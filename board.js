var colors = ["Red   ", "Blue  ", "Yellow", "Green ", "Purple"]

function shell (attributes) {
    this.color = attributes[0];
    this.level = attributes[1]; //We can define attributes or some other way of assigning these values.
};

var shells = [];

for (var i = 0; i < 4; i++) {
    shells[i] = [];
    for (var k = 0; k < 4; k++) {
	shells[i][k] = new shell([ colors[Math.floor(Math.random()*5)] , 1]);
    };
};

for (var i = 0; i < 4; i++) {
    console.log("| " + shells[i][0].color + " " + shells[i][1].color + " " + shells[i][2].color + " "+ shells[i][3].color + " |");
};
