

class Hero extends Fighter {

	var wait : Float;
	var next : Void -> Void;
	
	public var slow : Float;
	public var blocking : Bool;
	
	public function new() {
		super(Hero);
		anim.x = -16;
		anim.scaleX = 1;
		pause = 0;
		slow = 0;
	}
	
	override function update(dt:Float) {
		super.update(dt);
		wait -= dt;
		if( slow > 0 ) {
			slow -= dt;
			if( slow <= 0 ) {
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
	
	public function action( m : Fighter ) {
		if( pause > 0 )
			return;
			
		if( m == null || m.x > x + 25 || m.maxLife == 0 ) {
			pause = 20;
			slow = 20.;
			moveSpeed = 2;
			return;
		}
			
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
			
		pause = 3;
	}
	
}

