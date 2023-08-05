class Hangman{

    constructor(ctx){
        this.ctx = ctx;
    }

    drawHead(){
        this.ctx.beginPath();
        ctx.arc(350, 120, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }

    drawBody(){
        drawLine(350,160,350,300);
    }

    drawLeftLeg(){
        drawLine(350,300,300,370);
    }

    drawRightLeg(){
        drawLine(350,300,400,370);
    }

    drawLeftArm(){
        drawLine(350,230,400,200);
    }

    drawRightArm(){
        drawLine(350,230,300,200);
    }
    
    drawLine(x1,y1,x2,y2){
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }
}