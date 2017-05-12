app.controller('navbarCtrl', function () {

  console.log(`firing the navbar controller`)

  // Elements
  var $nav = $('#nav'),
    $links = $('#nav a'),
    $bar = $('#nav-bar'),
    $activeLink = $('#nav a.active');

  var bar = {
    width: $activeLink.length ? $activeLink.innerWidth() : $links.first().innerWidth(),
    pos: $activeLink.length ? $activeLink.position().left : $links.first().position().left
  };

  setBarPos();

  function setBarPos() {
    $bar.stop().animate({
      left: bar.pos,
      width: bar.width
    });
  }

  // Link
  $links.mouseenter(function(e) {
    var _tar = $(e.target),
      _tarPos = _tar.position().left,
      _tarWidth = _tar.innerWidth();

    bar.width = _tarWidth;
    bar.pos = _tarPos;

    setBarPos();
  });

})

// navbar behavior borrowed from http://codepen.io/ChynoDeluxe/pen/zNYWNG
