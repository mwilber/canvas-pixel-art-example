class ArtGenerator {
	constructor(canvas, resolution) {
		// Store the params in case we need them later
		this.canvas = canvas;
		this.resolution = resolution;
		// Store the canvas drawing context. All drawing calls will come from this object.
		this.ctx = canvas.getContext('2d');

		// Set the background color
		this.ctx.fillStyle = "#000000";
		// Draw a filled rectangle the same size as the canvas
		this.ctx.fillRect(0, 0, canvas.height, canvas.width);

		// Set the canvas scale relative to the specified resolution
		this.ctx.scale(
			canvas.width / resolution, 
			canvas.height / resolution
		);
	}

	DrawPixel (x, y, color) {
		this.ctx.fillStyle = color;
		this.ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
	}

	DrawColumn (x, y, h, color) {
		this.ctx.fillStyle = color;
		this.ctx.fillRect(Math.round(x), Math.round(y), 1, Math.round(h));
	};

	RenderStarfield (starCount) {
		for( let i=0; i<starCount; i++ ) {
			this.DrawPixel(
				Math.round(Math.random() * this.resolution),
				Math.round(Math.random() * this.resolution),
				"#ffffff"
			);
		}
	}
}