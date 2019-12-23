export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('grass', 'assets/img/tiles/grass.png')
    this.load.image('start', 'assets/img/tiles/start.png')
    this.load.image('end', 'assets/img/tiles/end.png')
    this.load.image('wall', 'assets/img/tiles/wall.png')
    this.load.image('panel_beige', 'assets/img/ui/panel_beige.png')
    this.load.image('buttonLong_grey', 'assets/img/ui/buttonLong_grey.png')
    this.load.image('buttonLong_grey_pressed', 'assets/img/ui/buttonLong_grey_pressed.png')
    this.load.image('arrowSilver_left', 'assets/img/ui/arrowSilver_left.png')
    this.load.image('arrowSilver_right', 'assets/img/ui/arrowSilver_right.png')

  }

  create() {
    this.scene.start('MainMenuScene')
    this.scene.start('OverlayScene')
  }
}
