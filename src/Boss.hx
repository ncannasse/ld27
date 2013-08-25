enum Step {
	Appear;
	Action;
	Wait;
	Evade;
	WaitForAction;
}

class Boss extends Fighter {

	var next : Void -> Void;
	var step : Step;
	var act : Int;
	
	public function new() {
		super(Boss);
		step = Appear;
		act = -1;
		tf = new h2d.Text(game.font,game.scene);
		
	}
	
	static var tf : h2d.Text;
	
	
	override function update(dt) {
		super.update(dt);
		
		tf.text = "" + step + " "+life;
		
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
			case 0,1,3,4:
				pause = 0;
				new Fighter(Missile).x = x;
				step = Evade;
			case 2,5:
				new Fighter(Time).x = x;
				step = Appear;
			case 6:
				// TODO
			default:
				act = 0;
			}
		case Evade:
			moveSpeed = 4.5;
			if( x > game.hero.x + 220 ) {
				pause = (1 + Math.random() * 0.5) * 50;
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
	
}