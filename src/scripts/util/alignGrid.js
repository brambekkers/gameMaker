import gameOptions from "../objects/gameOptions";

export default class AlignGrid {
	constructor(config) {
		if (!config.scene) {
			console.debug("missing scene");
			return;
		}
		if (!config.rows) config.rows = 5;
		if (!config.cols) config.cols = 5;
		if (!config.height) config.height = game.config.height;
		if (!config.width) config.width = game.config.width;

		this.scene = config.scene;
		this.w = config.width
		this.h = config.height
		this.rows = config.rows
		this.cols = config.cols
		this.cw = config.width / config.cols;
		this.ch = config.height / config.rows;
		this.offsetX = 0
		this.offsetY = 0

		if (config.posX === 'center') this.offsetX = (game.config.width - config.width) / 2
		if (config.posX === 'right') this.offsetX = (game.config.width - config.width)
		if (config.posY === 'middle') this.offsetY = (game.config.height - config.height) / 2
		if (config.posY === 'down') this.offsetY = (game.config.height - config.height)

		this.border = new Phaser.Geom.Rectangle(this.offsetX, this.offsetY, this.w, this.h)
	}

	showGrid() {
		this.scene.add.grid(this.offsetX, this.offsetY, this.w, this.h, this.cw, this.ch, 0x94948e)
			.setAltFillStyle(0xc7c7c2)
			.setOutlineStyle()
			.setOrigin(0);

		this.scene.add.graphics()
			.lineStyle(5, `0x${gameOptions.colors[0]}`)
			.strokeRectShape(this.border);
	}
	placeAt(xx, yy, obj) {
		//calc position based upon the cellwidth and cellheight
		obj.x = this.cw * xx + this.cw / 2 + this.offsetX;
		obj.y = this.ch * yy + this.ch / 2 + this.offsetY;
	}
	placeAtIndex(i, obj) {
		const yy = Math.floor(i / this.cols);
		const xx = i - (yy * this.cols);

		this.placeAt(xx, yy, obj);

	}
	showNumbers() {
		let count = 0;
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				const numText = this.scene.add.text(0, 0, count, { color: `#${gameOptions.colors[0]}` });
				numText.setOrigin(0.5, 0.5);
				this.placeAtIndex(count, numText);
				count++;
			}
		}
	}

	show() {
		this.showGrid()
		this.showNumbers()
	}

	toGridNumber(x, y) {
		const inside = x > this.offsetX && x < this.offsetX + this.w && y > this.offsetY && y < this.offsetY + this.h
		if (inside) {
			const col = Math.floor((x - this.offsetX) / this.cw)
			const row = Math.floor((y - this.offsetY) / this.ch)

			return col + (row * this.cols)
		} else {
			return false
		}
	}

	enableInput() {
		this.scene.input.mouse.disableContextMenu();
		this.scene.input.on('pointerdown', (p) => {
			gameOptions.gridNr = this.toGridNumber(p.x, p.y)
		});
	}
}