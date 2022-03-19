class ArtGenerator {
	constructor(canvas) {
		// Store the params in case we need them later
		this.canvas = canvas;
		// Store the canvas drawing context. All drawing calls will come from this object.
		this.ctx = canvas.getContext('2d');

		// Draw a sample message to the canvas...
		// Set the background color
		this.ctx.fillStyle = "#000000";
		// Draw a filled rectangle the same size as the canvas
		this.ctx.fillRect(0, 0, canvas.height, canvas.width);
	}

	DrawPixel (x, y, color) {
		this.ctx.fillStyle = color;
		this.ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
	}

	RenderStarfield (starCount) {
		for( let i=0; i<starCount; i++ ) {
			this.DrawPixel(
				Math.round(Math.random()*512),
				Math.round(Math.random()*512),
				"#ffffff"
			);
		}
	};
}