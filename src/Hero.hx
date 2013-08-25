

class Hero extends Fighter {

	var wait : Float;
	var next : Void -> Void;
	var walkDist : Float = 0.;
	var oldX = 0.;
	
	public var sliding : Bool;
	public var slow : Float;
	public var blocking : Bool;
	public var inventory : Array<Fighter.CKind>;
	public var laserRecover : Bool;
	
	public function new() {
		super(Hero);
		skip = true;
		inventory = [];
		mc.x = -16;
		anim.scaleX = 1;
		pause = 0;
		slow = 0;
	}
	
	public function has(c:Fighter.CKind) {
		return Lambda.has(inventory, c);
	}
	
	
	override function update(dt:Float) {
		
		walk();
		
		super.update(dt);
		
		wait -= dt;
		if( slow > 0 ) {
			slow -= dt;
			if( blocking )
				moveSpeed *= Math.pow(0.93, dt);
			if( slow <= 0 ) {
				sliding = false;
				blocking = false;
				moveSpeed = 4;
				play();
			}
		}
		return true;
	}
	
	public function walk() {
		var dx = x - oldX;
		if( dx > 0 && !sliding ) walkDist += dx;
		oldX = x;
		if( walkDist > 0 ) {
			Sounds.play("walk");
			if( walkDist > 50 ) walkDist = 50;
			walkDist -= 50;
		}
	}
	
	public function block() {
		if( pause > 0 )
			return;
		play(hxd.Resource.embed("gfx/hero_block.png"));
		pause = 30;
		slow = 30;
		blocking = true;
		Sounds.play("block");
	}

	public function slide() {
		if( pause > 0 )
			return;
		Sounds.play("slide");
		play(hxd.Resource.embed("gfx/hero_slide.png"));
		pause = 30;
		slow = 30;
		sliding = true;
		moveSpeed = game.boss != null ? 6 : 3;
	}
	
	public function laser() {
		if( pause > 0 )
			return;
		if( laserRecover ) {
			Sounds.play("laserOff");
			return;
		}
		
		Sounds.play("laser");
		laserRecover = true;
		
		play(hxd.Resource.embed("gfx/hero_lock.png"));
		pause = 100;
		slow = 100;
		moveSpeed = 0;

		var f = new Fighter(LaserAnim);
		f.skip = true;
		f.x = x + 8;
		f.anim.scaleX = 0;
		f.anim.speed = 12;
		f.anim.loop = false;
		f.anim.alpha = 0.8;
		var time = 0., hit = 0.;
		var chkBoss = false;
		game.todo.push(function(dt) {
			this.push = 0;
			time += dt;
			var w = time > 40 ? -0.5 : 0.5;
			f.anim.scaleX += dt * w;
			if( f.anim.scaleX <= 0 ) {
				f.remove();
				return false;
			}
			hit += dt;
			while( hit > 5 ) {
				hit -= 5;
				for( f in game.fighters.copy() ) {
					if( f.kind == Boss ) {
						if( chkBoss ) continue;
						chkBoss = true;
						if( ++game.bossHint == 2 && (game.prev == null || game.prev.parent == null) )
							game.popText("Laser can't hurt robots\nFind weak point", 0x0080FF);
						continue;
					}
					if( !f.skip && f.life > 0 && f.x < x + 400 ) {
						this.hit(f);
					}
				}
			}
			return true;
		});
	}
	
	public function action( m : Fighter ) {
		if( pause > 0 )
			return;
		
		if( m == null || m.x > x + 25 || m.maxLife == 0 ) {
			pause = 20;
			slow = 10.;
			moveSpeed = 0;
			play(hxd.Resource.embed("gfx/hero_lock.png"));
			return;
		}
		
		hit(m);
		pause = 3;
	}
	
	function hit( m : Fighter ) {
		
		switch( m.kind ) {
		case Slime, Wizard:
			Sounds.play("hit");
		case Goblin:
			Sounds.play("hit2");
		case Crow:
			Sounds.play("hit5");
		case Stone:
			Sounds.play("hit3");
		case Chain:
			Sounds.play("hit4");
		case Time, Missile, LaserAnim, Hero, Fireball, FChest(_):
			Sounds.play("hit3");//?
		case Boss:
			Sounds.play("hit4");
			if( m.hitCount++ == 5 )
				m.skip = true;
		}
		
		switch( m.kind ) {
		case Stone:
			for( i in 0...4 ) {
				var p = new Part(game.stones.tile, m.x + 20, m.mc.y);
				p.scale *= 2 + Math.random();
				p.dx *= 2;
				p.gravity *= 1.5;
				p.bounce = 0.4;
				p.alpha = 1;
				p.x -= 16;
				p.y -= 16;
				game.stones.add(p);
			}
			for( i in 0...4 )
				game.expl.add(new Part.Boom(game.expl.tile, m.x + 30, m.mc.y - 10));
		default:
			var ex = 20.;
			switch( m.kind ) {
			case Boss:
				var dx = x - m.x;
				if( dx < 20 || dx > 50 )
					return;
				ex += dx;
				m.push -= 30;
			default:
				m.push += 40;
			}
			for( i in 0...10 )
				game.expl.add(new Part(game.expl.tile, m.x + ex, m.mc.y));
			for( i in 0...4 )
				game.expl.add(new Part.Boom(game.expl.tile, m.x + ex + 10, m.mc.y - 10));
		}
		
		var pv = Std.int((Math.random() * 0.5 + 1) * attackPower);
		m.life -= pv;
		m.pop("-" + pv, 0xFE9FA1).rotation = -(Math.random() + 0.5) * 0.5;
		if( m.life <= 0 )
			m.kill();
	}
	
}

