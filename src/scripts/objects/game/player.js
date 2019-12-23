export default class Player extends Phaser.GameObjects.Rectangle {
    constructor(scene) {
        super(scene, 0, 0, scene.aGrid.cw * 0.5, scene.aGrid.cw * 0.5, `0x2196f3`)
        this.scene = scene

        this.scene.add.existing(this)
        this.scene.physics.add.existing(this);


        this.create()
    }

    create() {
        // Create everything for Visualy
        this.setStrokeStyle(4, `0x${gameOptions.colors[1]}`)
            .setDepth(300)

        // Create everything for Physics
        const grid = this.scene.aGrid
        this.body
            .setDrag(1000, 1000)
            .setCollideWorldBounds(true)
            .setBoundsRectangle(grid.border);
    }

    update() {
        const cursors = this.scene.input.keyboard.createCursorKeys();

        // Horizontal
        if (cursors.left.isDown) this.body.setAccelerationX(-800);
        else if (cursors.right.isDown) this.body.setAccelerationX(800);
        else this.body.setAccelerationX(0);

        // Vertical
        if (cursors.up.isDown) this.body.setAccelerationY(-800);
        else if (cursors.down.isDown) this.body.setAccelerationY(800);
        else this.body.setAccelerationY(0);
    }


}