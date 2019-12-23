export default class Tile extends Phaser.GameObjects.Sprite {
    constructor(scene, texture, size) {
        super(scene, 0, 0, texture)

        this.scene.add.existing(this)
        this.scene.physics.add.existing(this);
        this.setDisplaySize(size, size);
    }


}