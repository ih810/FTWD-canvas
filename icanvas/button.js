$('#drawing-rectangle').click(()=>{
    currentFunction = new DrawingRectangle(ctx,ctxDraft);
    console.log(currentFunction)
});
$('#drawing-line').click(()=>{
    currentFunction = new DrawingLine(ctx,ctxDraft);
});
$('#drawing-circ').click(()=>{
    currentFunction = new DrawingCircle(ctx,ctxDraft);
});
currentFunction = new DrawingRectangle(ctx,ctxDraft);