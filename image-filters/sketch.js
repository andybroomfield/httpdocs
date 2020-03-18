const img_name = 'image-filters/west_pier.jpg';
// const img_name = 'image-filters/phoneboxes.jpg';
// const img_name = 'image-filters/sandcastles.jpg';
// const img_name = 'image-filters/piernight.jpg';
let img;
let blur_img;

let width = window.innerWidth;
let height = window.innerHeight - 84;
let fade_amount = 1;
let fade_dir = 'out';

function preload() {
  // load image
  img = loadImage(img_name);
}

function setup() {
  createCanvas(width, height);
  background(255);
  frameRate(120);
  blur_img = createImage(1024, 675);
  blur_img.copy(img, 0, 0, 1024, 675, 0, 0, 1024, 675);
  blur_img.filter("blur", 4);
  // image(img, 0, 0);
}

function draw() {
  let new_image = createImage(1024, 675);
  new_image.copy(blur_img, 0, 0, 1024, 675, 0, 0, 1024, 675);
  new_image.filter("threshold", fade_amount);
  // new_image.filter("posterize", fade_amount * 100 + 1);
  // new_image.filter("opaque");
  // new_image.filter("erode");
  // new_image.filter("invert");
  new_image.blend(img, 0, 0, 1024, 675, 0, 0, 1024, 675, LIGHTEST);
  image(new_image, 0, 0);

  if (fade_dir == 'in' && fade_amount >= 1) {
    fade_dir = 'out';
  } else if (fade_dir == 'out' && fade_amount <= 0.01) {
    fade_dir = 'in';
  }
  fade_amount += fade_dir == 'in' ? 0.005 : -0.005;
  fill('rgba(255, 255, 255, ' + (1.005 - fade_amount) + ')');
  noStroke();
  rect(0, 0, width, height);

  // let filterThreashold = img;
  // filterThreashold.filter("threshold", 0.5);
  // image(filterThreashold, 0, 0, 1024, 675, 50, 50, 50, 50);

}
