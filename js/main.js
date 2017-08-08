
var setup = function() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  mic = new p5.AudioIn();
  mic.start();
};

var draw = function() {
  // background("#EF798A");
  var vol = mic.getLevel();
  noFill();
  stroke('#ECCBD9');
  ellipse(width/2, height/2, vol * windowWidth);
};


$(document).ready(function() {
  $('.js-tilt').tilt({
    scale: 1.1
  });




  $('#fullpage').fullpage({
    sectionsColor: ['#EF798A', '#613F75', '#83BCFF', '#80FFE8'],
    css3: true,
  });

  $('.mySelector').funnyText({
		speed: 700,
		borderColor: 'yellow',
		activeColor: 'red',
		color: 'brown',
		fontSize: '7em',
		direction: 'both',
    css3: true,
	});

}); // end of ready
