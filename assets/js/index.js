const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");
const CH = canvas.height = 400;
const CW = canvas.width = 400;
canvas.style.background = "black";

const RandomWaker = {
	position: { x: CW / 2, y: CH / 2 },
	color: "white",
	size: 4,
	draw() {
		ctx.fillStyle = this.color;
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
				this.color = "red";
				break;
			case 1:
				this.position.x += 4;
				this.color = "green";
				break;
			case 2:
				this.position.y -= 4;
				this.color = "yellow";
				break;
			case 3:
				this.position.y += 4;
				this.color = "gray";
				break;
		}
	}
}

function render() {
	RandomWaker.draw();
	RandomWaker.update();
}

function gameLoop() {
	render();
	window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);