	Cut(function(root, container) {
		var gridX = 5;
		var gridY = 5;
		root.viewbox(300, 300);
		var box = Cut.image("base:box").stretch().appendTo(root).pin("align", .50);
		box.pin({
  			height : 250,
  			width : 250
		});
		Cut.Mouse(box, container, true);
		row1 = Cut.row().appendTo(box).pin("align", .10).spacing(1);
		var string = Cut.string("alphabet2:letter").appendTo(row1).pin("align", 0).spacing(1);
		string.value(["_a","_b","_c","_d"]);
		// var cell = Cut.image("alphabet:letter_d").appendTo(row1).pin("align", .50);
		// console.log("sdfsdf");
		var cell = Cut.image("base:color_red").appendTo(row1).pin("align", .0);
		var cell2 = Cut.image("base:word_2").appendTo(row1).pin("align", 0);
		cell2.pin({ scale: 2});
		var cell3 = Cut.image("base:color_blue").appendTo(row1).pin("align", .30);
		var cell4 = Cut.image("base:color_blue").appendTo(row1).pin("align", .40);
		// cell.play(frame = null);
		// var cell2 = Cut.anim("base:color_" + "blue").appendTo(box).pin("align", .70);
		console.log("done");
		/*box.append(root);
		box.pin("align", .50);*/

	});
