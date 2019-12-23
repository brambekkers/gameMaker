// Utils
import Align from '../util/align'
import AlignGrid from '../util/alignGrid'
// UI
import MenuButton from '../objects/ui/menuButton'
import BackgroundMenu from '../objects/ui/backgroundMenu'
// Scenes
import BoardScene from './boardScene'

export default class MainMenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenuScene' })

        this.aGrid = new AlignGrid({ scene: this, rows: 9, cols: 3, width: 450, height: 550, posX: 'center', posY: 'middle' })
    }

    create() {
        this.aGrid.show()

        // Background
        const background = new BackgroundMenu(this, 450, 550)
        Align.center(background)

        // Title
        const title = this.add.text(0, 0, 'GAME MAKER', gameOptions.titleStyle).setOrigin(0.5).setShadow(2, 2, "#333333", 2, true, true);
        this.aGrid.placeAtIndex(4, title)

        // Buttons
        // start
        const start = new MenuButton(this, 0.5, 'START', () => {
            this.scene.stop('MainMenuScene')

            if (this.scene.get('BoardScene')) this.scene.remove('BoardScene')
            this.scene.add('BoardScene', BoardScene, true);
            // let BoardScene = this.scene.get('BoardScene');
            // BoardScene.scene.restart();
            // this.scene.start('BoardScene')
        })
        this.aGrid.placeAtIndex(10, start)

        // options
        const options = new MenuButton(this, 0.5, 'OPTIONS', () => {
            this.scene.start('OptionsMenuScene')
        })
        this.aGrid.placeAtIndex(13, options)

        // credits
        const credits = new MenuButton(this, 0.5, 'CREDITS', () => { })
        this.aGrid.placeAtIndex(16, credits)

        // exit
        const exit = new MenuButton(this, 0.5, 'EXIT', () => { })
        this.aGrid.placeAtIndex(19, exit)

    }
}
