
typedef S = flash.media.Sound;


@:keep @:sound("sfx/walk.wav.mp3")
class Walk extends S {
}

@:keep @:sound("sfx/hit.wav.mp3")
class Hit extends S {
}

@:keep @:sound("sfx/hit2.wav.mp3")
class Hit2 extends S {
}

@:keep @:sound("sfx/hit3.wav.mp3")
class Hit3 extends S {
}

@:keep @:sound("sfx/hit4.wav.mp3")
class Hit4 extends S {
}

@:keep @:sound("sfx/slide.wav.mp3")
class Slide extends S {
}

@:keep @:sound("sfx/break.wav.mp3")
class Break extends S {
}

@:keep @:sound("sfx/time.wav.mp3")
class Time extends S {
}

@:keep @:sound("sfx/item.wav.mp3")
class Item extends S {
}

@:keep @:sound("sfx/bossJump.wav.mp3")
class BossJump extends S {
}

@:keep @:sound("sfx/block.wav.mp3")
class Block extends S {
}

@:keep @:sound("sfx/hit5.wav.mp3")
class Hit5 extends S {
}

@:keep @:sound("sfx/fire.wav.mp3")
class Fire extends S {
}

@:keep @:sound("sfx/fire2.wav.mp3")
class Fire2 extends S {
}

@:keep @:sound("sfx/laser.wav.mp3")
class Laser extends S {
}

@:keep @:sound("sfx/laserOff.wav.mp3")
class LaserOff extends S {
}

@:keep @:sound("sfx/warning.wav.mp3")
class Warning extends S {
}

@:keep @:sound("sfx/bossLand.wav.mp3")
class BossLand extends S {
}

@:keep @:sound("sfx/missiles.wav.mp3")
class Missiles extends S {
}

@:keep @:sound("sfx/explode.wav.mp3")
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