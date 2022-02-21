class ArtGenerator {
	constructor(canvas, resolution) {
		// Store the params in case we need them later
		this.canvas = canvas;
		this.resolution = resolution;
		// Store the canvas drawing context. All drawing calls will come from this object.
		this.ctx = canvas.getContext('2d');
		// Scale the context based on the resolution to fill the entire canvas
		this.ctx.scale(canvas.width/this.resolution, canvas.height/this.resolution);

		// Draw a sample message to the canvas...
		// Set the background color
		this.ctx.fillStyle = "#eeeeff";
		// Draw a filled rectangle the same size as the canvas
		this.ctx.fillRect(0, 0, canvas.height, canvas.width);
		// Set the text color
		this.ctx.fillStyle = "#9999ff";
		// Draw filled text
		this.ctx.fillText("Time to Draw Something!", 10, 20, canvas.width-20);
	}
}