typedef K = hxd.Key;

class Part extends h2d.SpriteBatch.BatchElement {
	public var dx : Float;
	public var dy : Float;
	public var dr : Float;
	public var z : Float;
	public function new(r, x, y) {
		super(r);
		scale = 0.25;
		alpha = 0.5;
		z = (Math.random() + 0.5) * 16;
		this.x = x + (Math.random() - 0.5) * 16;
		this.y = y + Math.random() * 16;
		this.dx = (Math.random() - 0.5) * 5;
		this.dy = -(1 + Math.random() * 4) * 2;
	}
	override function update(et:Float) {
		var dt = et * 60;
		dx *= Math.pow(0.95, dt);
		dy += dt;
		scale *= Math.pow(0.97 , dt);
		x += dx * dt;
		y += dy * dt;
		var dr = (dx * dx + dy * dy) * 0.1;
		rotation += dr;
		if( dr < 0.1 ) {
			alpha -= 0.02 * dt;
			if( alpha < 0 )
				return false;
		}
		if( y > Game.BASEY + z ) {
			dx *= 0.95;
			y = Game.BASEY + z;
			dy = -dy * 0.7;
		}
		return true;
	}
}

class Fighter {

	var game : Game;
	var anim : h2d.Anim;
	var isHero : Bool;
	public var moveSpeed : Float;
	public var power : Float;
	public var x(get, set) : Float;

	public var pause : Float;
	public var push : Float;
	
	public function new() {
		game = Game.inst;
		anim = new h2d.Anim(game.fightCont);
		anim.colorKey = 0x5E016D;
		anim.speed = 20 + Math.random() - 0.5;
		anim.currentFrame = Math.random() * 8;
		anim.y = Game.BASEY;
		power = 1.5;
		anim.scaleX = -1;
		moveSpeed = 4;
		push = 0;
		pause = 0;
		game.fighters.push(this);
	}
	
	public function play(res:hxd.Resource.BitmapRes) {
		anim.play([for( a in res.toTile().split(4, true) ) a.sub(0, 0, a.width, a.height, -16, -32)]);
	}
	
	public function get_x() {
		return anim.x;
	}
	public function set_x(v) {
		return anim.x = v;
	}
	
	public function update(dt:Float) {
		var pp = Math.max(5 * dt, Math.abs(push) * 0.25);
		if( push > 0 ) {
			var dx = push > pp ? pp : push;
			push -= dx;
			x += dx;
		} else if( push < 0 ) {
			var dx = push < -pp ? -pp : push;
			push -= dx;
			x += dx;
		}
		pause -= dt;
		x += moveSpeed * dt * anim.scaleX;
	}
	
}

class Hero extends Fighter {

	public function new() {
		super();
		anim.x = -16;
		anim.scaleX = 1;
		power = 1;
		pause = 0;
	}
	
	public function action( m : Fighter ) {
		if( pause > 0 )
			return false;
		m.push += 40;
		for( i in 0...10 )
			game.expl.add(new Part(game.expl.tile,m.x + 20,m.anim.y));
		return true;
	}
	
}

@:publicFields
class Game {
	
	static inline var BASEY = 180;

	var fighters : Array<Fighter>;
	var fightCont : h2d.Sprite;
	var engine : h3d.Engine;
	var scene : h2d.Scene;
	var hero : Hero;
	var monster : Fighter;
	var expl : h2d.SpriteBatch;
	
	
	public function new(e) {
		this.engine = e;
		scene = new h2d.Scene();
		scene.setFixedSize(Std.int(hxd.System.width / 3), Std.int(hxd.System.height / 3));
	}
		
	public function init() {
		new h2d.Bitmap(hxd.Resource.embed("gfx/bg.png").toTile(), scene);

		fightCont = new h2d.Sprite(scene);
		
		fighters = [];
		
		hero = new Hero();
		hero.play(hxd.Resource.embed("gfx/hero.png"));
		monster = new Fighter();
		monster.play(hxd.Resource.embed("gfx/monster.png"));
		monster.x = 250;

		expl = new h2d.SpriteBatch(hxd.Resource.embed("gfx/explode.png").toTile().center(16,16), scene);
		expl.hasRotationScale = true;
		expl.hasUpdate = true;
		expl.blendMode = Add;
		
		update();
		hxd.System.setLoop(update);
	}
	
	function update() {
		Timer.update();
		var dt = Timer.tmod;
		
		var first : Fighter = null;
		for( f in fighters.copy() ) {
			f.update(dt);
			if( f != hero && (first == null || f.x < first.x) )
				first = f;
		}
		
		if( hero.x > first.x - 20 ) {
			var h = (hero.x * first.power + first.x * hero.power) / (hero.power + first.power);
			hero.x = h - 10;
			first.x = h + 10;
			
			if( Key.isToggled("A".code) || Key.isToggled("Q".code) )
				hero.action(first);
		}
		
		scene.setElapsedTime(dt / 60);
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