$('#drawing-rectangle').click(()=>{
    currentFunction = new DrawingRectangle(ctx,ctxDraft);
    console.log(currentFunction)
});
    $('#drawing-line').click(()=>{
    currentFunction = new DrawingLine(ctx,ctxDraft);
});
    currentFunction = new DrawingRectangle(ctx,ctxDraft);