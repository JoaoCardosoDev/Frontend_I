window.onload = () => {

    const button = document.querySelector('.play');
    let animID = null;

    button.onclick = () => {
        if (animID) {
            cancelAnimationFrame(animID)
            animID = null;
            button.innerText= 'Start';
        }else{
            draw();
            button.innerText="Stop";
        }
    }



    const canvas = document.querySelector('canvas');

    const ctx = canvas.getContext("2d");

    const width = canvas.width
    const height = canvas.height

    console.log(width, height)

    const colors = ['red', 'orange', 'yellow', 'green', 'indigo', 'violet'];
    const blockWidth = width/colors.length;

    for (let index = 0; index < colors.length; index++){
        ctx.fillStyle=colors[index]
        ctx.fillRect( blockWidth*index, 0, blockWidth, height)   
    }



    // ctx.strokeStyle= "blue";
    // ctx.lineWidth=2;
    // ctx.beginPath();
    // ctx.moveTo(220,70);
    // ctx.bezierCurveTo(200,200,300,200,400,150);
    // ctx.stroke();
    // ctx.fill();

    const vector = {
        x: 1,
        y: 1
    }
    const draw = () => {
        ctx.strokeStyle = "black"
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(vector.x, vector.y);
        ctx.stroke();
        vector.x = vector.x + Math.random()
        vector.y = vector.y + Math.random()
            
        animID = requestAnimationFrame(draw);
    }
    draw();
    const reseta = document.querySelector('.reset');
    reseta.onclick = () => {
        window.location.reload();
    }

     const img = new Image();
     
     img.onload = () => {
        ctx.drawImage(img, 200, 200, 100, 100, 100, 100, 300,300);
     }

     img.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fplugins65.shopware-staging.overdose.digital%2FTest-Product-3%2FSW10000123456789&psig=AOvVaw2bChCxyeFiob2CtIdHJA1J&ust=1715114039991000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNDO_-3v-YUDFQAAAAAdAAAAABAD"

     ctx.fillStyle = "blue"
     ctx.font = "48px serif"
     ctx.fillText=("Help", 10, 50);
}