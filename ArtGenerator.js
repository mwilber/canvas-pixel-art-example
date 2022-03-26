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

	RenderMoon (x, y, r, color) {
		for( let i = x-r; i <= x+r; i++ ){
			const h = Math.floor(Math.sqrt(Math.pow(r,2) - Math.pow((i-x),2))*2);
			this.DrawColumn(i, y-Math.floor(h/2), h, color)
		}
	};
}