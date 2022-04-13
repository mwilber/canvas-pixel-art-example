class ArtGenerator {
	constructor(canvas, resolution) {
		// Store the params in case we need them later
		this.canvas = canvas;
		this.resolution = resolution;
		this.bitmapPalette = [
			"transparent",
			"#000000",
			"#FFFFFF"
		];
		// Store the canvas drawing context. All drawing calls will come from this object.
		this.ctx = canvas.getContext('2d');

		// Set the background color
		this.ctx.fillStyle = "#ff7f51";
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

	RenderTerrain (peaks, color) {
		for(let idx=1; idx < peaks.length; idx++) {
			let height = peaks[idx - 1];
			let peakDistance = (this.resolution / (peaks.length-1));
			let currentPeakPosition = peakDistance * (idx - 1);
			let peakDifference = peaks[idx] - height;
			let stepHeight = peakDifference / peakDistance;
			for( let step = 0; step < peakDistance; step++ ){
				let currenHeight = height + (stepHeight * step);
				this.DrawColumn(
					currentPeakPosition + step,
					this.resolution - currenHeight,
					currenHeight,
					color
				);
			}
		}
	};

	RenderBitmap (x, y, bitmap, color) {
		bitmap.forEach((row, idx) => {
			row.forEach((pixel, col) => {
				this.DrawPixel(x + col, y + idx, this.bitmapPalette[pixel] ? this.bitmapPalette[pixel] : color);
			});
		});
	};
}