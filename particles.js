const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];
let adjustX = 50;
let adjustY = 100;

// handle mouse
const mouse = {
    x: null,
    y: null,
    radius: 100
}

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
  //  mouse.radius = 150;
    //console.log(mouse.x, mouse.y);
});

ctx.fillStyle = 'white';
ctx.font = '2rem Milka';

ctx.fillText('Patterns hold together.', 0, 40);


const textCoordinates = ctx.getImageData(0, 0, 1000, 1000);

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = .8;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random()*5)+1;
    }
    draw(){


       ctx.beginPath();
       ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
       ctx.closePath();
       ctx.fill();
        
    }
    update(){
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx/distance;
        let forceDirectionY = dy/distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;
        if(distance < mouse.radius){
            this.x -= directionX;
            this.y -= directionY;

        } else {
            if(this.x != this.baseX){
                let dx = this.x - this.baseX;
                this.x -= dx/15;
            }
            if ( this.y != this.baseY){
                let dy = this.y - this.baseY;
                this.y -= dy/15;
            }
        }
    }
}

function init(){
    particleArray = [];
    for(let y = 0, y2 = textCoordinates.height; y < y2; y++){
        for(x = 0, x2 = textCoordinates.width; x < x2; x++){
            if(textCoordinates.data[(y * 4 * textCoordinates.width) + (x*4) + 3] > 128){
                let positionX = x + adjustX;
                let positionY = y + adjustY;
                particleArray.push(new Particle(positionX * 2, positionY * 2))

            }
        }
    }

    /*
    for (let i = 0; i < 1000; i++){
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particleArray.push(new Particle(x,y));
    }
        */


    //particleArray.push(new Particle(50,50));
   // particleArray.push(new Particle(80,50));
}

init();
console.log(particleArray);

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++){
        particleArray[i].draw();
        particleArray[i].update();

    }
    requestAnimationFrame(animate);
}
animate();