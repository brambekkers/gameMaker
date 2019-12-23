// Extra
import FpsText from '../objects/fpsText'
import GridNr from '../objects/gridNr'
import PlaceItem from '../objects/placeItem'

export default class OverlayScene extends Phaser.Scene {
    constructor() {
        super({ key: 'OverlayScene' })
        this.timeout = false
    }

    create() {
        this.fpsText = new FpsText(this)
        this.placeItem = new PlaceItem(this)
    }

    update() {
        if (!this.timeout) {
            this.timeout = true
            this.fpsText.update();
            this.placeItem.update();

            setTimeout(() => this.timeout = false, 500)
        }
    }
}