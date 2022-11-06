const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");
const CH = canvas.height = 400;
const CW = canvas.width = 400;
canvas.style.background = "black";



const RandomWaker = {
	position: { x: CW / 2, y: CH / 2 },
	size: 4,
	draw(colorG) {
		ctx.fillStyle = colorG;
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
		ctx.closePath();
		ctx.fill();
	},
	update() {
		let r = Math.floor(Math.random() * 4);

		switch (r) {
			case 0:
				this.position.x -= 4;

				break;
			case 1:
				this.position.x += 4;

				break;
			case 2:
				this.position.y -= 4;

				break;
			case 3:
				this.position.y += 4;

				break;
		}
	}
}

function render() {
	let colorG = `rgba(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${(Math.random()).toFixed(1)})`;
	RandomWaker.draw(colorG);
	RandomWaker.update();
}

function gameLoop() {
	render();
	window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);