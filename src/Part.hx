
class Part extends h2d.SpriteBatch.BatchElement {
	public var dx : Float;
	public var dy : Float;
	public var dr : Float;
	public var ds : Float;
	public var z : Float;
	public var gravity : Float;
	public var bounce = 0.7;
	public function new(e, x, y) {
		super(e);
		scale = 0.25;
		a = 0.5;
		gravity = 1;
		ds = 0;
		z = (Math.random() + 0.5) * 16;
		this.x = x + (Math.random() - 0.5) * 16;
		this.y = y + Math.random() * 16;
		this.dx = (Math.random() - 0.5) * 5;
		this.dy = -(1 + Math.random() * 4) * 2;
	}
	override function update(et:Float) {
		var dt = et * 60;
		dx *= Math.pow(0.95, dt);
		ds *= Math.pow(0.95, dt);
		scaleX *= Math.pow(0.97 , dt);
		dy += gravity * dt;
		x += dx * dt;
		y += dy * dt;
		scaleX += ds * dt;
		scaleY = scaleX;
		var dr = (dx * dx + dy * dy) * 0.1;
		rotation += dr;
		if( dr < 0.1 ) {
			a -= 0.02 * dt;
			if( a < 0 )
				return false;
		}
		if( gravity > 0 && y > Game.BASEY + z ) {
			dx *= 0.95;
			y = Game.BASEY + z;
			dy = -dy * bounce;
		}
		return true;
	}
}

class Boom extends Part {
	public function new(r,x,y) {
		super(r, x, y);
		dy = 0;
		dx = 0;
		gravity = 0;
		a = 0.5;
		scale = 0;
		ds = 0.1;
	}
}