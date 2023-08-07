import Shaku from "shaku"

await Shaku.init();
document.body.appendChild(Shaku.gfx.canvas);
Shaku.gfx.setResolution(800, 600, true);
function step() {
	Shaku.startFrame();
	Shaku.gfx.clear(Shaku.utils.Color.cornflowerblue);
	Shaku.endFrame();
	Shaku.requestAnimationFrame(step);
}
step();
