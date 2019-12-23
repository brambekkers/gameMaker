import UIBlock from '../../util/UIBlock'

export default class NumberButton extends UIBlock {
    constructor(scene, x, y, object, key, style) {
        super();
        this.x = x
        this.y = y
        this.scene = scene
        this.object = object
        this.key = key
        this.text = object[key]
        this.style = style
        this.offset = 50

        this.create()
    }

    create() {
        this.scene.add.existing(this)
        this.createText();
        this.createButtons();
        this.buttonInteraction()
    }

    createText() {
        this.textObject = this.scene.add.text(this.x, this.y, this.text, this.style).setOrigin(0.5)
        this.add(this.textObject)
    }

    createButtons() {
        this.buttonMin = this.scene.add.image(this.x - this.offset, this.y, 'arrowSilver_left');
        this.buttonPlus = this.scene.add.image(this.x + this.offset, this.y, 'arrowSilver_right');
        this.add(this.buttonMin)
        this.add(this.buttonPlus)
    }

    buttonInteraction() {
        this.buttonMin.setInteractive().on('pointerdown', () => {
            if (this.object[this.key] > 5) this.object[this.key]--
            this.updateText();
        })

        this.buttonPlus.setInteractive().on('pointerdown', () => {
            if (this.object[this.key] < 20) this.object[this.key]++
            this.updateText();
        })


        const buttons = [this.buttonMin, this.buttonPlus]

        for (const button of buttons) {
            button.on('pointerover', () => {
                button.setTint(`0x${gameOptions.colors[3]}`);
            });

            button.on('pointerout', () => {
                button.clearTint();
            });
        }

    }

    updateText() {
        this.textObject.setText(this.object[this.key]);
    }
}
