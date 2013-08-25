enum Step {
	Appear;
	Action;
	Wait;
	Evade;
	Jump;
	WaitForAction;
}

class Boss extends Fighter {

	var next : Void -> Void;
	public var step : Step;
	var act : Int;
	var jump : Float;
	var soilY : Float;
	
	public function new() {
		super(Boss);
		step = Appear;
		act = -1;
		soilY = mc.y;
		life = maxLife = 450;
	}
	
	override function update(dt) {
		super.update(dt);
		
		if( x > game.hero.x + 400 )
			x = game.hero.x + 400;
		
		if( pause < 0 && next != null ) {
			var old = next;
			next = null;
			old();
		}
		switch( step ) {
		case Appear:
			moveSpeed = act == -1 ? 3.5 : 3.;
			if( x < game.hero.x + 170 ) {
				pause = (1 + Math.random() * 0.5) * 50;
				step = WaitForAction;
			}
		case Action:
			switch( act++ ) {
			case 0,2,4:
				step = Jump;
				jump = -10;
				moveSpeed = 1;
				skip = true;
			case 1,3, 5:
				new Fighter(Time).x = x;
			case 6:
				switch( Std.random(4) )
				{
				case 0:
					for( i in 0...10 )
						new Fighter(Goblin).x = x + i * 30;
				case 2:
					for( i in 0...4 )
						new Fighter(Crow).x = x + i * 30;
				case 3,1:
					
					var m0 = new Fighter(Missile);
					m0.x = x + 100;
					m0.mc.y -= 75;
					m0.skip = true;

					var m1 = new Fighter(Missile);
					m1.x = x + 150;
					m1.mc.y -= 40;
					m1.skip = true;
					
					for( i in 0...3 )
						new Fighter(Missile).x = x + i * 50 + 200;
				}
				step = WaitForAction;
				pause = 200;
			default:
				act = 0;
			}
		case Jump:
			mc.y += jump * dt;
			jump += dt * 0.4;
			if( mc.y > soilY ) {
				mc.y = soilY;
				jump *= -0.5;
				
				var m = game.hero;
				if( Math.abs(x - m.x) < 30 ) {
					for( i in 0...50 ) {
						var p = new Part(game.expl.tile, m.x, m.mc.y);
						game.expl.add(p);
					}
					m.push -= 250;
					act--; // rejump
				}
				
				if( Math.abs(jump) < 3 ) {
					step = Evade;
					skip = false;
				}
			}
		case Evade:
			moveSpeed = 7;
			if( x > game.hero.x + 170 ) {
				skip = false;
				anim.scaleX = 1;
				pause = (1 + Math.random() * 0.5) * 50;
				moveSpeed = 3.5;
				step = WaitForAction;
			}
		case WaitForAction:
			moveSpeed = 3.5;
			if( pause < 0 )
				step = Action;
		case Wait:
		}
		return true;
	}
	
	override function kill() {
		step = Wait;
		next = null;
		game.hero.play();
		game.nextTime = haxe.Timer.stamp() + 7;
		var stopped = false;
		var smokeTime = 0.;
		game.todo.push(function(dt) {
			game.hero.pause = 1e10;
			game.hero.slow = 1e10;
			game.hero.blocking = true;
			game.hero.anim.speed = 20 * game.hero.moveSpeed / 4;
			if( game.hero.anim.speed < 10 )
				game.hero.anim.currentFrame = 1;
			if( !stopped ) {
				var tx = game.hero.x + 150;
				if( tx > x )
					moveSpeed += 0.1 * dt;
				else
					moveSpeed -= 0.1 * dt;
				var dx = Math.abs(tx - x);
				if( dx < 50 ) {
					moveSpeed *= dx / 50;
					if( moveSpeed < 1 ) {
						moveSpeed = 0;
						play(hxd.Resource.embed("gfx/boss_hurt.png"),94);
						stopped = true;
					}
				}
			} else {
				var px = x + Math.random() * 40, py = mc.y - Math.random() * 40;
				for( i in 0...3 ) {
					var p = new Part(game.smoke.tile, px, py);
					p.gravity = 0;
					p.scale *= 3;
					p.dx = (Math.random() - 0.5) * 5;
					p.dy = (Math.random() - 0.7) * 5;
					game.smoke.add(p);
				}
				smokeTime += dt;
				if( smokeTime > 200 ) {
					for( i in 0...1000 ) {
						var px = x + Math.random() * 40, py = mc.y - Math.random() * 40;
						var p = new Part(game.expl.tile, px, py);
						p.gravity = 0.5;
						p.scale *= 3;
						p.dx = (Math.random() - 0.5) * 20;
						p.dy = (-Math.random() - 0.7) * 7;
						game.expl.add(p);
					}
					remove();
					game.win = true;
					return false;
				}
			}
			return true;
		});
	}
}