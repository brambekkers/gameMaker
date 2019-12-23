export default class BackgroundMenu extends Phaser.GameObjects.Rectangle {
    constructor(scene, w, h) {
        super(scene, 0, 0, w, h, `0x${gameOptions.colors[3]}`)

        this.scene.add.existing(this)
        this.setStrokeStyle(4, `0x${gameOptions.colors[0]}`)
    }
}