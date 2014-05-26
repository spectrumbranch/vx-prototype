//http://jdan.github.io/isomer/

var LOAD_CONTROLS = false;


var iso = new Isomer(document.getElementById("canvas"));
var Point = Isomer.Point;
var Path = Isomer.Path;
var Shape = Isomer.Shape;
var Color = Isomer.Color;

function TestSuite() {}

function GypsyLoftSuite() {}

var bluish_purple = new Color(98, 99, 127);
var bluish_grey = new Color(127, 122, 142);
var pinkish = new Color(204, 142, 143);
var pinkish_2 = new Color(241, 147, 121);
// 98 99 127    - bluish purple
// 127 122 142  - bluish grey
// 204 142 143  - pinkish
// 241 147 121  - another pink
 

GypsyLoftSuite['1'] = function() {
	iso.add(Shape.Prism(new Point(0, 0, 0), 1, 1, 1), bluish_purple);
}

GypsyLoftSuite['2'] = function() {
	iso.add(Shape.Prism(new Point(2, 0, 0), 1, 1, 1), pinkish);
	iso.add(Shape.Prism(new Point(0, 2, 0), 1, 1, 1), pinkish);
}

GypsyLoftSuite['3'] = function() {
	iso.add(Shape.Prism(new Point(-1, 0, 0), 1, 1, 1), bluish_grey);
	iso.add(Shape.Prism(new Point(0, -1, 0), 1, 1, 1), bluish_grey);
}

GypsyLoftSuite['4'] = function() {
	iso.add(Shape.Prism(new Point(-2, 1, 0), 1, 1, 1), pinkish_2);
	iso.add(Shape.Prism(new Point(1, -2, 0), 1, 1, 1), pinkish_2);
}

//State variables for zigzag system
//GypsyLoftSuite['zigzag_counter'] = 0;

//not exactly a 'zigzag' yet, but that's what we're calling the function
GypsyLoftSuite['zigzag'] = function(namespace) {
	//var iterations = 4;

	var zigzag_counter_key = 'zigzag_counter';
	
	var zigzag_A_state_x_key = 'zigzag_A_state_x';
	var zigzag_A_state_y_key = 'zigzag_A_state_y';
	var zigzag_B_state_x_key = 'zigzag_B_state_x';
	var zigzag_B_state_y_key = 'zigzag_B_state_y';
	
	var zigzag_A_delta_x_key = 'zigzag_A_delta_x';
	var zigzag_A_delta_y_key = 'zigzag_A_delta_y';
	var zigzag_B_delta_x_key = 'zigzag_B_delta_x';
	var zigzag_B_delta_y_key = 'zigzag_B_delta_y';
	
	if (typeof namespace == 'string') {
		zigzag_counter_key += ':' + namespace;
		
		zigzag_A_state_x_key += ':' + namespace;
		zigzag_A_state_y_key += ':' + namespace;
		zigzag_B_state_x_key += ':' + namespace;
		zigzag_B_state_y_key += ':' + namespace;
		
		zigzag_A_delta_x_key += ':' + namespace;
		zigzag_A_delta_y_key += ':' + namespace;
		zigzag_B_delta_x_key += ':' + namespace;
		zigzag_B_delta_y_key += ':' + namespace;
	}
	
	
	var origin_z = 0;
	
	
	if (GypsyLoftSuite[zigzag_counter_key] == undefined) {
		//things that need to happen only at initial conditions
		
		//origin coordinates
		GypsyLoftSuite[zigzag_A_state_x_key] = GypsyLoftSuite[zigzag_B_state_x_key] = -7;
		GypsyLoftSuite[zigzag_A_state_y_key] = GypsyLoftSuite[zigzag_B_state_y_key] = +10;
	
		
		GypsyLoftSuite[zigzag_counter_key] = 0;
		
		GypsyLoftSuite[zigzag_A_delta_x_key] = +1;
		GypsyLoftSuite[zigzag_A_delta_y_key] = 0;
		
		GypsyLoftSuite[zigzag_B_delta_x_key] = 0;
		GypsyLoftSuite[zigzag_B_delta_y_key] = +1;
		
		
		iso.add(Shape.Prism(new Point(GypsyLoftSuite[zigzag_A_state_x_key], GypsyLoftSuite[zigzag_A_state_y_key], origin_z), 1, 1, 1), pinkish_2);
	} else {
		//things that run every call except the first
		
		//update trajectory based on bounds
		var max_x = 27;
		var min_x = -27
		
		var max_y = 12;
		var min_y = -12;
		
		var max_sum = 35;
		var min_sum = -10;
		
		if (GypsyLoftSuite[zigzag_A_state_x_key] + GypsyLoftSuite[zigzag_A_state_y_key] > max_sum) {
			//if we're over the maximum
			if (GypsyLoftSuite[zigzag_A_delta_x_key] > 0) {
				GypsyLoftSuite[zigzag_A_delta_x_key] = -1;
				GypsyLoftSuite[zigzag_A_delta_y_key] = -1;
			} else if (GypsyLoftSuite[zigzag_A_delta_y_key] > 0) {
				GypsyLoftSuite[zigzag_A_delta_x_key] = -1;
				GypsyLoftSuite[zigzag_A_delta_y_key] = -1;
			}
		} else if (GypsyLoftSuite[zigzag_A_state_x_key] + GypsyLoftSuite[zigzag_A_state_y_key] < min_sum) {
			//if we're under the minimum
			if (GypsyLoftSuite[zigzag_A_delta_x_key] < 0) {
				GypsyLoftSuite[zigzag_A_delta_x_key] = +1;
				GypsyLoftSuite[zigzag_A_delta_y_key] = +1;
			} else if (GypsyLoftSuite[zigzag_A_delta_y_key] < 0) {
				GypsyLoftSuite[zigzag_A_delta_x_key] = +1;
				GypsyLoftSuite[zigzag_A_delta_y_key] = +1;
			}
		}
		
		
		if (GypsyLoftSuite[zigzag_A_state_x_key] < max_x || GypsyLoftSuite[zigzag_A_delta_x_key] == 0) {
			//if A is within X max bounds
		} else {
			//if A gets out of X max bounds
			GypsyLoftSuite[zigzag_A_delta_x_key] = 0;
			GypsyLoftSuite[zigzag_A_delta_y_key] = +1;
		}
		
		if (GypsyLoftSuite[zigzag_A_state_y_key] < max_y || GypsyLoftSuite[zigzag_A_delta_y_key] == 0) {
			//if A is within Y max bounds
		} else {
			//if A gets out of Y max bounds
			GypsyLoftSuite[zigzag_A_delta_x_key] = -1;
			GypsyLoftSuite[zigzag_A_delta_y_key] = 0;
		}
		
		GypsyLoftSuite[zigzag_A_state_x_key] += GypsyLoftSuite[zigzag_A_delta_x_key]; //observed 27 is top at origin y=10
		GypsyLoftSuite[zigzag_A_state_y_key] += GypsyLoftSuite[zigzag_A_delta_y_key]; //statis
		GypsyLoftSuite[zigzag_B_state_x_key] += GypsyLoftSuite[zigzag_B_delta_x_key]; //statis
		GypsyLoftSuite[zigzag_B_state_y_key] += GypsyLoftSuite[zigzag_B_delta_y_key];
		
		
		
		console.log('zigzag'+(namespace ? '_'+namespace : '') +' ('+GypsyLoftSuite[zigzag_A_state_x_key]+', '+GypsyLoftSuite[zigzag_A_state_y_key]+'),  ('+GypsyLoftSuite[zigzag_A_state_x_key]+','+GypsyLoftSuite[zigzag_B_state_y_key]+')');
		
		
		
		
		//A
		iso.add(Shape.Prism(new Point(GypsyLoftSuite[zigzag_A_state_x_key], GypsyLoftSuite[zigzag_A_state_y_key], origin_z), 1, 1, 1), pinkish_2); //start going up right
		
		//B
		//iso.add(Shape.Prism(new Point(GypsyLoftSuite[zigzag_B_state_x_key], GypsyLoftSuite[zigzag_B_state_y_key], origin_z), 1, 1, 1), pinkish_2); //start going up left
	}
	
	//update state
	GypsyLoftSuite[zigzag_counter_key]++;
}

GypsyLoftSuite['house'] = function() {
	var iterations = 4;
	
	var origin_x = -7;
	var origin_y = 10;
	var origin_z = 0;
	
	//first
	iso.add(Shape.Prism(new Point(origin_x, origin_y, origin_z), 1, 1, 1), pinkish_2);
	for (var i = 1; i <= iterations; i++) {
		iso.add(Shape.Prism(new Point(origin_x+i, origin_y, origin_z), 1, 1, 1), pinkish_2);
		iso.add(Shape.Prism(new Point(origin_x, origin_y+i, origin_z), 1, 1, 1), pinkish_2);
	}
	
	/*
	iso.add(Shape.Prism(new Point(-6, 10, 0), 1, 1, 1), pinkish_2);
	iso.add(Shape.Prism(new Point(-7, 11, 0), 1, 1, 1), pinkish_2);
	
	iso.add(Shape.Prism(new Point(-5, 10, 0), 1, 1, 1), pinkish_2);
	iso.add(Shape.Prism(new Point(-7, 12, 0), 1, 1, 1), pinkish_2);
	*/
}

GypsyLoftSuite['clear'] = function () {
  iso.canvas.clear();
};

TestSuite['draw structure'] = function () {
  iso.add(Shape.Prism(new Point(1, 0, 0), 4, 4, 2));
  iso.add(Shape.Prism(new Point(0, 0, 0), 1, 4, 1));
  iso.add(Shape.Prism(new Point(-1, 1, 0), 1, 3, 1));

  iso.add(Stairs(new Point(-1, 0, 0)));
  iso.add(Stairs(new Point(0, 3, 1)).rotateZ(new Point(0.5, 3.5, 1), -Math.PI / 2));

  iso.add(Shape.Prism(new Point(3, 0, 2), 2, 4, 1));
  iso.add(Shape.Prism(new Point(2, 1, 2), 1, 3, 1));

  iso.add(Stairs(new Point(2, 0, 2)).rotateZ(new Point(2.5, 0.5, 0), -Math.PI / 2));

  iso.add(Shape.Pyramid(new Point(2, 3, 3))
    .scale(new Point(2, 4, 3), 0.5),
    new Color(180, 180, 0));
  iso.add(Shape.Pyramid(new Point(4, 3, 3))
    .scale(new Point(5, 4, 3), 0.5),
    new Color(180, 0, 180));
  iso.add(Shape.Pyramid(new Point(4, 1, 3))
    .scale(new Point(5, 1, 3), 0.5),
    new Color(0, 180, 180));
  iso.add(Shape.Pyramid(new Point(2, 1, 3))
    .scale(new Point(2, 1, 3), 0.5),
    new Color(40, 180, 40));

  iso.add(Shape.Prism(new Point(3, 2, 3), 1, 1, 0.2), new Color(50, 50, 50));
  iso.add(Knot(new Point(3, 2, 3.2)), new Color(0, 180, 180));;
};

TestSuite['test scales'] = function () {
  var cube = Shape.Prism(new Point(5, 5), 1, 1, 1);

  for (var i = 0; i < 20; i++) {
    iso.add(cube
      .scale(new Point(5.5, 5.5), 10 - i/2, 10 - i/2, 1/3)
      .translate(0, 0, i/3)
      .rotateZ(new Point(5.5, 5.5), -Math.PI/20 * i),
           randomColor());
  }
};

TestSuite['test extrude'] = function () {
  var s = Shape.extrude(new Path([
    Point(1, 1, 1),
    Point(2, 1, 1),
    Point(2, 3, 1)
  ]), 0.3).scale(Point.ORIGIN, 5);

  iso.add(s, new Color(50, 160, 60));
};

TestSuite['test cylinder'] = function () {
  iso.add(Shape.Cylinder(new Point(8, 8, 0), 6));
  iso.add(Shape.Cylinder(new Point(11, 11, 1), 2.5, 20, 6), randomColor());
  iso.add(Shape.Cylinder(new Point(5, 9, 1), 0.75, 20, 12), randomColor());
  iso.add(Shape.Cylinder(new Point(4.5, 8, 1), 1.5, 20, 3), randomColor());
  iso.add(Shape.Cylinder(new Point(10, 6, 1), 2.5, 20, 5), randomColor());
  iso.add(Shape.Cylinder(new Point(6, 5, 1), 2, 20, 4), randomColor());
};

TestSuite['test star'] = function () {
  iso.add(Shape.extrude(Path.Star(Point.ORIGIN, 1, 2, 4).rotateZ(Point.ORIGIN, Math.PI/6)));
};

TestSuite['draw logo'] = function () {
  iso.add(Shape.Prism(new Point(1, 1), 1, 1, 2), new Color(0, 180, 180));
  iso.add(Shape.Prism(new Point(0, 1), 1, 1, 1.5), new Color(50, 60, 180));
  iso.add(Shape.Prism(new Point(1, 0), 1, 1, 1), new Color(50, 180, 60));
  iso.add(Shape.Prism(new Point(0, 0), 1, 1, 0.5), new Color(180, 50, 60));
};

TestSuite['red light'] = function () {
  iso.lightColor = new Color(160, 50, 60);
  iso.add(Shape.Prism(new Point(1, 1), 1, 1, 2), new Color(0, 180, 180));
  iso.add(Shape.Prism(new Point(0, 1), 1, 1, 1.5), new Color(50, 60, 180));
  iso.add(Shape.Prism(new Point(1, 0), 1, 1, 1), new Color(50, 180, 60));
  iso.add(Shape.Prism(new Point(0, 0), 1, 1, 0.5), new Color(180, 50, 60));
  iso.lightColor = new Color(255, 255, 255);
};

;(function () {

  if (LOAD_CONTROLS) {
    var fn;
	var panel = document.getElementById("control");
	var button;
	for (fn in TestSuite) {
		button = document.createElement("div");
		button.classList.add("test-btn");
		button.innerHTML = fn;
		button.onclick = (function (fn) {
		  return function () {
			/* Clear the canvas and execute the test function */
			iso.canvas.clear();
			fn();
		  };
		})(TestSuite[fn]);

		panel.appendChild(button);
	}
  }
})();

