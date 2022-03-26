class ArtGenerator {
	constructor(canvas) {
		// Store the params in case we need them later
		this.canvas = canvas;
		// Store the canvas drawing context. All drawing calls will come from this object.
		this.ctx = canvas.getContext('2d');

		// Draw a sample message to the canvas...
		// Set the text color
		this.ctx.fillStyle = "#333399";
		// Draw filled text
		this.ctx.fillText("Time to Draw Something!", 40, 40, canvas.width-20);
	}
}