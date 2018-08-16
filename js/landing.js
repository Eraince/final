var logos = [];
var facebookIcon;
var likesIcon;
var twitterIcon;
var snapchatIcon;

$(document).ready(function() {
  $("#hello").click(function(e) {
    e.preventDefault();
    $("#hello").hide();
    setTimeout(function() {
      window.location.href = "index.html";
    }, 1200);
  });
});

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (i = 0; i < 10; i++) {
    logos[i] = new Logo(facebookIcon);
  }
  for (i = 10; i < 20; i++) {
    logos[i] = new Logo(likesIcon);
  }
  for (i = 20; i < 30; i++) {
    logos[i] = new Logo(twitterIcon);
  }
  for (i = 30; i < 40; i++) {
    logos[i] = new Logo(snapchatIcon);
  }
}

function preload() {
  facebookIcon = loadImage("./img/facebook-2.png");
  likesIcon = loadImage("./img/likes.png");
  twitterIcon = loadImage("./img/twitter.png");
  snapchatIcon = loadImage("./img/snapchat.png");
}

function draw() {
  background(255);
  for (i = 0; i < 40; i++) {
    if (mouseIsPressed) {
      logos[i].dead = true;
    }
    logos[i].move();
    logos[i].display();
  }
}

function Logo(icon) {
  this.x = random(0, windowWidth);
  this.y = random(0, windowHeight);
  this.speedx = random(5, 8);
  this.speedy = random(6, 9);
  this.img = icon;
  this.size = 50;
  this.dead = false;

  this.move = function() {
    this.x += this.speedx;
    this.y += this.speedy;
    if (!this.dead) {
      if (this.x > windowWidth || this.x < 0) {
        this.speedx *= -1;
      }
      if (this.y > windowHeight || this.y < 0) {
        this.speedy *= -1;
      }
    }
  };

  this.display = function() {
    image(this.img, this.x, this.y, this.size, this.size);
  };
}
