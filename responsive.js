var currentSize = 0;
var navIcon = 0; //refers to the .nav-icon element

$(document).ready(function() {
  if($(window).width() < 1000) {
    currentSize = 0;
    $(".title").addClass("title-xs");
    $(".content").addClass("content-xs");
    $(".nav-left").hide();
    $(".nav-right").hide();
    navIcon = 1;
  }
  else if($(window).width() >= 1000 && $(window).width() < 1300) {
    currentSize = 1;
    $(".title").addClass("title-smd");
    $(".content").addClass("content-sm");
    $(".nav-icon").hide();
  }
  else {
    currentSize = 2;
    $(".title").addClass("title-smd");
    $(".content").addClass("content-md");
    $(".nav-icon").hide();
  }
});

$(window).resize(function() {
  if($(window).width() < 1000 && currentSize != 0) {
    $(".content").removeClass("content-sm");
    $(".content").addClass("content-xs");
    $(".title").removeClass("title-smd");
    $(".title").addClass("title-xs");
    $(".nav-left").hide();
    $(".nav-right").hide();
    $(".nav-icon").show();
    currentSize = 0;
    navIcon = 1;
  }
  else if($(window).width() >= 1000 && $(window).width() < 1300 && currentSize != 1) {
    $(".content").removeClass("content-md");
    $(".content").removeClass("content-xs");
    $(".content").addClass("content-sm");
    $(".title").removeClass("title-xs");
    $(".title").addClass("title-smd");
    $(".nav-left").show();
    $(".nav-right").show();
    $(".nav-icon").hide();
    currentSize = 1;
    navIcon = 0;
  }
  else if($(window).width() >= 1300 && currentSize != 2) {
    $(".content").removeClass("content-sm");
    $(".content").removeClass("content-xs");
    $(".content").addClass("content-md");
    $(".title").removeClass("title-xs");
    $(".title").addClass("title-smd");
    $(".nav-left").show();
    $(".nav-right").show();
    $(".nav-icon").hide();
    currentSize = 2;
    navIcon = 0;
  }
});

$(".nav-icon").click(function() {
  if (navIcon === 1) {
    $(".mobil-nav").show();
  }
});