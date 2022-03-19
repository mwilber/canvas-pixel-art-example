class ArtGenerator {
	constructor(canvas) {
		// Store the params in case we need them later
		this.canvas = canvas;
		// Store the canvas drawing context. All drawing calls will come from this object.
		this.ctx = canvas.getContext('2d');

		// Draw a sample message to the canvas...
		// Set the background color
		this.ctx.fillStyle = "#eeeeff";
		// Draw a filled rectangle the same size as the canvas
		this.ctx.fillRect(0, 0, canvas.height, canvas.width);
		// Set the text color
		this.ctx.fillStyle = "#333399";
		// Draw filled text
		this.ctx.fillText("Time to Draw Something!", 10, 20, canvas.width-20);
	}

	DrawPixel (x, y, color) {
		ctx.fillStyle = color;
		ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
	}
}