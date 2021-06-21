class DrawingLine extends PaintFunction{
    constructor(ctx){
        super();
        this.ctx = ctx;
    }
    onMouseDown(coord,event){
        this.ctx.strokeStyle = drawColor;
        this.ctx.lineJoin = "round";
        this.ctx.lineWidth = 5;
        this.ctx.beginPath();
        this.ctx.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.draw(coord[0], coord[1]);
    }
    onMouseMove(coord,event){}
    onMouseUp(coord,event){}
    onMouseLeave(coord,event){}
    onMouseEnter(coord,event){}

    draw(x,y){
        this.ctx.lineTo(x,y);
        this.ctx.moveTo(x,y);
        this.ctx.closePath();
        this.ctx.stroke();
    }
}