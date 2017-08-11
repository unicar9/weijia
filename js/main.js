
var c;
var vols = [];
var mic;
var colors = ['#EF798A', '#613F75', '#83BCFF', '#ECCBD9'];


$(document).ready(function() {
  $('.js-tilt').tilt({
    scale: 1.1
  });

// home page typing effect starts
  $('#typeit').typeIt({
    speed: 60,
    autoStart: false
  })
  .tiType('Hll')
  .tiPause(500)
  .tiDelete(2)
  .tiType('ello! ')
  .tiPause(1000)
  .tiType('This is <b>Weijia</b>\'s playground.')
  .tiBreak() .tiPause(750)
  .tiType(' I\'m a web developer in s')
  .tiPause(500)
  .tiDelete(4)
  .tiType('based in <i>Sydney</i>.')
  .tiBreak() .tiPause(750)
  .tiSettings({speed: 100})
  .tiType('I have an eye for <b>design</b>.')
  .tiBreak() .tiPause(750)
  .tiType('What else I want to add?')
  .tiSettings({speed: 700})
  .tiType('...')
  .tiPause(750)
  .tiSettings({speed: 50})
  .tiDelete(27)
  .tiType('Oh, I\'m also a <i>feminist</i>.');
// home page typing effect ends


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

  var sketch = function(s) {
    s.setup = function() {
      c = s.createCanvas(s.windowWidth, s.windowHeight/2);
      c.position(0, s.windowHeight/2);
      // c.style('z-index', '-1');
      mic = new p5.AudioIn();
      mic.start();
    };

    s.draw = function() {
      s.background('#80FFE8');
      var vol = mic.getLevel();
      vols.push({
        value: vol,
        lifespan: 120,
        x: s.random(s.windowWidth),
        y: s.random(s.windowHeight),
        color: s.random(colors)
      });
      s.noStroke();

      // stroke();
      for (var i = 0; i < vols.length; i++) {
        var v = vols[i];
        s.fill(v.color);
        s.ellipse(v.x, v.y, v.value * s.windowWidth);

        if (v.lifespan > 0) {
          v.lifespan--;
        } else {
          vols.splice(i, 1);
        }
      }

    };

    s.windowResized = function() {
      s.resizeCanvas(s.windowWidth, s.windowHeight/2);
    };

  };

  var canvas = new p5(sketch, 'contact');

}); // end of ready
