// Utils
import UIBlock from '../util/UIBlock'
import Align from '../util/align'
import AlignGrid from '../util/alignGrid'

// UI
import NumberButton from '../objects/ui/numberButton'
import MenuButton from '../objects/ui/menuButton'
import BackgroundMenu from '../objects/ui/backgroundMenu'

export default class OptionsMenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'OptionsMenuScene' })
        this.aGrid = new AlignGrid({ scene: this, rows: 9, cols: 3, width: 450, height: 550, posX: 'center', posY: 'middle' })

    }

    create() {
        // this.aGrid.show()

        // Background
        const background = new BackgroundMenu(this, 450, 550)
        Align.center(background)

        // Title
        const title = this.add.text(0, 0, 'OPTIONS', gameOptions.titleStyle).setOrigin(0.5).setShadow(2, 2, "#333333", 2, true, true);
        this.aGrid.placeAtIndex(4, title)

        // Options: GAMESIZE
        const gameSize = this.createGameSizeBlock()
        this.aGrid.placeAtIndex(7, gameSize)
        gameSize.x -= 200

        // Back Button
        const back = new MenuButton(this, 0.5, 'BACK', () => {
            this.scene.stop('OptionsMenuScene')
            this.scene.start('MainMenuScene')
        })
        this.aGrid.placeAtIndex(22, back)



    }

    createGameSizeBlock() {
        const header1 = this.add.text(0, 0, 'Game Size', gameOptions.headerStyle)
        const text = this.add.text(0, 40, 'Matrix Size:', gameOptions.menuStyle)
        const NBW = new NumberButton(this, 100, 50, gameOptions, 'gameSize', gameOptions.menuStyle)

        const block = new UIBlock()
        block.add(header1)
        block.add(text)
        block.add(NBW)
        return block
    }
}
