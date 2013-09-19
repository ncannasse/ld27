
class Title {

	var engine : h3d.Engine;
	var scene : h2d.Scene;
	
	var bg1 : h2d.Bitmap;
	var bg2 : h2d.Bitmap;
	var bg3 : h2d.Bitmap;
	
	var bg1Ready : Null<Float>;
	var bg3Ready : Null<Float>;
	var time : Float = 0.;
	
	var start : Game.Text;
	var font : h2d.Font;
	
	public function new(engine) {
		this.engine = engine;
		this.scene = new h2d.Scene();
		scene.setFixedSize(250, 150);
		bg2 = new h2d.Bitmap(hxd.Res.title2.toTile(), scene);
		bg1 = new h2d.Bitmap(hxd.Res.title1.toTile(), scene);
		bg3 = new h2d.Bitmap(hxd.Res.title3.toTile(), scene);
		bg1.colorKey = 0;
		bg1.y = -bg1.tile.height + 50;
		bg3.y = -bg3.tile.height;
		bg3.colorKey = 0;
		bg3.x = scene.width - bg3.tile.width;
		
		var a = hxd.Res.star.toTile().split(11, true);
		for( i in 0...20 ) {
			var s = new h2d.Anim(bg2);
			s.x = Std.random(bg1.tile.width);
			s.y = Std.random(bg1.tile.height);
			s.alpha = Math.random() + 0.1;
			s.speed = (20 + Math.random() * 30) * 0.3;
			s.scale(Math.random() * 0.5 + 0.5);
			s.currentFrame = Math.random() * 20;
			s.play(a);
		}
	}
	
	public function dispose() {
		if( start != null && start.parent != null )
			start.parent.removeChild(start);
		scene.dispose();
	}

	public function update() {
		var dt = Timer.tmod;
		time += dt;
		if( bg1.y < 0 && bg1Ready == null ) {
			bg1.y += dt - bg1.y * 0.05;
			if( bg1.y > 0 ) {
				bg1.y = 0;
				bg1Ready = 0.;
			}
		} else {
			if( bg1Ready < 3 ) bg1Ready += dt * 0.1 else bg1Ready = 3;
			bg1.y = (Math.sin(time * 0.05) - 1) * bg1Ready;
		}
		if( bg3.y < 0 && bg3Ready == null ) {
			bg3.y += dt * 0.5 - bg1.y * 0.02;
			if( bg3.y > 0 ) {
				bg3.y = 0;
				bg3Ready = 0.;
			}
		} else {
			if( bg3Ready < 2 ) bg3Ready += dt * 0.1 else bg3Ready = 2;
			bg3.y = (Math.sin(time * 0.015) - 1) * bg3Ready;
		}
		var k = 30;
		if( bg2.y > -k ) {
			bg2.y -= dt * 0.15;
			if( bg2.y < -k ) bg2.y = -k;
		} else {
			if( start == null ) {
				#if flash
				var t = new flash.text.TextField();
				flash.Lib.current.addChild(t);
				var fmt = t.defaultTextFormat;
				fmt.font = "Verdana";
				fmt.size = 24;
				t.defaultTextFormat = fmt;
				t.filters = [new flash.filters.GlowFilter(0, 0.5, 2, 2, 10)];
				t.width = 1000;
				t.selectable = false;
				#else
				var t = new h2d.Text(font,scene);
				#end
				t.textColor = 0xFFFFFF;
				
				var french = hxd.System.lang == "fr";
				t.text = "Press " + (french?"A":"Q") + " to Start";
				t.x = 520;
				t.y = 400;
				start = t;
			}
			start.visible = Std.int(time / 25) & 1 == 0;
		}
		if( hxd.Key.isPressed("A".code) || hxd.Key.isPressed("Q".code) ) {
			dispose();
			Game.start();
			return;
		}
		engine.render(scene);
	}
	
}