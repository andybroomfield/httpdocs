let line_colours = [
  '#B36305',
  '#E32017',
  '#FFD300',
  '#00782A',
  '#00A4A7',
  '#F3A9BB',
  '#A0A5A9',
  '#9B0056',
  '#000000',
  '#EE7C0E',
  '#003688',
  '#84B817',
  '#0098D4',
  '#95CDBA'
];

let background_col = '#FCFBE3';
let canvas_width = window.innerWidth - 40;
let canvas_height = window.innerHeight - 100;
let grid_size = 50;

function setup() {
  createCanvas(canvas_width, canvas_height);
  background(background_col);
  noLoop();
  angleMode(DEGREES);
}

function draw() {
  for (i = 0; i <= Math.floor(random(3, line_colours.length)); i++) {
    drawTubeLine();
  }
}

function drawTubeLine() {
  let line_select_col = Math.floor(random(0, line_colours.length));
  let line_col = line_colours[line_select_col];
  // Remove the selected line colour from array;
  line_colours.splice(line_select_col, 1);
  let line_weight = 10;
  let min_line_steps = 50;
  let max_line_steps = 200;
  let line_steps = Math.floor(random(min_line_steps, max_line_steps));
  let x_spaces = canvas_width / grid_size;
  let y_spaces = canvas_height / grid_size;
  let prev_x = (Math.floor(random(0, x_spaces))) * grid_size;
  let prev_y = (Math.floor(random(0, y_spaces))) * grid_size;
  let new_x = prev_x;
  let new_y = prev_y;
  let direction = Math.floor(random(0, 8));
  let direction_adjust = 0;
  let angle = 0;

  stroke(line_col);
  strokeWeight(line_weight);
  for (k = 0; k <= line_steps; k++) {
    direction_adjust = Math.floor(random(-1, 2));
    console.log('direction ' + direction);
    console.log('direction_adjust ' + direction_adjust);
    direction += random() >= 0.5 ? direction_adjust : 0;
    direction = direction > 7 ? 0 : direction;
    direction = direction < 0 ? 7 : direction;
    angle = 45 * direction;
    console.log('angle ' + angle);
    new_x = Math.floor(grid_size * cos(angle) + prev_x);
    new_y = Math.floor(grid_size * sin(angle) + prev_y);
    console.log('new_x ' + new_x);
    console.log('new_y ' + new_y);
    if (new_x >= canvas_width || new_x <= 0 || new_y >= canvas_height || new_y <= 0) {
      break;
    }
    line(prev_x, prev_y, new_x, new_y);
    prev_x = new_x;
    prev_y = new_y;
  }
}
