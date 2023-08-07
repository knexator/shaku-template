import Shaku from "shaku"
import GUI from "lil-gui"

// TODO: fix Shaku so these are proper imports
const Vector2 = Shaku.utils.Vector2;
const KeyboardKeys = Shaku.input.KeyboardKeys;

// the game's assets
import example_texture_url from "./images/sprite.png?url"

// game specific variables we might want to tune while playing
const CONFIG = {
	move_speed: 100,
};
const gui = new GUI();
gui.add(CONFIG, "move_speed", 10, 500);

await Shaku.init();

// load texture (TODO: change the example to showcase parallel loading)
let example_texture = await Shaku.assets.loadTexture(example_texture_url);

// use Shaku's canvas
document.body.appendChild(Shaku.gfx.canvas);
Shaku.gfx.setResolution(800, 600, true);

// create a SpriteBatch, which lets us draw sprites
let example_batch = new Shaku.gfx.SpriteBatch();

// actual game state
let player_position = new Vector2(Shaku.gfx.canvas.width / 2, Shaku.gfx.canvas.height / 2);

// main loop
function step() {
	Shaku.startFrame();

	// LOGIC
	let move_dir = new Vector2(0, 0);
	// TODO: showcase a more concise way of doing this
	if (Shaku.input.down([KeyboardKeys.W, KeyboardKeys.UP])) {
		console.log("up")
		move_dir.y -= 1;
	}
	if (Shaku.input.down([KeyboardKeys.S, KeyboardKeys.DOWN])) {
		move_dir.y += 1;
	}
	if (Shaku.input.down([KeyboardKeys.D, KeyboardKeys.RIGHT])) {
		move_dir.x += 1;
	}
	if (Shaku.input.down([KeyboardKeys.A, KeyboardKeys.LEFT])) {
		move_dir.x -= 1;
	}
	player_position.addSelf(move_dir.mul(CONFIG.move_speed * Shaku.gameTime.delta));

	// VISUALS
	// clear background
	Shaku.gfx.clear(Shaku.utils.Color.cornflowerblue);
	// draw a sprite
	example_batch.begin();
	example_batch.drawQuad(example_texture, player_position, new Vector2(200, 200));
	example_batch.end();
	// end this frame, and request the next one
	Shaku.endFrame();
	Shaku.requestAnimationFrame(step);
}
step();
