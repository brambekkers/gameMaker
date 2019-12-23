import 'phaser'
import '@babel/polyfill'

// Scenes
import PreloadScene from './scenes/preloadScene'
import MainMenuScene from './scenes/mainMenuScene'
import BoardScene from './scenes/BoardScene'
import OptionsMenuScene from './scenes/optionsMenuScene'
import OverlayScene from './scenes/overlayScene'

// Options
import gameOptions from './objects/gameOptions'

const factor = window.innerHeight / window.innerWidth

const config = {
	backgroundColor: '#CFCFCD',
	scale: {
		type: Phaser.AUTO,
		parent: 'phaser-game',
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 1500,
		height: 1500 * factor
	},
	scene: [PreloadScene, MainMenuScene, OverlayScene, OptionsMenuScene,],
	physics: {
		default: 'arcade',
		arcade: {
			debug: false,
		}
	}
}

window.addEventListener('load', () => {
	window.game = new Phaser.Game(config)
	window.gameOptions = gameOptions
})
