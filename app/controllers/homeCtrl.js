app.controller('homeCtrl', function () {

  console.log(`firing the home controller`)



    // Elements
  const $nav = $('#nav'),
    $links = $('#nav a'),
    $bar = $('#nav-bar'),
    $activeLink = $('#nav a.active');

  const bar = {
    width: $activeLink.length ? $activeLink.innerWidth() : $links.first().innerWidth(),
    pos: $activeLink.length ? $activeLink.position().left : $links.first().position().left
  }

  setBarPos()

  function setBarPos() {
    $bar.stop().animate({
      left: bar.pos,
      width: bar.width
    })
  }

  // Link
  $links.mouseenter(function(e) {
    const _tar = $(e.target),
      _tarPos = _tar.position().left,
      _tarWidth = _tar.innerWidth()

    bar.width = _tarWidth
    bar.pos = _tarPos

    setBarPos()
  });

})
