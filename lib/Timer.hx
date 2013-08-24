
class Timer {

	public static var wantedFPS = 32;
	public static var maxDeltaTime = 0.5;
	public static var oldTime = flash.Lib.getTimer();
	public static var tmod_factor = 0.95;
	public static var calc_tmod : Float = 1;
	public static var tmod : Float = 1;
	public static var deltaT : Float = 1;
	static var frameCount = 0;

	public inline static function update() {
		frameCount++;
		var newTime = flash.Lib.getTimer();
		deltaT = (newTime - oldTime) / 1000.0;
		oldTime = newTime;
		if( deltaT < maxDeltaTime )
			calc_tmod = calc_tmod * tmod_factor + (1 - tmod_factor) * deltaT * wantedFPS;
		else
			deltaT = 1 / wantedFPS;
		tmod = calc_tmod;
	}

	public inline static function fps() : Float {
		return wantedFPS/tmod ;
	}

}
