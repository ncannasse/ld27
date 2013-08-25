
enum CKind {
	Shield;
	Slide;
	Laser;
}

enum FKind {
	Hero;
	Slime;
	Goblin;
	Time;
	FChest( c : CKind, text : String );
	Fireball;
	Wizard;
	Stone;
	Crow;
	LaserAnim;
	Chain;
	Boss;
	Missile;
}

class Fighter {

	var game : Game;
	public var anim : h2d.Anim;
	public var mc : h2d.Sprite;
	public var skip : Bool;
	public var kind : FKind;
	public var moveSpeed : Float;
	public var pushPower : Float;
	public var x(get, set) : Float;

	public var pause : Float;
	public var push : Float;
	
	public var attackPower : Float;
	public var life : Float;
	public var maxLife : Float;
	
	var defaultRes : hxd.Resource.BitmapRes;
	
	public function new(k) {
		this.kind = k;
		game = Game.inst;
		
		mc = new h2d.Sprite(game.fightCont);
		mc.y = Game.BASEY;
		
		anim = new h2d.Anim(mc);
		anim.colorKey = 0x5E016D;
		anim.speed = 20 + Math.random() - 0.5;
		anim.currentFrame = Math.random() * 8;
		anim.scaleX = -1;
		push = 0;
		pause = 0;
		game.fighters.push(this);

		attackPower = 10;
		pushPower = 1;
		moveSpeed = 1;
		life = 10;
		var size = 32;
		var center = 1;
		switch( kind ) {
		case Hero:
			moveSpeed = 4;
		case Slime:
			pushPower = 0.8;
		case Goblin:
			life = 50;
			pushPower = 1.5;
		case Time:
			life = 0;
			moveSpeed = 0;
		case Wizard:
			moveSpeed = 0;
		case Fireball:
			life = 0;
			moveSpeed = 2;
		case Stone:
			size = 64;
			mc.y += 4;
			anim.speed = 0;
			life = 200;
			moveSpeed = 0;
			pushPower = 1000000;
		case Crow:
			moveSpeed = 1.5;
			life = 40;
		case FChest(_), LaserAnim:
			moveSpeed = 0;
			life = 0;
		case Chain:
			life = 200;
			moveSpeed = 0;
		case Boss:
			life = 2000;
		case Missile:
			life = 0;
			moveSpeed = 1;
		}
		var res = switch( kind ) {
		case Hero:
			hxd.Resource.embed("gfx/hero.png");
		case Slime:
			hxd.Resource.embed("gfx/slime.png");
		case Goblin:
			hxd.Resource.embed("gfx/monster.png");
		case Time:
			anim.scale(0.7);
			hxd.Resource.embed("gfx/clock.png");
		case LaserAnim:
			hxd.Resource.embed("gfx/laserAnim.png");
		case Chain:
			size = 120;
			center = 0;
			mc.y -= 132;
			pushPower = 5;
			hxd.Resource.embed("gfx/chain.png");
		case FChest(k,_):
			switch(k) {
			case Shield:
				hxd.Resource.embed("gfx/shield.png");
			case Slide:
				hxd.Resource.embed("gfx/timeBonus.png");
			case Laser:
				hxd.Resource.embed("gfx/laser.png");
			}
		case Fireball:
			hxd.Resource.embed("gfx/fireBall.png");
		case Wizard:
			hxd.Resource.embed("gfx/wizard.png");
		case Stone:
			hxd.Resource.embed("gfx/stone.png");
		case Crow:
			hxd.Resource.embed("gfx/crow.png");
		case Missile:
			hxd.Resource.embed("gfx/missile.png");
		case Boss:
			
			mc.scale(1.5);
			anim.x += 10;
			
			anim.scaleX = 1;
			mc.y += 8;
			size = 94;
			anim.colorKey = 0xFFFFFF;
	
			var fire = [];
			for( i in 0...10 ) {
				var r = new h2d.Anim(mc);
				r.speed = 20;
				r.play([for( t in hxd.Resource.embed("gfx/reactor.png").toTile().split(5, true) ) t.center(0,16)]);
				r.blendMode = Add;
				r.alpha = 0.2;
				var m = new h3d.Matrix();
				m.identity();
				m._12 = i / 5;
				//r.colorMatrix = m;
				r.y = -84 + 16;
				r.x = 28;
				fire.push(r);
			}
			
			var h = new h2d.Bitmap(hxd.Resource.embed("gfx/redHalo.png").toTile(), mc);
			h.y = -22;
			h.x = 25;
			h.colorKey = 0x5E016D;
			h.scale(0.3);
			var time = 0.;
			game.todo.push(function(dt) {
				time += dt;
				h.alpha = Math.sin(time * 0.1) * 0.2 + 0.2;
				
				for( i in 0...fire.length ) {
					var a = i * Math.PI * 2 / fire.length;
					fire[i].scaleY = Math.sin(time * 0.1 + a) * 0.8;
					fire[i].scaleX = 0.8 + Math.cos(time * 0.05 + a) * 0.2;
				}
				return true;
			});
			
			hxd.Resource.embed("gfx/boss.png");
		};
		maxLife = life;
		defaultRes = res;
		play(res, size, center);
	}
	
	public function play(?res:hxd.Resource.BitmapRes, size = 32, center = 1) {
		if( res == null ) res = defaultRes;
		var t = res.toTile();
		var cy = size * center;
		var cx = switch( kind ) { case LaserAnim: 0; default: t.width >> 1; };
		anim.play([for( a in t.split(Std.int(t.height/size), true) ) a.center(cx, cy)]);
	}
	
	public function get_x() {
		return mc.x;
	}
	public function set_x(v) {
		return mc.x = v;
	}
	
	public function update(dt:Float) {
		var pp = Math.max(5 * dt, Math.abs(push) * 0.25);
		if( push > 0 ) {
			var dx = push > pp ? pp : push;
			push -= dx;
			x += dx;
		} else if( push < 0 ) {
			var dx = push < -pp ? -pp : push;
			push -= dx;
			x += dx;
		}
		pause -= dt;
		x += moveSpeed * dt * anim.scaleX;
		switch( kind ) {
		case Stone:
			anim.currentFrame = 4 * (1 - life / maxLife);
		case Chain:
			anim.rotation = Math.sin(pause * 0.05) * 0.1;
		default:
		}
		return true;
	}
	
	public function remove() {
		game.fighters.remove(this);
		anim.remove();
	}
	
	public function kill() {
		var dr = 0.;
		var dx = 5. + Math.random() * 3, dy = -(8. + Math.random() * 3);
		remove();
		var frame = anim.getFrame();
		var bmp = new h2d.Bitmap(frame == null ? null : frame.center(16,16), game.fightCont);
		bmp.x = mc.x;
		bmp.y = mc.y - 16;
		bmp.scaleX = anim.scaleX;
		bmp.colorKey = anim.colorKey;
		bmp.rotation = anim.rotation;
		switch( kind ) {
		case FChest(_):
			bmp.remove();
			return;
		case Stone:
			bmp.y -= 16*2;
		default:
		}
		game.todo.push(function(dt) {
			switch( kind ) {
			case Stone:
				bmp.alpha -= 0.05 * dt;
				if( bmp.alpha < 0 )
					return false;
			case Time:
				bmp.y -= dt;
				bmp.scale(Math.pow(0.97, dt));
				bmp.alpha -= 0.05 * dt;
				if( bmp.alpha < 0 )
					return false;
			default:
				var tr = (dx * dx + dy * dy) * 0.01;
				dr = dr * 0.9 + tr * 0.1;
				bmp.rotation += dr;
				bmp.x += dx * dt;
				bmp.y += dy * dt;
				dy += dt * 0.5;
				if( bmp.y > 650 )
					return false;
			}
			return true;
		});
	}
	
	public function pop( txt : String, color : Int, size : Float = 1. ) {
		var spr = new h2d.Sprite(game.world);
		var t = new h2d.Text(game.font, spr);
		t.text = txt;
		t.color = h3d.Vector.fromColor(color);
		t.color.w = 1;
		t.dropShadow = { dx : 0, dy : 1, color : 0x808080, alpha : 0.5 };
		t.x = -t.textWidth * 0.5;
		t.y = -t.textHeight * 0.5;
		
		spr.x = x - anim.scaleX * 16;
		spr.y = mc.y - 16;
		
		t.alpha = 2;
		
		var k = 0.;
		
		game.todo.push(function(dt) {
			t.y -= 100 * dt / (k + 10);
			k += dt;
			spr.rotate(spr.rotation * 0.03 * dt);
			t.alpha -= 0.04 * dt;
			if( t.alpha < 0 ) {
				t.parent.remove();
				return false;
			}
			return true;
		});
				
		return spr;
	}
	
}