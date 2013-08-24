typedef K = hxd.Key;

enum Wave {
	Tuto( t : String, cond : Void -> Bool );
	M( m : Fighter.FKind, dist : Int, ?count : Int );
	Wait( dist : Int );
	End;
}

@:publicFields
class Game {
	
	static inline var BASEY = 180;
	
	
	var wavesData : Array<Wave>;
	var fighters : Array<Fighter>;
	var fightCont : h2d.Sprite;
	var engine : h3d.Engine;
	var scene : h2d.Scene;
	var hero : Hero;
	var expl : h2d.SpriteBatch;
	var world : h2d.Sprite;
	var bg : h2d.Sprite;
	var font : h2d.Font;
	
	var todo : Array < Float -> Bool >;
	var wavePos : Int;
	var waveCount : Int;
	var waveDist : Int;
	
	var nextTime : Float;
	var remTime : flash.text.TextField;
	
	public function new(e) {
		this.engine = e;
		h2d.Font.embed("Verdana", "gfx/Verdana.ttf");
		font = new h2d.Font("Verdana", 32);
		font.halfSize();
		scene = new h2d.Scene();
		scene.setFixedSize(Std.int(hxd.System.width / 3), Std.int(hxd.System.height / 3));
	}
		
	public function init() {
		
		
		wavesData = [
			M(Slime,0),
			Tuto("Press Q to attack monsters", function() return fighters.length == 1),
			M(Slime, 200, 3),
			M(Goblin, 300),
			Tuto("Hit Q faster!", function() return fighters.length == 1),
			M(Goblin, 300, 2),
			M(Time, 200),
			End,
		];
		
		world = new h2d.Sprite(scene);
		
		bg = new h2d.Sprite(world);
		
		todo = [];
		
		var sbg = hxd.Resource.embed("gfx/bg.png").toTile();
		for( i in 0...20 ) {
			var b = new h2d.Bitmap(sbg, bg);
			var flip = i & 1 == 1;
			b.scaleX = flip ? -1 : 1;
			b.x = flip ? (i + 1) * sbg.width : i * sbg.width;
		}

		fightCont = new h2d.Sprite(world);
		
		fighters = [];
		
		hero = new Hero();

		expl = new h2d.SpriteBatch(hxd.Resource.embed("gfx/explode.png").toTile().center(16,16), world);
		expl.hasRotationScale = true;
		expl.hasUpdate = true;
		expl.blendMode = Add;
		expl.color = new h3d.Vector(1, 0.6, 0., 1);
		
		
		remTime = newText();
		remTime.x = 350;
		remTime.y = 550;
		
		nextTime = haxe.Timer.stamp() + 10;
		
		update();
		hxd.System.setLoop(update);
	}
	
	function newText() {
		var t = new flash.text.TextField();
		flash.Lib.current.addChild(t);
		var fmt = t.defaultTextFormat;
		fmt.font = "Verdana";
		fmt.size = 24;
		t.defaultTextFormat = fmt;
		t.filters = [new flash.filters.GlowFilter(0, 0.5, 2, 2, 10)];
		t.width = 1000;
		t.selectable = false;
		t.textColor = 0xFFFFFF;
		return t;
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
		
	
		if( first != null && hero.x > first.x - 20 ) {
			switch( first.kind ) {
			case Time:
				popText("Time UP!", 0xE1E6FF);
				nextTime = haxe.Timer.stamp() + 10;
				first.kill();
			default:
				var h = (hero.x * first.pushPower + first.x * hero.pushPower) / (hero.pushPower + first.pushPower);
				hero.x = h - 10;
				first.x = h + 10;
				if( Key.isToggled("A".code) || Key.isToggled("Q".code) )
					hero.action(first);
			}
		}
		
		var tx = -Math.max(hero.x - scene.width * 0.5, 0);
		var ws = Math.pow(0.5, dt);
		world.x = Std.int(world.x * ws + (1 - ws) * tx);
		
		switch( wavesData[wavePos] ) {
		case Tuto(text, cond):
			popText(text, 0xFFFFFF, cond);
			wavePos++;
		case M(kind, dist, count):
			if( (-tx) - waveDist >= dist ) {
				new Fighter(kind).x = waveDist + dist + 300;
				waveDist += dist;
				if( count == null || count == waveCount+1 ) {
					wavePos++;
					waveCount = 0;
				} else
					waveCount++;
			}
		case Wait(dist):
			if( ( -tx) - waveDist >= dist ) {
				waveDist += dist;
				wavePos++;
			}
		case End:
		}
		
		for( t in todo.copy() )
			if( !t(dt) )
				todo.remove(t);
				
		var vt = nextTime - haxe.Timer.stamp();
		if( vt < 0 ) vt = 0;
		remTime.text = Std.int(vt) + "'" + StringTools.rpad("" + Std.int((vt - Std.int(vt)) * 100), "0", 2);
		var k = Std.int(vt * 255 / 10);
		remTime.textColor = 0xFF0000 | (k << 8) | k;
		
		scene.setElapsedTime(dt / 60);
		engine.render(scene);
	}
	
	function popText( text : String, color : Int, ?cond ) {
		var t = newText();
		t.text = text;
		t.x = (t.stage.stageWidth - t.textWidth) * 0.5;
		t.y = (t.stage.stageHeight - t.textHeight) * 0.5;
		todo.push(function(dt) {
			if( cond != null && cond() )
				cond = null;
			if( cond == null )
				t.alpha -= 0.02 * dt;
			return t.alpha > 0;
		});
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