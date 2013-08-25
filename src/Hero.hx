

class Hero extends Fighter {

	var wait : Float;
	var next : Void -> Void;
	
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
		super.update(dt);
		wait -= dt;
		if( slow > 0 ) {
			slow -= dt;
			if( slow <= 0 ) {
				sliding = false;
				blocking = false;
				moveSpeed = 4;
				play();
			}
		}
		return true;
	}
	
	public function cancelBlock() {
		pause = 0;
		slow = 0;
		blocking = false;
		moveSpeed = 4;
		play();
	}
	
	public function block() {
		if( pause > 0 )
			return;
		play(hxd.Resource.embed("gfx/hero_block.png"));
		pause = 30;
		slow = 30;
		blocking = true;
		moveSpeed = 0.1;
	}

	public function slide() {
		if( pause > 0 )
			return;
		play(hxd.Resource.embed("gfx/hero_slide.png"));
		pause = 30;
		slow = 30;
		sliding = true;
		moveSpeed = 3;
	}
	
	public function laser() {
		if( pause > 0 )
			return;
		if( laserRecover )
			return;
		
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
		game.todo.push(function(dt) {
			time += dt;
			var w = time > 40 ? -0.5 : 0.5;
			f.anim.scaleX += dt * w;
			if( f.anim.scaleX <= 0 ) {
				f.remove();
				return false;
			}
			hit += dt;
			if( hit > 0.5 ) {
				hit -= 0.5;
				for( f in game.fighters.copy() )
					if( !f.skip )
						this.hit(f);
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
		case Stone:
			for( i in 0...4 ) {
				var p = new Part(game.stones.tile, m.x + 20, m.anim.y);
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
				game.expl.add(new Part.Boom(game.expl.tile, m.x + 30, m.anim.y - 10));
		default:
			m.push += 40;
			for( i in 0...10 )
				game.expl.add(new Part(game.expl.tile, m.x + 20, m.anim.y));
			for( i in 0...4 )
				game.expl.add(new Part.Boom(game.expl.tile, m.x + 30, m.anim.y - 10));
		}
		
		
		var pv = Std.int((Math.random() * 0.5 + 1) * attackPower);
		m.life -= pv;
		m.pop("-" + pv, 0xFE9FA1).rotation = -(Math.random() + 0.5) * 0.5;
		if( m.life <= 0 )
			m.kill();
	}
	
}

