import UIBlock from '../../util/UIBlock'

export default class MenuButton extends UIBlock {
    constructor(scene, origin, text, f) {
        super()
        this.scene = scene
        this.origin = origin
        this.text = text
        this.func = f


        this.create()
    }

    create() {
        this.createImage()
        this.createText()
    }

    createText() {
        const buttonText = this.scene.add.text(0, 0, this.text, { fontSize: 28, color: `#${gameOptions.colors[1]}`, align: 'center' }).setDepth(410);
        Phaser.Display.Align.In.Center(buttonText, this.button);
        this.add(buttonText)
    }

    createImage() {
        this.button = this.scene.add.image(0, 0, 'buttonLong_grey').setOrigin(this.origin).setDepth(400);

        this.button.setInteractive().on('pointerdown', () => {
            this.button.setTexture('buttonLong_grey_pressed')
            setTimeout(() => this.func(), 100)
        })

        this.button.on('pointerover', () => {
            this.button.setTint(`0x${gameOptions.colors[3]}`);
        });

        this.button.on('pointerout', () => {
            this.button.clearTint();
            this.button.setTexture('buttonLong_grey')
        });

        this.add(this.button)
    }
}
