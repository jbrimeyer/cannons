
class Scene1 extends Phaser.Scene {
	face: Phaser.GameObjects.Image;
	keyA: Phaser.Input.Keyboard.Key;
	keyW: Phaser.Input.Keyboard.Key;
	keyS: Phaser.Input.Keyboard.Key;
	keyD: Phaser.Input.Keyboard.Key;

	constructor() {
		super({key: 'Scene1'});
	}

	preload() {
		this.load.image('face', 'assets/face.jpg');
	}

	create() {
		this.face = this.add.image(400, 500, 'face');
		this.face.setScale(0.3);

		this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
		this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

		this.input.keyboard.on('keyup_SPACE', () => {
			const image = this.physics.add.image(this.face.x, this.face.y, 'face');
			image.setScale(0.2);
			image.setVelocity(Phaser.Math.RND.integerInRange(-150, 150), -400);
		});
	}


	update(delta: number) {
		if (this.keyA.isDown) {
			this.face.x -= 2;
		}

		if (this.keyD.isDown) {
			this.face.x += 2;
		}

		if (this.keyS.isDown) {
			this.face.y += 2;
		}

		if (this.keyW.isDown) {
			this.face.y -= 2;
		}
	}
}

const game = new Phaser.Game({
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 200}
		}
	},
	scene: [ Scene1 ]
});
