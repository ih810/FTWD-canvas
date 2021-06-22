class DrawingCircle extends PaintFunction{
    constructor(ctx, ctxDraft){
        super();
        this.ctx = ctx;
        this.ctxDraft = ctxDraft;
    }
    onMouseDown(coord,event){
        this.ctxDraft.fillStyle = drawColor;
        console.log(coord)
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.ctxDraft.beginPath();
        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        //whenever a new X,Y is registered, clear the old circle

        this.ctxDraft.fillStyle = drawColor;
        //set the color to the reg color
        this.centerX = (this.origX + coord[0])/2;
        this.centerY = (this.origY + coord[1])/2;
        //the center of the circle is the starting point + current coord /2 

        //using an if statement to make sure the radius is always > 0
        if(coord[0]-this.centerX >= 0){
            //when the mouse is of the right side of the starting point
            let radius = (coord[0] - this.centerX)
            //the radius is curr coord - the center
            this.ctxDraft.arc(this.centerX, this.centerY, radius, 0, 2*Math.PI)
        } else {
            //when the mouse is on the left side of the starting point
            let radius = (this.centerX - coord[0])
            //the radius is the center - curr coord
            this.ctxDraft.arc(this.centerX, this.centerY, radius, 0, 2*Math.PI)
        }
        
        this.ctxDraft.stroke();
        //make new circle
        
        //this function is triggered every (px??) user is dragging
        //the X,Y is constanly updating
    }
    onMouseMove(){}

    onMouseUp(coord){
        //when user mouse up, register the circle to the ctx real
        this.ctx.fillStyle = drawColor
        //set the color for the ctx real

        this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        //clear the rect from the draft
        this.ctx.beginPath()

        //same method used to draw circle as above
        if(coord[0]-this.centerX >= 0){
        this.ctx.arc(this.centerX, this.centerY, (coord[0] - this.centerX), 0, 2*Math.PI)
        } else {
        this.ctx.arc(this.centerX, this.centerY, (this.centerX - coord[0]), 0, 2*Math.PI)
        }
        this.ctx.stroke()
    }
    onMouseLeave(){}
    onMouseEnter(){}

}