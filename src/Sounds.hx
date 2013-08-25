
typedef S = flash.media.Sound;


@:keep @:sound("sfx/walk.wav")
class Walk extends S {
}

@:keep @:sound("sfx/hit.wav")
class Hit extends S {
}

@:keep @:sound("sfx/hit2.wav")
class Hit2 extends S {
}

@:keep @:sound("sfx/hit3.wav")
class Hit3 extends S {
}

@:keep @:sound("sfx/hit4.wav")
class Hit4 extends S {
}

@:keep @:sound("sfx/slide.wav")
class Slide extends S {
}

@:keep @:sound("sfx/break.wav")
class Break extends S {
}

@:keep @:sound("sfx/time.wav")
class Time extends S {
}

@:keep @:sound("sfx/item.wav")
class Item extends S {
}

@:keep @:sound("sfx/bossJump.wav")
class BossJump extends S {
}

@:keep @:sound("sfx/block.wav")
class Block extends S {
}

@:keep @:sound("sfx/hit5.wav")
class Hit5 extends S {
}

@:keep @:sound("sfx/fire.wav")
class Fire extends S {
}

@:keep @:sound("sfx/fire2.wav")
class Fire2 extends S {
}

@:keep @:sound("sfx/laser.wav")
class Laser extends S {
}

@:keep @:sound("sfx/laserOff.wav")
class LaserOff extends S {
}

@:keep @:sound("sfx/warning.wav")
class Warning extends S {
}

@:keep @:sound("sfx/bossLand.wav")
class BossLand extends S {
}

@:keep @:sound("sfx/missiles.wav")
class Missiles extends S {
}

@:keep @:sound("sfx/explode.wav")
class Explode extends S {
}

class Sounds {
	
	static var sounds = new Map();
	
	public static function play( name : String ) {
		var s : S = sounds.get(name);
		if( s == null ) {
			var cl = Type.resolveClass(name.charAt(0).toUpperCase() + name.substr(1));
			if( cl == null ) throw "No sound " + name;
			s = Type.createInstance(cl, []);
			sounds.set(name, s);
		}
		s.play();
	}
	
}