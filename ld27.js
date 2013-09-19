(function () { "use strict";
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Background = function() {
	this.loopX = 0;
	this.bg = new h2d.Sprite(Game.inst.world);
	this.bg2 = new h2d.Sprite(this.bg);
	this.bg4 = new h2d.Sprite(this.bg);
	this.bg3 = new h2d.Sprite(this.bg);
	this.bg1 = new h2d.Sprite(this.bg);
	var scene = Game.inst.scene;
	var sbg = [{ r : hxd.Res.loader.loadTexture("bg1.png"), n : 18},{ r : hxd.Res.loader.loadTexture("bg1atrans.png"), n : 1},{ r : hxd.Res.loader.loadTexture("bg1a.png"), n : 22},{ r : hxd.Res.loader.loadTexture("bg1btrans.png"), n : 1},{ r : hxd.Res.loader.loadTexture("bg1b.png"), n : 26}];
	var px = 0;
	var _g = 0;
	while(_g < sbg.length) {
		var k = sbg[_g];
		++_g;
		var t = k.r.toTile();
		var _g2 = 0;
		var _g1 = k.n;
		while(_g2 < _g1) {
			var i = _g2++;
			var b = new h2d.Bitmap(t,this.bg1);
			b.x = px;
			b.posChanged = true;
			px;
			b.shader.hasColorKey = true;
			b.shader.colorKey = 6160749;
			b.set_y(scene.height - t.height);
			px += t.width;
		}
	}
	this.soilMaxX = px;
	var bgb = hxd.Res.loader.loadTexture("bgb.png");
	var sbg1 = [{ r : hxd.Res.loader.loadTexture("bg.png"), n : 9, p : 6},{ r : hxd.Res.loader.loadTexture("bgatrans.png"), n : 1, p : 1},{ r : hxd.Res.loader.loadTexture("bga.png"), n : 11, p : 7},{ r : hxd.Res.loader.loadTexture("bgbtrans.png"), n : 1, p : 1},{ r : bgb, n : 11, p : 3},{ r : hxd.Res.loader.loadTexture("bgbend.png"), n : 0, p : 1},{ r : bgb, n : 4, p : 0}];
	var px1 = 0;
	var _g = 0;
	while(_g < sbg1.length) {
		var k = sbg1[_g];
		++_g;
		var t = k.r.toTile();
		var _g2 = 0;
		var _g1 = k.n;
		while(_g2 < _g1) {
			var i = _g2++;
			var b = new h2d.Bitmap(t,this.bg3);
			b.x = px1;
			b.posChanged = true;
			px1;
			b.shader.hasColorKey = true;
			b.shader.colorKey = 6160749;
			b.set_y(scene.height - t.height - 49);
			px1 += t.width;
		}
	}
	var px2 = 0;
	var _g = 0;
	while(_g < sbg1.length) {
		var k = sbg1[_g];
		++_g;
		var t = k.r.toTile();
		var _g2 = 0;
		var _g1 = k.p;
		while(_g2 < _g1) {
			var i = _g2++;
			var b = new h2d.Bitmap(t,this.bg4);
			b.scale(1.3);
			b.set_x(px2 * 1.3);
			b.set_alpha(0.3);
			b.shader.hasColorKey = true;
			b.shader.colorKey = 6160749;
			b.set_y(scene.height - t.height * 1.3 - 49);
			px2 += t.width;
		}
	}
	var sbg2 = [{ r : hxd.Res.loader.loadTexture("bg2.png"), n : 1},{ r : hxd.Res.loader.loadTexture("bg2a.png"), n : 1},{ r : hxd.Res.loader.loadTexture("bg2b.png"), n : 1},{ r : hxd.Res.loader.loadTexture("bg2c.png"), n : 1}];
	var px3 = 0;
	var _g = 0;
	while(_g < sbg2.length) {
		var k = sbg2[_g];
		++_g;
		var t = k.r.toTile();
		var _g2 = 0;
		var _g1 = k.n;
		while(_g2 < _g1) {
			var i = _g2++;
			var b = new h2d.Bitmap(t,this.bg2);
			b.x = px3;
			b.posChanged = true;
			px3;
			b.shader.hasColorKey = true;
			b.shader.colorKey = 6160749;
			px3 += t.width;
		}
	}
	this.sMaxX = px3;
};
$hxClasses["Background"] = Background;
Background.__name__ = ["Background"];
Background.prototype = {
	update: function(x) {
		this.bg2.set_x(x * 0.8);
		this.bg3.set_x(x * 0.2 + this.loopX * 0.8);
		this.bg4.set_x(x * 0.4);
		var game = Game.inst;
		var maxX = game.scene.width - game.world.x - this.sMaxX;
		if(this.bg2.x < maxX) this.bg2.set_x(maxX);
		var sm = game.scene.width - game.world.x - (this.soilMaxX + this.loopX);
		if(sm > 0) {
			this.loopX += 500;
			this.bg1.set_x(this.loopX);
		}
	}
	,__class__: Background
}
var Step = $hxClasses["Step"] = { __ename__ : true, __constructs__ : ["Appear","Action","Wait","Evade","Jump","WaitForAction"] }
Step.Appear = ["Appear",0];
Step.Appear.toString = $estr;
Step.Appear.__enum__ = Step;
Step.Action = ["Action",1];
Step.Action.toString = $estr;
Step.Action.__enum__ = Step;
Step.Wait = ["Wait",2];
Step.Wait.toString = $estr;
Step.Wait.__enum__ = Step;
Step.Evade = ["Evade",3];
Step.Evade.toString = $estr;
Step.Evade.__enum__ = Step;
Step.Jump = ["Jump",4];
Step.Jump.toString = $estr;
Step.Jump.__enum__ = Step;
Step.WaitForAction = ["WaitForAction",5];
Step.WaitForAction.toString = $estr;
Step.WaitForAction.__enum__ = Step;
var Fighter = function(k) {
	this.kind = k;
	this.game = Game.inst;
	this.mc = new h2d.Sprite(this.game.fightCont);
	this.mc.set_y(130);
	this.anim = new h2d.Anim(this.mc);
	this.anim.set_colorKey(6160749);
	this.anim.speed = 20 + Math.random() - 0.5;
	this.anim.currentFrame = Math.random() * 8;
	this.anim.set_scaleX(-1);
	this.push = 0;
	this.pause = 0;
	this.game.fighters.push(this);
	this.attackPower = 10;
	this.pushPower = 1;
	this.moveSpeed = 1;
	this.life = 10;
	var size = 32;
	var center = 1;
	{
		var _g = this;
		switch(_g.kind[1]) {
		case 0:
			this.moveSpeed = 4;
			break;
		case 1:
			this.pushPower = 0.8;
			break;
		case 2:
			this.life = 50;
			this.pushPower = 1.5;
			break;
		case 3:
			this.life = 0;
			this.moveSpeed = 0;
			break;
		case 6:
			this.moveSpeed = 0;
			break;
		case 5:
			this.life = 0;
			this.moveSpeed = 2;
			break;
		case 7:
			size = 64;
			var _g1 = this.mc;
			_g1.set_y(_g1.y + 4);
			this.anim.speed = 0;
			this.life = 200;
			this.moveSpeed = 0;
			this.pushPower = 1000000;
			break;
		case 8:
			this.moveSpeed = 1.5;
			this.life = 40;
			break;
		case 4:case 9:
			this.moveSpeed = 0;
			this.life = 0;
			break;
		case 10:
			this.life = 200;
			this.moveSpeed = 0;
			break;
		case 11:
			this.life = 2000;
			break;
		case 12:
			this.life = 0;
			this.moveSpeed = 0;
			break;
		}
	}
	var res;
	{
		var _g1 = this;
		switch(_g1.kind[1]) {
		case 0:
			res = hxd.Res.loader.loadTexture("hero.png");
			break;
		case 1:
			res = hxd.Res.loader.loadTexture("slime.png");
			break;
		case 2:
			res = hxd.Res.loader.loadTexture("knight.png");
			break;
		case 3:
			this.anim.scale(0.7);
			res = hxd.Res.loader.loadTexture("clock.png");
			break;
		case 9:
			res = hxd.Res.loader.loadTexture("laserAnim.png");
			break;
		case 10:
			size = 120;
			center = 0;
			var _g2 = this.mc;
			_g2.set_y(_g2.y - 132);
			this.pushPower = 5;
			res = hxd.Res.loader.loadTexture("chain.png");
			break;
		case 4:
			var k1 = _g1.kind[2];
			switch(k1[1]) {
			case 0:
				res = hxd.Res.loader.loadTexture("shield.png");
				break;
			case 1:
				res = hxd.Res.loader.loadTexture("timeBonus.png");
				break;
			case 2:
				res = hxd.Res.loader.loadTexture("laser.png");
				break;
			}
			break;
		case 5:
			res = hxd.Res.loader.loadTexture("fireBall.png");
			break;
		case 6:
			res = hxd.Res.loader.loadTexture("wizard.png");
			break;
		case 7:
			res = hxd.Res.loader.loadTexture("stone.png");
			break;
		case 8:
			res = hxd.Res.loader.loadTexture("crow.png");
			break;
		case 12:
			res = hxd.Res.loader.loadTexture("missile.png");
			break;
		case 11:
			this.mc.scale(1.5);
			var _g2 = this.anim;
			_g2.set_x(_g2.x + 10);
			this.anim.set_scaleX(1);
			var _g2 = this.mc;
			_g2.set_y(_g2.y + 8);
			size = 94;
			this.anim.set_colorKey(16777215);
			var fire = [];
			var _g2 = 0;
			while(_g2 < 10) {
				var i = _g2++;
				var r = new h2d.Anim(this.mc);
				r.speed = 20;
				r.play((function($this) {
					var $r;
					var _g3 = [];
					{
						var _g4 = 0;
						var _g5 = hxd.Res.loader.loadTexture("reactor.png").toTile().split(5,true);
						while(_g4 < _g5.length) {
							var t = _g5[_g4];
							++_g4;
							_g3.push(t.center(0,16));
						}
					}
					$r = _g3;
					return $r;
				}(this)));
				r.set_blendMode(h2d.BlendMode.Add);
				r.set_alpha(0.2);
				var m = new h3d.Matrix();
				m.identity();
				m._12 = i / 5;
				r.y = -68;
				r.posChanged = true;
				-68;
				r.x = 28;
				r.posChanged = true;
				28;
				fire.push(r);
			}
			var h = new h2d.Bitmap(hxd.Res.loader.loadTexture("redHalo.png").toTile(),this.mc);
			h.y = -22;
			h.posChanged = true;
			-22;
			h.x = 25;
			h.posChanged = true;
			25;
			h.shader.hasColorKey = true;
			h.shader.colorKey = 6160749;
			h.scale(0.3);
			var time = 0.;
			this.game.todo.push(function(dt) {
				time += dt;
				h.set_alpha(Math.sin(time * 0.1) * 0.2 + 0.2);
				var _g3 = 0;
				var _g2 = fire.length;
				while(_g3 < _g2) {
					var i = _g3++;
					var a = i * Math.PI * 2 / fire.length;
					fire[i].set_scaleY(Math.sin(time * 0.1 + a) * 0.8);
					fire[i].set_scaleX(0.8 + Math.cos(time * 0.05 + a) * 0.2);
				}
				return true;
			});
			res = hxd.Res.loader.loadTexture("boss.png");
			break;
		}
	}
	this.maxLife = this.life;
	this.defaultRes = res;
	this.play(res,size,center);
};
$hxClasses["Fighter"] = Fighter;
Fighter.__name__ = ["Fighter"];
Fighter.prototype = {
	pop: function(txt,color,size) {
		if(size == null) size = 1.;
		var spr = new h2d.Sprite(this.game.world);
		var t = new h2d.Text(this.game.font,spr);
		t.set_text(txt);
		t.set_color(new h3d.Vector((color >> 16 & 255) * 1.0 / 255.0,(color >> 8 & 255) * 1.0 / 255.0,(color & 255) * 1.0 / 255.0,(color >>> 24) * 1.0 / 255.0));
		t.shader.colorMul.w = 1;
		t.dropShadow = { dx : 0, dy : 1, color : 8421504, alpha : 0.5};
		t.set_x(-t.get_textWidth() * 0.5);
		t.set_y(-t.get_textHeight() * 0.5);
		spr.set_x(this.get_x() - this.anim.scaleX * 16);
		spr.set_y(this.mc.y - 16);
		t.set_alpha(2);
		var k = 0.;
		this.game.todo.push(function(dt) {
			var _g = t;
			_g.set_y(_g.y - 100 * dt / (k + 10));
			k += dt;
			spr.rotate(spr.rotation * 0.03 * dt);
			var _g = t;
			_g.set_alpha(_g.shader.alpha - 0.04 * dt);
			if(t.shader.alpha < 0) {
				t.parent.remove();
				return false;
			}
			return true;
		});
		return spr;
	}
	,kill: function() {
		var _g1 = this;
		var dr = 0.;
		var dx = 5. + Math.random() * 3;
		var dy = -(8. + Math.random() * 3);
		this.remove();
		var frame = this.anim.getFrame();
		var bmp = new h2d.Bitmap(frame == null?null:frame.center(16,16),this.game.fightCont);
		bmp.set_x(this.mc.x);
		bmp.set_y(this.mc.y - 16);
		bmp.set_scaleX(this.anim.scaleX);
		bmp.shader.hasColorKey = true;
		bmp.shader.colorKey = this.anim.shader.colorKey;
		bmp.set_rotation(this.anim.rotation);
		{
			var _g = this;
			switch(_g.kind[1]) {
			case 4:
				if(bmp != null && bmp.parent != null) bmp.parent.removeChild(bmp);
				return;
			case 7:
				var _g11 = bmp;
				_g11.set_y(_g11.y - 32);
				Sounds.play("break");
				break;
			case 3:
				break;
			default:
			}
		}
		this.game.todo.push(function(dt) {
			switch(_g1.kind[1]) {
			case 7:
				var _g2 = bmp;
				_g2.set_alpha(_g2.shader.alpha - 0.05 * dt);
				if(bmp.shader.alpha < 0) return false;
				break;
			case 3:
				var _g2 = bmp;
				_g2.set_y(_g2.y - dt);
				bmp.scale(Math.pow(0.97,dt));
				var _g2 = bmp;
				_g2.set_alpha(_g2.shader.alpha - 0.05 * dt);
				if(bmp.shader.alpha < 0) return false;
				break;
			default:
				var tr = (dx * dx + dy * dy) * 0.01;
				dr = dr * 0.9 + tr * 0.1;
				var _g2 = bmp;
				_g2.set_rotation(_g2.rotation + dr);
				var _g2 = bmp;
				_g2.set_x(_g2.x + dx * dt);
				var _g2 = bmp;
				_g2.set_y(_g2.y + dy * dt);
				dy += dt * 0.5;
				if(bmp.y > 650) return false;
			}
			return true;
		});
	}
	,remove: function() {
		HxOverrides.remove(this.game.fighters,this);
		this.mc.remove();
	}
	,update: function(dt) {
		var pp = Math.max(5 * dt,Math.abs(this.push) * 0.25);
		if(this.push > 0) {
			var dx;
			if(this.push > pp) dx = pp; else dx = this.push;
			this.push -= dx;
			var _g = this;
			_g.set_x(_g.get_x() + dx);
		} else if(this.push < 0) {
			var dx;
			if(this.push < -pp) dx = -pp; else dx = this.push;
			this.push -= dx;
			var _g = this;
			_g.set_x(_g.get_x() + dx);
		}
		this.pause -= dt;
		var _g = this;
		_g.set_x(_g.get_x() + this.moveSpeed * dt * this.anim.scaleX);
		var _g = this;
		switch(_g.kind[1]) {
		case 7:
			this.anim.currentFrame = 4 * (1 - this.life / this.maxLife);
			break;
		case 10:
			this.anim.set_rotation(Math.sin(this.pause * 0.05) * 0.1);
			break;
		case 12:
			this.moveSpeed += dt * 0.1;
			break;
		default:
		}
		return true;
	}
	,set_x: function(v) {
		return this.mc.set_x(v);
	}
	,get_x: function() {
		return this.mc.x;
	}
	,play: function(res,size,center) {
		if(center == null) center = 1;
		if(size == null) size = 32;
		if(res == null) res = this.defaultRes;
		var t = res.toTile();
		var cy = size * center;
		var cx;
		var _g = this;
		switch(_g.kind[1]) {
		case 9:
			cx = 0;
			break;
		default:
			cx = t.width >> 1;
		}
		this.anim.play((function($this) {
			var $r;
			var _g1 = [];
			{
				var _g2 = 0;
				var _g3 = t.split(t.height / size | 0,true);
				while(_g2 < _g3.length) {
					var a = _g3[_g2];
					++_g2;
					_g1.push(a.center(cx,cy));
				}
			}
			$r = _g1;
			return $r;
		}(this)));
	}
	,__class__: Fighter
}
var Boss = function() {
	Fighter.call(this,FKind.Boss);
	this.step = Step.Appear;
	this.act = -1;
	this.soilY = this.mc.y;
	this.life = this.maxLife = 300;
};
$hxClasses["Boss"] = Boss;
Boss.__name__ = ["Boss"];
Boss.__super__ = Fighter;
Boss.prototype = $extend(Fighter.prototype,{
	kill: function() {
		var _g = this;
		this.step = Step.Wait;
		this.next = null;
		this.game.hero.play();
		this.game.nextTime = haxe.Timer.stamp() + 7;
		var stopped = false;
		var smokeTime = 0.;
		var sfx = 0;
		this.game.todo.push(function(dt) {
			_g.game.hero.pause = 1e10;
			_g.game.hero.slow = 1e10;
			_g.game.hero.blocking = true;
			_g.game.hero.anim.speed = 20 * _g.game.hero.moveSpeed / 4;
			if(_g.game.hero.anim.speed < 10) _g.game.hero.anim.currentFrame = 1;
			if(!stopped) {
				var tx = _g.game.hero.get_x() + 150;
				if(tx > _g.get_x()) _g.moveSpeed += 0.1 * dt; else _g.moveSpeed -= 0.1 * dt;
				var dx = Math.abs(tx - _g.get_x());
				if(dx < 50) {
					_g.moveSpeed *= dx / 50;
					if(_g.moveSpeed < 1) {
						_g.moveSpeed = 0;
						_g.play(hxd.Res.loader.loadTexture("boss_hurt.png"),94);
						stopped = true;
					}
				}
			} else {
				var px = _g.get_x() + Math.random() * 40;
				var py = _g.mc.y - Math.random() * 40;
				var _g1 = 0;
				while(_g1 < 3) {
					var i = _g1++;
					var p = new Part(_g.game.smoke.tile,px,py);
					p.gravity = 0;
					p.scale *= 3;
					p.dx = (Math.random() - 0.5) * 5;
					p.dy = (Math.random() - 0.7) * 5;
					_g.game.smoke.add(p);
				}
				if(Std.random(20 - sfx) == 0) {
					sfx = 0;
					Sounds.play("explode");
				} else sfx++;
				smokeTime += dt;
				if(smokeTime > 200) {
					Sounds.play("fire");
					haxe.Timer.delay(function() {
						Sounds.play("fire");
					},100);
					haxe.Timer.delay(function() {
						Sounds.play("fire");
					},200);
					haxe.Timer.delay(function() {
						Sounds.play("fire");
					},350);
					var _g1 = 0;
					while(_g1 < 1000) {
						var i = _g1++;
						var px1 = _g.get_x() + Math.random() * 40;
						var py1 = _g.mc.y - Math.random() * 40;
						var p = new Part(_g.game.expl.tile,px1,py1);
						p.gravity = 0.5;
						p.scale *= 3;
						p.dx = (Math.random() - 0.5) * 20;
						p.dy = (-Math.random() - 0.7) * 7;
						_g.game.expl.add(p);
					}
					_g.remove();
					_g.game.win = true;
					return false;
				}
			}
			return true;
		});
	}
	,update: function(dt) {
		Fighter.prototype.update.call(this,dt);
		if(this.get_x() > this.game.hero.get_x() + 400) this.set_x(this.game.hero.get_x() + 400);
		if(this.pause < 0 && this.next != null) {
			var old = this.next;
			this.next = null;
			old();
		}
		var _g = this;
		switch(_g.step[1]) {
		case 0:
			if(this.act == -1) this.moveSpeed = 3.5; else this.moveSpeed = 3.;
			if(this.get_x() < this.game.hero.get_x() + 170) {
				this.pause = (1 + Math.random() * 0.5) * 50;
				this.step = Step.WaitForAction;
			}
			break;
		case 1:
			var _g1 = Std.random(3);
			switch(_g1) {
			case 0:case 1:
				this.step = Step.Jump;
				Sounds.play("bossJump");
				this.jump = -10;
				this.moveSpeed = 1;
				this.skip = true;
				break;
			case 2:
				var _g2 = Std.random(4);
				switch(_g2) {
				case 0:
					if(!this.game.hero.laserRecover) {
						Sounds.play("warning");
						var _g3 = 0;
						while(_g3 < 10) {
							var i = _g3++;
							new Fighter(FKind.Goblin).set_x(this.game.hero.get_x() + 350 + i * 30);
						}
					}
					break;
				case 2:
					Sounds.play("hit5");
					var _g3 = 0;
					while(_g3 < 4) {
						var i = _g3++;
						new Fighter(FKind.Crow).set_x(this.game.hero.get_x() + 350 + i * 30);
					}
					break;
				case 3:case 1:
					Sounds.play("missiles");
					var m0 = new Fighter(FKind.Missile);
					m0.set_x(this.get_x() + 100);
					var _g3 = m0.mc;
					_g3.set_y(_g3.y - 75);
					m0.skip = true;
					var m1 = new Fighter(FKind.Missile);
					m1.set_x(this.get_x() + 150);
					var _g3 = m1.mc;
					_g3.set_y(_g3.y - 40);
					m1.skip = true;
					var _g3 = 0;
					while(_g3 < 3) {
						var i = _g3++;
						new Fighter(FKind.Missile).set_x(this.get_x() + i * 50 + 200);
					}
					break;
				}
				this.step = Step.WaitForAction;
				this.pause = 200;
				break;
			default:
				this.act = 0;
			}
			break;
		case 4:
			var _g1 = this.mc;
			_g1.set_y(_g1.y + this.jump * dt);
			this.jump += dt * 0.4;
			if(this.mc.y > this.soilY) {
				this.mc.set_y(this.soilY);
				this.jump *= -0.5;
				Sounds.play("bossLand");
				var m = this.game.hero;
				if(Math.abs(this.get_x() - m.get_x()) < 30) {
					var _g1 = 0;
					while(_g1 < 50) {
						var i = _g1++;
						var p = new Part(this.game.expl.tile,m.get_x(),m.mc.y);
						this.game.expl.add(p);
					}
					Sounds.play("fire2");
					m.push -= 250;
					this.act--;
				}
				if(Math.abs(this.jump) < 3) {
					this.step = Step.Evade;
					this.skip = false;
					this.hitCount = 0;
				}
			}
			break;
		case 3:
			this.moveSpeed = 7;
			if(this.get_x() > this.game.hero.get_x() + 170) {
				this.skip = false;
				this.anim.set_scaleX(1);
				this.pause = (1 + Math.random() * 0.5) * 50;
				this.moveSpeed = 3.5;
				this.step = Step.WaitForAction;
			}
			break;
		case 5:
			this.moveSpeed = 3.5;
			if(this.pause < 0) this.step = Step.Action;
			break;
		case 2:
			break;
		}
		return true;
	}
	,__class__: Boss
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,matchedRight: function() {
		if(this.r.m == null) throw "No string matched";
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	,matchedLeft: function() {
		if(this.r.m == null) throw "No string matched";
		return this.r.s.substr(0,this.r.m.index);
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) return this.r.m[n]; else throw "EReg::matched";
	}
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,__class__: EReg
}
var CKind = $hxClasses["CKind"] = { __ename__ : true, __constructs__ : ["Shield","Slide","Laser"] }
CKind.Shield = ["Shield",0];
CKind.Shield.toString = $estr;
CKind.Shield.__enum__ = CKind;
CKind.Slide = ["Slide",1];
CKind.Slide.toString = $estr;
CKind.Slide.__enum__ = CKind;
CKind.Laser = ["Laser",2];
CKind.Laser.toString = $estr;
CKind.Laser.__enum__ = CKind;
var FKind = $hxClasses["FKind"] = { __ename__ : true, __constructs__ : ["Hero","Slime","Goblin","Time","FChest","Fireball","Wizard","Stone","Crow","LaserAnim","Chain","Boss","Missile"] }
FKind.Hero = ["Hero",0];
FKind.Hero.toString = $estr;
FKind.Hero.__enum__ = FKind;
FKind.Slime = ["Slime",1];
FKind.Slime.toString = $estr;
FKind.Slime.__enum__ = FKind;
FKind.Goblin = ["Goblin",2];
FKind.Goblin.toString = $estr;
FKind.Goblin.__enum__ = FKind;
FKind.Time = ["Time",3];
FKind.Time.toString = $estr;
FKind.Time.__enum__ = FKind;
FKind.FChest = function(c,text) { var $x = ["FChest",4,c,text]; $x.__enum__ = FKind; $x.toString = $estr; return $x; }
FKind.Fireball = ["Fireball",5];
FKind.Fireball.toString = $estr;
FKind.Fireball.__enum__ = FKind;
FKind.Wizard = ["Wizard",6];
FKind.Wizard.toString = $estr;
FKind.Wizard.__enum__ = FKind;
FKind.Stone = ["Stone",7];
FKind.Stone.toString = $estr;
FKind.Stone.__enum__ = FKind;
FKind.Crow = ["Crow",8];
FKind.Crow.toString = $estr;
FKind.Crow.__enum__ = FKind;
FKind.LaserAnim = ["LaserAnim",9];
FKind.LaserAnim.toString = $estr;
FKind.LaserAnim.__enum__ = FKind;
FKind.Chain = ["Chain",10];
FKind.Chain.toString = $estr;
FKind.Chain.__enum__ = FKind;
FKind.Boss = ["Boss",11];
FKind.Boss.toString = $estr;
FKind.Boss.__enum__ = FKind;
FKind.Missile = ["Missile",12];
FKind.Missile.toString = $estr;
FKind.Missile.__enum__ = FKind;
var Wave = $hxClasses["Wave"] = { __ename__ : true, __constructs__ : ["Resume","Tuto","M","Wait","Chest","End"] }
Wave.Resume = ["Resume",0];
Wave.Resume.toString = $estr;
Wave.Resume.__enum__ = Wave;
Wave.Tuto = function(t,cond,sfx) { var $x = ["Tuto",1,t,cond,sfx]; $x.__enum__ = Wave; $x.toString = $estr; return $x; }
Wave.M = function(m,dist,count) { var $x = ["M",2,m,dist,count]; $x.__enum__ = Wave; $x.toString = $estr; return $x; }
Wave.Wait = function(dist) { var $x = ["Wait",3,dist]; $x.__enum__ = Wave; $x.toString = $estr; return $x; }
Wave.Chest = function(k,text) { var $x = ["Chest",4,k,text]; $x.__enum__ = Wave; $x.toString = $estr; return $x; }
Wave.End = ["End",5];
Wave.End.toString = $estr;
Wave.End.__enum__ = Wave;
var Game = function(e,pos) {
	this.bossHint = 0;
	this.waveDist = 0;
	this.waveCount = 0;
	this.wavePos = 0;
	this.lastCheck = 0;
	var _g = this;
	var french = hxd.System.get_lang() == "fr";
	this.wavePos = this.lastCheck = pos;
	this.wavesData = [Wave.M(FKind.Slime,0),Wave.Tuto("Press " + (french?"A":"Q") + " to attack monsters",function() {
		return _g.fighters.length == 1;
	}),Wave.M(FKind.Slime,200,3),Wave.M(FKind.Goblin,300),Wave.Tuto("Hit " + (french?"A":"Q") + " faster!",function() {
		return _g.fighters.length == 1;
	}),Wave.M(FKind.Goblin,300,1),Wave.M(FKind.Time,200),Wave.Wait(500),Wave.Chest(CKind.Slide,"Use " + (french?"Z":"W") + " to slide"),Wave.Wait(300),Wave.M(FKind.Crow,40,3),Wave.Wait(200),Wave.M(FKind.Crow,40,3),Wave.Wait(200),Wave.M(FKind.Crow,40,3),Wave.M(FKind.Time,200),Wave.M(FKind.Stone,300),Wave.Wait(300),Wave.M(FKind.Goblin,150,2),Wave.M(FKind.Time,300),Wave.Wait(500),Wave.Chest(CKind.Shield,"Use E to protect yourself"),Wave.Wait(300),Wave.M(FKind.Fireball,200,3),Wave.M(FKind.Wizard,50),Wave.M(FKind.Time,200),Wave.Wait(50),Wave.M(FKind.Fireball,150,3),Wave.M(FKind.Wizard,50),Wave.Wait(50),Wave.M(FKind.Fireball,150,3),Wave.M(FKind.Wizard,50),Wave.M(FKind.Time,200),Wave.Wait(100),Wave.M(FKind.Crow,40,3),Wave.M(FKind.Stone,200),Wave.Wait(150),Wave.M(FKind.Fireball,100,3),Wave.M(FKind.Wizard,50),Wave.M(FKind.Time,100),Wave.Wait(500),Wave.Chest(CKind.Laser,"Use R to fire laser beam"),Wave.Wait(300),Wave.M(FKind.Goblin,10,10),Wave.Wait(200),Wave.M(FKind.Goblin,200),Wave.M(FKind.Time,200),Wave.M(FKind.Chain,200,4),Wave.Wait(70),Wave.M(FKind.Goblin,50,3),Wave.M(FKind.Slime,50,5),Wave.M(FKind.Time,50),Wave.Wait(100),Wave.M(FKind.Goblin,50,3),Wave.M(FKind.Fireball,100,3),Wave.M(FKind.Wizard,50),Wave.Wait(50),Wave.M(FKind.Slime,50,3),Wave.M(FKind.Crow,50),Wave.Wait(50),Wave.M(FKind.Slime,50,4),Wave.M(FKind.Time,100),Wave.Wait(800),Wave.Tuto("Warning ! Danger Approaching !",null,"warning"),Wave.Wait(50),Wave.M(FKind.Boss,100),Wave.M(FKind.Time,500),Wave.M(FKind.Time,1800),Wave.End];
	this.engine = e;
	this.font = new h2d.Font("Verdana Gras",32);
	this.font.halfSize();
	this.scene = new h2d.Scene();
	this.scene.setFixedSize(250,150);
};
$hxClasses["Game"] = Game;
Game.__name__ = ["Game"];
Game.doUpdate = function() {
	Timer.update();
	if(Game.inst != null) Game.inst.update(); else if(Game.title != null) Game.title.update();
}
Game.showTitle = function() {
	Game.title = new Title(Game._ENGINE);
	Game.inst = null;
}
Game.start = function(pos) {
	if(pos == null) pos = 0;
	Game.inst = new Game(Game._ENGINE,pos);
	Game.inst.init();
	Game.title = null;
}
Game.main = function() {
	hxd.Res.loader = new hxd.res.Loader(new hxd.res.EmbedFileSystem(haxe.Unserializer.run("oy8:hero.pngty12:bgbtrans.pngty8:bg1b.pngty11:reactor.pngty13:laserAnim.pngty13:hero_lock.pngty9:slime.pngty13:bg1atrans.pngty10:shield.pngty14:hero_slide.pngty10:title1.pngty14:hero_block.pngty12:fireBall.pngty10:title2.pngty7:bg1.pngty9:stone.pngty10:bgbend.pngty13:timeBonus.pngty10:title3.pngty9:laser.pngty13:boss_hurt.pngty3:sfxoy8:walk.wavty7:hit.wavty8:hit5.wavty9:fire2.wavty8:time.wavty12:bossJump.wavty9:laser.wavty8:item.wavty8:hit2.wavty12:bossLand.wavty12:laserOff.wavty9:break.wavty8:hit3.wavty11:explode.wavty8:fire.wavty9:slide.wavty12:missiles.wavty9:block.wavty8:hit4.wavty11:warning.wavtgy12:bgatrans.pngty9:chain.pngty7:bg2.pngty9:clock.pngty13:bg1btrans.pngty11:monster.pngty7:bga.pngty13:hourGlass.pngty8:star.pngty8:bg2a.pngty14:boss_model.pngty6:bg.pngty11:Verdana.ttfty7:bgb.pngty14:smallStone.pngty8:crow.pngty11:victory.pngty8:bg2b.pngty11:explode.pngty8:bg1a.pngty10:knight.pngty10:wizard.pngty9:smoke.pngty11:missile.pngty11:redHalo.pngty9:block.pngty8:bg2c.pngty8:boss.pngtg")));
	Game._ENGINE = new h3d.Engine(false);
	Game._ENGINE.backgroundColor = -8355712;
	Game._ENGINE.onReady = function() {
		hxd.Key.initialize();
		Game.showTitle();
		hxd.System.setLoop(Game.doUpdate);
	};
	Game._ENGINE.init();
}
Game.prototype = {
	popText: function(text,color,cond) {
		if(this.prev != null && this.prev.parent != null) {
			this.prev.parent.removeChild(this.prev);
			this.prev = null;
		}
		var t = this.newText();
		t.set_textColor(color);
		t.set_text(text);
		t.set_x((this.scene.width - t.get_textWidth()) * 0.5);
		t.y = 330;
		t.posChanged = true;
		330;
		this.prev = t;
		if(cond == null) t.set_alpha(2);
		this.todo.push(function(dt) {
			if(cond != null && cond()) cond = null;
			if(cond == null) {
				var _g = t;
				_g.set_alpha(_g.shader.alpha - 0.02 * dt);
				if(t.shader.alpha <= 0) {
					if(t.parent != null) t.parent.removeChild(t);
					return false;
				}
			}
			return true;
		});
		return t;
	}
	,gameOver: function() {
		var _g = this;
		if(!this.isGameOver) {
			this.isGameOver = true;
			this.hero.moveSpeed = 0;
			this.hero.pause = 1e10;
			this.hero.slow = 1e10;
			this.hero.play();
			this.hero.anim.speed = 0;
			this.hero.anim.currentFrame = 1;
			var wait = 0.;
			if(this.win) {
				var v = new h2d.Bitmap(hxd.Res.loader.loadTexture("victory.png").toTile(),this.scene);
				v.set_x(-v.tile.width);
				v.set_alpha(0.8);
				v.y = 40;
				v.posChanged = true;
				40;
				v.shader.hasColorKey = true;
				v.shader.colorKey = 16777215;
				this.todo.push(function(dt) {
					wait += Timer.deltaT;
					if(v.x < -40) {
						var _g1 = v;
						_g1.set_x(_g1.x + (dt * 5 - v.x * 0.05));
					}
					_g.nextTime = haxe.Timer.stamp() + wait;
					if(wait > 10) {
						_g.dispose();
						Game.showTitle();
						return false;
					}
					return true;
				});
			} else this.popText("Time over\nKeep Trying",16711680,function() {
				wait += Timer.deltaT * 4;
				_g.nextTime = haxe.Timer.stamp() + wait;
				if(wait > 10) {
					_g.dispose();
					Game.inst = new Game(_g.engine,_g.lastCheck);
					Game.inst.init();
					return true;
				}
				return false;
			});
		}
	}
	,dispose: function() {
		this.font.dispose();
		this.scene.dispose();
		this.cleanTexts();
	}
	,cleanTexts: function() {
		var _g = 0;
		var _g1 = this.allTexts;
		while(_g < _g1.length) {
			var t = _g1[_g];
			++_g;
			if(t.parent != null) t.parent.removeChild(t);
		}
		this.allTexts = [];
	}
	,update: function() {
		var _g = this;
		var dt = Timer.tmod;
		var first = null;
		var _g1 = 0;
		var _g11 = this.fighters.slice();
		while(_g1 < _g11.length) {
			var f = _g11[_g1];
			++_g1;
			f.update(dt);
			if(!f.skip && (first == null || f.get_x() < first.get_x())) first = f;
		}
		if(this.isGameOver && first != null && first.kind == FKind.Time) first = null;
		if(first != null && this.hero.get_x() > first.get_x() - 20) switch(first.kind[1]) {
		case 3:
			var las = false;
			if(this.hero.laserRecover) {
				this.hero.laserRecover = false;
				las = true;
			}
			this.popText("Time UP!" + (las?"\nLaser ready":""),14804735);
			this.nextTime = haxe.Timer.stamp() + 10;
			Sounds.play("time");
			first.kill();
			if(this.boss == null) this.lastCheck = this.wavePos - 1;
			break;
		case 4:
			var text = first.kind[3];
			var kind = first.kind[2];
			this.popText(text,14804735);
			first.kill();
			this.hero.inventory.push(kind);
			Sounds.play("item");
			break;
		case 5:
			if(first.get_x() <= this.hero.get_x() + 10) {
				if(!this.hero.blocking) {
					Sounds.play("fire");
					this.hero.push -= 200;
				} else {
					Sounds.play("fire2");
					this.hero.slow *= 0.5;
				}
				first.remove();
				var _g1 = 0;
				while(_g1 < 10) {
					var i = _g1++;
					var p = new Part(this.fire.tile,first.get_x() + 20,first.mc.y);
					p.gravity *= 0.7;
					p.dy *= 0.8;
					this.fire.add(p);
				}
			}
			break;
		case 12:
			if(first.get_x() <= this.hero.get_x() + 10) {
				if(!this.hero.blocking) {
					Sounds.play("fire");
					this.hero.push -= 100;
				} else {
					Sounds.play("fire2");
					this.hero.slow *= 0.3;
				}
				first.remove();
				var _g1 = 0;
				while(_g1 < 20) {
					var i = _g1++;
					var p = new Part(this.fire.tile,first.get_x() + 20,first.mc.y);
					p.gravity *= 0.7;
					p.dy *= 0.8;
					this.fire.add(p);
				}
				var _g1 = 0;
				while(_g1 < 20) {
					var i = _g1++;
					var p = new Part(this.expl.tile,first.get_x() + 20,first.mc.y);
					p.gravity *= 0.7;
					p.dy *= 0.8;
					this.expl.add(p);
				}
			}
			break;
		case 8:
			if(this.hero.sliding) first.skip = true; else {
				var tpower = this.hero.pushPower + first.pushPower;
				var h = (this.hero.get_x() * first.pushPower + first.get_x() * this.hero.pushPower) / tpower;
				this.hero.set_x(h - 10);
				first.set_x(h + 10);
			}
			break;
		case 10:
			if(this.hero.sliding) first.skip = true; else {
				this.hero.push -= 50;
				Sounds.play("hit4");
			}
			break;
		case 7:
			this.hero.set_x(first.get_x() - 20);
			break;
		case 11:
			if(this.boss.step == Step.Evade) {
			} else {
				var tpower = this.hero.pushPower + first.pushPower;
				var h = (this.hero.get_x() * first.pushPower + first.get_x() * this.hero.pushPower) / tpower;
				this.hero.set_x(h - 10);
				first.set_x(h + 10);
			}
			break;
		default:
			var tpower = this.hero.pushPower + first.pushPower;
			var h = (this.hero.get_x() * first.pushPower + first.get_x() * this.hero.pushPower) / tpower;
			this.hero.set_x(h - 10);
			first.set_x(h + 10);
		}
		if(hxd.Key.isPressed(65) || hxd.Key.isPressed(81)) this.hero.action(first);
		if((hxd.Key.isPressed(90) || hxd.Key.isPressed(87)) && this.hero.has(CKind.Slide)) this.hero.slide();
		if(hxd.Key.isPressed(69) && this.hero.has(CKind.Shield)) this.hero.block();
		if(hxd.Key.isPressed(82) && this.hero.has(CKind.Laser)) this.hero.laser();
		if(hxd.Key.isPressed(27)) {
			haxe.Timer.delay(function() {
				_g.dispose();
				Game.inst = new Game(_g.engine,0);
				Game.inst.init();
			},0);
			return;
		}
		var tx = -Math.max(this.hero.get_x() - this.scene.width * 0.2,0);
		var ws = Math.pow(0.5,dt);
		this.world.set_x(this.world.x * ws + (1 - ws) * tx | 0);
		this.bg.update(-this.world.x);
		{
			var _g1 = this.wavesData[this.wavePos];
			switch(_g1[1]) {
			case 0:
				this.wavePos++;
				break;
			case 1:
				var sfx = _g1[4];
				var cond = _g1[3];
				var text = _g1[2];
				this.popText(text,16777215,cond);
				if(sfx != null) Sounds.play(sfx);
				this.wavePos++;
				break;
			case 2:
				var count = _g1[4];
				var dist = _g1[3];
				var kind = _g1[2];
				if(-tx - this.waveDist >= dist) {
					var f;
					switch(kind[1]) {
					case 11:
						f = this.boss = new Boss();
						break;
					default:
						f = new Fighter(kind);
					}
					f.set_x(this.waveDist + dist + 300);
					this.waveDist += dist;
					if(count == null || count == this.waveCount + 1) {
						this.wavePos++;
						this.waveCount = 0;
					} else this.waveCount++;
				}
				break;
			case 3:
				var dist = _g1[2];
				if(-tx - this.waveDist >= dist) {
					this.waveDist += dist;
					this.wavePos++;
				}
				break;
			case 4:
				var text = _g1[3];
				var kind = _g1[2];
				var f = new Fighter(FKind.FChest(kind,text));
				f.set_x(this.waveDist + 300);
				this.wavePos++;
				break;
			case 5:
				this.wavePos--;
				break;
			}
		}
		var _g1 = 0;
		var _g2 = this.todo.slice();
		while(_g1 < _g2.length) {
			var t = _g2[_g1];
			++_g1;
			if(!t(dt)) HxOverrides.remove(this.todo,t);
		}
		var vt = this.nextTime - haxe.Timer.stamp();
		if(vt < 0.2) this.gameOver();
		if(vt < 0) vt = 0;
		this.remTime.set_text((vt | 0) + "'" + StringTools.rpad("" + ((vt - (vt | 0)) * 100 | 0),"0",2));
		var k = vt * 255 / 10 | 0;
		this.remTime.set_textColor(this.isGameOver?0:16711680 | k << 8 | k);
		this.scene.setElapsedTime(dt / 60);
		this.engine.render(this.scene);
	}
	,newText: function() {
		var t = new h2d.Text(this.font,this.scene);
		t.set_textColor(16777215);
		this.allTexts.push(t);
		return t;
	}
	,init: function() {
		this.world = new h2d.Sprite(this.scene);
		this.bg = new Background();
		this.todo = [];
		this.allTexts = [];
		this.fightCont = new h2d.Sprite(this.world);
		this.fighters = [];
		this.hero = new Hero();
		if(this.wavePos == 0) {
			var _g1 = 0;
			var _g = this.wavesData.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(this.wavesData[i] == Wave.Resume) {
					this.wavePos = i;
					break;
				}
			}
		}
		var _g1 = 0;
		var _g = this.wavePos;
		while(_g1 < _g) {
			var i = _g1++;
			{
				var _g2 = this.wavesData[i];
				switch(_g2[1]) {
				case 3:
					var d = _g2[2];
					this.waveDist += d;
					break;
				case 2:
					var c = _g2[4];
					var d = _g2[3];
					if(c == null) c = 1;
					this.waveDist += d * c;
					break;
				case 4:
					var c = _g2[2];
					this.hero.inventory.push(c);
					break;
				case 0:case 1:case 5:
					break;
				}
			}
		}
		this.hero.set_x(this.waveDist);
		this.world.set_x(-this.waveDist);
		var rexpl = hxd.Res.loader.loadTexture("explode.png");
		var parts = this.world;
		this.expl = new h2d.SpriteBatch(rexpl.toTile().center(16,16),parts);
		this.expl.hasRotationScale = true;
		this.expl.hasUpdate = true;
		this.expl.set_blendMode(h2d.BlendMode.Add);
		this.expl.set_color(new h3d.Vector(1,0.6,0.,1));
		this.stones = new h2d.SpriteBatch(hxd.Res.loader.loadTexture("smallStone.png").toTile().center(8,8),parts);
		this.stones.set_colorKey(6160749);
		this.stones.hasRotationScale = true;
		this.stones.hasUpdate = true;
		this.fire = new h2d.SpriteBatch(rexpl.toTile().center(16,16),parts);
		this.fire.hasRotationScale = true;
		this.fire.hasUpdate = true;
		this.fire.set_blendMode(h2d.BlendMode.Add);
		this.fire.set_color(new h3d.Vector(1,0.,0.,1));
		this.smoke = new h2d.SpriteBatch(hxd.Res.loader.loadTexture("smoke.png").toTile().center(16,16),parts);
		this.smoke.set_colorKey(6160749);
		this.smoke.hasRotationScale = true;
		this.smoke.hasUpdate = true;
		this.smoke.set_alpha(0.5);
		this.remTime = this.newText();
		this.remTime.set_x(120);
		this.remTime.set_y(400);
		this.nextTime = haxe.Timer.stamp() + 10;
		this.update();
	}
	,__class__: Game
}
var Hero = function() {
	this.oldX = 0.;
	this.walkDist = 0.;
	Fighter.call(this,FKind.Hero);
	this.skip = true;
	this.inventory = [];
	this.mc.set_x(-16);
	this.anim.set_scaleX(1);
	this.pause = 0;
	this.slow = 0;
};
$hxClasses["Hero"] = Hero;
Hero.__name__ = ["Hero"];
Hero.__super__ = Fighter;
Hero.prototype = $extend(Fighter.prototype,{
	hit: function(m) {
		switch(m.kind[1]) {
		case 1:case 6:
			Sounds.play("hit");
			break;
		case 2:
			Sounds.play("hit2");
			break;
		case 8:
			Sounds.play("hit5");
			break;
		case 7:
			Sounds.play("hit3");
			break;
		case 10:
			Sounds.play("hit4");
			break;
		case 3:case 12:case 9:case 0:case 5:case 4:
			Sounds.play("hit3");
			break;
		case 11:
			Sounds.play("hit4");
			if(m.hitCount++ == 5) m.skip = true;
			break;
		}
		switch(m.kind[1]) {
		case 7:
			var _g = 0;
			while(_g < 4) {
				var i = _g++;
				var p = new Part(this.game.stones.tile,m.get_x() + 20,m.mc.y);
				p.scale *= 2 + Math.random();
				p.dx *= 2;
				p.gravity *= 1.5;
				p.bounce = 0.4;
				p.alpha = 1;
				p.x -= 16;
				p.y -= 16;
				this.game.stones.add(p);
			}
			var _g = 0;
			while(_g < 4) {
				var i = _g++;
				this.game.expl.add(new Boom(this.game.expl.tile,m.get_x() + 30,m.mc.y - 10));
			}
			break;
		default:
			var ex = 20.;
			switch(m.kind[1]) {
			case 11:
				var dx = this.get_x() - m.get_x();
				if(dx < 20 || dx > 50) return;
				ex += dx;
				m.push -= 30;
				break;
			default:
				m.push += 40;
			}
			var _g = 0;
			while(_g < 10) {
				var i = _g++;
				this.game.expl.add(new Part(this.game.expl.tile,m.get_x() + ex,m.mc.y));
			}
			var _g = 0;
			while(_g < 4) {
				var i = _g++;
				this.game.expl.add(new Boom(this.game.expl.tile,m.get_x() + ex + 10,m.mc.y - 10));
			}
		}
		var pv = Std["int"]((Math.random() * 0.5 + 1) * this.attackPower);
		m.life -= pv;
		m.pop("-" + pv,16687009).set_rotation(-(Math.random() + 0.5) * 0.5);
		if(m.life <= 0) m.kill();
	}
	,action: function(m) {
		if(this.pause > 0) return;
		if(m == null || m.get_x() > this.get_x() + 25 || m.maxLife == 0) {
			this.pause = 20;
			this.slow = 10.;
			this.moveSpeed = 0;
			this.play(hxd.Res.loader.loadTexture("hero_lock.png"));
			return;
		}
		this.hit(m);
		this.pause = 3;
	}
	,laser: function() {
		var _g = this;
		if(this.pause > 0) return;
		if(this.laserRecover) {
			Sounds.play("laserOff");
			return;
		}
		Sounds.play("laser");
		this.laserRecover = true;
		this.play(hxd.Res.loader.loadTexture("hero_lock.png"));
		this.pause = 100;
		this.slow = 100;
		this.moveSpeed = 0;
		var f = new Fighter(FKind.LaserAnim);
		f.skip = true;
		f.set_x(this.get_x() + 8);
		f.anim.set_scaleX(0);
		f.anim.speed = 12;
		f.anim.loop = false;
		f.anim.set_alpha(0.8);
		var time = 0.;
		var hit = 0.;
		var chkBoss = false;
		this.game.todo.push(function(dt) {
			_g.push = 0;
			time += dt;
			var w;
			if(time > 40) w = -0.5; else w = 0.5;
			var _g1 = f.anim;
			_g1.set_scaleX(_g1.scaleX + dt * w);
			if(f.anim.scaleX <= 0) {
				f.remove();
				return false;
			}
			hit += dt;
			while(hit > 5) {
				hit -= 5;
				var _g1 = 0;
				var _g2 = _g.game.fighters.slice();
				while(_g1 < _g2.length) {
					var f1 = _g2[_g1];
					++_g1;
					if(f1.kind == FKind.Boss) {
						if(chkBoss) continue;
						chkBoss = true;
						if(++_g.game.bossHint == 2 && (_g.game.prev == null || _g.game.prev.parent == null)) _g.game.popText("Laser can't hurt robots\nFind weak point",33023);
						continue;
					}
					if(!f1.skip && f1.life > 0 && f1.get_x() < _g.get_x() + 400) _g.hit(f1);
				}
			}
			return true;
		});
	}
	,slide: function() {
		if(this.pause > 0) return;
		Sounds.play("slide");
		this.play(hxd.Res.loader.loadTexture("hero_slide.png"));
		this.pause = 30;
		this.slow = 30;
		this.sliding = true;
		if(this.game.boss != null) this.moveSpeed = 6; else this.moveSpeed = 3;
	}
	,block: function() {
		if(this.pause > 0) return;
		this.play(hxd.Res.loader.loadTexture("hero_block.png"));
		this.pause = 30;
		this.slow = 30;
		this.blocking = true;
		Sounds.play("block");
	}
	,walk: function() {
		var dx = this.get_x() - this.oldX;
		if(dx > 0 && !this.sliding) this.walkDist += dx;
		this.oldX = this.get_x();
		if(this.walkDist > 0) {
			Sounds.play("walk");
			if(this.walkDist > 50) this.walkDist = 50;
			this.walkDist -= 50;
		}
	}
	,update: function(dt) {
		this.walk();
		Fighter.prototype.update.call(this,dt);
		this.wait -= dt;
		if(this.slow > 0) {
			this.slow -= dt;
			if(this.blocking) this.moveSpeed *= Math.pow(0.93,dt);
			if(this.slow <= 0) {
				this.sliding = false;
				this.blocking = false;
				this.moveSpeed = 4;
				this.play();
			}
		}
		return true;
	}
	,has: function(c) {
		return Lambda.has(this.inventory,c);
	}
	,__class__: Hero
});
var HxOverrides = function() { }
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.strDate = function(s) {
	switch(s.length) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k = s.split("-");
		return new Date(k[0],k[1] - 1,k[2],0,0,0);
	case 19:
		var k = s.split(" ");
		var y = k[0].split("-");
		var t = k[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
}
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
}
HxOverrides.remove = function(a,obj) {
	var i = 0;
	var l = a.length;
	while(i < l) {
		if(a[i] == obj) {
			a.splice(i,1);
			return true;
		}
		i++;
	}
	return false;
}
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
}
var Lambda = function() { }
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
}
Lambda.has = function(it,elt) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(x == elt) return true;
	}
	return false;
}
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,remove: function(v) {
		var prev = null;
		var l = this.h;
		while(l != null) {
			if(l[0] == v) {
				if(prev == null) this.h = l[1]; else prev[1] = l[1];
				if(this.q == l) this.q = prev;
				this.length--;
				return true;
			}
			prev = l;
			l = l[1];
		}
		return false;
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,__class__: List
}
var IMap = function() { }
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
var h2d = {}
h2d.BatchElement = function(t) {
	this.x = 0;
	this.y = 0;
	this.alpha = 1;
	this.rotation = 0;
	this.scale = 1;
	this.t = t;
};
$hxClasses["h2d.BatchElement"] = h2d.BatchElement;
h2d.BatchElement.__name__ = ["h2d","BatchElement"];
h2d.BatchElement.prototype = {
	update: function(et) {
		return true;
	}
	,__class__: h2d.BatchElement
}
var Part = function(e,x,y) {
	this.bounce = 0.7;
	h2d.BatchElement.call(this,e);
	this.scale = 0.25;
	this.alpha = 0.5;
	this.gravity = 1;
	this.ds = 0;
	this.z = (Math.random() + 0.5) * 16;
	this.x = x + (Math.random() - 0.5) * 16;
	this.y = y + Math.random() * 16;
	this.dx = (Math.random() - 0.5) * 5;
	this.dy = -(1 + Math.random() * 4) * 2;
};
$hxClasses["Part"] = Part;
Part.__name__ = ["Part"];
Part.__super__ = h2d.BatchElement;
Part.prototype = $extend(h2d.BatchElement.prototype,{
	update: function(et) {
		var dt = et * 60;
		this.dx *= Math.pow(0.95,dt);
		this.ds *= Math.pow(0.95,dt);
		this.scale *= Math.pow(0.97,dt);
		this.dy += this.gravity * dt;
		this.x += this.dx * dt;
		this.y += this.dy * dt;
		this.scale += this.ds * dt;
		var dr = (this.dx * this.dx + this.dy * this.dy) * 0.1;
		this.rotation += dr;
		if(dr < 0.1) {
			this.alpha -= 0.02 * dt;
			if(this.alpha < 0) return false;
		}
		if(this.gravity > 0 && this.y > 130 + this.z) {
			this.dx *= 0.95;
			this.y = 130 + this.z;
			this.dy = -this.dy * this.bounce;
		}
		return true;
	}
	,__class__: Part
});
var Boom = function(r,x,y) {
	Part.call(this,r,x,y);
	this.dy = 0;
	this.dx = 0;
	this.gravity = 0;
	this.alpha = 0.5;
	this.scale = 0;
	this.ds = 0.1;
};
$hxClasses["Boom"] = Boom;
Boom.__name__ = ["Boom"];
Boom.__super__ = Part;
Boom.prototype = $extend(Part.prototype,{
	__class__: Boom
});
var Reflect = function() { }
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
}
var Sounds = function() { }
$hxClasses["Sounds"] = Sounds;
Sounds.__name__ = ["Sounds"];
Sounds.play = function(name) {
	var s = Sounds.sounds.get(name);
	if(s == null) {
		s = hxd.Res.load("sfx/" + name + ".wav").toSound();
		Sounds.sounds.set(name,s);
	}
	s.play();
}
var Std = function() { }
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	return x | 0;
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	if(x <= 0) return 0; else return Math.floor(Math.random() * x);
}
var StringTools = function() { }
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	if(c.length <= 0) return s;
	while(s.length < l) s = s + c;
	return s;
}
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
}
var haxe = {}
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
}
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
}
haxe.Timer.prototype = {
	run: function() {
	}
	,stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,__class__: haxe.Timer
}
var Timer = function() { }
$hxClasses["Timer"] = Timer;
Timer.__name__ = ["Timer"];
Timer.update = function() {
	Timer.frameCount++;
	var newTime = haxe.Timer.stamp();
	Timer.deltaT = newTime - Timer.oldTime;
	Timer.oldTime = newTime;
	if(Timer.deltaT < Timer.maxDeltaTime) Timer.calc_tmod = Timer.calc_tmod * Timer.tmod_factor + (1 - Timer.tmod_factor) * Timer.deltaT * Timer.wantedFPS; else Timer.deltaT = 1 / Timer.wantedFPS;
	Timer.tmod = Timer.calc_tmod;
}
var Title = function(engine) {
	this.time = 0.;
	this.engine = engine;
	this.scene = new h2d.Scene();
	this.scene.setFixedSize(250,150);
	this.bg2 = new h2d.Bitmap(hxd.Res.loader.loadTexture("title2.png").toTile(),this.scene);
	this.bg1 = new h2d.Bitmap(hxd.Res.loader.loadTexture("title1.png").toTile(),this.scene);
	this.bg3 = new h2d.Bitmap(hxd.Res.loader.loadTexture("title3.png").toTile(),this.scene);
	this.bg1.set_colorKey(0);
	this.bg1.set_y(-this.bg1.tile.height + 50);
	this.bg3.set_y(-this.bg3.tile.height);
	this.bg3.set_colorKey(0);
	this.bg3.set_x(this.scene.width - this.bg3.tile.width);
	var a = hxd.Res.loader.loadTexture("star.png").toTile().split(11,true);
	var _g = 0;
	while(_g < 20) {
		var i = _g++;
		var s = new h2d.Anim(this.bg2);
		s.set_x(Std.random(this.bg1.tile.width));
		s.set_y(Std.random(this.bg1.tile.height));
		s.set_alpha(Math.random() + 0.1);
		s.speed = (20 + Math.random() * 30) * 0.3;
		s.scale(Math.random() * 0.5 + 0.5);
		s.currentFrame = Math.random() * 20;
		s.play(a);
	}
};
$hxClasses["Title"] = Title;
Title.__name__ = ["Title"];
Title.prototype = {
	update: function() {
		var dt = Timer.tmod;
		this.time += dt;
		if(this.bg1.y < 0 && this.bg1Ready == null) {
			var _g = this.bg1;
			_g.set_y(_g.y + (dt - this.bg1.y * 0.05));
			if(this.bg1.y > 0) {
				this.bg1.set_y(0);
				this.bg1Ready = 0.;
			}
		} else {
			if(this.bg1Ready < 3) this.bg1Ready += dt * 0.1; else this.bg1Ready = 3;
			this.bg1.set_y((Math.sin(this.time * 0.05) - 1) * this.bg1Ready);
		}
		if(this.bg3.y < 0 && this.bg3Ready == null) {
			var _g = this.bg3;
			_g.set_y(_g.y + (dt * 0.5 - this.bg1.y * 0.02));
			if(this.bg3.y > 0) {
				this.bg3.set_y(0);
				this.bg3Ready = 0.;
			}
		} else {
			if(this.bg3Ready < 2) this.bg3Ready += dt * 0.1; else this.bg3Ready = 2;
			this.bg3.set_y((Math.sin(this.time * 0.015) - 1) * this.bg3Ready);
		}
		var k = 30;
		if(this.bg2.y > -k) {
			var _g = this.bg2;
			_g.set_y(_g.y - dt * 0.15);
			if(this.bg2.y < -k) this.bg2.set_y(-k);
		} else {
			if(this.start == null) {
				var t = new h2d.Text(this.font,this.scene);
				t.set_textColor(16777215);
				var french = hxd.System.get_lang() == "fr";
				t.set_text("Press " + (french?"A":"Q") + " to Start");
				t.x = 520;
				t.posChanged = true;
				520;
				t.y = 400;
				t.posChanged = true;
				400;
				this.start = t;
			}
			this.start.visible = ((this.time / 25 | 0) & 1) == 0;
		}
		if(hxd.Key.isPressed(65) || hxd.Key.isPressed(81)) {
			this.dispose();
			Game.start();
			return;
		}
		this.engine.render(this.scene);
	}
	,dispose: function() {
		if(this.start != null && this.start.parent != null) this.start.parent.removeChild(this.start);
		this.scene.dispose();
	}
	,__class__: Title
}
var Type = function() { }
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	return o.__class__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
}
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
}
var format = {}
format.png = {}
format.png.Color = $hxClasses["format.png.Color"] = { __ename__ : true, __constructs__ : ["ColGrey","ColTrue","ColIndexed"] }
format.png.Color.ColGrey = function(alpha) { var $x = ["ColGrey",0,alpha]; $x.__enum__ = format.png.Color; $x.toString = $estr; return $x; }
format.png.Color.ColTrue = function(alpha) { var $x = ["ColTrue",1,alpha]; $x.__enum__ = format.png.Color; $x.toString = $estr; return $x; }
format.png.Color.ColIndexed = ["ColIndexed",2];
format.png.Color.ColIndexed.toString = $estr;
format.png.Color.ColIndexed.__enum__ = format.png.Color;
format.png.Chunk = $hxClasses["format.png.Chunk"] = { __ename__ : true, __constructs__ : ["CEnd","CHeader","CData","CPalette","CUnknown"] }
format.png.Chunk.CEnd = ["CEnd",0];
format.png.Chunk.CEnd.toString = $estr;
format.png.Chunk.CEnd.__enum__ = format.png.Chunk;
format.png.Chunk.CHeader = function(h) { var $x = ["CHeader",1,h]; $x.__enum__ = format.png.Chunk; $x.toString = $estr; return $x; }
format.png.Chunk.CData = function(b) { var $x = ["CData",2,b]; $x.__enum__ = format.png.Chunk; $x.toString = $estr; return $x; }
format.png.Chunk.CPalette = function(b) { var $x = ["CPalette",3,b]; $x.__enum__ = format.png.Chunk; $x.toString = $estr; return $x; }
format.png.Chunk.CUnknown = function(id,data) { var $x = ["CUnknown",4,id,data]; $x.__enum__ = format.png.Chunk; $x.toString = $estr; return $x; }
format.png.Reader = function(i) {
	this.i = i;
	i.set_bigEndian(true);
	this.checkCRC = true;
};
$hxClasses["format.png.Reader"] = format.png.Reader;
format.png.Reader.__name__ = ["format","png","Reader"];
format.png.Reader.prototype = {
	readChunk: function() {
		var dataLen = this.i.readInt32();
		var id = this.i.readString(4);
		var data = this.i.read(dataLen);
		var crc = this.i.readInt32();
		if(this.checkCRC) {
			var c = new haxe.crypto.Crc32();
			var _g = 0;
			while(_g < 4) {
				var i = _g++;
				c["byte"](HxOverrides.cca(id,i));
			}
			c.update(data,0,data.length);
			if(c.get() != crc) throw "CRC check failure";
		}
		switch(id) {
		case "IEND":
			return format.png.Chunk.CEnd;
		case "IHDR":
			return format.png.Chunk.CHeader(this.readHeader(new haxe.io.BytesInput(data)));
		case "IDAT":
			return format.png.Chunk.CData(data);
		case "PLTE":
			return format.png.Chunk.CPalette(data);
		default:
			return format.png.Chunk.CUnknown(id,data);
		}
	}
	,readHeader: function(i) {
		i.set_bigEndian(true);
		var width = i.readInt32();
		var height = i.readInt32();
		var colbits = i.readByte();
		var color = i.readByte();
		var color1;
		switch(color) {
		case 0:
			color1 = format.png.Color.ColGrey(false);
			break;
		case 2:
			color1 = format.png.Color.ColTrue(false);
			break;
		case 3:
			color1 = format.png.Color.ColIndexed;
			break;
		case 4:
			color1 = format.png.Color.ColGrey(true);
			break;
		case 6:
			color1 = format.png.Color.ColTrue(true);
			break;
		default:
			throw "Unknown color model " + color + ":" + colbits;
		}
		var compress = i.readByte();
		var filter = i.readByte();
		if(compress != 0 || filter != 0) throw "Invalid header";
		var interlace = i.readByte();
		if(interlace != 0 && interlace != 1) throw "Invalid header";
		return { width : width, height : height, colbits : colbits, color : color1, interlaced : interlace == 1};
	}
	,read: function() {
		var _g = 0;
		var _g1 = [137,80,78,71,13,10,26,10];
		while(_g < _g1.length) {
			var b = _g1[_g];
			++_g;
			if(this.i.readByte() != b) throw "Invalid header";
		}
		var l = new List();
		while(true) {
			var c = this.readChunk();
			l.add(c);
			if(c == format.png.Chunk.CEnd) break;
		}
		return l;
	}
	,__class__: format.png.Reader
}
format.png.Tools = function() { }
$hxClasses["format.png.Tools"] = format.png.Tools;
format.png.Tools.__name__ = ["format","png","Tools"];
format.png.Tools.getHeader = function(d) {
	var $it0 = d.iterator();
	while( $it0.hasNext() ) {
		var c = $it0.next();
		switch(c[1]) {
		case 1:
			var h = c[2];
			return h;
		default:
		}
	}
	throw "Header not found";
}
format.png.Tools.getPalette = function(d) {
	var $it0 = d.iterator();
	while( $it0.hasNext() ) {
		var c = $it0.next();
		switch(c[1]) {
		case 3:
			var b = c[2];
			return b;
		default:
		}
	}
	return null;
}
format.png.Tools.filter = function(data,x,y,stride,prev,p,numChannels) {
	if(numChannels == null) numChannels = 4;
	var b = data.b[p - stride];
	var c;
	if(x == 0 || y == 0) c = 0; else c = data.b[p - stride - numChannels];
	var k = prev + b - c;
	var pa = k - prev;
	if(pa < 0) pa = -pa;
	var pb = k - b;
	if(pb < 0) pb = -pb;
	var pc = k - c;
	if(pc < 0) pc = -pc;
	if(pa <= pb && pa <= pc) return prev; else if(pb <= pc) return b; else return c;
}
format.png.Tools.extract32 = function(d,bytes) {
	var h = format.png.Tools.getHeader(d);
	var bgra;
	if(bytes == null) bgra = haxe.io.Bytes.alloc(h.width * h.height * 4); else bgra = bytes;
	var data = null;
	var fullData = null;
	var $it0 = d.iterator();
	while( $it0.hasNext() ) {
		var c = $it0.next();
		switch(c[1]) {
		case 2:
			var b = c[2];
			if(fullData != null) fullData.add(b); else if(data == null) data = b; else {
				fullData = new haxe.io.BytesBuffer();
				fullData.add(data);
				fullData.add(b);
				data = null;
			}
			break;
		default:
		}
	}
	if(fullData != null) data = fullData.getBytes();
	if(data == null) throw "Data not found";
	data = format.tools.Inflate.run(data);
	var r = 0;
	var w = 0;
	switch(h.color[1]) {
	case 2:
		var pal = format.png.Tools.getPalette(d);
		if(pal == null) throw "PNG Palette is missing";
		var alpha = null;
		try {
			var $it1 = d.iterator();
			while( $it1.hasNext() ) {
				var t = $it1.next();
				switch(t[1]) {
				case 4:
					switch(t[2]) {
					case "tRNS":
						var data1 = t[3];
						alpha = data1;
						throw "__break__";
						break;
					default:
					}
					break;
				default:
				}
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		var width = h.width;
		var stride = width + 1;
		if(data.length < h.height * stride) throw "Not enough data";
		var vr;
		var vg;
		var vb;
		var va = 255;
		var _g1 = 0;
		var _g = h.height;
		while(_g1 < _g) {
			var y = _g1++;
			var f = data.get(r++);
			switch(f) {
			case 0:
				var _g2 = 0;
				while(_g2 < width) {
					var x = _g2++;
					var c = data.get(r++);
					vr = pal.b[c * 3];
					vg = pal.b[c * 3 + 1];
					vb = pal.b[c * 3 + 2];
					if(alpha != null) va = alpha.b[c];
					bgra.set(w++,vb);
					bgra.set(w++,vg);
					bgra.set(w++,vr);
					bgra.set(w++,va);
				}
				break;
			case 1:
				var cr = 0;
				var cg = 0;
				var cb = 0;
				var ca = 0;
				var _g2 = 0;
				while(_g2 < width) {
					var x = _g2++;
					var c = data.get(r++);
					vr = pal.b[c * 3];
					vg = pal.b[c * 3 + 1];
					vb = pal.b[c * 3 + 2];
					if(alpha != null) va = alpha.b[c];
					cb += vb;
					bgra.set(w++,cb);
					cg += vg;
					bgra.set(w++,cg);
					cr += vr;
					bgra.set(w++,cr);
					ca += va;
					bgra.set(w++,ca);
					bgra.set(w++,va);
				}
				break;
			case 2:
				var stride1;
				if(y == 0) stride1 = 0; else stride1 = width * 4;
				var _g2 = 0;
				while(_g2 < width) {
					var x = _g2++;
					var c = data.get(r++);
					vr = pal.b[c * 3];
					vg = pal.b[c * 3 + 1];
					vb = pal.b[c * 3 + 2];
					if(alpha != null) va = alpha.b[c];
					bgra.b[w] = vb + bgra.b[w - stride1] & 255;
					w++;
					bgra.b[w] = vg + bgra.b[w - stride1] & 255;
					w++;
					bgra.b[w] = vr + bgra.b[w - stride1] & 255;
					w++;
					bgra.b[w] = va + bgra.b[w - stride1] & 255;
					w++;
				}
				break;
			case 3:
				var cr = 0;
				var cg = 0;
				var cb = 0;
				var ca = 0;
				var stride1;
				if(y == 0) stride1 = 0; else stride1 = width * 4;
				var _g2 = 0;
				while(_g2 < width) {
					var x = _g2++;
					var c = data.get(r++);
					vr = pal.b[c * 3];
					vg = pal.b[c * 3 + 1];
					vb = pal.b[c * 3 + 2];
					if(alpha != null) va = alpha.b[c];
					cb = vb + (cb + bgra.b[w - stride1] >> 1) & 255;
					bgra.set(w++,cb);
					cg = vg + (cg + bgra.b[w - stride1] >> 1) & 255;
					bgra.set(w++,cg);
					cr = vr + (cr + bgra.b[w - stride1] >> 1) & 255;
					bgra.set(w++,cr);
					cr = va + (ca + bgra.b[w - stride1] >> 1) & 255;
					bgra.set(w++,ca);
				}
				break;
			case 4:
				var stride1 = width * 4;
				var cr = 0;
				var cg = 0;
				var cb = 0;
				var ca = 0;
				var _g2 = 0;
				while(_g2 < width) {
					var x = _g2++;
					var c = data.get(r++);
					vr = pal.b[c * 3];
					vg = pal.b[c * 3 + 1];
					vb = pal.b[c * 3 + 2];
					if(alpha != null) va = alpha.b[c];
					cb = format.png.Tools.filter(bgra,x,y,stride1,cb,w,null) + vb & 255;
					bgra.set(w++,cb);
					cg = format.png.Tools.filter(bgra,x,y,stride1,cg,w,null) + vg & 255;
					bgra.set(w++,cg);
					cr = format.png.Tools.filter(bgra,x,y,stride1,cr,w,null) + vr & 255;
					bgra.set(w++,cr);
					ca = format.png.Tools.filter(bgra,x,y,stride1,ca,w,null) + va & 255;
					bgra.set(w++,ca);
				}
				break;
			default:
				throw "Invalid filter " + f;
			}
		}
		break;
	case 0:
		var alpha = h.color[2];
		if(h.colbits != 8) throw "Unsupported color mode";
		var width = h.width;
		var stride;
		stride = (alpha?2:1) * width + 1;
		if(data.length < h.height * stride) throw "Not enough data";
		var _g1 = 0;
		var _g = h.height;
		while(_g1 < _g) {
			var y = _g1++;
			var f = data.get(r++);
			switch(f) {
			case 0:
				if(alpha) {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						var v = data.get(r++);
						bgra.set(w++,v);
						bgra.set(w++,v);
						bgra.set(w++,v);
						bgra.set(w++,data.get(r++));
					}
				} else {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						var v = data.get(r++);
						bgra.set(w++,v);
						bgra.set(w++,v);
						bgra.set(w++,v);
						bgra.set(w++,255);
					}
				}
				break;
			case 1:
				var cv = 0;
				var ca = 0;
				if(alpha) {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						cv += data.get(r++);
						bgra.set(w++,cv);
						bgra.set(w++,cv);
						bgra.set(w++,cv);
						ca += data.get(r++);
						bgra.set(w++,ca);
					}
				} else {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						cv += data.get(r++);
						bgra.set(w++,cv);
						bgra.set(w++,cv);
						bgra.set(w++,cv);
						bgra.set(w++,255);
					}
				}
				break;
			case 2:
				var stride1;
				if(y == 0) stride1 = 0; else stride1 = width * 4;
				if(alpha) {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						var v = data.get(r++) + bgra.b[w - stride1];
						bgra.set(w++,v);
						bgra.set(w++,v);
						bgra.set(w++,v);
						bgra.set(w++,data.get(r++) + bgra.b[w - stride1]);
					}
				} else {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						var v = data.get(r++) + bgra.b[w - stride1];
						bgra.set(w++,v);
						bgra.set(w++,v);
						bgra.set(w++,v);
						bgra.set(w++,255);
					}
				}
				break;
			case 3:
				var cv = 0;
				var ca = 0;
				var stride1;
				if(y == 0) stride1 = 0; else stride1 = width * 4;
				if(alpha) {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						cv = data.get(r++) + (cv + bgra.b[w - stride1] >> 1) & 255;
						bgra.set(w++,cv);
						bgra.set(w++,cv);
						bgra.set(w++,cv);
						ca = data.get(r++) + (ca + bgra.b[w - stride1] >> 1) & 255;
						bgra.set(w++,ca);
					}
				} else {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						cv = data.get(r++) + (cv + bgra.b[w - stride1] >> 1) & 255;
						bgra.set(w++,cv);
						bgra.set(w++,cv);
						bgra.set(w++,cv);
						bgra.set(w++,255);
					}
				}
				break;
			case 4:
				var stride1 = width * 4;
				var cv = 0;
				var ca = 0;
				if(alpha) {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						cv = format.png.Tools.filter(bgra,x,y,stride1,cv,w,null) + data.get(r++) & 255;
						bgra.set(w++,cv);
						bgra.set(w++,cv);
						bgra.set(w++,cv);
						ca = format.png.Tools.filter(bgra,x,y,stride1,ca,w,null) + data.get(r++) & 255;
						bgra.set(w++,ca);
					}
				} else {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						cv = format.png.Tools.filter(bgra,x,y,stride1,cv,w,null) + data.get(r++) & 255;
						bgra.set(w++,cv);
						bgra.set(w++,cv);
						bgra.set(w++,cv);
						bgra.set(w++,255);
					}
				}
				break;
			default:
				throw "Invalid filter " + f;
			}
		}
		break;
	case 1:
		var alpha = h.color[2];
		if(h.colbits != 8) throw "Unsupported color mode";
		var width = h.width;
		var stride;
		stride = (alpha?4:3) * width + 1;
		if(data.length < h.height * stride) throw "Not enough data";
		var _g1 = 0;
		var _g = h.height;
		while(_g1 < _g) {
			var y = _g1++;
			var f = data.get(r++);
			switch(f) {
			case 0:
				if(alpha) {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						bgra.set(w++,data.b[r + 2]);
						bgra.set(w++,data.b[r + 1]);
						bgra.set(w++,data.b[r]);
						bgra.set(w++,data.b[r + 3]);
						r += 4;
					}
				} else {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						bgra.set(w++,data.b[r + 2]);
						bgra.set(w++,data.b[r + 1]);
						bgra.set(w++,data.b[r]);
						bgra.set(w++,255);
						r += 3;
					}
				}
				break;
			case 1:
				var cr = 0;
				var cg = 0;
				var cb = 0;
				var ca = 0;
				if(alpha) {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						cb += data.b[r + 2];
						bgra.set(w++,cb);
						cg += data.b[r + 1];
						bgra.set(w++,cg);
						cr += data.b[r];
						bgra.set(w++,cr);
						ca += data.b[r + 3];
						bgra.set(w++,ca);
						r += 4;
					}
				} else {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						cb += data.b[r + 2];
						bgra.set(w++,cb);
						cg += data.b[r + 1];
						bgra.set(w++,cg);
						cr += data.b[r];
						bgra.set(w++,cr);
						bgra.set(w++,255);
						r += 3;
					}
				}
				break;
			case 2:
				var stride1;
				if(y == 0) stride1 = 0; else stride1 = width * 4;
				if(alpha) {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						bgra.b[w] = data.b[r + 2] + bgra.b[w - stride1] & 255;
						w++;
						bgra.b[w] = data.b[r + 1] + bgra.b[w - stride1] & 255;
						w++;
						bgra.b[w] = data.b[r] + bgra.b[w - stride1] & 255;
						w++;
						bgra.b[w] = data.b[r + 3] + bgra.b[w - stride1] & 255;
						w++;
						r += 4;
					}
				} else {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						bgra.b[w] = data.b[r + 2] + bgra.b[w - stride1] & 255;
						w++;
						bgra.b[w] = data.b[r + 1] + bgra.b[w - stride1] & 255;
						w++;
						bgra.b[w] = data.b[r] + bgra.b[w - stride1] & 255;
						w++;
						bgra.set(w++,255);
						r += 3;
					}
				}
				break;
			case 3:
				var cr = 0;
				var cg = 0;
				var cb = 0;
				var ca = 0;
				var stride1;
				if(y == 0) stride1 = 0; else stride1 = width * 4;
				if(alpha) {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						cb = data.b[r + 2] + (cb + bgra.b[w - stride1] >> 1) & 255;
						bgra.set(w++,cb);
						cg = data.b[r + 1] + (cg + bgra.b[w - stride1] >> 1) & 255;
						bgra.set(w++,cg);
						cr = data.b[r] + (cr + bgra.b[w - stride1] >> 1) & 255;
						bgra.set(w++,cr);
						ca = data.b[r + 3] + (ca + bgra.b[w - stride1] >> 1) & 255;
						bgra.set(w++,ca);
						r += 4;
					}
				} else {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						cb = data.b[r + 2] + (cb + bgra.b[w - stride1] >> 1) & 255;
						bgra.set(w++,cb);
						cg = data.b[r + 1] + (cg + bgra.b[w - stride1] >> 1) & 255;
						bgra.set(w++,cg);
						cr = data.b[r] + (cr + bgra.b[w - stride1] >> 1) & 255;
						bgra.set(w++,cr);
						bgra.set(w++,255);
						r += 3;
					}
				}
				break;
			case 4:
				var stride1 = width * 4;
				var cr = 0;
				var cg = 0;
				var cb = 0;
				var ca = 0;
				if(alpha) {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						cb = format.png.Tools.filter(bgra,x,y,stride1,cb,w,null) + data.b[r + 2] & 255;
						bgra.set(w++,cb);
						cg = format.png.Tools.filter(bgra,x,y,stride1,cg,w,null) + data.b[r + 1] & 255;
						bgra.set(w++,cg);
						cr = format.png.Tools.filter(bgra,x,y,stride1,cr,w,null) + data.b[r] & 255;
						bgra.set(w++,cr);
						ca = format.png.Tools.filter(bgra,x,y,stride1,ca,w,null) + data.b[r + 3] & 255;
						bgra.set(w++,ca);
						r += 4;
					}
				} else {
					var _g2 = 0;
					while(_g2 < width) {
						var x = _g2++;
						cb = format.png.Tools.filter(bgra,x,y,stride1,cb,w,null) + data.b[r + 2] & 255;
						bgra.set(w++,cb);
						cg = format.png.Tools.filter(bgra,x,y,stride1,cg,w,null) + data.b[r + 1] & 255;
						bgra.set(w++,cg);
						cr = format.png.Tools.filter(bgra,x,y,stride1,cr,w,null) + data.b[r] & 255;
						bgra.set(w++,cr);
						bgra.set(w++,255);
						r += 3;
					}
				}
				break;
			default:
				throw "Invalid filter " + f;
			}
		}
		break;
	}
	return bgra;
}
format.tools = {}
format.tools.Adler32 = function() {
	this.a1 = 1;
	this.a2 = 0;
};
$hxClasses["format.tools.Adler32"] = format.tools.Adler32;
format.tools.Adler32.__name__ = ["format","tools","Adler32"];
format.tools.Adler32.read = function(i) {
	var a = new format.tools.Adler32();
	var a2a = i.readByte();
	var a2b = i.readByte();
	var a1a = i.readByte();
	var a1b = i.readByte();
	a.a1 = a1a << 8 | a1b;
	a.a2 = a2a << 8 | a2b;
	return a;
}
format.tools.Adler32.prototype = {
	equals: function(a) {
		return a.a1 == this.a1 && a.a2 == this.a2;
	}
	,update: function(b,pos,len) {
		var a1 = this.a1;
		var a2 = this.a2;
		var _g1 = pos;
		var _g = pos + len;
		while(_g1 < _g) {
			var p = _g1++;
			var c = b.b[p];
			a1 = (a1 + c) % 65521;
			a2 = (a2 + a1) % 65521;
		}
		this.a1 = a1;
		this.a2 = a2;
	}
	,__class__: format.tools.Adler32
}
format.tools.Huffman = $hxClasses["format.tools.Huffman"] = { __ename__ : true, __constructs__ : ["Found","NeedBit","NeedBits"] }
format.tools.Huffman.Found = function(i) { var $x = ["Found",0,i]; $x.__enum__ = format.tools.Huffman; $x.toString = $estr; return $x; }
format.tools.Huffman.NeedBit = function(left,right) { var $x = ["NeedBit",1,left,right]; $x.__enum__ = format.tools.Huffman; $x.toString = $estr; return $x; }
format.tools.Huffman.NeedBits = function(n,table) { var $x = ["NeedBits",2,n,table]; $x.__enum__ = format.tools.Huffman; $x.toString = $estr; return $x; }
format.tools.HuffTools = function() {
};
$hxClasses["format.tools.HuffTools"] = format.tools.HuffTools;
format.tools.HuffTools.__name__ = ["format","tools","HuffTools"];
format.tools.HuffTools.prototype = {
	make: function(lengths,pos,nlengths,maxbits) {
		var counts = new Array();
		var tmp = new Array();
		if(maxbits > 32) throw "Invalid huffman";
		var _g = 0;
		while(_g < maxbits) {
			var i = _g++;
			counts.push(0);
			tmp.push(0);
		}
		var _g = 0;
		while(_g < nlengths) {
			var i = _g++;
			var p = lengths[i + pos];
			if(p >= maxbits) throw "Invalid huffman";
			counts[p]++;
		}
		var code = 0;
		var _g1 = 1;
		var _g = maxbits - 1;
		while(_g1 < _g) {
			var i = _g1++;
			code = code + counts[i] << 1;
			tmp[i] = code;
		}
		var bits = new haxe.ds.IntMap();
		var _g = 0;
		while(_g < nlengths) {
			var i = _g++;
			var l = lengths[i + pos];
			if(l != 0) {
				var n = tmp[l - 1];
				tmp[l - 1] = n + 1;
				bits.set(n << 5 | l,i);
			}
		}
		return this.treeCompress(format.tools.Huffman.NeedBit(this.treeMake(bits,maxbits,0,1),this.treeMake(bits,maxbits,1,1)));
	}
	,treeMake: function(bits,maxbits,v,len) {
		if(len > maxbits) throw "Invalid huffman";
		var idx = v << 5 | len;
		if(bits.exists(idx)) return format.tools.Huffman.Found(bits.get(idx));
		v <<= 1;
		len += 1;
		return format.tools.Huffman.NeedBit(this.treeMake(bits,maxbits,v,len),this.treeMake(bits,maxbits,v | 1,len));
	}
	,treeWalk: function(table,p,cd,d,t) {
		switch(t[1]) {
		case 1:
			var b = t[3];
			var a = t[2];
			if(d > 0) {
				this.treeWalk(table,p,cd + 1,d - 1,a);
				this.treeWalk(table,p | 1 << cd,cd + 1,d - 1,b);
			} else table[p] = this.treeCompress(t);
			break;
		default:
			table[p] = this.treeCompress(t);
		}
	}
	,treeCompress: function(t) {
		var d = this.treeDepth(t);
		if(d == 0) return t;
		if(d == 1) switch(t[1]) {
		case 1:
			var b = t[3];
			var a = t[2];
			return format.tools.Huffman.NeedBit(this.treeCompress(a),this.treeCompress(b));
		default:
			throw "assert";
		}
		var size = 1 << d;
		var table = new Array();
		var _g = 0;
		while(_g < size) {
			var i = _g++;
			table.push(format.tools.Huffman.Found(-1));
		}
		this.treeWalk(table,0,0,d,t);
		return format.tools.Huffman.NeedBits(d,table);
	}
	,treeDepth: function(t) {
		switch(t[1]) {
		case 0:
			return 0;
		case 2:
			throw "assert";
			break;
		case 1:
			var b = t[3];
			var a = t[2];
			var da = this.treeDepth(a);
			var db = this.treeDepth(b);
			return 1 + (da < db?da:db);
		}
	}
	,__class__: format.tools.HuffTools
}
format.tools.Inflate = function() { }
$hxClasses["format.tools.Inflate"] = format.tools.Inflate;
format.tools.Inflate.__name__ = ["format","tools","Inflate"];
format.tools.Inflate.run = function(bytes) {
	return format.tools.InflateImpl.run(new haxe.io.BytesInput(bytes));
}
format.tools._InflateImpl = {}
format.tools._InflateImpl.Window = function(hasCrc) {
	this.buffer = haxe.io.Bytes.alloc(65536);
	this.pos = 0;
	if(hasCrc) this.crc = new format.tools.Adler32();
};
$hxClasses["format.tools._InflateImpl.Window"] = format.tools._InflateImpl.Window;
format.tools._InflateImpl.Window.__name__ = ["format","tools","_InflateImpl","Window"];
format.tools._InflateImpl.Window.prototype = {
	checksum: function() {
		if(this.crc != null) this.crc.update(this.buffer,0,this.pos);
		return this.crc;
	}
	,available: function() {
		return this.pos;
	}
	,getLastChar: function() {
		return this.buffer.b[this.pos - 1];
	}
	,addByte: function(c) {
		if(this.pos == 65536) this.slide();
		this.buffer.b[this.pos] = c & 255;
		this.pos++;
	}
	,addBytes: function(b,p,len) {
		if(this.pos + len > 65536) this.slide();
		this.buffer.blit(this.pos,b,p,len);
		this.pos += len;
	}
	,slide: function() {
		if(this.crc != null) this.crc.update(this.buffer,0,32768);
		var b = haxe.io.Bytes.alloc(65536);
		this.pos -= 32768;
		b.blit(0,this.buffer,32768,this.pos);
		this.buffer = b;
	}
	,__class__: format.tools._InflateImpl.Window
}
format.tools._InflateImpl.State = $hxClasses["format.tools._InflateImpl.State"] = { __ename__ : true, __constructs__ : ["Head","Block","CData","Flat","Crc","Dist","DistOne","Done"] }
format.tools._InflateImpl.State.Head = ["Head",0];
format.tools._InflateImpl.State.Head.toString = $estr;
format.tools._InflateImpl.State.Head.__enum__ = format.tools._InflateImpl.State;
format.tools._InflateImpl.State.Block = ["Block",1];
format.tools._InflateImpl.State.Block.toString = $estr;
format.tools._InflateImpl.State.Block.__enum__ = format.tools._InflateImpl.State;
format.tools._InflateImpl.State.CData = ["CData",2];
format.tools._InflateImpl.State.CData.toString = $estr;
format.tools._InflateImpl.State.CData.__enum__ = format.tools._InflateImpl.State;
format.tools._InflateImpl.State.Flat = ["Flat",3];
format.tools._InflateImpl.State.Flat.toString = $estr;
format.tools._InflateImpl.State.Flat.__enum__ = format.tools._InflateImpl.State;
format.tools._InflateImpl.State.Crc = ["Crc",4];
format.tools._InflateImpl.State.Crc.toString = $estr;
format.tools._InflateImpl.State.Crc.__enum__ = format.tools._InflateImpl.State;
format.tools._InflateImpl.State.Dist = ["Dist",5];
format.tools._InflateImpl.State.Dist.toString = $estr;
format.tools._InflateImpl.State.Dist.__enum__ = format.tools._InflateImpl.State;
format.tools._InflateImpl.State.DistOne = ["DistOne",6];
format.tools._InflateImpl.State.DistOne.toString = $estr;
format.tools._InflateImpl.State.DistOne.__enum__ = format.tools._InflateImpl.State;
format.tools._InflateImpl.State.Done = ["Done",7];
format.tools._InflateImpl.State.Done.toString = $estr;
format.tools._InflateImpl.State.Done.__enum__ = format.tools._InflateImpl.State;
format.tools.InflateImpl = function(i,header,crc) {
	if(crc == null) crc = true;
	if(header == null) header = true;
	this["final"] = false;
	this.htools = new format.tools.HuffTools();
	this.huffman = this.buildFixedHuffman();
	this.huffdist = null;
	this.len = 0;
	this.dist = 0;
	if(header) this.state = format.tools._InflateImpl.State.Head; else this.state = format.tools._InflateImpl.State.Block;
	this.input = i;
	this.bits = 0;
	this.nbits = 0;
	this.needed = 0;
	this.output = null;
	this.outpos = 0;
	this.lengths = new Array();
	var _g = 0;
	while(_g < 19) {
		var i1 = _g++;
		this.lengths.push(-1);
	}
	this["window"] = new format.tools._InflateImpl.Window(crc);
};
$hxClasses["format.tools.InflateImpl"] = format.tools.InflateImpl;
format.tools.InflateImpl.__name__ = ["format","tools","InflateImpl"];
format.tools.InflateImpl.run = function(i,bufsize) {
	if(bufsize == null) bufsize = 65536;
	var buf = haxe.io.Bytes.alloc(bufsize);
	var output = new haxe.io.BytesBuffer();
	var inflate = new format.tools.InflateImpl(i);
	while(true) {
		var len = inflate.readBytes(buf,0,bufsize);
		output.addBytes(buf,0,len);
		if(len < bufsize) break;
	}
	return output.getBytes();
}
format.tools.InflateImpl.prototype = {
	inflateLoop: function() {
		var _g = this;
		switch(_g.state[1]) {
		case 0:
			var cmf = this.input.readByte();
			var cm = cmf & 15;
			var cinfo = cmf >> 4;
			if(cm != 8 || cinfo != 7) throw "Invalid data";
			var flg = this.input.readByte();
			var fdict = (flg & 32) != 0;
			if(((cmf << 8) + flg) % 31 != 0) throw "Invalid data";
			if(fdict) throw "Unsupported dictionary";
			this.state = format.tools._InflateImpl.State.Block;
			return true;
		case 4:
			var calc = this["window"].checksum();
			if(calc == null) {
				this.state = format.tools._InflateImpl.State.Done;
				return true;
			}
			var crc = format.tools.Adler32.read(this.input);
			if(!calc.equals(crc)) throw "Invalid CRC";
			this.state = format.tools._InflateImpl.State.Done;
			return true;
		case 7:
			return false;
		case 1:
			this["final"] = this.getBit();
			var _g1 = this.getBits(2);
			switch(_g1) {
			case 0:
				this.len = this.input.readUInt16();
				var nlen = this.input.readUInt16();
				if(nlen != 65535 - this.len) throw "Invalid data";
				this.state = format.tools._InflateImpl.State.Flat;
				var r = this.inflateLoop();
				this.resetBits();
				return r;
			case 1:
				this.huffman = this.buildFixedHuffman();
				this.huffdist = null;
				this.state = format.tools._InflateImpl.State.CData;
				return true;
			case 2:
				var hlit = this.getBits(5) + 257;
				var hdist = this.getBits(5) + 1;
				var hclen = this.getBits(4) + 4;
				var _g2 = 0;
				while(_g2 < hclen) {
					var i = _g2++;
					this.lengths[format.tools.InflateImpl.CODE_LENGTHS_POS[i]] = this.getBits(3);
				}
				var _g2 = hclen;
				while(_g2 < 19) {
					var i = _g2++;
					this.lengths[format.tools.InflateImpl.CODE_LENGTHS_POS[i]] = 0;
				}
				this.huffman = this.htools.make(this.lengths,0,19,8);
				var lengths = new Array();
				var _g3 = 0;
				var _g2 = hlit + hdist;
				while(_g3 < _g2) {
					var i = _g3++;
					lengths.push(0);
				}
				this.inflateLengths(lengths,hlit + hdist);
				this.huffdist = this.htools.make(lengths,hlit,hdist,16);
				this.huffman = this.htools.make(lengths,0,hlit,16);
				this.state = format.tools._InflateImpl.State.CData;
				return true;
			default:
				throw "Invalid data";
			}
			break;
		case 3:
			var rlen;
			if(this.len < this.needed) rlen = this.len; else rlen = this.needed;
			var bytes = this.input.read(rlen);
			this.len -= rlen;
			this.addBytes(bytes,0,rlen);
			if(this.len == 0) {
				if(this["final"]) this.state = format.tools._InflateImpl.State.Crc; else this.state = format.tools._InflateImpl.State.Block;
			}
			return this.needed > 0;
		case 6:
			var rlen;
			if(this.len < this.needed) rlen = this.len; else rlen = this.needed;
			this.addDistOne(rlen);
			this.len -= rlen;
			if(this.len == 0) this.state = format.tools._InflateImpl.State.CData;
			return this.needed > 0;
		case 5:
			while(this.len > 0 && this.needed > 0) {
				var rdist;
				if(this.len < this.dist) rdist = this.len; else rdist = this.dist;
				var rlen;
				if(this.needed < rdist) rlen = this.needed; else rlen = rdist;
				this.addDist(this.dist,rlen);
				this.len -= rlen;
			}
			if(this.len == 0) this.state = format.tools._InflateImpl.State.CData;
			return this.needed > 0;
		case 2:
			var n = this.applyHuffman(this.huffman);
			if(n < 256) {
				this.addByte(n);
				return this.needed > 0;
			} else if(n == 256) {
				if(this["final"]) this.state = format.tools._InflateImpl.State.Crc; else this.state = format.tools._InflateImpl.State.Block;
				return true;
			} else {
				n -= 257;
				var extra_bits = format.tools.InflateImpl.LEN_EXTRA_BITS_TBL[n];
				if(extra_bits == -1) throw "Invalid data";
				this.len = format.tools.InflateImpl.LEN_BASE_VAL_TBL[n] + this.getBits(extra_bits);
				var dist_code;
				if(this.huffdist == null) dist_code = this.getRevBits(5); else dist_code = this.applyHuffman(this.huffdist);
				extra_bits = format.tools.InflateImpl.DIST_EXTRA_BITS_TBL[dist_code];
				if(extra_bits == -1) throw "Invalid data";
				this.dist = format.tools.InflateImpl.DIST_BASE_VAL_TBL[dist_code] + this.getBits(extra_bits);
				if(this.dist > this["window"].available()) throw "Invalid data";
				if(this.dist == 1) this.state = format.tools._InflateImpl.State.DistOne; else this.state = format.tools._InflateImpl.State.Dist;
				return true;
			}
			break;
		}
	}
	,inflateLengths: function(a,max) {
		var i = 0;
		var prev = 0;
		while(i < max) {
			var n = this.applyHuffman(this.huffman);
			switch(n) {
			case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:
				prev = n;
				a[i] = n;
				i++;
				break;
			case 16:
				var end = i + 3 + this.getBits(2);
				if(end > max) throw "Invalid data";
				while(i < end) {
					a[i] = prev;
					i++;
				}
				break;
			case 17:
				i += 3 + this.getBits(3);
				if(i > max) throw "Invalid data";
				break;
			case 18:
				i += 11 + this.getBits(7);
				if(i > max) throw "Invalid data";
				break;
			default:
				throw "Invalid data";
			}
		}
	}
	,applyHuffman: function(h) {
		switch(h[1]) {
		case 0:
			var n = h[2];
			return n;
		case 1:
			var b = h[3];
			var a = h[2];
			return this.applyHuffman(this.getBit()?b:a);
		case 2:
			var tbl = h[3];
			var n = h[2];
			return this.applyHuffman(tbl[this.getBits(n)]);
		}
	}
	,addDist: function(d,len) {
		this.addBytes(this["window"].buffer,this["window"].pos - d,len);
	}
	,addDistOne: function(n) {
		var c = this["window"].getLastChar();
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			this.addByte(c);
		}
	}
	,addByte: function(b) {
		this["window"].addByte(b);
		this.output.b[this.outpos] = b & 255;
		this.needed--;
		this.outpos++;
	}
	,addBytes: function(b,p,len) {
		this["window"].addBytes(b,p,len);
		this.output.blit(this.outpos,b,p,len);
		this.needed -= len;
		this.outpos += len;
	}
	,resetBits: function() {
		this.bits = 0;
		this.nbits = 0;
	}
	,getRevBits: function(n) {
		if(n == 0) return 0; else if(this.getBit()) return 1 << n - 1 | this.getRevBits(n - 1); else return this.getRevBits(n - 1);
	}
	,getBit: function() {
		if(this.nbits == 0) {
			this.nbits = 8;
			this.bits = this.input.readByte();
		}
		var b = (this.bits & 1) == 1;
		this.nbits--;
		this.bits >>= 1;
		return b;
	}
	,getBits: function(n) {
		while(this.nbits < n) {
			this.bits |= this.input.readByte() << this.nbits;
			this.nbits += 8;
		}
		var b = this.bits & (1 << n) - 1;
		this.nbits -= n;
		this.bits >>= n;
		return b;
	}
	,readBytes: function(b,pos,len) {
		this.needed = len;
		this.outpos = pos;
		this.output = b;
		if(len > 0) while(this.inflateLoop()) {
		}
		return len - this.needed;
	}
	,buildFixedHuffman: function() {
		if(format.tools.InflateImpl.FIXED_HUFFMAN != null) return format.tools.InflateImpl.FIXED_HUFFMAN;
		var a = new Array();
		var _g = 0;
		while(_g < 288) {
			var n = _g++;
			a.push(n <= 143?8:n <= 255?9:n <= 279?7:8);
		}
		format.tools.InflateImpl.FIXED_HUFFMAN = this.htools.make(a,0,288,10);
		return format.tools.InflateImpl.FIXED_HUFFMAN;
	}
	,__class__: format.tools.InflateImpl
}
h2d.Sprite = function(parent) {
	this.matA = 1;
	this.matB = 0;
	this.matC = 0;
	this.matD = 1;
	this.absX = 0;
	this.absY = 0;
	this.x = 0;
	this.posChanged = true;
	0;
	this.y = 0;
	this.posChanged = true;
	0;
	this.scaleX = 1;
	this.posChanged = true;
	1;
	this.scaleY = 1;
	this.posChanged = true;
	1;
	this.rotation = 0;
	this.posChanged = true;
	0;
	this.posChanged = false;
	this.visible = true;
	this.childs = [];
	if(parent != null) parent.addChild(this);
};
$hxClasses["h2d.Sprite"] = h2d.Sprite;
h2d.Sprite.__name__ = ["h2d","Sprite"];
h2d.Sprite.prototype = {
	scale: function(v) {
		var _g = this;
		_g.set_scaleX(_g.scaleX * v);
		var _g = this;
		_g.set_scaleY(_g.scaleY * v);
	}
	,rotate: function(v) {
		var _g = this;
		_g.set_rotation(_g.rotation + v);
	}
	,set_rotation: function(v) {
		this.rotation = v;
		this.posChanged = true;
		return v;
	}
	,set_scaleY: function(v) {
		this.scaleY = v;
		this.posChanged = true;
		return v;
	}
	,set_scaleX: function(v) {
		this.scaleX = v;
		this.posChanged = true;
		return v;
	}
	,set_y: function(v) {
		this.y = v;
		this.posChanged = true;
		return v;
	}
	,set_x: function(v) {
		this.x = v;
		this.posChanged = true;
		return v;
	}
	,drawRec: function(ctx) {
		if(!this.visible) return;
		if(this.posChanged) {
			this.calcAbsPos();
			var _g = 0;
			var _g1 = this.childs;
			while(_g < _g1.length) {
				var c = _g1[_g];
				++_g;
				c.posChanged = true;
			}
			this.posChanged = false;
		}
		this.draw(ctx);
		var _g = 0;
		var _g1 = this.childs;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			c.drawRec(ctx);
		}
	}
	,calcAbsPos: function() {
		if(this.parent == null) {
			var cr;
			var sr;
			if(this.rotation == 0) {
				cr = 1.;
				sr = 0.;
				this.matA = this.scaleX;
				this.matB = 0;
				this.matC = 0;
				this.matD = this.scaleY;
			} else {
				cr = Math.cos(this.rotation);
				sr = Math.sin(this.rotation);
				this.matA = this.scaleX * cr;
				this.matB = this.scaleX * -sr;
				this.matC = this.scaleY * sr;
				this.matD = this.scaleY * cr;
			}
			this.absX = this.x;
			this.absY = this.y;
		} else {
			if(this.rotation == 0) {
				this.matA = this.scaleX * this.parent.matA;
				this.matB = this.scaleX * this.parent.matB;
				this.matC = this.scaleY * this.parent.matC;
				this.matD = this.scaleY * this.parent.matD;
			} else {
				var cr = Math.cos(this.rotation);
				var sr = Math.sin(this.rotation);
				var tmpA = this.scaleX * cr;
				var tmpB = this.scaleX * -sr;
				var tmpC = this.scaleY * sr;
				var tmpD = this.scaleY * cr;
				this.matA = tmpA * this.parent.matA + tmpB * this.parent.matC;
				this.matB = tmpA * this.parent.matB + tmpB * this.parent.matD;
				this.matC = tmpC * this.parent.matA + tmpD * this.parent.matC;
				this.matD = tmpC * this.parent.matB + tmpD * this.parent.matD;
			}
			this.absX = this.x * this.parent.matA + this.y * this.parent.matC + this.parent.absX;
			this.absY = this.x * this.parent.matB + this.y * this.parent.matD + this.parent.absY;
		}
	}
	,sync: function(ctx) {
		var changed = this.posChanged;
		if(changed) {
			this.calcAbsPos();
			this.posChanged = false;
		}
		this.lastFrame = ctx.frame;
		var p = 0;
		var len = this.childs.length;
		while(p < len) {
			var c = this.childs[p];
			if(c == null) break;
			if(c.lastFrame != ctx.frame) {
				if(changed) c.posChanged = true;
				c.sync(ctx);
			}
			if(this.childs[p] != c) {
				p = 0;
				len = this.childs.length;
			} else p++;
		}
	}
	,draw: function(ctx) {
	}
	,remove: function() {
		if(this.parent != null) this.parent.removeChild(this);
	}
	,removeChild: function(s) {
		if(HxOverrides.remove(this.childs,s)) {
			s.parent = null;
			if(s.allocated) s.onDelete();
		}
	}
	,onDelete: function() {
		this.allocated = false;
		var _g = 0;
		var _g1 = this.childs;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			c.onDelete();
		}
	}
	,onAlloc: function() {
		this.allocated = true;
		var _g = 0;
		var _g1 = this.childs;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			c.onAlloc();
		}
	}
	,onParentChanged: function() {
	}
	,addChildAt: function(s,pos) {
		if(pos < 0) pos = 0;
		if(pos > this.childs.length) pos = this.childs.length;
		var p = this;
		while(p != null) {
			if(p == s) throw "Recursive addChild";
			p = p.parent;
		}
		if(s.parent != null) {
			var old = s.allocated;
			s.allocated = false;
			s.parent.removeChild(s);
			s.allocated = old;
		}
		this.childs.splice(pos,0,s);
		s.parent = this;
		s.posChanged = true;
		if(this.allocated) {
			if(!s.allocated) s.onAlloc(); else s.onParentChanged();
		} else if(s.allocated) s.onDelete();
	}
	,addChild: function(s) {
		this.addChildAt(s,this.childs.length);
	}
	,__class__: h2d.Sprite
}
h2d.Drawable = function(parent) {
	h2d.Sprite.call(this,parent);
	this.shader = new h2d._Drawable.DrawableShader();
	this.shader.alpha = 1;
	this.shader.zValue = 0;
	this.writeAlpha = true;
	this.set_blendMode(h2d.BlendMode.Normal);
};
$hxClasses["h2d.Drawable"] = h2d.Drawable;
h2d.Drawable.__name__ = ["h2d","Drawable"];
h2d.Drawable.__super__ = h2d.Sprite;
h2d.Drawable.prototype = $extend(h2d.Sprite.prototype,{
	setupShader: function(engine,tile,options) {
		var core = h2d.Tools.getCoreObjects();
		var shader = this.shader;
		var mat = core.tmpMaterial;
		if(tile == null) tile = new h2d.Tile(core.getEmptyTexture(),0,0,5,5);
		var _g = this;
		switch(_g.blendMode[1]) {
		case 0:
			mat.blend(h3d.mat.Blend.SrcAlpha,h3d.mat.Blend.OneMinusSrcAlpha);
			break;
		case 1:
			mat.blend(h3d.mat.Blend.One,h3d.mat.Blend.Zero);
			break;
		case 2:
			mat.blend(h3d.mat.Blend.SrcAlpha,h3d.mat.Blend.One);
			break;
		case 3:
			mat.blend(h3d.mat.Blend.DstColor,h3d.mat.Blend.OneMinusSrcAlpha);
			break;
		case 4:
			mat.blend(h3d.mat.Blend.Zero,h3d.mat.Blend.OneMinusSrcAlpha);
			break;
		case 5:
			mat.blend(h3d.mat.Blend.Zero,h3d.mat.Blend.One);
			break;
		}
		if((options & 1) != 0) {
			var tmp = core.tmpSize;
			tmp.x = tile.width + 0.1;
			tmp.y = tile.height + 0.1;
			tmp.z = 1;
			shader.size = tmp;
		}
		if((options & 4) != 0) {
			core.tmpUVPos.x = tile.u;
			core.tmpUVPos.y = tile.v;
			shader.uvPos = core.tmpUVPos;
		}
		if((options & 2) != 0) {
			core.tmpUVScale.x = tile.u2 - tile.u;
			core.tmpUVScale.y = tile.v2 - tile.v;
			shader.uvScale = core.tmpUVScale;
		}
		if(shader.hasAlphaMap) {
			shader.alphaMap = this.alphaMap.getTexture();
			shader.alphaUV = new h3d.Vector(this.alphaMap.u,this.alphaMap.v,(this.alphaMap.u2 - this.alphaMap.u) / tile.u2,(this.alphaMap.v2 - this.alphaMap.v) / tile.v2);
		}
		if(shader.hasMultMap) {
			shader.multMap = this.multiplyMap.getTexture();
			shader.multUV = new h3d.Vector(this.multiplyMap.u,this.multiplyMap.v,(this.multiplyMap.u2 - this.multiplyMap.u) / tile.u2,(this.multiplyMap.v2 - this.multiplyMap.v) / tile.v2);
		}
		var cm;
		if(this.writeAlpha) cm = 15; else cm = 7;
		if(mat.colorMask != cm) mat.set_colorMask(cm);
		var tmp = core.tmpMatA;
		tmp.x = this.matA;
		tmp.y = this.matC;
		tmp.z = this.absX + tile.dx * this.matA + tile.dy * this.matC;
		shader.matA = tmp;
		var tmp1 = core.tmpMatB;
		tmp1.x = this.matB;
		tmp1.y = this.matD;
		tmp1.z = this.absY + tile.dx * this.matB + tile.dy * this.matD;
		shader.matB = tmp1;
		shader.tex = tile.getTexture();
		mat.shader = shader;
		engine.selectMaterial(mat);
	}
	,drawTile: function(engine,tile) {
		this.setupShader(engine,tile,7);
		engine.renderBuffer(h2d.Tools.getCoreObjects().planBuffer,engine.mem.quadIndexes,2,0,-1);
	}
	,set_colorKey: function(v) {
		this.shader.hasColorKey = true;
		return this.shader.colorKey = v;
	}
	,set_color: function(m) {
		return this.shader.colorMul = m;
	}
	,set_blendMode: function(b) {
		this.blendMode = b;
		return b;
	}
	,set_alpha: function(v) {
		this.shader.alpha = v;
		this.shader.hasAlpha = v < 1;
		return v;
	}
	,__class__: h2d.Drawable
});
h2d.Anim = function(parent) {
	this.loop = true;
	h2d.Drawable.call(this,parent);
	this.frames = [];
	this.currentFrame = 0;
	this.speed = 1.;
};
$hxClasses["h2d.Anim"] = h2d.Anim;
h2d.Anim.__name__ = ["h2d","Anim"];
h2d.Anim.__super__ = h2d.Drawable;
h2d.Anim.prototype = $extend(h2d.Drawable.prototype,{
	draw: function(ctx) {
		var t = this.getFrame();
		if(t != null) this.drawTile(ctx.engine,t);
	}
	,getFrame: function() {
		return this.frames[this.currentFrame | 0];
	}
	,sync: function(ctx) {
		this.currentFrame += this.speed * ctx.elapsedTime;
		if(this.loop) this.currentFrame %= this.frames.length; else if(this.currentFrame >= this.frames.length) this.currentFrame = this.frames.length - 0.00001;
	}
	,play: function(frames) {
		this.frames = frames;
		this.currentFrame = 0;
	}
	,__class__: h2d.Anim
});
h2d.Bitmap = function(tile,parent) {
	h2d.Drawable.call(this,parent);
	this.tile = tile;
};
$hxClasses["h2d.Bitmap"] = h2d.Bitmap;
h2d.Bitmap.__name__ = ["h2d","Bitmap"];
h2d.Bitmap.__super__ = h2d.Drawable;
h2d.Bitmap.prototype = $extend(h2d.Drawable.prototype,{
	draw: function(ctx) {
		this.drawTile(ctx.engine,this.tile);
	}
	,__class__: h2d.Bitmap
});
h2d.BlendMode = $hxClasses["h2d.BlendMode"] = { __ename__ : true, __constructs__ : ["Normal","None","Add","Multiply","Erase","Hide"] }
h2d.BlendMode.Normal = ["Normal",0];
h2d.BlendMode.Normal.toString = $estr;
h2d.BlendMode.Normal.__enum__ = h2d.BlendMode;
h2d.BlendMode.None = ["None",1];
h2d.BlendMode.None.toString = $estr;
h2d.BlendMode.None.__enum__ = h2d.BlendMode;
h2d.BlendMode.Add = ["Add",2];
h2d.BlendMode.Add.toString = $estr;
h2d.BlendMode.Add.__enum__ = h2d.BlendMode;
h2d.BlendMode.Multiply = ["Multiply",3];
h2d.BlendMode.Multiply.toString = $estr;
h2d.BlendMode.Multiply.__enum__ = h2d.BlendMode;
h2d.BlendMode.Erase = ["Erase",4];
h2d.BlendMode.Erase.toString = $estr;
h2d.BlendMode.Erase.__enum__ = h2d.BlendMode;
h2d.BlendMode.Hide = ["Hide",5];
h2d.BlendMode.Hide.toString = $estr;
h2d.BlendMode.Hide.__enum__ = h2d.BlendMode;
var h3d = {}
h3d.impl = {}
h3d.impl.Shader = function() {
};
$hxClasses["h3d.impl.Shader"] = h3d.impl.Shader;
h3d.impl.Shader.__name__ = ["h3d","impl","Shader"];
h3d.impl.Shader.prototype = {
	getConstants: function(vertex) {
		return "";
	}
	,customSetup: function(driver) {
	}
	,__class__: h3d.impl.Shader
}
h2d._Drawable = {}
h2d._Drawable.DrawableShader = function() {
	h3d.impl.Shader.call(this);
};
$hxClasses["h2d._Drawable.DrawableShader"] = h2d._Drawable.DrawableShader;
h2d._Drawable.DrawableShader.__name__ = ["h2d","_Drawable","DrawableShader"];
h2d._Drawable.DrawableShader.__super__ = h3d.impl.Shader;
h2d._Drawable.DrawableShader.prototype = $extend(h3d.impl.Shader.prototype,{
	getConstants: function(vertex) {
		var cst = [];
		if(vertex) {
			if(this.size != null) cst.push("#define hasSize");
			if(this.uvScale != null) cst.push("#define hasUVScale");
			if(this.uvPos != null) cst.push("#define hasUVPos");
		} else {
			if(this.killAlpha) cst.push("#define killAlpha");
			if(this.hasColorKey) cst.push("#define hasColorKey");
			if(this.hasAlpha) cst.push("#define hasAlpha");
			if(this.colorMatrix != null) cst.push("#define hasColorMatrix");
			if(this.colorMul != null) cst.push("#define hasColorMul");
			if(this.colorAdd != null) cst.push("#define hasColorAdd");
		}
		if(this.hasVertexAlpha) cst.push("#define hasVertexAlpha");
		return cst.join("\n");
	}
	,customSetup: function(driver) {
		driver.setupTexture(this.tex,h3d.mat.MipMap.None,this.filter?h3d.mat.Filter.Linear:h3d.mat.Filter.Nearest,this.tileWrap?h3d.mat.Wrap.Repeat:h3d.mat.Wrap.Clamp);
	}
	,__class__: h2d._Drawable.DrawableShader
});
h2d.Tile = function(tex,x,y,w,h,dx,dy) {
	if(dy == null) dy = 0;
	if(dx == null) dx = 0;
	this.innerTex = tex;
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.dx = dx;
	this.dy = dy;
	if(tex != null) this.setTexture(tex);
};
$hxClasses["h2d.Tile"] = h2d.Tile;
h2d.Tile.__name__ = ["h2d","Tile"];
h2d.Tile.fromColor = function(color,width,height,allocPos) {
	if(height == null) height = 1;
	if(width == null) width = 1;
	var t = h2d.Tile.COLOR_CACHE.get(color);
	if(t == null || t.isDisposed()) {
		t = h3d.Engine.getCurrent().mem.allocTexture(1,1,false,allocPos);
		var bmp = haxe.io.Bytes.alloc(4);
		bmp.b[0] = color & 255 & 255;
		bmp.b[1] = color >> 8 & 255 & 255;
		bmp.b[2] = color >> 16 & 255 & 255;
		bmp.b[3] = color >>> 24 & 255;
		t.uploadBytes(bmp);
		t.onContextLost = function() {
			t.uploadBytes(bmp);
		};
		h2d.Tile.COLOR_CACHE.set(color,t);
	}
	var t1 = new h2d.Tile(t,0,0,1,1);
	t1.width = width;
	t1.height = height;
	return t1;
}
h2d.Tile.fromTexture = function(t) {
	return new h2d.Tile(t,0,0,t.width,t.height);
}
h2d.Tile.prototype = {
	split: function(frames,vertical) {
		if(vertical == null) vertical = false;
		var tl = [];
		if(vertical) {
			var stride = this.height / frames | 0;
			var _g = 0;
			while(_g < frames) {
				var i = _g++;
				tl.push(this.sub(0,i * stride,this.width,stride));
			}
		} else {
			var stride = this.width / frames | 0;
			var _g = 0;
			while(_g < frames) {
				var i = _g++;
				tl.push(this.sub(i * stride,0,stride,this.height));
			}
		}
		return tl;
	}
	,dispose: function() {
		if(this.innerTex != null) this.innerTex.dispose();
		this.innerTex = null;
	}
	,scaleToSize: function(w,h) {
		this.width = w;
		this.height = h;
	}
	,center: function(dx,dy) {
		return this.sub(0,0,this.width,this.height,-dx,-dy);
	}
	,sub: function(x,y,w,h,dx,dy) {
		if(dy == null) dy = 0;
		if(dx == null) dx = 0;
		return new h2d.Tile(this.innerTex,this.x + x,this.y + y,w,h,dx,dy);
	}
	,setTexture: function(tex) {
		this.innerTex = tex;
		if(tex != null) {
			this.u = (this.x + 0.001) / tex.width;
			this.v = (this.y + 0.001) / tex.height;
			this.u2 = (this.x + this.width - 0.001) / tex.width;
			this.v2 = (this.y + this.height - 0.001) / tex.height;
		}
	}
	,getTexture: function() {
		if(this.innerTex == null || this.innerTex.isDisposed()) return h2d.Tools.getCoreObjects().getEmptyTexture();
		return this.innerTex;
	}
	,__class__: h2d.Tile
}
h2d.Font = function(name,size,aa,charset) {
	if(aa == null) aa = true;
	h2d.Tile.call(this,null,0,0,0,0);
	if(charset == null) charset = h2d.Font.DEFAULT_CHARSET;
	this.name = name;
	this.size = size;
	this.charset = charset;
	this.aa = aa;
	this.init();
};
$hxClasses["h2d.Font"] = h2d.Font;
h2d.Font.__name__ = ["h2d","Font"];
h2d.Font.__super__ = h2d.Tile;
h2d.Font.prototype = $extend(h2d.Tile.prototype,{
	init: function() {
		var _g = this;
		this.glyphs = [];
		console.log("TODO");
		var _g1 = 1;
		while(_g1 < 94) {
			var i = _g1++;
			var code = 65281 + i;
			var to = 33 + i;
			if(_g.glyphs[code] == null) _g.glyphs[code] = _g.glyphs[to]; else if(_g.glyphs[to] == null) _g.glyphs[to] = _g.glyphs[code];
		}
		if(_g.glyphs[12288] == null) _g.glyphs[12288] = _g.glyphs[32]; else if(_g.glyphs[32] == null) _g.glyphs[32] = _g.glyphs[12288];
		if(_g.glyphs[160] == null) _g.glyphs[160] = _g.glyphs[32]; else if(_g.glyphs[32] == null) _g.glyphs[32] = _g.glyphs[160];
		if(_g.glyphs[171] == null) _g.glyphs[171] = _g.glyphs[34]; else if(_g.glyphs[34] == null) _g.glyphs[34] = _g.glyphs[171];
		if(_g.glyphs[187] == null) _g.glyphs[187] = _g.glyphs[34]; else if(_g.glyphs[34] == null) _g.glyphs[34] = _g.glyphs[187];
		if(_g.glyphs[8220] == null) _g.glyphs[8220] = _g.glyphs[34]; else if(_g.glyphs[34] == null) _g.glyphs[34] = _g.glyphs[8220];
		if(_g.glyphs[8221] == null) _g.glyphs[8221] = _g.glyphs[34]; else if(_g.glyphs[34] == null) _g.glyphs[34] = _g.glyphs[8221];
		if(_g.glyphs[8216] == null) _g.glyphs[8216] = _g.glyphs[39]; else if(_g.glyphs[39] == null) _g.glyphs[39] = _g.glyphs[8216];
		if(_g.glyphs[8217] == null) _g.glyphs[8217] = _g.glyphs[39]; else if(_g.glyphs[39] == null) _g.glyphs[39] = _g.glyphs[8217];
		if(_g.glyphs[8216] == null) _g.glyphs[8216] = _g.glyphs[39]; else if(_g.glyphs[39] == null) _g.glyphs[39] = _g.glyphs[8216];
		if(_g.glyphs[8249] == null) _g.glyphs[8249] = _g.glyphs[60]; else if(_g.glyphs[60] == null) _g.glyphs[60] = _g.glyphs[8249];
		if(_g.glyphs[8250] == null) _g.glyphs[8250] = _g.glyphs[62]; else if(_g.glyphs[62] == null) _g.glyphs[62] = _g.glyphs[8250];
	}
	,isBreakChar: function(code) {
		switch(code) {
		case 32:case 12288:
			return true;
		case 33:case 63:case 46:case 44:case 58:
			return true;
		case 65281:case 65311:case 65294:case 65292:case 65306:
			return true;
		case 12539:case 12289:case 12290:
			return true;
		default:
			return false;
		}
	}
	,isSpace: function(code) {
		return code == 32 || code == 12288;
	}
	,halfSize: function() {
		var _g = 0;
		var _g1 = this.glyphs;
		while(_g < _g1.length) {
			var t = _g1[_g];
			++_g;
			if(t != null) t.scaleToSize(t.width >> 1,t.height >> 1);
		}
		this.lineHeight >>= 1;
	}
	,__class__: h2d.Font
});
h2d.Interactive = function() { }
$hxClasses["h2d.Interactive"] = h2d.Interactive;
h2d.Interactive.__name__ = ["h2d","Interactive"];
h2d.Interactive.__super__ = h2d.Drawable;
h2d.Interactive.prototype = $extend(h2d.Drawable.prototype,{
	onDelete: function() {
		if(this.scene != null) {
			this.scene.removeEventTarget(this);
			if(this.scene.currentOver == this) {
				this.scene.currentOver = null;
				hxd.System.setCursor(hxd.Cursor.Default);
			}
		}
		h2d.Drawable.prototype.onDelete.call(this);
	}
	,onParentChanged: function() {
		if(this.scene != null) {
			this.scene.removeEventTarget(this);
			this.scene.addEventTarget(this);
		}
	}
	,draw: function(ctx) {
		if(this.backgroundColor != null) this.drawTile(ctx.engine,h2d.Tile.fromColor(this.backgroundColor,this.width | 0,this.height | 0));
	}
	,onAlloc: function() {
		var p = this;
		while(p.parent != null) p = p.parent;
		if(js.Boot.__instanceof(p,h2d.Scene)) {
			this.scene = p;
			this.scene.addEventTarget(this);
		}
		h2d.Drawable.prototype.onAlloc.call(this);
	}
	,__class__: h2d.Interactive
});
h2d.Layers = function(parent) {
	h2d.Sprite.call(this,parent);
	this.layers = [];
	this.layerCount = 0;
};
$hxClasses["h2d.Layers"] = h2d.Layers;
h2d.Layers.__name__ = ["h2d","Layers"];
h2d.Layers.__super__ = h2d.Sprite;
h2d.Layers.prototype = $extend(h2d.Sprite.prototype,{
	removeChild: function(s) {
		var _g1 = 0;
		var _g = this.childs.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.childs[i] == s) {
				this.childs.splice(i,1);
				s.parent = null;
				if(s.allocated) s.onDelete();
				var k = this.layerCount - 1;
				while(k >= 0 && this.layers[k] > i) {
					this.layers[k]--;
					k--;
				}
				break;
			}
		}
	}
	,addChildAt: function(s,layer) {
		while(layer >= this.layerCount) this.layers[this.layerCount++] = this.childs.length;
		h2d.Sprite.prototype.addChildAt.call(this,s,this.layers[layer]);
		var _g1 = layer;
		var _g = this.layerCount;
		while(_g1 < _g) {
			var i = _g1++;
			this.layers[i]++;
		}
	}
	,addChild: function(s) {
		this.addChildAt(s,this.layers.length);
	}
	,__class__: h2d.Layers
});
h3d.IDrawable = function() { }
$hxClasses["h3d.IDrawable"] = h3d.IDrawable;
h3d.IDrawable.__name__ = ["h3d","IDrawable"];
h2d.Scene = function() {
	h2d.Layers.call(this,null);
	var e = h3d.Engine.getCurrent();
	this.ctx = new h3d.scene.RenderContext();
	this.width = e.width;
	this.height = e.height;
	this.interactive = new Array();
	this.pushList = new Array();
	this.stage = hxd.Stage.getInstance();
	this.posChanged = true;
};
$hxClasses["h2d.Scene"] = h2d.Scene;
h2d.Scene.__name__ = ["h2d","Scene"];
h2d.Scene.__interfaces__ = [h3d.IDrawable];
h2d.Scene.__super__ = h2d.Layers;
h2d.Scene.prototype = $extend(h2d.Layers.prototype,{
	sync: function(ctx) {
		if(!this.allocated) this.onAlloc();
		if(!this.fixedSize && (this.width != ctx.engine.width || this.height != ctx.engine.height)) {
			this.width = ctx.engine.width;
			this.height = ctx.engine.height;
			this.posChanged = true;
		}
		h2d.Tools.checkCoreObjects();
		h2d.Layers.prototype.sync.call(this,ctx);
	}
	,render: function(engine) {
		this.ctx.engine = engine;
		this.ctx.frame++;
		this.ctx.time += this.ctx.elapsedTime;
		this.ctx.currentPass = 0;
		this.sync(this.ctx);
		this.drawRec(this.ctx);
	}
	,setElapsedTime: function(v) {
		this.ctx.elapsedTime = v;
	}
	,dispose: function() {
		if(this.allocated) this.onDelete();
	}
	,calcAbsPos: function() {
		this.matA = this.scaleX;
		this.matB = 0;
		this.matC = 0;
		this.matD = this.scaleY;
		this.absX = this.x;
		this.absY = this.y;
		var w = 2 / this.width;
		var h = -2 / this.height;
		this.absX = this.absX * w - 1;
		this.absY = this.absY * h + 1;
		this.matA *= w;
		this.matB *= h;
		this.matC *= w;
		this.matD *= h;
		if(this.rotation != 0) {
			var cr = Math.cos(this.rotation);
			var sr = Math.sin(this.rotation);
			var tmpA = this.matA * cr + this.matB * sr;
			var tmpB = this.matA * -sr + this.matB * cr;
			var tmpC = this.matC * cr + this.matD * sr;
			var tmpD = this.matC * -sr + this.matD * cr;
			var tmpX = this.absX * cr + this.absY * sr;
			var tmpY = this.absX * -sr + this.absY * cr;
			this.matA = tmpA;
			this.matB = tmpB;
			this.matC = tmpC;
			this.matD = tmpD;
			this.absX = tmpX;
			this.absY = tmpY;
		}
	}
	,removeEventTarget: function(i) {
		var _g1 = 0;
		var _g = this.interactive.length;
		while(_g1 < _g) {
			var k = _g1++;
			if(this.interactive[k] == i) {
				this.interactive.splice(k,1);
				break;
			}
		}
	}
	,addEventTarget: function(i) {
		var level;
		var i1 = i;
		var lv = 0;
		while(i1 != null) {
			i1 = i1.parent;
			lv++;
		}
		level = lv;
		var _g1 = 0;
		var _g = this.interactive.length;
		while(_g1 < _g) {
			var index = _g1++;
			var i1 = i;
			var i2 = this.interactive[index];
			var lv1 = level;
			var lv2;
			var i3 = i2;
			var lv = 0;
			while(i3 != null) {
				i3 = i3.parent;
				lv++;
			}
			lv2 = lv;
			var p1 = i1;
			var p2 = i2;
			while(lv1 > lv2) {
				i1 = p1;
				p1 = p1.parent;
				lv1--;
			}
			while(lv2 > lv1) {
				i2 = p2;
				p2 = p2.parent;
				lv2--;
			}
			while(p1 != p2) {
				i1 = p1;
				p1 = p1.parent;
				i2 = p2;
				p2 = p2.parent;
			}
			if((function($this) {
				var $r;
				var id = -1;
				{
					var _g11 = 0;
					var _g2 = p1.childs.length;
					while(_g11 < _g2) {
						var k = _g11++;
						if(p1.childs[k] == i1) {
							id = k;
							break;
						}
					}
				}
				$r = id;
				return $r;
			}(this)) > (function($this) {
				var $r;
				var id = -1;
				{
					var _g11 = 0;
					var _g2 = p2.childs.length;
					while(_g11 < _g2) {
						var k = _g11++;
						if(p2.childs[k] == i2) {
							id = k;
							break;
						}
					}
				}
				$r = id;
				return $r;
			}(this))) {
				this.interactive.splice(index,0,i);
				return;
			}
		}
		this.interactive.push(i);
	}
	,onEvent: function(e) {
		if(this.pendingEvents != null) this.pendingEvents.push(e);
	}
	,onDelete: function() {
		this.stage.removeEventTarget($bind(this,this.onEvent));
		h2d.Layers.prototype.onDelete.call(this);
	}
	,onAlloc: function() {
		this.stage.addEventTarget($bind(this,this.onEvent));
		h2d.Layers.prototype.onAlloc.call(this);
	}
	,setFixedSize: function(w,h) {
		this.width = w;
		this.height = h;
		this.fixedSize = true;
		this.posChanged = true;
	}
	,__class__: h2d.Scene
});
h2d.SpriteBatch = function(t,parent) {
	h2d.Drawable.call(this,parent);
	this.tile = t;
	this.shader.hasVertexAlpha = true;
};
$hxClasses["h2d.SpriteBatch"] = h2d.SpriteBatch;
h2d.SpriteBatch.__name__ = ["h2d","SpriteBatch"];
h2d.SpriteBatch.__super__ = h2d.Drawable;
h2d.SpriteBatch.prototype = $extend(h2d.Drawable.prototype,{
	draw: function(ctx) {
		if(this.first == null) return;
		if(this.tmpBuf == null) this.tmpBuf = new Array(0);
		var pos = 0;
		var e = this.first;
		var tmp = this.tmpBuf;
		while(e != null) {
			var t = e.t;
			if(this.hasRotationScale) {
				var ca = Math.cos(e.rotation);
				var sa = Math.sin(e.rotation);
				var hx = t.width;
				var hy = t.height;
				var px = t.dx;
				var py = t.dy;
				var key = pos++;
				tmp[key] = (px * ca + py * sa) * e.scale + e.x;
				var key = pos++;
				tmp[key] = (py * ca - px * sa) * e.scale + e.y;
				var key = pos++;
				tmp[key] = t.u;
				var key = pos++;
				tmp[key] = t.v;
				var key = pos++;
				tmp[key] = e.alpha;
				var px1 = t.dx + hx;
				var py1 = t.dy;
				var key = pos++;
				tmp[key] = (px1 * ca + py1 * sa) * e.scale + e.x;
				var key = pos++;
				tmp[key] = (py1 * ca - px1 * sa) * e.scale + e.y;
				var key = pos++;
				tmp[key] = t.u2;
				var key = pos++;
				tmp[key] = t.v;
				var key = pos++;
				tmp[key] = e.alpha;
				var px2 = t.dx;
				var py2 = t.dy + hy;
				var key = pos++;
				tmp[key] = (px2 * ca + py2 * sa) * e.scale + e.x;
				var key = pos++;
				tmp[key] = (py2 * ca - px2 * sa) * e.scale + e.y;
				var key = pos++;
				tmp[key] = t.u;
				var key = pos++;
				tmp[key] = t.v2;
				var key = pos++;
				tmp[key] = e.alpha;
				var px3 = t.dx + hx;
				var py3 = t.dy + hy;
				var key = pos++;
				tmp[key] = (px3 * ca + py3 * sa) * e.scale + e.x;
				var key = pos++;
				tmp[key] = (py3 * ca - px3 * sa) * e.scale + e.y;
				var key = pos++;
				tmp[key] = t.u2;
				var key = pos++;
				tmp[key] = t.v2;
				var key = pos++;
				tmp[key] = e.alpha;
			} else {
				var sx = e.x + t.dx;
				var sy = e.y + t.dy;
				var key = pos++;
				tmp[key] = sx;
				var key = pos++;
				tmp[key] = sy;
				var key = pos++;
				tmp[key] = t.u;
				var key = pos++;
				tmp[key] = t.v;
				var key = pos++;
				tmp[key] = e.alpha;
				var key = pos++;
				tmp[key] = sx + t.width + 0.1;
				var key = pos++;
				tmp[key] = sy;
				var key = pos++;
				tmp[key] = t.u2;
				var key = pos++;
				tmp[key] = t.v;
				var key = pos++;
				tmp[key] = e.alpha;
				var key = pos++;
				tmp[key] = sx;
				var key = pos++;
				tmp[key] = sy + t.height + 0.1;
				var key = pos++;
				tmp[key] = t.u;
				var key = pos++;
				tmp[key] = t.v2;
				var key = pos++;
				tmp[key] = e.alpha;
				var key = pos++;
				tmp[key] = sx + t.width + 0.1;
				var key = pos++;
				tmp[key] = sy + t.height + 0.1;
				var key = pos++;
				tmp[key] = t.u2;
				var key = pos++;
				tmp[key] = t.v2;
				var key = pos++;
				tmp[key] = e.alpha;
			}
			e = e.next;
		}
		var stride = 5;
		var nverts = pos / stride | 0;
		var buffer = ctx.engine.mem.alloc(nverts,stride,4);
		buffer.uploadVector(this.tmpBuf,0,nverts);
		this.setupShader(ctx.engine,this.tile,0);
		ctx.engine.renderQuadBuffer(buffer,null,null);
		buffer.dispose();
	}
	,sync: function(ctx) {
		h2d.Drawable.prototype.sync.call(this,ctx);
		if(this.hasUpdate) {
			var e = this.first;
			while(e != null) {
				if(!e.update(ctx.elapsedTime)) e.batch["delete"](e);
				e = e.next;
			}
		}
	}
	,'delete': function(e) {
		if(e.prev == null) {
			if(this.first == e) this.first = e.next;
		} else e.prev.next = e.next;
		if(e.next == null) {
			if(this.last == e) this.last = e.prev;
		} else e.next.prev = e.prev;
	}
	,add: function(e) {
		e.batch = this;
		if(this.first == null) this.first = this.last = e; else {
			this.last.next = e;
			e.prev = this.last;
			this.last = e;
		}
		return e;
	}
	,__class__: h2d.SpriteBatch
});
h2d.Text = function(font,parent) {
	h2d.Drawable.call(this,parent);
	this.set_font(font);
	this.set_text("");
	this.set_textColor(16777215);
};
$hxClasses["h2d.Text"] = h2d.Text;
h2d.Text.__name__ = ["h2d","Text"];
h2d.Text.__super__ = h2d.Drawable;
h2d.Text.prototype = $extend(h2d.Drawable.prototype,{
	set_textColor: function(c) {
		this.textColor = c;
		this.glyphs.set_color(new h3d.Vector((c >> 16 & 255) * 1.0 / 255.0,(c >> 8 & 255) * 1.0 / 255.0,(c & 255) * 1.0 / 255.0,(c >>> 24) * 1.0 / 255.0));
		this.glyphs.shader.colorMul.w = this.shader.alpha;
		return c;
	}
	,get_textWidth: function() {
		return this.initGlyphs(this.text,false).width;
	}
	,get_textHeight: function() {
		return this.initGlyphs(this.text,false).height;
	}
	,initGlyphs: function(text,rebuild) {
		if(rebuild == null) rebuild = true;
		if(rebuild) this.glyphs.reset();
		var letters = this.font.glyphs;
		var x = 0;
		var y = 0;
		var xMax = 0;
		var _g1 = 0;
		var _g = text.length;
		while(_g1 < _g) {
			var i = _g1++;
			var cc = HxOverrides.cca(text,i);
			var e = letters[cc];
			var newline = cc == 10;
			if(this.font.isBreakChar(cc) && this.maxWidth != null) {
				var size = x + e.width + 1;
				var k = i + 1;
				var max = text.length;
				while(size <= this.maxWidth) {
					var cc1;
					var index = k++;
					cc1 = HxOverrides.cca(text,index);
					if(cc1 == null || this.font.isSpace(cc1) || cc1 == 10) break;
					var e1 = letters[cc1];
					if(e1 != null) size += e1.width + 1;
				}
				if(size > this.maxWidth) {
					newline = true;
					if(this.font.isSpace(cc)) e = null;
				}
			}
			if(e != null) {
				if(rebuild) this.glyphs.content.add(x,y,e);
				x += e.width + 1;
			}
			if(newline) {
				if(x > xMax) xMax = x;
				x = 0;
				y += this.font.lineHeight;
			}
		}
		return { width : x > xMax?x:xMax, height : x > 0?y + this.font.lineHeight:y};
	}
	,set_text: function(t) {
		if(t == null) this.text = "null"; else this.text = t;
		if(this.allocated && this.font != null) this.initGlyphs(this.text);
		return t;
	}
	,draw: function(ctx) {
		this.glyphs.set_blendMode(this.blendMode);
		if(this.dropShadow != null) {
			var _g = this.glyphs;
			_g.set_x(_g.x + this.dropShadow.dx);
			var _g = this.glyphs;
			_g.set_y(_g.y + this.dropShadow.dy);
			this.glyphs.calcAbsPos();
			var old = this.glyphs.shader.colorMul;
			this.glyphs.set_color(h3d.Vector.fromColor(this.dropShadow.color,null));
			this.glyphs.shader.colorMul.w = this.dropShadow.alpha;
			this.glyphs.draw(ctx);
			var _g = this.glyphs;
			_g.set_x(_g.x - this.dropShadow.dx);
			var _g = this.glyphs;
			_g.set_y(_g.y - this.dropShadow.dy);
			this.glyphs.shader.colorMul = old;
		}
		h2d.Drawable.prototype.draw.call(this,ctx);
	}
	,onAlloc: function() {
		h2d.Drawable.prototype.onAlloc.call(this);
		if(this.text != null && this.font != null) this.initGlyphs(this.text);
	}
	,set_font: function(font) {
		this.font = font;
		if(this.glyphs != null) this.glyphs.remove();
		this.glyphs = new h2d.TileGroup(font,this);
		this.shader = this.glyphs.shader;
		this.set_text(this.text);
		return font;
	}
	,__class__: h2d.Text
});
h3d.prim = {}
h3d.prim.Primitive = function() { }
$hxClasses["h3d.prim.Primitive"] = h3d.prim.Primitive;
h3d.prim.Primitive.__name__ = ["h3d","prim","Primitive"];
h3d.prim.Primitive.prototype = {
	dispose: function() {
		if(this.buffer != null) {
			this.buffer.dispose();
			this.buffer = null;
		}
		if(this.indexes != null) {
			this.indexes.dispose();
			this.indexes = null;
		}
	}
	,__class__: h3d.prim.Primitive
}
h2d._TileGroup = {}
h2d._TileGroup.TileLayerContent = function() {
	this.reset();
};
$hxClasses["h2d._TileGroup.TileLayerContent"] = h2d._TileGroup.TileLayerContent;
h2d._TileGroup.TileLayerContent.__name__ = ["h2d","_TileGroup","TileLayerContent"];
h2d._TileGroup.TileLayerContent.__super__ = h3d.prim.Primitive;
h2d._TileGroup.TileLayerContent.prototype = $extend(h3d.prim.Primitive.prototype,{
	doRender: function(engine,min,len) {
		if(this.buffer == null || this.buffer.isDisposed()) this.alloc(engine);
		engine.renderBuffer(this.buffer,engine.mem.quadIndexes,2,min,len);
	}
	,alloc: function(engine) {
		if(this.tmp == null) this.reset();
		this.buffer = engine.mem.allocVector(this.tmp,4,4);
	}
	,triCount: function() {
		if(this.buffer == null) return this.tmp.length >> 3;
		var v = 0;
		var b = this.buffer;
		while(b != null) {
			v += b.nvert;
			b = b.next;
		}
		return v >> 1;
	}
	,add: function(x,y,t) {
		var sx = x + t.dx;
		var sy = y + t.dy;
		var sx2 = sx + t.width;
		var sy2 = sy + t.height;
		this.tmp.push(sx);
		this.tmp.push(sy);
		this.tmp.push(t.u);
		this.tmp.push(t.v);
		this.tmp.push(sx2);
		this.tmp.push(sy);
		this.tmp.push(t.u2);
		this.tmp.push(t.v);
		this.tmp.push(sx);
		this.tmp.push(sy2);
		this.tmp.push(t.u);
		this.tmp.push(t.v2);
		this.tmp.push(sx2);
		this.tmp.push(sy2);
		this.tmp.push(t.u2);
		this.tmp.push(t.v2);
	}
	,reset: function() {
		this.tmp = new Array(0);
		if(this.buffer != null) this.buffer.dispose();
		this.buffer = null;
	}
	,__class__: h2d._TileGroup.TileLayerContent
});
h2d.TileGroup = function(t,parent) {
	this.tile = t;
	this.rangeMin = this.rangeMax = -1;
	this.content = new h2d._TileGroup.TileLayerContent();
	h2d.Drawable.call(this,parent);
};
$hxClasses["h2d.TileGroup"] = h2d.TileGroup;
h2d.TileGroup.__name__ = ["h2d","TileGroup"];
h2d.TileGroup.__super__ = h2d.Drawable;
h2d.TileGroup.prototype = $extend(h2d.Drawable.prototype,{
	draw: function(ctx) {
		this.setupShader(ctx.engine,this.tile,0);
		var min;
		if(this.rangeMin < 0) min = 0; else min = this.rangeMin * 2;
		var max = this.content.triCount();
		if(this.rangeMax > 0 && this.rangeMax < max * 2) max = this.rangeMax * 2;
		this.content.doRender(ctx.engine,min,max - min);
	}
	,onDelete: function() {
		this.content.dispose();
		h2d.Drawable.prototype.onDelete.call(this);
	}
	,reset: function() {
		this.content.reset();
	}
	,__class__: h2d.TileGroup
});
h2d._Tools = {}
h2d._Tools.CoreObjects = function() {
	this.tmpMatA = new h3d.Vector();
	this.tmpMatB = new h3d.Vector();
	this.tmpColor = new h3d.Vector();
	this.tmpSize = new h3d.Vector();
	this.tmpUVPos = new h3d.Vector();
	this.tmpUVScale = new h3d.Vector();
	this.tmpMatrix = new h3d.Matrix();
	this.tmpMaterial = new h3d.mat.Material(null);
	this.tmpMaterial.set_culling(h3d.mat.Face.None);
	this.tmpMaterial.depth(false,h3d.mat.Compare.Always);
	var vector = new Array(0);
	var _g = 0;
	var _g1 = [[0,0],[1,0],[0,1],[1,1]];
	while(_g < _g1.length) {
		var pt = _g1[_g];
		++_g;
		vector.push(pt[0]);
		vector.push(pt[1]);
		vector.push(pt[0]);
		vector.push(pt[1]);
	}
	this.planBuffer = h3d.Engine.getCurrent().mem.allocVector(vector,4,4);
};
$hxClasses["h2d._Tools.CoreObjects"] = h2d._Tools.CoreObjects;
h2d._Tools.CoreObjects.__name__ = ["h2d","_Tools","CoreObjects"];
h2d._Tools.CoreObjects.prototype = {
	getEmptyTexture: function() {
		if(this.emptyTexture == null || this.emptyTexture.isDisposed()) {
			this.emptyTexture = h3d.Engine.getCurrent().mem.allocTexture(1,1);
			var o = haxe.io.Bytes.alloc(4);
			o.b[0] = 255;
			o.b[2] = 255;
			o.b[3] = 255;
			this.emptyTexture.uploadBytes(o);
		}
		return this.emptyTexture;
	}
	,__class__: h2d._Tools.CoreObjects
}
h2d.Tools = function() { }
$hxClasses["h2d.Tools"] = h2d.Tools;
h2d.Tools.__name__ = ["h2d","Tools"];
h2d.Tools.getCoreObjects = function() {
	var c = h2d.Tools.CORE;
	if(c == null) {
		c = new h2d._Tools.CoreObjects();
		h2d.Tools.CORE = c;
	}
	return c;
}
h2d.Tools.checkCoreObjects = function() {
	var c = h2d.Tools.CORE;
	if(c == null) return;
	if(c.planBuffer.b.isDisposed()) h2d.Tools.CORE = null;
}
h3d.Engine = function(hardware,aa) {
	if(aa == null) aa = 0;
	if(hardware == null) hardware = true;
	this.forcedMatMask = 16777215;
	this.forcedMatBits = 0;
	this.frameCount = 0;
	this.hardware = hardware;
	this.antiAlias = aa;
	this.autoResize = true;
	this.set_fullScreen(!hxd.System.get_isWindowed());
	var stage = hxd.Stage.getInstance();
	this.realFps = stage.getFrameRate();
	this.lastTime = haxe.Timer.stamp();
	stage.addResizeEvent($bind(this,this.onStageResize));
	this.driver = new h3d.impl.WebglDriver();
	if(h3d.Engine.CURRENT == null) h3d.Engine.CURRENT = this;
};
$hxClasses["h3d.Engine"] = h3d.Engine;
h3d.Engine.__name__ = ["h3d","Engine"];
h3d.Engine.getCurrent = function() {
	return h3d.Engine.CURRENT;
}
h3d.Engine.prototype = {
	render: function(obj) {
		if(!this.begin()) return false;
		obj.render(this);
		this.end();
		var delta = haxe.Timer.stamp() - this.lastTime;
		this.lastTime += delta;
		if(delta > 0) {
			var curFps = 1. / delta;
			if(curFps > this.realFps * 2) curFps = this.realFps * 2; else if(curFps < this.realFps * 0.5) curFps = this.realFps * 0.5;
			var f = delta / .5;
			if(f > 0.3) f = 0.3;
			this.realFps = this.realFps * (1 - f) + curFps * f;
		}
		return true;
	}
	,end: function() {
		this.driver.present();
		this.reset();
		this.curProjMatrix = null;
	}
	,reset: function() {
		this.driver.reset();
	}
	,begin: function() {
		if(this.driver.isDisposed()) return false;
		this.driver.clear((this.backgroundColor >> 16 & 255) / 255,(this.backgroundColor >> 8 & 255) / 255,(this.backgroundColor & 255) / 255,(this.backgroundColor >>> 24 & 255) / 255);
		this.frameCount++;
		this.drawTriangles = 0;
		this.shaderSwitches = 0;
		this.drawCalls = 0;
		this.curProjMatrix = null;
		this.driver.reset();
		return true;
	}
	,resize: function(width,height,aa) {
		if(aa == null) aa = 0;
		if(width < 32) width = 32;
		if(height < 32) height = 32;
		this.width = width;
		this.height = height;
		this.antiAlias = aa;
		if(!this.driver.isDisposed()) this.driver.resize(width,height,aa);
	}
	,onResized: function() {
	}
	,set_fullScreen: function(v) {
		this.fullScreen = v;
		if(this.mem != null && hxd.System.get_isWindowed()) hxd.Stage.getInstance().setFullScreen(v);
		return v;
	}
	,onStageResize: function() {
		if(this.autoResize && !this.driver.isDisposed()) {
			var w = hxd.System.get_width();
			var h = hxd.System.get_height();
			if(w != this.width || h != this.height) this.resize(w,h,this.antiAlias);
			this.onResized();
		}
	}
	,onReady: function() {
	}
	,onContextLost: function() {
	}
	,onCreate: function(disposed) {
		if(this.autoResize) {
			this.width = hxd.System.get_width();
			this.height = hxd.System.get_height();
		}
		if(disposed) this.mem.onContextLost(); else this.mem = new h3d.impl.MemoryManager(this.driver,65400);
		this.hardware = this.driver.isHardware();
		this.set_debug(this.debug);
		this.set_fullScreen(this.fullScreen);
		this.resize(this.width,this.height,this.antiAlias);
		if(disposed) this.onContextLost(); else this.onReady();
	}
	,set_debug: function(d) {
		this.debug = d;
		this.driver.setDebug(this.debug);
		return d;
	}
	,renderBuffer: function(b,indexes,vertPerTri,startTri,drawTri) {
		if(drawTri == null) drawTri = -1;
		if(startTri == null) startTri = 0;
		if(indexes.isDisposed()) return;
		do {
			var ntri = b.nvert / vertPerTri | 0;
			var pos = b.pos / vertPerTri | 0;
			if(startTri > 0) {
				if(startTri >= ntri) {
					startTri -= ntri;
					b = b.next;
					continue;
				}
				pos += startTri;
				ntri -= startTri;
				startTri = 0;
			}
			if(drawTri >= 0) {
				if(drawTri == 0) return;
				drawTri -= ntri;
				if(drawTri < 0) {
					ntri += drawTri;
					drawTri = 0;
				}
			}
			if(ntri > 0 && this.selectBuffer(b.b)) {
				this.driver.draw(indexes.ibuf,pos * 3,ntri);
				this.drawTriangles += ntri;
				this.drawCalls++;
			}
			b = b.next;
		} while(b != null);
	}
	,renderQuadBuffer: function(b,start,max) {
		if(max == null) max = -1;
		if(start == null) start = 0;
		return this.renderBuffer(b,this.mem.quadIndexes,2,start,max);
	}
	,selectBuffer: function(buf) {
		if(buf.isDisposed()) return false;
		this.driver.selectBuffer(buf.vbuf);
		return true;
	}
	,selectMaterial: function(m) {
		var mbits = m.bits & this.forcedMatMask | this.forcedMatBits;
		this.driver.selectMaterial(mbits);
		this.selectShader(m.shader);
	}
	,selectShader: function(shader) {
		if(this.driver.selectShader(shader)) this.shaderSwitches++;
	}
	,init: function() {
		this.driver.init($bind(this,this.onCreate),!this.hardware);
	}
	,__class__: h3d.Engine
}
h3d.Matrix = function() {
};
$hxClasses["h3d.Matrix"] = h3d.Matrix;
h3d.Matrix.__name__ = ["h3d","Matrix"];
h3d.Matrix.prototype = {
	getFloats: function() {
		return [this._11,this._12,this._13,this._14,this._21,this._22,this._23,this._24,this._31,this._32,this._33,this._34,this._41,this._42,this._43,this._44];
	}
	,identity: function() {
		this._11 = 1.0;
		this._12 = 0.0;
		this._13 = 0.0;
		this._14 = 0.0;
		this._21 = 0.0;
		this._22 = 1.0;
		this._23 = 0.0;
		this._24 = 0.0;
		this._31 = 0.0;
		this._32 = 0.0;
		this._33 = 1.0;
		this._34 = 0.0;
		this._41 = 0.0;
		this._42 = 0.0;
		this._43 = 0.0;
		this._44 = 1.0;
	}
	,__class__: h3d.Matrix
}
h3d.Vector = function(x,y,z,w) {
	if(w == null) w = 1.;
	if(z == null) z = 0.;
	if(y == null) y = 0.;
	if(x == null) x = 0.;
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
};
$hxClasses["h3d.Vector"] = h3d.Vector;
h3d.Vector.__name__ = ["h3d","Vector"];
h3d.Vector.fromColor = function(c,scale) {
	if(scale == null) scale = 1.0;
	return new h3d.Vector((c >> 16 & 255) * scale / 255.0,(c >> 8 & 255) * scale / 255.0,(c & 255) * scale / 255.0,(c >>> 24) * scale / 255.0);
}
h3d.Vector.prototype = {
	__class__: h3d.Vector
}
h3d.impl.Buffer = function(b,pos,nvert) {
	this.b = b;
	this.pos = pos;
	this.nvert = nvert;
};
$hxClasses["h3d.impl.Buffer"] = h3d.impl.Buffer;
h3d.impl.Buffer.__name__ = ["h3d","impl","Buffer"];
h3d.impl.Buffer.prototype = {
	uploadVector: function(data,dataPos,nverts) {
		var cur = this;
		while(nverts > 0) {
			if(cur == null) throw "Too many vertexes";
			var count;
			if(nverts > cur.nvert) count = cur.nvert; else count = nverts;
			cur.b.mem.driver.uploadVertexBuffer(cur.b.vbuf,cur.pos,count,data,dataPos);
			dataPos += count * this.b.stride;
			nverts -= count;
			cur = cur.next;
		}
	}
	,dispose: function() {
		if(this.b != null) {
			this.b.freeCursor(this.pos,this.nvert);
			this.b = null;
			if(this.next != null) this.next.dispose();
		}
	}
	,isDisposed: function() {
		return this.b == null || this.b.isDisposed();
	}
	,__class__: h3d.impl.Buffer
}
h3d.impl.Driver = function() { }
$hxClasses["h3d.impl.Driver"] = h3d.impl.Driver;
h3d.impl.Driver.__name__ = ["h3d","impl","Driver"];
h3d.impl.Driver.prototype = {
	uploadTextureBytes: function(t,bytes,mipLevel,side) {
	}
	,uploadTextureBitmap: function(t,bmp,mipLevel,side) {
	}
	,uploadVertexBuffer: function(v,startVertex,vertexCount,buf,bufPos) {
	}
	,uploadIndexesBuffer: function(i,startIndice,indiceCount,buf,bufPos) {
	}
	,disposeVertex: function(v) {
	}
	,disposeIndexes: function(i) {
	}
	,disposeTexture: function(t) {
	}
	,allocVertex: function(count,stride) {
		return null;
	}
	,allocIndexes: function(count) {
		return null;
	}
	,allocTexture: function(t) {
		return null;
	}
	,setDebug: function(b) {
	}
	,isHardware: function() {
		return true;
	}
	,present: function() {
	}
	,draw: function(ibuf,startIndex,ntriangles) {
	}
	,selectBuffer: function(buffer) {
	}
	,selectShader: function(shader) {
		return false;
	}
	,selectMaterial: function(mbits) {
	}
	,resize: function(width,height,aa) {
	}
	,init: function(onCreate,forceSoftware) {
		if(forceSoftware == null) forceSoftware = false;
	}
	,reset: function() {
	}
	,clear: function(r,g,b,a) {
	}
	,isDisposed: function() {
		return true;
	}
	,__class__: h3d.impl.Driver
}
h3d.impl.Indexes = function(mem,ibuf,count) {
	this.mem = mem;
	this.ibuf = ibuf;
	this.count = count;
};
$hxClasses["h3d.impl.Indexes"] = h3d.impl.Indexes;
h3d.impl.Indexes.__name__ = ["h3d","impl","Indexes"];
h3d.impl.Indexes.prototype = {
	dispose: function() {
		if(this.ibuf != null) this.mem.deleteIndexes(this);
	}
	,upload: function(indexes,pos,count,bufferPos) {
		if(bufferPos == null) bufferPos = 0;
		this.mem.driver.uploadIndexesBuffer(this.ibuf,pos,count,indexes,bufferPos);
	}
	,isDisposed: function() {
		return this.ibuf == null;
	}
	,__class__: h3d.impl.Indexes
}
h3d.impl.FreeCell = function(pos,count,next) {
	this.pos = pos;
	this.count = count;
	this.next = next;
};
$hxClasses["h3d.impl.FreeCell"] = h3d.impl.FreeCell;
h3d.impl.FreeCell.__name__ = ["h3d","impl","FreeCell"];
h3d.impl.FreeCell.prototype = {
	__class__: h3d.impl.FreeCell
}
h3d.impl.BigBuffer = function(mem,v,stride,size) {
	this.mem = mem;
	this.size = size;
	this.stride = stride;
	this.vbuf = v;
	this.free = new h3d.impl.FreeCell(0,size,null);
};
$hxClasses["h3d.impl.BigBuffer"] = h3d.impl.BigBuffer;
h3d.impl.BigBuffer.__name__ = ["h3d","impl","BigBuffer"];
h3d.impl.BigBuffer.prototype = {
	isDisposed: function() {
		return this.vbuf == null;
	}
	,dispose: function() {
		this.mem.driver.disposeVertex(this.vbuf);
		this.vbuf = null;
	}
	,freeCursor: function(pos,nvect) {
		var prev = null;
		var f = this.free;
		var end = pos + nvect;
		while(f != null) {
			if(f.pos == end) {
				f.pos -= nvect;
				f.count += nvect;
				if(prev != null && prev.pos + prev.count == f.pos) {
					prev.count += f.count;
					prev.next = f.next;
				}
				return;
			}
			if(f.pos > end) {
				if(prev != null && prev.pos + prev.count == pos) prev.count += nvect; else {
					var n = new h3d.impl.FreeCell(pos,nvect,f);
					if(prev == null) this.free = n; else prev.next = n;
				}
				return;
			}
			prev = f;
			f = f.next;
		}
		if(nvect != 0) throw "assert";
	}
	,__class__: h3d.impl.BigBuffer
}
h3d.impl.MemoryManager = function(driver,allocSize) {
	this.driver = driver;
	this.allocSize = allocSize;
	this.idict = new haxe.ds.ObjectMap();
	this.tdict = new haxe.ds.ObjectMap();
	this.textures = new Array();
	this.buffers = new Array();
	this.initIndexes();
};
$hxClasses["h3d.impl.MemoryManager"] = h3d.impl.MemoryManager;
h3d.impl.MemoryManager.__name__ = ["h3d","impl","MemoryManager"];
h3d.impl.MemoryManager.prototype = {
	onContextLost: function() {
		this.indexes.dispose();
		this.quadIndexes.dispose();
		var tkeys = Lambda.array({ iterator : ($_=this.tdict,$bind($_,$_.keys))});
		var _g = 0;
		while(_g < tkeys.length) {
			var t = tkeys[_g];
			++_g;
			if(!this.tdict.h.hasOwnProperty(t.__id__)) continue;
			if(t.onContextLost == null) t.dispose(); else {
				HxOverrides.remove(this.textures,t.t);
				this.initTexture(t);
				t.onContextLost();
			}
		}
		var _g = 0;
		var _g1 = this.buffers;
		while(_g < _g1.length) {
			var b = _g1[_g];
			++_g;
			var b1 = b;
			while(b1 != null) {
				b1.dispose();
				b1 = b1.next;
			}
		}
		var $it0 = this.idict.keys();
		while( $it0.hasNext() ) {
			var i = $it0.next();
			i.dispose();
		}
		this.buffers = [];
		this.bufferCount = 0;
		this.usedMemory = 0;
		this.initIndexes();
	}
	,alloc: function(nvect,stride,align,allocPos) {
		var b = this.buffers[stride];
		var free = null;
		if(nvect == 0 && align == 0) align = 3;
		while(b != null) {
			free = b.free;
			while(free != null) {
				if(free.count >= nvect) {
					if(align == 0) {
						if(free.pos != 0) free = null;
						break;
					} else {
						if(b.size != this.allocSize) {
							free = null;
							break;
						}
						var d = (align - free.pos % align) % align;
						if(d == 0) break;
						if(free.count >= nvect + d) {
							free.next = new h3d.impl.FreeCell(free.pos + d,free.count - d,free.next);
							free.count = d;
							free = free.next;
							break;
						}
					}
					break;
				}
				free = free.next;
			}
			if(free != null) break;
			b = b.next;
		}
		if(b == null && align > 0) {
			var size = nvect;
			while(size > 1000) {
				b = this.buffers[stride];
				size >>= 1;
				size -= size % align;
				while(b != null) {
					free = b.free;
					if(b.size != this.allocSize) free = null;
					while(free != null) {
						if(free.count >= size) {
							var d = (align - free.pos % align) % align;
							if(d == 0) break;
							if(free.count >= size + d) {
								free.next = new h3d.impl.FreeCell(free.pos + d,free.count - d,free.next);
								free.count = d;
								free = free.next;
								break;
							}
						}
						free = free.next;
					}
					if(free != null) break;
					b = b.next;
				}
				if(b != null) break;
			}
		}
		if(b == null) {
			var size;
			if(align == 0) {
				size = nvect;
				if(size > 65535) throw "Too many vertex to allocate " + size;
			} else size = this.allocSize;
			var mem = size * stride * 4;
			var v = null;
			if(this.usedMemory + mem > 262144000 || this.bufferCount >= 4096 || (v = this.driver.allocVertex(size,stride)) == null) {
				var size1 = this.usedMemory - this.freeMemory();
				this.garbage();
				this.cleanBuffers();
				if(this.usedMemory - this.freeMemory() == size1) {
					if(this.bufferCount >= 4096) throw "Too many buffer";
					throw "Memory full";
				}
				return this.alloc(nvect,stride,align,allocPos);
			}
			this.usedMemory += mem;
			this.bufferCount++;
			b = new h3d.impl.BigBuffer(this,v,stride,size);
			b.next = this.buffers[stride];
			this.buffers[stride] = b;
			free = b.free;
		}
		var alloc;
		if(nvect > free.count) alloc = free.count - free.count % align; else alloc = nvect;
		var fpos = free.pos;
		free.pos += alloc;
		free.count -= alloc;
		var b1 = new h3d.impl.Buffer(b,fpos,alloc);
		nvect -= alloc;
		if(nvect > 0) b1.next = this.alloc(nvect,stride,align);
		return b1;
	}
	,freeMemory: function() {
		var size = 0;
		var _g = 0;
		var _g1 = this.buffers;
		while(_g < _g1.length) {
			var b = _g1[_g];
			++_g;
			var b1 = b;
			while(b1 != null) {
				var free = b1.free;
				while(free != null) {
					size += free.count * b1.stride * 4;
					free = free.next;
				}
				b1 = b1.next;
			}
		}
		return size;
	}
	,freeTextures: function() {
		var tall = new haxe.ds.ObjectMap();
		var _g = 0;
		var _g1 = this.textures;
		while(_g < _g1.length) {
			var t = _g1[_g];
			++_g;
			tall.set(t,true);
		}
		var $it0 = this.tdict.iterator();
		while( $it0.hasNext() ) {
			var t = $it0.next();
			tall.remove(t);
		}
		var count = 0;
		var $it1 = tall.keys();
		while( $it1.hasNext() ) {
			var t = $it1.next();
			this.driver.disposeTexture(t);
			HxOverrides.remove(this.textures,t);
			count++;
		}
		return count;
	}
	,allocVector: function(v,stride,align,allocPos) {
		var nvert = v.length / stride | 0;
		var b = this.alloc(nvert,stride,align,allocPos);
		b.uploadVector(v,0,nvert);
		return b;
	}
	,allocIndex: function(indices,pos,count) {
		if(count == null) count = -1;
		if(pos == null) pos = 0;
		if(count < 0) count = indices.length;
		var ibuf = this.driver.allocIndexes(count);
		var idx = new h3d.impl.Indexes(this,ibuf,count);
		idx.upload(indices,0,count);
		this.idict.set(idx,true);
		this.usedMemory += idx.count * 2;
		return idx;
	}
	,allocTexture: function(width,height,mipMap,allocPos) {
		if(mipMap == null) mipMap = false;
		this.freeTextures();
		var levels = 0;
		if(mipMap) while(width > 1 << levels && height > 1 << levels) levels++;
		return this.newTexture(h3d.mat.TextureFormat.Rgba,width,height,false,false,levels,allocPos);
	}
	,resizeTexture: function(t,width,height) {
		t.dispose();
		t.width = width;
		t.height = height;
		this.initTexture(t);
	}
	,deleteTexture: function(t) {
		HxOverrides.remove(this.textures,t.t);
		this.tdict.remove(t);
		this.driver.disposeTexture(t.t);
		t.t = null;
	}
	,deleteIndexes: function(i) {
		this.idict.remove(i);
		this.driver.disposeIndexes(i.ibuf);
		i.ibuf = null;
		this.usedMemory -= i.count * 2;
	}
	,initTexture: function(t) {
		t.t = this.driver.allocTexture(t);
		this.tdict.set(t,t.t);
		this.textures.push(t.t);
	}
	,newTexture: function(fmt,w,h,cubic,target,mm,allocPos) {
		var t = new h3d.mat.Texture(this,fmt,w,h,cubic,target,mm);
		this.initTexture(t);
		return t;
	}
	,cleanBuffers: function() {
		var _g1 = 0;
		var _g = this.buffers.length;
		while(_g1 < _g) {
			var i = _g1++;
			var b = this.buffers[i];
			var prev = null;
			while(b != null) {
				if(b.free.count == b.size) {
					b.dispose();
					this.bufferCount--;
					this.usedMemory -= b.size * b.stride * 4;
					if(prev == null) this.buffers[i] = b.next; else prev.next = b.next;
				} else prev = b;
				b = b.next;
			}
		}
	}
	,garbage: function() {
	}
	,initIndexes: function() {
		var indices = new Array(0);
		var _g1 = 0;
		var _g = this.allocSize;
		while(_g1 < _g) {
			var i = _g1++;
			indices.push(i);
		}
		this.indexes = this.allocIndex(indices);
		var indices1 = new Array(0);
		var p = 0;
		var _g1 = 0;
		var _g = this.allocSize >> 2;
		while(_g1 < _g) {
			var i = _g1++;
			var k = i << 2;
			indices1.push(k);
			indices1.push(k + 1);
			indices1.push(k + 2);
			indices1.push(k + 2);
			indices1.push(k + 1);
			indices1.push(k + 3);
		}
		this.quadIndexes = this.allocIndex(indices1);
	}
	,__class__: h3d.impl.MemoryManager
}
h3d.impl.ShaderType = $hxClasses["h3d.impl.ShaderType"] = { __ename__ : true, __constructs__ : ["Float","Vec2","Vec3","Vec4","Mat2","Mat3","Mat4","Tex2d","TexCube","Byte3","Byte4","Struct","Index"] }
h3d.impl.ShaderType.Float = ["Float",0];
h3d.impl.ShaderType.Float.toString = $estr;
h3d.impl.ShaderType.Float.__enum__ = h3d.impl.ShaderType;
h3d.impl.ShaderType.Vec2 = ["Vec2",1];
h3d.impl.ShaderType.Vec2.toString = $estr;
h3d.impl.ShaderType.Vec2.__enum__ = h3d.impl.ShaderType;
h3d.impl.ShaderType.Vec3 = ["Vec3",2];
h3d.impl.ShaderType.Vec3.toString = $estr;
h3d.impl.ShaderType.Vec3.__enum__ = h3d.impl.ShaderType;
h3d.impl.ShaderType.Vec4 = ["Vec4",3];
h3d.impl.ShaderType.Vec4.toString = $estr;
h3d.impl.ShaderType.Vec4.__enum__ = h3d.impl.ShaderType;
h3d.impl.ShaderType.Mat2 = ["Mat2",4];
h3d.impl.ShaderType.Mat2.toString = $estr;
h3d.impl.ShaderType.Mat2.__enum__ = h3d.impl.ShaderType;
h3d.impl.ShaderType.Mat3 = ["Mat3",5];
h3d.impl.ShaderType.Mat3.toString = $estr;
h3d.impl.ShaderType.Mat3.__enum__ = h3d.impl.ShaderType;
h3d.impl.ShaderType.Mat4 = ["Mat4",6];
h3d.impl.ShaderType.Mat4.toString = $estr;
h3d.impl.ShaderType.Mat4.__enum__ = h3d.impl.ShaderType;
h3d.impl.ShaderType.Tex2d = ["Tex2d",7];
h3d.impl.ShaderType.Tex2d.toString = $estr;
h3d.impl.ShaderType.Tex2d.__enum__ = h3d.impl.ShaderType;
h3d.impl.ShaderType.TexCube = ["TexCube",8];
h3d.impl.ShaderType.TexCube.toString = $estr;
h3d.impl.ShaderType.TexCube.__enum__ = h3d.impl.ShaderType;
h3d.impl.ShaderType.Byte3 = ["Byte3",9];
h3d.impl.ShaderType.Byte3.toString = $estr;
h3d.impl.ShaderType.Byte3.__enum__ = h3d.impl.ShaderType;
h3d.impl.ShaderType.Byte4 = ["Byte4",10];
h3d.impl.ShaderType.Byte4.toString = $estr;
h3d.impl.ShaderType.Byte4.__enum__ = h3d.impl.ShaderType;
h3d.impl.ShaderType.Struct = function(field,t) { var $x = ["Struct",11,field,t]; $x.__enum__ = h3d.impl.ShaderType; $x.toString = $estr; return $x; }
h3d.impl.ShaderType.Index = function(index,t) { var $x = ["Index",12,index,t]; $x.__enum__ = h3d.impl.ShaderType; $x.toString = $estr; return $x; }
h3d.impl.ShaderInstance = function() {
};
$hxClasses["h3d.impl.ShaderInstance"] = h3d.impl.ShaderInstance;
h3d.impl.ShaderInstance.__name__ = ["h3d","impl","ShaderInstance"];
h3d.impl.ShaderInstance.prototype = {
	__class__: h3d.impl.ShaderInstance
}
h3d.impl.PointShader = function() { }
$hxClasses["h3d.impl.PointShader"] = h3d.impl.PointShader;
h3d.impl.PointShader.__name__ = ["h3d","impl","PointShader"];
h3d.impl.PointShader.__super__ = h3d.impl.Shader;
h3d.impl.PointShader.prototype = $extend(h3d.impl.Shader.prototype,{
	__class__: h3d.impl.PointShader
});
h3d.impl.LineShader = function() { }
$hxClasses["h3d.impl.LineShader"] = h3d.impl.LineShader;
h3d.impl.LineShader.__name__ = ["h3d","impl","LineShader"];
h3d.impl.LineShader.__super__ = h3d.impl.Shader;
h3d.impl.LineShader.prototype = $extend(h3d.impl.Shader.prototype,{
	__class__: h3d.impl.LineShader
});
h3d.impl.WebglDriver = function() {
	this.curAttribs = 0;
	this.canvas = window.document.getElementById("webgl");
	if(this.canvas == null) throw "Canvas #webgl not found";
	this.gl = js.html._CanvasElement.CanvasUtil.getContextWebGL(this.canvas,null);
	if(this.gl == null) throw "Could not acquire GL context";
	if(typeof(WebGLDebugUtils) != "undefined") this.gl = WebGLDebugUtils.makeDebugContext(this.gl);
	this.curMatBits = -1;
	this.selectMaterial(0);
};
$hxClasses["h3d.impl.WebglDriver"] = h3d.impl.WebglDriver;
h3d.impl.WebglDriver.__name__ = ["h3d","impl","WebglDriver"];
h3d.impl.WebglDriver.__super__ = h3d.impl.Driver;
h3d.impl.WebglDriver.prototype = $extend(h3d.impl.Driver.prototype,{
	init: function(onCreate,forceSoftware) {
		if(forceSoftware == null) forceSoftware = false;
		haxe.Timer.delay((function(f,a1) {
			return function() {
				return f(a1);
			};
		})(onCreate,false),1);
	}
	,isDisposed: function() {
		return false;
	}
	,present: function() {
		this.gl.finish();
	}
	,draw: function(ibuf,startIndex,ntriangles) {
		this.gl.bindBuffer(34963,ibuf);
		this.gl.drawElements(4,ntriangles * 3,5123,startIndex * 2);
		this.gl.bindBuffer(34963,null);
	}
	,selectBuffer: function(v) {
		var stride = v.stride;
		if(stride < this.curShader.stride) throw "Buffer stride (" + stride + ") and shader stride (" + this.curShader.stride + ") mismatch";
		this.gl.bindBuffer(34962,v);
		var _g = 0;
		var _g1 = this.curShader.attribs;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			this.gl.vertexAttribPointer(a.index,a.size,a.etype,false,stride * 4,a.offset * 4);
		}
	}
	,setUniform: function(val,u,t) {
		switch(t[1]) {
		case 6:
			var m = val;
			this.gl.uniformMatrix4fv(u.loc,false,new Float32Array(m.getFloats()));
			break;
		case 7:
			var t1 = val;
			this.setupTexture(t1,t1.mipMap,t1.filter,t1.wrap);
			this.gl.activeTexture(33984 + u.index);
			this.gl.uniform1i(u.loc,u.index);
			break;
		case 0:
			this.gl.uniform1f(u.loc,val);
			break;
		case 1:
			var v = val;
			this.gl.uniform2f(u.loc,v.x,v.y);
			break;
		case 2:
			var v = val;
			this.gl.uniform3f(u.loc,v.x,v.y,v.z);
			break;
		case 3:
			var v = val;
			this.gl.uniform4f(u.loc,v.x,v.y,v.z,v.w);
			break;
		case 11:
			var t1 = t[3];
			var field = t[2];
			var v = Reflect.field(val,field);
			if(v == null) throw "Missing shader field " + field;
			this.setUniform(v,u,t1);
			break;
		case 12:
			var t1 = t[3];
			var index = t[2];
			var v = val[index];
			if(v == null) throw "Missing shader index " + index;
			this.setUniform(v,u,t1);
			break;
		case 10:
			var v = val;
			this.gl.uniform4f(u.loc,(v >> 16 & 255) / 255,(v >> 8 & 255) / 255,(v & 255) / 255,(v >>> 24) / 255);
			break;
		case 9:
			var v = val;
			this.gl.uniform3f(u.loc,(v >> 16 & 255) / 255,(v >> 8 & 255) / 255,(v & 255) / 255);
			break;
		default:
			throw "Unsupported uniform " + Std.string(u.type);
		}
	}
	,setupTexture: function(t,mipMap,filter,wrap) {
		this.gl.bindTexture(3553,t.t);
		var flags = h3d.impl.WebglDriver.TFILTERS[mipMap[1]][filter[1]];
		this.gl.texParameteri(3553,10240,flags[0]);
		this.gl.texParameteri(3553,10241,flags[1]);
		var w = h3d.impl.WebglDriver.TWRAP[wrap[1]];
		this.gl.texParameteri(3553,10242,w);
		this.gl.texParameteri(3553,10243,w);
	}
	,selectShader: function(shader) {
		var change = false;
		if(shader.instance == null) shader.instance = this.buildShaderInstance(shader);
		if(shader.instance != this.curShader) {
			this.curShader = shader.instance;
			this.gl.useProgram(this.curShader.program);
			var _g1 = this.curAttribs;
			var _g = this.curShader.attribs.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.gl.enableVertexAttribArray(i);
				this.curAttribs++;
			}
			while(this.curAttribs > this.curShader.attribs.length) this.gl.disableVertexAttribArray(--this.curAttribs);
			change = true;
		}
		var _g = 0;
		var _g1 = this.curShader.uniforms;
		while(_g < _g1.length) {
			var u = _g1[_g];
			++_g;
			var val = Reflect.field(shader,u.name);
			if(val == null) throw "Missing shader value " + u.name;
			this.setUniform(val,u,u.type);
		}
		shader.customSetup(this);
		return change;
	}
	,buildShaderInstance: function(shader) {
		var _g = this;
		var cl = Type.getClass(shader);
		var compileShader = function(type) {
			var vertex = type == 35633;
			var name;
			if(vertex) name = "VERTEX"; else name = "FRAGMENT";
			var code = Reflect.field(cl,name);
			if(code == null) throw "Missing " + Type.getClassName(cl) + "." + name + " shader source";
			var cst = shader.getConstants(vertex);
			code = StringTools.trim(cst + code);
			code = new EReg("#if ([A-Za-z0-9_]+)","g").replace(code,"#if defined($1)");
			code = new EReg("#elseif ([A-Za-z0-9_]+)","g").replace(code,"#elif defined($1)");
			code = code.split("#end").join("#endif");
			var s = _g.gl.createShader(type);
			_g.gl.shaderSource(s,code);
			_g.gl.compileShader(s);
			if(!_g.gl.getShaderParameter(s,35713)) {
				var log = _g.gl.getShaderInfoLog(s);
				var line = code.split("\n")[Std.parseInt(HxOverrides.substr(log,9,null)) - 1];
				if(line == null) line = ""; else line = "(" + StringTools.trim(line) + ")";
				throw "An error occurred compiling the shaders: " + log + line;
			}
			return s;
		};
		var vs = compileShader(35633);
		var fs = compileShader(35632);
		var p = this.gl.createProgram();
		this.gl.attachShader(p,vs);
		this.gl.attachShader(p,fs);
		this.gl.linkProgram(p);
		if(!this.gl.getProgramParameter(p,35714)) {
			var log = this.gl.getProgramInfoLog(p);
			throw "Program linkage failure: " + log;
		}
		var inst = new h3d.impl.ShaderInstance();
		var nattr = this.gl.getProgramParameter(p,35721);
		inst.attribs = [];
		var amap = new haxe.ds.StringMap();
		var _g1 = 0;
		while(_g1 < nattr) {
			var k = _g1++;
			var inf = this.gl.getActiveAttrib(p,k);
			amap.set(inf.name,{ index : k, inf : inf});
		}
		var code = this.gl.getShaderSource(vs);
		var rdef = new EReg("#define ([A-Za-z0-9_]+)","");
		var defs = new haxe.ds.StringMap();
		while(rdef.match(code)) {
			var key = rdef.matched(1);
			defs.set(key,true);
			code = rdef.matchedLeft() + rdef.matchedRight();
		}
		var rif = new EReg("#if defined\\(([A-Za-z0-9_]+)\\)([^#]+)#endif","");
		while(rif.match(code)) if((function($this) {
			var $r;
			var key = rif.matched(1);
			$r = defs.get(key);
			return $r;
		}(this))) code = rif.matchedLeft() + rif.matched(2) + rif.matchedRight(); else code = rif.matchedLeft() + rif.matchedRight();
		var r = new EReg("attribute[ \t\r\n]+([A-Za-z0-9_]+)[ \t\r\n]+([A-Za-z0-9_]+)","");
		var offset = 0;
		var ccode = code;
		while(r.match(ccode)) {
			var aname = r.matched(2);
			var atype = this.decodeType(r.matched(1));
			var a = amap.get(aname);
			var size = this.typeSize(atype);
			if(a != null) inst.attribs.push({ name : aname, type : atype, etype : 5126, size : size, index : a.index, offset : offset});
			offset += size;
			ccode = r.matchedRight();
		}
		inst.stride = offset;
		var allCode = code + this.gl.getShaderSource(fs);
		var nuni = this.gl.getProgramParameter(p,35718);
		inst.uniforms = [];
		var texIndex = -1;
		var r_array = new EReg("\\[([0-9]+)\\]$","");
		var _g1 = 0;
		while(_g1 < nuni) {
			var k = _g1++;
			var inf = this.gl.getActiveUniform(p,k);
			if(HxOverrides.substr(inf.name,0,6) == "webgl_") continue;
			var t = this.decodeTypeInt(inf.type);
			switch(t[1]) {
			case 7:case 8:
				texIndex++;
				break;
			case 2:
				var r1 = new EReg(inf.name + "[ \\t]*\\/\\*([A-Za-z0-9_]+)\\*\\/","");
				if(r1.match(allCode)) {
					var _g11 = r1.matched(1);
					switch(_g11) {
					case "byte4":
						t = h3d.impl.ShaderType.Byte3;
						break;
					default:
					}
				}
				break;
			case 3:
				var r1 = new EReg(inf.name + "[ \\t]*\\/\\*([A-Za-z0-9_]+)\\*\\/","");
				if(r1.match(allCode)) {
					var _g11 = r1.matched(1);
					switch(_g11) {
					case "byte4":
						t = h3d.impl.ShaderType.Byte4;
						break;
					default:
					}
				}
				break;
			default:
			}
			var name = inf.name;
			while(true) {
				if(r_array.match(name)) {
					name = r_array.matchedLeft();
					t = h3d.impl.ShaderType.Index(Std.parseInt(r_array.matched(1)),t);
					continue;
				}
				var c = name.lastIndexOf(".");
				if(c > 0) {
					var field = HxOverrides.substr(name,c + 1,null);
					name = HxOverrides.substr(name,0,c);
					t = h3d.impl.ShaderType.Struct(field,t);
				}
				break;
			}
			inst.uniforms.push({ name : name, type : t, loc : this.gl.getUniformLocation(p,inf.name), index : texIndex});
		}
		inst.program = p;
		return inst;
	}
	,typeSize: function(t) {
		switch(t[1]) {
		case 0:case 10:case 9:
			return 1;
		case 1:
			return 2;
		case 2:
			return 3;
		case 3:
			return 4;
		case 4:
			return 4;
		case 5:
			return 9;
		case 6:
			return 16;
		case 7:case 8:case 11:case 12:
			throw "Unexpected " + Std.string(t);
			break;
		}
	}
	,decodeTypeInt: function(t) {
		switch(t) {
		case 35678:
			return h3d.impl.ShaderType.Tex2d;
		case 35680:
			return h3d.impl.ShaderType.TexCube;
		case 5126:
			return h3d.impl.ShaderType.Float;
		case 35664:
			return h3d.impl.ShaderType.Vec2;
		case 35665:
			return h3d.impl.ShaderType.Vec3;
		case 35666:
			return h3d.impl.ShaderType.Vec4;
		case 35674:
			return h3d.impl.ShaderType.Mat2;
		case 35675:
			return h3d.impl.ShaderType.Mat3;
		case 35676:
			return h3d.impl.ShaderType.Mat4;
		default:
			this.gl.pixelStorei(t,0);
			throw "Unknown type " + t;
		}
	}
	,decodeType: function(t) {
		switch(t) {
		case "float":
			return h3d.impl.ShaderType.Float;
		case "vec2":
			return h3d.impl.ShaderType.Vec2;
		case "vec3":
			return h3d.impl.ShaderType.Vec3;
		case "vec4":
			return h3d.impl.ShaderType.Vec4;
		case "mat4":
			return h3d.impl.ShaderType.Mat4;
		default:
			throw "Unknown type " + t;
		}
	}
	,uploadIndexesBuffer: function(i,startIndice,indiceCount,buf,bufPos) {
		var buf1 = new Uint16Array(buf);
		this.gl.bindBuffer(34963,i);
		this.gl.bufferSubData(34963,startIndice * 2,new Uint16Array(buf1.buffer,bufPos,indiceCount));
		this.gl.bindBuffer(34963,null);
	}
	,uploadVertexBuffer: function(v,startVertex,vertexCount,buf,bufPos) {
		var stride = v.stride;
		var buf1 = new Float32Array(buf);
		this.gl.bindBuffer(34962,v);
		this.gl.bufferSubData(34962,startVertex * stride * 4,new Float32Array(buf1.buffer,bufPos,vertexCount * stride));
		this.gl.bindBuffer(34962,null);
	}
	,uploadTextureBytes: function(t,bytes,mipLevel,side) {
		this.gl.bindTexture(3553,t.t);
		var pixels = new Uint8Array(bytes.b);
		var _g1 = 0;
		var _g = t.width * t.height;
		while(_g1 < _g) {
			var i = _g1++;
			var p = i << 2;
			var b = pixels[p];
			var g = pixels[p + 1];
			var r = pixels[p + 2];
			var a = pixels[p + 3];
			pixels[p] = r;
			pixels[p + 1] = g;
			pixels[p + 2] = b;
			pixels[p + 3] = a;
		}
		this.gl.texImage2D(3553,mipLevel,6408,t.width,t.height,0,6408,5121,pixels);
		this.gl.bindTexture(3553,null);
	}
	,disposeVertex: function(v) {
		this.gl.deleteBuffer(v);
	}
	,disposeIndexes: function(i) {
		this.gl.deleteBuffer(i);
	}
	,disposeTexture: function(t) {
		this.gl.deleteTexture(t);
	}
	,allocIndexes: function(count) {
		var b = this.gl.createBuffer();
		this.gl.bindBuffer(34963,b);
		this.gl.bufferData(34963,count * 2,35044);
		this.gl.bindBuffer(34963,null);
		return b;
	}
	,allocVertex: function(count,stride) {
		var b = this.gl.createBuffer();
		this.gl.bindBuffer(34962,b);
		this.gl.bufferData(34962,count * stride * 4,35044);
		this.gl.bindBuffer(34962,null);
		b.stride = stride;
		return b;
	}
	,allocTexture: function(t) {
		var tt = this.gl.createTexture();
		this.gl.bindTexture(3553,tt);
		this.gl.texImage2D(3553,0,6408,t.width,t.height,0,6408,5121,null);
		this.gl.bindTexture(3553,null);
		return tt;
	}
	,resize: function(width,height,aa) {
		this.canvas.width = width;
		this.canvas.height = height;
		this.gl.viewport(0,0,width,height);
	}
	,clear: function(r,g,b,a) {
		this.gl.clearColor(r,g,b,a);
		this.gl.clearDepth(1);
		this.gl.clear(16640);
	}
	,selectMaterial: function(mbits) {
		var diff = this.curMatBits ^ mbits;
		if(diff == 0) return;
		if((diff & 3) != 0) {
			if((mbits & 3) == 0) this.gl.disable(2884); else {
				if((this.curMatBits & 3) == 0) this.gl.enable(2884);
				this.gl.cullFace(h3d.impl.WebglDriver.FACES[mbits & 3]);
			}
		}
		if((diff & 16320) != 0) {
			var src = mbits >> 6 & 15;
			var dst = mbits >> 10 & 15;
			if(src == 0 && dst == 1) this.gl.disable(3042); else {
				if(this.curMatBits < 0 || (this.curMatBits >> 6 & 255) == 16) this.gl.enable(3042);
				this.gl.blendFunc(h3d.impl.WebglDriver.BLEND[src],h3d.impl.WebglDriver.BLEND[dst]);
			}
		}
		if((diff & 60) != 0) {
			var write = (mbits >> 2 & 1) == 1;
			if(this.curMatBits < 0 || (diff & 4) != 0) this.gl.depthMask(write);
			var cmp = mbits >> 3 & 7;
			if(cmp == 0) this.gl.disable(2929); else {
				if(this.curMatBits < 0 || (this.curMatBits >> 3 & 7) == 0) this.gl.enable(2929);
				this.gl.depthFunc(h3d.impl.WebglDriver.COMPARE[cmp]);
			}
		}
		if((diff & 245760) != 0) this.gl.colorMask((mbits >> 14 & 1) != 0,(mbits >> 14 & 2) != 0,(mbits >> 14 & 4) != 0,(mbits >> 14 & 8) != 0);
		this.curMatBits = mbits;
	}
	,reset: function() {
		this.curShader = null;
		this.gl.useProgram(null);
	}
	,__class__: h3d.impl.WebglDriver
});
h3d.mat = {}
h3d.mat.Face = $hxClasses["h3d.mat.Face"] = { __ename__ : true, __constructs__ : ["None","Back","Front","Both"] }
h3d.mat.Face.None = ["None",0];
h3d.mat.Face.None.toString = $estr;
h3d.mat.Face.None.__enum__ = h3d.mat.Face;
h3d.mat.Face.Back = ["Back",1];
h3d.mat.Face.Back.toString = $estr;
h3d.mat.Face.Back.__enum__ = h3d.mat.Face;
h3d.mat.Face.Front = ["Front",2];
h3d.mat.Face.Front.toString = $estr;
h3d.mat.Face.Front.__enum__ = h3d.mat.Face;
h3d.mat.Face.Both = ["Both",3];
h3d.mat.Face.Both.toString = $estr;
h3d.mat.Face.Both.__enum__ = h3d.mat.Face;
h3d.mat.Blend = $hxClasses["h3d.mat.Blend"] = { __ename__ : true, __constructs__ : ["One","Zero","SrcAlpha","SrcColor","DstAlpha","DstColor","OneMinusSrcAlpha","OneMinusSrcColor","OneMinusDstAlpha","OneMinusDstColor","ConstantColor","ConstantAlpha","OneMinusConstantColor","OneMinusConstantAlpha","SrcAlphaSaturate"] }
h3d.mat.Blend.One = ["One",0];
h3d.mat.Blend.One.toString = $estr;
h3d.mat.Blend.One.__enum__ = h3d.mat.Blend;
h3d.mat.Blend.Zero = ["Zero",1];
h3d.mat.Blend.Zero.toString = $estr;
h3d.mat.Blend.Zero.__enum__ = h3d.mat.Blend;
h3d.mat.Blend.SrcAlpha = ["SrcAlpha",2];
h3d.mat.Blend.SrcAlpha.toString = $estr;
h3d.mat.Blend.SrcAlpha.__enum__ = h3d.mat.Blend;
h3d.mat.Blend.SrcColor = ["SrcColor",3];
h3d.mat.Blend.SrcColor.toString = $estr;
h3d.mat.Blend.SrcColor.__enum__ = h3d.mat.Blend;
h3d.mat.Blend.DstAlpha = ["DstAlpha",4];
h3d.mat.Blend.DstAlpha.toString = $estr;
h3d.mat.Blend.DstAlpha.__enum__ = h3d.mat.Blend;
h3d.mat.Blend.DstColor = ["DstColor",5];
h3d.mat.Blend.DstColor.toString = $estr;
h3d.mat.Blend.DstColor.__enum__ = h3d.mat.Blend;
h3d.mat.Blend.OneMinusSrcAlpha = ["OneMinusSrcAlpha",6];
h3d.mat.Blend.OneMinusSrcAlpha.toString = $estr;
h3d.mat.Blend.OneMinusSrcAlpha.__enum__ = h3d.mat.Blend;
h3d.mat.Blend.OneMinusSrcColor = ["OneMinusSrcColor",7];
h3d.mat.Blend.OneMinusSrcColor.toString = $estr;
h3d.mat.Blend.OneMinusSrcColor.__enum__ = h3d.mat.Blend;
h3d.mat.Blend.OneMinusDstAlpha = ["OneMinusDstAlpha",8];
h3d.mat.Blend.OneMinusDstAlpha.toString = $estr;
h3d.mat.Blend.OneMinusDstAlpha.__enum__ = h3d.mat.Blend;
h3d.mat.Blend.OneMinusDstColor = ["OneMinusDstColor",9];
h3d.mat.Blend.OneMinusDstColor.toString = $estr;
h3d.mat.Blend.OneMinusDstColor.__enum__ = h3d.mat.Blend;
h3d.mat.Blend.ConstantColor = ["ConstantColor",10];
h3d.mat.Blend.ConstantColor.toString = $estr;
h3d.mat.Blend.ConstantColor.__enum__ = h3d.mat.Blend;
h3d.mat.Blend.ConstantAlpha = ["ConstantAlpha",11];
h3d.mat.Blend.ConstantAlpha.toString = $estr;
h3d.mat.Blend.ConstantAlpha.__enum__ = h3d.mat.Blend;
h3d.mat.Blend.OneMinusConstantColor = ["OneMinusConstantColor",12];
h3d.mat.Blend.OneMinusConstantColor.toString = $estr;
h3d.mat.Blend.OneMinusConstantColor.__enum__ = h3d.mat.Blend;
h3d.mat.Blend.OneMinusConstantAlpha = ["OneMinusConstantAlpha",13];
h3d.mat.Blend.OneMinusConstantAlpha.toString = $estr;
h3d.mat.Blend.OneMinusConstantAlpha.__enum__ = h3d.mat.Blend;
h3d.mat.Blend.SrcAlphaSaturate = ["SrcAlphaSaturate",14];
h3d.mat.Blend.SrcAlphaSaturate.toString = $estr;
h3d.mat.Blend.SrcAlphaSaturate.__enum__ = h3d.mat.Blend;
h3d.mat.Compare = $hxClasses["h3d.mat.Compare"] = { __ename__ : true, __constructs__ : ["Always","Never","Equal","NotEqual","Greater","GreaterEqual","Less","LessEqual"] }
h3d.mat.Compare.Always = ["Always",0];
h3d.mat.Compare.Always.toString = $estr;
h3d.mat.Compare.Always.__enum__ = h3d.mat.Compare;
h3d.mat.Compare.Never = ["Never",1];
h3d.mat.Compare.Never.toString = $estr;
h3d.mat.Compare.Never.__enum__ = h3d.mat.Compare;
h3d.mat.Compare.Equal = ["Equal",2];
h3d.mat.Compare.Equal.toString = $estr;
h3d.mat.Compare.Equal.__enum__ = h3d.mat.Compare;
h3d.mat.Compare.NotEqual = ["NotEqual",3];
h3d.mat.Compare.NotEqual.toString = $estr;
h3d.mat.Compare.NotEqual.__enum__ = h3d.mat.Compare;
h3d.mat.Compare.Greater = ["Greater",4];
h3d.mat.Compare.Greater.toString = $estr;
h3d.mat.Compare.Greater.__enum__ = h3d.mat.Compare;
h3d.mat.Compare.GreaterEqual = ["GreaterEqual",5];
h3d.mat.Compare.GreaterEqual.toString = $estr;
h3d.mat.Compare.GreaterEqual.__enum__ = h3d.mat.Compare;
h3d.mat.Compare.Less = ["Less",6];
h3d.mat.Compare.Less.toString = $estr;
h3d.mat.Compare.Less.__enum__ = h3d.mat.Compare;
h3d.mat.Compare.LessEqual = ["LessEqual",7];
h3d.mat.Compare.LessEqual.toString = $estr;
h3d.mat.Compare.LessEqual.__enum__ = h3d.mat.Compare;
h3d.mat.MipMap = $hxClasses["h3d.mat.MipMap"] = { __ename__ : true, __constructs__ : ["None","Nearest","Linear"] }
h3d.mat.MipMap.None = ["None",0];
h3d.mat.MipMap.None.toString = $estr;
h3d.mat.MipMap.None.__enum__ = h3d.mat.MipMap;
h3d.mat.MipMap.Nearest = ["Nearest",1];
h3d.mat.MipMap.Nearest.toString = $estr;
h3d.mat.MipMap.Nearest.__enum__ = h3d.mat.MipMap;
h3d.mat.MipMap.Linear = ["Linear",2];
h3d.mat.MipMap.Linear.toString = $estr;
h3d.mat.MipMap.Linear.__enum__ = h3d.mat.MipMap;
h3d.mat.Filter = $hxClasses["h3d.mat.Filter"] = { __ename__ : true, __constructs__ : ["Nearest","Linear"] }
h3d.mat.Filter.Nearest = ["Nearest",0];
h3d.mat.Filter.Nearest.toString = $estr;
h3d.mat.Filter.Nearest.__enum__ = h3d.mat.Filter;
h3d.mat.Filter.Linear = ["Linear",1];
h3d.mat.Filter.Linear.toString = $estr;
h3d.mat.Filter.Linear.__enum__ = h3d.mat.Filter;
h3d.mat.Wrap = $hxClasses["h3d.mat.Wrap"] = { __ename__ : true, __constructs__ : ["Clamp","Repeat"] }
h3d.mat.Wrap.Clamp = ["Clamp",0];
h3d.mat.Wrap.Clamp.toString = $estr;
h3d.mat.Wrap.Clamp.__enum__ = h3d.mat.Wrap;
h3d.mat.Wrap.Repeat = ["Repeat",1];
h3d.mat.Wrap.Repeat.toString = $estr;
h3d.mat.Wrap.Repeat.__enum__ = h3d.mat.Wrap;
h3d.mat.TextureFormat = $hxClasses["h3d.mat.TextureFormat"] = { __ename__ : true, __constructs__ : ["Rgba","Atf","AtfCompressed"] }
h3d.mat.TextureFormat.Rgba = ["Rgba",0];
h3d.mat.TextureFormat.Rgba.toString = $estr;
h3d.mat.TextureFormat.Rgba.__enum__ = h3d.mat.TextureFormat;
h3d.mat.TextureFormat.Atf = ["Atf",1];
h3d.mat.TextureFormat.Atf.toString = $estr;
h3d.mat.TextureFormat.Atf.__enum__ = h3d.mat.TextureFormat;
h3d.mat.TextureFormat.AtfCompressed = function(alpha) { var $x = ["AtfCompressed",2,alpha]; $x.__enum__ = h3d.mat.TextureFormat; $x.toString = $estr; return $x; }
h3d.mat.Material = function(shader) {
	this.bits = 0;
	this.renderPass = 0;
	this.shader = shader;
	this.set_culling(h3d.mat.Face.Back);
	this.set_depthWrite(true);
	this.set_depthTest(h3d.mat.Compare.Less);
	this.set_blendSrc(h3d.mat.Blend.One);
	this.set_blendDst(h3d.mat.Blend.Zero);
	this.set_colorMask(15);
};
$hxClasses["h3d.mat.Material"] = h3d.mat.Material;
h3d.mat.Material.__name__ = ["h3d","mat","Material"];
h3d.mat.Material.prototype = {
	set_colorMask: function(m) {
		m &= 15;
		this.colorMask = m;
		this.bits = this.bits & -245761 | m << 14;
		return m;
	}
	,set_blendDst: function(b) {
		this.blendDst = b;
		this.bits = this.bits & -15361 | b[1] << 10;
		return b;
	}
	,set_blendSrc: function(b) {
		this.blendSrc = b;
		this.bits = this.bits & -961 | b[1] << 6;
		return b;
	}
	,set_depthTest: function(c) {
		this.depthTest = c;
		this.bits = this.bits & -57 | c[1] << 3;
		return c;
	}
	,set_depthWrite: function(b) {
		this.depthWrite = b;
		this.bits = this.bits & -5 | (b?1:0) << 2;
		return b;
	}
	,set_culling: function(f) {
		this.culling = f;
		this.bits = this.bits & -4 | f[1];
		return f;
	}
	,depth: function(write,test) {
		this.set_depthWrite(write);
		this.set_depthTest(test);
	}
	,blend: function(src,dst) {
		this.set_blendSrc(src);
		this.set_blendDst(dst);
	}
	,__class__: h3d.mat.Material
}
h3d.mat._MeshMaterial = {}
h3d.mat._MeshMaterial.MeshShader = function() {
	this.maxSkinMatrixes = 34;
};
$hxClasses["h3d.mat._MeshMaterial.MeshShader"] = h3d.mat._MeshMaterial.MeshShader;
h3d.mat._MeshMaterial.MeshShader.__name__ = ["h3d","mat","_MeshMaterial","MeshShader"];
h3d.mat._MeshMaterial.MeshShader.__super__ = h3d.impl.Shader;
h3d.mat._MeshMaterial.MeshShader.prototype = $extend(h3d.impl.Shader.prototype,{
	getConstants: function(vertex) {
		var cst = [];
		if(this.hasVertexColor) cst.push("#define hasVertexColor");
		if(this.hasVertexColorAdd) cst.push("#define hasVertexColorAdd");
		if(this.fog != null) cst.push("#define hasFog");
		if(this.hasBlend) cst.push("#define hasBlend");
		if(this.hasShadowMap) cst.push("#define hasShadowMap");
		if(this.lightSystem != null) {
			cst.push("#define hasLightSystem");
			cst.push("const int numDirLights = " + this.lightSystem.dirs.length + ";");
			cst.push("const int numPointLights = " + this.lightSystem.points.length + ";");
		}
		if(vertex) {
			if(this.mpos != null) cst.push("#define hasPos");
			if(this.hasSkin) {
				cst.push("#define hasSkin");
				cst.push("const int maxSkinMatrixes = " + this.maxSkinMatrixes + ";");
			}
			if(this.uvScale != null) cst.push("#define hasUVScale");
			if(this.uvDelta != null) cst.push("#define hasUVDelta");
			if(this.hasZBias) cst.push("#define hasZBias");
		} else {
			if(this.killAlpha) cst.push("#define killAlpha");
			if(this.colorAdd != null) cst.push("#define hasColorAdd");
			if(this.colorMul != null) cst.push("#define hasColorMul");
			if(this.colorMatrix != null) cst.push("#define hasColorMatrix");
			if(this.hasAlphaMap) cst.push("#define hasAlphaMap");
			if(this.hasGlow) cst.push("#define hasGlow");
			if(this.hasVertexColorAdd || this.lightSystem != null) cst.push("#define hasFragColor");
		}
		return cst.join("\n");
	}
	,__class__: h3d.mat._MeshMaterial.MeshShader
});
h3d.mat.Texture = function(m,fmt,w,h,c,ta,mm) {
	this.id = ++h3d.mat.Texture.UID;
	this.format = fmt;
	this.mem = m;
	this.isTarget = ta;
	this.width = w;
	this.height = h;
	this.isCubic = c;
	this.mipLevels = mm;
	this.set_mipMap(mm > 0?h3d.mat.MipMap.Nearest:h3d.mat.MipMap.None);
	this.set_filter(h3d.mat.Filter.Linear);
	this.set_wrap(h3d.mat.Wrap.Clamp);
	this.bits &= 32767;
};
$hxClasses["h3d.mat.Texture"] = h3d.mat.Texture;
h3d.mat.Texture.__name__ = ["h3d","mat","Texture"];
h3d.mat.Texture.prototype = {
	dispose: function() {
		if(this.t != null) this.mem.deleteTexture(this);
	}
	,uploadBytes: function(bmp,mipLevel,side) {
		if(side == null) side = 0;
		if(mipLevel == null) mipLevel = 0;
		this.mem.driver.uploadTextureBytes(this,bmp,mipLevel,side);
	}
	,uploadBitmap: function(bmp,mipLevel,side) {
		if(side == null) side = 0;
		if(mipLevel == null) mipLevel = 0;
		this.mem.driver.uploadTextureBitmap(this,bmp,mipLevel,side);
	}
	,resize: function(width,height) {
		this.mem.resizeTexture(this,width,height);
	}
	,isDisposed: function() {
		return this.t == null;
	}
	,set_wrap: function(w) {
		this.bits |= 524288;
		this.bits = this.bits & -193 | w[1] << 6;
		return this.wrap = w;
	}
	,set_filter: function(f) {
		this.bits |= 524288;
		this.bits = this.bits & -25 | f[1] << 3;
		return this.filter = f;
	}
	,set_mipMap: function(m) {
		this.bits |= 524288;
		this.bits = this.bits & -4 | m[1];
		return this.mipMap = m;
	}
	,__class__: h3d.mat.Texture
}
h3d.scene = {}
h3d.scene.RenderContext = function() {
	this.time = 0.;
	this.elapsedTime = 1. / hxd.Stage.getInstance().getFrameRate();
};
$hxClasses["h3d.scene.RenderContext"] = h3d.scene.RenderContext;
h3d.scene.RenderContext.__name__ = ["h3d","scene","RenderContext"];
h3d.scene.RenderContext.prototype = {
	__class__: h3d.scene.RenderContext
}
haxe.Resource = function() { }
$hxClasses["haxe.Resource"] = haxe.Resource;
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.getBytes = function(name) {
	var _g = 0;
	var _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return haxe.io.Bytes.ofString(x.str);
			return haxe.Unserializer.run(x.data);
		}
	}
	return null;
}
haxe.Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe.Unserializer;
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0;
	var _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
}
haxe.Unserializer.run = function(v) {
	return new haxe.Unserializer(v).unserialize();
}
haxe.Unserializer.prototype = {
	unserialize: function() {
		var _g = this.get(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			var p1 = this.pos;
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
			}
			return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
		case 121:
			var len = this.readDigits();
			if(this.get(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = StringTools.urlDecode(s);
			this.scache.push(s);
			return s;
		case 107:
			return Math.NaN;
		case 109:
			return Math.NEGATIVE_INFINITY;
		case 112:
			return Math.POSITIVE_INFINITY;
		case 97:
			var buf = this.buf;
			var a = new Array();
			this.cache.push(a);
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c == 104) {
					this.pos++;
					break;
				}
				if(c == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n = this.readDigits();
			if(n < 0 || n >= this.cache.length) throw "Invalid reference";
			return this.cache[n];
		case 82:
			var n = this.readDigits();
			if(n < 0 || n >= this.scache.length) throw "Invalid string reference";
			return this.scache[n];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 119:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl)[index];
			if(tag == null) throw "Unknown enum index " + name + "@" + index;
			var e = this.unserializeEnum(edecl,tag);
			this.cache.push(e);
			return e;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe.ds.StringMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h = new haxe.ds.IntMap();
			this.cache.push(h);
			var buf = this.buf;
			var c = this.get(this.pos++);
			while(c == 58) {
				var i = this.readDigits();
				h.set(i,this.unserialize());
				c = this.get(this.pos++);
			}
			if(c != 104) throw "Invalid IntMap format";
			return h;
		case 77:
			var h = new haxe.ds.ObjectMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 118:
			var d;
			var s = HxOverrides.substr(this.buf,this.pos,19);
			d = HxOverrides.strDate(s);
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len = this.readDigits();
			var buf = this.buf;
			if(this.get(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid bytes length";
			var codes = haxe.Unserializer.CODES;
			if(codes == null) {
				codes = haxe.Unserializer.initCodes();
				haxe.Unserializer.CODES = codes;
			}
			var i = this.pos;
			var rest = len & 3;
			var size;
			size = (len >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i + (len - rest);
			var bytes = haxe.io.Bytes.alloc(size);
			var bpos = 0;
			while(i < max) {
				var c1 = codes[StringTools.fastCodeAt(buf,i++)];
				var c2 = codes[StringTools.fastCodeAt(buf,i++)];
				bytes.set(bpos++,c1 << 2 | c2 >> 4);
				var c3 = codes[StringTools.fastCodeAt(buf,i++)];
				bytes.set(bpos++,c2 << 4 | c3 >> 2);
				var c4 = codes[StringTools.fastCodeAt(buf,i++)];
				bytes.set(bpos++,c3 << 6 | c4);
			}
			if(rest >= 2) {
				var c1 = codes[StringTools.fastCodeAt(buf,i++)];
				var c2 = codes[StringTools.fastCodeAt(buf,i++)];
				bytes.set(bpos++,c1 << 2 | c2 >> 4);
				if(rest == 3) {
					var c3 = codes[StringTools.fastCodeAt(buf,i++)];
					bytes.set(bpos++,c2 << 4 | c3 >> 2);
				}
			}
			this.pos += len;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			o.hxUnserialize(this);
			if(this.get(this.pos++) != 103) throw "Invalid custom data";
			return o;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.get(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!js.Boot.__instanceof(k,String)) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,get: function(p) {
		return this.buf.charCodeAt(p);
	}
	,setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_) {
			return null;
		}}; else this.resolver = r;
	}
	,__class__: haxe.Unserializer
}
haxe.crypto = {}
haxe.crypto.Crc32 = function() {
	this.crc = -1;
};
$hxClasses["haxe.crypto.Crc32"] = haxe.crypto.Crc32;
haxe.crypto.Crc32.__name__ = ["haxe","crypto","Crc32"];
haxe.crypto.Crc32.prototype = {
	get: function() {
		return this.crc ^ -1;
	}
	,update: function(b,pos,len) {
		var b1 = b.b;
		var _g1 = pos;
		var _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			var tmp = (this.crc ^ b1[i]) & 255;
			var _g2 = 0;
			while(_g2 < 8) {
				var j = _g2++;
				if((tmp & 1) == 1) tmp = tmp >>> 1 ^ -306674912; else tmp >>>= 1;
			}
			this.crc = this.crc >>> 8 ^ tmp;
		}
	}
	,'byte': function(b) {
		var tmp = (this.crc ^ b) & 255;
		var _g = 0;
		while(_g < 8) {
			var j = _g++;
			if((tmp & 1) == 1) tmp = tmp >>> 1 ^ -306674912; else tmp >>>= 1;
		}
		this.crc = this.crc >>> 8 ^ tmp;
	}
	,__class__: haxe.crypto.Crc32
}
haxe.ds = {}
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = ["haxe","ds","IntMap"];
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,get: function(key) {
		return this.h[key];
	}
	,set: function(key,value) {
		this.h[key] = value;
	}
	,__class__: haxe.ds.IntMap
}
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
haxe.ds.ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		var id = key.__id__;
		if(!this.h.hasOwnProperty(id)) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,set: function(key,value) {
		var id;
		if(key.__id__ != null) id = key.__id__; else id = key.__id__ = ++haxe.ds.ObjectMap.count;
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,__class__: haxe.ds.ObjectMap
}
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	get: function(key) {
		return this.h["$" + key];
	}
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,__class__: haxe.ds.StringMap
}
haxe.io = {}
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
}
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var _g1 = 0;
	var _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = s.charCodeAt(i);
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe.io.Bytes(a.length,a);
}
haxe.io.Bytes.prototype = {
	toString: function() {
		return this.readString(0,this.length);
	}
	,readString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c2 = b[i++];
				var c3 = b[i++];
				s += fcc((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
			}
		}
		return s;
	}
	,blit: function(pos,src,srcpos,len) {
		if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw haxe.io.Error.OutsideBounds;
		var b1 = this.b;
		var b2 = src.b;
		if(b1 == b2 && pos > srcpos) {
			var i = len;
			while(i > 0) {
				i--;
				b1[i + pos] = b2[i + srcpos];
			}
			return;
		}
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b1[i + pos] = b2[i + srcpos];
		}
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,get: function(pos) {
		return this.b[pos];
	}
	,__class__: haxe.io.Bytes
}
haxe.io.BytesBuffer = function() {
	this.b = new Array();
};
$hxClasses["haxe.io.BytesBuffer"] = haxe.io.BytesBuffer;
haxe.io.BytesBuffer.__name__ = ["haxe","io","BytesBuffer"];
haxe.io.BytesBuffer.prototype = {
	getBytes: function() {
		var bytes = new haxe.io.Bytes(this.b.length,this.b);
		this.b = null;
		return bytes;
	}
	,addBytes: function(src,pos,len) {
		if(pos < 0 || len < 0 || pos + len > src.length) throw haxe.io.Error.OutsideBounds;
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = pos;
		var _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
	,add: function(src) {
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = 0;
		var _g = src.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
	,__class__: haxe.io.BytesBuffer
}
haxe.io.Input = function() { }
$hxClasses["haxe.io.Input"] = haxe.io.Input;
haxe.io.Input.__name__ = ["haxe","io","Input"];
haxe.io.Input.prototype = {
	readString: function(len) {
		var b = haxe.io.Bytes.alloc(len);
		this.readFullBytes(b,0,len);
		return b.toString();
	}
	,readInt32: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var ch4 = this.readByte();
		if(this.bigEndian) return ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24; else return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
	}
	,readUInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		if(this.bigEndian) return ch2 | ch1 << 8; else return ch1 | ch2 << 8;
	}
	,read: function(nbytes) {
		var s = haxe.io.Bytes.alloc(nbytes);
		var p = 0;
		while(nbytes > 0) {
			var k = this.readBytes(s,p,nbytes);
			if(k == 0) throw haxe.io.Error.Blocked;
			p += k;
			nbytes -= k;
		}
		return s;
	}
	,readFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.readBytes(s,pos,len);
			pos += k;
			len -= k;
		}
	}
	,set_bigEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) throw haxe.io.Error.OutsideBounds;
		while(k > 0) {
			b[pos] = this.readByte();
			pos++;
			k--;
		}
		return len;
	}
	,readByte: function() {
		throw "Not implemented";
	}
	,__class__: haxe.io.Input
}
haxe.io.BytesInput = function(b,pos,len) {
	if(pos == null) pos = 0;
	if(len == null) len = b.length - pos;
	if(pos < 0 || len < 0 || pos + len > b.length) throw haxe.io.Error.OutsideBounds;
	this.b = b.b;
	this.pos = pos;
	this.len = len;
	this.totlen = len;
};
$hxClasses["haxe.io.BytesInput"] = haxe.io.BytesInput;
haxe.io.BytesInput.__name__ = ["haxe","io","BytesInput"];
haxe.io.BytesInput.__super__ = haxe.io.Input;
haxe.io.BytesInput.prototype = $extend(haxe.io.Input.prototype,{
	readBytes: function(buf,pos,len) {
		if(pos < 0 || len < 0 || pos + len > buf.length) throw haxe.io.Error.OutsideBounds;
		if(this.len == 0 && len > 0) throw new haxe.io.Eof();
		if(this.len < len) len = this.len;
		var b1 = this.b;
		var b2 = buf.b;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b2[pos + i] = b1[this.pos + i];
		}
		this.pos += len;
		this.len -= len;
		return len;
	}
	,readByte: function() {
		if(this.len == 0) throw new haxe.io.Eof();
		this.len--;
		return this.b[this.pos++];
	}
	,__class__: haxe.io.BytesInput
});
haxe.io.Eof = function() {
};
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
}
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : true, __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
var hxd = {}
hxd._BitmapData = {}
hxd._BitmapData.BitmapData_Impl_ = function() { }
$hxClasses["hxd._BitmapData.BitmapData_Impl_"] = hxd._BitmapData.BitmapData_Impl_;
hxd._BitmapData.BitmapData_Impl_.__name__ = ["hxd","_BitmapData","BitmapData_Impl_"];
hxd._BitmapData.BitmapData_Impl_.nativeGetBytes = function(b) {
	throw "TODO";
	return null;
}
hxd.EventKind = $hxClasses["hxd.EventKind"] = { __ename__ : true, __constructs__ : ["EPush","ERelease","EMove","EOver","EOut","EWheel","EFocus","EFocusLost","EKeyDown","EKeyUp"] }
hxd.EventKind.EPush = ["EPush",0];
hxd.EventKind.EPush.toString = $estr;
hxd.EventKind.EPush.__enum__ = hxd.EventKind;
hxd.EventKind.ERelease = ["ERelease",1];
hxd.EventKind.ERelease.toString = $estr;
hxd.EventKind.ERelease.__enum__ = hxd.EventKind;
hxd.EventKind.EMove = ["EMove",2];
hxd.EventKind.EMove.toString = $estr;
hxd.EventKind.EMove.__enum__ = hxd.EventKind;
hxd.EventKind.EOver = ["EOver",3];
hxd.EventKind.EOver.toString = $estr;
hxd.EventKind.EOver.__enum__ = hxd.EventKind;
hxd.EventKind.EOut = ["EOut",4];
hxd.EventKind.EOut.toString = $estr;
hxd.EventKind.EOut.__enum__ = hxd.EventKind;
hxd.EventKind.EWheel = ["EWheel",5];
hxd.EventKind.EWheel.toString = $estr;
hxd.EventKind.EWheel.__enum__ = hxd.EventKind;
hxd.EventKind.EFocus = ["EFocus",6];
hxd.EventKind.EFocus.toString = $estr;
hxd.EventKind.EFocus.__enum__ = hxd.EventKind;
hxd.EventKind.EFocusLost = ["EFocusLost",7];
hxd.EventKind.EFocusLost.toString = $estr;
hxd.EventKind.EFocusLost.__enum__ = hxd.EventKind;
hxd.EventKind.EKeyDown = ["EKeyDown",8];
hxd.EventKind.EKeyDown.toString = $estr;
hxd.EventKind.EKeyDown.__enum__ = hxd.EventKind;
hxd.EventKind.EKeyUp = ["EKeyUp",9];
hxd.EventKind.EKeyUp.toString = $estr;
hxd.EventKind.EKeyUp.__enum__ = hxd.EventKind;
hxd.Event = function(k,x,y) {
	if(y == null) y = 0.;
	if(x == null) x = 0.;
	this.kind = k;
	this.relX = x;
	this.relY = y;
};
$hxClasses["hxd.Event"] = hxd.Event;
hxd.Event.__name__ = ["hxd","Event"];
hxd.Event.prototype = {
	__class__: hxd.Event
}
hxd.Key = function() { }
$hxClasses["hxd.Key"] = hxd.Key;
hxd.Key.__name__ = ["hxd","Key"];
hxd.Key.isPressed = function(code) {
	return hxd.Key.keyPressed[code] == h3d.Engine.getCurrent().frameCount + 1;
}
hxd.Key.initialize = function() {
	if(hxd.Key.initDone) hxd.Key.dispose();
	hxd.Key.initDone = true;
	hxd.Key.keyPressed = [];
	hxd.Stage.getInstance().addEventTarget(hxd.Key.onKeyEvent);
}
hxd.Key.dispose = function() {
	if(hxd.Key.initDone) {
		hxd.Stage.getInstance().removeEventTarget(hxd.Key.onKeyEvent);
		hxd.Key.initDone = false;
		hxd.Key.keyPressed = [];
	}
}
hxd.Key.onKeyEvent = function(e) {
	switch(e.kind[1]) {
	case 8:
		hxd.Key.keyPressed[e.keyCode] = h3d.Engine.getCurrent().frameCount + 1;
		break;
	case 9:
		hxd.Key.keyPressed[e.keyCode] = -(h3d.Engine.getCurrent().frameCount + 1);
		break;
	default:
	}
}
hxd.Res = function() { }
$hxClasses["hxd.Res"] = hxd.Res;
hxd.Res.__name__ = ["hxd","Res"];
hxd.Res.load = function(name) {
	return hxd.Res.loader.load(name);
}
hxd.Stage = function() {
	this.eventTargets = new List();
	this.resizeEvents = new List();
	window.addEventListener("mousedown",$bind(this,this.onMouseDown));
	window.addEventListener("mousemove",$bind(this,this.onMouseMove));
	window.addEventListener("mouseup",$bind(this,this.onMouseUp));
	window.addEventListener("mousewheel",$bind(this,this.onMouseWheel));
	window.addEventListener("keydown",$bind(this,this.onKeyDown));
	window.addEventListener("keyup",$bind(this,this.onKeyUp));
	window.addEventListener("resize",$bind(this,this.onResize));
};
$hxClasses["hxd.Stage"] = hxd.Stage;
hxd.Stage.__name__ = ["hxd","Stage"];
hxd.Stage.getInstance = function() {
	if(hxd.Stage.inst == null) hxd.Stage.inst = new hxd.Stage();
	return hxd.Stage.inst;
}
hxd.Stage.prototype = {
	onResize: function(e) {
		var $it0 = this.resizeEvents.iterator();
		while( $it0.hasNext() ) {
			var r = $it0.next();
			r();
		}
	}
	,onKeyDown: function(e) {
		var ev = new hxd.Event(hxd.EventKind.EKeyDown);
		ev.keyCode = e.keyCode;
		ev.charCode = e.charCode;
		this.event(ev);
	}
	,onKeyUp: function(e) {
		var ev = new hxd.Event(hxd.EventKind.EKeyUp);
		ev.keyCode = e.keyCode;
		ev.charCode = e.charCode;
		this.event(ev);
	}
	,onMouseWheel: function(e) {
		var ev = new hxd.Event(hxd.EventKind.EWheel,this.get_mouseX(),this.get_mouseY());
		ev.wheelDelta = -e.wheelDelta / 30.0;
		this.event(ev);
	}
	,onMouseMove: function(e) {
		this.curMouseX = e.clientX;
		this.curMouseY = e.clientY;
		this.event(new hxd.Event(hxd.EventKind.EMove,this.get_mouseX(),this.get_mouseY()));
	}
	,onMouseUp: function(e) {
		this.event(new hxd.Event(hxd.EventKind.ERelease,this.get_mouseX(),this.get_mouseY()));
	}
	,onMouseDown: function(e) {
		this.event(new hxd.Event(hxd.EventKind.EPush,this.get_mouseX(),this.get_mouseY()));
	}
	,get_mouseY: function() {
		return this.curMouseY;
	}
	,get_mouseX: function() {
		return this.curMouseX;
	}
	,setFullScreen: function(v) {
	}
	,getFrameRate: function() {
		return 60.;
	}
	,addResizeEvent: function(f) {
		this.resizeEvents.push(f);
	}
	,removeEventTarget: function(et) {
		this.eventTargets.remove(et);
	}
	,addEventTarget: function(et) {
		this.eventTargets.add(et);
	}
	,event: function(e) {
		var $it0 = this.eventTargets.iterator();
		while( $it0.hasNext() ) {
			var et = $it0.next();
			et(e);
		}
	}
	,__class__: hxd.Stage
}
hxd.Cursor = $hxClasses["hxd.Cursor"] = { __ename__ : true, __constructs__ : ["Default","Button","Hand","TextInput"] }
hxd.Cursor.Default = ["Default",0];
hxd.Cursor.Default.toString = $estr;
hxd.Cursor.Default.__enum__ = hxd.Cursor;
hxd.Cursor.Button = ["Button",1];
hxd.Cursor.Button.toString = $estr;
hxd.Cursor.Button.__enum__ = hxd.Cursor;
hxd.Cursor.Hand = ["Hand",2];
hxd.Cursor.Hand.toString = $estr;
hxd.Cursor.Hand.__enum__ = hxd.Cursor;
hxd.Cursor.TextInput = ["TextInput",3];
hxd.Cursor.TextInput.toString = $estr;
hxd.Cursor.TextInput.__enum__ = hxd.Cursor;
hxd.System = function() { }
$hxClasses["hxd.System"] = hxd.System;
hxd.System.__name__ = ["hxd","System"];
hxd.System.loopFunc = function() {
	var $window = window;
	var rqf = $window.requestAnimationFrame || $window.webkitRequestAnimationFrame || $window.mozRequestAnimationFrame;
	rqf(hxd.System.loopFunc);
	if(hxd.System.LOOP != null) hxd.System.LOOP();
}
hxd.System.setLoop = function(f) {
	if(!hxd.System.LOOP_INIT) {
		hxd.System.LOOP_INIT = true;
		hxd.System.loopFunc();
	}
	hxd.System.LOOP = f;
}
hxd.System.setCursor = function(c) {
	throw "TODO";
}
hxd.System.get_lang = function() {
	return "en";
}
hxd.System.get_isWindowed = function() {
	return true;
}
hxd.System.get_width = function() {
	return window.document.width;
}
hxd.System.get_height = function() {
	return window.document.height;
}
hxd.impl = {}
hxd.impl.Tmp = function() { }
$hxClasses["hxd.impl.Tmp"] = hxd.impl.Tmp;
hxd.impl.Tmp.__name__ = ["hxd","impl","Tmp"];
hxd.impl.Tmp.getBytes = function(size) {
	var _g1 = 0;
	var _g = hxd.impl.Tmp.bytes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var b = hxd.impl.Tmp.bytes[i];
		if(b.length >= size) {
			hxd.impl.Tmp.bytes.splice(i,1);
			return b;
		}
	}
	var sz = 1024;
	while(sz < size) sz = sz * 3 >> 1;
	return haxe.io.Bytes.alloc(sz);
}
hxd.impl.Tmp.saveBytes = function(b) {
	var _g1 = 0;
	var _g = hxd.impl.Tmp.bytes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(hxd.impl.Tmp.bytes[i].length <= b.length) {
			hxd.impl.Tmp.bytes.splice(i,0,b);
			if(hxd.impl.Tmp.bytes.length > 8) hxd.impl.Tmp.bytes.pop();
			return;
		}
	}
	hxd.impl.Tmp.bytes.push(b);
}
hxd.res = {}
hxd.res.Resource = function(entry) {
	this.entry = entry;
};
$hxClasses["hxd.res.Resource"] = hxd.res.Resource;
hxd.res.Resource.__name__ = ["hxd","res","Resource"];
hxd.res.Resource.prototype = {
	__class__: hxd.res.Resource
}
hxd.res.Any = function(loader,entry) {
	hxd.res.Resource.call(this,entry);
	this.loader = loader;
};
$hxClasses["hxd.res.Any"] = hxd.res.Any;
hxd.res.Any.__name__ = ["hxd","res","Any"];
hxd.res.Any.__super__ = hxd.res.Resource;
hxd.res.Any.prototype = $extend(hxd.res.Resource.prototype,{
	toSound: function() {
		return this.loader.loadSound(this.entry.get_path());
	}
	,__class__: hxd.res.Any
});
hxd.res.FileEntry = function() { }
$hxClasses["hxd.res.FileEntry"] = hxd.res.FileEntry;
hxd.res.FileEntry.__name__ = ["hxd","res","FileEntry"];
hxd.res.FileEntry.prototype = {
	get_path: function() {
		return this.name;
	}
	,get_isAvailable: function() {
		return true;
	}
	,loadBitmap: function(onLoaded) {
	}
	,load: function(onReady) {
	}
	,close: function() {
	}
	,read: function(out,pos,size) {
	}
	,readByte: function() {
		return 0;
	}
	,skip: function(nbytes) {
	}
	,open: function() {
	}
	,getBytes: function() {
		return null;
	}
	,__class__: hxd.res.FileEntry
}
hxd.res._EmbedFileSystem = {}
hxd.res._EmbedFileSystem.EmbedEntry = function(fs,name,relPath,data) {
	this.fs = fs;
	this.name = name;
	this.relPath = relPath;
	this.data = data;
};
$hxClasses["hxd.res._EmbedFileSystem.EmbedEntry"] = hxd.res._EmbedFileSystem.EmbedEntry;
hxd.res._EmbedFileSystem.EmbedEntry.__name__ = ["hxd","res","_EmbedFileSystem","EmbedEntry"];
hxd.res._EmbedFileSystem.EmbedEntry.__super__ = hxd.res.FileEntry;
hxd.res._EmbedFileSystem.EmbedEntry.prototype = $extend(hxd.res.FileEntry.prototype,{
	get_path: function() {
		if(this.relPath == null) return "<root>"; else return this.relPath;
	}
	,loadBitmap: function(onLoaded) {
		throw "TODO";
	}
	,load: function(onReady) {
		if(onReady != null) haxe.Timer.delay(onReady,1);
	}
	,close: function() {
		this.bytes = null;
		this.readPos = 0;
	}
	,read: function(out,pos,size) {
		out.blit(pos,this.bytes,this.readPos,size);
		this.readPos += size;
	}
	,readByte: function() {
		return this.bytes.get(this.readPos++);
	}
	,skip: function(nbytes) {
		this.readPos += nbytes;
	}
	,open: function() {
		if(this.bytes == null) {
			this.bytes = haxe.Resource.getBytes(this.data);
			if(this.bytes == null) throw "Missing resource " + this.data;
		}
		this.readPos = 0;
	}
	,getBytes: function() {
		if(this.bytes == null) this.open();
		return this.bytes;
	}
	,__class__: hxd.res._EmbedFileSystem.EmbedEntry
});
hxd.res.FileSystem = function() { }
$hxClasses["hxd.res.FileSystem"] = hxd.res.FileSystem;
hxd.res.FileSystem.__name__ = ["hxd","res","FileSystem"];
hxd.res.FileSystem.prototype = {
	__class__: hxd.res.FileSystem
}
hxd.res.EmbedFileSystem = function(root) {
	this.root = root;
};
$hxClasses["hxd.res.EmbedFileSystem"] = hxd.res.EmbedFileSystem;
hxd.res.EmbedFileSystem.__name__ = ["hxd","res","EmbedFileSystem"];
hxd.res.EmbedFileSystem.__interfaces__ = [hxd.res.FileSystem];
hxd.res.EmbedFileSystem.resolve = function(path) {
	return "R_" + hxd.res.EmbedFileSystem.invalidChars.replace(path,"_");
}
hxd.res.EmbedFileSystem.prototype = {
	get: function(path) {
		var id = hxd.res.EmbedFileSystem.resolve(path);
		return new hxd.res._EmbedFileSystem.EmbedEntry(this,path.split("/").pop(),path,id);
	}
	,__class__: hxd.res.EmbedFileSystem
}
hxd.res.FileInput = function(f) {
	this.f = f;
	f.open();
};
$hxClasses["hxd.res.FileInput"] = hxd.res.FileInput;
hxd.res.FileInput.__name__ = ["hxd","res","FileInput"];
hxd.res.FileInput.__super__ = haxe.io.Input;
hxd.res.FileInput.prototype = $extend(haxe.io.Input.prototype,{
	close: function() {
		this.f.close();
	}
	,readBytes: function(b,pos,len) {
		this.f.read(b,pos,len);
		return len;
	}
	,readByte: function() {
		return this.f.readByte();
	}
	,skip: function(nbytes) {
		this.f.skip(nbytes);
	}
	,__class__: hxd.res.FileInput
});
hxd.res.Loader = function(fs) {
	this.fs = fs;
	this.modelCache = new haxe.ds.StringMap();
	this.textureCache = new haxe.ds.StringMap();
	this.soundCache = new haxe.ds.StringMap();
};
$hxClasses["hxd.res.Loader"] = hxd.res.Loader;
hxd.res.Loader.__name__ = ["hxd","res","Loader"];
hxd.res.Loader.prototype = {
	loadSound: function(path) {
		var s = this.soundCache.get(path);
		if(s == null) {
			s = new hxd.res.Sound(this.fs.get(path));
			this.soundCache.set(path,s);
		}
		return s;
	}
	,loadTexture: function(path) {
		var t = this.textureCache.get(path);
		if(t == null) {
			t = new hxd.res.Texture(this.fs.get(path));
			this.textureCache.set(path,t);
		}
		return t;
	}
	,load: function(path) {
		return new hxd.res.Any(this,this.fs.get(path));
	}
	,__class__: hxd.res.Loader
}
hxd.res.Model = function() { }
$hxClasses["hxd.res.Model"] = hxd.res.Model;
hxd.res.Model.__name__ = ["hxd","res","Model"];
hxd.res.Model.__super__ = hxd.res.Resource;
hxd.res.Model.prototype = $extend(hxd.res.Resource.prototype,{
	__class__: hxd.res.Model
});
hxd.res.Sound = function(entry) {
	hxd.res.Resource.call(this,entry);
};
$hxClasses["hxd.res.Sound"] = hxd.res.Sound;
hxd.res.Sound.__name__ = ["hxd","res","Sound"];
hxd.res.Sound.__super__ = hxd.res.Resource;
hxd.res.Sound.prototype = $extend(hxd.res.Resource.prototype,{
	play: function() {
	}
	,__class__: hxd.res.Sound
});
hxd.res.Texture = function(entry) {
	hxd.res.Resource.call(this,entry);
};
$hxClasses["hxd.res.Texture"] = hxd.res.Texture;
hxd.res.Texture.__name__ = ["hxd","res","Texture"];
hxd.res.Texture.__super__ = hxd.res.Resource;
hxd.res.Texture.prototype = $extend(hxd.res.Resource.prototype,{
	toTile: function() {
		var size = this.getSize();
		return h2d.Tile.fromTexture(this.toTexture()).sub(0,0,size.width,size.height);
	}
	,toTexture: function() {
		var _g = this;
		if(this.tex != null && !this.tex.isDisposed()) return this.tex;
		if(this.tex != null) {
			this.tex.dispose();
			this.tex = null;
		}
		this.getSize();
		var w = this.inf.width;
		var h = this.inf.height;
		var tw = 1;
		var th = 1;
		while(tw < w) tw <<= 1;
		while(th < h) th <<= 1;
		if(this.inf.isPNG && this.entry.get_isAvailable()) {
			this.needResize = false;
			this.tex = h3d.Engine.getCurrent().mem.allocTexture(tw,th,false);
		} else {
			this.needResize = true;
			this.tex = h3d.Engine.getCurrent().mem.allocTexture(1,1,false);
			this.tex.uploadBytes(hxd.res.Texture.TMP);
			this.tex.width = tw;
			this.tex.height = th;
		}
		this.loadTexture();
		this.tex.onContextLost = function() {
			_g.needResize = false;
			_g.loadTexture();
			return true;
		};
		return this.tex;
	}
	,loadTexture: function() {
		var _g = this;
		var tw = this.tex.width;
		var th = this.tex.height;
		var w = this.inf.width;
		var h = this.inf.height;
		var isSquare = w == tw && h == th;
		if(this.inf.isPNG) {
			var load = function() {
				if(_g.needResize) {
					_g.tex.resize(tw,th);
					_g.needResize = false;
				}
				var bytes = _g.getPixels();
				if(!isSquare) bytes = _g.makeSquare(bytes);
				_g.tex.uploadBytes(bytes);
				hxd.impl.Tmp.saveBytes(bytes);
			};
			if(this.entry.get_isAvailable()) load(); else this.entry.load(load);
		} else this.entry.loadBitmap(function(bmp) {
			if(_g.needResize) {
				_g.tex.resize(tw,th);
				_g.needResize = false;
			}
			if(isSquare) _g.tex.uploadBitmap(bmp); else {
				var bytes = _g.makeSquare(hxd._BitmapData.BitmapData_Impl_.nativeGetBytes(bmp));
				_g.tex.uploadBytes(bytes);
				hxd.impl.Tmp.saveBytes(bytes);
			}
			null;
		});
	}
	,makeSquare: function(bmp) {
		var tw = this.tex.width;
		var th = this.tex.height;
		var w = this.inf.width;
		var h = this.inf.height;
		var out = hxd.impl.Tmp.getBytes(tw * th * 4);
		var p = 0;
		var b = 0;
		var _g = 0;
		while(_g < h) {
			var y = _g++;
			out.blit(p,bmp,b,w * 4);
			p += w * 4;
			b += w * 4;
			var _g2 = 0;
			var _g1 = (tw - w) * 4;
			while(_g2 < _g1) {
				var i = _g2++;
				out.set(p++,0);
			}
		}
		var _g1 = 0;
		var _g = (th - h) * tw * 4;
		while(_g1 < _g) {
			var i = _g1++;
			out.set(p++,0);
		}
		hxd.impl.Tmp.saveBytes(bmp);
		return out;
	}
	,getPixels: function() {
		this.getSize();
		if(this.inf.isPNG) {
			var png = new format.png.Reader(new haxe.io.BytesInput(this.entry.getBytes()));
			png.checkCRC = false;
			var bytes = hxd.impl.Tmp.getBytes(this.inf.width * this.inf.height * 4);
			format.png.Tools.extract32(png.read(),bytes);
			return bytes;
		} else {
			throw "getPixels not supported for " + this.entry.name;
			return null;
		}
	}
	,getSize: function() {
		if(this.inf != null) return this.inf;
		var f = new hxd.res.FileInput(this.entry);
		var width = 0;
		var height = 0;
		var isPNG = false;
		var _g = f.readUInt16();
		switch(_g) {
		case 55551:
			f.set_bigEndian(true);
			try {
				while(true) {
					var _g1 = f.readUInt16();
					switch(_g1) {
					case 65474:case 65472:
						var len = f.readUInt16();
						var prec = f.readByte();
						height = f.readUInt16();
						width = f.readUInt16();
						throw "__break__";
						break;
					default:
						f.skip(f.readUInt16() - 2);
					}
				}
			} catch( e ) { if( e != "__break__" ) throw e; }
			break;
		case 20617:
			isPNG = true;
			var TMP = hxd.impl.Tmp.getBytes(256);
			f.set_bigEndian(true);
			f.readBytes(TMP,0,6);
			while(true) {
				var dataLen = f.readInt32();
				if(f.readInt32() == 1229472850) {
					width = f.readInt32();
					height = f.readInt32();
					break;
				}
				while(dataLen > 0) {
					var k;
					if(dataLen > TMP.length) k = TMP.length; else k = dataLen;
					f.readBytes(TMP,0,k);
					dataLen -= k;
				}
				var crc = f.readInt32();
			}
			hxd.impl.Tmp.saveBytes(TMP);
			break;
		default:
			throw "Unsupported texture format " + this.entry.get_path();
		}
		f.close();
		this.inf = { width : width, height : height, isPNG : isPNG};
		return this.inf;
	}
	,__class__: hxd.res.Texture
});
var js = {}
js.Boot = function() { }
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					if(cl == Array) return o.__enum__ == null;
					return true;
				}
				if(js.Boot.__interfLoop(o.__class__,cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
}
js.html = {}
js.html._CanvasElement = {}
js.html._CanvasElement.CanvasUtil = function() { }
$hxClasses["js.html._CanvasElement.CanvasUtil"] = js.html._CanvasElement.CanvasUtil;
js.html._CanvasElement.CanvasUtil.__name__ = ["js","html","_CanvasElement","CanvasUtil"];
js.html._CanvasElement.CanvasUtil.getContextWebGL = function(canvas,attribs) {
	var _g = 0;
	var _g1 = ["webgl","experimental-webgl"];
	while(_g < _g1.length) {
		var name = _g1[_g];
		++_g;
		var ctx = canvas.getContext(name,attribs);
		if(ctx != null) return ctx;
	}
	return null;
}
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; };
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; };
if(Array.prototype.indexOf) HxOverrides.remove = function(a,o) {
	var i = a.indexOf(o);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i) {
	return isNaN(i);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
Array.prototype.__class__ = $hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
haxe.Resource.content = [{ name : "R_hero_block_png", data : "s775:iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgYDxco:MP6sQAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAABoElEQVR4nGOIY8ylKWIgXunfI%Ig8pk4ENHKAigixQ7CFkAcDnU7qh3E2ESUBQjjjpBsBz4LcDkZK8JlCBMDfqAERkBwDyH280sbGgMPwGdBonQYujUYdqCrJN6C%U9XARGmOEnOx2cBFNyDIRyGAkXw20Q4DhJtw6A2MTCw81QRUE%8BcBghaD5h2EBdQ8lqgUt16ExSLMAO0CK6vfHg9AYZFoADCJoKIEBWij9enmYgH6SCqJvt%ZCshWQAUdUK%zEsrnghn44nABE1CnsIEYjI2SH57syQhC5RQUSeJA:GYiADIWJuUC0I2suXKoyixGXLqIs%PvuHxDBrUGWer8nB79eEpMp6YBYC5iFECrhYUVNC4BA73IxECFbI%gyBYiA7PZp:3FqIyYVqawVACK0hAQUgaQlqqUiZABMRZd0e%FcPKmIBB9gIngmeLGeiSIfWIXEYhUEplGCyZSEogJr%QNxPhXiYMZNA1xS%JIQMT5AdjiRJSgJhR1y6QYxl1QLWIgMImC69JiWDGGA%FkMEC5hQNAJ8MyFxoWL4EcA1MhE:WHl7z8AAAAASUVORK5CYII"},{ name : "R_hero_lock_png", data : "s692:iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgYFR8lWxoqogAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAABYklEQVR4nGOIY8ylKWIgVcPfI%Ig8pk4ENHKAigizg5iLYA4HOp2VDvw20SCBQjjjpBgB2ELcDkZK8LUzsRADFACIyC4hxD7%aUNjYEVELYgUToM3RoMO9BVEm:B:KergAhTnEjnE7YACu7BEA5DgSK4bCI2DhJtw6A2MTCw81QRpYsYC4DBCkHzD8MC6h5KVAtarkNjkGYBdoAU1e%PB6ExyLQAGETQUAIDtFD69fIwTp1kFETfbs2FZCsgA46oVtiJZXPBDf1wOAGIqFPYQYxGRvgdTrIFyIYiWwORxWMZsZH8990:IIKwH%RPhpBANOOmwbE1i:FoJCuZwuyAgwz1C0BEqQXMQlgUA821ConFo4s0HyhMzEVDhPUQE8MqawWACC0VwWMYPyIzDoCAz4mNKHXE%wATEaOX2HxAnumk5WTkkoeYPEyaBWim09ACNPYQsQAz4ROfFUizAG4i8dkNALdmocV7NXqwAAAAAElFTkSuQmCC"},{ name : "R_slime_png", data : "s864:iVBORw0KGgoAAAANSUhEUgAAACAAAACACAIAAADlBPxNAAAAB3RJTUUH3QgYDDQX9koetAAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAB40lEQVR4nO2ZTU7DMBCFTS8Dy0qI26DegBuw5CRcp0Xqspyje4RRJAu5Hs%bPxKJsWaRtvF8iV2P30vK4e4lNEoCEpAAAPB8OobfgYWBAtQMAUCHgeagi3CAiKEE4BgGMMkOMqwAFrMqAMw%Z%yKtr3eP7SoH7%Oh%FpJIDqQMGon8YAUfbH:b6GDODY9IC3z8ty8HE%13ADtFldGC3cAA2DnqpYBJfrtQv:hQZm50sFu56txW6IAbvIAOpIQAISsDLA6AwggJ0BCa9wQKwBsZiDTQKcNxyj%zABHPZku3afAUTm4C:8AdV81HX6g2EL8QfdrDr7g98z2c3q7umd7CZaByJnoF:JeHa%FlEYsNJBgA6Dp5YB1JGABCTgnwFin1UEPgyJVdfG7NsDOA%R3RzoAQ7%wEW7kwCpOZgwwgEmdR1rQJa8izmox%I3IF7N6g:m5uCnKf6mVfbi80zeASX5l6G:nVjq:FVtbL2o2%saGiaNw8HXnb7YsSSky5ZURQISkIAEEGFUvgzArnxnALvs5QFDkvMc2Adq8%8PTHtyoHyXZp8wwgFWdc2KO6sBKZxF2LA:KKBF0P1NcYvAqOvh9yKLoBmiJt8Ri8AAhhahjFwCaRHAmqUuR%I9WVpTwzf9b37GtXea8QOsAAAAAElFTkSuQmCC"},{ name : "R_monster_png", data : "s1503:iVBORw0KGgoAAAANSUhEUgAAACAAAACACAIAAADlBPxNAAAAB3RJTUUH3QgYCiMmpprmqgAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAADwklEQVR4nO1ZsY4TQQzdo4A0ETRRmijFFdekjpSW0IXyinQrqugaOvYv8gGIH6BDVCdRXOiQaJHSUqSLohOKglIgCsyaGLMzO:aMlyr7NBpN9m78xvbMrL3O8ouXxjadTgN:zfSTi6JYLpfuP0wmExMBcsxLFCWABsYk3USA80HQ:ATOUUEKAXKgHlxWcUKFKZGgjoMz1RE8yCRcfR5Dfzweod:tdvhwOBz2%30c02A8HnvmazYiLG1yAl9%ZQyDFBMhAZdYB%9c2UQE1wLjn7eVgYsIApfj492PysBEsC0B7iWyp88e4hgGfg9naie7WF53fzfEdTfxJAdo:hCULTArzgcEMghYP%AAwUT8PkBMGcS1%zW4f:wGB:1XHXqI7oVBp9Pp9XrQ4:PbbzWODWsA6yp8wHttNpthD0pAL2pQJXj%5BHqTueeJNb1cQSoARlXlO69fwQNqMetGeaIJqi08NoJfHFxBCTCu:a::q:fslUCfsvDz8ViwQXV%RYJVBrwm8AlIMDzOreFCGjtdMksSrgEYcPy5rmLNpsNja:u30Lb7:f0ZF9CPsDek8xXxy9LcqDyBo3YRa4szqExV8T7wOUIvOtDPhCxvbyhPs4HyhaOUxowUVSzEoSzD4HAnn3IBMbsQyCwZx%yD4zZh4rAkn3k4kGzZh%agzY3ZB%yiXJb9iGbiJCWfWRR%UFC9hFBkJh9ZDonu1BmHyone2n0786UF05E9qExUV4GkFMHStVlAgzlKMmZqwP3iIMGskC0GEBaNfAGwo1pULk7m9eAJwRRGsjbdDQawQHudrv9r6%hrddrGB8OB%zF6TIBhrrfP7zHnxef7lA6sA4GA3G66hxgBA8ZADRvimDyAecg0UrpEQQ5i3n1U86NIJyuNkDAI4n:SxDFkR6%K18JfoJGAneBwB64hwgaCdwFH9gDd5nAGLhjq72uGwjcxet6bgvcBRPl5sBdMBEhOXBHqELHtMBdS5AeuCPCPnChD9xlJ3tpYj96JdZwVIG7aCJqybG7ykT8ez5CGbirCEg65QdRyUHIB1gKoTA0O%1X:iTdB1Sm4BpUwnerBgha72q1oocYbJs0yE8fu8WaQZO7iHMEvufHERT:gpj0JzmOgBCuGagIqH7gSk:PD%gVyG%0So0CfyZ%3nfvy:Dn:QYIAtZTlhA8B217efPl3Qts3qNDz%E:NyW0B01:gni0YdqmgaaRbiJI2UUJra0ftPWDtn6gcHJbP8ja%oEPbf3AtX5bP9Bo0NYPwq2tH5wNQXGm9YNfVTGccYkf2nAAAAAASUVORK5CYII"},{ name : "R_sfx_fire_wav", data : "s6407:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAWAAASxQALCwsLFxcXFxciIiIiLi4uLi46Ojo6RUVFRUVRUVFRXV1dXV1oaGhodHR0dHSAgICAi4uLi4uXl5eXl6KioqKurq6urrq6urrFxcXFxdHR0dHd3d3d3ejo6Oj09PT09P::::8AAAA6TEFNRTMuOTZyAaUAAAAALikAABRAJAf0QgAAQAAAEsVd6tZ1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAAm0k1YUwwABdSIvpzDQAgaFiEQwJgTA%JZ%4wcEgSBIEg8qCEMe:ERe:2eTJ32MIECCEeI:v:%7::e7iIjO0QmD4f:BwEHCAEAfP::rB8Hz:8ocg%D7::5cEHfw:hhhhhhhhhhggCGvnRS6zgoAwDGXztZ21g7u6fR4YQ6dUsJ2XBHqdR88w%DmHeVup3fczOJHjNXt7HzQ%gXt9%nlwguSc0L:%zeYOgyK3V:6v8xTMjYxc0MkD3::1ghhKN2SBCijCRI9I3kUqKP:%1LECAAMhSd4:GGACXIlL:Rgi1yt6gYg4MIJtA0FRqOZMQnq54X11::vxmNDcpmxuRjwidmDUMcMJYh0uquYxZOv:5eqleXO1O8YwVjMyCsHBgc4nt9N%2:::V3Lns%4FnYTF2EcRWGjyEgSQ80mm8Qk8gHaK0k9I8yaiEG6pbYrZhr8PxbT6uDiDql%3fy1YFuaECOBibMMSCAZEZXCZI7%VEAMl3a1napCbrBIzQsIosC7gkt:OvRVOXBBSowQqSFGoH0KxSzQgRDjBwsVxP:7UsQFgAt8%3hhhHYJgy6vXDGKvYZhbYtwYNYolN9VJVUutIQ7hSeH%Scy1lFRDiZsVVctmUOFCrN0Paz:X:9Yd9TUilpgmDGEgfIW1Nstg7t0LYuSnviRZlfCnpr7XQS20Cu:%QKBrKSTGoMU5iGFi1DEgMGpUQKzbfmbAxoxkRHy8RWVvdbvNQVgzY7TCwivTzlGAtQt6:kevpl87mUMjqHapQdXJt%%FCLIZ%vWj1dt2vWVMzWKaFzI956CjVncfNr6tUIEQkBht6ONuBsd::tSxAUAC51Vf6GMVeF4LG90YYp1mVBzdHirQiJox0yDg2h0wBYYN1b7rAUMly2Xz7EElQQinTamgdqr%AK0DQv:%x7f1:PuYp9krFaZo55J6K0P:%V0T2t1dzLGXFzTXjJZxv3CBdwGASAJJqDCTzXcgh1bWUFJE6Tdly5WwTuOiwwxifY7LN4kqr9%9%8QEpXMj4XZCaMDIquRk2c:::nKzGIpVA2MJHMrZXUrIdEp0dE:%7qYyIe0GVIeby8XJVjXnY23F4QELIpJMx0qKNP:%1LEBYAL6Q95QwhqKWAVrciUDeDDjcNTaDXbI4oKYhXRcmFHqgxtaYGVQ9cr9N3Qjk6hSI6rKxZxQqoSKhF3L::yzvRfOMRy4hiV0eEcoOXK36jf:33H6FjlGDI15VTPcFMYMd43:fyGWakZKiouKlTJ0XE4hslFCyNMHRetieGuFU0e6ihbmkDLu6KS:%nmruqY%iBzKUvXKYIkMWDxREOK%KRcKJAMrjyjCQ1rC9%ncVAA9TrZ1JMWFEtoH:nqFQgARUrUTcRmgGZu7tSUuv:7UsQHgApcp31BhHghRxXt2GCO0MuyF5pyqgbLYsS:SN6lifblrW6arHf7C21owqNLuLDvYip72AYTjgKfJCJoFSLSyKWxrJaoNEQQWI3hogssHXW7H0PWEAsaqGFhqBBochjrsWYABgc4CbLjQxLEe7PirTLGBw1N1UY1LUoEyB3R8mrfYQxmC0IRvcbtQoDgUWeGUhI6tJobv0pRz04E2XAXmUN:ccyvWiAlNf4%B7RZeCBe23HGlzyMeVBgheOFSh9CjOQp5D9qfavSVUW9::tSxBMACeDfcMSMTUFPqG3KklAALmLR2rRKBql1:%3eWMwdJCEUB0qxE2JRM4b:oFDRVMJPM61mDxx:9RANauXWQuVNKCFzoJETbVCy4Wg4WQiEYRFyHEmFVZ3VHtr2Vj1Ia1HQaaciolzoeV0Q13uxqf:sltlOSZldbvPWdSX9f:8rLvO44LzYnBt25::4HE0ABBECWcw2uEp0rOaLAoUu:U9h%t6KYisfSaA4MCwxXNB7k0G4%wsSjH2OzSNnzq8ObPHVprKrb3Pknuk7DFX:%1LEH4AO4YFoWPWAAeawLMsegAHw9Z3fqtn%2O:%7q6VmvYp1B6utTY1Hayr:73vfVf33Xdf:9xTqrhlV33b4Ub522Rxuu41y7L1kgAGBBVTiN0hCTJIuhwVmSqebTZTiMPomy2AHEM0VCcXDIihGII0PxDFSEFB82ObPu:1X0hhntLDjKU8gg7YdKjXejlGlfvZE07KP:5%i5eUl3VZ6IT4NnurvS:29kmmmee69a3lGHT1dpct:V0j%lXc:cenm2e7eGFSCA0MLHrTMcwG2f:7UsQFAQoUk3LcYYAhRRrt2GGKFDEMRTNjIIYy44KJNg4Zk%iSb:%Z2Bof31tKp2so6xEAlB8S6nPeIqmtJgVaA8LoEZOkrpVWVbUYYHkCx2VH9FfXdIoVaAyJBAQjukCF0saRSvZ1OpJHrtCiq4YnMhHCUxTJ:99LsSZXZD2MRUCTn3Nmf%1lZENufQYaGQdHCQCHKirnb49bBkTxY45YreV:iK1bBBF2vUXdRccKM8kBYqJBKPgIcEQrFYhIgQVUXcouZJLZUZmocRZBy:b2::tSxBIBCiCLZiSIdIFHkq5cYYxUzWVXjxSpmrAgG6FnKZ2KaixY5g1IkVh7%fiiR4DHypMOIic9Z6t1bUhdIR4gJMRaBTgSkhV4FgVAOjSo71a:DlvSjTqZlzr36SM5Iz5fbeuQIEIwSAptOrJJJlh4vF0lTL62:oS1Cj7wuColE4B0DVZpYWBUoVLPASFqKgF0CoAACMQSJREpIomKsq0CBWldR2jnKzjkkYHWWdQm:zeUmSXXicOJ0se3cq1zn:%cPVykKItyFnuw65ce9:::%1LEHoAKXStxRJhhIUOjbqgwix3:88%JNlJFmd5jCaICq5DmrcR73odcJBozzTaTgLMZTEAkqwCxTBBRkMphTyjHu9NMvP2GrkiEOmFmkYm2xNC0:61wqpEBIzLBom63fb::qyWWF6B4QcmGWs::5::bydqFMloV4rRSpKvx1QwLm0kOTNceJnhwtSRe41F6ksTCSA%dzwyeFRhatpdoFIiIqnWpKCQdPhUILmiIs4Z6FulCAwm54SGE3ng6zpTa0WcDKkgowiMltOsHxMJCRv:7UsQqgwoAPWhEmErBSg9sAJEOUAAgGB8jLBECCcYa0KTFSY8Gy6MuhDuUkO::kI00i4kS4qiQ4McLqGBwn8TlFAAeLh4VB8OOcYV9arBU2LQwGrGfpfzZtBwtIpR:7RRRChAEilTibk44gmN0OuClAtjyXMjufiFMrfmvD:fzRiCxTsaqyHYSAV%v4XhpGRhlqysRlen::3:pWEpXLgMIhtQuDJcVIO3qfDBWBQG7WypvMv1MAAPI3G05YPaF5E5QO0SZ7dhJqYCyohuST:5Y::tSxDcACk0TdUGEfGFIGy5oYQ0Ek3XM4lKHrwsw4xl0muf:l:pT1314qSGUYKpbX8XepRttI0DvAoC1%B4CAU00ihoxZnNdrBOhtUKRWtlrbk1RVYhUDgW0gG2EU25Qf1MZn:6kBz4DELmKkoYOYSBlC40s2Y::O5HJH7IZyp77AhzYr6RsAi4kWZNDJcQwI:atgsJizDqjNZNP9qxrrpWRaKiPWxMrbTFaTIIQZjk8ciEPMzyFmc:7xco3FqrS:ZjOSQiYrf:4tpnkDMyXm5v:%1LEQoAKgM9zQYRsoUkf7MiRijyrm5aN:6rrUEqC0QnhUXEwp6kMg2kcPAAHQdnjnOVZTJIVAHoyrwARY4DOYpjVQuUlYsBLHRGO6jmGdCQEsiwiYeeCcBkA1wk1jDRAqxpJh5gc%gQlVCQRB5J0JEo63jkIQMAqhdhBjhZ3Y0YWUw0LmUBR0AlNJoUBVMNjawNKiMhnxsgD8oTCB8cd8Lm4syUv7Tu1e9MY0JgWm1nftWKxohYOCzyzDt3RGijQTBI0aDimIZ6MYpQxYqyasf:7UsRNAgosQWrBmGGhSg0ryJMNwK:xYYaHDjJlyDSAWmBUACAeHoAgYkuHic4AAhENJxIIIOuV2VG7kR9P7b1YodwKYBsPjXF6:JGAREhge0KOEMPNQpVAuJyB0oQLiNYFFmaviO2xhRHl%yHqVm3tHqgVagiksiZBBYFxFgMRSSDSbA60TK7u0Fm:r::5RyvlZJtBTVyUyO:6aMU3NKJlPMpbzon:vSTTM7rBjS8POXsYgOGDIqfHP206ETpGYPOOpXrqBBAuI1ppsGGDwBdh::tSxFkDCnBlXESYawFHHyuIkYoo3J1DCICMxTU3GU1Ml1P6uRRvYn9sGtICBhkJSIqn6S3SKOZiOwCxFZnf:0V%roaYhQYMScyzr9v:upoh1ZwwRByAm%9f9mvXKjmKDOmskaAETaPSySkok5jDOG1hGFRzzKRmhcq:rb:w6%qDr7GMITqkT7:YrDsUUAgjEB3U3put2bW5jFM4YOQqs5adl1ql%70RajDyquWUp%YWZceDJ7yLkaICxQPiIUA00C5gCwaFQ8TiFGOB5s8IkUj:%1LEZAALOX1lQYxN4VglbXQwi0TidTVn:4nSIcO0Zo4rGVGhCFjg57QTWLjhQRHQCu3cpImcDRMFFDhR9HoEeOLQkcDn6xM6LjLEEv1CNabwDxhFqEIhMRWWLhm7TL73NUHevALvFpFN%bkxIituQT9zXnP%5clVMrwj7bUDP:JHkCyQUFFlb%5QFCA1SWjWnudqWTNjWD3MULp39wotg9EAAV5thohQKEH8oc5gUSMrYOxKSPQowCf8dNGzUh3ZzaMBB0KB4ll48CigdGCE6P:7UsRqAgqQcVAkpGPBQZXrJJSMNHRVSu4s8FRKMEQlZ3b5KeQw6PBp7iLKIAWTEo1cStTf1uUoNLUQQSAnmE1E0MxKrNil%YoGvSMuVjlYzqY7bGcpkmzI5xURFUfzKX:a5cwkPRSsjrZDPvYtylGsYypNMJCrG32Vv5SuUthoFIgEsv%SQQFlA0BVV%77Pm8CmVZJc5DX0gk6UE7ySKPuSDGJcoRy6tzgXD78fT9fer18PHUBSOb2odBdEyyTe:bGW1KHgWyZ7j4xEtTUFuiy::tSxHWACoRpVSMEcGFFoel2jFAEP7vZ1OYsOv:%O8rve9XV8HdYKjV98U:3:8Wli6xT0Urm:dW9YUS98b:::3a2Y1aZtnNmtyqx21W0R%3X3::::9::GI:1reKW1Cr9OEPevbTyA4TMETQAGEAAFmBVCX%HxsjLlM3hkMImuovLn8VteyVRQv6BFLoSZCI18T33WzVVhfpa8yvcFgzrPqNMX99E%9oTD3rOG613lPDZ2pgiR22fuVI1v5aavv:4gbvmbbLqNSLX:Ga6l3imvAj:%1LEgIATXZcmGYeAAmKzJpcw8ACYcvrF9W8O:t:8b8vh53::mm6Rb:4%Y173rr:0rTGM6:pvP196tAtn:zfeb0mpTetZgZUkQMgpMkxC:4JjjTQQamLWyB0S6UtkKu4gFxOVEnc9oZkkctlL:yAnCLu0I2Kpjq::J2Yk%WGtVK%bf:%ciBZTiRZ1TYYldB:::94tmY3l5Mtr7MH9Tf::98c7qB1zKsqh7ChvtwfVq::::7a9WsOmplYmp2%ewp7W8KWLBp:::::2PTZM3Xa3b::7UsREgBLpeSoZl4ABSYlUV5KQAOaLaadxfe2bXe503V8tgAkAqhQ4siRSTIgSDTYVBESwEQVBEMsBYEiZMKgkKkU1ULNIo%um7:g0sNQVOg0eBYGlhoRKeJXFQVAQNFQaPAqMDniU6DTxMDSw0W:::%GlHlpMQU1FMy45Ni4xqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq::tSxC2DwAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo"},{ name : "R_sfx_time_wav", data : "s2506:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAIAAAHVwAgICAgICAgICAgICBAQEBAQEBAQEBAQEBgYGBgYGBgYGBgYGBggICAgICAgICAgICAoKCgoKCgoKCgoKCgoMDAwMDAwMDAwMDAwODg4ODg4ODg4ODg4OD:::::::::::::::8AAAA6TEFNRTMuOTZyAaUAAAAALiEAABRAJAfOQgAAQAAAB1fVAmh9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAAp03U4UloABeCIt9ydQAkaNGjRo0bc4IECBAwuFwBhPALgANgAHAAOAIgJAORjAuIeggmmnrTTTQQQQQQQQQTTTTTTTMy%PQlDSmmn:::::%pAvl8HwfB8CAhwff::::8CAhAIBAIBAIBAIBAIAgAAM8IW8L:B%vg3JA0V8BKSAxwOw:wfchwUAYGFAGJuDLT74fEOSLlFy:5NDnDnEyOb:4:gFAlSSKKy36Bp6KjiS0Uf:9SQuIg39f%r:%ke%31qQBtkJy1wNuiD:%1LEBIALRYd7vDaAMX8l8DTCj15BJQ77oiIieiaZPE%H44gzJpp00003rN3qb6boN:qSjuC%o7vqQQQQQQQQ:::1rTctC:hSlI%6aem7f9P::%sxEYNn::%paH:Tfu7oHBcGOdXCEk2Hre7nZKsztTA%etWta1rVJWZ2qn5lcDH61rWta:JIeta1rLVq1aDx7V1a190MVDOBg8Hg8HylKUpWYpgGYxv0A5f%qh0V::::uqqqqqszszMzVVUBgEDXOeIv:EUgAAAYAEDCjGdJDf:7UsQFgAupbzmOzPOBc7Mmodmp%JfQ5RX0WAiH6TDPB1v1HRAOMh0uLn71dfQmQPKjT1dEAoZ7:WGco:6xBF:9IMUF1:vWL3:yCv:weP:oFv:B69f4iP:oByb:jZq:xHf:lPlnM4eAAAwIFw4U76CECTspoAwF3cjdPYrtr%MSBhDQo6G8pdAvjnAfPp%d7gSoW2:pAUEbf6gukh29ARcvfo0AMf:QDX:iGb:iDb:iN:4%b:j9v%L9f5C3:Pbf8q1P5DSqAAAAGAJKezpH3EAF::tSxAYAC%1vNW7qRcFosGqZgxZEHQqnhhB35ZSW7DrflKTG83ypFRc7Y7bjD%mPQZf%c6AKkaf6IW:nv9YdVHv6xQJr%qwyZ6v9Ytbf6x0:%Tr1:ybb:kr:5MvV:NHr:lD:zvyr2cMwADAZbFWfdgZGLdSaZo5cFyqdl8Ym7UMNPcNujOQCVM9:KGmQCZbHIqWOHf%o4eQ6G0uRxAeAg46K7G:8v::1S4gEwDGDxRU5v:Yn:v:nCAEK7f:%hP::8TF6iAIwAAA:kXir:PrBkTn:%1LEBwFLrYM%7ZpygW0w5Yze1ZBkvp7Mqm5ZLnta80lqqmBgo6ejSCQm2aLSkUYmjT:Zb3msUHJf1LZ0V90UjhUBoEH5LTsr::rt::9R0GgTNP::91f::1CpK:::Utv::5ZLgHBDx:%cDCyluTWVigoAjDYZT0ohQ4sR4DmKweThgdV:9RbKs4tf:1mAnpgbogKQEiCbf:90D57::3YrAwAA4Ljlkyl::3JZ2::%ozBEFV:::qHp:::5MgsCTz2q%j6sHUoYCr9QB:WIQS676f:7UsQIgwvZgzQNmnKBZiXpiPMWbiB%2%WJQrCEIKF1w9uLFhKcdx90gGSCC0zED9PqHtqvU6H:amgQ4tiQAT6TB17Lp:%o47f::TKAQkGkmr::59f::9IRt:::Wk3::8lCZGVEIU714PoMEYzeywYsKNBmYk%ytqpJEIcdUaDqsSeWqcrDheNT5WHWRXGzE%nnnfDcNRJbOFZTy1PLFEu9kZHalZZlKgeDwGEhZfX:LKrf0P:1EQBFT3%JVQwiTdUtgoEzC6sONxw1iHAgOsWj::tSxAoAChjTHC40sQFNFJwlnAz5cebjCLdhpSKz9xtltTfYPoAJgcxq%2snCNFrfqKxGSC:8aAIr:jACZ:40ARX:Qz:6B49:xM::lXf8t9vqAFVaqQANGIhVAgCJ6RiIaEhCMSyalgmwhiCkER1aX7Z8lqghSkVvZY:cog1sSj7G2kP:LK9BHY5E6cQf%TNZyyoTX8mChQVnFDAwaPLKCB239pqTEFNRTMuOTYuMVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX:%1LEFgPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ"},{ name : "R_timeBonus_png", data : "s1407:iVBORw0KGgoAAAANSUhEUgAAACAAAABgCAIAAADzQOfPAAAAB3RJTUUH3QgYDhgRJZwEQQAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAADeklEQVR4nO1ZS24UMRA1HIQluxwEcYe%AZoLzCWSbU4wElsER2ANO3ZkkWNk4qjEy%v62p2JFJKxSi23x13P9XXZ05Z3X56V2hsA2F:doaP6eN0IoFi4ryVGCKC%x6uM2M4cgMsuAUsA3reg3ex2:Xnxscmzk4x8uLzkOfLanyDFJwRQ7fcfB16BCdUAdhUQRS2c2blfPbTcAIcfD:rtTzZAfxUacSQfgBkBQMYtd2XzUSOXTSzPqptTERbOS4ZArn5cIbI4ABdgyMjf26MdZCMNAfCXvdOZdpIOs1bGsBihilgbAACxX8nMZZ0WQyOzO3:%Hrj2PyNjAs9UAeF7UY%gb592PXpVAHOTnzrr3umTBaNzV:HsAyBQMfXnr6OQ9Ns6tsMwblUk8zjbgy3MsTnnpszUJct9FIA:sEzZfROJi1QB7cPUuc0nbGClVtIMprnaBkmKjkw6ChA5lbveuf0gSpAj2tgogV3pFMYLKB3PAK8XYNbfX54EkMMmhpMFmst6NmHMpet883Ipq025OJA%n0paeu6Y3nB4B44qRlemoqrYUxEP7tLHeG4bfz:AkrHYZV1hqHrA3UIyG3Qtj%zvPCc0xqAEXGAzsbrcSrsp7sCwerAFtoJZ6LDlAzASl1mKr3SsIzDSqBfZhfPysVKu%FQWqAEsRhLD1lN9AFvnRgaI8pUPACOz0VTZa49peZoajeTD%gBrK3heXB1oaD27SVHdD0lJlPH8ts6StQTL%uStjghqvlp%oSK2wUKZLt8kagArh3LB0wBEHEukOpItjKu9XPVbANw1JlE9ARCJfxqAcQU%C0BJZ4AzwBJEcumdowBRboi2l%0qGkmcLmU7GupA6chFslz7Yf8qand3R%MluzbAq6rgXXXVN16QAJej6rVogxqPLgXLPadF0vG2vDc3zSWY70XK%UD2DILaS93EF3uyldeWWXwHzxfl%6sBgBIjqrSZe6GixLxJHa:qMLaodlNciCO40K6:Hq0ToqSUmQhDePkjgIpbNzLk3l2a9Hs0qLJVx3akfRaWXcj%0bKsi1fl8RrARUrCzepdffWoIk5h0KP9b1Kard2hFv1VlCqsdymHgXLcPBjGgY1hjmRXVyp3TQMczHHejaxo88n%LGVduYbdCKDIJktrpIRGL6Ts%JMAlDFcsBMAuDBT3IcAnkj:P8A9hsE9OmOJXAQAAAAASUVORK5CYII"},{ name : "R_bg1_png", data : "s1886:iVBORw0KGgoAAAANSUhEUgAAAPoAAAA4CAIAAABbrnLVAAAAB3RJTUUH3QgZCBoExkaZ:wAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAE4UlEQVR4nO1dS24UMRD1tGYRpCyzC4gIReEaSBwDxI4la7IbDsAFOMBswx0QB%AC3IBlFixggiMPJY:dn3K57HJ3V%kpGk263fV5rip7pLZ5t:mgUKwERlwDhaIalO6KFeGR7le3l%J6KBTlAAw39lP7dO9Vsn21FY0AqNIZY7qzzbePdxamSfm%%%o%%BrCl6sSa3WzYWpWTvjz4tPTGSV40HMuavNinVZzOc3CwKfrz88aB%gNH8RVqu8BZ7u4JjNCSHdxhfB6Q7xnpDa7E3zbV%sHgtMsttuLTra1wkt3vrF:::w62L8zUjtfhkx236tMimPO41:xmafAAMoxZPeVVzkaVpQjZy2Q2g%:H7qzzeH%wX4wK6ty%aLOmo34zFau00T9NVdRrlNEvJ1SpMJ27eI6zBRKd0UR7N6%thBXI4AWRJUTefPjhgU3T:5aSFsTitJd5UQcTfPhRhuaDGLmidcXRVPYv39VAVLWKd0V01C6K5YPt9z0wc7yynNA6c4JoIW4JixWsCTy2CGYyVCoSuhSNVfi7YgGdyTGpXdThcsKN1QT61S3MyOuRGXJsXdox22IH8htuzyDiA:tNaHQXB0af:fyJ6DEc0OBmhU3ajG4qqRIxQ9qNO32pApOuD4TSZ2AFHI4E3ssaYQtzDbead2bsSpX%UCHnKe7FIi:PvVZXJ45mtxYN4XM3EmcGfo%HuTkSsKyA4MS64yhGU:TAZMekoYSz5pDuPny3IGmJ9m61LDSrEsKuhm6jX0TKscRLH7BK4M3uXGiB5HF3%KmR%n45hhF09AUdXQmrevQHXI8oeEu6r064E1wI4sKrgSaM4Lh9V0hfhelOzixxLDNokTRznQvNF3kvmsSJmdyx:qNoH3GNw7rw16HiytWwXBATotlbzfkB6fODeT6MmmqiEdCMPDiykh5IOd2I24ABiwVYLVEqbP9UE5nxnFM42Y7AIN7U:54KRBXPjNI4tFpQQcuT4717kjUVLf3X8EtwRzAPwivlXZWs8OR7uJ6FDKMfVhM%wSP9teUmXvYCkYYcQ1aRi%bMYUu3q0St4WGQhM18Myki1KXbf6AfrrpaWbEXRy4W1al2H34cE5GukGHT2rr63x1eymlxngaGrrRCDqrF0NzVDbe%Itlta0Jdq4nrYJo%cLk6MeSn4amrNTib23rTvLPee6FrHU04XqEYRklXpnR1mfiVT7V0b1KkvUn:LaQUzwJgJcPX1d5tXyvXTnLCcPCksk1XLNVPsn7pZXBuJHg1dQxMXQv8a5tpHU5jDLihJMF%X2LlfWstijcj6YA:2gjd5IKI90rmGb2BZqwdjDpYggYV%QKGVIzRuMGBqcqCNKdcKPZ180clYGke4VElT%mIxkvwwgofWoIIZoJdNczT9i5Pt7%krH4MLko8OaIAOF7Zg73D%s84MoajrwS8x6L0qritZ2LAOvKvorDP3VynWd2wvmVyOtZmigaIDqLDFNQvkpsdx4PiXfUdyf%rE26842DtCIoWXDtdTx0:YWFjQgYy1bNhuaWokH4pXiRwQrs8n:VYoEBP7Kv2BTsWOq%gj%HYzA%yMRPFTdeMYJFpqSA3OUq2MnOzPai0%MLG5e5rDGSxGed69dtH%9aedfHsz1JfGYrFNf:2:Q4oxdsZhSK1qB0VyiI%AfohJtP6lGJNQAAAABJRU5ErkJggg"},{ name : "R_stone_png", data : "s2182:iVBORw0KGgoAAAANSUhEUgAAACAAAAEACAIAAABdw%MhAAAAB3RJTUUH3QgYEBIPM8Rf0gAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAFv0lEQVR4nO2bz21cNxDGV3GujvbgAiJVsIILEBvwxfBZ0CsgPagGV%ACAvjgY04pINDBLsByAcIKyD15WXq:zJsZDod8JLyJSTwsdh9250fODP%8%aTNzdkvXa:NAAzAAAxAB0A4ti6AsGyNAUG0lgBp3ck4DUDK%tymaVoLMKxHwN3dXT0ga30VwLZOAQbjh427:fHz7%r9h4cH41degLR%cXHh%qXTP89vz1T:oKW85AWkAnCqgFLr3xKQyaJUavqbBUhZ9yZoFjC3l5%v7S:8%te7ekDWuqcpgC:XH50:znb:n1a3gq5K0wFYA0hZr5:JaNVTOg9ImY45ms9Up39evD2jLpo:zltQSxfJ9ubs1vO1AsCn11999eHqXUFHiraB2TPxap9FtL26v60ZgdHxOZ7zxfoebyLU%YlmOwcM6hYKSDEUgDwCpWLAeCrgawyce8Ds:RiAgkTydz8sJ5pMJ:UUvMgi:4KjJpJ%CsYIEEYWW3UEMuCpQSxGUHeGoDeVQQAVO6uOAK9sBHHJk6seHcS:AHwb7sIbXGG558hQR1gSwBgYDW6yMMjZEL%ZBNBx0PDiPV0eJAD3dYAcBOs7vcMAbFFyAWQ8VAALNeu%AkBGqVOaxRwRpoD8sYVmrew7A2AoKTsWIHUFdzXKArS6BmAABmAABkC7sD10AbANrjFA7qAtAdK6k3EagJT10Eo:2O12BqCBfpAC4ChXCYChLGDoB7OL%uoHagxOBaDHQD747:d7IwBPT0%pELiCvN1uPV%rASB5ZgYbBJrR:QwA1veHhvsyQc:Pz5NWjAjH1ESEd4fGwpstSCVHMHf55efr%RUBqItERj%gRikstnr9QCa%6p:6eaA21v2nQ8v%yguQAYiZk2fYi0R2hXh9aGVrkd86xQz9wNYPGrhINugH9Ysda6p%EK17F7vsLtZMP0gt:bGt1Q%w7GAQrL4VZ1a9fkCdIxlsMyjWD9gRiEXC0A9SmcrL%2FZp2MA2I2m4TFjOVqrH8D61E8:wCQY%sHQD4Z%MPSDoR8MwAAMwAD8pwA4rXYHOBk1gKJB1MSgaBCrXNQMsCONnTOM7d4LCMfHwlR5to1%YBR:2%gHNqCBfrDdbtUHrPv7%476wWw9:8usf0JaP5jv0webVS6Sj29z9y8vL7M:rKwX2dWSPMDQD1Aov7q62hzrRW30A5ieP0brVh3KCaD6QXyVFdpvrB:k::8gFt3hJfkd21Fr9YPffnq:sb1kLHBsZuEOe%yeDiWjgsVOXd1s:aANgHUfpSjDegGALdGUUQNIhSECYBfvmwFohY4NpXI1ReJj0nmWh0yaskGgpsD6TksixgjygPiml35gqH8nqR%wqSBztJd%sD%2%LFSP5DTGK8xlxrrBymNgmVqvX7AAGoM6vUDqbJgIZqa6AfZpfT:pR:QNaqLfrAhq0Uv:cAYxNAPpqEfLNvQD3pcAzAAAzAAAzAAAzAA3wMgPoymni:bAOiDjfqdH%2HslT7cv1xv9979IOaEYRjAYM%mjVwUTxjQ1ObfKXTAgCV69DxCGiQRWFZX6CA4rqp3fegFX8rY8AKI2p9nFZCygBqOUcCauqm1Ja0Tr3USz9QI9EAQO0GUijvpR%AYWdgvX4QHHq7lUUqgFbonIBi:eDx8TG%WfX:aNRLTD%gOVrvIhkGqh:Ej20AaBJgbwM1ABhtA1D:CIRW39FqskjVD1Jp8uz2z%IsSukHdImmBUKvi8Kh0pTVD%AiWgssiAHTD2gwcJiIjVZMM4BwrJIFoR:QN:Sk5ZQzOUDqB%phItql%gEssgEtXISan7Hb0Diz9ypjw6yn9APqH6bJ0o%UwV1klPfBwA48kZI142H3j4wC:YCOAOagH6TOLwX6AcIAW1Q:wOybqvUDFmdW3qfTu14:oKZPST%Iv7zppx9Mhz3kpqt%EMQZZI1%MKWWCrls1OkH%lLR6eoO%BtZBKaBRn2BYAAAAABJRU5ErkJggg"},{ name : "R_bg2_png", data : "s5859:iVBORw0KGgoAAAANSUhEUgAAA%gAAABlCAYAAADeZcl:AAAQ8UlEQVR42u3dd5ddVR3H4ftaaGIsKKKConTpUlXACkpvoiBGEUXpht5EKWIBFRAISAKEThJ6IEwmPQMCYqXZC27PLNaYO%fumdlcZs%c8vzxeRHfdc7%PZ15S:4axuvOSHct%duo7k7sniV:7%nehO6LdP%SfyT1QKT5A:8c1YLEFkZ6cOBfE:ZQpIcH:p3UI6UejfTYwH%SejzSooHXJuyJSE9G%29Pi0s9FWlgIEiSJElS6%vcvuQvYazuKMZ4d:MSSxn1d2Ue9fca9eMOe6NekiRJkio20Ocu%XMod1sxzsvdnlh51N9h1L:hYd:vqH8w86hPHfZVGPWLjXpJkiRJdRvotxaDvLs5keYmZtS:sWFf1VGfOuyrMOoXZR71hr0kSZKkKRvotwy%Gkb6VWI5R:1tNRr1sWFfp1G:wKifYNgb9ZIkSZKmcKDPHnwlDHdztFdHdUukfkf9rTUa9fMyj:p7jPopG:WPGfWSJEmSqjrQbxx8OdzU0ys9zY6UMupvNuobcwF:Mkd93S:gT%6of82olyRJkhQ6NxSDfKJujFTnUT8n86jPfQEfa4e1cwFfkiRJauBAv27wpTDS9ZF%WSpl0KeP%pezjvpbjHoX8LF2Rr0kSZJUl4H%i8EXw3DXlrou2ks9pYz61GHf76i:yajH2mHtsHaSJElS3Qf6zwf:FMqNjPaJujZp2Bv1OUY91g5rh7WTJEmSGjbQr1n6x9Ddz4qBnlLeUf9ibUb97MyjHmuHtcPaGfWSJElqyUD:aTHKx%vqUtdE6nfUpw77Koz6G7KPeqwd1g5rZ9RLkiSp1QP9x0v:EGL9JNJEY36sUX91jUb9dZlHPdYOa4e1w9pJkiRJ0YF%1dLfh3I:ijTWkJ9o2Ld11F9v1GPtsHZYO6NekiRJb2SgX7n0d6G7HxZjvNxVCVV11KcO%8k8llfdUY%1w9o1b9Rj7SRJktSYgX750t%Gka4oBvpEXRmpCqM%ddi3YdS7gI%1w9ph7SRJklTDgf6DYphfltjlkaZ61F9l1DeGtZuNtcPaYe2wdpIkSVo70L%:9IWQ0vCQL5dz1F%RedSnDvsqjHqsHdYOa4e1cwFfkiSpBQP9kmW:Cd19b9kLPV26dHRGfZ5Rj7XD2mHtjHqsnSRJUosH%kXLng8jXVwM9O4uSSxl1F9ao1EfG:Z1GvVYO6wd1g5rh7WTJEmq4UC:oBjmF0a6KLHyqL%4RqP%ssyjvu4X8LF2WDusHdbOBXxJkqQpHOjnL3sulLsg2vM9GfXNuICPtcPaYe2afQEfa2fUS5Kkmgz0c5c9GybqvGKgd9fWUR8b9m0d9Vg7rB3WDmuHtZMkSZrkgX72sl%HtT07qnMinZtYzlF:YeZRHxv2bR31WDusHdYOa4e1cyxPkiRN0UCfteyZMKsY5%XOinR2tHyj:jyj3gV8rB3WDmvnAj7WTpIktWWgn1kM9HLfjTSrp8kb9WdnHvXn12jU1521q:sFfKwd1g5rZ9Rj7SRJ0rQN9NOXPx26O6NUbMD3P%qfyTrqz6nRqMfaYe2wdlg7rJ0L%Fg7SZI0aqCfunwoDHdatKd7Oj3SGX0O%3aM%ueyjnqsHdYOa4e1w9ph7VzAlySpIQP95OVrwinFGE:p1Eh1GfWzaj7qsXZYO6wd1g5rh7Uz6iVJavhA:04x0FM6uVRbR:1ZmUc91g5rh7XD2mHtsHZYO6NektTSgf6t5atDdyeV%nakaoz6oayj:szsox5rh7XD2mHtsHZYO6wd1k6SpK6BfuLyVWG4b0Yqj:exyjnqU4d9v6P%NKMea4e1w9ph7bB2WDusnVEvSarCQD9h%crwjUgjw328JnPUn2TUY%2wdlg7rB3WDms3pRfwsXZGvSSpYgP968UYL3dCQv2O%hMzj:rUYV%FUY%1w9oZ9Vg7rB3WDmuHtZMk6f8DfeaKFWG8vhapCqM%ddhXYdSfknnUu4CPtcPaYe2wdlg7rB3WTpLUgIF%:IrlYay%WozxcjMTmsxRf4JRj7XD2mHtsHZYO6xdbS:gL8DaGfWSpPSBftyKZSHWV4qBXu74hIz6OlzAx9ph7bB2WDusHdYOa4e1w9pJUuUG%peLMV7u2FLHJTbVo35m5lE:HcfysHZYO6wd1g5rh7XD2mHtsHaS1NKBfsyKpWGkLyXWtFEfG:ZtHfVYO6wd1g5rh7XD2mHtsHYu4EvSNA30o1cMhuG%mFj3oJ:sUX9s5lEfG:Yzp%EXfKwd1g5rh7XD2mHtsHbVO5Zn1GPtJGnaB:qRK5aEo6INjuroSP2O%mOMeqwd1g5rh7XD2mHtsHZYO6wd1k6SRg:0w1cOhO6OKMZ5uSMjpYz6o4z6aT2Wh7XD2mHtsHZYu:ZdwMfaYe2wdi7gS6rxQD%0GOUjHRbp8MRyjvqjazTqY8P%eBfwsXZGPdYOa4e1w9ph7RpwAR9rZ9RLyjzQD175VBjukEiHRhsIuUb9ETUa9bFhf6wL%Fg7rB3WDmuHtcPaYe2Meqwd1k5SvwP9wJWLw0GRDu7pqZ76HfWHGvVYO6wd1g5rh7XD2hn1WDusHdbOu3pJowf6F1Y%GbobHuwpNW3UH5l51Oe%gI%1w9ph7bB2WDusHdYOa4e1w9oZ9VLNB:oBK58Ia3uyp89HyjvqF2cd9YdlH:VLajPqXcDH2mHtsHYu4GPtsHZYO6wd1s6olyo00D9XDPOx2r:UAdH6G:Wpw77fUX%wUY%1w9ph7bB2WDusHdYOa4e1w9ph7aQ6DfTPrFwUyn020nhDfrxRv3:NR:0hNRr1WDusHdau6aMea4e1w9o1edRj7bB2WDtJnU%tejx09%lVi3qKjfiUYT%5o:4Jox5rh7XD2mHtXMDH2mHtsHZYO6wd1s6oV3MH%n6rHgsjfbIY6CnlHPWpw74Ko:7A7KMea4e1w9ph7bB2LuBj7bB2WDujHmuHtVNrBvo%xTAfbt%E9ovU76iPDfuqjvoDMo96rB3WDmuHtcPaYe2wdli76bqAj7XD2mHtfK1XhQb6x1c9Gj6R0MiQ727fPod9W0d93S:gY%2wdlg7rB3WDmuHtTPqsXZYO6ydUa%MA33vVY%E7j4WaXjEl6vzqE8d9pN5LK%tox5r5wI%1g5rh7Uz6rF2WDusXfMv4GPtjHpN0kDfc9XDYaS9ijFebu%EqjrqU4d9G0Y91g5rh7XD2mHtsHZYO6wd1g5rh7XD2qniA333VQ%F4fYoBnp3eyZWhVEfG:ZtHfVYO6wd1g5r5wI%1g5rh7XD2mHtsHZYO6O%pgN9t2Kcl9s9sfKo3yPzqN8786jfp0ajHmuHtcPaYe2wdlg7rB3WDmuHtWvTBfwFWDujvg0DfdfVD4aJ%mgxxsvVedTHhn1VRz3WDmuHtTPqsXZYO6wd1g5rh7XD2mHtsHYtGeg7r14YxmuXYqB3t2tiKaN%N6Mea4e1w9ph7bB2WDusHdYOa4e1w9ph7bB2hv3rA33H1QvC6y0c1U6Rdk6sPOp3qdGojw37vWt%LA9rh7XD2mHtsHZYO6ydC:hYO6wd1g5rh7WrwUDfvhjn5XaItGO0hRMO%7aO%r2Meqwd1g5rh7XD2mHtsHYNvYCPtcPaYe2MeqxdpoG%3er5obuPJGbUjz3s2zrqsXZYO6wd1g5rh7XD2hn1WDusHdYOa4e1exMDfZvVD4SRto02f1TbRarCqN8p86iPDfu2jnqsHdYOa4e1w9q5gI%1w9ph7Zp:AR9rh7XD2k39BfzOVqvvD1tHe6CnbSJN9ajf3qjH2mHtKngBH2uHtcPaYe2wdlg7rJ1Rj7VzAR9r92ZHfWfLYoyntFWknKN%28yjfocajXqsHdYOa4e1a:MFfKwd1g5rh7XD2mHtsHZGfVtYu86H1twXuvtwpC1KTe6ovz:rqN%uRqMea4e1w9ph7bB2LuBj7bB2WDusXZtYu5uxdlg7rN2oOh9cc28YafNS5fE%VimjPnXY9zvqt67VqMfaYe2wdk0e9Vg7rB3WDmuHtcPaYe2wdlg7F:D7GfWdzdbcEz4QqXu4j9fmfQ57o94FfKwd1g5rh7XD2mHtsHZYOxfwsXZYO6ydUb%2zqbFGC%3WWJG:XjDfn5tLuBj7bB2WDusHdYOa4e1w9ph7bB2WDusHdZu%lm7zvvW3B0m6v2l2jrqt8w%6rF2WDusHdYOa4e1w9ph7bB2WDusXTUv4L%CtcPaZWftOpusuSuM1XsjpQz63KM%ddhvPonv6rfIfiwPa4e1w9o1hbU7CGuHtcPaYe2wdlg7rB3WDmuHtevjF:zOxmvuDLHeU4zxcpskNJmjPjbsjXqsHdYOa4e1w9ph7Yx6rB3WDmuHtcPaYe2aOOo77xqaF8q9uxjo5TZOqN9Rv0nmUb9pjUY91g5rV5UL%Fg7rB3WDmuHtcPaYe2Meqxds1i72Vi7yo:6zjuLQd7dRglVddSnDvsqjHqsHdYOa4e1a:MFfKwd1g5rh7XD2mHtsHZGPdaut87bh%4Iw70jsfKgn45RHxv2bR31WDusHdYOa4e1w9q5gI%1w9ph7Yx6rB3WrhmsXWfG0O3hbYmNjPnuco76jYx6rB3WDmuHtcPaYe2Meqwd1g5rh7XD2mHtWsLadTYcui2Ue2sxxsvNKNXWUT8dx:Kwdlg7rB3WDmuHtcPaYe2wdlg7rB3WDmvXfNaus8HQ3NDdW4qB3t2GiTVt1MeGfVtHvQv4WDusHdYOa4e1w9ph7bB2WDusHdYOa5d:1HfWK0b5cOtH2iCxnKN%RuZRHxv2G9XoWB7WDmuHtcPaYe2wdlg7rB3WDmuHtcPaYe2awdp11hmaE9aNtF60uaOazFH:lpqP%rpfwMfaYe2wdkY91g5rh7XD2mHtsHZYO6wd1m56L%B31nl6Tpiwod76HfXrGfVYO6wd1g5r5wI%1g5rh7XD2rmAj7XD2mHtsHY9gz5toPdbxlG:fo1GfWzYY%2wdkY91g5rh7XD2mHtsHZYO6wd1q7tF:CxdqNHfd6BPgmjfp0ajfrYsJ:hAj7WDmuHtcPaYe2wdlg7ox5rh7XD2hn1LuAnjPrqDXSjHmuHtcPaYe2wdlg7rB3WDmuHtavUsbyzsHZYO6zdlIz6Zgz0TKN%3cyjHmuHtWviBfytsXZYO6wd1g5rh7XD2mHtsHZYO6xdX6O%vQN9Skf9nNqMeqwd1g5rh7VzAR9rh7XD2mHtsHZYO6wd1m56LuAb6C0d9S7gY%2wdlg7rB3WDmuHtcPaYe2wdlg7rF21Rr2B3vBRj7XD2mHtsHZYOxfwsXb1HfVYO6wd1q7Zox5rh7Urj3oDvcHDHmuHtcPaGfVYO6wd1g5rh7XD2mHtsHZYu:pcwDfQjXqsHdYOa4e1w9ph7Yx6rB3WrmUX8LF2WDusXTVHvYEurJ1Rj7XD2mHtsHZYO6wd1s6ox9q5gI%1qwBrZ6ALa4e1w9q5gI%1w9ph7bB2WDusHdYOa4e1q8CoN9DlAj7WDmtn1GPtsHZYO6wd1q6FrJ1Rj7XD2lWPtTPQZdRj7Ro16rF2WDusnVGPtXMBH2uHtcPaYe3qegHfQJewdlg7rJ0L%Fg7rB3WrrYX8LF2WDusHdauSaydgS5h7bB2Rj3WDmuHtcPaYe2wdlg7rB3WrgIX8A10yQV8rB3WDmuHtcPaYe2wdlg7ox5rh7WrAGtnoEtGPdYOa4e1w9ph7bB2WDusHdYOa4e1q8CoN9Al7%qxdlg7rB3WDmuHtcPaTckFfKwd1g5rh7Ubf9Qb6JKwdi7gY%2wdlg7F:Cxdlg7rF3NL%Bj7ZrB2v0PpLLgq13lIxoAAAAASUVORK5CYII"},{ name : "R_bg2a_png", data : "s35478:iVBORw0KGgoAAAANSUhEUgAABAAAAABlCAYAAADTa5F5AABnt0lEQVR42uy9ZXtkR5aurb:38uFz5uBMz%lpd9tNdpPd7ja2oVxoF7NKzCnMFHOKKYVll10oZhUbOt5YELFj79ypzLLTGqlqfbivnaSUyp:83Hs9K3KmppTajenpv6uZmW:U9etP1BdfPFFzc4:U9MxDlUjcVxMTO2p8fEeNju2okdFtNTi0pdlWA4Nbqn9gU8WB:g3V27ehunvXVWf3muroIto6VlVr%6pqbl1GmlqWVaxpUUUbF1V9bF7VaWob5lVN:T1VXXdPRWrvqcqaO6qi%rYqq7qpSitvqpKKm6q4:CtVVPalKij5QuUXf6Hyij5X1wqvq9wC4vK1WXUpd0ZdvDqtzl%eUucuTanzl6bVmQsJdfp8Qp06N6E%OzuuPj0zpk6cJo6dHFVHPxtVRz4dVp%cGFaHjg%pj48Nqo80Hx4eUB98MqD%dqhfvf9xv3rvoz717odx9c4Hvcjbf%tVb73fg:z1vW7113e71V:e6ULefLtL:fmtTuSNv3ao1zV:%ku75Y9vtqk::LlN:f6NVuR3r7cgr:2pRb36x2bkt39oUr:5fZP69e8akV9pfvlaTP3y1Zh65bdR9fJvGtTPf12vXvpVvfrZL%vVT1%uVT95KaL%CfhZkCo::1Kp:vEZ%V8:rcgK::N:Z0J5Wv7HP2eP::6Tsqzw3:6pNC3:NRP%MT3:8I8l6flfmfFfMuF:FqflP:%PTChKy3:679njP:63wrT8h0z4rwVp%feZ8A:p%Xf:kJ%e:5IZ:zYT:nNeWv5NJvyna2n5:zLg::2PmZKblv:nP2SH::vfX80K:9e:u5I1:s9:mwmX0:J::BtBEARBEJ5HctIJgKmpv6vZWRAATz0BMP1AJSYfqInEfTU2fl%NjO2o4ZFtNTS87QiALdXXv6nD:6bqiXsCoFOH::ZOTwC0tK2wAFhSseYlFW1ccATAPRQAkbq7KlJ71xEAt1Rp5a3vIQCmUQCcBS5OqdPnSACcPDuGAuD46VF1:JQO:6dGMPwfdgUAS4APjwyoDz8ZUB8cGlB:%7hfvf9Rn3rvozhJgA971dsoAVwB0OUTAG%%3emXAEEBgBLACACSAK%hBDACQAMC4PepBcAvQAI4AuCff16t:vmlavWTl%AaYapC%clLJAN%wvxTBvzj9xAHP6ZM2I9CIVsy4aAKhWzJhP0oFPZSJuxHoZAtmbA:hcLeyYT9KBSyJRNEKAiCIAjCARMAMAEwO:dUXb:%WE3p8D85dR:D::gEC4DRHWR4ZCelAOgCAdCzrjq6:QKgmQVAIwiApkXVABMAIAGiLAA01fUgAO6oyprbKADKI7eSJgAKS2%gBCAB8HmIAJhRF66QAADOXJxUp87r8H9uXH12hicAdPg:BgLgsxF1GAAJcAIkwBBJgKOD6qMjMAUw6EwB9JEE%BAkgDcFQBKgW71lpgDe1eHfTAGwBHjjLZoCeP2vLAD%0oYS4I9:bvUkAE8CoAD4kzsF0IiACEAJ8GpM:fK3JAFQAPy6gacAatVPX9H8olb975:XMJFQ:tnwkp%fsBjYlZ%l558OqFDIlkzYj0JhL2XCfhQK2ZIJB1UoZEsm7EehkC2ZcFCFQrZkwn4UCvI:b4IgCILwIwuAqelv1MzsUzU7%0RNzTxUk3D3X4f:cR3%x8bu2:AfNgEQBwHQCxMAG6qzex3H:9s7V1EAtLSvoABoal1RjVgBWFJRTX1sQdW5AgArAHfsBAAIAJgCKKn4yicA8ktuqLyiL6wAuJo:py7ngQCYtQLATAGQAEiQAHAqAMdOjvH4:4g6coImAA6bKQAjAI4MqA8O96u:fdJPUwAf0xQASgCsAvR4EgAEwHskAHAK4J1OTwK87VQB:upNAdgqgDMJADUA5I8tVgIAv%Y6wK9eIwnwyqtR9TJKgKitAvzLK3Xqpy:XoQT46S9qNNWh:G:Dz8P5Z1cSpOKl9OylUMiWTHie6w4v%nSC1B2k7iB1B6k7CIIgCIIIAAj%uAPgO803anrmqeaJmpx6pBKJh2p84gHe:R8dJQEwNMwCYHAbwz8A4d8IgK6eDZ4A0AQqAE0wAdDMFYAmngCILaja6LyqaZhX1VwDqKy%o8P:bVVedRsrADQFYATAlyofJgCKWQBoruZfDxUAZ3X4hx0ANAEwERAANAFwhO:%I8eH1cfHQAAMqY90%P9Ih38UALwH4P2P%u0UwDsc:N9%nzBVgL%8263Df7cO:V1MB2KmAP6k%eOb7cSf21kAtPEEgBEAzeq1PxK::WOT%g0LgF:9rokEwGsx9cprUfXyqyQAfvErqgK89Mt69bNX6tS:vFxL:KLG4%VqfdW8XKN%ashEEuzGz9OTLZlwUIWC1B2yIxOk7iB1B6k7SN1B6g6CIAiCkLUJAJAA3%EEwPT0U319qhKTD60AGB9:oMbGHqAE8Mb:t1W:pm9g218BMAKgax0nAFrbVxArAMwOgKYlqgE4SwAh:FfZHQAgAe7wBECgAlDKAqDoCxIABdfVlbw5rAFc5BoALQIkAXDaSgCaAgABcPzUGAuAEWcHgBEAtASQYAFwiO:%wx6Aj2APQJzv:ptlgLwHgDE1gDewAkC8Hrj7jxMAvAjQmwBoVa:CMkCEBABOAPAywF%:1qh%9SpXATQv2yoACQDklTqmxvIzHfh:9kq1pgb5F%Dl3flpJqQQCPtdKEjdQeoOUneQuoPUHaTuINMJgiAIwgsnACYn:84C4FsNCICv9fWpDv%P1AQKgIdqdFyH:7EHamT0gRoeua8Gh3ZIAGD4hwmALdUb38Tx:y7u:3fwEsDW4AQACoBFnAAAAVAHEwAgABqCAgCWAGpgAgAEAE4AfMU7AG74BQBOAMypSygAaArg:JVpXAIIFQBXAHzqCIBjJ0esBDAC4NAxrwIAUwAfmgoA7wF472MSAHQiQNzZA8DLAO0UAEkAWwF4y0wBmD0AtAsAJgDMHoCkhYCvGwnQjFMA9lSA17gKoHmFJQAuBfw1AdMAP:9Vnfr5L4Fa9ZLhlVoWAPQc9gb87JX0:IsRBrvx8t4JhWzJBKk7yOkOUneQuoPUHQ7WdILUHUQoCIIgCFmZAPjOEQDfqMlJmAB4rMP:IzU2:lCH:4dqRDM8QgJgaPi%GhjcQQEAwN1:TwDADoANnABo61hzJgCWQycA6qJQAbjHAuBeYAKABECJEQDlX6pCPAmABECeFQBzSQIAFwFeplMAzlygPQAgAT4DCXCGJAAuAjw5oo7gIsCRpCkAEgBwHGA:AlMAtAeApgFAAJAE6PGWAbpVgHdTSQDaBWCWAf6BdwH84Q04GjBYB%BdAL6jAZP3AeDJACgCoigBXv51vfrFrzS:ZhlghIAVA3X29ZcywRUJKdhLmbAfhYLUHaTuIHWHF7jucECFgtQdpO4gQkEQBOGFnAD4DncATE59o6amv9bh:6ma0OF:fJwFwOhDNYLhX6PD:xBMAGj6%6kCgBMAmp74ZqAC4D8FABYAggCI8g6AhhgJgBpcAjiPAgB3AIAAiNAxgHQUIO8AKP8KdwCAAMCjAItBAFx3KgBztAcgFwTADAmAS64ASKjPeBcATQGM8i4AWgaIJwHwFADw0VFvCgBEwN%sBIijCKAjAeN0JOAH3k6Av9oTAbrtQkAjAcIXAhI0DdAWmAYIiIA:NKME%I2zFPBXr8UQOiIwhtMAwCt8BRnwsiMFzIQAyAHDz39dl55fpeelAyoUpO4gdQepO0jdQeoOUneQuoNMJwiCILxQOwAmJ79Rk1MgAL5W4xOPdfh:pMP:IxIAozQBMIQCgCYA%gaIeB9MAWyrnl6YAthUXd10EkB75zpWALxTAPwTAO4CQNoBAKcA0BJAMwFQWsmnAIQJAD4JACoAIACuwCLAa0YATIcIAG8Z4IkzngBwJUBoFeDwoJ0EsEcC8okAJAH4WEDg:d5AHcDZCcDTALgPgOsAphLwpzcdEfAmnQzwuxQSwBUBdhrgdzE7EUBHBUaRV37bQBghgDWBevXyb8L5RSb8Oj17KhSyJBOe57pDRjJB6g5Sd5C6g9QdpO4gpztI3UEQBOH5nwCYnPyO%VbzNTI%:kSNjT3W4f8xhv%RkUc6:D:UPFCDTgWgr3%bBcCW6o67AmADBUCblQCrfAzgEtLApwBgBaCBTwHwVQBuUwXATgDQIkBTAYCTAPKLb5AA4KMAr3ANAKYALlydxkWA3h4AcxxgQn12dsLWAHAXwKkxZwrATALwFMARPhLw8IBfAhxKIQHsTgC3DuAIgHfodIA3gpWAv3QkHQ8YPCIQdwMEawG:JxHwW99UQMzj1aj6pYGFwMvMKyl4ORN%U5%WbMmEgyoUpO6QJZkgdQepO0jdQU53kLqD1B2k7iAIgpAtAcASIEF7AGAKYGLiax3%n2D4Jx6pYRAAIywAhh6ogcH7qr%f7v6jAIjDBMCW6urZRDq6NlU77AGARYDta44AWPYmAMwSQJ4CSHUKgCsA7EkAsAegyBwFeJ33ADhHAfIiwHOXaRmgFQCAKwBOswA46U0A4BTAMb8A8E0BsAR4zxEACC8FfOtvOvi:3%1bCoiTAIHFgK%:5T8eECcBzILAN2k5YHBBoBUATiUAdgMgv29UvzHwqQGeCIihBHjFiABXDITwSibsIhH2s1CQuoPUHaTuIHUHqTtI3UHqDlJ3kOkEQRBe4AkAEgCJxDcMTQBg%B%DCYDHJAB0%B:C8M8CACoA:Ts4:k8VABIAcPe:swsmADZIAHSsqZY2IwBWVKx5mZcALqm62KI3AVBPFYCqmjtUA0ABYGoAsAjwJp8E8KXKxxrADd9JAGETAKYGcJpPA0ABgDWACXXClQDuLgCeBIB9AFAD8E4FMBLA7APo96YA7MkA7iSAvw7w13fdaYDO0OWAWAn4a0fycYG8GyC4IJCmAQzeokD:VECTIwT8OwNADPgmBpKIpuWXr6YnW0IhWzJB6g5yuoPUHaTuIHWHgzWdIHUHqTtI3UEQBCGLFYBE4luVmPgWBQBMAIyPP1Wjo0%QkREQAA:V8LB:AsDsAOjt28EJgG4jALo8AQDh3wiA5tZV1QSLAJtXVLRpmScAFp0JAOckABYA5SwArAQov%nUAGgKILfACIDrtAjw2ixPAMyoczwF4K8BTDg1AHMigDcFYCcB7IkAGhAARwfVh64E8O0DIIwEcAWAXwKYnQA6:LsSwN0NoK9:srsB2uxeAG9BoL6%niwCXmMJAEcHvvoHgiYDjBQgCWB2BrgTAub1cGJp2V0iZFcm7EehIHUHqTtI3eHFrTscVKEgdQepO0jdQeoOgiC8wBWABEwABATAyIgjAIYfkQAYesgC4IHqH7iPEwBxFgAwAdDds6U6u6ECwBMAHbADYF21tK2pptZVZwJgWdXHFpMnAJw9AOXmKEA7BXBLFZWBAPhKFeAywC9xAsAuAtTAcYAALAI8z4sASQDQLgD3NIBPcRkgSYBjvBCQBMAoTQCcYAFgTgQ4OqTDf3AKwNsFgEcDwi4A3ySAJwDeMhLgvS7fJIBdDojwNIDdDWBqAYHdAFwLMCLAvyyQFgWCEHiNlwZ6OwO8CQEUAm5t4Aeyu0TYv0JB6g5Sd5C6g9QdpO4gdQepO0jdQeoOMp0gCC%EAEgk:o5MTHyn%VbzjZpIkADAPQCakdFHtARwiAQAVgAGHujwD9z3CYCuJAHAOwDa1ngCYEVFm5dVA04AcAUAjwJcwCWARgBU1Giq76qyyB3f3X%oABSxAMgv%RKPAvTXAEgCXHSnAHgPQOgyQJYAx1EC8BTAZ:4pgEPHnFMBjvJCwCODKABABGAVwO4EgCmA3kAdoEe9FZgG%IvmzZATArxaQCdXArzjAr39AO2%WoC7I8AnBv7UggRPEHj1j02%vQGv6qvvtR:I3gqFbMkEqTtI3UHqDlJ3kLqD1B3kdAepO0jdQYSCILwAFQC8%58gATA%DgLgGzUOiwBZAsAEAAmAR2rQCIDBh6ofBYBXAejp3cYJgK6gAIAJgPaQCQC7A8AIgHkVqfUEQHn1XVwEWFpFd:9xBwCeBGAEwA2VhycBgAD4Ak8DwCmA:Dl1KW9WXYApgKtUAzh7eUqdQQkwlVwFgH0Apz0JcOwknwrw2YidBEARgDsBeBrgCNUBPnCmAQCUALYSEMdpgLe5EvBWWCXgvcCCQMRMAzj7AYITAVwN%OOf3RMDSAj84Q2%vg5VgTZvQiBYFfijmRRoxqkBMzmQnqa0ZEsmHFyhIHWHrMgEqTtI3UHqDnK6g9QdpO4gdQepO0jdQRCyWwFIgASACYAETQCMA%Nfq9Gxp2oIFgAOP1ZDmkGfAIAKQHACYDtpAqAVKwBrqhkqAG2rqrGVBUAzCQDYA2AmACJ1tAegqgYqAGYCgMf:%SSAIpgCKP:SmQCARYB8EgAIAM0lMwGQS6AA0JxhCQALAU9dmKQpgHMkAD49wxLgFC0EBBGAkwAgAT4dxsWAh%BoQNwLMEi1AFcCHO5PkgDv8nJAEABWBHxApwSQBOgK7AVwFgS%4%4G8C8JfP2vRgK0B44MbKNdAe5RgigD2py6QIudDPDxusOf0mOEQTr2m1CQuoPUHaTuIHUHqTtI3UHqDlJ3kLqD1B1kOkF4sScA%CSACZ4CABEwNv4NTgAMjzwhrAB4hOP:QP8A7QGI998PnAIQsgOgfVU1GwFgawB8FKCpANTPYw2AdgDc5aMAaQdASaWZADA7AL5yBABXAAo%RwFwOf86C4AZOwVAAkBzaVqdvjilTl2cpBMBzk%oz84laAqAqwAgAY47dYDDfDKAVwlw9wJ4AsAcEUiVAJ4E%BgkgLcX4G1bCeCjAvm4wL%81x2QADQJYEXAW52eBHir3S8CrAxot%HfTgg4gsDKAKgK6KD:%zda%HGrr0rg1Qha0vK7TMiSUMiWTJC6g9QdpO4gdQepO8gyRqk7SN1B6g4:rkyQuoMIBWG:HwM4%Z0VAOPjVAUYHaUpAFgGODJCMsBMAgwMPFT9UAPgKQCoAYAAwPCvgz8KgC44BpAnANpXcQKgyQiApmXvGMDoAgICgHYA3HMEgDkKkCVAuXcUICwBpBrAFyq36HN1tdATAO4UgFcD4F0AmlOmBoALAVkA2H0AfCrAqVHfFMAnmkMnhmkSwBEAHx4ZUB8Ah7kKYI4HZAnw7sfOMYEfsgT4gCQAiYAeKwLcWsCbbi0AdwPo61vBowNJArz%F68egM%dvQF:erPdd5wg0cpSoJX4cwreSM:vMyFbMmEfCgWpO0jdQeoOL27d4aAKBak7SN3hha47HFChIHUHqTuIUBCyIgD8UwDf6eu3dhfAGNYAvnZOA4BJgCckADD8swDQxPt3VDceBbitOrtoAqDDCoB1KwB8EwBQAYj5JwCgBpAsAG6pUpgCqAgIAGcPgBEAMAXgFwAzPgGAEwBGAFygKYDPznMN4KwO:84UAE4AnHQEwAkWAMeGcDHgR7wPAI8GPOLWAPpIAsAJAYfMFABBpwT0eiLgb71%EYACgBcFvsv7AVIsCvxzUj2gg8M:LA70Fgi6csBMBcDuAHP9w5:dqYHvR0qBsN%FgtQdpO4gdQepO0jdQeoOUneQuoPUHaTuIHUHkQkvmgCg8E8CAIA9AFgDGPtah:%ndgKABMBjNTD4SA0M0RQACYD7GP5xB4Cmg2sAbbAHQOMJgNVkARBb4GMAHQFQSzsA7ASAEQBwFGD5zcAiwC:8NYB8UwOYQ0gAzNAEAEqAqUANIOGvAWiOmSkAlAAwCTBqawC0C2CIBcCQnQL40NkFQOEfJgF4GgB3AtBegHfCRADLgLdDFgWiCHjPkQHvOhUBWw9gfM89MYCgCPBPCmSbHyoSnkkoZEsmSN1B6g5Sd5C6g9QdpO4gpztI3UHqDlJ3kNMdRCi8KAJgaurv3mkALADMMkCYAoBdAFAF8CoAj234hykAFAB9XAOI77AI2MZ9AB1dmygBWswSwBZvAgCXAMaWeAJgFwEQYQFQyQKgwtsDkGcrAH4BYCcANOdzZ9Q53x4AFgAXAgLgHAkArwYwigLgqJ0CMALAMOSbAjA1AFsF%MQ9HjCOmEkAqgOwCHD2ArgC4K33uxG7J4AFgDcV0OmcHOBMB7xF0HSANyXwxl8DQsDBvJ8Os3tgN154oSB1hz2TCVJ3kLqD1B3kdAepO0jdQeoOcrqD1B2k7iA8owCYnk6eAhi3NYBvqAYw%lQNgQAY8gSAbwIABcB9EgBcBejqpp0AsAsAjgHEkwD4KMBosw7:TTr88x6AmnpeAqipqruLiwDLoQLANQArAFgCFJbfVAVlX%EEwLUiswjwC6wBXDaLAPPm1IVrc3QSAAuAs2EC4ALUABLq0:OBPQCnYQ%AWQaoAQFg9wAMq4:xRACSAB8ecasAJAA%MPsAGG8nQJ%VAAYjAoKLAn0ywN0R4C4ODC4P9EmANAKAJYEnDzrS8kam7DOhsKcyQeoOUneQuoPUHaTuIHUHqTtI3UHqDlJ3kLqD1B324zGAhkSCpwAS3yLmWEBTBQAJMDIKpwI8VoN4NOAj1T:4iKYA%h%QAOgjAdAFuwC4CtDWBTUA2gXQZI8D9KoA9XgagFkIuKiq4UhAFAE8CVBDIgAmAUqqbqMEKGIJgKcA8EkAuASQBcCl:DmcAgABcB4XAc5SDYCnAE6zBDiJEmAysAxwgncBeDUA90QAPA3ASAAQAEYC2H0Ag84kwIAnALAK4B0T%N5HBFYDPvSmAt51Twyw1QBXBvhPEAhbHIi8baBw:6Y5VpAJ7hPw:2xnWv6cCdkSClmSCQdWKEjdQeoOUneQusNzWHfISCZI3UHqDlJ3OHDTCVJ3kLqD1B32fQXAOw2ABAAfBzhBkwBmCmAY9wA8pT0AtgrwyE4B9PbTFEB3fAcFgJEA7VwDgF0ALbgQcE01tjm7AJpZADSSAMCFgA3zqqr%HkqACpwGuKvKeBKgmCcBYBFgfikcBfglTQAUsQDgHQAgAWgKwK0BzHhHAV7gKQAGpwBYAJgjAWkKwOwBcGoAvAvg4%OuABgKqQIMqPcR:ySA2Qtgrp4Q4KoAS4B3PojbyYB3nD0BRgi4AsA3GWCXCPqXCfrrAy4U:H2feyc9b2ZCtmTCPhQKUneQuoPUHV7cusNBFQpSd5C6gxwXKXUHqTtI3UHqDs9:3SEDAcBTACgB:k4TACgBvnMmAGgKACTAEEsAEgCPVN:AQ9VrpgCwBrDjTQGAANC4AsBMAURbVlQDSICmZa8OEA0RADV3VVn1HVUa8aoARVwDgGWAdgpAc4UnAfwCYFady2UBcHkGBQAtAvQkAAqAcxO0C8BOAbAE4GWAhz8b8R0H6BcAg88sAN4LCADfjgAn%PvrAckTAd5kQID3XJInBgi:LPB97t30BOVCSvabUJC6g9QdpO4gdQepO0jdQeoOUneQuoPUHaTuIHWH57DukJEAsEcCmikAngSwUwCjJAFQABgJwCcCQA0gDgJA08NTAN29O6qzZ1t1dPMUgKalA04EoCpAY%saTgE0NK%gAMCdAFgDWEAJEGkwNYB7qqLGmwKAGkBJFU8BVHxFuwBgEgBEQMkNlVvsiQCqA9A%gIu%fQAztgpgJMBn5kjAc2YKYMKeCHD05BidBGCmAHyTAFAFGA4RAQyIAAMfE2iOCLR87OFVA:x7ArzFgSwH:pbM2w5vhUqC7iRcSfAW8:b7ft56Lz1BwRBKtoRCtmSC1B2k7iB1B6k7SN1B6g5yuoPUHaTuIHUHOd1B6g7PWd0h4wkA3yQAywBaCGgkwDe2CgBLAakG8JimAPpZAuAuAJIAnb3bqgNqAN1b3hRAu9kFsGanAKLNK6qepwBqzRRAlHYBVPIUQIU7BWB3AdzEXQD5IAHKQALcsBKABMDnKADwVAB3GiCFBMBdADgJYI4FnKApgFMsAcyRgOZYQBQBI:ZkgI%MCDjGlQBbC3DgEwJ8HHJw9wQ4QsDuC3DlwAe9PpKmBgJSICXvE%%8Hy4W8Hve78kKmciEAysUpO6wZzJB6g77bzrh4AoFqTvI6Q5Sd5C6g9QdpO4gdQepOzxfdYe0AiA4CQA1gEmuA0ANwNsF8I0atlMApgbw2NYA4iwBeuwuAP8UgFcDIAkQs8sAV7waQOOiqmEJgFMAIAFqzS6AO94ugKpbqqjypiqsuKkKyr9CCUBTAF%q3OIbPAXwBUmAApgCuI4CAKYAYCfA2asz6kzYUkAzDeBUAY6dJuBUgCMsAkgCECABSASMUC3AVANABBwbpKkABisCTk3gg0:8uDIAawMfE%9ZAmLgw7jl3TBwj0AG:K03SSgkCYa:ZY%9FAp7KhOk7iB1B6k7SN1B6g5Sd5C6g9QdpO4gdQepO0jd4V9RKGQsAPzTAJ4AQAkw:i0KAKoBACAAPAnQN6jDPxwJyFMA3ZoudwKgkwQAhH8DLgNMNQUQ4xMBGmgKACSAtwvgjirRFFfdVkVYBTASIDAFUOSfBLiYz1MAvkkAlgCOAPB2AiRYArg7AcZ5GgBqAWNWBHyCIoBkwKETI3RMIEwFODKAJgMcIQCnBhwmPjg8mFIIvO8juTbw:kf%SQEfHxLvZkBQKKQCpEJ69k4oZEsmSN1B6g5Sd5C6g9QdpO4gdQepO0jdQaYTpO4gdYeDXnd4JgEQZGKCRADVABwJMEpTAABOAdgTAR6q3r4HJADiO6qjZ1u1d1EFACRAC0oATRudBuAtA1xR9XAsYOOyqrVVAJIAVbYK4EiAapAANAlQ6EwC5JW5%wBuePsACj%3%wAuaEACnLOnA0z76gAnL:olQHAvwHGeBgirBbjVAHdPwCEWAnB0oMtHR6AmMGSPEDRCwIqBTwhYKJiqNvB%YFogiY883ttFFrhCIR1GLOxOtmTCwRQKUneQuoPUHaTuIHUHqTtI3WF:TCccVKEgdYfsyASpO0jd4UWrO:wgAYA7AXASIEQAsAQYcE4EiPOJAFgD6L1PewB6PQlg9wCYCYAWEgD1eCTgsjMFsERTAE4VoKLuniqvvafKUALcRQmQPAVAEsAKAF4KeBklwHWqA%T7JcDZEAlwypEA7jSAAasBp1ILAJoKGLH1AJoM8GQAcowWCOISwaOD6qMjfpKFwIDHJ0TyxEAKPvYIlQSHkncRpCMTUZApeysUpO4gdQepO0jdQeoOUneQuoPUHaTuIHUHqTtI3eH5rDv8IAHg1gLGJ:6OEoD2AZgpgKdq0EwB2CMBH6oengLo7N3BGkAb7gHY8qYAOtZVI0gAnABYpQkACP8MTAH4BABXASrq7qryWjMFcFuVRPhYQJwC%ErllxM4BaDJLSEJcKXo810kwGyyBDDTACABfJWABFcCJmg3AEiA4G4ApxZg9wTwyQEungwYomMFj3p8ZDhiCAiCw8nTAt7UwEA4h3bhE08quHxwqD89H6dnL4VCZjJB6g5Sd5C6g9QdpO4gdQepO0jdQeoOUneQ0x2k7vD81R2yJgCwCsBLAUfH:VUAmALoH3zsTQBouuJUA%iM0zJAMwVAAmBDNbVDDQCWAXoVAFoEuEQCoHFRVVsJsKAqeQoAJwFq7qrSGlMDuK2KsApwSxVU3CQBYCYBSm8kSQASAKkkAJ8OEFoJcEXAuG8vAIiAY6dG1dGThG8ywO4KGAmtCVgCUwEfHzUMJZEkBEIIFQSfpOAwSYUwPkwhB56VjGTCgRUKUnfIikyQusOBnE44sEJB6g57JhOk7iB1B6k7SN1B6g5Sd5C6w94JhR8sANwqwLjvVABHAOAegMeqb%CR6h14iAKgu%8BCoCuXtoF0NG9rdq6tlVL56Zq5oWAJADWVAPWAFZoAsDsAUAJsIQSIBJdoCmAehYAMAVQ4%4CMBLgpk8C4BRA6Q11NYUEuJCXQgJccSSAMw1wMsU0wPHTE44IGHN2BHBNgIWAJwXMdIAnBQ67dYHjmmMjKASC7CYGkkVBCg67j0kYfBzksPf4o8PZY0%Fwj6TCVJ3kLqD1B2k7iB1B6k7SN1B6g5Sd5C6g9QdpO7wYwqF7AmASVcAfGuPBaQJgCeqDyYABs0OAB3%YREg1wDaYQKge0u1dm2hAGjCCQCoAazxSQBcA2AJUNtE4d%dAqiK0hQASYC7qqyWpwBgF0DEmQLwSQCnCqC5EiYBwiYB3GMCNacC0wCfmmkAuxPAf1IAyQBeFsgy4NhJuh7lEwSMEECcuoCtDRwfTsLsDngWPGEQwhHveujIEHGU%Pio99i%diQTBtOy32SC1B2k7iB1B6k7SN1B6g5Sd5C6g9QdfoBMkLqD1B2k7rBvphOyJgDgaMAJWAiY%E6NTTgCYJSPAxx%pPoGvQkADP9xswcABMA2CYAumgBo6lhXsbY1FQUBADWAVmcKgCVANQuASGwhfArASoDbfgkAAqDiK5VX:pW65pMAX6AEuJxGApjlgGdSTANQHWBSfXpu0k4DeCcFBKYCWAYgTmUgWBfwC4ERjxMETAgcPh7OJxmQUhIcJT6xDDHOe8c8Dh3NhKG0ZCYTDqZQkLqD1B2k7iB1B6k7SN1B6g77YzrhoAoFqTtkSSZI3UGOi3wB6w5ZEQBWAkw5AgD2AEANQDPIewD6YALAVAA02P83JwHgMsBN1Wr2AHSuq8aONRVrW0UJ0NC66u0CaF7iKQAQAAueAIApgIZ5VVF:T5XX3fMEgKa4%rYqigSqAI4EyHWXArIEuJRKAoRMA5wOmQZAEYATAQnkxDmP42cdGeATA%MWkAFHnckAYlQd:cwjOCmQisNGEuxGmEA45nHEPubAD:KAn:t:ZjgjPsmAvRUKeycTpO4gdQepO0jdQeoOUneQuoPUHaTuIHUHqTtI3WGvhUJWBUBC4woACP9wHOCgqQEM8QTAAAiA%0hnfBtPAoAKAB4FaAUATwG0r6loGwuAlhUd:peR2uYlVcNTABHeA2CnAKwECFQBWAIUVlEVIN9UAawEcPYBBCVAgSsB5kIkQIppALMbwC4K9PYE%I4P5JrAiTO8QPCMs0jwlLc:AAlUBpDPUuHIAmdigBgldhEH9jOGJEkwjK:5v5c5np7DmbCnMuFgCgWpO0jdQeoOUneQuoPUHaTuIHUHqTvI6Q5Sd5C6QzqZkDUBACQmAxMA41%rIZwAeKr6Rx6jAIgPPlC9Aw9Uz8B91dVPpwDABEBbz5Zq7d7ECoBZBNiEUwCuBFhR9SABWkAALLMA8CRAlW8KYF6V199TZXV3VWntXZ4C4H0AkVs%CZAXIgGupJQAtBzwvLsXIKwS4EwDoATg:QAkAxIoAQw%EeByxuBNBRw:5VQGDCddjCAY9eFODrgB:%inu8mDMXqfwc9bGeBVD%B6FL8rhBPpCZUHz41QkLpDNmSC1B0O5nTCgRUKUnfYM5kgdQepO0jdQeoOUneQuoPUHfZWKGRxAuDvdBJAsAIAJwGMPiEBMPxI9Q49VD2DVAHAPQB9O6ojvq3ae7dVa:eWaunW4b9rUzUBnRssANZVtG1NNbStqvpWEgA0BeAtBKRdACQBKjUVbhXAJwF4CiBEAlwr:9IvAUoCEkBjJUC%IwF2mQbwKgFwUgAvCvTJgOSpAMtZWiRoOMG7A5I45QKSYAwJTgy4%EL%yaBEcGTCZx7w2WM61B:7lK424MNrn43tzqfpSSkRfgyhsIcyQeoOUneQuoPUHaTuIHUHqTtI3UHqDlJ3kLqD1B32w3RCzvcN%2GnAMDdfzwFwLcD4KkaHH2qBkaeqL7hx6p36JHqGXiougceqC6oAPTdVx3xHdUe31ZtvduqpXvLCoBGoHNDxTrWVbR9XTW0ral6kAAtq1wFWOIqwCJPASyoqhgIgHkEJABNAdwjAVB7RxXXBKoAmvxKZx9A%ZcqNwMJcNGVAHlOJYBFQHAaAGsBOvgTASnAMuDkeacmcA4IEwKaMxMep13GkROn:RMDqbBB:9QEcjyMk5rPxhEI8scDwf64QX9PWtzPp%BYJmRLJhxQoSB1B6k7SN1B6g5Sd5C6g9QdpO5wYKYTpO4gdQepO%yr6YScZw3%BvuaufvvCoDxb9UIVwBwCSALgH5cBPhI9Q6CAHioumARIAiAPhAAOygAWnu2VIumuRskwAYKgMbOdRWDhYDta6qhnacANLUtSxquAjQtqkjjIgkAlgAVmvKGQBWAJUCRTwLcRAmQl1YCfKEuFTkSIKwSkGoa4MqUOn15ikUA7AiYJlgGIBcImgrw1wRABiRxxjCBfBrk9IQ68Yy4QgFfO2UYZ:RjHeZPnJzw0K99ioynhX52d45nyn4TClJ3kLqD1B2k7iB1B6k7SN3hwEwnHFyhIHWHrMgEqTscyOmEgyoU9lPdIedZgj%M%AOuCPCFf1::n5YAJgmAoccqPviIFgHiHgCnBhAnAQDh3xMAvAegY01FdfhvaF9T9fqKAqB1mQRACwiAJRIARgJADcBMATTcU2X191RpHQgArgKwBIAqQMEuEuCqlQA3kiVA4fXkSkDYNACfFEAiwEwFkAxwFwYS01YE2MkAng7wSKiT55izCfVZGGc8Pg2TA2fSC4BP8WcT3nNf0Heen9a:xzKREb6fT8keCoVsyQSpO0jdQeoOUneQuoPUHaTuIHUHqTtI3UHqDlJ32KdCISftZv%wwI%vuXf%Q8b:3VMAUAA8Vf14EsBjnADoHXzkqwHADoC23i3V2rOpWnpgD8CGaupaJwHQCRWANRXrXFPRDh3%21Z1%PemAFAAaCKOBIApgIroAk0AaEAAeBKABUDNbZ8EyHckwLWgBCh1JECxKwF4LwCLgPN2N8CcJwHMkkBnIsBfD3C4OOXDmwyY9HOeQCFwLoSzBMgAczVigMJ9oEbAV:P%ybMkF0gAsEzg9ynEJ3ycPPPsBL8jnL2TCftSKEjdQeoOUneQuoPUHaTuIHUHqTtI3UFOd5C6g9QdsiQTctIt9aPrd767:%axwdz931UAjNIEQHz4keoZdHYA9JsKwLZqgwmA3i0SAD3eBEAMJEDXOu0C6DQ1AJgCgAmAFVXTClMAmuYlVa0hAbCoKhwJYAVA:V1VEpAAhd9TAuBegNBpgOtWAkAtwJwWgHA14OwV5vKMOmO4NOPIAJoOOBMQAlYM8JTAqfMunhg4hSIgxXRAmokB%NlTZ:k7QCScmeTQbp4Hwzx::nvwfcTBQREKUnfIjkyQusMBnU44JHWH57XukJFMkLqD1B2k7iB1B6k7SN1B6g77su4QKgASCeUL964ASA7:aQQALgF8YisA9hQATdcACAAd:vuINrMIsHeLBQAsAtzA8A%7AKI4AbCmGjpWcRlgbdsK0cICQAMCIKKpbFzgKYB5Va4p4xqAnQLQFAckQIEjAfKMBKhIIQFKjARIMQ1QYGoBs1YCnM%dUecMKAKm1dkr0ygCQACctgLAqwecTiUAzqfCLwCC4EQATwmcCpkYgNdOn5siCWBw3vMH%AReT8PP6N%dknPp%b4C4ccSCtmSCVJ3kLqD1B2k7iB1B6k7SN1B6g5Sd5C6g9QdpO6wX%oOOcGR:4kJCv8TExzwJ9IJgO:8:f8J:wLAIT4FoJ9PAYgPPVY9Qw9ZADxQHf33vfCPbKmWXqoBNHVvII3d6zj%j3sAOlZpAgD2AED4bwcJsKxqW6kGgFWA5kUVaVpECQBTAOWOBCitZxwJUGT2AewiAXKNBCgLkQBYCSARcNGIgEJHBOQFRcCsIwJm1dkrszwFMO3nUgouEqcvGKZ8pJoKcCsCGPT59dP2%RS%hoHex5QT8ifVmXP%0H%GOav:llSccT6XitOZsIcyYT8KBak7SN1B6g5Sd5C6g9QdpO4gdQeZTpC6g9QdpO7wfesOOdTlN3f9lS:4e3Dgn0yuAKQSAMOpBMDwI5wC6B58qDqtAPAkQKuZAOjdRJp6SAA0dnl3:hs6VlQ97ALQV5AANW06%Lcue7sAWAJUgQRo8iRAWYNfAqAAcCRAoTMJkB9xJEClIwHKQQLQNMAVFgGXfSLgcxYB1y0XCuYI57QAgvcEoASY8XPZj1sT8AjsDLiQGlcKJIVq:f4Zl:Pe3X547L3OggDCPoZ2CvZnHQFw7mJqdhMEz8pBFApSd5C6g9QdpO4gdQepO0jdYX9MJxxYoSB1hz2TCVJ32H:TCQdVKOy3ukOOCf4U:pUaH6eQb8J:wqkATD6TAPhGh:%v1aArAEZAAEAN4BFOAFgBwFMAQCtPADSzBGjC64aKda9p1kkCMHXtK0hN27KqRgngCABNVTMIAJoEKI8tqDKWAKUNOvyzADASoCiNBLgWJgHMNECSCPjcEQHOfgCeBjC4JwYYztrTAxyuMJcNIYLg4nRK:DJAv2ZCtA39%jkE9Esz6hxOGEzhcwzSF8yd:anAz:DrHOzPOeH:vP6e3Th3MZndwv6PLRSyJhOk7iB1B6k7SN1B6g5Sd5C6g9QdpO4gdQepO0jdYR8LhRxz199Awf47HfS:s%E%GPr9x:85RwAmWABMsAAYJwEwoOnX9I0%Ub0jj1TP8EPVPfRQdQ49UB2DOvwPMCgAdlRLfFu19G2q5j4d:uMgATZUrIsXAHatqfpOFgBMTbsO:iABWpdVBLACwJMAFY2Lqjw2jxIABABJAJ4AQO6wBLiNEqBgNwngqwT4pwGwFuBMBLiLAi8VXleXCq6ri7wo0IqAawFykzl3ZSY1l4kkKZCiQnCWQ:hZ5tzlafsd%D0mHF8kMGzD5y7B56f4df5ZE:ox%Btm1IXLs7ty:hKRJAMuOQQCfyYy4fuIhH0rFKTuIHUHqTtI3UHqDlJ3kLqD1B2k7iCnO0jdQeoOWZQJOabvD3f%PQHwrQ73LAEmKOS7pwLYIwKtBMhAAOjwDwIgPvJY9Q4bCfDASoC2:h2ktc8N:wTWAHrWVaxnA6cAot0bmlXV0Lmm6jppGWB1O00AgACAaxUIgJZFEgCaCqgCwCRA4zxPAnANIEQCFLoSoNqRAEYE2L0AXznTAOlEwBckAQo%9wQASgADTwZcC6IDcy5x:moIV3SIdnGCfBIsC866IZvD:3kI5RjM4TE9p7A%py5eoUCP71%kKQEMzU4IP39RfzYgAC5emQvFJwEuZ4AT%FMLhfDJAvM3nndee9bphGT2TiZI3UHqDgdyOuGE1B2e27rDx1J3kLqD1B2k7iB1B6k7SN3hINcdcrzQ7x35Zzb:ezUA:2d8RwWCAJjcRQCMmwkAEgB9o495CuCRnQKAu:%tgA7:KAD6tzSbqsVMAIAA6N1UsR4d:nvX8UoiYFXVd62qmo5lVQNVAA1UASKtOvhrKltIBKAAYAlQ3rigykACxOZVafSeKmkgikEEaIqMBKj1JEA%S4A8VwIEpwF2EwGwG6CQuAgCwCXfJRMhoMn1OH%VOBcQASAGLrAgcDnHNQIMxhCcIdxf1cDnr3CghpDOP39Jf:cl:fySfnwRvs8nB%DxtP%1i7M2:F%%ep1%nkkpBMzv3g34TkOYTNgFKwpAIBgymE7YnZmM2G9CQeoOUneQuoPUHaTuIHUHqTtI3UHqDlJ3kLrDi1t3yEke7f:OVgDosSsHAgJgSiULgAQLgAkjAL72CYD46GOkd:SR6h15qLqGH6nO4QeqHaoAgzuqbXBbtQxsq9YBmATYthKgEWoA8Q0UAA09mu41pK5rVdV2rqi6TpgCYAmAImBZRdqWVFXrEooAIwHKjQQAAYASYJ4EQEACFLIEKAhIgPzITSsCroVMAySJgOBpAYWfeyTJgOt%8gJcI4ICwBUBF5wrBPaL%r2L13QAh2vudXyO7%HzWfxZfM8J6xft%:zYfZ2lwIUrJtjzz:H3XNa:g:gc34PH9JnduXh1LhRXIKCIYKwEcD4bJg4uhhEiEnabVPihZEsoZEsmSN1B6g5Sd5C6g9QdpO4gdQepO8h0gtQdpO7wYtYd%BQAE%y:0:zdhn:veXL4N1gBMBkiACZYAIyzABh7wuGfBEDPyGPVPfIQBUDbgAaqAAM7qgXo31bNAzr89wObqjG%gRIgqmnASQC4rqn6LpIAdfpaC9MAIAI6WAC0LttJAE8AkAQoQwmwgBKgBCcBdPjXFNUzQQlQ40qAW34J4JsGSN4PQCLgC3WlmKA6gAvJAB:5flwBkIpL7hUCOTzOpeeXrn3O1%vqAgTuXHrPXM17l:FnKMhfYi7rn4XXbbg3zw32dfq5K:q1K7mfa%Dx54gnBtJzJQWXfULAEQi5fkLlwfcknSTIlGzJhP0oFKTuIHUHqTtI3UHqDlJ3OEjTCQdWKEjdYc9kgtQd5LjI57nukAMB32BkgDcBsHv4xwmAqe8nAHpGHunw:0h1gQAYeqjaoQowdB8lQCsIgEEQACQBmvq2VKxvU8Ximl4d:s0kgKa%e1XVwiRAtxEAq6q6cxklQKR9WVW1gQRYVhUtS1QDYAlQBjSCAFhQJSwBcAogKAHqQiSAqQQEpwFYBFwLiIBc3zSAplhT9IWPy4UOBR4%AaC5hHweyuV8vuZ9Ya9X9Ocv68dX9GO4XkYR8Ll9fNk8zvvc:z4Gdx288WeZa%a7XPyfuYq:E64U:K:m%TFCIMjVXbAyIZfEQqg4cITElWvXn0k4pOVqZhxEoSB1B6k7SN1B6g5Sd5C6g9QdpO4gdQepO0jd4cWpO%S4wd7WASa9Tf:edIDKXAAkQgTAOAuAMRYAo44A0HSAABimKYDWIc3gDlYBcBIAJgBAAOhrVF8b4hsqxpMA9Zo6FgA1XWskADo07asoACpZAFS2OrsAzD6AJmcfAO8EAAlQlEoChFYCgrsBAiLATgIYbqirJYSVASgEbiSFf0u%JwIuh6JDN8CfvVpwg57r967y61fxdf5cnnu9Qe:lGTjMm%:U5Oa579N3XfG9doN:jj6biz9DgR8fB3C:KzcFV9NJgTDykoVDuu:Z9fuC5KYnW0JhL2WC1B2k7iB1B6k7SN1B6g5Sd5C6g9Qd5HQHqTu8GNMJKACmp3mrfyI5%O8W:id1%DcCYEwzOhkiACZCBMAYC4BRTwCQBHio2oZ2NCABSAA08yRAU:8WSYC%DZQAMAVQH19X9b06:Peuq7qedZwEqOmCCYAVFgErqgpgEVDRClMA7iTAgq0DlLIEKLES4F6IBLjjSYDANECSCKi4qa46ewG8SQCmhLACACj8IpmCzzHAp%NqIaC:Q4f:q4j%fYVf4mu5RV%qa:qKj:F1fc3:EoN8bsENwvf4hhfY%TWQB7kFzmcKvM9c04%v8WvXfO:fsO8lkR%O97tvpJQDPlHgyoT8FICISEtAcqRiD2XCQRUKUneQuoPUHZ7TusNxqTtI3UHqDlJ3kLqD1B2k7nDQ6w48ARBcBPh32:0PC:9TbvjXjDsCYCTxrRpO6PCvwfCv6Z94qvrGdfjXYPjXdBsBMMrhf%QB0jrM4V:TPKSD:6BmQIf::i0VAwkAUwD9IAE2VEMfSIANFAAgAmp7WAB0raEEiHANINK2glUAEACVrYtYBygHAWDrAEEJME9VAGcSoLA%XALYaQBHBMAEQK6tAnxJdYAyB0cAoARAEcC41YAQIWCCfpDcIoMO%0UU:vOKv7LXvCL99yD0:jWUA19SUC90sAFe:5x%fs3yJXPDex3D:Jc21OchXyL4HD:7ZRL5Dnn2555NFASlwbXdZAN%zxe7EBQQachATOxHoSB1B6k7SN1B6g5Sd5C6g9QdpO4gdQepO0jd4cWuO%RA3z8xySRM71:tGv6nzOg:8t33EwBjEP4fqU4QAKMkANo1bSNcARjeVs1WAuyoxsFNFRsgcAKgnwVA37qqi6:zFABLgO5VrANEulZUBEXAsoq0r6hKnARYUhUoARatBChjCVDq2wkApwPMh0uAXUTAtcpbXAO4yRKABYAjAfyVAH8twFKUmtwif%DH0F:sgYHfclPl8xUkQD48d2VAIciBG:g4D4HXbyD4vNC87gcDfJHhK3qNKYDfg3yZREEYRgakoiATjHBIQ0GQ8O:bVSY8o5zIhlDIlkyQuoPUHaTuIHUHqTtI3UHqDlJ3kLqD1B2k7vDi1h1yJia:0QH%GwzxLhN8hz8M7%6::uyUM:4PAmDSEQAJRwBMsAAYdwSApnNMh::Rh6p9lASAlQDDO6pleFuzo5pAAqAI2FSNg1sqChKgf1M19IMAYOLrqrZ3XdXAJABce2ASYBUlQFUnVAGWGRIBMA1QbiXAAk0BoATgKYDYPacO4OwECJMAtRD%b6trVbdVXhUJgDwjAHAfAB8XWM6UAV96lPqBCYHcEk1xaq4FyCsBvkLymYLSm0hh6S1VWHYLwz88BiGQX3KTZAA8RnQQL:nKPi%A58VfOe%b17:yvV6gvwd%zn0dH%vXCvV7gHmvMAWeDPhqV:ILwykwpJAOSRRmj0zkREYy4YAKBak7SN1B6g5Sd5C6g9QdDtR0wiGpOzyvdYeMZILUHeS4SKk7qBwM7RPf2gAPjHGwDzLhMJ4i:KMAmEwhACZYAGi6xx0BMEYCoG2Uw7%mZWRHNQPDO6pxeFs1Dm1ptlUMBABOA2xYAVAXpypAbXzNkwA9a6q625EAPA0AEqASaF%iaYCWRVXmCgCWADgFYHYCRHkngFMLgGmAgloiv5q4VgUnA9zS15t2CsDIALsc0FkQ6MmAAK4QKAnHhH2X:FLDTS:8l1H4L0JukwyA90AAGAlQwj9TQo8x0JfctOG%0Ab8m0hh8U0b8OEzRRz0Lfq7igIUl:LndhEBxM1dCRMDhYbizCkouunhiI0kijJj3wmFPZQJUneQuoPUHfbbdEJC6g5Sd5C6g9QdpO4gdQepO0jdIZQcCOsjGnPXfnTq2yRACISB74eEf58ASED4f0rhX9MzAeH:seoa1%Ff02EEwBgJgNZREgCtoywANE0j21YCxIa2VXRgSzXgJMCGahjYVPX9G6oOqgB9IAFgEmBN1cTXcAoA6gAkAPzTACABKtoWcQqgjCVAaZND44KVAMWwE8CdBmAJUFB7V%XX3EHyUABQHcAsA8yPaPCxf0GgpUJTbviKKAtQmpr80kDoL:Owwb8cuK2KgQq43lElmsKyOygDSAxQaKdJAfOYn5fcos9hkKdroX3Mr%vvKMaQ732uuCwAC4D0fJX2M64QKDKUPAu3LIVBeZGK4vTsKhKeQSjsywkFqTtI3UHqDlJ3kLqD1B2k7iB1B6k7SN1B6g4HfjohZ2jyazUIwOb%qWRGdMjflbDwz4AA6AcBkAgIAE3XBAuAcQj:LADGSAC0IDr8swRoBAGgiQ1vIdEhomFQh:%BDQ1d6:rXNSQBanrXVXXvqr6uqmqoA4AI0FSxBMAJAE1F25IjARZVqSMCSkIkAEwCFOIEwF1VUOcKgNv6CtxSBZo8XgxYCK:zcsB8FAEOlbesCMg3lAco252CAIU68Bts%K8gSiru6Osdfb2LEgBkALwOnyniKYFCe71pXysuu%17XKy:FyiB7y4zwHN6LQl4jwFJkC0gwBcbUn7uZoDA%:w3FWVCBnIhWzJhPwqFvZQJUneQuoPUHaTuIHWHPZIJJ6TuIHUHqTtI3UHqDi9S3SGnf1IHdM0ASAAd%DNhiMHnkwYSCQM%nqIAiGt6ExD%n3jhX9Mx8ZAEgKZtXId:EABjOvxrmkeJptEdDQgAqgKgANA0oATYxPBf179FEqB:U9XyNECtBqcAepmeNRIAmsrOZVXRQZQbCdC6pMpaFkgAaEqadPBvZEAAxLgKEKUpABIAOvzX0t1:kABYCQABUHtbFdbewr0ABdXOSQGRWz4ZgFS6OCIgRAgUpMAN:Tb4V9yywR:Df%UdpBS568iA24SZEii:5YV6DPr0uhf2aYKgFCYJKuB6W5XCVX8HvFZWQZQyQRlQyrhSIJzbaSmFaymz62cz%86kqYUwMpUT%0woZEsmSN1B6g5Sd5C6g5zuIHUHqTtI3UHqDlJ3kLrDwa075MQnn2BA75:6Oi0DzhUAcdDP9CWhv5fpZQHQndDhX9OZ8ARA%4QjADQt4ywAxkz4J2ACIIqTAFsqpq8NIyQBGoZ04B:cUPUwDaCvtQMACABnJ0Cc9gKYCYDKLh3%UQLo4A%0L6qyNqZlwVcHKHH2ARTHnCkARwIAtBNAB32zFJBPByis0e:B1ZEBBRHDLVVQ5VAZQkUyhSEUWW4jGPwrIfgHwn:VXRQAcCUB4FHsBPViDPYU7vHnOeSX8GtlViZA4L%ryvVr5XCtJDwJcDslZeXpINGQijKm1BELqbnzDKT:vkwERbaEQrZkQpHUHaTuIHUHqTtI3UHqDlJ3kLqD1B2k7iB1hxe67pDTCwEdgvrU05T0OVdDfJJCvfl5:A54jenRzw3dmq5JE:5JAHQkdPBPkABo07ROGAFAEgAFwNiOpXF0W8UAFAE6%A9vazY1W6p%aEvVDW56QA2gn6YAsA4QhzrAmopoqrpXVGX3MkkAmAJoX8IpgPK2JVXWuoiUti7aaYASngYobvQoitEkQGH0LouAO3g6gO%EgDqYAriNJwWgADBUJ8uAQkMVcMujMjVFltuW4gA2%FcZdDCvuutdK%lawlMBiA3tdxzuYuAvg887lFfds4G:ArmnKsxr%ko:w1SkQL9XnhK:UAhSbjCfr9iNu0hZEne%N9mSCQdVKEjdQeoOUneQuoPUHaTuIHUHqTsclOkEqTsczOmEAysU9nHdIadTB:Pu6SdIT5ApHex12O:FKwX5HnN1wn134LEN:JpOpmPykaWdw3%bAwiAFqYZBICmaVwH:zEiNqaDP0uAKE8A1EP4H95E6owEGNrEiQAUAJqaPh3%42u4DyAC9KyQBOha4SkAqAFQFaAMJcASCoDSlkVV0rIYKgFgKsBOA0TNYsA7HiwCigy1BMkAh2pPCBRGAlQRRWkoDlCC3LH4wn%EKIcrBPVqEgBl%n28VlLQN8E:GPjhM%VVHPw1FRFGv1ZZReEfHgdxg3xKQn6OuGdxP1:hUpWOe0nfk:HflQE:RCL8GEJhL2WC1B2k7iB1h:02nTArdQepO0jdQeoOUneQuoPUHaTukFIm5HRO64Cu6QoBxYAO:F2MCfNdU:oKzwPvdTDtTuBvZ9omdejXwLUVeUDXhEGH:wQLgAkd:oHx%6oRJMA4CwDD6BZNAYxsMhskAmAnwLB%PAQ1gDUM:zV9ayoCxAGSAFU9qygBKlgClO8qAWASQId%APYCNN0jEQA7AZC7qjh6VxVFjQTwTglAQkQAUuNQ7XKbiCRTbPCF:ju%wG%Df8TDBH8T:st1aAfKALhTz8G%zKXShH0nSOufrUTuIVXVBL6mv6fSkQKVAYIhPBT7:S7h32N%X2VkN%ZTYL4rdaj3:23pJcN%kwkHVShI3UHqDlJ3kLqD1B2k7iB1B6k7SN1B6g5Sd:jxZEJO%7QO6jrsuxgpgM%nGA727TbgP:YFfHjehkGfwr4X9P20ONDzBwgIARAAzYgO:wmSAI0TOvyPExD%GwyjwJaqHyUJUD%ypep4H0Dt4DruAajuX1PVfesqAsTXVBVUAOKrqrJX07OqKqwEWLESoAxoAwHAtCwyrgSYdyQACQADhP9iQ71DnUPt3SQZUOxSnYIIUZKCUh93fcHfhv9qQIdahmQAv1flYkI5wKG52oR%el7lEBq4qwNE0gPfXVV9z2E%nAiT6v3qhZTvZSolSDD4pcFuZCQ5qu4eSKGwlzJB6g4HdDqhQOoOUneQuoPUHaTuIHUHqTtI3UHqDvu97pDTNq0Du0N7kCn9OkOPHyKtDr7XINTra:PUA6SFrwS:x6G:efIhYj%Pr3H41zQyMZAAmui4Dv3A2BYBAkBf60d08IcagKZ2aEPVDALrqnpgXdX0r6lIP00BQPiv6jUCYIUlAIsAXgro7QRY9HYCwGJAmARoWWAJ4FYCaBKgyBEAhuKGexnJAB81d30yoMRQnUypj7tIWQrKfaQQAPy4AuE7%dUm%OvwXDO:ayiPVO8SyGsWLBH%bCqq9e%JWBZCqU7xOrHo4L2eWgg4AiKI83dVZUgmomMvhUK2ZILUHaTuIHUHqTvI6Q5Sd5C6g9QdpO4gdQepOxzsukNOy7QO4Clo9QV9vkvv0Mw0OY9N0G:2Bf%AANDf3TR1Xz8nmvR7TfyZJhAATCMTS%wg0YkdFAD1wBiF:7oxHfxHdPDX4b9meIMEAFPNEiDSv66q%nXo71tVVfEVVdWrwz:Qo0N:t0e52QnQsctiQCMBcC8AnRJgpgFKDNG7iAn:JQ33POoN%vW6ALUh1BClu1AWQrlDWfWdgAC4awWAn3kK:tUm%HPo5yBOAsAf%MMCuPczIdQCXogPRb9fU0tXYjGJGqBuET:nZ9EHfHY3iWDwSYiQv9v32UxIIzkieywT9qNQkLqD1B2k7iB1B6k7SN1B6g5Sd5C6g9QdpO6wtzIhp2lah%4MaDY4Ib0Rrw9C4Ncx3OvP8dXC3wXXxml4buDfN%UBPxvT3xed3FHRxI5qmNDhHxiH8L%lalkC1I6AACAJUG3CvyMAgEqWAJXxVVXBEqCiZ4UEQJcO:t0rqrzLSIBlRwIs0RGBKAMWnBMCvEpASeM93A%A10YjAoB5DP7FrgTwiQCmjihF7hK14ZQFSQr99xDfBIB5PYUEqKwhILhXQoCvBRaIGu8Ovgnv4WF6kYDQXbvgozqIDu:VdYtJgd0E%1qHmgD4en0AfH1J1WlqGf:3LiRTl0x1bWqCYiEtu0mOAy4UpO4gdQepO0jdQeoOUneQuoPUHQ7KdILUHQ7odMIhqTv8GEIhJ6aDd5BGRIfvmQd0BTiM4x35KWaSsHfq%fXGAPi677uJJv39iCsZ%LXmGSMIHuDPgwBoABIkAOomdPAfBwGwidSMbqnqUX0d0eF:WAf:IR36B9eQqoFVFdHhvwpqAH0kASqeQQLgYsA2qgWU80RAWcsiTwNQHQAWBZY2ESQEmNi8P:gzpS71Aeo8ylJQXrsL5s5:YBKgQgf8CpQA9%xjCv7%0I%hvW7BEwCBMB%BgA8BPmVQ9sKyCfrVIUG%pn4Jqa1Lpq7eZVmH:CVLXUMYy:i5OpYAqQiVBwG8v3HJwcgH:99ZE:bvClKbnmwJhb2UCVJ3kLqD1B322XTCARUKUneQuoPUHaTuIHUHqTtI3WHvphNyGnQQd4kCMxTWozp4N2D4huuOA78%vaM:s60fE9GpHR8xvjbA58x3GxEww8zeV02zDzwZ4GA%E5vm79HUT%6ougQJgFpgfEvVgABACaDD:4gO:sMbqgoEgKYKBABKgDWcAAABACIABQBKgFVVbiUAhf9yXg6IVQCuA%AEQPsiS4AFnwSwNDMsAkobNTFN9J5HMPjztQTD:10rAcqCQOgPocIBwn%ZOwXAQqDCoRKZ9%EGf3:gp5F9umPv4b9jziP5qe7UmwBd7%GG%VoI7hjeA6Ffh:p6yzKCn4vqx2HwZ%r1z6aEv88nDVJRH8ZSKLWZUJeebMmEgyoUpO4gdQepO0jdQeoOUneQuoPUHaTuIHUHqTv8uHWHnLoZHaiZeoe6aWCbrlPAtqUerzuW%kl6zaJ:xtAQAORCVId7IAbMMnM69AP6ceMsTR:EWEZEWSCAoKiH36l:X22CBEANML6pqseADVUNEmBUB::hdZQAlYPrGP5BAlSyBDA1gMr4CsECAHYCVPIkAEwEVMK109sJUIYLAhexFmD3AzjLAsvMkYFN834JECYCLPOqrIEoNdTPJwsATbl%vSIFwSkAL:TPIxj264gqZIGoda7uXX57594N:ubOPeG:Y05BH8NsIPy6od5Q76IDfANjg7x9bcUj5seE:4YgDQFCvqs%UxqWkwkRELvKhFSS44AIhT2VCVJ3OJDTCQdVKEjdITsyQeoOUneQuoPUHaTuIHUHqTscnLpDTs3MtgJqA9RMbRHTW:7HDrXINlID1ymPOiMJpgmQCg0oF3SQn9WhXod8ZI7CvwEmAqwU4McN%mfq%XvqzO%Y1H9DggRA9YQO:%ObKjK2gVSNravIqGZEB:6hNZQAFQMsAJIkwBotBMSlgK4EoIkATwKQCKBTApZJApgdAXBsYGAKoAxoAuaJRgaf69cbHWJEORDVjxvuJVHOAgAlQIMOLg7ldR4VASotCwiG:XodsupN8J%3EiDiQKFfB7t6L:B7wd%9g%%FenptGcE75k74pfC8Egj3TjDXgT7K%J%vEo0eQREQTUXjiu:nwgh%VyjRlV1FxK6fDaE%1RTDjyAUsiUTpO4gdQepO0jdQU53kLqD1B2k7iB1B6k7SN3h4NcdcqpndIAOEAGmiWpgSodrTfXUFuLKgGq8kkRApv2QINhB6lgA4JTB7I6KggiYMzxIZpZkQT1PKND3gJwgQVE9qUmQAIgA45s6:G8Qo%uqcmRdVaEEWFUVg5oBDYR:pqKPJwDidDRghZUAmm4WACgB6JhAc0oA7gdoNzsClqkW0EbTAKUtRJmRAFYEmOf6vSaP8kYXlgAoAuY9GogKh6qoDvQNC4GQ7wT9%iDzjPdaRId5iw3:FPoNFPqd0f0Gj%AYPQVX:%vuHXPfXXhfWKcwHnPwnq8RTYZVS7Qx%ecs%Jm1jEgnCZ6ZXaQE:ft52oH:e%D1R5QJ%1EoSN1B6g5Sd5C6g9QdpO4gdQepO0jdQeoOUnfYe5mQU6XDfjiboYAUqGIiDiQPtj2m:VKhRkPTBRT%CR3wIfxff4DXBnPVwHvmc3UzLBFmduy0AUiAaisB9N%VIAlQNb6hKsd0%B9lRtZVxfCaqkgpAbgK0GskwKojAVZJAFgJwBMBHc5xgebIQJ4GQBnQsqgqDM2GJf18ia6a8mYd8pv8VDQmAxMBFQEqOfz7qA8L:V7A9ySANwEAYNBvSKZGh3gkStQiy15nn:v41MkPjs674dN:1zx4Vz:mBP3GJj9Nzc7z5hTA55JY1z:rkfJnA2QqDFwJkZJQobFCmH8::LeIrhKOCHkWoWDFwveZZPhXnk6QuoPUHaTuIHUHqTtI3UHqDlJ3kLqD1B2eL6Gw:%sOOeU61BsqMqQS0AG:kkUAPubXSRSAQNjWz0kmRJjq2S1VM6vDvKZGB:vaOR3uIeBD4L9%X1:pMbxeq1%Hz9To0O%KhRqUC8yU:l5gUv:OhP79Ezr8j2%oijEd%kcBHfxHmOFVmgSwIoCrAEYI9HEdgKcBKnuIKrgaEdDFj0EGsASoaHeODHREQAXgioDWRf:z5kVV2ewIgiaPSkMjEyOqgKhHJWNfa1hAIi4m7Dc4wV8H:Mgugb:WwYR8JKYDILLiX8bHrwfH8hsaDRxkmwj37rwX%P2hval5QzW3AIHXW5KBzzTrAE:w8xCaMqE5c3YVCk1%eRE1koMnGqIBOdCo:5vgexkKhTB%6HTCM8kEqTtI3UHqDvtrOqFM6g5Sd5C6g9QdpO4gdQepO0jdIb1MyCmd2VBAWYBy3%NNfdXMbqpypmyWPmOocKgEZoFNVaFDf6WmyjBD18gsi4FZHeTndLDXod9e4TVNRId9eN%TCM7rOHmgQz%E:0n9e3X4r0jo0D%hGV9X5WNrqnx0TZWNrqqykVVVPuyFfxABlXCF5YD9Bj4hIL5GxwViHUA:7wUJQNMAVUDXKi0JxL0ALAI63WMDiQojASD443VJVRpa:MBEQGWQJqLK0MgCwLJANQBHAER0YDfhPgLPG5ywH3XA0L%kH3t3%H13%REdqmIe9TE36GsaSQTUu4GwMbl3H3MCv3snvwkxoZsee2F9Q7UwXnhnIdCaTItBf67FfR5Ccya0rGdMuEjgfw%LAnttWed:O0sEnFZYxasrQjKSCrvwfSYU:tWFgtQdpO4gdQepO0jdQeoOUneQuoPUHaTuIHWHH73ukFMys66CGClAuK%Zx8zsOgoCKxFm:ZRrKhCSBhWGGZICIAiq5kAI6EB:fUdF4PHctpUFOEEw600SVPJkAfx8hQ7:FVP6eyH8T%rAD%FfUz5BlI3r8D9GAqB0ZFWVDa%qcmcCoHJwhRhYpfCviVgJQNdI3NQBvDv:tg7AewFM%KfrkqWy3bCsKtscWj2qgJYgOsQ3h9CkA7sm0rhIxPxCIOIS9aDQz2E:5uGF:2WkNuZRh6w4d:w1jYR3V5:CvrnD3%CGwkD:vrF5leHgrwNyM8JBuhWCuxf%rQBIFeTb:LRaNrNKOpngkwotfoFBMsH8u%DvNO:xv7uZphZMbaG5Of2kw7NMKWRUe9hvMkHqDgdyOqFa6g4v9HSC1B0O6HRCgdQdpO4gdQepO0jd4UWtO%QUza4py8yaKtbB3ocO%SX6vWJNCT5OBkRAycyGBYXArEeZuaIkMFMEW6p8Tod4HfrhMVxBCFTqawU:N9LA1BPKIfhrynX4R6b0901qIPBD%J%ka5lPAGhGNMNrqhwwFQBzLCAIgAFvCiACAgAmAGASoNdfB6hACbDqkwCVnaueCGAZUGlodx53kACocoi0elQzERAAQKsO6YYWh2ZNI4gAjzAJUA0h38EL:xz0dZiH57UWN:xrGk3oX0Hc4N:Q5I3zm5F%erwWCP7rFgq1yaE:PFRvIq2t:kDe1rZFj9s92lw6tjza:bSH4P1cCuC9oBjAv8v:97YGhIR9HaGfwX9Ty6Z93S8PzAQDTzG07Pbfhn:ue08nfL:Kw4EUClJ3kLqD1B3kdAepO0jdQeoOUneQuoPUHaTu4COnQAf7VBQ6GElQqMN%kUOx%3yG4deLdegnSCaQMNhASlEc6PA%B3ClYG4DpQBWDOA1M1XAVzuVMK1:dooo0aG:JLGmSibWvPCPAsCrAZSPMLgMkAEBoMHwPwB3:0kCwBUkQMRKABYBPAlQweG:0hwRqKns5Nfg2qnDPdABrOjHKyoCdBBV7USkbUVVh1CD12UPFgM1THWzvvI0AIqAGEmAVGG:Rr9nqPVBIR9wH9dx4HdpaKLQnxT8YXEeQ0v0Vu1jO%oP4:BuV98JtmF37ilwb:ieuyEfw3uHR4dlW3V0%mnvIDrCMJ:p3EoJiIT29oAIcMWD8:cHRQG819a%4fvbW%2:zcgBvySg97fou8Lkw:ecUMhoimEPhUK2ZILUHaTuIHUHqTtI3UHqDlJ3kLqD1B2k7iB1h2cTCjl5s6sqjPwQCubWmHVVqCmYJYwkgPcK5wLyYMYVCOuqaM7IAR3c4fH1DZYC8NzIgQ1PFsw5j3X4L57W12n9czr8F0%u2StIgFJHAJSjAFgnAWCWAQ4TlUMU:it5CgAkQGRgncK:rwawQtfeVZ8ECJ4OEARCPwb:rlUd:v1UA%0rPmpCqAXaPKwAaCEJEGERYMGQv2ypDaOJqHOo1%Eece:0N6W6y69DTvMqEnNo1CHfAuEtuKQPxuCdvr4vCDNuWLah29yt9wV%f8jvNHTtJNEFV:cz9rO706HDf4cRATxR0N6xaWmzr5n3nYkB39%:6Zs%aMNwv8HQfwPzGGgPSI624IRDCva68pANmbAfhYLUHaTuIHUHqTtI3UHqDlJ3kLqD1B2k7vC81x1ycmdXVJBrKUiSBHNEnrkGpcEMXMMmC1Y9QQASYG7dThgUsxQomjOTBaaesI4VhUId:oum4aqZ0t8DEgBIrHmTAABXAMwUQAUeB7iuKoEhompQM7BOAoDv:pspAHcXQBWfDFDFOwGwCtDtiYCqLu95pGuF6F7xHjM1nQE6VpOoNbTr54AjAWpbiZoWTTNRHRABJuQHwz49XvFR3%zR0Lxq7:L7wr9zl9:e6W:mO:1O8Mew1ko0m957YEzeHzg3kkb4KWBz0O80Adt:x76z0x:wke5kugOk%pyhEwiVAe60gCcHOpxJAfd5W8eGTxYAHR1%iWH%XSbod5h:J39:J04vJMuP3QhWHsLZO5mw10JB6g5Sd3iR6w4RqTtI3UHqDlJ3kLqD1B2k7iB1hwxlQs7l2WV1xeGqDvpBcjMkWRgwc6v6OUmBPJwk8E8UFF5fx9cKeYIAwr9:mkA:n6FpgoJpQP%8pgAFAFGUIEommPFVVToGrKlSsweAdwEEawB2CsAN:318GkCcRQAcEdjryQAM:DwNUOUQQQkA1zV6rKnWz2scaoFuutZ06quPNVWHAmDFD0qAZaQOrq2aFqYpmTod6g1u0Kfnq5YGlxYdJHSYD7vLb0f73bv9sNXeF:y502678P7Rft9Ie6C77wZ:G:ZNEPeF:vs6sBPdhp4HmvuWniC9hPsZgn4uXAhsI1189f4WIyK2GFM38P8b2vE1vwQwBH%Wvpv%ffRv30Hc35cpmQqDgyYUpO4gdQepO0jdQeoOUneQuoPUHaTuIHUHqTv88LpDzsXZJXWJARmQCVdCSCUO6LqKXGMRYCWBnSBYo2mC68Ca89qayptdwymCPAj:ZqpAP86bWlH5U6tIAUgAFgBFE0TxuGZsVZUAo4Q5DcCcCFA%SMAiQIRPAzACoJIlQGWcREAl7wRAAQDXHpoIwPCvH0d6%M4:Pubwr6lB1pDaHk03Ude9jtR2rWPwRzoMqygCkHYPmAwAGVDfqsM80ELUMsnB3wn7LUR9i3m8ZokGMKE:1hJyp9:QavCCP4V:HdiCi:qcPn%7M%Zu7467Y:0ciL279vedO:uBkN:7wEevS9zlIdLTq8Hg73I:lC6EJwhSTg1sIR1dW77pAFM3gOkF:1QBiwx3UqGHv6vbP9lAn73vTTqE1BzC6HhGabA:ZMKW1B0O4HRCTOoOz23dISJ1h%d2OuGgCgWpO0jdQeoOUneQukN2hELOeR38Lz4Dl0LIVBiADLjiCoI5nh7QgR8eX7OsWkFAwoCA6YFrM:r1GX2d1tepFRIBk6tIQUKjw38hML6qioAxjQ7:xSABRlZV6TAztKrKUAKsIRUDTL8O9v0U:is5:Fdi%A:Qu8KVAAr:QDXQC9c1pKaHA3%PE:4RHfx7NpBalgB1XQROAFhWCZYA9UxdG7CCgAiob1310%InLOwbGRA1tK4hsQC%O:1hd:tt8N%0wd8N:1YCcE:eBsNO726:6d27QdkG5B4C7%LrQN7bQ%E%DsSBh0ifA77WZ3hkMRLAkwGuPOApgV6:YCAZwH9Dj:f3dHFloMuEep4a6EoirJqgv7s7OMlA7:U4:2b8nUZ6OOxWZbB0pafzuRYKUneQuoPUHeR0B6k7SN1B6g5Sd5C6g9QdpO4QJOfc7KI6nyEXdNh3eXZpsMzCwC8NrujQf:X6smbFY85lma4gC2b0Y03u9AoxpZlcUdeAxIrK0%RPrKiCcWZsRRWOrqgiTfEIUTK84kmAQaJ8gOknKoA%HfD7guF:zf8a1wIiAIR::X4NUwv0Ajrcx9ftYxAAJAGIoAQw1HetqfoOPw1AO1HfBnjBv6ENWPOA1xyirbsEfR:O3f02:53%pkDwbzHBHx63hwuANndxnu3N61Do3BVPCsoYgL3xfXMnH0J9n6H:keoPY%CRfo:edwUA:GyvwRUBePUmB8KmCXySIMW%AV%gt3WEHU8mmNf5M:g6Xh8wnnjoNc97QyoNKSYWQulOz14KhWzJBKk7SN1B6g5Sd5C6g9QdpO4gdQepO0jdQeoOz07O6dl5dWZuwXJ2btFDh:5zKciaNJgDltUlh8vXNe5jkAfweIalgb5eAaY1U8vqKjC5rHITy%qaJm9CM76s8jUgAIwEKNThvwgYXlHFwBBRMriiSkEEDDBGAvQBK0TcsOrRGxAA%vM1fRD%15HavvWACGABAEKge4OnAHTQhys879aPDSAAOg06zBtYAkQBFgG%0K%JIuuI95yIGdoB:T:tQJtHUwAz1m%X%7Wuex1:xgT94Oh:a:uWDf7%8E8j897d:m3f3X4bniH48yi:uavf54T8gYHHHoOP8TWk:xF%ztL3WF8f2%dGBlh8kwFmssCrD7jP3dpAMIh7%wb0%0Ya8M:h4x4O%wGx0Ov7d:qrC3EjJ1IQrECE0nM:LXsqE:ahUMiWTHiehYLUHaTuIHUHqTtI3UHqDgdJJkjdQeoOUncIJ%fk7Lw6OXtPndbhP8iZZ8AnDlLIg11FwdySDxQD%vWL11kczAWmCmY000vq8hRxdVKTWFK5wMSSuqYBCZA3tqzyx1ZU:uiKKgBGVlThMFE0RIAAQAZWVCljJEB5n0OcqMDrClLRS1RpUALosG%nAHTgr%6F6zpiJYCZAOj1pgDqnVpAQ7emKwwd6pmYxp0GAKIOsXYv5Ec1sQCNASjwb1hM8G9uJ8ydfXps0AGjw08LB::k8L:t9fyxM2%W7CXf8TfB1nT3TVDv4%A:OAihPyAABkAAuJhJAGbALwXiTF%fH3daAKYI4v18hakBrh54kwEPkXhScL:P%IO8FQ3Oz5vXPR55lQZXUuxCsNoQzoO0ZCQT9qNQkLqD1B1e4LpDVOoOUneQuoPUHaTuIHUHqTtI3eEZZELOpzr8n5ybT%LUM:B9xUFQGpxzOO8QfA0lAUwUzCyqi9OL6hJIgElgWV1JaCaWVS4wvqyujRF5o0T%CFEwTBQNEcWDBAmAVVXaT5MAZf0rqqwvAIT:PpIAOBXQS3UAc2KAkQDVLAG8KQAO:Zr6Xh32NfXIOtLQQ8AEQIND1KEBw78O%WYaoBOmAdYtsQCNlg39fAOvLk1B2vX:eFs2AoHfu9uPYd8EfisAOPC3m77:prPZf8vX86ft%ib8mzv%TvBPEgA01u%7848i4AldB53XBh:vIge8KYGkSYHAa%Z3JoVud9eAE9z7mOBd%3gf0cdSIRlHUpi:D:7WFH9jKuIZCoN9JRSyJROk7iB1B6k7SN1B6g5Sd5C6g9QdpO4gdQepO6QVCjknZu%qT%fu%fgsJfM%fog42G3i4Oz1IIuEKwlgqmBmASXAhekldXFqCUXAJRABCeLKBJE7vqSujRF5o5qRJRYAK6pwiCgaXFHFziQATgP0O:T5KcNqAE8E9AUFAEmASI%ZACDw7n%c9gHUxXXw15griIAGTbSHaOjxHke7dXhn7BRAJxFjGuHKIX%3oG9kQFMIzQY3%HcYOOSbcX9%rxWh98yiv7bOTRr3D1n25xv5h7DljtCbkfleZxy:z9yFNwGdQrw:8D8J8DiUfsNukwP9HmYaIDRw8x6Cfgafxx:akB939hQEdxUMmN8x6BcWgyAzkHQSYxdS7UXof:RMQmFvZcI%FApSd5C6wwtcd4hK3eG5rTtUS91B6g5Sd5C6g9QdXvi6Q86x2Tvq%NzdlJzQwT%MT0PIRBp8li1pMLugzmrOzSyq89OaqUV1QXNxUpNYVJeAiUV1RXN1nMgdW1K5IABgGmAkeRqgcIgAGVAUkAEl:cuICf:ljF0UaI4OhJ0AvbQQEJcCMjQF4A::QIOLkQAujggwEiDGFQBCh3qXTmDT0hSgGdmwtITQivAdfhfn7r%ZAHDH::HufyfRbtn2L:zzbca:743%99y3o:FxZ5N:MECbcDyogz4y9BgrAYNDT4jBJ:7H5jOGFHJgYDBcBPQxrhhICts4UfDQ:9w3acDSwfldg%6:QT8ecv7GoUHnbw8wsMvfn2r6IYz%51ooSN1B6g5Sd5DTHaTuIHUHqTtI3UHqDlJ3kLpDmEzIOTp3RxF3kziWguMZ8mNLA1xgOLOgzk4vqHNTC%o8MLmgLiSISxNL6jIwvqSuACAAWAJc40kAIF%Hf6BgiMBaAFcCigcIMxFQxmAFwJ4UsIZ7AczJAJ4ASDUBsBEuAXo3VTS%pWLxTaKXaOzRV2SDQAmgg343sIk0OTTDVb:f1LWJNIfQAnT6ae1iOj2SJgB8gd8b:W:tDIZ:HQy6KPgbko:4ux9YjEcBLu7cSXfvmuNdcg7MNkDbsP:UezzsvG6fP7UMwXXYPA:IAnsXnh8HpwdSSoNHvr0E9m8ccgP:UwR%:9AwMYzXr53H8P6TXRnMlMH07KlQyJJMkLqD1B2k7iB1B6k7SN1B6g5Sd5C6g9QdpO7w:cg5PHdbHZ67k8SRFBwNJb04%FGkAewvmJlXp6fn1ZmpeXVWc25yAbmQWFQXJhbVRc2lceLKGHF1dBElQK4O:9dAAgwT%ZoCrgQU8hRAkVsJsMsBV%xiwIo%77jAqj46JrAKxv8BnwBYD4T:TaSBiTrE4lsqCjKg15MAMZYAjQGaHJqD%EL:FtISoDWJZAnQ2hEOjftv%TDL:tpDgr8J:93u0r%QO:92KV:wzv%AE:oHg8HYhGe6Yui3eIE7yOCwJwOGIJzb73VC:KA3ORAmAbwwTXhiwvl7zN85:MSG:RG%Do:ox8jX%jFj3tuFoUxIIxOG9lom7EOhkC2ZcGCFgtQdpO4gdQepO0jdQeoOz9l0gtQdDuh0QoHUHfZCKOQcmrutgnwS4HBKMhMHP5Y0ODF7T302M69OTc%r01ML6gzAAuBcYkGdn1hQF4DxBXURGFtQl8YW1eXRRXVFc3VkUeVqrgHDS74pAKCQ9wKUDq7Y5YBwTGD5AN:9Zyr7:TUA3xLAuBP8%3To1zTgdUNfN:BxlIk5NDKx3i3VGKDJYIP:lqUlQHO3vqagtTtF%Ne0dZlQT53%UAEQvOPf6Wz8N%G:m:6HHv:nH8M:BQo6997Zpq9Dj%nQ9:c5R:31e:14E6xNSMcgPBQSekcoVFO4:lo:9xhOwvss:BziBu2hJz4JgL:bCb3mOQX9J5Zh32MT8Dnsj36NjI5%o:k6JSAE0jGcCdmSCftRKEjdQeoOL3Dd4aAKBak7SN3hRa47RKTuIHUHqTtI3eFfeToh56Prt5Th4yBzt1SYIPh4FtDv6StxJyWfZMBhhyO7ctfHsdl76tOZe%rk9Lw6NQUSYF6dmSTOJjQT8%qc5vw4sKAujLEEGHUlwBJyzU4BLKt8FAC8HFBTPOQsCOz3qgA4CWBFwBpWAQAzAWCOA0QBoMN%fT:R0K8Dv48tFWMaDX064BviOsgH6f3:2zuXnYSBKAz79LpWEy%PYeLCaEHCpYRLadWFYaUhsDLGFBdKMalzLjM9Ayg0GiPJWXxphQTX33:OP%MTIKmjskDQNE%g4VOFJwcA1e8wco%r:h4iCKgVvf%a6P3XhfxD57:ZKNb%7bV6i5N:6Myj%BuZ6qL8vxXSb6fqPSGwKPAku5GUengfMFaa%e9IEvnvJM2ZCxicJPdmHDy8r5fqSEz2BwQKfzzP4xJQSLAJ2Vr%XaDwW2GC1h207qB1B607aN1B6w5ad9C6g9YdtO6gdYeNAoWd3eFDDuyt5HEFRv6HI94MGJVik40AnPzfr2afgasLD3D6T:J:iAHAmLgb50fA7Tg:vqEQ4CSZ5KdAPBEhAAcBEW8CcADgDgPsFocB4g0BHQICABcCwEGA4ZMDzwFoFZy1nykAMNJ:jvL:IuTfCH%HcfKfIpeCK0vbCD4Q%lTCFAn4WQmnjqqkZWimHjYA%JK6hQMAQ3DtX:1HGwKLAcAUocn:Kx32h5AYtLy1:%XJv536y8k:rueLqT9N1Y209jOerAuRRZmf%wEAfBZnKOCWWLyDRFsBxt:0ZJ4:H2Ruit:nlX1i5uF9Z6f99n8m8zxJPkoTlwwOfhYo:GGYoHUHrTto3WELwwStO2zjdsKF1h207qB1B73dQesOWncwfAJg0bk5yYQx2gAAAABJRU5ErkJggg"},{ name : "R_reactor_png", data : "s1351:iVBORw0KGgoAAAANSUhEUgAAACAAAACgCAIAAADiqPl7AAAAB3RJTUUH3QgZCw0nY%TSQgAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAADUElEQVR4nO1bbU7sMBALD4mLc969A0gVwTue76Q8CTLqn5bGnniSxrMSY5w4UY73l9fPqzPy8e:tuhhxFd2BLiNOLHHxm51k8%hIU%OYNJ8jfeixMgkeeT1BylV0lGgWM5xTB318CR3WI0bHZC8awbcTHaGbuIjO0M3tHhI4s2lyI%KlhrrL%tIhRDJ9dZdk59HTJysdE6REKEVp665%UHG8xbSHY%ee%AkalUP9HK1%RZiDX7hlpXESt3OcOHHCjuY%d0631V7BP5aXegX:WN7QKyRP0BqHsKfhyzUCRA9HdtAdH9dZfNwQhOiFrBECfarQpwPN6fuutu8tVIlwQh1QiwBVsux7ed%qFkgUxpIu1SsghOpNOeVar2DNQOXo9AoWwTZjallPXEI%R63DmbelLJcmut%Aslz40b7FVOO375ZeYbjH:dg4LYdjZ6lu6dpOnDhRj44dtm6X2gU28Q50IYTVQLc6bdkSNN4OcsQbsmb060mmXQgSZwKhe6ddYGfnOMkmun8JxEK7kEG3qpqaQV6cQcXIolsE:M5MvCkRP8dWR%ThAH7fiPFimXKFfcutTAVf9aciHqrNiDWnbxSVBj9BS17IX5pYkjC8VNQPRiNijuw6aQd:8vB2Q7tQSpMzuItpxk7vbWHtKZXPceLEr44Nv0Ay4iq6dQwkT%D41zqVVfzIgkPEURoQONMS:mVo7YKpmG:2RbLz4QDduOeRBKogSGChZ1J8ylQ0MKrHesBv8zg2Rh%ay%O2SRScNdAJxFJBXLxQk%xphdCqXLxChKWICXhCEyJEiWmEOJx%A:pplKgYe1PHbKdUEoI4W5%tccpy%%tHqKHqKTUJJIN8xSZgmlgfP9SNxsnFjY1zK2iaaWYWe1xMfzByZJysn5NEYA5Vt1JV5ctir:lJbVg:qaT%b5x24cTfi1:RK6TSDO0C9wrOa2X0kTMs%vzQhiyiP7hXsE5E7hVC9ZUUGV0YpOpBphAw%qj8z0FwnjNBcqlMxOA17jKyrvaZI0uQx63xY2F9I1wObAKE7vyQ1Ys3B29jq%HxR5n2kv%sSqRq66xvc4631Dm55K9wCm7%ySqU:9HOZBNzbAhEZI79JWGOpG5lDgfuJ5zz:lL94fgAm:hx5pqupAIAAAAASUVORK5CYII"},{ name : "R_Verdana_ttf", data : "s207179:AAEAAAAVAQAABABQRFNJR:76urAAAkd8AAAXfEdERUYAJgO8AAJGkAAAAB5HUE9TBzcOPAACRrAAAAA4R1NVQuQk6CYAAkboAAAAlExUU0ir7CQ6AAARFAAAA7tPUy8yc9191wAAAdgAAABgVkRNWHTxfG0AABTQAAAF4GNtYXB9Fk5KAAB0WAAAB3ZjdnQgViFmLQAAhJwAAAHyZnBnbXpF7iQAAHvQAAAFv2dhc3AAFwAJAAJGgAAAABBnbHlmAJd80gAAjgAAAYteaGRteCZpKpUAABqwAABZqGhlYWTedGuOAAABXAAAADZoaGVhEVANswAAAZQAAAAkaG10eNGZYKUAAAI4AAAO3GxvY2E1N5h5AACGkAAAB3BtYXhwBjEChAAAAbgAAAAgbmFtZfLfT:IAAhlgAAAM%3Bvc3SHcIRWAAImXAAAICFwcmVw3nvd0QAAgZAAAAMJAAEAAAAFB65LxdqVXw889QAbCAAAAAAArWxT%AAAAADIkcTE%5r9kw2oCJMAAQAJAAIAAAAAAAAAAQAACAv%UgAADjj7mv1xDagAAQAAAAAAAAAAAAAAAAAAA7cAAQAAA7cAdgAHAGgABQACABAAQABVAAACBQFjAAMAAQACBIsCvAAFAAgFmgUzAAABJQWaBTMAAAOgANMDBQgAAgsIBAMFBAQCBKEABv9AACBbAAAAEAAAAABNUyAgACAAIP:9Bh7%WQDKCAsBriAAAZ8AAAAABGMF0QAAACAAAQgAAQAAAAAAArwAAAK8AAADOADLBLMApwbwAJUFsACGCi0AjwbmAHkCqACnBFkAwQRZAKYFsADMBvAA2gLkACMD1wBuAuQAtwWEAHsFsABwBbABCgWwALkFsACMBbAAVAWwAKQFsACGBbAAnAWwAGMFsABoAzgA4QM4AE0G8ADMBvAA%QbwAOwE7wCTB7YAkQY2ABgGGAC%BcoAZwakAL4FdwC%BTQAvgZ9AGcGswC%BF4AewRxACoGKwC%BRkAvgeVAL4GxgC%Bs0AZwXdAL4GzQBnBkIAvgWvAG0FdAApBn8AqQYcABgJBwBCBhwAGAXlAAkFiQBaBFkA%AWEAL0EWQDGBvAAxQWw::AFsAF2BVgAVgWYAKoEtQBYBZgAWgVQAFgDYQArBZgAWgWzAKoCvACgAzn:xgVeAKoCvACqCHcAqgWzAKoFfgBYBZgAqgWYAFoD%gCqBL8AXwOlACsFswChBTMAHgfWAC0FWgAaBTUAHgTGAFQFsACYBFkBmwWwAMkG8ACdBjYAGAY2ABgFygBnBXcAvgbGAL4GzQBnBn8AqQVYAFYFWABWBVgAVgVYAFYFWABWBVgAVgS1AFgFUABYBVAAWAVQAFgFUABYArwAaAK8::oCvP:1Arz:7gWzAKoFfgBYBX4AWAV%AFgFfgBYBX4AWAWzAKEFswChBbMAoQWzAKEFsADyBLMAtAWwALwFsACaBbAAlwWwAN0FsACHBbQAqge2AHoHtgB6B7YAjgWwAeUFsAE3BvAA%gjAAAQGzQBlCHgAsQbwANoG8ADaBvAA2gWwADQFxQCqBbAAfAWWAGQG9AApBawAKwROAB4EyACYBMgAfwbAADUIJQBWBX4AWATvAHADOADLBvAA2AbwAIYFsABEBvAAngZyACIGzADZBswBJghkALcGNgAYBjYAGAbNAGcJFQBnCIsAWAWwAJkIAACZBLMACwSzAHsCqAAgAqgAewbwANoG8ABrBTUAHgXlAAkDhP%zBbAAAARZANkEWQEmBdIAKwXYACsFsADyAuQAtwKoADUEswA1DjgAjwY2ABgFdwC%BjYAGAV3AL4FdwC%BF4AewReAHEEXgB7BF4AewbNAGcGzQBnBs0AZwZ:AKkGfwCpBn8AqQK8AKoFsAEaBbABHQWwAUcFsAFWBbACHwWwAZoFsAGyBbABTgWwAcAFsAEbBSMAGALQABgFrwBtBL8AXwWJAFoExgBUBFkBmwakABwFbwBXBeUACQU1AB4F4QC%BZgAqgbwAOwG8AEIBMgBFwTIAOYEyADgCXQAswl0AMcJdACxBbAAZQZ9AGcFmABaBF4AewWvAG0EvwBfBcoAZwS1AFgFygBnBLUAWAWYAFoFsP:wAuQAtwY2ABgFWABWBjYAGAVYAFYGpAC%BwoAWgakABwFdwC%BVAAWAV3AL4FUABYBRkAvgK8AHkFGQC%BC4AqgUZAL4EdACqBsYAvgWzAKoGxgC%BbMAqgbNAGcFfgBYBkIAvgP6AKoGQgC%A:oAagWvAG0EvwBfBXQAKQOlACsFdAApA7kAKwZ:AKkFswChBn8AqQWzAKEFiQBaBMYAVAWJAFoExgBUBRkAvgbNAGcHngBdBZgAWgV%AFgErgBbBc4AWARIAAoHUQBYBbD:8AWgAMsEyACeCr8AvQgPAHsF0gCgBpr:5QLSAHUE7gB1Ci0AkQNQAA8E1QCSAtYAgwLWAIME1QCxAtYAcAY2ABgFWABWBcoAZwS1AFgFygBnBLUAWAV3AL4FUABYBXcAvgVQAFgFdwC%BVAAWAZ9AGcFmABaBn0AZwWYAFoGfQBnBZgAWgazAL4FswCqBrMAOQWzACkEXgB2Arz:9gReAHsCvAAtBF4AewK8ABwEXgB7ArwAoARxACoDOf:GBisAvgVeAKoFXgCqBRkAvgK8ADQGxgC%BbMAqgbGAL4FswCqBs0AZwV%AFgGzQBnBX4AWAZCAL4D%gBnBa8AbQS:AF8FdAApA6UAKwZ:AKkFswChBn8AqQWzAKEGfwCpBbMAoQZ:AKkFswChCQcAQgfWAC0F5QAJBTUAHgLCAKoGNgAYBVgAVgjAAAQIJQBWBs0AZQV%AFgDOADhCQcAQgfWAC0JBwBCB9YALQkHAEIH1gAtBeUACQU1AB4CqAAgBbD:8AWwAJoF:ACBCXQAswl0ALEJdACnCXQAtAKoAKAFsAGyBbACGQWwAMcGYf:rBsj:6wgC:%sFpP:rB7::6weE:%sHw::rArz:nQY2ABgGGAC%BnIAIgV3AL4FiQBaBrMAvgReAHsGKwC%BjYAGAeVAL4GxgC%BbgAiQbNAGcGswC%Bd0AvgV4AGgFdAApBeUACQYcABgHzwCLBsAANQReAHsF5QAJBZgAWgSuAFsFswCqArwAoQWmAJ8FuwCqBTUAHgRlAFsFswCqBZoAdwK8AKoFXgCqBTUAFgXFAKoFMwAeBKUAVgV%AFgFmACqBH8AWAWmAJ8FFQAFB4gAngcnAFsCvP:uBaYAnwV%AFgFpgCfBycAWwV3AL4HSQApBRkAvgXvAGcFrwBtBF4AewReAHsEcQAqCccAEgm3AL4HfQApBisAvgXlAAoGswC%BjYAGAYQAL4GGAC%BRkAvga7ACoFdwC%COwAEgWnAE4GxAC%BsQAvgYrAL4GwwASB5UAvgazAL4GzQBnBrMAvgXdAL4FygBnBXQAKQXlAAoHngBdBhwAGAbMAL4GTACDCU8AvglrAL4HQgApCIAAvgYQAL4F7wBcCZAAvgZcABEFWABWBZMAcwVrAKoEQACqBYgAJQVQAFgH:gAtBLQAQQXDAKoFwwCqBV4AqgWtABkGpACqBcIAqgV%AFgFwgCqBZgAqgTJAFgESAAKBTUAHge6AFoFWgAaBdUAqgV5AHQIBQCqCBoAqgXyAAoHfwCqBTIAqgTZAFcH9ACqBXQAIgVQAFgFswApBEAAqgTYAFgEvwBfArwAoAK8:%4DOf:GCBkAGQgoAKoFswApBV4AqgU1AB4FwgCqBRkAvgRAAKoIAADMCloAvgXCAKoEyACmBMgA2QTIANkEyACyBMgBDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdPAGcFfgBYBsUAqQXvAKEAAPzsAAD8tQAA%:4AAPxtBbABGgWw:7AFsAEaBbABGgWwAVYFsAFWBbABVgWwAR0FsAIuBbABWwWwAV0FsAFdBbABXQWwAV0FsAEpBjYAGAVYAFYGNgAYBVgAVgY2ABgFWABWBjb:8wVY:2oGNgAYBVgAVgY2ABgFWABWBjYAGAVYAFYGNgAYBVgAVgY2ABgFWABWBjYAGAVYAFYGNgAYBVgAVgY2ABgFWABWBXcAvgVQAFgFdwC%BVAAWAV3AL4FUABYBXcAvgVQAFgFd:%wBVD:mwV3AL4FUABYBXcAvgVQAFgFdwC%BVAAWAReAHsCvACqBF4AewK8AKAGcQBnBVAAVAUZABwEQAApCOwAEgf%AC0GKwC%BV4AqgYrAL4FXgCqBrMAvgXCAKoF5QAJBTUAHgXlAAkFNQAeBhwAGAVaABoGTACDBXkAdAZMAL4FswCqBnEAZwVQAFQGzQBnBX4AWAWzAKoFswAABbAAmQSzAEAE7v%cBbAAaQXKAGcFygBnCHcAqgbGACgKuAC%CQcAJAdRAJoGKwAmBXQAKQkAABQFXgAKBd0AFAbwAPkGGAC%BMgAqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGzQBnBX4AWAbNAGcFfgBYBs0AZwV%AFgGzQA:BX7:lwbNAGcFfgBYBs0AZwV%AFgGzQBnBX4AWAdPAGcFfgBYB08AZwV%AFgHTwBnBX4AWAdPAGcFfgBYB08AZwV%AFgGfwCpBbMAoQZ:AKkFswChBsUAqQXvAKEGxQCpBe8AoQbFAKkF7wChBsUAqQXvAKEGxQCpBe8AoQXlAAkFNQAeBeUACQU1AB4F5QAJBTUAHgXlAAkFNQAeBZgAWgAA%6UFsACpCrkAXwWr:%kFqwJ%BasCfgWr:%kFqwJ%Bav:6QQAACUGfQBnBjYAGAWvAA4FygBnBa8AbQS:AF8FdAApA6UAKwK8AJgC6QCNBsQAvgXDAKoAAP1xAAD9gQrRAGcJ0gBYCF4AZwcvAF8FFgCWBvgAZwV%AFgIHgAPBk4ADwgeAA8GTgAPBs0AZwWYAFoJBwBCB9YALQX7AKsAAPuaBqcAZwXsAB4JxgBCCHoALQQPAMgEDwDIAoIAngKCAJ4CggCeBRYBEAM4AOEEQgDAAqgApwKoAKcGswKpBcICQQFeAAAHbAB5BbAANgAAA7cBARQUKikyAQEpERgYATIBDgEBAQEBAQEBAQEBASoqMjIyAQ8LAScPHw4uKREBDgExEQ0ODQ4UIg4lJCUNARgBGDIBAQwGEAYMCwYpFAwnFCwpCQYGDAEKKR8QDA4gARgBMgsLJx8RDQ4MDAwMDAwQDAwMDBQUFBQpCQkJCQkpKSkpDikBAQEOAQEPDw8BATIBDQEyMjIBEQERDREBLy8LEQkBKjIyATIRCwsRCwsNMRcBASkpAQEyMg4NAQ8YGBERDgEBKQ4LHwsfHxERERENAQ0ODg4UAQEBAQEBAQEBAQgcFAEBIBgPDA0OEgYyMi8vLwEBAQEuBhEUAScQJxAGAQELDAsMDw0PHwwfDAEUARcBLREpESkNCQ4MDgwUASIKIh4OKQ4pASABIAENEQYJMCARKgEMLxEOFAsBLAEkGQEBGQELDCcQJxAfDB8MHwwuBi4GLgYpKSkpERQRFBEUERQBDA4nJwEUESkRKQ0JDQkODBQBIgoOKQ4pDikOKSQQDQ4BCwwBEQ0JKiQQJBAkEA0OEQEBAwEBAQEBAQEBCxgPKBERExQLAREfASkRDgsxEQENKQ4yIg0lFg0RDQYwKRQUDQ8BKQEUJw4RHwwJBgoUMREQFBQJFBAfHQEPFBERAQoRDxAMKQsgAQEqHygBEREQKzEpDSkOJyIMESUOAREgHBEgDxgODAEMETAMEBEREScTEREJEQYPEQ4tDBkBECgmEQ4PECIMKREPARQUDA8PKScOEQsRAQERLy8vLy8BAQEBAQEeCQ0bAQEBAQEBAQEBAQEBAQEBAQEBAQsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDB8MHwwfDB8MHwwfDB8MHwwRFBEUEwEBASgBAScBJykBDQ8BASUBAQEBKRMBAQkpKQEpLAEnJywBGiQqASIBJwEyAS8BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBDQkNCQ0JDQkNCQ0JDQkeCR4JHgkeCR4JDikOKQ0bDRsNGw0bDRsNDg0ODQ4NDgYBAQEBAQEBAQEBLgEUJxQBIgoUARERAQEBAQEBAQEJIwEjAQ0GJBADAQQBAQEBAQEBAQEqIAERKQEnCAEAAAAAAQABAQEBAQAMAPgI:wAIAAj::gAJAAr::gAKAAr::gALAAv::gAMAAz::gANAA3::QAOAA7::QAPAA:::QAQAA:::QARABH::QASABL::AATABP::AAUABX::AAVABX::AAWABb::AAXABf:%wAYABj:%wAZABr:%wAaABv:%wAbABv:%wAcABz:%gAdAB3:%gAeAB7:%gAfACD:%gAgACD:%gAhACH:%QAiACL:%QAjACP:%QAkACX:%QAlACb:%QAmACb:%AAnACf:%AAoACj:%AApACn:%AAqACv:%AArACv:9wAsACz:9wAtAC3:9wAuAC7:9wAvADD:9wAwADH:9gAxADH:9gAyADL:9gAzADP:9gA0ADT:9gA1ADb:9QA2ADb:9QA3ADf:9QA4ADj:9QA5ADn:9QA6ADv:9AA7ADz:9AA8AD3:9AA9AD3:9AA%AD7:9AA:AD::8wBAAEH:8wBBAEH:8wBCAEL:8wBDAEP:8wBEAET:8gBFAEb:8gBGAEf:8gBHAEf:8gBIAEj:8gBJAEn:8QBKAEr:8QBLAEz:8QBMAE3:8QBNAE3:8QBOAE7:8ABPAE::8ABQAFH:8ABRAFL:8ABSAFL:7wBTAFP:7wBUAFT:7wBVAFX:7wBWAFf:7wBXAFj:7gBYAFj:7gBZAFn:7gBaAFr:7gBbAFz:7gBcAF3:7ABdAF3:7ABeAF7:7ABfAF::7ABgAGD:7ABhAGL:6wBiAGL:6wBjAGP:6wBkAGT:6wBlAGX:6wBmAGf:6gBnAGj:6gBoAGj:6gBpAGn:6gBqAGr:6gBrAGv:6QBsAG3:6QBtAG3:6QBuAG7:6QBvAG::6QBwAHD:6ABxAHL:6AByAHL:6ABzAHP:6AB0AHT:6AB1AHX:5wB2AHb:5wB3AHj:5wB4AHj:5wB5AHn:5wB6AHr:5gB7AHv:5gB8AH3:5gB9AH3:5gB%AH7:5gB:AH::5QCAAID:5QCBAIL:5QCCAIP:5QCDAIP:5QCEAIT:5ACFAIX:5ACGAIb:5ACHAIj:5ACIAIj:5ACJAIn:4wCKAIr:4wCLAIv:4wCMAI3:4wCNAI7:4wCOAI7:4gCPAI::4gCQAJD:4gCRAJH:4gCSAJP:4gCTAJP:4QCUAJT:4QCVAJX:4QCWAJb:4QCXAJj:4QCYAJn:4ACZAJn:4ACaAJv:4ACbAJv:4ACcAJz:4ACdAJ7:3wCeAJ7:3wCfAKD:3wCgAKD:3wChAKH:3wCiAKP:3gCjAKT:3gCkAKT:3gClAKb:3gCmAKb:3gCnAKf:3QCoAKn:3QCpAKn:3QCqAKv:3QCrAKv:3QCsAKz:3ACtAK7:3ACuAK::3ACvALD:3ACwALD:3ACxALH:2wCyALL:2wCzALT:2wC0ALX:2wC1ALb:2wC2ALb:2gC3ALf:2gC4ALn:2gC5ALr:2gC6ALv:2gC7ALv:2QC8ALz:2QC9AL3:2QC%AL::2QC:AMD:2QDAAMH:2ADBAMH:2ADCAML:2ADDAMT:2ADEAMX:2ADFAMX:1wDGAMb:1wDHAMf:1wDIAMj:1wDJAMr:1wDKAMv:1gDLAMz:1gDMAMz:1gDNAM3:1gDOAM::1gDPAND:1QDQAND:1QDRANH:1QDSANL:1QDTANP:1QDUANX:1ADVANX:1ADWANf:1ADXANf:1ADYANj:1ADZANr:0wDaANv:0wDbANz:0wDcANz:0wDdAN3:0wDeAN7:0gDfAOD:0gDgAOD:0gDhAOL:0gDiAOL:0gDjAOP:0QDkAOX:0QDlAOb:0QDmAOf:0QDnAOf:0QDoAOj:0ADpAOn:0ADqAOv:0ADrAOv:0ADsAOz:0ADtAO3:zwDuAO7:zwDvAPD:zwDwAPH:zwDxAPL:zwDyAPL:zgDzAPP:zgD0APT:zgD1APb:zgD2APf:zgD3APf:zQD4APj:zQD5APn:zQD6APv:zQD7APz:zAD8AP3:zAD9AP7:zAD%AP7:zAD:AP::zAAAABgAAAO8CRAJAAMDBAUIBgsIAwUFBggDBAMGBgYGBgYGBgYGBgQECAgIBgkIBwYHBgYHBwUFBwYIBwgHCAcGBgcHCwcHBgUGBQgGBgYGBQYGBQYGAwQGAwkGBgYGBAUFBgYJBgYFBgUGCAgIBgYHCAcGBgYGBgYFBgYGBgMDAwMGBgYGBgYGBgYGBgUGBgYGBgYJCQkGBggKCAoICAgGBgYGCQgFBQUICQYGBAgIBggICAgJCAgICgoGCQYGAwMICAYHBAYFBQgIBgMDBRAIBggGBgUFBQUICAgHBwcDBgYGBgYGBgYGBgYEBgUGBQUHBgcGBwYICAUFBQsLCwYHBgUGBQYFBgUGBgMIBggGBwgHBgYGBgYDBgUGBgcGBwYIBgcEBwQGBQYFBgUHBgcGBgUGBQYICQYGBQYFCQYGBQ0KBwgDBgsEBQMDBQMIBgYFBgUGBgYGBgYHBgcGBwYHBgcGBQMFAwUDBQMFBAcGBgYDBwYHBggGCAYHBAYFBgUHBgcGBwYHBgsJBwYDCAYKCQgGBAsJCwkLCQcGAwYGBwsLCwsDBgYGCAgJBwoJCgMIBwgGBgcFBwgIBwYIBwcGBgcHCQgFBwYFBgMGBgcFBgYDBgYGBgUGBgYGBgkJAwYGBgkGCQYGBgUFBQwLCQcHBwgHBwYJBgsGBwcHCAgHCAcHBgYHCQcIBwsMCQoHBgsIBgYGBQcGCwUGBgYHBwYGBgYFBQYJBgcGCQoHCQYFCQcGBgUFBQMDBAoJBgYGBgYFCQwGBQUFBQUAAAAAAAAIBgcGAAAAAAYGBgYGBgYGBgYGBgYGBggGCAYIBggGCAYIBggGCAYIBggGCAYIBgYGBgYGBgYGBgYGBgYGBgYFAwUDBwYGBQoJBwYHBggGBwcHBgcGBwYHBgcGCAYGBgYFBgYHBwoIDAoIBwYKBgcIBwUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAYIBggGCAYIBggGCAYIBggGCAYIBggGBwYHBgcGBwYHBgcGBwYHBgcGBwYHBgYABgwGBgYGBgYFBwcGBwYFBgUDAwcGAAAMCwkIBggGCQcJBwgGCwkHAAcHCwoFBQMDAwYEBQMDCAYCCAYAAAAKEgoAAwMEBgkHDQkDBQUHCQQFBAcHBwcHBwcHBwcHBAQJCQkGCgkIBwkHBwgIBgYIBgkICQgJCAcGCAgMCAgHBQcFCQcHBwcGBwcFBwcDBAcDCwcHBwcFBgUHBwkHBwYHBQcJCQkHBwgJCAcHBwcHBwYHBwcHAwMDAwcHBwcHBwcHBwcHBgcHBwcHBwoKCgcHCQsJCwkJCQcHBwcJCAUGBgkLBwYECQkHCQkJCQwJCQkLCwcKBgYDAwkJBwgEBwUFCAgHBAMGEgkHCQcHBgYGBgkJCQgICAMHBwcHBwcHBwcHBgQHBgcGBQkHCAcHBwkJBgYGDAwMBwgHBgcGBwYHBgcHBAkHCQcJCQkHBwcHBgMGBQYGCAcIBwkHCAUIBQcGBgUGBQgHCAcHBgcGBgkKBwcGBwUJBwcGDQsHCQQHDQQGBAQGBAkHBwYHBgcHBwcHBwgHCAcIBwgHCAcGAwYDBgMGAwYECAcHBgMIBwgHCQcJBwgFBwYGBQgHCAcIBwgHDAkIBwMJBwsLCQcEDAkMCQwJCAcDBwcHDAwMDAMHBwcJCAkHCgkKAwkICQcHCAYICQkIBwkICAcGCAgKCQYIBwYHAwcHBwUHBwMHBwcHBgcHBgcGCQkDBwcHCQcJBgcHBgYGDAwJCAgICQgIBgkHDAcICAgICQgJCAgHBggKCAkIDA0JCwgHDQgHBwcFBwcLBgYGBwgIBwcHBwYFBwkHCAcJCggKBwYKBwcHBQYGAwMECwsHBwcHBwUKDQcGBgYGBgAAAAAAAAkHCAcAAAAABwcHBwcHBwcHBwcHBwcHCQcJBwkHCQcJBwkHCQcJBwkHCQcJBwkHBwcHBwcHBwcHBwcHBwcHBwYDBgMIBwYFCwoIBwgHCAcIBwcHCAcIBwgHCAcJBwcHBwYGBwcHCwgNCwkIBwsHBwkIBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJBwkHCQcJBwkHCQcJBwkHCQcJBwkHCQcIBwgHCAcIBwgHCAcIBwgHCAcIBwgHBwAHDQcHBwcHBwUICAcHBwYGBQMECAYAAA4MCgkGCQcKCAoICQcMCQcACAcMCwUFAwMDBgQFAwMIBwIJBwAAAAsUCwAEBAQHCQgOCgQGBggJBAYECAgICAgICAgICAgEBAkJCQcLCQgICQgICQkGBggHCgkJCAkICAgJCAwICAgGCAYKCAgICAcICAUICAQFCAQMCAgICAYHBQgICggIBwgGCAkJCQgICQkJCAgICAgIBwgICAgEBAQECAgICAgICAgICAgGCAgIBwgICwsLCAgJDAkMCQkJCAgICQoIBgcHCQwIBwQJCQgJCQkJDAkJCQwMCAsHBwQECQkICAUIBgYICAgEBAYUCQgJCAgGBgYGCQkJCQkJBAgICAgICAgICAgHBAgHCAcGCQgICAgICQoHBwcNDQ0ICQgGCAcIBwgHCAgECQgJCAkKCQgICAgHBAcGBwYJCAkICQgIBggGCAcIBQgFCQgJCAgHCAcHCQoICAcIBgoIBwcPCwgJBAcOBQcEBAcECQgIBwgHCAgICAgICQgJCAkICQgJCAYEBgQGBAYEBgUICAgHBAkICQgJCAkICAYIBwgFCQgJCAkICQgMCggIBAkIDAwJCAQMCgwKDAoICAQICAgNDQ0NBAgICAkJCgcKCQoECQgJCAgJBggJCgkICQkICAgICAoJBggIBwgECAgIBggIBAgICAgHCAgGCAgKCgQICAgKCAoHCAgGBgYNDQoICQkJCAgHCggMCAkJCAkKCQkJCAgICQoICgkMDQoMCAgNCAgICAYJCAwHBwcICAkICAgIBwYICggJCAoLCQsIBwsICAgGBwcEBAUMDAgICAgHBgsOCAcHBwcHAAAAAAAACQgJCAAAAAAICAgICAgICAgICAgICAgJCAkICQgJCAkICQgJCAkICQgJCAkICQgICAgICAgICAgICAgICAgIBgQGBAkHBwYMCwgHCAcJCAgICAcIBwkICQgJBwkICAgIBgcICAgMCQ8MCggIDAcICggHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkICQgJCAkICQgJCAkICQgJCAkICQgJCAkICQgJCAkICQgJCAkICAgICAgICAgIAAgPCAgICAgIBgkJCAgIBwgFBAQJBwAADw4MCgcKCAsJCwkJCAwKCAAJCA0MBgYDAwMHBAYEBAkIAgoIAAAADBUMAAQEBQcKCQ8KBAcHCQoEBgQICQkJCQkJCQkJCQUFCgoKBwwJCQkKCAgKCgYHCQgLCgsJCwkJCAoJDgkKCAYIBgoJCQgIBwgIBQgIBAUIBAwICAgIBgcFCAgMCAgHCQYJCgkJCQgKCwoICAgICAgHCAgICAQEBAQICAgICAgICAgICQcJCQkJCQkMDAwJCQoNCw0KCgoJCAkJCwkGBwcKDAgHBQoKCQoKCgoMCQkLDg0JDAcHBAQKCggKBQkHBwkJCQQEBxUJCAkICAYGBgYLCgsKCgoECQkJCQkJCQkJCQgECQcIBwYKCAoICQgKCgcHBw4ODgkKCAYJBwkHCQcICQQJCAkICgoKCAgICAgECAYIBgoICggLCAkGCQYJBwgFCAYKCAoICAcIBwgLDAgIBwkGDAkIBxAMCQoEBw8FBwQEBwQJCAkHCQcICAgICAgKCAoICggKCAoIBgQGBAYEBgQHBQkICAgECggKCAsICwgJBgkHCAUKCAoICggKCA4MCggECQgNDAsIBQ4MDgwODAoIBAkJCQ4ODg4ECQkJCgoMCA0MDQQJCQkICAoGCQkLCgkLCgkICAoJDAsGCggHCAQICAgHCAgECAgICAcICAcICAwMBAgICAwICwgJCQYGBw8PCwkJCgkJCQgKCA4ICgoJCgsKCwoJCQgJDAkLCQ4PCw0JCQ8JCAgIBgkIDAcICAgJCQgICAgIBggMCAkIDA0JCwgHDAgICAYHBwQEBQwMCQgICAgGDBAIBwcHBwcAAAAAAAAMCAsJAAAAAAkJCQkJCQkJCQkJCQkJCQkICQgJCAkICQgJCAkICQgJCAkICQgJCAgICAgICAgICAgICAgICAgGBAYECggIBg0MCQgJCAoJCggJCAkICQgJCAoICggJCQkHBwkJCQ0KEA4LCQgOCAkKCQcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwgLCAsICwgLCAsICwgMCAwIDAgMCAwICggKCAsJCwkLCQsJCwkKCAoICggKCAgACRAJCQkJCQkGCgkJCQkHCAUEBAoIAAAQDw0LCAoIDAkMCQsIDgwJAAoJDw0GBgQEBAgFBgQECgkCCwkAAAANGA0ABAQGBwsJEQsEBwcJCwUHBQkJCQkJCQkJCQkJBQULCwsIDQoKCgoJCQoLBgcJCAwKCwkLCQkICgoOCgoJBgkGCgkJCQkICQkFCQkEBQgEDgkJCQkGCAYJCQwJCQgJCAkLCgoKCQoLCgkJCQkJCQgJCQkJBAQEBAkJCQkJCQkJCQkKBwkJCQoJCQwMDQkJCw4LDgsLCwkJCQoLCgcICAsOCQgGCwsJCwoLCw8KCgsPDgkNCAgEBAsLCQoGCgcHCQkKBQQIGAoJCgkJBgYGBgsLCwoKCgQJCQkJCQkJCQkJCAQJCAkICAoJCgkJCQsLCAgIDw8PCQoJBgkICggKCAkJBQoJCgkKCwoJCQkJCAQIBwgGCgkKCQsJCQYJBgkICAYIBgoJCgkJCAkICAsMCQkICQgMCQkIEQwJCwUIEQUIBQUIBQoJCggKCAkJCQkJCQoJCgkKCQsJCwkGBAYEBgQGBAcFCQgICAQKCQoJCwkLCQkGCQgIBgoJCgkKCQoJDgwKCQQKCQ4OCwkGDgwODA4MCgkFCQkKDw8PDwQJCQkKCw0IDQwNBAoKCgkJCwYJCgwKCQsLCQkICgoMCwYKCQgJBAkJCAcJCQQICQkJCAkJBwkJDAwECQkJDAkMCAoJBgYHEBAMCQoLCgoKCAsJDgkKCgkLDAsLCwkKCAoMCgwKDg8MDQoKDwkJCQkHCQkMCAgICAkKCQkJCQkICQwJCgkMDQoMCQkNCQkJBwkIBAQFDg4JCAkJCAcNEQkICAgICAAAAAAAAAwJCwoAAAAACQkJCQkJCQkJCQkJCQkJCgkKCQoJCgkKCQoJCgkKCQoJCgkKCQoJCQkJCQkJCQkJCQkJCQkJCQYEBgQKCQgHDw0KCQoJCwkKCAoICgkKCQoJCgkLCQkJCQgICQkJDgsRDwwKCQ8JCgsKCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALCQsJCwkLCQsJCwkLCQwJDAkMCQwJDAkKCQoJCwoLCgsKCwoLCgoJCgkKCQoJCQAJEQkJCQkJCQcLCgkJCQgIBgQFCggAABIQDgwICwkNCg0KCwkODAoACwoQDgcHBAQECAUHBAQLCQIMCQAAAA4ZDgAFBQYIDAoSDAUICAoMBQcFCgoKCgoKCgoKCgoGBgwMDAkOCwsLCwoJCwsICAsJDQsMCgwLCgoLCxALCgoICggMCgoJCggKCQYKCgQGCQQOCgoKCgcIBgoJDgkJCAoICgwLCwsKCwwLCQkJCQkJCAkJCQkEBAQECgoKCgoKCgoKCgoICgoKCgoKDg4OCgoMDwwPDAwMCgoKCgwLCAgIDA4KCQYMDAoMCwwMDwsLDBAPCg4JCQUFDAwJCgYLCAgKCgoFBQgZCwoLCgoICAgIDAwMCwsLBAoKCgoKCgoKCgoJBAoICggICwoKCQoKDAwICAgREREKCwoICggLCAsICgoFCwkLCQsMCwoJCgkJBAkHCQgLCgsKDAoLBwsHCggKBgoHCwoLCgoICggJDAwKCggKCAwKCggTDgoMBQkSBggFBQgFCwkLCAsICgkKCQoJCwoLCgsKCwoLCggECAQIBAgECAYLCQkJBAsKCwoMCgwKCwcKCAoGCwoLCgsKCwoQDgoJBQsJDw4MCgYQDhAOEA4KCQYKCgoRERERBQoKCgsMDQoODQ4ECwsLCgoLCAsLDQsKDAsKCgoKCw4MCAoKCAoECgoKCAoKBAkJCgkICgoICgkMDAQKCgoMCgwJCwoICAgREQwLCgsLCwsJDAoQCgsLCwwNCwwLCgsKCgwLDAsQEQ0PCwsRCwkKCQcKCQ4JCQkJCgsKCgoKCQgJDgkLCg4PCg0JCQ4KCQoHCQgEBAYPDwoJCQoJBw4SCggICAgIAAAAAAAADQoMCwAAAAAKCgoKCgoKCgoKCgoKCgoLCQsJCwkLCQsJCwkLCQsJCwkLCQsJCwkKCQoJCgkKCQoJCgkKCQoJCAQIBAsJCQcQDgsJCwkMCgoKCgkLCQsKCwoLCQwKCgoKCAkKCgoPDBMQDQsKEAkKDAsIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwKDAoMCgwKDAoMCgwKDQoNCg0KDQoNCgsKCwoMCwwLDAsMCwwLCgkKCQoJCgkKAAoTCgoKCgoKBwsLCgoKCAoGBAULCQAAExEPDQkMCg4LDgsMChAOCgAMChEPBwcEBAQJBgcFBQwKAg0KAAAADxsPAAUFBgkNCxMNBQgICw0FBwUKCwsLCwsLCwsLCwYGDQ0NCQ4MCwsMCgoMDAgIDAoODA0LDQwLCgwLEAsLCggKCA0LCwoKCAoKBgoKBAYKBBAKCgoKBwkHCgoOCgoJCwgLDQwMCwoMDQwKCgoKCgoICgoKCgQEBAQKCgoKCgoKCgoKCwkLCwsLCwsODg4LCw0QDRANDQ0LCgsLDQsICQkNDwoJBg0NCw0MDQ0PDAwNERALDwkJBQUNDQoLBwsICAsLCwUFCRsMCgwKCggICAgNDQ0MDAwECwsLCwsLCwsLCwoECwkKCQgMCgsKCwoNDQkJCRISEgsMCggLCQsICwgKCwUMCgwKDA0MCgoKCgoECggKCAwKDAoNCgwHDAcLCQoHCgcMCgwKCgkKCQoNDgoKCQsIDgsLCRQPCwwFCRMGCQUFCQUMCgsICwgKCgoKCgoMCgwKDAoMCgwKCAQIBAgECAQIBgwKCgoEDAoMCg0KDQoMBwsJCgcMCgwKDAoMChAOCwoFDAoQDw0KBhAOEA4QDgsKBgsLCxISEhIFCwsLDA0PCw8ODwQMCwwKCgwIDAwODAsNDAsKCgsLDg0ICwoJCgQKCwoICgsECgoKCgkKCggKCg4OBAoKCg4KDgoLCwgICBISDgsLDAwLCwoNChILDAwLDQ4MDQwLCwoLDgsNDBARDhALCxIMCgoKBwoKDgkJCQoLCwoKCgoJCAoOCgsKDg8MDgoJDgoKCgcJCQQEBg8PCwoKCgoIDxMKCQkJCQkAAAAAAAAOCg0LAAAAAAsLCwsLCwsLCwsLCwsLCwwKDAoMCgwKDAoMCgwKDAoMCgwKDAoMCgoKCgoKCgoKCgoKCgoKCgoIBAgEDAoKCBEPDAoMCg0LCwoLCgsKDAoMCgwKDQoLCwsJCQsLCxANFBEODAoRCgsNCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQoNCg0KDQoNCg0KDQoOCg4KDgoOCg4KDAoMCg0LDQsNCw0LDQsLCgsKCwoLCgoACxQLCwsLCwsIDAwLCwsJCgcEBQwJAAAUEhANCg0KDwwPDA0KEA4LAAwLEhAICAUFBQoGCAUFDQsDDgsAAAAQHBAABQUGCQ0LFA4GCQkLDQYIBgsLCwsLCwsLCwsLBgYNDQ0KDwwMDA0LCg0NCAkMCg8NDgwODQsMDQwSDAwLCQsJDQsLCwsJCwsHCwsEBgoEEAsLCwsICQcLChALCgoLCAsNDAwMCw0ODQsLCwsLCwkLCwsLBAQEBAsLCwsLCwsLCwsLCQsLCwsLCw8PDwsLDRIOEQ0NDQsLCwwODAkJCQ4RCwoGDQ0LDQwODhIMDA4SEgsQCQkFBQ0NCgwHCwkJCwsLBgUJHAwLDAsLCAgICA4ODg0NDQQLCwsLCwsLCwsLCgYLCQsKCA0LDAoMCw0OCgoKExMTCw0LCAsJDAkMCQsLBgwLDAsNDg0LCwsLCgQKCAoJDQsNCw4LDQgNCAsJDAcMBw0LDQsLCgsKCg4OCwsJDAgOCwsKFhALDQYKFAcKBgYKBgwLDAkMCQsLCwsLCw0LDQsNCw0LDQsIBAgECAQIBAkGDAoKCgQNCw0LDgsOCw0ICwkMBw0LDQsNCw0LEhAMCgYMCxIRDgsGEhASEBIQDAoGCwsMExMTEwULCwsNDhALEA4QBAwMDAsLDQgMDA8NCw4NDAsMDAwODggMCwkLBAsLCgkLCwQKCgsKCQsLCQsKDg4ECwsLDgsPCgwLCAgJFBQPDAwNDAwMCg0LEgsNDQwODw0ODQwMDAwODA4NEhMPEAwMEw0LCwsICwsQCgoKCgsMCwsLCwoIChALDAsQEQwOCgoQCwsLCAoJBAQGEBALCgoLCggQFQsKCgoKCgAAAAAAAA8LDgwAAAAACwsLCwsLCwsLCwsLCwsLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLCwsLCwsLCwsLCwsLCwsLCwgECAQNCwoJEhAMCwwLDQwMCgwKDAsNCw0LDQsOCwsLCwkKCwwMEQ4VEg8MCxILDA4MCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCw4LDgsOCw4LDgsOCw8LDwsPCw8LDwsNCw0LDgwODA4MDgwODAwKDAoMCgwKCwALFQsLCwsLCwgNDAsMCwkMBwQGDQoAABYUEQ4KDgsQDRANDgsSEAwADQwUEQgIBQUFCgYJBQYNDAMPCwAAABEeEQAGBgcKDwwWDwYJCQwPBggGDAwMDAwMDAwMDAwHBw8PDwoQDQ0MDgwLDg4JCQ0LEA4ODA4NDAwODRMNDQwJDAkPDAwLDAoMCwcMDAYHCwYSDAwMDAgKCAwLEQsLCgwJDA8NDQwMDg4OCwsLCwsLCgsLCwsGBgYGDAwMDAwMDAwMDAwKDAwMDAwMEBAQDAwPEw4SDw8PDAwMDA8MCQoKDhEMCgcPDwwPDg4OEg0NDhMSDBEKCgYGDw8LDQcMCQkMDAwGBgoeDQwNDAwJCQkJDg4ODg4OBgwMDAwMDAwMDAwLBgwKDAoJDgwNCw0MDw8KCgoUFBQMDgwJDAoMCgwKDAwGDQsNCw4PDgwLDAsLBgsJCwkODA4MDgwNCA0IDAoMCAwIDgwODAwKDAoLDhAMDAoMCRAMDAoXEQwOBgoWBwoGBgoGDQsMCgwKDAsMCwwLDgwODA4MDgwODAkGCQYJBgkGCQcNCwsLBg4MDgwODA4MDQgMCgwIDgwODA4MDgwTEQ0LBg0LExEODAcTERMRExENCwYMDA0UFBQUBgwMDA4OEQwQEBEGDQ0ODAwOCQ0NEA4MDg4MDAwNDREOCQ0MCgwGDAwLCQwMBgsLDAsKDAwKDAsQDwYMDAwPDA8LDQwJCQkVFRANDQ4NDQ0LDgwTDA4ODQ4QDg4ODAwMDRANDg0UFA8SDQ0UDgsMDAkMCxEKDAwLDA4MDAwMCgkLEAsMDBERDRALChEMCwwJCgoGBgcREQwLCwwLCREWDAoKCgoKAAAAAAAADwwODQAAAAAMDAwMDAwMDAwMDAwMDAwNCw0LDQsNCw0LDQsNCw0LDQsNCw0LDQsMCwwLDAsMCwwLDAsMCwwLCQYJBg4LCwkTEQ0LDQsODA0LDQsNCw0MDQwOCw4MDAwMCgoMDAwSDhcTEA0MEwsMDw0KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4MDgwODA4MDgwODA4MDwwPDA8MDwwPDA4MDgwODQ4NDg0ODQ4NDQsNCw0LDQsMAAwXDAwMDAwMCQ4NDAwMCgwIBgYODAAAFxUSDwsPDBENEQ0ODBMRDQAODRUSCQkFBQULBwkGBg4MAxAMAAAAEiASAAYGBwsQDRcQBgoKDRAHCQcMDQ0NDQ0NDQ0NDQcHEBAQCxEODg0PDAwPDwoKDgsRDw8NDw4NDA8OFA4NDAoMChANDQwNCw0MCA0NBgcMBhMNDA0NCQsIDQwSDAwLDQoNEA4ODQwPDw8MDAwMDAwLDAwMDAYGBgYNDAwMDAwNDQ0NDQsNDQ0NDQ0RERENDRAUDxMQEBANDQ0NEA0KCwsPEgwLBxAQDRAPDw8TDg4PFBMNEgsLBgYQEAwNCA0KCg0NDQcGCyAODA4MDAoKCgoPDw8PDw8GDQ0NDQ0NDQ0NDQwGDQsMCwoPDA0MDQ0QEAsLCxUVFQ0PDQoNCw0LDQsNDQcODA4MDxAPDAwMDAsGCwkLCg8NDw0PDA4JDgkNCwwIDAgPDQ8NDAsMCwsPEQ0MCw0KEA0NCxgSDQ8GCxcHCwYGCwYODA0LDQsMDAwMDAwPDQ8NDw0PDQ8NCgYKBgoGCgYKBw4MDAsGDw0PDQ8MDwwOCQ0LDAgPDQ8NDw0PDRQSDQwGDgwUEg8MBxQSFBIUEg0MBg0NDRUVFRUGDQ0NDg8SDREREgYODg8MDA8KDg4RDw0PDw0MDA0OEg8KDQ0LDQYNDQwKDQ0GDAwNDAoMDQoNCxEQBg0MDRAMEAsNDQoKChYWEQ4NDw4ODgsPDBQNDw8ODxEPDw8NDQwNEQ4PDhUVEBMODRYODA0MCgwMEgsNDQwMDw0MDQ0LCgwRDA0MEhINEQwLEgwMDQoLCwYGBxISDQwMDQsKEhcNCwsLCwsAAAAAAAAQDA8OAAAAAA0NDQ0NDQ0NDQ0NDQ0NDQ4MDgwODA4MDgwODA4MDgwODA4MDgwODAwMDAwMDAwMDAwMDAwMDAwKBgoGDwwLChQSDgwODA8NDQwNDA4MDgwODQ8MDwwNDQ0LCw0NDRMPGBQQDgwUDA0QDgsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwwPDA8MDwwPDA8MDwwQDBAMEAwQDBAMDw0PDQ8ODw4PDg8ODw4NDA0MDQwNDA0ADRgNDQ0NDQ0JDw4NDQ0LDAgGBw8NAAAYFhMQCxAMEg4SDg8NFBINAA8NFhMJCQYGBgsHCgYGDw0DEQ0AAAATIhMABwcICxAOGBAGCgoOEAcJBw0ODg4ODg4ODg4OCAgQEBAMEg8ODhANDA8QCgsPDBIQEA4QDw4NDw8VDw4NCg0KEA4ODQ0LDQ0IDQ4HCA0HFA4NDQ0JCwkODBMNDAsOCg4QDw8ODRAQDw0NDQ0NDQsNDQ0NBwcHBw4NDQ0NDQ4ODg4OCw4ODg4ODhISEg4OEBUQFBAQEA4ODg0RDQoLCxATDQwIEBAOEA8QEBQPDxAWFA4TCwsGBhAQDA4IDgoKDg4OBwYLIg8NDw0NCgoKChAQEA8PDwcODg4ODg4ODg4ODAcOCw0LChANDgwODRAQCwsLFhYWDg8NCg4LDgsOCw0OBw8NDw0QERANDQ0NDAcMCgwLEA4QDhANDwkPCQ4LDQkNCQ8ODw4NCw0LDBASDQ0LDgoRDg0LGhMPEAcMGAgLBwcLBw8NDgsOCw0NDQ0NDQ8NDw0PDRAOEA4KBwoHCgcKBwsIDw0NDAcQDhAOEA0QDQ8JDgsNCQ8ODw4PDg8OFRMODAcPDRUTEA0IFRMVExUTDgwGDg4OFhYWFgYODg4PEBMNEhISBw8ODw0NEAoPDxIQDhAQDg0NDg8TEAoODQsOBw4ODAoODQcNDA4MCw0NCw4MEhEHDg0OEQ0RDA4OCgoLFxcSDw4QDw4ODBANFQ0QEA8QEhAQEA4ODQ4SDxAPFhYRFA4OFw8NDQ0KDQ0TCw4ODQ0QDg0ODQsKDBINDg0TEw4SDAwTDQ0OCgwLBwcIExMODQwODAoTGQ4LCwsLCwAAAAAAABENEA4AAAAADg4ODg4ODg4ODg4ODg4ODw0PDQ8NDw0PDQ8NDw0PDQ8NDw0PDQ8NDQ0NDQ0NDQ0NDQ0NDQ0NDQoHCgcPDQwKFRMPDQ8NEA4ODA4MDw0PDQ8ODw0QDQ4ODgsMDg4OFBAZFREPDRUNDhAOCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQDRANEA0QDRANEA0QDRENEQ0RDRENEQ0PDg8OEA4QDhAOEA4QDg4MDgwODA4MDQAOGQ0NDQ0NDQoPDw4ODgsNCQcHEA4AABoXFBEMEQ0TDxMPEA0VEw4AEA4XFAoKBgYGDAgKBgYQDgMSDgAAABQkFAAHBwgMEQ4ZEQcLCw4RBwoHDg4ODg4ODg4ODg4ICBEREQwTEA8OEQ4NEBELCw8NExERDxEQDg4QDxcPDw4LDgsRDg4NDgwODQgODgcIDQcVDg4ODgoMCQ4NFA0NDA4LDhEQEA4OEREQDQ0NDQ0NDA0NDQ0HBwcHDg4ODg4ODg4ODg4MDg4ODg4OExMTDg4RFhEVERERDg4ODhEOCwwMERQODAgREQ4REBERFRAQERcVDhQMDAcHERENDwkOCwsPDw4HBwwkEA4QDg4LCwsLEREREBAQBw4ODg4ODg4ODg4NBw4MDgwLEQ4PDQ8OEREMDAwYGBgOEA4LDgwODA4MDg4HEA0QDRESEQ4NDg0NBw0KDQsRDhEOEQ4QChAKDgwOCQ4JEA4QDg4MDgwNERMODgwPCxIODgwbFA8RBwwZCAwHBwwHEA0ODA4MDg0ODQ4NEA4QDhAOEQ4RDgsHCwcLBwsHCwgPDQ0NBxEOEQ4RDhEOEAoODA4JEA4QDhAOEA4XFA8NBxANFhQRDggXFBcUFxQPDQcODg8YGBgYBw4ODhARFA4TExMHEA8QDg4RCw8QExEOEREPDg4PDxQRCw8ODA4HDg4NCw4OBw0NDg0MDg4LDg0TEgcODg4SDhINDw4LCwsYGBMPDxEQDw8NEQ4WDhERDxETERERDw4ODxMPERAXGBIVDw8YEA0ODgsODRQMDg4NDhEODg4ODAsNEw0PDhQUDxMNDBQODQ4LDAwHBwgUFA4NDQ4NCxQaDgwMDAwMAAAAAAAAEg4RDgAAAAAODg4ODg4ODg4ODg4ODg4QDRANEA0QDRANEA0QDRANEA0QDRANEA0ODQ4NDg0ODQ4NDg0ODQ4NCwcLBxANDQsWFA8NDw0RDg8NDw0PDRAOEA4QDREODg4ODAwODg4VERsXEg8OFw0PEQ8MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEOEQ4RDhEOEQ4RDhEOEg4SDhIOEg4SDhAOEA4RDhEOEQ4RDhEODw0PDQ8NDw0OAA4bDg4ODg4OChAQDg4ODA4JBwcRDgAAGxkVEg0RDhQQFBARDhcUDwARDxgVCgoGBgYNCAsHBxEOAxMOAAAAFSUVAAcHCAwSDxsSBwsLDxIICggODw8PDw8PDw8PDwgIEhISDRQQEA8RDg4REgsMEA0UEhIPEhAPDhEQGBAPDwsOCxIPDw4PDA8OCQ8PBwgOBxYPDg8PCgwKDw4VDg4NDwsPEhAQDw4SEhEODg4ODg4MDg4ODgcHBwcPDg4ODg4PDw8PDwwPDw8PDw8UFBQPDxIXEhYSEhIPDw8PEg8LDQ0SFQ4NCBISDxIREhIWEBASGBYPFQwMBwcSEg4PCQ8LCw8PDwgHDCUQDhAODgsLCwsSEhIREREHDw8PDw8PDw8PDw0HDwwPDQsRDg8ODw8SEg0NDRkZGQ8RDwsPDA8MDwwPDwgQDhAOERIRDg4ODg0HDQsNDBIPEg8SDhAKEAoPDA4KDgoRDxEPDw0PDQ0SFA8ODA8LEw8PDRwVDxEHDRsJDQcHDQcQDg8MDwwODg4ODg4RDxEPEQ8SDxIPCwcLBwsHCwcMCBAODg0HEg8SDxIOEg4QCg8MDgoRDxEPEQ8RDxgVDw4HEA4XFRIOCBgVGBUYFQ8OBw8PEBkZGRkHDw8PERIVDxQUFAcQEBEODxILEBAUEg8SEg8ODg8QFRILDw8MDwcPDw4MDw8HDg4PDgwODwwPDRQTBw8ODxMOEw0QDwsLDBoaFBAPEhAQEA0SDhcPEhIQEhQSEhIPDw4PFBASERgZExYQEBkRDg8OCw8OFQwPDw4PEQ8ODw8NCw4UDg8OFRUQFA4NFQ4ODwsNDAcHCBUVDw4ODw0LFRsPDQ0NDQ0AAAAAAAATDhIPAAAAAA8PDw8PDw8PDw8PDw8PDxAOEA4QDhAOEA4QDhAOEA4QDhAOEA4QDg4ODg4ODg4ODg4ODg4ODg4LBwsHEQ4NCxcVEA4QDhIPDw4PDhAOEQ4RDxEOEg4PDw8MDQ8PDxYSHBgTEA4YDg8SEA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEg4SDhIOEg4SDhIOEg4TDhMOEw4TDhMOEQ8RDxIPEg8SDxIPEg8PDg8ODw4PDg8ADxwPDw8PDw8LERAPDw8MDgoHCBIPAAAcGhYTDRIOFREVERIPGBUQABEQGhYLCwcHBw0ICwcHEg8EEw8AAAAWJxYACAgJDRMQHBMHDAwQEwgLCA8QEBAQEBAQEBAQCQkTExMOFREREBIPDhISDAwRDhUTExATERAPEhEZERAPDA8MExAQDw8NDw8JDxAICQ8IFxAPDw8LDQoQDhYPDg0QDBATEREQDxMTEg8PDw8PDw0PDw8PCAgICBAPDw8PDxAQEBAQDRAQEBAQEBUVFRAQExgTFxMTExAQEA8TEAwNDRMWDw4JExMQExITExcRERMZGBAWDQ0HBxMTDhAKEAwMEBAQCAcNJxEPEQ8PDAwMDBMTExISEggQEBAQEBAQEBAQDggQDQ8NDBIPEA4QDxMTDQ0NGhoaEBIPDBANEA0QDQ8QCBEPEQ8SExIPDw8PDggODA4MExATEBMPEQsRCxANDwoPChIQEhAPDQ8NDhMVDw8NEAwUEA8NHhYQEggOHAkNCAgNCBEPEA0QDQ8PDw8PDxIPEg8SDxIQEhAMCAwIDAgMCAwJEQ8PDggTEBMQEw8TDxELEA0PChIQEhASEBIQGRYQDggRDxgWEw8JGRYZFhkWEA4HEBAQGhoaGgcQEBASExYQFRUVCBEREg8PEgwRERUTEBMSEA8PEBEVEwwQDw0QCBAQDgwQDwgPDhAODQ8PDBAOFRQIEA8QFA8UDhAQDAwMGxsVERASERERDhMPGRATExETFRITEhAQDxAVERMRGhoUFxEQGhEPDw8MDw8WDRAQDxASEA8QDw0MDhUPEA8WFhAVDg0WDw8QDA0NCAgJFhYQDw4QDgwWHBANDQ0NDQAAAAAAABUPExAAAAAAEBAQEBAQEBAQEBAQEBAQEQ8RDxEPEQ8RDxEPEQ8RDxEPEQ8RDxEPDw8PDw8PDw8PDw8PDw8PDwwIDAgSDw4MGRYRDxEPEhAQDhAOEQ8RDxEQEg8TDxAQEA0OEBAQFxMdGRQRDxkPEBMRDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATDxMPEw8TDxMPEw8TDxUPFQ8VDxUPFQ8SEBIQExATEBMQExATEBAOEA4QDhAODwAQHRAQEBAQEAsSERAQEA0PCggIExAAAB4bFxQOEw8WERYREw8ZFhAAEhAbFwsLBwcHDgkMBwcSEAQUEAAAABcpFwAICAkOFBAdFAgNDRAUCAsIEBAQEBAQEBAQEBAJCRQUFA4WEhIRExAPExMNDRIPFhMUERQSEBATEhoSERANEA0UEBAPEA4QDwoQEAgJDwgYEBAQEAsOChAPFw8PDhANEBQSEhEQExQTDw8PDw8PDg8PDw8ICAgIEBAQEBAQEBAQEBAOEBAQEBAQFhYWEBAUGRQYFBQUEBEQEBQQDA4OExcQDgkUFBAUExQUGBISFBoZEBcODggIFBQPEQoQDQ0RERAICA4pEhASEBANDQ0NFBQUExMTCBAQEBAQEBAQEBAPCBAOEA4NExARDxEQFBQODg4bGxsQExANEA4RDhEOEBAIEg8SDxMUExAPEA8PCA8MDw0TEBMQFBASCxILEA4QChALExATEBAOEA4PFBYQEA0RDBUQEA4fFxETCA4dCg4ICA4IEg8RDhEOEA8QDxAPExATEBMQExATEA0IDQgNCA0IDQkSDw8PCBMQExAUEBQQEgsQDhAKExATEBMQExAaFxEPCBIPGRcUEAkaFxoXGhcRDwgQEBEbGxsbCBAQEBIUFxAWFhYIEhITEBATDRISFhMQFBMREBAREhYTDREQDRAIEBAPDRAQCA8PEQ8NEBANEA8WFQgQEBAVEBUPERANDQ0cHBYSERMSERIPExAaEBMTEhMWExQTEREQERYSFBIbGxUYEREcEg8QEAwQDxcOEREPEBMREBEQDgwPFg8REBcXERYPDhcQDxAMDg4ICAkXFxAPDxEPDBceEQ4ODg4OAAAAAAAAFhATEQAAAAAQEBAQEBAQEBAQEBAQEBASDxIPEg8SDxIPEg8SDxIPEg8SDxIPEg8QDxAPEA8QDxAPEA8QDxAPDQgNCBMPDwwaFxIPEg8TEREPEQ8SDxIQEhATDxQQEBAQDg4QEREYEx8aFRIQGg8RFBIOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQQFBAUEBQQFBAUEBQQFhAWEBYQFhAWEBMQExATERMRExETERMREQ8RDxEPEQ8QABAfEBAQEBAQDBMSEBEQDhAKCAgTEQAAHxwYFQ8UEBcSFxIUEBoXEQATERwYDAwHBwcPCQwICBMRBBUQAAAAGCsYAAgICg4VER8VCA0NERUJDAkREREREREREREREQoKFRUVDxcTEhEUEBATFA0NEw8XFBQSFBMREBMSGxISEQ0RDRURERARDhEQChERCAoQCBkREBERDA4LERAYEBAOEQ0RFRMTERAUFBMQEBAQEBAOEBAQEAgICAgREBAQEBAREREREQ4REREREREXFxcRERUaFBkVFRURERERFRENDg4UGBAPChUVERUTFBQZExMUGxoRGA4OCAgVFRASCxENDRESEQkIDisTEBMQEA0NDQ0UFBQTExMIEREREREREREREQ8IEQ4RDg0UEBIQEhEVFQ4ODhwcHBETEQ0RDhEOEQ4REQkTEBMQFBUUEBAQEA8IDw0PDRQRFBEUEBMMEwwRDhALEAsTERMREQ4RDg8UFxEQDhENFhERDiAYERQIDx8KDwkJDwkTEBEOEQ4QEBAQEBATERMRExEUERQRDQgNCA0IDQgNChMQEA8IFBEUERQQFBATDBEOEAsTERMRExETERsYEhAIExAaGBQQChsYGxgbGBIQCBEREhwcHBwIERERExQYERcXFwgTEhMQERQNExMXFBEUFBIQEBISFxQNEhEOEQgRERANEREIEBAREA4QEQ0RDxcVCBEQERUQFg8SEQ0NDR0dFhMSFBMSEg8UEBsRFBQTFBcUFBQSERASFxIUExwcFhoSEh0TEBEQDREQGA4RERARFBEQEREODRAXEBIQGBgSFhAPGBAQEQ0PDggIChgYERAQEQ8NGB8RDg4ODg4AAAAAAAAWEBQSAAAAABERERERERERERERERERERMQExATEBMQExATEBMQExATEBMQExATEBAQEBAQEBAQEBAQEBAQEBANCA0IExAPDRsYExATEBQREhASEBIQExATERMQFBAREREODxERERkUIBsWExAbEBIVEg4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBAUEBQQFBAUEBQQFBAWEBYQFhAWEBYQExETERQSFBIUEhQSFBISEBIQEhASEBEAESAREREREREMExMREREOEAsICRQRAAAgHRkWDxUQGBMYExQRGxgSABQSHRkMDAgICA8KDQgIFBEEFhEAAAAbMBsACQkLEBcTIhcJDw8TFwoNChMTExMTExMTExMTCwsXFxcRGhUVFBYSEhYXDw8VERoXFxQXFRMSFhUeFRQTDxMPFxMTEhMQExILExMJCxIJHRMTExMNEAwTEhoSEhATDxMXFRUUEhcXFhISEhISEhASEhISCQkJCRMTExMTExMTExMTEBMTExMTExoaGhMTFx4XHRcXFxMTExMXEw8QEBcbExELFxcTFxYXFxwVFRcfHRMbEBAJCRcXEhQMEw8PFBQTCgkQMBUSFRISDw8PDxcXFxYWFgkTExMTExMTExMTEQoTEBMQDxYSFBIUExcXEBAQICAgExYTDxMQFBAUEBMTChUSFRIWGBYSEhISEQkRDhEPFxMXExcTFQ0VDRMQEgwSDRYTFhMTEBMQERcaExMQFA4ZExMQJBsUFgoRIgsQCgoQChUSFBAUEBISEhISEhYTFhMWExcTFxMPCQ8JDwkPCQ8LFRISEQkXExcTFxMXExUNExASDBYTFhMWExYTHhoUEgkVEh4bFxMLHhoeGh4aFBIJExMUICAgIAkTExMWFxsTGhkaCRUVFhITFw8VFRoXExcXFBISFBUaFw8UExATCRMTEg8TEwkSEhMSEBMTDxMRGRgJExMTGBIZERQTDw8PISEZFRQXFRQVERcSHhMXFxUXGhcXFxQUEhQaFRcVHyAZHRQUIBUSExIOExIbEBMTEhMWExMTExAOEhoSFBIbGxQZEhAbEhITDhAQCQkLGxwTEhITEQ4bIxMQEBAQEAAAAAAAABkTFxQAAAAAExMTExMTExMTExMTExMTFRIVEhUSFRIVEhUSFRIVEhUSFRIVEhUSEhISEhISEhISEhISEhISEg8JDwkWEhEOHhsVEhUSFxMUEhQSFRIVEhUTFhIXExMTExARExQUHRckHhkVEh4SFBcVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXExcTFxMXExcTFxMXExkTGRMZExkTGRMWExYTFxQXFBcUFxQXFBQSFBIUEhQSEwATJBMTExMTEw4WFRMUExASDAkKFxMAACUhHBgRGBMbFRsVFxMeGhQAFhQhHQ4OCAgIEQsOCQkXEwUZEwAAAB00HQAKCgwRGRUlGQoQEBUZCg4KFBUVFRUVFRUVFRUMDBkZGRIcFxYVGBQTGBgQEBYSGxkZFRkXFRQYFiEWFRQQFBAZFRUTFBEUEwwUFQoMEwofFRQUFA4RDRUTHBMTERUQFRkXFxUUGRkYExMTExMTERMTExMKCgoKFRQUFBQUFRUVFRURFRUVFRUVHBwcFRUZIBkfGRkZFRUVFBkVEBERGB4UEgwZGRUZFxkZHhcXGSEfFR0REQoKGRkTFQ0VEBAVFRUKChE0FxQXFBQQEBAQGRkZGBgYChUVFRUVFRUVFRUTChURFBEQGBQVExUUGRkREREiIiIVGBQQFREVERURFBUKFxMXExgaGBQTFBMSChIPEhAZFRkVGRQXDhcOFREUDRQOGBUYFRQRFBESGRwUFBEVEBsVFBEnHRUYChIlDBIKChIKFxMVERURFBMUExQTGBQYFBgUGBUYFRAKEAoQChAKEAwWExMSChkVGRUZFBkUFw4VERQNGBUYFRgVGBUhHBUTChcTIB4ZFAwhHCEcIRwVEwoVFRYiIiIiChUVFRcZHRQcGxwKFxYXFBQYEBYXGxkVGRgVFBQVFhwYEBUUERUKFBUTEBUUChMTFRMRFBQQFBIbGgoUFBQaFBoSFhUQEBAjIxsWFRgXFhYSGBQgFBkZFhkbGBkYFRUUFRwWGRciIhofFhYjFxMUFA8UEx0RFRUTFRgVFBUUERATHBMVFB0dFhsTEh0UExUPEhEKCgwdHhUTExUSDx0mFRERERERAAAAAAAAGxQZFgAAAAAVFRUVFRUVFRUVFRUVFRUXExcTFxMXExcTFxMXExcTFxMXExcTFxMUExQTFBMUExQTFBMUExQTEAoQChcTEg8gHRYTFhMYFRUTFRMWExcUFxUXExkUFRUVERIVFRUfGSchGxYUIRMVGRYRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkUGRQZFBkUGRQZFBkUGxQbFBsUGxQbFBgVGBUZFhkWGRYZFhkWFRMVExUTFRMUABUnFRUVFRUVDxgXFRUVERQNCgsZFQAAJyQeGhIZFB0XHRcZFCEcFgAYFSMfDw8JCQkSDA8KChgVBRsVAAAAIDkgAAsLDRMcFykcCxERFxwMDwwWFxcXFxcXFxcXFw0NHBwcFB8ZGBcbFhUaGxESGRQeGxsXGxkXFhoYJBgYFhEWERwXFxUWExYVDhYXCw0VCyIXFhYWEBMPFxUfFRUTFxEXHBkZFxYbGxoVFRUVFRUTFRUVFQsLCwsXFhYWFhYXFxcXFxMXFxcXFxcfHx8XFxwjGyIcHBwXFxcWHBcRExMbIRYUDRwcFxwaGxsiGRkbJCIXIBMTCwscHBUYDhcRERcXFwwLEzkZFhkWFhEREREbGxsaGhoLFxcXFxcXFxcXFxULFxMWExEbFhgVGBYcHBMTEyYmJhcaFhEXExcTFxMWFwwZFRkVGxwbFhUWFRQLFBEUEhsXGxcbFhkQGRAXExYPFg8aFxoXFhMWExQbHhYWExcRHRcXEysgFxoLFCkNEwsLEwsZFRcTFxMWFRYVFhUaFhoWGhYbFxsXEQsRCxELEQsSDRkVFRQLGxcbFxsWGxYZEBcTFg8aFxoXGhcaFyQfGBULGRUjIRsWDSQfJB8kHxgVCxcXGCYmJiYLFxcXGhsgFx8eHwsZGBoWFhsRGRkeGxcbGxcWFhgYHxsRGBYTFwsXFxUSFxYLFRUXFRMWFhIXFB4dCxcWFx0WHRQYFxEREicnHhkYGxkYGBQbFiQXGxsZGx4bGxsXFxYYHhgbGSUmHSIYGCYZFRYWERYVIBMXFxUXGxcWFxYTERUfFRcWICAYHhUTIBYVFxETEwsLDSAhFxUVFxQRICkXExMTExMAAAAAAAAdFhsYAAAAABcXFxcXFxcXFxcXFxcXFxkVGRUZFRkVGRUZFRkVGRUZFRkVGRUZFRYVFhUWFRYVFhUWFRYVFhURCxELGhUUESQgGRUZFRsXGBUYFRgVGRYZFxoVGxYXFxcTFBcXFyIbKyQdGRYkFRccGBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGxYbFhsWGxYbFhsWGxYdFh0WHRYdFh0WGhcaFxsYGxgbGBsYGxgYFRgVGBUYFRYAFysXFxcXFxcQGhkXFxcTFg8LDBsXAAArJyEdFBwWIBkgGRsWJB8YABsYJyIQEAoKChQNEQsLGxcFHhcAAAAhOyEACwsNEx0XKhwLEhIXHQwQDBcXFxcXFxcXFxcXDQ0dHR0UIBoZGBsXFRscEhIZFR8cHBgcGhcXGxklGRgXEhcSHRcXFhcTFxYOFxgLDRYLIxgXFxcQFA8YFSAWFRQXEhcdGhoYFxwcGxYWFhYWFhMWFhYWCwsLCxgXFxcXFxgYGBgXExcXFxcXGCAgIBcXHSQcIx0dHRcYFxcdFxIUFBwiFxQNHR0XHRscHCMaGhwlIxchExMLCx0dFRgPFxISGBgXDAsTOxoXGhcXEhISEhwcHBsbGwsXFxcXFxcXFxcXFQwXFBcUEhsWGBUYFx0dFBQUJycnFxsXEhcUGBMYExcXDBoWGhYbHRsXFhcWFQsVERUSHBgcGBwXGhAaEBcUFw8XDxsYGxgXFBcUFRwfFxcTGBIeFxcULCEYGwwUKg4UDAwUDBoWGBMYExcWFxYXFhsXGxcbFxwYHBgSCxILEgsSCxINGRYWFQscGBwYHBccFxoQFxQXDxsYGxgbGBsYJSAYFQsaFiQiHBcNJSAlICUgGBULFxcZJycnJwsXFxcaHCEXIB8gCxoZGxcXHBIZGh8cGBwcGBcXGBkgHBIYFxMYCxcYFRIYFwsWFRgVExcXExcVHx4LFxcXHhceFRgXEhISKCgfGRgcGhkZFRwXJRccHBkcHxwcHBgYFxgfGRwaJiceIxkYJxoWFxYSFxYhExgYFhcbGBcYFxQSFSAWGBchIRkfFRQhFxYYEhQUCwsNISIYFhUYFRIhKxgUFBQUFAAAAAAAAB4XHBgAAAAAFxcXFxcXFxcXFxcXFxcXGhYaFhoWGhYaFhoWGhYaFhoWGhYaFhoWFxYXFhcWFxYXFhcWFxYXFhILEgsbFhUSJSEZFhkWHBgYFRgVGRYaFxoYGxYcFxgYFxMUFxgYIxwsJR4ZFyUWGB0ZFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFxwXHBccFxwXHBccFx4XHhceFx4XHhcbGBsYHBgcGBwYHBgcGBgVGBUYFRgVFwAXLBcXFxcXFxEbGhcYFxQXDwsMHBgAAC0pIx4VHRchGiEaHBclIBkAGxgoIxERCgoKFQ0SCwscGAYfFwAAACVCJQANDQ8WIBovIAwUFBogDRINGhoaGhoaGhoaGhoPDyAgIBckHRwbHxkYHh8UFR0YIx8fGx8dGhkeHCocGxoUGhQgGhoZGhYaGRAaGg0PGQ0nGhkaGhIWERoYJBkYFhoUGiAdHRsZHx8eGRkZGRkZFhkZGRkNDQ0NGhkZGRkZGhoaGhoWGhoaGhoaJCQkGhogKB8nICAgGhsaGiAaFBYWHyYZFw8gIBogHh8fJx0dHyooGiUWFgwMICAYGxAaFBQbGxoNDBZCHRkdGRkUFBQUHx8fHh4eDRoaGhoaGhoaGhoYDRoWGhYUHxkbGBsaICAWFhYsLCwaHhoUGhYbFhsWGhoNHRkdGR8hHxkZGRkYDRgTGBUfGh8aHxkdEh0SGhYZERkRHhoeGhoWGhYYHyMaGRYbFCIaGhYyJRsfDRcvDxYNDRYNHRkbFhsWGRkZGRkZHhoeGh4aHxofGhQNFA0UDRQNFQ8dGRkYDR8aHxofGR8ZHRIaFhkRHhoeGh4aHhoqJBsYDR0ZKCYfGQ8qJCokKiQbGAwaGhwsLCwsDBoaGh4fJRokIyQNHRweGRofFB0dIx8aHx8bGRkbHCQfFBsaFhoNGhsYFBoaDRkYGxgVGRoVGhgjIQ0aGRohGSIYGxoUFBUtLSMdGx8dHBwYHxkpGh8fHR8jHx8fGxsZGyMcHx0rLCInHBssHRkaGRQaGSUWGxsZGh8bGRsaFhQYJBkbGSUlHCMYFiUZGRoUFhYNDQ8lJhoZGBsYFCUwGxYWFhYWAAAAAAAAIhkfGwAAAAAaGhoaGhoaGhoaGhoaGhodGR0ZHRkdGR0ZHRkdGR0ZHRkdGR0ZHRkZGRkZGRkZGRkZGRkZGRkZFA0UDR4ZGBQpJR0ZHRkfGxsYGxgcGR0ZHRoeGR8ZGhoaFhcaGxsnHzIqIh0ZKhkbIBwWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8ZHxkfGR8ZHxkfGR8ZIhkiGSIZIhkiGR4aHhofGx8bHxsfGx8bGxgbGBsYGxgaABoyGhoaGhoaEx4dGhsaFhkRDQ0fGwAAMi0nIRggGSYdJh0fGiokHAAfGy0nExMMDAwYDxQMDB8bBiIaAAAAKksqAA4OERkkHjUkDhcXHiQPFA8dHh4eHh4eHh4eHhERJCQkGighIB4jHRsiIxcXIBsoJCQfJCEeHSIgLyAfHRcdFyQeHhwdGR0cEh0eDhEcDiweHR0dFRkTHhspHBsZHhceJCEhHh0kJCIcHBwcHBwZHBwcHA4ODg4eHR0dHR0eHh4eHhkeHh4eHh4oKCgeHiQuJCwkJCQeHh4dJR4XGRkjKx0aESQkHiQiJCQsISEkMC0eKhkZDg4kJBsfEh4XFx8fHg8OGUshHSEdHRcXFxckJCQiIiIOHh4eHh4eHh4eHhsPHhkdGRcjHR8bHx0kJBkZGTIyMh4iHRceGR4ZHhkdHg8hHCEcIyUjHRwdHBsOGxYbFyQeJB4kHSEVIRUeGR0THRQiHiIeHRkdGRskKB0dGR4WJh4eGTgqHyMPGjURGQ8PGQ8hHB4ZHhkdHB0cHRwiHSIdIh0jHiMeFw4XDhcOFw4XESAcHBsOJB4kHiQdJB0hFR4ZHRMiHiIeIh4iHi8pHxsOIRwuKyQdES8pLykvKR8bDh4eHzIyMjIOHh4eISQqHiknKQ4hICIdHSMXICEoJB4kIx8dHR8gKSMXHx0ZHg4eHhsXHh0OHBseGxgdHRgeGygmDh4dHiYdJhsfHhcXFzMzJyAfIyEgIBsjHS8eJCQgJCgjJCMfHh0fKCAkITExJi0gHzIhHB0cFh0cKhkeHhweIx4dHh0ZFhspHB8dKisfJxsZKh0cHhYZGQ4OESsrHhwbHhsWKjYeGRkZGRkAAAAAAAAmHSQfAAAAAB4eHh4eHh4eHh4eHh4eHiEcIRwhHCEcIRwhHCEcIRwhHCEcIRwhHB0cHRwdHB0cHRwdHB0cHRwXDhcOIhwbFi8qIBwgHCMeHxsfGyAcIR0hHiIcJB0eHh4ZGh4eHiwkOC8mIB0vHB8kIBkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJB0kHSQdJB0kHSQdJB0mHSYdJh0mHSYdIh4iHiQfJB8kHyQfJB8fGx8bHxsfGx0AHjgeHh4eHh4VIiEeHh4ZHRMODyQeAAA5NCwmGyUdKyErISQdLykfACMfMy0VFQ0NDRsRFg4OIx4HJx4AAAAuUi4AEBATGyghOygPGRkhKBEWESAhISEhISEhISEhExMoKCgcLCQjISYfHiUnGRojHSwnJyInJCEfJSM0IyIgGSAZKCEhHyAbIB8TICEQEx8QMSEgICAXGxUhHi0fHhshGSEoJCQhHycnJR8fHx8fHxsfHx8fEBAQECEgICAgICEhISEhGyEhISEhISwsLCEhKDInMSgoKCEhISAoIRkcHCcvIBwTKCghKCUnJzAkJCc0MSEuGxsPDygoHiIUIRkZISIhEQ8bUiQfJB8fGRkZGScnJyUlJRAhISEhISEhISEhHhAhGyAbGSYfIh4iICgoHBwcNjY2ISUgGSEbIRshGyAhESQfJB8mKCYfHx8fHRAdGB0aJyEnIScgJBckFyEbHxUfFSUhJSEgGyAbHScsICAbIRkqISAcPi4hJhAcOxMcEBAcECQfIRshGx8fHx8fHyUgJSAlICchJyEZEBkQGRAZEBoTIx8fHRAnISchJyAnICQXIRsfFSUhJSElISUhNC0iHhAkHzIvJyATNC00LTQtIh4PISEiNjY2Ng8hISElJy4gLSstECQjJR8gJxkjJCwnIScnIh8fIiMtJxkiIBshECAhHhkhIBAfHiEeGyAgGiAdKykQICAgKR8qHSIhGRkaODgrIyInJCMjHScfMyEnJyMnLCcnJyIhHyIsIyckNjYqMSMiNyUfIB8YIB8uGyEhHyEmISAhIBwZHiwfIh8uLyIrHhwuHx8hGBwbEBATLy8hHx4hHRguPCEcHBwcHAAAAAAAACogJyIAAAAAISEhISEhISEhISEhISEhJB8kHyQfJB8kHyQfJB8kHyQfJB8kHyQfHx8fHx8fHx8fHx8fHx8fHxkQGRAlHx0YMy4jHyMfJyEiHiIeIx8kHyQhJR8nICEhIRscISEhMSc%NCojHzQfIigjHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnICcgJyAnICcgJyAnICogKiAqICogKiAlISUhJyInIiciJyInIiIeIh4iHiIeIAAhPiEhISEhIRclJCEhIRsfFRARJyEAAD44MCkdKCAvJC8kJyA0LSIAJiI4MRcXDg4OHRMYDw8nIQgrIQAAADJZMgARERQdKyRAKxEbGyQrEhgSIiQkJCQkJCQkJCQUFCsrKx8wJyYkKiIhKSobHCcgLyorJSsnJCIpJjgmJSMbIhsrJCQhIx0jIRUjJBEUIhE1JCIjIxkeFyQhMSEhHiQbJCsnJyQiKispISEhISEhHSEhISERERERJCIiIiIiJCQkJCQdJCQkJCQkMDAwJCQrNys1KysrJCQkIysjGx4eKjMiHxQrKyQrKCoqNCcnKzk1JDIdHRERKyshJRYkGxskJSQSER1ZJyInIiIbGxsbKysrKSkpESQkJCQkJCQkJCQgEiQeIx4bKiIlISUjKyseHh47OzskKSMbJB4kHSQdIyQSJyEnISosKiIhIiEgESAaIBwqJCokKyInGScZJB4iFyIXKSQpJCMeIx4gKzAjIh0kGy4kIx5DMiQpEh9AFR4SEh4SJyEkHSQdIiEiISIhKSMpIykjKiQqJBsRGxEbERsRHBQnIiIgESokKiQrIisiJxkkHiIXKSQpJCkkKSQ4MSUhESchNzMrIhQ4MTgxODElIREkJCU7Ozs7ESQkJCgqMiMwLzERJyYoIiMqGycnLyokKyolIiIlJjEqGyUjHSQRIyQhGyQjESIhJCEdIiMcIyAvLREjIiMtIi4gJSQbGxw9PS8nJSonJiYgKiI4IyoqJyovKisqJSQiJTAmKic6Oy01JiU8KCEjIhsjITIdJCQiIyokIiQjHhshMCEkIjIzJS8gHjIiISQbHh4RERQzMyQiISQgGzJBJB4eHh4eAAAAAAAALiIqJQAAAAAkJCQkJCQkJCQkJCQkJCQnISchJyEnISchJyEnISchJyEnISchJyEiISIhIiEiISIhIiEiISIhGxEbESghIBs4MiciJyIqJCUhJSEmISciJyQoISsiJCQkHR8kJCQ1KkM4LiciOCIlKyYeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsiKyIrIisiKyIrIisiLiIuIi4iLiIuIikkKSQqJSolKiUqJSolJSElISUhJSEjACRDIyMjIyMjGSknJCQkHiIXERIqJAAARD00LSAsIjMnMycrIzgxJQAqJT01GRkQEBAgFBsRESokCS4kAAAAAAAAAgABAAAAAAAUAAMAAQAAARoAAAEGAAABAAAAAAAAAAECAgAAAgAAAAAAAAAAAAAAAAAAAAEAAAMEBQYHCAkKCwwNDg8QERITFBUWFxgZGhscHR4fICEiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXF1eX2BhAGJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1%f4CBgoOEhYaHiImKi4yNjo%QkZKTlJWWl5iZmgCcnZ6foKGio6SlpqeoqaqrA6ytrq%wsbKztLW2t7i5uru8vb6:wMEAw8TFxsfIycrLzM3Oz9AA0dLT1NXW1wDZ2tvc3d7fAAQGXAAAAMoAgAAGAEoAfgF:AY8BkgGhAbAB:wIbAlkCxwLJAt0DAQMDAwkDIwMzA0cDfgOKA4wDoQPOBA0ETwRfBHkEfQSHBJMElwSdBKMEqQSzBL8E2QTpBR0FZAWADj8ehR6eHsse8R75IBUgIiAmIDAgNCA6IDwgPiBEIHUgeCB:ILUguCDwIQUhEyEWISAhIiEmIS4hXiICIgYiDyISIhUiGiIeIisiSCJhImUlACUCJQwlECUUJRgloSWrJcolzyXmJmosbSxzpx%njPsC:%b::f::AAAAIACgAY8BkgGgAa8B%gIYAlkCxgLJAtgDAAMDAwkDIwMzA0cDfgOEA4wDjgOjBAEEDgRRBHgEfASHBJAElgSaBKIEqASuBLgE2AToBRoFZAWADj8egB6eHqAezB7yIBIgFyAmIC8gMiA5IDwgPiBEIHQgdyB:IKAguCDwIQUhEyEWISAhIiEmIS4hWyICIgYiDyIRIhUiGSIeIisiSCJgImQlACUCJQwlECUUJRgloSWqJcolzyXmJmosbSxxpxuniPsB:%X::f:::%MAAAD6:xQApgCZ:4oBcQAxAAD%DwAA:0wAeP9B:ygAXgBL:KAAAP4XAAAAAAAA:dgAAP8b:xn:EAAA:ff99f3x:vD95wAA:cf9uf6E:T:9JPR34wvlBOO95IAAAAAAAADghQAAAADghOD54Vbgd%HH4cbgtwAA4v7is%A44CvhI%Jd32rfeeBo4Dzelt6i3osAAN6mAADedN5x3l8AAN4w3n7efd503nHebt5r257bltru23PbXd0a1zfXNFyNXCUFvgAAA7gAAQAAAMgAAAAAAAAAAAAAAAAAAAJ4AAACeAAAAAAAAAAAAAAAAAAAAnQAAAJ%AqQC%gAAAxAAAAAAAAADJgAAAAAAAAAAAAADIgAAAAAAAAAAAAAAAAAAAAAAAAAAAxwDKgMwAAADRANGAAAAAAAAAAAAAAAAAAADPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0wAAANMAAAAAAAAA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJgAAAAAAAwCjAIQAhQN8AJYA5gCGAI4AiwCdAKkApAAQAIoBAACDAJMA8ADxAI0AlwCIAQEA3ADvAJ4AqgDzAPIA9ACiAKwAyADGAK0AYgBjAJAAZADKAGUAxwDJAM4AywDMAM0A5wBmANEAzwDQAK4AZwDuAJEA1ADSANMAaADpAOsAiQBqAGkAawBtAGwAbgCgAG8AcQBwAHIAcwB1AHQAdgB3AOgAeAB6AHkAewB9AHwAtwChAH8AfgCAAIEA6gDsALkBRAFFAQIBAwEEAQUA%wD8AUYBRwFIAUkA:QD%AQYBBwEIAP8BSgFLAUwBTQFOAU8BCQEKAQsBDAFQAVEA9gD3AVIBUwFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEA%ADVATgBOQFiAWMBZAFlAWYBDQEOAWcBaAEPARABEQESAOAA4QETARQBaQFqARUBFgE6AWsBbAFtAW4BbwFwARcBGACvALABGQEaAXEBcgEbARwBHQEeAXMBdAD5APoA4gDjAR8BIAEhASIBdQF2AXcBeAF5AXoBewF8ASMBJAElASYBfQF%AX8BgAGBAYIAugEnASgBKQEqAOQA5QGDANYA3wDZANoA2wDeANcA3QGdAZ4BnwGKAaABoQGiAaQBpQGmAacBqAErAakBqgGrAawBLAGtAa4BrwGwAbEBsgGzAbQBtQG2AbcBuAEtAbkBugG7AbwBvQG%Ab8BwAHBAcIBLgHDAcQBLwEwAcUBxgHHAcgByQHKAcsBzAHNAc4COgHPAdABMQEyAdEBMwHSAdMB1AHVAdYB1wHYAdkB2gHbAdwB3QHeAd8B4AHhAeIB4wHkAeUDjwIoAikCKgIrAiwCLQIuAi8CMAIxAjICMwOQAjQCNQI2AjcCiwKMApsCnAKdAp4DmgObA5wDnQGRAZIDdAN1A3YDdwN4A3kCpQCxALICOAE0ALUAtgDDAZMAswC0AMQCpgCCAMEAhwO0AMUBOwE8AqcCqAKpAqoA9QGVAqsCrAE3Aq0CrgKvA3oAvAKwArECsgKzArQDhQOGA4cDiACZAO0AwgClAI8CtQCWAq4AAEA6VDg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBACwBsBhDWLEZBysbISEhWS0sAbAYQ1ixGgcrGyEhIVktLAGwGENYsAMlEPIhsAASGyEhIVktLAGwGENYsRsHKxshISFZLSwBsBhDWLEcBysbISEhWS0sAbAYQ1ixHQcrGyEhIVktLAGwGENYsR4HKxshISFZLSxOsAAUsEYjQ0SwAyUQsQBG5rAAE7ABFLAAEPIhsAETTbAAEi0sAbAYQ1hFZGojRWmwGUNkYGCwRiNEIxAgsEbwL7AAEhshISEhWS0sAbELCkMjQ2UKLSwAsQoLQyNDCy0sALBGI3CxAUY%AbBGI3CxAkZFOrECAAgNLSywEiuwAiVFsAIlRWqwQItgsAIlI0QhISEtLLATK7ACJUWwAiVFarj:wIxgsAIlI0QhISEtLLAAsBIrISEhLSywALATKyEhIS0sAbAGQ7AHQ2UKLSwgabBAYbAAiyCxLMCKjLgQAGJgKwxkI2RhXFiwA2FZLSyxAAMlRWhUWLADJUWwAyVFYGggsAQlI0SwBCUjRBuwAyUgRWggiiNEsAMlRWhgsAMlI0RZLSywAyUgRWggiiNEsAMlRWhgsAMlI0QtLLAJQ1iHIcAbsBJDWIdFsBErsEcjRLBHeuQbA4pFGGkgsEcjRIqKhyCwoFFYsBErsEcjRLBHeuQbIbBHeuRZWVkYLSwgikUjRWhgRC0sRWpCLSwBGC8tLCEhLSwBsAIlRbACJUVkYGqwAyVFamEgsAQlRWogiotlsAQlI0SMsAMlI0QhIS0sAUVoI0VpYbADJUVqYSCwBCVFaiCKi2WwBCUjRIywAyUjRCEhLSwBiopFZCNFZGFkQi0sAbACJUOwQFSwAiVDsABUWliwAyUgRbBAYURZsAIlQ7AAVLACJUOwQFRaWLAEJSBFsEBgRFkhISEhLSwBS1JYQ7ACJUUjYUQbISFZLSwBS1JYQ7ACJUUjYEQbISFZLSxLUlhFRBshIVktLAEgsAMlI0mwQGCwIGMgsABSWCOwAiU4I7ACJWU4AIpjOBshISEhIVkBLSxLUFhFRBshIVktLAGwBSUQIyCK9QCwAWAj7ewtLAGwBSUQIyCK9QCwAWEj7ewtLAGwBiUQ9QDt7C0sRiNGYIqKRiMgRopgimG4:4BiIyAQI4qxS0uKcEVgILAAUFiwAWG4:7qLG7BGjFmwEGBoATotLCBFsAMlRlJYPxshEVktLCBFsAMlRlBYPxshEVktLACwB0OwBkMLLSxLUliwBCWwBCVJsAQlsAQlSWEgsABUWCEgQ7AAVVhZG7BAVFggQ7AAVFhZGyBDsABUWBuwAyW4:8A4WVlZWSEhISEtLEtSWENlOBshIVktLEtSWEM4GyEhWS0sISEMZCNki7hAAGItLCGwgFFYDGQjZIu4IABiG7IAQC8rWbACYC0sIbDAUVgMZCNki7gVVWIbsgCALytZsAJgLSwMZCNki7hAAGJgIyEtLLQAAQAAABWwCCawCCawCCawCCYPEBYTRWg6sAEWLSy0AAEAAAAVsAgmsAgmsAgmsAgmDxAWE0VoZTqwARYtLLATQ1gDGwJZLSywE0NYAhsDWS0ssAorIxAgPLAXKy0ssCgrihAjINAjsBArsAVYwBs8WSAQEbAAEgEtLEtTI0tRWlggRYpgRBshIVktLEtTI0tRWlg4GyEhWS0sILADJUUjRSNhaIogRWggiiNEYEQtLLECAEKxIwGIUbFAAYhTWli5EAAAIIhUWLICAQJDYEJZsSQBiFFYuSAAAECIVFiyAgICQ2BCWbEkAYhUWLICIAJDYEIASwFLUliyAggCQ2BCWRu5QAAAgIhUWLICBAJDYEJZuUAAAIBjuAEAiFRYsgIIAkNgQlm5QAABAGO4AgCIVFiyAhACQ2BCWVlZWS0AQAlU6OckH%fmER%4:8BAZNYMEDZA2QHXkhEfzZIRH8ySER:LkhEfypIRH8mSER:BkhEfqZskH5ybJB%amyAfmZsoH5uSGx:xmBUfp5gZH5eYKh%WmCUflZgZH0CYAZiSER8P8gGUkhkfk5IrH5GSIR8AkgG4:8BAXJILEDYPvB%8L7wDL7sBALkQuQIPuAEAtQEg%H:4AhD3IPdA9wN:9QEQ9CD0AiDuUO4CL%w:7E:sAzDVcNUCs7IoH7KzER8vsz%zYLBwsHDUBeXkJB:j5CQfL%QBuP:As8IMEDa4:8BA:7QMEDbSfy4f0X8uH9B:IB:PfxEfwH8RH79:ER%Pvv%%Ag%9Af%9AbGvER9wrwEQqCCoAouJMB%KiS8fiX8zH4iEGB%HhBgfhoRJH4WEER%DhDofhH8gH2%qoKqwqvCqBEChARBcIFxAXAPzfxEfgn8YH4F:Sh%Afxgffn8uH31:Lh9Qf2B:cH8DEA8hHxYVKh8HBiEfGRgqHwQDIR8TEiofLC0PKisOKCkPJicOJCUPIiMOICEPHh8OGxwdDRgZGg0VFhcNEhMUDQ8QEQwMDQ4MCQoLDAYHCAwDBAUMAAECDBAPgA8CQAaABgJAA4ADAg8APwBPAH8ABA8ALwA:AEAdbwB:AL8AzwD:AAgbOwgfDzoIHwM5CB8AOAgfUDMBsBJLAEtUQrATAUsAS1NCsDMrS7gIAFKwMitLsAlQW1ixAQGOWbAzK7ACiLgBAFSwBIi4AgBUsBJDWltYuAEZsQEBjoUbsBJDWLEBAbgBgIWNjRuxAQG4AYCFjY1ZWSsdsGRLU1iwcB1ZsDJLU1iwkB1ZACsrKytzdHNzcysrKysrKysrKysrKysrKysrKysrKysrK7EJMitLsGRSQrHpBEUjRWhhsOkjRLHq6UUjRWhgsOojRAFzKysrKysrc3NzKysrKysrKysrc3Mrc3RzKysrKysrKytzKytzKytzc3Nzc3Nzc3Nzc3MAK3UrKytzK3QrKysrKysrKysrKysrKysrK3MrKysrAAAABhQACgAABdEAHwAABdEAHwAAAAAAAAAAAAAAAAAABGMAIwAAAAD:4QAAAAD:3QAAAAD:4QAA:mT:9QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0QIpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGPAYYBgAFUAXcBbQF1AWkBQAFjAVkBQAGDAXUBbwCuAAAAAAClAOkBIAEZAQ4BAQEjAREBBwD7ASUBHQETAQQACgERAewAAAD0AAAAAACdAAAAAAD0AToA8wLhAAAAAACLAAAAvwDUAOQA7QD%AQ4AvgC%AGcAZwCqAKEAWABYAR4BJwE5AUgA7gEOARwAAACaALEAuQC%AMgA1ADbAOYA8AEIAVoBdgGKAZQCDQJHAloBDgEYAUMBiQJNAvsEJAAHAXcCEgFnA7oB9AEGARUBJAC6AMwA2gOw:%gBoADgAy0CswB4AEwA0wE0AUADpQMqAx8C0QKlAAAAAAAfAB8AHwAfAEkAegEbAecCewOAA50D5QQsBJwEzQT1BREFLAVXBbYF7wZmBxAHaAfkCHcIsgl3CgcKKwplCqkK2AsfC5wMWwzODU0N4Q40DnEOqQ8zD20PoQ:kEJMQtREuEaQSBxJgEuwTXxQQFDoUeRTRFaAWKhaIFs8W9RcfF0MXfReTF7sYOhiKGQsZXxnLGhIajBrPGvwbQxvDG98cThyQHOEdNx2LHckeVR6mHusfOB%yIEcgpSD3IVghciHXIkoiaSMsI%cj:yQXJDYkVSRmJHwkkCSiJLMldiYjJjQmRSZWJmwmfiaQJscnCCcfJzQnRSdeJ3QnhSeaJ6snxCfaKBUoVSjjKVEqLSpZKpUrEivlLKAtES01LWQtzC5ALw8vly:WMCkwfjDtMTQxujIhMlYykTLYM1MzpDQ9NSI10jZLNnQ2mjb0N2s4ADhUOJg43jkZOTE5STlhOeU6nDq1Os47ETtUO3g7nTvWPBs8MTxNPHg9dD2bPcE%ID5:Ptk%8z8aP1tAH0AxQElAYUCBQJlAsUDJQOVA:UEYQTBBSEFgQXhBkkGuQdxCJEI9QmpCg0K6Qu5DJENZQ4hD20QsREREVURtRH5EpUUVRdNF60X8RltGskbURzBHXUe3SDBIV0iASKRI6UkDSRRJK0oISr5K10rrSwJLFkt:S5VLr0vGS99Mxk1qTYFN%U4BTmlPAE8XTy1PRE9zT7RP51AeUE1QZlB3UI5Qn1C7UNFQ6FD%URVRJ1E%UU9RpVIfUjZSq1LKUuFTA1MVUzNTTFNlU3ZTmVQRVIpU4VVlVhVWila2VzBXVFdwV8VY2FlEWV5ZxlnsWi9a5ltuW5ZbsFvXXAJcW1x3XJBcp1y9XNZc610KXSJdOV1PXWZdel2VXaZdwF3RXodfFV8rX05fqGAAYGxgwGEEYS5hiWHEYiJidmKOYuJi82MIY4hj1GQdZC5kQ2TeZTdlVWVuZYRllWWmZgxmJGY1Zndm3GbyZwNnHmc3Z01nXmfLaDZoTGheaHRohWi1aWdqQ2pZamtqg2qUaq1qw2rVautq:WsXay1rQ2tUa4JrmGwobJhsxWz3bSRtUm15bYFtn23ibgJuIG5CbmhujG6ybtVvJW8tbzVvlW%db6VvrW%1b71wGHAgcChwbXB1cJxwpHEicSpxMnE6caNyK3JHcmNydHKIcplyrHLAc0hznHQMdFF01XTddWl1ynYUdhx2vHbEdxZ3hXfFeE94tnlEeUx5Z3l4eYl5m3m7eiR6P3rieup68nsOexZ7vHwsfIN8nH1CfXt9g33jfet%Dn5gfmh:T4ADgGyBCIGtghCCGIIggiiCT4JXgl%CZ4Lkg12DZYOcg%GEF4RbhLyFJoV:hh6GpIcZhyGHroggiEWIloieiWGKD4pUisqLW4uvjAiMP4xHjG6Mdoz3jSWNLY3Fjc2OBY5PjoeOy48oj4uP35BtkOKRSJFekeyR:ZKJkpGSmZKhkqmTOJOmk66TwpRKlICUp5TOlO2VjJWzlfuWVJaLlyiXSpdKl0qXSpdKl0qXSpfYmFSYrJkSmVaZbpl3mYCZupn2mmGa0ZsYm16by5wvnIGc9J1GnZaeE56LnwOfFZ8nnzmfS59nn3mfkJ%mn8Cf1Z:nn:ygF6AzoEWgV6BpoHugjaCfoLGgw6DjoP2hD6EhoTmhUaFnoXihkKGiobqhzKHjofuiDaIfoj%iWaJuooCikqKkowCjS6N9o66kY6USpX6l6KZ8pv6nQKd:p4enj6fyqEyoqKkjqX6p2KoPqheqH6onqomq4Kstq2%riKuwq%asQaz9rXit7K6SrqSvcK%:sCmwmLF8sfqyfLKrszezsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs7GzsbOxs8Oz1bPns:m0GbQ3tFG0Y7R:tJ20sLTCtOS0:rUXtSy1QrVTtWW1d7WNtam1u7XNtd%18bYFthm2L7ZAtla2Z7Z7to22n7awtsK21Lbqtv23D7cktza3SLdet2%36LfxuIi5QrlYuWy5hrmgubq51LoRup67NLv1vGe8ebyLvJ28sLzGvOu8:b0OvTK9Vr3OvkC:Cb:Ev:jAl8EhwZXB:cIJwhXCHcIlwi3CNcKmwq:DCcNJw6DD%MQXxDbEV8R3xIDEmsSixMTE28TjxPnFD8UPxW:FrwACAQAAAAcABgAAAwAHABS3BgIEAAYCBAAvzd3NAC:N3c0xMCERIRElIREhAQAGAPqABQD7AAYA%gCABQAAAAIAywAAAm0F0QADAAcAJkAWAwMCAgfOBQDdBNID3U8FXwUCBU8JAV0vXeT95AAv:TIvPzEwAQMhAwEhESECbS7%ui4Bm:5sAZQF0fvcBCT6LwEIAAIApwPHBAwGFAADAAcANkAjBgcDAgIDAQDPDwNgA3ADAwMDBM8ABxAHbwd:BwQHLwlACQJdL13tMy9d7QA:My8SOTkxMAEDIwMjAyMDBAw84jyxPOI8BhT9swJN:bMCTQAAAgCVAAAGWAXRABsAHwDLQGNWCQEKCR4dFiAVMBVAFVAVYBVwFQYVsgwPEBMUCxQHCB8cFy8YPxhPGF8Ybxh:GAYYsgUCARoZBhl:EY8RkAQDBAAG3gQAABlAGQIZGSEgIXAhAg0RFN4RDXALAQsXGgEdBBC4:8BADAwQNxDNEx4CBQkEDLj:wEAPDBA3DM0PBw8TGAQLFAMLAC8:Ehc5L%0rFzkv7SsXOQEvXTMz5C8vXREzL10zM%QvL10xMIcQwMDAwP1dwMDAwMCHEMDAwMD9XcDAwMDAAV0BIQMhFSEDIxMhAyMTITUhEyE1IRMzAyETMwMzBSEDIQZY:sROARr%qlvxWf74WfVa:vIBSk3%2wFhVvVWAQdX9Vf::dT%9FABDQOJ:snw:p4BYv6eAWLwATfvAVn%pwFZ:qft:sQAAAMAhv6XBTwGKAAoAC8ANgDmuQAh:4RACQ8QNwt8DxA3Hrj:4ECECQ43CCAJDjcFJhQXFCglJyUvNhJCAVcXZBdlH2UuazF0H3QueTEPAAI0Kg4gG0AJDTcbIBsknBkWLSklDzMwAAMKBl8cARxvBX8FAgVQCgEKDpwKBQYlKRwZLxkvHF8ZXxwEDhkcNAQDjCAGAQYgQAoQNyAgMIsGFgAAOAkJLYsAFgEWL13tMy8RMy8SOe0zLysvXe0XOV0REjk5AC8zM%0vXS9dL10SFzntMzMvKy8ROTlDVFhAD10PUCVtD2AldCVwKX8zB11ZMTBdKysBKysBFAQHESMRJiQnETMeARcRJy4BJy4BNTQkNzUzFR4BFxEjLgEnFRceAQE1DgEVFBYBNCYnFT4BBTz%5OuucP7aUy1c73ZhXJs4OD4BEPGuXPdHLEe8a1Di1f1bQmlEAaFrNUJeAa2p8hD%lQFlATQnASQyPAkBEhYVOC4uh2OV1Bbp5wQsHf7gKTYH:hAsswEF6AU5NC80:iE6OQj4CTsAAAUAj::hCZ4F7gALAA8AGwAnADMAhEBWDwwNDcEODxQODg8JAwYJCRMGGQQlyn8DAQMDH8oJBw8GDivKcBkBGRkxyhMZIwwsDjoMNQ5DDEwOcwx8DggMDi6%FhYovgwOBhAQNRy%AAAivgAGAQYvXe0zL%0RMy8SOTntMy:tLy9dAD:tMy9d7S8:P%0zL13tXTEwhwUuK4d9xAEUBiMiJjU0NjMyFiUBIQkBFAYjIiY1NDYzMhYBNCYjIgYVFBYzMjYBNCYjIgYVFBYzMjYEGebc4%Xq3uDiAwz89P7zAwwDhubc4%Xq3uDi%VRKVFRKSlRUSgWFSlRUSkpUVEoEDPnw8:L37%:S%i8F0fv5%fDz8vfv7wFMoHBwoaFwcP5goHBwoaFwcAAAAwB5:%EHCgXwAC4AQABNARi5ACz:hEC4CQ03CiYZJiArMCtPQmMscAJzLAgPAw8sHwMfLCwnLywrQjEkPywwPkwDQxBCJE8mTyxAPEA9QD5DP0NHWQdfLFA9XUJvA2I9Yj9vQmpEfwJ:A3U%cD9:QiItJyZIPnM%Aj4%LgJBQg4OAXA%AU8pbyl:KQMpPiYnLQQANZQOQkECASkuBwAaBEuUBRMAZT5wPgIBQA8QNwFACRA3LQgpfydACxA3JycmIBQ%Oy9:IA5CQQIBIAYULrj:wEATCRA3Li5PL08BO38UFEV%AAgBCC9d7TMv7V0RMy8rEhc5L%0RORESOTIvK%0ROSsrXQAvP%0:Ehc5:REXOS9dXYcQwAXAwIcQBF3AwMAxMABdAV0rKQEnDgEjICQ1NDY3PgE3LgEnLgE1NDY3PgEzMhYXHgEVFAYHDgEHAREhFRQGBwkBNCYnLgEjIgYHDgEVFBYXPgETAQ4BFRQWFx4BMzI2Bwr%JItk8Yb%7P7FMiknZi4qTBwbHjw8PtGQeb5BPUEbJCeAbwEyAXVQRgF9:FIgFxg0EBErGhUgYE04OZf%VRQ0NCYoYi9EaX5PTv:NVX4yMUYZH0QoJl47RnsxMz8wLCp3RS5uMTRaI:7zAUJvdthH:rMEbjQ9EBAICBEONy07bjosa:zjAXsUZz9DYR8gIBsAAQCnA8cCAQYUAAMAHUARAgIDAQDPAAMQA38DAwN:BQFdL13tAD8zLzEwAQMjAwIBPOI8BhT9swJNAAEAwf5kA7MGFAAVADxALE8BSwJLBk8HXwFfB28BbwJvBm8HfwF:An8GfwcOBwABGwgPAAEAAA:ABLUWEPTtMy9dMwA:PzEwAV0BISYCERASNyEVDgEHBgIVFBIXHgEXA7P%h8C5ucABeVGTPzxLST48l1D%ZOEB3AEbARsB3OEdSbl8d:7epKv%6nx2wUcAAAEApv5kA5gGFAAVADxALEQCQANAE0QUUANQE2ACYANgE2AUcAJwA3ATcBQOEgAEGxIABAEEBAvAALYXEPbtMy9dMwA:PzEwAV0BEAIHITU%ATc2EjU0AicuASc1IRYSA5i5wP6HUJg7PklLPD%TUQF5wLkCPP7l:iThHUfAd3wBFqukASJ3fLlJHeH%JAABAMwCFgTkBhQAEQCRQHFmCGkRAggICBEYCBgRKQgpEU8CTwVJCEALQA5JEV4CXgVYCFELUQ5YEWcBbwJvBWALYA5oD3QAfQJ9BXUHeQlzC3MOehCIECEBBgYABEAEAgQP4AoBCgQKDAAAERDrDQsFBAMCDgYNsAwIBwnrAAwBDC9d9Dk5EO0XORD0OTkAPzMzL10zL10zLzMxMF0BXQEHJRMjEwUnLQE3BQMzAyUXBQTkb:7AC9UI:sZtAWP%nmwBOQfUCAE9b:6aA0Sl2v6dAVrSptHTp9UBWv6l06bQAAEA2gAABhYFLAALAC1AGQLfAQQKAdYI3wcA3wEECgG0Bt8HIA1wDQJdL%TtOTkQ5AAv5O05ORDkMTABIREhESERIREhESEGFv3r:u796wIVARICFQIQ:fACEAEMAhD98AAAAQAj:o4CagGJAAMAMUAkDwEPAhgAHwEfAikALwEvAjkAPwE:AgsC2wPZBADUAAJ:AgICL13tABD07TEwAV0JASMTAmr%mN:FAYn9BQL7AAABAG4CBgNpAyYAAwAcQBAB1wIQAGAAAgAAAi8FTwUCXS8zL10AL%0xMAEhESEDaf0FAvsCBgEgAAEAtwAAAi0BiQADABtAEQLZAQDQAAFPAV8BbwF:AQUBL13tAC:tMTApAREhAi3%igF2AYkAAAEAe:68BMcGFAADADZADwMAAQHDAgMUAgIDAgAAArj:6EAOCRA3ABgJEDcAAAACAQIvXTMvKysAPy8xMIcFLiuHfcQJASEBBMf85:7NAxYGFPioB1gAAgBw:%EFQAXvABcAIwBFQDFFAkUKSg5KFnQCdAp7DnsWCBubOhJKEgISByGbNQZFBgIGGRiJAAABAAAlHokADAEML13tETMvXe0AP13tP13tMTBdARQCBw4BIyImJyYCNTQSNz4BMzIWFxYSBRAmIyIGERAWMzI2BUBESEroqqfsSUpCREpK7KSr6EpJQv59ant7amx5eWwC6bz%119hY2RiYgEjvMIBHmNiYmVkYv7hvAEO5eX%8P736uoAAAEBCgAABOwF1QAPADVAHwWpfwYBBgYMBg4DnAEPqA4MDooDBQKoAAM:A28DAwMvXfQyEO05EOQAL:0yPzMvXe0xMCkBESERITUyNjc%ATchESEE7PweATr%xkiELDQ0BAFLATMBBAMT8xEVGVA8%y8AAAEAuQAABUoF7gAdAItAMA58DRA3AhEUESENJRE0DTQRRxFWEWIVdBUKAAIPDwuZEwcCHJoBYABgHHAAcBwEHLj:wEAWCRA3AAAcAgiJgBYBFhaMHxAQAAIBAi9dMy8Q9i9d7RI5My8rXQAv:TI:7TMvQ1RYQBsPAgsYHwIbGC8CKxg7GEoYWwVbGGsFaxh:Fw1dWTEwXQErKQE1NiQ3PgE1NCYjIgYHIxE2JDMgBBUUBgcOAQchBUr7b4YBDVF5ZoN7XMtXIEcBFYsBGAEmjZFbuCcCnfZh2k91rlVmb0w7AUsfPuvXjf6HVI0cAAABAIz:4QUjBfAAQACWQHAOfA0QNy98DRA3CwsDMhsLEjIrCy4QIi4jMjoLOg80LjQyND1JC0YyRT1RAVkLURlSPGQBagtkGWE4dgF6C3Q4Gz49HpxgHwEfMDAsmR8JNAcNDRGZCRkmijpPH18fAh8xF4kxHzo9BAwDA0IADAEML10RMy8SFzntLy9dL%0AP%0zLz8SOe0zLy9d7Tk5MTBdASsrAR4BFRQGBw4BIyIkJxEzHgEzMjY3PgE1NCYnLgErAREzMjY3PgE1NCYnLgEjIgYHIxE2JDMyFhceARUUBgcVHgEEuDE6U1ZU46K5:vdTJ1bvYzqILyUsPDExijtSVU54KiwsLiMnaiZe3GclUgEakY3URVJQmn4zcgK6KnBdabZBP0M6JAFHNEwTIBlHQ0FHDxADAQoKEhM:PS03EBIMQT0BQyE9MSkxjF58wxsOByoAAgBU::wFXwXRAAoADQByQE0pBwEGDRYNLwdKB0YNWQdUDWwHZg16B3UNCwxQDWANcA0DDQYGBwYJAQ2bTwVfBX8FAwUFAwcGA08KXwoCCgcJDASLCgEBDx8GLwYCBi9dETMvM%05OTIvXQAvPxI5L13tOTkyMTABhxDdXQTAAV1dASMRIREhEQEhETMhEQEFX8v%kf0vArkBh8v9xv5PAVf%pQFbARoDYPyWAhr95gABAKT:4QUqBdEAKwBwQE4LfA0QNwsIGwgtCC0NMwM7CDsMMxFBA0kIQRFKF1gIUyppCHkIEB4eGpsmIpomBh8GCgoOmQYZICKLH0ALETcfFIkgHwoUiQAALQAKAQovXREzL%0SOTntLyvtLwA:7TMvPxI57S:9Mi8xMF0BKwEUBgcOASMuAScRMx4BMzI2Nz4BNTQmJy4BIyIGByMRIREhFT4BMzIWFx4BBSpXU1zvmbP3Tipb0mg:kysiIy8lNpg%WqU%LAQj:UYfXyR7wUZbZgH4dMdHTEkBNyIBSTZIHSYfQEM0SxchFR8PA0j%4:MCAy8qN7UAAAIAhv:hBUgF7QAlAD0AakBLMAkzCjA4QAlDCkE4UBxUHlAjVSRkHmIxcwp0DnQQcxtyHHM3Eh0GL5wgFhYamyAGEgc7nAYZHTUWFgwpiQAAEAACAAA:NYkADAEML13tETMvXe0SOS8SOQA:7T8SOf0yLy:tEjkxMF0BFAYHDgEjIiYnJgI1NBI3NiQzMhYXESMuASMiBgc%ATMyFhceAQE%ATU0JicuASMiBgcUBhUUFhceATMyNgVIVExR1Y%G3U9bYFpmYgE52EmuGiYbgVLA1hZNq2NXlUBTZP45HyUqJSRiNCxgKAIxKRxMLCFQAftzykVKTklLVgEQvcQBMHVwfBQF:tsNIbyoLjkoLDrE:owiXVBJXRwcFRQPCi4je58qHx0eAAEAnAAABSsF0QAGAE1AMAMBAAGLAgIDQAABAAOaBQYCAQMASwJbAgIqAj8CTwJfAm8CewIGAgIEAAAIAAQBBC9dETMvEjkvXV0SOTkALz:9Ml0xMAGHEO2HwAEBIQEhESEFK:1e:lQCvP0DBI8EqftXBLQBHQADAGP:3gVNBfMAHAAuAEAAwEBVAykUKTMYPTFBGE0xVAFfClkRXxtZLF4xVDlUP2oHYwtlEWUVYxtrMnwOdBV0GXoyGAYCLzUwLEAsUyxfNWIscix:NQg1DBosBAMgnBMHO5wDGR2KFrj:wEAfGRs3FhYANQ0QL4kZLAAAEAACAABCJokQEDiKHwkBCS9d7TMv7REzL105Oe0ROTkRMy8r7QA:7T:tEhc5XUNUWEAWGzI7MksyAzI7NQQpFCk7LIQpBCksIBESOV0REjldWTEwXQEUBCEiJicuATU0Njc1LgE1NCQhIAQVFAYHFR4BATQmIyIGBw4BFRQWFx4BFz4BEzQmJy4BJw4BFRQWMzI2Nz4BBU3%r:7apexNTEmDoYJ6AUgBBwEUATmEiJyW:mN1YSRLHx0mQ0wcYUUuKB9IcCF%KytFlXggVh8kLAGgxvxEPDueW3CtQQY8tnix4s2raqY6BjvIAihMWhIRETcjO0IhDCMWNlb9fkhKMA8sECdvRWh7ExQXPgAAAgBo:%MFKgXvACUAPQBgQEM5IjwkPClKIkkkSSlaEFoSXxVfGlobXjprOnQCeQV9D3oofDoSFCA4nBcsnBcGIAcKCg6bBhkUJgkJHSaJAAA:MokdL%0RMy:tEjkvEjkAP:0yLz8SOe0v7RI5MTBdARQCBwYEIyImJxEzHgEzMjY3PgE3DgEjIiYnLgE1NAAhMhYXFhIFNCYnLgEjIgYHDgEVFBYXHgEzMjY3NDYFKmBiav7G0UqsGygeb2BOljY7TA1XlW9UmT9TYwFNAQ6L105bXP6BLykdTConRyEfJyolI184LWodAwM8u:6%bnd3EgcBJQ4gJyoth18yNSkrO8GT7wEtSUtW:vaHep0rIBwbISBoSEZfHBsWFwwLKQAAAgDhAAACVwRjAAMABwAdQA8B2QIFBtkFBwYA0E8BAQEvXe05OQAv7T:tMTABIREhESERIQJX:ooBdv6KAXYC2gGJ%50BiQAAAgBN:o4ClARjAAMABwBGQDMPBQ8GGAQfBR8GKAQvBS8GOAQ:BT8GCwHZAgUG2wfZCAbUTwRfBG8EfwQEBAQA0E8BAQEvXf0yL13tABD07T:tMTABXQEhESETASMTAlf%igF2Pf6Y38UC2gGJ:Sb9BQL7AAABAMz:%QYEBTMABgBdQDwFBAUGBMIDAhQDAwIFBgUEBsIAARQAAAEDAwAEBQEVACUAVQBYAWoBegEGAAAwAGAAcAAEAAABIAhwCAJdLzMvXV0SOTkALzMvMTCHLisIfRDEhwQuGCsIfRDEBQE1AREBAQYE%sgFOPxZA6cHAivkAiv%4f6B:oMAAgD5AQkF9wQjAAMABwAzQCAF1gYGAdYCBAUBAAAfADAAQABwAAUAAFABAQEgCXAJAl0vXTMvXRI5OQAv7TMv7TEwASERIREhESEF9:sCBP77AgT%AxcBDPzmAQwAAAEA7P:5BiQFMwAGAGFAPwMEAwIEwgUGFAUFBgMCAwQCwgEAFAEBAAUFAQUDARoBKgFXAFoBZQB1AAYAADAAYABwAAQAAFABAQEgCHAIAl0vXTMvXV0SOTkALzMvMTCHLisIfRDEhwQuGCsIfRDECQERCQERAQYk%sgDp:xZBTgCJP3VAR8BfgF%AR:91QACAJMAAAR:Be8AHAAgAIlAZwQKFAoUGC0DLQUiGD8DPwUyGE4DTgVCE0MYXwJfA18EXA1SFFQYbwNsBGQKZBRkGHAKeRNwFHUYHAkGCBpwFgEWFhLXGgQICB:OHiDSHx8Gz08JfwkCCQ:RCRcAAAEAACIAFxAXAhcvXREzL10SOe0vXe0zL%0AL:0yLz:9Mi9dERI5OTEwXQEUBgcOAQcVIRE%ATc%ATU0JiMiBgcjETYkMzIEASERIQR:OzY2l1:%oEdzPztDgXVItUsoQAEKifcBIv5::mwBlARlZZs5OVol5AFREygtKGpDZFU%MQExGzva%usBCAAAAgCR:xsHJAXuAEUAUgCHQF4PBR8FLwAvAS8CLx8vIC4hLScrKCQsIC1KQGonZkV9CXQNeiF%J3MtdE57UhYYGErIFBrGBwdQyAszMzDGFAtDNyTGQwQIF0ayGk2zDjMOGjMDPR6wAwNUKrAAPQE9L13tETMv7RIXOS8v7S:tOTkAP%0vEjk5:TIvL%0zL%0v7TMvMTBdARYSFRQCByEnDgEjIgI1NDY3PgEzMhYXNTMRMz4BNTQmJy4BIyIGBwYCFRQSFx4BMzI2NxUOASMiJCcmAjU0Ejc2JDMyBAERLgEjIgYVFBYzMjYGNXB:UDz%BhA5amSjykQ7N5xNQmYc6KokI15TVeSFf%VXWW9pV1fmgFXZVF24bbf%yXJxf4R0cQE7sbABMf6xKUYsYGhWYzROBQJw:sfCjP7fX04mLQEN5Hq3REBIMRs%:NBPuVWp:1RWVGRVV:76nKr%%ldWWh8ZwhUWfnRzAUbBugE9dnSGfPwiAfgVE6iSnpgpAAIAGAAABh4F0QAHAAoArkBSBgIJCQoIAgGBAAcACQoDBIIFBQY3BjgHSwZEB1sGVAdtBmIHfgZxBwoAAggCA5NwCgEKAAoJAQQHBgV6BgEGAwUBAgMEBgcICQoJBQoABQUCALj:30ASChA3BSEKEDcADwwBAAwfDAEFL10RM10vKytdEhc5AC8:XRIXOS9d7Tk5Q1RYQAlNAE0FfQB9BQRdWQFdhxD9wMDAhxD9wMAIwENUWLQ:CU0JAgBdWSEhAyEDIQEhCwIGHv5zZ:3YZ:59AiYBuiu3twEt:tMF0fxtAhb96gAAAwC%AAAFuAXRABUAJAAzAFpAO0sUWAJUFWkCZBVwDHANciMIExIslAAeEB4CYB6vHgIeHgcdkwgDLZMHFn4SLA8PByV9ALg1Hix:B7U0EPb9MhD07RI5LxI57QAv7T:tEjkvXXHtOTkxMF0BFAYHDgEjIREhMhYXHgEVFAYHFR4BATQmJy4BKwERMzI2Nz4BEzQmJy4BKwERMzI2Nz4BBbhXTFjTov12AkK0p1JVU3Jokqv%FCUvKn1xJDxbgCU0IF43Qi2eVlQcoow7PC0ByGyqOEI4BdEYKSuRXWylLggdtgHPJUoSEAP%xQYRF0n90kdNEw0C:o0CGRlTAAABAGf:4wVuBe4AMwCGuQAr:4SzDRA3Fbj:hLMNEDcRuP:CQFUJDDcvPgkMNwgdGB0jAyYEKQgvCS8dIyNZAlkEVwpZHFYkdQN6CQ8vEz8TbxN:EwQTExqRDAQgLTAtYC1wLQQtLSaRABMTLbg1ADVPNV81AyB9Brc0EPTtXRD2MgA:7TMvXT:tMy9dMTBdKysBKysFIiQnJgI1NBI3NiQzMhYXFhYXESMmJicmJiMiBgcGBhUUFhcWFjMyNjc2NjczEQYGBwYGA1%m:udlZW9qZWEBH6pel0BDbSksHFU2N4BJUZI%O0lPPD2WSUaJOjFUGyg4ZjhJgB1iYWEBIr6xASBnY2wVERMvFP6XGEIgICwzOzm8hoy8NjcvKiQdQhj%nBksEBUWAAIAvgAABj0F0QAOAB0APEAqWRJVG2UCag12AnkNBhaSCAMXkgcPfQoAegACALgfHx9AH1AfAxd:B7UeEPbtXRD0Xe0AL%0:7TEwXQEUAgcGBCMhESEyBBcWEgU0JicuASsBETMyNjc%AQY9vpFt:vyy:fMCHLYBCFqasf5za3Q7e3xhYYmAPWliAufQ:rdYQjQF0T04Xv7B1ZPROx0V:FwZITzJAAABAL4AAATzBdEACwBHQBoJkTAGQAZgBnAGgAawBgYGBgEFkQIDCpEBCLj:wEAPEBU3CAQIAAANBgl:AbUMEPb9MhEzLzMzLysAL%0:7RI5L13tMTAhIREhESERIREhESEE8:vLBDX9SQKF:XsCtwXR:uD%::7g:pAAAAEAvgAABOkF0QAJAEJAFAWRMAJAAmACAwICBwGRCAMHAwMAuP:AQBEJDTcAAAsvC08LAgIFfwe1ChD2:TJdETMvKzMvAC8:7RI5L13tMTABIREhESERIREhBOn9UwJ7:YX%ggQrBLH%6:7g:YQF0QABAGf:4QXjBe4AJACWuQAP:4SzDRA3C7j:4EAkCQw3IwUrBysXIxtYFlQcZgVpB3EFfQd6EnEbDCKSLyNvIwIjuP:AQDkJEDcjIwkDLw0:DW8Nfw0EDQ0UkgkEHZMDEy8jTyMCIyMABg0NIX4AACZAJgEafQUGFQYlBgMGtyUQ9l3tXREzL%0zLxESOS9dAD:tP%0zL10REjkvK13tMTBdKwErJQYEIyAAERAAITIEFxEjJiYnJiYjIgYHBgYVFAAhMjY3ESERIQXjZP62pP6E:lIBsgGEkwEKoyscbDI6m1dmpkI:SQEGAQAWNRb%1wKvVSdNAZ0BbAFbAak1T:6jFU0bIC48Pjy5eff%%gICASQBGQABAL4AAAX1BdEACwBCQCsDkTAIQAhgCHAIgAiwCAYICAUKBwMBBRIJAn8Atg0ADVANYA0DCAN:BbUMEPb9Ml0Q9v0yAD8zPzMSOS9d7TEwISERIREhESERIREhBfX%gP3J:oABgAI3AYACkP1wBdH93wIhAAEAewAAA%MF0QALADlAIgkEkwYDCgOTAQgLoQp:AwUCoQADAQMDDQwfDTANQA1wDQRdERI5L130MhD99DIAL:0yP:0yMTApAREzESMRIREjETMD4:yY9PQDaPT0AQgDwQEI:vj8PwAAAQAq:%kDxgXRABgAMkAcWQIBFZMXAwoKDpIGExcXChV:gAABAAAafwoBCi9dETMvXe0SOS8AP:0yLz:tMTBdARQGBw4BIyImJxEzHgEzMjY3PgE1ESERIQPGRkVJzphntkUkMGhRaXEYFwb%qwLVAbViqzs:RQ8OAS4SHzgyMXVbAlEBEgABAL4AAAYsBdEACwEmswACAAJDVVhAOzkCNQhNAkUIbQJlCHsCBwICAwGBAAsACAmAAgECAwoLCgABAgMEBgcICQsKBQoDBQoBAgkLCgVADQEAuP:AQBAJEDcAAA0EBgcIBAN:BbUMEPb9FzkRMy8rXRc5LwAvPxIXOQCHEMAIwAX9BMABhxD9CMAAXVlDVFhAYAQLFQspCTkJNgtdCWsCbQl5CXYLCgQCFAJQA2QCYAN0AnQLBwICAwEgCSQ3AYEACwBCCwEICSAJHTcJgAIBAgMKCwpNCwEHCAACBAUKAwUiCzMLAkAKAQoCCwoDQA0BALj:wEAMCRA3AAANCAN:BbUMARD2:TIRMy8rXRc5L11dAC8:Ehc5MTBdAIcQwAjABf0rBMABXYcQ:SsIwABdAV1ZKQEBBxEhESERASEBBiz%Kf5DWv6AAYACFAG9:boCVG3%GQXR:V4Cov1PAAEAvgAABPAF0QAFACNAFAIDBJEBAABgAHAAAwAABwR:AbUGEPbtETMvXQAv7T8xMCkBESERIQTw%84BgAKyBdH7TwAAAQC%AAAG1wXRAAwAtbkAA::AQEINEDcEQA0QNwsLGwsrCwMACQwKDwsQCRwKHwsmAywELwovCzsKOwtPCUkKeguECYoLlAmXCpsLFDYKWQp:An8FBAq4:8BAHA4SNwWADBA3AoAMEDcFAgoDCS8EPwRgBHAEBAS4:8BAGAwQNwQLAAQDBwkDBwsJBQJ:ALYOAA4BBbj:wLcJEDcFgge1DRD27StdEPbtETk5AC8:Ehc5LytdEhc5MTArKytdAV1dKyspAREBIQERIREhCQEhBtf%gv7s:vf%7P6WAb4BTwFOAb4D5f15Aof8GwXR:RUC6wABAL4AAAYIBdEACQC8QElPAkAHAo8CgAcCBgIWAgIABhAGIAZHAUkGeAcGAAItAQEGAgcIAQIEAwYDAyMGMAFAAVMBYAFwAXcGBwYBAgdACRA3B4AAtgsLuP:Atg0QNwALAQK4:8C3CRA3AoAEtQoQ9u0rXSsQ9v0rETk5XQAvPxIXOUNUWEAZKwIkBzsCNAdLAkQHWwJUB20CYgd:AnAHDF1ZMTBdQ1RYsBFLUlhACwcBAgKCBgcUBgYHhy4rh33EWVkBXQBdcXIpAQERIREhAREhBgj%jv2I:qABywIfAWAD:vwCBdH8qwNVAAIAZ::hBmYF8AALACMARUAyJwUpBykLcAFwBX8HfwsHFZIKCRoJKgkDCQQhkgUDFQMlAwMDEw99ALglPyUBG30GtyQQ9O1dEPTtAD9d7T9d7TEwXQEQACEgABEQACEgAAE%ATU0JicuASMiBgcOARUUFhceATMyNgZm:mj%mP6Z:mgBmAFnAWYBmv4DODY%MjOFSEmBNjI:PTIyhkpKhgLo:pz%XQGjAWQBZwGh:l:9IES5fYa8Ojw2NDw4xYKFuzs7ODkAAAIAvgAABYsF0QAQAB8AR0AZUxBmD3UEAxmSBwcJGJIKAwkRfToASgACALj:wEARCQw3AAAhHyFAIQIZB38JtSAQ9P0yXREzLytd7QAvP%0SOS:tMTBdARQGBw4BKwERIREhMhYXHgEFNCYnLgErAREzMjY3PgEFi0ZBWduj7:6AAniOw0taX:5zRC08cl9CbmJ:KyUhA:tkv0FYWv4bBdExMTu4ij9bEhgF:kIYJCBZAAACAGf%VwZmBfAAFwA0AGtASiktKTElM3Qrey17MXU0Bx8fG5RPIwEjHBgpCZIKLxovKi8DLwQVkgUpFSklKQMpExiATykBKSAqKTQgBCwDfTK4Nj82AQ99LLc1EPbtXRD27RIXOS8vXe0AP13tP13tEjk:Xf0yLzEwXQE%ATU0JicuASMiBgcOARUUFhceATMyNhMeATMyNjczEQ4BIyImJy4BJyQAERAAISAAERACBGk4Nj4yM4VISYE2Mj89MjKGSkqGWwRkeSlwFiY4g4d3sTs6OgX%sv6LAZgBZwFmAZrwAW9EuX2GvDo8NjQ8OMWChbs7Ozg5:t9jVhwL:vgNFDs2NZBYEwGZAVcBZwGh:l:%mf73:n8AAgC%AAAGWAXRAA4AHwB5QFIMEBoQLBA9EE0QXBBVGVAabBBmGn8QCxEQgQ8fDzMfQx9zHwMfFQiTPxFPEX8RAxERFAeTFQMPFHAfAXAPAQB9HB8cFA8PISAhQCECCBJ:FLUgEPb9Ml0RMy8SOTkv7V1dAC8zP%0SOS9d7RI5XTEwAYcQ:cABXQE0JicuASsBETMyNjc%AQEhASMRIREhMhYXHgEVFAYHBAEuOCdoRYt2XHwqKCUCV:4r:mqx:oIChIS%U1RjmY4ECThQFxAH:m8SIB9L:DYCIv3eBdEeMjKfeKXQRQABAG3:5QVmBewAMwC8uQAi:4BADg0QNwiADRA3BR4JDjcfuP:iQEYJDjcLGBsYNgE6G0UBShtRM2UJdgl1E3gXdzEMBgIAAgARGisEHQM:IQEhISWTHQQgBzAHcAcDBwcLkwMTICt9GhF9IBoAuP:AQAkJDjcAADUGtzQQ5hEzLys5Oe0v7S8AP%0zL10:7TMvXRESFzlDVFhAGQQrFCs6ETUrShFFK1oRVStrEWUrexF0KwxdWUNUWLQHKxcrAl1ZMTBdKysBKysBFAAhIiQnETMWBDMyNjc%ATU0JicuAScuATU0ACEyBBcRIyYkIyIGBw4BFRQWFx4BFx4BBWb%i:7Auf7teCp3ASeII3IkLDlTUFS7UrylAXUBJZMBH2kpWv77iDBfLCc4Wn1Sl1erowHU3P7tQTIBZV9mDA4SNjUxRxMUIxs90ZvQAQc5K:6pSGENEg89Jzs:GhEgHDjBAAABACkAAAVLBdEABwAsQBoBBJEGAwMAWwF:BVt:BAEEBAkIEAlACX8JA10REjkvXeT95AAvP:0yMTABIREhESERIQVL:i:%gP4vBSIEsftPBLEBIAABAKn:4QXWBdEAEQA4QCURBwMMkjUDRQN1AwMDExB:gBGQEQIRERNAEwEIfwAHjwefBwMHL13tXREzL13tAD9d7T8zMTABEAAhIAAZASERFBYzMjY1ESEF1v6w:rn%uf6xAYKCkpCFAYICG:7s:toBJgETA7f8X5uYkqEDoQABABgAAAYEBdEABgCDQAsAAgYCAAUCAwMCALj:30APChA3AyEKEDcAAAEAAAgDLxEzL10rKwAvPxI5OUNUWEALMgVCBVIFYAVwBQVdWTEwQ1RYQC0HBFgGAgUEBQaCAAEABQSBAwIDJwEoAkMBTAJyAX0CBiIAIgNCAEIDcwBzAwZdAV2HEP3AhxD9CMABXVkJASEBIQkBBgT94f5S:eEBkwFoAWgF0fovBdH76gQWAAEAQgAACMUF0QAMAVhAHQACBgIDBQgJCwwGAgYDAggPDnoAdQYDBiEKDzcAuP:fQA4KDzcAAA4fDkAOYA4DBi9dETMvKytdAD8:Ehc5Q1RYuQAL:%CzCRA3CLj:4LcJEDcDIAkQNysrK1kxMENUWEBqdAh0CwIDQBcdNwNUDhA3TgJBBEkITQlCCkYLXwJQBFgIXAlUCm8CYQRpCGoJZQpmC3kIfwlwCnYLiwKEBIsJhAqIC5sClASbCZQK9AH7BSANAgIEHwIQBC8CIAQ%AjEEOQg9CTIKNgsMBLj:4EAJHjI3AiAeMjcKuP:gQAkeMjcJIB4yNwS4:8BACRcdNwJAFx03Crj:1kA9FR03CSoVHTd:AgECCwyBAAEAcAQBBAgHfwYFBgYBCQUSAR0FIgEtBTMBPAVDAUwFVgFZBWIBbQVyAX0FEAFdhxD9wMBdhxD9wMBdASsrKysrKysrXV0AKytdWQkBIQkBIQEhEwEhARMIxf5v:lf%9f78:lf%bwGR5QESAX8BBfAF0fovA8r8NgXR%:8EAfv:BAEAAAEAGAAABgQF0QALANRAcAsCBAgbAhQIBA8CAAgfAhAINwpMAkMIXAJTCGYIfwJwCAx5AXUDdQV3B3oJegsGAwIBAgsACwoFBgUIBwgECRIJIgkCKQk6CQIJgAoDCgECBQYLCAcAAgcBKQc5B3gH8gcEB4IGBgEICgACBAYDBAq4:99ACQkQNwYhCRA3ALj:30AXCRA3BCEJEDcKBgUGCgsEBAAADQAEAQQvXREzLxIXOS8vKysrKwAvPxc5MTABhxD9XXGHwMAQwMDAhxD9XXGHCMAIwBAIwAjABcABXQBdXSEhAQEhAQEhAQEhAQYE:kT%v:65:lgCEP37AbsBNgE:Aan9%AHq:hYC7gLj:jAB0P0sAAEACQAABdwF0QAIAIhARTQGOwhEBksIBAIHEgdSB3UHBAcGBwiCAAEABwaBBQQFOwE8BEsBTARYBGgEcAFxBAgEAQcIBAI1BUUFAgUDAgAfCRA3Bbj:4UAXCRA3AFwBBwF:BVwABB8KAgQECgk:CgFdERI5L13k7TkQ5CsrAC8:XRIXOV0xMAGHEP3AhxD9CMAAXQFdCQERIREBIQkBBdz92:6A:dIBtAFCATcF0fxv:cACLgOj:cACQAAAAQBaAAAFPQXRAAkAXUA7MwMzB0kCQwNDBwUDBwgIgQIDFAICAw8CHwIvAiAHBAcHA5EGAwICCJEBBAkJAwQIAwIHBwsfAi8CAgIvXREzLxIXOTMvLwAv:TIvP:0yL10xMIcFLiuHfcQBXSkBEQEhESERASEFPfsdAub9PgSX:RsDDQEXA5oBIP7k:GsAAAEA%P54A5QGFAAHACVAFQXNAgAGzQEDAAAGv0ABAQEwCUAJAl0vXe0zLzMAL%0:7TEwASERIRUhESEDlP1kApz%nQFj:ngHnPD6RAABAL3%vAUJBhQAAwA2QA8BAAMDwwIBFAICAQECAAK4:%hADgkQNwAYCRA3AAAAAgECL10zLysrAD8vMTCHBS4rh33EASEBIQUJ:s385wE2:rwHWAABAMb%eANiBhQABwAhQBIEzQcAA80BA78AAAUBMAlACQJdLzMzL%0AL%0:7TEwASE1IREhNSEDYv1kAWP%nQKc:njwBbzwAAABAMUCgAYsBdEABgBJQDQaAhoFXAVSBmoBZQN:AXADfwVwBgoCAQUPAwEDQAsQNwMDBQMvAEAAAgAAcAQBBEAIcAgCXS9dMy9dAD8zLytdEjk5MTABXQEhCQEhATMGLP7A:nz%m:7CAib5AoICN:3HA1EAAAH:8P6iBcD:dQADABG2AcoCAAAFAi8RMy8AL%0xMAEhNSEFwPowBdD%otMAAQF2BQMDzAaMAAQAMbkABP:gsw0QNwO4:8C2DRA3AwMBALj:wEAJDBA3cAABAAACLzMvXSsALzMvKzEwASsBIwE1IQPM9v6gAV8FAwF1FAACAFb:4gS3BIMADwAwAGZARw8YBSwZGEkFSRxZBVkcawVpD2scdiVyKXAtDQHxHx8rFidADQ83JycjpysQDacWFjAfATCEL7oyLzIBDygfKAIoKAeEGbsxEPbtMy9dXRD2:TIyAC8:7T:9Mi8rERI5L%0xMF0BNQ4BBw4BFRQWFx4BMzI2Fw4BBw4BIyImNTQ2NzYkNzU0JiMiBgcjETYkMyAEFREhA1JJqiw2OQwYF0BENm8qHVYmNXJEoNhuZWQBKJ%YlFnKLCE5AQGBATMBEf6bASXqBhUOEUE1IywUFBMsihY%EhgXxpp7nC0tJgkGXUc:EQEPDym9yv0EAAIAqv:qBT4GFAAQAB0AOEAkRQFFHVcPZg9:BX8ZBhSWDhAJABuYAxYIEYMAvB8GFwuECLkeEPb9MjIQ9O0ALz:tPz:tMTBdARAAIyImJwchESERPgEzMhIBNCYjIgYHER4BMzI2BT7%29tejkAP:qcBaFOtcdXm:o1mgzNsMSdGMY%MAkH%9:6yKCY4BhT92kJS:s3%65aiHx39zA4KqAABAFj:4gRxBIIAJwCIQCMwAz8JOxkxG0ADRQRMCEwJTBlEG0sfWx9rH3wgDiYgDBA3FLj:1rMNEDcOuP:gQBUMEDcQQAkQNzAQARAQF5cMED8kASS4:8BAHwkQNyQkHZcAFhAAJBAkfyQDJC8pASQpYCkBGoMGuygQ9O1dETNdL10zAD:tMy8rXT:tMy9dKzEwKysrXQUiJicuATU0Njc%ATMyFhcRIy4BJy4BIyIGFRQWMzI2Nz4BNzMRDgEC85PzWlliaV5b7oBzwlQzFTsrKWJBkJufkkRtJCI0FjNVuR5GSUnelZ3kS0dCMij%zRIwFxYdt52iqB8VFCwV:s0oLwACAFr:4QTuBhQAEwAgAD5AKEoKShpxEAMgKg0QNwMgDQ83EgAYlw4QAR6WBRYRFAKEALoiG4MIuyEQ9O0Q9v0yMgA:7S8:7T8xMCsrXSkBNQ4BIyICETQ2Nz4BMzIWFxEhAREuASMiBhUUFjMyNgTu:phdomrN9lNIRMJhZYFEAWj%mCZUI46Ocn4xbnVMSAE8AQyP3U9LUyshAd77IgInEA6xnaWVJQACAFj:4gT8BIYAFQAcAG5AUyQCKwozAjwKQwJNBU0KQw5MEFoFWwpVG2kGawlgFGAXdAJ5CXQOdBQUAfEcHAwZpxIQAAgQCFMIYwhzCAUICASYDBYJCRaEALweLx4BHAGED7sdEPb9Ml0Q9O0zLwA:7TMvXT:tEjkv7TEwXQEhHgEzMjY3MxEOASMgABEQACEgABElLgEjIgYHBPz8yAi5tHLWPih62IP%rv6YAVUBKQESART%mgNqcGiGCAHvhIxSL:7fMSwBMAEZARYBRf7r:vxVcXJsdwABACsAAAOCBh4AGABAQCQAAASYFQELCA6nEQ8NCgoAABoPGh8aAggPCBEMhA9fDW8NAg0vXTPtOTkvL10RMy85LwAvP%05OT:9Mi8xMAEjLgEjIgYdASEVIREhESM1MzU0NjMyFhcDghsYTSxqSwEW:vb%mJqa295QgjIFDAcSTG0J9PyRA2:0H87OCwkAAgBa:lkE7gSCACYAMwBVQDhOFk4tTjNdFl0zaRZqM30Iegx1I3ozCxUkGCuXIRAmDzGWGAoKDpcGHAkJGyQnFYQAujUugxu7NBD27RD0:TIyEjkvAD:9Mi8v7T8:7RI5OTEwXSUUBgcOASMiJicRMx4BMzI2Nz4BPQEOASMiABE0Njc%ATMyFhc3IQERLgEjIgYVFBYzMjYE7lpRUeWQdeNTLEK%S2R9IR8cQZ5h7P8ATkdCwWVblT0NAV3%mB9aJI6OeXc2aIGe2D0%NxwUARkaKyUiIGRGFTU%ARwBIovKS0ZOKyYy:P8B:Q0Po5KigCIAAAEAqgAABRIGFAAWADhAIwEVExU8EXAVBAEQDQiVExAOAA0BhAC6GDAYYBgCEAuEDbkXEPb9Ml0Q9u0ALz8:7RI5OTEwXSEhETQmJyYmIyIGBxEhESERNjYzMhYVBRL%lg4RFE1FMWU7:pgBaGCxbLbNAi1EhyAlIiAj:OQGFP3TS1DU0wAAAgCgAAACHAYUAAMABwAxQCEFngAGEAYgBgMGAAIPAQSdAIQFnQABEAECAVAJYAlwCQNdL13k:eQALz8:Xe0xMCkBESE3IREhAhL%mAFoCv6EAXwEY6ABEQAAAv:G:lkCkAYUABIAFgBBQCgKARoBAhSeABUQFSAVAxUAEKcRDwcHC5cDHBUQFRAOhBMAuhgvGAEGL10Q9Dz9MjIvLwA::TIvP%0:Xe0xMF0FFAYjIiYnETMeATMyNjURIzUhNSERIQKQ6rhioSUcHloaaEzVAj3%gQF:FL7VEQkBAgoOfI4DCPSgAREAAAEAqgAABVIGFAALAMhAVA0CDQkOCx8BHwktAS8JPwE4Aj8JTgFLCV0BXwluAW0JfwF9CYYLqQKhC78CsgvKAvULGQICAwGHAAsADwgfCAIISgkBCTARFzcJiAIwCxA3AgECA7j:2EAbCxA3AwoLCgcACAACAwUKDwUzC0MLUwtzCwQKuP:AQB4MEDcKAgsKAwAAEAACAC8NAQANQA1wDQIIA4QFuQwQ9v0yXREzXS9dFzkvK10ALz8SFzk:MTAAhxDAKwjAKwX9K3EEwF0BhxD9CMABXSkBAQcRIREhEQEhAQVS:l3%xWL%mAFoAYQBn:5sAel3:o4GFPxfAfD%HAABAKoAAAISBhQAAwAdQBICAAEAhAABEAECAVAFYAVwBQNdL13tAC8:MTApAREhAhL%mAFoBhQAAAEAqgAAB9YEggAoAF5AQQQWAxwVHCgYpxamG7cWthsIJpUaEBEXHwIEDgmVFBAPDw4ehB%qFwGEAhENhA6qAAIQAgICAiopACowKlAqcCoEXRESOS9d9P0yEO059O0ALz8:7RIXOT:tMTBdAREhETQmJy4BIyIGBxEhESEVPgEzMhYXPgEzMhYVESERNCYnLgEjIgYE9P6WCBISSUI1ZCj%mAFoXapnb6owbMxitr3%lgcSEUpDLVYDHPzkAjFScyQkISsY:OQEY3xJUmNgW2jazf0lAjFTciQkIR8AAAEAqgAABRIEggAWADhAIwEVExU8EXAVBAEQDQiVExAODw0BhAC6GDAYYBgCEAuEDbkXEPb9Ml0Q9u0ALz8:7RI5OTEwXSEhETQmJyYmIyIGBxEhESEVNjYzMhYVBRL%lg4RFE1FMWU7:pgBaGCxbLbNAi1EhyAlIiAj:OQEY3xLUNTTAAIAWP:dBSYEhgALACMAIUASFZgJECGYAxYPgwC8JRuDBrskEPbtEPTtAD:tP%0xMAEQACEgABEQACEgAAE2NjU0JicmJiMiBgcGBhUUFhcWFjMyNgUm:r3%3P7c:r0BRQEiASYBQf5FIyMkICBaNDRRJSEnIiEgWTkxWQIx:uv%wQE:ARUBFwE%:sD92it5a2OGKCkiHConiGdchyknJCEAAAIAqv5kBT4EggATACAAP0ArRAJED0QgUg9SE2UPZBN5CH8cCReWERAMDx6XBhYLGxSDALwiDhsJhAy5IRD2:TIyEPbtAD8:7T8:7TEwXQEUBgcGBiMiJicRIREhFTY2MzISATQmIyIGBxEWFjMyNgU%VUVItmhghkb%mAFoU61x0un%jXB5M2wxJFIoj4wCQYvkSk5QKSX%LAX:dUJS:sz%7KSUHx39yw4IpwACAFr%ZATuBIIAEwAgADtAJ0oKShpNIFsgayBwEHogBxiXDhASDx6WBRYBGxEUAoQAuiIbgwi7IRD27RD0:TIyAD8:7T8:7TEwXQEhEQ4BIyICETQ2Nz4BMzIWFzchAREuASMiBhUUFjMyNgTu:phYqGnO9VNIRMJhX4FIDQFd:pgmVCOOjnJ%MW7%ZAIKR0YBPAEMj91PS1MrJjL80wInEA6xnaWVJQABAKoAAAPYBGcAEgA4twEMcAwCAAAEuP:AQBcKEDcElQ8PCw8JCAAAFC8UAQwHhAm5ExD2:TJdETMvAD8:P:0rMi8xMF0BIy4BIyIGBxEhESEVPgEzMhYXA9ggF2YiTXZE:pgBaHewShMwEgMMCAgUGP0QBGOlZkMCAgAAAQBf:%EEegSCADAAgkAQMi9JGEcvdQF5C3kbdSMHH7j:4EAhDhA3BSAOEDc7EQERABooBB0DUCEBIUAJEDchISWnHRAHuP:AQBMJEDcHBw6nAxYhKIMaEYMhGgcAuP:AQAoJDjcAADJwMgEHL10RMy8rEjk57S:tLwA:7TMvKz:tMy8rXRESFzldMTArK10BFAQhIiYnETMWFhcWFjMyNjU0JicmJicmJjU0JCEyFhcRIyYmIyIGFRQWFxYWFxYWBHr%yP7xlvRKIRtHQTiOUWpmPFQoiTiZlAEzAQp%50EfUM1pV3c2ZDd:QI6IAWSu1TgiASgTLRoXIS8uKSURCRUPKKl%otczHf7kN0UwLCgqFQsVECWfAAEAK::qA3gFpAAbAEpALAoFGwUCDwtwCwILEA0HpwsKDxsbF6cDFg5AAAEAAB0PHQEIDRCECghvBwEHL10zM:0yL10RMy9dMwA::TIvPzPtOTkvXTEwXSUOASMiJjURIzUzESERIRUhERQWFx4BMzI2NzMDeDqCXtLNlJQBaAFR:q8CDw5HRBxbEh4KDxGqzgIN9AFB:r:0:nI7WCMjKRgKAAEAof:hBQkEYwAWAD5AKQoGGgZME1sTbBN:B3oTBwIVBQkPEZUFFgEUAoQAuhgwGGAYAguECLkXEPbtXRD2:TIALz:tPxI5OTEwXSkBNQ4BIyImNREhERQWFx4BMzI2NxEhBQn%mGSmc7rJAWoLFBNNRS5wNAFofExP1tEC2:3TVXElJSIiIQMcAAEAHgAABRUEYwAGAGxAJLAFARYBGQJHBVgFBAUEBQaHAAEABQSGAwIDZAFrAnQBewIEALj:30AhCQ83AyEJDzcABQIDDwJ6AHUDAgAACC8ITwgCAAMQAwIDL11dETMvXQAvPxI5OTEwASsrXYcQ:cCHEP0IwAFdAF0JASEBIQkBBRX%T:5o:lIBfQEEAQEEY:udBGP8:AMEAAABAC0AAAepBGMADACyQHEJAgYEGQIWBCkCJgQ5AT8CMAQ7CTMKSQFPAkAESwlDClsCVQRcCVMKbAJkBGwJYQp9AnAEfQlyChwCC4YMAQyHAAEABAgEBxQHAvQHAQeGBgUGUQFeBWUBagVxAX8FBnUIcwsCAwUICQsMBgIGDwIIALj:30AZCRA3BiEJEDcAAA4ABhAGEA4gDkAOYA4GBi9dETMvKysAPz8SFzldMTABXYcQ:V1xwMCHEP1xwMABXQkBIQsBIQEhGwEhGwEHqf6k:oLl4f59:qcBesDwAT:kvQRj%50C9f0LBGP8%gMG:PoDBgAAAQAaAAAFQARjAAsA7UAPLwIgCFYCWQgEAkoJEDcIuP%2QCYJEDccBRMLOgU1C04BQwNDB04JWQFWA1gFVgdZCVcLDgsgCRA3Bbj:4EAsCRA3AwIBAgsACwoFBgUIBwgECUsJAQkwERc3CYgKAwoBAgUGCwgHAEsHAQe4:9BAEREXNweIBgYBCAoAAgQGDwQAuP:fswkQNwq4:99AIQkQNwYhCRA3BCEJEDcKBgUGCgsEBAAADS8NAQAEEAQCBC9dXREzLxIXOS8vKysrKwAvPxc5MTABhxD9K3GHwMAQwMDAhxD9K3GHCMAIwBAIwAjABcABKytdACsrXSkBCwEhCQEhGwEhAQVA:lzw9v5kAbv%TAGk7O0Bnf5LAVD%sAIxAjL%tgFK:dcAAAEAHv5kBRcEYwAHAI1APwgFSgVYA1kFZgMFAAcABQYFBKsBuQECAYcCAwIApAe2BwIHhgYFBgsDBwUYAyUDKwU4A2oFewJ1A3oFdAYLArj:30AjCQ83BiEJDzcCAAU1BkUGAgYPBQQbAgIJLwlPCQIABhAGAgYvXV0RMy8APy8:XRI5OTEwASsrXYcQ:V3AhxD9XcAIwAjAAV0JASEBIRMBIQKlAQABcv2Q:nqy:ksBegGNAtb6AQGkBFsAAQBUAAAEcwRjAAkAdkBVAwcIGwgrCDsIRQgEJgg3CIUIlgijCLMIxQjVCOUICQiIAgMUAgIDHAJMAkMHagJlB3oCdQcHBwOXBg8CCJcBAAQAAwQIAwIABxAHIAcDBwcLLwIBAi9dETMvXRIXOTMvLwAv:TI::TIxMF2HBS4rXXGHfcQhITUBIREhFQEhBHP74QJQ:cgD:P25AlLnAnUBB%P9jAABAJj%eATnBhQAKwBGQCwCEAIfExATHysgPiFIDUgddScJIB8JzQoKABTLEwArywAUACAJGw8kwAAJBS8zM%05OS85LzMAL%0:7RI5L:05OTEwXQEhIiY9ATQmKwE1MzI2PQE0NjMhFSMiBgcOAR0BFAYHFR4BHQEUFhceATsBBOf%7sLnnrBGRrCe58IBEnI8YSEiIp2RkZ0iIiBiPHL%eMW%k7KL9ouyk77F4BIZGmNObYy8Nxg3vIxtTmMaGhEAAAEBm:54Ar4GFAADABdADQIAAQC%ATAFTwVwBQNdL%0ALz8xMAEhESECvv7dASP%eAecAAABAMn%eAUYBhQAKwBOQDIDFgMlExYTJSsVPxRJKAcVFgDNKysJIcsiAArLCSIJFYAAAQAmGhDAAAkABT8FQAUDBS9dMzPtOTkvcTkvMwAv7T:tEjkv7Tk5MTBdASMiBh0BFAYjITUzMjY3PgE9ATQ2NzUuAT0BNCYnLgErATUhMhYdARQWOwEFGEawnufC:u5yPGEhIiKdkZGdIiIhYTxyARLC556wRgHLi7KTvsXgEhkaY05tjLw3GDe8jG1OYxoZEuDFvpOyiwAAAQCdAUUGVwPvACsAVkAROgY1HEwMTBFDIgUDGQ4QNxm4:%dAJA4QNxYWJdYDAAMAD9YZGQ8lAwQWK7QAAC0VtAAWARYgLXAtAl0vXe0RMy:tEhc5AC:tMzMvL%0zLysrMTBdAQoBIyImJy4BJy4BJy4BIyIGBw4BByEQEjMyFhceARceARceATMyNjc%ATcGVwHZ10drKypDJBhBFx01ITw%ERILAv7y3tNEbi0qRSIYOR8hNRs5QhARDAID7:64:qAhHB1FKh1TGB8jPjE2ok4BTwFZIxwcRigdSyEiHzo1NZZbAP::ABgAAAYeB4kCNgAkAAABFwCOAEUBdQAkQBkDAlAQARAFJgMQECAQMBBQEAQCABALBQAlKzVdNQArXTU1AAMAGAAABh4HjwASABUAIQETQDMAAgACEwIDk3AVARUZxT8MTwwCBgwfDC8MPwy:DM8M:wwHDAAVFAYSBQUfAwUKAAUFAgC4:99ALAoQNwUhChA3FrAPHLAQCSAJMAkDCQYJDxIBAgMEExQVCwUADyMBACMfIwEFL10RM10vEhc5L13tL%0rK10ALz8SFzkvXXHtL13tOTlDVFhAMBQUFRMCAYEAEgAUFQMEggUFBgcGCBJMBkMSXQZSEm4GYRJ:BnASCk0ATQV9AH0FBDEwXQFdhxD9wMDAhxD9wMAIwFlDVVhALD8UTRQCFBQVEwIBgQASABQVAwSCBQUGBwYIEkwGQxJdBlISbgZhEn8GcBIKAV2HEP3AwMCHEP3AwAjAAF0xMFkpAQMhAyEBLgE1NDYzMhYVFAYHCwIBNCYjIgYVFBYzMjYGHv5zZ:3YZ:59AgwqNcyKisw3KEW3twFETTs7TUw8PEwBLf7TBYsobDx:tbV:Pm0l:LMCFv3qBCU:UlI:P1NUAAEAZ:5ZBW4F7gBCALC5ACv:hLMNEDcVuP%EQAkNEDc2KgkMNxG4:8JAagkMNy8%CQw3CB0YHSMDJgQpCC8JLx0jI1kCWQRXClkcViR1A3oJDzs7P8g3HC8TPxNvE38TBBMTGpEMBDEAIC0wLWAtcC0ELS0mkgATOjo0sSAAAQABADADBhMtuEQARE9EX0QDIH0Gt0MQ9O1dEPYyERc5L139Mi8AP%0zL10SOT:tMy9dP:0yLzEwXSsrKwErKwUmJCcmAjU0Ejc2JDMyFhceARcRIy4BJy4BIyIGBw4BFRQWFx4BMzI2Nz4BNzMRDgEHFBYVFAYjIiYnNTMeATMyNjUDWqf%62Rkb2plYQEfql6XQENtKSwcVTY3gElRkj47SU88PZZJRok6MVQbKDueWgPHoCOFLRcYXCpQUxoBYWFgASC%sQEgZ2NsFRETLxT%lxhCICAsMzs5vIaMvDY3LyokHUIY:pwaPxEPLhKirwsNyAsYUFD::wC%AAAE8wgBAjYAKAAAARcAjQAQAXUAFkAOAVAPAQ8FJgEADwwCAyUrNQArXTX::wC%AAAGCAfHAjYAMQAAARcA1wCMAXUAFkAOAVAXARcFJgEAFwoFCSUrNQArXTX::wBn:%EGZgeJAjYAMgAAARcAjgCPAXUAJEAZAwJQKQEpBSYDECogKkAqYCoEAgAqJwYAJSs1XTUAK101Nf::AKn:4QXWB4kCNgA4AAABFwCOAGgBdQAkQBkCAVAXARcFJgIAGCAYUBhwGAQBABgVBxElKzVdNQArXTU1::8AVv:iBLcGjAI2AEQAAAEWAI3YAAAKtgIANDIoLiUrNf::AFb:4gS3BowCNgBEAAABFgBD2AAAE0AOAhAzIDMwMwMAMzEZLyUrXTUA::8AVv:iBLcGjAI2AEQAAAEWANa6AAAPQAoCfzUBADUxGS8lK101AP::AFb:4gS3BhQCNgBEAAABFgCOyQAADLcDAgA3NBkvJSs1Nf::AFb:4gS3BlICNgBEAAABFgDXyAAACrYCAD4xGS8lKzUAAwBW:%IEtwa6AA8APABIALFAfw8YAzkZGBQ5PSw9NkkFSRxKLEo2WQVZHFksWTZrBWkPaxx2JXIpcDkUQMUvMT8xAjFGN0YxAysB8R8fKxYnQA0PNycnI6crEA2nFhY7Ci4FNBouFTQqLiU0BkOvNys0IC4BLi49rzQ0GR8BPIQ7ukovSgEPKB8oAigoB4QZu0kQ9u0zL11dEPb9MjISOS:tMy9dEjk57V0ALz:tP:0yLysREjkv7REXMy8vXe0xMF0BNQ4BBw4BFRQWFx4BMzI2Fw4BBw4BIyImNTQ2NzYkNzU0JiMiBgcjET4BNy4BNTQ2MzIWFRQGBx4BFREhAzQmIyIGFRQWMzI2A1JJqiw2OQwYF0BENm8qHVYmNXJEoNhuZWQBKJ%YlFnKLCE2qYFPYbmFhrhqVMjJ:pskTTs7TUw8PEwBJeoGFQ4RQTUjLBQUEyyKFj4SGBfGmnucLS0mCQZdRz8RAQ8OHgckkFuBrK2AYZQgF7Oy:QQFjD5WVT8:U1QAAQBY:lkEcQSCADkAs0AoMAM:CTsZMRtAA0UETAhMCUwZRBtLH1sfax98IA4tIAkMNyVGDBA3FLj:1rMNEDcOuP:gQB8MEDcyMjbILhwQQAkQNzAQARAQF5cMECgAPyRPJAIkuP:AQCwJEDckJB2YABYxMSuxMABwAAIAAAEGEAAkECR:JAMkLzsBJDtgOwEagwa7OhD07V0RM10vXTMSOTkvXf0yLwA:7TMvK10SOT:tMy9dKz:9Mi8xMCsrKytdBS4BJy4BNTQ2Nz4BMzIWFxEjLgEnLgEjIgYVFBYzMjY3PgE3MxEOAQcUFhUUBiMiJic1Mx4BMzI2NQLWjOtVVF5pXlvugHPCVDMVOyspYkGQm5%SRG0kIjQWMyRiNQPHoCOFLRcYXCpQVBsDSkhI2ZKd5EtHQjIo:s0SMBcWHbedoqgfFRQsFf7NDyULEC4Soq8LDcgLGFBQ::8AWP:iBPwGjAI2AEgAAAEWAI3sAAAKtgIAIB4PACUrNf::AFj:4gT8BowCNgBIAAABFgBD4gAACrYCAB4eDwAlKzX::wBY:%IE:AaMAjYASAAAARYA1vQAAAq2AgAhHQ8AJSs1::8AWP:iBPwGFAI2AEgAAAEWAI7rAAATQA0DQCNwIwICACMgDwAlKzVdNQD::wBoAAACvgaMAjYA1QAAARcAjf6DAAAACrYBAAYGAgMlKzX::::6AAACUAaMAjYA1QAAARcAQ:6EAAAACrYBAAUFAgMlKzUAAv:1AAACyAaMAAMACgA:QCcGPgkPNwYFCAkJCAgCDwF:BHAIAgQIBACECAABEAECAVAMYAxwDANdL10z:TIvL10ALz8zLzMvEjk5MTArKQERITcjJwcjEzMCEv6YAWi273186%r:BGOg1dUBiQAD:%4AAALOBhQAAwAHAAsASUATBgUJCgoJCQIPAQVACxA3Bb0ECLj:wEAXCxA3CL0JBACECQABEAECAVANYA1wDQNdL10z:TIv7Ssv7SsALz8zLzMvEjk5MTApAREhNyERIQEhESECEv6YAWi8:usBFf41:usBFQRjoAER:u8BEQD::wCqAAAFEgZSAjYAUQAAARYA1wwAABVAEAEAJCAkMCRAJAQAJBcOFiUrXTUA::8AWP:dBSYGjAI2AFIAAAEWAI3nAAARQAwCQCZwJgIAJiYGACUrXTUA::8AWP:dBSYGjAI2AFIAAAEWAEPnAAAKtgIAJSUGACUrNf::AFj:3QUmBowCNgBSAAABFgDW5wAAGkAUACQAKiAkICcwJDAnBgIAKCQGACUrNQFd::8AWP:dBSYGFAI2AFIAAAEWAI7nAAATQA0DQCpwKgICAConBgAlKzVdNQD::wBY:90FJgZSAjYAUgAAARYA1%cAAAq2AgAxJAYAJSs1::8Aof:hBQkGjAI2AFgAAAEWAI3iAAARQAwBQBlwGQIAGRkJFiUrXTUA::8Aof:hBQkGjAI2AFgAAAEWAEMKAAAKtgEAGBgJFiUrNf::AKH:4QUJBowCNgBYAAABFgDWAgAAGkAUIBggGiAdMBgwGjAdBgEAGxcJFiUrNQFd::8Aof:hBQkGFAI2AFgAAAEWAI7%AAATQA0CQB1wHQIBAB0aCRYlKzVdNQAAAQDyAIcEvgYUAAsAPEAnAwcKCwABBAYFzAYGCAAA4AIEBwgJCgEGArMF4AADMANwAwMDTw0BXS9d5u0XORDmAD8zL%0XOS8xMAElEyMTBTUFAzMDJQS%:pQF:gX%lAFsBf4FAWwDqgX82AMoBeYFAYn%dwUAAAIAtAKsBAAF8AALABcANEAhWgNVCWoDZQkEFcsDAw:LCQcMsSAAAQAAErEABgEGQBkBXS9d7TMvXe0AP%0zL%1dMTABFAYjIiY1NDYzMhYHNCYjIgYVFBYzMjYEAPWxsfX1sbL05G9TUnBxUVNvBE6w8vKwsPLysFJ1dFNVcXQAAgC8:pcE9wXDACIAKQCTQGksASIXOwEzFzMcOx9KAUUXRRxKH1oBVBdgG28cYB9vIHAbfhx0H34gFBMVElwZARkkIx4dmBMZEhAPBW8FfwUDBQMGUyIBIh6YBSIGIxIVHQQDnTAGQAZgBnAGBAYZBgwAACsnhAAMAQwvXe0RMy8SOTkvXe0XOQAvMzPtL10SOS9dPzMz7RE5OS9dEjkvMTBdJQ4BBxEjES4BJy4BNTQ2Nz4BNxEzER4BFxEjLgEnET4BNzMFEQ4BFRQWBPczpVuui9lOUVdgVFLbea5xpB4xJoNdWX0wMf4jcoKFQxUzCP6kAVkJUUZJ1YmW2UlHSggBO:7BDDkN:tkgUBL9XA5GLX4CoBi2h4%lAAABAJoAAAUtBe4AIAB5QFIhDiodMA4yE0IOQhNSDlISZA5nEWASdA52EXASDhsYBakIEBAUmwgBDAcCQAsQNwIfSgEfAhgbiwhgBXAFAgVgGQEZBg8GBRkPBAIAACIAAgECL10RMy8SFzkvLy9dL10z:TIROQAv:TIrPxI57TMvL%05OTEwXSkBET4BNSM1MxE0JDMyFhcRIy4BIyIGHQEhFSEUBgcVIQUt%218VLCwASfyiLM1LUyGOmh:AbX%S19KAwMBGSKQkNkBBb:2IQ:%yC8nd2vG2VmyKAsAAgCX:ngFGQXwADsATQDQuQAt:29ADg8QNw%ADxA3DCgJEDcquP:WQIkJEDctGCE2Nhw4OkUcSTpbCFsdVCZUO2kIaRRrHWQmZjt6RHZJdE0SCxUEMxsVFDM:QjBLT0JAS1wVUzNbQlRLb0JgS39CcEsQFQdLQiUzBigKLCwwnCgHDg4SnApgQm9LcEJ:SwQViUsERQc:LE8sAiwziUIhJQ08iw0lLAcEHgAAT0WLAB4BHi9d7REzLxIXOe0vLzk57S9dLxI5Oe1dAC:tMy8:7TMvERIXOV0xMF0rKwErKwEUBgcVHgEVFAQhIiQnETMeATMyNjU0JicuAScuATU0Njc1LgE1NCQhMhYXESMuASMiBhUUFhceARceAQU0JicuAScOARUUFhceARc%AQUZelxiVP67:uJl:vdJIjnDYol3Li4vkUCyumNzZlMBUQETcelRIDHBY3KOLi4qjE6vvP6ZVEsaUzwtP1VKHV4vJ0QCX2urMwc1ilqk2iEYASIkOT04JjETFCkUOKeEYKBJBziQW57WHxr%3hxBQTQmLxMRKRk4q7w4RxsJGhAgVzQ4SBoKHgwcVQABAN0AsQTTBKUACwAjQBR:CQEJCQNwBgEGBk8AAQAgDU8NAl0vXTMvXQAvMy9dMTATNAAzMgAVFAAjIgDdASnS0gEp:tfS0v7XAqvSASj%2NLS:tgBKAAAAQCH:pUE5AXRAA0AP0AnVQgBAQUGBgLGDAMFsAAEEAQCBAQCsB8NAUANUA1gDQMNDQ8ACQEJL10RMy9dce0zL3HtAD:tMy8vPDEwXQEjESMRIxEsATU0JCkBBOTKl9T%7f7rATABDwIe:pUGiPl4A7wG88:Q6AAAAQCq::IFZAYeAC0Ab0BKMg8yLUIPQi1TGlssYxRqLHIUcCkKKyoRlxIYpxIDIQEHBwuWAxYdKicRHwYvBnAGAwYVhB8nLycCJw6DAAYRJwMdALwvHIQduS4Q9u0Q5hEXORDtL13tL10vEjkALz:9Mi8:EjntL%05OTEwXQEUBCEiJicRMx4BMzI2NTQmIxEyNjU0JiMiBhURIRE0ACEyFhceARUUBgcVHgEFZP7R:wAjcRkoEUEhWXico2lrV1loX:6YAS4BB43BQ0BApn263QHU7vQKBAEQBQ18b3FfAQtiZk5UgHD7wgQg9AEKODIxgEmIvREJGtAAAAQAev8uBzwF8AALABcAKAA3AN%5ACL:4ECGCQ03GhkcCRA3GewYKBgoGAkQNykPJhV5D3YVBCkMJhJ5DHYSBEA5ASnsDyUfJQIlJSgrGDsYSxhfGG8YBRgxG%wgHQEdDK8YHQY6AEMAYABwAAQAABKvAAY1BkUGAwYoHjHFGhoeGB0wxR4GAhXHHR4JNQNMA28DfwMEAwMPxzoJSgkCCQQAP13tMy9dEjk57UNUWEARjQ%CFZ0PkhWtD6IVvQ%yFQhdWS:tLzMSOS:tEjkBL13tMy9dEjk57S9d:TIvXTk5L13tXV0AXTEwASuHEP0rwAArARAAISAAERAAISAAAxAAISAAERAAISAAByEBIxEjESEyFhceARUUBgcnNCYnLgErARUzMjY3PgEHPP4F:pr%mv4FAfsBZgFmAfu%:nX%6f7p:nUBiwEXARcBi73%8f77VtQBR1tuNjs3alUtFxsZQSlDMzVMFxcWAo:%mv4FAfsBZgFmAfv%Bf6aARcBkf5v:un%6f5vAZGDATz%xANdDh0hXkZeeiLqGy0ODgfzDxIRMgAAAwB6:y4HPAXwAAsAFwAzAMJAfS8lLzM:JT8zTyVPM18lXzNvJW8zcBxwIH8lcCpwLn8zECkPJhV5D3YVBCkMJhJ5DHYSBEA1ASUYLLMeDK8YHgY6AEMAYABwAAQAABKvAAY1BkUGAwYzMy:GGyAlASUlKcYhBgIVxxshCTUDTANvA38DBAMDD8c6CUoJAgkEAD9d7TMvXRI5Oe1DVFhAEY0PghWdD5IVrQ%iFb0PshUIXVkv7TMvXS:tMy8BL13tMy9dEjk57S:tLzNdXQBdMTABXQEQACEgABEQACEgAAMQACEgABEQACEgAAUOASMiJjU0JDMyFhcVIy4BIyIGFRQWMzI2NzMHPP4F:pr%mv4FAfsBZgFmAfu%:nX%6f7p:nUBiwEXARcBi:6rSpRC3f8BDNBQlDwVOolEcXV5bVOLKRUCj:6a:gUB%wFmAWYB%:4F:poBFwGR:m:%6f7p:m8BkWMjJfjP0PoqHc4uN46Mh5BCIwACAI4C:Qb5BdEADgAWAI5ACmALbw1wC38NBAy4:8BATg0QNxwMLAw8DGcLBAACAwYMAxoEKgQ6BAMECw0BAwQGCAcVEhIQE8UVAw0LBwKvHwABAAAHrwlPD0AUXw9QFAQPFA8QrxQAExATYBMDEy9dM:0yLy9dL%0zL13tETk5AD:9MjMvEhc5L10XOUNUWLQPBA8MAl1ZMTBdKwFdASMRIwMjAyMRIxEhGwEhBSMRIxEjNSEG%cIVsoi0GrgBO5KYATL79s:DzwJhAv0CNv50AZP9wwLU:p4BYp39yQI3nQAAAQHlBQMEOwaMAAQAJ7kABP:Atg0QNwQEAwC4:8BACQwQN3AAAQAAAy8zL10rAC8zLysxMAEVASMTBDv%oPb3BowU:osBiQAAAgE3BQMEeQYUAAMABwAxQB4GBQEvAgECAgEgADAAQAADAL4BASAEMARABAMEvgUv7V0zL%1dAC8zL10SOTkxMAEhESEBIREhBHn%1wEp:ef%1wEpBQMBEf7vAREAAAEA%v%pBfcFZAATAIBATA4REgECAg0LCAcEAwwMDQICwQMMFAMDDG8DAQMDARIE1gcPDAEMBwwRDgjWCwwCAw0DBgMTDQQKAA8fD0APcA8EDw9QCgEKIBVwFQJdL10zL10SFzkvLxI5OQAv7Tk5MzMvXS:tOTkyL10xMIcFLiuHfcSHPDzEPIcQPMQ8PAEhAyETIREhNyERIRMhAyERIQchBff9ZZb%8ZX%rgHDav3TApqIAROKAVL%PWsCLgEO:psBZQEM%AEMAUb%uv70%AACAAQAAAg8BdEAAwATAJZACScFSQMCAwAFBrj:%EAVCRA3BoIHBwgnBykIfAgDDAEPfwQNuP:AQD8QFTcNBAgHCQ0SEhUFB3UHAgchCg83BwWSUABgAHAAAwAPkTAMQAxgDHAMgAywDAYMBwwAAxMLkQOTCAMQkRMAL%0:7e0SFzkvXe0vXe0BLytdETMvMzMSOTkvKy:tOTkxMF2HEP0rwMDAAV0BIREjEyEDIQEhESERIREhESERIQKnAWOQkP4rov5xAmMF1f1JAoX9ewK3%84CsAIP:NX%bAXR:uD%::7g:pD%4AAAAwBl:3IGZgY4AAwAGQAxAPNAoAkOBB8LKxkOEh8aKycBBwMHCRQDGwolCicGMRMHGRQTGxolGicgBysUIBsrHiolKycgKjAkMiU:MD8xQCRAJUkvTzBPMVcOaAFmDn8eeiJxKnEuIiUAATAvLyYkDg0xGiMjJi8vjxojFBoaI3oadSYCBgIADQQRkyMmGi8ELCAEBJMsE3UaeiYCAQ4XCn4pGi8jJgQdKbgzPzMBF34dtzIQ9O1dEOYRFzkQ7RE5OV0AP%0:Ehc5:RE5OUNUWEuwDFFYQAkPJDskTzEDMSQuLl1ZWTEwXYcOLiuHDn3EhwU8DsQ8BTyHEDwOPMQFPABdAV0JAR4BMzI2Nz4BNTQmCQEuASMiBgcOARUUFgMmAjUQACEyFhc3MwMWEhUQACEiJicHIwSo:eMtcD9IjzE5Nx:9YwIaL206Tn45NEAcwWx2AZgBZ3fFVnvSxG14:mj%mHPRU5vPBBn9IyQmOzxEvn5UqP3YAtwkIjJAOcOJWpn%rWYBKbcBZwGhLi6k:vtk:tW8:pz%XTIuzwAAAwCxAGAHxwS5ABoAKQA4AF9APQclFiU4FjUpOC9IEGgWBxUJEgwn1wYGM9c:DAEMHtcYDBgt1xIvGz8bAhuzJCoPAAA6IDAwMAIwswAPAQ8vXe1dETMvEjk57V0AL%0zMy:tL13tMy:tERI5OTEwXQEUBgcOASMiJicOASMiAjUQADMyFhc%ATMyEgU0JiMiBgcOAQceATMyNiUuASMiBhUUFjMyNjc%AQfHT0FGr2uB2UxU0I:Q:QER34PXTVHVjND9:v1tXUReJylEHTacUnaD:Q04mlJ4gWdjYWkyHiECl43ZRElEh4SKgQEy8AEJAS6GhYeE:s7wfYwwNDaBRGJmlMtjZZmFdZRdUzNEAAABANoAAAYWBckADwA:QAsOAtYBBAoN1gjfB7j:wEAWDBA3Bw8L3w0ECg20BwIG3wcgEXARAl0v9DIQ7Tk5EPQyAC8r5O05OS:9MjEwKQERIREhESERIREhESERIQYW%sQCFv3qAhUBEgIV:eoCFgEMAaABDAIR:e:%9P5gAAACANoAAAYWBc4ABgAKAGtARwUEBQYEwgMCFAMDAgUGBQQGwgABFAAAAT0BMgJLAUQCfwFwAgYDAwAJ1ggFBAkKBAFFAAEAADAAQABgAHAABQAAASAMcAwCXS8zL11dEhc5AC:tLzMvMTBdhy4rCH0QxIcELhgrCH0QxAkBEQERCQERIREhBhb6xAU8:FUDq:rEBTwBXAGwARIBsP7h:uX%5:2FAQwAAgDaAAAGFgXOAAYACgBvQEoDBAMCBMIFBhQFBQYDAgMEAsIBABQBAQA9ADIGSwBEBn8AcAYGBQUBCdYIBQQJCgQBSgEBAAAwAEAAYABwAAUAAE8BAQEgDHAMAl0vXTMvXV0SFzkAL%0vMy8xMF2HLisIfRDEhwQuGCsIfRDEAQERAQERAREhESEGFvrEA6v8VQU8%sQFPAMM:lABHwEZARsBH:5Q%%IBDAABADQAAAV8BdEAGACFQEkXFhcYFn8VFBQVFRQUDBUSDgwXGAABFwEYfwABFAABAAgEAQkGfw8MCQzKDwYQFAEAEwLKBS8QPxBPEI8QBBAQCxUYABYVAwsSAD8:wNDAERI5L13A:cASOTkQ3cD9wAEvwP3AxN7A1ocrEADBhwV9EMQBGBDdwMYQxIcQKwh9EMQxMAEBFSEVIRUhFSEVITUhNSE1ITUhNQEhAQEFfP4RATv%xwE5:sf%kP7HATn%xwE7:hMBogEJAQkF0fzNLdlO2XFx2U7ZLQMz:ewCFAABAKr%ZAUbBGMAFgA:QCh6BHsPehMDFQkCAwUMDxGWBhYBCxsCFIQAuhgwGGAYcBgDDgqEC7kXEPb9Ml0Q9v05AD8vP%0:Ehc5MTBdISEnIwYGIyImJxEhESERFhYzMjY3ESEFG:7BEAcsa0lCbyL%mAFoLWw3M3EtAWhQJjk2If4cBf:84SQeHyMDHwAAAgB8:%AFKwXvAB8ALgB4QFgEAhICEAMVKyICIAMjGyArNAIwCjgTNBs0JUQCQApKE0QbRCVUBFMaVCdkF2QadBd0GhkPBiOYDAwGHRkZFZYdBCmYBhYaDyAmEoMaCQAAMCaDAAkQCQIJL13tETMvEjntETk5LwA:7T:9Mi8REjkv7RI5MTBdARQCBw4BIyIANTQAMzIWFzQ2NTQmIyIGByMRPgEzIAABLgEjIgYVFBYzMjY3PgEFK21cW%%Y6P7kARzUXahEAZCYTptjHF72YQExAR:%fi1fOGqCYlJgdBkDCQNPvP6fdHFtAQnR7gExPToJGBapnjUzAR4pMP7A:dsoKpGPbHKnjxVCAAEAZP9DBUcF0QAMAJFARgMIAwsQCBMJEwoQCyAIJQogCzQINAtACEYKQAtaA1AIUAtpA2QIZAtwCHALFgkIgAQDBAkKC4ACAgN6AwEHBAMEBwoEAgy4:8BAHgkNNwwMDi8OPw5PDm8Ofw4FAgkDCwQIkQUDAguRAQAv7Tk:7TkROTkBL10RMy8rEhc5Ly9dMTCHEP3QATyHEP0EwAFdBSERCQERIREhARUBIQVH%x0CEf36BL:9HAHb:hsDB70BFwIjAjgBHP7g:fZV:hEAAQAp:z8GywXRAAsAN0AgAwcFAAmRCgMEfwCQIAEBAQ8NAQENPw0BBX8JkC8IAQgvXeTtXREzXS9d5O0AP:0yMi8zMTABIxEhESERIREjESEGy%n%gP4w:oDpBqIEs:qMBXT6jAV0AR4AAAEAKwAABYEEYwALAEVALwMHBQAJpwoPBIQApA8NHw1AAVABYAEFAQENDw1PDV8Nfw0EBYQJpE8IXwhvCAMIL13k7V0RMy9d5O0AP:08PC8zMTABIxEhESERIREjNSEFgZ3%mP60:pidBVYDb:yRA2:8kQNv9AABAB7%WQQwBh4AHQAyQB0AAASYGgEPDxOYCxwAAA9gDwIPAAeEDwAXEBcCFy9dM:0yL10vAD:9Mi8::TIvMTABIy4BIyIGFREUBiMiJic1Mx4BMzI2NRE0NjMyFhcEMBsYTSxXUtzdQo40GxdRKWBJ3N1QgjIFDAcSTn:7u9XlCgr%BhNTegRF2OILCQAAAgCYAjwEBAXwAB0ALQBqQEgCHBwHEhwsByMcOwd6A3MYey0JH8YADlAOYA5wDgQODhoFAQEryAXhGhYWEsgaBw4fAr0AcC8BAC8vFz8XTxcDFxclvQAIAQgvXe0zL10RM10v:TIyAD:9Mi8Q:e0zLxESOS9d7TEwXQEhNQ4BIyImNTQ2Nz4BNzU0JiMiBgcjNT4BMzIWFQE1DgEHDgEVFBYXHgEzMjYEBP7iM49qeqhOVE3menNzRp0hGSzCY%7h:uI8hyIpLQsSEzI4J1kCVF8vSJ58Xn8mJB8HBEs5NA3YDCKYof6IuwURCw0zLBwkDxAPIwAAAgB:AjYESQXwAAsAIwAtQBsJAwYJAiHJA%EVyQkHD70AACVwJQEbvQAGAQYvXe1dETMv7QA:7f3tXTEwARQCIyICNTQkMzISAT4BNTQmJy4BIyIGBw4BFRQWFx4BMzI2BEn:5ub:AQDl6P3%ohwaGxkZRykpQBwZHxsZGEUuKEUEE93:AAEA3d7::wD%SCRZXE5sISAcFyEecVBQZiAfHRkAAQA1AAAGiwXwADkAgkBXKBFUClQSUydTKVMtUy8HDpIrBAI3HwkaGRoCH0AJEDcaGh8fATgekRw3oU8CbwJ:AgMCH6FAGmAacBoDGn8dcDkCOQh9AholOTExOx87AR0UfR0AJQElL10z7S9dETMvMxI5Oe0vXS9d7S9d7QAv7Tk5Mi8zLytdEjk5P%0xMF0pARE%ATc%ATU0JicuASMiBgcOARUUFhceARcRIREhNS4BJy4BNTQ2NzYkMzIEFx4BFRQGBw4BBxUhBov9ND1PJiQlKiorhFdbfywrKSciImEv:TQB2lOTODhCZWFfARistAERYV5lQzY4kFcB2gHoJTQ0L21dSoUwMjg5MTCHSFd4LCtEHP4YASA:IWBFQ7l1gNhTUl1bUlDcgXG9QkRhIj8AAwBW:%IH0QSGADYAPQBPANZAow0gCxA3CxoCMRkaFDElBCUxNQQ6DTQRNTEKRANNCEQRSR5JRVADWwhSEVkeWUVrCWoeYDVjOGpFdAN6CXQRdR90J3QrdDV0TxcB8T1B8SESIT0wBC0YOqczEClAChA3KSklpy0QAAsQC1ALYAtwCwULCweYDxZNpxgWAT2EPhIhMAQAQQwMN4QAQRsAvFEfUS9RT1F:UQQPKh8qAioqR4Qbu1AQ9u0zL11dEOQRORDtMy8vEhc5:TIAP%0:7TMvXT:tMy8rP%0REhc5L%0v7TEwXV0rASEeARceATMyNjczEQ4BIyIkJw4BBw4BIyImNTQ2NzYkNzU0JiMiBgcjETYkMzIWFz4BMyAAESUuASMiBgcBLgE1DgEHDgEVFBYXHgEzMjYH0fzVBT0xMYBLb9E:KGnXjpn%6GwfazJBkW6q1XBjYAEhoI2VWcosITkBAYGZ1UhNynMBDwEP:poDZ21lggj%yBoPU4k2MzsOFRVNNjx7Ae9PaB8fG1Ax:t8rMllfF0oXHSPFm36ZLSsoCQZdRz8RAQ8PKTs0MkD%6:78VW90bHf%cEB7IQcQEhBBNR00EhQTMwADAFj:XgUmBOUADAAZADEAuEBsCSVJAUQbSidWI1AkUCVbL18wXzFlI2AkYCVsL28wbzF8ARElAAEwLy8mJA4NMRojIyYvL60aIxQaGiN1GnomAnoadSYCBgIADQQRpyMmGi8ELCAQBKcsFgEOFwqEKRovIyYEHSm8MxeEHbsyEPTtEOYRFzkQ7RE5OQA:7T8SFzn9ETk5Q1RYS7AJUVi0CSQBMSQuLl1ZWTEwXQFdhw4uK4cOfcSHBTwOxDwFxIcQxMQOxAU8AF0JAR4BMzI2Nz4BNTQmCQEuASMiBgcOARUUFgMuATUQACEyFhc3MwceARUQACEiJicHIwOl:pIcRSoxXx8jJQv%MQF3HksuNVUkIikOuF9lAUUBIl6cRXmvtldf:r3%3FaZP4uuAun%DhMSIyYse20xaP6cAf0ZFx0qJo5nPmf%2lDskQEXAT4lIqbyTeaP:uv%wSEevgAAAgBw:%IEXAXRAAMAIACEQGQPBQ8UHQUaFCwFJQ0lDzwFMg0yD08FQQ1BD08eWgVQDFAOUxdaHmsFYA1kDmoUax56BX8Udh1:HhwTEAcSEgHOAwN:IAEgIBzXBxYC0gMDEM9AE3ATAhMTCgQEIhnRAAoQCgIKL13tETMvEjkvXe0zL%0AP:0yL10::TIvEjk5MTBdASERIRMGBCMiJDU0Njc%ATc1IREOAQcOARUUFjMyNjczA4X%bAGU10D%9on3:t47NjaXXwFgR3M:OkSBdUi1SygEyQEI%mcbO9qwZZs5OVol5P6vEygtKWlDZFU%MQACAMsAAAJtBdEAAwAHACZAFgYGAc4CAwUE3QPSBd1PAl8CAgJPCQFdL13k:eQALz:9Mi8xMAEhESETIRMhAmb%bAGUB:5eLgFGBMkBCPovBCQAAQDYAB0GCQM6AAUAK0AcAAAC1gQBtAAAHwAwAE8EYABwAAYAAAQgB3AHAl0vMy9d7QAv7TMvMTAlIREhESEGCf7j%%wFMR0CEAENAAEAhv8tB2kHLwAIAINADGYBZgcCBwcIcAYBBrj:9EAmCQ43BgMCA3ACAQIHbwh:CAIIDAkQNwgAAQAEARABQAJEA2QBBQC4:99AHgkQNwEBAAAABAIAAAoEA8oGBgcIDwIBAgggCnAKAl0ALy9dEjk5L%0BLxEzL10zLytdMTCHEN0rXcDAXYcQ3StdCMABXQkBIwEjNSEJAQdp:IGx:jzvAfEBUgK9By:3:gPV0:0QBkoAAAEARP84BWUF8AArAGZAPgoPMAYyJDAlQAZAJEAlbxtkIwkMCwgHix4hIh0iIBUJAB0gFQkABQAiASILCB6nISEoEgAABJYoBxYWGpYSAC:9Mi8::TIvERI5L%05OTABL10XMy8vLy%HEMDA:cDAwDEwAF0BIy4BIyIGDwEhFSEDDgEHDgEjIiYnETMeATMyNjcTIzUzNz4BNz4BMzIWFwVlKhpaKl5wERcBHf7CQBdwTkurYS95LiAdVypibxE4s9IgFXZOS71TNWo3BMUJEld2qdn%Zo2tMS4mCggBGQoRYXUBc9nRi6ovLyIJCQACAJ4ASwZSBMYAGQAzAIRAXDoENBI6HjQsQhhMJQZZA1YQWR1WKmkDZhBpHWYqeQN2EHkddioMJycw1h0aI9YdGm8qASoNDRbWAwAJ1gADKgMQIyoJEB0wAxYIJwAZM7QaGjUMDSa0JyA1cDUCXS:tOTkRMy:tOTkSFzkALxcz7S8v7TMvL10zM%0vL%0zL10xMF0BCgEjIiYnLgEjIgYHIRI2MzIWFx4BMzI2NwECBiMiJicuASMiBgchGgEzMhYXHgEzMjY3BlIT1tlgtURNcCdMTw3%8xLZ10egcmVcI1VLCAENE9bZYLVETXAnTE8N:vMS2ddHoHJkXSNVSwgEwf77:v1dOD81b4wBBPs%V0spjHj9if77%l04PzV4jAEEAQQ%V0wog3gAAgAiAAAGUAXRAAMABgB8QDUJBAYGGQQWBjoENQZKBEUGWQRWBgoFBgUEgQAAAwUGggEBAj0CMgNNAkIDXgJRA34CcQMIALj:30AiCRA3ASEJEDcAAAgPCB8IcAgDAAEBAQEfCRA3BQECAwaRAQAv7T8SOSsBL11dETMvMTArK12HEP3AhxD9CMABXSkBASETCQEGUPnSAjoBukz%0v7SBdH7TQM2:MoAAgDZAIAFpgSkAAYADQBAQCtqBGUGagtlDXsEdQZ7C3UNCAoHA9wADAsH1R8ILwhfCAMICAUEANUAAQEBL13tOTkzL13tOTkAL%05OTEwXSUBNQERDQEJATUBEQ0BAzP9pgJa:tIBLgJz:aYCWv7SAS6AAc%HAc7%zd:f:s0Bz4cBzv7N398AAAIBJgCABfMEpAAGAA0AQkAtYwJsBGMJbAtzAnwEcwl8CwgMCAXcAQUDANUfAS8BXwEDAQEMCgfVIAh:CAIIL13tOTkzL13tOTkAL%05OTEwXQkBES0BEQEFAREtAREBBfP9pgEu:tICWv2N:aYBLv7SAloCT:4xATPf3wEz:jKH:jEBM9:fATP%MgAAAwC3AAAHrQGJAAMABwALADxAKAUJCgYEUAJgAnACAwLZAQjPCQkEzwUFAM8BHw0BHw0wDU8NYA1:DQVdXS:tMy:tMy:tAC:tXRc5MTApAREhASERIQEhESECFf6iAV4CzP6iAV4CzP6iAV4Bif53AYn%dwGJ::8AGAAABh4IAQI2ACQAAAEXAEMAPAF1ABZADgJQCwELBSYCAAwMBgclKzUAK101::8AGAAABh4HxwI2ACQAAAEXANcAGwF1ABZADgJQDgEOBSYCABgLBgclKzUAK101::8AZ::hBmYHxwI2ADIAAAEXANcAjwF1ABZADgJQJwEnBSYCADEkBgAlKzUAK101AAIAZwAACJAF0QAWACkAfEA%JQ0qEyoiJSZEDUsTWSFVJ2QOaxJzDn8SDAaRMANAA2ADcAOAA7ADBgMDCQKRG5IWAweRF5IJAwZ:bxoBGgS4:8BAFxAUNwQaEAAECQkrJH0FEBUQJRADELcqEPZd7REzLzMzEjkvKy9d:TIAL%3tP%3tEjkvXe0xMF0BESERIREhESERISIkJyYCNTQSNzYkMwMWMjMRKgEHDgEHDgEVFBYXHgEIkP1JAoX9ewK3%2yg:tZ8nbK5mmABBbZSLmxAT185OUkyZmhxcSdbBdH%4P7::uD%kP7gKktgATvaygFIXjw7%0kEA6QFBhQbOc6Sl885ExgAAAMAWP:dCDcEhgAkACsAQwCXQG8LEQMdGhEUHSUDKhElHTUENRc6GUIDRRFKE0IXSRlgI2AmdQNzIxMNIAsQNwgiDRA3AfErEh4rAw8opyEQMpgbEAALEAtQC2ALcAsFCwsHmA8WPpgVFhIeKwMBhCwMDCWEACwYALxFf0UBOIMYu0QQ9u1dEOQRORDtMy8v7Rc5AD:tP%0zL10:7T:tEhc5L%0xMCsrXQEhHgEXHgEzMjY3MxEOASMiJicOASMgABEQACEyFhc%ATMgABElLgEjIgYHBTQmJy4BIyIGBw4BFRQWFx4BMzI2Nz4BCDf81QU9MTGAS2:RPyhp146d8VhS2IX%3:66AUUBIoXbTFHagwEPAQ:%mgNnbWWCCP6mJCAgWjQ0USUhJyIhIFk5MVkfIyMB709oHx8bUDH%3ysyTUJHTQE%ARYBFwE%T0JCT:7r:vxVb3Rsd5NjhigpIhwqJ4hnXIcpJyQhJyt5AAEAmQIQBRcDHAADABZACgHWAgAABQACAQIvXREzLwAv7TEwASERIQUX%4IEfgIQAQwAAQCZAhAHZwMcAAMAFkAKAdYCAAAFAAIBAi9dETMvAC:tMTABIREhB2f5MgbOAhABDAACAAsDxwQ4BhQAAwAHAFhARQYBBQUfAh8DHwYfBy8CLwMvBi8HPwI:Az8GPwdFAUUFWQFaBWoBagUUBQYB2gIAANMPAk8CAgICBNMQBgEGDwkvCV8JA10vXe0zL13tAD:tOTkxMAFdASMBIQEjASEEOOr%3QFw:n3q:t0BcAPHAk39swJNAAIAewPHBKgGFAADAAcAWEBFCAEJBRAAEAMQBBAHIAAgAyAEIAcyADIDMAQwB0sBSgVWAVUFZgFmBRQGBwLaAwAE0w8GTwYCBgYA0wACAQIPCS8JXwkDXS9d7TMvXe0AP%05OTEwAV0JASMTIQEjEwKI:t3qnQOQ:t3qnQYU:bMCTf2zAk0AAQAgA8cCLQYUAAMAK0AfBgEfAh8DLwIvAz8CPwNFAVkBagEKAdoCAADTEAIBAi9d7QA:7TEwAV0BIwEhAi3q:t0BcAPHAk0AAQB7A8cCiAYUAAMAK0AfCAEQABADIAAgAzIAMgNLAVYBZgEKAtoDAADTAAIBAi9d7QA:7TEwAV0JASMTAoj%3eqdBhT9swJNAAADANoAAAYWBSwAAwAHAAsANUAgfwFwCwIL2AjfBdYGAdgC3wYE4gsAAQvPBeIKIA1wDQJdL%TtOTkQ5AAv9O0Q:fTtXTEwASERIQEhESEBIREhBCL%rAFUAfT6xAU8:gz%rAFUA%kBQ:zkAQz85AFDAAACAGv:cwaFBg0AAwAHAFdAP0AATwJQAF8CbwRgBnAAfwIITwFAA18BUANvBWAHfwFwAwgHBQADAQPtAe0gAgQGAgDtAu0wAVABAgEgCXAJAl0ZL13k5BE5OQAvGu7uERc5MTBdAV0JBwaF:PP88wMNAZH%b:5vAZECwPyzA00DTfyzAbH%T:5PAP::AB7%ZAUXBhQCNgBcAAABFgCOzgAAE0ANAkAOUA4CAQAOCwYCJSs1XTUA::8ACQAABdwHiQI2ADwAAAEXAI4AHgF1AB5AEwIBUAkBCQUmAgAPAQEADwwFACUrNV01ACtdNTUAAf%zAAAD0QXaAAMANkAPAwABAcECAxQCAgMCAAMAuP:hQA4JEDcCHwkQNwAwAgEAAi8zXS8rKwA:LzEwhwUuK4d9xAkBIQED0fzv:vMDEQXa%iYF2gABAAD:4wVYBe4AMwFaQPUnMgEAVw2XDQIDCCQB2CToJPgkAwJYKWgpeCkDAVcnAQInJwEAVxeXFwIBJxcBAFgVaBV4FQNILVgtaC14LQQBCC0YLSgtOC0EAEcRVxFnEXcRBAEHERcRJxE3EQQzJcUBuCLIIugiA3cihyICIggcxQsoGVgZmBnYGQQZGTAOESgSOBJoEngSBBISFpEOBC0nLDcsZyx3LAQsLCiRMBNHK1crZyt3KwQAtSXFJQIDtxnHGQIBhxmXGQJYGQECRxNXE2cTdxMEAFoLAQMrExEHJQECJRkfGCMBIyMaGh8RLbg1MwsfBQkAADQffQW3NEg1WDUCAF9dEPTtEjkvPBESOTkQ9jwROS8zL10ROTlfXREzMl9dX11fXV1fXV9dX10AP%0zL10zP%0zL10zERI5L108:TzeXV08:TxdX11fXV9dMTABXV9dX11fXV9dX11fXXEAX11fXRE3MyYmNTQ2NyM3MzYAITIWFxEjJiYjIgYHIQchBgYVFBYXMwcjFhYzMjY3MxEGBiMgAAMwOgECAgJrME86AXcBIKPteCxYzXx9ySwBJzD%6wIDAgLVMIopxYp82k0ok9%X:tv%iTcCD4YUKRUYLxeG:wEkQDz%l1dvi3mGFjEYFSkThnqTblf%nEc5ASUBBwABANkAgAMzBKQABgAlQBhqBGUGewR1BgQD3AAFBADVAAE:AV8BAwEvXe05OQAv7TEwXSUBNQERDQEDM:2mAlr%0gEugAHPhwHO:s3f3wABASYAgAOABKQABgAhQBRjAmwEcwJ8BAQF3AEFAwDVfwEBAS9d7Tk5AC:tMTBdCQERLQERAQOA:aYBLv7SAloCT:4xATPf3wEz:jIAAgArAAAFMgYeABoAHgBaQDgcngAdEB0gHQMdABkZApgVAQsGDqcRDwkNGBgdnQmEG50IuiAPIB8gcCADBg8GEQyED18Nbw0CDS9dM%05OS8vXRD25P3kMy8ALy8:7Tk5P:0yLz9d7TEwACYjIgYdASERIREhESERIzUzNTQ2MzIWFxUjBSERIQM6TyRjQwMH:pj%bf6YmprV00uALxoB5f6YAWgFEhNOawn7nQN0:IwDb:Qfz80LCf4JAREAAAEAKwAABS4GHgAdAF1APGwFbBN7BXsTBBgZAAGnFQELCA6nEQ8bDWAKcAoCCgoMGBuEGrofDx8fH0AfcB8ECA8IEQyED18Nbw0CDS9dM%05OS8vXRD27TkROS9dAC8vP%05OT:tPzMxMF0AIyIGBw4BHQEhFSERIREjNTM1NCQhMhYXNxEhESYDRS4xSykiLwEW:vb%mJqaAQ8BHVHgJub%mB8FKgwVEUYxHvT8kQNv9B3UyhwEFvnsBRoFAAABAPIAhwS%BhQAEwBiQEMHEhMAAQQGBcwwBkAGYAZwBgQGCw4PEBEIBgnMCgoGDAMMABAA4AIEBwgLDA0OERIBCgKzAwkF4AADMANwAwMDTxUBXS9d9jIQ7Rc5EPYyAD8vEjk5L%0XOS9d7Rc5MTABJRMjEwU1BTUFNQUDMwMlFSUVJQS%:pQF:gX%lAFt:pMBbAX%BQFs:pMBbQH%Bf6EAXwF5gXmBeYFAXP%jQXmBeYFAAABALcB0AItA1kAAwAXQA0C2QEA0AABTwF:AQMBL13tAC:tMTABIREhAi3%igF2AdABiQAAAQA1:zwCQgGJAAMAL0AiCAEQABADIAAgAzIAMgNLAVYBZgEKAtoD2QQA0y8CPwICAi9d7QAQ9O0xMAFdCQEjEwJC:t3qnQGJ:bMCTQAAAgA1:zwEYgGJAAMABwBUQEEIAQkFEAAQAxAEEAcgACADIAQgBzIAMgMwBDAHSwFKBVYBVQVmAWYFFAYHAtoD2QgE0w8GTwYCBgYA0y8CPwICAi9d7TMvXe0AEPTtOTkxMAFdCQEjEyEBIxMCQv7d6p0DkP7d6p0Bif2zAk39swJNAAcAj::hDagF7gALAA8AGwAnADMAPwBLAKRAag8MDQ3BDg8UDg4PCQMGCQkTBhkJNwY9BiXKfwMBAwMfygkHDwYOQz0rynAZARkZSTcxyhMZIwwsDjoMNQ5DDEwOcwx8DggMDi6%FhYovgwOBhAQNEa%OjpAvjQ0TU9NARy%AAAivgAGAQYvXe0zL%1dETMv7TMv7REzLxI5Oe0zL%0vL10AP%05OTMvXe05OS8:P%0zL13tXTEwhwUuK4d9xAEUBiMiJjU0NjMyFiUBIQkBFAYjIiY1NDYzMhYBNCYjIgYVFBYzMjYBNCYjIgYVFBYzMjYlFAYjIiY1NDYzMhYFNCYjIgYVFBYzMjYEGebc4%Xq3uDiAwz89P7zAwwDhubc4%Xq3uDi%VRKVFRKSlRUSgWFSlRUSkpUVEoFMebc4%Xq3uDi:tlKVFRKSlRUSgQM%fDz8vfv79L6LwXR%:n58PPy9%:vAUygcHChoXBw:mCgcHChoXBwpfnw8:L37%:2oHBwoaFwcAD::wAYAAAGHgf3AjYAJAAAARcA1gBDAWsACrYCAA8LBgclKzX::wC%AAAE8wgBAjYAKAAAARcA1gAAAXUAFkAOAVAMAQwFJgEAEAwCAyUrNQArXTX::wAYAAAGHggBAjYAJAAAARcAjQAyAXUAFkAOAlANAQ0FJgIADQ0GByUrNQArXTX::wC%AAAE8weJAjYAKAAAARcAjgAAAXUAJkAaAgFQDAEMBSYCHxFAEXARAwEQEQEAEQwCAyUrXTVdNQArXTU1::8AvgAABPMIAQI2ACgAAAEXAEMABwF1ABZADgFQDAEMBSYBAA0NAgMlKzUAK101::8AewAAA%MIAQI2ACwAAAEXAI3:VgF1ABZADgFQDgEOBSYBAA4OBAklKzUAK101::8AcQAAA%4IAQI2ACwAAAEXANb:VwF1ABZADgFQDAEMBSYBABAMBAklKzUAK101::8AewAAA%MHiQI2ACwAAAEXAI7:VwF1AB5AEwIBUAwBDAUmAgARAQEAEQwECSUrNV01ACtdNTX::wB7AAAD4wgBAjYALAAAARcAQ:9MAXUAFkAOAVAMAQwFJgEADQ0ECSUrNQArXTX::wBn:%EGZggBAjYAMgAAARcAjQCNAXUAHEATAlAmASYFJgIQJkAmAgAmJgYAJStdNQArXTX::wBn:%EGZggBADYAMgAAARcA1gCPAXUAFkAOAlAkASQFJgIAKCQGACUrNQArXTX::wBn:%EGZggBAjYAMgAAARcAQwCPAXUAFkAOAlAkASQFJgIAJSUGACUrNQArXTX::wCp:%EF1ggBAjYAOAAAARcAjQApAXUAFkAOAVAUARQFJgEAFBQHESUrNQArXTX::wCp:%EF1ggBAjYAOAAAARcA1gBoAXUAFkAOAVAWARYFJgEAFhIHESUrNQArXTX::wCp:%EF1ggBAjYAOAAAARcAQwCMAXUAGkARAVATARMFJgEAEwEAExMHESUrXTUAK101AAEAqgAAAhIEYwADAB1AEgIPAQCEAAEQAQIBUAVgBXAFA10vXe0ALz8xMCkBESECEv6YAWgEYwAAAQEaBQMElwaMAAYANkAJCwIbAgIBAgMFuP:AQAwNEDcFBQNgAHAAAgC4:8C1DRA3AAAELzMvK10ALzMvKxI5OTEwXQEhJwchATMEl:74ubj%:AFB%wUD29sBiQABAR0FAASUBlIAGQA6QCIpAjgCAhkZCcoPEHAQAhANEA0WygMQCRYDBA0ZsAAADLANL%0zL%0SFzkAL%0zMy8vXe0zLzEwXQEGBiMiJicmJiMiBgcjNjYzMhYXFhYzMjY3BJQKkYIvVSMfSxkxIQPbBpt7MFYkJUAbMCQCBlKpoyUVEydAOpe0IxUUI0A2AAABAUcFQgRpBhQAAwAWQAsCyhABXwECAQAAAi8zLwAvXe0xMAEhNSEEafzeAyIFQtIAAAEBVgTnBFsGZAANAChAFw1QBmAGcAYDBgYKxj8DAQMNsQAAB7EGL%0zL%0AL13tMy9dMzEwARQGIyImNTMUFjMyNjUEW8q4uMvfUVNOVQZkssvBvGdlZWcAAAECHwUDA5EGFAADABVACwJACxA3AtYBANABL%0AL%0rMTABIREhA5H%jgFyBQMBEQAAAgGaBGAEFga6AAsAFwAhQBEPxQkJFcUDDK9gAAEAABKvBi:tMy9d7QAv7TMv7TEwARQGIyImNTQ2MzIWBzQmIyIGFRQWMzI2BBa4hoW5uYWGuLZNOztNTDw8TAWNgK2sgYGsrYE%VlU:P1NUAAABAbL%WQPuABQAFAAkQBUMAh0CLQI9AgQSBwcLyAMcDrEAAAYvMy:tAD:9Mi8vMTBdBRQGIyImJzUzHgEzMjY1NCY1Mx4BA%7HoCOFLRcYXCpQVQLfAQRWoq8LDcgLGFNNFzsMEj8AAAIBTgUDBN0GjAADAAcAPrMEBQEDuP:AQCANEDcDAwFgAGAEcABwBAQAAC8CPwICAgQCBCAGMAYCBi9dMzMvL10zL10ALzMvKxI5OTEwCQEjEyMBIxME3f7027N0:vTbswaM:ncBif53AYkAAAEBwP5fA:QACgAUACRAFQ8EHAQrBDsEBAoUFBDIAxwAAA2wBi:tMy8AP:0yLy8xMF0BDgEjIiY1NDY3Mw4BFRQWMzI2NzMD9DCAI6u2BQHWAQNgVSpfFQn%dw0LpZkjOREZHyY9UhgKAAABARsFAwSYBowABgA2QAkEBRQFAgYFAgO4:8BADA0QNwMDAmAAcAACALj:wLUNEDcAAAMvMy8rXQAvMy8rEjk5MTBdCQEjASEXNwSY:r:7:r8BCLm4Boz%dwGJ4%MAAQAYAAAE9QXRAA0Aa0AbCwIDAwoIBQQKCQQExwMKFAMDCgILBQgECQMJuP:AQCEJEjcJCQEGAwyRAQgKAwoAAGAAcAADAAAPCAt:BQMCtQ4Q9jIy:TIRMy9dOS8vAD:tPxI5LysvEhc5MTCHLiuHfcQQxMSHEMTEKQERBzU3ESERARUBESEE9fvOq6sBgAFW:qoCsgHbjP%JAvr%GgEU::7v:jEAAAEAGAAAArkGFAALAG5AHwEEBQUACgcGAAsGBscFABQFBQAEBwEKBAsFQAsQNwu4:8BAIA4QNwUFCwsDCAEDAAUACgGEBQcEBA0MDw1ADVANYA0EXRESOS8zM:0yMi8vAC8:EjkvMy8rKxIXOTEwhy4rh33EEMTEhxDExAEHESERBzU3ESERNwK5nf6YnJwBaJ0DcX79DQImf%l8Awj9xoAA::8Abf:lBWYIAQI2ADYAAAEXAN8AFAF1ABZADgFQNgE2BSYBADc0GgAlKzUAK101::8AX::hBHoGjAI2AFYAAAEWAN%eAAAKtgEANDEaACUrNf::AFoAAAU9CAECNgA9AAABFwDf:%oBdQAWQA4BUAsBCwUmAQANCgUGJSs1ACtdNf::AFQAAARzBowCNgBdAAABFgDfigAACrYBAA0KBQYlKzUAAgGb:ngCvgYUAAMABwAjQBMBAQIABgYFBwYAvgEwCU8JcAkDXS:tOTkALzMvPzMvMTABIREhESERIQK%:t0BI:7dASMC9gMe%GQDHgAAAgAcAAAGPQXRABIAJQBjQEJaFlMjZgJqEXUCeREGHhsIlDALQAtgCwMLCwcakgwDH5IHCXAdAR0dHhN9CgB6AAIAuCcfJ0AnUCcDGwsefwkHtSYQ9jLtOTldEPZd7RE5L10vAC:tP%0SOS9d7Tk5MTBdARQCBwYEIyERIzUzESEyBBcWEgU0JicmJiMjESEVIREzMjY3NjYGPb6Rbf78sv3zoqICHLYBCFqasf5za3Q7e3xhAT3%w2GJgD1pYgLn0P63WEI0AqfpAkE9OF7%wdWT0TsdFf7V6f5wGSE8yQACAFf:3QURBiYAJQA0ANFAkiMjNSNAAUQVQCJ2AXYTcBVwGnAjdiQLJBokHzAENRozH0AEQzRWGFYgZRhkIHAEdBENFRggIwQGAhZACRA3FhYhLKcgDzAPQA9wDwQPDxwGISEcADKYBhZAIwFPF18XbxcDF3AiASIYFxUSBCYfG38bAhtADRA3ICIjAwNAGwFAGwEbGwkmgwO8Ni82AS%DCbs1EPbtXRD27RI5L11dEhc5K10SFzkvXS9dXQA:7T8zLxESOS9d7RI5LytDVFi2ABYQFo8WA11ZFzkxMF0BXQEeARUQACEgABE0Njc%ATMyFhcuAScFJzcuASc1IR4BFzcXBx4BAzQmJy4BIyIGFRQWMzI2BL0mLv7G:tf%6P7BV0xLynBNfjQWYD3%sU3%UI01AccLODDkTI83aPUFAzJrPHh5d3RzdAQgU8Zz:rz%jQEoAQB6v0RBRCEZOYk6hLBhP1URGQQmIl6vOzmM:egaPxAnJ4qBjqW7::8ACQAABdwIAQI2ADwAAAEXAI0AAAF1ABZADgFQCwELBSYBAAsLBQAlKzUAK101::8AHv5kBRcGjAI2AFwAAAEWAI3YAAAKtgEACgoGAiUrNQACAL4AAAWLBdEAEgAhAE9AHlASdQQCG5IvBwEHGpIgDDAMQAwDDAwHCQoDCRN9ALj:wEAQCQw3AAAjQCMBDBoHfwm1IhD2:TIyXREzLyvtAC8:Ejk5L13tL13tMTBdARQGBw4BKwERIREhFTMyFhceAQU0JicuASsBETMyNjc%AQWLR0NR56rh:oABgOqPxVJcYf5zQDE9bGFFXmeHLiYgAxpmvUFPYf76BdHhLzM6uolBWhIWBv5CFCchUwAAAgCq:mQFPgYUABMAIAA:QCtEAkQPRCBSD1ITZQ9kE3kIfxwJF5YREAwAHpcGFgsbFIMAvCIOGwmEDLkhEPb9MjIQ9u0APz:tPz:tMTBdARQGBw4BIyImJxEhESERPgEzMhIBNCYjIgYHER4BMzI2BT5VRUi2aGCGRv6YAWhTrXHS6f6NcHkzbDEkUiiPjAJBi%RKTlApJf4sB7D92kJS:sz%7KSUHx39yw4IpwAAAQDsAhAGBAMcAAMAKEAbAdYCAAAfADAAQABgAHAABgAAUAEBASAFcAUCXS9dMy9dAC:tMTABIREhBgT66AUYAhABDAABAQgAJgXoBQYACwB0uQAC:%CzCxA3Abj:4LMLEDcAuP:gQBMLEDcIIAsQNwcgCxA3BiALEDcLuP:gswsQNwq4:%CzCxA3Cbj:4EAgCxA3BSALEDcEIAsQNwMgCxA3Dwc:B28HAwcwBFAEAgQZL10AL10xMCsrKysrKwErKysrKysJAgcJAScJATcJAQXo:ksBtbv%S:5LuwG1:ku7AbUBtQRL:kv%S7sBtf5LuwG1AbW7:ksBtQAAAQEXAjYD2gXVAAwAKkAVBeYGBgkDCwPmAekFBQIMDAkL5AIDLzPtOTIvLzMvAD:9Mj8zL%0xMAEhNTMRIzUyNjczETMD2v1G2eJyiwnuzwI2vAGqsjtM:R0AAQDmAjYEDQXvAB0AVEA6GgYTFR0YHxojFS0YLRs6A3sGdBF7GAsvAgECHOcB6Q9ACw83Dw8L6BMEAAAwHHAcAhwCCOUWEBYQAi8zMy8v7RI5XTMvAD:tMy8rP:0yXTEwXQEhNT4BNz4BNTQmIyIGByM1PgEzMhYVFAYHDgEHIQQN:NlFljRwN1FPOYk3F0G:YLnJRngiYyQBpgI2vSlgKVdpNjs:MCDtFyaSjFGUaR5HGgAAAQDgAh4D9AXvACsAd0AgGwESJC0BISQ1JEQkVSR7BXMgCSkoEuYPE68TvxMDEwe4:8BALgwPNwcHC%cTIgPqHkAMDzceHhrnIgQX5SUffxIBEg7lEh8oJQQGMABgAAIAAAYvMy9dEhc57S9dLy:tAD:tMy8rPxI57TMvKy9d7Tk5MTBdARQGIyImJzUzHgEzMjY1NCYrATUzMjY1NCYjIgYHIzU%ATMyFhUUBgcVHgED9NnVga43FiqfTGNjQV%ZiUtMU1lCmykXQLJ3stNhTFdtAzyMkiQW2BcvLjgwLMMrMi4pMBbVFid4dlpvGQgRb:::ALP::wjrBdoANgI:pgAANwC7AqUAAAEXAPAE3v3JACxAHgIOGAIPDj8OcA4DDgEgC0ALXwt:CwQLACABXwECARFdNRFdNRFdNQA:Nf::AMcAAAjWBdoANgI:ugAANwC7AsgAAAEXAjsEqf3KADBAHwMCEBgDAkATARMBQAsBAAsgC0ALAwsAIAEwAUABAwERXTURXV01EV01NQA:NTX::wCxAAAJBwXvADYA8dEAADcAuwMnAAABFwI7BNr9ygAmQBkDAjMYAwIgNkA2AjYBAC4gLjAuQC5:LgUuEV01EV01NQA:NTUAAQBlAAAFHQXRABEASkAoDA8JywYGCwKRXwV:BQIFBRALAZEQAwgIAwMAABMOAQUKfw8OLwsBCy9dMzP9MjIvETMvMy85LwA:7S8SOS9d7RI5L%05OTEwASEVIREhFSEVIREhESM1MxEhBR39bAJs:ZQBYP6g:oywsAQIBLH7:uC62:7:AQHbA:X::wBn:%EF4wfZAjYAKgAAARcA2QCcAXUAGkARAVAoASgBEChQKAIAKCgVCSUrXTUAEV01::8AWv5ZBO4GZAI2AEoAAAEWANn9AAAKtgIAOjQdJiUrNf::AHsAAAPjB4kCNgAsAAABFwDa:1YBdQAUQAwBUA0BDQEADg8DCiUrNQARXTUAAQBt:lkFZgXsAEgA47kAIv%AQBMNEDcIgA0QNzwgCQw3BR4JDjcfuP:iQF8JDjcLGBsYOhs2NTQ2ShtFNUQ2WBlRM2UJdgl1E3gXdzF0NhBBQUXIPRwGAgACADc0ERorBh0DPyEBISEl1h0EIAcwB3AHAwcHC9YDE0BASLE6ICvRGhHRGiADOjYFNLj:wEAJCQ43NDRKBrdJEOQRMy8rFzntL%0vL%0zLwA:7TMvXT:tMy9dERIXOUNUWEAZBCsUKzoRNStKEUUrWhFVK2sRZSt7EXQrDF1ZQ1RYtAcrFysCXVk::TIvMTBdKysrASsrBQ4BIyIkJxEzFgQzMjY3PgE1NCYnLgEnLgE1NAAhMgQXESMmJCMiBgcOARUUFhceARceARUUBgceARUUBiMiJic1Mx4BMzI2NQMZGDYauf7teCp3ASeII3IkLDlTUFS7UrylAXUBJZMBH2kpWv77iDBfLCc4Wn1SmFaro72zAgPHoCOFLRcYXCpQVRUCAj8yAWVfZgsPEjY1MUcTFCMbPdGb0AEHOSv%qUhhDRIPPSc7PxoRHx04wZqc6DoVQRairwsNyAsYU00AAAEAX:5ZBHoEggBFAKNAFzIvSRhHL2IzeQt5G3UjdDMIOSAJDDcfuP:gQCkOEDcFIA4QNz4%Qsg6HDsRAREANDEaKAYdA1AhASFACRA3ISElpx0QB7j:wEAcCRA3BwcOpwMWPT1FsTchKIMaEYMaIQM3MwUHMbj:wEAKCQ43MTFHcEcBBy9dETMvKxIXOe0v7S8v7TMvAD:tMy8rP%0zLytdERIXOV0::TIvMTArKytdBQ4BIyImJxEzHgEXHgEzMjY1NCYnLgEnLgE1NCQhMhYXESMuASMiBhUUFhceARceARUUBgceARUUBiMiJic1Mx4BMzI2NQKZGDUZlvRKIRtHQTiOUWpmPFQpiDiZlAEzAQp%50EfUM1pV3c2ZDd:QI6IiHwBBMegI4UtFxhcKlBVGQICNiIBKBMtGhYiLy4pJREIFg8oqX6i1zMd:uQ3RTAsKCoVCxUQJZ93cawwFEIXoq8LDcgLGFNNAP::AGf:4wVuCAECNgAmAAABFwCNAGYBdQAYQA8BUDcBNwFANwEANzUKEiUrXTUAEV01::8AWP:iBHEGjAI2AEYAAAEWAI3pAAAPQAoBMCsBACsoCg8lK101AP::AGf:4wVuCAECNgAmAAABFwDfAHQBdQAUQAwBUDYBNgEANzQJEiUrNQARXTX::wBY:%IEcQaMAjYARgAAARYA39AAAA9ACgFAKwEAKygIDyUrXTUAAAIAWv:hBW8GFAAbACgAVkA2SgpKInEQAygqDRA3AyANDzcbGBLKFRUOFgAglw4QASaWBRYUGR0RFBUEAoQZGAC6KiODCLspEPbtEPYyMv0XMi8vAD:tLz:tPxI5L%05OTEwKytdKQE1DgEjIgIRNDY3PgEzMhYXNSE1ITUhFTMVIwERLgEjIgYVFBYzMjYE7v6YXaJqzfZTSETCYWWBRP66AUYBaIGB:pgmVCOOjnJ%MW51TEgBPAEMj91PS1MrIZ:PcHDP:GECJxAOsZ2llSUAAAH:8AZcBcAHLwADABG2AcoCAAAFAi8RMy8AL%0xMAEhNSEFwPowBdAGXNMAAQC3AdACLQNZAAMAF0ANAtkBANAAAU8BfwEDAS9d7QAv7TEwASERIQIt:ooBdgHQAYkA::8AGAAABh4H2QI2ACQAAAEXANkAQgF1ABRADAJQDgEOAgARCwYHJSs1ABFdNf::AFb:4gS3BmQCNgBEAAABFgDZyQAAGUAUAgA3EDcgN0A3UDdgNwYANzEoLiUrXTUAAAIAGP5fBocF0QAbAB4BY7MAAgACQ1RYQFodHR4cAgGBCAcIHR4DBIIFBQY3BjgHSwZEB1sGVAdtBmIHfgZxBwpNBU0IfQV9CAQYIAkMNwOTcB4BHggBHh0EBXoGAQYDBRMTD8gXHBQUDLAaGgUFBQoIAgi4:99AEgoQNwUhChA3CA8gAQggHyABBS9dETNdLysrXRI5L%0zLwA::TIvLz9dEhc5L13tMTArXQFdhxD9wMDAhxD9wMAIwFlDVVhAZT8dTR0CHR0eHAIBgQgHCB0eAwSCBQUGNwY4B0sGRAdbBlQHbQZiB34GcQcKGCAJDDccAgOTcB4BHggBHh0JBAcHBXoGAQYDBRMTD8gXHBQUDLAaGgECAwQGBxwdHgoFBQUKCAIIuP:fQBIKEDcFIQoQNwgPIAEIIB8gAQUBL10RM10vKytdEhc5L%0zLwA::TIvLz9dEhc5L13tOTkrAV2HEP3AwMCHEP3AwAjAAF0xMFkkNychAyEBIQEjDgEVFBYzMjY3MxUOASMiJjU0CwIEbgpO:dhn:n0CJgG6AibvAgJgVSpfFQkwgCOrtoa3tywd5P7TBdH6LxYoFj1SGArIDQulmTsCZgIW:eoAAAIAVv5fBX4EgwAPAEMAgUBZDxgFLBkYSQVJHFkFWRxrBWkPaxx2JXIpcC0NPyAJDDcB8R8fKxYnQA0PNycnI6crEA2nFhYwOjo2yD4cOzszsEEBH0EDEIQvukUvRQEPKB8oAigoB4QZu0QQ9u0zL11dEPb9FzIv7TMvAD:9Mi8vP%0::TIvKxESOS:tMTArXQE1DgEHDgEVFBYXHgEzMjYXDgEHDgEjIiY1NDY3NiQ3NTQmIyIGByMRNiQzIAQVESMOARUUFjMyNjczFQ4BIyImNTQ2A1JJqiw2OQwYFkFENm8qHVUnNXJEoNhuZWQBKJ%YlFnKLCE5AQGBATMBEZECAmBVKl8VCTCAI6u2BwEl6gYVDhFBNSMsFBQTLIoWPhIYF8aae5wtLCcJBl1HPxEBDw8pvcr9BBYoFj1SGArIDQulmUp9AP::AL4AAAY9CAECNgAnAAABFwDfAFsBdQAUQAwCIFAgAQIAIR4JFCUrNQBdETUAAwBa:%EHbQYUABMAIAAkAHRALEwhViJmIgMiFgkMN0oKShpxEAMgKg0QNwMgDQ83IiIhEgAYlw4QAR6WBRYhuP:AQCAKDDchISMRFAKEoADQAAIjAACPAJ8AAwAwJgEbgwi7JRD07V0vXTNd:TIyLzMvKwA:7S8:7T8zMy8xMCsrXQErXSkBNQ4BIyICETQ2Nz4BMzIWFxEhAREuASMiBhUUFjMyNgkBIxME7v6YXaJqzfZTSETCYWWBRAFo:pgmVCOOjnJ%MW4EEf7d6p11TEgBPAEMj91PS1MrIQHe%yICJxAOsZ2llSUE:P2zAk3::wAcAAAGPQXRAhYA5wAAAAEAvv5fBUYF0QAgAGhALhwgCQw3CZEwBkAGYAZwBoAGsAYGBgYBBZECAxcXE8gbHAwKkQEYGBCwHh4MAQi4:8BADxAVNwgECAwMIgYJfwG1IRD0:TIRMy8zMy8rERI5L%0zLwAv7TM::TIvP%0SOS9d7TEwKykBESERIREhESERIREhDgEVFBYzMjY3MxUOASMiJjU0NgMX:acENf1JAoX9ewK3:vsBA2BVKl8VCTCAI6u2BAXR:uD%::7g:pD%4AwuGj1SGArIDQulmSMvAAACAFj%XwT8BIYAKQAwAJNAaiQYKyAzGDwgQw5MEEMYTRtNIFobWyBVL2AUaRxrH2ArdA50FHQYeR8UByAJDDcX8TAwDC2nEhAiDAAeEB5THmMecx4FHh4amAwWAgIoyAYcAwMlsAkNCSEDDx8fKoQWvDIvMgEwF4QPuzEQ9v0yXRD07TMvEhc5L%0zLwA::TIvP%0zL10SOT:tEjkv7TEwK10ENzMVDgEjIiY1NDY3JAAREAAhIAARFSEeATMyNjczEQ4BBwYUFRQWMzIDLgEjIgYHBMkVCTCAI6u2AgH%2v7IAVUBKQESART8yAi5tHLWPihbp1kBYFUq1ANqcGiGCMsKyA0LpZkXIBEVASwBBQEWAUX%6:78foSMUi:%3yQsCAsWGj1SA6Vxcmx3::8AvgAABPMIAQI2ACgAAAEXAN8ABQF1ABRADAEOUA4BAQAPDAIDJSs1AF0RNf::AFj:4gT8BowCNgBIAAABFgDf8QAAE0AOAkAggCCQIAMAIB0SEiUrXTUA::8AvgAABPAIAQI2AC8AAAEXAI3:agF1ABRADAEIUAgBAQAICAMDJSs1AF0RNf::AHkAAALPCAECNgBPAAABFwCN:pQBdQBDQBdAAkADAnACcAOgAqADwALAA:AC8AMIA7j:wLMJDTcCuP:AQBMJDTcBCG8InwjvCAMBAAYGAgMlKzUAXRE1KytdcQAAAgC%AAAFCwYUAAUACQBQQBdKBlYHZgcDByAJDDcICAkBAgMEkQEIBrj:wEAZCgw3BgY:CAEIAABgAHAAAwAACwgEfwG1ChD27TMRMy9dL10zLysAP%0:PzMvMTABK10pAREhESETASMTBPD7zgGAArIb:t3qnQXR%08E9P2zAk0AAAIAqgAABJEGFAADAAcAPEATSgRWBWYFAwUgCQw3BQUEAgABBLj:wEAPCgw3BAQGBgCEAAEQAQIBL139Mi8zLysALz8zMy8xMAErXSkBESkBASMTAhL%mAFoAn:%3eqdBhT9swJNAAIAvgAABPAF0QAFAAkAPkAlB9kvCAEICAECAwSRAQgG0CAHAQcHAQAAYABwAAMAAAsEfwG1ChD27REzL10SOS9d7QA:7T8SOS9d7TEwKQERIREhAyERIQTw%84BgAKyKv6KAXYF0ftPASgBiQAAAgCqAAAETgYUAAMABwA0QCEF2QYGAQIBAQgE0F8GAQYGAIQAARABfwEDAQ8JMAlACQNdL139Mi9d7QA:PxI5L%0xMCkBESEBIREhAhL%mAFoAjz%lAFsBhT8NAGJ::8AvgAABggIAQI2ADEAAAEXAI0AqAF1ABhAEAFQDAEBMAxADAIADAwGCCUrXTUAXTX::wCqAAAFEgaMAjYAUQAAARYAjRAAAAq2AQAaGQ4UJSs1::8AvgAABggIAQI2ADEAAAEXAN8AnQF1ABRADAEMUAwBAQANCgUJJSs1AF0RNf::AKoAAAUSBowCNgBRAAABFgDfDQAACrYBABoXDhYlKzX::wBn:%EGZggBAjYAMgAAARcA3QCWAXUAHkATAwIqUCoBAwIgKkAqAgAqJQYAJStdNTUAXRE1Nf::AFj:3QUmBowCNgBSAAABFgDd9QAAE0ANAwJAKnAqAgAqJQYAJStdNTUA::8AvgAABlgIAQI2ADUAAAEXAI0AUAF1ABRADAIjUCMBAgAjIhUYJSs1AF0RNf::AKoAAAPYBowCNgBVAAABFwCN:2AAAAARQAwBXxZvFgIAFhUKBSUrXTUA::8AvgAABlgIAQI2ADUAAAEXAN8AOQF1ABRADAIiUCIBAgAjIBUcJSs1AF0RNf::AGoAAAPnBowCNgBVAAABFwDf:08AAAAKtgEAFhMKDyUrNf::AG3:5QVmCAECNgA2AAABFwCNAEQBdQAUQAwBNlA2AQEANzYaHyUrNQBdETX::wBf:%EEegaMAjYAVgAAARYAjbcAAAq2AQA0MxojJSs1AAEAKf5ZBUsF0QAcAFFAMgggCQw3DQ0RUwkcARnXGwMCGAwMBrEUQAkQNxQUGQDiAdAa4n8ZARkZHh0QHkAefx4DXRESOS9d5P3kEjkvK:0yLwAvLz:9Mj:9Mi8xMCsBIREzHgEVFAYjIiYnNTMeATMyNjU0JicjESERIQVL:i9ZAQTHoCOFLRcYXCpQVQEB%v4vBSIEsftjEj8Zoq8LDcgLGFNNFyoJBLEBIAABACv%WQN4BaQALwBpQD8KBRsFAiQgCQw3DwtwCwILEA0HpwsKDxsbF6cDFikpLcglHCgoALEiIgQHDkAcARwcMQ8xAQgNEIQKCG8HAQcvXTMz:TIvXREzL10zEjk5L%0zLwA::TIvP:0yLz8z7Tk5L10xMCtdBTQmNS4BNREjNTMRIREhFSERFBYXHgEzMjY3MxUOAQceARUUBiMiJic1Mx4BMzI2AlABysaUlAFoAVH%rwIPDkdEHFsSHhIlEwEDx6AjhS0XGFwqUFVKCxwNA6zJAg30AUH%v:T%cjtYIyMpGAr3BAkDEi0Roq8LDcgLGFP::wApAAAFSwgBAjYANwAAARcA3::gAXUAFEAMAQpQCgEBAAsIBgclKzUAXRE1AAIAK::qBJgHNgAbAB8AgUBVSB5VHWUddR0EHRQKDTcKBRsFAk8fAR8fHh4KDwtwCwILEA0HpwsKDxsbF6cDFg8cMBxfHG8cBBwcHh4OMABAAFAAfwAEAAAhDyEBCA0QhAoIbwcBBy9dMzP9Mi9dETMvXTM5LzMvXQA::TIvPzPtOTkvXRI5LzMvXTEwXQErXSUOASMiJjURIzUzESERIRUhERQWFx4BMzI2NzMBAyMTA3g6gl7SzZSUAWgBUf6vAg8OR0QcWxIeASDp4HcKDxGqzgIN9AFB:r:0:nI7WCMjKRgKBjX93QIj::8Aqf:hBdYH8AI2ADgAAAEXANsAZwE2ACRAGQIBFSAVAQ8VMBVvFXAV4BUFAgEAGBIHESUrNTUAXXIRNTX::wCh:%EFCQa6AjYAWAAAARYA2:4AABZADAIBGg8CAQAdFwkWJQErNTUAPzU1::8Aqf:hBdYIAQI2ADgAAAEXAN0AbQF1ACpACQIBFVAVAQIBGLj:wEAQDhg3IBiPGM8YAwAYEwcRJStdKzU1AF0RNTX::wCh:%EFCQaMAjYAWAAAARYA3QsAAAy3AgEAHRgGASUrNTX::wBaAAAFPQgBAjYAPQAAARcAjQAlAXUAIkAKAQ1QDQEBXw0BDbj:wEAJCRk3AA0MBQYlKytdNQBdETX::wBUAAAEcwaMAjYAXQAAARYAjcQAABqxAQ24:8BADg0ZNwANbw0CAA0MBQYlK10rNf::AFoAAAU9B4kCNgA9AAABFwDa::8BdQAYQA8BC1ALAQFwDAEADA0FBiUrXTUAXRE1::8AVAAABHMGFAI2AF0AAAEWANqeAAAKtgEADA0FBiUrNQABAL4AAATwBdEABQAjQBQDAZEEAwAAYABwAAMAAAcCfwO1BhD27REzL10AP%0vMTABIREhESEE8P1O:oAEMgSx%08F0QAAAwBn:%EGZgXwAAsAIwAnAGBAQycFKQcpC3ABcAV:B38LByWRMCZAJmAmAyYmAxWSCgkaCSoJAwkEIZIFAxUDJQMDAxMnJicmBg99ALgpPykBG30GtygQ9u1dEPTtEjk5Ly8AP13tP13tEjkvXe0xMF0BEAAhIAAREAAhIAABPgE1NCYnLgEjIgYHDgEVFBYXHgEzMjYTIREhBmb%aP6Y:pn%aAGYAWcBZgGa:gM4Nj4yM4VISYE2Mj89MjKGSkqGHf4lAdsC6P6c:l0BowFkAWcBof5f:SBEuX2GvDo8NjQ8OMWChbs7Ozg5ATABNAAAAwBd::IHQQXiAB0AJAArAGJAPyEbJpRqGJAYoBiwGAQYIgkllGUMnwwCDBgMCxkDCx59A%4JJRgbIgQJfwwpfRLuAAywDAIMDC0sPy1QLXAtA10REjkvXfTtEO0XORD07QAvPxI5OS9d7Tk5L13tOTkxMAEeARUUBgcOAQcVITUuAScuATU0Njc2JDc1IRUeAQM0JicRPgEFEQ4BFRQWBopYX2JcXvWi:oKd:ltbYl5ZVwEGnwF%pf18mI6lgf1ckpSFBKNK2YyK2k1NVgujowtXTU3Yi4zSTElXDJiYCVP%DJC0E:08HbHOAsQWq5adswACAFr:4QTuBIIAEAAdAEpAFBscKxw6HEoXBB0qChA3AyAKDzcNuP:gQBoKDzcPDxWWCxABG5YFFg4RAoQAuh8Ygwi7HhD27RD9:TIyAD:tLz:tPzEwKysrXSkBNQ4BIyICERAAMzIWFzUhAREuASMiBhUUFjMyNgTu:phonWTQ8wEI0FiQbAFo:pgsVTSEgHN9MW51U0EBPQELAREBSDVfdfzTAfkiIZ%ds5AlAAACAFj:3QUlBhQAGQAoAH9AGRsPKw87D0cERRhKHGgQeA18IQkgSgsQNx24:8BAHxETNx0ZHQAPEA9JD2APBA8PBhIWmBMAJphGBgEGFha4:6xAFw4QNxQdDxMagwMWFBMDvCoTEyODCbspEPbtMy8Q5hE5ORDtETk5LysAP13tP:0yEjkvXTMzLysxMCtdAR4BFRAAISAAETQ2Nz4BNy4BJzUhFSEVHgEDNCYnDgEHDgEVFBYzMjYEeE1g:rP%6P7f:rlTSUS%YWG:WQPu:kNWzYNKYjJuLS47hm5ugAP%VtqS:un%uAE0AQWNvkZCUBJIcCzl%AY2lP3fc8FPCTMsLY5io66tAAABAFv:4QRvBIMAPQCvQBINBwUSGQcDASANEDc6Kg0QNx24:9azDRA3GLj:4EAlDRA3DCynjyvPK98rAysrAxZ:GgEaQAoMNxoaHpgWEGA9cD0CPbj:wEAkCQw3PT05mAMWZAx0DAIZQCtQKwIrQAkMNyskgxAQDCsZBAkAuP:AQA4JEDcAAD8vPwEzgwm7PhD27V0RMy8rEhc5L%0vK10vXQA:7TMvK10:7TMvK10REjkvXe05MTArKysrXSUOASMiJicuATU0Njc1LgE1NDY3PgEzMhYXESMuASMiBgcOARUUFhceATsBFSMiBgcOARUUFhceATMyNjczBG913ZhsyE1OW3Z1W2tjSUfHao3VPicxs2EvSh4gKzEkKVk1fak:ViUiJzAnJlsxZ8o7JzgqLSInJ4FdYpAlBxqEW1l5JCMkLxL%9Bg5CwoLLB8rLAcJAeQFDAszKSQxDg0LQyYAAgBY:90FxASGABEAKQBcQBYzAUMBRBhzAQQOpw0PG5gJECeYAxYPuP:gQBALDzcVgwkMDwMGMACPAAIAuP:AQBAPEzcAAA0NKwArASGDBrsqEPbtXREzLzMvK10SFzntKwA:7T:tP%0xMF0BEAAhIAAREAAhMhYXIRUhHgEBPgE1NCYnLgEjIgYHDgEVFBYXHgEzMjYFJv69:tz%3P69AUUBIj%AQAIG:vYqQv5FIyMkICBaNDRRJSEnIiEgWTkxWQIx:uv%wQE:ARUBFwE%ExD0Q6f%myt5a2OGKCkiHConiGdchyknJCEAAQAKAAAEPgRjAAcAMEAbAwEEpwYPAAUAAgKEBQADEAMCAwMJCE8JcAkCXRESOS9dxO0QxC8vAD:9Mi8xMAEhESERITUhBD7%mv6Y:poENANv:JEDb:QAAAIAWP5kBvkEgwAdACQAcEArbw9:DwICDhIOIA4%HT4fTh1OHwchpxoQDw8XIqcGNANEA2YDdgMEAwUbEbj:wEAfCQ03EREiFwSEBQUMHoMAvCYPJj8mUCZwJgQUgwy7JRD27V0Q9O0SOS:tOTkzLysAPy9dM:0yPz:tMTBdAV0BEAAFESERLgEnLgE1NBI3IRUGAhUUFhcRPgEzIAABNCYnET4BBvn%m:7E:pqQ8ltZZG5yAW9ieJaPF5BlAXIBif6NkpyliQJI:vv%vhT%dwGMC1RKScyBogEXeyFa:v2Hr7QZA5oBBv7n:uaUpwn9SRS7AAAC::D%WQXA:64AAwAHACBADwLvAQEIBu8FHAQAAAkFAi8zETMvMwA:7RI5L%0xMAUhNSERITUhBcD6MAXQ%jAF0Mp4:qt4AP::AMsAAATVBdEANgAEAAABFwAEAmgAAAAeQBMDAgANzw3:DQMNAQAABQEFIBEBXS9dNTUvXTU1AAEAngJUBDoF8AAWAFy5ABT:4EATCQw3QxFTEXAFcBR1FeAV9hQHFbj:4EAkCQw3ARATcA0BDQ0IzBMEDgMBvrAAwAACAAAYEAu%AA2wDQINL139MhEzL13tAD8:7TMvXRI5MzEwK10BKwEhETQmJy4BIyIGBxEhESEVPgEzMhYVBDr%1gsOEEM1JFQx:tgBKE6PWZimAlQBvjdsGR0cGR39gwODYztBrKcAAgC9:%EKeQXRAE4AXQEXQCEKGARNGxgTTT4YMU1EE0oYSkhETWcXaU1:OQ0LKg4QN0K4:9ZACQ4QNwUgDhA3Pbj:4EA7DhA3EQAaRgQ7A1A:AT9ACRA3Pz9DpztPNQE1OzUeNyGnTzRwNAI0JDE0AyxXp0ApUCkCKSkrVpgsAwe4:8BALQkQNwcHDqcDEyArNzQfhAAgECACICAaMwYGRoQ4HT4vGj8anxoDGj4aPhGEALj:wEAfCQ43AABfD18BVjNmMwJPhCIPMwEzM1YqhBArASu1XhD2Xf0yMy9dOe1dXREzLyvtMzMvL10SOTntMy8REjkvXe05OQAvLz:tMy8rP%0SOS9d7RIXOS9d7Tk5MzMvXS:tMy8rXRESFzkxMCsrKytdARQGIyImJxEzHgEXHgEzMjY1NCYnLgEnLgE1NDY1IxEhESMOAQcOASsBESERITIWFx4BFzM1IRUhPgEzMhYXESMuASMiBhUUFhceARceAQE0JicuASsBETMyNjc%AQp5%%V3xVAVEkguL2k6XT88YxhNGXFvA6X%pZwQGxdJwIyG:pgB8XapQkhTBHQBVwExLr5LY8U5F0%DR0lSTEEdTBiLafjNICQfWDYwHU5eIR4ZAVaj0jQnARoPMRYXIDkoJzUiCBsKLKl2DxcE:LYDSh8uF01S:bkF0SsuMZ1p19cZKC8c:u49OTMsLjgWChoIMKECUzhMGhcM:mcQJyREAAIAe::pB2QF0QALACQAYkA8aQ4BIZMjAxYWGpMSEwkEkwYDCgOTASNACQ43IxYjFgshf4AkASQkJg8mHyZAJgMIC6EKfwMFAqEAAwEDL130MhD99DJdETMvXe0SOTkvLysAL:0yP:0yP:0yLz:tMTBdKQERMxEjESERIxEzJRQGBw4BIyImJxEzHgEzMjY3PgE1ESERIQPj:Jj09ANo9PQDgTw8Pbh:WZQ8ICVPRzlMExUN:t0CowEIA8EBCP74:D%tYKw8PkYPDgEkEx43LjN4UQJlARIA::8AoP5ZBSkGFAA2AEwAAAEXAE0CmQAAABlAEAMCIBoBIBoBGrogcCCvIAJdEPRdXTQ0AAAC:%UAAAX5BhQAFgAaAHFAJEwXVhhmGAMYFgkMNwEVExU8EXAVBBgYFwABEA0IlRMQDg8NF7j:wEAlCgw3FxcwGQEZEAuEgA2:DQIZPw3PDe8NAw0NAoQAuhwPHB8cAl0Q9u0zL10zXf0yL10zLysALz8:7RI5OT8zLzEwXQErXSkBETQmJy4BIyIGBxEhESEVPgEzMhYVCQEjEwX5:pYOERRNRTFlO:6YAWhgsWy2zfv5:t3qnQItRIcgJSIgI:zkBGN8S1DU0wM5:bMCTQAAAQB1A1ICwwXRAAMALbkAAP:aswkNNwO4:9ZAEAkNNwEBAwNwAAEAAAACAQIvXTMvXQA:My8xMAErKwkBIxMCw:6g7uAF0f2BAn8AAAIAdQNSBN8F0QADAAcAWbkABP:aswkNNwe4:9azCQ03ALj:2rMJDTcDuP:WQCAJDTcGBwMBAQMDcAABAAAPAgECcAQBBAIEAAYBBh8JAV0vXTMzL10vXTMvXQA:My8SOTkxMAErKysrAQEjEyMBIxME3:6g7uCu:qDu4AXR:YECf:2BAn8ABACR:%EJngXuABsAHwArADcAwEAkVRKHEgIbQA4QNw1ADhA3HxwdHcEeHxQeHh8JAwYJCSMGKQQbuP:AQF0KDTcNQAoNN38NcBsCGxsXyn8DAQMNAw0RygkHHwYvynApASkpNcojGR4jHCweOhw1HkMcTB5zHHweCBweMr4mJiy%HB4GICA5DQAAEABRAAMAABS%AAZmBnYGAwYvXe0zL10zETMvEjk57TMv7S8vXQAvP%0zL13tPz:tMzMvL13tMy9dKytdMTCHBS4rh33EASsrXQEOASMiJDU0ADMyFhcVIy4BIyIGFRQWMzI2NzMJASEJARQGIyImNTQ2MzIWBTQmIyIGFRQWMzI2A7RKjk:v:vMBC%pPmEcuOXFBaHJ5ZU1wKi4DZPz0:vMDDAOT5tzj5ere4OL%2UpUVEpKVFRKAmslI:zm5AEFJSX4OjiXgoyGPTMCbvovBdH7%fnw8:L37%:2oHBwoaFwcAAAAgAP:%gDFQXTABsAKwCLQBskClQKYwqGA4YdBRcgCQ43FCAMEDcACxALAhy4:8CzCRA3Bbj:60A1CQ83ABoBCxwFGxsFFhISD8UWCSXFBQMSEh%vDwgBLwiPCJ8I:wgECBsAHI8LAQu9GgAIAwG4:8CzEBI3AS8rFzP9XTIvMy9dce0zLwA:7T:tMy8REjkvFzkrK10xMCsrXRM3ETQ2MzIWFRQGBxEUFjMyNjcVDgEjIiY9AQcBPgE1NCYnLgEjIgYHDgEVD7G%o3h8hLEqGxlNZDeCObCNRwFnZC0KCgkaDw8cCAsNAcfAAbOx6IJtXO7O:i5MKBpJqiwrj4CqSwJckGo3Hh8ODA8WDhVwWAACAJIAAARCA7AAAwAHACVAFQfwAQEF8AMH8AEBBfAAAxADMAMDAy9d7TMv7QAv7TMv7TEwEyERIRMRIRGSA7D8UEwDGAOw:FADZPzoAxgAAAEAgwG9AlIDjAADABdACwICAwAAAAIwAgICL10zLwAvMy8xMAERIRECUv4xA4z%MQHPAAACAIMBvQJSA4wAAwAHACNAEwbwAgIF8AME8AAABvAAAjACAgIvXe0zL%0AL%0zL%0xMAERIREFIREhAlL%MQGD:skBNwOM:jEBz0z%yQABALEAiAQiA:kACwAhQBQJCQ8DLwNPAwMDBgYAAJAAoAADAC9dMy8AL10zLzEwEzQAMzIAFRQAIyIAsQECt7YBAv7%trf%:gJAtwEC:v63tv7%AQIAAAIAcAGqAmYDoAALABcAZUALBhAjJjcGEBcaNwC4::CzIyY3ALj:8EAVFxo3EvAGBgzwAAkQFxo3CRALDjcDuP:wsxcaNwO4::BAEwsONxXwAwMP8AAJIAkwCWAJBAkvXe0zL%0rKysrAC:tMy:tKysrKzEwATIWFRQGIyImNTQ2FyIGFRQWMzI2NTQmAWtok5NoaJOSaUlmZ0hIZ2YDoJNoaJOTaGiTTGdISWZmSUhnAP::ABgAAAYeB4kCNgAkAAABFwDYAEMBdQAeQBUCDFAMAQAMEAwgDEAMBAIADAsGByUrNV0AXRE1::8AVv:iBLcGFAI2AEQAAAEWANjPAAAZQBQCEDMgM0AzUDNgM7AzBgAzNCguJStdNQD::wBn:%MFbggBAjYAJgAAARcA1gBwAXUAFEAMATdQNwEBADg0CRIlKzUAXRE1::8AWP:iBHMGjAI2AEYAAAEWANbcAAATQA4BACwgLEAsAwAsKAMjJStdNQD::wBn:%MFbgeJAjYAJgAAARcA2gB3AXUAGEAPATVQNQEBIDYBADY3CRIlK101AF0RNf::AFj:4gRxBhQCNgBGAAABFgDa3AAAEUAMAQApMCkCACkoAyUlK101AP::AL4AAATzB4kCNgAoAAABFwDY::4BdQAkQBwBUA0BAAwADxAMEA8wDDAPUA1wDQgBAA0MAgMlKzVdAF01::8AWP:iBPwGFAI2AEgAAAEWANjrAAAXQBIAHQAgMB0wIHAeBQIAHyAREyUrNV0A::8AvgAABPMH2QI2ACgAAAEXANkABQF1ABRADAEPUA8BAQASDAIDJSs1AF0RNf::AFj:4gT8BmQCNgBIAAABFgDZ%AAAE0AOAkAjUCNgIwMAIx0SEiUrXTUA::8AvgAABPMHiQI2ACgAAAEXANoADAF1ABRADAENUA0BAQAODwIDJSs1AF0RNf::AFj:4gT8BhQCNgBIAAABFgDa7QAAD0AKAmAfAQAfIBISJStdNQD::wBn:%EF4wgBAjYAKgAAARcA1gCmAXUAHEAUAVApAQEAKRApICl:KQQAKSUDAyUrXTUAXTX::wBa:lkE7gaMAjYASgAAARYA1gEAAAq2AgA4NB0mJSs1::8AZ::hBeMHiQI2ACoAAAEXANoAoQF1ABpAEQEmUCYBAQAnECcCACcoAwMlK101AF0RNf::AFr%WQTuBhQCNgBKAAABFgDaAgAACrYCADY3HSYlKzUAAQBn:lkF4wXuADgAu7kAD:%EQAkNEDctIAkMNwu4:%BAKAkMNyMFKwcrFyMbWBZUHFkmZgVpB3EFfQd6EnEbDSgDIpIvI28jAiO4:8BASAkQNyMjCQMvDT8Nbw1:DQQNDRSSCQQdkwMTMjI2yC4cMTEAsSsvI08jAiMEKycjBCUGDQ0hfiUlOkA6ARp9BQYVBiUGAwa3ORD0Xe1dETMv7TMvERIXOS9dL%0zLwA::TIvP%0:7TMvXRESOS8rXe0SOTEwXSsrASsFPAEnIAAREAAhMgQXESMuAScuASMiBgcOARUUACEyNjcRIREhEQ4BBx4BFRQGIyImJzUzHgEzMjYDkwL%hP5SAbIBhJMBCqMrHGwyOptXZqZCP0kBBgEAFjUW:tcCr0LEbAICx6AjhS0XGFwqUFVKFxAGAZsBbAFbAak1T:6jFU0bIC48Pjy5eff%%gICASQBGf0hGTcRFB0Zoq8LDcgLGFMAAAMAWv5ZBO4GjAAmADMAOABpQENOFk4tTjNdFl0zaRZqM30Iegx1I3ozCzQ0NTUVJBgrlyEQJg8xlhgKCg6XBhxwNAE0NDYJNgkbJCcVhAC6Oi6DG7s5EPbtEPb9MjISOTkvLzMvXQA::TIvL%0:P%0SOTkzLzMvMTBdJRQGBw4BIyImJxEzHgEzMjY3PgE9AQ4BIyIAETQ2Nz4BMzIWFzchAREuASMiBhUUFjMyNhMDITUBBO5aUVHlkHXjUyxCvktkfSEfHEGeYez:AE5HQsFlW5U9DQFd:pgfWiSOjnl3Nmiw4:6hAUyBntg9PjccFAEZGislIiBkRhU1PgEcASKLyktGTismMvz:Af0ND6OSooAiBUb%dxQBdQD::wC%AAAF9QgBAjYAKwAAARcA1gCBAXUAEkALAVAQAQEAEAwGCyUrNQBdNf::AKoAAAUSCAECNgBLAAABFwDWABsBdQAsQCJADkAPAqAOoA:ADsAP8A7wDwYBUBufG%8bAxsBABsXDgAlKzUAEV01XXEAAgA5AAAGfQXRABMAFwBiQEAOEgEWBAjLCwsMBZEwF0AXYBdwF4AXsBcGFwsQFwMEBwwDBwAAEg8VAwN:ArYZABlQGWAZAwkJCw4WAwZ:B7UYEPbtFzkzL10Q9u0XOTMvAC8:Ehc5L13tEjkv7Rc5MTABIxEhESERIREjNTM1IRUhNSEVMwE1IRUGfYj%gP3J:oCFhQGAAjcBgIj9%P3JBFD7sAKQ:XAEUNipqamp:oigoAAAAQApAAAFEgYUAB4AUUAxAR0THTwZcB0EFxQOyhEREgEYDQiVGxASAA0VDwKEALogMCBgIAIUFRcDC4QRDw25HxD2MjL9FzJdEPbtLy8ALz8:7RI5ORI5L%05OTEwXSEhETQmJyYmIyIGBxEhESM1MzUhFSEVIRU2NjMyFhUFEv6WDhEUTUUxZTv%mIGBAWgBRv66YLFsts0CLUSHICUiICP85ATVz3Bwz%5LUNTTAAACAHYAAAPtB8cACwAlAGFAOgwMFcoPHHAcAhwZHBkiyg8PCQSTBgMKA5MBJbAMGLAZDAgLoQp:GQUCoQADAQMDJyYfJzAnQCdwJwRdERI5L13tMjL97TIyL%0v7QAv7TI:7TIzL%0zMy8vXe0zLzEwKQERMxEjESERIxEzEw4BIyImJy4BIyIGByM%ATMyFhceATMyNjcD4:yY9PQDaPT0CgqRgi9VIx9LGTEhA9sGnHowViQlQBswJAIBCAPBAQj%%Pw:Br%poyUVEydAOpizIxUUI0A2AAAC::YAAALIBkMAAwAdAEVAKQQEDcgPFAEUERQRGsgHBwIPAR2vBBCvEQQAhBEAARABAgFQH2AfcB8DXS9dM:0yL%0v7QAvPzMv7TMzLy9d7TMvMTApAREhEw4BIyImJy4BIyIGByM%ATMyFhceATMyNjcCEv6YAWi2Cm1xKkccGzsXIx8CrAVzbylIHyMtGioZAgRjAeCrjSUVFCYySJGmIxUXIEE1AAACAHsAAAPjB4kACwAPAExALQ:KDAwJBJMGAwoDkwEPQA4BDg8IC6EKfwMOBQKhAAMBAwMREB8RMBFAEXARBF0REjkvXfQyMhD99DIyL3EvAC:9Mj:9MjMv7TEwKQERMxEjESERIxEzAyE1IQPj:Jj09ANo9PQj:N4DIgEIA8EBCP74:D8Fr9IAAgAtAAACjwYUAAMABwAsQBoGygUFAg8BBwYHAIQGAAEQAQIBUAlgCXAJA10vXTP9Mi8vAC8:My:tMTApAREhNyE1IQIS:pgBaH39ngJiBGPf0gAAAgB7AAAD4wfZAAsAGQBjuQAW::RAOg4QNwxQEmAScBIDEhIWxg8PCQSTBgMKA5MBGbEME7ESDAgLoQp:EgUCoQADAQMDGxofGzAbQBtwGwRdERI5L13tMjL97TIyL%0v7QAv7TI:7TIzL%0zL10zKzEwKQERMxEjESERIxEzAxQGIyImNTMUFjMyNjUD4:yY9PQDaPT0L821wMPfTlZUTwEIA8EBCP74:D8G0bbHx7ZjaWljAAACABwAAAKhBmQAAwARADhAIQQKCg7FBwcCDwERrwQLrwoEAIQKAAEQAQIBUBNgE3ATA10vXTP9Mi:tL%0ALz8zL%0zLzMxMCkBESETFAYjIiY1MxQWMzI2NQIS:pgBaI%pmaGiujpPSj4EYwIBtcLBtmZ1d2QAAQB7:l8EKAXRACAAWEA1HCAJDDcJBJMGAwoDkw0BFxcTyBscGBgesBAIC6EKEAp:AwUCoQADAQMDIiEfIjAiQCJwIgRdERI5L130MhDtORD0Mi:9Mi8AP:0yLy8z:TI::TIxMCspAREzESMRIREjETMRIQ4BFRQWMzI2NzMVDgEjIiY1NDYB%f6C9PQDaPT0:u0BA2BVKl8VCTCAI6u2BAEIA8EBCP74:D:%%BEiIT1SGArIDQulmR40AAACAKD%XwLCBhQAFwAbAExAMhQgCQw3GZ4AGhAaIBoDGgACDwUPDwvIExwQEAiwFhidBIQWGZ0AARABAgFQHWAdcB0DXS9d5DP95C:tMy8AP:0yLy8:P13tMTArNjcRIREjDgEVFBYzMjY3MxUOASMiJjU0ASERIakBAWiWAgNbTyVVHgkveSOkswF8:oQBfEcwA%z7nRUmGT9QFA7IDQukmi4FOAERAP::ACr:6QQfCAECNgAtAAABFwDW:4gBdQAWQA4BUB0BAX8dAQAdGRcYJStdNQBdNQAC:8b%WQMCBowAEgAZAFNAMhUgCQw3CgEaAQITFRdAGFAYAhgYFxcQpxEPBwcLlwMcQBcBExcXEBAOhBMAuhsvGwEGL10Q9DL9Mi8zLy9dAD:9Mi8:7TMvMy9dEjk5MTBdKwUUBiMiJicRMx4BMzI2NREjNSE3IycHIxMzApDquGKhJRweWhpoTNUCPXLvkZDr:v8UvtURCQECCg58jgMI9KDV1QGJAP::AL7%WQYsBdECNgAuAAABFgDc1wAACrYBABoMBQAlKzX::wCq:lkFUgYUAjYATgAAARcA3P9yAAAAD0AKAV8aAQAaDAUKJStdNQAAAQCqAAAFUgRjAAsAyEBUDQINCQ4LHwEfCS0BLwk:ATgCPwlOAUsJXQFfCW4BbQl:AX0JhgupAqELvwKyC8oC9QsZAgIDAYcACwAPCB8IAghKCQEJMBEXNwmIAjALEDcCAQIDuP:YQBsLEDcDCgsKBw8IAAIDBQoPBTMLQwtTC3MLBAq4:8BAHgwQNwoCCwoDAAAQAAIALw0BAA1ADXANAggDhAW5DBD0:TJdETNdL10XOS8rXQAvPxIXOT8xMACHEMArCMArBf0rcQTAXQGHEP0IwAFdKQEBBxEhESERASEBBVL%Xf7FYv6YAWgBhAGf:mwB6Xf%jgRh:hIB8P4cAAEAvv5ZBPAF0QAaAEJAJwwgCQw3AgMEkQEHEREVyA0cEBAYsQoKAQAGYAZwBgMGBhwEfwG1GxD07REzL10SOS:tMy8AP:0yLy8v7T8xMCspAREhESERIR4BFRQGIyImJzUzHgEzMjY1NCYC5f3ZAYACsv7VAQPHoCOFLRcYXCpQVQEF0ftP:uAPLhmirwsNyAsYU00XKAAAAQA0:lkCcAYUABgAREAsCiAJDDcPDxPICxwCAAQBDg4IseAWARZADRA3FhYEhAABEAECAVAaYBpwGgNdL13tOS8rXf0yLwAvLz8::TIvMTArISMRIREzHgEVFAYjIiYnNTMeATMyNjU0JgGM4gFoWQEEx6AjhS0XGFwqUFUBBhT6ABI:GaKvCw3ICxhTTRArAP::AL7%WQYIBdECNgAxAAABFgDc%wAACrYBABgKBAAlKzX::wCq:lkFEgSCAjYAUQAAARcA3P9zAAAAD0AKAX8lAQAlFw0AJStdNQAAAQC%:lkGCAXRABoA2EBdTwJABwKPAoAHAgYCFgJ0GQMMIAkMNwAGEAYgBkYBSQZ4BwYAAisBAQYCEREVyA0cBwgBAgQDBgMDEGcBdwECIwYwAUABUgFgAXABdwYHBgECB0AJEDcHgBAKthwcuP:Atg0QNwAcAQK4:8C3CRA3AoAEtRsQ9O0rXSsQ9jL9KxE5OV1dLwAvPxIXOT:9Mi9DVFhAGSsCJAc7AjQHSwJEB1sCVAdtAmIHfwJwBwxdWTEwXUNUWLARS1JYQAsHAQICggYHFAYGB4cuK4d9xFlZAV0AK11xcgU1AREhESEBESERFAYjIiYnETMeATMyNjc%AQSf:X:%oAHLAh8BYOe%bZofGyRkGhlFExkbAw4D8:wCBdH8twNJ%iG%2xMHAQgMDwoOEjQAAAEAqv5ZBRIEggAjAERAKgEVExU8EXAVBB4eIsgaHBANCJUTEA4PDR0dAYQXuiUwJWAlAhALhA25JBD0:TJdEPbtMy8ALz8:7RI5P:0yLzEwXQQ1ETQmJy4BIyIGBxEhESEVPgEzMhYVERQGIyImJxEzHgEzMgOoDhEUTUUxZTv%mAFoYLFsts3qt2OhGhwYRypgMpYByUSHICUiICP85ARjfEtQ1NP9LcPsEgYBAQgPAP::AGf:4QZmB4kCNgAyAAABFwDYAI8BdQAiQAoCUCUBUCVgJQIluP%6QAoJCzcCACUkBgAlKzUrXQBdNf::AFj:3QUmBhQCNgBSAAABFgDY5wAAGUAUACQAJzAkMCdQJXAlBgIAJSQGACUrNV0A::8AZ::hBmYH2QI2ADIAAAEXANkAjQF1ABJACwJQKgECACokBgAlKzUAXTX::wBY:90FJgZkAjYAUgAAARYA2eYAAAq2AgAqJAYAJSs1::8Avv5ZBlgF0QI2ADUAAAEWANzqAAAKtgIALiAUDyUrNQABAGf%WQPYBGcAJwBWQBMBDHAMAiEgCQw3JiYCyCIcExMXuP:AQB4KEDcXlQ8PCw8bCQgSEikvKQElJR%xBQUMG4QJuSgQ9P0yOS:9Mi9dETMvAD8vPz:9KzIvP:0yLzEwK10eATMyNjU0JichESEVPgEzMhYXESMuASMiBgcRMx4BFRQGIyImJzUzllwqUFUBAf7rAWh3sEoTMBIgF2YiTXZEjAEEx6AjhS0X0hhTTRArDwRjpWZDAgL%qQgIFBj9JBI:GaKvCw3IAP::AG3:5QVmCAECNgA2AAABFwDWACsBdQAWQA4BUDgBAUA4AQA4NAgAJStdNQBdNf::AF::4QR6BowCNgBWAAABFgDWngAACrYBADUxGgAlKzUAAQApAAAFSwXRAA8ARUAnDQoAzAMDDwkEkQYDDwwBCFsNDAl:AAEFW38EAQQEERAQEUARfxEDXRESOS9d5DMz:TIy5C8vAC8::TISOS:tOTkxMAEhNSERIREhESERIRUhESEB%v7nARn%LwUi:i8BGf7n:oACXeUBbwEg:uD%keX9owAAAQAr:%oDeAWkACIAZUA7CgUbBQIPD3APAg8YFQfKCgoDFBELpw8ODyIiHqcDFhYWEhJAAAEAACQPJAEICAwVERiECgwOA28HAQcvXRcz:TIyLzMvXREzL10zETkvAD:9Mi8:M%05ORI5L%05OS9dMTBdJQ4BIyImPQEjNTM1IzUzESERIRUhFTMVIxQWFx4BMzI2NzMDeDqCXtLNioqUlAFoAVH%r%XlAg8OR0QcWxIeCg8Rqs5y1Mf0AUH%v:TH1DdPIyMpGAoA::8Aqf:hBdYHxwI2ADgAAAEXANcAZwF1ABJACwFQHwEBAB8SBxElKzUAXTX::wCh:%EFCQZSAjYAWAAAARYA1xIAAAq2AQAkFwkWJSs1::8Aqf:hBdYHiQI2ADgAAAEXANgAaAF1ABxAFAFQFAEgEzATQBNwEwQBABQVBxElKzVdAF01::8Aof:hBQkGFAI2AFgAAAEWANgEAAAZQBQAFwAaMBcwGlAYcBgGAQAZGgkWJSs1XQD::wCp:%EF1gfZAjYAOAAAARcA2QBpAXUAEkALAVAYAQEAGBIHESUrNQBdNf::AKH:4QUJBmQCNgBYAAABFgDZ:wAACrYBAB0XCRYlKzUAAQCp:l8F1gXRACgAXUA8JCAJDDcVEQMHAwySNQNFA3UDAwMTHx8byCMcICAYsCYDJhQDBxB:gBGQEQIRESpAKgEIfwAHjwefBwMHL13tXREzL13tEhc5L%0zLwA::TIvP13tPxI5OTEwKwUiBiMgABkBIREUFjMyNjURIREUAgcOARUUFjMyNjczFQ4BIyImNTQ2A5APKhj%uf6xAYKCkpCFAYK6tAECYFUqXxUJMIAjq7YDGwIBJAETA7f8X5uYkqEDofxKzP71ORkgJj1SGArIDQulmRgkAAABAKH%XwXJBGMAKQBZQDonIAkMNwoGGgZME1sTbBN:B3oTBwIVBQkPEZUFFhgiIh7IJhwjIxuwKSkUAoQXuiswK2ArAguECLkqEPTtXRD2:TIyL%0zLwA::TIvLz:tPxI5OTEwXSsENjcOASMiJjURIREUFhceATMyNjcRIREjDgEVFBYzMjY3MxUOASMiJjUDlQsBZKZzuskBagsUE01FLnA0AWiXAgNgVSpfFQkwgCOrti%TGExP1tEC2:3TVXElJSIiIQMc%50WJBo9UhgKyA0LpZn::wBCAAAIxQgBAjYAOgAAARcA1gGxAXUAEkALAVARAQEAEQ0GACUrNQBdNf::AC0AAAepBowCNgBaAAABFwDWASAAAAAKtgEAEQ0GACUrNf::AAkAAAXcCAECNgA8AAABFwDWACEBdQASQAsBUA0BAQANCQUAJSs1AF01::8AHv5kBRcGjAI2AFwAAAEWANbFAAAKtgEADAgGAiUrNQABAKoAAANnBh4AEAAjQBMFCxILAgAABJgNAQkAAAiECbkREPbtMy8ALz:9Mi8xMF0BIy4BIyIGFREhETQ2MzIWFwNnGxhNLF5L:pjb3lCCMgUMBxJLbvuUBILOzgsJAAADABgAAAYeCAAAFgAZACUA4UBzDw0HER8NGxAWES8NKxA5DVkNZhB2EAsYGBkXAgGBABYAGBkDBIIFBQYHBggWTAZDFloGVRZrBmQWeQZ2FgpNAE0FfQB9BQQDk0AZARkPDXANAg0MHcUGEBYQLxADEBAAGRgGFgUFDyNwIwIjBQoABQUCALj:30ArChA3BSEKEDcTDxAMCRqwEBMBEyCwIAkwCQIJBgkTFgQFAA8nAQAnHycBBS9dETNdLxIXOS9d7S9d7RI5OTMvKytdAC8vXRIXOTMvXe0zL10vXe0xMF0BXYcQ:cDAwIcQ:cDACMABXSkBAyEDIQEuATU0NjcTIRUFHgEVFAYHCwIBNCYjIgYVFBYzMjYGHv5ze:32cf59AgwqNW5ZvQFR:vJjgjcoWaOtATpNOztNTDw8TAEt:tMFEyhsPFyUJAEJFOoenGU%bSX9KwGy:k4DrT9SUj8:U1QAAAMAVv:iBLcHugAPAEAATADTQJlpNHs0Ag8YAz0ZGBQ9JjQ9LD06SQVJHEosRjRKOlkFWRxZLFk6awVpD2scdiVyKXA9FiAyMDICMjIxRMUPNS81PzVPNQQ1SjtKNQMrAfEfHysWJ0ANDzcnJyOnKxANpxYWPwouBTgaLhU4Ki4lOAZHrys7MTUEOCAuAS40NC5Brzg4GR8BQIQ:uk4vTgEPKB8oAigoB4QZu00Q9u0zL11dEPbtMjISOS:tMzMvL10SFzntXQAvP%0:7TIvKxESOS:tERczLy9d7TMzL10xMF0BXQE1DgEHDgEVFBYXHgEzMjYXDgEHDgEjIiY1NDY3NiQ3NTQmIyIGByMRPgE3LgE1NDY3EyEVAR4BFRQGBx4BFREhAzQmIyIGFRQWMzI2A1JJqiw2OQwYF0BENm8qHVYmNXJEoNhuZWQBKJ%YlFnKLCE2qYFPYWhTuwFO:t1ge2lVyMn%myRNOztNTDw9SwEl6gYVDhFBNSMsFBQTLIoWPhIYF8aae5wtLSYJBl1HPxEBDw4eBySKW1%QIQEjFP79G5loX5AgF7Oy:QQFfT5bWj8:TlD::wAEAAAIPAgBAjYAkAAAARcAjQJdAXUAEkALAlAXAQIAFxUICSUrNQBdNf::AFb:4gfRBowCNgCgAAABFwCNAZoAAAAKtgMAUlMbCyUrNf::AGX:cgZmCAECNgCRAAABFwCNAI0BdQAWQA4DUDQBAxA0AQA0NCAgJStdNQBdNf::AFj:XgUmBowCNgChAAABFgCN5wAACrYDADQ0ICAlKzUAAQDhAtoCVwRjAAMAFkAMAdkCDwPQTwJPBQICL13tAD:tMTABIREhAlf%igF2AtoBif::AEIAAAjFCAECNgA6AAABFwBDAaQBdQASQAsBUA4BAQAODgYAJSs1AF01::8ALQAAB6kGjAI2AFoAAAEXAEMA9QAAAAq2AQAODgYAJSs1::8AQgAACMUIAQI2ADoAAAEXAI0BvgF1ABJACwFQDwEBAA8PBgAlKzUAXTX::wAtAAAHqQaMAjYAWgAAARcAjQFGAAAACrYBAA8PBgAlKzX::wBCAAAIxQeJAjYAOgAAARcAjgGyAXUAGkAQAgFQEgECABIBAQASDQYAJSs1XTUAXTU1::8ALQAAB6kGFAI2AFoAAAEXAI4BHwAAABFACwIAEgEBABINBgAlKzVdNQD::wAJAAAF3AgBAjYAPAAAARcAQwBBAXUAEkALAVAKAQEACgoFACUrNQBdNf::AB7%ZAUXBowCNgBcAAABFgBDzgAACrYBAAkJBgIlKzUAAQAgA8cCLQYUAAMAPbdFAlYBZgEDALj:wLMJDDcDuP:QQBcJDDcBAQMADwABAAAFQA0QNwJACxE3Ai8rKzMvXQA:My8xMAErK10BAyEBAi2d:pABIwYU:bMCTQAB::AGXAXABy8AAwARtgHKAgAABQIvETMvAC:tMTABITUhBcD6MAXQBlzTAAEAmgAABS0F7gAoAKpAZyESKiUwEjIXQhJCF1ISUhZkEmcVYBZ0EnUVcBZ5Fw8jIAXGBgIICB8cCcYfDHAMAgYCDBQUGJsMARAHAkAMEDcCJ0oBIycCHCCLBQxgCHAIAgghYB0BHQoGEwYIHRMEAgAAKgACAQIvXREzLxIXOS8vMy9dMy9dMzP9MhE5OQAv:TIrPxI57TMvL0NUWLIPDAFdWV3tOTkzL0NUWLIACAFdWe05OTEwXSkBET4BNyM1MzUjNTM1NCQzMhYXESMuASMiBh0BIRUhFSEVIQ4BBxUhBS37bWJWEKm1tbMBJfKIszUtTIY6aIABtf5JAbf%Ng9XMQMHARYaXk%uiK54v:YhD:7ILyd3azmuiK46ZBoLAAIAgf:mBX4FMAAeACUAW0AbJQRVA2MDYARgF28ZcQNwBHEXfxkKESAJDDcNuP:AQB8NEDcBpyUlFSKnGzAOAQ4OB5YVFg4OH4MAACclAYMYL:0yETMv7TMvAD:tMy9dL%0SOS:tMTArK10BIR4BFx4BMzI2Nz4BNzMRDgEHDgEjIAAREAAhIAARJS4BIyIGBwV%:H0GRzU1kVVIjC82TxwtJ202S5JR:pT%fAF1ATkBKAEn:oEDdXlxlQkCP118JCQkJBYZMRT%vg8qDRMRAV4BPQE%AXH%xP7YXYOOhI3::wCz:%AI5QXaADYCP6YAADcAuwKlAAABFwI%BM:9xgA4QCUEAwIZECkQAhATBAMCEyATQBMCAQsACyALQAt7CwQAASABXwECXRE1XRE1XRE1NTUAP101NTX::wCx:%AJPQXvADYA8dEAADcAuwMdAAABFwI%BSf9xgBBQBgEAwIZMykzAjMTBAMCNiA2MDZQNgMBLi64:8BACQkNNwAGEAYBBrj:wLIOEDcrXRE1KxE1XRE1NTUAP101NTUA::8Ap::gCT0F2gA2AjzOAAA3ALsDGAAAARcCPgUn:cYAOEAlBAMCGSYpJgImEwQDAikgKVApAgEhECEgIUAhAwAAEABgAHAAA10RNV0RNV0RNTU1AD9dNTU1::8AtP:gCPoF2gA2Aj3bAAA3ALsCtQAAARcCPgTk:cYAOkAnBAMCGQ4pDgIOEwQDAhEgET8RUBEDAQkgCT8JewkDAAUPBRAFcAUDXRE1XRE1XRE1NTUAP101NTUAAQCg:lkCrQCmAAMAMEAKCQFLAFYBZgEEALj:yrMKDDcDuP:WQAoJDDcDAwIcAAACLzMvAD8zLzEwASsrXSUBIxMCrf7d6p2m:bMCTQD::wGy:lkD7gAUAhYA3AAAAAECGQUDA5cGjAADAB9ACQNACgw3AwMCALj:wLUJCzcA0AMv7SsALzMvKzEwAQMjAwOXSexJBoz%dwGJAAMAxwUDBOkGjAADAAcACwBIQBUGBQrWCQkCAAACB7QGQAkLNwYKtAu4:8C1CQs3CwYAuP:AQAoJCzcAzwtAAwEDL10z:SsyLyvtLyvtAC8zLxI5L%05OTEwAQMjAwEhESEBIREhA4JJw0kCvP71AQv86f71AQsGjP53AYn%dwER:u8BEQD::::rAAAGSQXRADYAJCsAARcBnf3S:0UAJkAZAg4DAg5PDo8O:w4DAQAAPwB:AAIPEB8QAl1dETU1XRE1AD81::::6wAABkMF0QA3ACgBUAAAARcBnf3S:0UAIEAVAQ8DAU8MjwwCDAAPARABIAFvAQQBL101L101AD81::::6wAAB0QF0QA3ACsBTwAAARcBnf3S:0UAKEAcAQ8DEBEgEVARAwFPDI8MAgwADwUQBSAFbwUEBS9dNS9dNV0APzX::::rAAAFKQXRADcALAFGAAABFwGd:dL:RQAwQCMBDwMBUAwBTwyPDKAMwAwEDAAPAhACIAJvAgQCDxEgEUARA10vXTUvXXE1AD81::::6::hB1gF8AA3ADIA8gAAARcBnf3S:0UALEAfAicDDykgKT8pAwInTyePJ6AnsCfAJwUBAAYPBj8GAl0RNTVdETVdAD81::::6wAAB3sF0QA3ADwBnwAAARcBnf3S:0UAMEAjAQkDDw4gDj8OcA4EAQAJAU8Jjwn:CQMJABAEIARABHAEBAQvXTUvXXE1XQA:Nf:::%sAAAeOBfAANwG7AQMAAAEXAZ390v9FACpAHgErAwFPK48roCsDKwAPHI8cnxwDHA8tIC0:LZ8tBF0vXTURXTUAPzUABP%dAAADHwaMAAMABwALAA8AWUAZCwgO1g0NBgcHBgYCBQELsQpACQs3Cg6xD7j:wEAaCQw3DwoEvQ8HBACEBwABEAECAVARYBFwEQNdL10z:TIvM:0yLyvtLyvtAC8:My8zLxI5L%05OTEwKQERIQsBIwMBIxEzASMRMwIS:pgBaCw7mzsCSuPj:WHj4wRjAin%dwGJ:ncBEf7vAREA::8AGAAABh4F0QIWACQAAP::AL4AAAW4BdECFgAlAAAAAgAiAAAGUAXRAAMABgCUQAoHAAgBFwAYAQQGuP:wQC4NEDcEEA0QNzgFAQUGBQSBAAADNwUBBQaCAQECTAJDA1wCUwNuAmEDfwJwAwgAuP:gQCsJEDcBIAkQNwIDBQMAAQEAAAgPCB8IMAhwCAQBBQF6AgECAwbXARgNEDcBAC8r7T9dEjkBL10RMy9dFzkrKzEwXYcQ:cBdhxD9CMBdASsrXSkBASETCQEGUPnSAjoBukz%0v7SBdH7TQM2:Mr::wC%AAAE8wXRAhYAKAAA::8AWgAABT0F0QIWAD0AAP::AL4AAAX1BdECFgArAAD::wB7AAAD4wXRAhYALAAA::8AvgAABiwF0QIWAC4AAAABABgAAAYeBdEABgCNQAoHAAgEFwAYBAQDuP:4QC4NDzcBCA0PNzgCAQIDAgGBAAAGNwIBAgOCBAQFTAVDBlwFUwZuBWEGfwVwBggAuP:gQCUJEDcEIAkQNwABAQAACA8IHwgCAAQBBAIEegUBBQMABBgNEDcEAC8rMz9dEjkBL11dETMvXTEwKytdhxD9wF2HEP0IwF0BKytdKQEJASEBIQYe:nD%iP6I:noCLwGoBDX7ywXR::8AvgAABtcF0QIWADAAAP::AL4AAAYIBdECFgAxAAAAAwCJAAAFLwXRAAMABwALAE9AHQ8FHwWPBQMF8gYGCQHyAgMK8gkIBUAJEjfgBAEEuP:AQBIJFDcEBQUEAwIECQgIDQAJAQkvXREzLxIXOS8vK10rAD:tP%0SOS:tXTEwASERIQMhESETIREhBS:7WgSmMvu%BEIy%1oEpgSdATT8mQE0:GIBNAD::wBn:%EGZgXwAhYAMgAAAAEAvgAABfUF0QAHACdAFwORBgMBBQF:ALYJAAlQCWAJAwR:BbUIEPbtXRD27QAvMz:tMTApAREhESERIQX1:oD9yf6ABTcEsftPBdEA::8AvgAABYsF0QIWADMAAAABAGgAAAUtBdEADAC:QG4HC3cLAjcKVghmCHcIBAMCAwgJCPMEAwQDBAMLCgvzAgMCCQp:CosKA5sKyArZCgMCAwgLkQEEBAiRBQMELwM:A1QDqgOwAwUgA1ADcAOAA5UDpwPiA:0DCAMACQFFCVUJkAmgCbAJ4AkGQAkBCbj:wEAOCRs3CQcDBAsJCAcGAgC4:8C2CQ03AAAOAi8RMy8rEhc5Ly8rXXFyM11xLwA::TIvL%0ROTkxMF1xARCH7YcIwBCHBe2HCMABXXEpAREJAREhESEBFQEhBS37OwIP:gMEkv1OAdL%FALtASAB5QGxARv%4P54Tf5EAP::ACkAAAVLBdECFgA3AAD::wAJAAAF3AXRAhYAPAAA::8AGAAABgQF0QIWADsAAAABAIsAAAdEBdEAIwBaQDkbBhiUVglsCXUJAwkZIgkDCBADCCJ:ICMBIxF:LxABECMHGxgHfxAACHAlAggIJSQgJUAlYCVwJQRdERI5L13E7Tk5EMQvXe0vXe0ALz8SFzkvXe05OTEwARQGBw4BBxEhES4BJy4BNREhERQWFx4BFxEhET4BNz4BNREhB0RXVFX3qP6FpfxTVVYBeyYmJW5FAXtGbiQnJQF7A6mW3EdIUg:%uQFHD1JISdqWAij92FZ6KykzDAOL:HUNMSotcV0CKAABADUAAAaLBfAAJwCNtWUdZSECArj:wLMMEDcUuP:AQBMMEDcZJRQCBBYLkh8EJgEYkRYnuP:AQDsQGTcXQBAZNyAlASWybwJ:Ap8CvwIEAi8ZARmyYBRwFJAUsBQEFAh9AhQcJyIiKR8pPykCDn0XABwBHC9dxO1dETMvxBI5Oe0vXe1dL13tXSsrAC:tOTk:7RIXOSsrMTBdKQERPgE3PgE1NCYjIgYVFBYXHgEXESERITUmAjUQACEgABEUAgcVIQaL:TQ9TyYkJbqgoLonIiJhL:00AdrMzAGYAVEBUQGYzMwB2gHoJTQ0L21dqMHBqFd4LCtEHP4YASA:UQEeyAEGAVT%rP76yP7iUT8A::8AewAAA%MHiQI2ACwAAAEXAI7:VwF1AB5AEwIBUAwBDAUmAgARAQEAEQwECSUrNV01ACtdNTX::wAJAAAF3AeJAjYAPAAAARcAjgAeAXUAHkATAgFQCQEJBSYCAA8BAQAPDAUAJSs1XTUAK101Nf::AFr:4QTuBowCNgEuAAABFgGd4wAACrYCACEeCBAlKzX::wBb:%EEbwaMAjYBMAAAARYBnbcAAA9ACgFAQQEAQT4HACUrXTUA::8Aqv5kBRIGjAI2AcYAAAEWAZ0fAAAKtgEAGhcOFiUrNf::AKEAAAIfBowCNgDVAAABFwGd:ogAAAALtgEABwQCAyUBKzUA::8An::dBQcGjAI2AdEAAAEWAZ77AAAPQAkDAgEAIh8HFyUrNTU1AAACAKr%ZAVhBhsAGAAzAHJATkQzVApVKmETaRZlI2klchN6FnMjeiULLzAOEDcFMA4QNxYVIKchIQMnpwwBMZgDFggbFRIgQAoMNyAkgxISIAgZgwC8NTA1AS4HhAi5NBD2:TJdEPbtEjk5L%0vKxI5AD8:7T:tEjkv7Tk5MTArK10BFAAjIiYnESERNCQhMhYXHgEVFAYHFR4BBTQmJy4BKwE1MjY1NCYjIgYHDgEVER4BMzI2BWH%5ttjsEf%mAE1ASJ7vUhJSoh4nLH%jjEvLX9IJpmVbE46UxsZFiVqK4uYAb3J:vcoJ:4qBcjw:zExMY9Vd7smER3FgURWGxkS6ll6VFsoIyJbLfzaDhB5AAEAHv5kBRcEYwAIAHVAVVYHZgd1BwMHBgcIhwABAAcGhgQFBQ8DGwsAGwAiADUASwBcAGwAfAAIAAQFFAUmBToFRAVTBWMFcwWwBQkFAAEBhAUABBAEsAQDBAQKCQ8KLwpfCgNdERI5L13E7RDEL10vXQA:PzEwAYf9wIcQ:QjAAF0JAREhEQEhCQEFF:4v:pj%QAF6AQ0BAARj%7j%SQG3BEj9TAK0AAEAW:5kBHoGFAAvAFJAG2UoAR0amBsALZcPBxsZQA4QNxoaGRIcPwcBB7j:oEATCQw3BxwHC4UDAzEQMQEjgxK7MBD27V0RMy:tMzMvK10vEjk5LysAPy:tP%05MTBdJR4BFRQGByE1PgE1NCYrASImNTQ2Nz4BNzUhNSEVDgEHDgEVFBYXHgEXHgE7ATIWBDIjJVpD:s5QQk47iOzlWU9Jxm3%MAOreuBfXXAEDAstKiRuQz1Hb6Isbjlgw0gYSXs9OE3Z2ILucGjAWQj44UiybGrocB84IyE6FhMFOQAAAQCq:mQFEgSCABYAO0AmARUTFTwRdAVwFQUQDQiVExAODw0BGwGEALoYMBhgGAIQC4QNuRcQ9v0yXRD2:QA:Lz8:7RI5MTBdASERNCYnLgEjIgYHESERIRU%ATMyFhUFEv6WDhEUTUUxZTv%mAFoYLFsts3%ZAPJRIcgJSIgI:zkBGN8S1DU0wAAAwB3:94FIwYXABcAJAAxAGJAIkQDRAlKD0oVBGYedh4CJpjPJAEkJAYepxIeCw03EgAspwa4:%JAHgsNNwYWJRiEHwAvAAIAADMkJoQQDCAMAgAMEAwCDC9dcf0yETMvcf0yAD8r7T8r7RI5L13tXTEwXQEUAgcOASMiJicmAjU0Ejc%ATMyFhcWEiUuAScuASMiBgcOAQcFIR4BFx4BMzI2Nz4BBSMoOj:ozcntPz4jJD8978fK7T49JP6YAx8cHVk6O1gdIBsDAdz%JAEZIhxaPDtdGx0dAvd0:tRrdpiZeHcBIHqAARR2dZibd3b%5xBVpDg4MjM3QKVM%VWwRTg3NztBtAD::wCqAAACEgRjAhYA1QAAAAEAqgAABVIEZQAYAMFAiSMIOBdJF2ICYgN0A5MIpQi0CAkMAgwYAgICAxUBJQE1AUUBVQFkAXQBpAG0AQkBhwAYAAgLCgMJEwlqCQMJGBcYFyUYNRhFGFUYdBgFWBh2GAIJCAIDBAEMEBAAFAEUFAwPBg8FAQkXGAIBBR8PLw8CDw8AABAAAgAvGgEAGkAacBoCCAOEBbkZEPb9Ml0RM10vXTMvXRc5AC8vPz8zL10zLxESFzldMTABXYcQwNVdwMAEwAGHEP1dCMABXQBdKQEBBxEhESERAT4BMzIWMxEjLgEjIgYPAQVS:l3%xWL%mAFoARU2ml4fYBYRCikTNVEfTQHpe:6SBGP%EAFaRVMC:sMCBCUpXwABABYAAAUgBhQABwCVQE0rBjgFaQZ4AXcDeQYGAgMCBQQFBqQBtgECAYYABwACqwO5AwIDhwQFBAYFBwcUBysFIgc4BTUHSwVAB1sFUAdoBWEHdAB6BHwFcQcRALj:30AeCQ83BCEJDzcCAAQFDwQGAAAACS8JTwkCAAQQBAIEL11dETMvAD8vPxI5OTEwASsrXYcQ:V3AhxD9XcAIwAjAAV0pAQMBIQEDIQUg:oH4:uH%jAHOtgGRAtj9KARYAbwAAAEAqv5kBRsEYwAWAEZALBIgDRA3AyANEDcIAgUUCw8QlgUWAAgKGwABE4QWuhgwGGAYcBgDDQmECrkXEPT9PF0Q9P05OQA:Pz:tPzwSOTkxMCsrIScjDgEjIiYnESERIREeATMyNjcRIRED3BAHLGtJQm8i:pgBaC1sNzNxLQFoUCY5NiH%HAX::OEkHh8jAx:7nf::AB4AAAUVBGMCFgBZAAAAAQBW:mQErgYUAEAAiEAMCg4kGyQkNhtVNgUluP:gQCcLDjdpFnkWAhYwly8vDB4hmCAAOpcMAxsWGS8vIB8fEiiDGT8EAQS4:6BACwkMNwQECIUgGRIAuP:AQA4JDDcAAEIvQgE0gxK7QRD27V0RMy8rEjk57TMvK10v7RI5Ly8zLxI5AD8v7T:9MhI5L%05XTEwK10FFAYHITU%ATU0JisBIiYnLgE1NDY3NS4BNTQ2NzUjNSEVISIGBw4BFRQWFx4BOwERISIGFRQWFx4BOwEyFhceAQSuWkP%zlc7Sz6Zb7pDQ0q6oXKYZlLqA%D%8UldLicuNystaznX:sGFljgyMH5MW0dvJCMlMWDDSBhSdjk1UDU0NJhhm8YnCxmHYU90Jwr0%BQaF0wxO0wVFRD%:WheSE8UEwo5LSxuAP::AFj:3QUmBIYCFgBSAAAAAgCq:mQFPgSGABEAHgA6QCQaQA4QNwVADhA3BgMVmA8QHJcDFggbEoNJAAEAvCAZB4QIuR8Q9v0yEPZd7QA:P%0:7RI5MTArKwEUACMiJicRIRE0Njc%ATMgAAE0JiMiBhURHgEzMjYFPv719GOTN:6YVE9J1oIBGAE4:o1ycGhvLGEUjYsCRfT%mTAf:isEJYC3Qz5F:tb%3LWeh2z%aRAGqAABAFj%ZAR6BIIALABaQCM1J0UnRCtVGmUaeBZ0GgccIQkQNxwcI5gYEAMbKZcLPwQBBLj:oEAWCQw3BBwcBAiFDy4QAAIAAC4mgxK7LRD07REzL13tMzMvLytdAC:tPz:tMy8rMTBdBRQGByE1PgE1NCYrASImJy4BNTQ2Nz4BMzIWFxEjLgEnLgEjIgYVFBY7ATIWBHpgPf7NU0BMOzdyyUpKWGldVemAkcUqLxc3KyhoO42Po7gyfaMxZ8FDGE93OzZPQkRD1Y2Z40xGR0MU:tQVLBYVG6aHrKW1AAABAJ::3QUHBGMAFwAsQBsWBw8PmFYDZgMCAxYVhAC6GWAZrxkCCYQGuRgQ9u1dEPbtAD9d7T8zMTABFAQhICQ1ESERFBYXHgEzMjY3PgE1ESEFB:7d:u7%9P7ZAWoLGBdSPkNRFBMPAWoBnNrl4t0Cx:2pW2MrKSInJiVsVgJXAAEABf5kBRAEYwALANJAUQsCBAgUCCsCJAhLAkQIbwJgCHsCdAgLKQUmC3kFdguJBYYLBgMCAQILAAsKBQYFCAcIBAk0CUsJAgkwERc3CYgKAwoBAgUGCwgHADQHSwcCB7j:0EASERc3B4gGBgEICgACBAYPBBsAuP:fswkQNwq4:99AIwkQNwYhCRA3BCEJEDcKBgUGCgsEBAAADS8NTw0CAAQQBAIEL11dETMvEhc5Ly8rKysrAD8:FzkxMAGHEP0rcYfAwBDAwMCHEP0rcYcIwAjAEAjACMAFwAFdAF0BIQkBIQkBIRMBIQEFEP6H:vL%7v6OAan%ZgF5:wEEAXH%Zf5kAhH97wMJAvb%CQH3:REAAAEAnv5kBuoEYwAjAFVANRsGJhgBGKc5CUkJdgkDCSIZCBAPCBsihCMRhBAjBxsYB4QQDyUQCIAIAwgIJSQ:JVAlcCUDXRESOS9dxO05ORDEL%0v7QA:PxI5OS9d7V05OTEwARQGBw4BBxEhES4BJy4BNREhERQWFx4BFxEhET4BNz4BNREhBupfVlHlhv6WjNRbVWEBaikjImU0AWo1ZCIlJwFqAeJ8tzs5Qwv%dwGJDTpAO7V%AoH9oVdsIB4gBQOF:HsGHh8jY10CXwAAAQBb:98GzARjADcAckAjVxVvFmA1fxZ3GXkycjUHJTQlCQMGFg8hDSqYBhY0QAkQNxi4:8BAJgkQNzCEABuEEwA0JgkKJoQYEwAlECWgJQMlJTk4Dzk:OVA5bzkEXRESOS9dxMTtOTkQxMQv7S:tKysAP%05OT8SFzkvMTABXQEUBgcOASMiJicjDgEjIiYnLgE1NBI3IRUGAhUUFhceATMyNjcRIREeATMyNjc%ATU0Aic1IRYSBsw0OTyuhmusPww:rGuAtjk5NIOCAYKLjw0VEkEuJj0RAWgRNS4uQRISEY6NAYKAhgH1YMFLTV1UTU1UXkxMv2G3ASaRF3f%z6g4WTAqNxALAlH9rwsQOSooZTKoAS56F4n%1P:::%4AAALOBhQCFgB3AAD::wCf:90FBwYUAjYB0QAAARYAjvsAAB6xAh24:8BAERYaN0AdcB2AHQMBAB0YBxclKzVdKzX::wBY:90FJgaMAjYAUgAAARYBnegAAAq2AgAnJAYAJSs1::8An::dBQcGjAI2AdEAAAEWAZ37AAAKtgEAGxgHFyUrNf::AFv:3wbMBowCNgHUAAABFwGdAL0AAAAKtgEAOzgTACUrNf::AL4AAATzB4kCNgAoAAABFwCOAAABdQAmQBoCAVAMAQwFJgIfEUARcBEDARARAQARDAIDJStdNV01ACtdNTUAAQApAAAG7QXRACUAWUAZFpIfHwYeGpEbAwmSBhgHQAsQNwcHFw99ALj:wEAZCQs3AAAnDydQJwIaHR0fF39wGgEaIBgBGC9dM139MjIvL10RMy8r7RI5LysALy:tP:0yEjkv7TEwARQGBw4BKwERMzI2Nz4BNTQmJy4BIyERIREhESERIREhMhYXHgEG7VNIWK%ecDZDXhkdFhAbG15T:vL%gP5OBQP%LwFRncNOTUYB3m23OkY6ARoeGRs%KSVCHBsg:W8EsQEg:uD%9Sw9PLf::wC%AAAE8AgBAjYB6wAAARcAjQAkAXUAHEATAQlQCQEBIAlgCXAJAwAJCAQFJStdNQBdETUAAQBn:%MFiQXuADYAmkAZJixJJVkjVS10CXoPfxt0K3I0CQE2CQ83F7j:ykAJCQ83MiANDzcduP:gQBwNDzcokjAnQCdgJwMnJxIGGUAMEDcZGSCTEgQ2uP:AQCYMEDc2Ni%TBhYnJxgAABAAAgAAOAA4XzgCJil:BQwVDCUMAwy3NxD0Xf0yXREzL10zMy8AP%0zLys:7TMvKxESOS9d7TEwKysrK10lDgEHDgEjIiQnJgI1NBI3NiQzMhYXHgEXESMuAScuASMiBgcOAQchESEeARceATMyNjc%ATczBYkyW01Ik2Wr:uJmZ3JsaGYBIa5Zm0RFcSspIktDNplNSH8%O1MSAoz9ZgpYPjuOTFSXOTRYHCdWFSQTEhViYWEBIb%xASBnZWoUEBAqFP6qGzchGykhKSd7Wf7kcpgtKicnHRo%F:::AG3:5QVmBewCFgA2AAD::wB7AAAD4wXRAhYALAAA::8AewAAA%MHiQI2ACwAAAEXAI7:VwF1AB5AEwIBUAwBDAUmAgARAQEAEQwECSUrNV01ACtdNTX::wAq:%kDxgXRAhYALQAAAAIAEv:2CWsF0QAOAD0AibkAHf%WQB0MEDcAHhAeAgeSMDdAN3A3Azc3FhiRNQMoKAYCLLj:wEAZCRI3LPIkCJIWNwh:FhY1AH1ZD2YPdg8DD7j:wEATCQs3Dw8:Dz8BGIAANRA1AjU1KC8zL13tXREzLytd:RE5L:0yAC:tL:0rQ1RYtCxADhA3K1kyLz:tEjkvXe0xMF0rATQmJy4BKwERMzI2Nz4BJRQGBw4BIyERIQ4BBwYCBw4BBw4BIyImJxEzHgEzMjY3NhITPgE3IREhMhYXHgEH3hAbG15T8vI:ZRsbHQGNU0hbxYz9Uf5mBQYGDTUhIkwmMZJSMmsPDgkXDzw0E0w5DgYHAwSAATWZyUxNRgHTJUIcGyD%hSAZGEM0bbc6STcEsWJwXMr%7VlaciQvOAgCAU0BAhAQQwEjAQZo9Z791Sw9PLcAAgC%AAAJWwXRAA4AJwBcQCYXHgeSMCFAIXAhAyEhFh8bAwiSFhogHwh:FhYaAH1ZD2YPdg8DD7j:wEAPCQs3Dw8pfykBHRl:GrUoEPb9Ml0RMy8rXf0ROS:tOTkALy:tPzMSOS9d7Tk5MTABNCYnLgErAREzMjY3PgElFAYHDgEjIREhESERIREhESERITIWFx4BB84QGxteU:LyP2UbGx0BjVNIW8WM:VH92f6AAYACJwGAATWZyE1NRgHTJUIcGyD%hSAZGEM0bbc6STcCkf1vBdH91QIr:dUtPDy3AAABACkAAAb6BdEAHQBMQC1KF1kXAggBGpFnC3ALAgsLAQcDkQQDEwETfxISHw8fUB8CBgMGBwB:AyABAQEvXTP9MjIvL10RMy:tAC8zP:0yEjkvXe0SOTEwXSkBESERIREhET4BMzIWFx4BFREhETQmJy4BIyIGBwNv:oD%OgUX:i9R62JqrkVCTv5%ESEgfWo0YDwEsQEg:uD%0REgMjc0pnL%AgE5U3svLS4JCf::AL4AAAYrCAECNgHyAAABFwCNAGABdQAYQBABUCMBAWAjcCMCACMhBQAlK101AF01AAIACv:2Bd0HvAAWACQAyUBbBhUWFSQVOgFJAk8DWgMHFRUWFIETEhMSExIVFoIAAQASExQWAQUABwsLBgIP8gcXDx1AHVAdYB0EHSHIDxofGgIaGgADJMAXHsAdJgE3AUUBRhJUAWQBdAEHCrj:wEAMDRA3ChIKAR0XBRMAuP:gQBQJEDcAACYfJi8mAhMgCRA3ABMBEy9dK10RMy8rEhc5LytdL%0v7QA:My9d7S9dMy:tQ1RYuQAP:8CyCQ03K1kyLxESFzkBhxD9wAjAAYcQ:QjAMTAAXQkBDgEHDgEjIiYnETMeATMyNjcBIQkBEwYEIyIkJyEeATMyNjcF3f3iL3pBQX8:RsAfFxVqNGN7Dv2jAaEBcgExxQH%6P:::ugBAVACWG5uWAIF0ftZZ34eHxIHAwFFBg0mHwRa:T4CwgHrutTUum1hYmwAAQC%:qAF9QXRAAsAQEAoBgIDBJEJAAsJgA8AAU8AXwB:AAMAAAIGfwe2DQANUA1gDQMDfwK1DBD27V0Q9u0SOS9dce0ALy8z7T8zMTApAREhESERIREhESECqf4VAYACNwGA:hX%nwXR%00Es:ov:qD::wAYAAAGHgXRAhYAJAAAAAIAvgAABbQF0QASACEATkAiGpIwDEAMcAwDDAwHC5EIAxuSBwAKAQoKE31WAGYAdgADALj:wEAMCQs3AAAjDBt:B7UiEPb9MhEzLytd7TMvXQAv7T:tEjkvXe0xMAEUBgcOASMhESERIREhMhYXHgEFNCYnLgErAREzMjY3PgEFtFNIW8WM:VEEhfz5ATecxkxNRv5zEBsbXlP09D9lGxsdAd5ttzpJNwXR:uD%9S08PLd3JUIcGyD%hSAZGEMA::8AvgAABbgF0QIWACUAAAABAL4AAATwBdEABQAjQBQDAZEEAwAAYABwAAMAAAcCfwO1BhD27REzL10AP%0vMTABIREhESEE8P1O:oAEMgSx%08F0QAAAgAq:qoGdAXRAA0AEwBVQBxSEXIRAhCRCgMMEweSAwEFEIAKCgcOfwwMAYAAuP:AQBQJDjcAABUPFR8VLxUDE38HBwSABS:tOS:tXREzLyvtOS:tEjkv7QAvMy:9MjI:7TEwXQEhESERIREzNhIRIREzIREhCgEHBnT%n:x4:p9xdHsEV5P97f6ME3lW:qoBW:6lAnfzAmIBW:tQA5D%8P4zs:::AL4AAATzBdECFgAoAAAAAQASAAAI2gXUADsBEkBOCw4EGgsrBDcbDhQaGysUNysBJAgrDyQ2OgE1CEwBQwhOD0A2aQFmCBQ0KVYpZikDKYA3Nzk0HFYcZhwDHIAODA4CAQ4JEDcBfwA7AAcIuP:yQG0JEDcIfwkJCikhHAMtJJQ7BwoMDjc5BwIGAjHyLRTyGC0YBAkCAyIDAC8KIDs:CjA7TwpAO28KYDsIQDFQMQIxMQE7AiQpNzkHAPQEfwVPFQEVFQgKBwwOHCEHCfQPPQEFBT08Hz0:PUA9bz0EXRESOS9d9Bc5Mi9dEP30FzkyL11dAC8:FzkzMy:tL%1DVFhACjFACQ03FEAJDTcrK1kvFzn9ERc5AYcQ:SvAhxD9K8CHEP1dhxD9XTEwAV0pAQEjESERIwEhAS4BJy4BJy4BKwERMjYzMhYXHgEXHgEzESERPgE3PgE3PgEzMhYzESMiBgcOAQcOAQcI2v4z:oVd:oJi:oX%OAHzIjwmESUZGT4oWBZRNpyzPg4qEjlgTwF%VVw7EigQPLOaM1cTWC02GBcmFCs5JQJj:Z0CY:2dAvoUWmQsRRoZGgFHA3WFHmokdVICav2WAUx6J2EkgngD:r0VFxdOLGFcFgAAAQBO:%MFOgXuAEAApUAQaDJ9CH8JfA1wLXAxczIHLLj:4EAJDRA3DiANEDcyuP:gQCMJEDcIIAkQNzs6HpMwH0AfYB8DHx8GNDBADQ83MDApkjQECrj:wEAuDA83CgoRkgYTTzpfOgImfW03djcCNx8fOjcDChd9WgBmAAIAuEIxMQpACgw3Ci8rMy8Q9l3tEhc5Ly9d7V0AP%0zLys:7TMvKxESOS9d7Tk5MTArKysrXQEUBgcOASMiJCcRMx4BFx4BMzI2Nz4BNTQmJy4BIyERITI2Nz4BNTQmIyIGBw4BByMRNiQzIAQVFAYHFR4BFx4BBTpZWFz%t6H%63QkHHE5SHtRT4IsMTAjJSVvS:7uAQhLbBwfF5WBTYQ8QU4rJWYBJ6ABMgEzpYM2dzEyQAG8a7I8P0E1LAFQEDsVGx8aGx1NPTpIFxUQAQoXFRg6LEtEHhQXJxQBOSU9v6p:uB8PCS0pKnsAAQC%AAAGDAXRAAkAokAsCwgbCCsINgM3CEYIVQMHJAcwAj8HQAJPB1ICXgcHBgIAAgcGAQIEAwgDAwi4:9JAFgwQNwNeDBA3AwgHAkAJEDcCfwC2Cwu4:8C2DRA3AAsBB7j:wLcJEDcHfwS1ChD27StdKxD2:SsROTkrKwAvPxIXOUNUWLkAB:8gtwwQNwK8DBA3KytZQ1RYuQAH:9C3DBA3AjAMEDcrK1kxMF0BXSkBEQEhESERASEGDP6K:Zb%kgF2Aj8BmQPf:CEF0fx:A4EAAgC%AAAGDAe8AAkAFwDdQFYLCBsIKwg2AzcIRghVAwckBzACPwdAAk8HUgJeBwcKDxBAEFAQYBAEEBTIDw0fDQINDQYCAAIHBgECBAMIAwMXwA8KHwpgCnAKBAoRwH8QARAKEAAECLj:0kAWDBA3A14MEDcDCAcCQAkQNwJ:ALYZGbj:wLYNEDcAGQEHuP:AtwkQNwd:BLUYEPbtK10rEPbtKxE5OSsrERI5OS9d7S9d7QAvPxIXOUNUWLkAB:8gtwwQNwK8DBA3KytZQ1RYuQAH:9C3DBA3AjAMEDcrK1kzL13tL10zMTBdAV0pAREBIREhEQEhAwYEIyIkJyEeATMyNjcGDP6K:Zb%kgF2Aj8BmY0B:uj:::7oAQFQAlhublgCA9:8IQXR:H8DgQHrutTUum1hYmwAAQC%AAAGKwXUAB8A30B2DxwfHCccLx0kHjwbShtvG2MedRJ4G3AdDAIGARYBJAEyAUIBUgF0AYcBxgEJAYEAHwCYEqYSthIDHUYbUBtwGwMbEg0SJR82H2ANcA0EDRIbHQQUHwKSYAgBCAgABwYCGPIUAwcDBQAGHxYfSR9vDX8NdR8GH7j:wEAUCxA3DRIbHR8FfxcBFxdAIWAhAgC4:8BADAkQNwAAIQgEfwW1IBD2:TIRMy8rXTMvXRc5K10ALy8:P%1DVFi0GEAJDTcrWRESOS9d:TkSFzldAYcQ2V3AXTEwAYcQ:V3AAF0pAQEjESERIRE%ATc%ATc%ATc%ATMyFjMRIyIGBw4BBwYr:in%SF7%gAGALz4aGz4iFTUSTaqsM1ATb1JbNzdGIQJZ:acF0f2hAg8TFE86JGMgh3MD:r1UamlVEgAAAQAS::YGBQXRACEAU7kACP%WQBIMEDcACRAJAgORIAMBExMGAhe4:8BAFQkSNxfyDwF:ALYjA4AAIBAgAiAgEi8zL13tEPTtAC:9K0NUWLQXQA4QNytZMi8vP%0xMF0rKQERIQ4BBwYCBw4BBw4BIyImJxEzHgEzMjY3NhITPgE3IQYF:oD%VgUGBg01ISJMJjGSUjJrDw4JFw84NhVMOQ4GBwMEkASxYnBcyv7tWVpyJC84CAIBTQECDhJDASMBBmj1ngD::wC%AAAG1wXRAhYAMAAA::8AvgAABfUF0QIWACsAAP::AGf:4QZmBfACFgAyAAAAAQC%AAAF9QXRAAcAJ0AXA5EGAwEFAX8AtgkACVAJYAkDBH8FtQgQ9u1dEPbtAC8zP%0xMCkBESERIREhBfX%gP3J:oAFNwSx%08F0QD::wC%AAAFiwXRAhYAMwAA::8AZ::jBW4F7gIWACYAAP::ACkAAAVLBdECFgA3AAAAAQAK::YF3QXRABYAokBBBhUWFSQVOgFJAk8DWgMHFRUWFIETEhMSExIVFoIAAQASExQWAQUABwsLBgIP8gcAAyYBNwFFAUYSVAFkAXQBBwq4:8BACg0QNwoSCgEDEwC4:%BAFAkQNwAAGB8YLxgCEyAJEDcAEwETL10rXREzLysSFzkvK10APy:9Q1RYuQAP:8CyCQ03K1kyLxESFzkBhxD9wAjAAYcQ:QjAMTAAXQkBDgEHDgEjIiYnETMeATMyNjcBIQkBBd394i96QUF:P0bAHxcVajRjew79owGhAXIBMQXR%1lnfh4fEgcDAUUGDSYfBFr9PgLCAAMAXf:yB0EF4gAdACQAKwBiQD8hGyaUahiQGKAYsBgEGCIJJZRlDJ8MAgwYDAsZAwsefQPuCSUYGyIECX8MKX0S7gAMsAwCDAwtLD8tUC1wLQNdERI5L1307RDtFzkQ9O0ALz8SOTkvXe05OS9d7Tk5MTABHgEVFAYHDgEHFSE1LgEnLgE1NDY3NiQ3NSEVHgEDNCYnET4BBREOARUUFgaKWF9iXF71ov6Cnf5bW2JeWVcBBp8BfqX9fJiOpYH9XJKUhQSjStmMitpNTVYLo6MLV01N2IuM0kxJVwyYmAlT:gyQtBP9PB2xzgLEFquWnbP::wAYAAAGBAXRAhYAOwAAAAEAvv6qBoUF0QALAD1ADwYCAwsIBJEBBX8ICACACrj:wEASCQ43CgoNLw0:DU8NAwR:AbUMEPbtXREzLyvtOS:tAC:9Mi8:MzEwKQERIREhESERMxEhBST7mgGAAjQBgJP%nwXR%0wEtPtM:Y0AAQCDAAAFjgXRABkANEAeQxFcCWwJAwIMFJEFBQAYDAMAFwF:ALYbDX8ADAEML13tEPb9MgAvPzMSOS:tEjkxMF0pAREOASMiJicuATURIREUFhceATMyNjcRIQWO:oBypYdosUNETQGCECIgeW4ogCgBgAInGBkyNjamcQIm:p9Xdy4tLgoHAqcAAQC%AAAIkQXRAAsAOkAjCgYCAwgEkgEJfwD1CH8FBH8B9Q8NAQUFDQwgDUANYA1wDQRdERI5L1307RD99O0AL:0yPzMzMTApAREhESERIREhESEIkfgtAX8BqwF:AasBfwXR%0oEtvtKBLYAAQC%:qoJJQXRAA8AS0AuCgYCAwwIBJIBDw2AfwABAAAJfwz1CH8FBH8B9QAFAQUFERAPER8RPxFfEWARBV0REjkvXfTtEP307TMvXe0ALy:9MjI:MzMxMCkBESERIREhESERIREzESEHxPj6AX8BqwF:AasBf5T%nwXR%0oEtvtKBLb7TP2NAAIAKQAABuYF0QAOACEAUUAmB5IwG0AbcBsDGxsWGJEZAwiSFhsIfy8WARYWGQB9WQ9mD3YPAw%4:8BACgkLNw8PIw8jARkvXREzLytd:RE5L139MgAv7T:tEjkvXe0xMAE0JicuASsBETMyNjc%ASUUBgcOASMhESERIREhMhYXHgEFWRAbG15T8vI:ZRsbHQGNU0hbxYz9Uf45A0cBNaHESU1GAdMlQhwbIP6FIBkYQzRttzpJNwSxASD91S86PLcAAwC%AAAHwgXRAA4AHwAjAFhAIVQMAQeSMBlAGXAZAxkZFhcDCJIWIgMhAH1ZD2YPdg8DD7j:wEAVDhA3Dw8hfyC2JUAlcCUCGQh:FrUkEPb9Ml0Q9v0yLytd7QAvPy:tPxI5L13tMTBdATQmJy4BKwERMzI2Nz4BJRQGBw4BIyERIREhMhYXHgEBIREhBCcQGxteU:LyP2UbGx0BjVNIW8WM:VEBgAE1m8dMTUYCDv6AAYAB0yVCHBsg:oUgGRhDNG23Okk3BdH91S08PLf9tgXRAAACAL4AAAW0BdEADgAfAEdAHlQMAQeSMBlAGXAZAxkZFhcDCJIWAH1ZD2YPdg8DD7j:wEAMCQs3Dw8hGQh:FrUgEPb9MhEzLytd7QAv7T8SOS9d7TEwXQE0JicuASsBETMyNjc%ASUUBgcOASMhESERITIWFx4BBCcQGxteU:LyP2UbGx0BjVNIW8WM:VEBgAE1m8dMTUYB0yVCHBsg:oUgGRhDNG23Okk3BdH91S08PLcAAQBc:%MFiAXuADYAkEAMJRpVGVkjdgZ2HAUSuP:MQAkMEDcrPQwQNzC4:%BASAkLNw0gCQs3HpIwH0AfYB8DHx80CX8tAS0tJpM0BHAQARAQF5MJEyAueQMBHX8KAxoDKgMDA7g4ADhfOAIuIB8BHy4fHw8BDy9dMzMvXS9dEPZd7V0ROQA:7TMvXT:tMy9dERI5L13tMTArKysrXQEWEhUUAgcGBCMiJicuAScRMx4BFx4BMzI2Nz4BNyERIS4BJy4BIyIGBw4BByMRPgE3PgEzMgQEuWRrdmdn:t%yX6NBRXAdJR5WMz2KX0OYPD9bDP1pAo4QUjk5h0NTjT44Vx0qN2BMPaZXrAEaBSVh:uyyv:7PYWFpGRITKQwBURk9GR0nJSwtlnQBHFp6JycjJx4cQBYBVBgjFBAVZgAAAgC%:%EJKQXwABcALQBuQEx8IHskdihzLQQYkTAfQB9gH3AfBB8gHy0DKwmSIgQcAxWSKxMbHyUPfwUYHBgsGAMYGBsDfQolGiUqJQMluC8fLz8vQC8DHhp:G7UuEPb9Ml0Q9l3tEjkvXe0SOQAvP%0:P%0SFzkvXe0xMF0BPgE1NCYnLgEjIgYHDgEVFBYXHgEzMjYBIREhESERIRIAISAAERQCBwYEIyAABzA2NDsxMYBHR300MT07MTGBSEmC:E3%8P6AAYABHzMBfgErAV8BkWJfYf7suv65:nUBb0S5fYK:Ozs3NDw4xYKFvDo7ODoBX:1tBdH94AEOATH%YP6YrP7hZWdwAW8AAAIAEQAABZ4F0QAQAB8AfEAMOgZKBlsHYANnBAUEuP:WQAoJEDcDBIEFBQYGuP:gQDcMEDcGDxGTPwNPA38DAwMDABKTDwMABVoJewYCGX0JBAYDCQR7BQEFEgF:ALYhDyEgITAhQCEEXRD9:TIvXRc5L%1dAC8vP%0SOS9d7RI5KzEwAYcQ:cABK10pAREjASEBLgE1NDY3PgEzIQERIyIGBw4BFRQWFx4BMwWe:oLR:on%OQG9h5llTkTDfgK4:oK%V14sIiQmIiZnVAIi:d4CaTrUrHKqNi8t:V0BkQshGVExM1EaHg4A::8AVv:iBLcEgwIWAEQAAAACAHP:3QU7Bh0AJwA8AFdAOVoNWRBlH3QIdDcFIgYulwAlECUCJSUGFpcVATqYNgYBBhYiNBUVCSuDSgMBA7w%NIMACRAJRQkDCS9d7RD2Xe0SOS8SOQA:Xe0:7RI5L13tEjkxMF0BHgEVEAAhIAARNDY3PgE3PgE3NiQ3EQ4BBw4BBw4BBw4BBz4BMzIWAz4BNTQmIyIGBxQGFRQWFx4BMzI2BKdEUP61:ub%yv7TERkZSUJT:qBjARRBQm5KNIQ9PmwiGSQHT7FoYq7sJCqJbzhrQwEXIBxiPyZXA7FAw4v%9:7DAXoBeT%lY2KeP1FQDwkMAv71AwUFBAoKCzIpHmlINj88:SYncWh5kxUjCiUPiaE9NTkdAAADAKoAAAUQBGMAFQAeACcAZUAjCQMZA3QQAxIjpw8bAY8bzxvfGwMbGwcapwgPJKcHFoQSJA%4::CzCQ43D7j:9EAUCQs3Dw8HH4MAvCkvKQEbJIQHuSgQ9v0yXRD07RI5LysrEjntAC:tP%0SOS9dce05MTBdARQGBw4BIyERITIWFx4BFRQGBxUeAQE0JisBFTMyNhM0JisBETMyNgUQQTZEl2j9VAKPe3Q4OztfQ11::ltLU77ESU8yU1Hq8EpUAVNRfio1JQRjEB8gaklTfSELF4sBTj404Dv%gEk7:v9DAAABAKoAAAQ2BGMABQAnQBcBmAQPAwAAEAACAAAHYAdwBwIChAO5BhD27V0RMy9dAC8:7TEwASERIREhBDb93P6YA4wDafyXBGMAAAIAJf7qBT0EYwANABMAVUAXAQUQmAoPDBMHpwMQhQoKBw6EDAwBhQC4:8BAGQsNNwAAFQ8VLxU:FQMThQAHEAcCBwcEhQUv7TkvXe1dETMvK%05L%0SOS:tAC:9MjI:7S8zMTABIREhESERMzYSESERMyERIwYCBwU9:r:9av6:XUxbA6B0:ib3EVE5:uoBGv7mAhGeAckBAfyYAm25:sJ2::8AWP:iBPwEhgIWAEgAAAABAC0AAAfRBGUANQDcQAslFyooAgEgCRA3CLj:4ECMCRA3:yYBJjMxM:8ZARkODA4CAYYANQAHCIYJCQoeGSYDKiGnNQcKDA4zMQcqrwK:AgICES6VBAkCFQQqKiAPADsKNDVLCkQ1WwpUNWkMZjN:CnA1CjAtQC0CLS0BNQIhJjEzBwD2BIQFPxJPEgISEggKBwwOGR4HCfYPNx83AgUFNzYPNy83QDdgNwRdERI5L130FzkyL10Q:fQXOTIvXV0ALz8zLxc5:TIvXRIXOf0RFzkBhxD9wIcQ:cCHEN1dhxDdXTEwASsrXSkBASMRIREjASEBLgEnLgErAREyNjMyFhceARceATMRIRE%ATc%ATc%ATMyFjMRIyIGBw4BBwfR:mL%5Wb%mmb%5f5iAYMcIhgeSDdiEU8qi401DCkQNUZaAWZjQTEPKgwtlIwmVQ9iOEkcFiQcAb3%QwG9:kMCQhUyN0M0ASwCZF0WUBxcJgHD:j0BKlcaUhZVbAL%1DdAMTkUAAABAEH:4QRYBIMAPQCoQBQJAxkDTQhNDVwIXQ1hC3ILfiwJNbj:4LMJCzcvuP:gsw0QNyu4:9ZAIg0PNzsbp48czxzfHAMcHAYxkC2gLQItQAoMNy0tKZgxEAq4:8BALgkMNwoKDpgGFjsgDhA3TxwBHC4jgzcuHDc7BAkUgwC8Py8:Xz9:PwMJQAsPNwkvK10Q9u0SFzkv7S8vXSsAP%0zLys:7TMvK10REjkvXe05MTArKytdARQGBw4BIyImJxEzHgEzMjY3PgE1NCYnLgErATUzMjY3PgE1NCYnLgEjIgYHIxE%ATMyFhceARUUBgcVHgEEWF5QUcZwk%NsKE:EZiZpHyorJyIdWUSsiihvIC8pKiIdTitHvUknPvWAcLhHS1x7VmOEAT5giSkpIjIlAREsQQoMECouKzALCgbkAggLMCYfKgwKCjIlAQ0TMiIiJXZYWo4YCRqBAAABAKoAAAUZBGMACQBaQApaAm8CfwJ0BwQHuP:AQBgMEDcHBgECBAMIDwMIAkAJEDcChAC6Cwu4:8BACgoQN2ALcAsCAwe4:8C3CRA3B4QEuQoQ9u0rOV0rEPT9KzkALz8SFzkxMCtdISERASERIREBIQUZ:qP%GP7WAV0BxAFOAq:9UQRj:ZkCZwACAKoAAAUZBlUACQAXAJRACloCbwJ:AnQHBAe4:8C0DBA3ChC4:8BAIA4QNxAQjxQBFMYNDQcGAQIEAwgPAxe9CkALDTcKEb0QuP:AQBMLDTcQChAECAJACRA3AoQAuhkZuP:AQAoKEDdgGXAZAgMHuP:AtwkQNweEBLkYEPbtKzldKxD9:Ss5Ejk5LyvtLyvtAC8:Ehc5My:tXTMvKzMxMCtdKQERASERIREBIQMUBiMiJjUhHgEzMjY3BRn%o:4Y:tYBXQHEAU5839va4AEWAkhaW0cCAq:9UQRj:ZkCZwHyo87PomNhX2UAAAEAqgAABVIEZQAcAMBAZ08aTxtWAlMLXBloAWQLbxtxDwkCowG1AcUBAwEqCRA3AYcAHAAaJBg0GHQYlBgEGA8KD3sKAQ8KEQgcGhgDFQKnIAgBCAgBBwAVARUVEQ8GDwUBDRw0HFUcYxx1HAUKDxgaHAIBBxS4:8BAGwwPNxQUAAAQAAIALx4BAB5AHnAeAggDhAW5HRD2:TJdETNdL10zLysXOV0ALy8:PzMvXRESOS9d:REXORESOTkBXYcQ2V3AMTABhxD9K13AAF0pAQEjESERIRE%ATc%ATc%ATMyFjMRIyIGBw4BBwVS:mD%03P%mAFoZEwyDyoMN5ODJlUPYjxHGhYkHAG9:kMEY:49ASlYGlIWYl8C:tQ8OzE5FAAAAQAZ::kFAwRjACEAO0AlOQxJDAICmCEPABMTF5UPAYQAuiMPIx8jkCMDA4UgIKAgAiAgEi8zL13tXRD27QAv:TIvLz:tMTBdKQERIQ4BBw4BBw4BBw4BIyImIxEzMhYzMjY3PgE3PgE3IQUD:pj%1wMDAgcoHx5FIyiBPC9gCQsEFAoaNxJDLQoECAMD0QNoS1M3ocpAQUwcICYHASACChFAwb1GtHIAAQCqAAAF%gRjAAwAd0BCBgkfCi8KOgtNBH4EBgtADRA3GgUpBU8FSwoEA2ANEDcCVAkQNwUKAgMJBEALEDcEBAcLCQ8BBwkKCwMFAoQAug4OuP:AswwQNwW4:8C3CRA3BYQHuQ0Q9u0rKxD07REXOQAvMz8zEjkvKxIXOTEwKytdAStdKQERAyMDESERIQkBIQX6:qH:nv:%qwGHASEBIQGHArn%NAHM:UcEY:4CAf4AAAEAqgAABRgEYwALADtAJAOXMAhACHAIAwgIBQoHDwEFCQKEALoNMA1gDXANAwgDhAW5DBD2:TJdEPb9MgAvMz8zEjkvXe0xMCkBESERIREhESERIQUY:pj%Yv6YAWgBngFoAd:%IQRj:n0BgwD::wBY:90FJgSGAhYAUgAAAAEAqgAABRgEYwAHACdAFwOnBg8ABQGEALoJMAlgCXAJAwSEBbkIEPbtXRD27QAvMz:tMTApAREhESERIQUY:pj%Yv6YBG4Db:yRBGMA::8Aqv5kBT4EggIWAFMAAAABAFj:4gRxBIIAJwCIQCMwAz8JOxkxG0ADRQRMCEwJTBlEG0sfWx9rH3wgDiYgDBA3FLj:1rMNEDcOuP:gQBUMEDcQQAkQNzAQARAQF5cMED8kASS4:8BAIAkQNyQkHZcAFhAAJBAkICQDJCQpPylPKV8pAxqDBrsoEPTtXREzL10zAD:tMy8rXT:tMy9dKzEwKysrXQUiJicmJjU0Njc2NjMyFhcRIyYmJyYmIyIGFRQWMzI2NzY2NzMRBgYC85PzWlliaV5b7oBzwlQzFTsrKWJBkJufkkRtJCI0FjNVuR5GSUnelZ3kS0dCMij%zRIwFxYdt52iqB8VFCwV:s0oLwABAAoAAAQ%BGMABwA0QB8DAQSnBg%wBQEABQAChAUAAxADnwMDAwMJCE8JcAkCXRESOS9dM:0yLy9dAD:9Mi8xMAEhESERITUhBD7%mv6Y:poENANv:JEDb:QA::8AHv5kBRcEYwIWAFwAAAADAFr%ZAdgBhQAIwAwAD0AckBPfgh%DXMacx9:LX88Bh0AGx4MCQQGJzWYIRgQOy6YDwYWCxtWAFkSZgBpEgQkhAD3CTEbHisECYQMOIQS9wAMEAwCDAw:PhA:ID9AP38:BF0REjkvXf3tEO0XORD97V0APz8z:TI:M:0yEhc5PzEwXQEUBgcOASMiJicRIREOASMiAhE0Njc%ATMyFhcRIRE%ATMyEgE0JiMiBgcRHgEzMjYFES4BIyIGFRQWMzI2B2BKRUavb1JsIP6cKXRU4v5NREK2ZVJtJAFkKoVN4fT%k4GJGSkYFSoZiYP9OA8vHImBg4kUMwJLkeNNTksoEP47AcYYIQEuAQuP2U1KTiYVAdj%KRUl:t:%4qiZBAX9hgQEopoCewMFoqiomQT::wAaAAAFQARjAhYAWwAAAAEAqv7qBYoEYwALAD9ADwYCDwsIBKcBBYQICACFCrj:wEAUCQ03CgoNHw0vDU8NXw0EBIQBuQwQ9u1dETMvK%05L%0AL:0yLz8zMTApAREhESERIREzESEESfxhAWgBnAFodP6:BGP8lANs:JT98wABAHQAAATPBGMAFgBHQBsNBhoHdA4DAgkRmF8FbwUCBQUAFQkPABQBhAC4:8BADhMZNwAAGAqEAAkQCQIJL13tETMvK:0yAC8:MxI5L13tEjkxMF0pAREOASMiJjURIREUFhceATMyNjcRIQTP:pharGW30QFqCh4cYGAZUhoBaAGCExm3pAGy:v5KVScjIgUEAgQAAQCqAAAHWwRjAAsAPkAnCgYCDwgEpwEJhAD4CIQFBIQB%AAFEAWfBQMFBQ0MEA0gDUANYA0EXRESOS9d9O0Q:fTtAC:9Mj8zMzEwKQERIREhESERIREhB1v5TwFnAT4BZwE%AWcEY:yUA2z8lANsAAEAqv7qB88EYwAPAEtALwoGAg8MCASnAQ4NhQAACYQM%AiEBQSEAfgABRAFIAWfBQQFBREQDxE:EV8RfxEEXRESOS9d9O0Q:fTtOS:tAC8v:TIyPzMzMTApAREhESERIREhESERMxEhBo76HAFnAT4BZwE%AWd0:r8EY:yUA2z8lANs:JT98wACAAoAAAWuBGMACwAeAFNAHwSnDxgfGAIYGBMVpxYPBacTGAWEExMWAIMHDHoMAgy4:8BAEwkPNwwMIB8gLyBvIAMAFhAWAhYvXV0RMy8rXf0ROS:9MgAv7T:tEjkvXe0xMAE0JisBETMyNjc%ASUUBgcOASMhESE1IREhMhYXHgEEPFZRxMQ2RBARDAFyRDdEkXv9h:6gAscBE3mVQzw9AXhISP7bHxcWMBxWki43LgNv9P6JIzItlwADAKoAAAbUBGMACwAcACAAVEAaBKcPFh8WAhYWExQPBacTHw8eAIMHDHoMAgy4:8BAGQ4QNwwMHoQduiIPIh8iLyJwIgQWBYQTuSEQ9v0yXRD2:TIvK13tAC8:L%0:EjkvXe0xMAE0JisBETMyNjc%ASUUBgcOASMhESERITIWFx4BASERIQN8VlHExDZEEBEMAXJEN0SRe:2HAWcBE3mVQzw9Aeb%mAFoAXhISP7bHxcWMBxWki43LgRj:okjMi2X:i0EYwACAKoAAATuBGMACwAcAEVAFwSnDxYfFgIWFhMUDwWnEwCDBwx6DAIMuP:AQBEJDzcMDB4vHk8eAhYFhBO5HRD2:TJdETMvK13tAC:tPxI5L13tMTABNCYrAREzMjY3PgElFAYHDgEjIREhESEyFhceAQN8VlHExDZEEBEMAXJEN0SRe:2HAWcBE3mVQzw9AXhISP7bHxcWMBxWki43LgRj:okjMi2XAAABAFf:4gSBBIIAKgCXt0YHSSp1BwMguP:gQAkNEDcSMA0QNya4:%BALg0QNwsgDRA3GKdvGd8Z7xkDcBnPGd8ZAxkZCShAJAEkQAkQNyQkHacoEE8NAQ24:8BAIAkQNw0NFKcJFholF4RKAwEDvCxPLF8sAiUZJRkvDAEML10zMy8vXRD2Xf0ROQA:7TMvK10:7TMvK10REjkvXXHtMTArKysrXQEeARUUBgcOASMiJicRMx4BFx4BMzI2NyE1IS4BIyIGBw4BByMRPgEzMhYDwFloZlpa%JhuuVkxETctLGxRkaQM:f0B:hOmcERpLytFEzFi1GCH5AP%RdifmOhKS0stJQEdDiwWFR2NdOVwbxsVFDIOAR0pLEEAAAIAqv:dB5wEhgASACoAWkA4SQgBAJgwB0AHcAcDBxIHCAMQHJgKEAQPKJgQFgNIDQEHDSKEPwABAAADFoMNvCxgLAEGAoQDuSsQ9v0yXRD27RI5L13tEjldAC8:7T8:7RIXOS9d:TEwXQEjESERIREzNiQzIAAREAAhIAAlPgE1NCYnLgEjIgYHDgEVFBYXHgEzMjYC7dv%mAFo6SsBKPABIAE%:sD%4v7%:scC4CEjIx8eVzUyUCQhJSQdHlc5L1gB4v4eBGP%esng:sD%6:7r:sEBCjkreWtjhycoIxwqJ4xjZIImJiUhAAIAIgAABMoEYwAQABkAcLUGDBYMAge4:9C0DRA3AwS4:%BAOAkQNwSGBQUGBg8Rpz8DTwN:AwMDAwASpw8PAAUGQA0QNxaDCQQGAwkEBSALEDcFEgGEAJIbDxsBXRD2:TIvKxc5L%0rAC8vP%0SOS9d7RI5MTABhxD9K8AAK10pAREjASEBLgE1NDY3PgEzIQERIyIGFRQWMwTK:pmh:vP%bQFCcXVJPjeVXAKd:pnVSlNSUQGG:noBuDObiV1%LSYm:f8BGENAT0YA::8AWP:iBPwGFAI2AEgAAAEWAI7rAAATQA0DQCNwIwICACMgDwAlKzVdNQAAAQAp:mcFFAYUADsAbUBHBBMeHi8eOg5yEnIUch0HICAKDTcqIAoNNwwJA8oGBhAHAA0COZUQECeXIhsCCgUlJQIwhBm6PTA9YD0CCQoMAwGEBgUCuTwQ9jIy:RcyXRD27RI5Ly8vAC8:7T:tEjk:Ejkv7Tk5MTArK10BESERIzUzNSEVIRUhFT4BMzIWFx4BFRQWFRQGBw4BBw4BIyImJxEzMjY3PgE3PgE1PAEnLgEnLgEjIgYCEv6YgYEBaAFG:rpftGtSjTQyPAMCAgRXSkyzZzlhLCdVeSQnIwQBAQICCxQVSkEyaQMc:OQE1c9wcM:uSlEvNTKicC91SzR2TrT1TlBFAQMBBhktMLeaIlUuF08yL1UhICUhAP::AKoAAAQ2BowCNgILAAABFgCNugAACrYBAAkIAQElKzUAAQBY:%IEeASCACoAlbVGBUoMAhe4:9BACQ0QNyUwDRA3Ebj:4EAqDRA3ASANEDcfp28eAXAezx7fHgMeHg8DQBMBE0AJEDcTExqnDxBPKgEquP:AQCQJEDcqKiOnAxYeEx0eEwMAABAAAgAALE8sXywCIIRFCQEJuysQ9l3tXREzL10XOS8vAD:tMy8rXT:tMy8rXRESOS9dce0xMCsrKytdJQ4BIyImJy4BNTQ2Nz4BMzIWFxEjLgEnLgEjIgYHIRUhHgEzMjY3PgE3MwR4Scdzk:VZWmJsXFrwgW:QTjETTCUrckBxohcB:P37DZ6OSnYnKD0PMTQhMUdISd6VouFJR0IxJP7jEDISFBxtcuV5iB0UFC8O::8AX::hBHoEggIWAFYAAP::AKAAAAIcBhQCFgBMAAD::::uAAACzgYUAhYAdwAA::::xv5ZApAGFAIWAE0AAAACABn:%QfVBGMACwA6AGlAJ0keAQSnDzQfNAI0NBMVmDIFJSUplSEFpxM0BYQTEzIAgwcMegwCDLj:wEAYCQ83DAw8MDwBPEAJDjcVhSAyMDICMjIlLzMvXe0rXREzLytd:RE5L:0yAC:tL:0yLz:tEjkvXe0xMF0BNCYrAREzMjY3PgElFAYHDgEjIREhDgEHDgEHDgEHDgEjIiYjETMyFjMyNjc%ATc%ATchESEyFhceAQZjVlHExDZEEBEMAXJEN0SRe:2H:uEDAwIHKB8eRSMogTwvYAkLBBQKGjcSQy0KBAgDA8YBE3mVQzw9AXhISP7bHxcWMBxWki43LgNoS1M3ocpAQUwcICYHASACChFAwb1GtHL%iSMyLZcAAgCqAAAH5ARjAAsAJABhQCQUpxsEpxsPHh8eAh4eExgdDxcFpxMeGwWEExMXAIMHDHoMAgy4:8BAFQkPNwwMJh8mLyZPJl8mBBoWhBe5JRD2:TJdETMvK139ETkv7Tk5AC:tLz8zEjkvXTPtL%0xMAE0JisBETMyNjc%ASUUBgcOASMhESERIREhESERIREhMhYXHgEGclZRxMQ2RBARDAFyRDdEkXv9h:5y:pgBaAGOAWcBE3mVQzw9AXhISP7bHxcWMBxWki43LgIC:f4EY:6FAXv%iSMyLZcA::8AKQAABRIGFAAGAVkAAP::AKoAAAVSBowCNgISAAABFgCNIwAAD0AKAV8gAQAgHwYZJStdNQAAAgAe:mQFFwZVAAcAFQC4QD8IBUoFWANZBWYDBQAHAAUGBQSrAbkBAgGHAgMCAKQHtgcCB4YGBQYLAwcFGAMlAysFOANqBXsCdQN6BXQGCwK4:99ACgkPNwYhCQ83CA64:8BAMA4QNw4OjxIBEsYLAgAFNQZFBgILBg8FBBsVvQgPvQ4IDgYCAhcvF08XAgAGEAYCBi9dXREzLxI5OS:tL%0APy8:M10SOTkv7V0zLyszMTABKytdhxD9XcCHEP1dwAjACMABXQkBIQEhEwEhARQGIyImNSEeATMyNjcCpQEAAXL9kP56sv5LAXoCyt:b2uABFgJIWltHAgGNAtb6AQGkBFsB8qPOz6JjYV9lAAABAKr%6AUYBGMACwA6QCMKBg8DCKcABQKFfwPfAwIDAwUJhAC6DTANYA1wDQMIhAW5DBD27V0Q9u0SOS9d7QAvM%0vPzMxMCkBESERIREhESERIQUY:mn%wP5pAWgBngFo:ugBGARj:I8DcQABAL4AAATwB2sABwAmQBQGBgCRAwMCBYAGBgkfCQEBfwK1CBD27V0RMy:tAC8:7TMvMTABESERIREhEQI%:oAC3QFVBLH7TwXRAZr9RgABAKoAAAQ2Bc4ABwAlQBQGAwCYAw8CBYUGBglwCQEBhAK5CBD27V0RMy:tAC8:7T8xMAERIREhESERAhL%mAJZATMDafyXBGMBa:2bAAABAMwCEAc1AxwAAwAhQAkB1gJPAV8BAgC4:8C2DQ83AAAFAS8RMy8rXQAv7TEwASERIQc1%ZcGaQIQAQwAAAQAvgAACd0F8AAJABUAIQAlALpADkIBTwZTAV4GZwF3AQYGuP:AQBgNEDcvASkCKwc:AT0CWRtoGwcCXg0QNwe4:15ASA0QNyXKYCJwIgIiIh:JAA1wDQINDRnJEwQCAwgHBAEGAwEjIiMiChy%fxABEBAKAAYBAgdACRA3B4BwAK8AAgAABBa%CgonArj:wLcJEDcCgAS1JhD27SsRMy:tEjkvXf0rETk5ERI5L13tEjk5Ly8ALz8SFzk:7TMvXe0zL13tMTArK10BK10pAQERIREhAREhARQCIyICNTQkMzISBTQmIyIGFRQWMzI2ASEVIQV0:qL9:v6qAcEBnwFWBGn:5ub:AQDl6P3%2FxhYVxeYV1e:eMCwP1AA:r8BgXR:L8DQf5C3f8AAQDd3v::AN%NioqNjoSE:gHUAAEAqgAABRgEYwAHACdAFwOnBg8ABQGEALoJMAlgCXAJAwSEBbkIEPbtXRD27QAvMz:tMTApAREhESERIQUY:pj%Yv6YBG4Db:yRBGMAAAIApgI2BC0F5gAKAA0AVEAyDAQNFA0CDQYGB0YHVgdmB3AGdgcFDAYHCQEN5m8FfwUCBQUDBwMD6QAHDATjCQABAQUvMy8zM:0yMi8APz8SOS9d7Tk5ETk5XTEwAYcQ3V0EwAEjFSE1IREBIREzIREBBC2n:vr%JgHLARWn:lf%ugL7xcUBBQHm:c8BUv6uAAEA2QIcA:AF2gAeAFRADmsFfAUCFBQR5hwcFQMHuP:AQA4MDjcHBwvnA%oY5xUDALj:4kAPCQs3GOMVFhYVBg7lAAAGLzMv7RI5OS8v7SsAP%0:7TMvKxESOS:9Mi8xMF0BFAYjIiYnNTMWFjMyNjU0JiMiBgcRIRUhFTY2MzIWA:Dd2Ge8Pxc%ljllaWuFPmcnAtD%NhM:FbTAA3KitCEV2BomOEc5OQsDAg3OeAIBlAABANkCNQQLBdoABgBGQCwDAQAB4wICAwAD6AUDAuk5AEkAagB6AAQBAwJeDBA3AkAJCzcCAAACAAUBBS9dMzMvLysrOTldAD8:7TkxMAGHEO2HwAkBIQEhNSEEC:4l:tAB4v33AzIFEv0jAs7XAAMAsgIaBBYF9AAZACgANwCRQDoPCw8VCRY6CzYSOhU8LEoLSitZC1srZSJ1Ig0GAhkDFhApAyYQBDXmLwomFgQQA%od5hAEDyABGuQTuP:AQBceJjcTIOQNKeQKDRMWBAYAAAEAADLkBi:tMy9dEhc57S:tLyvtXQA:7T8SFzntXUNUWEAROyxLLFssZiN2IwUjJh0sNS8REjkREjldWTEwXQEUBiMiJjU0Njc1LgE1NDYzMhYVFAYHFR4BATQmIyIGFRQWFx4BFz4BEzQmJy4BJw4BFRQWMzI2BBbh0tDhWGFSROWyws1NU2Fa:tNGOzRLLj0YNxAfFxU:SRVCCyArXkE4XgMzeaCafE9tJwYqZkZ5jIhzRnkkBiVjAVguPDcqHjYZChIEHUf%cC8wGwgVBBZGKDpIMQAAAQENAi8DDAXVAAgAHUAOA%YEBAcDAekDBwDkAwIvM%05LwA:PzMv7TEwASERIzUyNjczAwz%6%pwlQjyAi8CX7ZHSgACAGf:4QdyBfAAHQA1AG9ATicFKQdvDH8MBAzILxsBGxUDCwADJ5IKCRoJKgl6CQQJBDOSBQMVAyUDdQMEAxMUELEYCQwbAwYhfT83QAACADcgN4A33zfvNwQtfQa3NhD27V0Q1l3tEhc51P3EAD9d7T9d7RI5OT:dXe0xMF0BEAAhIAAREAAhMgQXMzI2NTQmJzUzHgEVFAYHHgEBPgE1NCYnLgEjIgYHDgEVFBYXHgEzMjYGZv5o:pj%mf5oAZgBZ98BRGEVUUUYC%gKDrGBExP%Azg2PjIzhUhJgTYyPz0yMoZKSoYC6P6c:l0BowFkAWcBoaGTSUIoVhgTInskn4gJP43%PES5fYa8Ojw2NDw4xYKFuzs7ODkAAAIAWP:dBY8FnAAdADUATbdDGVQcZxwDDrj:wEAlCQ03FRvGDQ8AAySYCRAwmAMWFBCxGAkMGwMGHoMAvDcqgwa7NhD27RD27RIXOdz9xAA:7T:tEjk::c0xMCtdARAAISAAERAAITIWFzMyNjU0Jic1Mx4BFRQGBx4BBTQmJy4BIyIGBw4BFRQWFx4BMzI2Nz4BBSb%vf7c:tz%vQFFASJEfDVoUUUYC%gKDo9POzr%iyQgIFo0NFElISciISBZOTFZHyMjAjH%6:7BAT8BFQEXAT4SEU5CKFYYEyJ7JJOEEEvFdWOGKCkiHConiGdchyknJCEnK3kAAQCp:%EHCAcKAB8ARkAtGx4BGR:IEAMHAwySNQNFA3UDAwMTGBSxHA9:PyEBACEAIQEIfwAHjwefBwMHL13tXRDeXe3U:cQAP13tPz:9zTEwAF0BEAAhIAAZASERFBYzMjY1ESEyNjU0Jic1Mx4BFRQGBwXW:rD%uf65:rEBgoKSkIUBQVFFGAvoCg6xgQIb:uz%2gEmARMDt:xfm5iSoQOhTkIoVhgTInskn40JAAABAKH:4QY7BZwAJABcQEAKBhoGGyNME1sTbBN:B3oTCB4kyBUPAgUJDxGVBRYBHRmxIRQChDAAQAACACYfJgEAJl8mnyawJsAmBQuECLklEPbtXXEQ1l3tMtT9xAAvP%0:Ejk::c0xMF0pATUOASMiJjURIREUFhceATMyNjcRITI2NTQmJzUzHgEVFAYHBQn%mGSmc7rJAWoLFBNNRS5wNAEnUUUYC%gKDrGBfExP1tEC2:3TVXElJSIiIQMcTkIoVhgTInskn40JAAAB:OwFEf5pBowAFgA%QCYDQBQYNwMGBgUMFGAFAQWABJAEAgQFQAkNNwUFEY8JnwkCCbAAES:d7V0SOS8rzV0AL13UzRI5L8UrMTABFAYHFSM1NjY1NCYjIgYHIzU2NjMyFv5pSzmyLzAmIR8lGAMTTit4eQXySUkUO3AMMCcYHQkJcwYMXAAAAfy1:ln%J:9qAAMAE0AJMAIBAgEcAL4BL%0AP81dMTABIREh:if%jgFy:lkBEQD:::v%BQP%VAaMABcAQ:qIAAD:::xtBQP%wwaMABcAjfqIAAAAAgEaBQMGAQaMAAYACgA:QA0LAhsCAgkCAQkKBAMFuP:AQA4NEDcFBQMHCWAAcAACALj:wLUNEDcAAAQvMy8rXdbNAC8zLysSFzkvMTBdASEnByEBMyEDIxMEl:74ubj%:AFB%wKr0LN8BQPb2wGJ:vYBCgAC:7AFAwSXBowABgAKAEFADQsCGwICCAIBCQgEAwW4:8BADw0QNwUFAwkHBGAAcAACALj:wLUNEDcAAAQvMy8rXRDWzQAvMy8rEhc5LzEwXQEhJwchATMBIwMhBJf%%Lm4:vwBQfv93bPQAQcFA9vbAYn%9gEKAAACARoFAwWBB1IABgAdAHNAFwsCGwICCkAUGDcKDQ0MExsMAgEMAwMFuP:AQCgNEDcFBQOAC5ALAgsMQAkNNwwMGI8QnxACELAHGEAJEDcYYABwAAIAuP:AtQ0QNwAABC8zLytd1Cvd7V0SOS8rzV0ALzMvKxIXOS:UzRI5L8UrMTBdASEnByEBMyUUBgcVIzU2NjU0JiMiBgcjNTY2MzIWBJf%%Lm4:vwBQfsCK0s5si8wJiEfJRgDE04reHkFA9vbAYksSUkUO3AMMCcYHQkJcwYMXAAAAgEaBQMElwgBAAYAIABwQA4LAhsCAgkgCxA3AQIDBbj:wEAuDRA3BQUKAxQUHcoACn8KAgoKEMoXDwcBDwdgB3AHAwcDE7AUBCCwB2AAcAACALj:wLUNEDcAAAQvMy8rXdbtENbtAC8vXXHU7TMvXe0zLxESOS8rEjk5MTArXQEhJwchATMBBgYjIiYnJiYjIgYHIzY2MzIWFxYWMzI2NwSX:vi5uP78AUH7AT4KkYIvVSMgShkxIQPbBpt7MFYkJUAbMCQCBQPb2wGJAXWpoyUVEydAOpe0JBQUI0A2AAACAVYE5wRbB4wADQARAExAGREQEA1QBmAGcAYDBgYKxj8DAQMRIAwQNw64:8BAEw4QNw4fEC8QAhAQBg2xAAAHsQYv7TMv7RI5L13NKzErAC9d7TMvXTMzL80wARQGIyImNTMUFjMyNjUTAyMTBFvKuLjL31FTTlV20LN8BmSyy8G8Z2VlZwEo:vYBCgAAAgFWBOcEWweMAA0AEQBMQBQQDw8NUAZgBnAGAwYGCsY:AwEDEbj:4EAYDBA3EEAOEDcQEA4gDgIODgYNsQAAB7EGL%0zL%0SOS9dzSsxKwAvXe0zL10zMy:NMAEUBiMiJjUzFBYzMjY1JyMDIQRbyri4y99RU05VOrPQAQcGZLLLwbxnZWVnHgEKAAACAVYE5wRbB8EADQAkAG1ARhFAFBg3ERQUExoiEwATA1AGYAZwBqAGBAYGCsY:AwEDgBKQEgISE0AJDTcTEx%PF58XAhewMA5ADpAOAw4OBg2xAAAHsQYv7TMv7RI5L13tXc05LyvNXQAvXe0zL10SOTkv1M0SOS:FKzEwARQGIyImNTMUFjMyNjU3FAYHFSM1NjY1NCYjIgYHIzU2NjMyFgRbyri4y99RU05VOUs5si8wJiEfJRgDE04reHkGZLLLwbxnZWVnw0lJFDtwDDAnGB0JCXMGDFwAAAIBHQTnBJQIAQANACcATkAwECAMEDcABgYDGyTKfxHQEQIRF8oeDw5gDnAOAw4Kxj8DAQMasBsGJ7AODbEAB7EGL%3U7dTtENbtAC9d7S9d1O3dXe3EEjkvMzEwKwEUBiMiJjUzFBYzMjY1AQYGIyImJyYmIyIGByM2NjMyFhcWFjMyNjcEW8q4uMvfUVNOVQEYCpGCL1UjIEoZMSED2wabezBWJCVAGzAkAgZkssvBvGdlZWcBnamjJRUTJ0A6l7QkFBQjQDYAAQIuBREDqwaMABYAW0ALA0AUGDcDBgYFDBS4:8BAJQ4QNxQJkAUBx1AFYAUCBYAEkAQCBAVACRA3BQURjwmfCQIJsAC4:8C0DhA3ABEv3SvtXRI5LyvNXQAvXV5dXtQrzRI5L8UrMTABFAYHFSM1NjY1NCYjIgYHIzU2NjMyFgOrSzmyLzAmIR8lGAMTTit4eQXySUkUO3AMMCcYHQkJcwYMXAACAVsGPARWCAEABgAgAHtACQJADRA3iwIBHbj:wEA9FBg3EEAUGDcUHcVvCn8K:woDCgcQxQ8XAQ8XcBcCFwECBUANETcFDwOQAwIPAz8DzwMDAyCvB2AAcAACALj:wEAJDRA3ABOvFAAELzPW7S8rXdbtAC9dcc0rOTkvXXHtPN1d7TwrKzEwXSsBIycHIzchEwYGIyImJyYmIyIGByM2NjMyFhcWFjMyNjcEVvmHhvX4AQv2Cnl6JUklKScUHSYIuAp5eiVJJSknFB0mCAY8T0%tARhRhBQQEg0gI1GEFBASDSAjAAIBXQY8BFQIAQANABEAZbYPEQEPEQERuP:AtA0QNxEQuP:AQCMMEDcQABCwBsAGAgbACgEKDwMBDwM:A38DzwMEA28QfxACDrj:wEAMDBA3DhANsBAAB7AGL%3UOe0vzStdAC9dcc1dzV05OS8rLytdcTEwARQGIyImNTMUFjMyNjU3ByM3BFS:vr681EtdWk1jvKleB0JYrq9XI1FRI7:OzgAAAgFdBjwEVAgBAA0AEQBhtg8RAQ8RARG4:8C0DRA3EQ64:8BAMAwQNw4ADrAGwAYCBsAKAQoPAwEPAz8DfwPPAwQDYA5wDgIQQAwQNxAODbAOAAewBi:t1DntL80rXQAvXXHNXc1dOTkvKy8rXXExMAEUBiMiJjUzFBYzMjY1ByMnIQRUv76%vNRLXVpNTam8AQcHQliur1cjUVEjD84AAAIBXQY8BFQIAQANACQAjUAUERQUExoPIgEPInAivyIDIo8TARO4:8BARw0QNxMAEwMwBgEGBsAKAQoPAwEPAz8DfwPPAwQDTx9fHwISE0AJEzcTEzAfsB8CH48XnxcCF5AOoA7PDgMODgYNsAAAB7AGL%0zL%0SOS9dzV3NXTkvK81dAC9dcc1dMy9dEjk5LytdL11xzRI5L8UxMAEUBiMiJjUzFBYzMjY1JxQGBxUjNTY2NTQmIyIGByM1NjYzMhYEVL%%vrzUS11aTRwuLmsYKBoVGRoOAg4yG0hWB0JYrq9XI1FRI1crOA8vVAUZFxIRCAVdBQg5AAACAV0GPARUCAEADQAnAHixGyS4:8BAGBcZNyS:Ec8RAn8RAREOF0AXGTcXDx4BHrj:wEAKDRA3HgBwBgEGCrj:wEAiFxk3Cg8D0AMCDwM:A38DzwMEAxqwGxsGJ7AODg2wAAewBi:t1O08EO0QPBDtAC9dcc0rzV05LytdzSs83V1xzSs8MTABFAYjIiY1MxQWMzI2NTcGBiMiJicmJiMiBgcjNjYzMhYXFhYzMjY3BFS:vr681EtdWk3UCnl6JUklKScUHSYIuAp5eiVJJSknFB0mCAcGWHJzVxooKBr7UXoUEBINICNRehQQEg0gIwACASkGZgXhCAEABgAdAI9AFgsCGwICCkAUGDcKDQ0MEwxADhA3DBu4:8BALQ0QNw8bARsCAQwDAw8FcAUCBQUPAwEDgAuQCwILDEAJEDcMDBiPEJ8QAhCwB7j:wEAODhA3BxhACRA3GHAAAQC4:8C1DhA3AAAELzMvK13UK90r7V0SOS8rzV0AL10zL10SFzkvXSvEK80SOS:FKzEwXQEhJwcjATMFFAYHFSM1NjY1NCYjIgYHIzU2NjMyFgSI:v2vrv8BN:ECkEs5si8wJiEfJRgDE04reHkGZqurAUtKSUkUO3AMMCcYHQkJcwYMXP::ABj%WQYeBdECNgAkAAABFwJLBbsAAAAKtgIADQ4FACUrNf::AFb%WQS3BIMCNgBEAAABFwJLBTIAAAAKtgIIMzQZLyUrNf::ABgAAAYeCAECNgAkAAABFwJWAEMBdQAKtgIAEA8FACUrNf::AFb:4gS3BowCNgBEAAABFwJKBRQAAAAKtgIdNjUZLyUrNf::ABgAAAZEB%0CNgAkAAABFwJOAEMBYQAesgMCD7j:wEAQExY3AA9AD3APAwAPCwUAJStdKzU1::8AVv:iBbsGjAI2AEQAAAEWAk66AAAMtwMCDDUxGS8lKzU1::::8wAABh4H7QI2ACQAAAEXAk8AQwFhABNADQMCHw9vDwIADwsFACUrXTU1AP:::2r:4gS3BowCNgBEAAABFgJPugAAE0ANAwJvNX81Agw1MRkvJStdNTUA::8AGAAABiQIAQI2ACQAAAEWAlxDAAAbQBUDAgAPQA9wD6APwA:wDwYADwsFACUrXTU1AP::AFb:4gU7B1ICNgBEAAABFgJQugAAEUALAwJ:NQEANTEZLyUrXTU1AP::ABgAAAYeCAECNgAkAAABFgJXQwAADLcDAgAPCwUAJSs1Nf::AFb:4gS3CAECNgBEAAABFgJRugAAEUALAwJ:NQEMNTEZLyUrXTU1AP::ABj%WQYeB%0CNgAkAAAANwDWAEMBYQEXAksFuwAAABRADgMAFBUFACUCAA8LBQAlKzUrNf::AFb%WQS3BowCNgBEAAAANgDWugABFwJLBTIAAAAYQBEDCDo7GS8lAn81AQw1MRkvJStdNSs1::8AGAAABh4IAQI2ACQAAAEWAlhDAAAMtwMCABELBQAlKzU1::8AVv:iBLcHjAI2AEQAAAEWAlK6AAAMtwMCDDcxGS8lKzU1::8AGAAABh4IAQI2ACQAAAEWAllDAAAMtwMCABELBQAlKzU1::8AVv:iBLcHjAI2AEQAAAEWAlO6AAAMtwMCDDcxGS8lKzU1::8AGAAABh4IAQI2ACQAAAEWAlpDAAAMtwMCABELBQAlKzU1::8AVv:iBLcHwQI2AEQAAAEWAlS6AAAMtwMCDDcxGS8lKzU1::8AGAAABh4IAQI2ACQAAAEWAltDAAAMtwMCABELBQAlKzU1::8AVv:iBLcIAQI2AEQAAAEWAlW6AAAMtwMCDDcxGS8lKzU1::8AGP5ZBh4H2QI2ACQAAAA3ANkAQwF1ARcCSwW7AAAAHUATAlARAREDABscBQAlAgARCwUAJSs1KzUAEV01AP::AFb%WQS3BmQCNgBEAAAANgDZugABFwJLBTIAAAAUQA4DCEFCGS8lAgw3MRkvJSs1KzX::wC%:lkE8wXRAjYAKAAAARcCSwV4AAAACrYBAA4PAQAlKzX::wBY:lkE:ASGAjYASAAAARcCSwWNAAAACrYCGR8gDwAlKzX::wC%AAAE8wgBAjYAKAAAARcCVv:sAXUAFUAQAQAdEB1AHXAdBAAdDAIDJStdNQD::wBY:%IE:AaMAjYASAAAARcCSgVRAAAAFUAQAgAuMC5ALnAuBC0uHQ8AJStdNQD::wC%AAAE8wfHAjYAKAAAARcA1wAAAXUAEkALAVAZAQEAGQwCAyUrNQBdNf::AFj:4gT8BlICNgBIAAABFgDX6wAACrYCACodDwAlKzX::wC%AAAGAQgBAjYAKAAAARcCTgAAAXUAFkANAgFQEAECAQAQDAIDJSs1NQBdNTX::wBY:%IF7AaMAjYASAAAARYCTusAAAy3AwIZIR0PACUrNTX:::%wAAAE8wgBAjYAKAAAARcCTwAAAXUAFkANAgFQEAECAQAQDAIDJSs1NQBdNTX:::%b:%IE:AaMAjYASAAAARYCT%sAAAy3AwIZIR0PACUrNTX::wC%AAAF4QgBAjYAKAAAARYCXAAAABayAgEQuP:AQAkJDzcAEAwCAyUrKzU1::8AWP:iBWwHUgI2AEgAAAEWAlDrAAAXQBEDAgAhICEwIWAhBBkhHQ8AJStdNTUA::8AvgAABPMIAQI2ACgAAAEWAlcAAAAMtwIBABAMAgMlKzU1::8AWP:iBPwIAQI2AEgAAAEWAlHrAAAMtwMCGSEdDwAlKzU1::8Avv5ZBPMIAQI2ACgAAAA3ANYAAAF1ARcCSwV4AAAAHUATARBQEAECABUWAgMlAQAQDAIDJSs1KzUAXRE1AP::AFj%WQT8BowCNgBIAAAANgDW6wABFwJLBY0AAAAUQA4DGSYnDwAlAhkhHQ8AJSs1KzX::wB7AAAD4wgBAjYALAAAARcCVv9XAXUAD0AKAYARAQAREAQJJStdNQD::wCqAAACPQaMAjYA1QAAARcCSgPUAAAACrYBAAkIAgMlKzX::wB7:lkD4wXRAjYALAAAARcCSwS5AAAACrYBAA4PBAklKzX::wCg:lkCHAYUAjYATAAAARcCSwPyAAAACrYCAAoLAgMlKzUAAgBn:%EGCgXwABoAJQA3QBwLG30AJxx9FQoVFBcckQoUChQKIg%SFwQikgQTAD:tP%0ROTkvLxDtERI5AS:G7RDe:cUxMAEQBwYhICcmJyYRISYnJiMiBwYHIxE2ISAXFgEhFhcWFxYzMjc2Bgq3v:6k:p%wcCcpBBcsmU5lhYI6ZCfxAQ0BXMC2:nv9aAYONYE9RZZYTQLo:qDO2dKGjZYBOOdBIUUfUwFUdtnO:hwqMbk7HHVnAAIAVP:iBPgEhgATABgAO0AgCBSDABoVgw4HFZgODRAPDR8NAgcNBw0XCpgQEBeYBBYAP%0:7RE5OS8vXRESOe0BL8btEN79xTEwARAHBiEgETUhAiEiByMRNjMgFxYBIRYzMgT4sav%3v3aAzgQ:pvcqijo7QE6tMz%lf4tBtfnAj3%4qKbAhl%ARCBASFdhZb%O%MAAAEAHAAABPAF0QANAC1AFgAPAwIFfwsJBwUIlAsCAgcBkQwDBxIAPz:tETkvwP3AAS:OwP3AzRDGMTABIREhFSERIREjNTMRIQTw:U4BPf7D:oCiogQyBLH%3%n9WQKn6QJBAAABACkAAAQ2BGMADQAtQBYADwMCBYQLCQcFCMoLAgIHAZcMDwcSAD8:7RE5L8D9wAEvzsD9wM0QxjEwASEVIRUhESERIzUzESEENv3cAUb%uv6YgYEDjANpy8:%MQHPzwHFAAEAEv6qCNsF1AA7AK1AXUY5ASc5ARoTIAwKCQp:CwwUCwwLDgkHEyAHOQMEA386ORQ6Ojk6An87KSMENQUwIwV:Bzk1BDCRKSMvIRogFAwOCRORFCEgI5EJCAQFCAgHIQMKCwc7OpECAwcSAQAvP9DA:cAQ0MA:Ejkv0MAQwP3AENDtETk5ERI5ENAROe0ROTkBL:3Q3BE5ORE51u0zhxArh33EARDQGNwROTnWhyuHfcQBERI5MTBdXQEhESMBIxEhESMBIQEmJyYnJiMjETI2MzIWFxYXFhcWMxEhETY3Njc2NzY2MzIWMxEjIgcGBwYHBgcBMwjb:p9t:oVd:oJi:oX%OAHzQ0ElKjJNWBppGpm0QBczMiQ5WQF%XzYkMxgyPbiUGmkaWE4tHTQoDycrATu8:qoBVgJj:Z0CY:2dAvonq2ArMwFHA3GJOnJmJjsCav2WATgkajpyhnQD:r0sHHVaGkUa:h8AAQAt:uoH0gRlADMAuUBpGBEdB4sMqwy7DAMMCgkKhAsMFAsMCw4JEQeEMaQxtDEDMQMEA4QyMRQyMjEyAoQNMwEzJiAELywgBYQABwEHMS8ELJcmICseGB0SDA4JEZcSHh0gygkIBAUICAceDwoLBzMylwIDBxIBAC8:0MD9wBDQwD8SOS:QwBDA:cAQ0O0ROTkREjkQ0BE57RE5OQEvXf3A3Dk5ETnWXe0zhxArh33EAV0YENw5OdaHK4d9xAFdEMAROTEwASERIwEjESERIwEhASYnJiMjETI2MzIWFxYWFxYzESERNjc2NzY3NjMyFjMRIyIHBgcTMwfS:r9e:uVm:ppm:uX%YgGDLSk1aGIXXBd8lTwWYCElXgFmYSMgMRcuZ%YXXBdiaDUqLN6m:uoBFgG9:kMBvf5DAkIiXHcBLAJWayyrFhcBw:49ARYUVytXwQL%1HdeIP61AAABAL7%qgYsBdQAIQBmQDcfAwQDfyAfFCAgHyAhEAoEHQUYAn8hIwoFfwcfHQQYkRAKFwgKkQRvBQEFBQcIAyEgkQIDBxIBAC8:0MD9wD8SOS9dwO0Q0BE57RE5OQEv:cAQ1e3GETk5ETkRM4cQK4d9xDEwASERIwEjESERIRE2NzY3Njc2NzYzMhYzESMiBwYHBgcBMwYs:p93:khe:oABgFssN0QePlFWWqIZZBlvVjgjM1lFAW:Z:qoBVgJZ:acF0f2hBCAodThvjzU2A:69OCRiqib%HQABAKr%6gVUBGUAHQBvQD6AG6AbsBsDGwMEA4QcGxQcHBscHQ8KBBkFFgKEHR8KBYQABwEHGxkEFpcPChUICpcEBQUHCA8dHJcCAwcSAQAvP9DA:cA:EjkvwO0Q0BE57RE5OQEvXf3AENbtxhE5ORE5ETOHECuHfcQBXTEwASERIwEjESERIRE2Njc2NzY2MzIWMxEjIgcGBxMzBVT%v2H%03P%mAFoY08wFy47mHoXXBdiaDUqLOmw:uoBFgG9:kMEY:49ASxVLFZqVwL%1HdfH:61AAEAvgAABisF1AAjALVAbQYiFiICKRIBKwIBIQMIFBgUAhQPHLYjAaQjAX4jAV8jbyMCAiYjASMBAgF:ACMUACMAHCUPAgMOBAsGfwAIAQgjIQUckRQLGwkNEA4OCQuRBQZ5AgFrAgFZAgEPAh8CAgIGBAYEBggJAwEACBIAP9DAPxI5OS8vEjldXV1dEMDtETkvOTkQ0BE57RE5OQEvXf3A3sDdwMAQ1taHK4d9xAFdX11dXV0REjldEjkxMABdAV1dISEBFSMRIxEhESERNjcRMxE2NzY3Njc2MzIWMxEjIgcGBwYHBiv%Kf65cV7%gAGAPiBxKToQHFFWWqIZZBlvVjgjM1lFAb:rAYX9pwXR:aEDCwGP:tU4bR4zjzU2A:69OCRiqiYAAQCqAAAFUgRlAB4AoUBhKwEBHAI5EkkSAhIPGTQeRB4CAB4BDwEBHgECAYQAHhQAHi8AAQAZIA8CAw4ECwaEAAgQCKAIsAgECB4cBRmXEgsYCQ0QLw4BDg4JC5cFfQIBAgQgBAEGBAYECAkPAQAIEgA:0MA:Ejk5Ly9dEjldwO0ROS9dOTkQ0BE57RE5OQEvXf3A3sDdwMAQ1tZdhyuHfcQBXV1dERI5XRI5MTBdISEDFSMRIxEhESERNjcRMxE2NzY2MzIWMxEjIgcGBwVS:mDTcVz%mAFoOCRxHjw7mHoXXBdiaDUqLAE41wFc:kMEY:49AQYBXv76N25qVwL%1HdfHwABAL7%qgaIBdEADwBFQCgCfw8OCwR:AA5QDmAOAw4RCgV:AAcBBwuRXwUBBQUHDAgDDpEDBxIBAC8:0O0:wBI5L13tAS9d:cAQ3F39wBDd7TEwASERIxEhESERIREhESERMwaI:p%y:cn%gAGAAjcBgJP%qgFWApD9cAXR:d8CIftMAAABAKr%6gWMBGMADwA:QCMChA8OCwSEEA4BDhEKBYQABxAHAgcLlwUFBwwIDw6XAwcSAQAvP9DtP8ASOS:tAS9d:cAQ3F39wBDd7TEwASERIxEhESERIREhESERMwWM:r%b:mL%mAFoAZ4BaHT%6gEWAd:%IQRj:n0Bg:yUAP::AAkAAAXcBdECFgA8AAD::wAe:mQFFwRjAhYBxAAAAAEACQAABdwF0QAQAH9ASEIPATAPASMPARQPAQgMAQ8ODxAOfw0MFA0MTw0BDQwHDxAAAQ8BEH8AARQAAQABAwV:EAkBCQcIBZQCAQwLCw0HEAAODQMHEgA:P8DQwBESOS85OcD9wAEvzl39zdDdhysQAMGHBX0QxAEQ0BjdXYcrCH0QxDEwAF1dXV1dAQEVIRUhESERITUhNQEhAQEF3P3bATL%zv6A:tABMP3SAbQBQgE3BdH8b1HZ:uoBFtk:A6P9wAJAAAEAHv5kBRcEYwAOAHNAQKINAQJDDQEADRANAg0MDQ4MhAsKFAsKIAsBCwoHDQ4AAQ0BDoQAARQAAQABAgSECQcHBMoBCgoLBg4ADAsPBhsAPz:A0MAREjkvwP3AAS:N:c3Q3YcrEADBhwV9EMQBENAY3V2HKwh9EMQxMABdXV9dAQEhFSEVITUhNSEBIQEBBRf%LwFE:rz%mP7KATb%QAF6AQ0BAARj%7jZ3t7ZBEj9TAK0AAEAGP6qBhUF0QAPAGpAQA0MBQkOCgsGCQ4HCwYIAwQMBQgDCQMIA38OCRQODgkODwULBgt:DAUUDAUMAn8PEQgGCwwJCAMPDpECAwUGEgEALz:A0MD9wD:A0MABL8YQ1u3WhyuHfcQBETOHGBArh33EDw8PDzEwASERIwEBIQEBIQEBIQEBMwYV:p9s:r:%uf5YAhD9%wG7ATYBPwGp:fgBS9b%qgFWAer%FgLuAuP%MAHQ:Sz%IAABABr%6gVEBGMADwCsQHOgDQFnDXcNAkYNAa8HAUsHawd7BwPCCgGgCrAKAjYKARUKAc0EAa8EvwQCPgQBGgQqBAINDAUJDgoLBgkOBwsGCAMEDAUIAwkDCAOEDgkUDg4JDg8FCwYLhAwFFAwFDAKEDxEIBgsMCQgPDw6XAgMFBhIBAC8:wNDA:cA:wNDAAS:GENbt1ocrh33EAREzhxgQK4d9xA8PDw8xMABdXV1dXV1dXQFdXV1dXQEhESMDAyEBASETEyEBEzMFRP6:Z:D2:mQBu:5MAaTs7QGd:kv6xP7qARYBUP6wAjECMv62AUr91:69AAABAIMAAAWOBdEAHQBTQCwEGQYAFwEXFxAbAn8AHxB:AA0QDQINFxcOGxYZkgkHBAIJBgkGCQEcDgMBEgA:P8ASOTkvLxEzMzMQ7TIyETkvAS9d7RDW:cAROS9dwN3AMTAhIREGBxEjEQYjIicmNREhERQXFhcWFxEzETY3ESEFjv6AalpxKz7agpEBgjIhPB4ncW1XAYACJxYO:ugBDQJodNkCJv6ft0UtFwwFAWz%jgIPAqcAAAEAdAAABM8EYwAbAFtANAQXBgAVEBUCFRUQGQKEAB0QhKANATENAQANEA0gDQMNFRUOGRQXmAcEAgkGCQYBGg4PARIAPz:AEjk5Ly8zMzPtMjIROS8BL11dXe0Q1v3AETkvXcDdwDEwISERBgcVIzUGIyInJjURIREUFxYXETMRMjcRIQTP:phCTHE1N69ocQFqKCJAcVI8AWgBgg4Mw7UEVVyqAbL%:pMzKw8BFP7hCQIEAAEAvgAABckF0QATAClAFAJ:ABUNCH8KDQ%SCAYGCgsDAQoSAD:APxI5LzPtMgEv:cAQ1u0xMCEhETQnJiMiBxEhESERNjMyFxYVBcn%fjJCxW9h:oABgOm12oKRAWG3RVsR:VkF0f3ZMWh02QD::wCqAAAFEgYUAhYASwAA::8AZ::hBgoF8AIWAokAAP::AFT:4gT4BIYCFgKKAAAAAwBn:%EGZgXwAAsAFgAhAENAKgggGCACBxsXGwIHEhcSAggOGA4CDBd9ACMYFn0GDJEYGB4QkgkEHpIDEwA:7T:tETkv7QEv:cUQ3v3FMTBdXV1dARAAISAAERAAISAABSYnJiMiBwYHBgcBIRYXFhcWMzI3NgZm:mb%mv6a:mcBlwFoAWgBmP5hG0VinpxkMSAKBQLH:TEHDzyJQ0qhYU8C6P6Z:mABoQFmAWkBn:5guX1RcnA3YyAW:swvLrc5HHVgAAMAWP:dBSYEhgAPABgAIwAvQBkQGYMAJRgagy8IAQgQlxoaHhSYDBAemAQWAD:tP%0ROS:tAS9d:cUQ3v3FMTABEAcGISAnJhEQNzYhIBcWBSYnJiMiBwYHBSEWFxYzMjc2NzYFJqaj:uL%46OnpqQBHQEfo6X%gw8tO3NuPDAQAdj%JQ4wPXVvOiQRCQIx:uSempueARsBHJ6bmp2qYjlLRjdp03M8S0gsPB0AAAEAqv5kBbMEggAbAEFAJAEDhBoXABYaHQ8KhAAMEAwCDAoIlQ8REA0PF5cZDBIDGpcBGwA::cA:0O0:PzPtMgEvXf3AEN7A3cAQ:c0xMAEhETMRNCcmIyIHESERIRU2MzIXFhURMxEjFTMFs:1UoR8mgGBx:pgBaMa3wmRdoaGh:mQBCALBsTpHQ:zkBGN8m3Rtxv4t:viUAAABAAD%ZAUSBIIAFwA2QB4BhAAZEQsJhAwADhAOAg4IBpURExAPDw4JlwwbARIAPz:9wD8:M%0yAS9dzf3NwBDe7TEwISERNCcmIyIHETMRIREzESEVNjMyFxYVBRL%lh8mgGBxqv1EqgFoxrfCZF0CLbE6R0P8UP74AQgE93ybdG3GAAABAJkCEAUXAxwAAwAWQAoB1gIAAAUAAgECL10RMy8AL%0xMAEhESEFF:uCBH4CEAEMAAIAQAPHBG0GFAADAAcAH0ANAwABAgYFBwQFAgMEAAA:wN7AAS:N3c3e3d3NMTABAyEBIQMhAQRtnf6QASP%yp3%kAEjBhT9swJN:bMCTQAAA:%cA1IFTQXRAAMABwALAC9AFQkKCwgHBQYHAQIAAwQHCQEFCwMHAwA:wMDdwMABL93ezd3NEN3NEN7d3c0xMAEBIxMjASMTIwEjEwVN:qDu4EL%oO7gRf6g7uAF0f2BAn:9gQJ::YECfwAAAQBpAAAFLwXwACEATEAmHAs:HwEfFwEBEx4aISMTBQIeFxwcIBsLCQwYGCBwDwEPCQQgARIAP80:zV0ROS:OETnNETkvwN3AAS:NENbAxhI5L8DdXcTAMTAhIREmADU0NzYzMhcVIyYjIgcGFRQXFhcRIRUhFSEVIREhBS:9VPr%4IGH6bOkGpl7iUpAQEqJAqz%UQGN:nMBrwHBAgEe%e%Ql1TxiGxej49dawEBc8Gywf8AAAADAGf:fwVuBlIAKgAwADcAvUBmGDcBGDABCCMYIwIMNzEUFQufFQEVCS4tFxYKFgcwKxkaBp8aARoEIyIcGwUbHyo5BQYKCzV9EBAgEKAQsBAEECIrLRcZHB4EFB8xLZIUGxoWFRQEAAQqNzAuI5IECwoFBgwJBwQTAD8zMzPdwNDAEP0yMjLEETk:3cDQwBD9MsQRFzkROTkBL13t1N3ezRDW0NB9h8TExMQBGN1dfYfExMTEARjefYfExMTEARjdXX2HxMTExDEwAV1dXSUGBwYHByM3JicHIzcmJyY1EDc2JTczBxYXNzMHFhcRIyYnATY3Njc2NzMBJicBFhcDBgcGFRQXBW5GkJKVH6kiUE8uqUSsTjjPxgFTH6whWEYrrD0rEiw%MP72Ly9rbiobKP7TUU7%7z1XOJFBJSVjIDUqAWRuDBuV3W:Nkr0BZdPKBWRsCxSLxBMJ:pc1IfylBQ4hViEYAucgAfyLMhYDnD2nX4WGXQAAAQBn:%MFbgXuADIAW0AzCAYYBgInES8AAQA0LCCEfx0BHRt9EAgBCCwnKpgmICQQDBEeHi0WkgwEAAQyMh0tkgQTAD:tMjIvEjk:7RE5L84ROdQyMu0yMgEvXf3eXf3AEN5dwMAxMF0lBgcGIyAnJhEQNzYhMhcWFxEjJicmIyIHBgYVEBcRIRU2NzYzMhcRIyYjIgcVNjc2NzMFbkaQlqP%p8vUz8sBX6uKXXwsl4dASa5zOkquAWghTVRfGicgPj5abHl8KhsoYyA1K8PMAXUBZdPPJho8:peCLhZuOL6F:uJ8AjWlRTA0BP6pECz:HmEhGAAAAQCq:zgH1gVKACUAcUA5eQsBDh4fDR8ODR8LISAMIAsgDA0aF4QWCh8gAIQBCIQPCggGlSEeIxwgHxUTlRocEBkPDA0WAQoSAD:AwNzAPz8z7TLewBDQMjLtMgEvwP3e7dTNENztwNbNETkQfYfEBMQBERI5EIfEBMQxMABdISERNCcmIyIHESE1AyMBNTQnJiMiBxEhESEVNjMyFxMzAzYzIBEH1v6WGSJ8TnP%lqmpAVIaIntRcP6YAWjFqcJmrqyMfm8BcwIxtjNFQ:zkgP64ApJntTRFQ:zkBGN8m4wBVP7wSP5ZAAMAKAAABpoF0QAbAB4AIgDbQIpmHgFHHgE2HgEFHhUeAh4SERwRBB8gAyAEERQRNBFUEYQRBQsDKwM7A1sDiwMFEQMgA38cERQcEWsgeyACICETHH8CGAAaFq8CAVACYAJwAgMfAgECJA0JByEFfw8LoAcBbwd:BwIABwEHCAUBBJQfHBoLIhYPEpQgHhkMISIhIiEHFBEQAwIDBxIAP9DAP8DAEjk5Ly8QwMDAwP3AwBDAwMTA:cDAwAEvXV1dwMD9wBDewBDWXV1dwMDewBD9wBI5XYcrh33EAV1dEIfExBCHxMQxMAFdXV1dASMRIQMhESERIzUzNSM1MxEhEyERIREzFSMVMyU1IwUnIxUGmpL%jvj%gP6glpaWlgHL:wEgAWCSkpL%Do7%9o1lAZH%bwGR:m8BkeXl5QGR:m8Bkf5v5eUG3%Xl5QD::wC%:%EKcwXRADYANQAAARcAVgX5AAAACrYCACYmDw8lKzUABAAkAAAI4wXRAB8AIwAnACsA:UCCAiYBCiUBGhQBKBMUKzsraysCKwoOEBIpKhEqCAsMDxAHBxEQKicFBiYGFCIqASomHxsZIBcYIxgBHh0aGQICGBkjIRYVIhUkBAMlAyIDFSUEIyYIBAEFlCsqJCMiHgsnGhcWEg8TlCkmJSEgHQwoJygnKAcUGRgUEBEVFAMCAwYHEgA:wNDAP8DQwBDQwBESOTkvLxDAwMDAwMDA:cDAwMDAEMDAwMDAwMD9wMDAAS:MFzkQfYfExBCHxMQBGBDdOTl9h8TExMQQh8TEARgQ1sAQzF05OX2HxMQBGBDdOTl9h8TExMQQh8TEARgQ1sAvXX2HxMQxMAFdXV0BIQMhAyEDIQMhNSEnIzUzAyETIRMhEyETIQMzFSMHISUjFzMhJyMHJSMXMwjj:r1s:ldu:spr:lds:r0BBT3IimwBkVoBMmsBf2YBMV4Bh2yKyD0BBf3HwTtR:mk:PT3%:cIzUQGR:m8Bkf5vAZHl5eUBkf5vAZH%bwGR:m:l5eXl5eXl5QAAAgCaAAAGvQTyAA8AHgA1QBsADRARCBkYBQAIAQgGDxcBFw4aEAAIAQgYBRIAP8DdXc4vwN1dzgEvXd3ezRDe3d7NMTABFAcGISERMxEhMjc2NREhASMRNCcmIyERIREhMhYVBr2Bef7::aX4AV97KyUBNP4z%CUueP6h:swCl:nGAb:zaWMC6v50IRw%Axn9FgERQBoh:GwE8sb5AAABACYAAAYsBdEAEQCNQFauDAGZDAGODAE6DAEoDAGOAQE6AQGgDgEUDiQOAg4MCwx:DQ4UDQ4NEKARARQRJBECEQECAX8AERQAEQAQEwsCfwgGBAwNCg4LCJQRAgUFBAoDAQAEEgA:0MA:EjkvwMD9wMAQ0MABL87A:cAQ1NaHK4d9xAFdXRDQhxgrh33EAV1dMTBdXV1dXV1dISEBESERIzUzESERASEBIRUhBiz%Kf3p:oCYmAGAAhQBvf3DAj390AJ2:YoCduUCdv2KAnb9iuUAAAEAKQAABUsF0QAXAI5ATxAFBBEEEwIDEgMSEQ0MCQgNCA8GBw4HDlENASANMA1ADQMNFQwDBAdeCAEvCD8ITwgDCAAJBQIGfxMQDwwIBwQDFAGRFgMSEQ4gDQENCxIAP95d3d7NP:3A3t3ezQEvwMHA:cDCwM7dXV3A0MAQzN1dXcAQfYcExMQQh8TEARDQwBCHBMTEEIfExDEwASEVNxUHFTcVBxEhNQc1NzUHNTcRIREhBUv%L9fX19f%gNfX19f%LwUiBLG6g9yDloPcg:5Xv4Pcg5aD3IMBpAEgAAUAFP5qCOwGtgAQADUAQwBRAFsApEBYMkhKA0w6KAEtKCYDJC8wREERASARMBECETwEPAcFCAoLPDYAXVIiJBdOTB1XTCorJCofKy8rAitIMi8oLQNOIiBQFSAXUhVUWRkVPAtADThABAIVEgoFCAAvMzM:0DLd3s0SOTkQ0N3eETk5zRDNETk5P83NwM3dXc0BL8YyzdzNEjk5Ejk5ENbd3t3eMs0yETkQ1F1d3cQyERc5XREXOTEwARAhIicDBgchNjcTEiEyFxYBEAcGISInBiMiJyY1NDYzMhc2NxI3NjcGByc2NzYlFwYHFhcWATQjIgcGFRQXFjMyNzYBECcmJwYHBgMCBxYzICUmIyIGFRQzMjcI7P61bEJLDCX%rRYkg0kBcJFeY:1o28f%:Ki%fdiVNhRnTVA1JBdDMTpcobATxudnAWwyQmrekbEBqXVHIRgbIkA:IRj85iczhDxEF19IVI%YAUn8XzpALDhnRxwBM:7NSf6gOUYlYgI2AT1PVAGw:nP%5ouLZSYtTmohw3MBTZi3bRRMPFkQa3gcQoUKhaP8hOZVPVRJQFNTPgKOAQV5ngpXykT%af7Kk2qdJz4tZEcAAAIACv5ZBSoGGwAlADAAYkAxHBwXFxgbGxgYGhkdFhMggywNE4MELwcsACYvHRwEFhcqmCIAGxgZHBcZEg4RmA0LGwA:M%0yP9bNEN3NP%0ROTkROTkBL83e3Dk5:cwQ:RE5OdzNMxkvMy8RMy8zLzEwARQHBgcTFhUUBwYjIic1MxYzMjU0JwMDJwchARM3AyY1ECEyFxYHNCcmIyIVFBcXNgUqQjCQmCycerxiXwpdXGYcUf%Faf7iAXe8lIUkAaWWXmnQGBwzZRg1fwTznoplwv3JpDKsUkATshuMKGQBIP6s3sUCpP7GwQHcgVUBPkhPnjYnLow%TqyxAAQAFAAABdYF0QAdACQAKwAwAHBAPTksASgsASwqJzkeAR4lfRodFxwZFgEaMikkBi5:CA4KEAwIBpEuCQEtKRwPDB8MAgwYDSgkFhAjkREDCBIAPz:93cDA3cDA3V3AwN3AwN7tAS:AwN7AEP3AwMAQ3DIyMjLcwBDtMl0yMjJdXTEwASMGBwYhIxEhESM1MzUjNTMRISAXFhczFSMVFAczJSYnJiMjFQU0JyEVITYHIRUzMgXWaCRGs:7c7:6AqqqqqgJ4AQaWiiNXSwRP:fUcIknEQgHAAf5BAbwENf51btcDSWxGsv4bA0lsUmwBXmJaomwMJCK%HQ4dSIELClIZhUwAAwD5AAAF9wUqAAMABwALACVAEQQACw0KAQUJ1gsFA9YBB9YFAC:93u0Q3u0BL8DAENbAwDEwASERIREhESERIREhBff7AgT%%wIE:vsCBP4EHgEM:OQBDPzmAQwAAAUAvv84BbgGmQAXAB4AIgArAC8AdkBFFRYTGw0EJx8KB28sASwsLiN9ABh9fxMBLxM:E68TvxMEEy8ArwACADEiLn8ACAEIFhUbH5EnLi4vGiGRCwkDKC%RBggSAD:O7TI:zu0yETkvM%0yOTkBL139wBDWXdRdce0Q7RE5L13AwMDdwMDAETk5MTABFAcGBRUjNSERITUzFRYXFhcWFRQHFQQBNCcRNjc2BREjEQE0JyYnETY3NgURIxEFuKOe:vCu:gUB%65mO9VPKdoBPf4UZUEUEP7tfQHueR4shSgW:o99AcjVeXUFyMgF0cjJAwgfiUhe32AIPwE7ah3%4hUuJXgBO:7F:kmEIwkD:pQQSimHAXP%jQABAKv:agQcBC4ALwBoQDorLigAFBcRGSAEHQcHKBHlIgAxKOUJGSIgHyMvIwIjKy4XFAQPJuceHSAJBwAKEAogCgMKD%cFBAcWAD8zzf3EXRE5LzPN:REXOcRdETkBL8TtENbE7RE5L8DdwBESOTkREjk5MTABFAcGBxUjNSYnNTMWFxYzMjU0JyYnJicmNTQ3Njc1MxUWFxUjJiMiFRQXFhcWFxYEHINcjZLXnBxDRXR2rioSPEGC:YFdkZK6hxqXsKwtFEBFiekBJpJZPhOAeANI%C8cL04oEwgNChtD1ohaQRJybAY87mhNKxYJDQsdPAD::wBn:lkGZgXwAjYAMgAAARcCSwXpAAAACrYCACYnBgAlKzX::wBY:lkFJgSGAjYAUgAAARcCSwVGAAAACrYCACYnBgAlKzX::wBn:%EGZggBAjYAMgAAARcCVgCPAXUACrYCACkoBgAlKzX::wBY:90FJgaMAjYAUgAAARcCSgU3AAAACrYCACkoBgAlKzX::wBn:%EGkAgBAjYAMgAAARcCTgCPAXUAJkAcAwJQKAEDAgAoEChQKIAokCjAKNAoBwAoJAYAJStdNTUAXTU1::8AWP:dBegGjAI2AFIAAAEWAk7nAAAksgMCKLj:wEAWExY3ACggKDAoUChgKIAoBgAoJAYAJStdKzU1::8AP::hBmYIAQI2ADIAAAEXAk8AjwF1ABpAEAMCUCgBAwIAKCQGACV:KAFdKzU1AF01Nf:::5f:3QUmBowCNgBSAAABFgJP5wAADLcDAgAoJAYAJSs1Nf::AGf:4QZwCAECNgAyAAABFwJcAI8AAAAdQBcDAgAoEChQKIAokCjAKNAoBwAoJAYAJStdNTUA::8AWP:dBWgHUgI2AFIAAAEWAlDnAAAksgMCKLj:wEAWExY3ACggKDAoUChgKIAoBgAoJAYAJStdKzU1::8AZ::hBmYIAQI2ADIAAAEXAlcAjwAAAAy3AwIAKCQGACUrNTX::wBY:90FJggBAjYAUgAAARYCUecAAAy3AwIAKCQGACUrNTX::wBn:lkGZggBAjYAMgAAADcA1gCPAXUBFwJLBekAAAAhQBYCUCgBKAMALS4GACUCfygBACgkBgAlK101KzUAEV01AP::AFj%WQUmBowCNgBSAAAANgDW5wABFwJLBUYAAAAUQA4DAC0uBgAlAgAoJAYAJSs1KzX::wBn:%EHcggBAjYCRgAAARcAjQCNAXUAGEAQAlA4AQIQOEA4AgA4OAYAJStdNQBdNf::AFj:3QWPBowCNgJHAAABFgCN5wAAEUAMAkA4cDgCADg4BgAlK101AP::AGf:4QdyCAECNgJGAAABFwBDAI8BdQASQAsCUDcBAgA3NwYAJSs1AF01::8AWP:dBY8GjAI2AkcAAAEWAEPnAAAKtgIANzcGACUrNf::AGf:4QdyCAECNgJGAAABFwJWAI8BdQAKtgIAOzoGACUrNf::AFj:3QWPBowCNgJHAAABFwJKBTcAAAAKtgIAOzoGACUrNf::AGf:4QdyB8cCNgJGAAABFwDXAI8BdQASQAsCUEMBAgBDNgYAJSs1AF01::8AWP:dBY8GUgI2AkcAAAEWANfnAAAgsQJDuP:AQBQRGDcAQyBDMENAQ99DBQBDNgYAJStdKzX::wBn:lkHcgXwAjYCRgAAARcCSwXpAAAACrYCADg5BgAlKzX::wBY:lkFjwWcAjYCRwAAARcCSwVGAAAACrYCADg5BgAlKzX::wCp:lkF1gXRAjYAOAAAARcCSwXIAAAACrYBABQVBgAlKzX::wCh:lkFCQRjAjYAWAAAARcCSwV4AAAACrYBABkaCRYlKzX::wCp:%EF1ggBAjYAOAAAARcCVgBoAXUADbkAAf:2tBcWBxElKzUA::8Aof:hBQkGjAI2AFgAAAEXAkoFZgAAAA25AAH:%7QcGwkAJSs1AP::AKn:4QcICAECNgJIAAABFwCNAGgBdQASQAsBUCIBAQAiIgcfJSs1AF01::8Aof:hBjsGjAI2AkkAAAEWAI0CAAAKtgEAJycJACUrNf::AKn:4QcICAECNgJIAAABFwBDAGgBdQASQAsBUCEBAQAhIQcAJSs1AF01::8Aof:hBjsGjAI2AkkAAAEWAEMCAAAKtgEAJiYIACUrNf::AKn:4QcICAECNgJIAAABFwJWAGgBdQANuQAB::a0JSQHACUrNQD::wCh:%EGOwaMAjYCSQAAARcCSgVmAAAACrYBACspCAAlKzX::wCp:%EHCAe9AjYCSAAAARcA1wBoAWsACrYBAC0gBwAlKzX::wCh:%EGOwZSAjYCSQAAARYA1wIAAAq2AQAyJQgAJSs1::8Aqf5ZBwgHCgI2AkgAAAEXAksFyAAAAAq2AQAiIwcAJSs1::8Aof5ZBjsFnAI2AkkAAAEXAksFeAAAAAq2AQAnKAgAJSs1::8ACQAABdwIAQI2ADwAAAEXAEMAHgF1ABJACwFQCgEBAAoKBAElKzUAXTX::wAe:mQFFwaMAjYAXAAAARYAQ84AAA25AAH:9rQJCQYCJSs1AP::AAn%WQXcBdECNgA8AAABFwJLBYIAAAAKtgEACgkEASUrNf::AB7%WQUgBGMCNgBcAAABFwJLBvkAAAAQQAsBCk8Kbwp:Cp8KBF0RNf::AAkAAAXcCAECNgA8AAABFwJWAB4BdQAKtgEADg0DAiUrNf::AB7%ZAUXBowCNgBcAAABFwJKBSgAAAAKtgEADQwGAiUrNf::AAkAAAXcB8cCNgA8AAABFwDXAB4BdQASQAsBUBYBAQAWCQUAJSs1AF01::8AHv5kBRcGUgI2AFwAAAEWANfOAAAKtgEAFQgGAiUrNQADAFr%WQVvBhQAGwAoACwAaEBASgpKInEQAygqDRA3AyANDzcbGBLKFRUOFgAglw4QASaWBRYrpyocLCssKwAIFBkdERQVBAKEGRgAui4jgwi7LRD27RD2MjLtFzIvLxESOTkvLwA:7T:tLz:tPxI5L%05OTEwKytdKQE1DgEjIgIRNDY3PgEzMhYXNSE1ITUhFTMVIwERLgEjIgYVFBYzMjYBITUhBO7%mF2ias32U0hEwmFlgUT%ugFGAWiBgf6YJlQjjo5yfjFuAWD8KwPVdUxIATwBDI:dT0tTKyGfz3Bwz:xhAicQDrGdpZUl:UHP:::7pQUA:xwGUgAXANf6iAAAAAIAqQBuBQMExwAjAC8AmkASbAtsEWAdYCN%C34RcB1wIwgJuP:cswkQNxO4:9xAHwkQNwEkCRA3GyQJEDdsAmwIZBRkGnwCfAhxFHEaCAC4:9yzDRA3Crj:3EAvDRA3EiQNEDccJA0QNy2xCwgCIx0aFBEIFwUFJ7EXJLELCAIjHRoUEQgOICAqsQ4v7TMvEhc57QAv7TMvEhc57TEwKysrK10BKysrK10BBycGBiMiJicHJzcmJjU0NjcnNxc2NjMyFhc3FwcWFhUUBgcnNCYjIgYVFBYzMjYFA6DQKlk4NVos0aPSFxYXG9Cc0SldNjhWKNKi0RwVGBe3YkZGY2NGRmIBEaHPGBgXGdGj0CpVODdbLtKd0RcWFxXQotAxWTE3XCe7R2JiR0VjYwAAAgBfAU8KDwXwAAwANgDCQHYoC0gLAkYJARcJJwk3CQNtBQFaBQE5BQFtAgFaAgE5AgEzNS8NIR8bEyODDy8BLxuDDQMKBAMFCwCEAAIBAgkFhAcpAA0QDQINNTMZKScPKh8qAioqHyERLacnBAILCRMRABQQFAIUFBmnEQcKAwQECQEHBQkDAD8z3cASOS:AMxDU7TIvXRI5EMAyP%0ROTkyL10SORE5OQEvXcTe:TLcXe0zEhc5EO3cXf3EEjk5ERI5OTEwAF1dXV1dXQFdXV0BIREDIwMRIREhAQEhARQHBiMgJxEzFhcWMzI1NCcmJyYnJBE0NzYzMhcRIyYjIhUUFxYXFhcECg:%of%e::6rAYcBIQEhAYf6a8md4f7wxCGDn0lP0DMTSk6b:tPIndjzsx%00s42F01SpAEWAW4Cuf40Acz9RwRj:gIB:v0BzGdQWgEoXCURXTAXCBAMIU8BAMRlUFD%5HxcNBkKEA4iSAAAAf:pAhYFwQLFAAMAEbUABQEEAwEAL80BEMYQxjEwASE1IQXB%igF2AIWrwABAn79kwMtB0gAAwANswIAAwIALy8BL80xMAERMxECfq:9kwm19ksAAQJ%:ZMFwgLFAAUAE7YBBwUCAwUCAC:NLwEvzRDGMTABFSERIxEFwv1rrwLFr:t9BTIAAAH:6f2TAywCxQAFABO2AQYDAAQDAAAvzS8BL80QxjEwASE1IREjAn39bANDrwIWr:rOAAABAn4CFgXCB0gABQATtgUHAAMAAwIALy:NAS:NEMYxMAERMxEhFQJ%rwKVAhYFMvt9rwAAAf:pAhYDLAdIAAUAE7YBBgADBQADAC:NLwEvzRDGMTABITUhETMDLPy9ApSvAhavBIMAAAEAJf:bA9sFUwAeABxACwkKERkeHhwWChEAAC:dzi:NMgEvzd3ezTEwATMyFxYXFhYVFSM1NCYnJiMjERQGBiMiJjU0NjMyFwHmJqw3TzwtNGM5OElZHECcXG1:mHtOYAVTDhQ5KplmZytEXxkg:L15h1F7ZGmPLgAAAgBn:1IF4waWACoANgBnQDcgIQUDBhQGDzU0CAQHERESBxIHEgwnfgAYGAAAODB9DLc3FCA1khAokikpEBgYExAENCOTCAMTAD8z7TI:MzMvETkv7RDtMgEvEPbtETMvMy8Q7RI5OS8vETMREhc5MhESFzkxMCUGBCMiJwcjNyYnJhEQACEzNzMHFhcWFxEjJiYnJicmJwMWMzI2NxEjESEBBgcGBhUUFxYXEwYF42T%tqQtKxuuH8mI1wGyAYQMH64hMS%FoyscbDI6TiYotUJNFjUWQwHJ:TBTQj9JgyQtqjNVJ00Dkqswgs8BbAFbAamoswYKGk:%oxVNGyAXCwb8LQwCAgEkARkBhh4%PLl594MkGgOaCAAAAwAYAAAGHgXRABcAGgAeAL5AaKcXtxcCqAa4BgILBwUGCQoNDgUOAx4dGhkOBBkEfwUOFAUOBRkSFhATFBcADwAYHBsCARkBKAEBDwEZAX8ADxQAD3AAAQAZGRoQDRiTHRMKwBwBHB4XBgIDkxsUCR4eBQ8OAwEABAUSAD:A0MA:wBI5L8DAwP3AwMAQ3l3AwMD9wMDALwEZL91dhxgrh33EAV0Qh8TExMQQh8TExMQB0MAZEN2HGCuHfcQQxMTExBCHxMTExAEQ0MAxMF1dISEDIQMhEyM1MzcjNSETIRMhFSMXMxUjAScHASchBwYe:nNn:dhn:n1vb8Q3%wFP1wG61wFP%zfEb:2sRUQBCjP%2zMBLf7TAS3lleUCRf275ZXlAl:IyP6GlZUAAQAO:%UFfgXsAC0A8ECnViQBgiySLAJwLAFhLAFSLAEQLCAsAlIoYiiCKANDKAEiKDIoAhQoASwoASUtJ10QbRCNEANMEAEtED0QAhsQAY0UnRQCfxQBbhQBXRQBHxQvFAIQFA0XfQclLxUPAX0fLw0:DU8NAw10HwFhHwEfIR4lEBcgF4AXA6AXsBcCF5MoLxQBFCx7BwEHCQYNHwEvAY8BA68BvwECAZMQLCwDG5MhBAOTCRMAP%0:7RE5L8D9XXHAzhE5XRDdXcD9XXHAzhE5XV0BL13E7d3AENTE7RE5OV1dXV1dXV1dXd3AERI5OV1dXV1dXV1dXTEwXQEhBiEgNzMRBCEgJyYnIzUzNjc2NyE1ITYnJiMiBSMRJCEgFxYXMxUjBgcGByEFfvxWAQEfAUXhKv77:sH%66:kDDx:QoxIvP2vA6ACa0tm4:78KQEDARgBCa7iAUWTRIpLsgJeAZGZTf7XN1Rs7OVSPB845VkmG0UBJTJWbujlUjwhNgACAGf:fwVuBlIAIgAtAE5AKBEJJIwUBx0dKhgAAAEALyp9DRgRGRkcJJEUExEEAAkiIh0jkQcGCRMAPzPN7TIyLxI5P80z7TIyLxI5AS:tENZdwBI5L8DA:cDAMTAlBgcGBwYHFSM1JCcmERA3NiU1MxUWFxYXESMmJxE2NzY3MwURBgcGBwYVEBcWBW5GkEo:DQ%u:rnD1M:DAUyuW0ddfCy5loaIKhso:dcoHIZGP4tQYyA1FQsCAmtkCLvMAXUBZdPGCWRsChQaPP6Xnh:8RBlrIRi9A70HCi%Dd6f%:31IAP::AG3%WQVmBewCJgA2AAABBwOOAVcAAAAKtgEANjQGACUrNf::AF:%WQR6BIICJgBWAAABBwOOAPMAAAAKtgEAMzEGACUrNf::ACn%WQVLBdECJgA3AAABBwOOAUAAAAAKtgEACggDAiUrNf::ACv%WQN4BaQCJgBXAAABBgOOYgAADbkAAf%rtB4cBhslKzUA::8AmAAAAu4IHAImAEwAAAEHAI3%swGQABJACgILBgJlCwgGByUrNQAQ3jQAAQCN:lkCPP%NAAMALrUDEAkQNwG4::BAEhEVNw8AARYFAIACA0AJDDcDAgAvLysBGC8azTEwX15dKysFAyMTAjzX2Ixz:swBNP::AL4AAAYMCAECNgHwAAABFwBDAFABdQAKtgEACwoFCSUrNf::AKoAAAUZBowCNgIQAAABFgBD2AAACrYBAAsKBQklKzUAAv1x:lICj:%6AAMABwAgQA8HAwYCBUAGgAFAAlACAgIAL13NGt4azQEvMy8zMTAFITUhESE1IQKP%uIFHvriBR6%eP6YeAAAAv2B:lICf:%6AAMABwAgQA8HAwYCBUAGgAFAAlACAgIAL13NGt4azQEvMy8zMTAFITUhESE1IQJ:%wIE:vsCBP6%eP6YeAAAAwBn:mQK0QXwABMAJwAvAE5AKC8uLi0tKCwpKSoUfSssACwALAoqHn0KKC0tMSkuDywbGZIPBCOSBRMAP%0:7T8:MxEzETMBL%0vEjk5Ly8RM%0RMxESOTkRMy8zMTABFAIGBCMiJCYCNTQSNiQzMgQWEgU0LgIjIg4CFRQeAjMyPgIFEyEBIRMBIQXaX7T%:aSj:v20X2C0AQKjogEDtWD%cTJUazk5bFMzMFJtPDxtUTAEQ%oBWf3W:o2g:m0BWwLosf7iy21tywEesbMBH8ltbcn%4bKHvXU1NXa8iIS7eDc3eLziAuD6AQGcBGMAAwBY:mQJ0gSGABMAJwAvAE5AKC8uLi0tKCwpKSoUgyssACwALAoqHoMKKC0tMSkuDywbGZgPECOYBRYAP%0:7T8:MxEzETMBL%0vEjk5Ly8RM%0RMxESOTkRMy8zMTABFA4CIyIuAjU0PgIzMh4CBTQuAiMiDgIVFB4CMzI%AgUTIQEhEwEhBOpOltmMi9qWTlCX2YmM2ZZO:osgOU4tKkw7Ix03UDMzTjUbBBrqAVn91v6NoP5tAVsCMY:emE9PmN6Pj9%YT0%Y35FlhVEhHk6HaVuCUycnU4JRAuD6AQGcBGMAAwBn:%EH9wiTAE4AWwB1AFdALVtadGawZ1pnWmcKM31HHn0KY8psbHTKdVVUVFlaWmd1dTYbkkIPBC4oI5IFEwA:7TIyPzPtMjMvMzMvMzkvMxDtMi:tAS:tL%0SOTkvLxDtxBDNMTAlDgMjIiYmAjU0EjY2MzIeAhcRIy4DIyIGFRQeAjMyPgI3Mx4DMzI%AjU0JiMiDgIHIxE%AzMyFhYSFRQCBgYjIiYTFA4CBzU2NjUjNTM3Ii4EIyIGByM%AzMyHgQzMxUEKiNLVmU9ieCeVkODwH0rS0ZGJiUUJScsG2ZrKkpoPTJLPzYcJho2P04xPmdKKmtmGywnJRQlJkZGSyt:wIJCVp7giXqwMBUvTDcvLmnT4UBiTT46PSU5OwvbCDhadkY5U0Q7QU00h1kcLR8QX8ABI8S2ASDJagUJDwn%zw8XEAj593%6ejogNkcnJ0c2IDp6un:3%QgQFw8BMQkPCQVoxv7fusT%3cBfPwZ4KUo5IwJgBigvrhsRGh8aETVFU31SKRIbIBsSzAAAAwBf:%IG0AccAEUAUgBsAFdALWtdsF5SUV5RXlEVNoQmBYQVWspjY2vKbExLS1BRUV5sbAgzmBArEEAAO5ghFgA:7TIyPzPtMjMvMzMvMzkvMxDtMi:tAS:tL%0SOTkvLxDNEO3EMTAlMj4CNTQmIyIGByMRNjYzMh4CFRQOAiMiJicjBgYjIi4CNTQ%AjMyFhcRIyYmIyIGFRQeAjMyPgI3Mx4DAxQOAgc1NjY1IzUzNyIuBCMiBgcjPgMzMh4EMzMVBLIwRCoTVFIuQSgMOWtHdK1yODl7w4lqnjEGM5VqicN7OUN6qGZHazkMKEEuUVUTKkQwMUxBOBwRHDhBTGsVL0w3Ly5p0%BBYU0%Oj0lOTsL2wg4WnZGOVNEO0FNNIfaLld%T66jGxgBCBEUT5fai4valk9NOTpMT5bai4val08UEf74GBujrk9%Vy4hO04tLU47IQRHKUo5IwJgBigvrhsRGh8aETVFU31SKRIbIBsSzAABAJYFAARABksAGQAbQAwYCrALB8oQEBjKCxkALzPtMi:tAS:txDEwASIuBCMiBgcjPgMzMh4EMzMVA7lAYk0%Oj0lOTsL2wg4WnZGOVNEO0FNNIcFBREaHxoRNUVTfVIpEhsgGxLMAAIAZ:%dBqAF8ABDAFcASUAnAIBJU4A6SSM6OiNJAxsNDVkvfRtOkz8:NCqSIARENJIWCJMQEBYTAD8zL%0Q7TI:7RI5L%0BL%0RMy8SFzkvLy8Q7RDtMTABFA4CBxYWMzI2NzMRBgYjIiYnBgYjIiQmAjU0EjYkMzIWFxEjLgMjIg4CFRQeAjMzLgM1ND4CMzIeAgE%AzU0LgIjIg4CFRQeAgaPI0FaNxEnHTJLKgozXDZrvVE2eU2s:ubKb2fGASC4O3wzEyA0MjcjUYdgNTRgiFMIJTgmFE%Dq1xcrYZR:hMpNiENDRwvISExHw8PGykCq1uTeGEoBggPEf7hCgg0MhERZ8YBILq0AR:JbAsO:tULEQoFQn64d3a4fkIrWWRyRYK0cDIybK3%ISdNU1kxLUo0HR00SS0xYFlMAAIAWP9mBT0EhgA6AEUAT0AsAIU7QIUxOx8xMR87AxgKCkcphRg%pwA2EDYCNjYuJJgdEEMupxMFpw0NExYAPzMv7RDtMj:tEjkvXe0BL%0RMy8SFzkvLy8Q7RDtMTABFAYHFjMyNjczFQYGIyImJwYGIyIuAjU0PgIzMhcRIyYmIyIOAhUUHgIXJiY1ND4CMzIeAgU0JiMiFRQWFzY2BSFnXi8sKTYVEiZDI3q4TxdCHZLjnFFWnNyFcV4YLVgyM19JKyE8UjEcG0NogT0%gGlD:ugpKFIcGjM6Ad6AyjwLCQfrBwVDPAMFT5jej4:emU8Y:vcRFSNShWJYelEtCzV6QHGSVSEgUIdnQTd%P3E0H3QAAAIAD::iB7cF8AAuADkAOkAeLwd9KhsRGxEFJ4AgMH0FGweRKi8vAAySFhM1kgAEAD:tP%0ROS8z7TIBL%0v7RI5OS8vM%0yMTABMgQWEhUVIR4DMzIkNzMRDgMjIiQmJicuAzU0NjchFQYVFBYXPgIkAyEuAyMiDgIEzaMBEsZv%6ELRm%WXK4BHHYjUJKYpGKy:uPOeg9honRBCA4BPB1CSRV0vwEKwQLGCTdafU5Oelc3BfBbvv7cyXhjjlssalv%oR4vIBFWp:iiCjdgjV8mTyoNOEA6TwuH4aJa:aJLeFQuMFV4AAACAA::4gX6BIYAKQAyADFAGTIBhCITChMKGCqEKR8YAacyLacmEASYDxYAP%0:7S:tAS:NL%0SOTkvLzPtMjEwASEWFjMyNzY3MxEGBgcGIyAnJicuAzU0NjczFQYVFBYXNjc2ISAAESUmJiMiDgIHBfr8yAi4tXFsaj8oPXM2aoX%r7WhEUp5Vy8GCuQVNz8keKoBKgESART%mgNqcDRXQCcEAe%FiykoMP7fGSMLFpiG8gcpSGtIHTsfCSowMDoFr3Kj:uv%:FVycRo4VTz::wAP:qAHtwXwAiYDmgAAAAcDsgFwAAD::wAP:ugF%gSGAiYDmwAAAAcDswDaAAD::wBn:lcGZgXwAgYANAAA::8AWv5kBO4EggIGAFQAAP::AEIAAAjFBdECBgA6AAD::wAtAAAHqQRjAgYAWgAAAAEAq::vBaUF8AA6AD9AITUXMH4dCBcdHRcIAxIkfyUSfQA1F5QYGA8gkisEJQ%TBQAv7S8:7RI5L%05AS:tL%0SFzkvLy8Q7RE5MTABFA4CIyImJxEzHgMzMjY1NC4CJzU%AzU0JiMiBhURIRE0PgIzMh4CFRQOAgcVHgMFpUuNyn41YTUeEh4fIhVYYh9GcVM4TTAVXmBuZP6CRJLkoJLXjkUkPE8qRXRVLwHIdLF3PQkIARsGCQcDXmc0SS8WAvgDFyxDLkhVeGj8CQQBd7h%QjZjilVCZk43EwgOOll5AP::%5oEDf%yCAsABwAN%s4B9wACAGf:5QXpBewAGAAtAClAFRQPKH8SHn0FExADGZIPCgQjkRQAEwA:Mu0:M%0:LwEv7S:tMjIxMAUiJiYCNTQSNjYzMh4CFzUhESE1DgMTIg4CFRQeAjMyPgI3ES4DAtp%461lYrT9mzphU0cgAX:%gTBaX2hoX5NlND9tkVIqQjUuFhcwOEEbY74BGbWzASXPcRQiLBhf%i9mIzEfDgTrR4O4cXaydzwKERYNA00PGBIKAAABAB4AAAYUBHgAFgAvQBYFFgEABBYEFgQCDg0DAhGYChACDwQBAC8zPz:tAS8zLzMSOTkvLxEzMxEzMTAhIQEhARM%AzMyFhcjJiYjIg4CBwNk:mj%UgF9AQSkIE5hc0OmoAbwAiAkEyAcGw4EY:z8AeFdeEccoqgjLxElOykAAAEAQgAACe4F7AAaAEpAJQsaAQAKCQgCBAMHGgoCBwcCChoEBRQTBgUXlBAECAIFAwcECgEALzMvMz8zMz:tAS8zLzMSFzkvLy8vETMzETMzETMzETMxMCEhAQEhASETASEBEz4DMzIWFyMmJiMiBgcHNP5X:vX%:P5X:m8BkeUBEgF:AQWkF0VjglOwswX3AiEmKTUVA8r8NgXR%:8EAfv:ArJfiFkqqa4lMUpXAAEALQAACKIEeAAcAEpAJQscAQAKCQgCBAMHHAoCBwcCChwEBRQTBgUXmBAQCAIFDwcECgEALzMvMz8zMz:tAS8zLzMSFzkvLy8vETMzETMzETMzETMxMCEhAwMhASETEyETEz4DMzIWFyMmJiMiDgIHBk3%guXh:n3%pwF6wPABP%RwFkRbc0SmoAbwAiAkEx8ZFgkC9f0LBGP8%gMG:PoBz1p%UCSiqCMvDiA2JwAAAQDIAtADRwXwAAkADrQAAQEGAwA:zQEvzTEwASMRBycBMwEHJwJ02cYNATsJATsOxQLQAZAsEgGq:lYSLAABAMgC0ANHBfAACQAOtAkIAwgDAD:NAS:NMTABNxcBIwE3FxEzAnTFDv7FCf7FDcbZBGAsEv5WAaoSLAGQAAIAngOHAeQHFQADAAcAFbcABAMFAQcFAwAv1t3OAS8zzTIxMAEDIwMBIREhAeQ04DIBMP7mARoHFf3lAhv8cgEaAAIAngOHAeQHFQADAAcAFbcDBwAGAQUABgAvxt3OAS8zzTIxMBMTMxMDIREhnjLgNBb%5gEaA4cCG:3lAnQBGv::AJ4BbwHkBP0CBwOrAAD96AABARD%WQQC:40ABgAPtAAEBIAFAC8azQEvxDEwASEnByETMwQC:vdycv77:Pv%WYaGATT::wDhAAACVwRjAgYAHQAAAAIAwAEJA4EEIwADAAcAGkALAAcBBgXWBgYB1gIAL%0zL%0BLzMvMzEwASERIREhESEDgf0:AsH9PwLBAxcBDPzmAQwAAQCnAz0CAQYUAAMAEbYAzwMCAgMBAD8zLwEv7TEwAQMjAwIBSsZKBhT9KQLX::8ApwPHAgEGFAIGAAoAAAABAqn%oAQKAAAAAwARtQFAAAOAAAAvGs0BLxrNMTAhIREhAqkBYf6f:qAAAAECQf7oA4EAAAADABG1AEADAYAAAC8azQEvGs0xMCERIREDgf7A:ugBGAAAAwB5:h4G8wYCAAMAIAAkAERAIAAaARkZChIECgQKBCIkIu8PAQ8HEgcZAQIHAgcCISMhAC8vEjk5Ly8Q1s0RORDGXQEvLxI5OS8vEMYROS8zxjIxMCUjFTMBNCYjIgYHFTM2NjMyFhUUBgcGBgcVMzU2Njc2NgkDA%ujowE8x6xNrDgILZpXYHszLyZ5NI9CdSwuOP6P:MMDPQM9JqkDj4mnIhajHDZYW0VYKiRGHvS0JlAtL3v7YAPyA:L8DgAAAgA2AAAFegXRAAcACwBIQC4FigYGC3ADgAOQAwNhAwEQAzADQANQAwQDAw0IAAQAmz8BTwF:AQMBAQibCQYGAC8:7TMvXe0yAS8yETMvXV1dMzkv7TEwExEhESERIREBESERNgVE:hj%jP4YBUQC9gEV:uv9CgL2AcYBFf7rAAAAAAAARgNOAAEAAAAAAAAAMgAAAAEAAAAAAAEABwAyAAEAAAAAAAIABAA5AAEAAAAAAAMALwA9AAEAAAAAAAQADABHAAEAAAAAAAUADABUAAEAAAAAAAYADABsAAEAAAAAAAcAOwB4AAEAAAAAAAkADgCzAAEAAAAAAA0BTADBAAEAAAAAAA4AKgINAAMAAQQDAAIADgI3AAMAAQQDAAQAHgJFAAMAAQQFAAIACgJjAAMAAQQFAAQAGgJtAAMAAQQGAAIABgKHAAMAAQQGAAQAFgKNAAMAAQQHAAIACAKjAAMAAQQHAAQAGAKrAAMAAQQIAAIADALDAAMAAQQIAAQAIgLPAAMAAQQJAAAAZALxAAMAAQQJAAEADgJFAAMAAQQJAAIACANVAAMAAQQJAAMAXgNdAAMAAQQJAAQAGANxAAMAAQQJAAUAGAOLAAMAAQQJAAYAGAO7AAMAAQQJAAcAdgPTAAMAAQQJAAkAHARJAAMAAQQJAA0CmARlAAMAAQQJAA4AVAb9AAMAAQQKAAIADgdRAAMAAQQKAAQAHgdfAAMAAQQLAAIAEgd9AAMAAQQLAAQAIgePAAMAAQQMAAIACAexAAMAAQQMAAQAGAe5AAMAAQQOAAIAEAfRAAMAAQQOAAQAIAfhAAMAAQQQAAIAEggBAAMAAQQQAAQAIggTAAMAAQQTAAIABgg1AAMAAQQTAAQAFgg7AAMAAQQUAAIADghRAAMAAQQUAAQAHghfAAMAAQQVAAIAFAh9AAMAAQQVAAQAJAiRAAMAAQQWAAIADgi1AAMAAQQWAAQAHgjDAAMAAQQZAAIAFAjhAAMAAQQZAAQAJAj1AAMAAQQbAAIACgkZAAMAAQQbAAQAGgkjAAMAAQQdAAIABgKjAAMAAQQdAAQAFgKrAAMAAQQfAAIACgk9AAMAAQQfAAQAGglHAAMAAQQkAAIADAlhAAMAAQQkAAQAHAltAAMAAQQtAAIACgmJAAMAAQQtAAQAGgmTAAMAAQgKAAIADgdRAAMAAQgKAAQAHgdfAAMAAQgWAAIADgi1AAMAAQgWAAQAHgjDAAMAAQwKAAIADgdRAAMAAQwKAAQAHgdfAAMAAQwMAAIACAexAAMAAQwMAAQAGAe5qSAyMDEwIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5WZXJkYW5hQm9sZE1pY3Jvc29mdDpWZXJkYW5hIEJvbGQ6VmVyc2lvbiA1LjAzIChNaWNyb3NvZnQpVmVyZGFuYS1Cb2xkVmVyZGFuYSBpcyBhIHRyYWRlbWFyayBvZiB0aGUgTWljcm9zb2Z0IGdyb3VwIG9mIGNvbXBhbmllcy5NYXR0aGV3IENhcnRlcllvdSBtYXkgdXNlIHRoaXMgZm9udCBhcyBwZXJtaXR0ZWQgYnkgdGhlIEVVTEEgZm9yIHRoZSBwcm9kdWN0IGluIHdoaWNoIHRoaXMgZm9udCBpcyBpbmNsdWRlZCB0byBkaXNwbGF5IGFuZCBwcmludCBjb250ZW50LiBZb3UgbWF5IG9ubHkgKGkpIGVtYmVkIHRoaXMgZm9udCBpbiBjb250ZW50IGFzIHBlcm1pdHRlZCBieSB0aGUgZW1iZWRkaW5nIHJlc3RyaWN0aW9ucyBpbmNsdWRlZCBpbiB0aGlzIGZvbnQ7IGFuZCAoaWkpIHRlbXBvcmFyaWx5IGRvd25sb2FkIHRoaXMgZm9udCB0byBhIHByaW50ZXIgb3Igb3RoZXIgb3V0cHV0IGRldmljZSB0byBoZWxwIHByaW50IGNvbnRlbnQuaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3R5cG9ncmFwaHkvZm9udHMvAE4AZQBnAHIAZQB0AGEAVgBlAHIAZABhAG4AYQAgAE4AZQBnAHIAZQB0AGEAdAB1AQ0AbgDpAFYAZQByAGQAYQBuAGEAIAB0AHUBDQBuAOkAZgBlAGQAVgBlAHIAZABhAG4AYQAgAGYAZQBkAEYAZQB0AHQAVgBlAHIAZABhAG4AYQAgAEYAZQB0AHQDiAO9A8QDvwO9A7EAVgBlAHIAZABhAG4AYQAxADAANgAgA4gDvQPEA78DvQOxAKkAIAAyADAAMQAwACAATQBpAGMAcgBvAHMAbwBmAHQAIABDAG8AcgBwAG8AcgBhAHQAaQBvAG4ALgAgAEEAbABsACAAUgBpAGcAaAB0AHMAIABSAGUAcwBlAHIAdgBlAGQALgBCAG8AbABkAE0AaQBjAHIAbwBzAG8AZgB0ADoAVgBlAHIAZABhAG4AYQAgAEIAbwBsAGQAOgBWAGUAcgBzAGkAbwBuACAANQAuADAAMwAgACgATQBpAGMAcgBvAHMAbwBmAHQAKQBWAGUAcgBkAGEAbgBhAC0AQgBvAGwAZABWAGUAcgBkAGEAbgBhACAAaQBzACAAYQAgAHQAcgBhAGQAZQBtAGEAcgBrACAAbwBmACAAdABoAGUAIABNAGkAYwByAG8AcwBvAGYAdAAgAGcAcgBvAHUAcAAgAG8AZgAgAGMAbwBtAHAAYQBuAGkAZQBzAC4ATQBhAHQAdABoAGUAdwAgAEMAYQByAHQAZQByAFkAbwB1ACAAbQBhAHkAIAB1AHMAZQAgAHQAaABpAHMAIABmAG8AbgB0ACAAYQBzACAAcABlAHIAbQBpAHQAdABlAGQAIABiAHkAIAB0AGgAZQAgAEUAVQBMAEEAIABmAG8AcgAgAHQAaABlACAAcAByAG8AZAB1AGMAdAAgAGkAbgAgAHcAaABpAGMAaAAgAHQAaABpAHMAIABmAG8AbgB0ACAAaQBzACAAaQBuAGMAbAB1AGQAZQBkACAAdABvACAAZABpAHMAcABsAGEAeQAgAGEAbgBkACAAcAByAGkAbgB0ACAAYwBvAG4AdABlAG4AdAAuACAAWQBvAHUAIABtAGEAeQAgAG8AbgBsAHkAIAAoAGkAKQAgAGUAbQBiAGUAZAAgAHQAaABpAHMAIABmAG8AbgB0ACAAaQBuACAAYwBvAG4AdABlAG4AdAAgAGEAcwAgAHAAZQByAG0AaQB0AHQAZQBkACAAYgB5ACAAdABoAGUAIABlAG0AYgBlAGQAZABpAG4AZwAgAHIAZQBzAHQAcgBpAGMAdABpAG8AbgBzACAAaQBuAGMAbAB1AGQAZQBkACAAaQBuACAAdABoAGkAcwAgAGYAbwBuAHQAOwAgAGEAbgBkACAAKABpAGkAKQAgAHQAZQBtAHAAbwByAGEAcgBpAGwAeQAgAGQAbwB3AG4AbABvAGEAZAAgAHQAaABpAHMAIABmAG8AbgB0ACAAdABvACAAYQAgAHAAcgBpAG4AdABlAHIAIABvAHIAIABvAHQAaABlAHIAIABvAHUAdABwAHUAdAAgAGQAZQB2AGkAYwBlACAAdABvACAAaABlAGwAcAAgAHAAcgBpAG4AdAAgAGMAbwBuAHQAZQBuAHQALgBoAHQAdABwADoALwAvAHcAdwB3AC4AbQBpAGMAcgBvAHMAbwBmAHQALgBjAG8AbQAvAHQAeQBwAG8AZwByAGEAcABoAHkALwBmAG8AbgB0AHMALwBOAGUAZwByAGkAdABhAFYAZQByAGQAYQBuAGEAIABOAGUAZwByAGkAdABhAEwAaQBoAGEAdgBvAGkAdAB1AFYAZQByAGQAYQBuAGEAIABMAGkAaABhAHYAbwBpAHQAdQBHAHIAYQBzAFYAZQByAGQAYQBuAGEAIABHAHIAYQBzAEYA6QBsAGsA9gB2AOkAcgBWAGUAcgBkAGEAbgBhACAARgDpAGwAawD2AHYA6QByAEcAcgBhAHMAcwBlAHQAdABvAFYAZQByAGQAYQBuAGEAIABHAHIAYQBzAHMAZQB0AHQAbwBWAGUAdABWAGUAcgBkAGEAbgBhACAAVgBlAHQASABhAGwAdgBmAGUAdABWAGUAcgBkAGEAbgBhACAASABhAGwAdgBmAGUAdABQAG8AZwByAHUAYgBpAG8AbgB5AFYAZQByAGQAYQBuAGEAIABQAG8AZwByAHUAYgBpAG8AbgB5AE4AZQBnAHIAaQB0AG8AVgBlAHIAZABhAG4AYQAgAE4AZQBnAHIAaQB0AG8EHwQ%BDsEQwQ2BDgEQAQ9BEsEOQBWAGUAcgBkAGEAbgBhACAEHwQ%BDsEQwQ2BDgEQAQ9BEsEOQBUAHUBDQBuAOkAVgBlAHIAZABhAG4AYQAgAFQAdQENAG4A6QBLAGEAbAExAG4AVgBlAHIAZABhAG4AYQAgAEsAYQBsATEAbgBLAHIAZQBwAGsAbwBWAGUAcgBkAGEAbgBhACAASwByAGUAcABrAG8ATABvAGQAaQBhAFYAZQByAGQAYQBuAGEAIABMAG8AZABpAGEAAAIAAAAAAAD:dQDTAAAAAAAAAAAAAAAAAAAAAAAAAAADtwAAAAEAAgADAAQABQAGAAcACAAJAAoACwAMAA0ADgAPABAAEQASABMAFAAVABYAFwAYABkAGgAbABwAHQAeAB8AIAAhACIAIwAkACUAJgAnACgAKQAqACsALAAtAC4ALwAwADEAMgAzADQANQA2ADcAOAA5ADoAOwA8AD0APgA:AEAAQQBCAEMARABFAEYARwBIAEkASgBLAEwATQBOAE8AUABRAFIAUwBUAFUAVgBXAFgAWQBaAFsAXABdAF4AXwBgAGEAYgBjAGQAZQBmAGcAaABpAGoAawBsAG0AbgBvAHAAcQByAHMAdAB1AHYAdwB4AHkAegB7AHwAfQB%AH8AgACBAIIAgwCEAIUAhgCHAIgAiQCKAIsAjACNAI4AjwCQAJEAkgCTAJQAlQCWAQIAmACZAJoBAwCcAJ0AngEEAKAAoQCiAKMApAClAKYApwEFAKkAqgCrAK0ArgCvALAAsQCyALMAtAC1ALYAtwC4ALkAugC7ALwBBgC%AL8BBwEIAMIBCQDEAMUAxgDHAMgAyQDKAMsAzADNAM4AzwDQANEA0wDUANUA1gDXANgA2QEKANsA3ADdAN4A3wDgAOEA4gDjAOQA5QDmAOcA6ADpAOoA6wDsAO0A7gDvAPABCwEMAQ0A9AD1APYA9wD4APkA%gD7APwA:QD%AP8BAAEBANoAwwEOAQ8BEAERARIBEwEUARUBFgEXARgBGQEaARsBHAEdAR4BHwEgASEBIgEjASQBJQEmAScBKAEpASoBKwEsAS0BLgEvATABMQEyATMBNAE1ATYBNwE4ATkBOgE7ATwBPQE%AT8BQAFBAUIBQwFEAUUBRgFHAUgBSQFKAUsBTAFNAU4BTwFQAVEBUgFTAVQBVQFWAVcBWAFZAVoBWwFcAV0BXgFfAWABYQFiAWMBZAFlAWYBZwFoAWkBagFrAWwBbQFuAW8BcAFxAXIBcwF0AXUBdgF3AXgBeQF6AXsBfAF9AX4BfwGAAYEBggGDAYQBhQGGAYcBiAGJAYoBiwGMAY0BjgGPAZABkQGSAZMBlAGVAZYBlwGYAZkBmgGbAZwBnQGeAZ8BoAGhAaIBowGkAaUBpgGnAagBqQGqAasBrAGtAa4BrwGwAbEBsgGzAbQAqAG1AbYBtwG4AbkBugG7AbwBvQG%Ab8BwAHBAcIBwwHEAcUAnwHGAccByAHJAcoBywHMAc0BzgHPAdAB0QHSAdMB1ACXAdUB1gHXAdgB2QHaAdsB3AHdAd4B3wHgAeEB4gHjAeQB5QHmAecB6AHpAeoB6wHsAe0B7gHvAfAB8QHyAfMB9AH1AfYB9wH4AfkB%gH7AfwB:QH%Af8CAAIBAgICAwIEAgUCBgIHAggCCQIKAgsCDAINAg4CDwIQAhECEgITAhQCFQIWAhcCGAIZAhoCGwIcAh0CHgIfAiACIQIiAiMCJAIlAiYCJwIoAikCKgIrAiwCLQIuAi8CMAIxAjICMwI0AjUCNgI3AjgCOQI6AjsCPAI9Aj4CPwJAAkECQgCbAkMCRAJFAkYCRwJIAkkCSgJLAkwCTQJOAk8CUAJRAlICUwJUAlUCVgJXAlgCWQJaAlsCXAJdAl4CXwJgAmECYgJjAmQCZQJmAmcCaAJpAmoCawJsAm0CbgJvAnACcQJyAnMCdAJ1AnYCdwJ4AnkCegJ7AnwCfQJ%An8CgAKBAoICgwKEAoUChgKHAogCiQKKAosCjAKNAo4CjwKQApECkgKTApQClQKWApcCmAKZApoCmwKcAp0CngKfAqACoQKiAqMCpAKlAqYCpwKoAqkCqgKrAqwCrQKuAq8CsAKxArICswK0ArUCtgK3ArgCuQK6ArsCvAK9Ar4CvwLAAsECwgLDAsQCxQLGAscCyALJAsoCywLMAs0CzgLPAtAC0QLSAtMC1ALVAtYC1wLYAtkC2gLbAtwC3QLeAt8C4ALhAuIC4wLkAuUC5gLnAugC6QLqAusC7ALtAu4C7wLwAvEC8gLzAvQC9QL2AvcC%AL5AvoC%wL8Av0C:gL:AwADAQMCAwMDBAMFAwYDBwMIAwkDCgMLAwwDDQMOAw8DEAMRAxIDEwMUAxUDFgMXAxgDGQMaAxsDHAMdAx4DHwMgAyEDIgMjAyQDJQMmAycDKAMpAyoDKwMsAy0DLgMvAzADMQMyAzMDNAM1AzYDNwM4AzkDOgM7AzwDPQM%Az8DQANBA0IDQwNEA0UDRgNHA0gDSQNKA0sDTANNA04DTwNQA1EDUgNTA1QDVQNWA1cDWANZA1oDWwNcA10DXgNfA2ADYQNiA2MDZANlA2YDZwNoA2kDagNrA2wDbQNuA28DcANxA3IDcwN0A3UDdgN3A3gDeQN6A3sDfAN9A34DfwOAA4EDggODAL0DhAOFA4YDhwOIA4kDigOLA4wDjQOOA48DkAORA5IDkwOUA5UDlgOXA5gDmQOaA5sDnAOdA54DnwOgA6EDogOjA6QDpQOmA6cDqAOpA6oDqwOsA60DrgOvA7ADsQOyA7MDtAO1A7YDtwO4A7kDugO7A7wDvQd1bmkwMEI1A3BpMQd1bmkyMTI2B3VuaTIyMDYERXVybwd1bmlGQjAxB3VuaUZCMDIHdW5pMjIxOQd1bmkwMkM5B3VuaTAwQjkHdW5pMDBCMgd1bmkwMEIzBkFicmV2ZQZhYnJldmUHQW9nb25lawdhb2dvbmVrBkRjYXJvbgZkY2Fyb24GRGNyb2F0B0VvZ29uZWsHZW9nb25lawZFY2Fyb24GZWNhcm9uBkxhY3V0ZQZsYWN1dGUGTGNhcm9uBmxjYXJvbgRMZG90BGxkb3QGTmFjdXRlBm5hY3V0ZQZOY2Fyb24GbmNhcm9uDU9odW5nYXJ1bWxhdXQNb2h1bmdhcnVtbGF1dAZSYWN1dGUGcmFjdXRlBlJjYXJvbgZyY2Fyb24GU2FjdXRlBnNhY3V0ZQd1bmkwMTYyB3VuaTAxNjMGVGNhcm9uBnRjYXJvbgVVcmluZwV1cmluZw1VaHVuZ2FydW1sYXV0DXVodW5nYXJ1bWxhdXQGWmFjdXRlBnphY3V0ZQpaZG90YWNjZW50Cnpkb3RhY2NlbnQFR2FtbWEFVGhldGEDUGhpBWFscGhhBWRlbHRhB2Vwc2lsb24Fc2lnbWEDdGF1A3BoaQ11bmRlcnNjb3JlZGJsCWV4Y2xhbWRibAd1bmkyMDdGBnBlc2V0YQJJSgJpagtuYXBvc3Ryb3BoZQZtaW51dGUGc2Vjb25kCWFmaWk2MTI0OAlhZmlpNjEyODkGSDIyMDczBkgxODU0MwZIMTg1NTEGSDE4NTMzCm9wZW5idWxsZXQHQW1hY3JvbgdhbWFjcm9uC0NjaXJjdW1mbGV4C2NjaXJjdW1mbGV4CkNkb3RhY2NlbnQKY2RvdGFjY2VudAdFbWFjcm9uB2VtYWNyb24GRWJyZXZlBmVicmV2ZQpFZG90YWNjZW50CmVkb3RhY2NlbnQLR2NpcmN1bWZsZXgLZ2NpcmN1bWZsZXgKR2RvdGFjY2VudApnZG90YWNjZW50B3VuaTAxMjIHdW5pMDEyMwtIY2lyY3VtZmxleAtoY2lyY3VtZmxleARIYmFyBGhiYXIGSXRpbGRlBml0aWxkZQdJbWFjcm9uB2ltYWNyb24GSWJyZXZlBmlicmV2ZQdJb2dvbmVrB2lvZ29uZWsLSmNpcmN1bWZsZXgLamNpcmN1bWZsZXgIS2NlZGlsbGEIa2NlZGlsbGEMa2dyZWVubGFuZGljCExjZWRpbGxhCGxjZWRpbGxhCE5jZWRpbGxhCG5jZWRpbGxhA0VuZwNlbmcHT21hY3JvbgdvbWFjcm9uBk9icmV2ZQZvYnJldmUIUmNlZGlsbGEIcmNlZGlsbGELU2NpcmN1bWZsZXgLc2NpcmN1bWZsZXgEVGJhcgR0YmFyBlV0aWxkZQZ1dGlsZGUHVW1hY3Jvbgd1bWFjcm9uBlVicmV2ZQZ1YnJldmUHVW9nb25lawd1b2dvbmVrC1djaXJjdW1mbGV4C3djaXJjdW1mbGV4C1ljaXJjdW1mbGV4C3ljaXJjdW1mbGV4BWxvbmdzCkFyaW5nYWN1dGUKYXJpbmdhY3V0ZQdBRWFjdXRlB2FlYWN1dGULT3NsYXNoYWN1dGULb3NsYXNoYWN1dGUJYW5vdGVsZWlhBldncmF2ZQZ3Z3JhdmUGV2FjdXRlBndhY3V0ZQlXZGllcmVzaXMJd2RpZXJlc2lzBllncmF2ZQZ5Z3JhdmUNcXVvdGVyZXZlcnNlZAd1bmkyMDNFBGxpcmEJZXN0aW1hdGVkCW9uZWVpZ2h0aAx0aHJlZWVpZ2h0aHMLZml2ZWVpZ2h0aHMMc2V2ZW5laWdodGhzB3VuaUYwMDQHdW5pRjAwNQV0b25vcw1kaWVyZXNpc3Rvbm9zCkFscGhhdG9ub3MMRXBzaWxvbnRvbm9zCEV0YXRvbm9zCUlvdGF0b25vcwxPbWljcm9udG9ub3MMVXBzaWxvbnRvbm9zCk9tZWdhdG9ub3MRaW90YWRpZXJlc2lzdG9ub3MFQWxwaGEEQmV0YQdFcHNpbG9uBFpldGEDRXRhBElvdGEFS2FwcGEGTGFtYmRhAk11Ak51AlhpB09taWNyb24CUGkDUmhvBVNpZ21hA1RhdQdVcHNpbG9uA0NoaQNQc2kMSW90YWRpZXJlc2lzD1Vwc2lsb25kaWVyZXNpcwphbHBoYXRvbm9zDGVwc2lsb250b25vcwhldGF0b25vcwlpb3RhdG9ub3MUdXBzaWxvbmRpZXJlc2lzdG9ub3MEYmV0YQVnYW1tYQR6ZXRhA2V0YQV0aGV0YQRpb3RhBWthcHBhBmxhbWJkYQJudQJ4aQdvbWljcm9uA3JobwZzaWdtYTEHdXBzaWxvbgNjaGkDcHNpBW9tZWdhDGlvdGFkaWVyZXNpcw91cHNpbG9uZGllcmVzaXMMb21pY3JvbnRvbm9zDHVwc2lsb250b25vcwpvbWVnYXRvbm9zCWFmaWkxMDAyMwlhZmlpMTAwNTEJYWZpaTEwMDUyCWFmaWkxMDA1MwlhZmlpMTAwNTQJYWZpaTEwMDU1CWFmaWkxMDA1NglhZmlpMTAwNTcJYWZpaTEwMDU4CWFmaWkxMDA1OQlhZmlpMTAwNjAJYWZpaTEwMDYxCWFmaWkxMDA2MglhZmlpMTAxNDUJYWZpaTEwMDE3CWFmaWkxMDAxOAlhZmlpMTAwMTkJYWZpaTEwMDIwCWFmaWkxMDAyMQlhZmlpMTAwMjIJYWZpaTEwMDI0CWFmaWkxMDAyNQlhZmlpMTAwMjYJYWZpaTEwMDI3CWFmaWkxMDAyOAlhZmlpMTAwMjkJYWZpaTEwMDMwCWFmaWkxMDAzMQlhZmlpMTAwMzIJYWZpaTEwMDMzCWFmaWkxMDAzNAlhZmlpMTAwMzUJYWZpaTEwMDM2CWFmaWkxMDAzNwlhZmlpMTAwMzgJYWZpaTEwMDM5CWFmaWkxMDA0MAlhZmlpMTAwNDEJYWZpaTEwMDQyCWFmaWkxMDA0MwlhZmlpMTAwNDQJYWZpaTEwMDQ1CWFmaWkxMDA0NglhZmlpMTAwNDcJYWZpaTEwMDQ4CWFmaWkxMDA0OQlhZmlpMTAwNjUJYWZpaTEwMDY2CWFmaWkxMDA2NwlhZmlpMTAwNjgJYWZpaTEwMDY5CWFmaWkxMDA3MAlhZmlpMTAwNzIJYWZpaTEwMDczCWFmaWkxMDA3NAlhZmlpMTAwNzUJYWZpaTEwMDc2CWFmaWkxMDA3NwlhZmlpMTAwNzgJYWZpaTEwMDc5CWFmaWkxMDA4MAlhZmlpMTAwODEJYWZpaTEwMDgyCWFmaWkxMDA4MwlhZmlpMTAwODQJYWZpaTEwMDg1CWFmaWkxMDA4NglhZmlpMTAwODcJYWZpaTEwMDg4CWFmaWkxMDA4OQlhZmlpMTAwOTAJYWZpaTEwMDkxCWFmaWkxMDA5MglhZmlpMTAwOTMJYWZpaTEwMDk0CWFmaWkxMDA5NQlhZmlpMTAwOTYJYWZpaTEwMDk3CWFmaWkxMDA3MQlhZmlpMTAwOTkJYWZpaTEwMTAwCWFmaWkxMDEwMQlhZmlpMTAxMDIJYWZpaTEwMTAzCWFmaWkxMDEwNAlhZmlpMTAxMDUJYWZpaTEwMTA2CWFmaWkxMDEwNwlhZmlpMTAxMDgJYWZpaTEwMTA5CWFmaWkxMDExMAlhZmlpMTAxOTMJYWZpaTEwMDUwCWFmaWkxMDA5OAlhZmlpMDAyMDgJYWZpaTYxMzUyB3VuaTIwNzQHdW5pMjA3NQd1bmkyMDc3B3VuaTIwNzgIZ2x5cGg1NzUIZ2x5cGg1NzYIZ2x5cGg1NzcIZ2x5cGg1NzgIZ2x5cGg1NzkIZ2x5cGg1ODAIZ2x5cGg1ODEFT2hvcm4Fb2hvcm4FVWhvcm4FdWhvcm4NaG9va2Fib3ZlY29tYgxkb3RiZWxvd2NvbWIJZ3JhdmVjb21iCWFjdXRlY29tYghnbHlwaDU5MAhnbHlwaDU5MQhnbHlwaDU5MghnbHlwaDU5MwhnbHlwaDU5NAhnbHlwaDU5NQhnbHlwaDU5NghnbHlwaDU5NwhnbHlwaDU5OAhnbHlwaDU5OQhnbHlwaDYwMAhnbHlwaDYwMQhnbHlwaDYwMghnbHlwaDYwMwhnbHlwaDYwNAd1bmkxRUEwB3VuaTFFQTEHdW5pMUVBMgd1bmkxRUEzB3VuaTFFQTQHdW5pMUVBNQd1bmkxRUE2B3VuaTFFQTcHdW5pMUVBOAd1bmkxRUE5B3VuaTFFQUEHdW5pMUVBQgd1bmkxRUFDB3VuaTFFQUQHdW5pMUVBRQd1bmkxRUFGB3VuaTFFQjAHdW5pMUVCMQd1bmkxRUIyB3VuaTFFQjMHdW5pMUVCNAd1bmkxRUI1B3VuaTFFQjYHdW5pMUVCNwd1bmkxRUI4B3VuaTFFQjkHdW5pMUVCQQd1bmkxRUJCB3VuaTFFQkMHdW5pMUVCRAd1bmkxRUJFB3VuaTFFQkYHdW5pMUVDMAd1bmkxRUMxB3VuaTFFQzIHdW5pMUVDMwd1bmkxRUM0B3VuaTFFQzUHdW5pMUVDNgd1bmkxRUM3B3VuaTFFQzgHdW5pMUVDOQd1bmkxRUNBB3VuaTFFQ0IHdW5pMDE4Rgd1bmkwMjU5B3VuaTA0OTIHdW5pMDQ5Mwd1bmkwNDk2B3VuaTA0OTcHdW5pMDQ5QQd1bmkwNDlCB3VuaTA0OUMHdW5pMDQ5RAd1bmkwNEEyB3VuaTA0QTMHdW5pMDRBRQd1bmkwNEFGB3VuaTA0QjAHdW5pMDRCMQd1bmkwNEIyB3VuaTA0QjMHdW5pMDRCOAd1bmkwNEI5B3VuaTA0QkEHdW5pMDRCQgd1bmkwNEQ4CWFmaWkxMDg0Ngd1bmkwNEU4B3VuaTA0RTkHdW5pMDU2NAd1bmkwNTgwCmZpZ3VyZWRhc2gHdW5pMjAxRgd1bmkyMDM0B3VuaTIwQTANY29sb25tb25ldGFyeQd1bmkyMEEyB3VuaTIwQTUHdW5pMjBBNgd1bmkyMEE4B3VuaTIwQTkJYWZpaTU3NjM2B3VuaTIwQUQHdW5pMjBBRQd1bmkyMEFGB3VuaTIwQjAHdW5pMjBCMQtlcXVpdmFsZW5jZQd1bmkwRTNGB3VuaUZFNjkEcmVzaARzaGluA3Rhdglkb3VibGV2YXYGdmF2eW9kCWRvdWJsZXlvZAZnZXJlc2gJZ2Vyc2hheWltDW5ld3NoZXFlbHNpZ24KdmF2c2hpbmRvdA1maW5hbGthZnNoZXZhDmZpbmFsa2FmcWFtYXRzCmxhbWVkaG9sYW0QbGFtZWRob2xhbWRhZ2VzaAdhbHRheWluC3NoaW5zaGluZG90CnNoaW5zaW5kb3QRc2hpbmRhZ2VzaHNoaW5kb3QQc2hpbmRhZ2VzaHNpbmRvdAlhbGVmcGF0YWgKYWxlZnFhbWF0cwlhbGVmbWFwaXEJYmV0ZGFnZXNoC2dpbWVsZGFnZXNoC2RhbGV0ZGFnZXNoCGhlZGFnZXNoCXZhdmRhZ2VzaAt6YXlpbmRhZ2VzaAl0ZXRkYWdlc2gJeW9kZGFnZXNoDmZpbmFsa2FmZGFnZXNoCWthZmRhZ2VzaAtsYW1lZGRhZ2VzaAltZW1kYWdlc2gJbnVuZGFnZXNoDHNhbWVraGRhZ2VzaA1maW5hbHBlZGFnZXNoCHBlZGFnZXNoC3RzYWRpZGFnZXNoCXFvZmRhZ2VzaApyZXNoZGFnZXNoCnNoaW5kYWdlc2gIdGF2ZGFnZXMIdmF2aG9sYW0HYmV0cmFmZQdrYWZyYWZlBnBlcmFmZQlhbGVmbGFtZWQSemVyb3dpZHRobm9uam9pbmVyD3plcm93aWR0aGpvaW5lcg9sZWZ0dG9yaWdodG1hcmsPcmlnaHR0b2xlZnRtYXJrCWFmaWk1NzM4OAlhZmlpNTc0MDMJYWZpaTU3NDA3CWFmaWk1NzQwOQlhZmlpNTc0NDAJYWZpaTU3NDUxCWFmaWk1NzQ1MglhZmlpNTc0NTMJYWZpaTU3NDU0CWFmaWk1NzQ1NQlhZmlpNTc0NTYJYWZpaTU3NDU3CWFmaWk1NzQ1OAlhZmlpNTczOTIJYWZpaTU3MzkzCWFmaWk1NzM5NAlhZmlpNTczOTUJYWZpaTU3Mzk2CWFmaWk1NzM5NwlhZmlpNTczOTgJYWZpaTU3Mzk5CWFmaWk1NzQwMAlhZmlpNTc0MDEJYWZpaTU3MzgxCWFmaWk1NzQ2MQlhZmlpNjMxNjcJYWZpaTU3NDU5CWFmaWk1NzU0MwlhZmlpNTc1MzQJYWZpaTU3NDk0CWFmaWk2Mjg0MwlhZmlpNjI4NDQJYWZpaTYyODQ1CWFmaWk2NDI0MAlhZmlpNjQyNDEJYWZpaTYzOTU0CWFmaWk1NzM4MglhZmlpNjQyNDIJYWZpaTYyODgxCWFmaWk1NzUwNAlhZmlpNTczNjkJYWZpaTU3MzcwCWFmaWk1NzM3MQlhZmlpNTczNzIJYWZpaTU3MzczCWFmaWk1NzM3NAlhZmlpNTczNzUJYWZpaTU3MzkxCWFmaWk1NzQ3MQlhZmlpNTc0NjAJYWZpaTUyMjU4CWFmaWk1NzUwNglhZmlpNjI5NTgJYWZpaTYyOTU2CWFmaWk1Mjk1NwlhZmlpNTc1MDUJYWZpaTYyODg5CWFmaWk2Mjg4NwlhZmlpNjI4ODgJYWZpaTU3NTA3CWFmaWk2Mjk2MQlhZmlpNjI5NTkJYWZpaTYyOTYwCWFmaWk1NzUwOAlhZmlpNjI5NjIJYWZpaTU3NTY3CWFmaWk2Mjk2NAlhZmlpNTIzMDUJYWZpaTUyMzA2CWFmaWk1NzUwOQlhZmlpNjI5NjcJYWZpaTYyOTY1CWFmaWk2Mjk2NglhZmlpNTc1NTUJYWZpaTUyMzY0CWFmaWk2Mzc1MwlhZmlpNjM3NTQJYWZpaTYzNzU5CWFmaWk2Mzc2MwlhZmlpNjM3OTUJYWZpaTYyODkxCWFmaWk2MzgwOAlhZmlpNjI5MzgJYWZpaTYzODEwCWFmaWk2Mjk0MglhZmlpNjI5NDcJYWZpaTYzODEzCWFmaWk2MzgyMwlhZmlpNjM4MjQJYWZpaTYzODMzCWFmaWk2Mzg0NAlhZmlpNjI4ODIJYWZpaTYyODgzCWFmaWk2Mjg4NAlhZmlpNjI4ODUJYWZpaTYyODg2B3VuaTFFQ0MHdW5pMUVDRAd1bmkxRUNFB3VuaTFFQ0YHdW5pMUVEMAd1bmkxRUQxB3VuaTFFRDIHdW5pMUVEMwd1bmkxRUQ0B3VuaTFFRDUHdW5pMUVENgd1bmkxRUQ3B3VuaTFFRDgHdW5pMUVEOQd1bmkxRURBB3VuaTFFREIHdW5pMUVEQwd1bmkxRUREB3VuaTFFREUHdW5pMUVERgd1bmkxRUUwB3VuaTFFRTEHdW5pMUVFMgd1bmkxRUUzB3VuaTFFRTQHdW5pMUVFNQd1bmkxRUU2B3VuaTFFRTcHdW5pMUVFOAd1bmkxRUU5B3VuaTFFRUEHdW5pMUVFQgd1bmkxRUVDB3VuaTFFRUQHdW5pMUVFRQd1bmkxRUVGB3VuaTFFRjAHdW5pMUVGMQhnbHlwaDg4MghnbHlwaDg4Mwd1bmkxRUY0B3VuaTFFRjUHdW5pMUVGNgd1bmkxRUY3B3VuaTFFRjgHdW5pMUVGOQRkb25nCXRpbGRlY29tYgd1bmkyMTIwB3VuaTI1MDAHdW5pMjUwMgd1bmkyNTBDB3VuaTI1MTAHdW5pMjUxNAd1bmkyNTE4C211c2ljYWxub3RlB3VuaTIwQjIHdW5pMjBCMwd1bmkyMEI0B3VuaTIwQjUMU2NvbW1hYWNjZW50DHNjb21tYWFjY2VudAd1bmkwMjFBB3VuaTAyMUIMZG90dGVkaWFjdXRlC2NvbW1hYWNjZW50B3VuaTA0MEQHdW5pMDQ1RAd1bmkwMzMzB3VuaTAzNDcHdW5pMDQ3OAd1bmkwNDc5B3VuaTA0N0MHdW5pMDQ3RAd1bmkwNDg3B3VuaTA0QTgHdW5pMDRBOQd1bmkwNEJDB3VuaTA0QkQHdW5pMDRCRQd1bmkwNEJGB3VuaTA1MUEHdW5pMDUxQgd1bmkwNTFDB3VuaTA1MUQHdW5pMUU5RQd1bmkyMEYwB3VuaTJDNkQHdW5pMkM3MQd1bmkyQzcyB3VuaTJDNzMHdW5pQTcxQgd1bmlBNzFDB3VuaUE3MUQHdW5pQTcxRQd1bmlBNzFGB3VuaUE3ODgHdW5pQTc4OQd1bmlBNzhBB3VuaUE3OEIHdW5pQTc4QxBBYmtoYXNfZGVzY2VuZGVyEGFia2hhc19kZXNjZW5kZXIHdW5pMjAyRgd1bmlGRkZEB3VuaTIwQjgAAAAAAAADAAgAAgAQAAH::wADAAEAAAAMAAAAFgAAAAIAAQAAA7YAAQAEAAAAAQAAAAAAAQAAAAoANAA2AAFsYXRuAAgAEAACTFRIIAAWUk9NIAAcAAD::wAAAAD::wAAAAD::wAAAAAAAAABAAAACgA4AFIAAWxhdG4ACAAQAAJMVEggABZST00gAB4AAP::AAAAAP::AAEAAAAA::8AAQABAAJsb2NsAA5sb2NsABQAAAABAAEAAAABAAAAAgAGAA4AAQAAAAEAEAABAAAAAQAmAAIADgAEA4kDigOLA4wAAgACAPkA%gAAAR8BIAACAAIACAABA40AAQABAHQAAAABAAEAAQAAAAEAABdmAAAAFAAAAAAAABdeMIIXWgYJKoZIhvcNAQcCoIIXSzCCF0cCAQExCzAJBgUrDgMCGgUAMGEGCisGAQQBgjcCAQSgUzBRMCwGCisGAQQBgjcCARyiHoAcADwAPAA8AE8AYgBzAG8AbABlAHQAZQA%AD4APjAhMAkGBSsOAwIaBQAEFMU7gNzSHa14ZuIUfK6QkE0tZY5roIISMTCCBGAwggNMoAMCAQICCi6rEdxQ:1ydy8AwCQYFKw4DAh0FADBwMSswKQYDVQQLEyJDb3B5cmlnaHQgKGMpIDE5OTcgTWljcm9zb2Z0IENvcnAuMR4wHAYDVQQLExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xITAfBgNVBAMTGE1pY3Jvc29mdCBSb290IEF1dGhvcml0eTAeFw0wNzA4MjIyMjMxMDJaFw0xMjA4MjUwNzAwMDBaMHkxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xIzAhBgNVBAMTGk1pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt3l91l2zRTmoNKwx2vklNUl3wPsfnsdFce:RRujUjMNrTFJi9JkCw03YSWwvJD5lv84jtwtIt3913UW9qo8OUMUlK:Kg5w0jH9FBJPpimc8ZRaWTSh%ZzbMvIsNKLXxv2RUeO4w5EDndvSn0ZjstATL::idIprVsAYec%7qyY3%C%VyggYSFjrDyuJSjzzimUIUXJ4dO3TD2AD30xvk9gb6G7Ww5py409rQurwp9YpF4ZpyYcw2Gr:LE8yC5TxKNY8ss2TJFGe67SpY7UFMYzmZReaqth8hWPp%CUIhuBbE1wXskvVJmPZlOzCt%M26ERwbRntBKhgJuhgCkwIffUwIDAQABo4H6MIH3MBMGA1UdJQQMMAoGCCsGAQUFBwMDMIGiBgNVHQEEgZowgZeAEFvQcO9pcp4jUX4Usk2O:8uhcjBwMSswKQYDVQQLEyJDb3B5cmlnaHQgKGMpIDE5OTcgTWljcm9zb2Z0IENvcnAuMR4wHAYDVQQLExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xITAfBgNVBAMTGE1pY3Jvc29mdCBSb290IEF1dGhvcml0eYIPAMEAizw8iBHRPvZj7N9AMA8GA1UdEwEB:wQFMAMBAf8wHQYDVR0OBBYEFMwdznYAcFuv8drETppRRC6jRGPwMAsGA1UdDwQEAwIBhjAJBgUrDgMCHQUAA4IBAQB7q65%SibyzrxOdKJYJ3QqdbOG:atMlHgATenK6xjcacUOonzzAkPGyofM%FPMwp%9Vm:wY0SpRADulsia1Ry4C58ZDZTX2h6tKX3v7aZzrI:eOY49mGq8OG3SiK8j:d:p1mkJkYi9:uEAuzTz93z5EBIuBesplpNCayhxtziP4AcNyV1ozb2AQWtmqLu3u440yvIDEHx69dLgQt97:uHhrP7239UNs3DWkuNPtjiifC3UPds0C2I3Ap%BaiOJ9lxjj7BauznXYIxVhBoz9TuYoIIMol%Lsyy3oaXLq9ogtr8wGYUgFA0qvFL0QeBeMOOSKGmHwXDi86erzoBCcnYOMIIEejCCA2KgAwIBAgIKYQHPPgAAAAAADzANBgkqhkiG9w0BAQUFADB5MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSMwIQYDVQQDExpNaWNyb3NvZnQgQ29kZSBTaWduaW5nIFBDQTAeFw0wOTEyMDcyMjQwMjlaFw0xMTAzMDcyMjQwMjlaMIGDMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMQ0wCwYDVQQLEwRNT1BSMR4wHAYDVQQDExVNaWNyb3NvZnQgQ29ycG9yYXRpb24wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC9MIn7RXKoU2ueiU8AI8C%1B09sVlAOPNzkYIm5pYSAFPZHIIOPM4du733Qo2X1Pw4GuS5%ePs02EDv6DT1nVNXEap7V7w0uJpWxpz6rMcjQTNKUSgZFkvHphdbserGDmCZcSnvKt1iBnqh5cUJrN:Jnak1Dg5hOOzJtUY%Svp0skWWlQh8peNh4Yp:vRJLOaL%AQ:fc3NlpKGDXED4tD%DEI1:9e4P92ORQp99tdLrVvwdnIddyN9iTXEHF2yUANLR20Hp1WImAaApoGtVE7Ygdb6v0LAMb5VDZnVU0kSMOvlpYh8XsR6WhSHCLQ3aaDrMiSMCOv51BS64PzN6qQVAgMBAAGjgfgwgfUwEwYDVR0lBAwwCgYIKwYBBQUHAwMwHQYDVR0OBBYEFDh4BXPIGzKbX5KGVa%JusaZsXSOMA4GA1UdDwEB:wQEAwIHgDAfBgNVHSMEGDAWgBTMHc52AHBbr:HaxE6aUUQuo0Rj8DBEBgNVHR8EPTA7MDmgN6A1hjNodHRwOi8vY3JsLm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9DU1BDQS5jcmwwSAYIKwYBBQUHAQEEPDA6MDgGCCsGAQUFBzAChixodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRzL0NTUENBLmNydDANBgkqhkiG9w0BAQUFAAOCAQEAKAODqxMN8f4Rb0J22EOruMZC%iRlNK51sHEwjpa2g:py5P7NN%c6cJhRIA66cbTJ9NXkiugocHPV7eHCe%7xVjRagILrENdyA%oSTuzdDYx7RE8MYXX9bpwH3c4rWhgNObBg:dr:BKoCo9j6jqO7vcFqVDsxX%QsbsvxTSoc8h52e4avxofWsSrtrMwOwOSff%jP6IRyVIIYbirInpW0Gh7Bb5PbYqbBS2utye09kuOyL6t6dzlnagB7gp0DEN5jlUkmQt6VIsGHC9AUo1:cczJyNh7:yCnFJFJPZkjJHR2pxSY5aVBOp%zCBmwuchvxIdptJEiAgRVAfJ:MdDhKTzCCBJ0wggOFoAMCAQICEGoLmU:AACWrEdtFH1h6Z6IwDQYJKoZIhvcNAQEFBQAwcDErMCkGA1UECxMiQ29weXJpZ2h0IChjKSAxOTk3IE1pY3Jvc29mdCBDb3JwLjEeMBwGA1UECxMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSEwHwYDVQQDExhNaWNyb3NvZnQgUm9vdCBBdXRob3JpdHkwHhcNMDYwOTE2MDEwNDQ3WhcNMTkwOTE1MDcwMDAwWjB5MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSMwIQYDVQQDExpNaWNyb3NvZnQgVGltZXN0YW1waW5nIFBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANw3bvuvyEJKcRjIzkg%U8D6qxS6LDK7Ek9SyIPtPjPZSTGSKLaRZOAfUIS6wkvRfwX473W%i8eo1a5pcGZ4J2botrfvhbnN7qr9EqQLWSIpL89A2VYEG3a1bWRtSlTb3fHev5%Dx4Dff0wCN5T1wJ4IVh5oR83ZwHZcL322JQS0VltqHGP:gHw87tUEJU05d3QHXcJc2IY3LHXJDuoeOQl8dv6dbG564Ow%j5eecQ5fKk8YYmAyntKDTisiXGhFi94vhBBQsvm1Go1s7iWbE:jLENeFDvSCdnM2xpV6osxgBuwFsIYzt:iUW4RBhFiFlG6wHyxIzG%cQ%Bq6H8mjmsCAwEAAaOCASgwggEkMBMGA1UdJQQMMAoGCCsGAQUFBwMIMIGiBgNVHQEEgZowgZeAEFvQcO9pcp4jUX4Usk2O:8uhcjBwMSswKQYDVQQLEyJDb3B5cmlnaHQgKGMpIDE5OTcgTWljcm9zb2Z0IENvcnAuMR4wHAYDVQQLExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xITAfBgNVBAMTGE1pY3Jvc29mdCBSb290IEF1dGhvcml0eYIPAMEAizw8iBHRPvZj7N9AMBAGCSsGAQQBgjcVAQQDAgEAMB0GA1UdDgQWBBRv6E4:l7k0q0uGj7yc6qw7QUPG0DAZBgkrBgEEAYI3FAIEDB4KAFMAdQBiAEMAQTALBgNVHQ8EBAMCAYYwDwYDVR0TAQH:BAUwAwEB:zANBgkqhkiG9w0BAQUFAAOCAQEAlE0RMcJ8ULsRjqFhBwEOjHBFje9zVL0:CQUt:7hRU4Uc7TmRt6NWC96Mtjsb0fusp8m3sVEhG28IaX5rA6IiRu1stG18IrhG04TzjQ%%B4o2wet%6XBdRZ%S0szO3Y7A4b8qzXzsya4y1Ye5y2PENtEYIb923juasxtzniGI2LS0ElSM9JzCZUqaKCacYIoPO8cTZXhIu8%tgzpPsGJY3jDp6Tkd44ny2jmB%RMhjGSAYwYElvKaAkMve0aIuv8C2WX5St7aA3STswVuDMyd3ChhfEjxF5wRITgCHIesBsWWMrjlQMZTPb2pid7oZjeN9CKWnMywd1RROtZyRLIj9jCCBKowggOSoAMCAQICCmEGlC0AAAAAAAkwDQYJKoZIhvcNAQEFBQAweTELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEjMCEGA1UEAxMaTWljcm9zb2Z0IFRpbWVzdGFtcGluZyBQQ0EwHhcNMDgwNzI1MTkwMjE3WhcNMTMwNzI1MTkxMjE3WjCBszELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjENMAsGA1UECxMETU9QUjEnMCUGA1UECxMebkNpcGhlciBEU0UgRVNOOjdBODItNjg4QS05RjkyMSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlYEKIEIYUXrZle2b:dyH0fsOjxPqqjcoEnb%TVCrdpcqk0fgqVZpAuWUfk2F239x73UA27tDbPtvrHHwK9F8ks6UF52hxbr5937dYeEtMB6cJi12P%ZGlo6u2Ik32Mzv889bw:xo4PJkj5vowxL5o76E:NaLzgU9vQF2UCcD%IS3FoaNYL5dKSw8z6X9mFo1HU8WwDjYHmE:PTazVhQVd5U7EPoAsJPiXTerJ7tjLEgUgVXjbOqpK5WNiA5%owCldyQHmCpwA7gqJJCa3sWiIku:TFkGd1RyQ7A%ZN2ThAhYtv7ph0kJNrOz%DOpfkyieX8yWSkOnrX14DyeP%xGOwIDAQABo4H4MIH1MB0GA1UdDgQWBBQolYi:Ajvr2pS6fUYP%sv0fp3:0TAfBgNVHSMEGDAWgBRv6E4:l7k0q0uGj7yc6qw7QUPG0DBEBgNVHR8EPTA7MDmgN6A1hjNodHRwOi8vY3JsLm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy90c3BjYS5jcmwwSAYIKwYBBQUHAQEEPDA6MDgGCCsGAQUFBzAChixodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRzL3RzcGNhLmNydDATBgNVHSUEDDAKBggrBgEFBQcDCDAOBgNVHQ8BAf8EBAMCBsAwDQYJKoZIhvcNAQEFBQADggEBAADurPzi0ohmyinjWrnNAIJ%F1zFJFkSu6j3a9eH:o3LtXYfGyL29%HKtLlBARo3rUg3lnD6zDOnKIy4C7Z0Eyi3s3XhKgnii0:fmD%XtzQSgeoQ3R3cumTPTlA7TIr9Gd0lrtWWh%pLxOXw%UEXXQHrV4h9dnrlb:6HIKyTnIyav18aoBUwJOCifmGRHSkpw0mQOkODie7e1YPdTyw1O%dBQQGqAAwL8tZJG85CjXuw8y2NXSnhvo1:kRV2tGD7FCeqbxJjQihYOoo7i0Dkt8XMklccRlZrj8uSTVYFAMr4MEBFTt8ZiL31EPDdGt8oHrRR8nfgJuO7CYES3B460EUxggSbMIIElwIBATCBhzB5MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSMwIQYDVQQDExpNaWNyb3NvZnQgQ29kZSBTaWduaW5nIFBDQQIKYQHPPgAAAAAADzAJBgUrDgMCGgUAoIHGMBkGCSqGSIb3DQEJAzEMBgorBgEEAYI3AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEEAYI3AgEVMCMGCSqGSIb3DQEJBDEWBBR4gfA2vBMNrviYfTaf58C3DapbmjBmBgorBgEEAYI3AgEMMVgwVqAsgCoATQBpAGMAcgBvAHMAbwBmAHQAIABDAG8AcgBwAG8AcgBhAHQAaQBvAG6hJoAkaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3R5cG9ncmFwaHkgMA0GCSqGSIb3DQEBAQUABIIBAFFr4gpyimSbxL0a6d%s%:8DAvWBaDLZ1jHGeqf5154OlooQzpPJpkKuiSleVjKCjEzdlSgLQU1Yus:0RMj3vpJghE3FO3hfIGcVVn962PNUWEqLbxNNTKiEdpbMd3Rc1zjsyg1UX8zFSndEIXWiC6255Pr6sFDDbjWqH2kfvR2xl5iW8mSGCNxTlK84q7GiTySjfAeJgTpBPw9rEKMQy7me:MKdyREPhXPKOXjv%ILCsgXaH5bg1uQ9bXY8iyJToLGW%ec2OF1M2X9BkUXpAldnvT2CHt4RATsGHgE4lkycw1cipwD7G06Xgzg3fRaFMJKhWpfG%7PboRcujlUfUUehggIfMIICGwYJKoZIhvcNAQkGMYICDDCCAggCAQEwgYcweTELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEjMCEGA1UEAxMaTWljcm9zb2Z0IFRpbWVzdGFtcGluZyBQQ0ECCmEGlC0AAAAAAAkwBwYFKw4DAhqgXTAYBgkqhkiG9w0BCQMxCwYJKoZIhvcNAQcBMBwGCSqGSIb3DQEJBTEPFw0xMDA4MTkwMTIzNTRaMCMGCSqGSIb3DQEJBDEWBBRAsje8nRDo6ElRptfu8OgOytl55DANBgkqhkiG9w0BAQUFAASCAQB97MbVyOpqAkvTHI5xHCM8wUO60g9h9RhnHNQ5T:cOqjc2CAnh2jxOzBwrxipu1aSUkev6cRjW2FxdMbX3rrS4OqKYOMcwKJQorPHuFIcMBXO0LKZix6T:sK0dbw2%6PkoDp3NwDZB%1WBrVzRVzKFgwwR5TR1sjz7kS4aGGO861IlPwb2WKv78XwWN76wy%6CKPNs9T1TlMX0kjk02Gu%WxsCUnkXgCK4mn42HWZbzqOTszH6B6C:HpeUXgjjCwveiRbQQp2VbnulsVYTPvba7JKLTfPSjBLftnYgUIq5k6J7L8xoGKse1C0KQhR4nU2wRw0JgoE41HmvAwg9zU94AAA"},{ name : "R_sfx_hit3_wav", data : "s2227:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAHAAAGhgAkJCQkJCQkJCQkJCQkJElJSUlJSUlJSUlJSUlJbW1tbW1tbW1tbW1tbW2SkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2ttvb29vb29vb29vb29vb::::::::::::::::::8AAAA6TEFNRTMuOTZyAaUAAAAALBkAABRAJAXiQgAAQAAABoaoHlNCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAAoYczA0kwABf5NspzBgAAOBBwjBMTnACAYVAABgkye%CABk9iHPTMAYXsQ5NPT07::e4j3rRjkEMJiA4CHBN8uOB:B8ufy4YwwJDkocBDl8uOB:B8uf7tgkOSjgx:h:rwwwwwwwwwwAAN51hkeIsHDQscxzJmVsQmaOWXbkazWnpwMeQEGvBpoZS1oX3pziAjPFzVZGc6EHjM2Mvd%fxdOsWPKAamtnQoFQcJSYzTNAmw23:y5No56P:%yB1k3A4gAQfpqk2m223HL:%1LEBQALzKt:WGGAGXeLLqsYMAE5DC5Do2j:qU%X76qg0EqHAvLMrsZcK0rSa%WmSV0Ot8M3i7uhmmWGc4PDVn25ac6zyVX616GYmRuitZokUrw6FwOmJF3ddiZq:uz9U3ncBnqaNMiAAILdfJqNxyyS22jU%Sy0USflnJLH7av5C12EkYJaVgZWFU0ZKdHY99Qi4H6bZ05gsCnVX3QtbtnAZ4nfF5e737FwZyvvt77baQnnLgHknG8fLztmC:292:35nauC6gAAASQ025XJbf:7UsQEgAucWXW4sYAJdpSwdwYwApddrvvw0YftI3aen6uXRcvfJIpSqcKEmv2AoJObhDNSYGmoOgr53N2e%7VvIvnLepT6Gp%QXOn9:tHYs9:yX%aOVEQPuEU2F:WE36LO5ZRi7pDNVAltptuSyWS2W3W3W6jHHxsWjoCrHHy2LcxbQKHOohsRmHSo9PUzWJckLaevrbn8rmSTBxYRBhILgM2EGIDN996TAPiQEBE4KmVps1g%aMKSfFlmSQ8yj%kMAM%EMXoSS8GchhqFaawm::tSxAUACxBRYjjzAAF8EGtDMIABSbUMZrPurfFkZHrCOMa6zZtMyOW8bjqs8GigaAweQgRB0EQUAxQMidx3QLjhBXPDTZoXUQJnDNykFZZoxLRmlTsy9iyfSwalFU%Y1MpxctIgNGxqaoHYscdhrszhN2HiiMZp7YQCsh6KIgcHB7QqlxApdK5JtFvZkmmXkrKp%iGrQ6TFkUHv4xEpZFRXIFfY0yw2Kx6K:VvxZ4%HqL02L033f:1bx:ftfF82brq6ACIjbbklcrlg0Gg0GoH:%1LEBwAMUVt:uFKAGVcTKkMwYAAV3cVMP4mGxjocw53oKiZlBCHIUWYPvYiWlFhgoItqzeeQpH1J:iQgKHFWBVVlRW:jENEEKo7Xp:8WIqiwg5VF0ovTp:8rC5hdjjTjkOPPb4XKuxsQzTrI%MZZIMgkt:sGOvFKGrOSiVQ2pEkgbJl4YssFPVv2k2dZGUFt:9jN3DWW7P%:zp:f32C2LVLmCRw%kPHvaXXmYG:QxTnpDk6VT:ozlaFMCkeMauoEA:HSKHEzJLevLFYlFpLds::7UsQIgAxQsTy9gwABYJikHZeYQU2eE1GrUuZYkFRAI3u6LOirWJI:kiSTV3lqanIka18rW0unmZandjt:%d6f%UZOhoS3AyGgaBpESkRKC2In9Q4Gj0Fb1grEvbET5XXW6e56RoAEU3IgAZtRFkXZaSOk5gEAjwEk4KEscSskloKNJEknqtNCTkmo4Kcii1VpxLSISxIlZyWmoscSuq00JY4lZxLTSOHEtolppHKJXVUaRyiXjYvBsJs2E87VTEFNRTMuOTYuMVVVVVVVVVVV::tSxAkDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU"},{ name : "R_shield_png", data : "s606:iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgYDjgbUM3J:QAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAABIUlEQVR4nO1WsQ0CMQxMIhaACYBZQEwBNUIgKgomoKBFiC1YgF34kgo2ACxZRJFjO8lLL1HEcvG5j%O7OB%:WdhNp25qgpqgJvifBNupJZ4Z6EzK%pMTODzsV9Z7iCcsh:Xj6tDns3E4BE%qERV4dsjX29ONwqFXU6Yg5q67okOrAeHecqZEX2FaJIJXwDI6nD:kIUcETaCUixxT1uJwRgHGA83dZUheAUjowxwPsonFIpPjiKsDCB7mOC4bBGM2iQSD9x08RIAggoQpToNM7Dq9GAKC0kbLYGOE4lMFr9uaJWJ%BYjLoIfzW6QfRP0QU1Ouisx7wn9oLa:rHFM2jU%AWxmH4aknSyMiFq%oH7BDvR%kWyZ7dec3zs57cud:FV:HDnyJhQ6teAAAAABJRU5ErkJggg"},{ name : "R_sfx_laser_wav", data : "s11423:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAoAAAhdwAGBgwMExMTGRkgICAmJiwsLDMzOTk5QEBGRkZMTFNTU1lZYGBgZmZsbGxzc3l5eYCAhoaGjIyTk5OZmaCgoKamrKyss7O5ubnAwMbGxszM09PT2dng4ODm5uzs7PPz%fn5::8AAAA6TEFNRTMuOTZyAaUAAAAALmYAABRAJAV8QgAAQAAAIXdyopjSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAApscQZUxIABbaWswzBwABkABevuwSAQAgOicAQAgiKITMnn9hWKydukAoYXBAMOXR7UMqEIQh:OEMtGjRtqCtG9wfLh:qcJw%XB:1Ag4SHPEEPiMPlAQ::yjpRwIW:%XD:DH%ziQtgFu:8XsqkZb:xu2ziAsHZwPgBuQQwUgWG:sQU8SQjFJT6nyaCdxcPEv2mTFHyimliP91Pn2KFhw4oPG:%1l91YfNRXf:7:bzi4s0NEGf0:xQNhokIw6HU2DaHspBsHsWFLulX:%1LEBgALfFlwGPMACYAYLkMwgACvJ9Vt7t81ygRwZEgU7HEVpFHl1epJZmOYVIQrLxIdZDpqlNdEOsgLL0f%sYdZCz9rULnf:a6Ka7%73X59:%imuimu3v::v:::::aKa6O10KPNIIUKEKrJCyinfGmbm:GOMe9%MmsVDsQTrQxDiwkEod1bQLsVZymO7:qxFrAkHMd:3efFr22PSr:T4ReEleTQf%ljXtMgAIi34UpWWHhZhYi3%hSPOyQYpJhr::::0GpAHvE69LLKxg3kEv:7UsQGAAv5C4u8YQAheRovZMGJbSWuUNmZfF0SKc7L1DmFO:rZ09CCHK3NdrWkU4GYBQrFtvS9SEIHBlDGNXWulTnHYx2bzNl1MAAwxRJYNNUPZJgmWce9QRICzxeqtYcCJENDH1FIhADsiBkC1UihiWtsJwtD2gmjUERXJ5nAMQK3aHPS6ThBApr%n85zAIgpWVctqVhAoIzmRl:kEThEoK:ltww8YOhG:378ZShcLv%pqciVeK5vqdrMitUvr5JD0aWVLV0IAbXJ5aVyOwSg::tSxAUAC7kNiaGYZql2k27k9Ikh95QelFabTKlk:ocCX:N6l:93ISzlOl:06HBOx%ehHOnhxQkMql:::K8MK0mSfmiK8CsfD5z0SOaDriC80nAI:RNR39%19mv06ddmAsdvX4p9kYKIAJg4Da5PMqti2jWO8pMMJxyltuqy9IB1o5pkbMbeHIbt%hzmKY1vnFnnEAYgCAivbeHtE4S::ywhImKWNsQzg0m8f8A9VUV36rXLEsV3tj%bW65f2rc57trvXs981YcCZodUebe2S0L:%1LEBQALaT%r4qB2cX8hbzDxFjDHFXqK1uY1S9RDt:yCosdfxAbVeEIUWrVoXSd6HC7Mf8%fFNV:CBj7ThG3Sz:SEHFjNq3:llChZ9dW%8LZZs0hcShgE8wuF1iFhrHnNNhjUcqdAShAKI1VSm8V2nCbR:W9q5z:4avQwBZ9PsBjfwgUc4sjlb:nJMLDCuhznIszvqtQHEhJJVquc7kOkqMHBvU6EzV0V7RAaCRYOrJqauoLFRalcL3CMLCUbSEX4uuAr460B7EaJ9JpJzb3jf:7UsQFgAuZB4WkGHghV5:xfFGIvAibmofr0eMr0m%KQcLN::8gmMGBz475zwjMmafQNbpYf:pEyNYEBrfhWWH2r9hQC%ZnYZVl:7oIZ5okpheJlh8RBOg1aOTUJWs1VEiZsSqQNlqADd2EHQKSxx0DG4iPpilsul:GJqE3ZV:zzhn7EIplVPopxK9nzoVPdEOCMOt7bap3OcwkrtPVV6ot3QIF4FY%ZQwHwK6%mWy4JAqiAk2HighSeAczWgARQAAXfvfMoZT271L7sJaz80J1::tSxAoBClzTdWexBUE3FK6s9A2oO5ZxLf8yWzM2QEM7qMv75lJi5mSzk5q1WV0rq5:LHL1c61VfX9djrvmK3RAJj2z1hf5ChKQgeZryig39zcWSQBACd70ijIVWvrNZo7A%euAPFLEQWb95hYa:lyA7HM2Z6ZRoZ5GQABT4rfJ:ZrRYoGEFRgsZi4jAvR3KASv8Q6%9ETFqtPCxr9CAiy5twOqVktv1tktVubzO%618ygZNXRlUvQioyhMDD0pQisVjsKwIAkS5fndfLNBJvlP:%1LEF4AKHO%PpBRw4TmYboT0Chi5Zf3K0CO11v5lS89xLMo7VGwZDWzVPgI3bbsMAX%US6SSD:pIJV1T9jRiqc6%WE97GZVqKzO6S1LPzJAVipi5S86uiNUWJvfX0pwj%ivfJvYGZ8zmbBYkiuA6yhMO6KCzCYFRrlscVFrNgui%n0tm1ZCSLo0rK1omkVbj5NBt3poSEhBF6GJWV90Fl9Rbf9Tkfh0:6yMcjK5f:ud1ZyG5v7IeQhf9tLIQQUMP:%r1HYkp77KwssJcmhYWOv:7UsQlgAopL4ODJEqhTSTwtICPLGQrxZ58ynXQTYNPFlJJnHwSiM0iUIYlVqiBG:4n3IOvjmBAD5eviiQwrmF:zG0LkNf4CCwqZBD%zMYginYd9ZEZUMG:PnjoQYKNoHqY41RqzgqAmbX0TolcpViQUGw5Ix:RbLCMEYfVC3ogKA9Xv6kJh3:CChZzf:Ae::VFjKSf0IvLhZp14gATlh8VYbggDtKFNQoVPIQwhYOSAlZmupHfDuwX3WpW772mWiBaMFwstTrMWiAjyRMvoIrC::tSxDEACgiRcgG9BgE:J3Awg4pMp172preqBUju4cC:1OXQioj:sQGySKxv3sZiMRy:6hzOjO8tteRnNda:5Fm%rp86FDDlk30C4JkU29Rr8guwEgQCvuG1DILgWe625esk57ZQMS3dMoJ5zkM:%gxGc3:kItJmv:9qIrN::215o4lSIjtPfmrCvhmJCAJg0yw3GMDtFyFIPpMo1ybcuq4H1UxoPUrU%ttpNTt2sXmZhVZjDcx7R2ZiqefE2V5UOi86FFwVb:9iCB2hkX%myoH:%1LEPwAKFO97JIhvgUudcLRijpwDN:9N5lm7iWevke2Z3CKJJ1OCBkloy4EH694uHTv0DmfLsDdGlYjm53lUgRL3FFbrKFQlbIBKrBeGsQv6oSBqUv:5u4SBgYkv5c0NSSCplCprVX4h0rKU%:4cira9gPHXKoRJG1UOW1r26mLEKktTqMnbsmlp7ayhtbAKCQgFNJGtS:Fweu:K5pAEVIWE3v7l2EYQ0t8qal1BR8:P:ulWz:nHInRo0z8vNUdhT8%OWb0OGYeZWLjZR5ox5v:7UsRLAAqEv3AHpGfBTptu6LQMuJliA41IuvlLi3pLrVArY8mvoYCDCqu49bHYSVz7485Ho0EwnPldntn3QOHZojKqv7YSYe1VX3w:ezgpJmTMABo6LBxDkCF62uFHrZNMDUiKnatoWBbsFCjTaL1N%mn77Px4QClzLhdkPmvneJurFQeZz4zyYkRRdoBCRk1Of:2z2FJJyVqSNwGVI%0:lwMHT9JmwCud1BJ7rKlXJ1DTp13J0U3Z31KPbRggKdlSUbUKCAAAB:BuIvJLkSpx::tSxFUACfR5dMewxME5ki5U8w2oAQE5wJaRi7HdIYgDDnTd3RWjQw66mqr6bsYPZJMOWED1WBwsHbuHDR25QvPR6DpsqYZug4eXkxdiNswgGorrFn3ZweHdFT9yfh0GaR0yhLhzElA9GvVkn:%DhhsBHBA0BTqstFEe8mcuCCCfO394EECUwYig8c69LGioBZelYgVZW1rehxH3B5h:kAMnqlk:XqUB9mCoE45FRKHwATB8GdOXSe0gbdmBUUIGiisr4MCf%8OCJdYEDIwuaMz:%1LEZAGKRHVxB6UDAS2Q7cD2DHBOGugAHzuyNFELmnmGLuiARsZakGTz58wBFi964uFbE4wdm7rY0gtNrXc4sXbkxi6rMUyYlLSs3Ea%gg6sAi6RzHqEFP%QGGAgpZUva0YaBCQlPg%Z1ED4MnekykCCx4MEXNsBDX6U1pfO7Od6vTO:ss1KKgUCUEBQMoV9VuK4NUMB4K1fjbq2HRJHP2afISX1AxQEGBBWo:4RmKVi3ZCMQyaTojuQ36TmUh5cjaakIEpNlv::Dz9t:vu8Sf:7UsRzA4o0aXAkmEzBKw:uAPMJmEE5gMJm2SfV0bconD7r9077ufoAquyiABQgRkBJlRhFDaQAF3hpAQZBlLPgRHtK52QQOz8DaoADKT6Tukreu56WxY0Ql::nCNVUsvzlG3%Tp%Z8jmhYkCb5pGXp7:616%uv40NQIzPbsx2Cxr:px199wnsysQ9ah2MConafuUqRHE8cgjls2oJY7gk1ZpnTNILUeMIEQES2DBrftswCIq1c:I9bLOkdNTt5dmdwIrHLfxOASBsLcFYdC27c::tSxIKAC%TndySYS2lvoC8wkQ29g3:vsTG%P86cmi4bSxuTOMxZn5Ij2nj2l9XqX5%3q4ahKCAQBdSuqwltVDAEZWYwu6zHZZ4skjErJSWQUQTe1eCCygQuVPrjr84MGuUb1PImUBhP56KRVtTbdGPJF6ca:lEXSnrSzpy3sO3YiyeEp:DY795yKHQcmgqtLxZ6phRXGDLh5xr3xqoABWi2W4ysV4maVJQLjsvcWLUJZrLQSmqs9e707y9BVwWtfPQZtElCq5iaZV5WgpgxgjT:%1LEgwCNfJ1oDDDKyZumraDzDhDIO0y:MkKZ3MzTL:KbIimphVDZrATTzeZF84VmWanbOV9NDVpwz6:usyJEyYr1WKym88nmG8eQIui%nf9uu1lLpthICTprOQtqrYV2:ylWtCzzWtMrniJzlSp8LIbdghk08%6WDaoq6gXglTMzG8tCc4UmiSFSjHwgnufSkQypWFykW1IyPltnTSUmq0i3n3hei5NZ0ync5v3mcKs5nRozZ9Xcsv6vyjSr9pIt0UiE0vaH44CNS4mg9hw5cv:7UsR3g43pi2xHsGfJqS%tRPMOGbTJES0W0JN5jUmzIiZYZwiaMakxcXZwSo1FkZoR5lqRcvmZKWWyk1dzIFiLtlvdTenOlSpZ%uSkVWP8oVCB:uBWXbMWM643tXu4WYxoP:kZdonIUuBzA5mEZSYwMFE8QRHq2B6CCKVxW:FHZSRHo6xNIHc1h0pfHpUgo0NXSMldGL:vSY19OOdJokpazKnY85%nS6aH29ePHtpuHQKVw0mp5BDb7uOPb9v4HHETscp3MPx1sQXeOORtyqOw::tSxGiDTLE5ckYYaUmJpu5Iww0xqxBMesZVxLQj4jODshIGhNDiFPPKmN8OgEZOvqplEUEG1DzSlvi0oMNBMY0KvIsoAyKmIRlThZyERG7nOnYtIpK01s82QA5UWJqBQSqwUiBvSsikJ2XTF1uTaEdKZQxiSx3XXKGVIm1JlkJUMEE11PR3spUfEaDwWaMMjKGGWWq5ChAswMC4qBbxnRFJsovGliFg46AqVRRQLCi0a0ILRPWnEQlKAR4nhrkc0ttFMv7wv6E0YoeTZdLVyMj:%1LEYoAJvJmDQYR6IUWR7xhhDgRhZMDjisuwLOTw2febUMVdsfuhhxhMJKR3u%QpKCiT7jbVDjwbMNagwABHpmuzkd1DA5wLJUTNpfZ8qtNeK9UzSJ:82W67Ev1dUcKkaKL6f:uEJCl5X%:t%FvccpJTYAjW:7acN7:Ze4mVghjnex2:Pd:b:KcbcCvPQouoACCqLIHlnplgxRY5doWcs550x144MiwKsfp:8KW2%pgClB9U2GLsoI0jH::64zyw0rddbItvWjPq:%62635c1v:7UsRwgAmYkXhDBG4hUJCvpGMMzRfkrkdsXz:f9%:V6Ysvx6rlff9QLnJSMVo6HxYKgFz9SkNYkMMNFkoganYvGFgUrk1FHV8FVLyItX%IgGzN8Gy9ghBqAVKOwAFAdIAzpzyBpOlqhX9FKBp0tkmujkfaV7sWxBoqECVgu5s2iWgIBOKErLiYZEuWiPTKLxPzJE69M:a10bIwVxo9gnOoAjUn3AsTucZJqzCROfBw8k4YF6wE8whP7cXFiiOIillqEOtWzIirKDlYRoWyIBSd::tSxH4CCnQ7eMMYZulCki3Eww2QMw%ICY0fHlsnlSx06TCopKxXUHUr3HdxGKMFB7MlPveODWEinHWBEAojEIZFgg05%wA1mR4YCpIKH6Ux2z2pTQFnhx6lSKv90jKGb0pTampEBQwEhUUQxHwso09nLtyCCIna2YharpoELFJ0IjOmeUKoWVN84d:mQwLCGXYIwKQQuKMD51DhOLPOguDJMwH8d4yJqRxZBZo2njfnZLLmGIWFxQXXcXfwiUxIBk6HHQWEvLF4HlMqU%mGlw7:%1LEiYMKZFNwRKTBgUyQLYDBDogmAqJq4c63yn4pd%KMazR42m4prXP0Mv1zb6UmGn3NNt:sP::5:HgnMrEfpkCe:%FnP57vtq3vqPI8RcnqJWukIuYBAA5xHKANBRJFUCQZa%:RiljzyQMoNkt4mJFSgwRk3gpFzoHDAx9rcecbEk8MDrFgEAAgcLToaS9pRbiYLJPKPD0CVJ%Z2q6nXXFn6BSoAQB5tmNrB7kLRyy8ONIoypDYkCIMhMSj7h4Qturo3WpDGczV0IHI6CRJrP:7UsSUAQqck3bEmGlhTYluyGMMsd3dv1VGnvlKwMkBnwG4FSQoXcRXvalcTDjRNRsNlg67:Oag6Vi8UkgWDA62rknE26T1opBcJRrRCGRjIS9JmMErMdl:v1PzTJHeIuocyLYjhr0::nc1QlPMyyJzW2gw7GBUyJ7eu2xpuDjgwJz1RxveimpKXAcQCh0FLxAoUIdRFkwpAzW6DmoQZPI3IlGUDZlwXC9iNzFnLpe:3KWnujL2tGHWLnOH%yf7UqW7UOY4kqs9N63cFGJ6r0AB::tSxJ2BCng9ckSUwgFRGm9wYInUocFQVOCWRZDYuG1XtzY9qQueWeBlcKKdebv2VE2Q:ghULh4HJucy9tgtnTMfTSRGg%RGhzXLsNjKDud7abGi4jFx6ACDwwg3LGAkCNJsuJBIoysoKET6D:WKFAy8VxwPlLCBpzyHXIRt1aCaLhVYq8sLSWsJCnLqslJwdHD7uoWKjxGoU4KUq7oOv8Ot3kYVuu%VRoYuE7BWBxzpPLWCINCFJw%AEio4GzIw0b8WUsescUSYPID5E%VT%yj:%1LEp4EKmON6wwhy4ViebxhhijRqgmkgJmPFHnDy1cBBFUSUSbC05kGjIMYizToA3aRkPCu9QdXqUM%c0P81p8jjb5Z0qjmC3IKhl%bROPt8MiNwzhyRb4OdIj0KhfaZMX2Zd8z%wGV4axdbSW5ALQsSfO0cYGtMXacJnUAINXWxSDoBxwEUMYBBZBQxmpV1YiLTeXhsjtS:PJhIkF2iMsTRDkjadarLjiDaHGRkVuMJQshxzl:8nWRycjytshrHJWgpKKF6CxIobALWTT0AR::7UsSwAwr0i3REmGkBWpJvCGMMdIZWUAZRKjtkskwIhwhIjMHNMYsmrFMjdVOKSv8Qi5b:c23NcvVjDrnRVWe9:1%VL2J2JFPVHOEuoIgkj0b1I06P%iaTueqJI60dWfdb1b51f:0PZnsK4gOx2SFxEB0kTJitWBmIjkxRQWLRRNF5VM1s52co4olCBnsVL%ScaGGA814C6Oq50YgDYLNt1AqTJERYLQkScssAg8REzsc:khGDCGKMAJjnDRQ7ktYspZVlRNGJ4xMATzRMqoIA::tSxLaAC7VFfUQEbCFVKO9YMI8sohAGI45TMmjd2andCzLg7QTYuasJL:hMmMeykFR3mb%Opah3JPGaE:C:OVFT5ZBVz5OP:GnMwhltNP12kDF9zpG5Qk7:qMqFOuZoe7YLwBGlVWoMCKKSN8crcpKJFmyRyYhAswNGJ3Nja194JKELQTe0%fJu8J6yQYz%SQXRjRA:0%dL:9IcCDPZDladsM2JZ45NJ7f2692c5HdmYtFUjkBnrZ4ntgRAhC5msXE6B4OKQIasLSYQqgATFBT:%1LEuwALIZGFoYReKWeSbshkDWyaVnETGROL1LSGSO4XeZIyBQNaX55aVeNmDWEpjFIVp4OHXNdZ8ua8:OZ1DOrrZlcf2bu86k:Lzf%EhZCMWgDhI5E:n02923PbNp6BSOH1vcxqjrAS00QkoFl3oJTocQHzIpgWInkw1MKEUJNgjMC1GVbHn29W6orNsMAAXAIbC4UspCtgstQJHxQigEjYOOe0qr%rtaKLJCxuRNIJON0aXUBRQhCbHt3PBGoykUmFAncdnAa7BBogPUljq::7UsS:gAtJQ3jDGGVhdKhwtDGKfE2Miig6ikM4587lp1FfuZlyExQ3w6XfJaTS:KeekiI3YjNCJVZIxoJb:dOpmRucjmnYyOeDtShbOi:%nYllKZNUltGpLgGDOa0204yhQAHQwcKAEqPGJA8It5CdQzsd7RIQLP:cuk7nnMpkmhYHd1URbETUwf3JgomyM3MWgmRPGDCH6s7:9%tGXZ6GliEACUx:N6K3676ie:Pkkr:3eUpgBxKSTaJDEBhd8GRpg7zB7DjOaVpI3JP3pQbZ::tSxMGAC8TfeMMMUalXj65IkwoIVLLkwgE2olEtBMaASzQ2EzgOE2N%yRBgYJCUFkHhxR4EAP3bTFjHmkmSAqIAwmtNCqyiVqSlxkWGNBNRgrUhmXNNkZoBiEmODwRTZ7gg9BNAmYfSopOg9B7Zkpz::KHVa6l15LFZKRQmEoDNHtYdMGnBh5cE0RgeB1jms3OHrWufFhcg0RiEBIX61K0IVSZPzxom2ooWndacTcDHUiHcxFsNLdE1Jd7BeT1UhFZEPJ1ISfcvvplYbSlJ55P:%1LExYAK:ZV84YReoWqa7%gwj8Ww9FXQ3b5VLbnVrLzAWIho6vl17N7oWZ:fX9rVNl7y1kG6Xf6uW:%:aMoPTfU92r6NILBKxBz8qFiEEDkJW%nEFooXSUnN9GRTMAFBY1re:AudOunGp%XhFnEUs5tv1vFHrN691JpRq5806tH:3:%aEY6KhyLZJ89de1:f::z4dPphVP9MWpSWAAAAAkAoAHmP8W4iRC09AOQIwOAXxPYQE8b6kNIsQTHYYlcokMBxOORIJZssNz5eqpUEG::7UsTKAQr0SXbjJMZBX5MuSJMNmKUNIsnvitWjS9a9RqCJoyjPCcuYO%TMr2F8TsdG7:bKfrMz:Qvwf:WjWQqVWrEcdr3htMWWd:7dsH278:P%0LloaTMy:l4%p%X3N%b5NrzkzM5lmelbiA:0dhwaJSVKYNGwnRhJkaZ5R6CbUzlrqqMxnQdJBCOZGNILEE1BOXC8vKFyFmcNzzPhE5IKyCt3Im::Phz8L0G9tklym2h%Ljm%g1EZUP3uDKjCJNeXs2XAYMILKOFB7FkaB0hu::tSxNAACwiPgUMYYeleCi7OjDAFau2SUmWIYdjV4tUiuuROUiqWgUyW8LI:JM7DNE9Sr5wrVgsUy1AZkRZa9nMEgtqlujg51Exb9lRteWyJbbK%10RCkaMlg2xLepeJkrCSQANeUWpZlJra3E0ySoi45uiEELVm41WijzjqYc3higinQWhDCr6fNLeQ%HSBxU%DhjW%5bn7k32lcHEWBlPmpKS4UWDRU8tRH73Sege0oNOmpD76N2OZMaEOdQBGHVbcTkq4Ajo6sGZjjhJBXCD:%1LE1gASyV1nGPYACVkeLkuSMATOQjeSCjtcQ7p:8TMvZVsKEoYsgY2isb5Js5:jK:5GVEqXclEOKo8S2sswsbRa:92amiMjCIk5HOGUVJkDrMqs9v8yf10dkoNmYqMMQTbk4Q5BZ4QBI1x5FdUIgGa8LYxYsumFP3gmks%%znzN512W4s7M6FTf1:yufUyanKRjWmINU5SaN:9FS2ltBhCpdATFVUCO7p0:zGW2h2fKU:ZQYfhKbmpOKqShaZqpKzswYDBi01AoupMbMCQy0v:7UsS9gArxNYFBhF4hUJuwaDMM:iyYCmZye0VscqkIVkar9CpdbTq6kaeeRRrjYK2UzE2uv6lZlMmtMq:lfjnaViJSJy5r5sGvfaKR772%Xj9tcArQvjcJFCAGN:wyMKLop6CKhFo5E4PtIZKxzbiziUqfacKyVAJOv5NMjOFo8puCMgzhZzWUrs1P61TFFYWi2R6ozEVCuOyTPXbVfy1qcxZje1KkQFcdT%wXLCj0V3MRgAYQmmmSnmCo2QiUpaqFYTdLXioOQJ0hmJgI17x5::tSxMWCC8mNd0GYvCFksm1MYYpRRbEWx:kpHG28zYzz84FtMplmUk:n:VVih09pB2DazB25hddOCrCwlUk8vJL9GeqPPInUAY2SzpJdIAAQAAQAAEPpXuTV16ezcow8WtPEEOgO72qAlg7jWG6jA6AUEkTJZO4:HDVZfRPnvTOkRguqSjdEvfH4ewwYc0lS6ZMXjI4n%aGVzh09dBFSakV1azIkSQYexInE0EnOl6mtv:SWkcc8Ti%YFEd3X0WRX:82STOKRVPlSjdiRKIpnlT:%1LEx4ALgTtu4YR4KWOorFiQisjzlQDFxEAANWmgoSo4BIsSJEknBQCeCkBUPSgbB9at::8CzSKipsFCoqbAdA2OkVFm5VahtmlVphYBA0eEp0FQ0WBosDUSuEruoGh4bhqW::UeBp5JTEFNRTMuOTYuMVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf:7UsTLAArs01z0kYACD6uomzDQAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV::tSxLsDyliQ4PxkAAAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU"},{ name : "R_bg1atrans_png", data : "s1396:iVBORw0KGgoAAAANSUhEUgAAAGQAAAA4CAIAAACEzMqPAAAAB3RJTUUH3QgZCCoDh2Q6rwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAADcklEQVR4nO2av2sUQRTH585r7hIbEwhoTgQlIdik8EcRDgP%DxYqFsEcWAhapkphF1IJNikUBC2s0ggWIqjYKMQIJkXkUDQpLHIIwVxhFN8xx9wwOzM3Mzuzb0f38SHsXWbf7nzvvbdvdpdcK90sMISgn0FEFGIVYhVioVOIVYgVSKxTy3UU1h7MRgeaWDEKlwuxYtELXyx0CQqx:lGxIhIOXyx0CcwpE2y7tNsS0I::%vYXFpVsFLEyQa:l1nH%4:Rc2:sRK5Vv8PfgoK4fVoJE8H5sX8ZkCiGQg%GnodRAJo9K7X8aBeg2BBGNIytrfxwD8As848u7KVtWb8wk2XzcABy8UXJd4M0tGREQdEm2Xv8BTBzSeBEgsmtIbwf0gHIOK48hQ2Gxmdx381YDQBbLfKrb74f9SmOikQCmWB6jhk3YViATjRj9mnV77agJfsoPIc8vDPtyRbjipRog1CC%xmncilXy3uXzlEfzsyYsXr3ohdrdEkB9sp%O33bLTen10Sp8VEcBJ8RQI%9QyTQD3KYUDvCPJpaUoYdlIOic05CvPmvp2dmNqUm:PtfvH6FoBpj6Qo%mlNn3:0YWbxsrhwHvbqULQ9MFY4jogMrN91PsCugQYk:nz6kucN6venpgvRnkftZE9feV9Qn%o9XuM83vbPt0c8:badkYBJrk9hZ6keKBds:2B:fbMWi8eeizhFbTo3DZ1%%BuucrsrJRCkRxi8dys:FKAKNEiPZmZQzQj3G44UkNihGrR1ZOegUeusH%d0Nu5%DT%BqvMunzBXlhtnSidKtZRbM1tu1iOz%Z6Jxx0dQs:vygzwpav%xqlnnEZmNCAqr6LFjQqcoNWwz6gnku::jZAWyntDjZsmWrcyiJ7XGZTc%1VeVG%hRDypnmB5NhfddumeJwtw%3XcBMQ1jBqFiqv5B%73YglUmfYulJcziaj0Fq1vXRlw57aRorvzNP2sBuq5ePyXRI:9imulCq3ilZ7bL3%UQG7wylbR1CPOPqirUwWCz0961sCds67HS2AdV:DV:Iyo8FEevYyHhvozpO9nUjn4ycBEKcQwgLGFk7u8qYohaRTNSCiVXr:qF6DVQtFgu%3IGUZFnJW3RhRcKJ1a1WNcLLRMsTI9Bxw1rGb86gX:7TkKlY6LONSazYhcN8mQ198rb8BQ96msGJADJ:AAAAAElFTkSuQmCC"},{ name : "R_sfx_break_wav", data : "s8358:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAdAAAYfAAICAgREREaGhoaIyMjLCwsLDQ0ND09PT1GRkZPT09PWFhYYWFhaWlpaXJycnt7e3uEhISNjY2NlpaWnp6enqenp7CwsLm5ubnCwsLLy8vL09PT3Nzc3OXl5e7u7u739:f:::8AAAA6TEFNRTMuOTZyAaUAAAAALicAABRAJAXOQgAAQAAAGHyTmGdjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAAosT0Y0kwABaJGtlzCAAgnA2J5CgEBQwoQAmK26QIEDHjHvmEECwAEZdsZFgAhAnD:E4PiM%wuOB%GIjD6gQdqDAkOcEPxO8H8mIw%p3KBgo6UGghyhy3rD5c:wf:EDgxJJJJJAfEMDGgskSdVy5EUp3egyq4:OxiazCEWGiQpSRUiWNo2g7Jz0HtTRcsrFE0naysTF7pVpjKQBkEhoHFgs9zCFcyPFBawQoWmsYwAmnC4Q7qlf:c7o:qUAWZr:9ttuRuSSSQGOo4f:%1LEB4AMXReLWDGAGXmlr6uWMAVswxINLijEb4LB0D2EngSlaYJ9nYE9OeFwRYPhV8:201ylJukHO8CVTBlD0O:5:zcazG7orjTJqZP5ZX0oXrmXEhN9TGYb4x1znXZvqbWOW1mxG0AAn1qSSySgoJTY%dtmbbqvV4RhsdnwpSKq7n7EjEYzOp%GjEkXa7seEOR0vdOl5rtbnjQqCQrlVa:DsaR65OexjZQiO3U6051r24MRfj:iK%ur6nTycb6J3367WD4%lQhs3JrdvtduKP:7UsQEgAtwf4OmGGEpeBhwNJCNTYhipaF3tJM%6hkpSN1YaykxmhIxIpQiKWHtHOqhECTwsrtVk4TUuzcEroXTYYPVyV9ncxEg1dX1you0fFiKfaU4435KDqXdi7%h:bbb9:SU2pJSGzm5tLdvruDAQ5lp23LEKGImk2zkRJQYjSFD8JhuPmb3prO0iaZ6MR5VSmgdXtoMu9BOIOaINAaCwm2Pqnrdu5%ta%3ef%0PnQvD8snRvmm9Ddf6H36a:Wtac7LY9QBlWpZptvrsPGp5::tSxAWAC9jLgaMMa6l4ljC0kI2FDpNEpKbhtE82N93OVXGcquSulIRkRoLZE4P%VNN4qbZOIdkOF5mEHhF51FGDi0jwf1HAwpr5:57WsbpO:tLUi5VLwitzmsXt44%21v784z:3%kZoII6vfW777fgeytu3ktg2q9Hlji93DitdiVx1hNg3O9:tvvuDbpvRdx9:p9WmxIUDuYag2b8vF1yz4FxJ:N3TeoLP9kLfrpC4c2AK%nAHNphRhHan8TfzCz3YW:8KeiHyzNYKgDDYWRL:%1LEBQALlKd2xaRgqXwbcHSRjXXmWhKhoBzYOgI%mp1zI8WEDiSDttxWIzhlpSzlhJaxaOXbZe6:B3VkfLRNKt61q:wQn0THfwLTRjTlscLug0gJvsqsfNPfSVv9k6WfNu5FRr%c0A2rN:Zf:9vwruzY8k0sg4dmBooGgIU8ZSec5etzVUvxlVVrSp9Uw9KlWO87i9cG69oOVCel40OqnqkglGZLC:loQYJ9fkL6at%9eIrOFTL%dRrj%Dsnvm:lnV0av3x1AJbS28u%1u8HDf:7UsQFAAp0r4OhhHwhRIiw5DCKDzlQo77lTJ3V0RCBMf65Wkr80huX4LzooRYUhk7ZVNjlU3W4yhr5qsNrFQbE6D4iSmlkmDZsvbWePi5OZW8XrH2E2kWGUvS:ei1JVX:99VYccKAjWsGRFRS3NRYxI4dGixKWL12qqxX3or0KZep3xzr39Ja7v:3At03ZFNu6ud3uvpxuNl%5lufibS8V23sXd7X3atfbH75v%b5xGlv%:%rAk5i6vM89KZ3cZYdlh:MvY4DhIzp8ao1:s4dR::tSxBCACoTnhzRhgDHyrLP3DIJD:mh3yRlBeCHp65ldc11PvFRsrFyXIMfa1YqgKwkPNBI0I9MJRakYhjuEqm1mWRjXKesMgBKR2Wy6XXXbb7b7:br6Gv:U4MamVpuriQR7TqRwlQaKn1cZ4gLijK9W3gJjDgwTcdPT1O1ByU5SIyu8Qt9rIiApOD8HhFFOpqKeWn2:JZylQdEzCU6NT9XvX3dHjRQFgwt1ISJhEfunW%r74jueuZQa1ALPatAzsSLITpEAQW%%tttySOSSSQD:%1LEBgALfQeDWIGAEVADblueIAU2ECiVUh7XeXeMqANNkgopFVIxRz5ar8d7V:OehG5ERyHhi7DM6IvTi8QvZmb84ZSfMjYuevmx5lDHGzBiLlwJJNbiEq1KzJIINW3FHiHlnADWmV1SF3O%7y8ONqPaBqcx4ADhjSieQBEbqMM69g208CvzzFex8M:D7KtbLOfIMMn%UQXwVtP%sOtGb:9I3vt9:515GT:9JIuQFb3%hEf0d:vb%gBapTYWUoO7tt2nCjowKPTHlpMmRWaB0P:7UsQMAApgkWpMGGcBTYPwdowwBe67fTMXSgUma1s:ztrHs69O:9XPBoaPjkJHnTGPOmA6LnmIHi4cUVj9CVIrlF2EjDK7nuQxHYV%lSFLAAyjfsltt240LTvWZpPiOnpSGoJXTG3IS6d3kmKmbX1m:v6:kshre1cm52ne79Ovf%u7t1bKimovwXzKdeTNEViGbu3x1d48dzprl3KP:utvkZL1JCDTcl19uu1222::%:MgZLvsY1bLdxVWSoqvsLgsqFiruxppYrSRpKNSOQNN::tSxBaADY05lbhUABmNrS93FjABvaNtNOaiUqnXlZmpqqiNdkSdaiqioji6tk2eBxD2dcMytFssST1Eyu::TzdFZcYwlAv4V:2nrwtCcGbrQtFhgAAAKrCskkktuv2%3:5cuMDo%sa87TYf029Xgb9EIg1dkibVYsOv7vasfY7uXpCz75fcoiO%33KwKSqq7n3JCnpD01OkeepwrTzpdK1fPzQ6jZtpOQj88%mklMgZO%zV%W4KrQBap:hpj7OfB0egGrHpHN2dz2f0cbFEyhf:%1LEDIAJ7EtoXYGAAUcF8XATDCciHLqR0xsXQTCwQehouYexxtFR8WZdErC3cLC0dJn1kbgo4xCbEoj1k8sptCb3hVtc57jyPmVBNRtuT:%vQJH3zHA8Wkj3NF0oo0DuHCc4TBGDpnOR%dva:R%AtHfyxjoysM7TNxDt66n%l9Hc9X6t57sL4Z5plQeDxWzKe5GRBb2tf::%vv9%KgBI1X44loC1IfQErRInqJwjRSaY2uMB6tHI%wj3I2PTzpyzPtdDlfwZSkadOLKIHNLAjP:7UsQZggpUgWzMJGNBRhvuJPMMNGmm4sleHFPHNMrLse1Y6vORZCtka9BJ6d0hRaZkVsCyNlVVYro:0A8iiNQ7LSP1eb2V:OKynSfeFCOw7Dz5%aaT1ztuZQjnOuvuz3:::fPI16l5jFRWeewQwcaQQSO3jmn0Iihi9qakucp621JjNaU11QVkPMb4dTAdp0raBM9xeo1Ur0AxuALUqNkDy1QrNivCV7r4WNKmWBQ2PEJVJUI6XBo08iRPIWZFr3ng4QCYB32IQKjRvZ16UhR:::tSxCUCCjRZXgw8wUFMgy0Y9Igd:HBrt93O6lDFpVwWUwMlpJpoklhQZOk10Q2C2hBqsAFc%:0P2dnEGofhPRTt3cCkWLOXpvY0Bytze2eRQWc5y:k:v:ru3%kTdfv::v:Y2l4vPmdiabvyl:qeLQfFGJ1Jgw5Alh9HvimNe5L%7l0puDAQGJYOFDOyiW5DV9smVL5ZFDKk3YYn2BmVh26KqLDDrAdVIuLEoxLccp87RU1DFGq88szXu%weWQx10BftAA0sIMUDoUUycUydvyP:%1LEMIAKYIVgNYGAAmYvbGswwAGyxRLq7YvbeKRQTUzqvHB:OWuChMXWrazZaIj0XPbMlwRz8n1h13q1zEKIQykOlMt%3rtcsWAXgJ52v%erP5OWrWq9QcOnKRjOtm135r050yfi9Kaq1pYMBAnp:2smftbqzO1%10cWnfrOWZa%s5mb9prb5mcmZttdz%Nh79YttAswtJbtug1cIr6gtQ:MCQcRQWH4fjEC03ZydmIGxlVmn4j7pQgUzC1ZAxHY4ib5mZxSrT%U3OGaH%HDA::7UsQYAAqAj2A9gYABTwbuJMMIdRr1IIG1E404cnajE84SOL3MapjX7T9aR6drn2qMMZZ76iFl6wgApWmawamw2LTaPQ3TYX6vProLzjfVmmOwb6J%H1g:h:gf0scDuTfT9MvL9jfT:bfX9Tfb42Ni:G9k3xnNL7N9EsE70dd3q9wfp91f27R2ltq3zVbxkYEFBTpy5SEPkBkCQYANy5KG9eyq:lm1S2F9V0AN9ag2:F:SvFyaBQIF4s0RmAs42IXCtS1CwsI0PN3yPEQpc1CU::tSxCIDCkBrXAwkxwFMEyvJhIxgPDbdi85uR5OI:Pu9WytFm%GELZVhbw:oDNCUUuLH72inPDMRqN8cLxwvSIvSHLnGrwmSXhL:VJzHYyEJQQgZzYyWCVpy2JTy3Fg5S8iLmBRBiL6nuBQiMSp9WVp8rGG36DncqGVeijA7oNtJWaSSxLLkbtSG:KiwIcbkjpRw9RydFmHU9Tlt53qBpYJCwVMh0JipEmJksDbCYBIxlgbpGqaoBMa90ygcLb6K1baUKfFmIZ9vorABQbbisdn:%1LELYAKkGFaFYMAAmSyrvcSkAIllstls2l1SwSGSGU5miaeNwEgG3KscF6ZggSbZJQSpjSttTChAXURo6dcaR%hsOiYKJ1k5VWqqzRlxQjMg0uvc057eNzUymFxQtcn7s:7f8:uO9EqTpkCcSZ0a3wnPISV3VFK2:wiKyAaXaDRKLrkGw%1Gfu:d:399f%7obZFQkHSdQPLyHiQ%0gab26jPIPyk0IEpNtx::1YhN2alvbJVV%zYtJGY1IqRJ8jkjHkRdJjPUoe9WlPLMlEmf:7UsQUgAqImX2cYYAxTwfryPMYmGJiBGwieMDCYUiUMjwdJiLJTxhibJJjD0wYiWy9tNV4s9CUAaYQyZA214iAVqjeAGBH1A9P5DAYsamNcsCFts5eZNZphbCECh9TSgtAbDaBcGS4q0kHkikHCqGDhaL7FGlirBASQhLYFXZF0BHYsOJCNB%8w0a%%jdpe9JyjegApJpuX:1YlGntSgwZYRE1dYZQ1bIxDUoZ1jv2f3aymW1T:%y%KDVD5FJXlI7nMoYx4F3QbARFw8jg6HUO::tSxB6ACmjBf4MEYjFPICwanjAACXFpkyIkfSEhZrVNMPUScVFYUsUSa8AYlV%ANEKgMr5OPkWwrFWO0eHF1HtN4pniCjVIUZq::f7%fESEO6nS6ZeRdg5x5XNy%f:l8zuSQr::5eZbe8GM1IYlSmi61SnVaQmhi%TwBHmXaQAAAAQgQFVll0r2wm2K:439DKGtedjbF0aZDGH:kamUEPX0WqvY:K91aqPUD1gvjceW%QjijZ1FuDTNpKfVXCJMzK2164r84%9UnrjGdbntn2v:%1LEKQATSZddOZeAAVGKL:eMMAVNjW8%qnh6%q4zvf%vu1qaz:jN5VpliapHvA%9fecZrvN:r53::2CkWPHvEcY09:jPzX11:nfx:v0::::piWBAlXfzS2cMzhFCKT0s121t26AtFb6iz9rhArz3GYuw8zW1lLuKIBOLTVRfYXqO8lyb5bZcZZ93jfhfiZ3%vfb7a1Z444r731a0bya%XxlsHfEcL8z8u9N8X9v3hj3tAQIzXgNwX0NHOZusyhXZwKPQ5W6wx%Ep5GjEVU3YSf:7UsQPggoceWLHmGbBQJXrxYSMaJHPefn3YjwrTzUpmQkyLGTGjhAWStke9L88tbLd1jhVggF4EuXm1rFm2rtPoJKJlFQiD5DNkLoO0QkogDQFgX4jE8JWkYp1Q6JzY1IVaRs1GNlJq2ptky8uUzcu2T3:yjqdhsJDJOlD3uelhInVK1irEMJS9br66Wp99ttdftkWrcoCK1S2ERRFj%Oq8ssX5k0hWK05K5K6DG0ngZCu3DZhe1nqH52WI4C:oEDH7fszy%B%iPbfGdt3re19::tSxB0ACnQhbNTBgCphMSpLNMABPbW47gvS2j3w7dtVf7yN3WPV%syqr6nDPFAAgADCl8BAKA4ktaQkQqFWghzUFlyUa1IZcakh2PuPp6VjIIDllekTFVb5pQpls7RnvLVL6x9XAdv8ogyGzSxzzxYqs5l0:zjNMm3LKUfSHNWKTONNV62MUc6lLSmafzOpm7k7lmttSczczIll28y9M%tZ5bXJ3JjYdXvsK45zaz9Lv47eaU6Xtm9Z2uWtWf%cv83f%O2H5hU0NpJwGBDMreD:%1LEBQAKdHdiGYMAAUGFa4uwMACYgGee2QxOpCsIaiKS6YSQiklUya0StTaaazjrh9jKjax8pyyBYqxojAYFLRhhjjFRYqIxZBwlD%xBYWr42rrWyBtv9v5haHqTYAzNIzgKLku1agGHJivUprMM9qVbtRQgoGVCoq4KHSKQAwbIoLVhB4bOsDQdMjRQ%RSVtCIwg1b3HmnEuCglbRVvdZ2pNSy7zCTyt0kQTUvqCCK5KNxt0HDsGRZFcuaVOA03BS6W7DfB9XbkeBa6qH0jy::7UsQRAAqEI21GGGCpQJTrBYSMcG7Qer%B:9WQthA8MW5B6s9eXtPee5Wx:Oe97T86d%:3bsxz%O0e1f8TpBxOUT23sT2HD%UwS8YkygikQBKSgCIggybW84TTMCER0NFRIlI4U2JfgNpdJkjeRMZ7ESTPPX5B2FwQEQfe14BfYgakHilrh6kZ2lbd9JdOfkuuqU17LvqqF2i38MRlTuKwxBMZl79y27PW5bSykFwwdLGDpNOGVdrMZRV6TLSUzVytPENHcpezbNVXs2za81Ew::tSxByACmyvUhWUAAJgMyrfMsAAVWxR7Sp8sgRMMJs6mN2UJUHVu%7bVXqX:0VgAQEBEkJNtJKGuQyMHTrXF0kB7uPxuOrXmGnTtPLr9rTonLA8HQ5SrHKLOcPPeq:ekNqH7dlzMHbs3v69fDTuo06zlPzu5tYspbLbT7bb%:Z%XD9Xl179tpMda4zfKXYynSocw8WMP44zR:HbRpWM2d3ZmZpaX1%7rbnTAxTfrXN3L2nP3cnO:NnPp08sbXcfr1:b54edRZUnD0KngJq8icL:%1LEBIAKoGtgGYSAAX%SK4MwgAGMs7hcupYrOy2HrOmWREhTsq1JY4n7u5LSQQexHfl2ldxkhBR6iEJA2Hjbb0lDwSEQWDLuLuWkqFQkTG:ESKGAVIslDP32dYxrjRYWDxtuu1V5tI80bh9UT5VYlXlduBrexdw5DsZJ7yFhUtRk3zZxI06WmUlkkkbY0uJVp09N5GzI2etvCRhkPBw2cm%YzD3Li219s69l%:ftc5Nsom1dnXub::::loapomsyCDEsd1u2122:%2::::PGUv:7UsQIAAyEpY24MYAZcZFrgzBgAMn90yWoru6Dr1wpGQdzUGakZGnlTIoaCtgkNzJJoGZBVSlTEJMIiYTfWpeTrvX9tliumJ6BGG9DOiIitOWimVYZqAjWUcoeB3Ly811m826cBD9xiAspOpFBrQhQ1hwrDkw%97%2c5TUm5ws1EQFARHWTJakiB%KqTZqUiqv9uzPpai32n%12bDEhYa0UGk5IYbFmBdAoeoOgAmOQwehj6mba0LQSHIaO:2DaktGEGjuygAAAAKRgR220DEt::tSxAWAC9CDVTmDAAl1oejbHoAAcCVrvpNxZoTpX5ubp5LId3scwkUkVcppG40VttCTUo26q:jPs:X2vczyukW7Gnea:Iah3EXvuQsbJZLMn0U:cGBwhlMSXv7PvaspBUu7WqW7FdFAAJpJJPKACWjyEeFi:GMqH77%RRb1%FE48Gw4wrb8OjREEhzN:5oiCQkRZWFr:yCxwoNNb51::MGk0WStSv8::5ZKyNG40lpJ5rj:::5GpJKY1giVnj3xYVFFMHJZIAhChCGQQhiEzCf:%1LEBYPKiG6YPBGACAAANIAAAARLjH7M2qrGL::1ARJBgJqFb:%WEcCmhIrh0XE0KOBgrEVCyOiugguQ2L:::ArEVCd::0FyG4nf:%FdFZCv:3CuDewn4%d::%LslUxBTUUzLjk2LjFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ"},{ name : "R_bgb_png", data : "s1936:iVBORw0KGgoAAAANSUhEUgAAAZAAAAA%CAIAAACKvNqxAAAAB3RJTUUH3QgZCQQruBTxTgAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAFB0lEQVR4nO3dPY7UQBCG4QGREIEQEhEEBBBA5oyQkENwA05FgMR9uAEJEgEiQKz4EV4ZWd4Z:7TbVfVVdX2lN0FiGbun:YwXmJ3T21vvGGMsRCf4ETDGWGEEizEWJoLFGAsTwWKMhYlgMcbCRLAYY2EiWIyxMBEs9r:uyf3Z4AfG2BjBYtctaUW2mKsIFruOYLEQESy2rdWsWUSN2UewWClYo0q8EWOoCFb2dmlVcSPGmGAEK3viYJEtphfBSp2SVmSLKUWwUqcNFs1ishGsvBloRbOYbAQraWZa0Sz7pxV%GHoRrIwZa9X8VaT3pFT:CfDTUYpgZQwCVtsXkt4zUveF8DNSimClC6hV29eS3jNS9yTCz0sjgpUuguUqrvaubp%Cz9cXH1dCH527%fT4PfoQXBxDnmlstaOCVUgS2eK4nZ4SG01aMiskWHsNolnD%Nm4fo4kyTSz4MHA4h1Tqvn87MM09OFw8BMGrINUkTlvs:mafylUS2w1c8tjPAHAkrqr4t1ZlFmHqSW2LKcNIv2CpfQvfTTL85RjFNcss79rn31oyOMKjl%w9CanWQ436:SQKu6b4prFqR6PYBl875bTLIczmFVNj4dvD8:%ZQB%POvj8HVr17gDy4ySVH%l5XmbHr:CUVIsPWgIuYKOI7BSCcLRGEsjSh6LbMkP:M1BQ29ePkIFP3eD4O8fXO:184eCGaxn9VHBlzr6uwu3wTI4SaBWScyCXyQ%zXr19MFY%WJWHxV8kdsHS:s84VSJ%2X2Il8e:AqBmLXyLEydumzzyQ2tVctgqZ4tXCUNtuy:NykJfoUAzTp7FtapWmerDa2aBUvvhOESyZpV:TpvFvwK8WBWOVWXYB0:APiqNsPWPFjiZwunR9asIy:yxsEvDA9m7dVqNEvqAOBL2jJYsicMF0dcriOv8wTLmK06qoYa1iquWTfAEj9zuDJSiWxcarU3oFZSZsHXsO7KdZs8WHBcHFIFMQt%MYiEokqELfjq7b14:XcS3NyNaSVLlb1Z8CtBKiBVR8yCr9uuKzdKJ43zVxJkaTPFAsvGLPg1IB5Qqwq24Mu1KzhD5btaBaxO2qzC:eTcKTOz4BeARnCtys2Cr1VdcI%QYHVCZlVvLJ9O1Zk1e8DZwOqWzbKhqoQt%BIdDE7S5pZWBGsIotVeyOy1WjerfInyaDUG12qWLfiySAW3aX1Lq4M15ESrWbZQWi2ZVYd7Eq26CVhAqsbgq6EdXCsMWN0es4Cvk1izjtyN9sE3t1nUyjgnWnWWYHWrZmF3Htysg1Sl0mqIWhkHp2rI9CeOfvl%Nf3ltx%:xiwP43J%:vrbBz2AP0e%:GxhM8zV77992R4aOMOH:Zh95M:So1j:iGTPlxaWrd6sob1f6HlJtccejoRUXY6qWesmAn6me3%BebirWpqBLaxchb%zX8nMWg1jeb9DrcaRvdsqv33DfAjFsMmcP:2jXPZ%ldxqkarpaO8l:9sVNeVmTVU6q:zhwJ%aE2gT2OO1wha1spxAuxQy6%jI3ovhP%YrxN3W2VjefJ2ZxW8Dl%bgFhr34WVSR9j2HL97Khk8WOPE3RnaeA1mkarNqdtCVCnQOALrFNmscZTYIlWFs0sfUhVufIF1unlnjj6W%hFn697dO4J:WvOzuXmib7C04w6slkaWLZq1a2ZJauC1MPvA:8v:evB3YEi9jUPwfTzwJyVcCd9J02r:AHlU7glcqCJXAAAAAElFTkSuQmCC"},{ name : "R_title2_png", data : "s6747:iVBORw0KGgoAAAANSUhEUgAAAPoAAAC0CAIAAAAy3KZ2AAAAB3RJTUUH3QgZEAgvADvipAAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAATH0lEQVR4nO1d284dNxW250:SQ3pukzZ:aJP8SXqCqkKqQFxUtCqQCCEkkEACgUC8Ra%QuKFt1PepKt6kqipueIBKcNdt9p7Zttfy2Z6TZ3stvv6ZPbNsr:F8a3nZc4B13RUCoRGw1S0gEBYD0Z3QEIjuhIZAdCc0BKI7oSEQ3QkNgeh%5dGjz1e3gbAMJqA70YWwFVB0JzQEojuhIRDdCQ2B6E4oxPn5%eo25ILoTtgkypyN6F4vthg%KwfRnTA9ql2bJroTGgLRndAQiO6EhkB0L0S16SkhAKI7oSGsQHeKi4S1sMno:vDhw9VtIGwRm6Q7gVAGovsJgkY:H4juhIZAdCc0BKI7oSEQ3QkNgehOaAhEd0JDILoTGgLRfX1U:tZSDeZN9eAJ0Z3QENqlew1Bi7Aw2qU7oUEQ3QkNgeheL%jFgMlBdCc0BKI7oSEQ3QkNYX26b%JdhE0YSYhifboTCIthY3SnxQrCGGyM7gTCGIylOyW1hCjqIQlFd4KJetg5OYjuhIZAdCc0BKI7oSEQ3QkNgeh%Ijjh%eWEILovDeLliiC6ExoC0Z3QEIjuJaBHdzYKojuhIVRH94W:h0ETx6ZQHd0JJ4MKv%RDdCc0BKI7YfNIXzkguhMaAtGd0BCI7oSGQHQnNASiexWg27TLgOhOaAhEd0JDILoTGsJkdKeHTwj1g6I7oSEQ3QkNgehOKMFGc1eiO6EhEN0JDYHoTtgApnpTpDm60%36ltEc3dvERmeWk4PoTmgIW6V7ha:9EurHVulOIBRgw3SfKR8dX%20Iw%NYxNiw3QnEHKxJt0pbhEWBmOss8CTQUKyMbHpHgB5AsmWhfMzCMYgZvIEcgaSlcSgexjkCSTbFs4v%VHmCVnOQJ5AsqBwfhkgQH3yBJLtC6Z7AFV5Ak2aSUqk40CCFDke%uyzT2N8yiDfvk0A7jEmZE8Cv8kZSKQkrs9zrpA4GuSOCcXDAk2aSVLFxwBTfDE4FoazyJShnGbPqCbIE0bKo0efz1Ht%fl5cVnedY:3GyK5SLomE0h3liY2bQ:JwqLoHpBZLnYp87KUF:CELGXyhJWFn509wdDFni%SVeUJGcqNe8LDhw%:%OKLta2YRo50D0hVnsAqs6c2zzxhuX:::ldffTWykj3dn8R7NpwKV2wPeUIV0ll7ypZH0ArJvXu3p1sIn8CeupePlrOHJLwUbUgqTb:%%t9r3z%yVBPsefDg58WnPIc95AmTSzddf6UqB670dKvmGTRVxnz55b8W9sx79%46Kp3eE0a6zekIv3TpKd8xSoUjqjXZQ5PmFNnT:WnX:shZVewJWQWb8ARWnz1riY:uAZnJE7KUT8MTsgqSJ0wgqc:MAImkfWtPUjOmCqukwrNOUm:cuD7CnsA8amT2X8tUYR:dn13KU9OHhfXDTG2p8KmMmVnK048JnXLrOSJZVsGqHnJcZPmo3J4HDz7a5pg5lT2Fwi9ffg7vcbiU8LrZAsPCdifN648JrDJ7Vh8zbbpn1%Jxhu16QpYyTVInU17Anj3dny8uHC1FnpCqeiL21L6cNeqZmWgplc7Zqd7k2W1WqWrv7FaSCi%znNU:tbGoPfzKlRemSM2nXK6pzR50uL0EoLLUfNSY0PljcFYYznLrSMGAPXNEsqyCta1SL7x89Omn:wwob2DMvHLlRVfzhmwjNa:NHn34RFPhqZQXG6P2dH%pqHCk1dqYV5s9%nD1CcDkTaxoD6R7duGygusxz12wbU:IUD4Bz9zT:dq4Vk95klqbZ6LDzU1SM5R99vDHHru%iQSgtju7tXkmOlyTJ7Ca7Bnonl1LVZ7AKrOnNs9Eh%tNzZfwhD3dX56kIr2rJuYxsie51Amk5lHNkXdV01fN05fwQzb87Gfv%8:FXWRWewI9G7RnzC2Oie1RpVq4s7uP7q9g7VkiR1S5tlR4I:asPyawmlJzFhsTunFhRklWvEmPwVPdSc023mfPxcXNOSJZqT2BizWVPfFe3Ztw9%5rdb4YYMrjj9:wnOd8qWdZwW2kwlXZU9sYhQ6vMWne0:3cdyy3VfKEcCmyJ7HUfJ4A6T6qorDyRGtzZaWqSoXdBWtjXm326MPjlo:CXxFTUkNqvoA9C6TCU9kzsk8ipWqzR5WKLtd88sk:AvZ0pSdTdlZ5nlCbPRvxhAx7vvvuf:PbM:IapZQ6FBws%fjjvwcmzeZ3ZqY4mVT7UpSX8oQke6bwzCwbyu0Z2e0xY7LsmcYzC%yBBQdjOk9Fk5zMKPuimlXaM9Izyy52eucgey4ubj7zzNUi5k1pzxSekGpPl9:LkzAvu79mticsYy:JFPZM2ZNDy998859vv:3v6vZMMWam2uOL7mVnFTmZ27evFbn1XPacimeWW95::7kiezz9M9YTLi5ePdb2xBOvBY3Y9Kp5WantLqRm1dziMxf8ySdvOQv7TyDUTJpU5QlZBdvxzNO8s2vTPV44wRMcLWU1Uax80p6QVXAb948WtmdP99vja4HKsw0LlYS9slKNeGbtnrCn%538isgTspvIUt6IPdt75gLSPa:JKZQ34AnsNFPzslK1p%YsdrH41asXxq601DzU5LTKzUyayTNH2hApuLcHvrxnrLxC0UueloxdeI4qB%wpqrbMnsCqcO4qfkHnZNkzcpW6rFfTOyduz507NxJsyDb%IFev2v:XnvOl5mObyFKuKkGqY4xyK7czad7T:V4dqfnYJrKUq:IEtGsbqflWPXOge16TUygv4AlZyrN6QgE5tusJuTWXlSr0BP7UU:e3PEkd20SWZrI9s:pDI5PU4lIhe:Z0f93bg65:ipucVrkOT2BF9sznDAt4QlbB6jyTP:30m30ZkcZq0YMbqhtMzcc2kasfM6mqMHwanuAoyJ955i25W:1RzOfgJywZbf40PCG9lcLsfINPH%XWXFZqLs:sDm94HN5Y7Tg744evLO1F7gRr3v2LIOpNP:v:Wt4Qe:E1ZQmf%VdYUxeeDeUPP3xvNnt4spp3oTrtFsdkC89TrZrXZE:4FodV77PPvXNwEekkOMyDfQfZMRCURGqc3G5qjjQrmKfOunxUUKq61DxqDH:%%XfhIaEzl51R0cEnhGY7czN%iRntuql5zM9FMM7VMGk%jdS8pHP4Cy:8UP22Qrsyb6C6AFv938wgXFlqPlUT7nr2Y2wdYxSrzBPcystMmjuZDQ0Z:CFx58cNLvfwIafvuo73:%uGrX5DKS%YmoeqzUnNowm3lZ17cllf%uiX6p4%kvYk9sb0xuen5iH54IN33a28%NJ7Ugc4hLCDvVqpHI7tQMAX8kDqik0dYQ9q8uDX2ORPfuizoPHGMe4:FCq7weWsKlLzaM38pWs:sg4LOXcV5g7GZCYDUvnjQUX3XeIavtO%FT3BbJo7NwXWLB5ts8ou4AlZylv1BH7t%o:tkhZfhd4D2C2PCFk9nMkKPR1wTO9mTM09eZSqirta5:7c0Z9Umkd2llZWdDerz1VuxhOyCiJNfv3lnxjH4H9qP3QA:WOguMxlGGOA%vutHdqPRoBJzsQQg%a59QzFbcoyh7eCJly8z226EU9gOfbM4gmdnJvqG0zciQ7%PIPbx5lrr9AB5e6gdsa7Swcdfol3Z73y2VA8fZIKJtA2ziQ6cw7mLWJrwknS8RYbvpU2lHJPUjmeAg76rqlh8aQ5Xdlbc8IkNdTErVsvLjZpLuqTVHv4Kzfed0UogX8LI47hAK:0xZApqCxHZTw41QEz3EO4RwGVG93Ph:mhOhMmf6cnJDt5SpZ4d3lHOWcDxqFjT3Aw4Y:IhKn5sMcmxIzZY1Er89kT0uA3zn9qHRfyD8jd9RH1H0pirERfoF:ABQb274TM%4WRH3P1hyluKwWO:vGIi8VCePpBoH%Qn5tn6qvcb0ek0aQ61FZWy3kytz2FTWQpp3gCP7:5ob7S6JBw:NDUFvgnA0RBib78LcCh4RYVSOgtA7jxLwswPHiW5kFHpAejCxq:%k2D8YHmRGDykHM:LqIphGolcdjJbqJUeQFPyFJ22MPPv:eRW09femNJ2hihzXDYa5jjw24HY:%wvdPRz6BZbxhD:2aGK2C8VV4Yv%WvHVRXDiwTL2kWD1giVO4JRiwYKOyyyed1yBJVomeWCjzEtDd43WcuDOV1PYHffPUXQNtghcFsBrhihWSs6wj:OnVhOsx7I59jZ%w%s8sil:logMLGg2FK6mgbBV7ExDVznIQxXZGsTThIySNpWZboeVRMERTJqD7LljLlue3hr9566GrPIKHVjwL:gQdgTs%Ab%gNk:Eg5GeYDrdxriGwochMj08gpxW6FBzLPESPGQlPWVbpJLmz2rCmMyiMGEOWSEjW9AT%2u1fGqq%YdfZjf2%nbmXmbQ7pu:WHShDK:CPo22HNY5pQJ%aW7arlSK3zcD93LeILSf3CXBprHfYNJN9bzWG83iPGg6aIG15Ar9151eqMO5UnwWOukFqDnQOrLaeIt5Jxkszjw7jaTG4G4d06yS0Z8lobfgfrEGYLcHnKPCeiB8igQNFin6gZrsCsAaASvmHykI%pStXO0kdhN%%%LVZk7kymNoGXndT529uyDBssApmns7wJTxHwS68YoivOpwtWCVQ2BXWkGU8QmQVcfevXqpiEYkogGoMP2fo2SVkQ%5FbMIT%O27v0FdEy8Y0DBXIOVeGVwZeJDGSDy0rwhcyGoVJT84IcGEMB5vMAO8GdGNNEBZZZ%yI6AqA6wMiTmYN:xKuhfk8m1H9w4il1ldIcOorbVJ6iD84v5vdXvR7o48lgLoxdAmyCoQKfFiAnrw0qgV:BHwp4B3chHdpIOpTTAt2QnmIb4Z:nvZgYN%Ettd4Qi6fuXwAbMw6jpjTQb7QyI5ypiXXn%WJpvJHn739d8dlYRXu19LSFtMcDBdMQvcVDKTaCOmGom1YaCZdiM3Ae4En1FTenADB:4jb8z0xrw16gztu5HByb%aIswfoLv08GXS3Tf%RMyIataQkIyxh9974:fxtvTdDZP0:kkRjJ%IaQb75RZ6YFg25wrB9gwYBTXchC5nOBvyOugAuLFBdgLGUDf77R5I0PGX0YYxc%CV1u6kTSbdLfuzbChU3oQn8Ptv:sHkFSgJn8ka9JlJee6IxKoLZNSTH6wRTDIbrNDIEMXUHqbDLT4F3AYM%JrLKN7roWCHg7tzMRT6gAqcDL6wYi3g%H6CDMtx1BD33Su4ZSwDQCdAz2joYp4rErTDaa1%aMFd2LmXew6l3F%Z0TP3dP9jVAs8pXh4zq9PbFCkN8I%5qnFM2Nbvg3ImFY0zgTTHMY6eIHVUwlid:xEiGrF5QBgDyS60KuimvcCrumjeOZ8Pj4mvmtujZ1MmspQd6BHStXJ9AIeCoowy3nU3mk:oGoPQUy4uyHaRIKZ8QozlPnrb:0pWEsfznVM5:KhEeNuuXk7HOcn%OakEYPRzXX1xxs7hbFTspHpagROaof9xzz%GKjxcNBfLhTa8XWAapYVtu0unWTxUETgw9pOlAQKc0XL4lZic1iSn3QYzMJMMO:JqCZ8:WOMYukS1%ZvvP3nWBUgtBvP35q5jsPv9X:gOlirCgc2gtHaiBWg%3AHQKeSdQ1XfCe3GQiGx50CM14Fe4PxzIr0VizybMNNP:NSxPAqZAnYg3%qH4aLINVAO0lG8cxC2mxzzSGnorGewN:8:l:MtQeHcPyaif43z%91:yvCCeaZbMHmQhmzTFeOTIZ01zULIYSmN:QENbyo8QFcD9dPRLvIpfKarXokVAY16tqHu1NY:eQqdxBP5qHCkTlya:FdbtOxYqdmRCK:5Pth0BP4Wz:4K1TCxOc4UfMFdUshZqiil2CIfG4T1X:CUgJ3Z6Xs%gmywXgGeL:TBZWr6IeRIcWFk:F4j:N8:efuor1jl4cuwtB3896uA5aLEqjYM8OFTBvkNSkZ9IqV%dvv:A13mvNso9mL430Mt1V82DXEbMV1nRMLAacK6gOcqDo8CKpHwPYz1F2fnEvGH:bucIxnxjZO4nc245UvOhjvIL0tjmidLC7CaFsMPu:sXWZsCDdhHHdE8gRPiDkV6EwZnpJkGk:omPyqq3w5dngrGUG%08zki83wY7C9jn6xVr5723sFt1:CZf03yeChw8aZbHd4a:uMoXfA%xe6O:UWdv8y%EGGo5fUG9:9V82GKjt2fFG6w2ekLOyk08KcDJ1Cv91:Pm14L7tTRg:ncNhvn7hFE%OQo3st2zzKw4vzx3ffGXrP:HBEfcl56F5dBFwtG8dr0Z9vh%BWNtG:h6:f25dU6QZ77Pfcjy32Ru%vWnd4c9:xyrxFVLtzfB0eUu64Nkieg34vfLjo%mzNKyF7HzBAGd5xkwSmb6gPHxyb1l:t69s%1nTpSOVjW0PfHj%F0LuB%nmsE19vtaKk:sre5Gwwhh8NUyd4vNK4:zrgDB3ovuFKA56Uf%pNEQLBKihtUN8l51wxj6srImmovgwBiwBbj6HJ6QmuIsh:ADCF%kugg6P5gQv9e38Fz84u97w:UL9n:xC5LiV7QtgZkPwf0FoZOTTi12IAAAAASUVORK5CYII"},{ name : "R_sfx_bossLand_wav", data : "s3342:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAALAAAJygAXFxcXFxcXFxcuLi4uLi4uLi5FRUVFRUVFRUVdXV1dXV1dXV10dHR0dHR0dHSLi4uLi4uLi4uioqKioqKioqK6urq6urq6urrR0dHR0dHR0dHo6Ojo6Ojo6Oj:::::::::::8AAAA6TEFNRTMuOTZyAaUAAAAALAUAABRAJAX6QgAAQAAACco%s:gPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAAokO0w0wYABgZotNzCwAADAmO7RIEASDAwMBLEs:X3bXr30RAgAIREAxYPg%D4OAgCAIAgD4Ph9YOAgCAIBiD4fWDgIRAclwfHg4CHfLg:8H9vwf%CDoPv%CDvKOlPlDkAgEAgEAgEAgEAgDAAAW9FWlPIjPOJyQ1GZRC6OJuJfn7tovDfXPJkg1J6T2VVrEIbLM6nbDy1Q6ikx7%%rhslbk5iLiOtn1BvRx8HL6mf::rXba8gYWHepK7AgULuf:pUABBiihIxqNxz:%1LEBIALhDtzWMGACXYQMTcCMAOx2Q1eB6gnRqnHleUpbI5oSCQmYRyEU:cO6AVrGvU%fOdZEEnIrF:eheLbocfc619tL0ak3R5nIFyVHIfK3t%5111L26luppT1fkX2wZeSrerfvQAJLRTcbccksltttttpMmTqqIZMuUJiINIUBZpzLGnc3LNzyvLlCop7z32a5OkFMA:QhdlPSMAhhHEEaBGAQYgG1XXqRzZqPR%nnrVpUh2gfE3xey:lPU4hft%2uUIAIloxOR2Sya3W6::7UsQFgAvEqY%4EYAZepYydwIwA3a7UpSRSnFDcLnnHyHcsqo4ffSm5EEZK3O6dzMBR8StaLZCZaQoPhGEGEOCWd9Ggg83u94xpf6oFoBkZYgJwj9jMzyWb9LyZEyN0lxRSazsW1:tEFFOSN2yyWy23XXbbbGqIZZ0zYHFumWQOgxRh:Mjde7a8upaNRSeWci5QF79KWFOZ5QSo0iUFS5sbufth19AKAsiu:ojSDYVctoYxQoLtZVBzZ9ZVq0fTPmLUaypAWoAVqqv%OIke5FG::tSxAUAC8RBbFjxgAl5Dq1LHjABya0NLNm1xPabLlSdQdYGQpxUGoTNGxsCszg4s6yCv6E%ysDoIPa9Eq0OpLXTNLraS5RUvEOPNY65hObalzPuNxvjY9cj6BRZbQknd1b5ryr0bzIMipLXV:spai6KoXZUO7I1fc2dyzuHjimQSrkKgIzIJqi3WGzlSttazOjwBp5Emc3kBj7WMaY7vV4DSdfeqVOxW8d0OWc5nvMJ3uXa68zcK9qCmGcqlONnsbnuga1HezUHYgQehqEyI6D:%1LEBIALHH1iGPMAAYMPrR8eMAGgk%%O2baOTk7%WwwLCVHyYNxajmNtKop6tl6rxj3L3XpvCqD5BAWWHBMfDo14XCgFnHBNAo1xpwwshJgVa84xr2sIJY145SU7ZV0cttvf1ACWollNONxtuG%gRs5VLSursMFa05Q567jQLR84MEmYrM21nSbMw6tmd2uZ5h0BEG9vbXnyWrXHT9KprhDxBkGM2%7OV6eNwc7MuHbs129PPtxe92GtX%719%3y9PL0sTIBDGqutuNtyOSSSf:7UsQFgAvceXdYYYAZehmuawowAwC5yj1RT9u8b9cVTYl2s8EQLa5r%O5MthUl6FxQRsnLXWKE2Nz1tzqhYAWNQezq7kMUNKRlrpPHR2Zi6BctIqT1K33VKCsy:fuqhMHlLN%%ndtMLgCDP11uNuOSSSSSBdnCpY9KPd15ghw1BdeGbXMq8Om1NkPgRw6O2Z%uRdlvTFZsRIcn1LSWmyGyHibgeNQ6NQlBND9i1B0OXSJwzbvfvj5R0fsbqTq2yDX25vn259uVAFZqv7bbkkkk::tSxASAC2g5b1hhgBl4JW33DGADkkkXIlxD46qjH%XvVdrMiCGVkIkt0cELX32eFfaS1CBMGCAkEFpU92VSJ6NLJWoypuUSaiiKqdrx2xahndG71D3W5df09qtPdXzS7Wqt1214ukAAEpJNxtxyOSSSSSgDVC%g0P3%s0Ou9p4MbF6JNCJ25t4fMc2EVP2%yo98Llpz7r9z7w%8aYp98vX273H3H2G%67W:fy%1nbNb63nXfMzPrd2f5jfa%763lkhQyEmVAAgyiSGr7v:ADKT:%1LEBYALiJVVOPMACX0f7vcMMAPYNU8RA0NdxGF46YYuIz57I6Emgqp1Od0lJyWKRq:0mq92szf%1U9aju1ktmTFG8Fig1q8mbpgEkSCBC6yh8:8sNhRm1xgKFFboaBhPdJoqLBBDckstt0uu222%32wAbFRvTfLNo5C6JAyPDCgLDiKIQBjVTRHfrBgKK7zOiBAUBWGQzoKGQW9%xgyq6siU9ER3oDGrMBGlU0Yn80QnPCgIDGsYNZEewMX%Eg:%gv:lFUAAISCQSCQSCQNhP:7UsQFgAuswVm41YARcpju:ykwEoAAANcUy%Kyt4T4duF3ErBsiw8AwsAVAB:eBIHgCXJP%WIEgsAhG4dRj:4712DrJ49B6Hdpf:n3m580obiSTVCSO3::zjKYym8og033l31B2FVAAQDQDADADgDgYDAUBgIANaKouOrA2AYDcp6sDNlQDjfgdGAZifgHgA6vA1n:wt7CyAMSDx:5UOE4IJi5::xxhlgQUFwBicQX::yJjMDmE4Qci5v:wxhd::oh8o4AQCAYDgcDAUCAMAAA::tSxAaADDDZXbkaEBFmEik3MPACAFUQYb8hYfYnvJ0Qi8AgOBggvga6aBj1QGrWfgbeUBjFYGuXgbJ::gGiAMWKAxYwBwEDBA::DLIxwoIgx0u::lIxLpASaIsMt::mJdIqZF4mjEul0ANiQSBwSiwNhIEgAAArPK6st:0%0UJiU:5cRejspy:4h5CyfD1fx6UEKL6PT:7qBWMgDqSIQ4hX:4h49ZxiYEIgstKwf::Efx9:vYT5igveUDAPgURHvKfqTEFNRTMuOTYuMVVVVVX:%1LEBwPAAAGkHAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ"},{ name : "R_laser_png", data : "s506:iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgZBw0aMpZnNwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAA1klEQVR4nO2UMQ7DIAwAqdRX8AAvWdg65yP9QdW39EWd%yaWoFhxXccgUHCHiBMDJMRnDMTdLw:T5oZgCIbghIKJYSUQHROB4QoAgEoUQmiKpdY2u8koQOoF3nvh0DeZ1qEKggbO9yslAaxM1XCB3%CCqysyvz58%H7e%MM0jDHiEF8pHFwBR13BfwWwsf8gVRkyHBLwI7ufJjS1AoyeIuYEqoZywk5WQNHpaNffNaqVfpNF%iiovMOF9iPg0Vt:RM2CLul:BVSfvulLQaJvdFkiwkRg1BaWNtsP%YFGyAAAAABJRU5ErkJggg"},{ name : "R_sfx_hit_wav", data : "s2506:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAIAAAHVwAgICAgICAgICAgICBAQEBAQEBAQEBAQEBgYGBgYGBgYGBgYGBggICAgICAgICAgICAoKCgoKCgoKCgoKCgoMDAwMDAwMDAwMDAwODg4ODg4ODg4ODg4OD:::::::::::::::8AAAA6TEFNRTMuOTZyAaUAAAAALggAABRAJAZ2QgAAQAAAB1enRs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAAoYaUYU8YABf5qu9zcQAgb5jkgALAAAAKAThYG0thOFBEhv38e%4GBgbxEd:iITgCbu76O5xAAAOAgsHwfW%IMEAxLg%D4Ph%CAY:fE4Pg4CGgH:rB8Pu:8Th:KBj:wQwGAwGAwGAwGAwFAgAANHajpbXN8Mn1AJGqrR:YzBQ4zzP:6APQiFVOGAyCCdvxJAsJIcR3%K4I%FIjmkN:8aghKG:kNIET::4uQn1lAoFUlv:8yPn0irMQj:waWABgkekQ5I5LZbLbNW9z:%1LEBQALjGOFvGGAOXokL:QyjA53q1NtNtVn84GFpkXVDCNjVUeZWmFYa80BqgaSCB7fTFIVW44e2olYqugjp9V%kDnTjr0jbVf0TWZdaA:7YO7ffXfps4dmSWMCBrD8jXwYt6DBbASfumuu22uYPUCVq9ggJOGcY:VURj%AQpeNQFaJz%MzWZqXVmrNsBDjCjLOqRq1UgwpQ1%UpSFUBEsxxy1bhsxBSnOKv7N::sa5Bi3U8q6jSGxK6IsiVGnQ098s%DMBaAMBAE4wEgQB4P:7UsQFgwtwXyxPaSUJdRVlheyUu84wihfDQeJ1MKoBoxeo0IgJTEQwiGGKKsnIgUGuY0F%cMjAFAkiIBgTECh4qVxqLJaV61sFsTYtFYyoTpmMRacEBwL92hCq0sJa32mt3v%5cGDACBVMFUEglAJMLEVA0uw9QULMFiFDQSoenBtuiyQgHEmy7r:Op145q3cjs4zvUbdWBq8uUBw4VEMBAO4RHjRI86PsPiCmPU5OjHqYi7%g6IHn6f8FowD6:%ejzQBoAwJEIwLGEwgCgw0R::tSxAcDC%SPKE7kxcl3kmPJ7Ri4c3Yx4kD8CqBAYIrB45iWA4YxXAIO0F8H9jL5wLlnSvEyuKxGKw9KpTIYmi3OJiqCgmdWyef84v1FbPx9:p6ZZqtP%DbAh1Z3jGgJJy:6eWC%AMgBg2gJAoD8wUwHTAZD4NFBR0xOAVDGHjTOBMycZagnMaRMIBAIYZBzLhPG:Dg0dd93Act6bkoh6iyBjMX4EnBgnOqeu4:xKLRYnNW9fvCZ7c2QSYaUHAmi7HEf6wwLAHZgegMhUFkwOwX:%1LEBoMLlJEgL2jFwYKR4wXtpLijUnHqMJcFUwxU5TgAAiopMTEAzM0AkutIXajTuuzUoZVB12BGXNJjc7bpTE1dApzhJAKmJ02u2bFpGx8p83x2lrR0VATSZQ0DaRYyuFe7QIAAAcMMkCEIA2MJIac1ih2DD6AtMGIzBolSo0teRtVAQiQIFx4JLMu:nGmczbsvIyFnFqq0t5XRyxUimiMnRZrwEyyPOptSpEz7JqfD67Jatf6dyGLas4xbKZkjRyqOutUgDA8KTGIJhESJlP:7UsQFg0rIeRQu6SVBQI3hidykmAoxklnpgeRAKrmxyGAQhgYy4seNipKtBqbiz4u:tXB4TmiMUAQGoIxaJ30vPyNtkW%CCEbydd9r57cuyH2JFKbiV3W29nXT1:::%hpDAQCUAquDLeBjvepDUcBT4FOCccEFSguSayZnByB3UREFZbWpsiEAJm4WoKib6rsGlQqZ%LZKtyX6qIKsLPzwa:DtJ7r3f::::5bZ:329SjR1jaozrBTntjbUzF2DAyzOMjblMdcBIItWWGtUa%zV::tSxBADynBC5g1lJsAAADSAAAAEnQPBMSipWGyVVUbZaVDITdgJmkXMhJC8YSChoKkXWgUVYa1oHp::::::9ekJEgoaCpEYmkxBTUUzLjk2LjGqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr:%1LERAPAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg"},{ name : "R_bgbend_png", data : "s366:iVBORw0KGgoAAAANSUhEUgAAACAAAAA%CAIAAADFxI5IAAAAB3RJTUUH3QgZDBIZapDX8gAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAAbUlEQVR4nO3NuQ2AQAxFwaUDKqCJ7YcO6D8lIGKFhL8POXnS5DPO7So1CAgICAgICAgICAgICAgICIRgHvujPCg6XkHFsQbpR0eQe3wHiUdfkNV0B:HjPwgepiByWAP3IQS%QwschxyojTOwNzeVr9%OQ2nWLwAAAABJRU5ErkJggg"},{ name : "R_knight_png", data : "s1543:iVBORw0KGgoAAAANSUhEUgAAACAAAACACAIAAADlBPxNAAAAB3RJTUUH3QgZFzAwn%NFLwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAD4ElEQVR4nO1aPWuUQRDe0xhBI0gS8QsFMaQwwlmIgmChpb3tCQpa%QP8JaIQwdqfYGGlELsrEisRvwlItLBRT%KYIeNkv2Zmd0%ivMNw7L25d5%dj52d2Ykb9G6b%OKhSficm9kDrPm9KwBAVmJoAWguGHgYeaQdTkeHd42eTS8Cew9p7P3pD2nWHl1ylAsl%PhjAthb8tVjPW9QKAH5jMd3zuwFxkHGDIIEod5ty3dOpSLQDHJqUniSQiqxwaO36:j89Yud:GejyYdmgAtrN3BAy%eiPJ8aEQYM4GtkCusGRmdFC3tctdFOrN7iX0lLOOZfSyS4cvkcZ:JOb1AYi%DlEEDUjAqAz0KzX5vbDaycPQcQNSPOThgIWQLAgwGBnZ2dAOYYGoCIFx3tP8Bt%X54HRgHj999g8HC:i0768Cboeh%STelLQa0MnM3nB2pv7acB5gIH%GqNbMfmYq87pF2o4W0:vImDpJnGVLGPt4BwM0LTMbn7iAb%dOlJeRwKU8:%1pCL%DWCimpIvClKAZxiCQD0MJF39BTzsh4TomHokBh1IyGCu8hj535zZwE4DOKEdAQKmafnOdfQ%uljJmiLQDe7CkaTi:Qp:yWGNBD1mhGPg9asSEWvTp4z6VzvQYqspYeWhUVlx5aFZWXHqKKKksPlQRVpYcowaCu9BAkqC89kAQV1ZQeKoCa0kMAgJMWD9vy0gNJv4GtpYd2o0HpwasPQ%mxQbbEC%2Jk8InWljA0Ae7UD9tgh0wZeq8wlEuqyQ3:fB1BNw7eV:zYxXA8pefBeswAHCyJn1aAChmYOqClNIgAXq96Pg%abyTR2mvRBiLFyFBBq9KL:QSmE5Kw0arBNCqCEI3lQsUyVWkj0WmEGSLRf8LgHdrNHYAJYzhUnBgaRuUABTk7jJAZe4%EDdabe6e2WhNcndBgga5e0aCQYvcPSlBq9zd5Y:M%txdAKjP3ZMAzXJ3J50Hlbm7vNHK2wabpKoPcFCSuztLH60gd5dVxIkvVn:vJQPsO7U43z%NDFm720jf9csyZ3am2VUAS6vfaay5bvcpZRwKatj48Bot%hNNqyKuGZsc4hJ464bEanalRiqi:oHXP6oCCE8b3uMaC4A1d88ZmZpdtcTRoq3K1MlcYuQoQOZ6n97KAAgeHQY1eELtHRjQHXyKIjaAd7BtkAqZ9Fyc:TeFKtJoVp:B%wBK0%lX0:UPGqio6x:kl9:1D7r%wSZY1z8g2o79A1WWiTf588f7%M84eIOtrEG2Tf%guIVgkACv98fVP4j%f1FLANf1D4xnTtc:iPK:f73:V:sHYwfQw:wCQ8I2RkIXgr4AAAAASUVORK5CYII"},{ name : "R_redHalo_png", data : "s484:iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgZCjo4fykVtAAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAAxklEQVR4nM3WwQ3CMAwFUKdiKAZgDu4cmKd35mAAtiqVkCrXaeyf2Ea1fKrS:%L00NC9PFObTge8psvWYQAPVboPAENN4wAYi:4TUDMS8KdrQEi6ACbC6kpFNPiiDbTiQMkAkJ3qa9AjGjY0AD9opWImoPZuwgBetzKnAHyIzUiZgNcOeC8PZ1z9JbQJPrQ4PQMIKQmIU%odol5vT7C%AzKHy9AjajG:59omMv5o:K%QBRi3ilMDHRcvZzR6sxvL7QCcnQ58Abpqr0TvrxcbAAAAAElFTkSuQmCC"},{ name : "R_bga_png", data : "s1507:iVBORw0KGgoAAAANSUhEUgAAAZAAAAA4CAIAAABc5TmsAAAAB3RJTUUH3QgZCDAOSfi8yQAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAADxUlEQVR4nO2U0W0cMRBDL52lEneQmtJRakoAA8blbN9J2tGQM3rA%16RHC5vbz9%AQCU4CZXAAAwCIMFAGVgsACgDAwWAJSBwQKAMjBYAFAGBgsAysBgAUAZGCwAKAODBQBlYLAAoAyjg:Xn989:yOUCwMkwWABQBgYLAMowNFjva8Vgfc5ELqMWJAYXmRssCvcQiFxJLUgMLjI9WHTujQW:kJtcA5SGwVqBNJZDk8vYbbC3Rzkrg8VJTo5izXL7xPhHcmCwVjg5ijXXjRP7:Hd0derA4mCdfIyTo1iz3DixJ2vVyaYPDNY0J0cx67r9z:x8sNrY9OH1YHGMl4HIJUmMLwTVKbSXU9XDphsM1jTHRhE7WNVDGxys6jbduDRYZx7j2BymLLf:mRksCS8Gy:wYEg2eUUiMz0bUKbRxj6VtuvFssMyPoRJgGIXK%Gw%nUI7waMhDNb6u1ZpSFwv5NMmtBM8GhIwWPLJ0L4uT0PoeiGcHomd4NGTbwfL9h7yKvhE4eB6NpweobU3aMvXg2V7D3kVfKJIhsG6blMuuwFfDJZt5%Q9MMlBwqDf5fJUya29QXMeB8v5HvIe%ETxRJ7E%0JEJqHt60Bdj86UGSx5CXyieClP4n02IofQdtfA3KObnhFqDJZDCUyiGJQn9O5ZIZMc5BYe7Mg1zBI5WPv8O5TAJIpxbULvbv2xykHu4t6OXMMs:w2W7THkJfCJYlye1r5Vf6xykLu4tyPXMAuDFSNAW83dAhiswBDkRu4dyTXMwmDFCBBWM0EDgxUbgtzLh6OExGK:yWDFCLAVJvRuGJdJCHI7945yEov6LIMVI0ClLUHApm2y:ZNzEvAxlRZUyBMMVowAz1hCBOz4XW1:4zT7PqbSsgp54jb4mPmfmXZdq3ASXt:0u9r%yZkJ%JhKC%r6KwxWzCXyw8kRsO93lZzSKgErU2kpXXyIwYo8RprOtNf3:a6SU7ol4OMoLaWLDzFYYZdIyydTQPgvKmyRoXcrUzlBXdTPYEUeIyGiTAHh3rUtkp:ewekOMZmWCwyW8PCGNc1Ussm%6poOp5ebDVeS7Dd4sHYcQHV1w5omy9iaQPI15VGbmDXp5LJ%BktWWRM9wgQyr2mSttxvrIx8y7fw86iqU66vJnqECaRVyPD6Er9WtVyzwGCJ%yrX4xDC7go5FyDTcriSfNd9BivwaaumqgRkhrC7QrbXT7YcK0bi2nqwJK9blVX4en4O%25qXoA0j7GqJMZv4RfSNqZTX4VPq3JIuK:h9RN8XXG3O6spC38BGdhutdQiNP4AAAAASUVORK5CYII"},{ name : "R_bg1b_png", data : "s2838:iVBORw0KGgoAAAANSUhEUgAAAPoAAAA4CAIAAABbrnLVAAAAB3RJTUUH3QgZCDoj9sgINgAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAHq0lEQVR4nO1dwaosRQxtRRB5CAq6cOPOzZtl7%dT3sa1v%R3CiJ4oTFkUknqVJKqHmf6Eh739lRXJSenklRNdb:ty1d:XHLJm8h2ugaXXLJMLrpf8kZy0f2SN5KL7pe8kVx0v%SN5KL7JW8k2:7rD5dc8iby9Xb9vOLPX3::Q1LS4advvyEp6fCcn9Mn3CWFcvvle5JkV:ffflLlRNOEjYFOLrqfKXlSUj8ZEljMTpIbV4br35WMSlm6DylaGHtUNWr7VG0EW65Rux1uBuPDpMcRW%bZAbp3WTuJyoga5UTsYl0yk2PtuwPRpz6Ju:xOuhJxSrnLfDHpnvRiEqZJmSHPxa4aAaAmpUS:vcXyQqi7kSJwb1I2MUbVlAqH0qnJAe:f4TpyLzjEPEu7kDpErxoaV2aoTUa2eQM4Pf:%8yeSLz9%d8gC96tuUNVGLlq91c6KQl9kGlhiFUKHc::8vJGLjyszdMARWLEzI2wgfnMUDlB8OBCAkAXWUJJFMi8%xGibWi%oCTwc75wV7UH0Q45ANpRUa3nPeyujezdpHmz%%JcQIVBEmHdGOZpxUMQMAfcTLE4HKmZn8sRuXCPJ2tVf5pZQNuaOtgd%ZVMHCCjk4yIITRGdYgCR:kPAcoL6FHCAdPdDXRLW:SS6h:sMUEpQnH6fV5N0QxIvklU15FJ1aEgcC9GDqGd44hMB3gr2VO5nHNza5diLwIJ0qI5eSIiSISxW%duXoDuQNI7jTNcFkdTb0aUqPu%RLykQctA05X:OY0aG61Y:zr2j2QNpRpnTHzqDmAXI0HAHF:OM5%wSoVOQh%7abo:TFzTPFyvN8TDgmOEbWeg8ENZR4bbzgo0cMNqtowkNdHjaSuK1YtUSo8IzfAzhltakIe%c9NyEAft4SFP1cBif4XQeYt5V%NOu%aSh2KMQq5ektnxSJUu7GIBV8XEUXp9FQjjOcmcmrGj3S2kcBbxZBt8ql:CilqCg67ygJFLGRlGhTppj1egxKcHTEYtauCh0R:R2mC02YWJRJ0bfNehzfgvQVQeIdXl40L23zYqYDEIUw3A2:rHozkXZdwfp3l7kLBcZPOzgwF218Umt8VTOWZGm3TCN2YUEs0yhWHhX5kZVrI2g0X7Kvmbi67CjYOVFaszZs9s7PVhzQA3ngohq4Of9xKAIN0vmvQykeY:4RXK2mAmItbH:wXgf%gVwZ5zUjtuFftQT5SAItVUrYjG%FliuWHI6DbXP0p3X61YIyYecZYzv0sUK5PTnblc1yIh%M9EyUJuFwSx3QTLnxDQP0t0PYGI:rsSe8O1VFQ4e7KdqmMfzRCTPElJ7mO5VeXwZ3OWJ2IJiH4zrQ3oWhsBTthBAbCdNpzjdhXBPT%V6GOtJOFpbkPyUUsa6GYlenELdz44glrNmdHv8UrYzUxvgrX4CuwoLasSqSb6gkN0bSoUZv6baru0QonuVbUMVsMohXBOHN2An:HDy:vhddGtCuWPyEgA2EE3CZvqL6Sq%0S%H%zy6Vy0x8aUevx6DuB3OJ32rW3sW369PhkJ7F8%8m5OLq9EMc7QEi7c16asFk54r0h:vmMpy0GF%z4Uf8QZ8XzVThcd0EE4KgNbi1u6TOo1Htb0:ng7iD%60XS1jOR9XnFPa8s9JhP3a9ZyTeffHA:F8RMeXXcXCe03qIiG2bKiFLpZCu3Cpy6ru0xXlom6OkYgT8B%:P9C9MLrnzfjQr6Wa0PCwRGjrE7Q1zYFMfLoAFlFEFRKie7EFyoGrVVvsbJbMfNA0dT7zipSOcnVeqzTVtY4BViHBVTpSJ3%1A14t3B5PevmBXHyKOEz9FBmOjhjVxsjRZKWa0M0YQ4TJEAxJYkd050:V7N2dmcWk7:pDKNMyD1RYdZg16B07fKeGLryK4BXw0Ppvx57%zNDdKYfa9LuSJL5RLYBLNyJB7UEfqCoh6VItVJxx7:8tyLooqXZZltJd1nSiJYo:bvIkfcxHFttW8kT1nQ9F9pWomVKsVRrvZ3GhRb4MjGt56Mb2ghwbax9IzyCgxoV29ta6Boni%2NudN7Pte797r7eQ3Q:ZRkdY7yIfJzou13YCC%eu22wA0XmPAfhI6rbdEKm093JPm2oQ6w60feBlO2EJdCR3PDT2Q8WzV0NxQONmUpMfdTdQmku3R1oOOMRgMA25WJtwyG082e4IMpQIfck7O8q6TQoWXI4Q6j4nBbdW2cjb4id6h7:I2dlbN2Fc31o3eK79nmmwVQdYp1PpHsbzi1n85cXjLJqAXCjo:P2SCGX5HpXkydhf61dsRsfXqvkuG1U8CKPFtR09rB2:8dHDcmGOL4O0duL1HIZF::v1M8rr78jctTNoKJ3%3E%Yrz1Xt9aD1kdOsMNZQARwq1bHE2SpnWhe7bKxxHwZegIMvIdkfMg6O64Hf86JU1efGO7g4KFlliFdzWpNa0WnBleGBJxGNs63wWKXrvPMNX3:ezRq6RLCHB:upzoa%xdhurt8Z2mVOgmBXq8I2nz0JcU1H8G3zUTxuL67HGFd9YMJwatmgbd22u:VI7MmKmzXAU34I9JGp4oz1ZmOLrhsljPF:lP4p%TBLXWna7GC8gr0P2F2fDCpp0ir0D315PXTlYnyr:2kXDx1Ex6pAAAAABJRU5ErkJggg"},{ name : "R_laserAnim_png", data : "s768:iVBORw0KGgoAAAANSUhEUgAAACAAAAIACAIAAABsK:m8AAAAB3RJTUUH3QgZBxoLXaXDUwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAABm0lEQVR4nO3X0U3DQBRE0UAd1EYHVEJFiGqoAyVQAkjsI77eI%3:kWzveOby:PAyei4AAAAAWAE8vr%NnhM8IgAAAAAAAAAA4CjAeH1:un6OHgMEAAAAAAAAALAP0K:vr7fr6DFADvCZAgAAAAAAAESAfrvu1:ePr9voOcEAsXDuHxUAAAAAAPwLMP5PVn7vX377wHh97wP9lzwO9KOiH9f9XyYAAAAcAdCuteu:A:3yC9gA6F%0caAf1wYIAAAArADsgw32Qb:ZAQABoB8V:bi2DwAAAGAFYB9ssA:GgX6zA2wA9C:aONCPa:sAAAAAVgD2wQb7oN:sAIAA0I%KflzbBwAAALACsA:sg0DxAgACQD8q%nFtHwAAAMAKwD7YYB%MA:1mB9gA6F%0caAf1:YBAAAArADsgw32Qb:ZAQABoB8V:bi2DwAAAGAFYB9ssA:GgX6zA2wA9C:aONCPa:sAAAAAAIBfAUbgj0C::I4D:ZesOgIAAAAAAACcBegvnH59164BAAAAAAAAAIBVwPg%6D8iAAAAACw43:6f6IdQ15:hAAAAAElFTkSuQmCC"},{ name : "R_bg1btrans_png", data : "s1611:iVBORw0KGgoAAAANSUhEUgAAAGQAAAA4CAIAAACEzMqPAAAAB3RJTUUH3QgZCQoV5:bBawAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAEE0lEQVR4nO2awWoUQRCGR92QhLgQxRz2oDcPGg8LcxFEyTvknoPiwYPPID6EJ0HBQ24Bn0NBvehZVBAvXlSSsKvYoaTSVFd3V09Xb8:KND:LbO9Mb883VdU1NdPsnXk4SKim%gyWSAOsAdYAq7oGWAOsQrDePN:podormz1UH2FVh%LT2aYf7f6jd6gS4x:NfuMGqMso1e3IZ1bbk7Hwgps95fpP3JBFIMGUs8PywfKdZ5SUxNy0SLV1Y9bFG99ABwcTEP4UiCkYdNZWzgV2ML%CFCc8It8:vZopju5r07vf3c7d3a:2V3KeiC9w:pJ9strLB7dsfXx9TV1f3p43Yn%6c:USERj8va0No2fXG:O5d2HdCHoWFp7YwZsSdIRiMQEpgwlkMMkpaK16vmugAOvD:m2jqBGBbCt2zQqQqZxwfurg7h%CRTwUZKPpIFz7CCDcLudN0eQLPB3ETuMUVtgiCEEhF1asQckxQQgzyvQp0m8GtH2fPVwtZkWTKbRNd7pJ1gRnks:LDpR4AQAW2hc5qkkyKzkalxEeq3ULgmeYSg1t2YViGxoK5ymyLDzhVEABh3UxlVjLWEbg8sKjbJRpbiihE41oJW5xU2G5%YpEIViub7Lro0oq2zqrVU8si8KSBKzUoCahY%T2gHR5%RbfLrBqCWHZ1HSR%dIUfTeUKOqJgZ9c4yKwiFg:zaGZemxNy5JjioIreguN28r1rNHoM9tJ%kk1hu0JNyxXlahbkT86La75FrhCq54vbKVals:KihpXBTfE:ybIVM6qBC8pLN2MwTdaay2LiuemDisSs%bzy1rOb8KWPZodpKD6Lg9b0Wd:HR8L%geZHp5U22kNPr9BLHcpkx4DyNCBCd2c:znpWl8Jj2zPPhDR1YO9md4MZugL2yoOyA5CohUEGrvQTsoAi7x:JP8LTwA6BngVgi13l2MmFK29qcvN5u2vpMJltrNWw2jFnZWZByGFj3BYaypUogjfAOHjJbh4oF5k8GTREfpIZ2TRG0a0LKyahtzQBDKfySQlsaxwxu7gtapa7E21Gz0LWlb0wSr5mmpcitaEu4WL1AXfdfDlaC:2t0DsV5UUCdvG6ghkd:46nhNB1rb94xh2gKyKaezF7:AmTGqEwm3Sr2tfwooVZAngdIFoqPbKUQd:dDEJYdmPXjo:E7OHYh98FYSVZFwuIJdXGFk%pvBVYdMUTVipTDN5ZWLqUoNfPCxUIRA5BhVWX95WXkCLvjIYbfpVB0kr9P4220we8K9m0DTvx6udxzGU61jW08dTokJ:BBnTzuQQZDIptK9UNbUsi7RMQ2Pz2PZobj7t5PLJz81m3Kzl:FOt6K5SQogeHn4NdSlXw2hBpta7JD2CVTF7WEpYy4WsF7CWhdpfJn1:TZ7gEIMAAAAASUVORK5CYII"},{ name : "R_missile_png", data : "s647:iVBORw0KGgoAAAANSUhEUgAAACAAAABgCAIAAADzQOfPAAAAB3RJTUUH3QgZCyg5cRg:xgAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAABQElEQVR4nO2ZsQrCMBCGozg4unXTJ7C4Kri4%AQ6Co4OfRU3cXQWF:EBCgXRVcHBSQRxEYUWEVwEL1YdappW8Qbx:zkSaI77ejSB:FQ0EhZrCAAAAAAAAACIAOQemjv91WKsCUowTVNZJCnCdb5JkxDQLO%8PlQAesWZjPY6fVNg9XjYvsbJ23ueR6tOdhQBoNJyqmVERdEB1dJ0oGSk1LkVOTxfn15QU1evYAfNaUFOLZci5jcg:G6zDF2Os4uGHWsy6miCEgzDoEwaGXcRJVd39Tc6%P2TDAAAAAAAAAAAAPAdAKM:8G:wjP5ATrUMiz%4i90fkGwefyB8izBwKeAPIjv4:ZMMAAAAAAAAAAAA8B0A7:8DRn:gV2f0B7J6l9sf2PIXApc:kCJ:YMe9XX:oDy6lMq8:IJ8DfwDAvwCuykcYVnGOrOwAAAAASUVORK5CYII"},{ name : "R_sfx_slide_wav", data : "s5571:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAATAAAQUgANDQ0NDRoaGhoaKCgoKCg1NTU1NTVDQ0NDQ1BQUFBQXl5eXl5ra2tra2t5eXl5eYaGhoaGlJSUlJShoaGhoaGvr6%vr7y8vLy8ysrKysrX19fX19fl5eXl5fLy8vLy::::::8AAAA6TEFNRTMuOTZyAaUAAAAALDoAABRAJAjOQgAAQAAAEFLzbjd6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAAo9J0N0EYABebGrlwYwAQAADCADMAAAAsAAABAAH7u7u6IheiIBgYtz:3d3f%oiF::6IiIX:::oiIn:Xd:R3%F:8RE9Hd3c:3d3f::67uLAAAQGPEHUGOD7y4P:KHNZ%D8kkkkgAQK1bpyiUOSIqg5RaQSLO4p%AgyKLyZ3gNrbGSJxVnGG20fQlCbuVN8abDQuRrMnGCV5TRDJDeHpMggQqUT:XJcuwzly1LyfqERp7:n7::Nj878:trbkTBD8VZAQC4GoqUWXRen:%1LEBQALuM1avDGACWew7GQwj9gJ1MWhCWNDSkMzQLWWg1mbikRFOUObMpHtiohHwjzL89gg5mS0sjEyW9q0YyHBuzANmkuRsS1bYxa2X6MUSTE0Y%zP:dp8958:hztntJu:2sbUZ%h95FVVVyQXQhKEDKLVRLFUt3XrUEUBgrCUsfpu56Jn6w:Whz5c0h00BFw5rQM3kYQEAmJkQWMxodbKrmiRgXACoMs1astZv8b%aIj5M5D3JFMuE5LQUvF3qLotdaWAFoUkUkDQuMJ62P:7UsQHAAw9e2MgmGBBdLBt8DCPjYMwzYegAtDMoJpmQlCDh6tFvopeL88:eyIUKaVSydqZpXIyUu%WsuFx8oUR6fcohGZETvlwnNu9sMv389JOER0jWZlM9oEbvvOFasLDuITjQwB6kMSVtNtmEXd4lD6zaPYVdIjExoZ7pbwU4hkKLv%84R020kmg7xRGXmZHaMpRqSDFeRwki%LseefMi4Sf:19w3DLuYs3Q8izOEcSZHO%2SoWsasiEe2ZIJgTqHQ:9R3UAAjVFMgSsJtY5::tSxAWAi9FxZMGEegFupGzkMI%RDBgoChpTJnUZziZkGL5R4bQhEpmrnLtoAQczPY4Uqh3GY0WMSER1wSudXil3z5kVIiQza05VNylbDn3v8kqMpSpa5EcLKnmmme8j%IrtIojGC1712BQCsKJQyVKKVaCIkCq7kS6q4QbpohG30glOZ0:IguWE2OZFlmI2hBebC4hgPpHrRzRk2iJSWZO41g4Ijl4mhERHHTHPmslFvWYd%UpDCcqXzdbKrjEWVr:3vVXkBERBRsejbwWDd67:%1LEBgAL1PVnIYh6CXykrWgxDwFDsMFEgIGbYQjrihEk2J1Oj0lBo7357YvumhniBTcbSY%EQRYJyhpXUMl%Q6b%%XbaUeoMeYF%iYge%X3Dg:VNcl:5NMbynb0Ofy%j92PrGO8M1SmhBJJJUlYgerUFiR8Gxub6BzIgqoVOxIeo7Q3JIGQ7xsMQhOk5cc3bp7nNWzvkk0rdmCO5yZX04Upud4UfNIVKkZF9:S9MYZQqwHr1Inp4lKQ7trRdugOjZW6ou81taAAANMruh4p7l::7UsQFAYoQsWbBhHwBRKVs5DEPwbOxyFHZ0GzipqQoqyYxWr04cjEbnFQnJqyaeWUj9jzFlDQ0DEiyBOYJuFRwcEImJiE%gWPiyilbhpg8Ilm59sGkb1uZ:f6iAQcWKpECQ1YiCEw7iATg%1ysMEskYGgWEEUKcEVyFHmMxGhG33ZMFk5JaQVo4dKV5HrvqdcymfFrn5%xrGtT:SkvlLSvXUM4SE21GVrQE5h6WQAgABvRiJ4ISGY5NQQ1evER0c1i14uQJoLmbozkU1ugTZBp::tSxBIAikjNaSGEVwFEl%yUYo8AB5JgEbSJ7N0J5QwV2k1oJC5hg8kWIChaSmgzKCClB8VQA2rbHPWT9zjjGxadxQQB4DzZOjktMY%Y%lM55caZL19KupZJrdtmFyUNZ3Byr9iY:FhwblnMYVmCYlhsm%p8I8PiIIBsoXPSJaKRGybPHjkkavqb:Zp70L9Jam3ewpWivp7VWoMpMT1bJE1vbkj0j:zcJYW5FaTk7sl5AhzIHF15P2p5dTMRYiERA4dJVG%WJCDS4REp4BVhYYT:%1LEHgAJ5LFiAwxcAUaHbbQwjgBKAUOnmDr7X2s:9P7plv17eyb39QgooIgEp2MKymIM6tQ8OmTDp6sh1GjT5IoPQbwqKrSoCCEuB2sDz3EKxOgIuChEwDASEIuAUDhyR9hAHhUJuYlGDX%LqT26kVFxVBRFwYfaZUYygUSiC7OtI1BO0aTuT1AZTeTqRFqquyyJdJLmx9GVqYmlDO0ShIRmDoWSTYCwgDFRIKmSBoAmRzlnilxxaZN0z%NrqrJpXLQGtMkpAkaB0A%LpAQABf:7UsQrgAp4i2%BhFohTQws2DEMyPChUFjhHFyj3FwGjRzBhGIipmqYIOeQtGOariR54StNB0LCRYAOCoHc0yBlAy4qqdU8HIDSPxhdhxqu3:oRcl7i7SKnLIJNOYUixukmgNsrAIAAAB5Vl5oY8x07Lu2J%tejfG6xiZpZGtVWrdVugUndzRjfIKMibl4nt2tEETuKxRuSnkeNR5IGxNJHTWqMQtr0kP:xuVIUM9rlGFHXqmYqLBKoAVGkrEFPUEbKOaA861VixlYoaoFTJFbF::tSxDYAijzJZSMEXEFCGS0oMI5InmUOFsSQttrHc5MrSMmyaRRMpxP9zOBCDCA8RWi8yHgMCk2z7%vQqMjdukelgnA0o0NNsMCZyoUxAySCjdBQ%4rhUxmqOaxlXi3M%zzJpZ79lvL0mbDj20lhHkRApL1OGDFRTs:Lz45anIHqZOVlaDOWbmT5qv:XmkJiOxtAwtTLHFPBgUvYIAFIGooQGqDUaikNkBvihTIdJT5Agcc1KJwNKDHu5nWKkUdOJ7Rl0:SFRZSrqc3zrmQYwGH:%1LEQoBJ:PFxgYR8IUWY7NQRjADAcAAARvkFtNOMVf:%YXXkxzGrMvOHJBpcBHU6ar5nOQSuwmscEsSpcqBhEyRSYMjx2LqctsYqbyWY82GZBytDyKBzJVoaHByH0V9dVDk8UEOwpHlT7TAdOKCIWsZ:81KEhSXWm5IJS86tBcGyIqKBmHKAQCknI9yTUOWxxLTJ51DJM9AxWJUlBSEzEedEudc6CNSmFMs:pKb4YZDYkPOEQanblFY6TgscAZIfOExd1:::SbGHXrIqSgXvOv:7UsRPgApw13EhhHihS5rtqDCOiBkdKpccS0M1JgAACokC4LVKZEGaAmWlIocO7eZPsgkFvmKKbcQ3Ua6raaJyibLdDNK7E%R994WJeLqEgJEREGRYLvFEKFFBsJx7P:92:TDDWtJNjQacLTy3OapAAEREEApuhqEWUJTsrFyhCTFTQYTKdI5HY5TWYhykNsBhEJptbMgKBaQXhlM%nVrHCjAx9jZb9Xl0X8:2sCScHEzAou9n:9Ln954JGBRKCJ1aXgFAUkhEoklTOEEroYA7::tSxFoACmC5aOGEegFQHy20MI7QJI6SnXGZrCZuJqNH6kyvVQTyY4sRCUNLUwJoYIjqiqC5a1ADBRo4BBQUcPAYaFxrgWQ0Q2sJ::RUPFyma5JFrFG0vLTSURZnzJaMjV9kM202XVlpNkytXMhKuaHz8kshEesuRIGonUhX0wrC6y::WUYTopfXCyO:5v5YRt1:5vjLW%GfxxPf:Qx::XZTZGxll7km9vSy8cAAAAG:xyCHhkNf2jRm0av3U4U6MnR8ZmJ6TiNRKHZryysf:u3:%1LEZIAKFGdvoYRUQUySrVgwjkVThRj:YbBwt:NX9J6T:nt9H%7YHvjCpBQqkKEO5d6EdvbDbBpTKBR6K:febZ7mKcv7IA33wnm8ZqRZ2GVsnVkVSk3OLPSTdIiVVIjPY3kVq7M34yN1HlbY4IOvurf0NZWbrW1pT1h0Q7oxnZN7qn5%ZkblUtlhncSWKsCQVSsO1X6d1BRJwktCBsKSJRctjjjUEwSh2rM7M4ty30Il6rbN8VmczUooUQJZmFTUaRnE7EZR1hv72SEqeZACS::7UsRwgQq8Y2MjBHRJWyZr2GGKmCYk1Uywa2wgzAmZVUmaNApYVbGMMFAgYOqTdUgBCrWz0HDNWVKjHxE9s8yWplQkYDRG:7ZbiYGW516bNEWjhtmJlIMOUbbjaw4fG1ElAwEcZdvux2qsG02iwwE5DalqUM4V2mVtQz6lqWUqX%UqXY2mwYNlKijsYUV1zfimweeFP8UbCf:qm8OxFBMX0ooAFkDsKSwiEgjInQX4VkQ9gspOVxV8QRFoCNEARMPmrO6GZU6OROCOqhNc%hQE::tSxHgADAELZaGEfiGIIWw8YYl9%ORAyhdPvLROTPSBLFKKaqq%V1pnPozLS8qolhLaHzN5DPyrbbaHdvvVDAIyLxvi31JUWeqygIFkxWGrleBraVstOCVIEiZFBEaAUjPIrQxWXDKJXORPLEx1dHDnfCU8UFFtreplyLJOWiCotpxJLsbCyKM5RtbMtbaz4%U5HKw54VO3HYK5FPOhUcHZHLbVPlTJJRXkRrp2p:WdkgBciyYyLehlYV%HKiz7AamQuCxpUUroaIiZVDAigib:%1LEdQMMTUUuRjBhwaKZZAmEmPitYzBTVSAjoDFWNVIM%1XjVWCgIKhJ4NFQEs84iJQCAgqdEREqWWdDREqWUPcwsVj3ZWp%VqfPK12ysWfYpEe5srVVTEFNRTMuOTYuMVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf:7UsRtg8wkgwAMJGlAAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV::tSxJqDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU"},{ name : "R_smallStone_png", data : "s307:iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAB3RJTUUH3QgYECAXzdiT9QAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAAQUlEQVR4nGOIY8wlCTFQqsEBFeDT4IADJCYmkqAhEQyGsIZEGCBKA1bV6PGAqZqABiBKxACEkwbJGpC10SDxEUQAubfUTRV2TsEAAAAASUVORK5CYII"},{ name : "R_victory_png", data : "s2799:iVBORw0KGgoAAAANSUhEUgAAAfQAAAA1CAMAAACAy%kdAAAAB3RJTUUH3QgZFjU2CjV%aAAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAADAFBMVEUIBgTAhkRYRjTwylT:::90FAg4JhjYpkx8ZExgMiDsyoCMRijMpnSwZCz04ISkhmCIMhggFgzQlkBsVkBANiTktlyMdlSQVjTYtny4dDS8hmDElmioZkislGyodlBwRCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaEgqEAAAAAWJLR0T:pQfyxQAABIdJREFUeJzt2tGyoyAMBuDO4PgA3nDL%7:k2W0VmuRPgCrW09P8s7NbleDKJ9Xa3qZKbiXpo1MO42d:bn8im%sr6AfG7ONzHdTATG100trRL4MaGUd:LZdBjUwbnbZ29KucRmZy9NdyFdTItNFZc0e:yGlkJkd:MRdBjUwbnben6Od9nj435WAcfSd6WBPJoM7bujlvpCMenmELaxatnVX:3AIN1VJHXzOdgV7Mk5TkZCkC%qzSmj1k1ZkukEZz0lIOxtG7zE10ZPm:JsqhF15gLmcuqsN5wgq6zFM5mO9En46jLxKdjH9D0proeC5UOlGmuihxdJ42uqyw0OFyCugd5kFvSDqxapS9muapHIyj70SPYoizaBudFeh3cP2228LcYZ7KwXwl%tREh5IWOluknkUv5masoFx%OXPkZU30RV5THF1mBPqsjT27NlOh54TOr8R6nKdsDZ4PW2W%ysg3HkcXmU5Dp1voG30EADHRFTOKrnS5Veb:Bq:n55mj33rQsQbQmTObfYs%Q3nEBnhD4OiVLjXzRM8nR39kODobcjIr5bOTZxa2QW0XoB860ZWHcPxagRM9lYP5QvSpia4U1dAXYsI8A9ugiKIvNJlZl%UGT3nwwz8I4D5TORhHP4g%izsr%yFNE91sEiBkHkdYFR1dRgJ3mSvoS0bnZDjRtYeiL6HnO:QS9S2Br1D2mcrBOPpB9FjwgcCe6DPHa6DDPK:15ehaBqPLZ:Bd6K:dx9XIZV%OrgWEu8wV9KhLdKHzLdqDlYj9GN2Jk247hxydZhj6rErYj1FIxOSE7274zVnuUkfHtWX:jr4FibvMG%jkKSsxgDMiRhUKOVll7hL2RZr2TPRUDsbR96LzH0AJLt6gbGSnS5mNUbSb%XJewJ0l5fca6zni6DRNdKOuhi5H3PxSdcYTQ29Im5cuxblAS5XHb45eAuYD0JWfya0Lxk%cetHhFLF3SG8bFvOrtnIwjt6HTg9fUJFh1T9:70PHLpcAlUldod7GfS06mkt0q7IPXdyWi%89TXTZ7p4Fu9Te3x29maHoS4ABrs9h:rsH5iGuBFH2EFmryg6TbZ7Ug3F009xGZ8Nqzv1HrPs4ODtwg2gltoqv4Q3zpB7Mn0dXzA%gd0Y1rjTsuxPfE:VgHN0u3Y:%e6IezF9H18wd3dHN7BqnP5X3OQ1NE71Se:WQX5%3MQ2Nau7ovXmb09A00WvFVw95O%Hk:t:FNDS6%e9G::8Jrr%tudBY25l3OQ1NE71afWS4dif8NKECvrIrHP33oz8ZH:rrrH:8E%7bHi:ui48V6xlCVmHV96Eb5p%AHvBPIBsIOq6i2xwd0OvlR4Zrbyroj9UB0HEVeQtw9E9AN%YsUlc20reAY3kP09BY5gW9UX90yPalXJF:cDLn63SgEzyvCrwqfOdMP4p%O:bY%z5q%%pw2frC7oQvBd4Ac2JM84ze7OHQ4N09uk1oQ:n6Pml76gblfJgzcy36yjECvbduUM6HOTPH0Y:keUHcLo7lIrm9gL:XF1ulWK92wvbiucc2n:4BQR1Kh1SWbZoAAAAASUVORK5CYII"},{ name : "R_sfx_warning_wav", data : "s10866:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAmAAAf1QAGBg0NDRQUGhoaISEhKCgvLy81NTU8PENDQ0pKUFBQV1dXXl5lZWVra2tycnl5eYCAhoaGjY2NlJSampqhoaGoqK%vr7W1tby8w8PDysrQ0NDX19fe3uXl5evr6:Ly%fn5::8AAAA6TEFNRTMuOTZyAaUAAAAALAgAABRAJAS8QgAAQAAAH9V1UHmVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAAmIS1YUwYAJjpqvdzlAAwaCIYONnZmJYjgcEQ869:pQDAwMDAwMDA3EIiIAAAAIcPDw8PAAAAAFcw8PDwAzgABh4eHh4AAAAABh4eHjwAAAADf::u:::::3f:74HA4HA4HA4HA4GAAAAOSCEw09ZNKJNTGHxyYoNO7WFgeEhosH6v6vgZVWDYy1UMaiIgFPt9wMWDDCANkkh6uJ%DA4guFk42f:JsiIpYc4ojI::jVLQsovmY7DL::LiRVSRL%ABFIpUSaiabhrXpj:%1LEBYBLzId7vMOAOWgmLzR1Cp5iMVktRTRKEhv8zhhmnFuxd84Yd54YLaepBs4RT8eG59RqUM:f9M%I:g:474jXkjOu8JHpkbv8UFl1QBAjHv217BV92vd%Nvv9mef%U6l1Q3VXP6GKEjLHI0DN1DgyLpQJWoIQ0%CgCTFlBL4%AQ2YBeSK5gDZ7497A3rRRKTs:Izevp6HXBt1buM2nsO7TkbOQ:8ghG3V0kTQGvfoHCVTEOzYpmjCEvOISAHB4nUAQAA0mtxOXAjv:ADscf:7UsQHAAw5e2enqE3pcSZttPOJvX9kkhe9WXwEGe4bObUVvGfiwpphwaDZMg8SS6ZEOLlH5UteqdD8gj28vn8FshXU84lXUw6fmBP1Gvjv0plyIJqqvXXSzozp1dlavqKBsJhBDO::BAHgoUKktsu42v%uDVcb0jH3uJKkADeoOGfHfHOYNiaYEjF0bqL3tBBtCb6jF9vDEpB2wxGWGfhXS1ugttRvDE:oYjLLpnfKy2R1wwB93Y0fLbnszXeq00I0dfEAAGAQlbrbku4RuMxN::tSxAYAC807baasSel3sGsplQooJw9Z0eKiFBN7oBPWuswv8qLPmRrngqD2v8:Uj2hhHV%Y:t6vqV:JzLqUjrMd6qd6Gclqov6qSylI7tRksYn0WoRlf:jt%6ZnM0xiv:sxDwfHvUAgBQIAKVhXV:aq8hcOLU:aACA4b1KzADi:NV0:bbLEYnuoZCLTQCos1AkP1fi4vygs%Z4L0%:ivL4bwb9X6k8L1C:9PRPXscm6LoCEu6GHqiJrX75kL6bOO4eGl3rVACAYGqYUk34MmpL:%1LEBYALOI1lqLzjQYcy6:WDiihilP3nwP74q1BtMnx0NpYLBOzxUBZtQuX0JCQ3fofzifr7jRqMGJIPqPVnITfRK4VPlgs7EQWOEAJCsrUwuBhYMWTqdpFdTkbhpYE0FxpoACgASAgtubFdP3lAItSznvBE3uGeLhLhz3cj7zC9Z4RNMNA3sF744NW5nlXrUW%d1FF6PyK24R%EXkfoN6ecvOjbA2:yW2VurchuS6QYo9kIbqZ2vfkKtJujNcxH1OFwuNUABTBxKotkm2:Fbv:7UsQFgAvZP3HmoKnhayjsNYOKWHB6lxlJA9V0SB4a%BqDRacFv9gMEZNQNZ7oYF3vfyC:hhG28Rvp95LDa5nnoLrcgfZaiZONFCEqGMquJUb9Fu0zMyCDto:RvHPeQwpRtqP0bZV8WAAAQFQLSbmpWz:50edfubxWDhOeFp4UmL2sNuzF6uGxNqyBt7KC0nxSX6lu4maWGA35m4V:fytyk6k8r9SN1b2rVqtMT:VNtu5Vyorl1mlBHaLJ9ni2mo3AoXVAFgSVN52%u23DnsWb::tSxAaACpTvleUUdzFSHmwlJ5xsGJ5hIK5QKVug84eEjEFQuG4QDeNAjWiROFARuEidW6kb:t4ifm9URyjiCTqneHL4Y20VBzqMRHcIzcd2h0IOfWj9SGaDIyhoAGBJCr4MzyAJ8eu%fpFyWetQP93SNxjoMMmDssqsgJnaCOqctuoV9yHm%5ZOnjxnV65yez6FT20d%Rs6lDg4sj7MXUVPnxVlLxwnTZZt0bKbhdKkKiBge3c5W23KHeYa%hcgVGx4CNonEl1niPTEK8fEZ3r:%1LED4AKXPODo4RecTma8jx1is4NS66G0sECdCzdOss:XyS6%vYMk3mLsinjvPBb1MtQUCbEoZYUFwPexmlfKBNxhBwPBBouYFAI4m7be623h3j4rP0DyR5lfUHHlOgVEq6SGJ:vcNaxzyquHFR:M3t4cW:N9uh:Vuof0FvJPhyPOSwf9GYij93gPbUlot3qAlZxpUCkKgBAMSIlCUSmHPwoPGP7FwLeKKBB565byYs9zQ0ZphgpM4sEbocg5QocU%W9Pl:Xoi2yrpSb6ovKUf:7UsQcgApY93OlJUNxQJJqgUwseJr%d2l5AizjFS7AiLNSfffAAEqxTfvUvYukGPNoBA9163t3BkKPUD3I:BRY47tNW3ZWHkO9RJbe0gxmO3hgewGk9FVIlX1vrjJBrW0rMzX6OTXOmGZhiizRAE3JIi7UoadzQuqHy1gr9FUAICFJzTLYc9iU3n6pgMyTojHCiUB83HTOOhxPmkm1HSz6O3NGi5o4rkk4mM9QVeWF3qHQaAcOhmB3qJsJFKEdOgmcJBhwdYygionRYjWqd2tW::tSxCkACnx:c4Uk43FCknK8cQ7WLRhgbAsozPr7tbuMeKhIfQJQEERyKWHGwWk%pBuBIwx6ifKFHbCnekr81uGKJQwfD6myJxgLj3gvGPlUl1bXMCTh430snTqR0UV4dIqR3%qn1qUpG5bydEwYSZHLnLBnkSbmEqaYToyyl:Ny0Lqn9GB36OARFsRR8BKo2E8NmfKcfpHC6NkEVb5teuNM0fK4ckA3MBrOoHslHyy6HxJ0SWnbu9QATHAdjitlvFb6HJbo%EqDQnFRFXyIT%X:%1LENIAKHJlSDWVjwUOS7fTWHExesqDJ9RSQZ5xAb%3oe:U99ii546QGOIyoLpEwmLvM1qUWcMRKlzhYG2CUg:i6wHau9PzyPcr6UaEACAAAW8Gc8eCwEgr2d3peabtfVcMMdKP7193Gv6x:qYBAnyoRjGjiYunO7jdHqew8bkYnDvmzs%dsOxZqxz9p9Y2IVxN8WNva63Xpw79tf2vYND8u3tt1u4d6EG%aPXlQkH%Jxo:V%NQdgiQ3ExjUlmU1JPoDjkHZcIOvrA7RAPcEUP:7UsRBgAoog1sp4OPBTovydHMdDiiVqSLvSwWcJRO9zRiegG0gQqOD5IVofKpFBjzlNunY2xIGON5aFQDbKLl6LiAyvu9p2WAY7Sp:W8kqYbtzjayk5QrhsW:xkrLWZ9krP3vP1:po%4%:eBhfVwYJhGsQicfUppdYiNpfhOlxd9DNyGt%%oAgBiOKrLYc6HijxGCmG:EsUD:9bkgZRz:NOdgo:YIGfiAd8oblyTgE2DLaaUtNBxsJMHiqTQcF1rmWtQaCaToprWkkE1mxHG7c::tSxE0ACgiHVAphg8FLDC5wphXW2I1gEWorsoqtAABYKl9deHeVLdAsGC%ppZ9BV55VN3E6rckD8o84eHx7W:IjFmbWZrARXpNaQ2bbAzoI0ZtgRERiLbJmZkEBaZF0f9oxDwqgHTJoDDlCLbV::rAcpt:dJJSG90blvGsFTaW:cqKPhHUJmsalOq2xl2SHfCIpG3DCKGx6aokEMen2XxyQzrmSgnO6g%xRZW7ej%DxDozL%o7EYTljDuLNp9D:FwY2qwQdmPnY%ZHRh1p7Vxn:%1LEWYAKUS95g4R7MUIXKoWVimDgsl7qerWXwprDuPMSfbGBQSSy7j4TuLeoVEq562U:PucM9XnET2BoIzATKnXRO42h6zVIbrYm9ASy0yZ9H9YMbUtQ9rldW5LkGSsMvymq5Tt37cahsQpyIeW1qGoba0JFYmL5QRHL3cqRXVmacqSYJNZbLni1HG7phhUHTiQBHEFJe5aZsu4mtz9FAwgsspxy4GrUNY7jc0oiwNqzIbCly%amutDkwjM9wyST2D5k8:yOm9Fa%3zCHV8:Kf:7UsRmA8ncf1QKYYPBLxIqgUwsaHj1u2up3vDN6pbl:vkUJt8WKPwkZlA6LsOrucdWadF1s3MXmGLelTEHXkloLyRTW2W2W4UdRoJo7IALe471Hr6kPQZFnlRHGo%omDDv8zYwR:qv:QD7afIp82LLi5bV8o:bmnVpyan8MQ2YEoLhBjhdJwkJt4bFuSWKeZNsjGrSxo4UQfUDMiWqmsEvYRaSsYE6LkHw8FeEv:b%Fh3LSHcQzJW9pd3N0UY5Dzt46Xc1CyEHTwVOn8y35nwZ::tSxHaAC4zxaUaYdGFknjE0oo7OPbKZawk22fAuWGLeCR:noGPm:7:bvLM3w%zX9ZnNZW:7:gBECokqsEbMwryyoQCYkbs6QT8xA3Xqt:wrlnOGPwIuvo%5rGg53YBLz6I6yhX1M2xd1QtE1d2MEIFMBQMEjhMRIHoD5wLU60FHrsXjdFz5CVtod7iuUQEABwCUEwtpyUC1WYAsHpCg2bTsAjFbU6csMpyeMWel:A2u9pPOlbzBDEB60QAsjUeBAJKULqWOH6UtAQ8cisPpdAD:%1LEeYALLHFxJSUC%Vma7WTUiL7Q2frQcCoS66smyZmklKXL%LLjTzpgncAQEyXfcGXJ6EvxlvJPPiAJ4hW5BXXvHkErlni4FO1g4FBMCrkmgq6o8CgbHjkGRcggWAADWEXtCQw8QKsDJQ294rAzh7L5k2%2iOrz11hRt8WnJCv5lUHJNvwZY1A7VYnsftYFAGcuD7fNaCg:Q82XFzZUuaiocMgcPPmxUwKmAcPFwmIa1KW8KoPVkySlpa4AVJCehLNFqlrPCworbpcNUqUWtv:7UsR:gAtMWWfmsMchWIdsXQegKFWKvYtpgAj0SXHbLwaqgeCWAxuQCASekISat2nwHgP:wcnSu7Oif%6wxegpzOzWvYxCkUXS115xpp2dcHUPvfd:::3333259fX2926NqTea0s71n9i4:n9nMCAA%VyNbM6houtKHlPKplw85kuRPqPDScBAKnqgbcsEi56w7kME9hS5ZaQdevwswOIgyoaNBoc8YXIrEIaUEmHTaG3qalNXvrjav:i36:cAwwYC1u6sOeNhycjU8eK0j9wS::tSxIUACnBDYmgxBoFRhC0o06RN9OMaJBmuopiL%hT66vZXVX89mLWE2hEyQxcYHQQBRoVe140JE7pVNBGRNmSrWtr2OGujiqXo1my7WTF6qPVVCINpaVXDViNmZqBxiBo9%an1c:RZyx6gEI03F1CE2wnfKSg8vBcsTLvQ8SDTniOy:Ih8SKzWJK4cExNLupoqQMH8VXgNMuloiDZAQITQKtNADf5XNhThBK47zxAoefup2jSHLrARr5T5KRJUAlBiwivkKlHoKz9qHELritX:%1LEjwAJ5HFQrTEMwUQUrjCyje5MG4cU9YfDpzFXhkDANbLiwQRXdYLvUWCRgMpD6dyXIF0c9q%239IBBillzVVYW4FS0eIGLwSiCiMX6E7FeEJCcE75lB5qlHCCHLFGlnFsKvBp6x4ScI4s6oCKCwiE5UQSZoPnoqfxUkxaqHAQiQ9QQSbklpS0dj2qlWzHQBZXGzlAV0Nsp4YHhokShoxvUMy8oNhw:Zq7RJ%TYah4UypVXv2ifD%J5GfW8Q9%E:PiCJBgciRYLrOLIFhAJf:7UsScgAoMdWsmpEPxTgxqyZWdkCCwzlZE4k43iP::lKP:o%2z7wAAjgbm23BmzINMxLSWUiIiDHjYMY6%KeJYsqGRflTMr1K9SahG10V5ias%Z5j5leox4UAagvKhM%CjhIPaAZYCK2gHgYWyojpYj2JYgWNBoqwyyy2fbsGDqgm3JIEbMBWx9ISMpElbBp4TUqoEaoZmAzb9OgvNKAlMBjgYUeiMeG5BQNvCpwFHZYMAU%EnGD%DYYtXt7G2nwkAzZfoQkimlC2sC30VADCh::tSxKiACrRVb4Wk4zFFjOoFrDwgJROW4Lb5PQhtM0KW72AVvgur1f3FnpP9EfK5JoHfCdep3ofvmDvu2mpXo7d%z0V:yvUhKGK%67HyiyZeo%mj5xiynYtShU%hR3:iiZYqK2o3iESWfp0l5wAxC7ZG43JKOaE%hepEI3EljGITNgkvOEESY%EJp1CNQU2V%LfTUzbH1PofUndsvQ%pEP:UBbjKcYdFjJ8c6Yx0H4hn4d1%I:I:GhNE2jf:uhLPifpfF:YGMndtZgAhSo20m0n:%1LEswILDLlhSJxLQTgLrSjVlOK4HP7E383Zqg0OfqiRqPIeIC%UDmoBpfM2gjUbtyi%3K%GPx9QjUK:bV9WfM:6sTN1I9FfNoGDnxt4v1vC:yd5%Jng7yp::fkj5Qf0eKNqP6UeECGVWm1G03AZjoY0FTnKJg7icMPED48T5NsoG1y6C2wx%:CC8y8M1Ay5QjUO2UXod6lPmA3lJ:to7UZ8qEmn0A3ytjH4mZ:4Z98Mg:FH4Xff%pFk4szKZ7iR:4TVBDHA2UjTk1wW38gt%::7UsS9gAtg:2VHrEmpc6BvdKEO580fpuZ63Fz3hQRToqCd7hQ:FIkZwAxfKPjoIPQIiGpnDN36vhvV8r5QjZPF6gmoBF:QxO2ogW921TUSL0X6jPm%UzEZ6vwy4J3IX::%RUfMH4wMbRVflBwYPAGc3pJptwjZmFs1kUbxMDkXGyoWz4Emx4N6hK%JxfoLuEQzoD99SfBv24RsM:M2UQ2Ai8MbKEahhbzC:6K%Z9ByUM%i5RIi1Tufy:9%Y:RDwgCG%F2:%2%hTYB2dNeKgRAx::tSxL%ACx0Hc6ScULlyIW60c4j:QlY642m4DMdEeiqMjKRXygkNhctoAkLcClftG4hOSBJnJgM%FDNp1Am1bQO%FfhT5m4ZtSNQxMoQlQr:76sd2CiCVK%VEoYQ2VdtUzbPfQEOf5GRCQ6L::X7OL%b%dxs0AAIGCAACpdSvn8vg4j3czdBH6OzV0YGqO5uXB9P5iaVKH89mQy3zpQ6L6inyb79RHX05U6cx%YnX25xGFEf1Y%gpqOIfRuzUOIZaeTMZ1yZjudzGaoU9zOIxBz:%1LEwoAMeQ9lp5xNqYwiLTzTiiXP:3dY4MGZLW4qAAFFDIARSkgMrmADCRl6NwdiMvg2RtucsFST:wFfCIE4Cg:CL9%UX1FX1FPFOz8r5SczajGzN2PoL8oo1DC7:o2odRphh6GU7oVCYi:snCr4g:d:RGdEY24lHRYH:::K7qv6EAAEEAgCCkJeV8:KZFZura5dFhxuGcmEpeOrbk4Ghvxd1ChfKgVjeCt8hfjBs4U8iLc8ac5tB%ojqfh%GEe%oZtDtqEJ:MMkokW8w7bO2v:7UsS9AAxVF3WjrFK5kixrNYaJ6aZRIsmV%Q1OB:UHih:vyCfxfWjf::8FHXVVACCFLJRjjtoI7:Isp50h4Mlp1%QVaxaEee:KLygv1AiT1CBunQ3jr2QeIaikh1fKd9BuGPqUXoLbUjZg71CkajiG:DAfYz4UI1StqXwp8qQiE:PxI4s5Y2I4lEEKu1YxySAIAQkVLCu7%ZLCFEd76EqpQxjuPCqz8Vf2sJh9B3nBEfi8Q2wlDnUk0EptRVGjUI%ozP5upmwx3zH6H1Cv3bhi::tSxLcADH0bX6k8oemdJGs5hQn1aiScr:qFCEqGO%pGoZtWPhQmKxxqCzRoQLG5aVAkq%C7:mjSAgBwAJOXUGW1BIAMCiUD4fkIZsOMOw9Q5w0NQhJ6g9J6g9L6C5uvQX4UfUQ2oRu3UR0FvoLfQXyn4Ne4hqBU4Zv5Qrvhm5ReZfdcMB1idYaZPqfKkLD7DizMkH6N6jJgAAAABGRgxxoBCUByuWDYVgHIGrBoBBRJrI0No8b8ZAf0GQH1xJEJ5bjE7VBD9G6jTp6N1flH6jf:%1LErwAMPSNjp5xRYY8lKp2VCigKnQ:k5SNmV9U1CmdYYrpYblQmh6QEINQ%PHFSER1nJCWJwq9BqytFAgQAEkJKMr4:%DpA%HTVp5KQidw%vAhN5OZ7jieOGo26gFG6gKdpoAJfj75UHJfUCHQbFueQ6eZuUbhX4ZdQoA3H5g76jPmHf%UzaGbR26vsx%FYsNpFGRJ1AzItptNQUAIbyuN:bD9EXOfvxYhAFw6bG6o8DRsW59xA%3rHq%dCSlPWGE0aoWR:rP8yGW%Th7vzXv:7UsSqAAvdK1tJnFDBgyZqaUUKKLKLti%g7amJyvzH8R1I3M%YflFE:wvqTqRtX954UXPgDDdcyalsvKk1goUEJzmVADYgTrMzWK3J4yiXLkvjdaZDGbjafbKiSygVDfE4%%UAu:M8c8TF%UfoL9:L4Pyj6Bj8y%XqZsoCfgyfpChGVijbMFPeZuV6qFf6Pswzp2uuaN577yvojqQ2eABgICVQBtzYGQ0hIQvoREpzoXIaoog1CnqF87ZHG83BFG6vRDIs%R9GuOnofoP5n5Bf::tSxKgADBkxU0ycUUGHJuoJpoooV%g:UR6P0P0EN38p%h%FI3%U%hT%f26o2USf9v6p8T9M7mP7n%IzwUelRgABIFAKZIlOO4Bg5MBMmiVASttgjFIT:stNFdLBKHpUFW:XOmP:Q:vz%C8L9:DN1fr6C:M:R9zCeoz8h9AwttRv%j%:o2hm7n6C7zG2KOkchSGIKGFgxLBEAECAegIqSalcP:GAgw9HV:axZHh24%CUf:vJz3nsdugVI6Q31DvGnq:BAbagL9fjenr4UI3BNw3:%1LEpIALXTlthpxTOXQna7U1ilHhgN9DNw3oI6Dt:ofqT1P1I3RklEi3qD6yWBPFX20ulT5YBwAEAGAKQGEoqQGbUWQ6xMu6QeRInT5cPhwb1g4CAiyBbooldBcW4qP3PGjbgYW6C:28N6H8rdRHnfhm8zcrc3od9Qp:%j8zcML3dyMiW5QwusV0RXvKkZLCTlAwAKBwFi7HFLwe3:wJqwRv0UlHOrc1pL2YfDTi4QjaiJfiSFJ0EM0y5JxkChtSUb9Bv0Am9:Bn5hDahG5m6v:7UsSmgAsZQWXmpEuhbKhrtYOKUCPX0P1APCjt:QovmOfUp31Ee7dR3fROYQ3J6P1ROzvsRmoHIAAwMAECw25qDPdQGkRcSyOBwDVBNEGzKU3j%MDuIviAX80Al%BsxsavuERDyX36i3zT%oJucR0K:V%gd%U:j9AIRwod:8pvbRI76EPrGZqjC60VB7yzliR0V3SIAgHCDTyTcvBE6wnpa%YCQPJGKgrjRTOiQPOekN78C5n6I%F9eYX3qB34VvRuGJ6fEeFfofwzeP7Pyk9R::tSxKqAC31JYeicT6GEM%y09Qn1Hhif5Sn5gnKx9HO%9OYX%Q%sENrBvUw%kz8meBK9AEA4RqTJaboMOcC:RBCvicTSQy9UF0BjNgC77ioY6gM8LFfG4z0L:J9Rq:t0HX9fOIdRx%r9HbmkPQ:nGfIeVH9QjfDcsfo3VgvkI7aPuaoSUk5YgAAoA4IUNIuO7ja:%SZo19:Y80FNaGLIWnB42cMhe:CiGnQRTcqN:V:T0F%ZuoB9:O3QJ5U8K:Q7dH6GEcwM91AR:%gvd0FulQT:%1LEqgALdU9ZqZxTQWgqLPTVis1%Y69n6hE3RC%Wwq1DX2VqYcE7u2ttttwxj4Mh:v0w%AiDsO5icLtUQ4KDGx82YGAUJOrnh6NDOKj%d8aeQN5C75Q1:fyV%hr8qZ5Ie%ePT%hO%ov9x8fqQkBn%pI:d:V:M9U6EQUqxJ9maqaAAAABCT8ElRPoS2G4eZ5REEFwX8IW1aQgEaBHHZKCAG%CqgVoWpEFQ5AU4TkblGWyMl8xQE7GQopZFkmIo7Cti2PBWIPPHCqQJSZw3HNNjP:7UsStAAqVA2OoMOjhYyrtPPUJtAyJolElHywolCoo%cPGROm6RseVOMZUVO7GdKgdZakZ9ZtrZboqPWsynTd1KVdbaq7Up697qovfU7upJVR5xFjkWPfdMOC6BC00UgAAAAaDCpbQsFg00qhgFgSJVkTVxj5bMzN6s3:VXqlszex1QEV::kFcG9BTcXZBTAU8FF4iuBRoUNig2IL:::Ao6F4KC%K8KOhDcQVsFNhDOBXgtUxBTUUzLjk2LjFVVVVVVVVVVVVVVVVVVVVVVVVV::tSxLQAC4VXh7S1ADJqqSoLMxAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX:%1LEloPKbGdJvJGACAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ"},{ name : "R_sfx_hit2_wav", data : "s2227:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAHAAAGhgAkJCQkJCQkJCQkJCQkJElJSUlJSUlJSUlJSUlJbW1tbW1tbW1tbW1tbW2SkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2ttvb29vb29vb29vb29vb::::::::::::::::::8AAAA6TEFNRTMuOTZyAaUAAAAALCMAABRAJAfEQgAAQAAABoborLyTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAApUU0a0xIABeKIv9zLQAgBAAeMiGAOAcR1eUu2vMz9fds7BAUIM%%oT2kCBAgYz%c1wfP1g%D4OAhicEAQORIGCgIBisHw%IwfD%CAIO:8uD:OFwffKAgcgh::93KAhwfD%AwGAwGAwGAwGAwFAABDeYJGv1pNcSd5lr0ZhIjHv%BTiMKWuTwqQb:uw6CNmgv:4X8Lwaj3IH:k8rHoSIxRbf:ifj3Yfh0HmX::9IfSXJdM3PoF:::9NSZRY3dA8eQAAEiAQW5bJLnL:%1LEBQALdF13uJGAAYMSsPcGYAPdttdydHgmJhxBBLlfFKHZTHlIMx7FcEKOjFJGYIJbCpNhR4P0E1nQfxyg1EZ7pllgpat5JqgyKvJNSL0EXBQU1Mu208QniyCSNoqSNhwXLGhoIJKTSclkt2212u2:29sFmSGeqk600fW0j8iahyAB1rvv86CK4jMbzhV%Eox7Ti51:9:MmYV:jzV93%Ul%FqrtBIL6FRk3lKfd66Wz7kOfB58:mubIy2879:3::gTyKw:igAgGkk6nZNbrv:7UsQEgAulA4G4MwAZXyZvdwwwA9v9:%AKJBOZgXdjMAbRU9zkaCCpp:tceERmd5nL7Oy:VdvuZj9A:bat7:naddfvrVG:9sl8Oc02TFaYlDvv3X1m:aYWy8pniU5yEeoRNf8:BJissoAQDRSTasdstuu233ABsHKvRItvngyjfBuGMdXEES5njizICjUWnopk7VFiZU3Qv2jN4gjT9NxBT%Fs9gckeISJ:xj1nG0d:7AgAURIiRP::nhgsDUADEUAAApFJNuSa3a7bbbACB6f::tSxAgADFjvdbhkABl%pW73DIADNUk6Gaz6eIrJmLPhbzjkMPjhmD8siRyLdV9AtsTEB%ZNuLjo08PSh4rueWLj%J7vuxmotZtowoORJqpqluKG0pt1DZirHh%3n%v4Uvz:B8EjDmQAQEVEm3ZNLvvt:x%ADovWTFSr74JPEomoevUtJ9JOwKbFUtEQWWsbTRFvo:P3LX8A0DgSjMhrvna7VsiiTlVp3lbuFQqovkkRSDX3PHC7xDqtxX:::5ltVssMXmc9QQo4QSIswGQsUCj:%1LEBIAK2HtIGZYAAZGa6isekAOhYgQiFoiIlkI6CxJKgvvTt:RI9AdC0d4WR5A5GOlVlCK6TieevrLUv0O0e%KVszk3v9cmWizDIYoywCEREjqtSlQjIizqfqWxq7v:b6AAAAIOmlE423GAABkgfQtSy5rRjHgoGGK8X1t7F8QcRxjVh0qJ8jGG2bMow2cQxlCc5rtIERiOLR9:axGBC:SQS::%yjv%Bg6TlXsLXcYxrxrLq9ydzg%CFiL1EOXqAxE9SCOD1RAaSm0ZrRwxG::7UsQEg0uAeRw9l4ABSg3VBYeZmKoZoxjmGq0brhkBr1pXZh2gXMhKLZCGmSrVa9YVaoWXcFhQ05TRJyTknKHK6NvNYL1hfPrQn0a1rV1iE%fHoK5XLA0DPBoFQVctxUFQVBUO%DWWYZ3ASYzQRvABgcsmQJGLegQYhQVUiAReNJAUZWpZyesSlRSJPg70QkF21NYgWIFghh8O0nFlFO00acBmFCwsLCRn0hIWFWRX::::::::9bKxUWVMQU1FMy45Ni4xVVVVVVVVVVVVVVVV::tSxAsDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU"},{ name : "R_chain_png", data : "s938:iVBORw0KGgoAAAANSUhEUgAAACAAAAB4CAIAAAAcxWc5AAAAB3RJTUUH3QgZCSQbC0nlQAAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAACGklEQVR4nO2XvU7DQAzHA0t5AxgQLIiPpVRiYWMKMHSDrcJLZ8a%D6LqyMDKxgMwwFQhFhADvACiGy4Wx8nnXpzSNCSyZVUXN%dfzs4:lySwcJ7p7Xa71%u5sWaK8%S:ANC63S4NZg9Any67FpCmKQL8QTUB2OeiAMRAAGbHwewB7jbFQbEAqIPQCikRmNB0ABOaBgBVFRqYDnSAOemgkB6YDjTudFBIiUwHSobpoGTA:F68rAeZPbBNv0yAvfxqAFAHodlXZpkAE5oGAFUVGpgOdAB7u9YAoA46sK:MCMB0oAFAVXVgXzj:BWAvXhoA1EFo9oVTJsCEpgFAVYUGpgMdoFgd7Lea6K2dLXI9YDGJ2uPuLTmLP2zfkMenj40Br:sX7KpPj1Pf:XWgY4TNyi4Rnu1yhdl9J0AkuwwIs7O8PoAYtI4cAE121vZJnedNxn6%vr1nt04ysefyXbS6soy:SMqELTUa6JETBIDLHk%ttVBNmtKLzRC7:buCj6MhqwwekvuL8yPhCWedzsnlnlAijOJ:4frCIIuww:5gcAV3AgCj%F8ICIMs4h8%Pb%g8xTiQ22KBkySQsbD7u82A8DnaBT7O1wULTZvcbSPCrTm8DD5uQUjV03OZoUml8ip3yVi7s7cWF9Dj1RIBmzeH9AN7k%mXCySfEth0uWPTSyc20PY5kV7UVj3fDua6JQOE%Xd9LWAqb1wwBd6gGzeTI5zOQAAAABJRU5ErkJggg"},{ name : "R_hourGlass_png", data : "s628:iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgYEx4bh%16%gAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAABMklEQVR4nGOIY8ylKWIYtWDUglELsFnw9MwUshGmaUwM2MCVgzPJQFiNwm6Bjn06EMEZaGxcUliNwhkHcF%:ebURmY3GxRM4%IIIDtjlZCEkBMEF4Vy4IC6A04JK05v4dRKpmIAPfj56TKECfBYQ6Qn8ygj4gAHmxpeHFkFIOGIgwvkgQDArQhLJ1TXBaAh:4iE2FcFDQEDBEVkQwiUmDAlbgMsgImOIKAvaT6sDSXG7OAgXwoAIUsECiEFoGQrCJcoOYmIYUkJgImLimbAPkN0OSZ1YpXABfBZghgAw9NHswKqMWAuA4MOD:cgmAtnwqIZkN6AC:CbgtADZXci5F5mNVTGxFkAAJEMBSQiCC8K5aBkQC8BT1ezs1cXKxiNFWp3MgFQ5M6BW1FilSPYBVVoVAEdXtvqwrOPoAAAAAElFTkSuQmCC"},{ name : "R_smoke_png", data : "s439:iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgZDi8vzEbeuwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAApElEQVR4nO2UQQ7AIAgE8aP%wP9fm:RgCIu6oN40pGkRd9xiK7W0qyEP8ACmWvx6%UcGoFcKDJ2MOTCirjrCwoCl6FI9CcApFsC:kDwAG7CJ8QGMFj5SPYjuWqu7jAOAuQkvlZLu9%wx5UVN:gyAVGcB:NG66ID60LBdrtAuAK9XHExM8OrDHtQy:CP1jJ5NAtK7pgBzN6Q6CzC2YktC1Yl4gGV82Vc15x0JIsYAAAAASUVORK5CYII"},{ name : "R_bgatrans_png", data : "s351:iVBORw0KGgoAAAANSUhEUgAAAFAAAAA%CAIAAAAzjQvQAAAAB3RJTUUH3QgZCCASFzvy1wAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAAYklEQVR4nO3PQQ0AIBDAMDCKA:x:kUGyazIB6zr7jmp9PwAGBgYGBgYeE3A94HrA9YDrAdcDrgdcD7gecD3gesD1gOsB1wOuB1wPuB5wPeB6wPWA6wHXA64HXA%4HnA94HoPp2FxYvpJ7d0AAAAASUVORK5CYII"},{ name : "R_fireBall_png", data : "s1100:iVBORw0KGgoAAAANSUhEUgAAACAAAACACAIAAADlBPxNAAAAB3RJTUUH3QgYFSQlZ6jFmgAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAClElEQVR4nO2asU7DMBCGSwdmnoAX6KtQ8QaRWGBiYGfmIVh4iPIEiKUzAytiRELNC7Tg4OBez:b57uKIil51qtrEuS9358T%40yao%tRbWIAAxjgcAGf02Nn8Hf4Wy2C4HcsQMDQQWwB6:m5s%GhUBF4hojkGzu:6%UsyUinKMnofS2mePtyFixmFGqAMChEz3PmvW:e7gIDA9Ap0ynyTnu:7sBf75v2yX1nI6BTnzv3YB3gx2QpSp47:N1Td2tAFZnuRWEvJBEVFkRAg6FrJSCbtF3X%ghoQM57tgbwryiI2HA3Db2QecMgXGdTpLvlCQB1zQAGMIABDMAwzXhQlzEIgAbkNGD4%EVrkC6CgQyWPpDOJGBjjT5AJDTJgPPGJqUPNEWGs%utLAD6wE%tPUMDSKQe6IN%7p7SB9OJ5PNw9g5:tB%v7eXCfa9ebrut7XPiGFF%4OkT%oASIHQXYuoDDOBMQ5n6IL4OuhpcPJ46o5Pu2%SaUR91L4Ln3uRvR%Pf7Di1VXsXFFltez9kGsAABjDAHwLoZ0Q1Iygyqq0f1I8gfhxYDRAvTbDWD4aHwnrq2MiHaP36QXYeV1EfIFlA6AO4fsCKgM4bvX4AD0zrAzcHdbNSaGGjb3ByP4f6oD9Mpw9QZnAQQB:E8iaRomTG472hzvQKUbnIyX6FelFDXgoCCZXbK77QpN6b8e5F8G%u8b6OaAYwgAEMYIB6gNH1AUeDiAHx2DvKiBaPmqOkqClNKXYA::H9Iiammj6Ikxnrg3j6rtEHyveLCI8xuM77RTEAOc3pg8L6AaEP6CJn1w%Y3ZHYS1wK5TWcoNE4n5uvK2dcjcbJEnxckWxQ6EWczBDeywBF0gUAZv1p2%8x%TAA36h45a8bE1atAAAAAElFTkSuQmCC"},{ name : "R_sfx_explode_wav", data : "s9194:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAgAAAa7wAICAgQEBAYGBggICAoKCgwMDA4ODhAQEBISEhIUFBQWFhYYGBgaGhocHBweHh4gICAiIiIiJCQkJiYmKCgoKioqLCwsLi4uMDAwMjIyMjQ0NDY2Njg4ODo6Ojw8PD4%Pj:::8AAAA6TEFNRTMuOTZyAaUAAAAALkgAABRAJAXkQgAAQAAAGu96wT24AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAAp0aVwUZIABcCDwdxigAAAEIOTAYDAYDAAAAAAIEIz:%c:::BAQChAxYrBAEBQxaNG3s0aNGjRtnwffDGJ8Mf8uD4fLv4YLg%HxGD4PvEAPvEAIO:y5::wQcQ:U6oEDhQEAxQKBQKBQKBQKBQKBQGAFI%zq6hYKt6UaAmWIqfULkC85UOHgNwVZyqqhXDEhAkPuymMwtheDpUiP8%%WIUmt::Z0Qsd::kRY80woSRb:::jrIRvCxH:%oXybP:9CYgCna5Y6eLOGQe7:%1LEBYELpQN%:GGACW4y75wwjyF53ZHWfkLQyXo0vSVTtYT4IPqDjQewnbkchaZlz1FEcR%85zanCVkcq2iWekfPn0skPiitiCqD2qY1st:6sGZkbSf:u%J9tdTT2jfqi27PWelHogpWOaq4UWrGb0NHU9yFqImSqhEfV3NAl2GSIxCcicRUhDgj0EUzCs:u%7aMgHSJub8zM4nCAiI24ZrW7WlVsopbvXn9%n2GcReQ4%VO:TzHOl7MmSPRKGD1ZO0kAFz:SBqrHX1Gk0rSEP:7UsQHAAwdH3TDCHpJcyFw9DCPlKJG2SI4WgPbVGxSjq73v8myi01P1otokHE2kJswZn:W:v65E:LJHLNTLPaUp0l:OaBnim2OQpcN5IQ565v:%L:rf6CGMTDENAP2VEziC8JHK8tUI2pGS1JdJZbR8hscUhA7BOplHIqZttp6ZsFDK1NIWrZKr0OIZXMxWfkgj2p2v:MJkRBETQpU5haGhpiBcJUFrgwaE4ECjlVMKe23WBwZB84fQXVIsFmokQk4mHCiKEtiVqbujlrVLV0H::tSxAYAC81Th6MMVeF5n%:oMI:BSImkpZOknymmNHE55WyN903I7pY9IlFHnFlY04XikdUIy:4f3s:oMrm64NTPbCnmdOLP0NiKqHtSOWi5d%bUKn09rMy4xjCYasEb2EDlZ5sOQNiCMhDmk1rCNwKkxONbGdUB%jKJNveUFdyLKF1oosw4kQb5YO%SqbWh0bky:70TBN0U2MlI2IkeNd29iUw4YjGcMMJw5IYKGMPE95:9a%cw3zU2BzL88bdYsM69GN%mAIA5W9fdRxgzdNn:%1LEBYALsOV9IYR8KXyg7zQxDUC1MGxVyCs4UZxmOgiFkxh6hwIdRFPLSlkG3SxSnpGyV3siP86kCGTywjY6mZm8CGqg:FtIfXY46xk%fPrtqv30nekK8vNFqr9:0ySaTbGTBiGTOokEAAAmWOSCkDLGoMQ9Eho0eWDFBpqCwkNJSe1XzOsjQmj2jA1TJBlJqIJxVk7:S:KdPH2exczyPI4T2PTWmmmRMZVXUGOUWF56uZqsfvcfUKl3Fyw4BPFiEALY8i91EAA83FGOPNdJbP:7UsQFAAo0c3bDGGfBTRHvZDCKlGkhSrP1M2EyzdI2yRn1jMPaNt67qZCzScSbihMPKk3mgkuz8gmMjlDjuXNJjVC5EgXAJMkhhHYSRdvr3ajSFPFLWHRZKFBkbJwAIFwUAgJDIOowSARF01ylastHEmalM6CRgabJTiVpB2ONZ5mzOAnHnatKyoigAXaSaVapjVC406JYseIkxKQyrJZB3rj0rPyIolMUXjLoHYoiAIAgBABTakegaAIWuoFVchwUXocEcC7VLsVPB6nCJTmu::tSxBCACijzeaGEWsFKIe:oMI:EaGRDhgEjN30hF:%tGkluDTuJsWctwQ4TDIIlhZoGMiMksL18xual57F6ke5jDK2HuQQCBCrKbKOg5pvQU3NGilJTJXMNp5lMw1OZNPuftWI6t1PLzEZnyZy%umtBYUlO7m3xT:j3dLV3Q8oulCoIRhEiIrV8ozFtV6VHCUWxiXKIFaoMQAglio6g7Q1sYuSkOxO6LkuSbzYxY9KR12GNt2MHYIxDBfbf::9wUQ05Zn5:bOqk5CXaC2LKhID:%1LEHIAKCPt7IYR6oUOPbpxhjNhlwKIQhC7aJFc:c16SYeMJY2YcqTe9epQAAcaUdECdaAsLrRzhhqgZtUVUIF1BFenxIzaaE5EZpkchCyAo1ASSImTYvfvePNOuuBsCDJhg8ccFRSyprcix7mpQu3Z1XQuCDltWQWwHjFXBUABbyoS7UfFyKlzcjm1lLIOmxGH8uSOORtaQqkxS3bEHentrf8fu6qrOV4msuQfXn9352zAYK4XTStJf%:%H2uS%u1nNfzjaz6oE0v4K:Zb%EP:7UsQpgQpEZ3khBGApRJ%unGCPWABRFt7HDDNqdaEZgldO7xMQqLpcpz8nz2d:PZW41Zn7iRkeGZ5Gi1uI9Pe3OUuWmuGKcqJGQ6MYeQHA647sFuqlybXqUIIQDabzrXvD0kxyFUIABRuSMIIdnxRqCERdRAhrAhVK0ECa4Ia1BpC1fmSaCALmb8d1::lLfx70Uj15HVk46pikcThL5goRUX%%u9:%v7%3z:1x8TudEP57R%HoOW47sEAAAFxJJi2ggBCjI2CoqSRkhHoKMoBO::tSxDWACmxJdOGEUglOC%4oMIzAcFDlmJI2q:hngFSBQgNKmWCj3lgMgeKSNC5YKxCGRUXEpFIosadU8lS9ZX:9U3PDEIOwoBTyXvPLPFsiwYBAEux2QCTFBzxJgO2IcSQkZYeYim3tOnsqxJyRYn6ez0KmTc%1zXUz:3NVCPSzwrPD4fE465:luothYPQZBWgyxf%USDzsCAJ8k4OACXUr2lBNzB1WkRVEdC7yZx1Rc8TiUsaPLC4qJ4mDGMu7K%om6mdCCGLKTkzTSxgcLC::%1LEQAAKWPdzQYR8AUMN7ICUmHgZ:mxZKxMBWBMONDB17yKyQWWVeNMoYj:6txq4bepS7raUrtpALgS0603IOTIaRpRdA7Q6b1q5h5MbcvDw7RlKss3BHqyGb3u0bJGJpB87kVdLXPfi8ZfObXEREYq3BH607:%3P:fQffiHaXsO5i5a7N9cc66v2HcAACAFCCWACnFubRxW1dI7qMnrgFSJkDbBUiZjBAX9lG1K9F5un78fvR36w8U203rnqdJ0lPAFH7bn:d%f::::7Nvys::7UsRMAAp0JXVBhGKpTgVt6DGMlcUnu9DpcJeKZryM7v%3:tVC8jIUyyZp5VE2TugemXQvBhGgRIkzK5YhIEoqhtdi3zmhRM:6rHo1F:LZeG1n9:N3WtB0B5oPJAQxgDZFQyNLIEL12:%qqog8KtYJEFmqqbMETKwQA4k032dZAEuU0aEuTx0dLU5qn1G9jGSQgsQE7IzDWLgMTVOL::%cSHJF4ZeZ73PLr17wU8SJusEQVIONTv:P00JvAjmFQmKLW8w5YacPTeqAAJbTkkWY::tSxFYBCni5YgSAXAFFGm1cYI6Q67YcXlaiRhkgtDowp9yuca2Lrw2KKR8PzYM03Cn:::RC3Ni56e0LkvWjiTS9m4T03yoe9RP9::ph9Mw2UhVZlrzUpV0P33l9239%QbSACbHLIYN2ZBJ6wOwxjk8QpoiiopoaXdfDImdve8iOjGCJPL:579rCLQ:%ecRHXI4ywolLdckyIpniA%1wzzRaDbHuRKQZFGmQHJjjCL0sbuo1KjAABB0EwTKFUnURGcS5BVYqOJY260xmG0aI3rT:%1LEYYEKbHNq4wRsCUseragwjkCEl5pTiVoX:7v%%9Yv5zKqL17b0sPHQKw6uen:%7vO:1NZ9%v8qmqP7vnpbHFyhcUftp8rVoPvf0VgBBEhvNqOoQMnTaFCNdMh0NSRH1VvX5GQQLfWILJaWV4OxuXcufsiWy3qfJzSDhMRAEKmD8JH02uF1syuK3ABQuPWRYcDwFpCTMKjyS2MVqUjOtoAQAkoPFEVoD7ZYNjZRh4RFYfDDciRAqfDaeOICIjOIRsohSHYMMDEMf7NIm3niv:7UsRsAAqIXWshhHQpURfudDCPhFAvHrnxP:0uWT1NiKmHXyZ4rpSGJEGhuWTKrl2c:::::lyyOvtK5uvVOy2QhuEJgEcCw140QsT9gqQQ8:WsAQhNNQVD4OHhdmJAiAOCkidIFVYsAhNoyAVcJFYMOVI5GOS02Z9TP6SM1YQXDzKy3SlnAl:qknbcH0mqhlKhjGEr4O8OqRnz:T1PyUj9vFXyVfiuVEOooWsDrUNb:RvOB6P3b%2Wz%gPKL%a1QIFIwJxSHo7LB%URQvK7Zuq::tSxHWDDZlVXGSYdkGzq%uMkw05EEHTjbwRAosJAZHxoNnEALSNoAZFCqISzIKsPqaaigJ32MZzU9c7ny6ZTSZKxGNHdFmdHhinFCB2BuYYBiGIU4Rb:lmXl9nc:tZjXj2ArrSpX2J04Ug6vh4nW4MT91N2RWhq6qyqkn2kSwPqDwmjrCiHgeS1KVCA6NIwu4A6ACQTeBZAKkIwcPxNsOFSFkT2Lll21G%QlJ%0:i1j%nZEn5QYshQXjhCHBURVi6Ow4sGwsAYQFNCTYLAZ0r::%1LEZoOPJV1YRiRtSdec6sTEjbF::d:579Y5BOAiSkfQCCWIugR:yYInMW%Xf:0izqZOLZK6B1Jz1eQx7EUO0OIqm5iIqEocKlENYS0McDgsHShIzNRPLi60CFCPIpiyhEnwW%p8lU%iuc3b:sd9dqvX9fMlDE3cj7fKoHnGelBitIjT97f8rz8viTz4b1zCIm7irncgA7SK1mhvERJBCVWK8r:keHyJ69SaEbFBFrMAIM5ViA4cAbC9BLpbbJpJQKMqh%bXFqA8sXkqp06ySf:7UsRNAw9No1hGGHcJ1rQqyMMOyKTb2jlBMJCo7FcKqObORndWTPzNkhwvzpEpGruoVFpdZvUGYqueFtZWNmN:LtIrcraTnVZIeZw0jR4zcn3BGxEvNMyl4CaVVJ9I0ncZYcM9m1ECI5MUARg4uVNt1WBMsH7AN4Cp2mERkDqNUUhdaV6KYWyuWHiTO06Fa2z2Re8%Lae7UayOeovNVeIwclOHK:2mc1%Zf65tKeZ5m5rUYl8gmhGc8a7lkp:mbkpMfS8:X0r3SJQ5qwR1goQo::tSxDMADImbaUGIeimcsqvcYI8BKrbcgGwILBkcRQIzZ%nRyyWnFpA7y0LO3XknsJuWpox8AmHSqpnujaBCBTyk6FV0HA6FI1pbqB5jNFRCtI1P4R::5f3Q7z69XhDcU7VIgyK14znvrKvHp3P8vu5GRHD8o0mJ6OMqAUBBIKLiSSZGDMQCFjhJVYNQyj4pslW1Y1xZZXkqO1DHWIz%feSGXmoVTI3Kl6ERqp322JVRApo6Qf%6wkGzIsuYLgEYdEpIqEhMIr:755ho41sODXL:%1LEKwAK6MtloYR6IXgh61yTCXgkksAxJyRkiFFWmxdvHOZCmSFEZggTezabxWfWrGKmdTx3wbmYhk5%37s2hUwcyDPdXSxk2VThO7GcMzMzXTb9paEWsOUxhJh4oImsLDwcCiCYWHuq6fpaJmohRMUE4%oAgAA8EUVakjTzC3R9AIuoBMKYqEoa1xeoZx4fXZ2WMTMTT7O7sgZaaEL0J8OyKM6CHnOOWBRcx:vvy6Gb:dc6JuZdDM34WpQq5kEd73e:V:5:nXPw7r7f0Jrv1f:7UsQuAQsQf1sjDE2pSgvqSJMNELDDqNrDK4mjixqALlF1SrBQpqrKeUmpqh5KJeS%00RJHhAXwcMA0DhtiCIiMNIzyfWw6K0JzpUJlWvEJ0Abl%qZc8wRYSKlBwiSIXJCAslgAei0lSNIJZINExDNh1s91IJOC4HwQN%XJe3MTiRXbef:ym4ml8N1yRD6:HZXMplvS22YpH:%bqxdiopVyPRlMRxnCKZEcqlJd1lSv:T2%krNTvapnDpG9ABYAE6nZXiW5YpcvSZqEpVTnack::tSxDaACx2VUsMMUelppaloYRrwbjLmaIvFTOSJtNlR1bR2:2IKfKVW%hispTGMcMqVlaWGZmWzasb6%ZfoYzylKY7TGMYSGW5qIsFDSwVGr2:%RHEgarCQu6oMADjKAALCZCsu4i2STyFyKaFgAzAqFRM0sRPQ6ys2jRJbTMlErnKKJPlVX:8523DmsjONs5OHLBUaOSEoKkQETKjQVCQaInX::yIi50i5h2lf::j1HmUqrChAAAayywyUMFBAwQdBYoBDBQQMI6Eyyyy1ZVL:%1LEOoELGKMo5KTJQUSODMwxpWlNJeDw0FQGBUDgfEAXDBmRKqIPd:%SqqmTA1UQMREqoh::::::yqqociqqqv::sJpphiH000xBTUUzLjk2LjFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf:7UsRDg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTYuMVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV::tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45Ni4xVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX:%1LE:4PAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk2LjFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf:7UsT:g8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTYuMVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV::tSxP%DwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45Ni4xVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX:%1LE:4PAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk2LjFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf:7UsT:g8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTYuMVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV::tSxP%DwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX:%1LE:4PAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ"},{ name : "R_explode_png", data : "s448:iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgYCyQwHM2vCwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAAq0lEQVR4nO2TQQ6AIAwE%f8jfBpfUaORELbS3YbGi3PT0BmQWMpPPttDljclgHYnwG:EVFMnYJaitNYaCZgDpv0mGGhj5vvaQQUmjYl6fQDtwWsYhk0vBnqExsl%ITX8cwx2bPSPlHpooB2RryHdzgfwAlbacfuUfQggZmOZHTNZgZbRPpFpx98HS8EAqt9KWmCCuzJo59drAf:I0pSqlmdjamyEDWwmN:ANB:pMx%Gl7UnJAAAAAElFTkSuQmCC"},{ name : "R_bgbtrans_png", data : "s426:iVBORw0KGgoAAAANSUhEUgAAAFAAAAA%CAIAAAAzjQvQAAAAB3RJTUUH3QgZCQgPKKJakwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAAmklEQVR4nO3PyQmAQBTAUO3ACmzCfuzA:q8KggeXcRlBfyaQAvKqvh6Kqvr8QLBgwYIFCxZcTILpCaYnmJ5geoLpCaYnmJ5geoLpCaYnmJ5geoLpCaYnmJ5geoLplQLu2maOD16ogomttHDwVksG72qx4CMtE5zQCo5fWssBnzpR4Ova2OBbztjgZ9SQ4Byq4N%Xr40EfkU7NQLqKxBq55wJyAAAAABJRU5ErkJggg"},{ name : "R_boss_hurt_png", data : "s4206:iVBORw0KGgoAAAANSUhEUgAAAEAAAAF4CAIAAABrVWj9AAAAB3RJTUUH3QgZDi0Hy8UUwwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAALrUlEQVR4nO2cTYgdRRDHBwmYSHQPLuxiFnejKEIgQTZBRAT1oIJEEXIRESQiBCEXMSeDX%Al4iko5OIhEUGClw2CCgkEdYNkIVlRDAazImgSSA6LCHt79nud7dTrrq6p:pwJ1J8%zL7Xb7b%3dUz0z0zv2Zwi6vpOoBUdWZgZqT0:XRgYGZdWfZW20De6AeVDWSPflDTABF9irFKBmaAfF:F7bmGAV:0WTKqqoHWDyOU2cDFcyetsnz6S70Bq2UczfEGVGSmWBFbxfqqF%cBK8TTxz9y47bKzLj0h7UN%IJTBnTxfY5Gb0olA61tDCO2LPlCN2XeUWYDnOhTiorYmNQG9uzZw7FxW8PQ58sXfp7YDgvnV6GaWpfa3rp1K:NXLQZU6Kqkhhals2fPcqpRBojQS3TC1ZFCf%U1ULPh9755qFlPoSYkf5rWFArS70vfmWJ9CP:k7IqZP01GAyqyB3c%bYoJVG3DOr6fX11X6P:N2QOEUD9Q8BAEtXPnTnrPXAMnzn2vCrOyJR00M3lCFdYD0MOdd2%xvkXHAJSv%RtPCl27dq01pPwpZIZB0K98KdSqYAO6Ex7bcN39ypcq5pMSWcQ1sPvhx1VprUakOz0S0BSanJxs:Y%4AfosRo9m6zCqN3T0RF5ZKbRr1y69sbS0RPyvps5hNHQ8rKys8CtnO4xaUZo:fZ8b:bc6PNQUP5E9dM8Wa:vf63%H:jNXOvqmzlHIeHh1y0Tov0FlokdlhgGtdgMXr15SRW1c%CdDkxvB6A%:u7cZzyL%MAgexDCXooW2vZtFnOtqyoBp%2bU:Cp0VXT%pAwAX%ZY4:j4SO27Q2fKx87:9s63X7vl0i8:qBI9c19c%MQqzCUFQhs4bQZHbXTbw4Z:dPcbcTtB5HrSzWyVlCUT097bgdLbXss2kHe1B2bL7EgqdL2RywD3KHTHXZOq8DtWJQzMmf3vf6avzFZXVycmhgm5Y8eOkETxy%0Bs5J8:OPXrO3QVjftrTQ:Pw87IVcWIT1w:tQX6HarrFZvQHs3o%mV2VYb6qssncA6CnFkhb7v4BEVot7W4ZqvoCvlYXl5OeX:4mMgqOEbJ:qX9g8XqnSUOnTY9vpDNST0Vyu::miVMAfuGFDprorZMGNAf9h6bjJ5DweA3vYNG:TAHT8GohtenZ6sM5RpeKWFo4d8%0FPjsyuiBwD7vUMDF0nvRIRtCXowV2woeSmUOL1TJYzID%RAgy4oaNXY7nO4kwP3ltMvohbLyRTgraOE0kG4qSMpcTtHuhaPeRfVtHnY3q%q4XeN7BWvtqv3rP3gJoMqQKTjWh4t%3REw7RCaUWtv6496lvbp9TpfHPIeEaEVxHQhfCfKeF4itzfA%EiEQqaOCBqfv0hu4KzqiIUGYD1qWE9mAWlFI8qE5As6h4ChkPdC5FK6eB6ZHgJ3BJ2HiIFtoJYQamSek6bz3zhCroz:MuTmoFGLBal9bBF55VBX6iF:asasxTHqGwHthICv2JvjelihoM5rhkyZy8I:xwDczNzflCNHLN:PTeh7DC:X%dgn:6Yg3zwLxG0DPDbdu28TeMrGsNfvFd1SddSmzevJm:4UpPO93JJypWRoVfsOXRFJCZ%Ou5P%wBtyus2Ug3BojoTdYR6QQNVHpaxSc93OEKkpGVZr506sAAej4x0f85kvn8xdc:aNldr5KHqG%NClOhqoGpcbkLeHR9dD0hKYXcZU2iWL%F2W%Sh:53aDrFGwhdhYX13bHri:6R8ZGNeIjOB3RFFr2bBr:lZI7R8xs36mLlEqwTYMDaS%j9P1PZunND:MdDExOqWDasOiwDU5giFgnhqZRzk:jy9LT2oG1EGkCj5xuwein0FrfxoAygFVqW14lJjLUIruZ7vmXxlOcSpi9fPjDaOOCrEdr8vrFLl7jm54gykCt6U7JHPyBOZEEzYL5yPiWh1dr8cG6V2AP8W3epPaCbn5iqh0qN4yuXllXJsrcxuZ5mSUWPYHc6m78H5kbS2xNAsM6Tz70M25VT8rc60Nh5wIq1cWZJWnExFV%dVm1vhYtGH6H05TdC9iBeBUJ:sLa2xo:GCj3:MbQBg5geu0r8C6Gg27I5BzHUmiOijVMWN1PlekKbHIqzKliovV0JmqRriYGuJQZi1T2WIVq9wDJEK2:0A8HzBIiIPsWY4HkY8kWfJaMEzzMuwfPUMmCFKHieKgY4dwMEzzOU4HmABM8TIMHzJEvwPILnISR4nqEEz4NI8DzjEjyP4Hl8EjwPLsHzCJ4nToLnAUJnyoLnQQQbft:BI4k8jJtyPZXD88wWoNvUw:PUg8OgSsTzaFhJEbk9kBHPM4sBSswrG1k6oSyeR8t6kg0%SpVO6Ml2NerieVRpekW3IVLIOrq7rziUo9uUxfPAbXrkRHsogucxeXLs8NsLRw%pojboXcU:ZxrXA8RFQZYTCL8Teorn4XsISCH0KJn3UVC4ZsHNJZ8ztLFbLyTr023yw2FamTBo3HDUuR6qGhC6jdBtcknoNmMSug1DQreJkdBthG7jSug2pIRuc0PwrSJrDi10m4oSuo3QbYJkvRHoLuDR9YVu40QfXV:oNjcldJuQRUJ4KhW6zQ0J3UboNokSuo3QbVLlepolFT2C3els:h4Qug0lodvgErqNZ%1J6DZsuZ7QJocSuk1OiYGuJQa6ltBtwtULqkG08kY:ELpNgIjoU4wJ3YYhX:RZMkroNuMSuk0tA1aIQrepYoBzN0DoNkMJ3QZI6DYBErpNsoRuI3QbQkK3GUroNoiEbjMuodsI3cYnodvgErqN0G3iJHQbIHSmLHQbRBappPVJaa5cT8wHiiMa3jxsr5Xe:IMO6Tb0Q8d8VaXb6Iuz1dVV:WRVOlhlKLcHytFtSiCGitNtTHs3oxkWpMSor9I7gXUU4sgKXeUMfAJPh2v%hK6UhxTeFj4Gghq%wdg8egO%o1GK0OOOgUS6jdoJhNqYAVCI0FOEbgMFE2nhqJe0hZ4fOV0ROQZaISs66ZWIoC1BD75XERC5KZR%PZPlJMhMpAAD:If7cp3IOR4y023SDViHitp0m0F1Qk%RZRX%E7DorQNr8avlAr5ED9Qk9BRc2KpD6KmxMleU0FPWQAVCT34DlQk9NVKoKKEns4H6hJ5gA30j9ATzhfiV6xB6gnugb4SeAAM9JfTwrxH0zLBvhJ4YAzo%zgZqQIv:PpFr4xag28DQUbqN8dCxATR602NEPxgDvabbcAg9tQ3A6Jl4FZrQU9WA7zzY%tqs8gBtjPVDSiqHvk1Pj116tFhHLVMhPxyGKKHRuwaMB1MhfwoRr6SfOflVA1LfvLVM3y9rIfTwm9xqidDbZ6byIptuM2AQenpNtxkwCD23DN3GR%hpGQM03QYW9xPzeSLd5pVNm8yfV0YKGANuw8cRSeKanyOh2wRK6Da8HhC6Df6gSAlcg9Bt2BK6DS6h23jWbarRVoRuI3SbRImBriUGupbQbcLVC6pBtPJGPxC6TYCI6FOMCd2GIV:0WTJK6DbjErpNLQNWiEK3qWKAczdA6DZDCd0GSOg2ARK6TbKEbiN0G0JCtxlK6DaIhG4zLqHbCN3GJ6Hb4BK6jdBt4iR0GyB0pix0G0RCt8EldBuPhG6T0ANCtxlK6DZsuWNA6DZjErpNm9wUSr%eyXISZCaS0G1yGxC6TQ4J3UboNnkldBtKQrdhSOg2NyV0G6HbCN3GEf8aQc8MhW4zVND7RK6NPFyJaMEXosx83%IcwNBRMsxih3QbOnrYXUQ:LHZFt%GjbZoe0m0i0DZNf%g20Wibpid0G3rstg4Y66hlKtSj20RE7xqY6pBuE4e2aXpCtzE1F0PQNoM%0G0S6SQd021cLEPo7eGO6TZN8kMtvaDbRDc:R:XoNoVeVa9KtymLZfA1P7xOTOkB5j2vPD1QiG5z5sSnWfY2JtfTLKnoQbwsdBtUQrdhSOg2pJhjd1boNqXkekKbHIqzFFWovV0J2aNr:Q:9ryRyGfaWcAAAAABJRU5ErkJggg"},{ name : "R_sfx_hit4_wav", data : "s1948:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAGAAAFtQAqKioqKioqKioqKioqKioqVVVVVVVVVVVVVVVVVVVVVVWAgICAgICAgICAgICAgICAqqqqqqqqqqqqqqqqqqqqqqrV1dXV1dXV1dXV1dXV1dXV1f::::::::::::::::::::8AAAA6TEFNRTMuOTZyAaUAAAAALAoAABRAJAjiQgAAQAAABbWRUtvDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAAp8hVIUkwABbKFt5yTQAAQJIkYXBMVisVigUCgUIECCGf%7uyZMgCBBBDLu4iI:8ZdkyZMmne:::9oJkyYPn8QAgCBQMf:ggGP8uD:1A%D:4gB8H:EAIAg:xACAY9YOAgCAIYYYYYYYYYYYAAuJOiorFUs8adjAeJusuF8xVemwf2otIhum5w:eftGkqSXWUOo13Mh6O63p7aPk9BVBE0Ot9f6uYppqV6n:q8r2TOFxqiWf3V5up1db6dKie6oKpQgEECdQjLLWNaL:%1LEBgALrStpnPKAAX8yq:aeoABevrTOtU3Bi3Q5FY8ivGAZWelFR0eZA8dtVQaBzN6C1F7:dlNkGi5P%rM5H9LEogBuyu7P66GVKI6aoOF7oP36IBIyKntB5QNPLK0Dg6spA7FgAM0EAwFptgN22s63vNos095Mb%Go5xz1QKw3Y35hinTj1:9DwME%nNo7UWxhxznaMUJgBQ0Zn1anXpSrG2IjAPEqWV1amatZ3WtBWCcLBAYa1dmr1:c93NU3b:::2QqqNXcXIjaV:vHVyv:7UsQFAAt5hV4Y9oAJgRpu:5BQAW19XZw1FZuoIdBi9sszccP2uCRsic6im7U5qCFjsOOr7NtYqC8GdHRLP:SLxKGlTesxb:5ovWmMOkn%v::uakuZpMicRLH::VX::6zho:owLnTiHl0BGA8aXOQCTW5tU1xDfHAlDhtTf8qDzuKHOrTepREh2GARaaohhISDwmOD5To3%pSkOR8%m7mM4iRzL:TdC4rTn%:7CGkqiAhT%RUQYGIHWsFMHeY9:1gvd:::::xX63qDOICCf%uG::tSxAUAC9FbefSzgAl3L60zDnAAW%aNTtz06tnqhEMZzz96eqDxb::oNjxo3:8445Rxu7ve9lImmHFj3rzfmmsco4z9tJs001DiJQsjfZN6moeYY3504446ah8aK:97zMLVA:e6x%LxsAT4AACIAAABeoAEGw%GruPCM56D8QwPHYakpmr%eDcceggf1B2GcTBlsCBr9igt541bQda3Uk:Qz1FE9laeSTa8t5%ZvQRZ3uo2x1vMO:qU9M8z56a6t7P7sO4kxWpxxtAWSip1aPL:%1LEBIPLkT1XvGGAAAAANIAAAAREjPaqmZmTTSIKBN7M3Wbqrsyqqrxm::YMBKJjHszKUDMGAgICAVUv%KqqqqX::7KqqpbMql::V:jMy:::%qqqkx6qqqVCgICpYGjvxKCp3:8FQWpMQU1FMy45Ni4xqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv:7UsQ0A8AAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"},{ name : "R_block_png", data : "s602:iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgZCTUYwZmX6gAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAABHklEQVR4nO2WMQ7CMAxFAwKJM6AKOAAr1%kN2LkHN6g4BVdgZWBCgBASEysLlAikEtk:dqxmQSLykCb5frGdtHVlZy6bQ01VfeVW11ZSW4CK6cY0Vb1s%vt1l9jztvoYX5wEDxc0Th%7gljIMEdA2ng05IP1daEKAQDGO5ie4eBhUwoqDIAVvm8LwvCPfnAyq6Bf6k44OWEB%j1HOn4q5spWgyYO0gkbzJIN4N6ZgfWINQpQ75ffO9x%KiB2GI6nS8ogkKtvCH6NickOdYDM4IslAEyOXBU%q0TAxbGp2LaSUhQqoS9Bpaco8fMAZxWAYELqFGE6INymHKsZAKuSDcAPUkrBMgASgzD84ZhS:wf8JkB4T2QA8BuQ8ya3sRcDzkcfUK4i1QAAAABJRU5ErkJggg"},{ name : "R_hero_slide_png", data : "s719:iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgYEzAHmOsvmQAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAABdklEQVR4nGOIY8ylKWIYtWDUgiFpwd8j4iDymTgQ0coCKKKGHQzI5kIZz8TR7KDEJhQLEMYdoZodDHicjInIsICJAQKUwAgI7jHAwc8vbWgMMgDIgkTpMHRrMOwg34L5T1cBEaYEVZzPAPEBCNyDIRyGAkXIswkRB4m2YVCbGBjYearIMAu7BcAIgKD5h2EBdQ8lqgUt16ExSLMAuzBSVL8:HoTGINMCaBDBAFoo:Xp5GJk746YBEBFlA9aC6NutuZCc9eFwAhABuUAEV6OyVgBNBMJFFsFZ2IllcwERXAPEAiCCiMMVAO1AMxqXHQyYpqPZgSwINx2CME3HtAARBzuy5iIHncLEXDiJDPic2PCHOTBugEYhTMMMR0wnY3U%sj8wgwsepExwa%FOeJA:majkAQMZ6hfgDAgbxd%YlmPGB1bnY40AZLejxwEa8JiWTJI:0AA8DqAW6F0uhiC4fym3Awqwhg:WzEFM:QUPTJR8gN90ChEAnWnXactC1YoAAAAASUVORK5CYII"},{ name : "R_crow_png", data : "s739:iVBORw0KGgoAAAANSUhEUgAAACAAAACACAIAAADlBPxNAAAAB3RJTUUH3QgYFA4tB9rrtwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAABhUlEQVR4nO3aWwrCMBAF0PjhNt2By3YdVVD6SOZxZyaFgjfkoyjek4elHUh73J6n9kbgokA7Nu3Hy7JkgKa0MX1t1RmIzDf680kGsKUOeC33fZ8DrNdd%miEl6hr45CFGeBxImCszzaDKYC:ydF09yYoAUj6AZgerQL2nELp:n1Q7wQIECBAgIAHpJ9iYaDCBIBTnsmu4ZYI:ogMACkReiD05oKUCDKwTzFWCSkRrMHawHptlwiBGk1rdomQeTcdAbSEqgPzZ%D:y0N3QDQ9DyDRPqAxeDoEFDsBAgQIECBAIAtUHvEZwDbyBQjCZAoQ2%ikfAECGpcsQLQhGw0tQNLGvxUg%1:W09UlcueERKub7O45ng4BxU6AAAECBAjoQO7hlQHqTODoyeQ9cA3k9JIFiMY%HTm9VAWad3rpAIyLYKwSeHppA8QUDViv3dNLwgxCzT291O9BAkDPFyWG34DTSz8gl47cBPIeICSYLiyRu2J4tLDJ:XfldAeY0gkQIEDgL4A3KpeKnthda3YAAAAASUVORK5CYII"},{ name : "R_sfx_laserOff_wav", data : "s1670:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAAE5AAzMzMzMzMzMzMzMzMzMzMzMzMzZmZmZmZmZmZmZmZmZmZmZmZmZmaZmZmZmZmZmZmZmZmZmZmZmZmZmczMzMzMzMzMzMzMzMzMzMzMzMzM::::::::::::::::::::::::::8AAAA6TEFNRTMuOTZyAaUAAAAALAoAABRAJAjsQgAAQAAABOTjvuJ8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAAmsc1YUlIABkRrvNzEgAJzRkYrFaNGjFCCyMLgmK0ezRoyMVisnkKABgDBMVo0aNGjQCgKAgCAYJGIf:%c5toEDAIHBAD4P6QfeUBAHw:%kMfy4IAgCEBg%:8uD:A4HA4HA4HA4HA4GAACME1e%97hCpcorKNhhH6x7uaFngLmVTJIoAHsIJCtDQvLTuJ8AYoQVGVNXRtaLIGPIARpH:tzQiRJEmQUi3:5mkVjhRNTX::STNy6blFZuc:yhsLA2I1rgACk5JbdwIrr:%1LEBIALQMl1XIGAKX0SbHSRiiUQYH172KHGmk5qwMzIxIqkv3UkPXNmLWlWKSlmsmsOGTMfU9t1bQ85Zn9X8cbywTUrKSa9%:Gn%:87atw5UypZTzf0t3tJNC:63GmCufzX%1qgAABNpyWSXjpHIhDJxsKgiTTjlIpockq5ZmcopRvqxS4xqJXh:QEZl8pUMVvhgIrhrA3g2L95cXN6xNCivzQjsn5PjHf:Tpv:4rv:Fgb9:G:F:cXFk3HzQX:8Jl4:LKoJAANZtDgw04JvFP:7UsQFg8uwgw5N5MWAAAA0gAAABEo0kSAg2dDYhgHpm6g0wvmkC4zgxhh0BzztN1gR%qWtfBd4KIHEYJApcFmJonaRA4NMTUSsAiVerz0aJMHEngqRGpKhJ%VI8WJYuKuxZu0V1t66TEFNRTMuOTYuMaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq::tSxDSDwAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr:%1LEkoPAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg"},{ name : "R_sfx_bossJump_wav", data : "s5850:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAUAAARIwAMDAwMGRkZGRkmJiYmJjMzMzMzQEBAQEBMTExMTFlZWVlZZmZmZmZzc3Nzc4CAgICAjIyMjIyZmZmZmaampqams7Ozs7PAwMDAwMzMzMzM2dnZ2dnm5ubm5vPz8:Pz::::::8AAAA6TEFNRTMuOTZyAaUAAAAALBgAABRAJAdqQgAAQAAAESNG5j6jAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAAoMO0w0wYABcRstZzKwAgDAmO7RIEgSDAwMBLJ5%vu2vXvoiBAAQiIBiwfB8HwcBAEAQBAHwfD6wcBAEAQDEHw:BwEIgOS4PjwcBDvlw:8H9vwf%CDoPv%CDvKOlPlDmGGGGGGGGGEAAA8cVyoEVTjhbho0VoL0tgtTS5vLy4G0IaeAeEUN7ZsqywmjU1zZuu6ECkakKQEz3xNcompIRJaFXHx8:m5Lo3PtL:::%:0jq6i0JNQ:4VIhYuh6AAAACSqcjklltu12v3D:%1LEBwAMSE13uJGACWuNLIMwkACjTRk6LRx00tjLIVkOk5A3Cx4EOMbUE1ocJJZJsjoK1SBgXp5GRLVdw6KRYA5G1b3XmvDoTds9n6stKc2cuL117PvZ0oUbuNbmR4Xp5vZzYOwuDuXTfYqQlurtZvGp54Y606PxPCXV85odUZREbrpnWaQTcpPbizTLoZGMdhmLAEGBcEwiKhcIoJnzY5CzCEkHkQghJJrXDQAg4QOjeNrRRcOS8ywU0V6LGrV0x9rkVRg0NpJtJLksLikMUv:7UsQGAAswXWQZgwABkA6sizBgAcVfeWSuiltSRyIMmaiNE4RWUby4Xzas7IZKSz7BsLB8CEA%AybjSR5wPA%lQxghHkjA8XSOeZjyS1RUXSPF2r9IokexL%9ivpX%ubF5sABBSWYuc3QqFfpxWL3oxMTLff9PC6STz0J0TTHWusWakmllNmp5rWc0d8u677pTFJ1mnBjdFFDHUdT16cJTHrNMduyk3Zfb12brNMK%tXaMvs5rdLNy73Ms%t3bmvoKctRhmJUAAAgoJORxyWW2::tSxAUAC5hFebiBgAl%gHI3AjAD27bbcDHEc0HS0SpW5qdkRyKIRaUmGBkLYrbnQ:dSwmhC3LVTvw09pPt65Da9nMz%:L9tWf7STROlibxG27G6b3ujU0ztWY1b730zfumU0pjN2mgA2nHJJJbLbtdtttt:i7zOKLSZACVZuBSQHKjyIFGIXFkA4WssXlGBsMML0i3REcJHiMFsBK4HUo0cODKYV4ygZTuk0ht6y6vK5UdWknYuDIUjqULixCQDIVBMJXnrb4oYC1IQEh9CtmP:%1LEBIAKuGdmGYMAAYyOr%sMMAMCTzyPbVk05TyqbkNINTRRAzTEkE6LY2bnYrp5SoK2HyywbB0PgQUNIePOHhEk0gk8JnCC2BsXNIfVc0zmBdE0jFb2tQMayro9:jGXsA0abr:bjckjkkslG4OoaqMp83MLdPTNCAAjERHAQcGsnHtqITuZEnyGKFTEqK4dfzIV4n0UkIdYQIL112:84lFwSgeshLxKNKrnkLKJ1%BQKDzmWQrrO:DLSv%syQhxxAtMASLTbBiGJEpWdVrcbv:7UsQGAAqwVWIZgYABopQxdwYwAxqDpDYsT0pl9IIJgoYGqGJCiWFDMtUEsYWDhMGiRYDAUGAGEhEASZIShAmaabao6ePBdhk5oWRagrFmG3JCq1MGq1xZBpaf:s6QAko3I7JZLbbdbttttp3hRiLIKxk%KVHOCxQyNSTFmMLMyd6ZGTmjo6w0pO9lsJTQnM4kw4WkGYp2qXWSYjAZCkSF5BYgeWITqkAyGQiBhXJGknEkUedFMKoJTKrF7C1AynakjaRJo8sqAAkI::GmssHp::tSxASAC4BzYrmBgAFlEetDMoAAQ8hktSURfeWMUl9fKtdl4gQqhRYI2AWZBYSvdqqpCdEjv:4zgcKmGKEoSBgCIaPKBAKhqXJpDAHJO1LCQNEA8fPuaAEvR7Lho947om5Wz9KUoQgJFc0LHkQYeFI3KpmIOtLa8uuvxG6mUSEIRtkzQoIweKsFbW4mF4iLWLXUeKSOLXiL:aLx6UYDsKLuUBwwER6A6vXLkAiBxBZs%KhcQMC7:s:KEAuBCAeAhqoGSWWR1sAAaG7KI53UDw3:%1LEB4AMNH1aGYQAAX8lqtcycADD8Od1F6QTCdsIyBED0Wjw8OFDRUob:0KU5JBcp:5jnq59mQZ4HAgEBoWFTnCBw4FgcMgEK%gPky4gCQuI0B93wIMcNeHwZLCwqcNGf8%kggokaAAQSSQC2lnFJXgqJiDWd:7iLrlMZ:4v0dGuI4P0NM4TjAjjZDjvJiQ1Dlr8aDQgcNDVNZW:IE0MG5M6h07:dRuTIKek2ptv:IGTDDHMMzv::5OXD5cHCvs:8MKDDwHE9QAACBgKBgMBgP:7UsQEgAutC2u41oARdJdqQzKAAMBgIAgAlSVFaK1H5iXfCbDD%EVEmCrfhehAgHMAG7:LoxgLoSUOb:5gJKC0gtJ0S3:8FZHcWjhGMI0MN::k4S4J8YnBLh2jlNf::1mJdomKh4i::UNsJEDabASdb4EfxFWGv9:JyffX:sUBUEXmC8CUOgbfoH748oWFv8XPt32Flr:73tMok2CRX:%0rRKqVXkn4IOIHywFBoTB3y7wfh%IjwiJCE79E4UOKqErgVhJYiUEKeAAeFCcmGYK::tSxAUASnyBAt3zgAEul5%J:Zwgj0RhsIJQYCyBemC0AnZgSwBOBACQwFUBAAwBEXNMAYADXMy:::::mgRF::9l9anq5tR0HovVD::cp::0kYjf:8HpVH:52d::AtD6H4Kh9hg0wHacuzGjGZkYwYcDgoCTpi0zGrL%nb:KgoWtnIcVMNPXU1Jhrp%cEQvf::57sc:1Gp76%g9wWD:9RcPeG%z4nBLhof7lsA9CcPsMGmA7zl2Y0YzMjGDDgcFASdMWmY1ZOzFQ3:6hiJh::2n:%1LEEwNJzaL8L%1BATM0H0H9qCDmTW:9Cwt::7mf:zSUn::1PNN::OM::1ZP:qajf:5AabR:%cf9P%RkR48Ij4YPICJnYvBqh6ZWPGKBoCCkwYelMWpX7o3b:IQ5:5lW6::oKy:9DJrf13%hdv%Yah3%:9ytv9T2O:0:nXT:kZN9:b81kun9B4aq8A2lkIZMB3AFCYBZKAB8rAAFamKtCe15QaBkTGTRlpllpmTMoyjGWa4El6uMo7aTNXSioqSy86KogBv:9V::6lWoff::9P:7UsQjA0pc%QIvpKnRMjPfSf2oIBQLZL8Mf61dv:z3U1wkHndhy5gv4G0cIvmelhjQqYSCFxVjTsqjNN9EQhJf::yjmf:3zyMwmW3:9mQmJG::0yEQ7::%xGB5:::mFjaf:%pzv::81P::rISRVRGgAADtUQrswSECePE:NSaMgJAwJFFl07Wpcm%o2f::x8XiSWRjjjmsd7VPMOdlOOM::%pn::1ERv::geX::%eST::1c7:::5zmf::HSbtQfMuGQmCmgXB8pps0RlhphwCA::tSxDEDSdWi:m:o4QEtI1%J:RwgFdUVrUtpvjH:26IPmM1d2ueYzc3s3ZDjT:X:0czR7f%KjddfX6AGP:7eo%e9fM:Cm0j4jfQzrExqAgAA:10MhMFNAuD5TTZojLDTDgEAK6orWpcm8aN::NFZIal3:Q:POOG5guK::oxyvt:81nv:%gREP:%FCdf:6FjrPixL%8KU:BvZ5VOMn5HhXpgkIE8eJ%as0ZASBgSKLLp2tS2uhVm::UjZeY9XSkjH5hMkqjmnulZ7od7Kf::nf:::%1LEQgNJqRr8b%jhASOen839KCBBe::9AwPfiAlV6CX%%hT:lRBVqQADU2wZ4wfsK5MIJBHzAuwJEwB8BIMBWAMjAIABYUAA0g1K2rw5GKSx3PTueiImhdYIACKACK7wIIoAIE4fQJDiwf8Pl31vD:Y:8j9k:%r::::9ACSSS2A2O08FcIPBFL91HfbO4UPsQrWGJQG5EUHkADBYRyDEFAEQ6LMBuH9CiYNcORFPos8zupJD0gOTRQxIIuXt7KJQWyjD33ff7ijmFnKOGuZ6Iv:7UsRUgAqMXw5V8YAB9BvqlzKAAWlImntZJUmKPzHspJ80554LBREjggRxG:Pf::u1uFGbsbNFSfAR%HrKAABH:bB:GsDVNQEuq1UyLMdWs0CSNZihBwYcGRVCqSEqmZsREFIg4KNNhUmBiSAC8SCiHAEUUKSpt4TNFhdqOKCs2bjmfocKCrbm4r:mjFbd1XaDELsO4apPxqv1wiXEwH8KCu5VdkySeByaOIhmRk8uMxi8PenXeNrNfUIRGSCbDo0uGywwLIMEIwXLuQxilaUC::tSxEmACmRVYrjxgAE5jWxDHmAArTT3K3e8YLzKf:9qP6qKA7xSWnmEmQ9TtZ5MrkkorHK7VF3RImh4PZVol2Tp2zl5bnmQeceIhY0HBhELF3m7j4HYOckXtVIIuG1telIq1trV83fucjb:%n3V3RwdRZp4aZtbjRz9bVp1asrGzDuOSSnbUCW2qdBm7l8aKlAbPCENBEPixcqg8ChoRIIoFwsocXIIS1KCRKbY42xC0JU8huuWq:9O7vorvQleqkBJZZqjNPDBBbEU2x4tLv7:%1LEVoAJfFVkGPMAAUKKLMMekABY7RvTxncIQJBkGwqEQiQNPFwMDhMogVAzjLCCB7HOaSaC6zTlOFhS8cog56bQDe9iCb00Xb2LXfRpvnKF06nSVT%LiJBVX2XC4dy1HorJpXN2bcZp1BhlAQbK4GxQGQojcOeHCVJvd72mWOTW1oTNEw6KCl5tFyFAdO33IShjRc2lDdyPoR6NSv9rFQullhaxh1WrAz:QDKozWna1Wiy2BExKNUibR1pb6l0Nurmn7HCwjBUgKugEVMDgKf:7UsRmAAokL2xY8YABKw6swzAwAFauBmpADTY:lWQNWVq:AKYGUhDP%vV21LAAAhHkAN4I8CqEyWlKaJ0st2FWxYT67ChqQKASMEkjZ15mfRxLKrvLHEsOJU85RLDiSWvMz5xq1zSOyjjVzSOgqd%WPEcGlHv:KnRLlf8RdR7:8SpMQU1FMy45Ni4xqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq::tSxHYACRBdYhmDAAFQlKPnnmAAqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr:%1LEhYPAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg"},{ name : "R_bg_png", data : "s1152:iVBORw0KGgoAAAANSUhEUgAAAZAAAAA%CAYAAAAF3k3mAAAAB3RJTUUH3QgZCCAViV9ndAAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAACu0lEQVR4nO3VXYuOURSA4fFDJDU%pmF8TsZoDNP4TEpKUigpKf4IQgghhAgh5PdxInFA3jXP%6y993MdXOd7r7Xb98S5VVe:A8CoJrIPAECdBASAEAEBIERAAAgREABCBASAEAEBIERAAAgREABCBASAEAEBIERAAAgREABCBASAEAEBIERAAAgREABCBASAEAEBIERAAAgREABCBASAEAEBIERAAAgREABCBASAEAEBqnT025WQ7HO3RECAokVD0aXsGZRKQIB0h79erlL23LIJCE049OXSP2Wfj9F3VpPsWWYREKp28PPFkWSfd6hG3VOtsufcNwGhKgc%XVix7DsMQRd7qln2:PsiIFRh%eP5zmXfqTXj2FHNsvfRBwGhSEsfzvYm%6616XM3tcve1bgJCMXY::5Mquz7ly57PzXL3t24CAjp9r07XYzsWZQoeyetyN7jOAgIvVt8e6p42TPKlj3:lmXvtksCQq:2vjlZjexZ2U%7svfcFQFh7BZen6ha9vzspk3Zu%%CgDA2e14db0b2LO2mTdnvYKUEhM7NvzzWpOy52k2bst:ESghI0O4XR37JPktJfp9Lq7JnbCftyX4jUQLy09zzQ53JvkvNs6tF9sztpD3ZbyZicAHZ9Ww5TfbdW5plKbJ3YB9tyX5Do2oqILNPl6qTPbMhzLjFfWbfkzbe0Uo1E5CdTxabkT3Llmdb4y6z70C9b2fcqg3IjscLg2C%MFzZ:2wzAdn%aH7QzBeGKfvvrSog2x7O8RdmC8OU:S8XH5AtD2YZkRnCcGT:0UUGZOb%DgD%Q:Z:XUxANt:bCkBAdjhSArLp7gwAHciOR28Bmb4zDcCYNBWQqdtTAPSo6oBsvLUegAIUH5ANNycBKFRRAVl:Yy0AFes1IOuurwGgcaP8:38EZPLa6u8AMCoBASDkByjkn89tsiGQAAAAAElFTkSuQmCC"},{ name : "R_boss_png", data : "s6150:iVBORw0KGgoAAAANSUhEUgAAAEAAAAI0CAIAAAAiJ7h3AAAAB3RJTUUH3QgZCjQeM6e9xwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAARX0lEQVR4nO2cXahdRxXHBymY2uh9MHAvJpibiCIEGuQmiIigPqggrQh5CaJIRShCXqTxxeAX%BLxxaLQFx%sCJq3FkELFopfSALtFcViMSmCJoH0IYiQt%3cM81knflca2bNx5H1Zwg75%5zzvrPrJnZM:vsn1o2XGp0ALUaZuDYSvWfM8DAsfti%bTeBnijXzobYI9%6WkgEX2NsU4GjgHF:lT2yT0MxKJnyaiuBrIvFojZwGsv:8Yp%y:93BzA0xh7c7kBHZktTsROcf40xTzghPjSle:5cTvl2LrMi70NxILTBkyJvR6M3pZOBrJ1DCN2LMVCt2XPE7MBTPQ1RUdsTRoD586dw9h4i0Lop:uv:nnrUVgw76Jq%7708YkTJ5DvyhjQoetSG1qRrl69ijktZSAReotGuL0S9V1RAz0r:omvXlb3U0hR8kdlU4ikv197wRbnRfhfzEch80cxGtCRve:MJ2yxgepjeE7s7bfvi:q9nC2QUNAPFByCoM6cOZP%ZKyB51:%rS7Ikx2ZoJHJQxWtBaCHt7:zqPPXYB%AilW:iqTQnTt3siHxp5DtBqR3xVIoK7IB0wgffugN:0%xVLGvtMgirIHHPvARXbKnJdI93ROCKXTkyJHsN4YNpGexdG92hlFzYKJP5JWTQmfPnjUH165dS3yX6jOMUvvDjRs38CezDaNOlPa:sdet:nv3YKhpPpG9:11HneP:vPEv6pf5MtGrPqOQ9fDFo1vUrwnKRh%U7QZp5Q28dvu6Lvrg1X8zVLkVjP7pbz6h1rMI3w3InRjmUrGCde9nEea6OmXA1r1aVb8OXReTPzUdIJY5Tj%%slL%44Ir5Wdf%ds3fv1Lv1z:y%90KV65:%G5HzoFuaWQ0EOYOoO9trjuYcV:6LGvlH1IQL4nU81OqdkysfX9KFB93Ru5Bnh3e2C2HF9Jh24OuAxgR6G3veOILviG1QkDc%bCt39srszu3r27tXWQkKdPn6YkSlx%C9id5Cvf:5JzTK11W99ae3t7sBG4sijQAq%8%LPgcVZOrStQ32q1vLLH%kD:iaURUKMQRk7oT156Rodojk249k:Qlfawv79f873hPkCqeOVFf:7CwUaVidKEDuvevKi7hPnTjb:%3ik0B34f0Omuiz2wfcC8mJ2bbN7DDmCOY90mOHCX94HiitfTkzND2YrXeu4nl2OfE5wckU1R2Af86xkYukl6rUTQjqAHf8MmJT%FKq9nWGZAfCIRDPihB6:GuGZxpIfoLaZYxNkLyZqgnXGiykCZtLGauP2BLuuBf1vFzMfp9a5R8L6Bs:OVv3pnbwG9GNIFJlui4v26D044iUZotbH1j3d::Fdv3dVFxdeQcI8I7iMFN8Ji00LznTm8h4QSidTQwHu3T5oD0xSYXlEgZgPOpYTxYDeUajzoRghmUfMUsh7SuVQsTgM7K8FX4Jaw9VCsYCPQDOwkZc556pMf1SX4dt7NSSOCAad207r0mU:pAl8xG3vOacgpLyFaCxxKKvgWc29KF90Z7LjkyE7eBX6wBnZ3d2MhWvlm:vSt78IT3vPPF%F:Y7HSPCCvEczK8NSpU:gDK%daA19iV:VVlxKHDx:GH:gyy05:8RkUKqPoF2w82gayC3%z9oct4DeFsxoZYyARvc26RDpBA51%rRKT6e5wB8nKSbNYOg0wEJxPbPSvr2Rf:%yXv5P5uKmSJ3G%0yvsCV0NbK:L38BLnx:cT6hKIX9bM1Gc98Lst8mT:rpgOpUboO7CwvP9vhuL:oPrPTvgoTgfgjuywbtp8K%YzLF6:NAhU5xcgucQDDifQr3:Z0927twkvvHy1pYujg3nHJSB7ZAKNgnhVIq5SXxzZ8d4MDYKDQSjxxtwWol6i9t60AaCJ2S21xOLGGcTXK:3YtviNb9L2Ll58%Lq4GLsDGr1x:puupRVP0YpA1zR28Ie:ZKYyEgrYLw4fyVhlK1%uLaqbAH8rbvaFjDVn1iqU6X78a3r%7qwfNqafE:Hkyruwf5ylr8Fdlcyx1tA8JyPffpzsF4xhb:WgdbmASdW5a2SjMpiar47reveCTcYfYHqt98ScjvxXaDgG%7du4ePxgmdfwxVoBOn%64W:kKIdFuWsxND3fOUqOOazc1a%Z6CVQ6F2RVsVN%%BE0yWmJgtMRAqcZjGYo1BZahWLzRL4LnISgRfY0xwfMgFIueJaMEz7MuwfP0MuCEKHieLgYwdwMEz3MgwfMACZ6HIMHzVEvwPILnSUjwPAcSPE9AgudZl%B5BM8Tk%B5whI8j%B5yiR4HqDgSlnwPAH9X%F56iveqiueh53Ns:TE86gWbJ7gKGRj1ddh9hhPW4Ghn79w2RSmaANqi%dpzeZRjFejPuAGMm6s4A:BWDw0wfM8eemZTmwe1QDP4z%g0Y7NswSHUbwBf1qFcCF4nB5tazzw43m6snkUN56HZfojNQIznodrCsd7YMbz1ARdwOZJGShQfzbPwv44bm82j2J9mrU:m4e:BYy6sXlU65251mwe1c5AHzaP4jXQn82jWqdQazaPYjQwhM2jqHSb2dg8Cm9gTjaPIrXAhGwerIF52TwKdylhFlYTsnnIlxLTsXnUODzPEsGUkNg8y7R4HiSbZ5kWz4Nk86jJ8Tx5No%aG8:jPDs4vg84jzT6e3iJk2ObCbUpVEzooeJ5YulUyxcqeyMSz5Nn86i6PpClAPgbVdnMscKweRZqH3A%Kxh6zIl9BYnnwbB5CAayoceawveDvEmMYfNgDZRFH0NL4G9xZ9k8C2Z7vR6yUnxvPM:mwY9C2bVLQnbL314OMN6pzxjQ1c9CWNEeyHcucIoaMJiSYOiQTkLVI1uEu%UYBQw0IqzosnOS7Qa9VaATtyOs6Lc0505vHGEl3Ac2ibDizAvHc4IzWvreUR:iR2YY3QDCSsxZsMqDK4yxhBXhSoyWGBgtMTBaYqBI46EAxWLHqwgcBq0W0S:94TCkP2E0Eg6zcDRLcwOx6CeFw:hqGv3Ca6A:2mZhgcMMRNsUGnBCHIi2oRmIBTcQbUMwkK3j:RFoG6wBTPQ1pRhts2DuUs6MtlFZOMzkaBtVBoeZB22jyqAAvKpB2yheOEx:tI3iMjAKbaP6:NymHdpGIQ1Mi7ZRpBaYEG2j2FOoM9pGlfGF5kHbKKSBadE2Kmhgg9A2qsMw2hRto7iG0VFoG4U0MC3aRhXgeaZC26isgcnRNoraiWdD26iEgc1A26jQnfoNQtssmB:9TY22UV4LbBbaZnH2hXh3ezqgbRbkr9enRdsofxTaLLSN8g1sFtpGcV2NjkLbqCxfCKORaBul3FFos9A2iz%MbhbaZimj20yEtlFeCtVcz7BMf9RGwBqYE23jGoChbATaJmqgQEPQNgvv06wD0DaK72HQIWgb5hYw6om2UU135jqgbVQjA93QNorRwBC0jWqaQh3QNorLwCi0jSLBYSZE2yikgWnRNqrsYdB50DYoA1OjbRTiUsIsrOZE29AuJWZE26g56DZ29UxF2yzD4TCO7IaSrX7YDsFnkYcZsEOzhWTYbS882kYNNBATDW0zygCcGe0Dpv6D2NoDtBFuh7Hd1:RguxEWPGE7jrZZhiOqYvNG7OFZ:6Nq6TYFbB577BB6HMANCm1Tk0JldBKIubGUGP:DkWibpSaFqHAYZ8MnMTctaLQNzYBTGTGEDab6Lacn1juRaJsF2Qf8BZcCPAzMlrKDJjF7DQnKx87Nm59:%GH731srhU%lVryVvxfbFNUTUx4OE3xdDyCPf%FrpqQ:wZfTYpU37snDKDvs5o:P:6jmo1IGYPUnVo:FsJudk6frYTdRA:Bq0cbNC7upDN0of49scthNuAVg9U8OuwkbcAbdqWE36VF2ftgNbRidEXaDNDot7Ea4EqMlBkZLDIyWGCjSeKpBsaagGhSLPfpF6DZYJaKvNCZ0m5xi0XNllNBtgIRu08uAE6LQbboYwPyKVeg2BxK6DZDQbQgSuk21hG4jdJuEhG5zIKHbhCV0GyCh2wjdJiah24QldJsDCd2GLqHbrMtfJgvdJiCh20QldJuQhG5DkNBtVhK6jdBtCgwI3eZNCd0GF4HQbTJF6DYcErqN0G14JXQblIRuE5fQbR5I6DZCtxG6TVzZawSh27wpoduECQKDn%BwDJiDRDrNhefxR2ezd7R5dBvzWOZdJMpjXTwGyhgl8KFfPf5CxJD10INuU4xlcDoxHHxjT5r6394whYIP0QcXKOaxXt0Cr6:kn5BIpxIDwSs5P2L:jc6LL:ziB%YgmD9N6DZpxEfZBpb:LPLSiG4TjL7YQBoUw0%3iUWfNpCl9cRQPcx0G6oMecTfaravGCaO%W%wt3DSbajVT2UNpS91ssq3AGk5hpHTOPC45CY%S:XDaYg6r9XcX8q3QLb6yxBDQZnOQKX1ZAzEuo5ZPQZDL6P1JObptPJ94Na6GtF6qHFbkW:ytaP1qKJFPW0e2N3dnY3WUzKRzUXrIY1ZCU6Pj45JXwtx0WOqLiWmoPUUmF5movUIGGO0xMBoiYHRGmZgRiwDUlNgGYo1BZahWOzRL5PgeWqM9cbz%FFWNstIPA9LRnU1kH2xQMwG%gNuyg3A5dVAwA0Dnmd:KOCGZiAW3EDADQOeJxhxN8ANJ56nphQDblC7EjMDbjIG5gfcZPA8sT:NA7gpwfOwqwZww3mTbwjghhPPMwRw0%nnNu0AN1gD0wJuStgqRpMAbvhTqDPghmxgNsAN1sC0gJsSTNtUgJsew2hTwA3bMDoKcEOGw6jJADeEFJoTcJM3MDnghtyJZwPcpAxsBuAmuFLeIMAN6uc2UwNufE%tATf1tQ7lGuDd7YHZMpJuo6oBN%cvXG5Etwm0gN1JNmAMeEytdVPle3t78CkZ3izKsFUqATdGTek2JWSPoHzAjfk1I:xZms0itUqk:f39%u8N94F6wI0aQrdZmAA3Pek2VQsav%ItkAr%vDQBiglOi6SmKDTg91czudo8efbpr%u4ddEH6Y%q:f2un0LF1zMsc18V3SYdRPaXh1zzNwPdZikC3NQELXQbDgndRug2vBK6DUpCt4lL6DYPJHQbodsI3Sau7DUCHmojdJsHErpNLzkGzIHQbbprPN2mTLPQbaBIz:87nRgOvrEnM:1v5GyBws3N:nQbqmKcngF0G0dOQ1NvqPWm2yRCNyrbfutEt8lGHzQwI90GszboSbdhu8XkRxkTcstNe7i4OriYPI3WAonqt0NKVr3pNtnUd2aiueg2WSWWlFQ1odtYOcmTWA1PR7cxsoPABtNtjAf:JrvQbQ4kdBuc0mib40K3KVGB6UXoNowSA6MlBkZLDJRqPNWgWFNQDYrFG:0idBuCEtHXGBO6DUKx6FkySug26xK6TS8DTohCt%liAHPbQug2BxK6DZDQbQgSuk21hG4jdJuEhG5zIKHbBCR0m3UJ3UboNjEJ3SYsodsI3aZMQrcBCq6UhW4TkNBtwhK6TURCt6loAaHbHEjoNmj5fUDoNg:q20joNkn5KVR8PcMy9wndBkQjdBtC3EK34WgBodsI3YZLQrdZk9BtEBK6TbmEbiN0G8zrKWWvEfBQG6HbPNBm0G2M4EPJm0e3WUKAGxLdZgo8z7ZH6Fm8PhMzMAXdRt2nkyiwH4Ok20xBeDItYO4e2LHLeapxxj4QZAocH0W38Tc6EwW%0cx9NnOodBueFqCyF8xi19YuzBzbOD4ZJtgCbQ0EN63g1tX26rlpPz16020K7gXGuDZGDek22yFlNwkde:6Ljgc83YZmIBi9b4DUGfzoHQ:aQCIkHrZKTfSxAR6pkTOx%eGm%Xfn5GmeW0xl1Q%noc50G5SBRPQ%WqI49LJcKkyhRnSbR7YIPwYwyhsIgnnM8Qx0m7wBh87lBx2ErJRF1opuc%u%dN0L3caV0G0qJHQbBo3fVqmUGBit:wFyeSXIP5YUEAAAAABJRU5ErkJggg"},{ name : "R_sfx_fire2_wav", data : "s3342:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAALAAAJygAXFxcXFxcXFxcuLi4uLi4uLi5FRUVFRUVFRUVdXV1dXV1dXV10dHR0dHR0dHSLi4uLi4uLi4uioqKioqKioqK6urq6urq6urrR0dHR0dHR0dHo6Ojo6Ojo6Oj:::::::::::8AAAA6TEFNRTMuOTZyAaUAAAAALiIAABRAJAVUQgAAQAAACcr%IbgrAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAApwlVQUwwABdBTu5x6AAAOExDCcAcAMCYjn7jBwJANAaCIWKgAIx78RF3:ZMmTT7GECBAhHiO97:F3f:u7iIiIiIJkwfflz8uCAIKBAEwf::g%D4P:4IGQfB8P:%:g4CH8u:DDDDDDDDDDAACRW2hRMsAth%RVGqWJjLvLDf4UOBBJGSAcUAtj4Hh4KDA%Gk3DWytA1oSYr9Z:l0tDt7mJ%KrQdi8iNo6KEmRGwaZczh7wEBSjwAxT%kXNV:b:%hQYko4whVGDiRtL:%1LEBQALkJ92fGGACXkV7zQwjoE4MJLHJZHFCyGIWhwSKLDsRVRpkZsw7CTJmJv:PvMm53zMlo5DGChAQSLRtIHQd2x::ra6cybfGcZUwOwLEwYrYpb385:O7dVNV9r0W%Xmq:l1wmgIAgB2OSSjAAgSwhg2ECiiUwB1U4AIzrFh6BibEsN%sohM0z8zvLHiCyQmZ6Td4pg7DAWoAVb0F9u9:7uIAx:n67OlRZJV3Wts:Xea::6kD3P5aoxOqTxl%i1ib50dGejMgXHihNRMmf:7UsQFgAvI7W5EjFbJeizwdDCODOJljAZZeXDRMy2Vdr5KEWtOQ5tvHMLM%ZHKRFb2XWTjPimvGK0mNkDGqY1X7fmfrujsS46AroXdzahfXx%l7UNFM1ReS:mzKYu5F3i5vRL7f03W2SCqk2567LcIUIuix1hMgtVwTkQG6SCIoGio6WLDNZ:aZIseXzesbodvzM9W4SuT94d::8vJLf0JUgJ7szslJRSkxlBfzT7:9pQo:cn1jOCa52JOCXlXAnGD0ZlizikAAElM3G1GTUlZ::tSxAUAC6VteUGMVeF5tC6kMQ6Us0MOQYW7bOp5EdXLoo1USLIjNlq%heq55PYYQ89VYQ6iDjbuMwoTjp2GakfMvX%OShAVz%q5ICcuJkaiWc:7kx::TSu9bolHIhN2UYOu1a2sUdUmAARyzWIEnSMITqwnMUJMG9FqVgIqENQLmoDOzu3:J%ZVrp1kGqByyOhD5SJ%8::L6f5HXcgySoizMLChiF0Mlbudn8L797JsoSbqaQ%k%rWE0UuZ6f2f%ZZlWcjcZYQQAMZTSTHDowD:%1LEBQELkYd1QYxX6XecLQyTDTA1BVQT4IOI0xbxhSIx5qzctbI8:::f1%xyumcHFt1lMS2Utbh7f%cnC5aCBociYRrSrZqb3t:8:mWff5qCVMEcqa1VMok17:t:VnecwOHL3oKZ0whNJsUjbygekGRQMgNwg0ccQIpskjwPJn7pSD4SXEmzHlXvbsSBmR7l0oxGZB%AeswpUj1%dpbPWcRkRtNoyeCIh%8Ev7iqq0EgCIQ8GGqExpNBPZDL9Zc4SJomwCqAyiTRSYoMQsYY6P:7UsQFgApYl3LhiHRhURku6owwBERwRhQMP62yIEJfeOCUuG98zyOmjREbvZa9DQharRiKu1hIER5wBC1YuXUEoat6yiA%GYOjBWk0ETTTzW:AhAegiF20JLOGoxAR51ttuQaMyoMzZrJtmeHpR2sDaQ8S:l:9bRl21eMrzJH7Lltrf::y%XOEXrSyCEJCINJJ:MC0JhxALiQDhtwmBU6eMdg1ohFoCc4CvFpW9njVDQAAAAKRKVLce0sYkFx0qxHtlongXJh0%JDp8LCwaD8Y::tSxBAADmWFZzjEAAlMj%0bkjAEaKvTHyHA%LWV5eL4GKjpDQLi4oKMs8rTeyQvQvU1:PbXM9oMfz1iNFq7%e7dreNS::6abdZ7iPSYn:::u::ZdqqYuOeOKqCY:uYjuWSWU1jy8OCAHHVWEeuNKO5whLrbKU1L4h88qJcdi5dT%333MuqaRSlqKGBsJE84OAQLVEwcxxp77aVhYHA8kCFT1ZVB3vkAZDgdAMVdSRFH0aRUVmCN2ZCZWuoAAY5:qsONS1MLNRD2nr5EHjEgQrT:%1LECoIKaJtpIwxN4TybrCSRiayoRj6X9t46J2NuRbom7O7N8%zJBgiGDkQJWsHSYaQ3SWAAoucQTIEzQi34Za4mtN7hRpizKNeG0E6sA2sdhgBkMQU6geeK41qqozrLZ4kQSYAbzoU2L:p2N04puxc0XVjOFJ%2pau62MmKYWiGl7:5WSqROGzgiesr4rFhNaJgSKuFQVbxSpWIU9fsasQ1utPQHHBJJQ7AgBKONoRlUGll4%kj2Zd:b:liQNRYwVQ4MYgq1KZVtvs7yTFqyP:7UsQXAAnYpVAGDFLBUhksNoYwBIhscRPdyFIJi4nDTxqCrPUK3w0og:%hSWijSetX%9CHpIQSBc9Uz0crwVQzMo%x6qFLUo5G2i:Dp1jjHmXrmbMKP:PhLnBf:UVQFfb3Jv77kaVqomFUToUBp9t3YZER4ReYa:FwkOcgkVBaL0uusLA0FQnVUtUAAicAAAABTM7XfibY6xQCNSPbC4bVFRK4QkP7Eo3EATotrc7QEI6dtlfnwoJ1DlVhPM3eyKSPuqghqKVdQJ8:lK8hQH6u::tSxCMAE0lfMNmHgAF2nWl3DIAAVrMyH8rtYrr21BxLrSqrZhakdN:9Uzr63DrTq6K243NI:m%P:8eu:8%HjWI6pg0npBYdP3mcf:7%c:fz9bt8fvosGTNX1262s7tCtJrnlywATUwEQAAKBUNdE:Ls:q9AgAAhAwA%iZhAIOYiIBSdOHqMT9ClO4izOJyJohhMW2zCatBo411ra:D4xyUxCCMAgeipnNN%g0WNHjUFcRgfGBSPWVj:n:JgUVh4ci4p1u:ZGkARQtxClo:TRWT:%1LEBQPKjGDoPPMAAAAANIAAAAS:C5NBfiFHVHYWWRXYDAIlsy1eqeUcOJYSJaaRwGAWHEgqGhEMPIUegq4Ghh4r1PBUqCvEvyJU6CqjwKlQ1nf6zv%8Rf:ESn1HhFVMQU1FMy45Ni4xVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ"},{ name : "R_sfx_hit5_wav", data : "s5571:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAATAAAQUgANDQ0NDRoaGhoaKCgoKCg1NTU1NTVDQ0NDQ1BQUFBQXl5eXl5ra2tra2t5eXl5eYaGhoaGlJSUlJShoaGhoaGvr6%vr7y8vLy8ysrKysrX19fX19fl5eXl5fLy8vLy::::::8AAAA6TEFNRTMuOTZyAaUAAAAALisAABRAJAjkQgAAQAAAEFKp4qvnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAAnskVi0MwARgKDv9ykwA4AACVcOBgYG513AwN3dyBAgAAggg5MAAAABBBCIIAMBgMBhaetG::97uIiIiIi7uzyZMmmCAIAgCADB8P9QIO:5cHz::icEAxp%CByXB8P0CgUCgUCgUCgUCgQAAA4CTrWhagC0hNaJscHT4IpCCKM5C30GzQKNnWnUByggiBOwnadP80koHyjmmQo1:XzIohhEUZjvffU8hFFIQTMEiI::5dZIrJEYaVf::qzNHN21SoQAlDYAI05dhK3:%1LEBYALzNF1:LUAAWawM7yjit7iL61R8qVri7QZBLH5C1fECP1:QRRIYZtRSUdOPb5CYYq%xxUx0b7K:3chkjGdzSjl1n1FSnBkAvDGe4VCZOfFVNWttimhR7XEDQNAxMCORpa8xatUDNQLT2f2y3FrKi80JZonEv6lBUJ0TnD4RIbl:6C8jjmhw6FQGCO:q0Wh5P5w8cHlm:qb8rMHGIzeVRBm:oiE5thYxCfWXf6MP0%zn:3:2IOdd7qQKZ7B7hawALUAMBF:F66zRK2HUv:7UsQHgAv5lWfGnFiBhqdsuPaKyRDmKBmt09EdolDfWccuhZv%5IhaQ5Ab:0F:9FMLt%o6NRQQ:UpUJ9SlAQaN8xSmb:KQOfqVVAUDi:6Tn%UtnJ:Kiv9PJ9mR2ISpWKVGcIS4WB5IAJWBQAi9Neu4zFmv6JFgaN6x:es8EoXPfvjGP2stpY49:uoSUFmm7fhRC:4USL:ww4g7foKMI6dQEgc:6BnIc:8yod:zEPb6sk:6hVTP:oocAd:%5tW%LTIu%Esse:%KasdiqwUJ5onL::tSxASAC1Ebe%WoT6F7Km08o4tYhxx3EfGSw1IZZ9P8XhQFv%C6CseD1vPFQVQIQVn:yIVhDq:8oCOrfhgISLO:9F:1KMLV:zO46n%xkO36lZhxnCYrxQeHPGvDDqEqywdLDMSiEQh1AgAAFCkasFHMQldzoOief:qLxMf%hgXIaBeOuphFIgYG48M:RhFF5:%RBaGDPtOIAEAXIDhjfYaEzDPupYOFlV9lLCDsn9iv:2KJTXojFn:o4skxsBVXnKamH4QqW9vEWwRHn85Lw1::%1LEBYALySl75ByvYXgmrTxlHXhpJrVTBKDSr7b6hLb%cPgqAOI7:moAUDwaN%Y4CAcHFPzOPBBxCJ%Ehd1P:Q73T0M4FE1Od:oLCDZ:dUtp0Mg1hRwoyg35Uu1iyxkF1KRaO8Kgk4Ip2AFAGJDTSsDe4nUfktIDpPdPzBkFOFOYXT1HrAUQPu:6lhgE8frr5yGAgQb%xxIh:QeKgaBAaD::KL:Q5TRo6f6FEMT:nt%xzmDwlxwQHFoKDnveNhsNsYiT2qrqGJiDBgBQAgTJA::7UsQFAAtlNWnkKEvBRJWuPHAJwF7uzF2QjiQFuUZ:oeJAbjEYv%ihkLF:5EPQyEQxjfuGBgb:9Wb:UIDFjp:zT:8E6PY79CAYCUhFO:ocpT9mohxQZBATorGCDw0Lg%rCphTu1x1NuYKACAIk5cHTbIWMpPFBK3qBCv9BxAr:QgchmzPqcgVSGf53bMb0CCAsaBV2:PSAWa8QjBQBwKsFZ:i4gBcVSVYGv0DjSFscOfc02viA46oHhmIGAAHByRULKNkFqZpoKyqL:pi2W39S::tSxAyACoj1Z%alVgFOHm08gCJAQcKwNuYhHUpRAGmZ:1UYv%kfGCFBWQo1azjhKHEP:0Lqv9iIbqn9ZKnqLfLq9fxyltSuCTWVrfwoOJOKJpACAABQ423A1wsIq3wJAr9vP:ITtX7gPsAxb1wj04NwIm::75IfX::FOeETP:5Y5AwKx::ManXf:CTJQs1::MUg8O%BTGQQGCXo%Z%0r3fYLFp5yohZBgncsluBmhAREPMJA4Jv%UVA:%oUgAEZ%yylP:0dv8oUhm%xVCod::f:%1LEFoAKFSOX45RFsU2dsTwziT7%pWUDX6lVQIZz%UuV28xlKhwZ:WsCvi1Rk5S8sLv9uLWAnHo8uyJAIDyjbcg3exC4oji3t8wRCX:HwsRGC3mFlDgjf8Ipf6EYxS:PQSGFG:ov%ggGBHcrdTuHBIGsXCyBLLgdB5a1HAukRT4YExoS9v2e0MtJGRegLmACEmTIOaG16gdHpioqc4ZB9:4IJp6%imBNCnN:ocFVR:48LP5ijoEgNB:5hDJ:Qcz:4VV:0T:2f%9D7:qQdkN6Zf:7UsQigApJi2GlHFpJUKjsdHOJeF3bno5t%xlGKB6:QWmPuQeSAZSDloxbYeeqAuDDzVfscCpdv6AuEs108qRFIsB2d:oBEf%iDH:woYr:::uFEmEPfpCyKnpqp0%lnOjT91LX0phRcVxARuIydcUYCQ8u58IVm9hmTCCo2HNs1cv7hEMnTp3QHgBz:1EcHw2:ziAJ:8il:zkN:UDDBRRn9r8eBAK7JuCW8LLM5RgVOuQhpUXYcID2LDazUkvasKlzIReCQSkzgsFXtEZCkQ0m::tSxC0ACnCnc4WcS3FFjW20cxRi5IHV2ezdhCS1dp84kLP%NcVf:Oxgw3kDgPhrW4xrNAV2KsLHgGTBNQxA808ShPrAAnJASCQUGKj8VfWj023Xg04%sIEj7GCUNITSGwA4CAUN8MbX3AwHs1H6ICJtV5QDAASStt:JBwHA:Ht1X6pV3:oHRPkIAigpW%jp51cEqlVlVmBFVPV1b7EZBbGe:ODGxdsgK:ucxGxBb17EgEgCqAAAAACjYx1TQAoRCZvnhAD036kgSC5N6EcGsQr:%1LEOIAKJPdXg6xUgUKh6vx1ChhZ:UwkreRGMbzuDDGc35f6Fcxvu0xfRn:scr7u0h5kTsOOnIv6BTU0UYbFYviS7M%%e6NzKILTckodbB:ZhpDc2HuB:qdBYk3zkAlb0OF0EkVgR4VdzTA%gNPIH2BVyFlVy4OkjzG5lToZ9mzatoZpFFkTwTHLACjjSL0gYuCIHc9ZQ6oQcAEABjk3:DKsq0BJL8IpvqYKb4IZCt0bM:AFYxbSHymejPQ3IpDKXUXrMUp:qY48xyoaT%Slkf:7UsRFgAowX2ujmENRTaZsPFMIwDJ1uq:ehMs%EK8KwwDJKw0OPT7CVq1Td9s1QwEoIAKBUkod63BfJXjpgWYg:qHQ4n:0fEMmHaesyu3uchesUBnY7CQdAkgcSxLdYAQFk7RjCyBZDLd9oOmRzhCsUPp2FCzxg0UPHiRmzdS8k5c%K8cjCSTSUDXVqP5Ftq3iQ:pb7QXAWJj5iS1:4xNeAK8yAI::cBCaeNIDDIsTcPCIgIAKhh2UtDdLPoK1iwotSbtLKQCJRpoKpexwu5Ao::tSxFEAClx3V6OsUIFMFS30gI7elK0nFoytACKTjkDvaKxJtygMV9QMT8gdvghgxvX%o4USya:eDMzd4UVtacPl4Rl6tFixoTFjetZyP:::nd:2hQmIgdIkWhMG1gE4aAsBNCRtSemtTVojFsYSRNErurDPNUWVcokIP2VAw3ziT:ENf71Z8IPQwpZXnS6EEcdvcvpKCI1qyh32ZlzPNex06sfpeydFPpyCAKockWaNPkXFAhYRHsmKIff9XTUpMEZiAQZELbgGJuqBQueRs4n:%1LEXAAKfSlfQ4ht0UYibTBRiuYA9T1JCl18lBgsPH:YqeqfmBOHTVgBX1cgxm5Sv6Oe7ZHOz8qMi6DnRnZCOeyf2UGAYDtgEh1H2cSPqek2lhjKCAHACACGpbgGetidiTV:kBrf9XLA6hzOk4QW5f0Ex:czbu9MmnClpPi1NCpU7wzznpOaRDbL:ua8tzL:jen5TPI3IyJ0R:udBG7eA3hWMwv6tap8Bs4QApy3YC38PZ1pW45BYXDyN3jMTPac9eRGg3tw9Bh%iAjo673yzP:7UsRnAApJA1fjoFCpR6Tp9FSMuVxiMSb0oORF%mCjVhjvqId1Fq:8n%k%mJCZV1NkjWbzn2mcMNBvvvB3X0LAQQAUo1AGc%oXpM7lGEn:aAOEv8FkAFf4lJfpxrxXRxMyz2ry1lV29QyfDhoS0TSBPMsLaYoQ9:F:aI24PNlkiNuu3fUyYLtZV3UW6Kj91QEElfYrhfQYaCCaIugo5XWbJJgnALMX3sOeCVDKltnWRg4zd84Q0rvvcOJuiU:gNNMf4O1Zx:iO0O9IQc:KBEd9::tSxHKACkiVT6SEdElDl2l0cwz1H%HGJ3dmbm9TFW9xDnPQ724QUfkDhpk9UjEzN2nEJDfks1lxsgKG3xl4AbHFH9ZF2vXxG0iQpgPyO3iGfQmSle67SDJb3o2cbwIFkUc7P::IEeAQmfREoCFPXbMWYpbBnCiRglEQdTrygFAQUOscApUaMHjn7f:%1ff9aiAJ8lpsncjxDTsPKVsLcnyWrqMzIaOUtgsSRWVyoBDhITjRt3pQUJVX11deK8QhEAPjl2a48z:ey4fb1d5dc6r:%1LEfoOMrRksKTxYQVwWZMjzCpgDGlgISrSSqAuFfliUsROx%RdUikxBTUUzLjk2LjGqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjk2LjGqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv:7UsR%A8pwhwYnmZQAAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq::tSxLIDwAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo"},{ name : "R_sfx_item_wav", data : "s3342:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAALAAAJygAXFxcXFxcXFxcuLi4uLi4uLi5FRUVFRUVFRUVdXV1dXV1dXV10dHR0dHR0dHSLi4uLi4uLi4uioqKioqKioqK6urq6urq6urrR0dHR0dHR0dHo6Ojo6Ojo6Oj:::::::::::8AAAA6TEFNRTMuOTZyAaUAAAAALjMAABRAJAZwQgAAQAAACcrY35VfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAAmQS1gUxgAJkZVx9y1GAr3ve7a9evMBIBACAEAOEypLAgBwRCYYLFixYvXr169fe93AAAAAAPDw8PDAAAAAAPDw8PDAAAAAAPDw8PDAAAABAeHh4ekAAB3p3:%mBQMBQMBgMBgIAwCAAFjk%BgEAeBgdD14AyswPWg3J6eAIUgZFF4G:RAOKgahT%Bnh4ERQGXMAY8F:gUAgYwaAUNDFwGFCf%FiwfiDZIb6KGBuL:8rHSKnjhFjf%JTgVKs:67FrbZAHbbdbbct0z:%1LEBQALuCODvIGAOXOGLbQ4DR%srTMDfEgaXhRZKEkqqgweqqiJU00%oslCStVURZdVESqpp2qos3TTEDByyYGJVVQxKqqErTTDHLLJQqqqoMVVVBq6aZVVlktNFVSyyqtVVdO1VVpJGABJJLJJIaV4lFx%sJAe6h3jOkQR4A8QAliKRAjwnkEDyJZAjSZySDxBZhlIjwknkPIEQxGkSR4A8SRLESyRHAjyiCxEsGI8I8OQeYWLI0iPf:a7::u9f9z::%3%kH23G03BMJCNE::7UsQFgAvII3FAtSo5d4dutBUM5yYcHof1lVKiS4yzDTSRUklS5RZZxRUkVSoksKNMNNKlWEuUaaWY4qw2iy1LNY4kVRJksKLKNNKkkyVFFllFHEijaJLClmGmlCrCXLKaUUcVJNosvrYABLJbLJKwRwIar4Vg3:QnOCzEB8DBk8RPHSETxMCOkImD4EfNowfJARlhAZHgIyw8RHgICI8RHzaIj4cDNowQHwM2zxEfDjJ4iJngyePgZ4MGD4GbLzB%eDLzBCraxEAOOW227k1p::tSxAUAC6AjaaCjAWl7iWgYbpkZrlddrJAwe3ihc2KCoWLBxsWFiwaNiwsmzRs2PGzRkLFhs4VCx646aFk2SOFxcmyRssXJp5suPWDjYMLFg4bFhYsmjYuXGzRsbHjZoqFjx5wqFj3AAAtZsXUHrBDQiG5JZdQwlH84hB4ICdMCAImhxqEDQsxRA1MzD6h0A4ikRziCyNPAnMLNZyHkEaScQRLI8NXItZziCyNPAnMLNI5D2GUk8hFpHhgPIpM55CxFPAnMLbbGyEkFLtv:LWz:%1LEBQALbE97oYjUGWCRa2hqDpNjMsQboAgW%5JTm%8TzgAQ5Z3pM6L2pq7w40YiyUe5KtLM2yxNLVzvL2O5juxIJRRphpJKllmKsoospIklymOKsJZZTW0WUxxJvGWYqyixlNJfSAACHJLR603K2WlqNMHApi62Wp8ba8skiYjqDiwAoIqI4pq5szf%kckN9%UPCNZYi0yy0ykQI0iNZJnhnnhnh3sCPABI8CPJJHgB8OAPEDx4geImHiB4hRsLbIwG5JbbmieSJmiZo0TNE::7UsQJAAnoU22ggfIZO4ttNBA%Qv:g9xS0OkcnoElxRY5ZRYUWFCiwosks0s00s1r::7Gihppxxpxppxpxrm2G22G2Gm2G%c7zved53963%t6kkl1bAgu2:AxjGMYxjAAAJmMeAAAAB:7sgIJXGQrGR48iU%D4Pg%D4IcCAgCAIAgD7%JwfB8HznxACBx5:g%D4Pg%CHlAQBAED:lwfB8PqnK0kkgAG5bREIUIQhEIQhCEIQQh8WYQ440tUgYB6AZs7::::%QV:xgoKCgoF::6::tSxBeACjhRVaDhlBkwDChIE21hCgoKChR3:GCgoKCgUF:6QUFBQUKG::AoKCgoFd::FBQUFCgB:ASaaabTy4uLuLi4TQJkyAOAIbdhc4WADGRU%YfZbBETlE3Ur1LleoWqqppppoqqqqppppyBgYGBgkJCQldVVVVZZZZdVVVVZZZaG21sjASktuHv8QITxETruW7v6f:g4wHMfzjJNSHmdP:zwARHAMw94GfAEdAGQ88DH4AHQAwPH5h:ABwAZHH9D3gBmAjof0PPABGAB0P:%1LEJoBKOFNboYHyGT8K66iHsoPPDx8AAqtBAJOIiIiIlEIQgcAoHPu7u7v:Lve%45%gSwUB4YLGM8AAFP9RT:oo8FiKO9cAheCxFBXrgEJ9dXRXruyO7V%vXdy3angpNMbwaHxn41pqFBIAAABc3:GFEKmpqalpaWzASGQvay1:VcrmLdYL169fPo24LCnS%jhHaLDF1az6NYFYiBo9UDQdwaDuoGtQNHsRB3LA1wafiI9qBrg0:LHtQd4iDgUjRcwJgqMCd1WUqdK3oqAkDf:7UsQzgQqAW0ug5eUBUQmkRJ6Y4TA5LDkwxTAQCFRts9oJARSQKMCgUQgkRKTROLQROmCZQUSSHFZiqpIeSWKqlUVSWhLSiqRXS2Q2RTNzN7Y2b::%6hAw3%uU9eJOq1lOYuqCQaMJBZMvcaAqhmSYCImu0Imm%gc4IR6GOKKWyboYIBOQE4JkCZAmJxATYHmnGnGH6YYfbZY:xtmzqvr%r:77kej:vmpddjNm5kyqng4wCAI8GB4yYjTHioOm1Q2eJCUPA5A5UWoDhQq6:s6G::tSxD0DShhJEC7hDgFHiuDBzA3IXCkGAnEltqsFAUkRBUjDQikYaIzx4NWw7tUHf7577q%d::1PyvLP8NWADk6OUyGkOzw2EYQQ6FEVC8OBLFgeg2CUVDSNAdiAO5GJpKLoXA%CgTg0LDwSFhYXFRUVDJoVFRX:::8VFf:::wWFhYSG3CzRYVFRVhgKioqKqkxBTUUzLjk2LjGqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr:%1LESYPKREx2Ji2KEAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg"},{ name : "R_title1_png", data : "s1475:iVBORw0KGgoAAAANSUhEUgAAAPoAAACWCAIAAAB4uAJLAAAAB3RJTUUH3QgZEBMi17xVgwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAADrUlEQVR4nO3cXY6bMBhAUTbY:W%hm6hSTVOlUwjms7Ehts9RHzqMQ1B08TjkZ1kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA9x6Px92HAFd5:FFwqxYHA22VhSt3ulQwu2udXj3bzSp4mNx::vrx:Hf3gXCV3NzL1vof6FW53CdSkHvLw7nI98TlPhG5y30iE%a%6lvuE8nKfYCF%zZuuU8kN:fGh9PW27LlPpF47qZ2ujdP7qZ25C73mbwKPkx5vNy1Pp1g7gXvNfgopna%xHPvt:VF7jx9j3gv6N6n9kXuPM2Qe:XWnSe9knutHdKB4XPfS:Oy3J0bH%Qw9:iVys:UYtUu917JvcoOK46nlW3Bqy2Rpc6Hkzt:zZn7lSuZ83dHNcPnfvvC:fzdUUd6pZ74f0davE:G89QuDZ97o:eEyb1L6avsi9zDu601mFYS%b59UWmA3LU%r6zce2x9kTsvWW:37TH3Rt%uIff%5H5wSe5l%5H7R4jkHhz:%F96n4mR1T8%0uJ7wlxx71Kt3Ld:BIIj3%7zNSZ4:qTJnS%RhiK5xyfpvXAPR54p:vALfgtalHt:KuYe3P:hVaDimyc8U0sEd03uq3%598gpwXTO5L76VXqGbpp7WdAVzxB93yneTd3cs46n7uxedpNa6x%536l4HRxfu2:H35J7YpKObK%Su9ZvVjf3JfbENP48dW977mGnV%17bwn%PrUnbhtfhcv9Tmcu6qVn6K23Y9JbEveVdeRlC5LV1H7mL0B8AA01yj1rJ2UX1OODixckBTcsyN0JcJEzF7CXTt5EsJqV0wuS7cb0rba:Srfb4lNUhJyPtYvcV7KuJ0YW5Wdyd9H9OnKP:zYr98QZ4gWme9Radp:fycWKX2ZqcTD0pMfcC2idLzPkrnX%kjsTkTsTkTsTGT53rfOP3JnI2LlrnbWBi5c7a6Pmfth64u3Ne5:5Kt6e%BBZ2ZtJKTTqoxzJfW9LIt%3Z0X6bEnfMH1I1DfeoxxZxlyQe3wAlxrscW%a%17NiTXM4QCuNtJDH8y9bO2%V2069:QAbjDGox%8IBPpe:Xjq9q3%e5tDw5YnXJcYYBHvHXuy9FsXTDNv:0RDsSvtSdSO8x9%f:Z5%H2vQHp%4WUrNeVtm1to8xa0ye2H:71sJIhm5dRmYXWmYjcmYXWmYXve2EWWmcKQmcKQmcWQmcKJnXG57t2GZxvlAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAj:QbgT3jxTRTwKMAAAAASUVORK5CYII"},{ name : "R_wizard_png", data : "s683:iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgYDzQtMgB5XwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAABW0lEQVR4nN1WMU4DMRBch6PhHTyAIhJfoMxFpKUGCX5ASUEdCih5AEXKPIKOLsoDqFG6SLksWmll1vbYvlwaRqNT7s7e2R2vfaEb93BU0n8UWI1OlYcLjCjAsuv096N7E4bDBO:ttzA1pknNNPDncwb3beu:XS8WT91tdGKkAvpbBH7FoUH0uMAn3WENTZ9D8xVEjwukkuVb35yS6BkBDaq3El1sudhtmXj6L1LtNXeNz910JpT2PSNSVrdpCGOLJP7zdaJXgKSALHWJLR:dC1IA1QFbDEGQ5EbjzWk86Qe0BoWNeM0nGkC0LnPS9TMn00V%4s%uMdTnuDhKWWRsuXIuG6hOIITR2ExnzCEFRENk%CrbYhgB8yXRUsBxWyeAMabXowgUpt9T4HwyKR98qEXDC0j65qM:pEAIvM4ZAdOjvvuFRVRUULW2RQLgD52gqIjseTu:dEr8MMo9pfpKkWjjuycAAAAASUVORK5CYII"},{ name : "R_bg2b_png", data : "s32174:iVBORw0KGgoAAAANSUhEUgAABAAAAABlCAYAAADTa5F5AABeCUlEQVR42u2dZ3tUV5a29QtmpoO7HYgm5yCUcy5VlXLOOQBCSAIhhAgSKAECJJQzORvnbLdD2%62O7hzmHn:y3rPTufsk0pVQgbhXh:uq0qnThXu%TDXte7zPGv7JaVOAcGRopA2zZlVmIFkQvqswtwTkZQyCQnuMYh3jkBc8hDEOq5AdOIliEq4CJHx5yEirhfCY7ohLPoshEZ1QnDEKQgK74DAsHYICDkG:sFHwT:oKOwNaoE9gc2wJ6AJdu9rhF3%h2Dn3oOwY88B2LG7HrbvroNtu2ph685q2LKjCrZsr4TN28th07Yy2LS1FDZuKYENW4phw%YiWL%pQCEfXt2QB%vW58LaDTmwdn02rFmfBWvWZcKatRmw%tV0WLUmFVavToOVq1Nh5Vq38uqCV1Ynw8qVybBiZRK8vCIJXlmZqLwKEuClV%IZL8fBiy:HKsQwXopWiIJfvhQJv3yREMEJh1:%Mgx%8ctQ%MUvCCHwguAFQrDKz14IZPycEKDjpz:fx:iZjD:89Kd7Tfzkp3v0:ETjf36y257:sWOXxG74b%XVkv%2Y6fEjkXxX:%93Zr:smMbgiAIgiAIgiDIfwx%Cw7vKAhQEKAgQBAEQRAEQRAE%c8QAI5UZehPnWGki8F:aYZ:IhL0AuAqFQAxOgHQpxMAIRGnNQEQ2gb7QlqpBNgbdEQSAIe5AGhgAmDPfkkA1MBWIgB2EAFQAZu3lTMBsLUENgoBsLmQSoB1G:Ph1Y158OqGXFi7PoexLgvWvJoBa9amw%o16bBqbRoVASsIq1ywYrUTVq5KVgb:JHh5ZRJ7XZEkCQAhAYQAiLUXAL8MVwb:ME4o5QXBL0I1EaDw818EM14QBMHPfx5IUYXAz2T2mSBC4Cc:26vnpwvwkz0LsFtFCIDFwyTCf::PTp1UIH9b8t92PA2BgBIBQRAEQRAEQZDnSAD8kNDhP3UKElMmIMGlTwAsLABOQmDYCQgIPQ77aAqglQqAvYEtJgHAUgBEANRTAbCNCACaApAEwLYy2EhTAEwAbFAFACGPJgFeVYb:NSQF8CoRAJmwZh0b:levTYXVyvC:ao0bVpHhf7UDVqxKVlCG:xVi%LcTAHE2AiBCLwBeNECu:SJURScDDKmAF7gM0JIB1gkBxj4tKUD4qb:P:MQqQfDTPV6IApEwsMGUJFg6fBcIO5dOIGAKAUEQBEEQBEGQH60A4BWCpNRp%vQ:0T0OCa5RiHcOUwEQk2SsABgEQORpCNYJgDYqAGgNgAqAZiYA9jXCTv8GtQbABECdJAB4DWCbdQ2ADP9UAijD:9oNufCqqAGsYwJg9asZsIqkANaS%H%KMviTCoATVq12KcO:E1asdsArKxmaAEj0IABiDAkAhV9G6PiFLhHAeIEipwKskgFBLBGgEqimA2R0MuBnZvT1AU:46%oF1ukBf42f7PUSY7LAOmmgSx3Y1hWegkB45ikE:H9yCIIgCIIgCII8KwHAh39SK1Cf:pP4v2tUGf6HIdZhIQBie20EQAcEhLZTAbAv%BgXAEeYAAhoogJA3gOwffd%2L5LqwFoewAqYJNFDWDdJpICKIR1G0QNIAdeFXsASAKAQBMAabBqLa8ArHHBSoUVa5ywYpVnAfAiQRIAv3wpWiFKQhIBLxr3AjB%8WK4PhWg2xVgTgao1QAL1P0BXiUFjDUC%3qB58TAPkt0ckDHXu:4yZ5F4KNAeFoSAWsMCIIgCIIgCII8fwLAOPyLp:9y:38QYpIuQ3TiAEQlXIDI%H4LAXAGgsNPQRAXAAEhx:UCINAoABo0AcBrAGwPgKEGsLVsAQGgpQDoHoB1GTQFQJYBkuF:5aoUKgBW0eE:mQqAl1foBcBLXADQ4V%XAIjVLwSkRNFEgEYk40WGTgjYpgOMyQB9OuCFXwRTaEJAQHcH2OFBCPzcQhxY7hmQCfAOVQ74P0EtwUeWSCD8ZNkKBKwxIAiCIAiCIAgKgB9s%Jej:%Lpv4j:2wiAOKMA6ILgyDMQFH6KJgACQ09IAqCVLwJsoQJAvwhQvwdAEwBVFnsASA2giA7:VABsNAoAZfhfn0mXABJWvJoOK:lJAKvWOmHVmmS6BHAFffqfbBAACVwAMAlAagAasfCSMvgzouGllzTEfoAXjQmBl7xIB:zSOh2gpQSkusALwRYEeSBQQkoTCAngoUKgSoOf2fGkNQQPLEuBgDUGFAgIgiAIgiAI8iMQAI40q6f:Wvyf9f8NAiCeCYDw2F4Ii%mG0OhzEGIrANq4ADjKBQDfA%DfaCEA6pgA2CkEgPUegPWbuATgAmAdFwCr12UzAbAunS0CJCcBrE5Rhn%Cix4FSJYBkj0AVACs8CQA4tV9ADpejuVIQkDhRZUo64SAMvi:KB8fSI8QDDecJmCxO8CUEghV0wGWvBBsuWhQVyeQ0wDGQV5KDMgJg595xJdqQoDHWoJ9IuGHEQiLkghYY8AaA4IgCIIgCII8fwKAD:%6p:%G%D9fAEhPAEi6BNEJAxAZfwEirARAhBAAJyFAFgDBdgLgEOwwLQKs1S8CpHsALAQAORJwYwETABuZAFizTqsArFmvDP%vptFlgKtIAmBNCqxY6aLLAFfQowCFAEhUKwAvqyRIxGu8EmcglqYD9PUAkQrQpwNeNKUD5FRAuIr17gBxukCIJS:YopcDnhMDQaa0ACPYmp:bYa4mWC819MTSCISfLVeBgDUGrDEgCIIgCIIgyNMWAMan:3Tzvxr:l:v:xgWAFgIgUgiA05IAaOcC4BgXAEe4AGiyEAD7mQDwYhGgXgDk8%MAuQR4NRtWk5MAlMF:LT0NQBn%X2VHAdLTAFa51ATAy6QCsDJJeU9ItEASAa8Q4lVMyQC1KmBOB5gSAhb7A1g1QNQDwvnegHDL:QFqZcACNvhb7RUI5qcOeCJEDx:2tRqCr:hQW:Cw28B3ieCrQHi2KQSsMWCNAUEQBEEQBEEB8HS7:3L83zWuDP98%78u:i8fAcgFQHQ3hEZZC4B9XggAeRHgtl31kgCoNggA:SJAAj0KcKN2HODa9Tk0AUB2Aaxekwmr1pEjAVOpBFi5hh0HuEIcBUhSABSHNbIIWEFIoFgmAyixNBGgEaPiTTpAlxCwSQfYIwsBi0WDVpjSAqFLiOckgpZIWAy%CoSgpRMIWGPAGgNKBARBEARBEOTHJADI0:949em:OP5vUBn%LyvD:yVl%L%oDP:kCMB%CI:xJAA6FhAAh00CYPsuaQ%AtAhwk24RYDFdBLhhcyGsowJALALMkxYBkhqAMvyT0wDocYCpbBcASQCoAsCpigAzDo2VBHMyQPAyJd4sBLgIeEklhvFyjIeEQKR2ogAlgmJcIuhJDlhWBzymBuS9A56xTyPw3:iFjC%CYCGCl1AiBC1ZCgFrDFhjwBoDgiAIgiAI8lwKADb8y0::R5Th:6oy:Iv4PxEAA6oACI:tg7CYXgiN7oYQDwLAP:g4FwCtXAC0aAJAOglAOwrQKAAqDQJAPgmACYB1G3gFYH2OQjaTAEIAvJpOJcCqNWwPgCYC3DwR4LQgmcGFgD4dkGSWASuMGIVAnG1CgEiBFylyTSDaIAJ4KuAlA16lA8K1WoEOrW5g%s4v5QWFgggbwm0I85JQD3WGpRIIzzqFgDUGrDFgjQFBEARBEARZJgIgMWVKGf4nleF:Qhn%xyDOOQqx9Ok:EwDRiVcgagEBEOxJAATZCYBGSQAckARAra0A2MAFAK0AbGYSYD3dA5AL62gCgCAkABcAQgKsTdUgOwEoLj2rnRqWCQGHISFgFgIvm7BOB2gpAftkwEsva7sCLCWAWCpoIsIamhwgpxJYEWGJ%I4t8r:rZX3hycWBN:sQfiwCAWsMWGPAGgOCIAiCIAgKgCUQAEmpTACIBEC8KQEwyAQAjf8PKMP:BVsBEBTR6aUAaOYVAGsBwE4CqJEEQIVBABTDxs3iKMBCdQ:AOkMKYC09EjCDk04XA7JKgAJNBAjcEi6GODLQKhlAIQIgyYD1IkFjOkCGCIGXdFUBrS7wIn3lFQE5EfCyIMpApC1sQGd7Bl70CjmBYNxTIPFylFk%vBixhCxHgYA1BqwxYI0BBQKCIAiCIMhzegqAVgEQ2::5AkAiAOgCQHECgDgC8Lwy:PdBWHQvhEbpBUCghQDYSwRAIBEARy0EwCFJAOw3CIBqnQDYtK2U1QDIMkC%CHADSQBsyof19DhAuQrARQBZCrguUyGDngqw5tV0ThpPBRiSAWtTFDQZoKUDnAw1HZCswywDuBBYZbc:IJ4nA%IMGEWAlgRQIdckdNUB44kDKuzaSwsSZYG2uPAleYmh8d9bUCQYag12PFOBEL5kAgFrDFhjwBoDCgQEQRAEQZYfExO3UQCQJYB0BwBdAjgKcfISQMcgROtOARDHAPZBaHQPkwCRZ7kEOGMhAdrAP6iVLwJs4YsAD7OTAOgeAE0AbOcnAWyT9gBsIhKALwPcKJIAm4uV4V%cBsCOBFzPjwRcx48EfHVDNkWkAYyJgDW0HpCmsTaVsYaQwnYGUKRkwBqWDFglVQX0yQBBEsMgBEwLBQ3JACIBTGmAlw3ISwUXhP2O8WQCGdPv66oI%msvS%j%HYNIsJUSXicQFpYIz1IgYI0BawxYY8AaA4IgCIIgyHMjABzpbPh3pE0rTEFS6qTChJYCoBJgGOLUYwCvUAkQlThgOgowlJ4EcJYtAow8A0ERpyEw:CQEhnVAQGg77AthiwCZBDhCJcAeIQH2NcIu:wYqAdhpAFINYAeXANtZFWDzNvlIQC4B6C4AbSkgSQOs28TSAHQvwEYuA9ZnUVgagCcCaCogXZcKoNCaQApPA:BEgMAgA9RkgJwOWJ3MUBMCDoUkik4IrExUYVWBeIsFgrE2mJMDVve89ArjZROxXmL8jv5vnax4OWYRWCcRnqlAwBoD1hiwxoA1BgRBEARBkB:rEkAqAVK5BEiZgMSUcUhwEwkwQiVAbPIQlwA8BZB4EaISLnAJ0MclwDkuATq5BDjFJcAJLgHaYB%VAEepBNhLJUATlQC7uQQgAmAHPw1gO5cA23ZWw9YdVbBlRyWTANt5HWCrdiqAVgcopJWADbQSwNMAohZAEwH6:QAUNRHAUwHrpIqASioVApQ1bhVTMoDilBICRAQ42L4ABfm9UQAwEiivWC0R1FUG7OoDcdrnEq94RZwlL78SryEExaJEQqzF0YjPQCAsSiJgjQFrDFhjwBoDCgQEQRAEQZaxAHBmGLASAIYUgE4CkCSAe5RLgKtcAlyGmKRLEC0EQEI:RMb3QURcL4THdkNYDJEAXVwCnOYSoINLgOM6CeBPJUAzlwBEAByCXXsbYCeRAHuIBKhjVYBdNbB1ZzVs2VkFm3cwAbB5e7kuCUAlAF8OuGFzIUWkAbT9ALnqSQFyPcAuFbBWnB5gVRGQdwXo0gFmGaClA:QygEkA44kCciLAZqGgR%JN11Z4un9BKWB9xKE5pWA88tCCVzyxRAJhURIhenmmELDGgDUGrDFgjQFBEARBEBQAPg:%BowSgIkASQKksSpAUsoYJLpHIcE1rHAV4p1DEJd8BWKoBBjgEuC8JAF6uAQ4yyXAGS4BTuokQACVAK3gH8gFQGAT7A7gVQAqAA4yCbB7P%zYpSUBqATgSYAtVAIobCtXIGmAUoUShWLYuKWIQ0RAAYOKgDyGXAtQEwEiFcDhIsAqFbBGTgUI1uiTAXI6QF0gKGoBMmo9wKGrCay0XChoWCxoSZKGKV3gDQkGZBmRsDhs5ILPAmHF0gmEZ55CwBoD1hiwxoA1BqwxIAiCIAjypAJAP%zPW6ClATSIBJhRmFZgAsCRNgGO1HEuAUaYBHAOQbxzkEuAS1wCXGASIJ5IgF4uAc5RCRAWdQZCo05DSORJCI7ogKDwExAUpgmAfcEkBdCiSwHsllIAO:doVYDtPAlA6wA7q9RKwJYdFbBlezls3l5GRcDmbUwEbNzCRABLAzAJoKYBDPsBtERAFmN9JoVVBDI01qVTmBBIo6zmJwnIyQBWFTAmApw6zDsDZBwqHtMCOilg:nyliSRLrCWDSCQkMeQlhjI2IuGVRScYlkIgxP:4BQLWGLDGgDUGrDFgjQFBEARBUAAYB3%XIJMjSwDKLGdGJwGSuQRISh2DpJRRLgGuMgmQTCTAZYilEuCiJAH6uATo5hKgC8KiO1UJEBRxAoLC2yEgtA0CQo7BvpBW8A8%QiUASQFoEqABdu09CLt4FWCHLAF2850A0l4AkgagEkCkAbaJNIAmAnRpgM35sEGkATblqomAdRtzGBuyKeqOgPVSNUBOBBhSAWte1Yb:1VbLAykuPWtc1jsEBFapAY7x1AH5s1WclZ6wlATS4kKb%1d4TCfYpxYs8VkgJC6ZQMAaA9YYsMaANQasMWCNAUEQBEGeWwEgD:%6od%SORVNAEwzeA3AkcpTAKoEGJYkwBUqAeIcAxCTdAGiE89DVEIfRMX3QmR8N0TEnYPw2C4Ii%lUIEmAU1oSIKwdAsPaICD0GASEkCTAEdgb3MwlwGFNAvgfhF17WRJg55562EF2AhABsKsWttI0AE8E7KhUqFDTAFu28ySASAOQWoDCBpIIICKAIKUBdPsBqADI4akAsSMg22MqgIkAXg0QiwIJrwrc1qyxwywFVspVggWQlxCaSfYAv8cqreBRJjisWWXPDy0Qnn0KAWsMWGPAGgPWGLDGgDUGBEEQBHkKAsA4:LttUAVA5iwjYwacUgIgmdQA0sYViAAYURiGRPdVSHANQYLzCsQTAZA8AHGOi1wC9HMJ0MMlwFlVAoRGn4bQyFMQEnFS4QSTAKHHITCkDQJIFSC4BfyDmmBv4GGFRtgTcAj27GuA3UQC%B%AXXv3w8699bBjTz1s31MH24kI2M0FwK4q2LqzkqJWArbxSsBWLQ2waYu0H4AvCrTaD7BeSgO8ulETAWspWQwuAnRpgHVyGkDsCEjhrywhsEa9lqKXBSbcBlyUhRIEqy1Y5RGn9t72dy2kwGpPJPuIw2eJ8GxTCFhjwBoD1hiwxoA1BqwxIAiCIMhyEQDy4J91zcC8gTnlPsIsxZVJJMCUwqTymxOQzAVAspAAbiEBBrkEuKRKgNik81wC9DIJEHeOSQCSAohm%wBCI09CSKS2DyAwtE2hFQJCjtIkwD4qAprBn6YBDsFunQTQpwF27K6F7btqFKph284qipoGoEkALQ2weVsJbOZLAik0DVDA2JwP6yl55kTAhlyLRECWdRqAw2oBDPkUAbE3QEWqDliyNsUSIQXkaoEmCjxJBLv7hJAw37dqQYHgjWBw%igRkpdOIixLgYA1BqwxYI0BawxYY8AaA4IgCIIYBIDHJX4ZVgJAGv6loT%FkG1kXrkuM6fcO6swA%7MGeU3pqkEcHIJkEwlwKiUBBiCRCoBLlMJEE8lwAUqAWIS%yCaSoBuiIw7CxGxXaoECIs%BaFRpArA9gEEhREBwKoAqgQIYhJgb2AT7A1ohD37SBrgoD4NsKdegUmAHbuZBGAioJqLAFIJKKfQBYHbS9UFgSwJwNMAm0UaQOwGkPcDaImA9VI9gAkAhm5PgMW%AOPOALpIcL1xh4CMF2LARMrCUHmQyjB8f7UVXosE9w8kDhaWCM9SIGCNAWsMWGPAGgPWGLDGgAIBQRAEWVIB4LnDP28rAKwG:1RblOE:e44zq3xnRmFa%b5C5pTym1wCpGsSwJFKJMBVSJIkQAKVABclCcAEQFQCkwDhMUICnKb7AGgSIKIDgsPbFdogKOwYTQIEhhyFgBCWBNjHJcAeXgnYvY8lAthuAL0EEEmA7XwvwLYdIg1QqSYBtvBTAjaLSgBPAmziSwKJCBAygCYCZBGwKc%wKJAtC1RPDtCRqe4M8JQUYDsEFiLNEr0oSDOJg7XK61r52jov8UI4eK4ueFNnWO4CAWsMWGPAGgPWGLDGgDUGrDEgCIIgT1kAmOP7esxSQHrqTwf:68qAr5CjkSaRmnONM8:InlOYVb43o4mAzCkFJgGcVAIwAZCcOqy8XoWklCFIdF%BRNdlSHAyCRDrOA%xSf0Qk9QD0QndEBV:DqLUJMAZCI8%DWFkKWBUB4REnoDgiHYIEhIgjCUBAqQkgD:ZCxDQqHCIpgHIgsDdfEGgJgJYEoClAZgMYHsB%HLAHbwOoC4ILGHwBYEbt8ppALIksICyfpNRBOSqJwcwcrR9AaIisCFLlxIwJgWoIBCsN2MtAtJ9gH:HUjqkm1GPN1xILFjLBl:xXSCkLEuBgDUGrDFgjQFrDFhjwBoD1hgQBEGQJRMAZIC3hz3h1z:t1z7XDfy5etI52rVrCvPKvUQEzCnMQiqRANlMAqRkcQmQMQ7O9FFITvMsAOJ5CiA2iVQBelgSQNQBYvQSgCQBQiM6ICSCJAGOUwkQRJIAoSwJEBDcDPuCmsA:6DD4BzIJsJcvCKR1AH%2HHDn3jrYQSSAAlkQuJ0sCCSVALogkFUCthqTAPJegC1yGkCrBaxXTwvIp7sBdDJgoyBXOkVAPk0g24BFWmC9N8iCIMMDcuogQ5UMljUF:lviJANfsU8Q:PAS4WkIBKwxYI0BawxYY8AaA9YYsMaAIAiiMTFxG::v8EMLgLTcG8owbsV1W9KUz8n3BOmEPD0ZJq4rXFPu5SIgd075nVlJBGgSwCVLgDQrCTCgcJEuBYxz9FMJQOoATASwJEBkbBdEcAkQHn0KwqJOQmhkB4RGnICQcCYCAmklgEiAFtgX0gz7gpkE0JIADdopAWoSoE5LAuxhEkBeELiNLwjcur1CSgKUqkkAeUGgthdAJl:PJvPOgHWbcjlaMkA%WnCdmhLIVv:2Fa%kwYYFWJ9pi21dwbbG8HwJBKwxYI0BawxYY8AaA9YYsMaANQYEQZBlJwDS824qQ:lNZSAX3PBIum7gv6kM9Zx8jUxLbihch8y868r35pXfmFOYVX5TIWcGUnOmITV7ClKyJhUmwJ05Dq70UYURcKYNQ3LqVXCkDILDfQWSXJcVLkGicwDiky8o9FMBEJOorwNExnVCROwZCI85TRcDUglAkwAn2F6AsOMQFCrtBeA7AWgawFAJ2KNWAvYrkKMC6yyTAHQ54M5KbUHgdr4gcFsZlQCkBiCLALIXYIOOAjOSGFhvQr9EUFQGBOus2OArNqJgozULigEfRMGSCYRFSATPewywxoA1BqwxYI0BawxYY8AaA9YYEARBnjMBkJF:CxjSML8QVsN%gUaWHfk3KEwEXFN%ax7S87gIyJlR4BIg2zsJkOi8BAmkDpB8HuKT%iEusRdiE3ogJqEborkEiIrthMiYMxAhJQHCpCRAUPgxCArT6gD7SBoguBn8hQTgywFpEmCfJgHoTgBRCdgtJQGIBKAigO0G2MqPCmR1ACkNICNkABcCKlvlxYEFKpaJAZ4UMO0RoFhJgoVZ561A2GgvAxaVPvBVICxCIjwNgYA1BqwxYI0BawxYY8AaA9YYsMaAIAiyrARAZsEtsCTfAsM9WTKFGtmW3ITsAsIN5f7rkJV:jZKRPw8ZXAKk53IJkDMFqZIEcGeMWUoAB0kBuAYg0XkREogEcPRDXFKfKgKYBOhSkwARMfo6QEhkO4REHDecEHDEQxKgAfb4H9RJgB3ihAB%SsA23TGBlaoAoGyTdwNIbC1RUU8O4EsDdZUBSQ6YUgObC6zrBMrwz8jXYTx9YEGWSh7YsnQS4WkIBKwxYI0BawxYY8AaA9YYsMaANQasMSAI8twJgKzC27AYso0UMXJM3NIovEnJLrxBRUA2EQEFRATMQ0b%HGTkcQmQOw1pkgRIyRoHdyaRAMPgTLsKyalD4Ei5onAZktxMAiQ4L7AkAJcAsUmsEhCTcA6i488yESAkQMwpCIs%CWFRJyCUSIDw4xAc1qbAlwOKEwJskwBEAhygewF2mkRAjVoJYFUAUQfQKgHqSQEqeiGwaVuxxlb5fZGOjWKZoBADm60o8JAe4BjkgDf4JhBy7VkygZDzbFMIWGPAGgPWGLDGgDUGrDFgjQFrDFhjQBBkuQuA7KI74Cs5VhQzclVuW3ALcqkMuMkgIqDwOmQTCaCQKSRA3gykUwkwCak5E5CaPQ4pWWPgzhzVSYDkVE0CJLkuQqLrAiQ4z0NCcj:EO:ogLokkAbohJv4cRMcxCSAqAeFUAHRAaOQJejqAOQnAKwE8DUBEwF5%QsCeALIckEsAf74ckJwSQPcC1PE6QI2uDqBWAviCQJIM2LqDsWVHmXpyAEOWASWSHDAsElSPF%RHDOqkgEwBZdOWQti02U4UaGywEwWekAWBaYHhE6YPPEmEH4tAwBoD1hiwxoA1BqwxYI0BawxYY8AaA4IgP7QAyC2%CzI5NuR6okQjj3LHgtsquSW3GMU3ld8mMuAGZBddh%xCkgaYg8z8WcjMm4GM3GlIz52C9JxJSMseh9SsMUgREiD9KiSnSRIgZYAKgEQnkwBkMWAclQA9EJvULSUBOnkS4JQqAdQkgCQB1GMCg49AQBCXAIFN4B:AKgFkMSCpAuzeaxAAu1kSgLKLiQD5lAA5FaBRztIBtgkBCWN9gAoCsU9ASg1sMVKkwywJCu3Z7Bu%C4R8a56hQMAaA9YYsMaANQasMWCNAWsMWGPAGgMKBAT50QmAvJJ7YM9dz5Rq5C:IHYnbyneIDCAi4CbkFt%AnOLrkFN0DbKL5iG7cA6yhATIm4YMVQJMqBLAnTkMzgwiAQbBkXpZ4RI4UgYgyX1R4QIkus5DgrMf4pN7Ic7RA7GJ3RZ1gFOmJEAwrQNIAkDsBAgWOwEaYW:gIa0OwAWAJgHECQGaCBCJAFUGUCFQqWOrSAjsrJCSAXopYE4K6NksLxjcakUxbCYYKwZbzFgnCRai0HsM1QSPFYUlFgiLkwhYY8AaA9YYsMaANQasMWCNAWsMWGPAGgOCPOcCIL:snjKQ%0iZRoHX3JW4o3yXcFv5vVuQRzCKgMJ5yCqQRIBBArgzR8CVMQyu9CFwpg1CcuplSE7RJICoA8TTOkAvxCX2sDoAlQBdUhJALAbsUFMAIeF8H0BYKwSFHmWLAUNaIIBIgOAm8A86bNgHcJBVASjsmEAqA:bW0VTATn5kIEkE7FCG:%2CnVUcvQzYtqOCou0OqNBkwA5pqaAFntMCWmJgs%kkgoUotmbLUgmEwiURCBuXUiBgjQFrDFhjwBoD1hiwxoA1BqwxYI0BawwIskyYmLj95AKgoPw%qJQtQLmeQp%4Z%Cu8htCBggRcBNyS25ALpEAxTwNUDALWfkzkEmSAHlTkJ6r1QFSM0cgJWMY3OlD4EobBKeQAO4BthOA7wNISO6DOCIBkkQS4KxBAvAkQHQHhEp1APWIwJCj2ukAVAA0sn0AgXwfgLoTQBIBNBHAjwvco%0H0FIBtZoIUI8PrDbtDdDSAdIOAYqxRqDVCbZu50mB7caEgKDU4xJC7XQCa3yTBR7kgQ0:ePpgGaQQsMaANQasMWCNAWsMWGPAGgPWGLDGgDUGBHnqCYDCigfgK0VeUqxyH4orDVTcoxRV3OUyQBIBJUwEyLWArIJZJgF4EiA9exzSskYhNXMYUjKugjt9EFxpV8CZekmTAGoSgFQBJAmQdA6iE6xPBiACQD4eMDhcTgK0QEBIM6sDBIulgPx0gACSBpDwP8CXBO7nFYF6dU%ALhUg9gXwkwPEKQLbd1cbdgdUaSJgx0JUWJw8YKTMks3bFoNNykAcbyinDrYuhuKnIBGeL4GANQasMWCNAWsMWGPAGgPWGLDGgDUGrDEgiM8CoLjyIQiKvKR4AUoIVTIP7KFCgIiAO1BUfhsKy25BQdlNyC%9Afkl1yGv%BrkiL0ARALkT0Nm3hRk5E5Aeo6dBLgMyWIngEgCOPvoPgC2E6CbSoBYkgSI64So2DMQGXuaJwHYUkBLARB6hO0ECJF2AqjHBB7STgjgiQAGFwHqngCrVIAhGSAdJ6jtDqgxJAQ8YZUeYHJgy:YKiXL26kPFQGWb510ET06JLctTIGCNAWsMWGPAGgPWGLDGgDUGrDFgjQFrDFhjQJa5ACipegSCYhMPLdEP99r3SwXVRh56RBUBFXepCCikIuAmFJTegLyS65BbPA85RXOQXTgL2QUzkJU:BZn5k5CRNwHpuWOQlj0KqVlCAgxpEkC3E0CTAEQAxBEBkHgWYhK6ICq%EyLjTkNErCYAwqLaITTyOIREtEFI%DEIDm:ViQCWBmCVgH3Bh2ktgEJEgJAB%3g1gB8ZaE4FyMkAkQ6oZckAmd01FDUZoKYDGGqNYKdALwS2yuywwCAK1L0D231h4XTBwp:7cvrB4iXC00ghYI0BawxYY8AaA9YYsMaANQasMWCNAWsMWGNAlp0AKK1%DQQlyrDuDaUWlAlqBK:pKJepfaRSVvNQ%d4D5TfuQ0nVPSiuFBLglioB8iUJkFM0C9mFM5BVYJAAOVwCZF4Fd8YQuNKZBHCKJEDKBUh0n4cEFz8ZIKkbYhPPsX0AQgLEMgkQEXOSi4B2heMQGtmmEwGBYUcVjkBAKE8D8FoAWQ7ITglopAJAxioVwNhPhcBOf36KAGfH3jqNPRpaRUCfDtBTbWKbjCkxUK0M:jJGYVDpM7bJAd1iQyEayhfBj1sgYI0BawxYY8AaA9YYsMaANQasMWCNAWsMWGNYXhw50vn8CwB5SC%VqbaAf1ZmARvszVTUPtZTJ1HLZUANSQKQSsB9KKm8x5MAt6FIlgCl1yG:5BrkFc9BbtEs5BTOQHbBFGTlT0Jm3gRk5I5BuioBhsCdMQiu9MvgTLsEyakD4EjRjgdMdPbxxYA9VAJQAZDQCVHxZ7QkAJEAMR0QFn2CLwZkaYBgNQ1wVKoFtGi1AJIICGInBRD2CiEQKHYFiH0BbGmgLhmwd7%Onbp0gKE2YKgOiD0CdhBhsM3ILg5JDeyqMWBfN7BMEZgw7yTQLzD0IA%sJIEnnoZAWJREwBoD1hiwxoA1BqwxYI0BawxYY8AaA9YYsMaALCMBUK4M5YIyQs1jywFfBx3cH%swDveVKq9DZb0V5LPXlHsfKd8laQAmAUqrWBKgpPIuFIu9AOU3obDsBhSoEmBekgDTkgQYpxIgLXtEkgBXJAlwAZLcRACQkwF6Id7Ro08CxDMJEBV3WtoJcFKtBZDTAUIjmAigJwSINECoRRogmO8H4DsC6J6AgEaOSAWImgATArv2yccJ8qqAmg6QIQkBzh4DRAToJEGtxX4BiV0Syt:bdEiyYGf1Iqi0hA76xmqCcV%B1wsPl0AgLEoiYI0BawxYY8AaA9YYsMaANQasMWCNAWsMWGPAGsNzJgAqlAFdprz2ddNwbxr26ZCv:55x0K9SeQOq9jOqJar2k88eK:e%JomAh1Bew%oApUICVN6BYjUNIEsAkgSYgdzCacgpmILs:AnIyhuHzNwxyMgZgfTsYUjNvAopJglwkUkAVz:fCdCjLQXU7QQ4o1YCSBogjFcCQqOOQwivBARH8DRAOJEA:KhAkgYIFksCpUWBaiJATgUcgj2BDdriQJIMCDhoSgdoRwsKJBmwx0i9LbRCYMVuT9jIApv6wTZLqq2XFe7yJA%sFxxutaVyySTC0xEIWGPAGgPWGLDGgDUGrDFgjQFrDFhjwBoD1hiwxvCUBUClMqAzDE:o6yyweJJvHPKNg371AUbNgTd1sOuvMxGwX4iAR1BR9xAqah9AWfU9KK2%CyVVd6Ck8jYUV9yCIpEEKLsOBaXzkF8yB3nFs5BbNA05hVOQXTBpKwHc6VfAlXZ5QQkQQyRAYhdES5WAyBh5L8AJCCNJAHpUoGFBYJjhpAC1FsCrASQVEKwlAqyTAeIUgQZ1ieCufbIUOKhKgZ2CvUbELgEtMaDtFvCUHiCv%2G78l7DC1Gwq9YLzHsKtqk7CjzJA7mSYMGSCYRnnELAGgPWGLDGgDUGrDFgjQFrDFhjwBoD1hiwxoA1hh9aAMiDu68Yh3yrQb:mIKPWgLhew0VA9f7HUEUkgBABtQ%hrOY%EwFVd6GEJAEqb0FxxU0oKr8BhVQCXJMkwIwmAfLHITOPSIBRKgHSsogEuALu9MvgSrsEztSLkJxyARzu85Dk6oMEpzgeUK4EdNFKQHScqAQwCRARLe8FaIeQyOMQzHcDaJUAbTeAEAABEmJPgEBLBhyW9gU0qvsC2M4AwiEmAji71NqAwl6ZAx4w1gk0dhD28Ff1bxtR4AGv0gTe4LVMqPFCIiyNQNi2XAUC1hiwxoA1BqwxYI0BawxYY8AaA9YYsMaANQasMSwkANjTeN8xDvjmQf8tqG1g1Bk5xKhtIPe9oXzvdeW3Xld%9zFU738NquofQWX9Q6isewAVtfehvPoelFXfhbKqO1BaeRtKKm5BcfkNKCq7DoWl16DAUgJMWEiAQZMESHL106WARACIIwLVOoCUBFAlQCxbDhgefULdCxBC9gKEEwnQBkFhx2gagEmAo2oaQE%zuitApAPUnQGB8s4AOR3QCHv2HTLBxICCvwyXAhzj3zt1HNBjShPYSAIT9faocqDOlu0ePtPuWSqBULt0AgFrDFhjwBoD1hiwxoA1BqwxYI0BawxYY8AaA9YYnpMagx8d1Dk1Ot60gH0mf0cM%daD:ttQb0Ujh:7NRUCDEAGPofrAa2YRUMNFgJAAPA1QXH4disquQWHJPOQXz0AerQNMQnbBBE8CjEJG7giXAEOQyiWAM3UAklMugsOtSQCSBKDLAUUlgO8EiDEkASJ5EkBXCRDLAakAYBKAnBIQFKrtByCpAPoa0kIR%wK0ZIC2N0DsDtClAgK5CFBPE2DsJuyTafDILoK:HVKSwBtRsMcO6:0EHkWBvLxwoXu9EAZPLBB2L6VAwBoD1hiwxoA1BqwxYI0BawxYY8AaA9YYsMaANYZnW2Pwq2t4GzT0A70R:YD:Nh3wBXZD:n7KOxqHGQco:HOaCHhT%U0mAmp1IuARVMlpgJp7UK6mAW5BCZUAN5gEKJ2HgpJZKgFyaRKASYCMXC0FkJo5KNUBBiA59aJ2OgAVAf30iEDTCQF0OaAxCSCWA4pjAo:TFACrA3DCWlVIPUBOB2j7AuSjBOW9Ac3gH9SsnSZAhECAXBfgBPDKwD6ZQ7bsNrBLSAEZIQMWkgQGdtpinSiwFgVimaH5%o49i0ggLJFEeBoCAWsMWGPAGgPWGLDGgDUGrDFgjQFrDFhjwBoD1hh%qBSCn:Yk3kfEU3x5uLcc8mXehQNN78JBGS4CDlBR8Jby20QEvGESAVWyCKAS4A6UVd3mEuAGTwLMQ2HpHJcArAqQna9fCsgkADkikC0FZEkAthjQkXIektw8DSAfEyiWA:K9AFFx2nJAckwgTQFEscWAYi8ArQXwVEBw2DFOq4pODIS2aikBIgOCj:BkAINJAI29gU2W7CEEHOY0mthNX9nnu:nflhAx4M:xJAr8F2CvFZ73FOxcKmzEwrMUCFhjwBoD1hiwxoA1BqwxYI0BawxYY8AaA9YYsMbwLGsMfnRYb1wElkP%u9ZDvqD5XWhofs%Aco2LgINcBNQ3vgn1h96AuobXobbhMdQefA1qRBpg:0OorCdpgHtQXnMXyqtvQ1nVLSgVdQCSAiidg:ySGSoBcqkEIEcEjkEmSQLkaBJAlwTgaYAk9wV2OkAyOx2A4uiGOL4XIDq%C6LiuAQQiwH5CQHhfEGguhuA7gdoV2VAcPhxmg6QEZUBJgEYAYQQLR2wL:gITwYw:IMEBjFA5YCAi4GAwzo0QdDEEULAwD6BB0kgiwIv0CUIvIUnCEQlwRMLpw9%SIGwf3kKBKwxYI0BawxYY8AaA9YYsMaANQasMWCNAWsMWGPg%JFhnXLYB5o8D:kHTUM%41CL4H1K4xHllaBca2hhMuBg8zvK7xAR8Bbsb3wT9h96A%obXoc6LgJqD7wGNTQNICSAnAS4DsXlvApQPAv5RTOQVzgJOQUTkCP2AUhLAVOzBsGdeQVcXAKIvQBJ9HQAkgTgOwEkAUBSAFF0HwARAKcpEfSYQHFUoDgukO8HoDKAVQRCI7VUAE0GhGsESQsE9TUBeZmgLAVaLPFX2BvYIokAIzwpsBAGQeCVKPAaIQ8afMK%kuBhn4EP7Ny7hBJhz:5lmULAGgPWGLDGgDUGrDFgjQFrDFhjwBoD1hiwxvCfW2PwI8M6pek964FeB7:XZsCntJgHfcoRNvALDh:9QKXxKLmm3H:kXeVekhJ4R%Ft5d97i4qAAwYRQNIANfWPoKruPlTW3oMKkQSovAkllTeguOwarQMUlMzwxYBTkGOXBMgahJTMK5CScRmc6bwO4L7IdwL0cQnQY5AAog6gVQLUBYGxmgzQJQMkIaDVA9ql9%I4wTZ1j4AuFRByVAdLBVjjTwhaICmwEIYkAZUBHkWBgX2HLbEXBoe8YpeX95m%55M4WJxAePYpBKwxYI0BawxYY8AaA9YYsMaANQasMWCNAWsMWGOwx69BffruJfT%9:XDvc2Qr:GBbuAnNLV%KCGuMxFAZYAsAg6:BQcOayKg7uBjqD3wCKrrH9IkQGXtXaggSYBqkgS4yZMA81BUNgeFpbOQVzwNeYVTWhIgl0mAjJxhSM%WFwNe0i0GdNAkAJMAJhHA9wJEqwsCOykiFRCppgJO8VTASS4BGCwVwGAioF2qCRznRwrK6IUASwVYs28hQRDUogz51tDPAmUMCQJbUdCsDP522ImCw:bsa7TEJA4CfE0f%CYcnkwiPG8CAWsMWGPAGgPWGLDGgDUGrDFgjQFrDFhjwBrDj7nG4Edj%C0%4OWA73ng:xCaj30koYkAJgNIQoCIAC0RQGsBh1ktgOwGEBKgZj%RAPehsu4ulNfe5nWAG1odoIwtBcwnEqCISQCyGDArf4weD5iRfRXS%ekApA5AJIAz7SIkE1IvaIsB1TSAthxQnBKgpgLieSqA7gjolGoCFjIgugNCoyQiT2hLBKVkQFC4oA0Cw2SOKcN%KyP0mAa:xiSAPf4qR:RQCWBMEJhRpUGgJ5q9oEmfMvBRFsh1BF:uNVcZlqNAwBoD1hiwxoA1BqwxYI0BawxYY8AaA9YYsMaANYalSyH4keGd8b4HPtCwHO4FH9pChnwGG:pb2ggfs1cuAZgIkCTAESEBtErAwcO8DnDoMdQ1vMYlwAOorL8HFbV3obzmNpRV34LSKlIHuAZF5fM0BUBPBiiehlyyGLCQSIAxyMobhazcYb4TYMhwRCARAWQvwEVITjnP0wD9aiKAiIAEh0gEiHoAXxSY0MmqAeTYwHhyYgA7NSCC7wsIj5ZTASwZwETACUqIlAoIDhewZEBQmERoGwTaIMsAK:Yp%FsRdJQJACoHWrkMsCDY4m%TTNBYnChoWhDLSoK3NYVFJBOWTiA0Yo0BawxYY8AaA9YYsMaANQasMWCNAWsMWGPAGsNTrTH4LfTkXuNDhnGw1w33Rj4yDPza4H:kuIR6XXyPCwVdEoBJgAYhARqJBCA7AR5B7cGHUF3:AKrq7kFl7R2oqLkN5dU3eRKASYCislm%E4BIgAlWBygQVYARWgVIyx6CtKxBSOU7AYgIcKdd4gsCiQi4QNMAdEGgqw8SRCIguQfiHHIi4BxPBJyVEgHGxYF8eWC0EAKntHqAXBGIIDLASggwKSCnAoQYUBMCYccM6QAz%6xQBn8dIfLfcoqglUsCOVFgIMgOo1RoWTh14FWiYPEsvBDxySXCsxQIWGPAGgPWGLDGgDUGrDFgjQFrDFhjwBoD1hj%s2sMfs2tH5kHeg679hHjGEM:1H9Mn97rh3srDAO:wtH2TzjKe6MI4BKgmaYBNAnQ2PIOHOIS4MDhN2B:4%tQf%g1qD34CGoOPIDq%vs6CVBWJUmAsnkoJBKgdAbyiqcgr2iSCoCs:FHIzBuhdQCyGDA9h4kAsRzQTUXAJXClaqcEONwXwOEiiYDzkOjsg8RkrRqg1gO4CIhNMNYDungi4AxLBCiExxBOMVQZcFKtB4REdrBUQCSTAcHhgnYIDmtXhn7Bcd37QIKHlABLCphhIqDVFjUtQIWAlUSw%J6QBXZYSgFPtHiBlECw23vwRPWFZSQQsMaANQasMWCNAWsMWGPAGgPWGLDGgDUGrDFgjWEBgeDHhngPKJ83K0N5s3GoNwzzxgHfNPDrhv5PoPWEhE4EfEQhaYAWIgGOMQnQdPQ9OKyTAG:CQS4BaBWASgCSBLjHJEDdHSivuQVlJAlQdR2KK%ahqHwOCkpnIb9kmkoAUgXIkeoAmbkjkJkzzPYCqGkArRYg0gBsNwBfEkj3A:RTEUASAfFiRwAXAbEKMTQRcA6iaSLgLETFdVEiY8nSwDMQGXOGJwK4DIg%DWFRp1RCIwkdjIgOCFExCoETuoRAULgsBxiBQgxwAgShBkLaJERiQBYEEuRa6DF71GSBN7R6ubvAmDSwEwXepA8WxneB0LJ0AgFrDFhjwBoD1hiwxoA1BqwxYI0BawxYY8AaA9YYlkAg%B2Rh:c2jsXwrrsmDfLqMG%4ZqRVGvqPnfgUjnVI6GQAEQUfKf:mR8p:y4fQ0vYBEwFCAhwlEuBtONT8liYB%D6AuoMPofbAA6jZfx%q6u:SJACTADfoPgAhAQrLZqCgZBryeRKAioCCcSoCMrkIECcEmNMA2n6AZFoLuMjTAEQCcBFA9wOIZYFcBCR282oAqwdExbOTAyLjGBGxZyjhVAacoRJAFgGhNBHACIkUsHRAcIREeAcTAREnIIigvA8K8wSRAhaEEo6b2EdTAkQStFPY8N8mXRdYpwv0YkGPbYogeDEIaaBd8:ckEHyqLxxdOoHwY0ohYI0BawxYY8AaA9YYsMaANQasMWCNAWsMWGNY1jUGv1ZlGCd4HNzb5QFfuZd:R3BMfa:JgFbjU35%Hxn42wgnfwXHFchrG792rOMTLgM%lkTAh3BElQDvQRMRAEfehkMtmgA40Pg67D:0GtQ3POIS4D5U7ydJgDtQWXsbKqpvQTlfCqhJAFYHUNMApBJA0gAF7ISALFUE8DSAUQSQNEDqJbUWkOxm1QBWC%iHBGcfSwMoxHEREMtFgJoIUIgSiQCaBmBECAlARQCTAWFyKiBSpAJOqoREyBiFgB4qBSQCrQg7YSEEGAFGwthrYKjF9zj2SQM7jOmDhbGuLHi558ALfBYIwUsnELDGgDUGrDFgjQFrDFhjwBoD1hiwxoA1BqwxYI3hSQWCX1uH:mm8PNRb0kEGdgk%xGtP8y1%o0Ma:DvY4E9oP:WZgvL%lJAB4h5ZBMgS4D1obn0Xmo6%A4ePvA2NLW:BoeY34WDTG3Dg8GPY3:iYioC6gw80CUCTALegouYmTQKQOgATAXNQVD6rpQFKpiCveJIvCBzntQC2JDAzhxwXOKweF8gkgHRaAJEA0n6AJFUEnKciIEEWAQ4uAkg1IKGbVwPO8WrAWYiM7ZIkQCcjWogATtQZCFMIpckARkikDEsIBEcQlL8V2HsbqBSwwCY1QAd%A2zw5%gkggEiCULbfcY2VRDiCUkQLHC:rSjwxI9eIGCNAWsMWGPAGgPWGLDGgDUGrDFgjQFrDFhj%DHVGPzEMC7T1mHHZ8rnAu0J:nFlkNdJAANi8BdP:Y:Twf8zOHH6cwXl:enPDDLgUy4DiAj4CFrbP2QS4PgH0NL2PjQfI1WAd7QkQPMbcLDpdS4BXoP9hx5BXcMDqD14H2r234Pq%rs8DXBLLwHo6QBz:JhAdkJAHj0mcJKeEiDSAGxJ4LCWBpCPDJRrAbIIcBEJoODkIiC5HxIcfRDn6OVpgB6ISexWkwBUABCoAOAIAcAJlwiLJpzRoELgtIQy%AsxEGEUBPyaRDAnKOKkRvhJSzEQaMQ45PPr5u:ZSIEwT7LADm:EAastBCwK3yoMT0MgYI0BawxYY8AaA9YYsMaANQasMWCNAWsMWGPAGsOT4Nd%Sgzfeo6b%Fy5rnCacdzqnpMW0M9%RYd7yunP6NDfcUah83PllXHiDLtOhQC:9:jJT6Ct42O9BKBJgPfVOsDhI%:wJIBeAtQf0uoAsgSoqL3N9gJU3YDSyutQUjEPxeVz9JjAwlL73QCsEjBKTwtII7sBVAkwCO70K%BSJcAlSE4ZAAdNA1ykaYBEF0kC9ENCch:EEwFAJQAjNrEHYkkSIP4chaYB4rQ0QIQkBCJkYrqYDIjWCIvSECIgJNI7gu2wSAxocsAaVQDIMsH4nbAOn:FJHqgSgcuAMC:wmD74YQXCoiQC1hiwxoA1BqwxYI0BawxYY8AaA9YYsMaANQasMfggEfzYU3h76NN5PvQvfJ8ZMdSfOKMN%yc7CV:Aqa4v4CSh8wt6TQgBIgPaTxMJ8KlOAhw78SG0tn8AR49:AEfa3pcqAaQO8CaVAA1Nr8PBw4:hAE8C1Dc85JWAe1Cz:y5U1fO9ADW3oLz6piQCWCLANg2QP65WAjJyRiA9exjSaCVgiEsAsRxQ2wvgSNH2AtAkAEkBqEkAhaQ%iKUSoBdiEnsgJqEHoglcBEQRiAgQxJ5Vhn8OFQB6wqK7eDJASweERnlHiEykRAThtIqWFPAWNvyL7wWHW%NJKNjitTw4sTh5ENbuG6FLKRHalmUKAWsMWGPAGgPWGLDGgDUGrDFgjQFrDFhjwBrD81tj8OuQBnM7Tpz5gtJhQtyjvO:8gg75AvWzTvYZHfK7yND:JeX0WY1ThC4uBOj95Lu:Un5H4fSn0H7qEzh%8mNo62ASgAiAo8ffN0kAtheAiIDXoaHpMRw8:BocaHwE%w89hPoGvhegXloOqEqA61BaeU2XBtAtCCycNB0XSE8JyLoKaZmaBEhJHwR32hVwpV6GZCkJkESSAC6WBGB7AZgIiCeoMoDVAkgigFUDuiGaQCWARiTFIANUKXAWwlU0GRAa5R0hVkR2%pYYUJMDFkifBUXY3KNyypolEwgdPvFUBMIzTiFgjQFrDFhjwBoD1hiwxoA1BqwxYI0BawxYY:hx1xj8yDB%UgzoVpDP7ZAG%5O6p:kE7T469NNh:9dw%tyv4QzlK:7K0AmBLp4IELUAWgnQSwB9EuBdaG59x7QcsKHpDb0E4MsB9XsBbtMFgeXVN6gIYEkAfkqArg4wCdkFE5CVP06PCiRVgHRTEmAI3KISkHYFnGmXbSsBTAQoOIgEUEhiiYC4xD5DIoBIgG6I4hABIF4jYs2Ex8gwGRAWLeiSMF8LtSJKIImCyDPKIO8LRkGgfWZOG5gJXlAW%CAQLFhU%sBHgbA4ifB8CQSsMWCNAWsMWGPAGgPWGLDGgDUGrDFgjQFrDMu7xuCnH7wN0Kfzv5b40iPqb51j958WiIG:%yvoJPR8DV0U:jdFyAD%GzQRQKoCn3ER8Cs4cUpLAxzr%BBaSRqgXaQB3pVEAEkDvGWuBZATAsRywAP3oFqtBNyC8pobpiSA7qhAUx1gHDJzx1gdIGeY7wWQKgEKVALQNIBCyiVwuC9BknsAklwXIZEkApwXmARIPs:TAP0QR6DVACIC%iCGyoBeVg3gQkDIgKg4IgIMxHZDhAoXAzFGMWAmjBMafVZPlKBLR4hKp89ow7%n1EGnXg54Q4SvEuHUkrE8BQLWGLDGgDUGrDFgjQFrDFhjwBoD1hiwxoA1BqwxaPjJT%HZk3htaD%tDO2n6ZN6DXadD:jnNM5IQ7466CvXyGDfpbwnwz7hrDL4n%3V06UTAsrvdJPfJCKAS4AuUiWQJMBJkQaQFgS2EQnwHrS0vQvNx96Bpta34fDRt6DxyJtMADQyAVDfIJYDPpCSALf5UYE3oKzaXAcwLwectNgJMAJpWcOQKqcB0gfBJdIABhHgoCJgABKJDNCJgPOqCIhN6leG:z5GQp8y:BN6leG:hyO:58T1QKRCRGyPJAK6lSFfYBz%u3UCwES04KyOUBtCdHJgYTynDiThENm5CHwRCB4WJC5BymA5pBCwxoA1BqwxYI0BawxYY8AaA9YYsMaANQasMfxn1xj8tCfwGmf4EK4b5tXPtGtndH9:TZ:sa0:3FciA3:O1OvSf6:0GzvVZc7b3GyYEiChQ:u1ONQ3wBZzu%hxOdYo0ANsLcOLUJ9B%8mM4fvIjVgto:wBayW4AIQKkNACRAIdoHYAtB6yXjwnUJQFYHUBOAhSpdQCxGHAacgunIKeASIAJngQglQDjcsCrkKIuCDSLACoARBrAySVAMoNJgPMQR0hiIoDJAE0IRAshEN%nDP6CXoiK64VIHbIQMBNO5AB9lenWkMSBJgNIUkDm7NIS5Q1dXuMxkbAk8sCzRPixCASsMWCNAWsMWGPAGgPWGLDGgDUGrDFgjQFrDM93jcGvSx7YpcGdYBrobflK9z06yPcR%IDf:w10K6:d:b9ZkLNUBpCkwK%ZCOj%Es6c%wLOcBFwsoscH2hYEHjqY2gjtYATH3IR8D4cPf4erwW8A00tb0GjWgV4nR0TSJMA1jsB7I8J9HRCgKgEjEKaSAMQCZBxFdwiDZA2CE4qAa5AcsplcBBoLeASrwUwGZDgFCLggiYCqAw4r8oAIQBiEvop0TLx:RClEBnfp9BLiYiTiNUIlzD%TYnpkdCEQJhHrNMEodGeYMO:kAthC2H67R9GHiwoEZ6pQMAaA9YYsMaANQasMWCNAWsMWGPAGgPWGLDGgDUG7wWCHxvUPUCe2vdKT%gNnONP9ungLj:Vl4b6nvMKF34LvecZPR4g99NEQJ%oB5CdASSNwETA6bOfw6mzn6kioIOkAU5:Yl4SeIItCWRJgLeg6cibdCeA%ZjAB1B38D49JlAvAW5CWfUNKK26DsUV16CIHBFYNgcFJbOQXzxjSAJMQlbeBGSqEmAM0rNHIS1rBFJVEUAkgDciYAASiARIvgjxlAvK8M9JuqAM:%cZiechRiJakKAQfx6idPRDVFw:RMb1mYhYiFiZXpoQCLMixhPdi4LKhlj%d7TEAqIhLMZOHJy1ZHFJhB9aIHQumUDAGgPWGLDGgDUGrDFgjQFrDFhjwBoD1hiwxoA1BoIfeTpviUVE3yq63933GwYZ3OWn%WKoJ4O:Qt:Fb0308s8EVBRwusl:AxcMai2AVgO%5BKApQFOdv6K0nHGLALoSQGiDnD0HWjiiwEbml%Hg02P4cDh12B:o0UdoO4OVIgkQPVNngQgpwPMQ1HZnJoEyFOTAMZKwDikkyRAzgikZQ9TCZCSeRXchPQhcKUNgZNIgNRBSKYS4Ao43JcpSa5LkMhJcA4whAxwGGWARkwiJ4ERrXKeJgJEKiBKTQcwImTiDMjXYvtVERCuo9cnwuwEQqxZFsi1hIgYCVONwb66YCsYvEkZPKlAiH4KAgFrDFhjwBoD1hiwxoA1BqwxYI0BawxYY8AaA9YYvBQIfurAbcQint9juN7T:1sGH:bFE:7eC8qAL1AG:X7BwHcmTFJAQScBqGj4mtYCunp:DV09X0Jn9xcsDXDuczh99jM41cUTAaQWcOZTWgkguwHIgsBj4pSA43w5oNgJ0MIqAbokgNURgdWkDkAkwA0oqbgOxeXXWBKgdBbyuQTILZqGnMIpyC6YhKx8lgTIIOSOMRGQPcqTAMNSJWCIJwEGWRJAiIAUJgIS3UQCKMO:i0mAeMpFiEtWcDBikzTI8E:fJ5L3jGhBwkUqA6IIhnRApEychOlaP4UJAfvEQLgdsXbYyQJp%KdI1QW1ztCnkxIR6u:12BNjR7clYUsqEc4uYQoBawxYY8AaA9YYsMaANQasMWCNAWsMWGPAGgPWGHxLIfjpnsDLWMTztSf1YuD:lnHhW8PQ:51u6D8vuGSmf%BbhioBfkth:5aQE2R:wNdMBPR9xWRA95fQee4Lypmzn6vVACIDiARQkwB8L4C6E0A9JlB:ROB%ekLAQ5YE2H8PqurvQqUpCXADiiuuQxGVAPNQUDoH%SWzkFc0A7mF05BTwCQASwJM0CQAqwNIlYDMEZYGyLgKLiIB0lkaIJmQOgiOVCIBrkBSymVIoiJAwXVZTQPEJ2vEOQSyDBjQEUNIYDARIMOlABUDeiI52jUmBCKsiOtfBN4JBDbk96qDvhARRlhKoc8SX1MKHiWCjwLhmacQsMaANQasMWCNAWsMWGPAGgPWGLDGgDUGrDFgjYHjZ34C:1uGLp7PB3zdfd:RQZ8ywNCe7P9OGe71XCBc1mOWAQYhQKoDdHfAbxS%gZ5%lgZQEwFkUWCPWBT4ORMBtBYgTgsglQCRBvgAjra:TyWALgnQ:IZWBzj0UF8HIBKg9g5U1NyGcoskQFHpPBSWiL0ATARoSYBJyMybgAwiAWglYIwnAQhEAoyAO3MY3BnDvBIwxCsBCimDVAI43FcgieBiEoCJAEa88xLEJRMGKLEOCTr8X6LEEBIZ0ZQBlSiZBMJFiQsmImXiPXHekohFCAQ24BvSCXYCwAvB4P2%g6ctEHqWp0DAGgPWGLDGgDUGrDFgjQFrDFhjwBoD1hiwxvDUUwjXrr:9gwgEv34yeFugDftsyDdG98%TIV%B:s2:ow3zfOBXh:7fw0XCFQ2jDLAWAkQGiETAb3gi4BuKSAScIycG9MoigCQCeC2g81NJAnwIxzo%gFZZAhx5m%4EoEmAw6QO8JjWAcjpADUH7kO1SAJwCVBWfQtKq25CiV0SoHjGUAeYlJIA4zwJMAZpRAJkMgmQkjEC7vRhiivtKjgVWBKASIBBSEphEiCRk%ASEAnAISLAIcGHf43LEKODiYHoJC4FEmQGVPRCgEmCSOW9ZwyiIOG8xTU7iWCWBsZEgi:CQV9v6PdSHDyBRIhdSomANQasMWCNAWsMWGPAGgPWGLDGgDUGrDFgjQFrDEubQvA7TwZvD:Rfso7uX5CGfHGvPMxflIb%AcofYGCQo15bSAqQf%tbChEBTAZoIqCbHi8oJwK%ZNUAuiNA7Af4FRMBtBLwET8d4D1oIRKg9R04fFQsBnxDOyKQSoCHUHvgAVTvv6%TAOWyBCi:DkVl16CwdB4KSuYgv3gO8opmIadwGrJpHWBKSgJMQHqOSAKM8STAKEsCEAlAKwFXwUlIG4JkQuoQlQAO9yAkcRKV4V%Q4NSIT9aIc1yGWEESIyaRvF5RISIgWpAo0CcErNICpuSAjosaCRd9FAhmQUC:F2:HhQV5YmnghUCIXEqB8MxTCM9bjaELawxYY8AaA9YYsMaANQasMWCNAWsMWGPAGoMPEsHvAhm8bbAbzNXh3vBUf8CIMuxfEgz9ES4rXBr8o3aNMzD4ewr7nd9pXP6O:Zu0RiCJgItMBPRd4NUAnghgMkAkAqRjA%mCQLYXoI1KgA:pYsCWtvegufVtgwRgRwTWNzyCugMPoXb:A6iuvw9VdfegsvYulFffhrKqW1BaeRNKKm5AUfl1KCy7BgWl85BfMgd5xXOQWzSrMMNFwLQqATJzJ3gdYJxKgLSsMUjNHIWUjFGeBBjhSYBhSKZJgCFwUAkwBEk0DTAIiW6NBJdGPJEAAiIBFGQBIA::FMcViBEYhIAuLWCUAiQdoNYJZBYSAwPew6WBnEaIThhQJYKZi0:GoiTC%SWTCD8egYA1BqwxYI0BawxYY8AaA9YYsMaANQasMWCNYTnXGPzUp:IKF1V%rw7lMmxA:wN7mi%Qvm8c7C8N:YEO:YQrVwnfw2XC0PfqdRlZBlBUIaCJASYEeDLASgbQasCv4Wzvl7oTAzQJwBYDkioAPSKw9R1oJksBW96CQ81vwsEmUQV4DeoaHkHtgYdQwyVAZd09qCASoOYOlFXdhtLKW1QC6JMAXAQQCVA4AzkFM5CdPw1ZeVOQlTsFmbmTXACM8yTAGKQQCaDgzhilaQBX%gg404fBSUXAsCYCUokI4LiHIJHgYiQ4GfGE5EFKnENmSBn6B3XECJKu6IgW7xNZcsB64DeQJL1aIicOpO8lsNcoE8ZkwkLYJBd%SHHghUR4tgIBawxYY8AaA9YYsMaANQasMWCNAWsMWGPAGgPWGDT81OHbxB8sEE:wJaTvaMP8Hzhi%P8eBjlXVP5oifHftJYQJB3ARQDdR:AtEwFUAij0m0UASQKc7GSLAcnpAMdoCuADOEJTAHwpIJUAbywsAWrumJIAQgKwJMC8mgTIKZyB7IIZyOISIFMhI3cSMnKICJhgIiDLKAJGwEVIG6ESwJlKJADDkTIMSSlXIcl91SAASApgkAkAKgGGIM7EVZVYx9DCAsACNsTbDPmJl6xTBPTaFc5lLW0gBvwkI1csfyOGVxk0MeGJSz4ysAiJ8CwFAtYYsMaANQasMWCNAWsMWGPAGgPWGLDGgDUGrDH4JhD8rtgM5Zd1yPcYnt5L95kHeu07QgAMDv9J4nsT8r:PJAAZ:H:HkKoBtB5AUwDfWqYAuvu%gnO9v4azPdpOALIPQE0BdHzEJYCoArxLJQBJATQ0vQEHyD6AQ4%hvuE1qD34SBUAVXIKoPoOlFbdhpLKm1BsqgOYJQBNAuQzCZCpDP8ZCunZ45CeRSTAOKRmEgkwRpMALgJNAhAJMEKTAI7Uq%Agw78sALgESJBJJgLgqgXDlDiFWMdViE0eoiJAz6BWDZDQBngrzEO8:vtCNAyqdQMGFwumOgK7N1YixoOUWJjLtiydQLi0LAUC1hiwxoA1BqwxYI0BawxYY8AaA9YYsMaANQasMQj89AO5nisePmOff69iHub19w5x6PsRwp:5qxkhAi5LiYCBIVFT%D2vAnynLQkUVQB1J8DX0N3:lZQA%AI6z31GjwgkxwO2nzKmAN6H5tb3oOnoO9B4hEiAt6Ch6U040PgGlwCPoPbgQxsJcBtKq25xCXATispvQEHpNS4A5iG3aA5yCme5AGBJACoAcqd4CkBLAqRSCTBOJYBLrQKMSFUAhRSWAnC4hyFJ4BqGRIUE11WGUxn2KcM64pwjdPiXkwAiDWBZDViIJCuuWAgE:rume4c4xt%2EBPJEoYqgx3W:32DSyoRnq1AwBoD1hiwxoA1BqwxYI0BawxYY8AaA9YYsMaANQbvBYKf3RDuFaPa%6sm:qxChv2rozJ:YYwR:qyD:SZPAwz:0SwC5CoAPymgX1cBEAkAfkSgdDwgqwF8BidO84WAagpASIB3mQTg%wBoEoBXAep5FaC6:gFU1d2Hytp7UF5zV0oB3OIC4CYUlhEJcB3yS67pJIDYByB2AlAJkGshADJICkAhfQxc6aPgShuFZJICSB0Bh4BWATjuEUgUuEYggTLMYX8zATDMBcCwpQigMiD5qn7YpngzbF8xD9oLDfUkhSBI1qP%Nzk19PcMWeOwY9Bnnq1AwBoD1hiwxoA1BqwxYI0BawxYY8AaA9YYsMaANYalFQh%dCAfMw7of4ZhZUAfpoP6n62RB3d6v8xfdIyMMYaVexl:oYyM:xWGx:%sMfYn5fcUiAQY:R4GR7QkwGW%l2CALwpUBQA5IWCASYA%gwSQTwQgNQDtRABtFwCRAK3trArQfOw9aGp9Fw4ffQcOtbwNDWQp4OE31CpAHa0CeCMBbkBh2XXrJAAVAFNcAMi7ACYgNWuCSoCUzHFwZzIJ4CKkj4GTQEXAqEEEjECSwK3gGoVEToIqA0Z0IsAOKgikgVufEHgC1AHdKBw0GaFJgGEV%plTItmOq7bE2uKrQBhaQoEwiDUGrDFgjQFrDFhjwBoD1hiwxoA1BqwxYI0BawxPXSD4GYdymZExeXg3MK4xIlDv:6uGMuSPSoxIjE4IlO9MaL:HBABPAozwmoGcBDBJAL4IcIDtAui9oNUAqADoNh4JSATAr%D4qU8lAfABHDkmqgDvwuEWrQpwkFYBXof6hsdQd%A1nQSooBLgjqkGYCsACmb5UkBpIWAuqwIQCcBEwDikCBGQMa6JAGX4JxLAmUokACdlVBn%OW5l8HdrAkCkAhI48S4jxuF:oUHb87AdZzPgG4d77bdGzDhHOURWeCbOlmFrFvG:y2eB8KNKIWCNAWsMWGPAGgPWGLDGgDUGrDFgjQFrDFhj%DHVGPzE8D5qGNStkIf3kQmNURn5t5S:x0z8Tbn%NxiblJC%S:5bhnlagCQLhgjGSgCvA2j7AH4H5y9pKQByEkBP:zdqDaBLqgGc6mI1ALoL4PSncPwkqQJ8DK3tH8HR4x9Cy7H3oan1PZoCaKQpgLdoCuBA4%tQf%gx1B20EgDGFMANjxIgR5UAM5CZNw0ZCkwATEIqTwKkZE6oAsBFSB8HJ4UkAcZ4EmAUHBwhARLd9iQIrJIBLnm4tkoHXLXG5om%5ZDvZAO%9u%MGhhjuLgAUF69xgth8MQCwbmUAgFrDFhjwBrD8qkxnMUaA9YYsMaANQasMWCNAWsMWGP4j6gx%MnDOx3QJ80Du4x6:6TGmBFpwB838XeYmGKMq69:o98jv8WkAk8C8B0BRAIMjvwJrhBEHWCQLwU0VgEufgt9FzQJcK7va60GIKUATgoBcIoJgGMnPoKj7R:CkbYPoJlKAJICeIfuAhACgFQB6tRTAZgEqJRSAPqFgOJUAOMugDmeApjlAmAGMnKnKek5U5CWPcVEAJEAXAS4LUWAQto4JKeOgUOGioAxSHKbSbRk1CIZYE%cy35A1oSBcdge1YZrMtyrg7sY%Me099LfCe5xBnnvIz7Jg0VKhLglTSFgjQFrDFhjwBoD1hiwxoA1BqwxYI0BawxYY8Aaww%bQvAbI8P3lP6JvGlo58O6DnqdMWFCGeyntUFfx:Q:YFKC3qcwPq1PA7CkAUsD0CQAPzWAnj5AjyL8Hi4N:ZGnAH5vSAF8C70Xfgvd538D5:q:gbN9X0NXz1fQ2f1rOH3uS5oC6DjzGa0BtFsIADUFcESkAN7UpwCIBDjAJEBV:X2oqLsH5bX3oKzmLpRW34GSqtsWVQC9BMgxSIBMKgGmWBJApAGyWBrAnTGhDP8K6RMmAcAkgB4HIYVBZYBCog0JbgN0d8CoOR3g8jQI8xMGuCBg98vDtTTkuwnjbMB3jauofzuJlJigJNgy7jvLUCBgjQFrDFhjwBoD1hiwxoA1BqwxYI0BawxYY8Aaw9NMIfiJAZwO4epAr13zhkkTynA:8w%YmmGvKrPKtdl:6pn5p:q9Cf7vCxFA0gAiCTAkJwGGv2f7ABQGhrR9AFQC8BQAEQA9538D3SQF0PsNnO35Gjq7v4Iz576E02e:gJOdTAKQFEDbyU:gGKkBnPgIjpAaQNv70HSM1ADehcYj70BDy9twsOktOHD4Tdjf%LpOAOhTAFIVoOIWFJffkk4FsJYAWQqZ%TOQQZIApAqQOw1pOdNcAExCCoGmALgE4EkApyQCkokESJtQcaRxCSCRREiRcDMSKdbpACIEfB%Ete:oh2pt2DcP8hPaa8okJPoKFwZGnqVAWJREwBoD1hiwxoA1BqwxYI0BawxYY8AaA9YYsMaANYYfsMbgNzmjDN9G5GHeOMQbBnox6Ovgw:20xNTcP2B67p8mpubYvZMz:4QJ5bvj0:9gEkBhdPJvXAJwETD6F5oEYCmAP:EUwPesDsCrAOcv:Q76B76jKYAekgLo:w2c6:sGzvZ%DZ09X8EZkgI4%yWcJCkAciTgGb4MkEoAtgdArQEcJSmAd%FQyzvQ0ER2AbwJBxrfgPpDr0PdwcdQSxcCPoLK%gdQUXdfSwFU3YGSSpICkASAQn7pdcgruQa5RfO8CjDHUwCzPAUww6sACtnTtA6gSYBJcFNkGcBwpiukaVARkKqhCgCDCEi0RU4FjOpx2WEYgE1DtDyAT9JXNqhPMlKmlP82C1KsSVyMKFgygTCxPAUC1hiwxoA1BqwxYI0BawxYY8AaA9YYsMaANQasMXgQCH5T9Km8AYuhng766j3SE3wxzCvXVZS:Z4zME:6lMnuNQd5Pz:1LSgP8k9YExqf%AWOTf2d7B:jiQVYH0CTA5at:gktXWRVgYPCPcPHKH%D85d9D:6XvoG%ApAC%hZ7zmgToEimAs7%GU11fwsnOL6Dj9GfQfsq8DJBKgNb3tRRAs5YCqG98A%oaHkMtWQh44BFU7X8AlaIKUH0XyqruQGklSQHcZimAsptQWHoDCkrIPoDrkFcsJIBCwRxPAcyq%wCoAMiZ5vsAiARQyJyCFAl3BsOVMQnOdD3JhDQNhwwVAhPKcG1BipwK0DDVBDwihl7lvfJ7CVQoTKjDNhv%paHfTQb6aYojdYaSlDq9CJafQMAaA9YYsMaANQasMWCNAWsMWGPAGgPWGLDGgDWG5VRj8LN6Km96Qi%hfcYG9%l5Bh3s1WFfGe5llEF:jvJv5b3C9X:DHEH8Tb%r:M7sv7Q0wDTbNUDqAHISgNYBRv8CgyIJQEUASQH8EQau:BEuXP4DnL:0e%i:%Dvou:Ad9J7:FnpsBcDnCwiA97wUAA%5ALiv1QCsBECpLACuQU4REwAiBZCVN0tTADQJkDPDqwDTkCrImoYUjjtTw5UhmKI40:UkE9IUUgVEBDD0AmCCD%tGeDJAHu4t0KQBH4DF4O%ekAZmMYSToV0Z%NNmvWDGmlRrnoZAePYpBKwxYI0BawxYY:ix1Ri6sMaANQasMWCNAWsMWGPAGsMPLBD85KfyRqbnDQP%PHuSP6uiPcmf47BrbLhXUYb9%ev:y7ihZ065RoQA%Y6WBvgXlwD:pJUAkgQgRweOjP8Nhsf%CsOjf4GrIxZ1AJ4CIBKgf%B30HfxO5YCkGoAdBngOTkB8Dm0n:oVHD:5KbR1fAKtJz6Go8c:giNt5EjAD6CJpgDeg8aWd:USgNQAJAlQTSRA3QOoqCUS4B6UVd%Fkso7UFxxG4rKb0Fh2U0oKL0J%SU3IK:4OoVKgMJrkF04D1kFCvnzPAkwCxm5hBlIz2GkEbJnIJWTkqUh0gBqKiCdoQ7:QgBwHEZSGWzotUoGGAdTYzpAGzKN8iBBGvxZzF8M3Gy4T06f8wnvhMGTCYTFSYSpZZlCwBoD1hiwxoA1BqwxYI0BawxYY8AaA9YYsMaANQaBH3sK:y8L%NN509::Vod98VSfDfgSN:QD:zXK:8G1mxYo18l9c9f%F2bn:w0zc::mSYB:wcQMEQD:hLGpf8DopMLE32Fk:O9UAshJgCuiDjD0Pa0CXLjCUwADv4feC99Bz:lv4Vz:b%FsL08BnPsKTks1gBM0BcAkwDEiAdo1CdCsngjAdwFQCUCWAZIUwOtQe:Ax1Bx4Dar3P4Kq%odQWfsAKmruQ1n1fSitugcllXehuOIOFJUrlN2CwlK9CMgtug45BCICCq5JIkAhbw7Sc2chPWcW0gjZs8rwP2sWAJkaLl0iYBqcgnSNZJk0fSLAoUsHKNAB0zoZwJb2MazvmZQGYTYo0wFbGb59HfyXkiUTCM84hYA1BqwxYI0BawxYY8AaA9YYsMaANQasMWCNAWsMvkgEPzGoz4lYvoxu0P%X7jNt4Nee5l8T3PxfuM6HezLkk:fXb:0:W67d:H:K9:9P%d3:40mAf0tJgH%xJMDUP2FMSACF4fG:wdWxv8HQ6F9hcPjPPAXwJ7g0%D1cJFWAS3%gAqDv4u%g9:x30NP:LZzrIxLgN9DV:Q2cOfc1lwBfQMeZz1UJ0HbyU2g98Qkcbf8Yjhz:CJrbPoSmYx:A4aPvw6Ej70FD8ztSCsBCAtQJCfAAyqvvQ1nVXSitvAMlFXeguFykAW5RCZBXfANyi25ADqHwOmQXXIcsIgHyr0EmIW8eMgi585BOyJljIiBHiABGSpaGO1OPM2PGw:DPcJiY0ksAGatBXzz91yUAxHf48K8My4zFPflfTjyNFALWGLDGgDUGrDFgjQFrDFhjwBoD1hiwxoA1BqwxLLVA8LsmD%5yPJ%KAcOTfathnw780qAvDfw3ZG57hnyfSYD:hdlr:8slwL:NEoCnAYbH:84FwN9gcOSvcGX4L3D56p:h0tCfYGDwe3UXQN:A7:QpgL7fQFfPN3Cm%2s4fe4rOHX219DR%SWcOPMFtJ:6DI6f:BUcO:EptLZ:AkePfwwtbR9B87EPoenoB3D4yPtwiFYBiAR4Gw402kmAR1BR%xDKax5ISYB7UFx5F4rKb0Nh2W0oKL0F%SU3Ia:ETgRctxABJBHASMuZU4Z:RkqWQD:8uwgZeqgQoFJAI5liLQa0QVKkASZNg3%C7gQB3vfnwz8TCnO%8xwLAqwxYI0BawxYY8AaA9YYsMaANQasMWCNAWsMWGNYjjWG:w8edGte1zJ4FAAAAABJRU5ErkJggg"},{ name : "R_clock_png", data : "s635:iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgZCAENFqzqwQAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAABN0lEQVR4nM1Wuw0CMQwNLHArUNGyBRQUwAKUiIYa0dCyAmIJREEBG7AFBYNgFCk4:iTOcSfOchG49:zi51NybtnbtJquKwKjqiLZpACvbtfohkDI:XwI2coMfGmczQjwuqVKfafHYHYL69VuAcnXBMZDFgBOoGml8Rrj8wKk9HR8DI9gTX4SGWsHvrovoQE4WAwq4HcRCNf7GlIj40eewpuIBPBj4945mGgIFiX6TWuIRHUGCWdEsIb:ChD36wWfhNBBkftZlmxRPY0CAc1Q77Uon59BFooBBS3ys:P12FoSLhz%Jz9f1dc0u0djH4LA6XDO0kQNkRgJPC8TTDZquLhdXOQT2i2WMBqPIQC0202dgdgvMT2cEAlXBYHQI9DSRgHAJyFGYb:x%etoufdb:6r493fR7:kGLMsJhPX1uvQAAAAASUVORK5CYII"},{ name : "R_bg2c_png", data : "s29742:iVBORw0KGgoAAAANSUhEUgAABAAAAABlCAYAAADTa5F5AABW6UlEQVR42u2dZ3ccR5amWxQ9vPeEL3gPEARAA0OQMPRGJCWSIkWKklqUI0VJpLzUajft1GzNdM:u2ZnZOTM7s7vn7Nm:sn8oNt%IjMyIyEhThQJR5n54ThXKZAEg1c37xL3v:Vl5%RBLQlnZgEM:Ky1NOfSykpJuhy528GCHQzs7cOCQQyvbv7:FoZnt29fo0OBQx:burXWocahme:ZUOVSy3bsrHMocStnLL5c4HGC7du1z2ZsxL72ksmcL7N4CL2fEz35msmsLvLQFfkYQBJGTrK2t0e%BIAiCIAgiU5IJgMGsC4A9eyAAyhUBcNCVAPsVERBFcUqCoCggSUAQBEEQBEEQBEFkXQD0xQiANk8A7N:f5AqAek0C7NkjJYAUAGUBCeCLgKQyYLslwV6SBCQJCIIgCIIgCIIgil0AdEYIgKRdAKYEkN0AqgiIgyTBzo0ckCQgCIIgCIIgCIIoEgHQoQgAOQbQ5NDodQHs3WvrAgiTAL4IEBJAZf8WePHdBNmTBHvyXBLsIklAEARBEEVIb28v:R4IgiAKTwC0GwIgrgsgSgKY3QD%aEAYJAmKPbyQ:mMmCIIgXjzPnz%n3wNBEARRDAKgxyIAosYA9C4AfRQgSgKkJwIKVRLQhgMaOSAIgiByi5KSEvo9EARBEIUsAPoTCoDWUAkQnQegSwDbSEAysiUJDuS5JKDwQpIEBEEQBEEQBFF4vPTSS5xdu3Y5ddzLnN279zh15V6nztzr1J37Itm7d5:z2j2c3bt38:fv2vUyvx6uSwIgRgCoQYDqOkAzCyC6EyBOAtg4mCG5IAmyF164trZB4YUkCQiCIAiCIAii4Iv%l17apRT%u3kBL4r5vbywR4G:f::%SPbt289FATBFgJABu7zPK0IBAKQA6FMEQLdT%Nu7AKIlQF2MBChPUwKUbJMkOFhQkoDCC0kSEARBEARBUN4GkSlra2ucF::ZttN%UfTLIl4U:QecOvSgU5se5GNaURw8WOK89gBHCIF9ngxAJ0EhigD%31FyATBoFQBRXQDxEkAKgKj1gL4EsCGyAszMgPyQBBReSBsO6P9ICIIgCIIgCBu0QcM:9ZeFv3rSL0:5UcDLgr%0tMypWcud2rWcVVRURFJeXuG8toxTWlrKrwF5gOvpMmC3JgJ28t:wWZEvmQmAlPMLTtYFcOCAFABxEkAPBdRHAWyUJkaXBKUkCSi8kMILCYIgCIIgCCJPCn%0%aMY94t%WfCX8oIfBX1lZSWrqqpm1dU1rKamhtXW1jrUsbo6H3wtHq91XlPrvLaag:eOjY3xa0EiiA6Bg:yzRFbAXk8EYPwgr7sBMhUA9i6ATucPI0oCNKUhAeIEQBKKVRIcIElA4YUEQRAEQRAEkT8n0yHF:48::siLcLT3oyhXi34U7yj2UdzX19ezhoZG1tjYxJqamllzcwtraQmCx5ubm:lrGhsbnfc08PcKKVDDqqqqnGtX8i4C2RmAz5YdAZAReR0UmLT41zMAVAFgGwWIkwCNCTYDqFkANtRCP8lrckkSlJAkoA0HJAkIgiAIgsj5Qoygvy871%4v5vtxCi8K:zLeto8CHaf8KPpRwKOQR2Hf1tbGDh1qZ%3tnayzs4t1dYFu1t2tg8fwfEdHp:Paduc9h:h7IQUgDyAE0CkAGYDOAHwmPlt2BMhuAGwMyEsJkO4WgLIyXwCYXQBmHoAgSgKYmwGkAKi2jAJEUcGFgU6mQqAQJAGFF9KGA5IEBM0oEtsLTkHwjzT6XRAEQRDZLv5luz:m8XEKj9N4tPfjlB4FOgr11tZWXvCjkEdhj3%PpFJ9rK9vgA0MDLLBwSE2NASG2fDwML8FeBzP43V4fSqVYj09PayzE0Kgw5UBLaypqYlLBiECqnhWQElJKe8GwPcmgwJ3OhdgGwQAin9dAJSVpRQJ0GNIgE5DAhxKKAH0UEAhAcz1gD6iyK%MQBcCW%sS2G5RQJKAwgspvJAgCDo1IgiCIOL:t7cQ::dXFv84WZen:pjDR%GP4hvz%ij8cUrf1naIF:0o2lHA9:cP8AJ:ZGSEjY2Ns:HxSTY5OcWmpqbZ9DSYUZjmj%N5vA6vHx0d5e8fGBBCQMiALt4dgM4CyIa6uno%boDRANkNgDWCYiRA5ALkzb%Rk5:%qwJA7wIQEqBbkwAlJR2JJEBwFEAfB:BHAqQMqEqIXQj4EqE8DUgS0IYDCi8sdklAxQ5BEERhQuvlCCJ3in:11F:O%GM%H23%KPxxSt:bm%Kn9yjaR0fH2MbGBnv06DH729:%kf3TP:0L%:HHv3D%7u9%z:nNb:6O:epXv%H87nd:YH:9639hf:nL37M::vHP7PPPv2SHDx:mYmBiYoJfD10CkAroDIAIQJdBc3OrOxpQy4UExATWCIqRAJELkDfhgJkKAL0LQEiA0lJ:FMAuAdo8CaCuB9QlgE0EqKMBAikHbPjdA3YhYHYT6JRvgZ2WBLThgMILacMBQa35BEEQBEHkZ:GPk3W02mP2HnP4mPFvbW1zT:x7%Sn93Nw8%%KLL3mx:%c::4Xz44:P2Z:%9Gf2hz:8if3%93:khT6K:9:%9neeAPjFL37Jvv:%B:bdd79g3377Pfv662:ZV19941zra:b8%V:Y:ftvs3v3HvDuAHQGDA%PcBGAz%3o6OLfhxgLEN0AyAZAl4LMBZDhgDn:79v0RwDCJEBPIgkgBEBQAgSDAU0RoFKTgCghYB8T0EcGSBJQeCHlElB4IUEQBAlDgiCoI3C7MIt:nKzLU3%0%yOgr7u7xynE%9mlS5d50f:8%U%84FeLfykAUPybAuDXv:5tQADI4v:LL7:m:OEPP7I7dx6wu3fBPfbGG:fZzMxhLgIGB4dZKtXPQwVFN0CL8:018CBCdCkICXDACwfczk6ArPxvdWYCQJcAQgQklwDhmQCmCFBlgAwKtFEbQo2lgyBsRCA%RyA9SbAVWUCSIB3wHySFF1J4If2fKEFQ8UgQBP13S7%b:Dr9txX:aLXH7D1O:fFn8e67D3nRryKLfpUoAfDLX:6aCwB5%i8Lf:DFF19xPvroE:b66:fY7dt32RtvvMWBFDh5cpUND49yCQEZcehQh:P9tXIJgIBAIQFKvVWB27kmENd:IQJAHwMYCJEAvQEJUFqqSwAhAuzbAYIiwCYDdCEQpM4jKAZsIqAyS6QjBPK3k4DCC3NHEqytbRRxeCFJAoIgCIKKP4LI9%If4Xl79:rFP4ppFP9I4cdp%7lz5wOFf1IBIOf:IQBw%v:DD7:yBABO:0Xx:5VX:D979iXPA:j440%dwv9NtxPgLVcEPGB37txhR47M8ZGAZ8%%4NsCZC4AOgHEOEBpfowDJF8D6EuA8nLQzzElgBABYRJAioB2ay6AkABSBDQHOgN8IWATAzZBYJMB6paB6jSDBLcuCTLrJNhpSUDhhRRemAyEstCGA4IgCIIgCMLk9OnTWvGP8LwDB%TJfw2f90fxj1N22eqfjgD44x9:tHYAqAJAPf2XxT8Kf:DZZ8:Y48efsEePnrAHD95ht27dZ7dv32d3777JRwIgBc6fv%TlAohOgBY%roAVhTITQGwH8McBcu7fl0kFgM%AQr9LvAQQIqDT0g1wKJAN4HcEmDLA7BBoUkIEw8RAWJ6AKgFq0tgukMkGApIEFF5I4YUUXkgQBEHzzgRB0Mm:LP5xWl5WJtv%G3nKP2buowp:VQCgwE9HAGD%3z:9:5oX:U%ffsFvP:nkM:bxx6L4f:ToY:bBBx:x0YN33vk5u337Dfb66:fZvXtvsrfffsgWF5e5BBDjAIf4hgIEFkIC4OeB1IAEQLv%rl1yRWDeCQBdAlRUSFQRoEuAf:iHfzIkgL0bQB0JCIoAFSkEbFIgODoQPT4gRMC%fWE5AWHIAr86YQfBdnQVVFB4YV5KggMkCSi8kCAIahMnCIIo%sR:Wfxj1R%KZtn2f%bMmUTFP5Dr:VQJYBMAeA02A8gAQCkAUPSj7R:t:Dj5R:H:%PETLgDef:9Dp:h:3yn2f84ePHibvfnmWzwY8PbtO%zGjZvs%vXXeCChDAbE9w6BUVNTy7cXlJaWcQmAn3H37j2uBMj834VZX1WaXAAMKcX:kPPDDSkSIGkngCoBbAGBMhtA0mYQJQVa0pABfqigkAB1igSoDWwRsImBqOd2Tg6QJKANBxReSJKAIAiCIAgidxP:ZfGPYhlBelivt7m5mbj4B2r6vyoAUOyj6JfJ:7gvAwABBIAs:p8%:ZwX:0%efMqL:48%euwU:x%x9977gBf%9%8:cFv:77Fbt15nr712ixf:167dYFevXmcXL17iMhhhhcgDkKGAMg8AEgAZB9sZCrjtAgCFvyz%BYMhEiAVIwHCugFMGeB3BvhiIEoKtBiBglE5Ag2uBJAioC6NFYPxqwej5cBOjBdkc%SAJAGFF9KGA5IEBEEQBHWMEESyk3818R9z8ij%6%rqeJr%2NhYWsV:lABAyz9O%uW6P4D2f0gAzP9j9R:m:lH8gydPPuGn:yj%P:zwES:%f:7zh%zevQdu4X%b3bjxmlP4v%oU:tedwv8VdunSJXbhwmWeBzA9Pc26u7v5%AJGAerq6r1RAEgAjAKgCwBjDzkTCpiZABh2frDhNCWAXQTo3QCCgwc7FRlgkwJRnQKtMTkCanZAExcBQgLUJ1grGLdqMLkYiB83qCZJQOGFeSYJ8je8MHckAYUX0j:oCYIgKJOBKLyTf5H4v5cn:mNtXm1tLWtubmYjI6NpF:9hAgCn:3LWH8iCH6f%MgAQ99H2DzD3j3l:FP9i5v893vaPk38U:%LE:1Wn6L:Grly5yi5fvuIU:hfZmTPnOBsbZxzOshMnFll7eyeXGQgyxChARUWlUwOXeV0AkB:4HWx3HkCif5tkKgBUCWDLA9AlgG1NoC8DSkpUERAUAsmkQJQMCN8woAcH2lcK%gGCdQklwdY7B4pDEtCGAwovzDdJsJskAUEQBEEQRAahfwcOHOBFMdrkUSi3t7cnDvyTqALAlAAy7E9KgG%%%Y4X:JAAeExuAJCJ:1IAYOb:4cP32VtvvcNb:xH29:rrd:mJ:yuvXHML:0vs7NnzXuG:vr7p3G7y1dzr6xu8i%HQoXbW3NzidQFAdMguAPz8kADIA8jbDgCfISMU0MwDCOsG6A0RATa62E8::VdNDggh0Bk5NqALgbAwQdkJEBUaaBcD2ysFkkuC5OGFVTmZS7B9koDCC2nDAUkCEgUE8TOe0ox5U:pdUNcMQd0IxM6E:qH1X879I:SvtbWV:c::%b9ji:8::enPXpo:gv1MCaC2:0MAoNVfSgAIACkBMAoAASDX:n366VPe%o%2fwgAs:i:efN1fvJ:8eIVXviLgv8ML:axzvD06XUOBMDqKr5eY8PDIzzPoLGxiW8FqKys8gIB0QWA3wPyAHY8CyATAaDnAAyFdAGESYCUIQHCOgOCmFIgXAZ0RIgAXwaYIkDmBNhlQJgQiJIC2RwjKG5JQLkEFF5IkoDCC%kfwgT9vSIIEkJE:rX%o:jH6T9OxNEej1Py%:ffjC3%UdTLQD8JEv5l0Q85gNfI9H8U:2oXAAp%CAB0A2AEAPfRDSCD:3D6DwGA1n8k:aP4v3PnDV78Y%4fJ:%bm2d54X:q1BpnZeWUwypbXj7JTpxYdljyvoYYGB8fZ01NLTwQsLq6hqVSfV4XAEYgkAew42sB09sCEC4BZBeAEAC%BCgr61ckgCkCUhYREIeUAT0WGdBljAy0x4wJ2ERAWGhgUiFQF0p62QLbJQlqSBKQJMgzSUDhhRReSBAEiQ%CIPLpvxvZ%o%2dxT:KIKrq8XKv7m5%dj5fszzq4V:mACQEgCPy8Jfhv8BSAG8T2YAYARAnv5LAfDOO%96q:5ef:2OO:f:Cm:7x8n:6uopdvKkYGlphR0:fsJhiR07tuiA%%J2aWnZYYn19PTytYDIOVC7ACBC0AUgwgDzVAAEUQWA2glgSgCbCFDps7y%T3neFwJCBNhlQPiYQLoiIFMZUB8iAuLwC:%%vpE8kwQUXvgiJQGFFxaKJNhDkoAgFLDzGOFQ9LsgCILI3:Z:FP8oeJH6X15ezlP:cfr:b::2P2JD:dDubxMAEAPq61QJgFEBFPxyAwBej9EBORYgOwAw%y%T:2XqP4L:UPwj%A%t:wj7w%k:Wvxxwr%ycpLf4sQfoOBfWDjG5uaOsvn5BX5:YeGo8:Wc89wxvhkAWQDoAsBawIMHS:j6Q3QBQIzs6L%B0hUA4RJAdgDYJYDoBOi3FvZB5GsHFPz3QxAEZYApAmxjAslEQNz2gMxlQDrdAsklwc51E1B4IYUXUi4BSQIKLySo5ZcgCIIItv:L2X8E:1VVVfFT8atXryZK9EcxjwJezvVLZMu:BEIAoAMAtxAHAIU:wAgBrgEhAAGADACMAEAAiOT:93kHwBtv3OfF:7VrN3jr::nzQgCsrq7x4n9xcdkt:I%7xf9xp9hfcJn3JACeRxfA4uIi:3nlRgDRBXCAZwHseA5AJgJAlwCDGkIABCWAX8CHiQDz%QHlOv51pQwoLe13RUASGbBTIiATKZBcEsSLgtyWBBRemMuSgMILKZeAwgsJgiAIgsgMufYPRS9OwOXsv1n4q8W8eqovT:NVZAeACgp:Wfyj0Efxj:dKCYD34L0QACj%nz79nAuAx4%feKv:EP6H4L9XX73pCoCrPPgPK:5E2z8EwBJv:UfhPz9:1Cv8Z2fn2ZEj854EmJs7xov:5eVlvuJQhgGWlZXzFYjIAhDbAHblnwAQDEYwoKOd4kehnvrLol:eDvH7Av96USIgTAakLQIORI0HmDKgIUNIElAuAW04oPBCCi8kSUAQBEEQ%d2BJcP:UPSiAK6vr2dXrlwNFP8y4R%3KOLNUD:Zzg9wmi%K%9:zW4l8P16vPo7XS3mADAA1ABAdAHr7:11248ZN3v5:6ZJI:kfKP8L9AGb%0QEg2v7FyT%K:8OHjzi3cxw8JjsBIACOHz:O6uoavDEAjEJgDEDkALxcBAKg3NbObyv6:eJfMMTB58n7PnEiIBWSE7BdIqDR0hWwVSmQLUlQn%eSgMILKbyQJEE%hRc%f:4XkgQE:cOZIIiCzyuh34MdnHKj2MXqP4T:YTXef:7n:9Ja:lHoy1N6FOso%mVbv3qCj%IdM:yyC%C3v:U3A%B9stVfCgJ5X57%4:0QCRAA6ACAAJDz:zIAUHYAvPLKdS4Azp27wAUAOgAgADACgNb:o0eP89N%IQCOsJmZWQd5O8ump4UQOHFika2urrL29g7n59fHAPbskTkAeScAkhT:ytfWIj%q8B%0FPuyG8D:HnwJYOYEpAIdAUEJ0B0xGnCIHThokwDJRwNMglKgkCRBHUkCCi:MM0lA4YW04YAkAUEQBEFsRwAgTrlF%385T8Pv7%8PzPubAkDO78s2fjwn1:mheMftDz:80nntbwOjAWj:B1IOyOwAvB:Fv7oBAAIA6f84:X:77Z:z9P:bt%%wGzde5R0AFy9eZpub5:jav9XV01wAYK5fBv%JsL8Ft%CfYVNTPjMzh7kYgABAF0BXVzcffxBjAGIbgMwBKBABMGBt4eekVfjL9yX:PoIiIG5rQFhGQPJugAOxYwFhNEZCkoA2HBSuJCijDQcUXkjhhQRBEARR0AJgF5::R:t:RUUFT8P:8MOPAmF:mPWXM:w4pTcD:FDAf:31t97s:rNnX7DvvhMSAEW9xJcBv3KK:187xf%vuQBA8a%e:uM6cgUg5v:l6T8CAIUAeI1duSLW:505c45vAIAA8EMAF935:6N87h8n:yj6JyenOJAB09OHnfuH%SjA0aPHeLdAKpVilZXVbg5ACR%NQIfEjgUBooj%61::bUsCQC%%g0V9uYv8%h:%4V9DCn6VrXw:A5EjAcGMgPhugPSCApszkALFIwnyPZdg%yQBhRfShgOSBMUXXkj:UCQIgiAKbwMABABm3mX6:7:%678Hin:Z7i8LeDW5:9e::g375ptvedEPMLsPvv32O6eo93MBAAp8FPp4:IcffuCCQI4N4BYSAeA6sv0fAgAdABAA6AC4det1dv36q1wAiAyAc2x9fZMLALC0tMwT:ufnj:HiH23%KPYBJMDExBQbHwfT7uPTXBCsrKxwAVBVVe3lAIggwD0BAYDVgTnfAaAH8oWf7Jcbxb4mBhIV:sOsokIg7seJAPHZYlNAf0hAYLQECO0GOJiJBIijaVtEwYuRBBReSBsOKLyQJEFxbjgQc%E0ckAQRO6xtrZGvwf6fe7oBgCccv:xj3:k8:9NTU3a6b9a:OPEX87py%JffP0Lp2AXif2ffPIZP7VHF8A333zDuwBEUf8NB%39QgZ8xwUARIAMD8Qt3ocOAAgAXAft:%%::yHfACADALECECGAEADYAuCvAUQHwCo7cWLZCwGEAED4nyj%p3nhPzY24TDp3J:0bicnZ7gIqK2tVwRAqVOnHeACYMc2AWxdAKQ71x926j8UW:yryOfCBICQAGErB1Oc8NWBtrWB7UY3QJgEMGnOEsUqCepJElB4IYUXUnghbTh4QZKA:pFLEARBbF0AiABAzLxj:v3SpcuB03%1%P:88y%10D6c4H:xhTitl4n9OLVHAf:VV1:zoh:z:F9%%RW:RXEPIYCOge%::56LAEgBgOIfbf9yAwBkAk7:ZQAgBIBs:5cdABcvihBACADkAEAAIAcAHQAIAZQCQBT:E2x4eDTAyMgYGx0d56:BeEBVVY0mAMQmgDwTAPbwvbh0:3Rn:J0CXzv5ByOKALBJAHMUYMAiAVK%BNBEgNoN0BXfDRAYCWixYhcDhSIJinfDwcbGBQovJElQpJKAwgspvJCgzQi0GYGg03cifAOADACsq6vjhbpZ:GPuX8774:TfL:5:5RTrXznFOk79n7DHjwVSAHzxxZf8epAGn3:%hZcNgK8hB779VogACAEIAJkhIHMEcC10AMgVgG%99Y7X:o8NAAgBRAYAOgAwAnD69BrfBIARAOQAoANAzv7j1H90VBT8Q0MjbHBw2Lkdcm6HPBGAToDZ2dlABwA2AeRhB4BbbLut:KVouVfwiu:yMAEQU:iXDxun:yNGB0CYBLAFEppiQu8ICJcA3RlIgChaIiFJQOGFFF6Y:5KAwgsLRRLsIUlAEATJGILISACIDQAIAKyvr2f::u::oRX:8vRfJv2rxf8333zHPv0UJ:8o:D:mhb%c2ccJPsYCIAHEOj:Rzo:nUdjjua%::pqLAJz4y84AyAFIApz%P3r0MX8P2v9lCOCdO2:wEYBr1254awDPnxcdAKdPb:AQQHQAHD9%gocATk:P8vb:0VFx%o%CXzDM%vuH%MaDgYFh52vRCYD3SwGAtYh5KwDKOIOh7f1%wa8U:zGt:gHUgl8SeF3IVoDIjIK%ZBKgNNmWAH0kIKkMyGVJQOGFL1YSbP:IQV:fcIFLgtwLL0ylBim8kMILC3bDARUcBEEQRNQKQGwAqKysZPX1DdraP1n8y9N:tfjHzD4KdhT:H3%M4v8RL:wBZvbRyv:ZZ095oY:RgPfee589fPg%fw6v%eSTT:nogBwNUIE8kOv:8B6A038pAG7evM3HAIICYN3rAECq:5EjC7z9f3Jymhf38uS:v3:Q%ff2AGdgYMhh0O0IGOEjANgCIDsAsAoQAgBZCXnYARA3IjBorANMUPQrxX95hX3%v6IiXACUlUk54d4PzSWwdQVYcgFsEiBRN0ASWrdFFJAkoPBCCi8sxA0HFF5I4YX5tuGAugkIgiCKbRxDCgCk3VdWig0AttN:Gfgn1:UhrA8t%zi1hwB49EgE9QG06%MWBfynn37Gnj59xk:93333IS:k8TxAx8Dnn3:OJYAYERCg:R8dAHKUQJ7%P3jwNl8BKDsA5BgAQgAhAbAKUGYAHD%%xI4dkx0Ah3nqP2b8Uez39vaxVKqf3:b2pvhtT08v6%7u52IAowKmAMCWhLwUABUudgEwEFL8Rxf8KmbRX%kSfvofvhowem1htAQoTSgBDngSIF0RkGuSgMILSRJQeCFtOKDwwkKXBIUUXkgQBEHjErnUAeCvAGxsbNRO:%Xsvwz9k2n9aP0HEABPnz51CnWc%ovCHkU%Tu5xwg8BAFDEQwBICQA%%OADPj6AbAC5PlAi5:8hAOTsP4AAwBYAGQIIASCCAC%zjY0zPAMAGwCOH1:kHQBzcwtu%:84Gx4eYX19:U6xn3KK:V5OV1cv6%jo4Y:19vZzMYCcAMgQZCLIDABfALyULwJgOMP3BBGz:SOBGX%dEUv7f8z3U2FgyQjwtgWUWyRAWSpkVWCMBDjQrkiAOEgSUC5BPksCCi%k8EKSBLThgCQBQRAEoQsAFLeqADDX:snTf5z8y9N5tPfLdv1nz57xDgDZ4g8wu48ZfrES8AkXACjkAe6LToD3nec:4R0CKPhlQKDcBID3SqEg2:8hAO7evcdeffUmL:6FABBrANEBsLJyihf:CP:D6b9o:59iIyOj:PQfLf8o:Ds6uhw6WWdnNwdfd3V1824AjAFAAJSVZSYAMhVXoe:L7OR:WGGEYzvBD57ojyREn:3nj5VLRoOfl0QAhIqAwRAJ0BchAbotawLNkYD2QE6AnxdwqGAkAYUXUnhhYUuCSpIEFF5IkoDCC%nEkU51CYJICILthAAo5cF3jY1N2uk:gv:k6T9O:FGgy:l8FOoQAmjjxxaAR48e88JfLf5VAWCiCgBcE0gRAAGAdYJypAACACsA0f4vOwDU9v9z5y7yDgDM:2P93:w85v:nuABA%B%K%lRqgJ:0o:Bvb%9w6GSHDolbIQB6eEcARIEUAAcPluRjB4AsvEc4UcV7fKE:qmC:Dv%cSnzWKMf2ukCXQaSICBsTkN0A5qaA%A0BySRAEnZaErSRJKDwwqLZcICiiyTBVkUBSQIKL8y3XAL6xzlBEMSLEQB%B4BNAGD2H6f9Is3:U16co0VfdAQ842MAaPVXC3%fT3khrxb:okvgMR8BQFAgCn4RGvjMu8X15fvk:D9O:yEA5BYACICLF6%ws2fP8wBAzP%fOLHI5ubm3dP:Gd7%j9l%nO6jyEfB39bWzlpa2l0BICRAe3s3HxHARoCKikpNAPghgHkgANRT::gifoT97W::ob%mMgKrBJCn:qOWzxNdCP5YwIgnJuI7EtSOgLBugDgJ0BUhAaJoL1JJQOGFlEuQO5IAhRhtONheSbC%fpY2HBSlJNhNkoB2pxMEUeRbAGwCAMW:FABI:kdAnzz9l:P5KPClADALf7wOoMCXwgDvwX0gMgI%9U7:8R4pAqRkwOshCyAA7t17kwsAbACAAEAHAGb:L1y4xDcAnDy56s3:z8354X9Y:YfZfrT6o%BvbT3EaWlp5bS2tnEhgC4AiAJ0CwgBUMYFwL59%:nvaOdCAM3CODSZ3y3%neK6kjPKCRbyY4Fiv9J5LAnae93P4e:nnzVmfN6IoGLUlRFu14H7eKWLKRX8zgXZpeD8XBWDIdkAYeGA2A6gSwAhAEw6tkB2JEGhjRzkviSg8MJ8CC:EWkSksdKGAwovpA0HJAmom4AgCGI71gD6WwBUAaCu:sPpPwp1FOZo80dxjnV%KOLDBACKfAgAVQionQF4ryz6gVgP%JknGRAmiA0AMgAQAgDFP0YArl69xtv:NzfPsbW1dba8fJItLi6zhYWj7MiReXf2f4yv98Pcf2dnl1PoH2LNza0KbaypSQgBCACMCcgOgNJSXQAcOXJkZ:6cwk7uQ1v2vaJeYhby4xFF:rhPVQimEKgSt8HPcwVExZj::VWOGN%biikEzKBBdARYxgGiJEBJdwIJkASSBBRemE%SoL4gJAEKKAovpFwCCi%k8EKSBARB5BLPnz8vEAFw0Km9KllDQ4NVAMgAQDHTLwQAinMU7E%efMIzANIVAKL1XxcAYnvAZ16XgAwPRAAgMgDQBeALgFd4%B9m:1dXT7Pl5RV29KhY:Tczc5gLgKGhYd7WL8P%cNKPwr%lpc25bfG6ATACgC6BgYFBNj4%4QkArACUAgDjEjvy52Q:iQ%e7GvFtFOUgyoXrbCPK:BdqjgTAdTn5edUuvf9zxvjHQGi%B:1iv:K0OJfRx85MCWAHA1QxgEUCaAGA5ZYJIBOp0bmgmCnugkKQxL094:ThgOSBLThIAuSIJUaJEmQs5KAwgspvJAgCCK3BACK3vr6ei4A5Py:KgC%:fb7tAUAinxVAKjPqwJAzv7jmrL1H:elAJAhgJj:xwYAGQKI2f9Tp9b5:P:i4hI7duwEP:0fHxfJ:319gzzYD7P:svhvamplDQ0tHIiA1tZ2dw1gn1OH9HNxUF5eoQmA3bt3UgBYTt5jT:ADhbzJxJapDCA:zxUBSidAOmMGXmdBRO6AnxFgSgB3O0BEF0BmkCSg8EKSBBReSBsOtksSUHhhoUiCPSQJMjxNbG5upsKEIIgXxu7du51:Rx:gRW9dXT3761::URMA3333C:b119%y77::wUvnVwUAwv8yFQAffvihN:uvhgvi2kj:VzsAMAIgAwAhAK5ceYULAJz%i:C:JXb06HF2%PAsD:7DLD:W:qG4x%x:Y2MzL:ibmprd%6IDAOv:enp6uCwYGBhg8:MLrgAo5QJg7959:He0YwIgvAiPKeyrwaTChMJkdtE%z70vuwTM0YJKtWtg3Ose8NAkgIptA4GlG6Csn5W6EqCkpMelOyHFKglowwGFF%abJKglSVDE4YX5KAkovJA2HFDRkf%t0wRRSAJg::79Tv1Uzmpra9mXX35lFQC4RRCgekIPESCyAT4zVv%JQt4cAVDlAMTBw4fveYW:fA%uieIf4X:y9B9gBeDt23d48Y:0f7T:o:hfWlrhxT9a:2dn59jUFJL:x3gnJE71ZfifaP2X7f%tbvs:Tv97vdn:gYERPusPAYDViKoAQLfEzgiAhAV4dTWY9KnBc1ORVKeJeF:w8:3PU78nQ05Um2MGE5qUCO0kkGMFnFGBmxlQUamKAJEPoG4I8EYBPBHQk4EU2B5JsDVRkG%SgMILacNBcYQX5uPIQWFLAgovpPBCCi8kSEQQhAnS7fft28dT72tqatilS5c0AYDW:2%%%Y53AEAEoIBHkQ7Qui8EwFOt%EdnAIr4jz56xCWAfFzmAMh8AHXeH9eTq:%kAEAAIEAHgGz:x:o:pP8j%X9paZmv:Tt2bNEp3OfYzMwsGxmZ4Mn:OP2Xa:9k0j%Kf5H83%4818W6u1M8I6C:f4ANDo7wsYGpqSlPAGAF4I4LgOoMCnWPGjCdBaZCmHY:S0iAoByYsBAnNGzdDqoIMCXAiJ4PILsBLMGAJSVhMqCnACUBhRdSeCFJApIEFF5oIlYfFpIkOECSgMILCYIgMhIAaHmvqqrmqwAhAH73uz9oAuAXv:glv::ll1:zToBnz77gSAEgJQCKeRTx7777kH344Udu2r8vAPC1XAMoT:0l6CrAe1H8qx0Acv4fKwCR:o:W::X1TbaycpJ3ACwsHOez:7OzR9j4%CRP:hcCoJcLAHQAYANAS4s49cdWADyPtv:%:iH%egQGYv6:tzfl1IzlmgB4%eUdFAA1TpGtElak14RQXQtm7NT41ASIFwPea6zdAmaXQJSsmNSwygNt7EHpCJASoNLcFoBNAWEbApLSkzY8eLC0W5BVMUCSgCQB5RJQeCFJAgovpA0HJAlIEhAEsTUw2753716njijhmwDq6xvYv:zLv3oCQK4BlAIAMuCrr77hWwFsEkB2AGC%HwIAIYEQALiVhb8o:p9oM:9y7h8CAIX:22::nBf:Dx687c3%o:jH6f:Zs%d4%j%S:48fX%Rgdl%0:2P%f8gp5Pv5:L:oAOjwCn881tPTzwUATv6RFQDwPnQR%AKghAuAPXv2ckmycwKg9jCrcYr1UGTBzl%noBbztZbnIwn:PFUgiM8PFxQ1NVP%c7UJOgtC5ECwq0AVAaMWETDkMKiIAD0kkFPuojxWWmoSJg1SIaQvD7avm4A2HOSqJKDwQgovLGxJUEmS4AVKAswwUnghbTjIhN7eXiqECII2AfDW99raOi8HAALgN7:5Oy4AsAkAOQBSAKidAEIAPNMkwJMnT7ziH8gTfxT%jx%LEQJkCch2fwT%oegHKPrR9o%1f5j9v3XrdT77f%HCJXbp0hUuAM6cOcuWl09yIADm5hbY9PRh3gGAVn4IgFQqxTo6uvicPwp:ceovTv5x6o%2f4wLjIyMOe%d4QGClZVVXAAcPKgLgB37M6qtnWVBDkcQ8vo6MBugptbHvH6UFKhNJA3CHp920bsQqmtmdJFQPR0iBCYUETBmEQHDQRHgZgRIIYDugEwRXQV6d4Gk1CRSFli6BzIaPaDwQgovzC1JQOGFtOGgsCVBGW04oPBCCi8kCCKvBYDcBCBzAFA4yxwACIBf:eo3XAAgBwBdAMgCUAUAUvyBv97vqXfSr572i:DAj7w5f5z0yzZ:FP4o%O:evcdP:JH6L4t:nP5j7R%C:86cEaf:p06t8fT:Y8eO8:V:MzNH2MTEBD:JHxtDDoA42R8YGOQn:QMDQwrDvPDHa0ZGxrk4AKlUH1%HiN8DBABWAEIA7Nr14gWAJ2Zr646weEQxX%fct8FfUy%ZY8mueSQgCDiqSKidDRUOovifzUrXgRQGfreAHBdwJUCICBAyYMinIopBD08YVAxEEyESdEmQskuC0O4BucIwW5kEFF6Yv5JgqyMH2RIGJAkyHTno6xuhDQcUXkgbDkgSFHh4IRVUNtbW1viMNf0uiFzeBIC296qqKj4G8M:::N:5GAAEgDoGgNZ:dQwAp::qWkDR5v%Zm%6PVP:HHDwH1Pl%FP0y4E%u9kOhj1N%tPvjMQT:4T6K:3PnLnABgPl:CACEAM7PH2MLC0fZ4cNH3NP:CX6ijwIfAgCn:Cj6MeOPW1H4D:PCH7JgZuawwwzfIoAMBAiA0tIy3hEhAgD3RK4A3PYg0TqnYLdzJIS5LBG8VnJx4FMHMVE:G5AVPqI7IUwM1JoiwB0t4BKAM%GKACkDDBFgBgZaGVZIIgtUaTCgoUuCJJ0E7vhBWV%MEOg1ugQKNbywg3IJtigJkkuBXNlwQOGFFF6Yb5KgnDYc0IYDkgQkCgiiIIIAsfYOBTDWAV6%fFnLAUAXgBQAKPrlGABO%9XwPhT5OOmXK:1wH4:J59Hqj%If6f44%cdJ::Xrr:LVfpjvR5s:QKEPGYDnUPxvbp5zOctOn15nJ0%e5uv:FhaOsdnZBS4AJiYm2fj4BB8BgATALfIAhoZQ9I:xx7AiUJ74Y20gbiEBRkZGePu:vwJQ3QCwa%f%fOob5pmkrj4KUaTXO:cD4L0xJL3%1kSCkBRhHQymFOB4Yw1mpwC6AqYcJn2kEPDw1xD66wdHg1SajIQwbJcFVmkwqJC8c8CTA25GQTCTQJcCJaXpbjbYyW4CCi%k8MJilQT1JAkovJDCCym8kMILSRIQRdD1kW9BgOgCwPy73AYAASDHAGQXgDz5RxcABABm:9XiHqf6KPBFu:%jQPGPWxnuJwP%5Ak:in4k:AMU%Sj2xcz:eX4fJ:%nT6:xuf%TJ0%x48dPsKNHjzuIDgDBrFPkT:BuANzipF%2%U9NTfNVgSj8ATYHoPhH%F9NTa03:y8CAPe78:87uAFACICjTnG%kF0awVGftK8xH8NCiFCY8%83zHH4SAIn6aiD7BiwZQpM%VKgxiYEFKrHPXRBMO5vGIgiRBQExECoFDDHDQZjxYAXXBgILzS7BtSQwa1QrJIgX8MLW7MAbTggSZB9UfDTT:9IkoAkQQ5KAgovzHY3gSh%SBIUIhQaWZibABAECAmAUZWKigpeLGMGX0oAKQBk4S:HAJABgGJfPd2XEsAmAGTxj9Z:zPvfvn2Ht:5jrh%gyF9b22Crq6fZ4uIyFwEQA5ubZ3jxf:LkKi:%sf7v2LFFp:g:wbsA5ubQCTDPC:zDhw:zTADcl2BFoCj8j3CwNUC0:4vT:%rqGq:9H50QmP8X7f8v7%z:1jQ0HmM6R7eIuE69QZLrCxlhwxQER7XbuhiBUNcQ021g5hmYXQJ1Mz6aEDDFwJQrBZTxgUjGA6JAX0VoEwM2KaAGEw6nkUGghheGCQJVCKhZA72stCzZisP8kwRdRSwJckEW0IYDCi8s7FyCvr6hot9wQOGFhSIJXnx44dra%o5vOCBJQBDJgwDlNgAZBtjY2OSFAcpRADMMEN0AZpq:LPLlWj:cR8u:TPiXYX83b97mAX8QACjyUewDFP5o78ctAv4w77%2tsmfgxhYXl7l8:8QAHgdXoMcgPn5eb4NACf6c3NzvCMA9wV47igH8:54PYr:xcUl52et49kH4vS:lKf:YyQCp:9R8:8vRgA0HWecgAhIA3mNMBq3eH2D%gZVKhz1butNidC4oKNIgrr6hZjxgyPGSIE5RjCjUWMVA4YgqJFMKqIgRhAYkkB0D4z5XQShQsDIHqgwCUqCaDHgjxaYHQKBEMLQjAFjtICPF0hIEuRPeGEuiIJckAQUXvhiJQGFF1J4IYUX0oYDCi8kqKMh33IARBjgAd4CX1lZyerq6nhLvdkFgCwAKQFkB4A86UeRDwGAE358DTDnjzR:udoPbf8o%lH8I%gPs:6Y:0ehj9N9FOUo6tHejxV:q6trvPiXz0MC%K9b5K8VEuA4DwXE6T5EgCz25X2Awl:kBhzhGwTq6uq1038IEBT:6IYQ7f87LAAam06wIMcTciJDwq8ZLhF82eC9tlFFiohjrL4pTB7Yug4WWINCUA7M26VA:RHr2kO9c0ANGZyOFwRGJ0FNzQQnXAiMiVBCN5jQ21QQkTkQGlRYES4JykNXHfqUcYLrC%PXFYatL%y1rzLcEVFQzOGFW%koyOdcApIEFF5I4YW5IAnW189SeCGFF1J4IUHz:Xk8BgAJgOA7sRKw3Klfqp2aq5H9:vciDBCoKwExBoAOACT:y4R:swMAX6PoR5o:RICUAQj3w1w:in%AEECk:KPgV0EBf%rUaTf5X0iA1dVVtrKywjMAZmdn%ek%in4U9PPzx:l9dAOI4l%MB4jCf8E9:T:OxQZCAmtr63jmgQj:K%ECBMU:uiF2vP0fNDUvMkljGLJwbz4R:hoLTQax10%M:54G53tq8GSEKiZcMQAZIIntLpBiYCGA6CJQxwritiaI7QR1YWLANl7gMe38xQFTHC17QMkf0ORAtY8%SjCuywEr9qBCrZPAIgfKPezdAp4UMDYSiK0E:U5B328EEMZtKYgfNyhuSdC5Q4KgfQudBBReSBsOSBJQLgFtOCiu8ML8kATPn:%FwgsJIgtjAJAAmHvHCTiKYWQBYCNAc3MzHwWQYYByI8B33:2CjwGgC0BuApACAC3:auI:JMD9%w%4AJAn:wj3QwAgin8k:yMIEDkACPlD%z:m:HHyj0wA0QFw2t0AcIoX%JOT027q:ySbmhKr:I4dO8aOHj3GT:nF7XF%KzoKjrnPn2DT09OB038x%7%PF:87nv7vC4AllhVawmluSfd6i1Z0cbCkSQZfCiy6osIlow6EMGngdg1oIwVmQOGcRqgYCHBYJyAHpn1cOaB3DBj5A9USRQxojOsYskCTA64gsK43tHQOlKtyoHxIEwNlkjKJkANBIdAX0SGQCT05l0tw5swrOyQJOossvJAkAYUX5msuAUmCrZBKDVJ4IW04oA0HBI0h5IQEeJkXwEjBRyAgkvHr6%tZf:8AHwWABIAAwCiAmgWAbQCQAOgCQMGPW5kLACGA4h9z:zj9RzcAOgDkyT:a:0XQ31nvdmNj07svQwFR:C8trfJCHyGFY2NTXAKMjU2woaExftIvxwFEOOAJPhKAW3QHYKQAz62snHR%pgYt%f:gQT:5H8U:uiF2NP1f0tyyzJLQFEPzFgm9tlU24HH53LIuHAyRIESBS9NiDHGCQBUD5jiB2S2gdwzY5IDPkQBRcsDaOVA7w8WANlpQM6VR7TEZJEYSWLsGlM6BCg%7HChXxUC5ito9ILcR9Fs2EKQ7RrB1UZDvGw4yFwUdRbjhgMILKbyQJMHOjBzQhgMKL6QNByQJiGLoBBCjAHv5KABOxjEKgIIZJ:BmFoDsApAbATAOABFgdgTI%X%k:kMAXLt2g%cA4OQfrf8o9AVneOEPAWBuBsDJv0z6n56edYr:Kc7o6CRf%4fTfowNiFwAmQ2w6D4m7mOLAMYaROt:ldv6L07:8TPL4l%E:%WCAGg9yZpbV%y0hNCaJVqiSCAOnGsI%aC:vqlV3l8KkE4HQnBcAV0FxwWKFJD4nQNHfUJGCgTzAeob4wWBtYMgbLygdiZBDoEpCExJENE9UKWuOQzmEVS5osATBBWj0VkDslNA7Q7QugLiOgRerCTYmih4sZIgPQFQiOGFbTkgCgpXElB4IW04KGxJUEYbDii8sGjCCynAjtjOrQBCAhx0:r1fzlvlsRUAq:jkKIAUAMgCkKMAn3zyGXv06GMOJAAEgEz:R:s:BIAM:kPxL1v:RdGP4v%s2wGAwn:DEwA4:V9ZOcWOHEGg3zxP8J%ePswmJqZ48Y%ZfrEWcNEt%k8oIkA8juIfP0NtrWz9r%AbD3D6L9f%yeI:J07:QUvbKgvQetJKs0LYa1raVFZZptfXCZcILVwknExDPCxrBLsOVpT7IWMNVklwQhcEnig4ZuFoACEMFgQRkiBMEESNGtRG5hD4WwwuXLjNMeVAdVT3gDFmoOOuN%SYckBdb%gGFKojBOWD7qhAlABICkkCIQBsRBf5xbfhoI3CC2nDQcHmEtCGA5IEFF6YS5Jgd1FvOCDJUJyIPIDdPBQQyfg4KUceQFNTMxsaGta6AKQA%PzzL9mnnz7lXQByMwAyANABgOIf6f9iBOA1Pvt:6dIVt:3:PO8CgATAfQgAFP0QALiFBBArAE%5a:7meYr:7KxY9QcRcPz4Ei:yFxb8ol92A%AWIwwo:tHJoM79y%A:tP7nXPEPWttOMdASymoanMqA1fTZiqCwsqIQdV2:Q8EXBWHZB7YcgxMuxz2EKDimEyIKPEkQCCgMHzXwwwrDJUFtfZggUFcczkSuN5SCIJBFYK46DJUCo64UkBsL3KBBNz9A7QjQNw0owYJFKwlihEFpt3P9uO4AO%mMHuSzJCiuXIJmCi%k8ELacJCDIwe2jQe04YDCC2nDQXZ4:vw5FeA5FQq4mwfj4ZRchALWcQmAghxZAMgBALIDAALgyZNPuQCQHQA4:ZcZAP4IwHU%BgABcO7cRR4ICGQnwPq62v6:ydP:8ZngxIkTbsDfgnN:kXcGrKys8lP:paWTbHl5hX8tOOmd:Nvm:jHmAMmB0:%cK:65ADh0mtk5lZDTGRJyvTY7WZcIaUkMSAdBczqdCt5owpJ9HAGSwIYnC0JEgdFN4I8a6CMHfljhfGhYYZ0nCTKUA5GCYDpkvaEhBtxuAX%swM0Z8LIEhryuAF8I9KfBTkuC7IUX4rGSEpMYEcAFwFZGC7YyfrDTGw5IEtCGAwovJElAuQQUXki5BBReSGv9clMC7Hc3A1R6EgC:N3UMQBUA5ggABIBY:3eDnT9:ic::YwwAXQAYATh37rzbAXDWnf3fZGfPnuXFvxQA6jiA3AqAIh:ZAEICnORfY4MAugFwHysD1eIfc:8o:uXJP%SGKP5fzr3iH7S1rzGPQ%HYi:g1K9772g3Svn72BIIuEZz3ayivS%N7wHUiJURop0LUWMKSIEoWKB0F%riBLZMgXBA0xIQVJpID9fHjBeZ6w4AYMEcLZM6AmyvgBw1iTECMCvghgsGNApmRX5IgKAEcSnVsIiF74wXbF16YfyMHJAkovJA2HJAkIEmQH5KAwgspvJDItfWASMkvKSlVJEATGxoa4psAVAGAEYDHj5:wEEAU:wj:u3nzlpf4v7EhWvxx4n:hwmXe:g8RIDoAzjvPn%P3xRiAEABqIKAs:iEFsB1AFP5%FwBu0QUg2v6bWV2df:KPPAP8DPLkHxsPRPG:Kzf:DNraN5zifD3HWAsnawIhTGCsc9oOpfE9aZz2OeRLBl8WhHUeGPkJAWGgSAJvc0LSbIKo0MLwwMKgHDDEQEP0aIFtk4FdDtgCCYUM8IIHq5RNBFwIuNsGtNwAfauALwayLwkyEQXm%%2klFsbSQREjDwIEwihhX0ubDjoIklA4YUkCSi8kMILt1ESUHhhoUiCPSQJaPVeXvx85npAXwLUOgV2I2ttbWN:%9s:egIAQYCQAMgAkCf:CP7Dqb8s9OWc:%nTG1wIoAtArgGUxb4s%MU6QH0jgMgEOM1P%3HKDwmAryEFIBRaWlq5oKirQ%CfXvyrJ::%ur8clVeHOjaZzkYoQhYoRLw2SAbX98iiROCdCetuoe9c%5D5WZva1:afwfazrAdIJg4iuht4V4KtsyBkFCGwUtEuB3xJcEIPL9TkgF0MaCsOG8NHC2xbDOoawgSBLXfAlwIyfLCq2qVqglMptw9UjnEqIqSAXQYMbIMkMNmO68vrRIuEJN0G4TIgH9cg5rskoA0HFF6Yb5KAwgspvJDCC7cqCnp7%0gS5FF4YaGD9vtDhw45:0YsfaHrAXUJUMFqampYQ0MDL7hx0v:06efss8%e8Q4AjADgMYT:Ye4fAgBdAEj%l63%p06t8xN7FPRiC4AUAOJ5UwqIkYANLxQQRb8s:AEEQXNzK2:7R:GP708W:6lUX%DkX6z7y%E:6:bOMwwEi9tcZmsC4RAK%:bNkKL%jE6n5KzCmRiivu:1NHD%I3RFgdal0LZmzyrgYkBFlQMntRWLcaGFmhxwuwcaEo4V2LYY6MLAssXAkAPqWIGWMVDjCoHqKb6BQEiBCVcKjFukwKgyNiBGB8rKBhWSiwGxonAwhiGFwS0wkIgySahYSEVikwMlJRIhA7Y3vHBnJUG6omBgYCqPJQGFFxaGJKDwQgovzDdJEC4KUqmBopcEQgBQeCGFFxb3OIAuAUrcFYHVvNhGLkBbWxv75ptv2ccff8oFwJtvvuWu:rvJrl69rgiAczzoDwJAzPCv8sJeFvtyNeDm5jlvNSC6APAaKQBk0Y:7eAyrAVH8NzTIk38U:5XuzL84%cdqQ:XkPxfm:iO7NdqdgjbImSxxlmXr%tmXCKLAD36v56LpOu9yzsX82iXjn3nTYUNDEx0RHQ8tbSqnQ%VAsINADy7UuwfUkYIThhg4oYwWmGMG6uYCFbsksMkBdaxAW2VYC9zxAUUOVEMOVE%xKs6kLgUqxehARYUQAuWgfNiQAQK9iHepGPI6CwRuHkGlv7XAzoj:WitDHuVhlIehy4KyhNsSwkcPFDHgygFfEuzkhoM4CZBbkoDCCymXgCQBSYKk:PTT3yiXoCA2HBygDQcUXkhkUQJgRSAKbJyyYyQA3QDNzS1scHCQi4D33vvAWwN4:fqrXADIdn%1A2B5%aQnAC5cuMhfI7cCCBEgBIBcDYj3ofjHe3ArWv6bnc9v5PkEVVXVvEOhrKyMp:37xf:u3A38s9HhFKtxhBfyDl0m5wJs6fpZkgiy6FeLffH5Z138Ar:D40KQ7osGF%xo1wnjnPE9hOP:HCpCZmAUo63D3vHQylE7CNwxAy%XIBhcaIoBf%WhgmWkQA8ntGEPK2yMGjdQRgvsKw0tIYTmVgJvTaEIGKzE%EDluFO8j3lCQMcVBZU%sqNABhJyqiRjCRkNpSJWFAwrow0SuxAo00Ye0pEAdkrLXsyGg50ZN%gmSUCSgHIJKLyQwgspvJAkAW04IEmQQxJArAg86Pz7sMwp0Dd5NwAKcCECmnk%AMYA7t27z7l58zZP:0cYoAz0kyMAKPrRHSAFgNoFoM7%yy6A1tZDWuEvWv7lvH8FH4:A9wZR4Rf:u:Kn%BcC4DxLH1shfz6LnEuLdOWB9j13n2ednAsuF1lnj%QS6%KI%:Lrzkjc93bbuBDC%Vg6vM4CE2UkwRADQg5shsuBQHiiui3BlwLWdYfeikMTubVA6SAIrDk8YWDfZBCeQaBnDggpYOsY8HMF:BGCKbdLAB0Ck26WgGRco8pjQqc6jvFkVNkY9QhIggqVEb%Twe1mCJcAAwkDDpMEH76IDQfBMYTsZBPQhgOSBBReSOGFxSIJfFHQ1zdEkoDCC0kSUHhhXkkAFNWYqccJO0YCcOKOtnshAkRHAAp0FOqQAVevvsLefPMBL%AxAnDp0mVe6EMIAGwFEGsB:S4ABAWK4MBzbGlphV8LXQaY85eFPz5LnPpXemv%MO8PQQFRkZfFPwgvSnVQKAdJ9t7Mr78dAuG8UvirRb8o9Ltk0d972eWKi3o:Crzukn%drIDv74JP7O:snN:R4ODlFnTYRin8vIG2jmBAYYu37jA4UpBsxaFl3aEiCpojBEEwpNC2zcAdK2jSMweALwbmjDECOTow7eUKQAxIRL4AmPapkUxtDTe7QDDhYRUIFkEg5IQrBbxuBDf8sHJYW5GojzUkyRToZ%UVAx5lISsWS0G21yDyLoPwkQQ9syAsuFBmFlB4IYUXkiSg8ELacFD4Gw7KaMNBnnQT5HJ4YW9visILc3ZF4G7nf4v2Ov9:IEYCMG8PEYAWfBTlKM5RpNfXN:CiHUIABXxLSwsv5nXauCjwv27hrwV4nyj6G5xr1fNOA4T84TMgHZBHgE4E89QfouLFFP8vZT9XoEs9tc4Eebrdk2WyJRBUiRAo%i:wzxJFtl:gd:deFaQEPalXWE%f5KqL%Lo7pXI1Hnlt:jkS83VXgvRe5nRpmB0J8vcX:N0Eswn03AE9uFAJVuzYsGwz8NccilWHp%yhhF4ngW3F4QonThJYOwmag10E9g6CY7x7IDBKoHQL%FLAxuFQamqjmNGDCzXRIIMMpyMEgS8JAt0Fbq6BLwP00QR:lGBY6QoYjg8nrBh03jOoZRL42QTieT9vwO8OCAiALYwapDWWkNH4QS6MHORCLgFJgnT4%7::bxRemMOSIN9zCWjDAUmCQt5wkH%SYDdtOMgxCSBHAlB0y2wA2REAEYC2fBTqKNiFEKhzqffkgEQU%JJ67zWi4K:l4X7oMMA1xZx:udfuH3bqv93Fv:yMl17axcmeAAgUlZezfHp9KXiqnub70hcIFwJFsIfyOu:E3z3d14txUdTrxb:JNU53yqUv6rXutTyuuiiPBSSDC3:dlRAxENaFIH:Xlz1RY88nUPIbDDFg32igBhJuRKxePK2hjhnYJUGYKLAEFaqywNZJoOYQuEGFDaDxmMtRVt8AFlzMboF0OBLIJNA3GbjUzvLwwqAoCJMD01Yx4K1C1EYYxv2cAZlbYIwKmDkCyRgKhhSawYOhqw6TjB4kfV8SEZBruQQ9JAlo5CDPJAGFF1J4Yb5JAgovLDZJQBsOimvkQBa:CNcT3QC%CEBBDhGAAh0yALP5aNPHiT2oqqpyqfZAce9:XcULfVHsV:KCH9eQp:2i1V%c%KPwf:Gn:j:zCn98nlgt%HLylP849JPoIFZBkCZZv35GsuCSMtN:2T3xNwv:V7zi3y:IRZHf23ed9fZHcS0E8XxPXxTX0sCXCd1WrgYFQc8VVwRcMvIJooMLY7sGEq5nlOsP2zpMSaALAz2P4HR8YKEqDdyuAlUQeNsM1NWGTepaQ1UKHNPWGtZLGkxZEMZ8CHOsPkQQcElgFQMuNTOGEJgOjBLINYiVlhWIYg2iyaiFkXg0gWDbWqB2Eeiku:JQHz2IkglbHDsgSUDhhRReWGSSoJ4kAYUXUnghbTig8MI8kwRqN4AqAlCYSxkgOwMgBARlHJziS1Dc%1%Xea:B6zFegFR:0eZ:wG3190:8X%Spv2z7F4W:KP7xs4OsXT%8XT38xDkW7T3bcP0widBzOXD67XPJEAlhJ:6y0BbFuSj8byi8anztMnCDpay8anAjFOt1Pa5bZEK0LJBCoEf5nXdpQkDlEuvsvpRIDHRo6w7PRWxm2PTHCwJjBpuRsiAMf5tB2GYDuyAQoYUrxhaDJdbIkWIgfLVhg0qjSVAg6JsMFkLEgNpFYOsasI8UWIVAzaQyNjCp5wnIkYFKyVjaaKIg7U4Ce0dBoMMgZN2hyDEIFwHheQRbFQRbkQS9OSAJKLyQJAGFF5psbFwsmg0HfX3DHJIEJAlyWxJQeCGFF6bTDbDLLYZRlO:RZACyAlC8QwhIUNCHgRN%ccp:wD3p3%%2%e:1Cn954v%ig:6CP6sga58R3qLuk2i23ZuXt7S2x5DO9aMFQoxcSKnz:eqp%TW38L:uFf:2wl8t5F%LIfw1fSaDJq8GSA2Kz5Xfhx3n%%9P0GWg:c5N%SIESVAMCPTVh9EBjIGVkBmsb7QDmRAuDdTOguCWA3XUYEXJIlBXHPqCwEQIg0VB06IhDiwdBk02QWAXAno2gZ5PUFMrCXYJVHPMPAFTCKhEby3QtyGM2VcgxjKSmKguAy2HoHzQIgMGnAIbJBEBJAkovDDXJAGFF9KGAwovLL7wwlIKLyw6SbBnxyQBQg4LSRKoIsAskKUMEOzjCDEQjnjdXqPo11v9X9ypv976L0:9pewAWRQA11j6hM:DZ4ckM:S2eXoLSmCf:r2%4hT51wTe6foNljIK:t5%tXi:6aJ8PejTF%BWDDe3gC4NUhLn%8L3rIsBo4vAKgWuWcYK1E6LYAChLgf80QJfEmS6zSHJ%kczu8DIL1A6DMTogSIGTCngrT80swhWlJWHK0oXgULzssKSO2qgYnYVuAGFqgwwugTq6lXmWG2dyhFFCFiCBz0hMG3BEAQB3I0ExtpDfU3iWBApCKrGop8PEC4ObLkFemeAMjIQmzVg5gbkrySgDQcUXph:koDCC1%sJKDwQpsk2Ng4x6HwQsolKKYNB4UdXviSIQP0k3IU80kRxfVur%AWgXsv7dhqP10AyJ8pywIgqtVcoy99:s:::X:%1:0xRFwnO0JBzvIHi35R%Jsn%2qRrRTeQ7dYv4so4m8HGbrNXydubzuvTcLrIUS:T3xOuGAISgubIHhVkQJJxIC61cDfUNCtbidwMTsIdC4Gido00a3nFwjsKxBFB4IvB4JrEDcs4YWn7XJAkQStZnChJaiwyRw3UHII1A0Gwc0FWGnojw:UNSwYMmDeIgOOOIX:EaVDQDKjSQFfDMyksc5wUukkmNDXFlbFMR5LWG6BKghMEWDbZOCvO0wiA7ZbEvTluSSg8MIXKwkovLAwJAGFF1J4Yb5JAgovzNVcAhTSuRdeuCuLZKeb4NSpUwEZ4HcE%EghEIZ:2q%G%72UU5kHctQBZO1zeNHrnnzb6M0i2bl%mEAwCvzQ4D6jpb::1UDLfuAEP6xQH:YZsHLHeZ3CsI58TbqY1xHXtwsDLiEUKZDSpMBNQwrYxMAN5:cqsYgVpQvDOqahdBCEoa5g7IrbahCR8eCtQ9RyDIzcgk69Y0CXAkougXWzgewgUPIHvIBCY6tB66orBRQ5wMWAWHHobywwVhl64wN6OGG9trlg3ttcYMoAjlUIhK0pBFMJhUCEJLBQVR1Clb:BwJQFlVXBnAJ1o4FYaThsyQiwjwekv5kg1yUBhRdSeCHlEtCGA5IElEtAkqBQwwuFAKDwQlqFuM2Ez6:nGFsSCMF5:uCMvtm2L0:vZWF9xyv6g0X5XcGIzuDIGwp3g4y%wRkYieJuOMPh9HtIUfC68:O4DEr8roXUwC1DDNyMEAPK77LvhqV7IG5k45WI9Yf28Y:uVAy9V42ViJeVoEO:48AbT%i6YGw7iAkyNCRBW7vLoQ17KGGbRJcCgbWGWpeAMkJgXV94LHQzgdkpoOYIhOYHBESAhRqV6QyZsqKJgiodPnJQOWFIALsACEqAdGRAtiVBP0mCAgkvHBiYJElAkqBIcglq8zyXgCQBhRcWjiRAAVw84YUkCV4Ez58:Dz6eZN48PvAuGj3sLhvXDxMFRrK%d8JvL:gFZtu8pfA3C:1hs0i:5xT0EqXoH70XYMjjvs4YuGdw32Nw1GUkDPHZAyMJhILZUaB0EEgxkOJSQHJLEQTGn4NNCljFQHDEwN6lEdYt8mr4BgZ1Q0LqGg917HZHF3q01Yii4yC49cDWMXDeyxroCGQN2MMM9S0H:ohB66F1TQx4nQK8S0B2CiwHZIAZNNgAlM0D9SAgA0wBYEqAWfvKQasAOLwFCTATKQG0LoLqKYsEcHMHlG4AKQHkSEB5xXCoEAiMCaTNQIBg7kAm8iDuNRReSBsOilcSUHghhRcWtiSoJEmwQ90E6%ubeRFe%Pz5T6y5uYU2HBTZhoMdIT6oLpvBddsTjJcKTdN:zTLH798PzPFrp:13%Am6V:ArRb8o8JWif:R%AFHYv%kzFmTYyoMY7O:D9QZHTRRBwL8vRUYossL7%ThK54A2WuCPF4jflztSEOgceC1mU0GQQCeGN4YRFEa2sEV:rEFeQ%0OMXMkjM0TsmMAayL5CIGZO3BBo8O6ItESTuiJgk3W7o0WhMkAY2TACxkU4YKNcvuAKwNUEWDvCPDDBG2ZAX5uwOHsUDMTjVUuTLuESQGbCBhnFVwESPywwHKtOyCOoQgGQ7C8lm8oGLSCrQX2roQk3Qn2jgIKL6TwQgovzH9JQOGFtOGgsCVBGW042KIkEPvf8y%8cG1tvejDC9fW1vJHAPQnDqm7lYg%heDz6V9:a4LiNauA0L8XUdxq7fxem75bIHvFvlpM%4X20OgDBVngP9DwCvjxt6yMcN5WeCsE:zXDHub1HggMeaB:X1JO6J0EWreAKwT8sYJg3oA:RqDkDAwk7eq4aR29iPr70hcSmOgFL3p:B4LdIn4HgSIFlBGCLo4UAleMjAE:a0ClU0OVBxe0UEI:c8DsEJDrCk95awoDIqBZioBlqwQIdgP4MkAECc4pHAngrRusFcR3C2RC1KiB3j3gbS2onnJxVxcG8gLGDCGg5gWMah0D5VaGIxiyUpERQgjYrhcvCSi8MF8kQXGFF7ZReCFtOCjYXILtkwQUXri%fpY2HMQgBABtOMhOeGG%bjh4AQx4YXRB%sNILA3sSffbc:0kgsIM8rtjzPTf1U:4vVZ99eReFtRKoe0U3UNjgmEPtUD3GRl:xy:iJyTvRPDzGELep3zOsJUwQSC7CUwxcE:gSQEZQBgtA%JlzS2j%A8PW9RHFyL%zmrdCrdCxk2kFLjhjg5c90YHBLZQQ1vugI6aP9ClhBLKbgHRHaCOC6ijAqe9dYQ2CdAouwGaRDdAA2g84RLeEVBnzQiYixYDdToIFvSZNTicEeGdBFEiQGYGBLcORK0eDBcEo1onQfq4aworh7WVhekjZIEQA2rnQX6FF549e502HBSwJCiuXIJmCi%k8ELacJBFUYAiqqysnBeDFF4YLglQqBbqhgOSBDkkCoLBcncy5PUEZPfaujhQRUCSdXtytv%uUvj7Lf1%%37YCb5Z1LsECvd32CiYtBXz7zrPuUyqPDS%ThP3miMeIdLA:Z6DckAVGYr88EYbhBzRxgaG7iobD9wT%cGkmCf6wc0Jmf698YWA2ilwW9mI8JoiAiK2TLjP92hbEULyDbhAEGMGopvgsiICzls6AjZcASBCBPlWgdZTIh%gBZy0SIBFVwKcsEgAdANIhAyoA:ULLmESIIQ6lSOh6JIgThrMhosALgMO29cXVk8HZUC1uVVAp9JjLBKtm6DSZDRAZQz%a0d8ksgEufKwwh9LoPBCCi%kDQcUXliYkqCeJEGRhBeKwp:CC4t5wwGFF%aQJNCT6oNEptCnKw%0FPwMrh:5OTZJcFsj7eJfnvSPqa36tlN7v7gelXgF%c8VbIX%QzYGplTec9EfH510Hpt8T3k%CF7j8zCciYeKIHg3RA6ESQFjhGDU33Rg:vnIQt7bQOBxx9LKbyv8wzYdBLMLkuDnG7xuiICbycIs5ViJ%3Xgdf26TIAQgAyQOQN2CSBEgNgs4HYCKN0Afj4AJMCKOwqw7HYCLLmdAIuxEkCIgAVFBCxYpEAacqAujMwlgXXsIFIG%FKgSiNs5WASxkORWQR2xhIyahEKpiAYVoIOh2jDAYUXUnghSQIKL6QNB7ThgCRBToYXkiTIw:BCW1K9XE9nJVIY%AW%vg5PL:ozv36UoIBgSNB5MGLM%Ls:L0:mH7vvC4AxRQAoJ:7%Kb9%ki9O86MLfR%zcH8:UMiPO4%NT9v4wEB:Xlwrhsn3DVFgkQWaHHAFgTZWoIqA%26WwD19G4FWmIeLIdE94OIW6eHF:RuBUMYAwxa8vyviPv8cKSaMsYRgLsGt4FhCIBRRHX14TcsgQGdAQALwNYS2TgC1G%C06AZQNwa0nHQ7ApbdbIDgxgCIgHouARwaJL4QqIsUAUkFQRodBFaOhI4dSCEgggqNTIKaWYsMmFHGBeLEgEUShI4VTIjsASvjoVRWWUhDEnhSQFl9GJ0VMJizaxDzPbww:yRBF0kCCi8kSUDhhRReuI2SgMILC0US7CluSaCumgusplNavm1YxYF1770s8ENW4CW%flBSDFi7CMy1ff7jQRmhfE9eOv8Dy4m:YDRw6v%u38ofKPb1IhuFd7Dw9wkW9x8aOI:NfMAmZj5MG7xPXndsSsUuCaxiYOKhO17gdgq4IoCHCroBiIOGCBiMK8yH9RWFoaJn%J5gxE5gM0MM4vu5q3coDPprEPmt0pkg:j69ESs3gnLglisBrnkjAZ2KBGhHLkDnOaf4P8s7AdraRSeA2Bbg0LbmCoBT:spAORKgBQQuafkAYjzguEAJC1Spk6MBfDzAZCFLzGeAIgnU7oE6P7BQFwKiS6BaI6xTICgI4iRBdcZMeJgCoVIdTaiciO0mgAyI2mSQmSDYqiggSUAbDii8MD8lAYUXvlhJUEuSIM:DC4ttw0Em4YW5NHJAkiCBKBgOXUdnX10nuG:HK9yDJ:teYe%8LvPr2%WEFA:arnsLg%YKP3Vdn3fiHyYA3vFb:LVTflsL:0OtHT9Y7PsFeLDI:8i7L4r3jyw8iuCjNHEFgRQMniSwdw7wEQQ3o0B0BfjjAUIEvOmKgDe1EEGBLL7vKSsVowp1deuCvsowTFYFPxO8KTBWNcpQw:6hN5QuhDvGKMJdt:BXcyHCVyp6XSkyKHHoNksNvibyA5ANgKDAniuss:uyHwzYKToB:FEAVQJAAKi5AKfcXIBV1gQR0HySjwU0GQGBWkaAJSdAlwJHRXigRB0ZqI8iPRlQbyE9UaCPGvirDWd1lIyB6poworoGLNREMRVOtQ1fEoR3GAg5EMgzsIgBldyTBPkRXpjbkoDCC1%sJKDwwsKQBBReSOGF%SYJSkkSUHjhi5ME2RIAI:wk2H9ucOyei1K847pecr7BWBRR3999iwAIEigsR%%HCABby78S2mdp79fn9v1if9x6qi%YcE:y9cI:rMB:LDgsmNwC4hpJhMGH9g4EZdwAPzt%L8MIEsTWAwe9GyBMBMRhL9iHtHDGMB5E:L11tx24Kxv9boXgqX6:16Eg:r6Yax39DIQ3:c4HidJlwLMG%FiBzAR4ha8b7EQwYPcl1tF1kbWjE6DzvFP8i06AtnbRCdB6aEPgCYDTQgBo4YBSACghgUo%gJcRYNkYEM0xf70g56ixZvAoa3Cpr4:CLPrdxxsiMN4fO4agCQFVDChdAxHBg%GS4LAxZuBTE4N1PCFWDFjARgQvC0FZlWi8LkoUREuCYZIERR9e2EXhhZRLQOGFJAkolyDPcgnW189w8ksSHCgaSfD8%U85HV74:wGlPoDR3IQ6ewAAAABJRU5ErkJggg"},{ name : "R_hero_png", data : "s1432:iVBORw0KGgoAAAANSUhEUgAAACAAAACACAIAAADlBPxNAAAAB3RJTUUH3QgYDxUFiyrERgAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAADjUlEQVR4nO2ZPWgVQRDHzw80iIhRMIUIIoKVklbBxspaQjCFwWAjhmCRzkZs7CxElICEFHaidoJVmhe0lVjF4iGIgo1KCAEfRDJ5c2%zb3d2Z2Z3BYv9MxzLcne:vf26mZ1mes%cyrZWxnau38fAJPc3CYDWZAwpABvetn2YEScpALuvW1EweECoyaT5j%9tJDrTN1B3t%7PxkOnQIoHzJycdDEew71TDlj69hLMrxc2nwe06g4s8FKoCZGkYzBzebIlNc3Bw:dET0kA0K1oS51BR3WHhnr04hunoAPQsob614drTiER0HbRQE4v9X50gk8KV:KJ2UNguNw2Py:isoKCsfStwrwCGWCm5nfnJlj6Zmc3MMRg2xccg4W18ciQnH48Z66MSOzZ10fBTBuxcHxqBMx8BBr7BQQAXwcAu5J8u4QR7KJLEzdM%e3153Ddd4y4%cvdJ:EeIp65fe4jWJG30wChrj67hYX3r17E7mPXFw44mN:1ZrQiU9b9AugQNL8pR64ccGqwM%3R8sWvg:Xlns0w5pN4gGn41wdPQwxUvNVBgC%YJzhVfIZU:moiNyK:UrgNM7PIf5e:9yWuZJQ:eqHBDClloSm20kb8R3NWn3Ar5ccg3xQAbeiRAlCFHlJAcuihAKSFHjwgM:RA49ZBRuiBigEyQw8GkB96MIBWGaGHDJARejCA:NCDAdDShB5SAHSRHX0oQg%UaiNShR7qzU4beigAjk9X8qdvA5wgR:hHE82irZ9:wbAs8ahtpXvXhQFkfFASALrwaR5NBdgvuWl0YgSuq%cfNXJ3aKD0MfDDBVqSqWaCHMeKrQOSUXKhoWkd9wooD9Buc1kAOUN3%q713XWABN%dB2T67iJAju8eAxTx3aeZX2a2797EXUcX4zHcO%WAUr57ENAq23fnANm%exBQyncPAmjpfXcekJ42MJJvRAm%u3SzS0gbpABUaQPZVtHXuzuLpqw76%pL6r6b883yrqOJDBp9cBADLKyNg:kn6:8qALF7Rsdgp4GdXDHn%SV9UwSY:IGTP8oFOB51QiSrA9iY3IWGs8ipXF:uqc:5:S3BOdgncziJkT4JiBzvZ3URKn68D30YyigZEQBYU:jeUKrA1J%6Pxtv3478LpJ8OC4OOyWTOE1ZRu46yLeaP6j5g5o:qPmD4YIOQKvmD6JW8wcR1fyBUDV:ELGaP6iAUoD:NH%wDSBXe4MjeaY8AAAAAElFTkSuQmCC"},{ name : "R_sfx_walk_wav", data : "s2227:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAHAAAGhgAkJCQkJCQkJCQkJCQkJElJSUlJSUlJSUlJSUlJbW1tbW1tbW1tbW1tbW2SkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2ttvb29vb29vb29vb29vb::::::::::::::::::8AAAA6TEFNRTMuOTZyAaUAAAAALG4AABRAJAYWQgAAQAAABoYmFqyfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAApYTzQ08wABdZTsdzcQAgQqX8L8DOCrJe3EEE0BVhIxDy5s8isZNECBAhER7jHJgMBgNOAGA0xwIHAQGg%D4OBhYPh8AAgCAYKBj:iB38Tv9YOAgCH%CBz::lAQlwQDH:BDAYDAUDAYDAYCgMAAAA7R0PW4FNHWkLIDp18xEZjMNxiOGjlBQgXrVroXvFyVoQuQARQIt1OyaIAWCFBa4KBZDti7FajCD4Rnf:TGkSgrUbI5::5gmbpkWDf8VekTqkSEW3I5LI24HSv:%1LEBQALnHN1vGGAOX0dLWhhjXeQci9Bku5Yh5hzI2cUClegETRReIZ3a6B1JU1HhDC5oH:pX1woPM:7M%kZJmY4kvne9eBq5gjLxrRh36bweY63Pg:N%77h2c23%TCjL%8q:tfoNBAv2m42kmc7pB0IPbNVCZBOQZrMrwPKMHViwwJg9hHROrceYomMWpfSRop7PjnyH6ExcI8vc3nblF5ID0UI4zlpUsRTiPX2aZT0XoWS2pVVIxmjlXu:c3s2bc:9qL2L1RBEyttuACQokf:7UsQEgAuUy1rkjGupeCUr9GGJvXAyygXefdRUWvXYqLimWiuKelbJ5FMM1IoEpHVLfoy578LlyOxfNPnCzMivQ9fmYAb7t54ItWSnyJXKfyCB3d6ShPz3784Eg8UfE:PklHvqI1b1LAIACUZdprJQujZPLT5Xfpoy0YgRsxFr8ycIBYJ2R383JH9bDe6w:MPtPLlqySUd6ghITY5xfUvmIV8wK05UIqlJlqjr9rSe5Ap33Mqoub5Fhff9mUXNduscvvyXzTKFAAVLZY3AjXGG::tSxAUAC7zpXUYYYaF5omycYI2FqPSlqF3lsjqZvgdliO3ASyL4vUy6xOW57kVcz2ziNCXgdx7bGy6wk%uvbyoj4RlKg6e4z0fc0gpLWlBibQKlSmsScfFBUBOEeKzDx457ATcbgrwIIhS6W7ZNI0nYOkQij7J5NDBELYIafvHMAU%urhCJyHRaTz%5H89QQ1e7%SNX4aAkhoheRf:T73nCLPNtEnY5oAEFTl3UJ:Flc9w%h93x7rVekq47%tfTZ5T%us%cT2oyFVkpE23Iqjv:%1LEBIALVQl1QYRauX4W7KhjDDUCDi7q4esxt5HSdnAkqwORKzQ1%GweN4YsnhR9AS0cyFJExiNCpoEx3ubM5HX%KqnYSrOjGMoMCDBq8jVUj3TP77WZ:bVGeUf:aZYQXV1yvu:hAkCl7XW3UJlAFGsOPwtJZqtothL8QOjQ5m%rEbNIKKGG7Yd1i5b%xVp1GBA:hCigVRCkYRyC91fDlNTVb:A11NTBsi5aNjfKdWf8h33c7pyFiZd%cwmZe3nQfoN8fgvVCBI5zeWS5waiAP:7UsQFAAqEQ2NUMYApmyumRzDQANUqsrHKMuXSY2H%kziapNHJfJMMeuHnwDazujv67bcHLC8r6YnJ0iLdnWz1::e2v5z9q:vJ6H3EaUO9:Fffnv9A2Wf%RK3wldKKAIAFeS1rSWW:6dCHsZ::QAjJKtL:gTULqZPgBRECGCRUly8SpcDlJUkvLpqJaVjl60fiyHaVDmSJbWj:mzSsyNiRqS1Jf0kCcsnGzrR:::udJxLGcunkW:::8upVGLF5R8xWSJqiakxBTUUzLjk2LjGq::tSxAWDwAABpBwAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo"},{ name : "R_sfx_block_wav", data : "s1670:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAAE5AAzMzMzMzMzMzMzMzMzMzMzMzMzZmZmZmZmZmZmZmZmZmZmZmZmZmaZmZmZmZmZmZmZmZmZmZmZmZmZmczMzMzMzMzMzMzMzMzMzMzMzMzM::::::::::::::::::::::::::8AAAA6TEFNRTMuOTZyAaUAAAAALBQAABRAJAjsQgAAQAAABOQM9AvXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAAm4hVAUxgABiptxtylCAjMQwbgfEdWws5hYscbJYJgTA%BACAAABAOCIeLDASxLMzM:Xr7ze:zSlKUvf5mlKUvf5mb3usWOAgCGXB8Hwcdwffl3::8HzXgcHw:%fwGAwGAwGAwGAwFAgAAAlcAS2ZVMDkowMYyvcDvHxOF3gKmgM0F8AYYAUCDz:g2sHwiDgup:xCIPmGSI8Y::w8A5hBURCUcz:8ghDyoRMi5Ai5::pGxuT58xLxif:6wUWPFCKgAAaGlFxKmC4HD:%1LEBQILvIdtPJMAOXMK6Q2GGRmIgNgiDqNlqmsjHnS1JvDezLf1uf6%V97uJzlxutOWi%:7XNfH61AVlztaNy%nnefbXvy87ylQ2mG58LovtGP1947Xu93fvU8yao6E6DYKyb%WE:YAJTlDMWoqVI7kQTHA2gRyZ6u4AI3llCEZ9bhKJxkFXlObACSOJbVftVHJJum8CoIKaKCgXoKb4LFZFHGxQUWd4rEKG%bGCjhpsqIoN:8uHTd:hUFx9EyKx:vTZu0HgAADoHBNGAwwzv:7UsQFg8vQoxBM4YNAAAA0gAAABINJ4BGSXDAqqrNWMvlxF1N1ZqrcOAGg5LANiCUBGIKsSTgnF1QZNnpysPjlw%SojJCLRysPkrh8lfEkpGxJWHyVxbA8c0eZiXQRu59aWZR::::%1UxBTUUzLjk2LjFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV::tSxDQDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX:%1LEkgPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ"},{ name : "R_sfx_missiles_wav", data : "s10866:::tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAmAAAf1QAGBg0NDRQUGhoaISEhKCgvLy81NTU8PENDQ0pKUFBQV1dXXl5lZWVra2tycnl5eYCAhoaGjY2NlJSampqhoaGoqK%vr7W1tby8w8PDysrQ0NDX19fe3uXl5evr6:Ly%fn5::8AAAA6TEFNRTMuOTZyAaUAAAAALAgAABRAJAheQgAAQAAAH9U2j7qpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP:7UMQAAAoMYVq0EYABdKDuVwwwAA%AHAAAAAwAUxjdz3dwN3:iIiCAMDd3dzQDFvlwQOdQIOKA:BA4UDGUB8H%CAIBj4jB8:KA%D4Pg%DhxYPg%CAIOxACAYggCAIAg7:%7gmD8kkkkkAhGnpy91svmX7ZAGsIChAkMFx4LFOCx2go5sLIPOm5mptKGLDHi:L4lI16cCDPGY4rZUjqY3nmdyrkRG%PFNSQ7KFHoLsF3AImTScueJAGpXygyRTIXCY4pYkkUgzN1XuBwVkHwg7:%1LEBoAMMWV1nDGACW6XriQwjsm16yGhU6TCRZEpHKrG2w5:VJEiZ5BGASPaDvXD59Mp62maixwdIvVByWImbnX2tFfDek5Qjn4g9vy%tlrFlKLmrUhZav7deJ8M4WiD2f1EXSivtp2gQdUFRFiQW%7xoBSqxMyNCEHTqkC5YRQBsSk0cMU2lDU8zNAZn%tLul0zLJWTtNh3K6c4J3MISXK7ecSKPSM8t979v9OfbYdAj%qRwCHUNBZlPHdugH6gP3z::ioJPspMyIKzaOC2DP:7UsQFgAs4XXOBhGoJjCst7DCOgSA4WEsWCDYU7mRA5yVDJ3cxZwh7X7me%RH1EHpvSap0YYyB7rLRfflNTltTeNn4Mn5rS0d0e7:KMufTOqf7RD:sbZFWKNxluWcuN:bGjKkCVSQAWZglAAaA8wgGRI6DJNNkXa7OkMKTw7HEyxY0ogXxNG6x1KRkikYFWOXBM8nhacVMGyknOUnyxvOBvdDN6Tln2z:Pfm8ysJa:nsS4TNzcrMOK1RDiWmipvtu8v3Wd7sZiKRmFlZAqBMys::tSxAUAC3TPcyGEegl:nO6wMI5BIFspkjLVYnNj2BlUJRkENUOIxE:sqtUNFcmwsKXsRka6sSmqSEuZw9XXdRNANpL5e8DWXfoocI3Jo2S5:YH9KEr1T3:tJsZnfS%DHx3YI%fnlZCUmCVpqsUZiA1M6TFX2FBpkYNHBAp1RPZacnFY4Rg2OuPWOrnn94cNuMZbpLkRmtqvJuDc5c1yQyzcQZnDi:YM8QHsfHj:CuJYy41QIoEJ2bhsn9DIb4YqWvkmjBlCKmRBQgFzA11OhiT:%1LEBQALjKtvAYxpiXitLeAwjwESJbAjlohnZR9aphR5KCDKFeXp06c4SkrqZ6gnyCodN5pYQXiUfs%d%y%ZYCkOExfdaSSrzyvJsCdNh6J:R7tPan1:mFGDPvmFuYws9rpeT:f9AEoQAGRyaoxE8TzKu3MxVMze7lgrNVZCamkY0JGXo4uUjPdh0pIchV2XnNNK2bOpc7e9j3Q5obubf5C4x0%u%U7mJJnFo3mWZ05wzqJkSGZUzEXUuVBZzrfzg3xp38oaAAAAgJDQE3XBtv:7UsQFgArAu28BhGDJSSEu8DCOsOlQMaM3lUMmhGSsUvkEtM:KWmOkJXTyNO8bJyKGbw4E5egf3Ap%D2lbjqwTeOacr23xHYF::W%Y0WU49czUaYSpajf8oJ:H:7::GuawkASqqzICZ3clWawoc0t4UOnu:NiZSqeA4GjIc6iK1PCEICI:ZiRgyMEMRUpGVc9BaXadSGdNUFkwKs1PgF5sUmooKbHEaQyKkGWC2oWLM0OqRiCJTDjKs:ZQjTeIm6K1EEJzvMvhEiuAnlX8t2m0::tSxA8ACny1d4GEbElOA28wYIxB0bnMzJQRMhtc1sT%5IYe:dH1XcF8lHcdddfkiuvZn3o3R:beD3:37J7ty2%K23Id1G5Ne:u1EKiy2qZWsMg82QcnNRO%sIzclDZk%orfR9NnXRvrCdty3%Fq2%97ICe7kDJR3Ov95Z%9EYEjhiqVr7gIX:9ps:SLWVHCM:85Ky1bQNHbK%W0%2919LYRRlWRsRuTO7A2cyZyJsqyVVqnL:ebPTZzhZ7P5mzcrpWmWVxFCUD2VN4Qv0Ml3rP:%1LEGQAKiJ91IYRuSUyTriAwjsGn3JoHf%MhJUzc%I:7cQ:3:GKLEJPw5AEbr26%4uT65X::QUIBACksN4T%UOPabZR8rssLQFqkFzTtFO:YZISf:1c1vcix7SddWlGRso8PmGMQZ1rqMJc6N3hO6QOLfwi4Z%Gbf%:d109Z5mJH9f%::%av9e%KgAACqWHJBTk5EO%ejJXKeyU4TU%yvLpDhScjIjDTJN0bY0RMRYiFN3YirO1KVYmr3aKUlWPKonomcwCMSXERwjDqhMg4VP:7UsQjAMpA63ChhFqBJZhuFBCNuE5WUipm6o%L%abbkAhCmMaQhEIgaNsRgJJhZkhIpEItzdTFhY9KBkmNFD5DpQqSXIs:MObSCHHHWoetCY3SZa5jzYoppSBEPbfkDFy09MvIRXpgCvGVIAABAE2mEeRcGFOp4MwdDXjnTLfRDXCGaSWBtCBCEaHoiQC3aRmTZnIm1FGk26NYnGYSf1RtoKZjyJ2%UKLeobAy3hvxZQ3oDS5cb3OGNoqoUgSAR2HiGepxR1JkyUxNMAfQJgXd::tSxDMACgj7bwGEWQFDBy4gMImRBZt3grRekL76WX8HcgfQTuprzum23gU7t2dXZP:jfT8n0tb%d9DqTfmthzpl%V%%QVv:O9XHSczP3fyUkCwBQECVntKce0mf5XZdyEv437aQGLL5oTjeVAXgkROSOLCGs7iv4dtf0t1mif6vLOcTibQC%RW6e:8:%AL:rrh2:Z%:VvYte:ZVEhDoZnzdtwghpAqpVWpGlNXNUggir55hhpKMRD5MPtfW:qEUxaIRI0YcGqgWqo0oHTYPH:7:%1LEQIAKXEVvAYRkCU%ILnAwidFZ9Ulll6P5GiMY3Hjvdt0kvP:di70xvu:qu5:Kwqt6Rz2dsX9u8bspxuoZzzJylYslY877GUOt4Y4Zs5FXUtSQPInoy7mMi86HLBTY6E7isdMzTIU0TVR6EEpVjwTEkJHQCg7F3WDDCCO4RufE5N3S5zFGU6dg9YkgIIMIrThRYSQBexKBBOBpE88RoMkAyPTX3NkBH1NTIFf4VbfrzFEzkOCexSDxgk5pyikK:jSrrbw5xm8FWVvn8sGWNP:7UsRLAAoQ92wBhH5BToDuMCEMAexgEWSFT:esX5a:QT7TKjQEDGIrhGdU4bWUodqdT7MPkbNykbeu5p06Sq2hq7uUK8lyQ%kWV4LG%xtTV983iRbIcfegRW2JfYG5Td3m9l3L:9RbycfZN2jdrf73Sfa3RAoMxERJFVbAFGg0VTySGKKMQyRnTnWUJ:zpUD7fErAz9zomTGM:LsK5UcNO%Ipn2h0N5utfg:pvnd93mdXkNuqp9F8tdF4:2Um2bL4rS8jzN6nT1bMxx3bq33hu::tSxFaACgi3bKGIeglPgm54EIwJ3CoIG1eEHZ%jKFDApb80Kuy2OUjolrOGlsfehLqQoqPGOPCG8MiYcKvUZFCxMkbpiI4pomBoW0ykQNXS5xLYTskHzr0P:qSsGAYNCFxSBUVBXGXc19HW16tGUzCdaTTgbVF0ebIYV3dQyafauBByjBf3nHdy%13ebum1Jth7ru4DcPSDLZK9pcX:Pn%1cb3:1m3:5XmPv1%lSQgAAAWOBLhpAkO0045q2ViUZCK5RkD63TR6FaqfYfTaWD3:%1LEYgCJ5KNqAYh2AUWH7eQwjIm9vW7g%rLMa4SB03:1kXLbevbGjrVOKRCt037Mq7qV6baa:OXWIG%b:r5n:XR7:zcy7W8QCIANYgmJBhaJGF00e9SrCKcvVa0trU2aK8:I13M66Hcpmqex0:c3Y:Q6cKz88obGLmWzpzKFjcMmHUWWElCiCqTpmjr3%xe23QjVp:N1:3hM:h%lmaVUgkBKVBUMYnFtgq2DYwSNBccOQQiHj5M8UTLY5UHSmqLTAwjmTIV3pa8s82Ta7ndLTv:7UsRvgAqkhW0hhHQJVZst5GCMKfMsViM7VhwDaxqS5Djakq0rb%asdWpxMnoPhnhaxSh6bcHDcSW8ytJAE:nPd:HpKUkoRIAACkeG0eijuFpRtnfIyHPhHoqVlYVLInYubcXi3ZWM4uKqQirJbmpmZERwExF%YMti4DLBks4akT:lIbcOugnl2nSOkSNo1PC6nZnKanYIY0E2lQlCtpqc09tN7IkhAAAbyzR2Ua7AxhhUGPDWjupZMstGDJpzHzeCEDPLIbC3nu3R2GLEkH6u::tSxHgADIE7b0GMa8mAKC2oYI7ADE0U%lDlkeyetWsfgt551Y9zNGgp0yI6A2JIaMpE2SqueUDAwxKdYqhplIRFvC9bUs6ejdVX1dz7OOD79MFqiAo1wUCEHUFOFBCwGCUkA%LDoJGgekCDQ6uHMUxBhZlQxmyhxhbE7IqR2Ujyb4ztYcPPwgOEV6QNZopOhVhwROU1s5XrGVXpZZ1O5fxgi8mZDg48sQitr2nrCPGRr3DgYG2VKgAAIAAAC:FzfTtGTAmCaIo7GK5bU:w8San:%1LEdAANJZtrIwxXwZQkraQxirg0q8H3t5M%jvKijuhnvdRTMTxJSdAzmceUpWgnKzCtSKKaXzxJRrrtRiiGRLmgWnuCF6g3KhoIFpYOa%JSlxB9z17XoYfIjSIHU%oAhgYNRGjJi0cKOP:QCjUmkv4WxUKKSs5o2oQexBg6k9EyJHx16wXGB0WaEgkc8w1AyJV3jNkWZFyJYLDQE7CKDJaBmp0koqPTlaFBMwOMz3UkJqW:Cu%vezfAg%l9mP1F1AyXd:U91YIAAr4UTOKpHv:7UsRqgozlFWuDGGvBk6DtCGGOgYTwrZQyS8OcuDAB4Rm5kwKqWqwGGw8Yx7BMISS7kibkDo8eLRR8qhkHfMWRCK0hKKQxFYvelAlJLKXXfp9cfjZWb3yNQuw3Miw8Dc28DvSQFDxpSHSeSEW8CoRID0D0hCSCAtlSRmbxNS5MMOVNpGZid93InZhdJSBM2d2jepGDHacdDMXDqIupCUdYUIvPvYrkbLeRPUu4%Tfp5ohpXuXTJDWQUFzYUE5MyBw64fR8Uz3RVroJEAAABpWD::tSxGKAjHE5asEYZQFoJW1YIww40QbC1cmVEHh5INpVd5DpOlJ1b2W0j4owpt4poYB3KJcnuGAfCS0XI%YWnlt7X7nEHbldpHCr25zvmA%oz3am07KmEBI5voUs92Fj:9:u1AgI0fIegl0R4ZrDjEYNdIQM5FDkblubPOm6gREhBtFF3jZ3lEwjHzWjn5axg3fzuxCdtSZf3:7DPb1:d9qH65fn:aqSjEyxw%Qlr%c%99ba7:ZFxswUzM36mbgsKoggSSmoJ1jhhxJKcKCXTl3:%1LEYYGKtG1tIYxnCUiObaQwjsHKp0l%obSF3INeka65zCJ2CfFnpl9vFVwvAbVb1Tr0:X55EETM3Fdb3GyOXQ43iv5PPx8Dyk15KPd13v2KBRhnVValJgvFFQhMSmTqwyjHyHGSkGvW4dhgq9YlcNOVH7BWZ6wLy4ykZVCDjLm68jx%x:9GtVJS7mGz4z8hcjfOb3WAjkhvQzTZJ:wClnQyOy41Ly1cGQOv:9qUAQABQSDIGxUMZoQeG6giYS5WyIS%u1cslahRiNT8qMqcEP:7UsRrgAsAlXOBhG4JbhTt5DEMgbJC2Bh0AedLpx07yC7EFOtb4BhvWnfmdzCFt56593o%l:c69HGre1Q7WJFC6OrJv9v:X9pRiJJSkrMyRSOsDY4LSxMTFCJBaisZEzSP6r1C9zIQYu0z8REw3yiZhZ3OgM9pu5ITJHWAX%1jM53dlbqW17Yyn%op%Kad9v4zX6rvgv5P9akkkL:7ttElUhayZConBSK:Fr6JYAp5K8b68GI0zhOhOWceJ5sYmiRrYdzPNhFvP5:lNrTrKZIX::tSxG%ACtB3awGEbolVkG4wMI0p6lmRSQI0vz85bmT7zPTe8jM9KNXIOaxiXw:l%1Dz%%%j9e3UZ8xBERSJ3dGRBaFK8ZVct4qbozoCUlLmNiFpc6o7lNa:reO7FWu3JoV3U8hYRwYmRoztiRtFN1fn:pawcu5B3HDt56AXMu69iREnfmzTN3s::rO:pzsl:2rnOVClVVHSkOJeQUIi9PHIzGFSW6pGVymD0N0DEq:B:6vSL3l6Gg:qTYjFa4sW3Oba7EmkvG66l3LTW:241:f:%1LEd4ALHUFvIYR6CVoWbewwjok2KvuaB:PdEia369PPxhf7G9rUhFJAggxtvDdehwexOEhgohka7TbhwqQLOzIiq38jUlmdzNndU6e7fNLwipdX:rW7ZwyMV0LNnW4X1%5P8e372:t:GCpfo0q:xzpWv5R34zm:o:I%9rM16UQAARKGJMOTDWqTOLO255s0LWpwZNFhwzYMnLChuGD1yh8Li009XMieaj7SGhZdqM55myv7nnuDnD4WJjzG7U:zt:86:hrH2ebie49%iT3Gdv:7UsR9gAosXXEhhG0JXBst7GCMQeYYxdrbdjG6SSASEgADEQOKINMMzHVOxXjU6wvMwcX0M%MWjoZM27sZXemWZ2%R:K9ZU4RzDdLlR73UzfvTyBs:pBLVfHvsv:%2jKBD%RL5dgbi:T6LcepgbAPXPQsoKZXzMEdhWBUFqZGg4oUZu9sJtwqWM2aaGUYtSaYpiwmBhCNa3bG0hw0JbeUPcYOUS2XPDWruesQ4u9Tz7EYPPCuro3u:xG1:PNf5jAgb53G5Mn6d2meVX9s8VnCV::tSxIcACzDtbQGMUcltm%3wYIwBgBAABvoKiR9SK1wumzvrL7HT2JWKMamZ5Oj0L57TG3Mq%2gLRKRsgSXdEkrkG8kb35nA1Cc3:d51pNM33XrqYPV:1xGVh16FFH1%953urc%9HP3uUZEBQVrYGLWsSBmINYMcFoohjuwpo8BZeEUumb8Ul007lw7YegUybzNFe5TqTU30Ve0gVZjdXKmb2FapP6yiV3KW7Pd4NY74WtztfI9xJ%AnXDfeflx7wuK:%MiMoAr4nGuLNRIjnKb:%1LEioAK8JtxIYRyiVUUrewxDYnXcyEtYe5RDiblWvua%SWTOPISG0n8QHPYjOMcQnjV452LoX9b2KE2%P:6cPnOFZe5edyqEaQ:ytI8SHy4kHoAKFz4umauFe92mgBSwACAAWm51oDTroiLuyuUQghSncXCl3emU2Ws0SNRzpocN8alrZVah6k3HJ6ZapwKhHlNu6zypDt%Caemxc4kJHy4qpTTwGCiRkIA%lASWBU9:::RAIXowQ6otQjgghtN3ENJbZSGjRV83RGB652Npv:7UsSSAQtc:3EhhG6JWqeuMGCNwImYslENJDsDSpS1yejnUKPd7lrWYtFKofEFkeDLzNZkZOS9:u3LapVNxLlWqeYCzHjXf2Xb%KMGVegvmQAGstxHXOpu4EHD3ekvTsKDSihTopHwTAF3E5c3a6k:WTO9r56b%Yo7dC5XI3Mzg41FxR7DQZLMDQtBVrDah8G1j6kFG2z71u2Tlsg0uXKxZgDSYbESg0gG5xmpGGBOHKAinFTNbn01ehQ6n5P%7uQ6oNYi9lbMnRmFMJNqQhSe::tSxJcAirzjb4MMa4FRJa3YMI8IYwKitrRkOoidbf5Cz95mgk83K9Oh:3OFtwy3r2FvJnse7:YIM%r6jv2vKiKGQBJKdcJ0CxR3BGZ2t60jy3PUn9V4Sn6Cbc:WU6p2fTSDV0zQaJDCCJ4K2OLCw2WQiFOlEo4YYMDGyU28Znl:XyjKx8J3mxSZVFQbAISUOGg%egAADSiKGDvoziCcFFsEdaxqxDLARi1ydRZCwsi2C5eKO60t1B%YpARtCDQTuPGDQhBYMn0LCQPpaMLoKvb:%1LEn4AKvNd3IYR2YV8f7vAwj1U0HnD:uTPkKLOnq1KFd7JSVnzrt5BKEw0gAAADjbQ0UBoPUGID9VMkV6xoeY6qusnVM7nNUkz7AWZnNaqKp1baT3dXFFacy9iWRSjm2NnY1WfR::9NidNHVC9qbvah9HxjkKojBXBZEOs98Gak:i4iGAkqWSVh8A3rIESB2WJuaAw7NZMq5n5bE:ASjRPvzm3O%rQ%uyKRZscI23pZ%aWFzifkRFPQu8:vL:92v6FCaUyRonj:PgzOnqb65f:7UsSmgAp49XNBhHyBUJItmDENQDI5y7NsZjJv9:7VMhRAJtXVDADQM7HoYkoZVATNBbxM3DgltIz7jdBa7RCaobTM8wRByDu32xyTNmMKITB08HPRVWPSkSsaYMwYB28LuGBBilGy7GtEB0yIGKhmRH2PipjWxJBAAAFzbD7rjJMw:p6ZBZYxkza3VXaM5u6MzKu8Ugkh7N2VY9%%UDbbBD4oq59z15Nalwu8uEFiGliodQeLNc4GBQXASL2kVmj2mQb2onK7lAKMcQAABoeA::tSxLCACuVvb0GIe0lgpy5oMo3JwYQcQwGRjuLOIdjIysquzI:i4u82JpewHAwxQkwcdo0Yia18CAWjPm16IyABkpFRfnbkRy6G187QWgWHFl0aNMNHE:iEf:re1fjE%W869fv9UggAlbkgqTvLEFE6qrsmnTzqMfvjsjrWlJPI2pXLyKF7l%4aF:5Zk7mlhehHNyPh3ksimqptz:RrtVdDsZL1dv0N57n8%y2r0Qth5eHhMOCiiRoDSxLxRRAB634gcCGYAFthFDBABhhnHDj:%1LEtoALBK1zIYRwIUuSbWRjDDi:ECTwoJXBHR%GeimuJN9y2kPLseePK0DEMI%aGA8IvZDhTkv5i1EseeNqbgZT0GB0gsg4KmiKYF71nJ4iGRSlVoupDHHJCF0ltuxwM6tDugWggCiRQPKYWZkUWsfrkYIUcDMqK3r94kNs7DswQMkZzcqYYKYr6E3QL%PeCX6pdFpwFPl53ENkl136PXJ%d:%tuD6sa0X6sQvv:9yPxeolEAgK%urhxVMcajmIExc42CcrSjvZIK1Ehl9pov:7UsS:AArxH28hhHdpXCrtnGGKeG6IHdAxw5dTKMS8bbDfvsZ:kjvv9SNuiKh6G:ggjXPi8ELe33qZ%Ogtn:Kgv31Pz5mdz22R%axuODd6DrXk:Esk0ECYPQPCGUSkIKwikcSWC4Ux4xIgCkRtLNpt27jN1%G%JouMGeO5fsKOFsyZH3FgkPBYJMQMe4e1caEkTLS2ioisUiaskeGWW7Tv3p11e99VF3pYDcVtNRyNwlIEJUGEBomZmxtw%%JkunZKMZx6ZxHMrZPe5%TK%h0i::tSxMWACuEpaMGEWwFuFW4oMI8B1bLsIlPLOafRioJcLwPhiMgMMDDdPlEn7WLf73Oa2t%SW:91PbI::d1B:jGqfV3je2mrFGQA2AUnBhE0ZsHQR83EUbXJbE3CGaZqLDEUpXflJPTRV44bWZk7EVExpbhRklLAVy27TrRf2tF3GfKZ6xLUZr9sZ0%gOT99CVNZFVi9q:5q9hR4dtRVb4jFqzDr::13D%os0sH2it0WzW%zA:9t5%LRZpIdbRMQo%3uI768SDqeFPi3:x::rbz:%1LEygALaNttIwxrqVaR60DDDeDHnjbgYgz7zTVc6trcH6kriW366j3zQxoQMEJTIgn:AxAGC75Mh:1oI4Jgvz:gt0kiSE:ksDrZjpXJo:9CBxrbIdMFDUN::Lmq8Gmo5VahuWH::7T6jjsaHob4KdtL::%5tavZ4KvZ1ba7DbcH:::xVezumNncIbPCtBhRswo2::::%yQ37JmOyauyTQn1rPrYfPsQv:::::d5E7yJp48pAeRMPH2IT72ffD74hZpMQU1FMy45Ni4xqqqqqv:7UsTPgAt4u2dUkYAqai8pBzTwAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuOTYuMaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq::tSxLIAEzF5OBm3gAAAADSDgAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr:%1LEwwPAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg"},{ name : "R_bg1a_png", data : "s1939:iVBORw0KGgoAAAANSUhEUgAAAPoAAAA4CAIAAABbrnLVAAAAB3RJTUUH3QgZCDgX5UqeAQAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAFCUlEQVR4nO1bvY4UMQwOpyspkSgQD0BHi05IPAkFHRK8Aq9CR33PAdLRAA0NAuorabiCESOtovw4TvLZTmaz%orb3dn4i:3ZcTJz7uW9twsLZwJnzqAfb74%O4yVYzM0x8Ry36J79e7RCdK2RhaTmh:gXlW2eBC573:DI%HLaFgxTUGScLImJpa7aJj3ch6MD08qrB9OhM0pVcVO0%4R5C4R5jiXxiyf:vR9h5gTIxAsy5qmjyB3Cd8l6:qYcp%uuhuWD3fz:sWkiMOMHTmumqfPN5hPf8Op4wqomhNjBk6fsDOffBtEw5zrYeB5Bac6TioShIOoaRJ25vPvcZxQmAmhD6X1JFVzSlWEd8eqWXfm84c4DjisfyaT7GfMJ67jBwW2%pyd%fxRjhMNySytwuBIHu9qEnDmLmiGqMuScjef8gEQVxBN6858:gMiV92X4uHuVTbtgvfXr6:MYR6Pm1XdFR2rad0FUvvx6Qkcvz:f38C::kSOnyG7iTEzZy4oOBCr9apK6iT03YltDm1JVcyfhSIC141ZO5qlBZD7tw:PN5w0V1XIc3KE589cMOn3isv7ON6gq1uj3JOO9sUtp7wkgc0u3XTtLjAXKySc0gncYFRh25ZELSuW3JnpwnQNERK6VhHjM%1CqiAkTsxhUVUDqKFaVQAhYfE0Jqx35wuIFqicH2l6EhY7lR0HHqLgc4bLeZZGQ5k0nCRkKbdF26bIhGf8Yeci6Z%5ddJjVffa3kBIRkW7uyY2FOnxp4zqCprlopyNRF4p5BvEBDFIXTPD7HQhc2tuuyV65aQmirGhLZq0xXKrxBSLDyV3fu:Y76bO9a6KWBB1:y0kZiatUb%UJfTqH6blIlJll3Nxobp3DoGKluj4TFtMxUxRyfTZjr%BHvGuag60TJMfQtZuieAxh:LtWm0ncq6eK%d39Mq96GKF:B7E70VXBDz5Vx4bmqfDM1X3TleakzlnJLdG:orUfAhBGI1:BZY70VS0Dbg:s0CAnnPt0Y25LPrBnAukEQKWEvowrYFnMtzhA8BWTWFwfN5JKVczRAW0I3nqX:xtMSFR7U1zQOmqARQAcHYxbJqZOHhCTVtbdFFqIMbhr%NVbsSitsG4YTxWabvPLsgd61BiNKumot%o31O1zYJWj5orqohJFHgskmLTq%4jnDb0JFXyV5D8jAu8dNpzBgdW9HGAlzvwNvUIGaKD:oou1NznkMtJ:qaLnyS1YxIju9wX0g:r9McjGHzq3Bi5K8hFwZwDH43Pu0:xdJHEM6hJQ8WQ88eB71umTn45dDUz2Mfrho3QsMT66Q0%NYhz:DleuI7X3d3jDT0jBKMVr:nz:QEBFJMcscvLX5ABt3GqhgouDt72hAAYPpNX0ZOhRJM5EXfG:ldYEKkJ3:eIFjNgKzIjrv::7zz:epOFRfAg8vAL5RmCPm5PZnvDvSq5E:1DPSIWP1FTjFwQLYld4zGQvC3AcVGzynNreE8ZTctdOQXhDdIJ49wLtKXRX2KbbwtIdLlVc:Svubj98jAGfD9BX:D01a0QsBPhv6RdaviivRrHWjR2HA:713SdzASD5r4aefufzPYqbAGOP1GgEdslgHLXz49:6Qs0Y90yL%Ayt3B4qPV%Qi2ZM:fgwkQw3zl0wpkzWFhQgzNnsLCgBmfOYGFBDc6cwcKCGpw5g4UFNThzBgsLanDmDBYW1ODMGSwsqMGZM1hYUMM:nttEXnlcqEoAAAAASUVORK5CYII"},{ name : "R_boss_model_png", data : "s2254:iVBORw0KGgoAAAANSUhEUgAAAEAAAABeCAIAAAAc14ViAAAAB3RJTUUH3QgZChUbz1JcqwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAF9UlEQVR4nO1cXWhcRRQepWAoqfvQ4EYTsqaiCMH4E4OgSFXwB8QWISAiiLQIIvRFfLNoEXyJ%FQEfbUgaOlLRLBCC0GpSMTUVLFYbKCgEkgfFhH20eMe93D2zN%ZuXPvNtCPQ5jMzr33%86cM3fmbIh5%YYjO9rMyBlcFzCiB0:3sSMFTA%wI2egLPumBRRn36iAAPsqwhoSMM1QdlqaEOBjXySiGhVQnH15AZfWzwj7afUzbNTBvpIAYEYmGAsTH10T7wFBcfXk%zZvYdPDwM6mBfjIgQA0X7%TPVlDAqI%5oyFJB91sgULhQVo2FcxYEwiUcDS0pJGxi6jwJPrr28M98x3N9xDK6DdblN7dnZWedWN4Y%BOlg%qQpYW1vTDAsJCFDfaM0nM4phq4:Uq7wCmnT8oTeWTT%EMIr08WOiIZSE3374mkx08l81t1LGjykoAJjd9eBTZEQU2nyM7:KtAVKfW3IGAnDq4WgPIPp:eeBc%M5aAV%sfwOmHCyApJXBk4q0GeAa9uydEp86c4DD537jCaHt7e0opfIhRGmQdJUvhKJIFoCT8Miuq:ZHvlChnjqiSCvgufsfBYsOC4R7OBOcITQxMRF9oltA%C0WzmaxjGID2QfiSoTQ4uIiNuZ%fDjwLNPMMpqaD5ubm:rBxZZRwZJ%9fUT:un%t9TU:iK7%7Yp0f776h%pD7OB7E0zqxBpeGWqlfoYJ4i9E5QGYcQFXNq6DAaNi38WcDmBsz:%ziEzHEX6NEhOYh5L2XD63o4izb46JIB8b:ruB%pgGD9VEsAXOSKPd5%6FSx%O%dJ%cT5X98%:aVtl3:%Fiz75H5u5UNh1etCqkM9z9ps33PHv3b04:su7M%7j4StCd0srErJhPzd6XTmB6jue3ddqGy1h0fLwsJCpw9gjz%LCNCuQrtvngDTTywEDI%ZF48spwWGHvYMUCX55AeHRTvV6xgtnQHI9wUnwTED589%6mxHIbwO6Ha78LPVatmd:9::nlX9:Z0othsV1GGdATOWBmxAJ%z18aNjF14QlvZgO4QgWsCooQkhsbrzgOFt3%XOda9wEhtPONlhg47n:kasfOLNY%e7RTkVlUJIUP:o4EUww%LkxPG3gDcYNMK3Ag1kSRwyBdiOR%oA4Eq8825OGlSTkPoii%5nSr0ElcmQMAO21w1zfBHwmoU2lnzKnM6ObiShP8PZuOjxhpiHhL1QReMKk3jzhdvW0KgAOEuAaZRwurYYpYa66kK:zzzx1U23gxn:EYyXWHgZxllH8q1ItRe29BoCCCR0jQLubO:DBk5FuIiSjcICxKqKGqgeU0UDTIIzimoPIdIQjqVslBRw%pbPwXgPr6iShmw4JyFNAFL0GY558%nHwJyXl63tIRIECO%GcfTgM2C8B%tiYphze5KEtBkYC8J5CX61AwbJQOuSAMogq0XA6syKjyLBFvP9sff4gDuunOW:%rimaVDuEfBkODc3p28QfJulqPn285W2EuPj4:qGDTy10dktDFVEld3M6a3NQAd:PPvzGbCnQmzmRyMgwJ6iLhBOXEBDf%zhA6Y7FQH4RyLMfOE0AgHO9wmx33:lABj1P::qu5HbXVPBExgvsmI0OdAehl3AC493HscrhZBd1gyYuJZHPwVP%HHOcMoXkFqF5ePt3PWxf2g4s20N5ZOYFwmdpUJi3%3DxNhHNGRHcPbXZ:jFhy:uuS23WmAHxsbQ8LlijEpA24XsmqH%O9a:JidRA8rIFOBkny0g9Rti0gACnAMiAnzseQiFraKAqCUn8XdnTqEpx%:ZO0V:30h7gZIl4ST3K73us7K%j8xA0glYj7LleKN5D0RPvXpM7ru34h1suP:YA9xfnS4HvM5qKi06cqATREbo%46z5XNgdWYFDNstBj7m8Wdf4n7VWC2OH2AohARXY52SEHmcaq9Og%8FXSf7DFQvvwUgV6Eug:OCXq%nZyOoF19DTdJ2uteHUZxTnUXCOtibgICeBecwUdasNVrcCCyjvm2cpipYfLn02fX:7DFq%xcnT%Vvu6TUwgAAAABJRU5ErkJggg"},{ name : "R_star_png", data : "s396:iVBORw0KGgoAAAANSUhEUgAAAAUAAAA3CAIAAABLvxcUAAAAB3RJTUUH3QgZEAwmHYufBAAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAAhElEQVR4nGNgIAoUFxcTp5BI0N:fT5F%a2trFM68efPQhUgyLzw8HIWzdu1adCG8%i0sLFD4VVVVCBkg58qVK0ASoQohj10:OkhOTkbhPHv2DF0Ir3504OXlhcLZtWsXuhBJ5hkYGKBwWltb0YVIMg8d%Pj4UKQfHZCaPggBRUVF4hQCAMu9K1dBPnDqAAAAAElFTkSuQmCC"},{ name : "R_title3_png", data : "s5052:iVBORw0KGgoAAAANSUhEUgAAAE4AAABGCAIAAADtmzUnAAAAB3RJTUUH3QgZEBQGpP4nlQAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L:GEFAAAABmJLR0QA:wD:AP%gvaeTAAAOKElEQVR4nO1bS48dxRWuvvfO3HlgMWaDWBlLbIgXjoRZeByhiCyI2Bgh4WRPluQn%I:4F4RlhMIfIIoUFIREBqE4POSAvbAH4wh7nvd256vz1fn63L5ju681ceLER%073dXVVXXejypXqTcMBoOqqkajEe%Xl5dHo6XxePzmm2%ePfvTB3w4mUwODg6apuHj0tISBwE0Brip63p:fx:j855f4dVwOGQjHtGOcaYGuD88PEQ7WnCPlskk:xwc7O:t7XNkfIIb9OU8g:6oPukw6tmvcgA:U%YqyD0cjYanTp26H0tFVxD%wSOTseIwuMN28B:TcRB2U5:kzOdN09STySG4avymUByyI1mel9wTVWE7MBgODdfh6L33fjuPYW2gm:lxOvccFhohgqLRFGSEz9mC0SJRsHy1AxmT3umhAcnB%bkGDI%:i3GVeOIRWALfCxc2b9%%3cFTVOfjfDvGifhr9VLL5BwjeuQqGzF7XYuSRcmBp2nylDOYcuavcUNCYE7078tVoYof%5t5%tprP9dyJwY0GB08uS7e48vmKMDgMEv6kASNBOLgYdhm6uAtlU2UjJmiVb6xVU0fXYA3Nze1MjOAGSA:Qpgr5qLVASNwYlOhYku1YuHmQliTOgTJbUc78IWoiXnYDvnAS6yXg%VxFsezsmv4zjuXIuG1OM2qpUPlaGAgCEJPGHK5%MVbSYEGKZJq9xRv8VZajR:pvEhjNxVVHd1TTwsczS9H2dh49ubNmx3NFJD8KciwhI12G%45BRNKjnHRkUaRt:GGIkAdZhf2pHJK4WGzkqvDArr6PwDDPp3ATirbysoKhBFke:vtt0%ePNlhKUUU1oXBkJjGaEl2C3qegpQGPjTiKOaUyDBsknZEa0S9ZSO9axC0xnQ1GauNt:1QbZEhvPLKq82sI6GEA0:5A1tcNj8I1mCuZEvmze%89lL%iSdHVofkOhlHSCVubZ02yG6WqTaq1f1RrRDrpuLr8:XDD7cjntEeRo2CScbFMFUW2PsSsYlspjnAdkzyjcFzx8555FC7sR342oYDD4q4HCLMb3vqaqbriRMnMNr585u4mtk4gYE44N69ezC2RAPNewZwQOKV8aeJdjg8avXFV%3s7NQh%pNPFjVdTEjixm1bsczQFAwlPve0wHI21ZkzZzpIcgLq5%rqqhr39:fcSNZRqd0B5MWZRhXhx8qcA8VsIjaUN6JDllOBURCrOSD%Us45iN3DLoygO6Rzz8CwErVefvknuL9161aHuoVyFrXiERNAb4OfKE6SykMxM6nOQQfd2Hi8TCdE3hAxDa6oSDpPPyxaYwToAv2KDTIxa3oomX%4AFMcXCqqWwbJfWZ0erJGXJYsUHwVH8FziDfNsuxzDJvqEPTykdpehxBayVaALCwM8fkpY4n:I7%6QGBIBvMxCm3Hf9QhlHNLW0vaY2cWFpILReCnGN8G0q6QRWTkjTSXKfAoprXoyAyljNMT01SMU9IE8bcJmY2UCnrr6yhz0:WJBEzZ5ffNM00sYJjxYZGsMkIpWGAxw9:mdWIt7C5V72uBBc2cm%FATMHIHFjOFIy%lmpKVVkiIp6Uv3RCQf%ruPpkGTJIY7an2GSqKC0zB6FuwxqSguK:pbI9UnMX2opXM%vNCQyGxC5whnk2cfZvk6pnc4OXTOVIghLETJE4SpYLf5KzoYcjTU1RFgj3G7:mXrj%NCHE0eorKxGNDPSJJ71tBM5uqqFEAVZjCp4mBIADl52Wk1QWLAfdKcm9BDiqSoQ6VBtEYz0C29Fo4C0zoyWLY5JVj5rgIbHmgHg7vuJedFM40bFMIoG5ralPCmM2kZHry1WjWeqgLCpEtNkC1dVSOtBJHsBtpcFxEOADrxsp2HgVIioRkUSjhZ8Ti72Y0BBJlp0yt5:61SPgQbpK0Yq8TR5:Hyn8Ry9lrlIbnYrx7ZChUkcKqIqmqLmQbwXEXD208m%pAy8WLdHdRWQEsCj9x%mgFA3vfGPtSaxKpPxc%bp1HpjZn3qkkajqiPOtrJdvesXAs24l5y4AvWXuRjPYWfQ8lx4K%wZSQgUh0QhJfDSjh1x1DD9YFWDyhNXhVX%zxKCnvn79O1zzb%VO3Mbmmninm8K9I8dvGsleE4P%mANk62Ksa9ywgtBgHdMGVmcJFGb8rb120QvVyNbPP9:CFV%RukSV7GWqae9L8EA8sQKuTAi30mL3a2vruKJVl9ymtvZXNx4:K2IBjuQh03ojAa2xqjmLWGAjZPMngzS39UJTMR6PId4rKytReuUwKVfScw2AG6GnoFcRX9DJqg7ZqfB0Q0WvW0pCiNZcfFgcHvasGFaDFpD%p7feemtnZ4e2V3WQNBv3hmSohLgWLQyUmvMVvlOhTCKg8JUIN15qaywUUwmS7MIItg0H2c61CFgiFnHwEbrQROU6U3%uPunQK7ORRpEzaPnyy79vbJxMYddQzNRjcEiZe6PRMJWKe1s3UO5CsWBBTI6EAtzJaSm3UHgNYgqSjQUtcOXbGZA5yAd6oWVlZdRXgF2GK5PA5uuvvz537lXhJgwjaVIo:Lj1GqRZn2mOnltV%Z9ZzrJJ0VjCpDQ4uY91O9Ru:KGXdc45BqzedHpA6vkOE4iQtawXqsnjVSJs404uXry4u7sbYwm8hQrFXaZOBdh4WPIPN6Sta5FNQmd41x0D1p9ot0lBmvEONRFigEq0a%ZmoPlFRrj81D8wDALMa:rBB79PQYDVkzl65fV4wtS3tB2dZPw8oubGFgzCEx4kFgBkJYHMIE35rROIFVZIftnjwmUEt0JhZlDd1wInN8IYglzF440bNzY3L3T60GaySMtlCQ3iyVdB%UteojoTQO5XSsvPo0E28k0ovdaY3S%wAQmGDuhIg2:b39UCqFZeMjdqpRdfPI2W559:vgrV2toLX8lTdjrAyOeYkTezG1AKDFhG7pgiSDJdaEptCMWtM6:9JmLEJdmeblZUhjd9UU0pWrbMhx9::PGbb765cOFn7kJb66VPeLRI%swVqwOWnlplm1LIJfAM8Zu8S7BPC0RbwAKVlmRI5jGY7uMeaKKL7dbkQAKTm%:vEe6L:LPqWjaX3n::dzHQD7Z6IIHk4zTsdrMdCNy9e1dYgXaSavRHtuT%hvsdte9utUXGJscw0MKRxUaMovI%tV1M9PJba1w8%Xhyoe9hnjS7c8EtWrDq2rVrFnm1%inVVaFMKupsaaS9ZCn7QJ3u3LmD%:X19WSygFiaLcnlxbazMfLQZueMU5rhg4M9CKx5:jwp5D15xIJF4XcBXXXgaan2gMTHH:8ZGlvPlp51TwyThztcR9MmegMqP:uwzsA9LpKA94NyjGOwtrbmBydq2lVQeXcXDnjPvPHUstOhCTaNS0mlMcAjoErWFUxI7i%%%OLcuXOK%4UtGSsPIfRII8XxNLyNn4XppCxsXFoaIW3iFGyHfwVv9:Z2rWRHs5Rzt:F4hbEnl4fl2NS9o6UOsimEDVU%F5A3kb:66quXXnpJjidyjwirJlSH:fUUUnZZY95zDHIvjFokHzOas83nB8FdGwdSkBNJdwTFYjLSW0BX4%rrtugM:cnE%%yzz7iI11::RfSl%jDWvlTarWYrnUrEldZZXlYOm9lmsU6plcHhL3MxJWtvjuyXl5ecmgybGlPU7HIfjavzUDEt3N7evnr16tmzZ9laz9WHxbdUtpInXkxh7FoQYE2MJKIQRf23%8YUm2FDG6Kvrq6zI9tF7RwqHhOqQix7ecSrp0%frr2KWfuGYgqiW7XbStpWbzygix5Yglu8N:0qKx52GKWmtOJ%bW0dGgtKoiOUG0qTg6QMg5zcHCOq:%VwbAKcgrhub9%CYTx16kVJXawAyq8mr60hvIe3UNTl0q5fm6DKNhbDJC9Qsj%CoWUoaN7aKiaXZ5Wp6jBblqxWW1tbR5SbF0OxRIJDhtNDC63pG5577rlLl37NlenMfeMJZzIvur%:t7ubg3jY8LwFauVVDJIPpIxGlqPyIAwaK:fPpS4XlJ:nsHj0t%g2JllaWkYbMrA7d:45ZUhxHNgOGG3z6Ldhy3QiV:0vX7587do:lHwBAfiJZJktK7dslIOx2H2IEeYPeVhsMOTeaTTdHAHqaXFbSW4QbH3yyV:8DHh9nGapdXz2xF:M9NFHf3zhhReeeeYZhQ1M35Wj%edtrgee1LM7q17jHAT:FKdmHFYxoWGU9umnnzIrYXF4Yb96PyTrbs2%CQ6m%fDDP0DC3333N7b5OVXAbC4h20wiEz0KWSpXDCYbmRJrC529MlWtAN9:v43769dveNWq1K6OB9U0mwxEXFPZksvx75UrVzY2nr106VdlZyEHfYd2um7qEWX325R3nJdS8ZPEsPJwraDp6Vv2altbf5U:o3UgS:H3GHS1AwoAmZefOHECvxaXZqB5pDq98cYvuWgrJJWtl%ShBRQdyuboFXElY0Wa5CECDGw8AiRUmeeXksCxozqrsQkJtyEDMzvF77FP1x%On6vzQMYKENb44YeS5Zw:f35jY%Pbb7%jyq2ujkM6WswVAz3LSw8h0hDanZ1sxq9e:VsTzkIowHQG63zqv0GAjwQIMNdnNehSf7ajoqW27Mkvu8dVVTrQm8JfCbD:v6GIb:FYEc8S9T8eQEzDyGF9fV2ptqM6g6jOZzmuxC3dB1VWnrqoNqGG:rhRjcB998DMQcRU6aE:5t95VIO5mkFVJKhnDz8%JlSrmd2qAsyhI6h7ehhXOzjrFLVQTbM7RunxmKX7gf3njvak8Qyy9zkOkhznea7GzX3v2czT9z8JyhCWWxjjegBYB2QzvJYsKR3FqlWXbE:hKTyFJwj%BRsaLg7kBWFvAAAAAElFTkSuQmCC"}];
Sounds.sounds = new haxe.ds.StringMap();
Timer.wantedFPS = 60;
Timer.maxDeltaTime = 0.5;
Timer.oldTime = haxe.Timer.stamp();
Timer.tmod_factor = 0.95;
Timer.calc_tmod = 1;
Timer.tmod = 1;
Timer.deltaT = 1;
Timer.frameCount = 0;
format.tools.InflateImpl.LEN_EXTRA_BITS_TBL = [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,-1,-1];
format.tools.InflateImpl.LEN_BASE_VAL_TBL = [3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258];
format.tools.InflateImpl.DIST_EXTRA_BITS_TBL = [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,-1,-1];
format.tools.InflateImpl.DIST_BASE_VAL_TBL = [1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];
format.tools.InflateImpl.CODE_LENGTHS_POS = [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
h2d._Drawable.DrawableShader.VERTEX = "\r\n\t\r\n\t\tattribute vec2 pos;\r\n\t\tattribute vec2 uv;\r\n\t\t#if hasVertexAlpha\r\n\t\tattribute float alpha;\r\n\t\tvarying lowp float talpha;\r\n\t\t#end\r\n\r\n\t\tuniform vec3 size;\r\n\t\tuniform vec3 matA;\r\n\t\tuniform vec3 matB;\r\n\t\tuniform lowp float zValue;\r\n\t\t\r\n\t\tuniform vec2 uvPos;\r\n\t\tuniform vec2 uvScale;\r\n\t\t\r\n\t\tvarying lowp vec2 tuv;\r\n\r\n\t\tvoid main(void) {\r\n\t\t\tvec3 spos = vec3(pos.xy, 1.0);\r\n\t\t\t#if hasSize\r\n\t\t\t\tspos = spos * size;\r\n\t\t\t#end\r\n\t\t\tvec4 tmp;\r\n\t\t\ttmp.x = dot(spos,matA);\r\n\t\t\ttmp.y = dot(spos,matB);\r\n\t\t\ttmp.z = zValue;\r\n\t\t\ttmp.w = 1.;\r\n\t\t\tgl_Position = tmp;\r\n\t\t\tvec2 t = uv;\r\n\t\t\t#if hasUVScale\r\n\t\t\t\tt *= uvScale;\r\n\t\t\t#end\r\n\t\t\t#if hasUVPos\r\n\t\t\t\tt += uvPos;\r\n\t\t\t#end\r\n\t\t\ttuv = t;\r\n\t\t\t#if hasVertexAlpha\r\n\t\t\t\ttalpha = alpha;\r\n\t\t\t#end\r\n\t\t}\r\n\r\n\t";
h2d._Drawable.DrawableShader.FRAGMENT = "\r\n\t\r\n\t\tvarying lowp vec2 tuv;\r\n\t\tuniform sampler2D tex;\r\n\t\t\r\n\t\t#if hasVertexAlpha\r\n\t\tvarying lowp float talpha;\r\n\t\t#end\r\n\t\t\r\n\t\tuniform lowp float alpha;\r\n\t\tuniform lowp vec3 colorKey/*byte4*/;\r\n\t\r\n\t\tuniform lowp vec4 colorAdd;\r\n\t\tuniform lowp vec4 colorMul;\r\n\t\tuniform mediump mat4 colorMatrix;\r\n\r\n\t\tvoid main(void) {\r\n\t\t\tlowp vec4 col = texture2D(tex, tuv);\r\n\t\t\t#if killAlpha\r\n\t\t\t\tif( c.a - 0.001 ) discard;\r\n\t\t\t#end\r\n\t\t\t#if hasColorKey\r\n\t\t\t\tlowp vec3 dc = col.rgb - colorKey;\r\n\t\t\t\tif( dot(dc,dc) < 0.001 ) discard;\r\n\t\t\t#end\r\n\t\t\t#if hasAlpha\r\n\t\t\t\tcol.w *= alpha;\r\n\t\t\t#end\r\n\t\t\t#if hasVertexAlpha\r\n\t\t\t\tcol.a *= talpha;\r\n\t\t\t#end\r\n\t\t\t#if hasColorMatrix\r\n\t\t\t\tcol = colorMatrix * col;\r\n\t\t\t#end\r\n\t\t\t#if hasColorMul\r\n\t\t\t\tcol *= colorMul;\r\n\t\t\t#end\r\n\t\t\t#if hasColorAdd\r\n\t\t\t\tcol += colorAdd;\r\n\t\t\t#end\r\n\t\t\tgl_FragColor = col;\r\n\t\t}\r\n\t\t\t\r\n\t";
h2d.Tile.COLOR_CACHE = new haxe.ds.IntMap();
h2d.Font.ASCII = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
h2d.Font.LATIN1 = "¡¢£¤¥¦§¨©ª«¬-®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ";
h2d.Font.DEFAULT_CHARSET = h2d.Font.ASCII + h2d.Font.LATIN1;
h3d.impl.PointShader.VERTEX = "\r\n\t\tattribute vec2 pos;\r\n\t\tvarying mediump tuv;\r\n\t\tuniform mat4 mproj;\r\n\t\tuniform vec4 delta;\r\n\t\tuniform vec2 size;\r\n\t\t\r\n\t\tvoid main(void) {\r\n\t\t\tvec4 p = mproj * delta;\r\n\t\t\tp.xy += pos.xy * size * p.z;\r\n\t\t\tgl_Position = p;\r\n\t\t\ttuv = pos;\r\n\t\t}\r\n\t";
h3d.impl.PointShader.FRAGMENT = "\r\n\t\tvarying mediump tuv;\r\n\t\tuniform vec4 color /*byte4*/;\r\n\t\t\r\n\t\tvoid main(void) {\r\n\t\t\tif( 1 - dot(tuv, tuv) < 0 ) discard;\r\n\t\t\tgl_FragColor = color;\r\n\t\t}\r\n\t";
h3d.impl.LineShader.VERTEX = "TODO";
h3d.impl.LineShader.FRAGMENT = "TODO";
h3d.impl.WebglDriver.TFILTERS = [[[9728,9728],[9729,9729]],[[9728,9984],[9729,9985]],[[9728,9986],[9729,9987]]];
h3d.impl.WebglDriver.TWRAP = [33071,10497];
h3d.impl.WebglDriver.FACES = [0,1028,1029,1032];
h3d.impl.WebglDriver.BLEND = [1,0,770,768,772,774,771,769,773,775,32769,32771,32770,32772,776];
h3d.impl.WebglDriver.COMPARE = [519,512,514,517,516,518,513,515];
h3d.mat._MeshMaterial.MeshShader.VERTEX = "\r\n\t\r\n\t\tattribute vec3 pos;\r\n\t\tattribute vec2 uv;\r\n\t\t#if hasLightSystem\r\n\t\tattribute vec3 normal;\r\n\t\t#end\r\n\t\t#if hasVertexColor\r\n\t\tattribute vec3 color;\r\n\t\t#end\r\n\t\t#if hasVertexColorAdd\r\n\t\tattribute vec3 colorAdd;\r\n\t\t#end\r\n\t\t#if hasBlend\r\n\t\tattribute float blending;\r\n\t\t#end\r\n\t\t#if hasSkin\r\n\t\tuniform mat4 skinMatrixes[maxSkinMatrixes];\r\n\t\t#end\r\n\r\n\t\tuniform mat4 mpos;\r\n\t\tuniform mat4 mproj;\r\n\t\tuniform float zBias;\r\n\t\tuniform vec2 uvScale;\r\n\t\tuniform vec2 uvDelta;\r\n\t\t\r\n\t\t// we can't use Array of structures in GLSL\r\n\t\tstruct LightSystem {\r\n\t\t\tvec3 ambient;\r\n\t\t\tvec3 dirsDir[numDirLights];\r\n\t\t\tvec3 dirsColor[numDirLights];\r\n\t\t\tvec3 pointsPos[numPointLights];\r\n\t\t\tvec3 pointsColor[numPointLights];\r\n\t\t\tvec3 pointsAtt[numPointLights];\r\n\t\t};\r\n\t\tuniform LightSystem lights;\r\n\t\t\t\r\n\t\tuniform mat4 shadowLightProj;\r\n\t\tuniform mat4 shadowLightCenter;\r\n\r\n\t\tuniform vec4 fog;\r\n\t\t\r\n\t\tvarying lowp vec2 tuv;\r\n\t\tvarying lowp vec3 tcolor;\r\n\t\tvarying lowp vec3 acolor;\r\n\t\tvarying mediump float talpha;\r\n\t\tvarying mediump float tblend;\r\n\t\tvarying mediump vec4 tshadowPos;\r\n\t\t\r\n\t\tuniform mat3 mposInv;\r\n\r\n\t\tvoid main(void) {\r\n\t\t\tvec4 tpos = vec4(pos, 1.0);\r\n\t\t\t#if hasSkin\r\n//\t\t\t\ttpos.xyz = tpos * input.weights.x * skinMatrixes[input.indexes.x * (255 * 3)] + tpos * input.weights.y * skinMatrixes[input.indexes.y * (255 * 3)] + tpos * input.weights.z * skinMatrixes[input.indexes.z * (255 * 3)];\r\n\t\t\t#elseif hasPos\r\n\t\t\t\ttpos = mpos * tpos;\r\n\t\t\t#end\r\n\t\t\tvec4 ppos = mproj * tpos;\r\n\t\t\t#if hasZBias\r\n\t\t\t\tppos.z += zBias;\r\n\t\t\t#end\r\n\t\t\tgl_Position = ppos;\r\n\t\t\tvec2 t = uv;\r\n\t\t\t#if hasUVScale\r\n\t\t\t\tt *= uvScale;\r\n\t\t\t#end\r\n\t\t\t#if hasUVDelta\r\n\t\t\t\tt += uvDelta;\r\n\t\t\t#end\r\n\t\t\ttuv = t;\r\n\t\t\t#if hasLightSystem\r\n\t\t\t\tvec3 n = normal;\r\n\t\t\t\t#if hasPos\r\n\t\t\t\t\tn = mat3(mpos) * n;\r\n\t\t\t\t#elseif hasSkin\r\n\t\t\t\t\t//n = n * input.weights.x * skinMatrixes[input.indexes.x * (255 * 3)] + n * input.weights.y * skinMatrixes[input.indexes.y * (255 * 3)] + n * input.weights.z * skinMatrixes[input.indexes.z * (255 * 3)];\r\n\t\t\t\t\t#if hasPos\r\n\t\t\t\t\t\tn = mposInv * n;\r\n\t\t\t\t\t#end\r\n\t\t\t\t#end\r\n\t\t\t\tn = normalize(n);\r\n\t\t\t\tvec3 col = lights.ambient;\r\n\t\t\t\tfor(int i = 0; i < numDirLights; i++ )\r\n\t\t\t\t\tcol += lights.dirsColor[i] * max(dot(n,-lights.dirsDir[i]),0.);\r\n\t\t\t\tfor(int i = 0; i < numPointLights; i++ ) {\r\n\t\t\t\t\tvec3 d = tpos.xyz - lights.pointsPos[i];\r\n\t\t\t\t\tfloat dist2 = dot(d,d);\r\n\t\t\t\t\tfloat dist = sqrt(dist2);\r\n\t\t\t\t\tcol += lights.pointsColor[i] * (max(dot(n,d),0.) / dot(lights.pointsAtt[i],vec3(dist,dist2,dist2*dist)));\r\n\t\t\t\t}\r\n\t\t\t\t#if hasVertexColor\r\n\t\t\t\t\ttcolor = col * color;\r\n\t\t\t\t#else\r\n\t\t\t\t\ttcolor = col;\r\n\t\t\t\t#end\r\n\t\t\t#elseif hasVertexColor\r\n\t\t\t\ttcolor = color;\r\n\t\t\t#end\r\n\t\t\t#if hasVertexColorAdd\r\n\t\t\t\tacolor = colorAdd;\r\n\t\t\t#end\r\n\t\t\t#if hasFog\r\n\t\t\t\tvec3 dist = tpos.xyz - fog.xyz;\r\n\t\t\t\ttalpha = (fog.w * dist.dot(dist).rsqrt()).min(1);\r\n\t\t\t#end\r\n\t\t\t#if hasBlend\r\n\t\t\t\ttblend = blending;\r\n\t\t\t#end\r\n\t\t\t#if hasShadowMap\r\n\t\t\t\ttshadowPos = shadowLightCenter * shadowLightProj * tpos;\r\n\t\t\t#end\r\n\t\t}\r\n\r\n\t";
h3d.mat._MeshMaterial.MeshShader.FRAGMENT = "\r\n\t\r\n\t\tvarying lowp vec2 tuv;\r\n\t\tvarying lowp vec3 tcolor;\r\n\t\tvarying lowp vec3 acolor;\r\n\t\tvarying mediump float talpha;\r\n\t\tvarying mediump float tblend;\r\n\t\tvarying mediump vec4 tshadowPos;\r\n\r\n\t\tuniform sampler2D tex;\r\n\t\tuniform lowp vec4 colorAdd;\r\n\t\tuniform lowp vec4 colorMul;\r\n\t\tuniform mediump mat4 colorMatrix;\r\n\t\t\r\n\t\tuniform lowp float killAlphaThreshold;\r\n\r\n\t\t#if hasAlphaMap\r\n\t\tuniform sampler2D alphaMap;\r\n\t\t#end\r\n\t\t\r\n\t\t#if hasBlend\r\n\t\tuniform sampler2D blendTexture;\r\n\t\t#end\r\n\r\n\t\t#if hasGlow\r\n\t\tuniform sampler2D glowTexture;\r\n\t\tuniform float glowAmount;\r\n\t\t#end\r\n\r\n\t\t#if hasShadowMap\r\n\t\tuniform sampler2D shadowTexture;\r\n\t\tuniform vec4 shadowColor;\r\n\t\t#end\r\n\r\n\t\tvoid main(void) {\r\n\t\t\tlowp vec4 c = texture2D(tex, tuv);\r\n\t\t\t#if hasFog\r\n\t\t\t\tc.a *= talpha;\r\n\t\t\t#end\r\n\t\t\t#if hasAlphaMap\r\n\t\t\t\tc.a *= texture2D(alphaMap, tuv).b;\r\n\t\t\t#end\r\n\t\t\t#if killAlpha\r\n\t\t\t\tif( c.a - killAlphaThreshold ) discard;\r\n\t\t\t#end\r\n\t\t\t#if hasBlend\r\n\t\t\t\tc.rgb = c.rgb * (1 - tblend) + tblend * texture2D(blendTexture, tuv).rgb;\r\n\t\t\t#end\r\n\t\t\t#if hasColorAdd\r\n\t\t\t\tc += colorAdd;\r\n\t\t\t#end\r\n\t\t\t#if hasColorMul\r\n\t\t\t\tc *= colorMul;\r\n\t\t\t#end\r\n\t\t\t#if hasColorMatrix\r\n\t\t\t\tc = colorMatrix * c;\r\n\t\t\t#end\r\n\t\t\t#if hasVertexColorAdd\r\n\t\t\t\tc.rgb += acolor;\r\n\t\t\t#end\r\n\t\t\t#if hasFragColor\r\n\t\t\t\tc.rgb *= tcolor;\r\n\t\t\t#end\r\n\t\t\t#if hasShadowMap\r\n\t\t\t\t// ESM filtering\r\n\t\t\t\tmediump float shadow = exp( shadowColor.w * (tshadowPos.z - shadowTexture.get(tshadowPos.xy).dot([1, 1 / 255, 1 / (255 * 255), 1 / (255 * 255 * 255)]))).sat();\r\n\t\t\t\tc.rgb *= (1 - shadow) * shadowColor.rgb + shadow.xxx;\r\n\t\t\t#end\r\n\t\t\t#if hasGlow\r\n\t\t\t\tc.rgb += texture2D(glowTexture,tuv).rgb * glowAmount;\r\n\t\t\t#end\r\n\t\t\tgl_FragColor = c;\r\n\t\t}\r\n\r\n\t";
h3d.mat.Texture.UID = 0;
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.ds.ObjectMap.count = 0;
hxd.Key.initDone = false;
hxd.Key.keyPressed = [];
hxd.System.LOOP_INIT = false;
hxd.impl.Tmp.bytes = new Array();
hxd.res.EmbedFileSystem.invalidChars = new EReg("[^A-Za-z0-9_]","g");
hxd.res.Texture.TMP = (function($this) {
	var $r;
	var b = haxe.io.Bytes.alloc(4);
	b.b[0] = 255;
	b.b[1] = 128;
	b.b[2] = 128;
	b.b[3] = 255;
	$r = b;
	return $r;
}(this));
Game.main();
})();
