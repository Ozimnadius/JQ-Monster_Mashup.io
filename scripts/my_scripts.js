$(document).ready(function () {
  var headclicks = 0,
    eyesclicks = 0,
    noseclicks = 0,
    mouthclicks = 0;

  lightning_one();
  lightning_two();
  lightning_three();

  $('#head').click(function (e) {
    if (headclicks < 9) {
      moveSlide($(this), 367);
      headclicks++;
    } else {
      moveSlide($(this), 0);
      headclicks = 0;
    }
  });

  $('#eyes').click(function (e) {
    if (eyesclicks < 9) {
      moveSlide($(this), 367);
      eyesclicks++;
    } else {
      moveSlide($(this), 0);
      eyesclicks = 0;
    }
  });

  $('#nose').click(function (e) {
    if (noseclicks < 9) {
      moveSlide($(this), 367);
      noseclicks++;
    } else {
      moveSlide($(this), 0);
      noseclicks = 0;
    }
  });

  $('#mouth').click(function (e) {
    if (mouthclicks < 9) {
      moveSlide($(this), 367);
      mouthclicks++;
    } else {
      moveSlide($(this), 0);
      mouthclicks = 0;
    }
  });

}); //end doc.onready function

function moveSlide(elem, px) {
  if (px) {
    px = '-=' + px;
  } else {
    px = '0';
  }

  elem.animate({
    left: px
  }, 500);
}

function lightning_one() {
  $("#container #lightning1").fadeIn(250).fadeOut(250);
  setTimeout("lightning_one()", 4000);
};

function lightning_two() {
  $("#container #lightning2").fadeIn("fast").fadeOut("fast");
  setTimeout("lightning_two()", 5000);
};

function lightning_three() {
  $("#container #lightning3").fadeIn("fast").fadeOut("fast");
  setTimeout("lightning_three()", 7000);
};