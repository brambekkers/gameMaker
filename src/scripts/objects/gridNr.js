import gameOptions from "./gameOptions"

export default class GridNr extends Phaser.GameObjects.Text {
    constructor(scene) {
        super(scene, 10, 40, '', { color: 'black', fontSize: '28px' })
        scene.add.existing(this)
        this.setOrigin(0).setDepth(500);

    }

    update() {
        this.setText(`Grid NR: ${Math.floor(gameOptions.gridNr)}`)
    }
}
