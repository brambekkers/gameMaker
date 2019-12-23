
// UI
import MenuButton from '../objects/ui/menuButton'

// Utils
import Align from '../util/align'
import AlignGrid from '../util/alignGrid'

// Game
import Player from '../objects/game/player'
import Grass from '../objects/game/grass'
import Wall from '../objects/game/wall'
import End from '../objects/game/end'
import Start from '../objects/game/start'


export default class BoardScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BoardScene' })

        // grid
        this.gridSize = game.config.width <= game.config.height ? game.config.width : game.config.height
        this.gridOptions = {
            scene: this,
            rows: gameOptions.gameSize,
            cols: gameOptions.gameSize,
            width: this.gridSize,
            height: this.gridSize,
            posX: 'center',
            posY: 'middle'
        }
    }

    create() {
        this.createGrid();
        this.createButtons();

        this.createKeyboardInput()
    }

    createGrid() {
        this.aGrid = new AlignGrid(this.gridOptions)
        this.aGrid.showGrid()
        this.aGrid.enableInput()

        this.grid = new Array(this.gridOptions.cols * this.gridOptions.rows).fill().map((e, i) => {
            return { id: i }
        });
    }

    createButtons() {
        this.backButton = new MenuButton(this, 1, 'BACK', () => {
            this.scene.stop('BoardScene')
            this.scene.start('MainMenuScene')
        })
        this.backButton.setXY(game.config.width - 50, game.config.height - 50)

        this.startButton = new MenuButton(this, 1, 'START', () => {
            this.startGame()
        })
        this.startButton.setXY(game.config.width - 50, game.config.height - 110)
    }

    createKeyboardInput() {
        // Change placing mode
        this.input.keyboard.on('keydown', (e) => {
            const arr = ['start', 'wall', 'grass', 'end']
            if (e.key === 'z') {
                gameOptions.placeItem = arr[(arr.indexOf(gameOptions.placeItem) + 1) % arr.length]
            }
        });

        // Place tile
        this.input.on('pointerdown', () => {
            if (gameOptions.gridNr >= 0 && typeof gameOptions.gridNr === 'number' && !this.gameStarted) {
                let obj = this.grid[gameOptions.gridNr]
                let group = null
                // Destroy old 
                if (obj.tile) {
                    obj.tile.destroy()
                    obj.tile = null
                    return
                }

                if (gameOptions.placeItem === 'start') {
                    // if no group, add group
                    group = this.starts = this.starts ? this.starts : this.add.group();
                    obj.tile = new Start(this, this.aGrid.cw)
                }
                else if (gameOptions.placeItem === 'end') {
                    group = this.ends = this.ends ? this.ends : this.add.group();
                    obj.tile = new End(this, this.aGrid.cw)
                }
                // CREATE WALL
                else if (gameOptions.placeItem === 'wall') {
                    // if no group, add group
                    group = this.walls = this.walls ? this.walls : this.add.group();
                    obj.tile = new Wall(this, this.aGrid.cw)
                    console.log(this.walls)
                }
                // CREATE GRASS
                else if (gameOptions.placeItem === 'grass') {
                    group = this.grasses = this.grasses ? this.grasses : this.add.group();
                    obj.tile = new Grass(this, this.aGrid.cw)
                }

                if (obj.tile) {
                    // Place on correct spot
                    this.aGrid.placeAtIndex(gameOptions.gridNr, obj.tile)
                    // Add to group
                    group.add(obj.tile);
                }
            }
        });
    }

    createPlayer(startX, startY) {
        this.player = new Player(this)
        this.aGrid.placeAtIndex(this.aGrid.toGridNumber(randomStart.x, randomStart.y), this.player)
    }

    startGame() {
        const randomStart = Phaser.Utils.Array.GetRandom(this.starts.getChildren())

        this.createPlayer()

        this.startButton.destroy();
        this.gameStarted = true
    }

    update() {
        if (this.gameStarted) {
            this.player.update();

        }
    }


}
