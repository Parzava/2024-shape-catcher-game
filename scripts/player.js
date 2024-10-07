import { canvas, ctx } from "./common/canvas.js";

export class Player {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
		this.width = 75;
		this.height = 25;
		this.speed = 5;

		this.moving = { up: false, down: false, right: false, left: false };
		this.keyBindings = { ArrowUp: "up", ArrowDown: "down", ArrowRight: "right", ArrowLeft: "left" };

		this.wireUpKeyboard();
	}

	wireUpKeyboard() {
		window.addEventListener("keydown", (e) => this.toggleMovement(e, true));
		window.addEventListener("keyup", (e) => this.toggleMovement(e, false));
	}

	toggleMovement(e, isMoving) {
		if (this.keyBindings[e.code]) {
			this.moving[this.keyBindings[e.code]] = isMoving;
		}
	}

	update() {
		let dirX = (this.moving.right ? 1 : 0) - (this.moving.left ? 1 : 0);
		let dirY = (this.moving.down ? 1 : 0) - (this.moving.up ? 1 : 0);

		this.x = Math.max(0, Math.min(this.x + this.speed * dirX, canvas.width - this.width));
		this.y = Math.max(0, Math.min(this.y + this.speed * dirY, canvas.height - this.height));
	}

	draw() {
		ctx.fillStyle = "blue";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}
