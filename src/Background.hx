package ;

class Background {

	var bg : h2d.Sprite;
	var bg2 : h2d.Sprite;
	var bg3 : h2d.Sprite;
	
	public function new() {
		
		bg = new h2d.Sprite(Game.inst.world);
		bg2 = new h2d.Sprite(bg);
		bg3 = new h2d.Sprite(bg);
		
		var scene = Game.inst.scene;
		
		
		// SOIL
		var sbg = [
			{ r : hxd.Resource.embed("gfx/bg1.png"), n : 18 },
			{ r : hxd.Resource.embed("gfx/bg1atrans.png"), n : 1 },
			{ r : hxd.Resource.embed("gfx/bg1a.png"), n : 18 },
		];
		var px = 0;
		for( k in sbg ) {
			var t = k.r.toTile();
			for( i in 0...k.n ) {
				var b = new h2d.Bitmap(t, bg);
				b.x = px;
				b.colorKey = 0x5E016D;
				b.y = scene.height - t.height;
				px += t.width;
			}
		}

		
		// MOUNTAINS
		var sbg = [
			{ r : hxd.Resource.embed("gfx/bg.png"), n : 9 },
			{ r : hxd.Resource.embed("gfx/bgatrans.png"), n : 1 },
			{ r : hxd.Resource.embed("gfx/bga.png"), n : 9 },
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
		
		// SKY
		var sbg = [
			{ r : hxd.Resource.embed("gfx/bg2.png"), n : 40 },
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
		
	}
	
	public function update(x:Float) {
				
		bg2.x = x * 0.8;
		bg3.x = x * 0.2;
	}
	
}