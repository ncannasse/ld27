package ;

class Background {

	var bg : h2d.Sprite;
	var bg1 : h2d.Sprite;
	var bg2 : h2d.Sprite;
	var bg3 : h2d.Sprite;
	var bg4 : h2d.Sprite;
	var sMaxX : Float;
	var soilMaxX : Float;
	var loopX : Float = 0;
	
	public function new() {
		
		bg = new h2d.Sprite(Game.inst.world);
		bg2 = new h2d.Sprite(bg);
		bg4 = new h2d.Sprite(bg);
		bg3 = new h2d.Sprite(bg);
		bg1 = new h2d.Sprite(bg);
		
		var scene = Game.inst.scene;
		
		
		// SOIL
		var sbg = [
			{ r : hxd.Resource.embed("gfx/bg1.png"), n : 18 },
			{ r : hxd.Resource.embed("gfx/bg1atrans.png"), n : 1 },
			{ r : hxd.Resource.embed("gfx/bg1a.png"), n : 22 },
			{ r : hxd.Resource.embed("gfx/bg1btrans.png"), n : 1 },
			{ r : hxd.Resource.embed("gfx/bg1b.png"), n : 22+4 },
		];
		var px = 0;
		for( k in sbg ) {
			var t = k.r.toTile();
			for( i in 0...k.n ) {
				var b = new h2d.Bitmap(t, bg1);
				b.x = px;
				b.colorKey = 0x5E016D;
				b.y = scene.height - t.height;
				px += t.width;
			}
		}
		soilMaxX = px;

		
		// MOUNTAINS
		var sbg = [
			{ r : hxd.Resource.embed("gfx/bg.png"), n : 9, p : 6 },
			{ r : hxd.Resource.embed("gfx/bgatrans.png"), n : 1, p : 1 },
			{ r : hxd.Resource.embed("gfx/bga.png"), n : 11, p : 7 },
			{ r : hxd.Resource.embed("gfx/bgbtrans.png"), n : 1, p : 1},
			{ r : hxd.Resource.embed("gfx/bgb.png"), n : 11, p : 3 },
			{ r : hxd.Resource.embed("gfx/bgbend.png"), n : 0, p : 1 },
			{ r : hxd.Resource.embed("gfx/bgb.png"), n : 4, p : 0 },
		];
		var px = 0;
		for( k in sbg ) {
			var t = k.r.toTile();
			for( i in 0...k.n ) {
				var b = new h2d.Bitmap(t, bg3);
				b.x = px;
				b.colorKey = 0x5E016D;
				b.y = scene.height - t.height - 49;
				px += t.width;
			}
		}
		var px = 0;
		for( k in sbg ) {
			var t = k.r.toTile();
			for( i in 0...k.p ) {
				var b = new h2d.Bitmap(t, bg4);
				b.scale(1.3);
				b.x = px * 1.3;
				b.alpha = 0.3;
				b.colorKey = 0x5E016D;
				b.y = scene.height - t.height * 1.3 - 49;
				px += t.width;
			}
		}
		
		// SKY
		var sbg = [
			{ r : hxd.Resource.embed("gfx/bg2.png"), n : 1 },
			{ r : hxd.Resource.embed("gfx/bg2a.png"), n : 1 },
			{ r : hxd.Resource.embed("gfx/bg2b.png"), n : 1 },
			{ r : hxd.Resource.embed("gfx/bg2c.png"), n : 1 },
		];
		var px = 0;
		for( k in sbg ) {
			var t = k.r.toTile();
			for( i in 0...k.n ) {
				var b = new h2d.Bitmap(t, bg2);
				b.x = px;
				b.colorKey = 0x5E016D;
				px += t.width;
			}
		}
		sMaxX = px;
		
	}
	
	public function update(x:Float) {
		bg2.x = x * 0.8;
		bg3.x = x * 0.2 + loopX * 0.8;
		bg4.x = x * 0.4;
		var game = Game.inst;
		var maxX = (game.scene.width - game.world.x) - sMaxX;
		if( bg2.x < maxX )
			bg2.x = maxX;
		var sm = (game.scene.width - game.world.x) - (soilMaxX + loopX);
		if( sm > 0 ) {
			loopX += 500;
			bg1.x = loopX;
		}
	}
	
}