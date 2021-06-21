const canvas = $('#canvas')[0];
const canvasDraft = $(`#canvasDraft`)[0];
//this doesnt work with jQuery?
//const canvas = $(`#canvas`) return .getContext is not a function
const ctx = canvas.getContext(`2d`);
const ctxDraft = canvasDraft.getContext(`2d`);
//canvas is a varibale declared above, this appoint the context type to a 2D rendering
//webgl create a 3D rendering
//bitmaprenderer allow to do bitmap image

function resizeCanvas(){
    canvas.width = 800;
    canvas.height = 800;
}
resizeCanvas();

function resizeCanvasDraft(){
    canvasDraft.width = 800;
    canvasDraft.height = 800;
}
resizeCanvasDraft();

//========================================================================================

//              THIS MAKE GREEN SQUARE

// ctx.fillStyle = `green`;
// // deciede the color of the targeted image
// ctx.fillRect(40,10,100,100)
// //fillRect (x, y, width, height);

//========================================================================================

//              THIS DRAWS LINES
//moveTo and lineTo are both counted at px

// ctx.beginPath();
// //mandatory for all line draw function
// ctx.moveTo(300, 0);
// //moveTo (x, y) moveTo determine the starting point of the line, not the length/tile shit
// ctx.lineTo(100, 100);
// //lineTo (x, y) lineTo determine the ending point of the line, not the length
// ctx.stroke();
// //mandatory for all line draw function

//========================================================================================

//              THIS FUNCTION DRAWS X LINE

// function drawLine(ctx,start,end){
    // ctx.beginPath();
    // ctx.moveTo(start[0],start[1]);
    // console.log(`Starting x-coodinate:` + start[0]);
    // console.log(`Starting y-coordinate:` + start[1]);
    // ctx.lineTo(end[0],end[1]);
    //console.log(`Ending x-coordinate:` + end[0]);
    //console.log(`Ending y-coordinate:` +end[1]);
//     ctx.stroke();
// }
// drawLine(ctx, [0,0], [150,150])
// drawLine(ctx, [0,100], [100,0])
//same as the one above, just in function, need more practice to get instinct on x,y axis
//understand the start and end of line and precieve line as two dots, instead of lines
//========================================================================================

//              THIS DRAW SQUARE

// function drawRect(ctx, start, dimension, color){
//     ctx.fillStyle = color;
//     ctx.fillRect(start[0],start[1],dimension[0], dimension[1]);
// }

// drawRect(ctx, [20,20], [100,100], `green`);
//fillRect (x, y, width, height);
//same thing as above, just in function
//========================================================================================

            // THIS DRAW CURVE

// function drawCurve(ctx, start, cp1, end){
//     ctx.setLineDash([]);
//     // make line dash if needed
//     ctx.strokeStyle = `black`;
//     //make it black, fillStyle?
//     ctx.beginPath();
//     ctx.moveTo(start[0], start[1]);
//     console.log(`Curve - starting x:` + start[0]);
//     console.log(`Curve - starting y:` + start[1]);
//     ctx.quadraticCurveTo(cp1[0], cp1[1], end[0], end[1]);
//     //cp is most important in curve, determine how and howmuch the line is curved, 
//     //the curve point maybe not in contact with the line but it will drag the line away to that direction
//     console.log(`Control point x:` + cp1[0]);
//     console.log(`Control point y:` + cp1[1]);
//     console.log(`Curve - End x:` + end[0]);
//     console.log(`Curve - End y:` + end[1]);
    
//     ctx.stroke();
    
// }
// drawCurve(ctx, [0,0], [200,30], [150,150])
// //             DRAW HOUSE

// drawLine(ctx, [30,40], [30,130]);
// drawLine(ctx, [30,130], [150,130]);
// drawLine(ctx, [150,130], [150, 40]);
// drawCurve(ctx, [30,40], [85,-29], [150,40])

//========================================================================================

//              THIS DRAW TXT BUBBLE
// ctx.beginPath();
// ctx.moveTo(75, 25);
// ctx.quadraticCurveTo(25, 25, 25, 62.5);
// ctx.quadraticCurveTo(25, 100, 50, 100);
// ctx.quadraticCurveTo(50, 120, 30, 125);
// ctx.quadraticCurveTo(60, 120, 65, 100);
// ctx.quadraticCurveTo(125, 100, 125, 62.5);
// ctx.quadraticCurveTo(125, 25, 75, 25);
// ctx.stroke();
//This example uses multiple curved line to make a complex shape, (or not so complex...?)

//========================================================================================


//              CAPTURE MOUSE EVENT

// .mousedown
// .mousemove
// .mouseup
// .mouseleave

// ctx.strokeStyle = `#000`;
// ctx.lineJoin = `round`;
// ctx.lineWidth = 5;
// let dragging = false;
// console.log($(`#canvas`))
// function draw(mouseX,mouseY){
//     ctx.lineTo(mouseX,mouseY);
//     ctx.moveTo(mouseX,mouseY);
//     console.log(`xcor`, mouseX)
//     console.log(`ycor`, mouseY)
//     ctx.closePath();
//     ctx.stroke();
// }

// //mouse down(click) draw line start point
// $('#canvas').mousedown(function(e){
//     console.log(e)
//     let mouseX = e.offsetX;
//     let mouseY = e.offsetY;
//     console.log(`Xcor`, mouseX)
//     console.log(`Ycor`, mouseY)
//     ctx.beginPath();
//     ctx.moveTo(mouseX,mouseY);
//     draw(mouseX,mouseY);
//     dragging = true;
// });

// $(`#canvas`).mousemove(function(e){
//     if(dragging){
//     let mouseX = e.offsetX;
//     let mouseY = e.offsetY;
//     console.log(`Xcor`, mouseX)
//     console.log(`Ycor`, mouseY)
//     draw(mouseX,mouseY);
// }});

// $(`#canvas`).mouseup(function(e){
//     dragging = false;
// });

// $(`#canvas`).mouseleave(function(e){
//     dragging = false;
// });

//========================================================================================

//              DRAW CIRCLE

var canvas = $(`#canvas`);
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();