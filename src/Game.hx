typedef K = hxd.Key;

enum Wave {
	Resume;
	Tuto( t : String, ?cond : Void -> Bool );
	M( m : Fighter.FKind, dist : Int, ?count : Int );
	Wait( dist : Int );
	Chest( k : Fighter.CKind, text : String );
	End;
}

@:publicFields
class Game {
	
	static inline var BASEY = 130;
	
	
	var wavesData : Array<Wave>;
	var fighters : Array<Fighter>;
	var fightCont : h2d.Sprite;
	var engine : h3d.Engine;
	var scene : h2d.Scene;
	var hero : Hero;
	var expl : h2d.SpriteBatch;
	var smoke : h2d.SpriteBatch;
	var fire : h2d.SpriteBatch;
	var stones : h2d.SpriteBatch;
	var world : h2d.Sprite;
	var bg : Background;
	var font : h2d.Font;
	var lastCheck : Int;
	
	var todo : Array < Float -> Bool >;
	var wavePos : Int;
	var waveCount : Int;
	var waveDist : Int;
	
	var nextTime : Float;
	var remTime : flash.text.TextField;
	
	var isGameOver : Bool;
	var allTexts : Array<flash.text.TextField>;
	var prev : flash.text.TextField;
	
	var boss : Boss;
	
	var win : Bool;
	var bossHint : Int;
	
	public function new(e,pos) {
		
		var french = hxd.System.lang == "fr";
		wavePos = lastCheck = pos;
		wavesData = [
		
			M(Slime,0),
			Tuto("Press "+(french?"A":"Q")+" to attack monsters", function() return fighters.length == 1),
			M(Slime, 200, 3),
			M(Goblin, 300),
			Tuto("Hit "+(french?"A":"Q")+" faster!", function() return fighters.length == 1),
			M(Goblin, 300, 1),
			
			M(Time, 200),
			Wait(500),
			Chest(Slide, "Use "+(french?"Z":"W")+" to slide"),
			Wait(300),
			M(Crow, 40, 3),
			Wait(200),
			M(Crow, 40, 3),
			Wait(200),
			M(Crow, 40, 3),
			
			M(Time, 200),
			M(Stone, 300),
			Wait(300),
			M(Goblin, 150, 2),

			M(Time, 300),
			Wait(500),
			Chest(Shield, "Use E to protect yourself"),
			Wait(300),
			M(Fireball, 200, 3),
			M(Wizard, 50),
			
			M(Time, 200),
			Wait(50),
			M(Fireball, 150, 3),
			M(Wizard, 50),
			Wait(50),
			M(Fireball, 150, 3),
			M(Wizard, 50),
			
			M(Time, 200),
			Wait(100),
			M(Crow, 40, 3),
			M(Stone, 200),
			Wait(150),
			M(Fireball,100, 3),
			M(Wizard, 50),

			M(Time, 100),
			Wait(500),
			Chest(Laser, "Use R to fire laser beam"),
			Wait(300),
			M(Goblin, 10, 10),
			Wait(200),
			M(Goblin, 200),
			
			M(Time, 200),
			M(Chain, 200, 4),
			Wait(70),
			M(Goblin, 50, 3),
			M(Slime, 50, 5),
			
			
			M(Time, 50),
						

			Wait(800),
			Tuto("Warning ! Danger Approaching !"),
			Wait(50),

			M(Boss, 100),
			M(Time, 500),
		
			End,
		];
		
		this.engine = e;
		h2d.Font.embed("Verdana", "gfx/Verdana.ttf");
		font = new h2d.Font("Verdana", 32);
		font.halfSize();
		scene = new h2d.Scene();
		scene.setFixedSize(Std.int(hxd.System.width / 3), Std.int(hxd.System.height / 3));
	}
		
	public function init() {
		
		world = new h2d.Sprite(scene);
		bg = new Background();
		
		todo = [];
		allTexts = [];
		
		fightCont = new h2d.Sprite(world);
		
		fighters = [];
		
		hero = new Hero();


		
		if( wavePos == 0 )
			for( i in 0...wavesData.length )
				if( wavesData[i] == Resume ) {
					wavePos = i;
					break;
				}
			
		for( i in 0...wavePos )
			switch( wavesData[i] ) {
			case Wait(d): waveDist += d;
			case M(_, d, c): if( c == null ) c = 1; waveDist += d * c;
			case Chest(c, _): hero.inventory.push(c);
			case Resume, Tuto(_), End:
			}
		hero.x = waveDist;
		world.x = -waveDist;
		
		var rexpl = hxd.Resource.embed("gfx/explode.png");
		
		expl = new h2d.SpriteBatch(rexpl.toTile().center(16,16), world);
		expl.hasRotationScale = true;
		expl.hasUpdate = true;
		expl.blendMode = Add;
		expl.color = new h3d.Vector(1, 0.6, 0., 1);
		

		stones = new h2d.SpriteBatch(hxd.Resource.embed("gfx/smallStone.png").toTile().center(8, 8), world);
		stones.colorKey = 0x5E016D;
		stones.hasRotationScale = true;
		stones.hasUpdate = true;

		fire = new h2d.SpriteBatch(rexpl.toTile().center(16,16), world);
		fire.hasRotationScale = true;
		fire.hasUpdate = true;
		fire.blendMode = Add;
		fire.color = new h3d.Vector(1, 0., 0., 1);

		smoke = new h2d.SpriteBatch(hxd.Resource.embed("gfx/smoke.png").toTile().center(16,16), world);
		smoke.colorKey = 0x5E016D;
		smoke.hasRotationScale = true;
		smoke.hasUpdate = true;
		smoke.alpha = 0.5;
		
		remTime = newText();
		remTime.x = 120;
		remTime.y = 400;
		
		nextTime = haxe.Timer.stamp() + 10;
		
		update();
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
		allTexts.push(t);
		return t;
	}
	
	function update() {
		var dt = Timer.tmod;
		
		var first : Fighter = null;
		for( f in fighters.copy() ) {
			f.update(dt);
			if( !f.skip && (first == null || f.x < first.x) )
				first = f;
		}
		
		if( isGameOver && first != null && first.kind == Time ) first = null;
	
		if( first != null && hero.x > first.x - 20 ) {
			switch( first.kind ) {
			case Time:
				var las = false;
				if( hero.laserRecover ) { hero.laserRecover = false; las = true; };
				popText("Time UP!"+(las?"\nLaser ready":""), 0xE1E6FF);
				nextTime = haxe.Timer.stamp() + 10;
				first.kill();
				if( boss == null ) lastCheck = wavePos - 1;
			case FChest(kind,text):
				popText(text, 0xE1E6FF);
				first.kill();
				hero.inventory.push(kind);
			case Fireball:
				if( first.x <= hero.x + 10 ) {
					if( !hero.blocking )
						hero.push -= 200;
					else
						hero.slow *= 0.5;
					first.remove();
					for( i in 0...10 ) {
						var p = new Part(fire.tile, first.x + 20, first.mc.y);
						p.gravity *= 0.7;
						p.dy *= 0.8;
						fire.add(p);
					}
				}
			case Missile:
				if( first.x <= hero.x + 10 ) {
					if( !hero.blocking )
						hero.push -= 100;
					else
						hero.slow *= 0.3;
					first.remove();
					for( i in 0...20 ) {
						var p = new Part(fire.tile, first.x + 20, first.mc.y);
						p.gravity *= 0.7;
						p.dy *= 0.8;
						fire.add(p);
					}
					for( i in 0...20 ) {
						var p = new Part(expl.tile, first.x + 20, first.mc.y);
						p.gravity *= 0.7;
						p.dy *= 0.8;
						expl.add(p);
					}
				}
			case Crow, Chain if( hero.sliding ):
				first.skip = true;
			case Stone:
				hero.x = first.x - 20;
			case Chain:
				hero.push -= 50;
			case Boss if( boss.step == Evade ):
				// no recal
			default:
				var tpower = (hero.pushPower + first.pushPower);
				var h = (hero.x * first.pushPower + first.x * hero.pushPower) / tpower;
				hero.x = h - 10;
				first.x = h + 10;
			}
		}
		
		if( Key.isToggled("A".code) || Key.isToggled("Q".code) )
			hero.action(first);
		if( (Key.isToggled("Z".code) || Key.isToggled("W".code)) && hero.has(Slide) )
			hero.slide();
		if( Key.isToggled("E".code) && hero.has(Shield) )
			hero.block();
		if( Key.isToggled("R".code) && hero.has(Laser) )
			hero.laser();
			
		if( Key.isToggled(27) ) {
			haxe.Timer.delay(function() {
				dispose();
				inst = new Game(engine, 0);
				inst.init();
			},0);
			return;
		}
			
			
		
		var tx = -Math.max(hero.x - scene.width * 0.2, 0);
		var ws = Math.pow(0.5, dt);
		world.x = Std.int(world.x * ws + (1 - ws) * tx);
		bg.update( -world.x);
		
		switch( wavesData[wavePos] ) {
		case Resume:
			wavePos++;
		case Tuto(text, cond):
			popText(text, 0xFFFFFF, cond);
			wavePos++;
		case M(kind, dist, count):
			if( ( -tx) - waveDist >= dist ) {
				var f = switch( kind ) {
				case Boss: boss = new Boss();
				default: new Fighter(kind);
				}
				f.x = waveDist + dist + 300;
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
		case Chest(kind, text):
			var f = new Fighter(FChest(kind,text));
			f.x = waveDist + 300;
			wavePos++;
		case End:
		}
		
		for( t in todo.copy() )
			if( !t(dt) )
				todo.remove(t);
				
		var vt = nextTime - haxe.Timer.stamp();
		if( vt < 0.2 ) gameOver();
		if( vt < 0 ) vt = 0;
		remTime.text = Std.int(vt) + "'" + StringTools.rpad("" + Std.int((vt - Std.int(vt)) * 100), "0", 2);
		var k = Std.int(vt * 255 / 10);
		remTime.textColor = isGameOver ? 0 : (0xFF0000 | (k << 8) | k);
		
		scene.setElapsedTime(dt / 60);
		engine.render(scene);
	}
	
	function cleanTexts() {
		for( t in allTexts )
			if( t.parent != null )
				t.parent.removeChild(t);
		allTexts = [];
	}
	
	function dispose() {
		font.dispose();
		scene.dispose();
		cleanTexts();
	}
	
	function gameOver() {
		if( !isGameOver ) {
			isGameOver = true;
			hero.moveSpeed = 0;
			hero.pause = 1e10;
			hero.slow = 1e10;
			hero.play();
			hero.anim.speed = 0;
			hero.anim.currentFrame = 1;
			var wait = 0.;
			if( win ) {
				popText("Victory !!", 0x00FF00, function() {
					wait += Timer.deltaT;
					nextTime = haxe.Timer.stamp() + wait;
					if( wait > 10 ) {
						dispose();
						showTitle();
						return true;
					}
					return false;
				});
			} else {
				popText("Game Over", 0xFF0000, function() {
					wait += Timer.deltaT * 4;
					nextTime = haxe.Timer.stamp() + wait;
					if( wait > 10 ) {
						dispose();
						inst = new Game(engine, lastCheck);
						inst.init();
						return true;
					}
					return false;
				});
			}
		}
	}
	
	function popText( text : String, color : Int, ?cond ) {
		if( prev != null && prev.parent != null ) {
			prev.parent.removeChild(prev);
			prev = null;
		}
		var t = newText();
		t.textColor = color;
		t.text = text;
		t.x = (t.stage.stageWidth - t.textWidth) * 0.5;
		t.y = 330;
		prev = t;
		if( cond == null )
			t.alpha = 2;
		todo.push(function(dt) {
			if( cond != null && cond() )
				cond = null;
			if( cond == null ) {
				t.alpha -= 0.02 * dt;
				if( t.alpha <= 0 ) {
					if( t.parent != null ) t.parent.removeChild(t);
					return false;
				}
			}
			return true;
		});
		return t;
	}
	
	static var inst : Game;
	static var title : Title;
	static var _ENGINE : h3d.Engine;
	
	static function doUpdate() {
		Timer.update();
		if( inst != null )
			inst.update();
		else if( title != null )
			title.update();
	}

	static function showTitle() {
		title = new Title(_ENGINE);
		inst = null;
	}
	
	public static function start(pos = 0) {
		inst = new Game(_ENGINE, pos);
		inst.init();
		title = null;
	}
	
	public static function main() {
		_ENGINE = new h3d.Engine();
		_ENGINE.backgroundColor = 0xFF808080;
		_ENGINE.onReady = function() {
			showTitle();
			hxd.System.setLoop(doUpdate);
			Key.init();
		};
		_ENGINE.init();
	}
}