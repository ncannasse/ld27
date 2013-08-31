
class Sounds {
	
	static var sounds = new Map();
	
	public static function play( name : String ) {
		var s = sounds.get(name);
		if( s == null ) {
			s = hxd.Res.load("sfx/"+name+".wav").toSound();
			sounds.set(name, s);
		}
		s.play();
	}
	
}