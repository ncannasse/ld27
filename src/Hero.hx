
class Hero extends Fighter {

	public function new() {
		super(Hero);
		anim.x = -16;
		anim.scaleX = 1;
		pause = 0;
	}
	
	public function action( m : Fighter ) {
		if( pause > 0 )
			return false;
		m.push += 40;
		for( i in 0...10 )
			game.expl.add(new Part(game.expl.tile, m.x + 20, m.anim.y));
		for( i in 0...4 )
			game.expl.add(new Part.Boom(game.expl.tile, m.x + 30, m.anim.y - 10));
		
		var pv = Std.int((Math.random() * 0.5 + 1) * attackPower);
		m.life -= pv;
		m.pop("-" + pv, 0xFE9FA1).rotation = -(Math.random() + 0.5) * 0.5;
		if( m.life < 0 )
			m.kill();
		
		return true;
	}
	
}

