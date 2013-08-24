
enum CKind {
	Shield;
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
}

class Fighter {

	var game : Game;
	public var anim : h2d.Anim;
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
		anim = new h2d.Anim(game.fightCont);
		anim.colorKey = 0x5E016D;
		anim.speed = 20 + Math.random() - 0.5;
		anim.currentFrame = Math.random() * 8;
		anim.y = Game.BASEY;
		anim.scaleX = -1;
		push = 0;
		pause = 0;
		game.fighters.push(this);

		attackPower = 10;
		pushPower = 1;
		moveSpeed = 1;
		life = 10;
		var size = 32;
		var center = false;
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
			center = true;
			anim.y -= 16;
		case Wizard:
			moveSpeed = 0;
		case Fireball:
			life = 0;
			moveSpeed = 2;
		case Stone:
			size = 64;
			anim.y += 4;
			anim.speed = 0;
			life = 200;
			moveSpeed = 0;
			pushPower = 1000000;
		case FChest(k,_):
		}
		var res = switch( kind ) {
		case Hero:
			hxd.Resource.embed("gfx/hero.png");
		case Slime:
			hxd.Resource.embed("gfx/slime.png");
		case Goblin:
			hxd.Resource.embed("gfx/monster.png");
		case Time:
			hxd.Resource.embed("gfx/timeBonus.png");
		case FChest(k,_):
			switch(k) {
			case Shield:
				hxd.Resource.embed("gfx/shield.png");
			}
		case Fireball:
			hxd.Resource.embed("gfx/fireBall.png");
		case Wizard:
			hxd.Resource.embed("gfx/wizard.png");
		case Stone:
			hxd.Resource.embed("gfx/stone.png");
		};
		maxLife = life;
		defaultRes = res;
		play(res, size, center);
	}
	
	public function play(?res:hxd.Resource.BitmapRes, size = 32, center = false) {
		if( res == null ) res = defaultRes;
		var t = res.toTile();
		var cy = center ? size >> 1 : size;
		anim.play([for( a in t.split(Std.int(t.height/size), true) ) a.center(t.width>>1, cy)]);
	}
	
	public function get_x() {
		return anim.x;
	}
	public function set_x(v) {
		return anim.x = v;
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
		case Time:
			anim.rotation += 0.1 * dt;
		case Stone:
			anim.currentFrame = 4 * (1 - life / maxLife);
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
		bmp.x = anim.x;
		bmp.y = anim.y - 16;
		bmp.scaleX = anim.scaleX;
		bmp.colorKey = anim.colorKey;
		bmp.rotation = anim.rotation;
		switch( kind ) {
		case Time:
			bmp.y += 16;
		case FChest(_):
			bmp.remove();
			return;
		case Stone:
			bmp.y -= 16*2;
		default:
		}
		game.todo.push(function(dt) {
			switch( kind ) {
			case Time:
				bmp.scale(1.02 * dt);
				bmp.rotation += 0.1 * dt;
				bmp.alpha -= 0.02 * dt;
				if( bmp.alpha < 0 )
					return false;
			case Stone:
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
		spr.y = anim.y - 16;
		
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