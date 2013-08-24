typedef K = hxd.Key;

class Game {

	var engine : h3d.Engine;
	var scene : h2d.Scene;
	
	public function new(e) {
		this.engine = e;
		scene = new h2d.Scene();
	}
	
	public function init() {
		update();
		hxd.System.setLoop(update);
	}
	
	function update() {
		Timer.update();
		var dt = Timer.tmod;
		engine.render(scene);
	}
	
	static var inst : Game;
	
	public static function main() {
		var engine = new h3d.Engine();
		engine.backgroundColor = 0xFF808080;
		engine.onReady = function() {
			inst = new Game(engine);
			inst.init();
			Key.init();
		};
		engine.init();
	}
}