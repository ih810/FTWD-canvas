class InsertText extends PaintFunction{
    constructor(ctx, ctxDraft){
        super();
        this.ctx = ctx;
        this.fontFam = fontFam;
        this.fontSize = fontSize;
        this.input = text;
    }

    onMouseDown(coord,event){
        this.ctxDraft.fillStyle = "transparent";
        //set the color of the line
    
        this.origX = coord[0];
        this.origY = coord[1];
        this.ctx.font = `${this.fontSize} ${this.fontFam}`;
        this.ctx.strokeText(`${this.input}`,this.origX, this.origY);
    }
    //require a input and selection span in the html to control the font size and fam,
    //variable has been set in the canvasCommon, 
    
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
}