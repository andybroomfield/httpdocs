const img_name = 'image-filters/west_pier.jpg';
let img;

let width = window.innerWidth;
let height = window.innerHeight - 84;
let fade_amount = 1;

function preload() {
  // load image
  img = loadImage(img_name);
}

function setup() {
  createCanvas(width, height);
  background(0);
  frameRate(30);
  // image(img, 0, 0);
}

function draw() {
  let new_image = createImage(1024, 675);
  new_image.copy(img, 0, 0, 1024, 675, 0, 0, 1024, 675);
  new_image.filter("threshold", fade_amount);
  new_image.blend(img, 0, 0, 1024, 675, 0, 0, 1024, 675, LIGHTEST);
  image(new_image, 0, 0);
  fade_amount -= 0.001;

  // let filterThreashold = img;
  // filterThreashold.filter("threshold", 0.5);
  // image(filterThreashold, 0, 0, 1024, 675, 50, 50, 50, 50);

}
