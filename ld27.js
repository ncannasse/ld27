(function () { "use strict";
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
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
	var sbg = [{ r : hxd.Res.loader.loadImage("bg1.png"), n : 18},{ r : hxd.Res.loader.loadImage("bg1atrans.png"), n : 1},{ r : hxd.Res.loader.loadImage("bg1a.png"), n : 22},{ r : hxd.Res.loader.loadImage("bg1btrans.png"), n : 1},{ r : hxd.Res.loader.loadImage("bg1b.png"), n : 26}];
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
			b.posChanged = true;
			b.x = px;
			b.set_colorKey(6160749);
			b.posChanged = true;
			b.y = scene.height - t.height;
			px += t.width;
		}
	}
	this.soilMaxX = px;
	var bgb = hxd.Res.loader.loadImage("bgb.png");
	var sbg1 = [{ r : hxd.Res.loader.loadImage("bg.png"), n : 9, p : 6},{ r : hxd.Res.loader.loadImage("bgatrans.png"), n : 1, p : 1},{ r : hxd.Res.loader.loadImage("bga.png"), n : 11, p : 7},{ r : hxd.Res.loader.loadImage("bgbtrans.png"), n : 1, p : 1},{ r : bgb, n : 11, p : 3},{ r : hxd.Res.loader.loadImage("bgbend.png"), n : 0, p : 1},{ r : bgb, n : 4, p : 0}];
	var px1 = 0;
	var _g3 = 0;
	while(_g3 < sbg1.length) {
		var k1 = sbg1[_g3];
		++_g3;
		var t1 = k1.r.toTile();
		var _g21 = 0;
		var _g11 = k1.n;
		while(_g21 < _g11) {
			var i1 = _g21++;
			var b1 = new h2d.Bitmap(t1,this.bg3);
			b1.posChanged = true;
			b1.x = px1;
			b1.set_colorKey(6160749);
			b1.posChanged = true;
			b1.y = scene.height - t1.height - 49;
			px1 += t1.width;
		}
	}
	var px2 = 0;
	var _g4 = 0;
	while(_g4 < sbg1.length) {
		var k2 = sbg1[_g4];
		++_g4;
		var t2 = k2.r.toTile();
		var _g22 = 0;
		var _g12 = k2.p;
		while(_g22 < _g12) {
			var i2 = _g22++;
			var b2 = new h2d.Bitmap(t2,this.bg4);
			b2.scale(1.3);
			b2.posChanged = true;
			b2.x = px2 * 1.3;
			b2.color.w = 0.3;
			b2.set_colorKey(6160749);
			b2.posChanged = true;
			b2.y = scene.height - t2.height * 1.3 - 49;
			px2 += t2.width;
		}
	}
	var sbg2 = [{ r : hxd.Res.loader.loadImage("bg2.png"), n : 1},{ r : hxd.Res.loader.loadImage("bg2a.png"), n : 1},{ r : hxd.Res.loader.loadImage("bg2b.png"), n : 1},{ r : hxd.Res.loader.loadImage("bg2c.png"), n : 1}];
	var px3 = 0;
	var _g5 = 0;
	while(_g5 < sbg2.length) {
		var k3 = sbg2[_g5];
		++_g5;
		var t3 = k3.r.toTile();
		var _g23 = 0;
		var _g13 = k3.n;
		while(_g23 < _g13) {
			var i3 = _g23++;
			var b3 = new h2d.Bitmap(t3,this.bg2);
			b3.posChanged = true;
			b3.x = px3;
			b3.set_colorKey(6160749);
			px3 += t3.width;
		}
	}
	this.sMaxX = px3;
};
$hxClasses["Background"] = Background;
Background.__name__ = true;
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
};
var Step = $hxClasses["Step"] = { __ename__ : true, __constructs__ : ["Appear","Action","Wait","Evade","Jump","WaitForAction"] };
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
	this.anim = new h2d.Anim(null,null,this.mc);
	this.anim.set_colorKey(6160749);
	this.anim.speed = 20 + Math.random() - 0.5;
	this.anim.set_currentFrame(Math.random() * 8);
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
		var _g = this.kind;
		switch(_g[1]) {
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
			_g1.posChanged = true;
			_g1.y = _g1.y + 4;
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
		var _g2 = this.kind;
		switch(_g2[1]) {
		case 0:
			res = hxd.Res.loader.loadImage("hero.png");
			break;
		case 1:
			res = hxd.Res.loader.loadImage("slime.png");
			break;
		case 2:
			res = hxd.Res.loader.loadImage("knight.png");
			break;
		case 3:
			this.anim.scale(0.7);
			res = hxd.Res.loader.loadImage("clock.png");
			break;
		case 9:
			res = hxd.Res.loader.loadImage("laserAnim.png");
			break;
		case 10:
			size = 120;
			center = 0;
			var _g11 = this.mc;
			_g11.posChanged = true;
			_g11.y = _g11.y - 132;
			this.pushPower = 5;
			res = hxd.Res.loader.loadImage("chain.png");
			break;
		case 4:
			var k1 = _g2[2];
			switch(k1[1]) {
			case 0:
				res = hxd.Res.loader.loadImage("shield.png");
				break;
			case 1:
				res = hxd.Res.loader.loadImage("timeBonus.png");
				break;
			case 2:
				res = hxd.Res.loader.loadImage("laser.png");
				break;
			}
			break;
		case 5:
			res = hxd.Res.loader.loadImage("fireBall.png");
			break;
		case 6:
			res = hxd.Res.loader.loadImage("wizard.png");
			break;
		case 7:
			res = hxd.Res.loader.loadImage("stone.png");
			break;
		case 8:
			res = hxd.Res.loader.loadImage("crow.png");
			break;
		case 12:
			res = hxd.Res.loader.loadImage("missile.png");
			break;
		case 11:
			this.mc.scale(1.5);
			var _g12 = this.anim;
			_g12.posChanged = true;
			_g12.x = _g12.x + 10;
			this.anim.set_scaleX(1);
			var _g13 = this.mc;
			_g13.posChanged = true;
			_g13.y = _g13.y + 8;
			size = 94;
			this.anim.set_colorKey(16777215);
			var fire = [];
			var _g14 = 0;
			while(_g14 < 10) {
				var i = _g14++;
				var r = new h2d.Anim(null,null,this.mc);
				r.speed = 20;
				r.play((function($this) {
					var $r;
					var _g21 = [];
					{
						var _g3 = 0;
						var _g4 = hxd.Res.loader.loadImage("reactor.png").toTile().split(5,true);
						while(_g3 < _g4.length) {
							var t = _g4[_g3];
							++_g3;
							_g21.push(t.center(0,16));
						}
					}
					$r = _g21;
					return $r;
				}(this)));
				r.blendMode = h2d.BlendMode.Add;
				r.color.w = 0.2;
				var m = new h3d.Matrix();
				m.identity();
				m._12 = i / 5;
				r.posChanged = true;
				r.y = -68;
				r.posChanged = true;
				r.x = 28;
				fire.push(r);
			}
			var h = new h2d.Bitmap(hxd.Res.loader.loadImage("redHalo.png").toTile(),this.mc);
			h.posChanged = true;
			h.y = -22;
			h.posChanged = true;
			h.x = 25;
			h.set_colorKey(6160749);
			h.scale(0.3);
			var time = 0.;
			this.game.todo.push(function(dt) {
				time += dt;
				h.set_alpha(Math.sin(time * 0.1) * 0.2 + 0.2);
				var _g22 = 0;
				var _g15 = fire.length;
				while(_g22 < _g15) {
					var i1 = _g22++;
					var a = i1 * Math.PI * 2 / fire.length;
					fire[i1].set_scaleY(Math.sin(time * 0.1 + a) * 0.8);
					fire[i1].set_scaleX(0.8 + Math.cos(time * 0.05 + a) * 0.2);
				}
				return true;
			});
			res = hxd.Res.loader.loadImage("boss.png");
			break;
		}
	}
	this.maxLife = this.life;
	this.defaultRes = res;
	this.play(res,size,center);
};
$hxClasses["Fighter"] = Fighter;
Fighter.__name__ = true;
Fighter.prototype = {
	play: function(res,size,center) {
		if(center == null) center = 1;
		if(size == null) size = 32;
		if(res == null) res = this.defaultRes;
		var t = res.toTile();
		var cy = size * center;
		var cx;
		var _g = this.kind;
		switch(_g[1]) {
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
				var _g11 = 0;
				var _g2 = t.split(t.height / size | 0,true);
				while(_g11 < _g2.length) {
					var a = _g2[_g11];
					++_g11;
					_g1.push(a.center(cx,cy));
				}
			}
			$r = _g1;
			return $r;
		}(this)));
	}
	,get_x: function() {
		return this.mc.x;
	}
	,set_x: function(v) {
		return this.mc.set_x(v);
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
			var dx1;
			if(this.push < -pp) dx1 = -pp; else dx1 = this.push;
			this.push -= dx1;
			var _g1 = this;
			_g1.set_x(_g1.get_x() + dx1);
		}
		this.pause -= dt;
		var _g2 = this;
		_g2.set_x(_g2.get_x() + this.moveSpeed * dt * this.anim.scaleX);
		var _g3 = this.kind;
		switch(_g3[1]) {
		case 7:
			this.anim.set_currentFrame(4 * (1 - this.life / this.maxLife));
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
	,remove: function() {
		HxOverrides.remove(this.game.fighters,this);
		this.mc.remove();
	}
	,kill: function() {
		var _g = this;
		var dr = 0.;
		var dx = 5. + Math.random() * 3;
		var dy = -(8. + Math.random() * 3);
		this.remove();
		var frame = this.anim.getFrame();
		var bmp = new h2d.Bitmap(frame == null?null:frame.center(16,16),this.game.fightCont);
		bmp.posChanged = true;
		bmp.x = this.mc.x;
		bmp.posChanged = true;
		bmp.y = this.mc.y - 16;
		bmp.posChanged = true;
		bmp.scaleX = this.anim.scaleX;
		bmp.set_colorKey(this.anim.colorKey);
		bmp.posChanged = true;
		bmp.rotation = this.anim.rotation;
		{
			var _g1 = this.kind;
			switch(_g1[1]) {
			case 4:
				if(bmp != null && bmp.parent != null) bmp.parent.removeChild(bmp);
				return;
			case 7:
				var _g11 = bmp;
				_g11.posChanged = true;
				_g11.y = _g11.y - 32;
				Sounds.play("break");
				break;
			case 3:
				break;
			default:
			}
		}
		this.game.todo.push(function(dt) {
			var _g12 = _g.kind;
			switch(_g12[1]) {
			case 7:
				var _g2 = bmp;
				_g2.color.w = _g2.color.w - 0.05 * dt;
				if(bmp.color.w < 0) return false;
				break;
			case 3:
				var _g21 = bmp;
				_g21.posChanged = true;
				_g21.y = _g21.y - dt;
				bmp.scale(Math.pow(0.97,dt));
				var _g22 = bmp;
				_g22.color.w = _g22.color.w - 0.05 * dt;
				if(bmp.color.w < 0) return false;
				break;
			default:
				var tr = (dx * dx + dy * dy) * 0.01;
				dr = dr * 0.9 + tr * 0.1;
				var _g23 = bmp;
				_g23.posChanged = true;
				_g23.rotation = _g23.rotation + dr;
				var _g24 = bmp;
				_g24.posChanged = true;
				_g24.x = _g24.x + dx * dt;
				var _g25 = bmp;
				_g25.posChanged = true;
				_g25.y = _g25.y + dy * dt;
				dy += dt * 0.5;
				if(bmp.y > 650) return false;
			}
			return true;
		});
	}
	,pop: function(txt,color,size) {
		if(size == null) size = 1.;
		var spr = new h2d.Sprite(this.game.world);
		var t = new h2d.Text(this.game.font,spr);
		t.set_text(txt);
		t.color.setColor(color | -16777216,null);
		t.dropShadow = { x : 0, y : 1, color : 8421504, alpha : 0.5};
		t.set_x(-t.get_textWidth() * 0.5);
		t.set_y(-t.get_textHeight() * 0.5);
		spr.set_x(this.get_x() - this.anim.scaleX * 16);
		spr.posChanged = true;
		spr.y = this.mc.y - 16;
		spr.scale(0.33333333333333331);
		t.color.w = 2;
		var k = 0.;
		this.game.todo.push(function(dt) {
			var _g = t;
			_g.posChanged = true;
			_g.y = _g.y - 250 * dt / (k + 10);
			k += dt;
			spr.rotate(spr.rotation * 0.03 * dt);
			var _g1 = t;
			_g1.color.w = _g1.color.w - 0.04 * dt;
			if(t.color.w < 0) {
				t.parent.remove();
				return false;
			}
			return true;
		});
		return spr;
	}
	,__class__: Fighter
};
var Boss = function() {
	Fighter.call(this,FKind.Boss);
	this.step = Step.Appear;
	this.act = -1;
	this.soilY = this.mc.y;
	this.life = this.maxLife = 300;
};
$hxClasses["Boss"] = Boss;
Boss.__name__ = true;
Boss.__super__ = Fighter;
Boss.prototype = $extend(Fighter.prototype,{
	update: function(dt) {
		Fighter.prototype.update.call(this,dt);
		if(this.get_x() > this.game.hero.get_x() + 400) this.set_x(this.game.hero.get_x() + 400);
		if(this.pause < 0 && this.next != null) {
			var old = this.next;
			this.next = null;
			old();
		}
		var _g = this.step;
		switch(_g[1]) {
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
					var _g31 = 0;
					while(_g31 < 4) {
						var i1 = _g31++;
						new Fighter(FKind.Crow).set_x(this.game.hero.get_x() + 350 + i1 * 30);
					}
					break;
				case 3:case 1:
					Sounds.play("missiles");
					var m0 = new Fighter(FKind.Missile);
					m0.set_x(this.get_x() + 100);
					var _g32 = m0.mc;
					_g32.posChanged = true;
					_g32.y = _g32.y - 75;
					m0.skip = true;
					var m1 = new Fighter(FKind.Missile);
					m1.set_x(this.get_x() + 150);
					var _g33 = m1.mc;
					_g33.posChanged = true;
					_g33.y = _g33.y - 40;
					m1.skip = true;
					var _g34 = 0;
					while(_g34 < 3) {
						var i2 = _g34++;
						new Fighter(FKind.Missile).set_x(this.get_x() + i2 * 50 + 200);
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
			var _g11 = this.mc;
			_g11.posChanged = true;
			_g11.y = _g11.y + this.jump * dt;
			this.jump += dt * 0.4;
			if(this.mc.y > this.soilY) {
				this.mc.set_y(this.soilY);
				this.jump *= -0.5;
				Sounds.play("bossLand");
				var m = this.game.hero;
				if(Math.abs(this.get_x() - m.get_x()) < 30) {
					var _g12 = 0;
					while(_g12 < 50) {
						var i3 = _g12++;
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
	,kill: function() {
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
			if(_g.game.hero.anim.speed < 10) _g.game.hero.anim.set_currentFrame(1);
			if(!stopped) {
				var tx = _g.game.hero.get_x() + 150;
				if(tx > _g.get_x()) _g.moveSpeed += 0.1 * dt; else _g.moveSpeed -= 0.1 * dt;
				var dx = Math.abs(tx - _g.get_x());
				if(dx < 50) {
					_g.moveSpeed *= dx / 50;
					if(_g.moveSpeed < 1) {
						_g.moveSpeed = 0;
						_g.play(hxd.Res.loader.loadImage("boss_hurt.png"),94);
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
					var _g11 = 0;
					while(_g11 < 1000) {
						var i1 = _g11++;
						var px1 = _g.get_x() + Math.random() * 40;
						var py1 = _g.mc.y - Math.random() * 40;
						var p1 = new Part(_g.game.expl.tile,px1,py1);
						p1.gravity = 0.5;
						p1.scale *= 3;
						p1.dx = (Math.random() - 0.5) * 20;
						p1.dy = (-Math.random() - 0.7) * 7;
						_g.game.expl.add(p1);
					}
					_g.remove();
					_g.game.win = true;
					return false;
				}
			}
			return true;
		});
	}
	,__class__: Boss
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = true;
EReg.prototype = {
	replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,__class__: EReg
};
var CKind = $hxClasses["CKind"] = { __ename__ : true, __constructs__ : ["Shield","Slide","Laser"] };
CKind.Shield = ["Shield",0];
CKind.Shield.toString = $estr;
CKind.Shield.__enum__ = CKind;
CKind.Slide = ["Slide",1];
CKind.Slide.toString = $estr;
CKind.Slide.__enum__ = CKind;
CKind.Laser = ["Laser",2];
CKind.Laser.toString = $estr;
CKind.Laser.__enum__ = CKind;
var FKind = $hxClasses["FKind"] = { __ename__ : true, __constructs__ : ["Hero","Slime","Goblin","Time","FChest","Fireball","Wizard","Stone","Crow","LaserAnim","Chain","Boss","Missile"] };
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
FKind.FChest = function(c,text) { var $x = ["FChest",4,c,text]; $x.__enum__ = FKind; $x.toString = $estr; return $x; };
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
var Wave = $hxClasses["Wave"] = { __ename__ : true, __constructs__ : ["Resume","Tuto","M","Wait","Chest","End"] };
Wave.Resume = ["Resume",0];
Wave.Resume.toString = $estr;
Wave.Resume.__enum__ = Wave;
Wave.Tuto = function(t,cond,sfx) { var $x = ["Tuto",1,t,cond,sfx]; $x.__enum__ = Wave; $x.toString = $estr; return $x; };
Wave.M = function(m,dist,count) { var $x = ["M",2,m,dist,count]; $x.__enum__ = Wave; $x.toString = $estr; return $x; };
Wave.Wait = function(dist) { var $x = ["Wait",3,dist]; $x.__enum__ = Wave; $x.toString = $estr; return $x; };
Wave.Chest = function(k,text) { var $x = ["Chest",4,k,text]; $x.__enum__ = Wave; $x.toString = $estr; return $x; };
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
	this.font = Game.getFont();
	this.scene = new h2d.Scene();
	this.scene.setFixedSize(250,150);
};
$hxClasses["Game"] = Game;
Game.__name__ = true;
Game.getFont = function() {
	return hxd.Res.loader.loadBitmapFont("verdana.fnt").toFont();
};
Game.doUpdate = function() {
	Timer.update();
	if(Game.inst != null) Game.inst.update(); else if(Game.title != null) Game.title.update();
};
Game.showTitle = function() {
	Game.title = new Title(Game._ENGINE);
	Game.inst = null;
};
Game.start = function(pos) {
	if(pos == null) pos = 0;
	Game.inst = new Game(Game._ENGINE,pos);
	Game.inst.init();
	Game.title = null;
};
Game.main = function() {
	hxd.Res.loader = new hxd.res.Loader(new hxd.res.EmbedFileSystem(haxe.Unserializer.run("oy11:verdana.fntty11:verdana.pngty8:hero.pngty12:bgbtrans.pngty8:bg1b.pngty11:reactor.pngty13:laserAnim.pngty13:hero_lock.pngty9:slime.pngty13:bg1atrans.pngty10:shield.pngty14:hero_slide.pngty10:title1.pngty14:hero_block.pngty12:fireBall.pngty10:title2.pngty7:bg1.pngty9:stone.pngty10:bgbend.pngty13:timeBonus.pngty10:title3.pngty9:laser.pngty13:boss_hurt.pngty3:sfxoy8:walk.wavty7:hit.wavty8:hit5.wavty9:fire2.wavty8:time.wavty12:bossJump.wavty9:laser.wavty8:item.wavty8:hit2.wavty12:bossLand.wavty12:laserOff.wavty9:break.wavty8:hit3.wavty11:explode.wavty8:fire.wavty9:slide.wavty12:missiles.wavty9:block.wavty8:hit4.wavty11:warning.wavtgy12:bgatrans.pngty9:chain.pngty7:bg2.pngty9:clock.pngty13:bg1btrans.pngty11:monster.pngty7:bga.pngty13:hourGlass.pngty8:star.pngty8:bg2a.pngty14:boss_model.pngty6:bg.pngty7:bgb.pngty14:smallStone.pngty8:crow.pngty11:victory.pngty8:bg2b.pngty11:explode.pngty8:bg1a.pngty10:knight.pngty10:wizard.pngty9:smoke.pngty11:missile.pngty11:redHalo.pngty9:block.pngty8:bg2c.pngty8:boss.pngtg")));
	Game._ENGINE = new h3d.Engine(false);
	Game._ENGINE.backgroundColor = -8355712;
	Game._ENGINE.onReady = function() {
		hxd.Key.initialize();
		Game.showTitle();
		hxd.System.setLoop(Game.doUpdate);
	};
	Game._ENGINE.init();
};
Game.prototype = {
	init: function() {
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
		var _g11 = 0;
		var _g2 = this.wavePos;
		while(_g11 < _g2) {
			var i1 = _g11++;
			{
				var _g21 = this.wavesData[i1];
				switch(_g21[1]) {
				case 3:
					var d = _g21[2];
					this.waveDist += d;
					break;
				case 2:
					var c = _g21[4];
					var d1 = _g21[3];
					if(c == null) c = 1;
					this.waveDist += d1 * c;
					break;
				case 4:
					var c1 = _g21[2];
					this.hero.inventory.push(c1);
					break;
				case 0:case 1:case 5:
					break;
				}
			}
		}
		this.hero.set_x(this.waveDist);
		this.world.set_x(-this.waveDist);
		var rexpl = hxd.Res.loader.loadImage("explode.png");
		var parts = this.world;
		this.expl = new h2d.SpriteBatch(rexpl.toTile().center(16,16),parts);
		this.expl.hasRotationScale = true;
		this.expl.hasUpdate = true;
		this.expl.blendMode = h2d.BlendMode.Add;
		this.expl.color.set(1,0.6,0.,1);
		this.stones = new h2d.SpriteBatch(hxd.Res.loader.loadImage("smallStone.png").toTile().center(8,8),parts);
		this.stones.set_colorKey(6160749);
		this.stones.hasRotationScale = true;
		this.stones.hasUpdate = true;
		this.fire = new h2d.SpriteBatch(rexpl.toTile().center(16,16),parts);
		this.fire.hasRotationScale = true;
		this.fire.hasUpdate = true;
		this.fire.blendMode = h2d.BlendMode.Add;
		this.fire.color.set(1,0.,0.,1);
		this.smoke = new h2d.SpriteBatch(hxd.Res.loader.loadImage("smoke.png").toTile().center(16,16),parts);
		this.smoke.set_colorKey(6160749);
		this.smoke.hasRotationScale = true;
		this.smoke.hasUpdate = true;
		this.smoke.color.w = 0.5;
		this.remTime = this.newText();
		this.remTime.set_x(40);
		this.remTime.set_y(134);
		this.nextTime = haxe.Timer.stamp() + 10;
		this.update();
	}
	,newText: function() {
		var t = new h2d.Text(this.font,this.scene);
		t.scale(0.33333333333333331);
		t.set_textColor(16777215);
		this.allTexts.push(t);
		return t;
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
		if(first != null && this.hero.get_x() > first.get_x() - 20) {
			var _g2 = first.kind;
			switch(_g2[1]) {
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
				var text = _g2[3];
				var kind = _g2[2];
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
					var _g12 = 0;
					while(_g12 < 10) {
						var i = _g12++;
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
					var _g13 = 0;
					while(_g13 < 20) {
						var i1 = _g13++;
						var p1 = new Part(this.fire.tile,first.get_x() + 20,first.mc.y);
						p1.gravity *= 0.7;
						p1.dy *= 0.8;
						this.fire.add(p1);
					}
					var _g14 = 0;
					while(_g14 < 20) {
						var i2 = _g14++;
						var p2 = new Part(this.expl.tile,first.get_x() + 20,first.mc.y);
						p2.gravity *= 0.7;
						p2.dy *= 0.8;
						this.expl.add(p2);
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
			var _g3 = this.wavesData[this.wavePos];
			switch(_g3[1]) {
			case 0:
				this.wavePos++;
				break;
			case 1:
				var sfx = _g3[4];
				var cond = _g3[3];
				var text1 = _g3[2];
				this.popText(text1,16777215,cond);
				if(sfx != null) Sounds.play(sfx);
				this.wavePos++;
				break;
			case 2:
				var count = _g3[4];
				var dist = _g3[3];
				var kind1 = _g3[2];
				if(-tx - this.waveDist >= dist) {
					var f1;
					switch(kind1[1]) {
					case 11:
						f1 = this.boss = new Boss();
						break;
					default:
						f1 = new Fighter(kind1);
					}
					f1.set_x(this.waveDist + dist + 300);
					this.waveDist += dist;
					if(count == null || count == this.waveCount + 1) {
						this.wavePos++;
						this.waveCount = 0;
					} else this.waveCount++;
				}
				break;
			case 3:
				var dist1 = _g3[2];
				if(-tx - this.waveDist >= dist1) {
					this.waveDist += dist1;
					this.wavePos++;
				}
				break;
			case 4:
				var text2 = _g3[3];
				var kind2 = _g3[2];
				var f2 = new Fighter(FKind.FChest(kind2,text2));
				f2.set_x(this.waveDist + 300);
				this.wavePos++;
				break;
			case 5:
				this.wavePos--;
				break;
			}
		}
		var _g4 = 0;
		var _g15 = this.todo.slice();
		while(_g4 < _g15.length) {
			var t = _g15[_g4];
			++_g4;
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
	,dispose: function() {
		this.font.dispose();
		this.scene.dispose();
		this.cleanTexts();
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
			this.hero.anim.set_currentFrame(1);
			var wait = 0.;
			if(this.win) {
				var v = new h2d.Bitmap(hxd.Res.loader.loadImage("victory.png").toTile(),this.scene);
				v.posChanged = true;
				v.x = -v.tile.width;
				v.color.w = 0.8;
				v.posChanged = true;
				v.y = 40;
				v.set_colorKey(16777215);
				this.todo.push(function(dt) {
					wait += Timer.deltaT;
					if(v.x < -40) {
						var _g1 = v;
						_g1.posChanged = true;
						_g1.x = _g1.x + (dt * 5 - v.x * 0.05);
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
	,popText: function(text,color,cond) {
		if(this.prev != null && this.prev.parent != null) {
			this.prev.parent.removeChild(this.prev);
			this.prev = null;
		}
		var t = this.newText();
		t.set_textColor(color);
		t.set_text(text);
		t.set_x(Std.int((this.scene.width - t.get_textWidth() * t.scaleX) * 0.5));
		t.posChanged = true;
		t.y = 110;
		this.prev = t;
		if(cond == null) t.color.w = 2;
		this.todo.push(function(dt) {
			if(cond != null && cond()) cond = null;
			if(cond == null) {
				var _g = t;
				_g.color.w = _g.color.w - 0.02 * dt;
				if(t.color.w <= 0) {
					if(t.parent != null) t.parent.removeChild(t);
					return false;
				}
			}
			return true;
		});
		return t;
	}
	,__class__: Game
};
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
Hero.__name__ = true;
Hero.__super__ = Fighter;
Hero.prototype = $extend(Fighter.prototype,{
	has: function(c) {
		return Lambda.has(this.inventory,c);
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
	,block: function() {
		if(this.pause > 0) return;
		this.play(hxd.Res.loader.loadImage("hero_block.png"));
		this.pause = 30;
		this.slow = 30;
		this.blocking = true;
		Sounds.play("block");
	}
	,slide: function() {
		if(this.pause > 0) return;
		Sounds.play("slide");
		this.play(hxd.Res.loader.loadImage("hero_slide.png"));
		this.pause = 30;
		this.slow = 30;
		this.sliding = true;
		if(this.game.boss != null) this.moveSpeed = 6; else this.moveSpeed = 3;
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
		this.play(hxd.Res.loader.loadImage("hero_lock.png"));
		this.pause = 100;
		this.slow = 100;
		this.moveSpeed = 0;
		var f = new Fighter(FKind.LaserAnim);
		f.skip = true;
		f.set_x(this.get_x() + 8);
		f.anim.set_scaleX(0);
		f.anim.speed = 12;
		f.anim.loop = false;
		f.anim.color.w = 0.8;
		var time = 0.;
		var hit = 0.;
		var chkBoss = false;
		this.game.todo.push(function(dt) {
			_g.push = 0;
			time += dt;
			var w;
			if(time > 40) w = -0.5; else w = 0.5;
			var _g1 = f.anim;
			_g1.posChanged = true;
			_g1.scaleX = _g1.scaleX + dt * w;
			if(f.anim.scaleX <= 0) {
				f.remove();
				return false;
			}
			hit += dt;
			while(hit > 5) {
				hit -= 5;
				var _g11 = 0;
				var _g2 = _g.game.fighters.slice();
				while(_g11 < _g2.length) {
					var f1 = _g2[_g11];
					++_g11;
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
	,action: function(m) {
		if(this.pause > 0) return;
		if(m == null || m.get_x() > this.get_x() + 25 || m.maxLife == 0) {
			this.pause = 20;
			this.slow = 10.;
			this.moveSpeed = 0;
			this.play(hxd.Res.loader.loadImage("hero_lock.png"));
			return;
		}
		this.hit(m);
		this.pause = 3;
	}
	,hit: function(m) {
		{
			var _g = m.kind;
			switch(_g[1]) {
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
		}
		var _g1 = m.kind;
		switch(_g1[1]) {
		case 7:
			var _g11 = 0;
			while(_g11 < 4) {
				var i = _g11++;
				var p = new Part(this.game.stones.tile,m.get_x() + 20,m.mc.y);
				p.scale *= 2 + Math.random();
				p.dx *= 2;
				p.gravity *= 1.5;
				p.bounce = 0.4;
				p.a = 1;
				p.x -= 16;
				p.y -= 16;
				this.game.stones.add(p);
			}
			var _g12 = 0;
			while(_g12 < 4) {
				var i1 = _g12++;
				this.game.expl.add(new Boom(this.game.expl.tile,m.get_x() + 30,m.mc.y - 10));
			}
			break;
		default:
			var ex = 20.;
			var _g13 = m.kind;
			switch(_g13[1]) {
			case 11:
				var dx = this.get_x() - m.get_x();
				if(dx < 20 || dx > 50) return;
				ex += dx;
				m.push -= 30;
				break;
			default:
				m.push += 40;
			}
			var _g14 = 0;
			while(_g14 < 10) {
				var i2 = _g14++;
				this.game.expl.add(new Part(this.game.expl.tile,m.get_x() + ex,m.mc.y));
			}
			var _g15 = 0;
			while(_g15 < 4) {
				var i3 = _g15++;
				this.game.expl.add(new Boom(this.game.expl.tile,m.get_x() + ex + 10,m.mc.y - 10));
			}
		}
		var pv = Std.int((Math.random() * 0.5 + 1) * this.attackPower);
		m.life -= pv;
		m.pop("-" + pv,16687009).set_rotation(-(Math.random() + 0.5) * 0.5);
		if(m.life <= 0) m.kill();
	}
	,__class__: Hero
});
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = true;
HxOverrides.strDate = function(s) {
	var _g = s.length;
	switch(_g) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k1 = s.split("-");
		return new Date(k1[0],k1[1] - 1,k1[2],0,0,0);
	case 19:
		var k2 = s.split(" ");
		var y = k2[0].split("-");
		var t = k2[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Lambda = function() { };
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = true;
Lambda.array = function(it) {
	var a = new Array();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
};
Lambda.has = function(it,elt) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(x == elt) return true;
	}
	return false;
};
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
};
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = true;
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
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
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,__class__: List
};
var IMap = function() { };
$hxClasses["IMap"] = IMap;
IMap.__name__ = true;
Math.__name__ = true;
var h2d = {};
h2d.BatchElement = function(t) {
	this.x = 0;
	this.y = 0;
	this.r = 1;
	this.g = 1;
	this.b = 1;
	this.a = 1;
	this.rotation = 0;
	this.scale = 1;
	this.t = t;
};
$hxClasses["h2d.BatchElement"] = h2d.BatchElement;
h2d.BatchElement.__name__ = true;
h2d.BatchElement.prototype = {
	update: function(et) {
		return true;
	}
	,__class__: h2d.BatchElement
};
var Part = function(e,x,y) {
	this.bounce = 0.7;
	h2d.BatchElement.call(this,e);
	this.scale = 0.25;
	this.a = 0.5;
	this.gravity = 1;
	this.ds = 0;
	this.z = (Math.random() + 0.5) * 16;
	this.x = x + (Math.random() - 0.5) * 16;
	this.y = y + Math.random() * 16;
	this.dx = (Math.random() - 0.5) * 5;
	this.dy = -(1 + Math.random() * 4) * 2;
};
$hxClasses["Part"] = Part;
Part.__name__ = true;
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
			this.a -= 0.02 * dt;
			if(this.a < 0) return false;
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
	this.a = 0.5;
	this.scale = 0;
	this.ds = 0.1;
};
$hxClasses["Boom"] = Boom;
Boom.__name__ = true;
Boom.__super__ = Part;
Boom.prototype = $extend(Part.prototype,{
	__class__: Boom
});
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compare = function(a,b) {
	if(a == b) return 0; else if(a > b) return 1; else return -1;
};
Reflect.isEnumValue = function(v) {
	return v != null && v.__enum__ != null;
};
var haxe = {};
haxe.ds = {};
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = true;
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe.ds.StringMap
};
var Sounds = function() { };
$hxClasses["Sounds"] = Sounds;
Sounds.__name__ = true;
Sounds.play = function(name) {
	var s = Sounds.sounds.get(name);
	if(s == null) {
		s = hxd.Res.load("sfx/" + name + ".wav").toSound();
		Sounds.sounds.set(name,s);
	}
	s.play();
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std.int = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
};
Std.random = function(x) {
	if(x <= 0) return 0; else return Math.floor(Math.random() * x);
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = true;
StringBuf.prototype = {
	add: function(x) {
		this.b += Std.string(x);
	}
	,addSub: function(s,pos,len) {
		if(len == null) this.b += HxOverrides.substr(s,pos,null); else this.b += HxOverrides.substr(s,pos,len);
	}
	,__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = true;
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.rpad = function(s,c,l) {
	if(c.length <= 0) return s;
	while(s.length < l) s = s + c;
	return s;
};
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
};
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = true;
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
};
haxe.Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe.Timer
};
var Timer = function() { };
$hxClasses["Timer"] = Timer;
Timer.__name__ = true;
Timer.update = function() {
	Timer.frameCount++;
	var newTime = haxe.Timer.stamp();
	Timer.deltaT = newTime - Timer.oldTime;
	Timer.oldTime = newTime;
	if(Timer.deltaT < Timer.maxDeltaTime) Timer.calc_tmod = Timer.calc_tmod * Timer.tmod_factor + (1 - Timer.tmod_factor) * Timer.deltaT * Timer.wantedFPS; else Timer.deltaT = 1 / Timer.wantedFPS;
	Timer.tmod = Timer.calc_tmod;
};
var Title = function(engine) {
	this.time = 0.;
	this.engine = engine;
	this.scene = new h2d.Scene();
	this.scene.setFixedSize(250,150);
	this.bg2 = new h2d.Bitmap(hxd.Res.loader.loadImage("title2.png").toTile(),this.scene);
	this.bg1 = new h2d.Bitmap(hxd.Res.loader.loadImage("title1.png").toTile(),this.scene);
	this.bg3 = new h2d.Bitmap(hxd.Res.loader.loadImage("title3.png").toTile(),this.scene);
	this.bg1.set_colorKey(0);
	this.bg1.set_y(-this.bg1.tile.height + 50);
	this.bg3.set_y(-this.bg3.tile.height);
	this.bg3.set_colorKey(0);
	this.bg3.set_x(this.scene.width - this.bg3.tile.width);
	var a = hxd.Res.loader.loadImage("star.png").toTile().split(11,true);
	var _g = 0;
	while(_g < 20) {
		var i = _g++;
		var s = new h2d.Anim(null,null,this.bg2);
		s.set_x(Std.random(this.bg1.tile.width));
		s.set_y(Std.random(this.bg1.tile.height));
		s.set_alpha(Math.random() + 0.1);
		s.speed = (20 + Math.random() * 30) * 0.3;
		s.scale(Math.random() * 0.5 + 0.5);
		s.set_currentFrame(Math.random() * 20);
		s.play(a);
	}
};
$hxClasses["Title"] = Title;
Title.__name__ = true;
Title.prototype = {
	dispose: function() {
		if(this.start != null && this.start.parent != null) this.start.parent.removeChild(this.start);
		this.scene.dispose();
	}
	,update: function() {
		var dt = Timer.tmod;
		this.time += dt;
		if(this.bg1.y < 0 && this.bg1Ready == null) {
			var _g = this.bg1;
			_g.posChanged = true;
			_g.y = _g.y + (dt - this.bg1.y * 0.05);
			if(this.bg1.y > 0) {
				this.bg1.set_y(0);
				this.bg1Ready = 0.;
			}
		} else {
			if(this.bg1Ready < 3) this.bg1Ready += dt * 0.1; else this.bg1Ready = 3;
			this.bg1.set_y((Math.sin(this.time * 0.05) - 1) * this.bg1Ready);
		}
		if(this.bg3.y < 0 && this.bg3Ready == null) {
			var _g1 = this.bg3;
			_g1.posChanged = true;
			_g1.y = _g1.y + (dt * 0.5 - this.bg1.y * 0.02);
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
			var _g2 = this.bg2;
			_g2.posChanged = true;
			_g2.y = _g2.y - dt * 0.15;
			if(this.bg2.y < -k) this.bg2.set_y(-k);
		} else {
			if(this.start == null) {
				var t = new h2d.Text(Game.getFont(),this.scene);
				t.posChanged = true;
				t.x = 173;
				t.posChanged = true;
				t.y = 133;
				t.set_textColor(16777215);
				t.scale(0.33333333333333331);
				this.start = t;
				var french = hxd.System.get_lang() == "fr";
				t.set_text("Press " + (french?"A":"Q") + " to Start");
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
	,__class__: Title
};
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = true;
Type.getClass = function(o) {
	if(o == null) return null;
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
};
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
};
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2;
		var _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e1 ) {
		return false;
	}
	return true;
};
Type.allEnums = function(e) {
	var all = [];
	var cst = e.__constructs__;
	var _g = 0;
	while(_g < cst.length) {
		var c = cst[_g];
		++_g;
		var v = Reflect.field(e,c);
		if(!Reflect.isFunction(v)) all.push(v);
	}
	return all;
};
var XmlType = $hxClasses["XmlType"] = { __ename__ : true, __constructs__ : [] };
var Xml = function() {
};
$hxClasses["Xml"] = Xml;
Xml.__name__ = true;
Xml.parse = function(str) {
	return haxe.xml.Parser.parse(str);
};
Xml.createElement = function(name) {
	var r = new Xml();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new haxe.ds.StringMap();
	r.set_nodeName(name);
	return r;
};
Xml.createPCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.PCData;
	r.set_nodeValue(data);
	return r;
};
Xml.createCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.CData;
	r.set_nodeValue(data);
	return r;
};
Xml.createComment = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Comment;
	r.set_nodeValue(data);
	return r;
};
Xml.createDocType = function(data) {
	var r = new Xml();
	r.nodeType = Xml.DocType;
	r.set_nodeValue(data);
	return r;
};
Xml.createProcessingInstruction = function(data) {
	var r = new Xml();
	r.nodeType = Xml.ProcessingInstruction;
	r.set_nodeValue(data);
	return r;
};
Xml.createDocument = function() {
	var r = new Xml();
	r.nodeType = Xml.Document;
	r._children = new Array();
	return r;
};
Xml.prototype = {
	get_nodeName: function() {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName;
	}
	,set_nodeName: function(n) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName = n;
	}
	,set_nodeValue: function(v) {
		if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue = v;
	}
	,get: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.get(att);
	}
	,set: function(att,value) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		this._attributes.set(att,value);
	}
	,exists: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.exists(att);
	}
	,elements: function() {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				if(this.x[k].nodeType == Xml.Element) break;
				k += 1;
			}
			this.cur = k;
			return k < l;
		}, next : function() {
			var k1 = this.cur;
			var l1 = this.x.length;
			while(k1 < l1) {
				var n = this.x[k1];
				k1 += 1;
				if(n.nodeType == Xml.Element) {
					this.cur = k1;
					return n;
				}
			}
			return null;
		}};
	}
	,firstElement: function() {
		if(this._children == null) throw "bad nodetype";
		var cur = 0;
		var l = this._children.length;
		while(cur < l) {
			var n = this._children[cur];
			if(n.nodeType == Xml.Element) return n;
			cur++;
		}
		return null;
	}
	,addChild: function(x) {
		if(this._children == null) throw "bad nodetype";
		if(x._parent != null) HxOverrides.remove(x._parent._children,x);
		x._parent = this;
		this._children.push(x);
	}
	,__class__: Xml
};
var format = {};
format.png = {};
format.png.Color = $hxClasses["format.png.Color"] = { __ename__ : true, __constructs__ : ["ColGrey","ColTrue","ColIndexed"] };
format.png.Color.ColGrey = function(alpha) { var $x = ["ColGrey",0,alpha]; $x.__enum__ = format.png.Color; $x.toString = $estr; return $x; };
format.png.Color.ColTrue = function(alpha) { var $x = ["ColTrue",1,alpha]; $x.__enum__ = format.png.Color; $x.toString = $estr; return $x; };
format.png.Color.ColIndexed = ["ColIndexed",2];
format.png.Color.ColIndexed.toString = $estr;
format.png.Color.ColIndexed.__enum__ = format.png.Color;
format.png.Chunk = $hxClasses["format.png.Chunk"] = { __ename__ : true, __constructs__ : ["CEnd","CHeader","CData","CPalette","CUnknown"] };
format.png.Chunk.CEnd = ["CEnd",0];
format.png.Chunk.CEnd.toString = $estr;
format.png.Chunk.CEnd.__enum__ = format.png.Chunk;
format.png.Chunk.CHeader = function(h) { var $x = ["CHeader",1,h]; $x.__enum__ = format.png.Chunk; $x.toString = $estr; return $x; };
format.png.Chunk.CData = function(b) { var $x = ["CData",2,b]; $x.__enum__ = format.png.Chunk; $x.toString = $estr; return $x; };
format.png.Chunk.CPalette = function(b) { var $x = ["CPalette",3,b]; $x.__enum__ = format.png.Chunk; $x.toString = $estr; return $x; };
format.png.Chunk.CUnknown = function(id,data) { var $x = ["CUnknown",4,id,data]; $x.__enum__ = format.png.Chunk; $x.toString = $estr; return $x; };
format.png.Reader = function(i) {
	this.i = i;
	i.set_bigEndian(true);
	this.checkCRC = true;
};
$hxClasses["format.png.Reader"] = format.png.Reader;
format.png.Reader.__name__ = true;
format.png.Reader.prototype = {
	read: function() {
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
	,readChunk: function() {
		var dataLen = this.i.readInt32();
		var id = this.i.readString(4);
		var data = this.i.read(dataLen);
		var crc = this.i.readInt32();
		if(this.checkCRC) {
			var c = new haxe.crypto.Crc32();
			var _g = 0;
			while(_g < 4) {
				var i = _g++;
				c.byte(HxOverrides.cca(id,i));
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
	,__class__: format.png.Reader
};
format.png.Tools = function() { };
$hxClasses["format.png.Tools"] = format.png.Tools;
format.png.Tools.__name__ = true;
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
};
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
};
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
};
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
	{
		var _g = h.color;
		switch(_g[1]) {
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
			var _g2 = 0;
			var _g1 = h.height;
			while(_g2 < _g1) {
				var y = _g2++;
				var f = data.get(r++);
				switch(f) {
				case 0:
					var _g3 = 0;
					while(_g3 < width) {
						var x = _g3++;
						var c1 = data.get(r++);
						vr = pal.b[c1 * 3];
						vg = pal.b[c1 * 3 + 1];
						vb = pal.b[c1 * 3 + 2];
						if(alpha != null) va = alpha.b[c1];
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
					var _g31 = 0;
					while(_g31 < width) {
						var x1 = _g31++;
						var c2 = data.get(r++);
						vr = pal.b[c2 * 3];
						vg = pal.b[c2 * 3 + 1];
						vb = pal.b[c2 * 3 + 2];
						if(alpha != null) va = alpha.b[c2];
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
					var _g32 = 0;
					while(_g32 < width) {
						var x2 = _g32++;
						var c3 = data.get(r++);
						vr = pal.b[c3 * 3];
						vg = pal.b[c3 * 3 + 1];
						vb = pal.b[c3 * 3 + 2];
						if(alpha != null) va = alpha.b[c3];
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
					var cr1 = 0;
					var cg1 = 0;
					var cb1 = 0;
					var ca1 = 0;
					var stride2;
					if(y == 0) stride2 = 0; else stride2 = width * 4;
					var _g33 = 0;
					while(_g33 < width) {
						var x3 = _g33++;
						var c4 = data.get(r++);
						vr = pal.b[c4 * 3];
						vg = pal.b[c4 * 3 + 1];
						vb = pal.b[c4 * 3 + 2];
						if(alpha != null) va = alpha.b[c4];
						cb1 = vb + (cb1 + bgra.b[w - stride2] >> 1) & 255;
						bgra.set(w++,cb1);
						cg1 = vg + (cg1 + bgra.b[w - stride2] >> 1) & 255;
						bgra.set(w++,cg1);
						cr1 = vr + (cr1 + bgra.b[w - stride2] >> 1) & 255;
						bgra.set(w++,cr1);
						cr1 = va + (ca1 + bgra.b[w - stride2] >> 1) & 255;
						bgra.set(w++,ca1);
					}
					break;
				case 4:
					var stride3 = width * 4;
					var cr2 = 0;
					var cg2 = 0;
					var cb2 = 0;
					var ca2 = 0;
					var _g34 = 0;
					while(_g34 < width) {
						var x4 = _g34++;
						var c5 = data.get(r++);
						vr = pal.b[c5 * 3];
						vg = pal.b[c5 * 3 + 1];
						vb = pal.b[c5 * 3 + 2];
						if(alpha != null) va = alpha.b[c5];
						cb2 = format.png.Tools.filter(bgra,x4,y,stride3,cb2,w,null) + vb & 255;
						bgra.set(w++,cb2);
						cg2 = format.png.Tools.filter(bgra,x4,y,stride3,cg2,w,null) + vg & 255;
						bgra.set(w++,cg2);
						cr2 = format.png.Tools.filter(bgra,x4,y,stride3,cr2,w,null) + vr & 255;
						bgra.set(w++,cr2);
						ca2 = format.png.Tools.filter(bgra,x4,y,stride3,ca2,w,null) + va & 255;
						bgra.set(w++,ca2);
					}
					break;
				default:
					throw "Invalid filter " + f;
				}
			}
			break;
		case 0:
			var alpha1 = _g[2];
			if(h.colbits != 8) throw "Unsupported color mode";
			var width1 = h.width;
			var stride4;
			stride4 = (alpha1?2:1) * width1 + 1;
			if(data.length < h.height * stride4) throw "Not enough data";
			var _g21 = 0;
			var _g11 = h.height;
			while(_g21 < _g11) {
				var y1 = _g21++;
				var f1 = data.get(r++);
				switch(f1) {
				case 0:
					if(alpha1) {
						var _g35 = 0;
						while(_g35 < width1) {
							var x5 = _g35++;
							var v = data.get(r++);
							bgra.set(w++,v);
							bgra.set(w++,v);
							bgra.set(w++,v);
							bgra.set(w++,data.get(r++));
						}
					} else {
						var _g36 = 0;
						while(_g36 < width1) {
							var x6 = _g36++;
							var v1 = data.get(r++);
							bgra.set(w++,v1);
							bgra.set(w++,v1);
							bgra.set(w++,v1);
							bgra.set(w++,255);
						}
					}
					break;
				case 1:
					var cv = 0;
					var ca3 = 0;
					if(alpha1) {
						var _g37 = 0;
						while(_g37 < width1) {
							var x7 = _g37++;
							cv += data.get(r++);
							bgra.set(w++,cv);
							bgra.set(w++,cv);
							bgra.set(w++,cv);
							ca3 += data.get(r++);
							bgra.set(w++,ca3);
						}
					} else {
						var _g38 = 0;
						while(_g38 < width1) {
							var x8 = _g38++;
							cv += data.get(r++);
							bgra.set(w++,cv);
							bgra.set(w++,cv);
							bgra.set(w++,cv);
							bgra.set(w++,255);
						}
					}
					break;
				case 2:
					var stride5;
					if(y1 == 0) stride5 = 0; else stride5 = width1 * 4;
					if(alpha1) {
						var _g39 = 0;
						while(_g39 < width1) {
							var x9 = _g39++;
							var v2 = data.get(r++) + bgra.b[w - stride5];
							bgra.set(w++,v2);
							bgra.set(w++,v2);
							bgra.set(w++,v2);
							bgra.set(w++,data.get(r++) + bgra.b[w - stride5]);
						}
					} else {
						var _g310 = 0;
						while(_g310 < width1) {
							var x10 = _g310++;
							var v3 = data.get(r++) + bgra.b[w - stride5];
							bgra.set(w++,v3);
							bgra.set(w++,v3);
							bgra.set(w++,v3);
							bgra.set(w++,255);
						}
					}
					break;
				case 3:
					var cv1 = 0;
					var ca4 = 0;
					var stride6;
					if(y1 == 0) stride6 = 0; else stride6 = width1 * 4;
					if(alpha1) {
						var _g311 = 0;
						while(_g311 < width1) {
							var x11 = _g311++;
							cv1 = data.get(r++) + (cv1 + bgra.b[w - stride6] >> 1) & 255;
							bgra.set(w++,cv1);
							bgra.set(w++,cv1);
							bgra.set(w++,cv1);
							ca4 = data.get(r++) + (ca4 + bgra.b[w - stride6] >> 1) & 255;
							bgra.set(w++,ca4);
						}
					} else {
						var _g312 = 0;
						while(_g312 < width1) {
							var x12 = _g312++;
							cv1 = data.get(r++) + (cv1 + bgra.b[w - stride6] >> 1) & 255;
							bgra.set(w++,cv1);
							bgra.set(w++,cv1);
							bgra.set(w++,cv1);
							bgra.set(w++,255);
						}
					}
					break;
				case 4:
					var stride7 = width1 * 4;
					var cv2 = 0;
					var ca5 = 0;
					if(alpha1) {
						var _g313 = 0;
						while(_g313 < width1) {
							var x13 = _g313++;
							cv2 = format.png.Tools.filter(bgra,x13,y1,stride7,cv2,w,null) + data.get(r++) & 255;
							bgra.set(w++,cv2);
							bgra.set(w++,cv2);
							bgra.set(w++,cv2);
							ca5 = format.png.Tools.filter(bgra,x13,y1,stride7,ca5,w,null) + data.get(r++) & 255;
							bgra.set(w++,ca5);
						}
					} else {
						var _g314 = 0;
						while(_g314 < width1) {
							var x14 = _g314++;
							cv2 = format.png.Tools.filter(bgra,x14,y1,stride7,cv2,w,null) + data.get(r++) & 255;
							bgra.set(w++,cv2);
							bgra.set(w++,cv2);
							bgra.set(w++,cv2);
							bgra.set(w++,255);
						}
					}
					break;
				default:
					throw "Invalid filter " + f1;
				}
			}
			break;
		case 1:
			var alpha2 = _g[2];
			if(h.colbits != 8) throw "Unsupported color mode";
			var width2 = h.width;
			var stride8;
			stride8 = (alpha2?4:3) * width2 + 1;
			if(data.length < h.height * stride8) throw "Not enough data";
			var _g22 = 0;
			var _g12 = h.height;
			while(_g22 < _g12) {
				var y2 = _g22++;
				var f2 = data.get(r++);
				switch(f2) {
				case 0:
					if(alpha2) {
						var _g315 = 0;
						while(_g315 < width2) {
							var x15 = _g315++;
							bgra.set(w++,data.b[r + 2]);
							bgra.set(w++,data.b[r + 1]);
							bgra.set(w++,data.b[r]);
							bgra.set(w++,data.b[r + 3]);
							r += 4;
						}
					} else {
						var _g316 = 0;
						while(_g316 < width2) {
							var x16 = _g316++;
							bgra.set(w++,data.b[r + 2]);
							bgra.set(w++,data.b[r + 1]);
							bgra.set(w++,data.b[r]);
							bgra.set(w++,255);
							r += 3;
						}
					}
					break;
				case 1:
					var cr3 = 0;
					var cg3 = 0;
					var cb3 = 0;
					var ca6 = 0;
					if(alpha2) {
						var _g317 = 0;
						while(_g317 < width2) {
							var x17 = _g317++;
							cb3 += data.b[r + 2];
							bgra.set(w++,cb3);
							cg3 += data.b[r + 1];
							bgra.set(w++,cg3);
							cr3 += data.b[r];
							bgra.set(w++,cr3);
							ca6 += data.b[r + 3];
							bgra.set(w++,ca6);
							r += 4;
						}
					} else {
						var _g318 = 0;
						while(_g318 < width2) {
							var x18 = _g318++;
							cb3 += data.b[r + 2];
							bgra.set(w++,cb3);
							cg3 += data.b[r + 1];
							bgra.set(w++,cg3);
							cr3 += data.b[r];
							bgra.set(w++,cr3);
							bgra.set(w++,255);
							r += 3;
						}
					}
					break;
				case 2:
					var stride9;
					if(y2 == 0) stride9 = 0; else stride9 = width2 * 4;
					if(alpha2) {
						var _g319 = 0;
						while(_g319 < width2) {
							var x19 = _g319++;
							bgra.b[w] = data.b[r + 2] + bgra.b[w - stride9] & 255;
							w++;
							bgra.b[w] = data.b[r + 1] + bgra.b[w - stride9] & 255;
							w++;
							bgra.b[w] = data.b[r] + bgra.b[w - stride9] & 255;
							w++;
							bgra.b[w] = data.b[r + 3] + bgra.b[w - stride9] & 255;
							w++;
							r += 4;
						}
					} else {
						var _g320 = 0;
						while(_g320 < width2) {
							var x20 = _g320++;
							bgra.b[w] = data.b[r + 2] + bgra.b[w - stride9] & 255;
							w++;
							bgra.b[w] = data.b[r + 1] + bgra.b[w - stride9] & 255;
							w++;
							bgra.b[w] = data.b[r] + bgra.b[w - stride9] & 255;
							w++;
							bgra.set(w++,255);
							r += 3;
						}
					}
					break;
				case 3:
					var cr4 = 0;
					var cg4 = 0;
					var cb4 = 0;
					var ca7 = 0;
					var stride10;
					if(y2 == 0) stride10 = 0; else stride10 = width2 * 4;
					if(alpha2) {
						var _g321 = 0;
						while(_g321 < width2) {
							var x21 = _g321++;
							cb4 = data.b[r + 2] + (cb4 + bgra.b[w - stride10] >> 1) & 255;
							bgra.set(w++,cb4);
							cg4 = data.b[r + 1] + (cg4 + bgra.b[w - stride10] >> 1) & 255;
							bgra.set(w++,cg4);
							cr4 = data.b[r] + (cr4 + bgra.b[w - stride10] >> 1) & 255;
							bgra.set(w++,cr4);
							ca7 = data.b[r + 3] + (ca7 + bgra.b[w - stride10] >> 1) & 255;
							bgra.set(w++,ca7);
							r += 4;
						}
					} else {
						var _g322 = 0;
						while(_g322 < width2) {
							var x22 = _g322++;
							cb4 = data.b[r + 2] + (cb4 + bgra.b[w - stride10] >> 1) & 255;
							bgra.set(w++,cb4);
							cg4 = data.b[r + 1] + (cg4 + bgra.b[w - stride10] >> 1) & 255;
							bgra.set(w++,cg4);
							cr4 = data.b[r] + (cr4 + bgra.b[w - stride10] >> 1) & 255;
							bgra.set(w++,cr4);
							bgra.set(w++,255);
							r += 3;
						}
					}
					break;
				case 4:
					var stride11 = width2 * 4;
					var cr5 = 0;
					var cg5 = 0;
					var cb5 = 0;
					var ca8 = 0;
					if(alpha2) {
						var _g323 = 0;
						while(_g323 < width2) {
							var x23 = _g323++;
							cb5 = format.png.Tools.filter(bgra,x23,y2,stride11,cb5,w,null) + data.b[r + 2] & 255;
							bgra.set(w++,cb5);
							cg5 = format.png.Tools.filter(bgra,x23,y2,stride11,cg5,w,null) + data.b[r + 1] & 255;
							bgra.set(w++,cg5);
							cr5 = format.png.Tools.filter(bgra,x23,y2,stride11,cr5,w,null) + data.b[r] & 255;
							bgra.set(w++,cr5);
							ca8 = format.png.Tools.filter(bgra,x23,y2,stride11,ca8,w,null) + data.b[r + 3] & 255;
							bgra.set(w++,ca8);
							r += 4;
						}
					} else {
						var _g324 = 0;
						while(_g324 < width2) {
							var x24 = _g324++;
							cb5 = format.png.Tools.filter(bgra,x24,y2,stride11,cb5,w,null) + data.b[r + 2] & 255;
							bgra.set(w++,cb5);
							cg5 = format.png.Tools.filter(bgra,x24,y2,stride11,cg5,w,null) + data.b[r + 1] & 255;
							bgra.set(w++,cg5);
							cr5 = format.png.Tools.filter(bgra,x24,y2,stride11,cr5,w,null) + data.b[r] & 255;
							bgra.set(w++,cr5);
							bgra.set(w++,255);
							r += 3;
						}
					}
					break;
				default:
					throw "Invalid filter " + f2;
				}
			}
			break;
		}
	}
	return bgra;
};
format.tools = {};
format.tools.Adler32 = function() {
	this.a1 = 1;
	this.a2 = 0;
};
$hxClasses["format.tools.Adler32"] = format.tools.Adler32;
format.tools.Adler32.__name__ = true;
format.tools.Adler32.read = function(i) {
	var a = new format.tools.Adler32();
	var a2a = i.readByte();
	var a2b = i.readByte();
	var a1a = i.readByte();
	var a1b = i.readByte();
	a.a1 = a1a << 8 | a1b;
	a.a2 = a2a << 8 | a2b;
	return a;
};
format.tools.Adler32.prototype = {
	update: function(b,pos,len) {
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
	,equals: function(a) {
		return a.a1 == this.a1 && a.a2 == this.a2;
	}
	,__class__: format.tools.Adler32
};
format.tools.Huffman = $hxClasses["format.tools.Huffman"] = { __ename__ : true, __constructs__ : ["Found","NeedBit","NeedBits"] };
format.tools.Huffman.Found = function(i) { var $x = ["Found",0,i]; $x.__enum__ = format.tools.Huffman; $x.toString = $estr; return $x; };
format.tools.Huffman.NeedBit = function(left,right) { var $x = ["NeedBit",1,left,right]; $x.__enum__ = format.tools.Huffman; $x.toString = $estr; return $x; };
format.tools.Huffman.NeedBits = function(n,table) { var $x = ["NeedBits",2,n,table]; $x.__enum__ = format.tools.Huffman; $x.toString = $estr; return $x; };
format.tools.HuffTools = function() {
};
$hxClasses["format.tools.HuffTools"] = format.tools.HuffTools;
format.tools.HuffTools.__name__ = true;
format.tools.HuffTools.prototype = {
	treeDepth: function(t) {
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
	,treeMake: function(bits,maxbits,v,len) {
		if(len > maxbits) throw "Invalid huffman";
		var idx = v << 5 | len;
		if(bits.exists(idx)) return format.tools.Huffman.Found(bits.get(idx));
		v <<= 1;
		len += 1;
		return format.tools.Huffman.NeedBit(this.treeMake(bits,maxbits,v,len),this.treeMake(bits,maxbits,v | 1,len));
	}
	,make: function(lengths,pos,nlengths,maxbits) {
		var counts = new Array();
		var tmp = new Array();
		if(maxbits > 32) throw "Invalid huffman";
		var _g = 0;
		while(_g < maxbits) {
			var i = _g++;
			counts.push(0);
			tmp.push(0);
		}
		var _g1 = 0;
		while(_g1 < nlengths) {
			var i1 = _g1++;
			var p = lengths[i1 + pos];
			if(p >= maxbits) throw "Invalid huffman";
			counts[p]++;
		}
		var code = 0;
		var _g11 = 1;
		var _g2 = maxbits - 1;
		while(_g11 < _g2) {
			var i2 = _g11++;
			code = code + counts[i2] << 1;
			tmp[i2] = code;
		}
		var bits = new haxe.ds.IntMap();
		var _g3 = 0;
		while(_g3 < nlengths) {
			var i3 = _g3++;
			var l = lengths[i3 + pos];
			if(l != 0) {
				var n = tmp[l - 1];
				tmp[l - 1] = n + 1;
				bits.set(n << 5 | l,i3);
			}
		}
		return this.treeCompress(format.tools.Huffman.NeedBit(this.treeMake(bits,maxbits,0,1),this.treeMake(bits,maxbits,1,1)));
	}
	,__class__: format.tools.HuffTools
};
format.tools.Inflate = function() { };
$hxClasses["format.tools.Inflate"] = format.tools.Inflate;
format.tools.Inflate.__name__ = true;
format.tools.Inflate.run = function(bytes) {
	return format.tools.InflateImpl.run(new haxe.io.BytesInput(bytes));
};
format.tools._InflateImpl = {};
format.tools._InflateImpl.Window = function(hasCrc) {
	this.buffer = haxe.io.Bytes.alloc(65536);
	this.pos = 0;
	if(hasCrc) this.crc = new format.tools.Adler32();
};
$hxClasses["format.tools._InflateImpl.Window"] = format.tools._InflateImpl.Window;
format.tools._InflateImpl.Window.__name__ = true;
format.tools._InflateImpl.Window.prototype = {
	slide: function() {
		if(this.crc != null) this.crc.update(this.buffer,0,32768);
		var b = haxe.io.Bytes.alloc(65536);
		this.pos -= 32768;
		b.blit(0,this.buffer,32768,this.pos);
		this.buffer = b;
	}
	,addBytes: function(b,p,len) {
		if(this.pos + len > 65536) this.slide();
		this.buffer.blit(this.pos,b,p,len);
		this.pos += len;
	}
	,addByte: function(c) {
		if(this.pos == 65536) this.slide();
		this.buffer.b[this.pos] = c & 255;
		this.pos++;
	}
	,getLastChar: function() {
		return this.buffer.b[this.pos - 1];
	}
	,available: function() {
		return this.pos;
	}
	,checksum: function() {
		if(this.crc != null) this.crc.update(this.buffer,0,this.pos);
		return this.crc;
	}
	,__class__: format.tools._InflateImpl.Window
};
format.tools._InflateImpl.State = $hxClasses["format.tools._InflateImpl.State"] = { __ename__ : true, __constructs__ : ["Head","Block","CData","Flat","Crc","Dist","DistOne","Done"] };
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
	this.final = false;
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
	this.window = new format.tools._InflateImpl.Window(crc);
};
$hxClasses["format.tools.InflateImpl"] = format.tools.InflateImpl;
format.tools.InflateImpl.__name__ = true;
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
};
format.tools.InflateImpl.prototype = {
	buildFixedHuffman: function() {
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
	,readBytes: function(b,pos,len) {
		this.needed = len;
		this.outpos = pos;
		this.output = b;
		if(len > 0) while(this.inflateLoop()) {
		}
		return len - this.needed;
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
	,getRevBits: function(n) {
		if(n == 0) return 0; else if(this.getBit()) return 1 << n - 1 | this.getRevBits(n - 1); else return this.getRevBits(n - 1);
	}
	,resetBits: function() {
		this.bits = 0;
		this.nbits = 0;
	}
	,addBytes: function(b,p,len) {
		this.window.addBytes(b,p,len);
		this.output.blit(this.outpos,b,p,len);
		this.needed -= len;
		this.outpos += len;
	}
	,addByte: function(b) {
		this.window.addByte(b);
		this.output.b[this.outpos] = b & 255;
		this.needed--;
		this.outpos++;
	}
	,addDistOne: function(n) {
		var c = this.window.getLastChar();
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			this.addByte(c);
		}
	}
	,addDist: function(d,len) {
		this.addBytes(this.window.buffer,this.window.pos - d,len);
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
			var n1 = h[2];
			return this.applyHuffman(tbl[this.getBits(n1)]);
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
	,inflateLoop: function() {
		var _g = this.state;
		switch(_g[1]) {
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
			var calc = this.window.checksum();
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
			this.final = this.getBit();
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
				var _g21 = hclen;
				while(_g21 < 19) {
					var i1 = _g21++;
					this.lengths[format.tools.InflateImpl.CODE_LENGTHS_POS[i1]] = 0;
				}
				this.huffman = this.htools.make(this.lengths,0,19,8);
				var lengths = new Array();
				var _g3 = 0;
				var _g22 = hlit + hdist;
				while(_g3 < _g22) {
					var i2 = _g3++;
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
			if(this.len == 0) if(this.final) this.state = format.tools._InflateImpl.State.Crc; else this.state = format.tools._InflateImpl.State.Block;
			return this.needed > 0;
		case 6:
			var rlen1;
			if(this.len < this.needed) rlen1 = this.len; else rlen1 = this.needed;
			this.addDistOne(rlen1);
			this.len -= rlen1;
			if(this.len == 0) this.state = format.tools._InflateImpl.State.CData;
			return this.needed > 0;
		case 5:
			while(this.len > 0 && this.needed > 0) {
				var rdist;
				if(this.len < this.dist) rdist = this.len; else rdist = this.dist;
				var rlen2;
				if(this.needed < rdist) rlen2 = this.needed; else rlen2 = rdist;
				this.addDist(this.dist,rlen2);
				this.len -= rlen2;
			}
			if(this.len == 0) this.state = format.tools._InflateImpl.State.CData;
			return this.needed > 0;
		case 2:
			var n = this.applyHuffman(this.huffman);
			if(n < 256) {
				this.addByte(n);
				return this.needed > 0;
			} else if(n == 256) {
				if(this.final) this.state = format.tools._InflateImpl.State.Crc; else this.state = format.tools._InflateImpl.State.Block;
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
				if(this.dist > this.window.available()) throw "Invalid data";
				if(this.dist == 1) this.state = format.tools._InflateImpl.State.DistOne; else this.state = format.tools._InflateImpl.State.Dist;
				return true;
			}
			break;
		}
	}
	,__class__: format.tools.InflateImpl
};
h2d.Sprite = function(parent) {
	this.matA = 1;
	this.matB = 0;
	this.matC = 0;
	this.matD = 1;
	this.absX = 0;
	this.absY = 0;
	this.posChanged = true;
	this.x = 0;
	this.posChanged = true;
	this.y = 0;
	this.posChanged = true;
	this.scaleX = 1;
	this.posChanged = true;
	this.scaleY = 1;
	this.posChanged = true;
	this.rotation = 0;
	this.posChanged = false;
	this.visible = true;
	this.childs = [];
	if(parent != null) parent.addChild(this);
};
$hxClasses["h2d.Sprite"] = h2d.Sprite;
h2d.Sprite.__name__ = true;
h2d.Sprite.prototype = {
	getScene: function() {
		var p = this;
		while(p.parent != null) p = p.parent;
		if((p instanceof h2d.Scene)) return p; else return null;
	}
	,addChild: function(s) {
		this.addChildAt(s,this.childs.length);
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
		if(!this.allocated && s.allocated) s.onDelete();
		s.parent = this;
		s.posChanged = true;
		if(this.allocated) {
			if(!s.allocated) s.onAlloc(); else s.onParentChanged();
		}
	}
	,onParentChanged: function() {
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
	,removeChild: function(s) {
		if(HxOverrides.remove(this.childs,s)) {
			if(s.allocated) s.onDelete();
			s.parent = null;
		}
	}
	,remove: function() {
		if(this.parent != null) this.parent.removeChild(this);
	}
	,draw: function(ctx) {
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
				this.matB = this.scaleX * sr;
				this.matC = this.scaleY * -sr;
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
				var cr1 = Math.cos(this.rotation);
				var sr1 = Math.sin(this.rotation);
				var tmpA = this.scaleX * cr1;
				var tmpB = this.scaleX * sr1;
				var tmpC = this.scaleY * -sr1;
				var tmpD = this.scaleY * cr1;
				this.matA = tmpA * this.parent.matA + tmpB * this.parent.matC;
				this.matB = tmpA * this.parent.matB + tmpB * this.parent.matD;
				this.matC = tmpC * this.parent.matA + tmpD * this.parent.matC;
				this.matD = tmpC * this.parent.matB + tmpD * this.parent.matD;
			}
			this.absX = this.x * this.parent.matA + this.y * this.parent.matC + this.parent.absX;
			this.absY = this.x * this.parent.matB + this.y * this.parent.matD + this.parent.absY;
		}
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
		var _g2 = 0;
		var _g11 = this.childs;
		while(_g2 < _g11.length) {
			var c1 = _g11[_g2];
			++_g2;
			c1.drawRec(ctx);
		}
	}
	,set_x: function(v) {
		this.posChanged = true;
		return this.x = v;
	}
	,set_y: function(v) {
		this.posChanged = true;
		return this.y = v;
	}
	,set_scaleX: function(v) {
		this.posChanged = true;
		return this.scaleX = v;
	}
	,set_scaleY: function(v) {
		this.posChanged = true;
		return this.scaleY = v;
	}
	,set_rotation: function(v) {
		this.posChanged = true;
		return this.rotation = v;
	}
	,rotate: function(v) {
		var _g = this;
		_g.posChanged = true;
		_g.rotation = _g.rotation + v;
	}
	,scale: function(v) {
		var _g = this;
		_g.posChanged = true;
		_g.scaleX = _g.scaleX * v;
		var _g1 = this;
		_g1.posChanged = true;
		_g1.scaleY = _g1.scaleY * v;
	}
	,__class__: h2d.Sprite
};
h2d.Drawable = function(parent) {
	h2d.Sprite.call(this,parent);
	this.blendMode = h2d.BlendMode.Normal;
	this.color = new h3d.Vector(1,1,1,1);
	this.shaders = [];
};
$hxClasses["h2d.Drawable"] = h2d.Drawable;
h2d.Drawable.__name__ = true;
h2d.Drawable.__super__ = h2d.Sprite;
h2d.Drawable.prototype = $extend(h2d.Sprite.prototype,{
	set_colorKey: function(v) {
		if(this.shaders != null) {
			var s = this.getShader(h3d.shader.ColorKey);
			if(s == null) {
				if(v != null) s = this.addShader(new h3d.shader.ColorKey(-16777216 | v));
			} else if(v == null) this.removeShader(s); else s.colorKey__.setColor(-16777216 | v,null);
		}
		return this.colorKey = v;
	}
	,set_alpha: function(v) {
		return this.color.w = v;
	}
	,getShader: function(stype) {
		var _g = 0;
		var _g1 = this.shaders;
		while(_g < _g1.length) {
			var s = _g1[_g];
			++_g;
			if(js.Boot.__instanceof(s,stype)) return s;
		}
		return null;
	}
	,addShader: function(s) {
		this.shaders.push(s);
		return s;
	}
	,removeShader: function(s) {
		return HxOverrides.remove(this.shaders,s);
	}
	,emitTile: function(ctx,tile) {
		if(tile == null) tile = new h2d.Tile(null,0,0,5,5);
		ctx.beginDrawBatch(this,tile.getTexture());
		var ax = this.absX + tile.dx * this.matA + tile.dy * this.matC;
		var ay = this.absY + tile.dx * this.matB + tile.dy * this.matD;
		var buf = ctx.buffer;
		var pos = ctx.bufPos;
		while(buf.length < pos + 32) buf.push(0.);
		var key = pos++;
		buf[key] = ax;
		var key1 = pos++;
		buf[key1] = ay;
		var key2 = pos++;
		buf[key2] = tile.u;
		var key3 = pos++;
		buf[key3] = tile.v;
		var key4 = pos++;
		buf[key4] = this.color.x;
		var key5 = pos++;
		buf[key5] = this.color.y;
		var key6 = pos++;
		buf[key6] = this.color.z;
		var key7 = pos++;
		buf[key7] = this.color.w;
		var tw = tile.width;
		var th = tile.height;
		var dx1 = tw * this.matA;
		var dy1 = tw * this.matB;
		var dx2 = th * this.matC;
		var dy2 = th * this.matD;
		var key8 = pos++;
		buf[key8] = ax + dx1;
		var key9 = pos++;
		buf[key9] = ay + dy1;
		var key10 = pos++;
		buf[key10] = tile.u2;
		var key11 = pos++;
		buf[key11] = tile.v;
		var key12 = pos++;
		buf[key12] = this.color.x;
		var key13 = pos++;
		buf[key13] = this.color.y;
		var key14 = pos++;
		buf[key14] = this.color.z;
		var key15 = pos++;
		buf[key15] = this.color.w;
		var key16 = pos++;
		buf[key16] = ax + dx2;
		var key17 = pos++;
		buf[key17] = ay + dy2;
		var key18 = pos++;
		buf[key18] = tile.u;
		var key19 = pos++;
		buf[key19] = tile.v2;
		var key20 = pos++;
		buf[key20] = this.color.x;
		var key21 = pos++;
		buf[key21] = this.color.y;
		var key22 = pos++;
		buf[key22] = this.color.z;
		var key23 = pos++;
		buf[key23] = this.color.w;
		var key24 = pos++;
		buf[key24] = ax + dx1 + dx2;
		var key25 = pos++;
		buf[key25] = ay + dy1 + dy2;
		var key26 = pos++;
		buf[key26] = tile.u2;
		var key27 = pos++;
		buf[key27] = tile.v2;
		var key28 = pos++;
		buf[key28] = this.color.x;
		var key29 = pos++;
		buf[key29] = this.color.y;
		var key30 = pos++;
		buf[key30] = this.color.z;
		var key31 = pos++;
		buf[key31] = this.color.w;
		ctx.bufPos = pos;
	}
	,__class__: h2d.Drawable
});
h2d.Anim = function(frames,speed,parent) {
	this.loop = true;
	h2d.Drawable.call(this,parent);
	if(frames == null) this.frames = []; else this.frames = frames;
	this.curFrame = 0;
	if(speed == null) this.speed = 15; else this.speed = speed;
};
$hxClasses["h2d.Anim"] = h2d.Anim;
h2d.Anim.__name__ = true;
h2d.Anim.__super__ = h2d.Drawable;
h2d.Anim.prototype = $extend(h2d.Drawable.prototype,{
	play: function(frames,atFrame) {
		if(atFrame == null) atFrame = 0.;
		if(frames == null) this.frames = []; else this.frames = frames;
		this.set_currentFrame(atFrame);
	}
	,set_currentFrame: function(frame) {
		if(this.frames.length == 0) this.curFrame = 0; else this.curFrame = frame % this.frames.length;
		if(this.curFrame < 0) this.curFrame += this.frames.length;
		return this.curFrame;
	}
	,sync: function(ctx) {
		var prev = this.curFrame;
		this.curFrame += this.speed * ctx.elapsedTime;
		if(this.curFrame >= this.frames.length) {
			if(this.frames.length == 0) this.curFrame = 0; else if(this.loop) {
				this.curFrame %= this.frames.length;
				this.onAnimEnd();
			} else {
				this.curFrame = this.frames.length - 0.000001;
				if(this.curFrame != prev) this.onAnimEnd();
			}
		}
	}
	,onAnimEnd: function() {
	}
	,getFrame: function() {
		return this.frames[this.curFrame | 0];
	}
	,draw: function(ctx) {
		var t = this.getFrame();
		this.emitTile(ctx,t);
	}
	,__class__: h2d.Anim
});
h2d.Bitmap = function(tile,parent) {
	h2d.Drawable.call(this,parent);
	this.tile = tile;
};
$hxClasses["h2d.Bitmap"] = h2d.Bitmap;
h2d.Bitmap.__name__ = true;
h2d.Bitmap.__super__ = h2d.Drawable;
h2d.Bitmap.prototype = $extend(h2d.Drawable.prototype,{
	draw: function(ctx) {
		this.emitTile(ctx,this.tile);
	}
	,__class__: h2d.Bitmap
});
h2d.BlendMode = $hxClasses["h2d.BlendMode"] = { __ename__ : true, __constructs__ : ["Normal","None","Add","SoftAdd","Multiply","Erase"] };
h2d.BlendMode.Normal = ["Normal",0];
h2d.BlendMode.Normal.toString = $estr;
h2d.BlendMode.Normal.__enum__ = h2d.BlendMode;
h2d.BlendMode.None = ["None",1];
h2d.BlendMode.None.toString = $estr;
h2d.BlendMode.None.__enum__ = h2d.BlendMode;
h2d.BlendMode.Add = ["Add",2];
h2d.BlendMode.Add.toString = $estr;
h2d.BlendMode.Add.__enum__ = h2d.BlendMode;
h2d.BlendMode.SoftAdd = ["SoftAdd",3];
h2d.BlendMode.SoftAdd.toString = $estr;
h2d.BlendMode.SoftAdd.__enum__ = h2d.BlendMode;
h2d.BlendMode.Multiply = ["Multiply",4];
h2d.BlendMode.Multiply.toString = $estr;
h2d.BlendMode.Multiply.__enum__ = h2d.BlendMode;
h2d.BlendMode.Erase = ["Erase",5];
h2d.BlendMode.Erase.toString = $estr;
h2d.BlendMode.Erase.__enum__ = h2d.BlendMode;
h2d.Kerning = function(c,o) {
	this.prevChar = c;
	this.offset = o;
};
$hxClasses["h2d.Kerning"] = h2d.Kerning;
h2d.Kerning.__name__ = true;
h2d.Kerning.prototype = {
	__class__: h2d.Kerning
};
h2d.FontChar = function(t,w) {
	this.t = t;
	this.width = w;
};
$hxClasses["h2d.FontChar"] = h2d.FontChar;
h2d.FontChar.__name__ = true;
h2d.FontChar.prototype = {
	addKerning: function(prevChar,offset) {
		var k = new h2d.Kerning(prevChar,offset);
		k.next = this.kerning;
		this.kerning = k;
	}
	,getKerningOffset: function(prevChar) {
		var k = this.kerning;
		while(k != null) {
			if(k.prevChar == prevChar) return k.offset;
			k = k.next;
		}
		return 0;
	}
	,__class__: h2d.FontChar
};
h2d.Font = function(name,size) {
	this.name = name;
	this.size = size;
	this.glyphs = new haxe.ds.IntMap();
	this.defaultChar = new h2d.FontChar(new h2d.Tile(null,0,0,0,0),0);
	this.charset = hxd.Charset.getDefault();
};
$hxClasses["h2d.Font"] = h2d.Font;
h2d.Font.__name__ = true;
h2d.Font.prototype = {
	getChar: function(code) {
		var c = this.glyphs.get(code);
		if(c == null) {
			c = this.charset.resolveChar(code,this.glyphs);
			if(c == null) c = this.defaultChar;
		}
		return c;
	}
	,dispose: function() {
		this.tile.dispose();
	}
	,__class__: h2d.Font
};
h2d.Interactive = function() { };
$hxClasses["h2d.Interactive"] = h2d.Interactive;
h2d.Interactive.__name__ = true;
h2d.Interactive.__super__ = h2d.Drawable;
h2d.Interactive.prototype = $extend(h2d.Drawable.prototype,{
	onAlloc: function() {
		this.scene = this.getScene();
		if(this.scene != null) this.scene.addEventTarget(this);
		h2d.Drawable.prototype.onAlloc.call(this);
	}
	,draw: function(ctx) {
		if(this.backgroundColor != null) this.emitTile(ctx,h2d.Tile.fromColor(this.backgroundColor,this.width | 0,this.height | 0));
	}
	,onParentChanged: function() {
		if(this.scene != null) {
			this.scene.removeEventTarget(this);
			this.scene.addEventTarget(this);
		}
	}
	,calcAbsPos: function() {
		h2d.Drawable.prototype.calcAbsPos.call(this);
		if(this.scene != null && this.scene.currentOver == this) {
			var stage = hxd.Stage.getInstance();
			var e = new hxd.Event(hxd.EventKind.EMove,stage.get_mouseX(),stage.get_mouseY());
			this.scene.onEvent(e);
		}
	}
	,onDelete: function() {
		if(this.scene != null) {
			this.scene.removeEventTarget(this);
			if(this.scene.currentOver == this) {
				this.scene.currentOver = null;
				hxd.System.setCursor(hxd.Cursor.Default);
			}
			if(this.scene.currentFocus == this) this.scene.currentFocus = null;
		}
		h2d.Drawable.prototype.onDelete.call(this);
	}
	,__class__: h2d.Interactive
});
h2d.Layers = function(parent) {
	h2d.Sprite.call(this,parent);
	this.layers = [];
	this.layerCount = 0;
};
$hxClasses["h2d.Layers"] = h2d.Layers;
h2d.Layers.__name__ = true;
h2d.Layers.__super__ = h2d.Sprite;
h2d.Layers.prototype = $extend(h2d.Sprite.prototype,{
	addChild: function(s) {
		this.addChildAt(s,0);
	}
	,addChildAt: function(s,layer) {
		if(s.parent == this) {
			var old = s.allocated;
			s.allocated = false;
			this.removeChild(s);
			s.allocated = old;
		}
		while(layer >= this.layerCount) this.layers[this.layerCount++] = this.childs.length;
		h2d.Sprite.prototype.addChildAt.call(this,s,this.layers[layer]);
		var _g1 = layer;
		var _g = this.layerCount;
		while(_g1 < _g) {
			var i = _g1++;
			this.layers[i]++;
		}
	}
	,removeChild: function(s) {
		var _g1 = 0;
		var _g = this.childs.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.childs[i] == s) {
				this.childs.splice(i,1);
				if(s.allocated) s.onDelete();
				s.parent = null;
				var k = this.layerCount - 1;
				while(k >= 0 && this.layers[k] > i) {
					this.layers[k]--;
					k--;
				}
				break;
			}
		}
	}
	,__class__: h2d.Layers
});
h2d.RenderContext = function() {
	this.frame = 0;
	this.time = 0.;
	this.elapsedTime = 1. / hxd.Stage.getInstance().getFrameRate();
	var this1;
	this1 = new Array(0);
	this.buffer = this1;
	this.bufPos = 0;
	this.manager = new h3d.shader.Manager(["output.position","output.color"]);
	this.pass = new h3d.mat.Pass("",[]);
	this.pass.depth(true,h3d.mat.Compare.Always);
	this.pass.set_culling(h3d.mat.Face.None);
	this.baseShader = new h3d.shader.Base2d();
	this.baseShader.zValue__ = 0.;
};
$hxClasses["h2d.RenderContext"] = h2d.RenderContext;
h2d.RenderContext.__name__ = true;
h2d.RenderContext.prototype = {
	begin: function() {
		this.texture = null;
		this.currentObj = null;
		this.bufPos = 0;
		this.stride = 0;
		if(this.compiledShader == null) this.initShaders([this.baseShader]);
		this.engine.selectShader(this.compiledShader);
		this.engine.selectMaterial(this.pass);
		this.engine.uploadShaderBuffers(this.buffers,0);
	}
	,initShaders: function(shaders) {
		this.currentShaders = shaders;
		this.compiledShader = this.manager.compileShaders(shaders);
		this.buffers = new h3d.shader.Buffers(this.compiledShader);
		this.manager.fillGlobals(this.buffers,this.compiledShader);
	}
	,end: function() {
		this.flush();
		this.texture = null;
		this.currentObj = null;
	}
	,flush: function(force) {
		if(force == null) force = false;
		if(this.bufPos == 0) return;
		this.beforeDraw();
		var nverts = this.bufPos / this.stride | 0;
		var tmp = this.engine.mem.alloc(nverts,this.stride,4);
		tmp.uploadVector(this.buffer,0,nverts);
		this.engine.renderQuadBuffer(tmp,null,null);
		tmp.dispose();
		this.bufPos = 0;
		this.texture = null;
	}
	,beforeDraw: function() {
		this.baseShader.texture__ = this.texture;
		this.texture.set_filter(this.currentObj.filter?h3d.mat.Filter.Linear:h3d.mat.Filter.Nearest);
		var _g = this.currentObj.blendMode;
		switch(_g[1]) {
		case 0:
			this.pass.blend(h3d.mat.Blend.SrcAlpha,h3d.mat.Blend.OneMinusSrcAlpha);
			break;
		case 1:
			this.pass.blend(h3d.mat.Blend.One,h3d.mat.Blend.Zero);
			break;
		case 2:
			this.pass.blend(h3d.mat.Blend.SrcAlpha,h3d.mat.Blend.One);
			break;
		case 3:
			this.pass.blend(h3d.mat.Blend.OneMinusDstColor,h3d.mat.Blend.One);
			break;
		case 4:
			this.pass.blend(h3d.mat.Blend.DstColor,h3d.mat.Blend.OneMinusSrcAlpha);
			break;
		case 5:
			this.pass.blend(h3d.mat.Blend.Zero,h3d.mat.Blend.OneMinusSrcAlpha);
			break;
		}
		this.manager.fillParams(this.buffers,this.compiledShader,this.currentShaders);
		this.engine.selectMaterial(this.pass);
		this.engine.uploadShaderBuffers(this.buffers,1);
		this.engine.uploadShaderBuffers(this.buffers,2);
	}
	,beginDrawObject: function(obj,texture) {
		this.beginDraw(obj,texture,true);
		this.baseShader.color__.set(obj.color.x,obj.color.y,obj.color.z,obj.color.w);
		this.baseShader.absoluteMatrixA__.set(obj.matA,obj.matC,obj.absX);
		this.baseShader.absoluteMatrixB__.set(obj.matB,obj.matD,obj.absY);
		this.beforeDraw();
	}
	,beginDrawBatch: function(obj,texture) {
		this.beginDraw(obj,texture,false);
	}
	,beginDraw: function(obj,texture,isRelative) {
		var stride = 8;
		if(this.currentObj != null && (texture != this.texture || stride != this.stride || obj.blendMode != this.currentObj.blendMode || obj.filter != this.currentObj.filter)) this.flush();
		var shaderChanged = false;
		var paramsChanged = false;
		if(obj.shaders.length + 1 != this.currentShaders.length) shaderChanged = true; else {
			var _g1 = 0;
			var _g = obj.shaders.length;
			while(_g1 < _g) {
				var i = _g1++;
				var s = obj.shaders[i];
				var t = this.currentShaders[i + 1];
				if(s == t) continue;
				paramsChanged = true;
				s.updateConstants(this.manager.globals);
				if(s.instance != t.instance) shaderChanged = true;
			}
		}
		if(this.baseShader.isRelative__ != isRelative) shaderChanged = true;
		if(shaderChanged) {
			this.flush();
			var ns = obj.shaders.slice();
			ns.unshift(this.baseShader);
			this.baseShader.set_isRelative(isRelative);
			this.initShaders(ns);
			this.engine.selectShader(this.compiledShader);
		} else if(paramsChanged) {
			this.flush();
			var _g11 = 0;
			var _g2 = obj.shaders.length;
			while(_g11 < _g2) {
				var i1 = _g11++;
				this.currentShaders[i1 + 1] = obj.shaders[i1];
			}
		}
		this.texture = texture;
		this.stride = stride;
		this.currentObj = obj;
	}
	,__class__: h2d.RenderContext
};
var h3d = {};
h3d.IDrawable = function() { };
$hxClasses["h3d.IDrawable"] = h3d.IDrawable;
h3d.IDrawable.__name__ = true;
h2d.Scene = function() {
	h2d.Layers.call(this,null);
	var e = h3d.Engine.getCurrent();
	this.ctx = new h2d.RenderContext();
	this.width = e.width;
	this.height = e.height;
	this.interactive = new Array();
	this.pushList = new Array();
	this.eventListeners = new Array();
	this.stage = hxd.Stage.getInstance();
	this.posChanged = true;
};
$hxClasses["h2d.Scene"] = h2d.Scene;
h2d.Scene.__name__ = true;
h2d.Scene.__interfaces__ = [h3d.IDrawable];
h2d.Scene.__super__ = h2d.Layers;
h2d.Scene.prototype = $extend(h2d.Layers.prototype,{
	setFixedSize: function(w,h) {
		this.width = w;
		this.height = h;
		this.fixedSize = true;
		this.posChanged = true;
	}
	,onAlloc: function() {
		this.stage.addEventTarget($bind(this,this.onEvent));
		h2d.Layers.prototype.onAlloc.call(this);
	}
	,onDelete: function() {
		this.stage.removeEventTarget($bind(this,this.onEvent));
		h2d.Layers.prototype.onDelete.call(this);
	}
	,onEvent: function(e) {
		if(this.pendingEvents != null) {
			e.relX = this.screenXToLocal(e.relX);
			e.relY = this.screenYToLocal(e.relY);
			this.pendingEvents.push(e);
		}
	}
	,screenXToLocal: function(mx) {
		return (mx - this.x) * this.width / (this.stage.get_width() * this.scaleX);
	}
	,screenYToLocal: function(my) {
		return (my - this.y) * this.height / (this.stage.get_height() * this.scaleY);
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
			var i11 = i;
			var i2 = this.interactive[index];
			var lv1 = level;
			var lv2;
			var i3 = i2;
			var lv3 = 0;
			while(i3 != null) {
				i3 = i3.parent;
				lv3++;
			}
			lv2 = lv3;
			var p1 = i11;
			var p2 = i2;
			while(lv1 > lv2) {
				i11 = p1;
				p1 = p1.parent;
				lv1--;
			}
			while(lv2 > lv1) {
				i2 = p2;
				p2 = p2.parent;
				lv2--;
			}
			while(p1 != p2) {
				i11 = p1;
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
						if(p1.childs[k] == i11) {
							id = k;
							break;
						}
					}
				}
				$r = id;
				return $r;
			}(this)) > (function($this) {
				var $r;
				var id1 = -1;
				{
					var _g12 = 0;
					var _g3 = p2.childs.length;
					while(_g12 < _g3) {
						var k1 = _g12++;
						if(p2.childs[k1] == i2) {
							id1 = k1;
							break;
						}
					}
				}
				$r = id1;
				return $r;
			}(this))) {
				this.interactive.splice(index,0,i);
				return;
			}
		}
		this.interactive.push(i);
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
		var engine = h3d.Engine.getCurrent();
		this.absX += 1 / engine.width;
		this.absY += 1 / engine.height;
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
	,dispose: function() {
		if(this.allocated) this.onDelete();
	}
	,setElapsedTime: function(v) {
		this.ctx.elapsedTime = v;
	}
	,render: function(engine) {
		this.ctx.engine = engine;
		this.ctx.frame++;
		this.ctx.time += this.ctx.elapsedTime;
		this.sync(this.ctx);
		this.ctx.begin();
		this.drawRec(this.ctx);
		this.ctx.end();
	}
	,sync: function(ctx) {
		if(!this.allocated) this.onAlloc();
		if(!this.fixedSize && (this.width != ctx.engine.width || this.height != ctx.engine.height)) {
			this.width = ctx.engine.width;
			this.height = ctx.engine.height;
			this.posChanged = true;
		}
		h2d.Layers.prototype.sync.call(this,ctx);
	}
	,__class__: h2d.Scene
});
h2d.SpriteBatch = function(t,parent) {
	h2d.Drawable.call(this,parent);
	this.tile = t;
};
$hxClasses["h2d.SpriteBatch"] = h2d.SpriteBatch;
h2d.SpriteBatch.__name__ = true;
h2d.SpriteBatch.__super__ = h2d.Drawable;
h2d.SpriteBatch.prototype = $extend(h2d.Drawable.prototype,{
	add: function(e) {
		e.batch = this;
		if(this.first == null) this.first = this.last = e; else {
			this.last.next = e;
			e.prev = this.last;
			this.last = e;
		}
		return e;
	}
	,'delete': function(e) {
		if(e.prev == null) {
			if(this.first == e) this.first = e.next;
		} else e.prev.next = e.next;
		if(e.next == null) {
			if(this.last == e) this.last = e.prev;
		} else e.next.prev = e.prev;
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
	,draw: function(ctx) {
		if(this.first == null) return;
		if(this.tmpBuf == null) {
			var this1;
			this1 = new Array(0);
			this.tmpBuf = this1;
		}
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
				tmp[key] = (px * ca - py * sa) * e.scale + e.x;
				var key1 = pos++;
				tmp[key1] = (py * ca + px * sa) * e.scale + e.y;
				var key2 = pos++;
				tmp[key2] = t.u;
				var key3 = pos++;
				tmp[key3] = t.v;
				var key4 = pos++;
				tmp[key4] = e.r;
				var key5 = pos++;
				tmp[key5] = e.g;
				var key6 = pos++;
				tmp[key6] = e.b;
				var key7 = pos++;
				tmp[key7] = e.a;
				var px1 = t.dx + hx;
				var py1 = t.dy;
				var key8 = pos++;
				tmp[key8] = (px1 * ca - py1 * sa) * e.scale + e.x;
				var key9 = pos++;
				tmp[key9] = (py1 * ca + px1 * sa) * e.scale + e.y;
				var key10 = pos++;
				tmp[key10] = t.u2;
				var key11 = pos++;
				tmp[key11] = t.v;
				var key12 = pos++;
				tmp[key12] = e.r;
				var key13 = pos++;
				tmp[key13] = e.g;
				var key14 = pos++;
				tmp[key14] = e.b;
				var key15 = pos++;
				tmp[key15] = e.a;
				var px2 = t.dx;
				var py2 = t.dy + hy;
				var key16 = pos++;
				tmp[key16] = (px2 * ca - py2 * sa) * e.scale + e.x;
				var key17 = pos++;
				tmp[key17] = (py2 * ca + px2 * sa) * e.scale + e.y;
				var key18 = pos++;
				tmp[key18] = t.u;
				var key19 = pos++;
				tmp[key19] = t.v2;
				var key20 = pos++;
				tmp[key20] = e.r;
				var key21 = pos++;
				tmp[key21] = e.g;
				var key22 = pos++;
				tmp[key22] = e.b;
				var key23 = pos++;
				tmp[key23] = e.a;
				var px3 = t.dx + hx;
				var py3 = t.dy + hy;
				var key24 = pos++;
				tmp[key24] = (px3 * ca - py3 * sa) * e.scale + e.x;
				var key25 = pos++;
				tmp[key25] = (py3 * ca + px3 * sa) * e.scale + e.y;
				var key26 = pos++;
				tmp[key26] = t.u2;
				var key27 = pos++;
				tmp[key27] = t.v2;
				var key28 = pos++;
				tmp[key28] = e.r;
				var key29 = pos++;
				tmp[key29] = e.g;
				var key30 = pos++;
				tmp[key30] = e.b;
				var key31 = pos++;
				tmp[key31] = e.a;
			} else {
				var sx = e.x + t.dx;
				var sy = e.y + t.dy;
				var key32 = pos++;
				tmp[key32] = sx;
				var key33 = pos++;
				tmp[key33] = sy;
				var key34 = pos++;
				tmp[key34] = t.u;
				var key35 = pos++;
				tmp[key35] = t.v;
				var key36 = pos++;
				tmp[key36] = e.r;
				var key37 = pos++;
				tmp[key37] = e.g;
				var key38 = pos++;
				tmp[key38] = e.b;
				var key39 = pos++;
				tmp[key39] = e.a;
				var key40 = pos++;
				tmp[key40] = sx + t.width + 0.1;
				var key41 = pos++;
				tmp[key41] = sy;
				var key42 = pos++;
				tmp[key42] = t.u2;
				var key43 = pos++;
				tmp[key43] = t.v;
				var key44 = pos++;
				tmp[key44] = e.r;
				var key45 = pos++;
				tmp[key45] = e.g;
				var key46 = pos++;
				tmp[key46] = e.b;
				var key47 = pos++;
				tmp[key47] = e.a;
				var key48 = pos++;
				tmp[key48] = sx;
				var key49 = pos++;
				tmp[key49] = sy + t.height + 0.1;
				var key50 = pos++;
				tmp[key50] = t.u;
				var key51 = pos++;
				tmp[key51] = t.v2;
				var key52 = pos++;
				tmp[key52] = e.r;
				var key53 = pos++;
				tmp[key53] = e.g;
				var key54 = pos++;
				tmp[key54] = e.b;
				var key55 = pos++;
				tmp[key55] = e.a;
				var key56 = pos++;
				tmp[key56] = sx + t.width + 0.1;
				var key57 = pos++;
				tmp[key57] = sy + t.height + 0.1;
				var key58 = pos++;
				tmp[key58] = t.u2;
				var key59 = pos++;
				tmp[key59] = t.v2;
				var key60 = pos++;
				tmp[key60] = e.r;
				var key61 = pos++;
				tmp[key61] = e.g;
				var key62 = pos++;
				tmp[key62] = e.b;
				var key63 = pos++;
				tmp[key63] = e.a;
			}
			e = e.next;
		}
		var stride = 5;
		var nverts = pos / stride | 0;
		var buffer = ctx.engine.mem.alloc(nverts,stride,4);
		buffer.uploadVector(this.tmpBuf,0,nverts);
		ctx.beginDrawObject(this,this.tile.getTexture());
		ctx.engine.renderQuadBuffer(buffer,null,null);
		buffer.dispose();
	}
	,__class__: h2d.SpriteBatch
});
h2d.Align = $hxClasses["h2d.Align"] = { __ename__ : true, __constructs__ : ["Left","Right","Center"] };
h2d.Align.Left = ["Left",0];
h2d.Align.Left.toString = $estr;
h2d.Align.Left.__enum__ = h2d.Align;
h2d.Align.Right = ["Right",1];
h2d.Align.Right.toString = $estr;
h2d.Align.Right.__enum__ = h2d.Align;
h2d.Align.Center = ["Center",2];
h2d.Align.Center.toString = $estr;
h2d.Align.Center.__enum__ = h2d.Align;
h2d.Text = function(font,parent) {
	h2d.Drawable.call(this,parent);
	this.set_font(font);
	this.set_textAlign(h2d.Align.Left);
	this.set_letterSpacing(1);
	this.set_text("");
	this.set_textColor(16777215);
};
$hxClasses["h2d.Text"] = h2d.Text;
h2d.Text.__name__ = true;
h2d.Text.__super__ = h2d.Drawable;
h2d.Text.prototype = $extend(h2d.Drawable.prototype,{
	set_font: function(font) {
		this.font = font;
		if(this.glyphs != null) this.glyphs.remove();
		this.glyphs = new h2d.TileGroup(font == null?null:font.tile,this);
		this.glyphs.visible = false;
		this.rebuild();
		return font;
	}
	,set_textAlign: function(a) {
		this.textAlign = a;
		this.rebuild();
		return a;
	}
	,set_letterSpacing: function(s) {
		this.letterSpacing = s;
		this.rebuild();
		return s;
	}
	,onAlloc: function() {
		h2d.Drawable.prototype.onAlloc.call(this);
		this.rebuild();
	}
	,draw: function(ctx) {
		if(this.dropShadow != null) {
			var oldX = this.absX;
			var oldY = this.absY;
			this.absX += this.dropShadow.x * this.matA + this.dropShadow.y * this.matC;
			this.absY += this.dropShadow.x * this.matB + this.dropShadow.y * this.matD;
			var oldR = this.color.x;
			var oldG = this.color.y;
			var oldB = this.color.z;
			var oldA = this.color.w;
			this.color.setColor(this.dropShadow.color,null);
			this.color.w = this.dropShadow.alpha;
			this.glyphs.drawWith(ctx,this);
			this.absX = oldX;
			this.absY = oldY;
			this.color.set(oldR,oldG,oldB,oldA);
			this.calcAbsPos();
		}
		this.glyphs.drawWith(ctx,this);
	}
	,set_text: function(t) {
		var t1;
		if(t == null) t1 = "null"; else t1 = t;
		if(t1 == this.text) return t1;
		this.text = t1;
		this.rebuild();
		return t1;
	}
	,rebuild: function() {
		if(this.allocated && this.text != null && this.font != null) this.initGlyphs(this.text);
	}
	,initGlyphs: function(text,rebuild,lines) {
		if(rebuild == null) rebuild = true;
		if(rebuild) this.glyphs.reset();
		var x = 0;
		var y = 0;
		var xMax = 0;
		var prevChar = -1;
		var align;
		if(rebuild) align = this.textAlign; else align = h2d.Align.Left;
		switch(align[1]) {
		case 2:case 1:
			lines = [];
			var inf = this.initGlyphs(text,false,lines);
			var max;
			if(this.maxWidth == null) max = inf.width; else max = this.maxWidth | 0;
			var k;
			if(align == h2d.Align.Center) k = 1; else k = 0;
			var _g1 = 0;
			var _g = lines.length;
			while(_g1 < _g) {
				var i = _g1++;
				lines[i] = max - lines[i] >> k;
			}
			x = lines.shift();
			break;
		default:
		}
		var calcLines = !rebuild && lines != null;
		var _g11 = 0;
		var _g2 = text.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			var cc = HxOverrides.cca(text,i1);
			var e = this.font.getChar(cc);
			var newline = cc == 10;
			var esize = e.width + e.getKerningOffset(prevChar);
			if(this.font.charset.isBreakChar(cc) && this.maxWidth != null) {
				var size = x + esize + this.letterSpacing;
				var k1 = i1 + 1;
				var max1 = text.length;
				var prevChar1 = prevChar;
				while(size <= this.maxWidth && k1 < text.length) {
					var cc1;
					var index = k1++;
					cc1 = HxOverrides.cca(text,index);
					if(this.font.charset.isSpace(cc1) || cc1 == 10) break;
					var e1 = this.font.getChar(cc1);
					size += e1.width + this.letterSpacing + e1.getKerningOffset(prevChar1);
					prevChar1 = cc1;
				}
				if(size > this.maxWidth) {
					newline = true;
					if(this.font.charset.isSpace(cc)) e = null;
				}
			}
			if(e != null) {
				if(rebuild) this.glyphs.add(x,y,e.t);
				x += esize + this.letterSpacing;
			}
			if(newline) {
				if(x > xMax) xMax = x;
				if(calcLines) lines.push(x);
				if(rebuild) switch(align[1]) {
				case 0:
					x = 0;
					break;
				case 1:case 2:
					x = lines.shift();
					break;
				} else x = 0;
				y += this.font.lineHeight;
				prevChar = -1;
			} else prevChar = cc;
		}
		if(calcLines) lines.push(x);
		return { width : x > xMax?x:xMax, height : x > 0?y + this.font.lineHeight:y > 0?y:this.font.lineHeight};
	}
	,get_textHeight: function() {
		return this.initGlyphs(this.text,false).height;
	}
	,get_textWidth: function() {
		return this.initGlyphs(this.text,false).width;
	}
	,set_textColor: function(c) {
		this.textColor = c;
		var a = this.color.w;
		this.color.setColor(c,null);
		this.color.w = a;
		return c;
	}
	,__class__: h2d.Text
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
h2d.Tile.__name__ = true;
h2d.Tile.fromColor = function(color,width,height,allocPos) {
	if(height == null) height = 1;
	if(width == null) width = 1;
	var t = new h2d.Tile(h3d.mat.Texture.fromColor(color),0,0,1,1);
	t.width = width;
	t.height = height;
	return t;
};
h2d.Tile.fromTexture = function(t) {
	return new h2d.Tile(t,0,0,t.width,t.height);
};
h2d.Tile.prototype = {
	getTexture: function() {
		if(this.innerTex == null || this.innerTex.isDisposed()) return h3d.mat.Texture.fromColor(-65281);
		return this.innerTex;
	}
	,isDisposed: function() {
		return this.innerTex == null || this.innerTex.isDisposed();
	}
	,setTexture: function(tex) {
		this.innerTex = tex;
		if(tex != null) {
			this.u = this.x / tex.width;
			this.v = this.y / tex.height;
			this.u2 = (this.x + this.width) / tex.width;
			this.v2 = (this.y + this.height - 0.0001) / tex.height;
		}
	}
	,sub: function(x,y,w,h,dx,dy) {
		if(dy == null) dy = 0;
		if(dx == null) dx = 0;
		return new h2d.Tile(this.innerTex,this.x + x,this.y + y,w,h,dx,dy);
	}
	,center: function(dx,dy) {
		return this.sub(0,0,this.width,this.height,-dx,-dy);
	}
	,dispose: function() {
		if(this.innerTex != null) this.innerTex.dispose();
		this.innerTex = null;
	}
	,split: function(frames,vertical) {
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
			var stride1 = this.width / frames | 0;
			var _g1 = 0;
			while(_g1 < frames) {
				var i1 = _g1++;
				tl.push(this.sub(i1 * stride1,0,stride1,this.height));
			}
		}
		return tl;
	}
	,__class__: h2d.Tile
};
h3d.prim = {};
h3d.prim.Primitive = function() { };
$hxClasses["h3d.prim.Primitive"] = h3d.prim.Primitive;
h3d.prim.Primitive.__name__ = true;
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
};
h2d._TileGroup = {};
h2d._TileGroup.TileLayerContent = function() {
	this.reset();
};
$hxClasses["h2d._TileGroup.TileLayerContent"] = h2d._TileGroup.TileLayerContent;
h2d._TileGroup.TileLayerContent.__name__ = true;
h2d._TileGroup.TileLayerContent.__super__ = h3d.prim.Primitive;
h2d._TileGroup.TileLayerContent.prototype = $extend(h3d.prim.Primitive.prototype,{
	reset: function() {
		var this1;
		this1 = new Array(0);
		this.tmp = this1;
		if(this.buffer != null) this.buffer.dispose();
		this.buffer = null;
	}
	,triCount: function() {
		if(this.buffer == null) return this.tmp.length >> 4;
		var v = 0;
		var b = this.buffer;
		while(b != null) {
			v += b.nvert;
			b = b.next;
		}
		return v >> 1;
	}
	,add: function(x,y,r,g,b,a,t) {
		var sx = x + t.dx;
		var sy = y + t.dy;
		this.tmp.push(sx);
		this.tmp.push(sy);
		this.tmp.push(t.u);
		this.tmp.push(t.v);
		this.tmp.push(r);
		this.tmp.push(g);
		this.tmp.push(b);
		this.tmp.push(a);
		this.tmp.push(sx + t.width);
		this.tmp.push(sy);
		this.tmp.push(t.u2);
		this.tmp.push(t.v);
		this.tmp.push(r);
		this.tmp.push(g);
		this.tmp.push(b);
		this.tmp.push(a);
		this.tmp.push(sx);
		this.tmp.push(sy + t.height);
		this.tmp.push(t.u);
		this.tmp.push(t.v2);
		this.tmp.push(r);
		this.tmp.push(g);
		this.tmp.push(b);
		this.tmp.push(a);
		this.tmp.push(sx + t.width);
		this.tmp.push(sy + t.height);
		this.tmp.push(t.u2);
		this.tmp.push(t.v2);
		this.tmp.push(r);
		this.tmp.push(g);
		this.tmp.push(b);
		this.tmp.push(a);
	}
	,alloc: function(engine) {
		if(this.tmp == null) this.reset();
		this.buffer = engine.mem.allocVector(this.tmp,8,4);
	}
	,doRender: function(engine,min,len) {
		if(this.buffer == null || this.buffer.isDisposed()) this.alloc(engine);
		engine.renderBuffer(this.buffer,engine.mem.quadIndexes,2,min,len);
	}
	,__class__: h2d._TileGroup.TileLayerContent
});
h2d.TileGroup = function(t,parent) {
	h2d.Drawable.call(this,parent);
	this.tile = t;
	this.rangeMin = this.rangeMax = -1;
	this.curColor = new h3d.Vector(1,1,1,1);
	this.content = new h2d._TileGroup.TileLayerContent();
};
$hxClasses["h2d.TileGroup"] = h2d.TileGroup;
h2d.TileGroup.__name__ = true;
h2d.TileGroup.__super__ = h2d.Drawable;
h2d.TileGroup.prototype = $extend(h2d.Drawable.prototype,{
	reset: function() {
		this.content.reset();
	}
	,onDelete: function() {
		this.content.dispose();
		h2d.Drawable.prototype.onDelete.call(this);
	}
	,add: function(x,y,t) {
		this.content.add(x,y,this.curColor.x,this.curColor.y,this.curColor.z,this.curColor.w,t);
	}
	,draw: function(ctx) {
		this.drawWith(ctx,this);
	}
	,drawWith: function(ctx,obj) {
		ctx.beginDrawObject(obj,this.tile.getTexture());
		var min;
		if(this.rangeMin < 0) min = 0; else min = this.rangeMin * 2;
		var max = this.content.triCount();
		if(this.rangeMax > 0 && this.rangeMax < max * 2) max = this.rangeMax * 2;
		this.content.doRender(ctx.engine,min,max - min);
	}
	,__class__: h2d.TileGroup
});
h3d.Engine = function(hardware,aa) {
	if(aa == null) aa = 0;
	if(hardware == null) hardware = true;
	this.frameCount = 0;
	this.backgroundColor = -16777216;
	this.hardware = hardware;
	this.antiAlias = aa;
	this.autoResize = true;
	this.start();
};
$hxClasses["h3d.Engine"] = h3d.Engine;
h3d.Engine.__name__ = true;
h3d.Engine.getCurrent = function() {
	return h3d.Engine.CURRENT;
};
h3d.Engine.prototype = {
	start: function() {
		this.set_fullScreen(!hxd.System.get_isWindowed());
		var stage = hxd.Stage.getInstance();
		this.realFps = stage.getFrameRate();
		this.lastTime = haxe.Timer.stamp();
		stage.addResizeEvent($bind(this,this.onStageResize));
		this.driver = new h3d.impl.GlDriver();
		if(h3d.Engine.CURRENT == null) h3d.Engine.CURRENT = this;
	}
	,init: function() {
		this.driver.init($bind(this,this.onCreate),!this.hardware);
	}
	,selectShader: function(shader) {
		this.driver.selectShader(shader);
		this.shaderSwitches++;
	}
	,selectMaterial: function(pass) {
		this.driver.selectMaterial(pass);
	}
	,uploadShaderBuffers: function(buffers,which) {
		this.driver.uploadShaderBuffers(buffers,which);
	}
	,selectBuffer: function(buf) {
		if(buf.vbuf == null) return false;
		this.driver.selectBuffer(buf.vbuf);
		return true;
	}
	,renderQuadBuffer: function(b,start,max) {
		if(max == null) max = -1;
		if(start == null) start = 0;
		return this.renderBuffer(b,this.mem.quadIndexes,2,start,max);
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
	,set_debug: function(d) {
		this.debug = d;
		this.driver.setDebug(this.debug);
		return d;
	}
	,onCreate: function(disposed) {
		if(this.autoResize) {
			var stage = hxd.Stage.getInstance();
			this.width = stage.get_width();
			this.height = stage.get_height();
		}
		if(disposed) this.mem.onContextLost(); else this.mem = new h3d.impl.MemoryManager(this.driver,65400);
		this.hardware = this.driver.isHardware();
		this.set_debug(this.debug);
		this.set_fullScreen(this.fullScreen);
		this.resize(this.width,this.height);
		if(disposed) this.onContextLost(); else this.onReady();
	}
	,onContextLost: function() {
	}
	,onReady: function() {
	}
	,onStageResize: function() {
		if(this.autoResize && !this.driver.isDisposed()) {
			var stage = hxd.Stage.getInstance();
			var w = stage.get_width();
			var h = stage.get_height();
			if(w != this.width || h != this.height) this.resize(w,h);
			this.onResized();
		}
	}
	,set_fullScreen: function(v) {
		this.fullScreen = v;
		if(this.mem != null && hxd.System.get_isWindowed()) hxd.Stage.getInstance().setFullScreen(v);
		return v;
	}
	,onResized: function() {
	}
	,resize: function(width,height) {
		if(width < 32) width = 32;
		if(height < 32) height = 32;
		this.width = width;
		this.height = height;
		if(!this.driver.isDisposed()) this.driver.resize(width,height);
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
	,reset: function() {
		this.driver.reset();
	}
	,end: function() {
		this.driver.present();
		this.reset();
		this.curProjMatrix = null;
	}
	,render: function(obj) {
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
	,__class__: h3d.Engine
};
h3d.Matrix = function() {
};
$hxClasses["h3d.Matrix"] = h3d.Matrix;
h3d.Matrix.__name__ = true;
h3d.Matrix.prototype = {
	identity: function() {
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
};
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
h3d.Vector.__name__ = true;
h3d.Vector.prototype = {
	set: function(x,y,z,w) {
		if(w == null) w = 1.;
		if(z == null) z = 0.;
		if(y == null) y = 0.;
		if(x == null) x = 0.;
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
	}
	,setColor: function(c,scale) {
		if(scale == null) scale = 1.0;
		var s = scale / 255;
		this.x = (c >> 16 & 255) * s;
		this.y = (c >> 8 & 255) * s;
		this.z = (c & 255) * s;
		this.w = (c >>> 24) * s;
	}
	,__class__: h3d.Vector
};
h3d.impl = {};
h3d.impl.Buffer = function(b,pos,nvert) {
	this.b = b;
	this.pos = pos;
	this.nvert = nvert;
};
$hxClasses["h3d.impl.Buffer"] = h3d.impl.Buffer;
h3d.impl.Buffer.__name__ = true;
h3d.impl.Buffer.prototype = {
	isDisposed: function() {
		return this.b == null || this.b.vbuf == null;
	}
	,dispose: function() {
		if(this.b != null) {
			this.b.freeCursor(this.pos,this.nvert);
			this.b = null;
			if(this.next != null) this.next.dispose();
		}
	}
	,uploadVector: function(data,dataPos,nverts) {
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
	,__class__: h3d.impl.Buffer
};
h3d.impl.Driver = function() { };
$hxClasses["h3d.impl.Driver"] = h3d.impl.Driver;
h3d.impl.Driver.__name__ = true;
h3d.impl.Driver.prototype = {
	isDisposed: function() {
		return true;
	}
	,clear: function(r,g,b,a) {
	}
	,reset: function() {
	}
	,init: function(onCreate,forceSoftware) {
		if(forceSoftware == null) forceSoftware = false;
	}
	,resize: function(width,height) {
	}
	,selectShader: function(shader) {
	}
	,selectMaterial: function(pass) {
	}
	,uploadShaderBuffers: function(buffers,which) {
	}
	,selectBuffer: function(buffer) {
	}
	,draw: function(ibuf,startIndex,ntriangles) {
	}
	,present: function() {
	}
	,isHardware: function() {
		return true;
	}
	,setDebug: function(b) {
	}
	,allocTexture: function(t) {
		return null;
	}
	,allocIndexes: function(count) {
		return null;
	}
	,allocVertex: function(count,stride) {
		return null;
	}
	,disposeTexture: function(t) {
	}
	,disposeIndexes: function(i) {
	}
	,disposeVertex: function(v) {
	}
	,uploadIndexesBuffer: function(i,startIndice,indiceCount,buf,bufPos) {
	}
	,uploadVertexBuffer: function(v,startVertex,vertexCount,buf,bufPos) {
	}
	,uploadTextureBitmap: function(t,bmp,mipLevel,side) {
	}
	,uploadTexturePixels: function(t,pixels,mipLevel,side) {
	}
	,__class__: h3d.impl.Driver
};
h3d.impl._GlDriver = {};
h3d.impl._GlDriver.CompiledShader = function(s,vertex) {
	this.s = s;
	this.vertex = vertex;
};
$hxClasses["h3d.impl._GlDriver.CompiledShader"] = h3d.impl._GlDriver.CompiledShader;
h3d.impl._GlDriver.CompiledShader.__name__ = true;
h3d.impl._GlDriver.CompiledShader.prototype = {
	__class__: h3d.impl._GlDriver.CompiledShader
};
h3d.impl._GlDriver.CompiledProgram = function() {
};
$hxClasses["h3d.impl._GlDriver.CompiledProgram"] = h3d.impl._GlDriver.CompiledProgram;
h3d.impl._GlDriver.CompiledProgram.__name__ = true;
h3d.impl._GlDriver.CompiledProgram.prototype = {
	__class__: h3d.impl._GlDriver.CompiledProgram
};
h3d.impl.GlDriver = function() {
	this.canvas = hxd.Stage.getCanvas();
	if(this.canvas == null) throw "Canvas #webgl not found";
	this.gl = js.html._CanvasElement.CanvasUtil.getContextWebGL(this.canvas,{ alpha : false});
	if(this.gl == null) throw "Could not acquire GL context";
	if(typeof(WebGLDebugUtils) != "undefined") this.gl = WebGLDebugUtils.makeDebugContext(this.gl);
	this.programs = new haxe.ds.IntMap();
	this.curAttribs = 0;
	this.curMatBits = -1;
	this.selectMaterialBits(0);
};
$hxClasses["h3d.impl.GlDriver"] = h3d.impl.GlDriver;
h3d.impl.GlDriver.__name__ = true;
h3d.impl.GlDriver.__super__ = h3d.impl.Driver;
h3d.impl.GlDriver.prototype = $extend(h3d.impl.Driver.prototype,{
	reset: function() {
		this.gl.useProgram(null);
		this.curProgram = null;
	}
	,compileShader: function(shader) {
		var type;
		if(shader.vertex) type = 35633; else type = 35632;
		var s = this.gl.createShader(type);
		var code = hxsl.GlslOut.toGlsl(shader.data);
		this.gl.shaderSource(s,code);
		this.gl.compileShader(s);
		if(this.gl.getShaderParameter(s,35713) != 1) {
			var log = this.gl.getShaderInfoLog(s);
			var line = code.split("\n")[Std.parseInt(HxOverrides.substr(log,9,null)) - 1];
			if(line == null) line = ""; else line = "(" + StringTools.trim(line) + ")";
			throw "An error occurred compiling the shaders: " + log + line;
		}
		return new h3d.impl._GlDriver.CompiledShader(s,shader.vertex);
	}
	,initShader: function(p,s,shader) {
		var prefix;
		if(s.vertex) prefix = "vertex"; else prefix = "fragment";
		s.globals = this.gl.getUniformLocation(p.p,prefix + "Globals");
		s.params = this.gl.getUniformLocation(p.p,prefix + "Params");
		var _g = [];
		var _g2 = 0;
		var _g1 = shader.textures.length;
		while(_g2 < _g1) {
			var i = _g2++;
			_g.push(this.gl.getUniformLocation(p.p,prefix + "Textures[" + i + "]"));
		}
		s.textures = _g;
	}
	,selectShader: function(shader) {
		var p = this.programs.get(shader.id);
		if(p == null) {
			p = new h3d.impl._GlDriver.CompiledProgram();
			p.vertex = this.compileShader(shader.vertex);
			p.fragment = this.compileShader(shader.fragment);
			p.p = this.gl.createProgram();
			this.gl.attachShader(p.p,p.vertex.s);
			this.gl.attachShader(p.p,p.fragment.s);
			this.gl.linkProgram(p.p);
			if(this.gl.getProgramParameter(p.p,35714) != 1) {
				var log = this.gl.getProgramInfoLog(p.p);
				throw "Program linkage failure: " + log;
			}
			this.initShader(p,p.vertex,shader.vertex);
			this.initShader(p,p.fragment,shader.fragment);
			p.attribNames = [];
			p.attribs = [];
			p.stride = 0;
			var _g = 0;
			var _g1 = shader.vertex.data.vars;
			while(_g < _g1.length) {
				var v = _g1[_g];
				++_g;
				var _g2 = v.kind;
				switch(_g2[1]) {
				case 1:
					var size;
					{
						var _g3 = v.type;
						switch(_g3[1]) {
						case 5:
							var n = _g3[2];
							size = n;
							break;
						case 3:
							size = 1;
							break;
						default:
							throw "assert " + Std.string(v.type);
						}
					}
					p.attribs.push({ offset : p.stride, index : this.gl.getAttribLocation(p.p,v.name), size : size, type : 5126});
					p.attribNames.push(v.name);
					p.stride += size;
					break;
				default:
				}
			}
			this.programs.set(shader.id,p);
		}
		if(this.curProgram == p) return;
		this.gl.useProgram(p.p);
		var _g11 = this.curAttribs;
		var _g4 = p.attribs.length;
		while(_g11 < _g4) {
			var i = _g11++;
			this.gl.enableVertexAttribArray(i);
			this.curAttribs++;
		}
		while(this.curAttribs > p.attribs.length) this.gl.disableVertexAttribArray(--this.curAttribs);
		this.curProgram = p;
	}
	,uploadShaderBuffers: function(buf,which) {
		this.uploadBuffer(this.curProgram.vertex,buf.vertex,which);
		this.uploadBuffer(this.curProgram.fragment,buf.fragment,which);
	}
	,uploadBuffer: function(s,buf,which) {
		switch(which) {
		case 0:
			if(s.globals != null) this.gl.uniform4fv(s.globals,new Float32Array(buf.globals));
			break;
		case 1:
			if(s.params != null) this.gl.uniform4fv(s.params,new Float32Array(buf.params));
			break;
		case 2:
			var _g1 = 0;
			var _g = s.textures.length;
			while(_g1 < _g) {
				var i = _g1++;
				var t = buf.tex[i];
				this.gl.activeTexture(33984 + i);
				this.gl.uniform1i(s.textures[i],i);
				this.gl.bindTexture(3553,t.t);
				var flags = h3d.impl.GlDriver.TFILTERS[t.mipMap[1]][t.filter[1]];
				this.gl.texParameteri(3553,10240,flags[0]);
				this.gl.texParameteri(3553,10241,flags[1]);
				var w = h3d.impl.GlDriver.TWRAP[t.wrap[1]];
				this.gl.texParameteri(3553,10242,w);
				this.gl.texParameteri(3553,10243,w);
			}
			break;
		}
	}
	,selectMaterial: function(pass) {
		this.selectMaterialBits(pass.bits);
	}
	,selectMaterialBits: function(bits) {
		var diff = bits ^ this.curMatBits;
		if(diff == 0) return;
		if((diff & 3) != 0) {
			var cull = bits & 3;
			if(cull == 0) this.gl.disable(2884); else {
				if((this.curMatBits & 3) == 0) this.gl.enable(2884);
				this.gl.cullFace(h3d.impl.GlDriver.FACES[cull]);
			}
		}
		if((diff & 4194240) != 0) {
			var csrc = bits >> 6 & 15;
			var cdst = bits >> 10 & 15;
			var asrc = bits >> 14 & 15;
			var adst = bits >> 18 & 15;
			if(csrc == asrc && cdst == adst) {
				if(csrc == 0 && cdst == 1) this.gl.disable(3042); else {
					if(this.curMatBits < 0 || (this.curMatBits >> 6 & 15) == 0 && (this.curMatBits >> 10 & 15) == 1) this.gl.enable(3042);
					this.gl.blendFunc(h3d.impl.GlDriver.BLEND[csrc],h3d.impl.GlDriver.BLEND[cdst]);
				}
			} else {
				if(this.curMatBits < 0 || (this.curMatBits >> 6 & 15) == 0 && (this.curMatBits >> 10 & 15) == 1) this.gl.enable(3042);
				this.gl.blendFuncSeparate(h3d.impl.GlDriver.BLEND[csrc],h3d.impl.GlDriver.BLEND[cdst],h3d.impl.GlDriver.BLEND[asrc],h3d.impl.GlDriver.BLEND[adst]);
			}
		}
		if((diff & 62914560) != 0) {
			var cop = bits >> 22 & 3;
			var aop = bits >> 24 & 3;
			if(cop == aop) this.gl.blendEquation(h3d.impl.GlDriver.OP[cop]); else this.gl.blendEquationSeparate(h3d.impl.GlDriver.OP[cop],h3d.impl.GlDriver.OP[aop]);
		}
		if((diff & 4) != 0) this.gl.depthMask((bits >> 2 & 1) != 0);
		if((diff & 56) != 0) {
			var cmp = bits >> 3 & 7;
			if(cmp == 0) this.gl.disable(2929); else {
				if(this.curMatBits < 0 || (this.curMatBits >> 3 & 7) == 0) this.gl.enable(2929);
				this.gl.depthFunc(h3d.impl.GlDriver.COMPARE[cmp]);
			}
		}
		if((diff & 1006632960) != 0) {
			var m = bits >> 26 & 15;
			this.gl.colorMask((m & 1) != 0,(m & 2) != 0,(m & 4) != 0,(m & 8) != 0);
		}
		this.curMatBits = bits;
	}
	,clear: function(r,g,b,a) {
		this.gl.clearColor(r,g,b,a);
		this.gl.clearDepth(1);
		this.gl.clear(16640);
	}
	,resize: function(width,height) {
		this.canvas.width = width;
		this.canvas.height = height;
		this.gl.viewport(0,0,width,height);
	}
	,allocTexture: function(t) {
		var tt = this.gl.createTexture();
		this.gl.bindTexture(3553,tt);
		this.gl.texImage2D(3553,0,6408,t.width,t.height,0,6408,5121,null);
		this.gl.bindTexture(3553,null);
		return tt;
	}
	,allocVertex: function(count,stride) {
		var b = this.gl.createBuffer();
		this.gl.bindBuffer(34962,b);
		if(count * stride == 0) throw "assert";
		this.gl.bufferData(34962,count * stride * 4,35044);
		this.gl.bindBuffer(34962,null);
		return { b : b, stride : stride};
	}
	,allocIndexes: function(count) {
		var b = this.gl.createBuffer();
		this.gl.bindBuffer(34963,b);
		this.gl.bufferData(34963,count * 2,35044);
		this.gl.bindBuffer(34963,null);
		return b;
	}
	,disposeTexture: function(t) {
		this.gl.deleteTexture(t);
	}
	,disposeIndexes: function(i) {
		this.gl.deleteBuffer(i);
	}
	,disposeVertex: function(v) {
		this.gl.deleteBuffer(v.b);
	}
	,uploadTextureBitmap: function(t,bmp,mipLevel,side) {
		var img = bmp;
		this.gl.bindTexture(3553,t.t);
		this.gl.texImage2D(3553,mipLevel,6408,6408,5121,img.getImageData(0,0,bmp.canvas.width,bmp.canvas.height));
		this.gl.bindTexture(3553,null);
	}
	,uploadTexturePixels: function(t,pixels,mipLevel,side) {
		this.gl.bindTexture(3553,t.t);
		pixels.convert(hxd.PixelFormat.RGBA);
		var pixels1 = new Uint8Array(pixels.bytes.b);
		this.gl.texImage2D(3553,mipLevel,6408,t.width,t.height,0,6408,5121,pixels1);
		this.gl.bindTexture(3553,null);
	}
	,uploadVertexBuffer: function(v,startVertex,vertexCount,buf,bufPos) {
		var stride = v.stride;
		var buf1 = new Float32Array(buf);
		var sub = new Float32Array(buf1.buffer,bufPos,vertexCount * stride);
		this.gl.bindBuffer(34962,v.b);
		this.gl.bufferSubData(34962,startVertex * stride * 4,sub);
		this.gl.bindBuffer(34962,null);
	}
	,uploadIndexesBuffer: function(i,startIndice,indiceCount,buf,bufPos) {
		var buf1 = new Uint16Array(buf);
		var sub = new Uint16Array(buf1.buffer,bufPos,indiceCount);
		this.gl.bindBuffer(34963,i);
		this.gl.bufferSubData(34963,startIndice * 2,sub);
		this.gl.bindBuffer(34963,null);
	}
	,selectBuffer: function(v) {
		var stride = v.stride;
		if(stride < this.curProgram.stride) throw "Buffer stride (" + stride + ") and shader stride (" + this.curProgram.stride + ") mismatch";
		this.gl.bindBuffer(34962,v.b);
		var _g = 0;
		var _g1 = this.curProgram.attribs;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			this.gl.vertexAttribPointer(a.index,a.size,a.type,false,stride * 4,a.offset * 4);
		}
	}
	,draw: function(ibuf,startIndex,ntriangles) {
		this.gl.bindBuffer(34963,ibuf);
		this.gl.drawElements(4,ntriangles * 3,5123,startIndex * 2);
		this.gl.bindBuffer(34963,null);
	}
	,present: function() {
		this.gl.finish();
	}
	,isDisposed: function() {
		return false;
	}
	,init: function(onCreate,forceSoftware) {
		if(forceSoftware == null) forceSoftware = false;
		var ready = false;
		window.addEventListener("load",function(_) {
			if(!ready) {
				ready = true;
				onCreate(false);
			}
		});
	}
	,__class__: h3d.impl.GlDriver
});
h3d.impl.Indexes = function(mem,ibuf,count) {
	this.mem = mem;
	this.ibuf = ibuf;
	this.count = count;
};
$hxClasses["h3d.impl.Indexes"] = h3d.impl.Indexes;
h3d.impl.Indexes.__name__ = true;
h3d.impl.Indexes.prototype = {
	isDisposed: function() {
		return this.ibuf == null;
	}
	,upload: function(indexes,pos,count,bufferPos) {
		if(bufferPos == null) bufferPos = 0;
		this.mem.driver.uploadIndexesBuffer(this.ibuf,pos,count,indexes,bufferPos);
	}
	,dispose: function() {
		if(this.ibuf != null) this.mem.deleteIndexes(this);
	}
	,__class__: h3d.impl.Indexes
};
h3d.impl.FreeCell = function(pos,count,next) {
	this.pos = pos;
	this.count = count;
	this.next = next;
};
$hxClasses["h3d.impl.FreeCell"] = h3d.impl.FreeCell;
h3d.impl.FreeCell.__name__ = true;
h3d.impl.FreeCell.prototype = {
	__class__: h3d.impl.FreeCell
};
h3d.impl.BigBuffer = function(mem,v,stride,size) {
	this.mem = mem;
	this.size = size;
	this.stride = stride;
	this.vbuf = v;
	this.free = new h3d.impl.FreeCell(0,size,null);
};
$hxClasses["h3d.impl.BigBuffer"] = h3d.impl.BigBuffer;
h3d.impl.BigBuffer.__name__ = true;
h3d.impl.BigBuffer.prototype = {
	freeCursor: function(pos,nvect) {
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
	,dispose: function() {
		this.mem.driver.disposeVertex(this.vbuf);
		this.vbuf = null;
	}
	,__class__: h3d.impl.BigBuffer
};
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
h3d.impl.MemoryManager.__name__ = true;
h3d.impl.MemoryManager.prototype = {
	initIndexes: function() {
		var indices;
		var this1;
		this1 = new Array(0);
		indices = this1;
		var _g1 = 0;
		var _g = this.allocSize;
		while(_g1 < _g) {
			var i = _g1++;
			indices.push(i);
		}
		this.indexes = this.allocIndex(indices);
		var indices1;
		var this2;
		this2 = new Array(0);
		indices1 = this2;
		var p = 0;
		var _g11 = 0;
		var _g2 = this.allocSize >> 2;
		while(_g11 < _g2) {
			var i1 = _g11++;
			var k = i1 << 2;
			indices1.push(k);
			indices1.push(k + 1);
			indices1.push(k + 2);
			indices1.push(k + 2);
			indices1.push(k + 1);
			indices1.push(k + 3);
		}
		this.quadIndexes = this.allocIndex(indices1);
	}
	,garbage: function() {
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
	,newTexture: function(fmt,w,h,cubic,target,mm,allocPos) {
		var t = new h3d.mat.Texture(this,fmt,w,h,cubic,target,mm);
		this.initTexture(t);
		return t;
	}
	,initTexture: function(t) {
		t.t = this.driver.allocTexture(t);
		this.tdict.set(t,t.t);
		this.textures.push(t.t);
	}
	,deleteIndexes: function(i) {
		this.idict.remove(i);
		this.driver.disposeIndexes(i.ibuf);
		i.ibuf = null;
		this.usedMemory -= i.count * 2;
	}
	,deleteTexture: function(t) {
		HxOverrides.remove(this.textures,t.t);
		this.tdict.remove(t);
		this.driver.disposeTexture(t.t);
		t.t = null;
	}
	,resizeTexture: function(t,width,height) {
		t.dispose();
		t.width = width;
		t.height = height;
		this.initTexture(t);
	}
	,allocTexture: function(width,height,mipMap,allocPos) {
		if(mipMap == null) mipMap = false;
		this.freeTextures();
		var levels = 0;
		if(mipMap) while(width > 1 << levels && height > 1 << levels) levels++;
		return this.newTexture(h3d.mat.TextureFormat.Rgba,width,height,false,false,levels,allocPos);
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
	,allocVector: function(v,stride,align,allocPos) {
		var nvert = v.length / stride | 0;
		var b = this.alloc(nvert,stride,align,allocPos);
		b.uploadVector(v,0,nvert);
		return b;
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
			var t1 = $it0.next();
			tall.remove(t1);
		}
		var count = 0;
		var $it1 = tall.keys();
		while( $it1.hasNext() ) {
			var t2 = $it1.next();
			this.driver.disposeTexture(t2);
			HxOverrides.remove(this.textures,t2);
			count++;
		}
		return count;
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
							var d1 = (align - free.pos % align) % align;
							if(d1 == 0) break;
							if(free.count >= size + d1) {
								free.next = new h3d.impl.FreeCell(free.pos + d1,free.count - d1,free.next);
								free.count = d1;
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
			var size1;
			if(align == 0) {
				size1 = nvect;
				if(size1 > 65535) throw "Too many vertex to allocate " + size1;
			} else size1 = this.allocSize;
			var mem = size1 * stride * 4;
			var v = null;
			if(this.usedMemory + mem > 262144000 || this.bufferCount >= 4096 || (v = this.driver.allocVertex(size1,stride)) == null) {
				var size2 = this.usedMemory - this.freeMemory();
				this.garbage();
				this.cleanBuffers();
				if(this.usedMemory - this.freeMemory() == size2) {
					if(this.bufferCount >= 4096) throw "Too many buffer";
					throw "Memory full";
				}
				return this.alloc(nvect,stride,align,allocPos);
			}
			this.usedMemory += mem;
			this.bufferCount++;
			b = new h3d.impl.BigBuffer(this,v,stride,size1);
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
	,onContextLost: function() {
		this.indexes.dispose();
		this.quadIndexes.dispose();
		var tkeys = Lambda.array({ iterator : ($_=this.tdict,$bind($_,$_.keys))});
		var _g = 0;
		while(_g < tkeys.length) {
			var t = tkeys[_g];
			++_g;
			if(!(this.tdict.h.__keys__[t.__id__] != null)) continue;
			if(t.onContextLost == null) t.dispose(); else {
				HxOverrides.remove(this.textures,t.t);
				this.initTexture(t);
				t.onContextLost();
			}
		}
		var _g1 = 0;
		var _g11 = this.buffers;
		while(_g1 < _g11.length) {
			var b = _g11[_g1];
			++_g1;
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
	,__class__: h3d.impl.MemoryManager
};
h3d.mat = {};
h3d.mat.Face = $hxClasses["h3d.mat.Face"] = { __ename__ : true, __constructs__ : ["None","Back","Front","Both"] };
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
h3d.mat.Blend = $hxClasses["h3d.mat.Blend"] = { __ename__ : true, __constructs__ : ["One","Zero","SrcAlpha","SrcColor","DstAlpha","DstColor","OneMinusSrcAlpha","OneMinusSrcColor","OneMinusDstAlpha","OneMinusDstColor","ConstantColor","ConstantAlpha","OneMinusConstantColor","OneMinusConstantAlpha","SrcAlphaSaturate"] };
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
h3d.mat.Compare = $hxClasses["h3d.mat.Compare"] = { __ename__ : true, __constructs__ : ["Always","Never","Equal","NotEqual","Greater","GreaterEqual","Less","LessEqual"] };
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
h3d.mat.MipMap = $hxClasses["h3d.mat.MipMap"] = { __ename__ : true, __constructs__ : ["None","Nearest","Linear"] };
h3d.mat.MipMap.None = ["None",0];
h3d.mat.MipMap.None.toString = $estr;
h3d.mat.MipMap.None.__enum__ = h3d.mat.MipMap;
h3d.mat.MipMap.Nearest = ["Nearest",1];
h3d.mat.MipMap.Nearest.toString = $estr;
h3d.mat.MipMap.Nearest.__enum__ = h3d.mat.MipMap;
h3d.mat.MipMap.Linear = ["Linear",2];
h3d.mat.MipMap.Linear.toString = $estr;
h3d.mat.MipMap.Linear.__enum__ = h3d.mat.MipMap;
h3d.mat.Filter = $hxClasses["h3d.mat.Filter"] = { __ename__ : true, __constructs__ : ["Nearest","Linear"] };
h3d.mat.Filter.Nearest = ["Nearest",0];
h3d.mat.Filter.Nearest.toString = $estr;
h3d.mat.Filter.Nearest.__enum__ = h3d.mat.Filter;
h3d.mat.Filter.Linear = ["Linear",1];
h3d.mat.Filter.Linear.toString = $estr;
h3d.mat.Filter.Linear.__enum__ = h3d.mat.Filter;
h3d.mat.Wrap = $hxClasses["h3d.mat.Wrap"] = { __ename__ : true, __constructs__ : ["Clamp","Repeat"] };
h3d.mat.Wrap.Clamp = ["Clamp",0];
h3d.mat.Wrap.Clamp.toString = $estr;
h3d.mat.Wrap.Clamp.__enum__ = h3d.mat.Wrap;
h3d.mat.Wrap.Repeat = ["Repeat",1];
h3d.mat.Wrap.Repeat.toString = $estr;
h3d.mat.Wrap.Repeat.__enum__ = h3d.mat.Wrap;
h3d.mat.TextureFormat = $hxClasses["h3d.mat.TextureFormat"] = { __ename__ : true, __constructs__ : ["Rgba"] };
h3d.mat.TextureFormat.Rgba = ["Rgba",0];
h3d.mat.TextureFormat.Rgba.toString = $estr;
h3d.mat.TextureFormat.Rgba.__enum__ = h3d.mat.TextureFormat;
h3d.mat.Operation = $hxClasses["h3d.mat.Operation"] = { __ename__ : true, __constructs__ : ["Add","Sub","ReverseSub"] };
h3d.mat.Operation.Add = ["Add",0];
h3d.mat.Operation.Add.toString = $estr;
h3d.mat.Operation.Add.__enum__ = h3d.mat.Operation;
h3d.mat.Operation.Sub = ["Sub",1];
h3d.mat.Operation.Sub.toString = $estr;
h3d.mat.Operation.Sub.__enum__ = h3d.mat.Operation;
h3d.mat.Operation.ReverseSub = ["ReverseSub",2];
h3d.mat.Operation.ReverseSub.toString = $estr;
h3d.mat.Operation.ReverseSub.__enum__ = h3d.mat.Operation;
h3d.mat.Pass = function(name,shaders,parent) {
	this.bits = 0;
	this.parentPass = parent;
	this.shaders = shaders;
	this.setPassName(name);
	this.set_culling(h3d.mat.Face.Back);
	this.blend(h3d.mat.Blend.One,h3d.mat.Blend.Zero);
	this.depth(true,h3d.mat.Compare.Less);
	this.set_blendOp(this.set_blendAlphaOp(h3d.mat.Operation.Add));
	this.set_colorMask(15);
};
$hxClasses["h3d.mat.Pass"] = h3d.mat.Pass;
h3d.mat.Pass.__name__ = true;
h3d.mat.Pass.prototype = {
	setPassName: function(name) {
		this.name = name;
		this.passId = hxsl.Globals.allocID(name);
	}
	,blend: function(src,dst) {
		this.set_blendSrc(src);
		this.set_blendAlphaSrc(src);
		this.set_blendDst(dst);
		this.set_blendAlphaDst(dst);
	}
	,depth: function(write,test) {
		this.set_depthWrite(write);
		this.set_depthTest(test);
	}
	,set_culling: function(v) {
		this.bits = this.bits & -4 | v[1];
		return this.culling = v;
	}
	,set_depthWrite: function(v) {
		this.bits = this.bits & -5 | (v?1:0) << 2;
		return this.depthWrite = v;
	}
	,set_depthTest: function(v) {
		this.bits = this.bits & -57 | v[1] << 3;
		return this.depthTest = v;
	}
	,set_blendSrc: function(v) {
		this.bits = this.bits & -961 | v[1] << 6;
		return this.blendSrc = v;
	}
	,set_blendDst: function(v) {
		this.bits = this.bits & -15361 | v[1] << 10;
		return this.blendDst = v;
	}
	,set_blendAlphaSrc: function(v) {
		this.bits = this.bits & -245761 | v[1] << 14;
		return this.blendAlphaSrc = v;
	}
	,set_blendAlphaDst: function(v) {
		this.bits = this.bits & -3932161 | v[1] << 18;
		return this.blendAlphaDst = v;
	}
	,set_blendOp: function(v) {
		this.bits = this.bits & -12582913 | v[1] << 22;
		return this.blendOp = v;
	}
	,set_blendAlphaOp: function(v) {
		this.bits = this.bits & -50331649 | v[1] << 24;
		return this.blendAlphaOp = v;
	}
	,set_colorMask: function(v) {
		this.bits = this.bits & -1006632961 | (v & 15) << 26;
		return this.colorMask = v;
	}
	,__class__: h3d.mat.Pass
};
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = true;
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
	,__class__: haxe.ds.IntMap
};
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
h3d.mat.Texture.__name__ = true;
h3d.mat.Texture.fromColor = function(color,allocPos) {
	var t = h3d.mat.Texture.COLOR_CACHE.get(color);
	if(t != null && !t.isDisposed()) return t;
	var mem = h3d.Engine.getCurrent().mem;
	var t1 = mem.allocTexture(1,1,false,allocPos);
	if(h3d.mat.Texture.tmpPixels == null) h3d.mat.Texture.tmpPixels = new hxd.Pixels(1,1,haxe.io.Bytes.alloc(4),hxd.PixelFormat.BGRA);
	h3d.mat.Texture.tmpPixels.format = hxd.PixelFormat.BGRA;
	h3d.mat.Texture.tmpPixels.bytes.b[0] = color & 255 & 255;
	h3d.mat.Texture.tmpPixels.bytes.b[1] = color >> 8 & 255 & 255;
	h3d.mat.Texture.tmpPixels.bytes.b[2] = color >> 16 & 255 & 255;
	h3d.mat.Texture.tmpPixels.bytes.b[3] = color >>> 24 & 255;
	t1.uploadPixels(h3d.mat.Texture.tmpPixels);
	h3d.mat.Texture.COLOR_CACHE.set(color,t1);
	return t1;
};
h3d.mat.Texture.prototype = {
	setName: function(n) {
		this.name = n;
	}
	,set_mipMap: function(m) {
		this.bits |= 524288;
		this.bits = this.bits & -4 | m[1];
		return this.mipMap = m;
	}
	,set_filter: function(f) {
		this.bits |= 524288;
		this.bits = this.bits & -25 | f[1] << 3;
		return this.filter = f;
	}
	,set_wrap: function(w) {
		this.bits |= 524288;
		this.bits = this.bits & -193 | w[1] << 6;
		return this.wrap = w;
	}
	,isDisposed: function() {
		return this.t == null;
	}
	,resize: function(width,height) {
		this.mem.resizeTexture(this,width,height);
	}
	,uploadBitmap: function(bmp,mipLevel,side) {
		if(side == null) side = 0;
		if(mipLevel == null) mipLevel = 0;
		this.mem.driver.uploadTextureBitmap(this,bmp,mipLevel,side);
	}
	,uploadPixels: function(pixels,mipLevel,side) {
		if(side == null) side = 0;
		if(mipLevel == null) mipLevel = 0;
		this.mem.driver.uploadTexturePixels(this,pixels,mipLevel,side);
	}
	,dispose: function() {
		if(this.t != null) this.mem.deleteTexture(this);
	}
	,__class__: h3d.mat.Texture
};
var hxsl = {};
hxsl.Shader = function() {
	var cl = Type.getClass(this);
	this.shader = cl.SHADER;
	this.constModified = true;
	if(this.shader == null) {
		this.shader = new hxsl.SharedShader(cl.SRC);
		cl.SHADER = this.shader;
	}
};
$hxClasses["hxsl.Shader"] = hxsl.Shader;
hxsl.Shader.__name__ = true;
hxsl.Shader.prototype = {
	getParamValue: function(index) {
		throw "assert";
		return null;
	}
	,updateConstants: function(globals) {
		var _g = 0;
		var _g1 = this.shader.consts;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c.globalId > 0) {
				var v = globals.map.get(c.globalId);
				var _g2 = c.v.type;
				switch(_g2[1]) {
				case 1:
					var v1 = v;
					if(v1 >>> c.bits != 0) throw "Constant " + c.v.name + " is outside range (" + v1 + " > " + ((1 << c.bits) - 1) + ")";
					this.constBits |= v1 << c.pos;
					break;
				case 2:
					var v2 = v;
					if(v2) this.constBits |= 1 << c.pos;
					break;
				default:
					throw "assert";
				}
			}
		}
		this.instance = this.shader.getInstance(this.constBits);
	}
	,__class__: hxsl.Shader
};
h3d.shader = {};
h3d.shader.Base2d = function() {
	this.color__ = new h3d.Vector();
	this.absoluteMatrixB__ = new h3d.Vector();
	this.absoluteMatrixA__ = new h3d.Vector();
	this.zValue__ = 0;
	hxsl.Shader.call(this);
};
$hxClasses["h3d.shader.Base2d"] = h3d.shader.Base2d;
h3d.shader.Base2d.__name__ = true;
h3d.shader.Base2d.__super__ = hxsl.Shader;
h3d.shader.Base2d.prototype = $extend(hxsl.Shader.prototype,{
	set_isRelative: function(_v) {
		this.constModified = true;
		return this.isRelative__ = _v;
	}
	,updateConstants: function(globals) {
		this.constBits = 0;
		if(this.isRelative__) this.constBits |= 1;
		hxsl.Shader.prototype.updateConstants.call(this,globals);
	}
	,getParamValue: function(index) {
		switch(index) {
		case 0:
			return this.zValue__;
		case 1:
			return this.absoluteMatrixA__;
		case 2:
			return this.texture__;
		case 3:
			return this.isRelative__;
		case 4:
			return this.absoluteMatrixB__;
		case 5:
			return this.color__;
		default:
		}
		return null;
	}
	,__class__: h3d.shader.Base2d
});
h3d.shader.BaseMesh = function() {
	this.color__ = new h3d.Vector();
};
$hxClasses["h3d.shader.BaseMesh"] = h3d.shader.BaseMesh;
h3d.shader.BaseMesh.__name__ = true;
h3d.shader.BaseMesh.__super__ = hxsl.Shader;
h3d.shader.BaseMesh.prototype = $extend(hxsl.Shader.prototype,{
	updateConstants: function(globals) {
		this.constBits = 0;
		hxsl.Shader.prototype.updateConstants.call(this,globals);
	}
	,getParamValue: function(index) {
		switch(index) {
		case 0:
			return this.color__;
		default:
		}
		return null;
	}
	,__class__: h3d.shader.BaseMesh
});
h3d.shader.ShaderBuffers = function(s) {
	var this1;
	this1 = new Array(s.globalsSize << 2);
	this.globals = this1;
	var this2;
	this2 = new Array(s.paramsSize << 2);
	this.params = this2;
	var this3;
	this3 = new Array(s.textures.length);
	this.tex = this3;
};
$hxClasses["h3d.shader.ShaderBuffers"] = h3d.shader.ShaderBuffers;
h3d.shader.ShaderBuffers.__name__ = true;
h3d.shader.ShaderBuffers.prototype = {
	__class__: h3d.shader.ShaderBuffers
};
h3d.shader.Buffers = function(s) {
	this.vertex = new h3d.shader.ShaderBuffers(s.vertex);
	this.fragment = new h3d.shader.ShaderBuffers(s.fragment);
};
$hxClasses["h3d.shader.Buffers"] = h3d.shader.Buffers;
h3d.shader.Buffers.__name__ = true;
h3d.shader.Buffers.prototype = {
	__class__: h3d.shader.Buffers
};
h3d.shader.ColorKey = function(v) {
	if(v == null) v = 0;
	this.colorKey__ = new h3d.Vector();
	hxsl.Shader.call(this);
	this.colorKey__.setColor(v,null);
};
$hxClasses["h3d.shader.ColorKey"] = h3d.shader.ColorKey;
h3d.shader.ColorKey.__name__ = true;
h3d.shader.ColorKey.__super__ = hxsl.Shader;
h3d.shader.ColorKey.prototype = $extend(hxsl.Shader.prototype,{
	updateConstants: function(globals) {
		this.constBits = 0;
		hxsl.Shader.prototype.updateConstants.call(this,globals);
	}
	,getParamValue: function(index) {
		switch(index) {
		case 0:
			return this.colorKey__;
		default:
		}
		return null;
	}
	,__class__: h3d.shader.ColorKey
});
h3d.shader.Manager = function(output) {
	this.shaderCache = hxsl.Cache.get();
	this.globals = new hxsl.Globals();
	this.output = this.shaderCache.allocOutputVars(output);
};
$hxClasses["h3d.shader.Manager"] = h3d.shader.Manager;
h3d.shader.Manager.__name__ = true;
h3d.shader.Manager.prototype = {
	fillRec: function(v,type,out,pos) {
		switch(type[1]) {
		case 3:
			out[pos] = v;
			return 1;
		case 5:
			var n = type[2];
			var v1 = v;
			out[pos++] = v1.x;
			out[pos++] = v1.y;
			switch(n) {
			case 3:
				out[pos++] = v1.z;
				break;
			case 4:
				out[pos++] = v1.z;
				out[pos++] = v1.w;
				break;
			}
			return n;
		case 7:
			var m = v;
			out[pos++] = m._11;
			out[pos++] = m._21;
			out[pos++] = m._31;
			out[pos++] = m._41;
			out[pos++] = m._12;
			out[pos++] = m._22;
			out[pos++] = m._32;
			out[pos++] = m._42;
			out[pos++] = m._13;
			out[pos++] = m._23;
			out[pos++] = m._33;
			out[pos++] = m._43;
			out[pos++] = m._14;
			out[pos++] = m._24;
			out[pos++] = m._34;
			out[pos++] = m._44;
			return 16;
		case 13:
			switch(type[3][1]) {
			case 0:
				var t = type[2];
				var len = type[3][2];
				var v2 = v;
				var stride = 0;
				var _g = 0;
				while(_g < len) {
					var i = _g++;
					stride = this.fillRec(v2[i],t,out,pos);
					stride += 4 - (stride & 3) & 3;
					pos += stride;
				}
				return len * stride;
			default:
				throw "assert " + Std.string(type);
			}
			break;
		case 11:
			var vl = type[2];
			var tot = 0;
			var _g1 = 0;
			while(_g1 < vl.length) {
				var vv = vl[_g1];
				++_g1;
				tot += this.fillRec(Reflect.field(v,vv.name),vv.type,out,pos + tot);
			}
			return tot;
		default:
			throw "assert " + Std.string(type);
		}
		return 0;
	}
	,fillGlobals: function(buf,s) {
		var _g2 = this;
		var buf1 = buf.vertex;
		var _g = 0;
		var _g1 = s.vertex.globals;
		while(_g < _g1.length) {
			var g = _g1[_g];
			++_g;
			_g2.fillRec(_g2.globals.map.get(g.gid),g.type,buf1.globals,g.pos);
		}
		var buf2 = buf.fragment;
		var _g3 = 0;
		var _g11 = s.fragment.globals;
		while(_g3 < _g11.length) {
			var g1 = _g11[_g3];
			++_g3;
			_g2.fillRec(_g2.globals.map.get(g1.gid),g1.type,buf2.globals,g1.pos);
		}
	}
	,fillParams: function(buf,s,shaders) {
		var _g2 = this;
		var buf1 = buf.vertex;
		var s1 = s.vertex;
		var _g = 0;
		var _g1 = s1.params;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			var v;
			if(p.perObjectGlobal != null) v = _g2.globals.map.get(p.perObjectGlobal.gid); else v = shaders[p.instance].getParamValue(p.index);
			_g2.fillRec(v,p.type,buf1.params,p.pos);
		}
		var tid = 0;
		var _g3 = 0;
		var _g11 = s1.textures;
		while(_g3 < _g11.length) {
			var p1 = _g11[_g3];
			++_g3;
			var t;
			if(p1.perObjectGlobal != null) t = _g2.globals.map.get(p1.perObjectGlobal.gid); else t = shaders[p1.instance].getParamValue(p1.index);
			if(t == null) t = h3d.mat.Texture.fromColor(-65281);
			buf1.tex[tid++] = t;
		}
		var buf2 = buf.fragment;
		var s2 = s.fragment;
		var _g4 = 0;
		var _g12 = s2.params;
		while(_g4 < _g12.length) {
			var p2 = _g12[_g4];
			++_g4;
			var v1;
			if(p2.perObjectGlobal != null) v1 = _g2.globals.map.get(p2.perObjectGlobal.gid); else v1 = shaders[p2.instance].getParamValue(p2.index);
			_g2.fillRec(v1,p2.type,buf2.params,p2.pos);
		}
		var tid1 = 0;
		var _g5 = 0;
		var _g13 = s2.textures;
		while(_g5 < _g13.length) {
			var p3 = _g13[_g5];
			++_g5;
			var t1;
			if(p3.perObjectGlobal != null) t1 = _g2.globals.map.get(p3.perObjectGlobal.gid); else t1 = shaders[p3.instance].getParamValue(p3.index);
			if(t1 == null) t1 = h3d.mat.Texture.fromColor(-65281);
			buf2.tex[tid1++] = t1;
		}
	}
	,compileShaders: function(shaders) {
		var instances;
		var _g = [];
		var _g1 = 0;
		while(_g1 < shaders.length) {
			var s = shaders[_g1];
			++_g1;
			_g.push((function($this) {
				var $r;
				s.updateConstants($this.globals);
				$r = s.instance;
				return $r;
			}(this)));
		}
		instances = _g;
		return this.shaderCache.link(instances,this.output);
	}
	,__class__: h3d.shader.Manager
};
h3d.shader.Texture = function() {
	this.killAlphaThreshold__ = 0;
};
$hxClasses["h3d.shader.Texture"] = h3d.shader.Texture;
h3d.shader.Texture.__name__ = true;
h3d.shader.Texture.__super__ = hxsl.Shader;
h3d.shader.Texture.prototype = $extend(hxsl.Shader.prototype,{
	updateConstants: function(globals) {
		this.constBits = 0;
		if(this.additive__) this.constBits |= 1;
		if(this.killAlpha__) this.constBits |= 2;
		hxsl.Shader.prototype.updateConstants.call(this,globals);
	}
	,getParamValue: function(index) {
		switch(index) {
		case 0:
			return this.additive__;
		case 1:
			return this.texture__;
		case 2:
			return this.killAlphaThreshold__;
		case 3:
			return this.killAlpha__;
		default:
		}
		return null;
	}
	,__class__: h3d.shader.Texture
});
h3d.shader.UVScroll = function() {
	this.uvDelta__ = new h3d.Vector();
};
$hxClasses["h3d.shader.UVScroll"] = h3d.shader.UVScroll;
h3d.shader.UVScroll.__name__ = true;
h3d.shader.UVScroll.__super__ = hxsl.Shader;
h3d.shader.UVScroll.prototype = $extend(hxsl.Shader.prototype,{
	updateConstants: function(globals) {
		this.constBits = 0;
		hxsl.Shader.prototype.updateConstants.call(this,globals);
	}
	,getParamValue: function(index) {
		switch(index) {
		case 0:
			return this.uvDelta__;
		default:
		}
		return null;
	}
	,__class__: h3d.shader.UVScroll
});
haxe.Resource = function() { };
$hxClasses["haxe.Resource"] = haxe.Resource;
haxe.Resource.__name__ = true;
haxe.Resource.getBytes = function(name) {
	var _g = 0;
	var _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return haxe.io.Bytes.ofString(x.str);
			return haxe.crypto.Base64.decode(x.data);
		}
	}
	return null;
};
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
haxe.Unserializer.__name__ = true;
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0;
	var _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
};
haxe.Unserializer.run = function(v) {
	return new haxe.Unserializer(v).unserialize();
};
haxe.Unserializer.prototype = {
	setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_1) {
			return null;
		}}; else this.resolver = r;
	}
	,get: function(p) {
		return this.buf.charCodeAt(p);
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
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!(typeof(k) == "string")) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.get(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserialize: function() {
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
			s = decodeURIComponent(s.split("+").join(" "));
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
				var c1 = this.buf.charCodeAt(this.pos);
				if(c1 == 104) {
					this.pos++;
					break;
				}
				if(c1 == 117) {
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
			var n1 = this.readDigits();
			if(n1 < 0 || n1 >= this.cache.length) throw "Invalid reference";
			return this.cache[n1];
		case 82:
			var n2 = this.readDigits();
			if(n2 < 0 || n2 >= this.scache.length) throw "Invalid string reference";
			return this.scache[n2];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o1 = Type.createEmptyInstance(cl);
			this.cache.push(o1);
			this.unserializeObject(o1);
			return o1;
		case 119:
			var name1 = this.unserialize();
			var edecl = this.resolver.resolveEnum(name1);
			if(edecl == null) throw "Enum not found " + name1;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name2 = this.unserialize();
			var edecl1 = this.resolver.resolveEnum(name2);
			if(edecl1 == null) throw "Enum not found " + name2;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl1)[index];
			if(tag == null) throw "Unknown enum index " + name2 + "@" + index;
			var e1 = this.unserializeEnum(edecl1,tag);
			this.cache.push(e1);
			return e1;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf1 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe.ds.StringMap();
			this.cache.push(h);
			var buf2 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s1 = this.unserialize();
				h.set(s1,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h1 = new haxe.ds.IntMap();
			this.cache.push(h1);
			var buf3 = this.buf;
			var c2 = this.get(this.pos++);
			while(c2 == 58) {
				var i = this.readDigits();
				h1.set(i,this.unserialize());
				c2 = this.get(this.pos++);
			}
			if(c2 != 104) throw "Invalid IntMap format";
			return h1;
		case 77:
			var h2 = new haxe.ds.ObjectMap();
			this.cache.push(h2);
			var buf4 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s2 = this.unserialize();
				h2.set(s2,this.unserialize());
			}
			this.pos++;
			return h2;
		case 118:
			var d;
			var s3 = HxOverrides.substr(this.buf,this.pos,19);
			d = HxOverrides.strDate(s3);
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len1 = this.readDigits();
			var buf5 = this.buf;
			if(this.get(this.pos++) != 58 || this.length - this.pos < len1) throw "Invalid bytes length";
			var codes = haxe.Unserializer.CODES;
			if(codes == null) {
				codes = haxe.Unserializer.initCodes();
				haxe.Unserializer.CODES = codes;
			}
			var i1 = this.pos;
			var rest = len1 & 3;
			var size;
			size = (len1 >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i1 + (len1 - rest);
			var bytes = haxe.io.Bytes.alloc(size);
			var bpos = 0;
			while(i1 < max) {
				var c11 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c21 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c11 << 2 | c21 >> 4);
				var c3 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c21 << 4 | c3 >> 2);
				var c4 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c3 << 6 | c4);
			}
			if(rest >= 2) {
				var c12 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c22 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c12 << 2 | c22 >> 4);
				if(rest == 3) {
					var c31 = codes[StringTools.fastCodeAt(buf5,i1++)];
					bytes.set(bpos++,c22 << 4 | c31 >> 2);
				}
			}
			this.pos += len1;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name3 = this.unserialize();
			var cl1 = this.resolver.resolveClass(name3);
			if(cl1 == null) throw "Class not found " + name3;
			var o2 = Type.createEmptyInstance(cl1);
			this.cache.push(o2);
			o2.hxUnserialize(this);
			if(this.get(this.pos++) != 103) throw "Invalid custom data";
			return o2;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,__class__: haxe.Unserializer
};
haxe.io = {};
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = true;
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
};
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
};
haxe.io.Bytes.ofData = function(b) {
	return new haxe.io.Bytes(b.length,b);
};
haxe.io.Bytes.prototype = {
	get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
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
			var i1 = _g++;
			b1[i1 + pos] = b2[i1 + srcpos];
		}
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
				var c21 = b[i++];
				var c3 = b[i++];
				s += fcc((c & 15) << 18 | (c21 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
			}
		}
		return s;
	}
	,toString: function() {
		return this.readString(0,this.length);
	}
	,__class__: haxe.io.Bytes
};
haxe.crypto = {};
haxe.crypto.Base64 = function() { };
$hxClasses["haxe.crypto.Base64"] = haxe.crypto.Base64;
haxe.crypto.Base64.__name__ = true;
haxe.crypto.Base64.decode = function(str,complement) {
	if(complement == null) complement = true;
	if(complement) while(HxOverrides.cca(str,str.length - 1) == 61) str = HxOverrides.substr(str,0,-1);
	return new haxe.crypto.BaseCode(haxe.crypto.Base64.BYTES).decodeBytes(haxe.io.Bytes.ofString(str));
};
haxe.crypto.BaseCode = function(base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) nbits++;
	if(nbits > 8 || len != 1 << nbits) throw "BaseCode : base length must be a power of two.";
	this.base = base;
	this.nbits = nbits;
};
$hxClasses["haxe.crypto.BaseCode"] = haxe.crypto.BaseCode;
haxe.crypto.BaseCode.__name__ = true;
haxe.crypto.BaseCode.prototype = {
	initTable: function() {
		var tbl = new Array();
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			tbl[i] = -1;
		}
		var _g1 = 0;
		var _g2 = this.base.length;
		while(_g1 < _g2) {
			var i1 = _g1++;
			tbl[this.base.b[i1]] = i1;
		}
		this.tbl = tbl;
	}
	,decodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		if(this.tbl == null) this.initTable();
		var tbl = this.tbl;
		var size = b.length * nbits >> 3;
		var out = haxe.io.Bytes.alloc(size);
		var buf = 0;
		var curbits = 0;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < 8) {
				curbits += nbits;
				buf <<= nbits;
				var i = tbl[b.get(pin++)];
				if(i == -1) throw "BaseCode : invalid encoded char";
				buf |= i;
			}
			curbits -= 8;
			out.set(pout++,buf >> curbits & 255);
		}
		return out;
	}
	,__class__: haxe.crypto.BaseCode
};
haxe.crypto.Crc32 = function() {
	this.crc = -1;
};
$hxClasses["haxe.crypto.Crc32"] = haxe.crypto.Crc32;
haxe.crypto.Crc32.__name__ = true;
haxe.crypto.Crc32.prototype = {
	byte: function(b) {
		var tmp = (this.crc ^ b) & 255;
		var _g = 0;
		while(_g < 8) {
			var j = _g++;
			if((tmp & 1) == 1) tmp = tmp >>> 1 ^ -306674912; else tmp >>>= 1;
		}
		this.crc = this.crc >>> 8 ^ tmp;
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
	,get: function() {
		return this.crc ^ -1;
	}
	,__class__: haxe.crypto.Crc32
};
haxe.ds.BalancedTree = function() {
};
$hxClasses["haxe.ds.BalancedTree"] = haxe.ds.BalancedTree;
haxe.ds.BalancedTree.__name__ = true;
haxe.ds.BalancedTree.prototype = {
	set: function(key,value) {
		this.root = this.setLoop(key,value,this.root);
	}
	,get: function(key) {
		var node = this.root;
		while(node != null) {
			var c = this.compare(key,node.key);
			if(c == 0) return node.value;
			if(c < 0) node = node.left; else node = node.right;
		}
		return null;
	}
	,setLoop: function(k,v,node) {
		if(node == null) return new haxe.ds.TreeNode(null,k,v,null);
		var c = this.compare(k,node.key);
		if(c == 0) return new haxe.ds.TreeNode(node.left,k,v,node.right,node == null?0:node._height); else if(c < 0) {
			var nl = this.setLoop(k,v,node.left);
			return this.balance(nl,node.key,node.value,node.right);
		} else {
			var nr = this.setLoop(k,v,node.right);
			return this.balance(node.left,node.key,node.value,nr);
		}
	}
	,balance: function(l,k,v,r) {
		var hl;
		if(l == null) hl = 0; else hl = l._height;
		var hr;
		if(r == null) hr = 0; else hr = r._height;
		if(hl > hr + 2) {
			if((function($this) {
				var $r;
				var _this = l.left;
				$r = _this == null?0:_this._height;
				return $r;
			}(this)) >= (function($this) {
				var $r;
				var _this1 = l.right;
				$r = _this1 == null?0:_this1._height;
				return $r;
			}(this))) return new haxe.ds.TreeNode(l.left,l.key,l.value,new haxe.ds.TreeNode(l.right,k,v,r)); else return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l.left,l.key,l.value,l.right.left),l.right.key,l.right.value,new haxe.ds.TreeNode(l.right.right,k,v,r));
		} else if(hr > hl + 2) {
			if((function($this) {
				var $r;
				var _this2 = r.right;
				$r = _this2 == null?0:_this2._height;
				return $r;
			}(this)) > (function($this) {
				var $r;
				var _this3 = r.left;
				$r = _this3 == null?0:_this3._height;
				return $r;
			}(this))) return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l,k,v,r.left),r.key,r.value,r.right); else return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l,k,v,r.left.left),r.left.key,r.left.value,new haxe.ds.TreeNode(r.left.right,r.key,r.value,r.right));
		} else return new haxe.ds.TreeNode(l,k,v,r,(hl > hr?hl:hr) + 1);
	}
	,compare: function(k1,k2) {
		return Reflect.compare(k1,k2);
	}
	,__class__: haxe.ds.BalancedTree
};
haxe.ds.TreeNode = function(l,k,v,r,h) {
	if(h == null) h = -1;
	this.left = l;
	this.key = k;
	this.value = v;
	this.right = r;
	if(h == -1) this._height = ((function($this) {
		var $r;
		var _this = $this.left;
		$r = _this == null?0:_this._height;
		return $r;
	}(this)) > (function($this) {
		var $r;
		var _this1 = $this.right;
		$r = _this1 == null?0:_this1._height;
		return $r;
	}(this))?(function($this) {
		var $r;
		var _this2 = $this.left;
		$r = _this2 == null?0:_this2._height;
		return $r;
	}(this)):(function($this) {
		var $r;
		var _this3 = $this.right;
		$r = _this3 == null?0:_this3._height;
		return $r;
	}(this))) + 1; else this._height = h;
};
$hxClasses["haxe.ds.TreeNode"] = haxe.ds.TreeNode;
haxe.ds.TreeNode.__name__ = true;
haxe.ds.TreeNode.prototype = {
	__class__: haxe.ds.TreeNode
};
haxe.ds.EnumValueMap = function() {
	haxe.ds.BalancedTree.call(this);
};
$hxClasses["haxe.ds.EnumValueMap"] = haxe.ds.EnumValueMap;
haxe.ds.EnumValueMap.__name__ = true;
haxe.ds.EnumValueMap.__interfaces__ = [IMap];
haxe.ds.EnumValueMap.__super__ = haxe.ds.BalancedTree;
haxe.ds.EnumValueMap.prototype = $extend(haxe.ds.BalancedTree.prototype,{
	compare: function(k1,k2) {
		var d = k1[1] - k2[1];
		if(d != 0) return d;
		var p1 = k1.slice(2);
		var p2 = k2.slice(2);
		if(p1.length == 0 && p2.length == 0) return 0;
		return this.compareArgs(p1,p2);
	}
	,compareArgs: function(a1,a2) {
		var ld = a1.length - a2.length;
		if(ld != 0) return ld;
		var _g1 = 0;
		var _g = a1.length;
		while(_g1 < _g) {
			var i = _g1++;
			var d = this.compareArg(a1[i],a2[i]);
			if(d != 0) return d;
		}
		return 0;
	}
	,compareArg: function(v1,v2) {
		if(Reflect.isEnumValue(v1) && Reflect.isEnumValue(v2)) return this.compare(v1,v2); else if((v1 instanceof Array) && v1.__enum__ == null && ((v2 instanceof Array) && v2.__enum__ == null)) return this.compareArgs(v1,v2); else return Reflect.compare(v1,v2);
	}
	,__class__: haxe.ds.EnumValueMap
});
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
haxe.ds.ObjectMap.__name__ = true;
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe.ds.ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
	,__class__: haxe.ds.ObjectMap
};
haxe.io.BytesBuffer = function() {
	this.b = new Array();
};
$hxClasses["haxe.io.BytesBuffer"] = haxe.io.BytesBuffer;
haxe.io.BytesBuffer.__name__ = true;
haxe.io.BytesBuffer.prototype = {
	add: function(src) {
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = 0;
		var _g = src.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
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
	,getBytes: function() {
		var bytes = new haxe.io.Bytes(this.b.length,this.b);
		this.b = null;
		return bytes;
	}
	,__class__: haxe.io.BytesBuffer
};
haxe.io.Input = function() { };
$hxClasses["haxe.io.Input"] = haxe.io.Input;
haxe.io.Input.__name__ = true;
haxe.io.Input.prototype = {
	readByte: function() {
		throw "Not implemented";
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
	,set_bigEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,readFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.readBytes(s,pos,len);
			pos += k;
			len -= k;
		}
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
	,readUInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		if(this.bigEndian) return ch2 | ch1 << 8; else return ch1 | ch2 << 8;
	}
	,readInt32: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var ch4 = this.readByte();
		if(this.bigEndian) return ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24; else return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
	}
	,readString: function(len) {
		var b = haxe.io.Bytes.alloc(len);
		this.readFullBytes(b,0,len);
		return b.toString();
	}
	,__class__: haxe.io.Input
};
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
haxe.io.BytesInput.__name__ = true;
haxe.io.BytesInput.__super__ = haxe.io.Input;
haxe.io.BytesInput.prototype = $extend(haxe.io.Input.prototype,{
	readByte: function() {
		if(this.len == 0) throw new haxe.io.Eof();
		this.len--;
		return this.b[this.pos++];
	}
	,readBytes: function(buf,pos,len) {
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
	,__class__: haxe.io.BytesInput
});
haxe.io.Eof = function() {
};
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = true;
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
};
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : true, __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; };
haxe.macro = {};
haxe.macro.Binop = $hxClasses["haxe.macro.Binop"] = { __ename__ : true, __constructs__ : ["OpAdd","OpMult","OpDiv","OpSub","OpAssign","OpEq","OpNotEq","OpGt","OpGte","OpLt","OpLte","OpAnd","OpOr","OpXor","OpBoolAnd","OpBoolOr","OpShl","OpShr","OpUShr","OpMod","OpAssignOp","OpInterval","OpArrow"] };
haxe.macro.Binop.OpAdd = ["OpAdd",0];
haxe.macro.Binop.OpAdd.toString = $estr;
haxe.macro.Binop.OpAdd.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpMult = ["OpMult",1];
haxe.macro.Binop.OpMult.toString = $estr;
haxe.macro.Binop.OpMult.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpDiv = ["OpDiv",2];
haxe.macro.Binop.OpDiv.toString = $estr;
haxe.macro.Binop.OpDiv.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpSub = ["OpSub",3];
haxe.macro.Binop.OpSub.toString = $estr;
haxe.macro.Binop.OpSub.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpAssign = ["OpAssign",4];
haxe.macro.Binop.OpAssign.toString = $estr;
haxe.macro.Binop.OpAssign.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpEq = ["OpEq",5];
haxe.macro.Binop.OpEq.toString = $estr;
haxe.macro.Binop.OpEq.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpNotEq = ["OpNotEq",6];
haxe.macro.Binop.OpNotEq.toString = $estr;
haxe.macro.Binop.OpNotEq.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpGt = ["OpGt",7];
haxe.macro.Binop.OpGt.toString = $estr;
haxe.macro.Binop.OpGt.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpGte = ["OpGte",8];
haxe.macro.Binop.OpGte.toString = $estr;
haxe.macro.Binop.OpGte.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpLt = ["OpLt",9];
haxe.macro.Binop.OpLt.toString = $estr;
haxe.macro.Binop.OpLt.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpLte = ["OpLte",10];
haxe.macro.Binop.OpLte.toString = $estr;
haxe.macro.Binop.OpLte.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpAnd = ["OpAnd",11];
haxe.macro.Binop.OpAnd.toString = $estr;
haxe.macro.Binop.OpAnd.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpOr = ["OpOr",12];
haxe.macro.Binop.OpOr.toString = $estr;
haxe.macro.Binop.OpOr.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpXor = ["OpXor",13];
haxe.macro.Binop.OpXor.toString = $estr;
haxe.macro.Binop.OpXor.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpBoolAnd = ["OpBoolAnd",14];
haxe.macro.Binop.OpBoolAnd.toString = $estr;
haxe.macro.Binop.OpBoolAnd.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpBoolOr = ["OpBoolOr",15];
haxe.macro.Binop.OpBoolOr.toString = $estr;
haxe.macro.Binop.OpBoolOr.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpShl = ["OpShl",16];
haxe.macro.Binop.OpShl.toString = $estr;
haxe.macro.Binop.OpShl.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpShr = ["OpShr",17];
haxe.macro.Binop.OpShr.toString = $estr;
haxe.macro.Binop.OpShr.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpUShr = ["OpUShr",18];
haxe.macro.Binop.OpUShr.toString = $estr;
haxe.macro.Binop.OpUShr.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpMod = ["OpMod",19];
haxe.macro.Binop.OpMod.toString = $estr;
haxe.macro.Binop.OpMod.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpAssignOp = function(op) { var $x = ["OpAssignOp",20,op]; $x.__enum__ = haxe.macro.Binop; $x.toString = $estr; return $x; };
haxe.macro.Binop.OpInterval = ["OpInterval",21];
haxe.macro.Binop.OpInterval.toString = $estr;
haxe.macro.Binop.OpInterval.__enum__ = haxe.macro.Binop;
haxe.macro.Binop.OpArrow = ["OpArrow",22];
haxe.macro.Binop.OpArrow.toString = $estr;
haxe.macro.Binop.OpArrow.__enum__ = haxe.macro.Binop;
haxe.macro.Unop = $hxClasses["haxe.macro.Unop"] = { __ename__ : true, __constructs__ : ["OpIncrement","OpDecrement","OpNot","OpNeg","OpNegBits"] };
haxe.macro.Unop.OpIncrement = ["OpIncrement",0];
haxe.macro.Unop.OpIncrement.toString = $estr;
haxe.macro.Unop.OpIncrement.__enum__ = haxe.macro.Unop;
haxe.macro.Unop.OpDecrement = ["OpDecrement",1];
haxe.macro.Unop.OpDecrement.toString = $estr;
haxe.macro.Unop.OpDecrement.__enum__ = haxe.macro.Unop;
haxe.macro.Unop.OpNot = ["OpNot",2];
haxe.macro.Unop.OpNot.toString = $estr;
haxe.macro.Unop.OpNot.__enum__ = haxe.macro.Unop;
haxe.macro.Unop.OpNeg = ["OpNeg",3];
haxe.macro.Unop.OpNeg.toString = $estr;
haxe.macro.Unop.OpNeg.__enum__ = haxe.macro.Unop;
haxe.macro.Unop.OpNegBits = ["OpNegBits",4];
haxe.macro.Unop.OpNegBits.toString = $estr;
haxe.macro.Unop.OpNegBits.__enum__ = haxe.macro.Unop;
haxe.xml = {};
haxe.xml._Fast = {};
haxe.xml._Fast.NodeAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.NodeAccess"] = haxe.xml._Fast.NodeAccess;
haxe.xml._Fast.NodeAccess.__name__ = true;
haxe.xml._Fast.NodeAccess.prototype = {
	__class__: haxe.xml._Fast.NodeAccess
};
haxe.xml._Fast.AttribAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.AttribAccess"] = haxe.xml._Fast.AttribAccess;
haxe.xml._Fast.AttribAccess.__name__ = true;
haxe.xml._Fast.AttribAccess.prototype = {
	resolve: function(name) {
		if(this.__x.nodeType == Xml.Document) throw "Cannot access document attribute " + name;
		var v = this.__x.get(name);
		if(v == null) throw this.__x.get_nodeName() + " is missing attribute " + name;
		return v;
	}
	,__class__: haxe.xml._Fast.AttribAccess
};
haxe.xml._Fast.HasAttribAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.HasAttribAccess"] = haxe.xml._Fast.HasAttribAccess;
haxe.xml._Fast.HasAttribAccess.__name__ = true;
haxe.xml._Fast.HasAttribAccess.prototype = {
	__class__: haxe.xml._Fast.HasAttribAccess
};
haxe.xml._Fast.HasNodeAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.HasNodeAccess"] = haxe.xml._Fast.HasNodeAccess;
haxe.xml._Fast.HasNodeAccess.__name__ = true;
haxe.xml._Fast.HasNodeAccess.prototype = {
	__class__: haxe.xml._Fast.HasNodeAccess
};
haxe.xml._Fast.NodeListAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.NodeListAccess"] = haxe.xml._Fast.NodeListAccess;
haxe.xml._Fast.NodeListAccess.__name__ = true;
haxe.xml._Fast.NodeListAccess.prototype = {
	__class__: haxe.xml._Fast.NodeListAccess
};
haxe.xml.Fast = function(x) {
	if(x.nodeType != Xml.Document && x.nodeType != Xml.Element) throw "Invalid nodeType " + Std.string(x.nodeType);
	this.x = x;
	this.node = new haxe.xml._Fast.NodeAccess(x);
	this.nodes = new haxe.xml._Fast.NodeListAccess(x);
	this.att = new haxe.xml._Fast.AttribAccess(x);
	this.has = new haxe.xml._Fast.HasAttribAccess(x);
	this.hasNode = new haxe.xml._Fast.HasNodeAccess(x);
};
$hxClasses["haxe.xml.Fast"] = haxe.xml.Fast;
haxe.xml.Fast.__name__ = true;
haxe.xml.Fast.prototype = {
	get_elements: function() {
		var it = this.x.elements();
		return { hasNext : $bind(it,it.hasNext), next : function() {
			var x = it.next();
			if(x == null) return null;
			return new haxe.xml.Fast(x);
		}};
	}
	,__class__: haxe.xml.Fast
};
haxe.xml.Parser = function() { };
$hxClasses["haxe.xml.Parser"] = haxe.xml.Parser;
haxe.xml.Parser.__name__ = true;
haxe.xml.Parser.parse = function(str) {
	var doc = Xml.createDocument();
	haxe.xml.Parser.doParse(str,0,doc);
	return doc;
};
haxe.xml.Parser.doParse = function(str,p,parent) {
	if(p == null) p = 0;
	var xml = null;
	var state = 1;
	var next = 1;
	var aname = null;
	var start = 0;
	var nsubs = 0;
	var nbrackets = 0;
	var c = str.charCodeAt(p);
	var buf = new StringBuf();
	while(!(c != c)) {
		switch(state) {
		case 0:
			switch(c) {
			case 10:case 13:case 9:case 32:
				break;
			default:
				state = next;
				continue;
			}
			break;
		case 1:
			switch(c) {
			case 60:
				state = 0;
				next = 2;
				break;
			default:
				start = p;
				state = 13;
				continue;
			}
			break;
		case 13:
			if(c == 60) {
				var child = Xml.createPCData(buf.b + HxOverrides.substr(str,start,p - start));
				buf = new StringBuf();
				parent.addChild(child);
				nsubs++;
				state = 0;
				next = 2;
			} else if(c == 38) {
				buf.addSub(str,start,p - start);
				state = 18;
				next = 13;
				start = p + 1;
			}
			break;
		case 17:
			if(c == 93 && str.charCodeAt(p + 1) == 93 && str.charCodeAt(p + 2) == 62) {
				var child1 = Xml.createCData(HxOverrides.substr(str,start,p - start));
				parent.addChild(child1);
				nsubs++;
				p += 2;
				state = 1;
			}
			break;
		case 2:
			switch(c) {
			case 33:
				if(str.charCodeAt(p + 1) == 91) {
					p += 2;
					if(HxOverrides.substr(str,p,6).toUpperCase() != "CDATA[") throw "Expected <![CDATA[";
					p += 5;
					state = 17;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) == 68 || str.charCodeAt(p + 1) == 100) {
					if(HxOverrides.substr(str,p + 2,6).toUpperCase() != "OCTYPE") throw "Expected <!DOCTYPE";
					p += 8;
					state = 16;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) != 45 || str.charCodeAt(p + 2) != 45) throw "Expected <!--"; else {
					p += 2;
					state = 15;
					start = p + 1;
				}
				break;
			case 63:
				state = 14;
				start = p;
				break;
			case 47:
				if(parent == null) throw "Expected node name";
				start = p + 1;
				state = 0;
				next = 10;
				break;
			default:
				state = 3;
				start = p;
				continue;
			}
			break;
		case 3:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(p == start) throw "Expected node name";
				xml = Xml.createElement(HxOverrides.substr(str,start,p - start));
				parent.addChild(xml);
				state = 0;
				next = 4;
				continue;
			}
			break;
		case 4:
			switch(c) {
			case 47:
				state = 11;
				nsubs++;
				break;
			case 62:
				state = 9;
				nsubs++;
				break;
			default:
				state = 5;
				start = p;
				continue;
			}
			break;
		case 5:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				var tmp;
				if(start == p) throw "Expected attribute name";
				tmp = HxOverrides.substr(str,start,p - start);
				aname = tmp;
				if(xml.exists(aname)) throw "Duplicate attribute";
				state = 0;
				next = 6;
				continue;
			}
			break;
		case 6:
			switch(c) {
			case 61:
				state = 0;
				next = 7;
				break;
			default:
				throw "Expected =";
			}
			break;
		case 7:
			switch(c) {
			case 34:case 39:
				state = 8;
				start = p;
				break;
			default:
				throw "Expected \"";
			}
			break;
		case 8:
			if(c == str.charCodeAt(start)) {
				var val = HxOverrides.substr(str,start + 1,p - start - 1);
				xml.set(aname,val);
				state = 0;
				next = 4;
			}
			break;
		case 9:
			p = haxe.xml.Parser.doParse(str,p,xml);
			start = p;
			state = 1;
			break;
		case 11:
			switch(c) {
			case 62:
				state = 1;
				break;
			default:
				throw "Expected >";
			}
			break;
		case 12:
			switch(c) {
			case 62:
				if(nsubs == 0) parent.addChild(Xml.createPCData(""));
				return p;
			default:
				throw "Expected >";
			}
			break;
		case 10:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(start == p) throw "Expected node name";
				var v = HxOverrides.substr(str,start,p - start);
				if(v != parent.get_nodeName()) throw "Expected </" + parent.get_nodeName() + ">";
				state = 0;
				next = 12;
				continue;
			}
			break;
		case 15:
			if(c == 45 && str.charCodeAt(p + 1) == 45 && str.charCodeAt(p + 2) == 62) {
				parent.addChild(Xml.createComment(HxOverrides.substr(str,start,p - start)));
				p += 2;
				state = 1;
			}
			break;
		case 16:
			if(c == 91) nbrackets++; else if(c == 93) nbrackets--; else if(c == 62 && nbrackets == 0) {
				parent.addChild(Xml.createDocType(HxOverrides.substr(str,start,p - start)));
				state = 1;
			}
			break;
		case 14:
			if(c == 63 && str.charCodeAt(p + 1) == 62) {
				p++;
				var str1 = HxOverrides.substr(str,start + 1,p - start - 2);
				parent.addChild(Xml.createProcessingInstruction(str1));
				state = 1;
			}
			break;
		case 18:
			if(c == 59) {
				var s = HxOverrides.substr(str,start,p - start);
				if(s.charCodeAt(0) == 35) {
					var i;
					if(s.charCodeAt(1) == 120) i = Std.parseInt("0" + HxOverrides.substr(s,1,s.length - 1)); else i = Std.parseInt(HxOverrides.substr(s,1,s.length - 1));
					buf.add(String.fromCharCode(i));
				} else if(!haxe.xml.Parser.escapes.exists(s)) buf.b += "&" + s + ";"; else buf.add(haxe.xml.Parser.escapes.get(s));
				start = p + 1;
				state = next;
			}
			break;
		}
		c = StringTools.fastCodeAt(str,++p);
	}
	if(state == 1) {
		start = p;
		state = 13;
	}
	if(state == 13) {
		if(p != start || nsubs == 0) parent.addChild(Xml.createPCData(buf.b + HxOverrides.substr(str,start,p - start)));
		return p;
	}
	throw "Unexpected end";
};
var hxd = {};
hxd._BitmapData = {};
hxd._BitmapData.BitmapData_Impl_ = function() { };
$hxClasses["hxd._BitmapData.BitmapData_Impl_"] = hxd._BitmapData.BitmapData_Impl_;
hxd._BitmapData.BitmapData_Impl_.__name__ = true;
hxd._BitmapData.BitmapData_Impl_.nativeGetPixels = function(b) {
	var pixels = [];
	var w = b.canvas.width;
	var h = b.canvas.height;
	var data = b.getImageData(0,0,w,h).data;
	var _g1 = 0;
	var _g = w * h * 4;
	while(_g1 < _g) {
		var i = _g1++;
		pixels.push(data[i]);
	}
	return new hxd.Pixels(b.canvas.width,b.canvas.height,haxe.io.Bytes.ofData(pixels),hxd.PixelFormat.RGBA);
};
hxd.Charset = function() {
	var _g = this;
	this.map = new haxe.ds.IntMap();
	var _g1 = 1;
	while(_g1 < 94) {
		var i = _g1++;
		_g.map.set(65281 + i,33 + i);
	}
	var _g11 = 192;
	var _g2 = 199;
	while(_g11 < _g2) {
		var i1 = _g11++;
		_g.map.set(i1,65);
	}
	var _g12 = 224;
	var _g3 = 231;
	while(_g12 < _g3) {
		var i2 = _g12++;
		_g.map.set(i2,97);
	}
	var _g13 = 200;
	var _g4 = 204;
	while(_g13 < _g4) {
		var i3 = _g13++;
		_g.map.set(i3,69);
	}
	var _g14 = 232;
	var _g5 = 236;
	while(_g14 < _g5) {
		var i4 = _g14++;
		_g.map.set(i4,101);
	}
	var _g15 = 204;
	var _g6 = 208;
	while(_g15 < _g6) {
		var i5 = _g15++;
		_g.map.set(i5,73);
	}
	var _g16 = 236;
	var _g7 = 240;
	while(_g16 < _g7) {
		var i6 = _g16++;
		_g.map.set(i6,105);
	}
	var _g17 = 210;
	var _g8 = 215;
	while(_g17 < _g8) {
		var i7 = _g17++;
		_g.map.set(i7,79);
	}
	var _g18 = 242;
	var _g9 = 247;
	while(_g18 < _g9) {
		var i8 = _g18++;
		_g.map.set(i8,111);
	}
	var _g19 = 217;
	var _g10 = 221;
	while(_g19 < _g10) {
		var i9 = _g19++;
		_g.map.set(i9,85);
	}
	var _g110 = 249;
	var _g20 = 253;
	while(_g110 < _g20) {
		var i10 = _g110++;
		_g.map.set(i10,117);
	}
	_g.map.set(199,67);
	_g.map.set(231,67);
	_g.map.set(208,68);
	_g.map.set(222,100);
	_g.map.set(209,78);
	_g.map.set(241,110);
	_g.map.set(221,89);
	_g.map.set(253,121);
	_g.map.set(255,121);
	_g.map.set(12288,32);
	_g.map.set(160,32);
	_g.map.set(171,34);
	_g.map.set(187,34);
	_g.map.set(8220,34);
	_g.map.set(8221,34);
	_g.map.set(8216,39);
	_g.map.set(8217,39);
	_g.map.set(180,39);
	_g.map.set(8216,39);
	_g.map.set(8249,60);
	_g.map.set(8250,62);
};
$hxClasses["hxd.Charset"] = hxd.Charset;
hxd.Charset.__name__ = true;
hxd.Charset.getDefault = function() {
	if(hxd.Charset.inst == null) hxd.Charset.inst = new hxd.Charset();
	return hxd.Charset.inst;
};
hxd.Charset.prototype = {
	resolveChar: function(code,glyphs) {
		var c = code;
		while(c != null) {
			var g = glyphs.get(c);
			if(g != null) return g;
			c = this.map.get(c);
		}
		return null;
	}
	,isSpace: function(code) {
		return code == 32 || code == 12288;
	}
	,isBreakChar: function(code) {
		switch(code) {
		case 33:case 63:case 46:case 44:case 58:
			return true;
		case 65281:case 65311:case 65294:case 65292:case 65306:
			return true;
		case 12539:case 12289:case 12290:
			return true;
		default:
			return this.isSpace(code);
		}
	}
	,__class__: hxd.Charset
};
hxd.EventKind = $hxClasses["hxd.EventKind"] = { __ename__ : true, __constructs__ : ["EPush","ERelease","EMove","EOver","EOut","EWheel","EFocus","EFocusLost","EKeyDown","EKeyUp"] };
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
	this.button = 0;
	this.kind = k;
	this.relX = x;
	this.relY = y;
};
$hxClasses["hxd.Event"] = hxd.Event;
hxd.Event.__name__ = true;
hxd.Event.prototype = {
	__class__: hxd.Event
};
hxd.Key = function() { };
$hxClasses["hxd.Key"] = hxd.Key;
hxd.Key.__name__ = true;
hxd.Key.isPressed = function(code) {
	return hxd.Key.keyPressed[code] == h3d.Engine.getCurrent().frameCount + 1;
};
hxd.Key.initialize = function() {
	if(hxd.Key.initDone) hxd.Key.dispose();
	hxd.Key.initDone = true;
	hxd.Key.keyPressed = [];
	hxd.Stage.getInstance().addEventTarget(hxd.Key.onEvent);
};
hxd.Key.dispose = function() {
	if(hxd.Key.initDone) {
		hxd.Stage.getInstance().removeEventTarget(hxd.Key.onEvent);
		hxd.Key.initDone = false;
		hxd.Key.keyPressed = [];
	}
};
hxd.Key.onEvent = function(e) {
	var _g = e.kind;
	switch(_g[1]) {
	case 8:
		hxd.Key.keyPressed[e.keyCode] = h3d.Engine.getCurrent().frameCount + 1;
		break;
	case 9:
		hxd.Key.keyPressed[e.keyCode] = -(h3d.Engine.getCurrent().frameCount + 1);
		break;
	case 0:
		hxd.Key.keyPressed[e.button] = h3d.Engine.getCurrent().frameCount + 1;
		break;
	case 1:
		hxd.Key.keyPressed[e.button] = -(h3d.Engine.getCurrent().frameCount + 1);
		break;
	default:
	}
};
hxd.PixelFormat = $hxClasses["hxd.PixelFormat"] = { __ename__ : true, __constructs__ : ["ARGB","BGRA","RGBA"] };
hxd.PixelFormat.ARGB = ["ARGB",0];
hxd.PixelFormat.ARGB.toString = $estr;
hxd.PixelFormat.ARGB.__enum__ = hxd.PixelFormat;
hxd.PixelFormat.BGRA = ["BGRA",1];
hxd.PixelFormat.BGRA.toString = $estr;
hxd.PixelFormat.BGRA.__enum__ = hxd.PixelFormat;
hxd.PixelFormat.RGBA = ["RGBA",2];
hxd.PixelFormat.RGBA.toString = $estr;
hxd.PixelFormat.RGBA.__enum__ = hxd.PixelFormat;
hxd.Pixels = function(width,height,bytes,format) {
	this.width = width;
	this.height = height;
	this.bytes = bytes;
	this.format = format;
};
$hxClasses["hxd.Pixels"] = hxd.Pixels;
hxd.Pixels.__name__ = true;
hxd.Pixels.bytesPerPixel = function(format) {
	switch(format[1]) {
	case 0:case 1:case 2:
		return 4;
	}
};
hxd.Pixels.alloc = function(width,height,format) {
	if(format == null) format = hxd.PixelFormat.RGBA;
	return new hxd.Pixels(width,height,hxd.impl.Tmp.getBytes(width * height * hxd.Pixels.bytesPerPixel(format)),format);
};
hxd.Pixels.prototype = {
	makeSquare: function(copy) {
		var w = this.width;
		var h = this.height;
		var tw;
		if(w == 0) tw = 0; else tw = 1;
		var th;
		if(h == 0) th = 0; else th = 1;
		while(tw < w) tw <<= 1;
		while(th < h) th <<= 1;
		if(w == tw && h == th) return this;
		var out = hxd.impl.Tmp.getBytes(tw * th * 4);
		var p = 0;
		var b = 0;
		var _g = 0;
		while(_g < h) {
			var y = _g++;
			out.blit(p,this.bytes,b,w * 4);
			p += w * 4;
			b += w * 4;
			var _g2 = 0;
			var _g1 = (tw - w) * 4;
			while(_g2 < _g1) {
				var i = _g2++;
				out.set(p++,0);
			}
		}
		var _g11 = 0;
		var _g3 = (th - h) * tw * 4;
		while(_g11 < _g3) {
			var i1 = _g11++;
			out.set(p++,0);
		}
		if(copy) return new hxd.Pixels(tw,th,out,this.format);
		hxd.impl.Tmp.saveBytes(this.bytes);
		this.bytes = out;
		this.width = tw;
		this.height = th;
		return this;
	}
	,convert: function(target) {
		if(this.format == target) return;
		{
			var _g = this.format;
			switch(_g[1]) {
			case 1:
				switch(target[1]) {
				case 0:
					var mem = hxd.impl.Memory.select(this.bytes);
					var _g2 = 0;
					var _g1 = this.width * this.height;
					while(_g2 < _g1) {
						var i = _g2++;
						var p = i << 2;
						var a = hxd.impl.Memory.current.b[p];
						var r = hxd.impl.Memory.current.b[p + 1];
						var g = hxd.impl.Memory.current.b[p + 2];
						var b = hxd.impl.Memory.current.b[p + 3];
						hxd.impl.Memory.current.b[p] = b & 255;
						hxd.impl.Memory.current.b[p + 1] = g & 255;
						hxd.impl.Memory.current.b[p + 2] = r & 255;
						hxd.impl.Memory.current.b[p + 3] = a & 255;
					}
					hxd.impl.Memory.end();
					break;
				case 2:
					var mem1 = hxd.impl.Memory.select(this.bytes);
					var _g21 = 0;
					var _g11 = this.width * this.height;
					while(_g21 < _g11) {
						var i1 = _g21++;
						var p1 = i1 << 2;
						var b1 = hxd.impl.Memory.current.b[p1];
						var r1 = hxd.impl.Memory.current.b[p1 + 2];
						hxd.impl.Memory.current.b[p1] = r1 & 255;
						hxd.impl.Memory.current.b[p1 + 2] = b1 & 255;
					}
					hxd.impl.Memory.end();
					break;
				default:
					throw "Cannot convert from " + Std.string(this.format) + " to " + Std.string(target);
				}
				break;
			case 0:
				switch(target[1]) {
				case 1:
					var mem = hxd.impl.Memory.select(this.bytes);
					var _g2 = 0;
					var _g1 = this.width * this.height;
					while(_g2 < _g1) {
						var i = _g2++;
						var p = i << 2;
						var a = hxd.impl.Memory.current.b[p];
						var r = hxd.impl.Memory.current.b[p + 1];
						var g = hxd.impl.Memory.current.b[p + 2];
						var b = hxd.impl.Memory.current.b[p + 3];
						hxd.impl.Memory.current.b[p] = b & 255;
						hxd.impl.Memory.current.b[p + 1] = g & 255;
						hxd.impl.Memory.current.b[p + 2] = r & 255;
						hxd.impl.Memory.current.b[p + 3] = a & 255;
					}
					hxd.impl.Memory.end();
					break;
				case 2:
					var mem2 = hxd.impl.Memory.select(this.bytes);
					var _g22 = 0;
					var _g12 = this.width * this.height;
					while(_g22 < _g12) {
						var i2 = _g22++;
						var p2 = i2 << 2;
						var a1 = hxd.impl.Memory.current.b[p2];
						hxd.impl.Memory.current.b[p2] = hxd.impl.Memory.current.b[p2 + 1] & 255;
						hxd.impl.Memory.current.b[p2 + 1] = hxd.impl.Memory.current.b[p2 + 2] & 255;
						hxd.impl.Memory.current.b[p2 + 2] = hxd.impl.Memory.current.b[p2 + 3] & 255;
						hxd.impl.Memory.current.b[p2 + 3] = a1 & 255;
					}
					hxd.impl.Memory.end();
					break;
				default:
					throw "Cannot convert from " + Std.string(this.format) + " to " + Std.string(target);
				}
				break;
			default:
				throw "Cannot convert from " + Std.string(this.format) + " to " + Std.string(target);
			}
		}
		this.format = target;
	}
	,dispose: function() {
		if(this.bytes != null) {
			hxd.impl.Tmp.saveBytes(this.bytes);
			this.bytes = null;
		}
	}
	,__class__: hxd.Pixels
};
hxd.Res = function() { };
$hxClasses["hxd.Res"] = hxd.Res;
hxd.Res.__name__ = true;
hxd.Res.load = function(name) {
	return hxd.Res.loader.load(name);
};
hxd.Stage = function() {
	this.curMouseY = 0.;
	this.curMouseX = 0.;
	var _g = this;
	this.eventTargets = new List();
	this.resizeEvents = new List();
	this.canvas = hxd.Stage.getCanvas();
	this.canvasPos = this.canvas.getBoundingClientRect();
	window.addEventListener("mousedown",$bind(this,this.onMouseDown));
	window.addEventListener("mousemove",$bind(this,this.onMouseMove));
	window.addEventListener("mouseup",$bind(this,this.onMouseUp));
	window.addEventListener("mousewheel",$bind(this,this.onMouseWheel));
	window.addEventListener("keydown",$bind(this,this.onKeyDown));
	window.addEventListener("keyup",$bind(this,this.onKeyUp));
	this.canvas.addEventListener("mousedown",function(e) {
		_g.onMouseDown(e);
		e.stopPropagation();
		e.preventDefault();
	});
	var curW = this.get_width();
	var curH = this.get_height();
	var t0 = new haxe.Timer(100);
	t0.run = function() {
		_g.canvasPos = _g.canvas.getBoundingClientRect();
		var cw = _g.get_width();
		var ch = _g.get_height();
		if(curW != cw || curH != ch) {
			curW = cw;
			curH = ch;
			_g.onResize(null);
		}
	};
};
$hxClasses["hxd.Stage"] = hxd.Stage;
hxd.Stage.__name__ = true;
hxd.Stage.getCanvas = function() {
	var canvas = window.document.getElementById("webgl");
	if(canvas == null) throw "Missing canvas#webgl";
	return canvas;
};
hxd.Stage.getInstance = function() {
	if(hxd.Stage.inst == null) hxd.Stage.inst = new hxd.Stage();
	return hxd.Stage.inst;
};
hxd.Stage.prototype = {
	event: function(e) {
		var $it0 = this.eventTargets.iterator();
		while( $it0.hasNext() ) {
			var et = $it0.next();
			et(e);
		}
	}
	,addEventTarget: function(et) {
		this.eventTargets.add(et);
	}
	,removeEventTarget: function(et) {
		this.eventTargets.remove(et);
	}
	,addResizeEvent: function(f) {
		this.resizeEvents.push(f);
	}
	,getFrameRate: function() {
		return 60.;
	}
	,setFullScreen: function(v) {
	}
	,get_width: function() {
		return Math.round(this.canvasPos.width * window.devicePixelRatio);
	}
	,get_height: function() {
		return Math.round(this.canvasPos.height * window.devicePixelRatio);
	}
	,get_mouseX: function() {
		return Math.round(this.curMouseX - this.canvasPos.left);
	}
	,get_mouseY: function() {
		return Math.round(this.curMouseY - this.canvasPos.top);
	}
	,onMouseDown: function(e) {
		this.event(new hxd.Event(hxd.EventKind.EPush,this.get_mouseX(),this.get_mouseY()));
	}
	,onMouseUp: function(e) {
		this.event(new hxd.Event(hxd.EventKind.ERelease,this.get_mouseX(),this.get_mouseY()));
	}
	,onMouseMove: function(e) {
		this.curMouseX = e.clientX;
		this.curMouseY = e.clientY;
		this.event(new hxd.Event(hxd.EventKind.EMove,this.get_mouseX(),this.get_mouseY()));
	}
	,onMouseWheel: function(e) {
		var ev = new hxd.Event(hxd.EventKind.EWheel,this.get_mouseX(),this.get_mouseY());
		ev.wheelDelta = -e.wheelDelta / 30.0;
		this.event(ev);
	}
	,onKeyUp: function(e) {
		var ev = new hxd.Event(hxd.EventKind.EKeyUp);
		ev.keyCode = e.keyCode;
		ev.charCode = e.charCode;
		this.event(ev);
	}
	,onKeyDown: function(e) {
		var ev = new hxd.Event(hxd.EventKind.EKeyDown);
		ev.keyCode = e.keyCode;
		ev.charCode = e.charCode;
		this.event(ev);
	}
	,onResize: function(e) {
		var $it0 = this.resizeEvents.iterator();
		while( $it0.hasNext() ) {
			var r = $it0.next();
			r();
		}
	}
	,__class__: hxd.Stage
};
hxd.Cursor = $hxClasses["hxd.Cursor"] = { __ename__ : true, __constructs__ : ["Default","Button","Move","TextInput","Hide"] };
hxd.Cursor.Default = ["Default",0];
hxd.Cursor.Default.toString = $estr;
hxd.Cursor.Default.__enum__ = hxd.Cursor;
hxd.Cursor.Button = ["Button",1];
hxd.Cursor.Button.toString = $estr;
hxd.Cursor.Button.__enum__ = hxd.Cursor;
hxd.Cursor.Move = ["Move",2];
hxd.Cursor.Move.toString = $estr;
hxd.Cursor.Move.__enum__ = hxd.Cursor;
hxd.Cursor.TextInput = ["TextInput",3];
hxd.Cursor.TextInput.toString = $estr;
hxd.Cursor.TextInput.__enum__ = hxd.Cursor;
hxd.Cursor.Hide = ["Hide",4];
hxd.Cursor.Hide.toString = $estr;
hxd.Cursor.Hide.__enum__ = hxd.Cursor;
hxd.System = function() { };
$hxClasses["hxd.System"] = hxd.System;
hxd.System.__name__ = true;
hxd.System.loopFunc = function() {
	var $window = window;
	var rqf = $window.requestAnimationFrame || $window.webkitRequestAnimationFrame || $window.mozRequestAnimationFrame;
	rqf(hxd.System.loopFunc);
	if(hxd.System.LOOP != null) hxd.System.LOOP();
};
hxd.System.setLoop = function(f) {
	if(!hxd.System.LOOP_INIT) {
		hxd.System.LOOP_INIT = true;
		hxd.System.loopFunc();
	}
	hxd.System.LOOP = f;
};
hxd.System.setNativeCursor = function(c) {
	var canvas = window.document.getElementById("webgl");
	if(canvas != null) switch(c[1]) {
	case 0:
		canvas.style.cursor = "default";
		break;
	case 1:
		canvas.style.cursor = "pointer";
		break;
	case 2:
		canvas.style.cursor = "move";
		break;
	case 3:
		canvas.style.cursor = "text";
		break;
	case 4:
		canvas.style.cursor = "none";
		break;
	}
};
hxd.System.get_lang = function() {
	return "en";
};
hxd.System.get_isWindowed = function() {
	return true;
};
hxd.impl = {};
hxd.impl.MemoryReader = function() {
};
$hxClasses["hxd.impl.MemoryReader"] = hxd.impl.MemoryReader;
hxd.impl.MemoryReader.__name__ = true;
hxd.impl.MemoryReader.prototype = {
	__class__: hxd.impl.MemoryReader
};
hxd.impl.Memory = function() { };
$hxClasses["hxd.impl.Memory"] = hxd.impl.Memory;
hxd.impl.Memory.__name__ = true;
hxd.impl.Memory.select = function(b) {
	if(hxd.impl.Memory.current != null) hxd.impl.Memory.stack.push(hxd.impl.Memory.current);
	hxd.impl.Memory.current = b;
	return hxd.impl.Memory.inst;
};
hxd.impl.Memory.end = function() {
	hxd.impl.Memory.current = hxd.impl.Memory.stack.pop();
};
hxd.impl.Tmp = function() { };
$hxClasses["hxd.impl.Tmp"] = hxd.impl.Tmp;
hxd.impl.Tmp.__name__ = true;
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
};
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
};
hxd.res = {};
hxd.res.FileSystem = function() { };
$hxClasses["hxd.res.FileSystem"] = hxd.res.FileSystem;
hxd.res.FileSystem.__name__ = true;
hxd.res.FileSystem.prototype = {
	__class__: hxd.res.FileSystem
};
hxd.res.Resource = function(entry) {
	this.entry = entry;
};
$hxClasses["hxd.res.Resource"] = hxd.res.Resource;
hxd.res.Resource.__name__ = true;
hxd.res.Resource.prototype = {
	__class__: hxd.res.Resource
};
hxd.res.Any = function(loader,entry) {
	hxd.res.Resource.call(this,entry);
	this.loader = loader;
};
$hxClasses["hxd.res.Any"] = hxd.res.Any;
hxd.res.Any.__name__ = true;
hxd.res.Any.__super__ = hxd.res.Resource;
hxd.res.Any.prototype = $extend(hxd.res.Resource.prototype,{
	toTile: function() {
		return this.loader.loadImage(this.entry.get_path()).toTile();
	}
	,toSound: function() {
		return this.loader.loadSound(this.entry.get_path());
	}
	,__class__: hxd.res.Any
});
hxd.res.BitmapFont = function(loader,entry) {
	hxd.res.Resource.call(this,entry);
	this.loader = loader;
};
$hxClasses["hxd.res.BitmapFont"] = hxd.res.BitmapFont;
hxd.res.BitmapFont.__name__ = true;
hxd.res.BitmapFont.__super__ = hxd.res.Resource;
hxd.res.BitmapFont.prototype = $extend(hxd.res.Resource.prototype,{
	toFont: function() {
		if(this.font != null && !this.font.tile.isDisposed()) return this.font;
		var tile = this.loader.load((function($this) {
			var $r;
			var _this = $this.entry.get_path();
			$r = HxOverrides.substr(_this,0,-3);
			return $r;
		}(this)) + "png").toTile();
		if(this.font != null) {
			this.font.tile = tile;
			return this.font;
		}
		var name = this.entry.get_path();
		var size = 0;
		var lineHeight = 0;
		var glyphs = new haxe.ds.IntMap();
		var _g = this.entry.getSign();
		var sign = _g;
		switch(_g) {
		case 1836597052:
			var xml = Xml.parse(this.entry.getBytes().toString());
			var xml1 = new haxe.xml.Fast(xml.firstElement());
			size = Std.parseInt(xml1.att.resolve("size"));
			lineHeight = Std.parseInt(xml1.att.resolve("height"));
			name = xml1.att.resolve("family");
			var $it0 = xml1.get_elements();
			while( $it0.hasNext() ) {
				var c = $it0.next();
				var r = c.att.resolve("rect").split(" ");
				var o = c.att.resolve("offset").split(" ");
				var t = tile.sub(Std.parseInt(r[0]),Std.parseInt(r[1]),Std.parseInt(r[2]),Std.parseInt(r[3]),Std.parseInt(o[0]),Std.parseInt(o[1]));
				var fc = new h2d.FontChar(t,Std.parseInt(c.att.resolve("width")));
				var $it1 = c.get_elements();
				while( $it1.hasNext() ) {
					var k = $it1.next();
					fc.addKerning((function($this) {
						var $r;
						var _this1 = k.att.resolve("id");
						$r = HxOverrides.cca(_this1,0);
						return $r;
					}(this)),Std.parseInt(k.att.resolve("advance")));
				}
				var key;
				var _this2 = c.att.resolve("code");
				key = HxOverrides.cca(_this2,0);
				glyphs.set(key,fc);
			}
			break;
		default:
			throw "Unknown font signature " + StringTools.hex(sign,8);
		}
		if(glyphs.get(32) == null) {
			var value = new h2d.FontChar(tile.sub(0,0,0,0),size >> 1);
			glyphs.set(32,value);
		}
		this.font = new h2d.Font(name,size);
		this.font.glyphs = glyphs;
		this.font.lineHeight = lineHeight;
		this.font.tile = tile;
		return this.font;
	}
	,__class__: hxd.res.BitmapFont
});
hxd.res.FileEntry = function() { };
$hxClasses["hxd.res.FileEntry"] = hxd.res.FileEntry;
hxd.res.FileEntry.__name__ = true;
hxd.res.FileEntry.prototype = {
	getSign: function() {
		return 0;
	}
	,getBytes: function() {
		return null;
	}
	,open: function() {
	}
	,skip: function(nbytes) {
	}
	,readByte: function() {
		return 0;
	}
	,read: function(out,pos,size) {
	}
	,close: function() {
	}
	,load: function(onReady) {
	}
	,loadBitmap: function(onLoaded) {
	}
	,get_isAvailable: function() {
		return true;
	}
	,get_path: function() {
		return this.name;
	}
	,get_extension: function() {
		var np = this.name.split(".");
		if(np.length == 1) return ""; else return np.pop().toLowerCase();
	}
	,__class__: hxd.res.FileEntry
};
hxd.res._EmbedFileSystem = {};
hxd.res._EmbedFileSystem.EmbedEntry = function(fs,name,relPath,data) {
	this.fs = fs;
	this.name = name;
	this.relPath = relPath;
	this.data = data;
};
$hxClasses["hxd.res._EmbedFileSystem.EmbedEntry"] = hxd.res._EmbedFileSystem.EmbedEntry;
hxd.res._EmbedFileSystem.EmbedEntry.__name__ = true;
hxd.res._EmbedFileSystem.EmbedEntry.__super__ = hxd.res.FileEntry;
hxd.res._EmbedFileSystem.EmbedEntry.prototype = $extend(hxd.res.FileEntry.prototype,{
	getSign: function() {
		var old = this.readPos;
		this.open();
		this.readPos = old;
		return this.bytes.b[0] | this.bytes.b[1] << 8 | this.bytes.b[2] << 16 | this.bytes.b[3] << 24;
	}
	,getBytes: function() {
		if(this.bytes == null) this.open();
		return this.bytes;
	}
	,open: function() {
		if(this.bytes == null) {
			this.bytes = haxe.Resource.getBytes(this.data);
			if(this.bytes == null) throw "Missing resource " + this.data;
		}
		this.readPos = 0;
	}
	,skip: function(nbytes) {
		this.readPos += nbytes;
	}
	,readByte: function() {
		return this.bytes.get(this.readPos++);
	}
	,read: function(out,pos,size) {
		out.blit(pos,this.bytes,this.readPos,size);
		this.readPos += size;
	}
	,close: function() {
		this.bytes = null;
		this.readPos = 0;
	}
	,load: function(onReady) {
		if(onReady != null) haxe.Timer.delay(onReady,1);
	}
	,loadBitmap: function(onLoaded) {
		var rawData = null;
		var _g = 0;
		var _g1 = haxe.Resource.content;
		while(_g < _g1.length) {
			var res = _g1[_g];
			++_g;
			if(res.name == this.data) {
				rawData = res.data;
				break;
			}
		}
		if(rawData == null) throw "Missing resource " + this.data;
		var image = new Image();
		image.onload = function(_) {
			onLoaded(image);
		};
		var extra = "";
		var bytes = rawData.length * 6 >> 3;
		var _g11 = 0;
		var _g2 = (3 - bytes * 4 % 3) % 3;
		while(_g11 < _g2) {
			var i = _g11++;
			extra += "=";
		}
		image.src = "data:image/" + this.get_extension() + ";base64," + rawData + extra;
	}
	,get_path: function() {
		if(this.relPath == ".") return "<root>"; else return this.relPath;
	}
	,__class__: hxd.res._EmbedFileSystem.EmbedEntry
});
hxd.res.EmbedFileSystem = function(root) {
	this.root = root;
};
$hxClasses["hxd.res.EmbedFileSystem"] = hxd.res.EmbedFileSystem;
hxd.res.EmbedFileSystem.__name__ = true;
hxd.res.EmbedFileSystem.__interfaces__ = [hxd.res.FileSystem];
hxd.res.EmbedFileSystem.resolve = function(path) {
	return "R_" + hxd.res.EmbedFileSystem.invalidChars.replace(path,"_");
};
hxd.res.EmbedFileSystem.prototype = {
	splitPath: function(path) {
		if(path == ".") return []; else return path.split("/");
	}
	,exists: function(path) {
		var r = this.root;
		var _g = 0;
		var _g1 = this.splitPath(path);
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			r = Reflect.field(r,p);
			if(r == null) return false;
		}
		return true;
	}
	,get: function(path) {
		if(!this.exists(path)) throw new hxd.res.NotFound(path);
		var id = hxd.res.EmbedFileSystem.resolve(path);
		return new hxd.res._EmbedFileSystem.EmbedEntry(this,path.split("/").pop(),path,id);
	}
	,__class__: hxd.res.EmbedFileSystem
};
hxd.res.FileInput = function(f) {
	this.f = f;
	f.open();
};
$hxClasses["hxd.res.FileInput"] = hxd.res.FileInput;
hxd.res.FileInput.__name__ = true;
hxd.res.FileInput.__super__ = haxe.io.Input;
hxd.res.FileInput.prototype = $extend(haxe.io.Input.prototype,{
	skip: function(nbytes) {
		this.f.skip(nbytes);
	}
	,readByte: function() {
		return this.f.readByte();
	}
	,readBytes: function(b,pos,len) {
		this.f.read(b,pos,len);
		return len;
	}
	,close: function() {
		this.f.close();
	}
	,__class__: hxd.res.FileInput
});
hxd.res.Image = function(entry) {
	hxd.res.Resource.call(this,entry);
};
$hxClasses["hxd.res.Image"] = hxd.res.Image;
hxd.res.Image.__name__ = true;
hxd.res.Image.__super__ = hxd.res.Resource;
hxd.res.Image.prototype = $extend(hxd.res.Resource.prototype,{
	checkResize: function() {
		if(!this.needResize) return;
		var tw = this.tex.width;
		var th = this.tex.height;
		this.tex.width = 1;
		this.tex.height = 1;
		this.tex.resize(tw,th);
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
	,getPixels: function() {
		this.getSize();
		if(this.inf.isPNG) {
			var png = new format.png.Reader(new haxe.io.BytesInput(this.entry.getBytes()));
			png.checkCRC = false;
			var pixels = hxd.Pixels.alloc(this.inf.width,this.inf.height,hxd.PixelFormat.BGRA);
			format.png.Tools.extract32(png.read(),pixels.bytes);
			return pixels;
		} else {
			var bytes = this.entry.getBytes();
			var p = hxd.res.NanoJpeg.decode(bytes);
			return new hxd.Pixels(p.width,p.height,p.pixels,hxd.PixelFormat.BGRA);
		}
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
				_g.checkResize();
				var pixels = _g.getPixels();
				pixels.makeSquare();
				_g.tex.uploadPixels(pixels);
				pixels.dispose();
			};
			if(this.entry.get_isAvailable()) load(); else this.entry.load(load);
		} else this.entry.loadBitmap(function(loaded) {
			_g.checkResize();
			var bmp = hxd.res._LoadedBitmap.LoadedBitmap_Impl_.toBitmap(loaded);
			if(isSquare) _g.tex.uploadBitmap(bmp); else {
				var pixels1 = hxd._BitmapData.BitmapData_Impl_.nativeGetPixels(bmp);
				pixels1.makeSquare();
				_g.tex.uploadPixels(pixels1);
				pixels1.dispose();
			}
			null;
		});
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
			this.tex = h3d.mat.Texture.fromColor(-16776961);
			this.needResize = true;
			this.tex.width = tw;
			this.tex.height = th;
		}
		this.loadTexture();
		this.tex.setName(this.entry.get_path());
		this.tex.onContextLost = function() {
			_g.needResize = false;
			_g.loadTexture();
			return true;
		};
		return this.tex;
	}
	,toTile: function() {
		var size = this.getSize();
		return h2d.Tile.fromTexture(this.toTexture()).sub(0,0,size.width,size.height);
	}
	,__class__: hxd.res.Image
});
hxd.res._LoadedBitmap = {};
hxd.res._LoadedBitmap.LoadedBitmap_Impl_ = function() { };
$hxClasses["hxd.res._LoadedBitmap.LoadedBitmap_Impl_"] = hxd.res._LoadedBitmap.LoadedBitmap_Impl_;
hxd.res._LoadedBitmap.LoadedBitmap_Impl_.__name__ = true;
hxd.res._LoadedBitmap.LoadedBitmap_Impl_.toBitmap = function(this1) {
	var canvas;
	var _this = window.document;
	canvas = _this.createElement("canvas");
	canvas.width = this1.width;
	canvas.height = this1.height;
	var ctx = canvas.getContext("2d");
	ctx.drawImage(this1,0,0);
	return ctx;
};
hxd.res.Loader = function(fs) {
	this.fs = fs;
	this.cache = new haxe.ds.StringMap();
};
$hxClasses["hxd.res.Loader"] = hxd.res.Loader;
hxd.res.Loader.__name__ = true;
hxd.res.Loader.prototype = {
	load: function(path) {
		return new hxd.res.Any(this,this.fs.get(path));
	}
	,loadImage: function(path) {
		var i = this.cache.get(path);
		if(i == null) {
			i = new hxd.res.Image(this.fs.get(path));
			this.cache.set(path,i);
		}
		return i;
	}
	,loadSound: function(path) {
		var s = this.cache.get(path);
		if(s == null) {
			s = new hxd.res.Sound(this.fs.get(path));
			this.cache.set(path,s);
		}
		return s;
	}
	,loadBitmapFont: function(path) {
		var f = this.cache.get(path);
		if(f == null) {
			f = new hxd.res.BitmapFont(this,this.fs.get(path));
			this.cache.set(path,f);
		}
		return f;
	}
	,__class__: hxd.res.Loader
};
hxd.res.Filter = $hxClasses["hxd.res.Filter"] = { __ename__ : true, __constructs__ : ["Fast","Chromatic"] };
hxd.res.Filter.Fast = ["Fast",0];
hxd.res.Filter.Fast.toString = $estr;
hxd.res.Filter.Fast.__enum__ = hxd.res.Filter;
hxd.res.Filter.Chromatic = ["Chromatic",1];
hxd.res.Filter.Chromatic.toString = $estr;
hxd.res.Filter.Chromatic.__enum__ = hxd.res.Filter;
hxd.res._NanoJpeg = {};
hxd.res._NanoJpeg.Component = function() {
};
$hxClasses["hxd.res._NanoJpeg.Component"] = hxd.res._NanoJpeg.Component;
hxd.res._NanoJpeg.Component.__name__ = true;
hxd.res._NanoJpeg.Component.prototype = {
	__class__: hxd.res._NanoJpeg.Component
};
hxd.res.NanoJpeg = function() {
	var array = [new hxd.res._NanoJpeg.Component(),new hxd.res._NanoJpeg.Component(),new hxd.res._NanoJpeg.Component()];
	var vec;
	var this1;
	this1 = new Array(array.length);
	vec = this1;
	var _g1 = 0;
	var _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		vec[i] = array[i];
	}
	this.comps = vec;
	var array1 = [(function($this) {
		var $r;
		var this2;
		this2 = new Array(64);
		$r = this2;
		return $r;
	}(this)),(function($this) {
		var $r;
		var this3;
		this3 = new Array(64);
		$r = this3;
		return $r;
	}(this)),(function($this) {
		var $r;
		var this4;
		this4 = new Array(64);
		$r = this4;
		return $r;
	}(this)),(function($this) {
		var $r;
		var this5;
		this5 = new Array(64);
		$r = this5;
		return $r;
	}(this))];
	var vec1;
	var this6;
	this6 = new Array(array1.length);
	vec1 = this6;
	var _g11 = 0;
	var _g2 = array1.length;
	while(_g11 < _g2) {
		var i1 = _g11++;
		vec1[i1] = array1[i1];
	}
	this.qtab = vec1;
	var this7;
	this7 = new Array(16);
	this.counts = this7;
	var this8;
	this8 = new Array(64);
	this.block = this8;
	var array2 = [0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63];
	var vec2;
	var this9;
	this9 = new Array(array2.length);
	vec2 = this9;
	var _g12 = 0;
	var _g3 = array2.length;
	while(_g12 < _g3) {
		var i2 = _g12++;
		vec2[i2] = array2[i2];
	}
	this.njZZ = vec2;
	var array3 = [null,null,null,null];
	var vec3;
	var this10;
	this10 = new Array(array3.length);
	vec3 = this10;
	var _g13 = 0;
	var _g4 = array3.length;
	while(_g13 < _g4) {
		var i3 = _g13++;
		vec3[i3] = array3[i3];
	}
	this.vlctab = vec3;
};
$hxClasses["hxd.res.NanoJpeg"] = hxd.res.NanoJpeg;
hxd.res.NanoJpeg.__name__ = true;
hxd.res.NanoJpeg.njClip = function(x) {
	if(x < 0) return 0; else if(x > 255) return 255; else return x;
};
hxd.res.NanoJpeg.decode = function(bytes,filter,position,size) {
	if(size == null) size = -1;
	if(position == null) position = 0;
	if(hxd.res.NanoJpeg.inst == null) hxd.res.NanoJpeg.inst = new hxd.res.NanoJpeg();
	hxd.res.NanoJpeg.inst.njInit(bytes,position,size,filter);
	return hxd.res.NanoJpeg.inst.njDecode();
};
hxd.res.NanoJpeg.prototype = {
	njInit: function(bytes,pos,size,filter) {
		this.bytes = bytes;
		this.pos = pos;
		if(filter == null) this.filter = hxd.res.Filter.Chromatic; else this.filter = filter;
		if(size < 0) size = bytes.length - pos;
		var _g = 0;
		while(_g < 4) {
			var i = _g++;
			if(this.vlctab[i] == null) this.vlctab[i] = hxd.impl.Tmp.getBytes(131072);
		}
		this.size = size;
		this.qtused = 0;
		this.qtavail = 0;
		this.rstinterval = 0;
		this.buf = 0;
		this.bufbits = 0;
		var _g1 = 0;
		while(_g1 < 3) {
			var i1 = _g1++;
			this.comps[i1].dcpred = 0;
		}
	}
	,cleanup: function() {
		this.bytes = null;
		var _g = 0;
		var _g1 = this.comps;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c.pixels != null) {
				hxd.impl.Tmp.saveBytes(c.pixels);
				c.pixels = null;
			}
		}
		var _g2 = 0;
		while(_g2 < 4) {
			var i = _g2++;
			if(this.vlctab[i] != null) {
				hxd.impl.Tmp.saveBytes(this.vlctab[i]);
				this.vlctab[i] = null;
			}
		}
	}
	,njSkip: function(count) {
		this.pos += count;
		this.size -= count;
		this.length -= count;
		null;
	}
	,njShowBits: function(bits) {
		if(bits == 0) return 0;
		while(this.bufbits < bits) {
			if(this.size <= 0) {
				this.buf = this.buf << 8 | 255;
				this.bufbits += 8;
				continue;
			}
			var newbyte = this.bytes.b[this.pos];
			this.pos++;
			this.size--;
			this.bufbits += 8;
			this.buf = this.buf << 8 | newbyte;
			if(newbyte == 255) {
				var marker = this.bytes.b[this.pos];
				this.pos++;
				this.size--;
				switch(marker) {
				case 0:case 255:
					break;
				case 217:
					this.size = 0;
					break;
				default:
					this.buf = this.buf << 8 | marker;
					this.bufbits += 8;
				}
			}
		}
		return this.buf >> this.bufbits - bits & (1 << bits) - 1;
	}
	,njGetBits: function(bits) {
		var r = this.njShowBits(bits);
		this.bufbits -= bits;
		return r;
	}
	,njDecodeSOF: function() {
		this.length = this.bytes.b[this.pos] << 8 | this.bytes.b[this.pos + 1];
		this.pos += 2;
		this.size -= 2;
		this.length -= 2;
		null;
		if(this.bytes.b[this.pos] != 8) this.notSupported();
		this.height = this.bytes.b[this.pos + 1] << 8 | this.bytes.b[this.pos + 2];
		this.width = this.bytes.b[this.pos + 3] << 8 | this.bytes.b[this.pos + 4];
		this.ncomp = this.bytes.b[this.pos + 5];
		this.pos += 6;
		this.size -= 6;
		this.length -= 6;
		null;
		var _g = this.ncomp;
		switch(_g) {
		case 1:case 3:
			break;
		default:
			this.notSupported();
		}
		var ssxmax = 0;
		var ssymax = 0;
		var _g1 = 0;
		var _g2 = this.ncomp;
		while(_g1 < _g2) {
			var i = _g1++;
			var c = this.comps[i];
			c.cid = this.bytes.b[this.pos];
			c.ssx = this.bytes.b[this.pos + 1] >> 4;
			if((c.ssx & c.ssx - 1) != 0) this.notSupported();
			c.ssy = this.bytes.b[this.pos + 1] & 15;
			if((c.ssy & c.ssy - 1) != 0) this.notSupported();
			c.qtsel = this.bytes.b[this.pos + 2];
			this.pos += 3;
			this.size -= 3;
			this.length -= 3;
			null;
			this.qtused |= 1 << c.qtsel;
			if(c.ssx > ssxmax) ssxmax = c.ssx;
			if(c.ssy > ssymax) ssymax = c.ssy;
		}
		if(this.ncomp == 1) {
			var c1 = this.comps[0];
			c1.ssx = c1.ssy = ssxmax = ssymax = 1;
		}
		this.mbsizex = ssxmax << 3;
		this.mbsizey = ssymax << 3;
		this.mbwidth = (this.width + this.mbsizex - 1) / this.mbsizex | 0;
		this.mbheight = (this.height + this.mbsizey - 1) / this.mbsizey | 0;
		var _g11 = 0;
		var _g3 = this.ncomp;
		while(_g11 < _g3) {
			var i1 = _g11++;
			var c2 = this.comps[i1];
			c2.width = (this.width * c2.ssx + ssxmax - 1) / ssxmax | 0;
			c2.stride = c2.width + 7 & 2147483640;
			c2.height = (this.height * c2.ssy + ssymax - 1) / ssymax | 0;
			c2.stride = this.mbwidth * this.mbsizex * c2.ssx / ssxmax | 0;
			if(c2.width < 3 && c2.ssx != ssxmax || c2.height < 3 && c2.ssy != ssymax) this.notSupported();
			c2.pixels = hxd.impl.Tmp.getBytes(c2.stride * (this.mbheight * this.mbsizey * c2.ssy / ssymax | 0));
		}
		this.njSkip(this.length);
	}
	,njDecodeDQT: function() {
		this.length = this.bytes.b[this.pos] << 8 | this.bytes.b[this.pos + 1];
		this.pos += 2;
		this.size -= 2;
		this.length -= 2;
		null;
		while(this.length >= 65) {
			var i = this.bytes.b[this.pos];
			this.qtavail |= 1 << i;
			var t = this.qtab[i];
			var _g = 0;
			while(_g < 64) {
				var k = _g++;
				t[k] = this.bytes.b[this.pos + (k + 1)];
			}
			this.pos += 65;
			this.size -= 65;
			this.length -= 65;
			null;
		}
		null;
	}
	,njDecodeDHT: function() {
		this.length = this.bytes.b[this.pos] << 8 | this.bytes.b[this.pos + 1];
		this.pos += 2;
		this.size -= 2;
		this.length -= 2;
		null;
		while(this.length >= 17) {
			var i = this.bytes.b[this.pos];
			if((i & 2) != 0) this.notSupported();
			i = (i | i >> 3) & 3;
			var _g = 0;
			while(_g < 16) {
				var codelen = _g++;
				this.counts[codelen] = this.bytes.b[this.pos + (codelen + 1)];
			}
			this.pos += 17;
			this.size -= 17;
			this.length -= 17;
			null;
			var vlc = this.vlctab[i];
			var vpos = 0;
			var remain = 65536;
			var spread = 65536;
			var _g1 = 1;
			while(_g1 < 17) {
				var codelen1 = _g1++;
				spread >>= 1;
				var currcnt = this.counts[codelen1 - 1];
				if(currcnt == 0) continue;
				remain -= currcnt << 16 - codelen1;
				var _g11 = 0;
				while(_g11 < currcnt) {
					var i1 = _g11++;
					var code = this.bytes.b[this.pos + i1];
					var _g2 = 0;
					while(_g2 < spread) {
						var j = _g2++;
						vlc.set(vpos++,codelen1);
						vlc.set(vpos++,code);
					}
				}
				this.pos += currcnt;
				this.size -= currcnt;
				this.length -= currcnt;
				null;
			}
			while(remain-- != 0) {
				vlc.b[vpos] = 0;
				vpos += 2;
			}
		}
		null;
	}
	,njDecodeDRI: function() {
		this.length = this.bytes.b[this.pos] << 8 | this.bytes.b[this.pos + 1];
		this.pos += 2;
		this.size -= 2;
		this.length -= 2;
		null;
		this.rstinterval = this.bytes.b[this.pos] << 8 | this.bytes.b[this.pos + 1];
		this.njSkip(this.length);
	}
	,njGetVLC: function(vlc) {
		var value = this.njShowBits(16);
		var bits = vlc.b[value << 1];
		if(this.bufbits < bits) this.njShowBits(bits);
		this.bufbits -= bits;
		value = vlc.b[value << 1 | 1];
		this.vlcCode = value;
		bits = value & 15;
		if(bits == 0) return 0;
		value = this.njGetBits(bits);
		if(value < 1 << bits - 1) value += (-1 << bits) + 1;
		return value;
	}
	,njRowIDCT: function(bp) {
		var x0;
		var x1;
		var x2;
		var x3;
		var x4;
		var x5;
		var x6;
		var x7;
		var x8;
		if(((x1 = this.block[bp + 4] << 11) | (x2 = this.block[bp + 6]) | (x3 = this.block[bp + 2]) | (x4 = this.block[bp + 1]) | (x5 = this.block[bp + 7]) | (x6 = this.block[bp + 5]) | (x7 = this.block[bp + 3])) == 0) {
			this.block[bp] = this.block[bp + 1] = this.block[bp + 2] = this.block[bp + 3] = this.block[bp + 4] = this.block[bp + 5] = this.block[bp + 6] = this.block[bp + 7] = this.block[bp] << 3;
			return;
		}
		x0 = (this.block[bp] << 11) + 128;
		x8 = 565 * (x4 + x5);
		x4 = x8 + 2276 * x4;
		x5 = x8 - 3406 * x5;
		x8 = 2408 * (x6 + x7);
		x6 = x8 - 799 * x6;
		x7 = x8 - 4017 * x7;
		x8 = x0 + x1;
		x0 -= x1;
		x1 = 1108 * (x3 + x2);
		x2 = x1 - 3784 * x2;
		x3 = x1 + 1568 * x3;
		x1 = x4 + x6;
		x4 -= x6;
		x6 = x5 + x7;
		x5 -= x7;
		x7 = x8 + x3;
		x8 -= x3;
		x3 = x0 + x2;
		x0 -= x2;
		x2 = 181 * (x4 + x5) + 128 >> 8;
		x4 = 181 * (x4 - x5) + 128 >> 8;
		this.block[bp] = x7 + x1 >> 8;
		this.block[bp + 1] = x3 + x2 >> 8;
		this.block[bp + 2] = x0 + x4 >> 8;
		this.block[bp + 3] = x8 + x6 >> 8;
		this.block[bp + 4] = x8 - x6 >> 8;
		this.block[bp + 5] = x0 - x4 >> 8;
		this.block[bp + 6] = x3 - x2 >> 8;
		this.block[bp + 7] = x7 - x1 >> 8;
	}
	,njColIDCT: function(bp,out,po,stride) {
		var x0;
		var x1;
		var x2;
		var x3;
		var x4;
		var x5;
		var x6;
		var x7;
		var x8;
		if(((x1 = this.block[bp + 32] << 8) | (x2 = this.block[bp + 48]) | (x3 = this.block[bp + 16]) | (x4 = this.block[bp + 8]) | (x5 = this.block[bp + 56]) | (x6 = this.block[bp + 40]) | (x7 = this.block[bp + 24])) == 0) {
			x1 = hxd.res.NanoJpeg.njClip((this.block[bp] + 32 >> 6) + 128);
			var _g = 0;
			while(_g < 8) {
				var i = _g++;
				out.b[po] = x1 & 255;
				po += stride;
			}
			return;
		}
		x0 = (this.block[bp] << 8) + 8192;
		x8 = 565 * (x4 + x5) + 4;
		x4 = x8 + 2276 * x4 >> 3;
		x5 = x8 - 3406 * x5 >> 3;
		x8 = 2408 * (x6 + x7) + 4;
		x6 = x8 - 799 * x6 >> 3;
		x7 = x8 - 4017 * x7 >> 3;
		x8 = x0 + x1;
		x0 -= x1;
		x1 = 1108 * (x3 + x2) + 4;
		x2 = x1 - 3784 * x2 >> 3;
		x3 = x1 + 1568 * x3 >> 3;
		x1 = x4 + x6;
		x4 -= x6;
		x6 = x5 + x7;
		x5 -= x7;
		x7 = x8 + x3;
		x8 -= x3;
		x3 = x0 + x2;
		x0 -= x2;
		x2 = 181 * (x4 + x5) + 128 >> 8;
		x4 = 181 * (x4 - x5) + 128 >> 8;
		var v = hxd.res.NanoJpeg.njClip((x7 + x1 >> 14) + 128);
		out.b[po] = v & 255;
		po += stride;
		var v1 = hxd.res.NanoJpeg.njClip((x3 + x2 >> 14) + 128);
		out.b[po] = v1 & 255;
		po += stride;
		var v2 = hxd.res.NanoJpeg.njClip((x0 + x4 >> 14) + 128);
		out.b[po] = v2 & 255;
		po += stride;
		var v3 = hxd.res.NanoJpeg.njClip((x8 + x6 >> 14) + 128);
		out.b[po] = v3 & 255;
		po += stride;
		var v4 = hxd.res.NanoJpeg.njClip((x8 - x6 >> 14) + 128);
		out.b[po] = v4 & 255;
		po += stride;
		var v5 = hxd.res.NanoJpeg.njClip((x0 - x4 >> 14) + 128);
		out.b[po] = v5 & 255;
		po += stride;
		var v6 = hxd.res.NanoJpeg.njClip((x3 - x2 >> 14) + 128);
		out.b[po] = v6 & 255;
		po += stride;
		var v7 = hxd.res.NanoJpeg.njClip((x7 - x1 >> 14) + 128);
		out.b[po] = v7 & 255;
	}
	,njDecodeBlock: function(c,po) {
		var out = c.pixels;
		var value;
		var coef = 0;
		var _g = 0;
		while(_g < 64) {
			var i = _g++;
			this.block[i] = 0;
		}
		c.dcpred += this.njGetVLC(this.vlctab[c.dctabsel]);
		var qt = this.qtab[c.qtsel];
		var at = this.vlctab[c.actabsel];
		this.block[0] = c.dcpred * qt[0];
		do {
			value = this.njGetVLC(at);
			if(this.vlcCode == 0) break;
			coef += (this.vlcCode >> 4) + 1;
			this.block[this.njZZ[coef]] = value * qt[coef];
		} while(coef < 63);
		var _g1 = 0;
		while(_g1 < 8) {
			var coef1 = _g1++;
			this.njRowIDCT(coef1 * 8);
		}
		var _g2 = 0;
		while(_g2 < 8) {
			var coef2 = _g2++;
			this.njColIDCT(coef2,out,coef2 + po,c.stride);
		}
	}
	,notSupported: function() {
		throw "This JPG file is not supported";
	}
	,njDecodeScan: function() {
		this.length = this.bytes.b[this.pos] << 8 | this.bytes.b[this.pos + 1];
		this.pos += 2;
		this.size -= 2;
		this.length -= 2;
		null;
		if(this.bytes.b[this.pos] != this.ncomp) this.notSupported();
		this.pos += 1;
		this.size -= 1;
		this.length -= 1;
		null;
		var _g1 = 0;
		var _g = this.ncomp;
		while(_g1 < _g) {
			var i = _g1++;
			var c = this.comps[i];
			c.dctabsel = this.bytes.b[this.pos + 1] >> 4;
			c.actabsel = this.bytes.b[this.pos + 1] & 1 | 2;
			this.pos += 2;
			this.size -= 2;
			this.length -= 2;
			null;
		}
		if(this.bytes.b[this.pos] != 0 || this.bytes.b[this.pos + 1] != 63 || this.bytes.b[this.pos + 2] != 0) this.notSupported();
		this.njSkip(this.length);
		var mbx = 0;
		var mby = 0;
		var rstcount = this.rstinterval;
		var nextrst = 0;
		while(true) {
			var _g11 = 0;
			var _g2 = this.ncomp;
			while(_g11 < _g2) {
				var i1 = _g11++;
				var c1 = this.comps[i1];
				var _g3 = 0;
				var _g21 = c1.ssy;
				while(_g3 < _g21) {
					var sby = _g3++;
					var _g5 = 0;
					var _g4 = c1.ssx;
					while(_g5 < _g4) {
						var sbx = _g5++;
						this.njDecodeBlock(c1,(mby * c1.ssy + sby) * c1.stride + mbx * c1.ssx + sbx << 3);
					}
				}
			}
			if(++mbx >= this.mbwidth) {
				mbx = 0;
				if(++mby >= this.mbheight) break;
			}
			if(this.rstinterval != 0 && --rstcount == 0) {
				this.bufbits &= 248;
				var i2 = this.njGetBits(16);
				nextrst = nextrst + 1 & 7;
				rstcount = this.rstinterval;
				var _g6 = 0;
				while(_g6 < 3) {
					var i3 = _g6++;
					this.comps[i3].dcpred = 0;
				}
			}
		}
	}
	,njUpsampleH: function(c) {
		var xmax = c.width - 3;
		var cout = hxd.impl.Tmp.getBytes(c.width * c.height << 1);
		var lout = cout;
		var lin = c.pixels;
		var pi = 0;
		var po = 0;
		var _g1 = 0;
		var _g = c.height;
		while(_g1 < _g) {
			var y = _g1++;
			var v = hxd.res.NanoJpeg.njClip(139 * lin.b[pi] + -11 * lin.b[pi + 1] + 64 >> 7);
			lout.b[po] = v & 255;
			var v1 = hxd.res.NanoJpeg.njClip(104 * lin.b[pi] + 27 * lin.b[pi + 1] + -3 * lin.b[pi + 2] + 64 >> 7);
			lout.b[po + 1] = v1 & 255;
			var v2 = hxd.res.NanoJpeg.njClip(28 * lin.b[pi] + 109 * lin.b[pi + 1] + -9 * lin.b[pi + 2] + 64 >> 7);
			lout.b[po + 2] = v2 & 255;
			var _g2 = 0;
			while(_g2 < xmax) {
				var x = _g2++;
				var v3 = hxd.res.NanoJpeg.njClip(-9 * lin.b[pi + x] + 111 * lin.b[pi + x + 1] + 29 * lin.b[pi + x + 2] + -3 * lin.b[pi + x + 3] + 64 >> 7);
				lout.b[po + (x << 1) + 3] = v3 & 255;
				var v4 = hxd.res.NanoJpeg.njClip(-3 * lin.b[pi + x] + 29 * lin.b[pi + x + 1] + 111 * lin.b[pi + x + 2] + -9 * lin.b[pi + x + 3] + 64 >> 7);
				lout.b[po + (x << 1) + 4] = v4 & 255;
			}
			pi += c.stride;
			po += c.width << 1;
			var v5 = hxd.res.NanoJpeg.njClip(28 * lin.b[pi - 1] + 109 * lin.b[pi - 2] + -9 * lin.b[pi - 3] + 64 >> 7);
			lout.b[po - 3] = v5 & 255;
			var v6 = hxd.res.NanoJpeg.njClip(104 * lin.b[pi - 1] + 27 * lin.b[pi - 2] + -3 * lin.b[pi - 3] + 64 >> 7);
			lout.b[po - 2] = v6 & 255;
			var v7 = hxd.res.NanoJpeg.njClip(139 * lin.b[pi - 1] + -11 * lin.b[pi - 2] + 64 >> 7);
			lout.b[po - 1] = v7 & 255;
		}
		c.width <<= 1;
		c.stride = c.width;
		hxd.impl.Tmp.saveBytes(c.pixels);
		c.pixels = cout;
	}
	,njUpsampleV: function(c) {
		var w = c.width;
		var s1 = c.stride;
		var s2 = s1 + s1;
		var out = hxd.impl.Tmp.getBytes(c.width * c.height << 1);
		var pi = 0;
		var po = 0;
		var cout = out;
		var cin = c.pixels;
		var _g = 0;
		while(_g < w) {
			var x = _g++;
			pi = po = x;
			var v = hxd.res.NanoJpeg.njClip(139 * cin.b[pi] + -11 * cin.b[pi + s1] + 64 >> 7);
			cout.b[po] = v & 255;
			po += w;
			var v1 = hxd.res.NanoJpeg.njClip(104 * cin.b[pi] + 27 * cin.b[pi + s1] + -3 * cin.b[pi + s2] + 64 >> 7);
			cout.b[po] = v1 & 255;
			po += w;
			var v2 = hxd.res.NanoJpeg.njClip(28 * cin.b[pi] + 109 * cin.b[pi + s1] + -9 * cin.b[pi + s2] + 64 >> 7);
			cout.b[po] = v2 & 255;
			po += w;
			pi += s1;
			var _g2 = 0;
			var _g1 = c.height - 2;
			while(_g2 < _g1) {
				var y = _g2++;
				var v3 = hxd.res.NanoJpeg.njClip(-9 * cin.b[pi - s1] + 111 * cin.b[pi] + 29 * cin.b[pi + s1] + -3 * cin.b[pi + s2] + 64 >> 7);
				cout.b[po] = v3 & 255;
				po += w;
				var v4 = hxd.res.NanoJpeg.njClip(-3 * cin.b[pi - s1] + 29 * cin.b[pi] + 111 * cin.b[pi + s1] + -9 * cin.b[pi + s2] + 64 >> 7);
				cout.b[po] = v4 & 255;
				po += w;
				pi += s1;
			}
			pi += s1;
			var v5 = hxd.res.NanoJpeg.njClip(28 * cin.b[pi] + 109 * cin.b[pi - s1] + -9 * cin.b[pi - s2] + 64 >> 7);
			cout.b[po] = v5 & 255;
			po += w;
			var v6 = hxd.res.NanoJpeg.njClip(104 * cin.b[pi] + 27 * cin.b[pi - s1] + -3 * cin.b[pi - s2] + 64 >> 7);
			cout.b[po] = v6 & 255;
			po += w;
			var v7 = hxd.res.NanoJpeg.njClip(139 * cin.b[pi] + -11 * cin.b[pi - s1] + 64 >> 7);
			cout.b[po] = v7 & 255;
		}
		c.height <<= 1;
		c.stride = c.width;
		hxd.impl.Tmp.saveBytes(c.pixels);
		c.pixels = out;
	}
	,njUpsample: function(c) {
		var xshift = 0;
		var yshift = 0;
		while(c.width < this.width) {
			c.width <<= 1;
			++xshift;
		}
		while(c.height < this.height) {
			c.height <<= 1;
			++yshift;
		}
		var out = hxd.impl.Tmp.getBytes(c.width * c.height);
		var lin = c.pixels;
		var pout = 0;
		var lout = out;
		var _g1 = 0;
		var _g = c.height;
		while(_g1 < _g) {
			var y = _g1++;
			var pin = (y >> yshift) * c.stride;
			var _g3 = 0;
			var _g2 = c.width;
			while(_g3 < _g2) {
				var x = _g3++;
				var pos = pout++;
				lout.b[pos] = lin.b[(x >> xshift) + pin] & 255;
			}
		}
		c.stride = c.width;
		hxd.impl.Tmp.saveBytes(c.pixels);
		c.pixels = out;
	}
	,njConvert: function() {
		var _g1 = 0;
		var _g = this.ncomp;
		while(_g1 < _g) {
			var i = _g1++;
			var c = this.comps[i];
			var _g2 = this.filter;
			switch(_g2[1]) {
			case 0:
				if(c.width < this.width || c.height < this.height) this.njUpsample(c);
				break;
			case 1:
				while(c.width < this.width || c.height < this.height) {
					if(c.width < this.width) this.njUpsampleH(c);
					if(c.height < this.height) this.njUpsampleV(c);
				}
				break;
			}
			if(c.width < this.width || c.height < this.height) throw "assert";
		}
		var pixels = hxd.impl.Tmp.getBytes(this.width * this.height * 4);
		if(this.ncomp == 3) {
			var py = this.comps[0].pixels;
			var pcb = this.comps[1].pixels;
			var pcr = this.comps[2].pixels;
			var pix = pixels;
			var k1 = 0;
			var k2 = 0;
			var k3 = 0;
			var out = 0;
			var _g11 = 0;
			var _g3 = this.height;
			while(_g11 < _g3) {
				var yy = _g11++;
				var _g31 = 0;
				var _g21 = this.width;
				while(_g31 < _g21) {
					var x = _g31++;
					var y;
					y = (function($this) {
						var $r;
						var i1 = k1++;
						$r = py.b[i1];
						return $r;
					}(this)) << 8;
					var cb;
					cb = (function($this) {
						var $r;
						var i2 = k2++;
						$r = pcb.b[i2];
						return $r;
					}(this)) - 128;
					var cr;
					cr = (function($this) {
						var $r;
						var i3 = k3++;
						$r = pcr.b[i3];
						return $r;
					}(this)) - 128;
					var r = hxd.res.NanoJpeg.njClip(y + 359 * cr + 128 >> 8);
					var g = hxd.res.NanoJpeg.njClip(y - 88 * cb - 183 * cr + 128 >> 8);
					var b = hxd.res.NanoJpeg.njClip(y + 454 * cb + 128 >> 8);
					var out1 = out++;
					pix.b[out1] = b & 255;
					var out2 = out++;
					pix.b[out2] = g & 255;
					var out3 = out++;
					pix.b[out3] = r & 255;
					var out4 = out++;
					pix.b[out4] = 255;
				}
				k1 += this.comps[0].stride - this.width;
				k2 += this.comps[1].stride - this.width;
				k3 += this.comps[2].stride - this.width;
			}
		} else throw "TODO";
		return pixels;
	}
	,njDecode: function() {
		if(this.size < 2 || this.bytes.b[this.pos] != 255 || this.bytes.b[this.pos + 1] != 216) throw "This file is not a JPEG";
		this.pos += 2;
		this.size -= 2;
		this.length -= 2;
		null;
		try {
			while(true) {
				this.pos += 2;
				this.size -= 2;
				this.length -= 2;
				null;
				var _g = this.bytes.b[this.pos + -1];
				switch(_g) {
				case 192:
					this.njDecodeSOF();
					break;
				case 219:
					this.njDecodeDQT();
					break;
				case 196:
					this.njDecodeDHT();
					break;
				case 221:
					this.njDecodeDRI();
					break;
				case 218:
					this.njDecodeScan();
					throw "__break__";
					break;
				case 254:
					this.length = this.bytes.b[this.pos] << 8 | this.bytes.b[this.pos + 1];
					this.pos += 2;
					this.size -= 2;
					this.length -= 2;
					null;
					this.njSkip(this.length);
					break;
				case 194:
					throw "Unsupported progressive JPG";
					break;
				case 195:
					throw "Unsupported lossless JPG";
					break;
				default:
					var _g1 = this.bytes.b[this.pos + -1] & 240;
					switch(_g1) {
					case 224:
						this.length = this.bytes.b[this.pos] << 8 | this.bytes.b[this.pos + 1];
						this.pos += 2;
						this.size -= 2;
						this.length -= 2;
						null;
						this.njSkip(this.length);
						break;
					case 192:
						throw "Unsupported jpeg type " + (this.bytes.b[this.pos + -1] & 15);
						break;
					default:
						throw "Unsupported jpeg tag 0x" + StringTools.hex(this.bytes.b[this.pos + -1],2);
					}
				}
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		var pixels = this.njConvert();
		this.cleanup();
		return { pixels : pixels, width : this.width, height : this.height};
	}
	,__class__: hxd.res.NanoJpeg
};
hxd.res.NotFound = function(path) {
	this.path = path;
};
$hxClasses["hxd.res.NotFound"] = hxd.res.NotFound;
hxd.res.NotFound.__name__ = true;
hxd.res.NotFound.prototype = {
	toString: function() {
		return "Resource file not found '" + this.path + "'";
	}
	,__class__: hxd.res.NotFound
};
hxd.res.Sound = function(entry) {
	hxd.res.Resource.call(this,entry);
};
$hxClasses["hxd.res.Sound"] = hxd.res.Sound;
hxd.res.Sound.__name__ = true;
hxd.res.Sound.__super__ = hxd.res.Resource;
hxd.res.Sound.prototype = $extend(hxd.res.Resource.prototype,{
	play: function() {
		this.playAt(0);
	}
	,playAt: function(startPosition) {
	}
	,__class__: hxd.res.Sound
});
hxsl.Type = $hxClasses["hxsl.Type"] = { __ename__ : true, __constructs__ : ["TVoid","TInt","TBool","TFloat","TString","TVec","TMat3","TMat4","TMat3x4","TSampler2D","TSamplerCube","TStruct","TFun","TArray"] };
hxsl.Type.TVoid = ["TVoid",0];
hxsl.Type.TVoid.toString = $estr;
hxsl.Type.TVoid.__enum__ = hxsl.Type;
hxsl.Type.TInt = ["TInt",1];
hxsl.Type.TInt.toString = $estr;
hxsl.Type.TInt.__enum__ = hxsl.Type;
hxsl.Type.TBool = ["TBool",2];
hxsl.Type.TBool.toString = $estr;
hxsl.Type.TBool.__enum__ = hxsl.Type;
hxsl.Type.TFloat = ["TFloat",3];
hxsl.Type.TFloat.toString = $estr;
hxsl.Type.TFloat.__enum__ = hxsl.Type;
hxsl.Type.TString = ["TString",4];
hxsl.Type.TString.toString = $estr;
hxsl.Type.TString.__enum__ = hxsl.Type;
hxsl.Type.TVec = function(size,t) { var $x = ["TVec",5,size,t]; $x.__enum__ = hxsl.Type; $x.toString = $estr; return $x; };
hxsl.Type.TMat3 = ["TMat3",6];
hxsl.Type.TMat3.toString = $estr;
hxsl.Type.TMat3.__enum__ = hxsl.Type;
hxsl.Type.TMat4 = ["TMat4",7];
hxsl.Type.TMat4.toString = $estr;
hxsl.Type.TMat4.__enum__ = hxsl.Type;
hxsl.Type.TMat3x4 = ["TMat3x4",8];
hxsl.Type.TMat3x4.toString = $estr;
hxsl.Type.TMat3x4.__enum__ = hxsl.Type;
hxsl.Type.TSampler2D = ["TSampler2D",9];
hxsl.Type.TSampler2D.toString = $estr;
hxsl.Type.TSampler2D.__enum__ = hxsl.Type;
hxsl.Type.TSamplerCube = ["TSamplerCube",10];
hxsl.Type.TSamplerCube.toString = $estr;
hxsl.Type.TSamplerCube.__enum__ = hxsl.Type;
hxsl.Type.TStruct = function(vl) { var $x = ["TStruct",11,vl]; $x.__enum__ = hxsl.Type; $x.toString = $estr; return $x; };
hxsl.Type.TFun = function(variants) { var $x = ["TFun",12,variants]; $x.__enum__ = hxsl.Type; $x.toString = $estr; return $x; };
hxsl.Type.TArray = function(t,size) { var $x = ["TArray",13,t,size]; $x.__enum__ = hxsl.Type; $x.toString = $estr; return $x; };
hxsl.VecType = $hxClasses["hxsl.VecType"] = { __ename__ : true, __constructs__ : ["VInt","VFloat","VBool"] };
hxsl.VecType.VInt = ["VInt",0];
hxsl.VecType.VInt.toString = $estr;
hxsl.VecType.VInt.__enum__ = hxsl.VecType;
hxsl.VecType.VFloat = ["VFloat",1];
hxsl.VecType.VFloat.toString = $estr;
hxsl.VecType.VFloat.__enum__ = hxsl.VecType;
hxsl.VecType.VBool = ["VBool",2];
hxsl.VecType.VBool.toString = $estr;
hxsl.VecType.VBool.__enum__ = hxsl.VecType;
hxsl.SizeDecl = $hxClasses["hxsl.SizeDecl"] = { __ename__ : true, __constructs__ : ["SConst","SVar"] };
hxsl.SizeDecl.SConst = function(v) { var $x = ["SConst",0,v]; $x.__enum__ = hxsl.SizeDecl; $x.toString = $estr; return $x; };
hxsl.SizeDecl.SVar = function(v) { var $x = ["SVar",1,v]; $x.__enum__ = hxsl.SizeDecl; $x.toString = $estr; return $x; };
hxsl.Error = function(msg,pos) {
	this.msg = msg;
	this.pos = pos;
};
$hxClasses["hxsl.Error"] = hxsl.Error;
hxsl.Error.__name__ = true;
hxsl.Error.t = function(msg,pos) {
	throw new hxsl.Error(msg,pos);
	return null;
};
hxsl.Error.prototype = {
	toString: function() {
		return "Error(" + this.msg + ")@" + Std.string(this.pos);
	}
	,__class__: hxsl.Error
};
hxsl.VarKind = $hxClasses["hxsl.VarKind"] = { __ename__ : true, __constructs__ : ["Global","Input","Param","Var","Local","Output","Function"] };
hxsl.VarKind.Global = ["Global",0];
hxsl.VarKind.Global.toString = $estr;
hxsl.VarKind.Global.__enum__ = hxsl.VarKind;
hxsl.VarKind.Input = ["Input",1];
hxsl.VarKind.Input.toString = $estr;
hxsl.VarKind.Input.__enum__ = hxsl.VarKind;
hxsl.VarKind.Param = ["Param",2];
hxsl.VarKind.Param.toString = $estr;
hxsl.VarKind.Param.__enum__ = hxsl.VarKind;
hxsl.VarKind.Var = ["Var",3];
hxsl.VarKind.Var.toString = $estr;
hxsl.VarKind.Var.__enum__ = hxsl.VarKind;
hxsl.VarKind.Local = ["Local",4];
hxsl.VarKind.Local.toString = $estr;
hxsl.VarKind.Local.__enum__ = hxsl.VarKind;
hxsl.VarKind.Output = ["Output",5];
hxsl.VarKind.Output.toString = $estr;
hxsl.VarKind.Output.__enum__ = hxsl.VarKind;
hxsl.VarKind.Function = ["Function",6];
hxsl.VarKind.Function.toString = $estr;
hxsl.VarKind.Function.__enum__ = hxsl.VarKind;
hxsl.VarQualifier = $hxClasses["hxsl.VarQualifier"] = { __ename__ : true, __constructs__ : ["Const","Private","Nullable","PerObject","Name"] };
hxsl.VarQualifier.Const = function(max) { var $x = ["Const",0,max]; $x.__enum__ = hxsl.VarQualifier; $x.toString = $estr; return $x; };
hxsl.VarQualifier.Private = ["Private",1];
hxsl.VarQualifier.Private.toString = $estr;
hxsl.VarQualifier.Private.__enum__ = hxsl.VarQualifier;
hxsl.VarQualifier.Nullable = ["Nullable",2];
hxsl.VarQualifier.Nullable.toString = $estr;
hxsl.VarQualifier.Nullable.__enum__ = hxsl.VarQualifier;
hxsl.VarQualifier.PerObject = ["PerObject",3];
hxsl.VarQualifier.PerObject.toString = $estr;
hxsl.VarQualifier.PerObject.__enum__ = hxsl.VarQualifier;
hxsl.VarQualifier.Name = function(n) { var $x = ["Name",4,n]; $x.__enum__ = hxsl.VarQualifier; $x.toString = $estr; return $x; };
hxsl.Const = $hxClasses["hxsl.Const"] = { __ename__ : true, __constructs__ : ["CNull","CBool","CInt","CFloat","CString"] };
hxsl.Const.CNull = ["CNull",0];
hxsl.Const.CNull.toString = $estr;
hxsl.Const.CNull.__enum__ = hxsl.Const;
hxsl.Const.CBool = function(b) { var $x = ["CBool",1,b]; $x.__enum__ = hxsl.Const; $x.toString = $estr; return $x; };
hxsl.Const.CInt = function(v) { var $x = ["CInt",2,v]; $x.__enum__ = hxsl.Const; $x.toString = $estr; return $x; };
hxsl.Const.CFloat = function(v) { var $x = ["CFloat",3,v]; $x.__enum__ = hxsl.Const; $x.toString = $estr; return $x; };
hxsl.Const.CString = function(v) { var $x = ["CString",4,v]; $x.__enum__ = hxsl.Const; $x.toString = $estr; return $x; };
hxsl.FunctionKind = $hxClasses["hxsl.FunctionKind"] = { __ename__ : true, __constructs__ : ["Vertex","Fragment","Init","Helper"] };
hxsl.FunctionKind.Vertex = ["Vertex",0];
hxsl.FunctionKind.Vertex.toString = $estr;
hxsl.FunctionKind.Vertex.__enum__ = hxsl.FunctionKind;
hxsl.FunctionKind.Fragment = ["Fragment",1];
hxsl.FunctionKind.Fragment.toString = $estr;
hxsl.FunctionKind.Fragment.__enum__ = hxsl.FunctionKind;
hxsl.FunctionKind.Init = ["Init",2];
hxsl.FunctionKind.Init.toString = $estr;
hxsl.FunctionKind.Init.__enum__ = hxsl.FunctionKind;
hxsl.FunctionKind.Helper = ["Helper",3];
hxsl.FunctionKind.Helper.toString = $estr;
hxsl.FunctionKind.Helper.__enum__ = hxsl.FunctionKind;
hxsl.TGlobal = $hxClasses["hxsl.TGlobal"] = { __ename__ : true, __constructs__ : ["Radians","Degrees","Sin","Cos","Tan","Asin","Acos","Atan","Pow","Exp","Log","Exp2","Log2","Sqrt","Inversesqrt","Abs","Sign","Floor","Ceil","Fract","Mod","Min","Max","Length","Distance","Dot","Cross","Normalize","Texture2D","TextureCube","Vec2","Vec3","Vec4","IVec2","IVec3","IVec4","BVec2","BVec3","BVec4","Mat2","Mat3","Mat4","Mat3x4","Saturate"] };
hxsl.TGlobal.Radians = ["Radians",0];
hxsl.TGlobal.Radians.toString = $estr;
hxsl.TGlobal.Radians.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Degrees = ["Degrees",1];
hxsl.TGlobal.Degrees.toString = $estr;
hxsl.TGlobal.Degrees.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Sin = ["Sin",2];
hxsl.TGlobal.Sin.toString = $estr;
hxsl.TGlobal.Sin.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Cos = ["Cos",3];
hxsl.TGlobal.Cos.toString = $estr;
hxsl.TGlobal.Cos.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Tan = ["Tan",4];
hxsl.TGlobal.Tan.toString = $estr;
hxsl.TGlobal.Tan.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Asin = ["Asin",5];
hxsl.TGlobal.Asin.toString = $estr;
hxsl.TGlobal.Asin.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Acos = ["Acos",6];
hxsl.TGlobal.Acos.toString = $estr;
hxsl.TGlobal.Acos.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Atan = ["Atan",7];
hxsl.TGlobal.Atan.toString = $estr;
hxsl.TGlobal.Atan.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Pow = ["Pow",8];
hxsl.TGlobal.Pow.toString = $estr;
hxsl.TGlobal.Pow.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Exp = ["Exp",9];
hxsl.TGlobal.Exp.toString = $estr;
hxsl.TGlobal.Exp.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Log = ["Log",10];
hxsl.TGlobal.Log.toString = $estr;
hxsl.TGlobal.Log.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Exp2 = ["Exp2",11];
hxsl.TGlobal.Exp2.toString = $estr;
hxsl.TGlobal.Exp2.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Log2 = ["Log2",12];
hxsl.TGlobal.Log2.toString = $estr;
hxsl.TGlobal.Log2.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Sqrt = ["Sqrt",13];
hxsl.TGlobal.Sqrt.toString = $estr;
hxsl.TGlobal.Sqrt.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Inversesqrt = ["Inversesqrt",14];
hxsl.TGlobal.Inversesqrt.toString = $estr;
hxsl.TGlobal.Inversesqrt.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Abs = ["Abs",15];
hxsl.TGlobal.Abs.toString = $estr;
hxsl.TGlobal.Abs.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Sign = ["Sign",16];
hxsl.TGlobal.Sign.toString = $estr;
hxsl.TGlobal.Sign.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Floor = ["Floor",17];
hxsl.TGlobal.Floor.toString = $estr;
hxsl.TGlobal.Floor.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Ceil = ["Ceil",18];
hxsl.TGlobal.Ceil.toString = $estr;
hxsl.TGlobal.Ceil.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Fract = ["Fract",19];
hxsl.TGlobal.Fract.toString = $estr;
hxsl.TGlobal.Fract.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Mod = ["Mod",20];
hxsl.TGlobal.Mod.toString = $estr;
hxsl.TGlobal.Mod.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Min = ["Min",21];
hxsl.TGlobal.Min.toString = $estr;
hxsl.TGlobal.Min.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Max = ["Max",22];
hxsl.TGlobal.Max.toString = $estr;
hxsl.TGlobal.Max.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Length = ["Length",23];
hxsl.TGlobal.Length.toString = $estr;
hxsl.TGlobal.Length.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Distance = ["Distance",24];
hxsl.TGlobal.Distance.toString = $estr;
hxsl.TGlobal.Distance.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Dot = ["Dot",25];
hxsl.TGlobal.Dot.toString = $estr;
hxsl.TGlobal.Dot.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Cross = ["Cross",26];
hxsl.TGlobal.Cross.toString = $estr;
hxsl.TGlobal.Cross.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Normalize = ["Normalize",27];
hxsl.TGlobal.Normalize.toString = $estr;
hxsl.TGlobal.Normalize.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Texture2D = ["Texture2D",28];
hxsl.TGlobal.Texture2D.toString = $estr;
hxsl.TGlobal.Texture2D.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.TextureCube = ["TextureCube",29];
hxsl.TGlobal.TextureCube.toString = $estr;
hxsl.TGlobal.TextureCube.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Vec2 = ["Vec2",30];
hxsl.TGlobal.Vec2.toString = $estr;
hxsl.TGlobal.Vec2.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Vec3 = ["Vec3",31];
hxsl.TGlobal.Vec3.toString = $estr;
hxsl.TGlobal.Vec3.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Vec4 = ["Vec4",32];
hxsl.TGlobal.Vec4.toString = $estr;
hxsl.TGlobal.Vec4.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.IVec2 = ["IVec2",33];
hxsl.TGlobal.IVec2.toString = $estr;
hxsl.TGlobal.IVec2.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.IVec3 = ["IVec3",34];
hxsl.TGlobal.IVec3.toString = $estr;
hxsl.TGlobal.IVec3.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.IVec4 = ["IVec4",35];
hxsl.TGlobal.IVec4.toString = $estr;
hxsl.TGlobal.IVec4.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.BVec2 = ["BVec2",36];
hxsl.TGlobal.BVec2.toString = $estr;
hxsl.TGlobal.BVec2.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.BVec3 = ["BVec3",37];
hxsl.TGlobal.BVec3.toString = $estr;
hxsl.TGlobal.BVec3.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.BVec4 = ["BVec4",38];
hxsl.TGlobal.BVec4.toString = $estr;
hxsl.TGlobal.BVec4.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Mat2 = ["Mat2",39];
hxsl.TGlobal.Mat2.toString = $estr;
hxsl.TGlobal.Mat2.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Mat3 = ["Mat3",40];
hxsl.TGlobal.Mat3.toString = $estr;
hxsl.TGlobal.Mat3.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Mat4 = ["Mat4",41];
hxsl.TGlobal.Mat4.toString = $estr;
hxsl.TGlobal.Mat4.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Mat3x4 = ["Mat3x4",42];
hxsl.TGlobal.Mat3x4.toString = $estr;
hxsl.TGlobal.Mat3x4.__enum__ = hxsl.TGlobal;
hxsl.TGlobal.Saturate = ["Saturate",43];
hxsl.TGlobal.Saturate.toString = $estr;
hxsl.TGlobal.Saturate.__enum__ = hxsl.TGlobal;
hxsl.Component = $hxClasses["hxsl.Component"] = { __ename__ : true, __constructs__ : ["X","Y","Z","W"] };
hxsl.Component.X = ["X",0];
hxsl.Component.X.toString = $estr;
hxsl.Component.X.__enum__ = hxsl.Component;
hxsl.Component.Y = ["Y",1];
hxsl.Component.Y.toString = $estr;
hxsl.Component.Y.__enum__ = hxsl.Component;
hxsl.Component.Z = ["Z",2];
hxsl.Component.Z.toString = $estr;
hxsl.Component.Z.__enum__ = hxsl.Component;
hxsl.Component.W = ["W",3];
hxsl.Component.W.toString = $estr;
hxsl.Component.W.__enum__ = hxsl.Component;
hxsl.TExprDef = $hxClasses["hxsl.TExprDef"] = { __ename__ : true, __constructs__ : ["TConst","TVar","TGlobal","TParenthesis","TBlock","TBinop","TUnop","TVarDecl","TCall","TSwiz","TIf","TDiscard","TReturn","TFor","TContinue","TBreak","TArray","TArrayDecl"] };
hxsl.TExprDef.TConst = function(c) { var $x = ["TConst",0,c]; $x.__enum__ = hxsl.TExprDef; $x.toString = $estr; return $x; };
hxsl.TExprDef.TVar = function(v) { var $x = ["TVar",1,v]; $x.__enum__ = hxsl.TExprDef; $x.toString = $estr; return $x; };
hxsl.TExprDef.TGlobal = function(g) { var $x = ["TGlobal",2,g]; $x.__enum__ = hxsl.TExprDef; $x.toString = $estr; return $x; };
hxsl.TExprDef.TParenthesis = function(e) { var $x = ["TParenthesis",3,e]; $x.__enum__ = hxsl.TExprDef; $x.toString = $estr; return $x; };
hxsl.TExprDef.TBlock = function(el) { var $x = ["TBlock",4,el]; $x.__enum__ = hxsl.TExprDef; $x.toString = $estr; return $x; };
hxsl.TExprDef.TBinop = function(op,e1,e2) { var $x = ["TBinop",5,op,e1,e2]; $x.__enum__ = hxsl.TExprDef; $x.toString = $estr; return $x; };
hxsl.TExprDef.TUnop = function(op,e1) { var $x = ["TUnop",6,op,e1]; $x.__enum__ = hxsl.TExprDef; $x.toString = $estr; return $x; };
hxsl.TExprDef.TVarDecl = function(v,init) { var $x = ["TVarDecl",7,v,init]; $x.__enum__ = hxsl.TExprDef; $x.toString = $estr; return $x; };
hxsl.TExprDef.TCall = function(e,args) { var $x = ["TCall",8,e,args]; $x.__enum__ = hxsl.TExprDef; $x.toString = $estr; return $x; };
hxsl.TExprDef.TSwiz = function(e,regs) { var $x = ["TSwiz",9,e,regs]; $x.__enum__ = hxsl.TExprDef; $x.toString = $estr; return $x; };
hxsl.TExprDef.TIf = function(econd,eif,eelse) { var $x = ["TIf",10,econd,eif,eelse]; $x.__enum__ = hxsl.TExprDef; $x.toString = $estr; return $x; };
hxsl.TExprDef.TDiscard = ["TDiscard",11];
hxsl.TExprDef.TDiscard.toString = $estr;
hxsl.TExprDef.TDiscard.__enum__ = hxsl.TExprDef;
hxsl.TExprDef.TReturn = function(e) { var $x = ["TReturn",12,e]; $x.__enum__ = hxsl.TExprDef; $x.toString = $estr; return $x; };
hxsl.TExprDef.TFor = function(v,it,loop) { var $x = ["TFor",13,v,it,loop]; $x.__enum__ = hxsl.TExprDef; $x.toString = $estr; return $x; };
hxsl.TExprDef.TContinue = ["TContinue",14];
hxsl.TExprDef.TContinue.toString = $estr;
hxsl.TExprDef.TContinue.__enum__ = hxsl.TExprDef;
hxsl.TExprDef.TBreak = ["TBreak",15];
hxsl.TExprDef.TBreak.toString = $estr;
hxsl.TExprDef.TBreak.__enum__ = hxsl.TExprDef;
hxsl.TExprDef.TArray = function(e,index) { var $x = ["TArray",16,e,index]; $x.__enum__ = hxsl.TExprDef; $x.toString = $estr; return $x; };
hxsl.TExprDef.TArrayDecl = function(el) { var $x = ["TArrayDecl",17,el]; $x.__enum__ = hxsl.TExprDef; $x.toString = $estr; return $x; };
hxsl.Tools = function() { };
$hxClasses["hxsl.Tools"] = hxsl.Tools;
hxsl.Tools.__name__ = true;
hxsl.Tools.allocVarId = function() {
	return ++hxsl.Tools.UID;
};
hxsl.Tools.getName = function(v) {
	if(v.qualifiers == null) return v.name;
	var _g = 0;
	var _g1 = v.qualifiers;
	while(_g < _g1.length) {
		var q = _g1[_g];
		++_g;
		switch(q[1]) {
		case 4:
			var n = q[2];
			return n;
		default:
		}
	}
	return v.name;
};
hxsl.Tools.getConstBits = function(v) {
	var _g = v.type;
	switch(_g[1]) {
	case 2:
		return 1;
	case 1:
		var _g1 = 0;
		var _g2 = v.qualifiers;
		while(_g1 < _g2.length) {
			var q = _g2[_g1];
			++_g1;
			switch(q[1]) {
			case 0:
				var n = q[2];
				if(n != null) {
					var bits = 0;
					while(n >= 1 << bits) bits++;
					return bits;
				}
				return 8;
			default:
			}
		}
		break;
	default:
	}
	return 0;
};
hxsl.Tools.isConst = function(v) {
	if(v.qualifiers != null) {
		var _g = 0;
		var _g1 = v.qualifiers;
		while(_g < _g1.length) {
			var q = _g1[_g];
			++_g;
			switch(q[1]) {
			case 0:
				return true;
			default:
			}
		}
	}
	return false;
};
hxsl.Tools.hasQualifier = function(v,q) {
	if(v.qualifiers != null) {
		var _g = 0;
		var _g1 = v.qualifiers;
		while(_g < _g1.length) {
			var q2 = _g1[_g];
			++_g;
			if(q2 == q) return true;
		}
	}
	return false;
};
hxsl.Tools.toString = function(t) {
	switch(t[1]) {
	case 5:
		var t1 = t[3];
		var size = t[2];
		var prefix;
		switch(t1[1]) {
		case 1:
			prefix = "";
			break;
		case 0:
			prefix = "I";
			break;
		case 2:
			prefix = "B";
			break;
		}
		return prefix + "Vec" + size;
	case 11:
		var vl = t[2];
		return "{" + ((function($this) {
			var $r;
			var _g = [];
			{
				var _g1 = 0;
				while(_g1 < vl.length) {
					var v = vl[_g1];
					++_g1;
					_g.push(v.name + " : " + hxsl.Tools.toString(v.type));
				}
			}
			$r = _g;
			return $r;
		}(this))).join(",") + "}";
	case 13:
		var s = t[3];
		var t2 = t[2];
		return hxsl.Tools.toString(t2) + "[" + (function($this) {
			var $r;
			switch(s[1]) {
			case 0:
				$r = (function($this) {
					var $r;
					var i = s[2];
					$r = "" + i;
					return $r;
				}($this));
				break;
			case 1:
				$r = (function($this) {
					var $r;
					var v1 = s[2];
					$r = v1.name;
					return $r;
				}($this));
				break;
			}
			return $r;
		}(this)) + "]";
	default:
		return HxOverrides.substr(t[0],1,null);
	}
};
hxsl.Tools.iter = function(e,f) {
	{
		var _g = e.e;
		switch(_g[1]) {
		case 3:
			var e1 = _g[2];
			f(e1);
			break;
		case 4:
			var el = _g[2];
			var _g1 = 0;
			while(_g1 < el.length) {
				var e2 = el[_g1];
				++_g1;
				f(e2);
			}
			break;
		case 5:
			var e21 = _g[4];
			var e11 = _g[3];
			f(e11);
			f(e21);
			break;
		case 6:
			var e12 = _g[3];
			f(e12);
			break;
		case 7:
			var init = _g[3];
			if(init != null) f(init);
			break;
		case 8:
			var args = _g[3];
			var e3 = _g[2];
			f(e3);
			var _g11 = 0;
			while(_g11 < args.length) {
				var a = args[_g11];
				++_g11;
				f(a);
			}
			break;
		case 9:
			var e4 = _g[2];
			f(e4);
			break;
		case 10:
			var eelse = _g[4];
			var eif = _g[3];
			var econd = _g[2];
			f(econd);
			f(eif);
			if(eelse != null) f(eelse);
			break;
		case 12:
			var e5 = _g[2];
			if(e5 != null) f(e5);
			break;
		case 13:
			var loop = _g[4];
			var it = _g[3];
			f(it);
			f(loop);
			break;
		case 16:
			var index = _g[3];
			var e6 = _g[2];
			f(e6);
			f(index);
			break;
		case 17:
			var el1 = _g[2];
			var _g12 = 0;
			while(_g12 < el1.length) {
				var e7 = el1[_g12];
				++_g12;
				f(e7);
			}
			break;
		case 0:case 1:case 2:case 11:case 14:case 15:
			break;
		}
	}
};
hxsl.Tools.map = function(e,f) {
	var ed;
	{
		var _g = e.e;
		switch(_g[1]) {
		case 3:
			var e1 = _g[2];
			ed = hxsl.TExprDef.TParenthesis(f(e1));
			break;
		case 4:
			var el = _g[2];
			ed = hxsl.TExprDef.TBlock((function($this) {
				var $r;
				var _g1 = [];
				{
					var _g2 = 0;
					while(_g2 < el.length) {
						var e2 = el[_g2];
						++_g2;
						_g1.push(f(e2));
					}
				}
				$r = _g1;
				return $r;
			}(this)));
			break;
		case 5:
			var e21 = _g[4];
			var e11 = _g[3];
			var op = _g[2];
			ed = hxsl.TExprDef.TBinop(op,f(e11),f(e21));
			break;
		case 6:
			var e12 = _g[3];
			var op1 = _g[2];
			ed = hxsl.TExprDef.TUnop(op1,f(e12));
			break;
		case 7:
			var init = _g[3];
			var v = _g[2];
			ed = hxsl.TExprDef.TVarDecl(v,init != null?f(init):null);
			break;
		case 8:
			var args = _g[3];
			var e3 = _g[2];
			ed = hxsl.TExprDef.TCall(f(e3),(function($this) {
				var $r;
				var _g11 = [];
				{
					var _g21 = 0;
					while(_g21 < args.length) {
						var a = args[_g21];
						++_g21;
						_g11.push(f(a));
					}
				}
				$r = _g11;
				return $r;
			}(this)));
			break;
		case 9:
			var c = _g[3];
			var e4 = _g[2];
			ed = hxsl.TExprDef.TSwiz(f(e4),c);
			break;
		case 10:
			var eelse = _g[4];
			var eif = _g[3];
			var econd = _g[2];
			ed = hxsl.TExprDef.TIf(f(econd),f(eif),eelse != null?f(eelse):null);
			break;
		case 12:
			var e5 = _g[2];
			ed = hxsl.TExprDef.TReturn(e5 != null?f(e5):null);
			break;
		case 13:
			var loop = _g[4];
			var it = _g[3];
			var v1 = _g[2];
			ed = hxsl.TExprDef.TFor(v1,f(it),f(loop));
			break;
		case 16:
			var index = _g[3];
			var e6 = _g[2];
			ed = hxsl.TExprDef.TArray(f(e6),f(index));
			break;
		case 17:
			var el1 = _g[2];
			ed = hxsl.TExprDef.TArrayDecl((function($this) {
				var $r;
				var _g12 = [];
				{
					var _g22 = 0;
					while(_g22 < el1.length) {
						var e7 = el1[_g22];
						++_g22;
						_g12.push(f(e7));
					}
				}
				$r = _g12;
				return $r;
			}(this)));
			break;
		case 0:case 1:case 2:case 11:case 14:case 15:
			ed = e.e;
			break;
		}
	}
	return { e : ed, t : e.t, p : e.p};
};
hxsl.Tools2 = function() { };
$hxClasses["hxsl.Tools2"] = hxsl.Tools2;
hxsl.Tools2.__name__ = true;
hxsl.Tools2.toString = function(g) {
	var n = g[0];
	return n.charAt(0).toLowerCase() + HxOverrides.substr(n,1,null);
};
hxsl.SearchMap = function() {
};
$hxClasses["hxsl.SearchMap"] = hxsl.SearchMap;
hxsl.SearchMap.__name__ = true;
hxsl.SearchMap.prototype = {
	__class__: hxsl.SearchMap
};
hxsl.Cache = function() {
	this.linkCache = new haxe.ds.IntMap();
	this.outVarsMap = new haxe.ds.StringMap();
	this.outVars = [];
};
$hxClasses["hxsl.Cache"] = hxsl.Cache;
hxsl.Cache.__name__ = true;
hxsl.Cache.get = function() {
	var c = hxsl.Cache.INST;
	if(c == null) hxsl.Cache.INST = c = new hxsl.Cache();
	return c;
};
hxsl.Cache.prototype = {
	allocOutputVars: function(vars) {
		var key = vars.join(",");
		var id = this.outVarsMap.get(key);
		if(id != null) return id;
		vars = vars.slice();
		vars.sort(Reflect.compare);
		var key1 = vars.join(",");
		id = this.outVarsMap.get(key1);
		if(id != null) {
			this.outVarsMap.set(key,id);
			return id;
		}
		id = this.outVars.length;
		this.outVars.push(vars);
		this.outVarsMap.set(key,id);
		return id;
	}
	,link: function(instances,outVars) {
		var c = this.linkCache.get(outVars);
		if(c == null) {
			c = new hxsl.SearchMap();
			this.linkCache.set(outVars,c);
		}
		var _g = 0;
		while(_g < instances.length) {
			var i = instances[_g];
			++_g;
			if(c.next == null) c.next = new haxe.ds.IntMap();
			var cs = c.next.get(i.id);
			if(cs == null) {
				cs = new hxsl.SearchMap();
				c.next.set(i.id,cs);
			}
			c = cs;
		}
		if(c.linked != null) return c.linked;
		var linker = new hxsl.Linker();
		var s = linker.link((function($this) {
			var $r;
			var _g1 = [];
			{
				var _g11 = 0;
				while(_g11 < instances.length) {
					var s1 = instances[_g11];
					++_g11;
					_g1.push(s1.shader);
				}
			}
			$r = _g1;
			return $r;
		}(this)),this.outVars[outVars]);
		var paramVars = new haxe.ds.IntMap();
		var _g12 = 0;
		var _g2 = linker.allVars;
		while(_g12 < _g2.length) {
			var v = _g2[_g12];
			++_g12;
			if(v.v.kind == hxsl.VarKind.Param) {
				{
					var _g3 = v.v.type;
					switch(_g3[1]) {
					case 11:
						continue;
						break;
					default:
					}
				}
				var i1 = instances[v.instanceIndex];
				var value = { instance : v.instanceIndex, index : i1.params.get(v.merged[0].id)};
				paramVars.set(v.id,value);
			}
		}
		var s2 = new hxsl.Splitter().split(s);
		var r = new hxsl.RuntimeShader();
		r.vertex = this.flattenShader(s2.vertex,hxsl.FunctionKind.Vertex,paramVars);
		r.vertex.vertex = true;
		r.fragment = this.flattenShader(s2.fragment,hxsl.FunctionKind.Fragment,paramVars);
		c.linked = r;
		return r;
	}
	,getPath: function(v) {
		if(v.parent == null) return v.name;
		return this.getPath(v.parent) + "." + v.name;
	}
	,flattenShader: function(s,kind,params) {
		var flat = new hxsl.Flatten();
		var c = new hxsl.RuntimeShaderData();
		var data = flat.flatten(s,kind);
		var $it0 = flat.allocData.keys();
		while( $it0.hasNext() ) {
			var g = $it0.next();
			var alloc = flat.allocData.h[g.__id__];
			var _g = g.kind;
			switch(_g[1]) {
			case 2:
				var out = [];
				var _g1 = 0;
				while(_g1 < alloc.length) {
					var a = alloc[_g1];
					++_g1;
					if(a.v == null) continue;
					var p = params.get(a.v.id);
					if(p == null) {
						var ap = new hxsl.AllocParam(a.pos,-1,-1,a.v.type);
						ap.perObjectGlobal = new hxsl.AllocGlobal(-1,this.getPath(a.v),a.v.type);
						out.push(ap);
						continue;
					}
					out.push(new hxsl.AllocParam(a.pos,p.instance,p.index,a.v.type));
				}
				{
					var _g11 = g.type;
					switch(_g11[1]) {
					case 13:
						switch(_g11[2][1]) {
						case 9:
							c.textures = out;
							break;
						case 5:
							switch(_g11[2][2]) {
							case 4:
								switch(_g11[2][3][1]) {
								case 1:
									switch(_g11[3][1]) {
									case 0:
										var size = _g11[3][2];
										c.params = out;
										c.paramsSize = size;
										break;
									default:
										throw "assert";
									}
									break;
								default:
									throw "assert";
								}
								break;
							default:
								throw "assert";
							}
							break;
						default:
							throw "assert";
						}
						break;
					default:
						throw "assert";
					}
				}
				break;
			case 0:
				var out1;
				var _g12 = [];
				var _g2 = 0;
				while(_g2 < alloc.length) {
					var a1 = alloc[_g2];
					++_g2;
					if(a1.v != null) _g12.push(new hxsl.AllocGlobal(a1.pos,this.getPath(a1.v),a1.v.type));
				}
				out1 = _g12;
				{
					var _g21 = g.type;
					switch(_g21[1]) {
					case 13:
						switch(_g21[2][1]) {
						case 5:
							switch(_g21[2][2]) {
							case 4:
								switch(_g21[2][3][1]) {
								case 1:
									switch(_g21[3][1]) {
									case 0:
										var size1 = _g21[3][2];
										c.globals = out1;
										c.globalsSize = size1;
										break;
									default:
										throw "assert";
									}
									break;
								default:
									throw "assert";
								}
								break;
							default:
								throw "assert";
							}
							break;
						default:
							throw "assert";
						}
						break;
					default:
						throw "assert";
					}
				}
				break;
			default:
				throw "assert";
			}
		}
		if(c.globals == null) {
			c.globals = [];
			c.globalsSize = 0;
		}
		if(c.params == null) {
			c.params = [];
			c.paramsSize = 0;
		}
		if(c.textures == null) c.textures = [];
		c.data = data;
		return c;
	}
	,__class__: hxsl.Cache
};
hxsl.Clone = function() {
	this.varMap = new haxe.ds.IntMap();
};
$hxClasses["hxsl.Clone"] = hxsl.Clone;
hxsl.Clone.__name__ = true;
hxsl.Clone.shaderData = function(s) {
	return new hxsl.Clone().shader(s);
};
hxsl.Clone.prototype = {
	tvar: function(v) {
		var v2 = this.varMap.get(v.id);
		if(v2 != null) return v2;
		v2 = { id : hxsl.Tools.allocVarId(), type : v.type, name : v.name, kind : v.kind};
		this.varMap.set(v.id,v2);
		if(v.parent != null) v2.parent = this.tvar(v.parent);
		if(v.qualifiers != null) v2.qualifiers = v.qualifiers.slice();
		v2.type = this.ttype(v.type);
		return v2;
	}
	,tfun: function(f) {
		return { ret : this.ttype(f.ret), kind : f.kind, ref : this.tvar(f.ref), args : (function($this) {
			var $r;
			var _g = [];
			{
				var _g1 = 0;
				var _g2 = f.args;
				while(_g1 < _g2.length) {
					var a = _g2[_g1];
					++_g1;
					_g.push($this.tvar(a));
				}
			}
			$r = _g;
			return $r;
		}(this)), expr : this.texpr(f.expr)};
	}
	,ttype: function(t) {
		switch(t[1]) {
		case 11:
			var vl = t[2];
			return hxsl.Type.TStruct((function($this) {
				var $r;
				var _g = [];
				{
					var _g1 = 0;
					while(_g1 < vl.length) {
						var v = vl[_g1];
						++_g1;
						_g.push($this.tvar(v));
					}
				}
				$r = _g;
				return $r;
			}(this)));
		case 13:
			var size = t[3];
			var t1 = t[2];
			return hxsl.Type.TArray(this.ttype(t1),(function($this) {
				var $r;
				switch(size[1]) {
				case 0:
					$r = size;
					break;
				case 1:
					$r = (function($this) {
						var $r;
						var v1 = size[2];
						$r = hxsl.SizeDecl.SVar($this.tvar(v1));
						return $r;
					}($this));
					break;
				}
				return $r;
			}(this)));
		case 12:
			var vars = t[2];
			return hxsl.Type.TFun((function($this) {
				var $r;
				var _g2 = [];
				{
					var _g11 = 0;
					while(_g11 < vars.length) {
						var v2 = vars[_g11];
						++_g11;
						_g2.push({ args : (function($this) {
							var $r;
							var _g21 = [];
							{
								var _g3 = 0;
								var _g4 = v2.args;
								while(_g3 < _g4.length) {
									var a = _g4[_g3];
									++_g3;
									_g21.push({ name : a.name, type : $this.ttype(a.type)});
								}
							}
							$r = _g21;
							return $r;
						}($this)), ret : $this.ttype(v2.ret)});
					}
				}
				$r = _g2;
				return $r;
			}(this)));
		default:
			return t;
		}
	}
	,texpr: function(e) {
		var e2 = hxsl.Tools.map(e,$bind(this,this.texpr));
		e2.t = this.ttype(e.t);
		{
			var _g = e2.e;
			switch(_g[1]) {
			case 1:
				var v = _g[2];
				e2.e = hxsl.TExprDef.TVar(this.tvar(v));
				break;
			case 7:
				var init = _g[3];
				var v1 = _g[2];
				e2.e = hxsl.TExprDef.TVarDecl(this.tvar(v1),init);
				break;
			case 13:
				var loop = _g[4];
				var it = _g[3];
				var v2 = _g[2];
				e2.e = hxsl.TExprDef.TFor(this.tvar(v2),it,loop);
				break;
			default:
				e2.e = e2.e;
			}
		}
		return e2;
	}
	,shader: function(s) {
		return { name : s.name, vars : (function($this) {
			var $r;
			var _g = [];
			{
				var _g1 = 0;
				var _g2 = s.vars;
				while(_g1 < _g2.length) {
					var v = _g2[_g1];
					++_g1;
					_g.push($this.tvar(v));
				}
			}
			$r = _g;
			return $r;
		}(this)), funs : (function($this) {
			var $r;
			var _g11 = [];
			{
				var _g21 = 0;
				var _g3 = s.funs;
				while(_g21 < _g3.length) {
					var f = _g3[_g21];
					++_g21;
					_g11.push($this.tfun(f));
				}
			}
			$r = _g11;
			return $r;
		}(this))};
	}
	,__class__: hxsl.Clone
};
hxsl.Eval = function() {
	this.varMap = new haxe.ds.ObjectMap();
	this.funMap = new haxe.ds.ObjectMap();
	this.constants = new haxe.ds.ObjectMap();
};
$hxClasses["hxsl.Eval"] = hxsl.Eval;
hxsl.Eval.__name__ = true;
hxsl.Eval.prototype = {
	setConstant: function(v,c) {
		var value = hxsl.TExprDef.TConst(c);
		this.constants.set(v,value);
	}
	,mapVar: function(v) {
		var v2 = this.varMap.h[v.__id__];
		if(v2 != null) return v2;
		v2 = { id : v.id == 0?hxsl.Tools.allocVarId():v.id, name : v.name, type : v.type, kind : v.kind};
		if(v.parent != null) v2.parent = this.mapVar(v.parent);
		if(v.qualifiers != null) v2.qualifiers = v.qualifiers.slice();
		this.varMap.set(v,v2);
		{
			var _g = v2.type;
			switch(_g[1]) {
			case 11:
				var vl = _g[2];
				v2.type = hxsl.Type.TStruct((function($this) {
					var $r;
					var _g1 = [];
					{
						var _g2 = 0;
						while(_g2 < vl.length) {
							var v1 = vl[_g2];
							++_g2;
							_g1.push($this.mapVar(v1));
						}
					}
					$r = _g1;
					return $r;
				}(this)));
				break;
			case 13:
				switch(_g[3][1]) {
				case 1:
					var t = _g[2];
					var vs = _g[3][2];
					var c = this.constants.h[vs.__id__];
					if(c != null) switch(c[1]) {
					case 0:
						switch(c[2][1]) {
						case 2:
							var v3 = c[2][2];
							v2.type = hxsl.Type.TArray(t,hxsl.SizeDecl.SConst(v3));
							break;
						default:
							hxsl.Error.t("Integer value expected for array size constant " + vs.name,null);
						}
						break;
					default:
						hxsl.Error.t("Integer value expected for array size constant " + vs.name,null);
					} else {
						var vs2 = this.mapVar(vs);
						v2.type = hxsl.Type.TArray(t,hxsl.SizeDecl.SVar(vs2));
					}
					break;
				default:
				}
				break;
			default:
			}
		}
		return v2;
	}
	,'eval': function(s) {
		var funs = [];
		var _g = 0;
		var _g1 = s.funs;
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			var f2 = { kind : f.kind, ref : this.mapVar(f.ref), args : (function($this) {
				var $r;
				var _g2 = [];
				{
					var _g3 = 0;
					var _g4 = f.args;
					while(_g3 < _g4.length) {
						var a = _g4[_g3];
						++_g3;
						_g2.push($this.mapVar(a));
					}
				}
				$r = _g2;
				return $r;
			}(this)), ret : f.ret, expr : f.expr};
			if(f.kind != hxsl.FunctionKind.Helper) funs.push(f2);
			this.funMap.set(f2.ref,f2);
		}
		var _g11 = 0;
		var _g5 = funs.length;
		while(_g11 < _g5) {
			var i = _g11++;
			funs[i].expr = this.evalExpr(funs[i].expr);
		}
		return { name : s.name, vars : (function($this) {
			var $r;
			var _g6 = [];
			{
				var _g12 = 0;
				var _g21 = s.vars;
				while(_g12 < _g21.length) {
					var v = _g21[_g12];
					++_g12;
					_g6.push($this.mapVar(v));
				}
			}
			$r = _g6;
			return $r;
		}(this)), funs : funs};
	}
	,hasReturn: function(e) {
		this.markReturn = false;
		this.hasReturnLoop(e);
		return this.markReturn;
	}
	,hasReturnLoop: function(e) {
		{
			var _g = e.e;
			switch(_g[1]) {
			case 12:
				this.markReturn = true;
				break;
			default:
				if(!this.markReturn) hxsl.Tools.iter(e,$bind(this,this.hasReturnLoop));
			}
		}
	}
	,handleReturn: function(e,final) {
		if(final == null) final = false;
		{
			var _g = e.e;
			switch(_g[1]) {
			case 12:
				var v = _g[2];
				if(!final) hxsl.Error.t("Cannot inline not final return",e.p);
				if(v == null) return { e : hxsl.TExprDef.TBlock([]), t : hxsl.Type.TVoid, p : e.p};
				return this.handleReturn(v,true);
			case 4:
				var el = _g[2];
				var i = 0;
				var last = el.length;
				var out = [];
				try {
					while(i < last) {
						var e1 = el[i++];
						if(i == last) out.push(this.handleReturn(e1,final)); else {
							var _g1 = e1.e;
							switch(_g1[1]) {
							case 10:
								if(_g1[4] == null) {
									var econd = _g1[2];
									var eif = _g1[3];
									if(final && this.hasReturn(eif)) {
										out.push(this.handleReturn({ e : hxsl.TExprDef.TIf(econd,eif,{ e : hxsl.TExprDef.TBlock(el.slice(i)), t : e1.t, p : e1.p}), t : e1.t, p : e1.p}));
										throw "__break__";
									} else out.push(this.handleReturn(e1));
								} else switch(_g1[4]) {
								default:
									out.push(this.handleReturn(e1));
								}
								break;
							default:
								out.push(this.handleReturn(e1));
							}
						}
					}
				} catch( e ) { if( e != "__break__" ) throw e; }
				var t;
				if(final) t = out[out.length - 1].t; else t = e.t;
				return { e : hxsl.TExprDef.TBlock(out), t : t, p : e.p};
			case 3:
				var v1 = _g[2];
				var v2 = this.handleReturn(v1,final);
				return { e : hxsl.TExprDef.TParenthesis(v2), t : v2.t, p : e.p};
			case 10:
				var eelse = _g[4];
				var eif1 = _g[3];
				var cond = _g[2];
				if(eelse != null && final) {
					var cond1 = this.handleReturn(cond);
					var eif2 = this.handleReturn(eif1,final);
					return { e : hxsl.TExprDef.TIf(cond1,eif2,this.handleReturn(eelse,final)), t : eif2.t, p : e.p};
				} else return hxsl.Tools.map(e,$bind(this,this.handleReturnDef));
				break;
			default:
				return hxsl.Tools.map(e,$bind(this,this.handleReturnDef));
			}
		}
	}
	,handleReturnDef: function(e) {
		return this.handleReturn(e);
	}
	,evalExpr: function(e) {
		var _g6 = this;
		var d;
		{
			var _g = e.e;
			switch(_g[1]) {
			case 2:case 0:
				d = e.e;
				break;
			case 1:
				var v = _g[2];
				var c = this.constants.h[v.__id__];
				if(c != null) d = c; else d = hxsl.TExprDef.TVar(this.mapVar(v));
				break;
			case 7:
				var init = _g[3];
				var v1 = _g[2];
				d = hxsl.TExprDef.TVarDecl(this.mapVar(v1),init == null?null:this.evalExpr(init));
				break;
			case 16:
				var e2 = _g[3];
				var e1 = _g[2];
				var e11 = this.evalExpr(e1);
				{
					var _g1 = e11.e;
					var _g2 = e2.e;
					switch(_g1[1]) {
					case 17:
						switch(_g2[1]) {
						case 0:
							switch(_g2[2][1]) {
							case 2:
								var el = _g1[2];
								var i = _g2[2][2];
								if(i >= 0 && i < el.length) d = el[i].e; else d = hxsl.TExprDef.TArray(this.evalExpr(e11),this.evalExpr(e2));
								break;
							default:
								d = hxsl.TExprDef.TArray(this.evalExpr(e11),this.evalExpr(e2));
							}
							break;
						default:
							d = hxsl.TExprDef.TArray(this.evalExpr(e11),this.evalExpr(e2));
						}
						break;
					default:
						d = hxsl.TExprDef.TArray(this.evalExpr(e11),this.evalExpr(e2));
					}
				}
				break;
			case 9:
				var r = _g[3];
				var e3 = _g[2];
				d = hxsl.TExprDef.TSwiz(this.evalExpr(e3),r.slice());
				break;
			case 12:
				var e4 = _g[2];
				d = hxsl.TExprDef.TReturn(e4 == null?null:this.evalExpr(e4));
				break;
			case 8:
				var args = _g[3];
				var c1 = _g[2];
				var c2 = this.evalExpr(c1);
				var args1;
				var _g11 = [];
				var _g21 = 0;
				while(_g21 < args.length) {
					var a = args[_g21];
					++_g21;
					_g11.push(this.evalExpr(a));
				}
				args1 = _g11;
				{
					var _g22 = c2.e;
					switch(_g22[1]) {
					case 2:
						d = hxsl.TExprDef.TCall(c2,args1);
						break;
					case 1:
						var v2 = _g22[2];
						if(this.funMap.h.__keys__[v2.__id__] != null) {
							var f = this.funMap.h[v2.__id__];
							var outExprs = [];
							var undo = [];
							var _g4 = 0;
							var _g3 = f.args.length;
							while(_g4 < _g3) {
								var i1 = _g4++;
								var v3 = [f.args[i1]];
								var e5 = args1[i1];
								{
									var _g5 = e5.e;
									switch(_g5[1]) {
									case 0:
										var old = [this.constants.h[v3[0].__id__]];
										undo.push((function(old,v3) {
											return function() {
												if(old[0] == null) _g6.constants.remove(v3[0]); else _g6.constants.set(v3[0],old[0]);
											};
										})(old,v3));
										this.constants.set(v3[0],e5.e);
										break;
									case 1:
										switch(_g5[2].kind[1]) {
										case 1:case 2:case 0:
											var old = [this.constants.h[v3[0].__id__]];
											undo.push((function(old,v3) {
												return function() {
													if(old[0] == null) _g6.constants.remove(v3[0]); else _g6.constants.set(v3[0],old[0]);
												};
											})(old,v3));
											this.constants.set(v3[0],e5.e);
											break;
										default:
											var old1 = [this.varMap.h[v3[0].__id__]];
											if(old1[0] == null) undo.push((function(v3) {
												return function() {
													_g6.varMap.remove(v3[0]);
												};
											})(v3)); else {
												this.varMap.remove(v3[0]);
												undo.push((function(old1,v3) {
													return function() {
														_g6.varMap.set(v3[0],old1[0]);
													};
												})(old1,v3));
											}
											var v4 = this.mapVar(v3[0]);
											outExprs.push({ e : hxsl.TExprDef.TVarDecl(v4,e5), t : hxsl.Type.TVoid, p : e5.p});
										}
										break;
									default:
										var old1 = [this.varMap.h[v3[0].__id__]];
										if(old1[0] == null) undo.push((function(v3) {
											return function() {
												_g6.varMap.remove(v3[0]);
											};
										})(v3)); else {
											this.varMap.remove(v3[0]);
											undo.push((function(old1,v3) {
												return function() {
													_g6.varMap.set(v3[0],old1[0]);
												};
											})(old1,v3));
										}
										var v4 = this.mapVar(v3[0]);
										outExprs.push({ e : hxsl.TExprDef.TVarDecl(v4,e5), t : hxsl.Type.TVoid, p : e5.p});
									}
								}
							}
							var e6 = this.handleReturn(this.evalExpr(f.expr),true);
							var _g31 = 0;
							while(_g31 < undo.length) {
								var u = undo[_g31];
								++_g31;
								u();
							}
							{
								var _g32 = e6.e;
								switch(_g32[1]) {
								case 4:
									var el1 = _g32[2];
									var _g41 = 0;
									while(_g41 < el1.length) {
										var e7 = el1[_g41];
										++_g41;
										outExprs.push(e7);
									}
									break;
								default:
									outExprs.push(e6);
								}
							}
							d = hxsl.TExprDef.TBlock(outExprs);
						} else d = hxsl.Error.t("Cannot eval non-static call expresssion '" + new hxsl.Printer().exprString(c2) + "'",c2.p);
						break;
					default:
						d = hxsl.Error.t("Cannot eval non-static call expresssion '" + new hxsl.Printer().exprString(c2) + "'",c2.p);
					}
				}
				break;
			case 4:
				var el2 = _g[2];
				var out = [];
				var last = el2.length - 1;
				var _g23 = 0;
				var _g12 = el2.length;
				while(_g23 < _g12) {
					var i2 = _g23++;
					var e8 = this.evalExpr(el2[i2]);
					{
						var _g33 = e8.e;
						switch(_g33[1]) {
						case 0:
							if(i2 < last) {
							} else out.push(e8);
							break;
						case 1:
							if(i2 < last) {
							} else out.push(e8);
							break;
						default:
							out.push(e8);
						}
					}
				}
				if(out.length == 1) d = out[0].e; else d = hxsl.TExprDef.TBlock(out);
				break;
			case 5:
				var e21 = _g[4];
				var e12 = _g[3];
				var op = _g[2];
				var e13 = this.evalExpr(e12);
				var e22 = this.evalExpr(e21);
				switch(op[1]) {
				case 0:
					{
						var _g13 = e13.e;
						var _g24 = e22.e;
						switch(_g13[1]) {
						case 0:
							switch(_g13[2][1]) {
							case 2:
								switch(_g24[1]) {
								case 0:
									switch(_g24[2][1]) {
									case 2:
										var a1 = _g13[2][2];
										var b = _g24[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CInt(Std.int(a1 + b)));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 3:
								switch(_g24[1]) {
								case 0:
									switch(_g24[2][1]) {
									case 3:
										var a2 = _g13[2][2];
										var b1 = _g24[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CFloat(a2 + b1));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							default:
								d = hxsl.TExprDef.TBinop(op,e13,e22);
							}
							break;
						default:
							d = hxsl.TExprDef.TBinop(op,e13,e22);
						}
					}
					break;
				case 3:
					{
						var _g14 = e13.e;
						var _g25 = e22.e;
						switch(_g14[1]) {
						case 0:
							switch(_g14[2][1]) {
							case 2:
								switch(_g25[1]) {
								case 0:
									switch(_g25[2][1]) {
									case 2:
										var a3 = _g14[2][2];
										var b2 = _g25[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CInt(Std.int(a3 - b2)));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 3:
								switch(_g25[1]) {
								case 0:
									switch(_g25[2][1]) {
									case 3:
										var a4 = _g14[2][2];
										var b3 = _g25[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CFloat(a4 - b3));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							default:
								d = hxsl.TExprDef.TBinop(op,e13,e22);
							}
							break;
						default:
							d = hxsl.TExprDef.TBinop(op,e13,e22);
						}
					}
					break;
				case 1:
					{
						var _g15 = e13.e;
						var _g26 = e22.e;
						switch(_g15[1]) {
						case 0:
							switch(_g15[2][1]) {
							case 2:
								switch(_g26[1]) {
								case 0:
									switch(_g26[2][1]) {
									case 2:
										var a5 = _g15[2][2];
										var b4 = _g26[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CInt(Std.int(a5 * b4)));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 3:
								switch(_g26[1]) {
								case 0:
									switch(_g26[2][1]) {
									case 3:
										var a6 = _g15[2][2];
										var b5 = _g26[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CFloat(a6 * b5));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							default:
								d = hxsl.TExprDef.TBinop(op,e13,e22);
							}
							break;
						default:
							d = hxsl.TExprDef.TBinop(op,e13,e22);
						}
					}
					break;
				case 2:
					{
						var _g16 = e13.e;
						var _g27 = e22.e;
						switch(_g16[1]) {
						case 0:
							switch(_g16[2][1]) {
							case 2:
								switch(_g27[1]) {
								case 0:
									switch(_g27[2][1]) {
									case 2:
										var a7 = _g16[2][2];
										var b6 = _g27[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CInt(Std.int(a7 / b6)));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 3:
								switch(_g27[1]) {
								case 0:
									switch(_g27[2][1]) {
									case 3:
										var a8 = _g16[2][2];
										var b7 = _g27[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CFloat(a8 / b7));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							default:
								d = hxsl.TExprDef.TBinop(op,e13,e22);
							}
							break;
						default:
							d = hxsl.TExprDef.TBinop(op,e13,e22);
						}
					}
					break;
				case 19:
					{
						var _g17 = e13.e;
						var _g28 = e22.e;
						switch(_g17[1]) {
						case 0:
							switch(_g17[2][1]) {
							case 2:
								switch(_g28[1]) {
								case 0:
									switch(_g28[2][1]) {
									case 2:
										var a9 = _g17[2][2];
										var b8 = _g28[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CInt(Std.int(a9 % b8)));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 3:
								switch(_g28[1]) {
								case 0:
									switch(_g28[2][1]) {
									case 3:
										var a10 = _g17[2][2];
										var b9 = _g28[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CFloat(a10 % b9));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							default:
								d = hxsl.TExprDef.TBinop(op,e13,e22);
							}
							break;
						default:
							d = hxsl.TExprDef.TBinop(op,e13,e22);
						}
					}
					break;
				case 13:
					{
						var _g18 = e13.e;
						var _g29 = e22.e;
						switch(_g18[1]) {
						case 0:
							switch(_g18[2][1]) {
							case 2:
								switch(_g29[1]) {
								case 0:
									switch(_g29[2][1]) {
									case 2:
										var a11 = _g18[2][2];
										var b10 = _g29[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CInt(a11 ^ b10));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							default:
								d = hxsl.TExprDef.TBinop(op,e13,e22);
							}
							break;
						default:
							d = hxsl.TExprDef.TBinop(op,e13,e22);
						}
					}
					break;
				case 12:
					{
						var _g19 = e13.e;
						var _g210 = e22.e;
						switch(_g19[1]) {
						case 0:
							switch(_g19[2][1]) {
							case 2:
								switch(_g210[1]) {
								case 0:
									switch(_g210[2][1]) {
									case 2:
										var a12 = _g19[2][2];
										var b11 = _g210[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CInt(a12 | b11));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							default:
								d = hxsl.TExprDef.TBinop(op,e13,e22);
							}
							break;
						default:
							d = hxsl.TExprDef.TBinop(op,e13,e22);
						}
					}
					break;
				case 11:
					{
						var _g110 = e13.e;
						var _g211 = e22.e;
						switch(_g110[1]) {
						case 0:
							switch(_g110[2][1]) {
							case 2:
								switch(_g211[1]) {
								case 0:
									switch(_g211[2][1]) {
									case 2:
										var a13 = _g110[2][2];
										var b12 = _g211[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CInt(a13 & b12));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							default:
								d = hxsl.TExprDef.TBinop(op,e13,e22);
							}
							break;
						default:
							d = hxsl.TExprDef.TBinop(op,e13,e22);
						}
					}
					break;
				case 17:
					{
						var _g111 = e13.e;
						var _g212 = e22.e;
						switch(_g111[1]) {
						case 0:
							switch(_g111[2][1]) {
							case 2:
								switch(_g212[1]) {
								case 0:
									switch(_g212[2][1]) {
									case 2:
										var a14 = _g111[2][2];
										var b13 = _g212[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CInt(a14 >> b13));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							default:
								d = hxsl.TExprDef.TBinop(op,e13,e22);
							}
							break;
						default:
							d = hxsl.TExprDef.TBinop(op,e13,e22);
						}
					}
					break;
				case 18:
					{
						var _g112 = e13.e;
						var _g213 = e22.e;
						switch(_g112[1]) {
						case 0:
							switch(_g112[2][1]) {
							case 2:
								switch(_g213[1]) {
								case 0:
									switch(_g213[2][1]) {
									case 2:
										var a15 = _g112[2][2];
										var b14 = _g213[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CInt(a15 >>> b14));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							default:
								d = hxsl.TExprDef.TBinop(op,e13,e22);
							}
							break;
						default:
							d = hxsl.TExprDef.TBinop(op,e13,e22);
						}
					}
					break;
				case 16:
					{
						var _g113 = e13.e;
						var _g214 = e22.e;
						switch(_g113[1]) {
						case 0:
							switch(_g113[2][1]) {
							case 2:
								switch(_g214[1]) {
								case 0:
									switch(_g214[2][1]) {
									case 2:
										var a16 = _g113[2][2];
										var b15 = _g214[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CInt(a16 << b15));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							default:
								d = hxsl.TExprDef.TBinop(op,e13,e22);
							}
							break;
						default:
							d = hxsl.TExprDef.TBinop(op,e13,e22);
						}
					}
					break;
				case 14:
					{
						var _g114 = e13.e;
						var _g215 = e22.e;
						switch(_g114[1]) {
						case 0:
							switch(_g114[2][1]) {
							case 1:
								switch(_g215[1]) {
								case 0:
									switch(_g215[2][1]) {
									case 1:
										var a17 = _g114[2][2];
										var b16 = _g215[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(a17 && b16));
										break;
									default:
										var a18 = _g114[2][2];
										if(a18 == false) d = hxsl.TExprDef.TConst(hxsl.Const.CBool(a18)); else d = e22.e;
									}
									break;
								default:
									var a18 = _g114[2][2];
									if(a18 == false) d = hxsl.TExprDef.TConst(hxsl.Const.CBool(a18)); else d = e22.e;
								}
								break;
							default:
								switch(_g215[1]) {
								case 0:
									switch(_g215[2][1]) {
									case 1:
										var a19 = _g215[2][2];
										if(a19 == false) d = hxsl.TExprDef.TConst(hxsl.Const.CBool(a19)); else d = e13.e;
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
							}
							break;
						default:
							switch(_g215[1]) {
							case 0:
								switch(_g215[2][1]) {
								case 1:
									var a19 = _g215[2][2];
									if(a19 == false) d = hxsl.TExprDef.TConst(hxsl.Const.CBool(a19)); else d = e13.e;
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							default:
								d = hxsl.TExprDef.TBinop(op,e13,e22);
							}
						}
					}
					break;
				case 15:
					{
						var _g115 = e13.e;
						var _g216 = e22.e;
						switch(_g115[1]) {
						case 0:
							switch(_g115[2][1]) {
							case 1:
								switch(_g216[1]) {
								case 0:
									switch(_g216[2][1]) {
									case 1:
										var a20 = _g115[2][2];
										var b17 = _g216[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(a20 || b17));
										break;
									default:
										var a21 = _g115[2][2];
										if(a21 == true) d = hxsl.TExprDef.TConst(hxsl.Const.CBool(a21)); else d = e22.e;
									}
									break;
								default:
									var a21 = _g115[2][2];
									if(a21 == true) d = hxsl.TExprDef.TConst(hxsl.Const.CBool(a21)); else d = e22.e;
								}
								break;
							default:
								switch(_g216[1]) {
								case 0:
									switch(_g216[2][1]) {
									case 1:
										var a22 = _g216[2][2];
										if(a22 == true) d = hxsl.TExprDef.TConst(hxsl.Const.CBool(a22)); else d = e13.e;
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
							}
							break;
						default:
							switch(_g216[1]) {
							case 0:
								switch(_g216[2][1]) {
								case 1:
									var a22 = _g216[2][2];
									if(a22 == true) d = hxsl.TExprDef.TConst(hxsl.Const.CBool(a22)); else d = e13.e;
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							default:
								d = hxsl.TExprDef.TBinop(op,e13,e22);
							}
						}
					}
					break;
				case 5:
					{
						var _g116 = e13.e;
						var _g217 = e22.e;
						switch(_g116[1]) {
						case 0:
							switch(_g116[2][1]) {
							case 0:
								switch(_g217[1]) {
								case 0:
									switch(_g217[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(true));
										break;
									default:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(false));
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 1:
								switch(_g217[1]) {
								case 0:
									switch(_g217[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(false));
										break;
									case 1:
										var a23 = _g116[2][2];
										var b18 = _g217[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool((a23 == b18?0:1) == 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 2:
								switch(_g217[1]) {
								case 0:
									switch(_g217[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(false));
										break;
									case 2:
										var a24 = _g116[2][2];
										var b19 = _g217[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(a24 - b19 == 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 3:
								switch(_g217[1]) {
								case 0:
									switch(_g217[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(false));
										break;
									case 3:
										var a25 = _g116[2][2];
										var b20 = _g217[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool((a25 > b20?1:a25 == b20?0:-1) == 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 4:
								switch(_g217[1]) {
								case 0:
									switch(_g217[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(false));
										break;
									case 4:
										var a26 = _g116[2][2];
										var b21 = _g217[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool((a26 > b21?1:a26 == b21?0:-1) == 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							}
							break;
						default:
							d = hxsl.TExprDef.TBinop(op,e13,e22);
						}
					}
					break;
				case 6:
					{
						var _g117 = e13.e;
						var _g218 = e22.e;
						switch(_g117[1]) {
						case 0:
							switch(_g117[2][1]) {
							case 0:
								switch(_g218[1]) {
								case 0:
									switch(_g218[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(false));
										break;
									default:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(true));
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 1:
								switch(_g218[1]) {
								case 0:
									switch(_g218[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(true));
										break;
									case 1:
										var a27 = _g117[2][2];
										var b22 = _g218[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool((a27 == b22?0:1) != 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 2:
								switch(_g218[1]) {
								case 0:
									switch(_g218[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(true));
										break;
									case 2:
										var a28 = _g117[2][2];
										var b23 = _g218[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(a28 - b23 != 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 3:
								switch(_g218[1]) {
								case 0:
									switch(_g218[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(true));
										break;
									case 3:
										var a29 = _g117[2][2];
										var b24 = _g218[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool((a29 > b24?1:a29 == b24?0:-1) != 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 4:
								switch(_g218[1]) {
								case 0:
									switch(_g218[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(true));
										break;
									case 4:
										var a30 = _g117[2][2];
										var b25 = _g218[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool((a30 > b25?1:a30 == b25?0:-1) != 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							}
							break;
						default:
							d = hxsl.TExprDef.TBinop(op,e13,e22);
						}
					}
					break;
				case 7:
					{
						var _g118 = e13.e;
						var _g219 = e22.e;
						switch(_g118[1]) {
						case 0:
							switch(_g118[2][1]) {
							case 0:
								switch(_g219[1]) {
								case 0:
									switch(_g219[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(false));
										break;
									default:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(false));
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 1:
								switch(_g219[1]) {
								case 0:
									switch(_g219[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(true));
										break;
									case 1:
										var a31 = _g118[2][2];
										var b26 = _g219[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool((a31 == b26?0:1) > 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 2:
								switch(_g219[1]) {
								case 0:
									switch(_g219[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(true));
										break;
									case 2:
										var a32 = _g118[2][2];
										var b27 = _g219[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(a32 - b27 > 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 3:
								switch(_g219[1]) {
								case 0:
									switch(_g219[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(true));
										break;
									case 3:
										var a33 = _g118[2][2];
										var b28 = _g219[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool((a33 > b28?1:a33 == b28?0:-1) > 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 4:
								switch(_g219[1]) {
								case 0:
									switch(_g219[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(true));
										break;
									case 4:
										var a34 = _g118[2][2];
										var b29 = _g219[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool((a34 > b29?1:a34 == b29?0:-1) > 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							}
							break;
						default:
							d = hxsl.TExprDef.TBinop(op,e13,e22);
						}
					}
					break;
				case 8:
					{
						var _g119 = e13.e;
						var _g220 = e22.e;
						switch(_g119[1]) {
						case 0:
							switch(_g119[2][1]) {
							case 0:
								switch(_g220[1]) {
								case 0:
									switch(_g220[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(true));
										break;
									default:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(false));
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 1:
								switch(_g220[1]) {
								case 0:
									switch(_g220[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(true));
										break;
									case 1:
										var a35 = _g119[2][2];
										var b30 = _g220[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool((a35 == b30?0:1) >= 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 2:
								switch(_g220[1]) {
								case 0:
									switch(_g220[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(true));
										break;
									case 2:
										var a36 = _g119[2][2];
										var b31 = _g220[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(a36 - b31 >= 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 3:
								switch(_g220[1]) {
								case 0:
									switch(_g220[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(true));
										break;
									case 3:
										var a37 = _g119[2][2];
										var b32 = _g220[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool((a37 > b32?1:a37 == b32?0:-1) >= 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 4:
								switch(_g220[1]) {
								case 0:
									switch(_g220[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(true));
										break;
									case 4:
										var a38 = _g119[2][2];
										var b33 = _g220[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool((a38 > b33?1:a38 == b33?0:-1) >= 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							}
							break;
						default:
							d = hxsl.TExprDef.TBinop(op,e13,e22);
						}
					}
					break;
				case 9:
					{
						var _g120 = e13.e;
						var _g221 = e22.e;
						switch(_g120[1]) {
						case 0:
							switch(_g120[2][1]) {
							case 0:
								switch(_g221[1]) {
								case 0:
									switch(_g221[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(false));
										break;
									default:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(true));
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 1:
								switch(_g221[1]) {
								case 0:
									switch(_g221[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(false));
										break;
									case 1:
										var a39 = _g120[2][2];
										var b34 = _g221[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool((a39 == b34?0:1) < 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 2:
								switch(_g221[1]) {
								case 0:
									switch(_g221[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(false));
										break;
									case 2:
										var a40 = _g120[2][2];
										var b35 = _g221[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(a40 - b35 < 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 3:
								switch(_g221[1]) {
								case 0:
									switch(_g221[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(false));
										break;
									case 3:
										var a41 = _g120[2][2];
										var b36 = _g221[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool((a41 > b36?1:a41 == b36?0:-1) < 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 4:
								switch(_g221[1]) {
								case 0:
									switch(_g221[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(false));
										break;
									case 4:
										var a42 = _g120[2][2];
										var b37 = _g221[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool((a42 > b37?1:a42 == b37?0:-1) < 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							}
							break;
						default:
							d = hxsl.TExprDef.TBinop(op,e13,e22);
						}
					}
					break;
				case 10:
					{
						var _g121 = e13.e;
						var _g222 = e22.e;
						switch(_g121[1]) {
						case 0:
							switch(_g121[2][1]) {
							case 0:
								switch(_g222[1]) {
								case 0:
									switch(_g222[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(true));
										break;
									default:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(true));
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 1:
								switch(_g222[1]) {
								case 0:
									switch(_g222[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(false));
										break;
									case 1:
										var a43 = _g121[2][2];
										var b38 = _g222[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool((a43 == b38?0:1) <= 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 2:
								switch(_g222[1]) {
								case 0:
									switch(_g222[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(false));
										break;
									case 2:
										var a44 = _g121[2][2];
										var b39 = _g222[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(a44 - b39 <= 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 3:
								switch(_g222[1]) {
								case 0:
									switch(_g222[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(false));
										break;
									case 3:
										var a45 = _g121[2][2];
										var b40 = _g222[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool((a45 > b40?1:a45 == b40?0:-1) <= 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							case 4:
								switch(_g222[1]) {
								case 0:
									switch(_g222[2][1]) {
									case 0:
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool(false));
										break;
									case 4:
										var a46 = _g121[2][2];
										var b41 = _g222[2][2];
										d = hxsl.TExprDef.TConst(hxsl.Const.CBool((a46 > b41?1:a46 == b41?0:-1) <= 0));
										break;
									default:
										d = hxsl.TExprDef.TBinop(op,e13,e22);
									}
									break;
								default:
									d = hxsl.TExprDef.TBinop(op,e13,e22);
								}
								break;
							}
							break;
						default:
							d = hxsl.TExprDef.TBinop(op,e13,e22);
						}
					}
					break;
				case 21:case 4:case 20:
					d = hxsl.TExprDef.TBinop(op,e13,e22);
					break;
				case 22:
					throw "assert";
					break;
				}
				break;
			case 6:
				var e9 = _g[3];
				var op1 = _g[2];
				var e10 = this.evalExpr(e9);
				{
					var _g122 = e10.e;
					switch(_g122[1]) {
					case 0:
						var c3 = _g122[2];
						switch(op1[1]) {
						case 2:
							switch(c3[1]) {
							case 1:
								var b42 = c3[2];
								d = hxsl.TExprDef.TConst(hxsl.Const.CBool(!b42));
								break;
							default:
								d = hxsl.TExprDef.TUnop(op1,e10);
							}
							break;
						case 3:
							switch(c3[1]) {
							case 2:
								var i3 = c3[2];
								d = hxsl.TExprDef.TConst(hxsl.Const.CInt(-i3));
								break;
							case 3:
								var f1 = c3[2];
								d = hxsl.TExprDef.TConst(hxsl.Const.CFloat(-f1));
								break;
							default:
								d = hxsl.TExprDef.TUnop(op1,e10);
							}
							break;
						default:
							d = hxsl.TExprDef.TUnop(op1,e10);
						}
						break;
					default:
						d = hxsl.TExprDef.TUnop(op1,e10);
					}
				}
				break;
			case 3:
				var e14 = _g[2];
				var e15 = this.evalExpr(e14);
				{
					var _g123 = e15.e;
					switch(_g123[1]) {
					case 0:
						d = e15.e;
						break;
					default:
						d = hxsl.TExprDef.TParenthesis(e15);
					}
				}
				break;
			case 10:
				var eelse = _g[4];
				var eif = _g[3];
				var econd = _g[2];
				var e16 = this.evalExpr(econd);
				{
					var _g124 = e16.e;
					switch(_g124[1]) {
					case 0:
						switch(_g124[2][1]) {
						case 1:
							var b43 = _g124[2][2];
							if(b43) return this.evalExpr(eif); else if(eelse == null) return { e : hxsl.TExprDef.TConst(hxsl.Const.CNull), t : hxsl.Type.TVoid, p : e16.p}; else return this.evalExpr(eelse);
							break;
						default:
							d = hxsl.TExprDef.TIf(e16,this.evalExpr(eif),eelse == null?null:this.evalExpr(eelse));
						}
						break;
					default:
						d = hxsl.TExprDef.TIf(e16,this.evalExpr(eif),eelse == null?null:this.evalExpr(eelse));
					}
				}
				break;
			case 15:
				d = hxsl.TExprDef.TBreak;
				break;
			case 14:
				d = hxsl.TExprDef.TContinue;
				break;
			case 11:
				d = hxsl.TExprDef.TDiscard;
				break;
			case 13:
				var loop = _g[4];
				var it = _g[3];
				var v5 = _g[2];
				var v21 = this.mapVar(v5);
				var it1 = this.evalExpr(it);
				var e17;
				{
					var _g125 = it1.e;
					switch(_g125[1]) {
					case 5:
						switch(_g125[2][1]) {
						case 21:
							switch(_g125[3].e[1]) {
							case 0:
								switch(_g125[3].e[2][1]) {
								case 2:
									switch(_g125[4].e[1]) {
									case 0:
										switch(_g125[4].e[2][1]) {
										case 2:
											var start = _g125[3].e[2][2];
											var len = _g125[4].e[2][2];
											var out1 = [];
											var old2 = this.varMap;
											var _g223 = start;
											while(_g223 < len) {
												var i4 = _g223++;
												var _g34 = new haxe.ds.ObjectMap();
												var $it0 = old2.keys();
												while( $it0.hasNext() ) {
													var c4 = $it0.next();
													var value = old2.h[c4.__id__];
													_g34.set(c4,value);
												}
												this.varMap = _g34;
												var value1 = hxsl.TExprDef.TConst(hxsl.Const.CInt(i4));
												this.constants.set(v5,value1);
												out1.push(this.evalExpr(loop));
											}
											this.varMap = old2;
											this.constants.remove(v5);
											e17 = hxsl.TExprDef.TBlock(out1);
											break;
										default:
											e17 = hxsl.TExprDef.TFor(v21,it1,this.evalExpr(loop));
										}
										break;
									default:
										e17 = hxsl.TExprDef.TFor(v21,it1,this.evalExpr(loop));
									}
									break;
								default:
									e17 = hxsl.TExprDef.TFor(v21,it1,this.evalExpr(loop));
								}
								break;
							default:
								e17 = hxsl.TExprDef.TFor(v21,it1,this.evalExpr(loop));
							}
							break;
						default:
							e17 = hxsl.TExprDef.TFor(v21,it1,this.evalExpr(loop));
						}
						break;
					default:
						e17 = hxsl.TExprDef.TFor(v21,it1,this.evalExpr(loop));
					}
				}
				this.varMap.remove(v5);
				d = e17;
				break;
			case 17:
				var el3 = _g[2];
				d = hxsl.TExprDef.TArrayDecl((function($this) {
					var $r;
					var _g126 = [];
					{
						var _g224 = 0;
						while(_g224 < el3.length) {
							var e18 = el3[_g224];
							++_g224;
							_g126.push($this.evalExpr(e18));
						}
					}
					$r = _g126;
					return $r;
				}(this)));
				break;
			}
		}
		return { e : d, t : e.t, p : e.p};
	}
	,__class__: hxsl.Eval
};
hxsl._Flatten = {};
hxsl._Flatten.Alloc = function(g,t,pos,size) {
	this.g = g;
	this.t = t;
	this.pos = pos;
	this.size = size;
};
$hxClasses["hxsl._Flatten.Alloc"] = hxsl._Flatten.Alloc;
hxsl._Flatten.Alloc.__name__ = true;
hxsl._Flatten.Alloc.prototype = {
	__class__: hxsl._Flatten.Alloc
};
hxsl.Flatten = function() {
};
$hxClasses["hxsl.Flatten"] = hxsl.Flatten;
hxsl.Flatten.__name__ = true;
hxsl.Flatten.prototype = {
	flatten: function(s,kind) {
		this.globals = [];
		this.params = [];
		this.outVars = [];
		this.varMap = new haxe.ds.ObjectMap();
		this.allocData = new haxe.ds.ObjectMap();
		var _g = 0;
		var _g1 = s.vars;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			this.gatherVar(v);
		}
		var prefix;
		switch(kind[1]) {
		case 0:
			prefix = "vertex";
			break;
		case 1:
			prefix = "fragment";
			break;
		default:
			throw "assert";
		}
		this.pack(prefix + "Globals",hxsl.VarKind.Global,this.globals,hxsl.VecType.VFloat);
		this.pack(prefix + "Params",hxsl.VarKind.Param,this.params,hxsl.VecType.VFloat);
		this.packTextures(prefix + "Textures",this.globals.concat(this.params),hxsl.Type.TSampler2D);
		return { name : s.name, vars : this.outVars, funs : (function($this) {
			var $r;
			var _g2 = [];
			{
				var _g11 = 0;
				var _g21 = s.funs;
				while(_g11 < _g21.length) {
					var f = _g21[_g11];
					++_g11;
					_g2.push({ kind : f.kind, ret : f.ret, args : f.args, ref : f.ref, expr : $this.mapExpr(f.expr)});
				}
			}
			$r = _g2;
			return $r;
		}(this))};
	}
	,mapExpr: function(e) {
		{
			var _g = e.e;
			switch(_g[1]) {
			case 1:
				var v = _g[2];
				var a = this.varMap.h[v.__id__];
				if(a == null) e = e; else e = this.access(a,v.type,e.p);
				break;
			default:
				e = hxsl.Tools.map(e,$bind(this,this.mapExpr));
			}
		}
		return this.optimize(e);
	}
	,access: function(a,t,pos) {
		switch(t[1]) {
		case 7:
			return { e : hxsl.TExprDef.TCall({ e : hxsl.TExprDef.TGlobal(hxsl.TGlobal.Mat4), t : hxsl.Type.TFun([]), p : pos},[{ e : hxsl.TExprDef.TArray({ e : hxsl.TExprDef.TVar(a.g), t : a.g.type, p : pos},{ e : hxsl.TExprDef.TConst(hxsl.Const.CInt(a.pos >> 2)), t : hxsl.Type.TInt, p : pos}), t : hxsl.Type.TVec(4,a.t), p : pos},{ e : hxsl.TExprDef.TArray({ e : hxsl.TExprDef.TVar(a.g), t : a.g.type, p : pos},{ e : hxsl.TExprDef.TConst(hxsl.Const.CInt((a.pos >> 2) + 1)), t : hxsl.Type.TInt, p : pos}), t : hxsl.Type.TVec(4,a.t), p : pos},{ e : hxsl.TExprDef.TArray({ e : hxsl.TExprDef.TVar(a.g), t : a.g.type, p : pos},{ e : hxsl.TExprDef.TConst(hxsl.Const.CInt((a.pos >> 2) + 2)), t : hxsl.Type.TInt, p : pos}), t : hxsl.Type.TVec(4,a.t), p : pos},{ e : hxsl.TExprDef.TArray({ e : hxsl.TExprDef.TVar(a.g), t : a.g.type, p : pos},{ e : hxsl.TExprDef.TConst(hxsl.Const.CInt((a.pos >> 2) + 3)), t : hxsl.Type.TInt, p : pos}), t : hxsl.Type.TVec(4,a.t), p : pos}]), t : hxsl.Type.TMat4, p : pos};
		case 8:
			return { e : hxsl.TExprDef.TCall({ e : hxsl.TExprDef.TGlobal(hxsl.TGlobal.Mat3x4), t : hxsl.Type.TFun([]), p : pos},[{ e : hxsl.TExprDef.TArray({ e : hxsl.TExprDef.TVar(a.g), t : a.g.type, p : pos},{ e : hxsl.TExprDef.TConst(hxsl.Const.CInt(a.pos >> 2)), t : hxsl.Type.TInt, p : pos}), t : hxsl.Type.TVec(4,a.t), p : pos},{ e : hxsl.TExprDef.TArray({ e : hxsl.TExprDef.TVar(a.g), t : a.g.type, p : pos},{ e : hxsl.TExprDef.TConst(hxsl.Const.CInt((a.pos >> 2) + 1)), t : hxsl.Type.TInt, p : pos}), t : hxsl.Type.TVec(4,a.t), p : pos},{ e : hxsl.TExprDef.TArray({ e : hxsl.TExprDef.TVar(a.g), t : a.g.type, p : pos},{ e : hxsl.TExprDef.TConst(hxsl.Const.CInt((a.pos >> 2) + 2)), t : hxsl.Type.TInt, p : pos}), t : hxsl.Type.TVec(4,a.t), p : pos}]), t : hxsl.Type.TMat3x4, p : pos};
		case 13:
			switch(t[3][1]) {
			case 0:
				var t1 = t[2];
				var len = t[3][2];
				var stride = a.size / len | 0;
				return { e : hxsl.TExprDef.TArrayDecl((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						while(_g1 < len) {
							var i = _g1++;
							_g.push($this.access(new hxsl._Flatten.Alloc(a.g,a.t,a.pos + stride * i,stride),t1,pos));
						}
					}
					$r = _g;
					return $r;
				}(this))), t : t1, p : pos};
			default:
				var size = this.varSize(t,a.t);
				if(size <= 4) {
					var k = { e : hxsl.TExprDef.TArray({ e : hxsl.TExprDef.TVar(a.g), t : a.g.type, p : pos},{ e : hxsl.TExprDef.TConst(hxsl.Const.CInt(a.pos >> 2)), t : hxsl.Type.TInt, p : pos}), t : hxsl.Type.TVec(4,a.t), p : pos};
					if(size == 4) {
						if((a.pos & 3) != 0) throw "assert";
						return k;
					} else {
						var sw = [];
						var _g2 = 0;
						while(_g2 < size) {
							var i1 = _g2++;
							sw.push(hxsl.Tools.SWIZ[i1 + (a.pos & 3)]);
						}
						return { e : hxsl.TExprDef.TSwiz(k,sw), t : t, p : pos};
					}
				}
				return hxsl.Error.t("Access not supported for " + hxsl.Tools.toString(t),null);
			}
			break;
		case 9:case 10:
			return { e : hxsl.TExprDef.TArray({ e : hxsl.TExprDef.TVar(a.g), t : a.g.type, p : pos},{ e : hxsl.TExprDef.TConst(hxsl.Const.CInt((a.pos >> 2) + a.pos)), t : hxsl.Type.TInt, p : pos}), t : hxsl.Type.TVec(4,a.t), p : pos};
		default:
			var size = this.varSize(t,a.t);
			if(size <= 4) {
				var k = { e : hxsl.TExprDef.TArray({ e : hxsl.TExprDef.TVar(a.g), t : a.g.type, p : pos},{ e : hxsl.TExprDef.TConst(hxsl.Const.CInt(a.pos >> 2)), t : hxsl.Type.TInt, p : pos}), t : hxsl.Type.TVec(4,a.t), p : pos};
				if(size == 4) {
					if((a.pos & 3) != 0) throw "assert";
					return k;
				} else {
					var sw = [];
					var _g2 = 0;
					while(_g2 < size) {
						var i1 = _g2++;
						sw.push(hxsl.Tools.SWIZ[i1 + (a.pos & 3)]);
					}
					return { e : hxsl.TExprDef.TSwiz(k,sw), t : t, p : pos};
				}
			}
			return hxsl.Error.t("Access not supported for " + hxsl.Tools.toString(t),null);
		}
	}
	,optimize: function(e) {
		{
			var _g = e.e;
			switch(_g[1]) {
			case 8:
				switch(_g[2].e[1]) {
				case 2:
					switch(_g[2].e[2][1]) {
					case 42:
						switch(_g[3].length) {
						case 1:
							switch(_g[3][0].e[1]) {
							case 8:
								switch(_g[3][0].e[2].e[1]) {
								case 2:
									switch(_g[3][0].e[2].e[2][1]) {
									case 41:
										var args = _g[3][0].e[3];
										var rem = 0;
										var size = 0;
										while(size < 4) {
											var t = args[args.length - 1 - rem].t;
											size += this.varSize(t,hxsl.VecType.VFloat);
											rem++;
										}
										if(size == 4) {
											var _g1 = 0;
											while(_g1 < rem) {
												var i = _g1++;
												args.pop();
											}
											var emat;
											{
												var _g11 = e.e;
												switch(_g11[1]) {
												case 8:
													var e1 = _g11[2];
													emat = e1;
													break;
												default:
													throw "assert";
												}
											}
											return { e : hxsl.TExprDef.TCall(emat,args), t : e.t, p : e.p};
										}
										break;
									default:
									}
									break;
								default:
								}
								break;
							default:
							}
							break;
						default:
						}
						break;
					default:
					}
					break;
				default:
				}
				break;
			case 16:
				switch(_g[2].e[1]) {
				case 17:
					switch(_g[3].e[1]) {
					case 0:
						switch(_g[3].e[2][1]) {
						case 2:
							var el = _g[2].e[2];
							var i1 = _g[3].e[2][2];
							if(i1 >= 0 && i1 < el.length) return el[i1]; else {
							}
							break;
						default:
						}
						break;
					default:
					}
					break;
				default:
				}
				break;
			default:
			}
		}
		return e;
	}
	,packTextures: function(name,vars,t) {
		var alloc = new Array();
		var g = { id : hxsl.Tools.allocVarId(), name : name, type : t, kind : hxsl.VarKind.Param};
		var _g = 0;
		while(_g < vars.length) {
			var v = vars[_g];
			++_g;
			if(v.type != t) continue;
			var a = new hxsl._Flatten.Alloc(g,null,alloc.length,1);
			a.v = v;
			this.varMap.set(v,a);
			alloc.push(a);
		}
		g.type = hxsl.Type.TArray(t,hxsl.SizeDecl.SConst(alloc.length));
		if(alloc.length > 0) {
			this.outVars.push(g);
			this.allocData.set(g,alloc);
		}
		return g;
	}
	,pack: function(name,kind,vars,t) {
		var alloc = new Array();
		var apos = 0;
		var g = { id : hxsl.Tools.allocVarId(), name : name, type : hxsl.Type.TVec(0,t), kind : kind};
		var _g = 0;
		while(_g < vars.length) {
			var v = vars[_g];
			++_g;
			var _g1 = v.type;
			switch(_g1[1]) {
			case 9:case 10:
				continue;
				break;
			default:
			}
			var size = this.varSize(v.type,t);
			var best = null;
			var _g11 = 0;
			while(_g11 < alloc.length) {
				var a = alloc[_g11];
				++_g11;
				if(a.v == null && a.size >= size && (best == null || best.size > a.size)) best = a;
			}
			if(best != null) {
				var free = best.size - size;
				if(free > 0) {
					var i = Lambda.indexOf(alloc,best);
					var a1 = new hxsl._Flatten.Alloc(g,t,best.pos + size,free);
					alloc.splice(i + 1,0,a1);
					best.size = size;
				}
				best.v = v;
				this.varMap.set(v,best);
			} else {
				var a2 = new hxsl._Flatten.Alloc(g,t,apos,size);
				apos += size;
				a2.v = v;
				this.varMap.set(v,a2);
				alloc.push(a2);
				var pad = (4 - size % 4) % 4;
				if(pad > 0) {
					var a3 = new hxsl._Flatten.Alloc(g,t,apos,pad);
					apos += pad;
					alloc.push(a3);
				}
			}
		}
		g.type = hxsl.Type.TArray(hxsl.Type.TVec(4,t),hxsl.SizeDecl.SConst(apos >> 2));
		if(apos > 0) {
			this.outVars.push(g);
			this.allocData.set(g,alloc);
		}
		return g;
	}
	,varSize: function(v,t) {
		switch(v[1]) {
		case 3:
			if(t == hxsl.VecType.VFloat) return 1; else throw hxsl.Tools.toString(v) + " size unknown for type " + Std.string(t);
			break;
		case 5:
			var t2 = v[3];
			var n = v[2];
			if(t == t2) return n; else throw hxsl.Tools.toString(v) + " size unknown for type " + Std.string(t);
			break;
		case 7:
			if(t == hxsl.VecType.VFloat) return 16; else throw hxsl.Tools.toString(v) + " size unknown for type " + Std.string(t);
			break;
		case 8:
			if(t == hxsl.VecType.VFloat) return 12; else throw hxsl.Tools.toString(v) + " size unknown for type " + Std.string(t);
			break;
		case 6:
			if(t == hxsl.VecType.VFloat) return 9; else throw hxsl.Tools.toString(v) + " size unknown for type " + Std.string(t);
			break;
		case 13:
			switch(v[3][1]) {
			case 0:
				var at = v[2];
				var n1 = v[3][2];
				var s = this.varSize(at,t);
				s += 4 - (s & 3) & 3;
				return s * n1;
			default:
				throw hxsl.Tools.toString(v) + " size unknown for type " + Std.string(t);
			}
			break;
		default:
			throw hxsl.Tools.toString(v) + " size unknown for type " + Std.string(t);
		}
	}
	,gatherVar: function(v) {
		{
			var _g = v.type;
			switch(_g[1]) {
			case 11:
				var vl = _g[2];
				var _g1 = 0;
				while(_g1 < vl.length) {
					var v1 = vl[_g1];
					++_g1;
					this.gatherVar(v1);
				}
				break;
			default:
				var _g11 = v.kind;
				switch(_g11[1]) {
				case 0:
					if(hxsl.Tools.hasQualifier(v,hxsl.VarQualifier.PerObject)) this.params.push(v); else this.globals.push(v);
					break;
				case 2:
					this.params.push(v);
					break;
				default:
					this.outVars.push(v);
				}
			}
		}
	}
	,__class__: hxsl.Flatten
};
hxsl.Globals = function() {
	this.map = new haxe.ds.IntMap();
};
$hxClasses["hxsl.Globals"] = hxsl.Globals;
hxsl.Globals.__name__ = true;
hxsl.Globals.allocID = function(path) {
	var id = hxsl.Globals.MAP.get(path);
	if(id == null) {
		id = hxsl.Globals.ALL.length;
		hxsl.Globals.ALL.push(path);
		hxsl.Globals.MAP.set(path,id);
	}
	return id;
};
hxsl.Globals.prototype = {
	__class__: hxsl.Globals
};
hxsl.GlslOut = function() {
	var _g = new haxe.ds.StringMap();
	_g.set("input",true);
	_g.set("output",true);
	_g.set("discard",true);
	this.keywords = _g;
	this.globalNames = new haxe.ds.EnumValueMap();
	var _g1 = 0;
	var _g2 = Type.allEnums(hxsl.TGlobal);
	while(_g1 < _g2.length) {
		var g = _g2[_g1];
		++_g1;
		var n = "" + Std.string(g);
		n = n.charAt(0).toLowerCase() + HxOverrides.substr(n,1,null);
		this.globalNames.set(g,n);
	}
};
$hxClasses["hxsl.GlslOut"] = hxsl.GlslOut;
hxsl.GlslOut.__name__ = true;
hxsl.GlslOut.toGlsl = function(s) {
	return new hxsl.GlslOut().run(s);
};
hxsl.GlslOut.prototype = {
	add: function(v) {
		this.buf.b += Std.string(v);
	}
	,ident: function(i) {
		this.add(this.keywords.exists(i)?"_" + i:i);
	}
	,addType: function(t) {
		switch(t[1]) {
		case 0:
			this.buf.b += "void";
			break;
		case 1:
			this.buf.b += "int";
			break;
		case 2:
			this.buf.b += "bool";
			break;
		case 3:
			this.buf.b += "float";
			break;
		case 4:
			this.buf.b += "string";
			break;
		case 5:
			var k = t[3];
			var size = t[2];
			switch(k[1]) {
			case 1:
				break;
			case 0:
				this.buf.b += "i";
				break;
			case 2:
				this.buf.b += "b";
				break;
			}
			this.buf.b += "vec";
			this.buf.b += "" + size;
			break;
		case 6:
			this.buf.b += "mat3";
			break;
		case 7:
			this.buf.b += "mat4";
			break;
		case 8:
			this.buf.b += "mat3x4";
			break;
		case 9:
			this.buf.b += "sampler2D";
			break;
		case 10:
			this.buf.b += "samplerCube";
			break;
		case 11:
			var vl = t[2];
			this.buf.b += "struct { ";
			var _g = 0;
			while(_g < vl.length) {
				var v = vl[_g];
				++_g;
				this.addVar(v);
				this.buf.b += ";";
			}
			this.buf.b += " }";
			break;
		case 12:
			this.buf.b += "function";
			break;
		case 13:
			var size1 = t[3];
			var t1 = t[2];
			this.addType(t1);
			this.buf.b += "[";
			switch(size1[1]) {
			case 1:
				var v1 = size1[2];
				this.ident(v1.name);
				break;
			case 0:
				var v2 = size1[2];
				this.buf.b += "" + v2;
				break;
			}
			this.buf.b += "]";
			break;
		}
	}
	,addVar: function(v) {
		{
			var _g = v.type;
			switch(_g[1]) {
			case 13:
				var size = _g[3];
				var t = _g[2];
				var old = v.type;
				v.type = t;
				this.addVar(v);
				v.type = old;
				this.buf.b += "[";
				switch(size[1]) {
				case 1:
					var v1 = size[2];
					this.ident(v1.name);
					break;
				case 0:
					var n = size[2];
					this.buf.b += "" + n;
					break;
				}
				this.buf.b += "]";
				break;
			default:
				this.addType(v.type);
				this.buf.b += " ";
				this.ident(v.name);
			}
		}
	}
	,addValue: function(e,tabs) {
		{
			var _g = e.e;
			switch(_g[1]) {
			case 4:
				var el = _g[2];
				var name = "val" + this.exprValues.length;
				var tmp = this.buf;
				this.buf = new StringBuf();
				this.addType(e.t);
				this.buf.b += " ";
				this.buf.b += name;
				this.buf.b += "(void)";
				var el2 = el.slice();
				var last = el2[el2.length - 1];
				el2[el2.length - 1] = { e : hxsl.TExprDef.TReturn(last), t : e.t, p : last.p};
				var e2 = { t : hxsl.Type.TVoid, e : hxsl.TExprDef.TBlock(el2), p : e.p};
				this.addExpr(e2,"");
				this.exprValues.push(this.buf.b);
				this.buf = tmp;
				this.buf.b += name;
				this.buf.b += "()";
				break;
			default:
				this.addExpr(e,tabs);
			}
		}
	}
	,addExpr: function(e,tabs) {
		{
			var _g = e.e;
			switch(_g[1]) {
			case 0:
				var c = _g[2];
				switch(c[1]) {
				case 2:
					var v = c[2];
					this.buf.b += "" + v;
					break;
				case 3:
					var f = c[2];
					var str = "" + f;
					this.buf.b += str;
					if(str.indexOf(".") == -1 && str.indexOf("e") == -1) this.buf.b += ".";
					break;
				case 4:
					var v1 = c[2];
					this.buf.b += "\"" + v1 + "\"";
					break;
				case 0:
					this.buf.b += "null";
					break;
				case 1:
					var b = c[2];
					this.buf.b += "" + b;
					break;
				}
				break;
			case 1:
				var v2 = _g[2];
				this.ident(v2.name);
				break;
			case 2:
				var g = _g[2];
				this.add(this.globalNames.get(g));
				break;
			case 3:
				var e1 = _g[2];
				this.buf.b += "(";
				this.addValue(e1,tabs);
				this.buf.b += ")";
				break;
			case 4:
				var el = _g[2];
				this.buf.b += "{\n";
				var t2 = tabs + "\t";
				var _g1 = 0;
				while(_g1 < el.length) {
					var e2 = el[_g1];
					++_g1;
					this.buf.b += t2;
					this.addExpr(e2,t2);
					this.buf.b += ";\n";
				}
				this.buf.b += tabs;
				this.buf.b += "}";
				break;
			case 5:
				var e21 = _g[4];
				var e11 = _g[3];
				var op = _g[2];
				{
					var _g11 = e11.t;
					var _g2 = e21.t;
					switch(op[1]) {
					case 1:
						switch(_g11[1]) {
						case 5:
							switch(_g11[2]) {
							case 3:
								switch(_g11[3][1]) {
								case 1:
									switch(_g2[1]) {
									case 8:
										this.buf.b += "m3x4mult(";
										this.addValue(e11,tabs);
										this.buf.b += ",";
										this.addValue(e21,tabs);
										this.buf.b += ")";
										break;
									default:
										this.addValue(e11,tabs);
										this.buf.b += " ";
										this.add(hxsl.Printer.opStr(op));
										this.buf.b += " ";
										this.addValue(e21,tabs);
									}
									break;
								default:
									this.addValue(e11,tabs);
									this.buf.b += " ";
									this.add(hxsl.Printer.opStr(op));
									this.buf.b += " ";
									this.addValue(e21,tabs);
								}
								break;
							default:
								this.addValue(e11,tabs);
								this.buf.b += " ";
								this.add(hxsl.Printer.opStr(op));
								this.buf.b += " ";
								this.addValue(e21,tabs);
							}
							break;
						default:
							this.addValue(e11,tabs);
							this.buf.b += " ";
							this.add(hxsl.Printer.opStr(op));
							this.buf.b += " ";
							this.addValue(e21,tabs);
						}
						break;
					default:
						this.addValue(e11,tabs);
						this.buf.b += " ";
						this.add(hxsl.Printer.opStr(op));
						this.buf.b += " ";
						this.addValue(e21,tabs);
					}
				}
				break;
			case 6:
				var e12 = _g[3];
				var op1 = _g[2];
				this.buf.b += Std.string((function($this) {
					var $r;
					switch(op1[1]) {
					case 2:
						$r = "!";
						break;
					case 3:
						$r = "-";
						break;
					case 0:
						$r = "++";
						break;
					case 1:
						$r = "--";
						break;
					case 4:
						$r = "~";
						break;
					}
					return $r;
				}(this)));
				this.addValue(e12,tabs);
				break;
			case 7:
				var init = _g[3];
				var v3 = _g[2];
				this.locals.push(v3);
				if(init != null) {
					this.ident(v3.name);
					this.buf.b += " = ";
					this.addValue(init,tabs);
				} else this.buf.b += "/*var*/";
				break;
			case 8:
				var args = _g[3];
				var e3 = _g[2];
				this.addValue(e3,tabs);
				this.buf.b += "(";
				var first = true;
				var _g12 = 0;
				while(_g12 < args.length) {
					var e4 = args[_g12];
					++_g12;
					if(first) first = false; else this.buf.b += ", ";
					this.addValue(e4,tabs);
				}
				this.buf.b += ")";
				break;
			case 9:
				var regs = _g[3];
				var e5 = _g[2];
				this.addValue(e5,tabs);
				this.buf.b += ".";
				var _g13 = 0;
				while(_g13 < regs.length) {
					var r = regs[_g13];
					++_g13;
					this.buf.b += Std.string((function($this) {
						var $r;
						switch(r[1]) {
						case 0:
							$r = "x";
							break;
						case 1:
							$r = "y";
							break;
						case 2:
							$r = "z";
							break;
						case 3:
							$r = "w";
							break;
						}
						return $r;
					}(this)));
				}
				break;
			case 10:
				var eelse = _g[4];
				var eif = _g[3];
				var econd = _g[2];
				this.buf.b += "if( ";
				this.addValue(econd,tabs);
				this.buf.b += ") ";
				this.addExpr(eif,tabs);
				if(eelse != null) {
					this.buf.b += " else ";
					this.addExpr(eelse,tabs);
				}
				break;
			case 11:
				this.buf.b += "discard";
				break;
			case 12:
				var e6 = _g[2];
				if(e6 == null) this.buf.b += "return"; else {
					this.buf.b += "return ";
					this.addValue(e6,tabs);
				}
				break;
			case 13:
				var loop = _g[4];
				var it = _g[3];
				var v4 = _g[2];
				this.buf.b += "for(...)";
				break;
			case 14:
				this.buf.b += "continue";
				break;
			case 15:
				this.buf.b += "break";
				break;
			case 16:
				var index = _g[3];
				var e7 = _g[2];
				this.addValue(e7,tabs);
				this.buf.b += "[";
				this.addValue(index,tabs);
				this.buf.b += "]";
				break;
			case 17:
				var el1 = _g[2];
				this.buf.b += "[";
				var first1 = true;
				var _g14 = 0;
				while(_g14 < el1.length) {
					var e8 = el1[_g14];
					++_g14;
					if(first1) first1 = false; else this.buf.b += ", ";
					this.addValue(e8,tabs);
				}
				this.buf.b += "]";
				break;
			}
		}
	}
	,run: function(s) {
		this.locals = [];
		this.buf = new StringBuf();
		this.exprValues = [];
		this.buf.b += "precision mediump float;\n";
		this.buf.b += "struct mat3x4 { vec4 a; vec4 b; vec4 c; };\n";
		this.buf.b += "vec3 m3x4mult( vec3 v, mat3x4 m) { vec4 ve = vec4(v,1.0); return vec3(dot(m.a,ve),dot(m.b,ve),dot(m.c,ve)); }\n";
		if(s.funs.length != 1) throw "assert";
		var f = s.funs[0];
		var _g = 0;
		var _g1 = s.vars;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			var _g2 = v.kind;
			switch(_g2[1]) {
			case 2:case 0:
				this.buf.b += "uniform ";
				break;
			case 1:
				this.buf.b += "attribute ";
				break;
			case 3:
				this.buf.b += "varying ";
				break;
			case 6:
				continue;
				break;
			case 5:
				var _g3 = f.kind;
				switch(_g3[1]) {
				case 0:
					v.name = "gl_Position";
					break;
				case 1:
					v.name = "gl_FragColor";
					break;
				default:
					throw "assert";
				}
				continue;
				break;
			case 4:
				break;
			}
			this.addVar(v);
			this.buf.b += ";\n";
		}
		this.buf.b += "\n";
		var tmp = this.buf;
		this.buf = new StringBuf();
		this.buf.b += "void main(void) ";
		this.addExpr(f.expr,"");
		this.exprValues.push(this.buf.b);
		this.buf = tmp;
		var _g4 = 0;
		var _g11 = this.locals;
		while(_g4 < _g11.length) {
			var v1 = _g11[_g4];
			++_g4;
			this.addVar(v1);
			this.buf.b += ";\n";
		}
		this.buf.b += "\n";
		var _g5 = 0;
		var _g12 = this.exprValues;
		while(_g5 < _g12.length) {
			var e = _g12[_g5];
			++_g5;
			this.buf.b += e;
			this.buf.b += "\n\n";
		}
		var content = this.buf.b;
		this.buf = null;
		return content;
	}
	,__class__: hxsl.GlslOut
};
hxsl._Linker = {};
hxsl._Linker.AllocatedVar = function() {
};
$hxClasses["hxsl._Linker.AllocatedVar"] = hxsl._Linker.AllocatedVar;
hxsl._Linker.AllocatedVar.__name__ = true;
hxsl._Linker.AllocatedVar.prototype = {
	__class__: hxsl._Linker.AllocatedVar
};
hxsl._Linker.ShaderInfos = function(n,v) {
	this.name = n;
	this.vertex = v;
	this.processed = new haxe.ds.IntMap();
	this.usedFunctions = [];
	this.read = new haxe.ds.IntMap();
	this.write = new haxe.ds.IntMap();
};
$hxClasses["hxsl._Linker.ShaderInfos"] = hxsl._Linker.ShaderInfos;
hxsl._Linker.ShaderInfos.__name__ = true;
hxsl._Linker.ShaderInfos.prototype = {
	__class__: hxsl._Linker.ShaderInfos
};
hxsl.Linker = function() {
};
$hxClasses["hxsl.Linker"] = hxsl.Linker;
hxsl.Linker.__name__ = true;
hxsl.Linker.prototype = {
	error: function(msg,p) {
		return hxsl.Error.t(msg,p);
	}
	,mergeVar: function(path,v,v2,p) {
		var _g = v.kind;
		switch(_g[1]) {
		case 0:case 1:case 3:case 4:case 5:
			break;
		case 2:case 6:
			throw "assert";
			break;
		}
		if(v.kind != v2.kind && v.kind != hxsl.VarKind.Local && v2.kind != hxsl.VarKind.Local) this.error("'" + path + "' kind does not match : " + Std.string(v.kind) + " should be " + Std.string(v2.kind),p);
		{
			var _g1 = v.type;
			var _g11 = v2.type;
			switch(_g1[1]) {
			case 11:
				switch(_g11[1]) {
				case 11:
					var fl1 = _g1[2];
					var fl2 = _g11[2];
					var _g2 = 0;
					while(_g2 < fl1.length) {
						var f1 = fl1[_g2];
						++_g2;
						var ft = null;
						var _g3 = 0;
						while(_g3 < fl2.length) {
							var f2 = fl2[_g3];
							++_g3;
							if(f1.name == f2.name) {
								ft = f2;
								break;
							}
						}
						if(ft == null) fl2.push(f1); else this.mergeVar(path + "." + ft.name,f1,ft,p);
					}
					break;
				default:
					if(!Type.enumEq(v.type,v2.type)) this.error("'" + path + "' type does not match : " + hxsl.Tools.toString(v.type) + " should be " + hxsl.Tools.toString(v2.type),p);
				}
				break;
			default:
				if(!Type.enumEq(v.type,v2.type)) this.error("'" + path + "' type does not match : " + hxsl.Tools.toString(v.type) + " should be " + hxsl.Tools.toString(v2.type),p);
			}
		}
	}
	,allocVar: function(v,p,path,parent) {
		if(v.parent != null && parent == null) {
			parent = this.allocVar(v.parent,p).v;
			var p1 = parent;
			path = p1.name;
			p1 = p1.parent;
			while(p1 != null) {
				path = p1.name + "." + path;
				p1 = p1.parent;
			}
		}
		var key;
		if(path == null) key = v.name; else key = path + "." + v.name;
		if(v.qualifiers != null) {
			var _g = 0;
			var _g1 = v.qualifiers;
			while(_g < _g1.length) {
				var q = _g1[_g];
				++_g;
				switch(q[1]) {
				case 4:
					var n = q[2];
					key = n;
					break;
				default:
				}
			}
		}
		var v2 = this.varMap.get(key);
		var vname = v.name;
		if(v2 != null) {
			var _g2 = 0;
			var _g11 = v2.merged;
			while(_g2 < _g11.length) {
				var vm = _g11[_g2];
				++_g2;
				if(vm == v) return v2;
			}
			if(v.kind == hxsl.VarKind.Param || v.kind == hxsl.VarKind.Function || v.kind == hxsl.VarKind.Var && hxsl.Tools.hasQualifier(v,hxsl.VarQualifier.Private)) {
				var k = 2;
				while(true) {
					var a = this.varMap.get(key + k);
					if(a == null) break;
					var _g3 = 0;
					var _g12 = a.merged;
					while(_g3 < _g12.length) {
						var vm1 = _g12[_g3];
						++_g3;
						if(vm1 == v) return a;
					}
					k++;
				}
				vname += k;
				key += k;
			} else {
				this.mergeVar(key,v,v2.v,p);
				v2.merged.push(v);
				this.varIdMap.set(v.id,v2.id);
				return v2;
			}
		}
		var vid = this.allVars.length;
		var v21 = { id : vid, name : vname, type : v.type, kind : v.kind, qualifiers : v.qualifiers, parent : parent};
		var a1 = new hxsl._Linker.AllocatedVar();
		a1.v = v21;
		a1.merged = [v];
		a1.path = key;
		a1.id = vid;
		if(parent == null) a1.parent = null; else a1.parent = this.allocVar(parent,p);
		a1.instanceIndex = this.curInstance;
		this.allVars.push(a1);
		this.varMap.set(key,a1);
		{
			var _g4 = v21.type;
			switch(_g4[1]) {
			case 11:
				var vl = _g4[2];
				v21.type = hxsl.Type.TStruct((function($this) {
					var $r;
					var _g13 = [];
					{
						var _g21 = 0;
						while(_g21 < vl.length) {
							var v1 = vl[_g21];
							++_g21;
							_g13.push($this.allocVar(v1,p,key,v21).v);
						}
					}
					$r = _g13;
					return $r;
				}(this)));
				break;
			default:
			}
		}
		return a1;
	}
	,mapExprVar: function(e) {
		{
			var _g = e.e;
			switch(_g[1]) {
			case 1:
				var v = _g[2];
				if(!this.locals.exists(v.id)) {
					var v1 = this.allocVar(v,e.p);
					if(this.curShader != null) {
						this.curShader.read.set(v1.id,v1);
						if(v1.v.kind == hxsl.VarKind.Var) this.curShader.vertex = false;
					}
					return { e : hxsl.TExprDef.TVar(v1.v), t : v1.v.type, p : e.p};
				} else {
				}
				break;
			case 5:
				var e2 = _g[4];
				var e1 = _g[3];
				var op = _g[2];
				{
					var _g1 = e1.e;
					switch(op[1]) {
					case 4:
						switch(_g1[1]) {
						case 1:
							var v2 = _g1[2];
							if(!this.locals.exists(v2.id)) {
								var v3 = this.allocVar(v2,e1.p);
								if(this.curShader != null) this.curShader.write.set(v3.id,v3);
								if(op == haxe.macro.Binop.OpAssign && (function($this) {
									var $r;
									var _g2 = e1.e;
									$r = (function($this) {
										var $r;
										switch(_g2[1]) {
										case 1:
											$r = true;
											break;
										default:
											$r = false;
										}
										return $r;
									}($this));
									return $r;
								}(this))) {
									var eout = { e : hxsl.TExprDef.TVar(v3.v), t : e1.t, p : e1.p};
									return { e : hxsl.TExprDef.TBinop(haxe.macro.Binop.OpAssign,eout,this.mapExprVar(e2)), t : e.t, p : e.p};
								}
							} else {
							}
							break;
						case 9:
							switch(_g1[2].e[1]) {
							case 1:
								var v2 = _g1[2].e[2];
								if(!this.locals.exists(v2.id)) {
									var v3 = this.allocVar(v2,e1.p);
									if(this.curShader != null) this.curShader.write.set(v3.id,v3);
									if(op == haxe.macro.Binop.OpAssign && (function($this) {
										var $r;
										var _g2 = e1.e;
										$r = (function($this) {
											var $r;
											switch(_g2[1]) {
											case 1:
												$r = true;
												break;
											default:
												$r = false;
											}
											return $r;
										}($this));
										return $r;
									}(this))) {
										var eout = { e : hxsl.TExprDef.TVar(v3.v), t : e1.t, p : e1.p};
										return { e : hxsl.TExprDef.TBinop(haxe.macro.Binop.OpAssign,eout,this.mapExprVar(e2)), t : e.t, p : e.p};
									}
								} else {
								}
								break;
							default:
							}
							break;
						default:
						}
						break;
					case 20:
						switch(_g1[1]) {
						case 1:
							var v2 = _g1[2];
							if(!this.locals.exists(v2.id)) {
								var v3 = this.allocVar(v2,e1.p);
								if(this.curShader != null) this.curShader.write.set(v3.id,v3);
								if(op == haxe.macro.Binop.OpAssign && (function($this) {
									var $r;
									var _g2 = e1.e;
									$r = (function($this) {
										var $r;
										switch(_g2[1]) {
										case 1:
											$r = true;
											break;
										default:
											$r = false;
										}
										return $r;
									}($this));
									return $r;
								}(this))) {
									var eout = { e : hxsl.TExprDef.TVar(v3.v), t : e1.t, p : e1.p};
									return { e : hxsl.TExprDef.TBinop(haxe.macro.Binop.OpAssign,eout,this.mapExprVar(e2)), t : e.t, p : e.p};
								}
							} else {
							}
							break;
						case 9:
							switch(_g1[2].e[1]) {
							case 1:
								var v2 = _g1[2].e[2];
								if(!this.locals.exists(v2.id)) {
									var v3 = this.allocVar(v2,e1.p);
									if(this.curShader != null) this.curShader.write.set(v3.id,v3);
									if(op == haxe.macro.Binop.OpAssign && (function($this) {
										var $r;
										var _g2 = e1.e;
										$r = (function($this) {
											var $r;
											switch(_g2[1]) {
											case 1:
												$r = true;
												break;
											default:
												$r = false;
											}
											return $r;
										}($this));
										return $r;
									}(this))) {
										var eout = { e : hxsl.TExprDef.TVar(v3.v), t : e1.t, p : e1.p};
										return { e : hxsl.TExprDef.TBinop(haxe.macro.Binop.OpAssign,eout,this.mapExprVar(e2)), t : e.t, p : e.p};
									}
								} else {
								}
								break;
							default:
							}
							break;
						default:
						}
						break;
					default:
					}
				}
				break;
			case 11:
				if(this.curShader != null) {
					this.curShader.vertex = false;
					this.curShader.hasDiscard = true;
				}
				break;
			case 7:
				var v4 = _g[2];
				this.locals.set(v4.id,true);
				break;
			default:
			}
		}
		return hxsl.Tools.map(e,$bind(this,this.mapExprVar));
	}
	,addShader: function(name,vertex,e,p) {
		var s = new hxsl._Linker.ShaderInfos(name,vertex);
		this.curShader = s;
		s.priority = p;
		s.body = this.mapExprVar(e);
		this.shaders.push(s);
		this.curShader = null;
		return s;
	}
	,sortByPriorityDesc: function(s1,s2) {
		return s2.priority - s1.priority;
	}
	,buildDependency: function(parent,v,isWritten) {
		var found = !isWritten;
		var _g = 0;
		var _g1 = this.shaders;
		while(_g < _g1.length) {
			var s = _g1[_g];
			++_g;
			if(parent == s) {
				found = true;
				continue;
			} else if(!found) continue;
			if(!s.write.exists(v.id)) continue;
			parent.deps.set(s,true);
			this.initDependencies(s);
			if(!s.read.exists(v.id)) return;
		}
		if(v.v.kind == hxsl.VarKind.Var) this.error("Variable " + v.path + " required by " + parent.name + " is missing initializer",null);
	}
	,initDependencies: function(s) {
		if(s.deps != null) return;
		s.deps = new haxe.ds.ObjectMap();
		var $it0 = s.read.iterator();
		while( $it0.hasNext() ) {
			var r = $it0.next();
			this.buildDependency(s,r,s.write.exists(r.id));
		}
		if(s.vertex == null) {
			var $it1 = s.deps.keys();
			while( $it1.hasNext() ) {
				var d = $it1.next();
				if(d.vertex == false) {
					s.vertex = false;
					break;
				}
			}
		}
	}
	,collect: function(cur,out,vertex) {
		if(cur.onStack) this.error("Loop in shader dependencies (" + cur.name + ")",null);
		if(cur.marked == vertex) return;
		cur.marked = vertex;
		cur.onStack = true;
		var $it0 = cur.deps.keys();
		while( $it0.hasNext() ) {
			var d = $it0.next();
			this.collect(d,out,vertex);
		}
		if(cur.vertex == null) cur.vertex = vertex;
		if(cur.vertex == vertex) out.push(cur);
		cur.onStack = false;
	}
	,uniqueLocals: function(expr,locals) {
		{
			var _g = expr.e;
			switch(_g[1]) {
			case 7:
				var v = _g[2];
				if(locals.exists(v.name)) {
					var k = 2;
					while(locals.exists(v.name + k)) k++;
					v.name += k;
				}
				locals.set(v.name,true);
				break;
			case 4:
				var el = _g[2];
				var locals1;
				var _g1 = new haxe.ds.StringMap();
				var $it0 = locals.keys();
				while( $it0.hasNext() ) {
					var k1 = $it0.next();
					_g1.set(k1,true);
				}
				locals1 = _g1;
				var _g2 = 0;
				while(_g2 < el.length) {
					var e = el[_g2];
					++_g2;
					this.uniqueLocals(e,locals1);
				}
				break;
			default:
				hxsl.Tools.iter(expr,(function(f,a2) {
					return function(a1) {
						return f(a1,a2);
					};
				})($bind(this,this.uniqueLocals),locals));
			}
		}
	}
	,link: function(shadersData,outVars) {
		var _g1 = this;
		this.varMap = new haxe.ds.StringMap();
		this.varIdMap = new haxe.ds.IntMap();
		this.allVars = new Array();
		this.shaders = [];
		this.locals = new haxe.ds.IntMap();
		var dupShaders = new haxe.ds.ObjectMap();
		var _g = [];
		var _g11 = 0;
		while(_g11 < shadersData.length) {
			var s = shadersData[_g11];
			++_g11;
			_g.push((function($this) {
				var $r;
				var s1 = s;
				var sreal = s1;
				if(dupShaders.h.__keys__[s1.__id__] != null) s1 = hxsl.Clone.shaderData(s1);
				dupShaders.set(s1,sreal);
				$r = s1;
				return $r;
			}(this)));
		}
		shadersData = _g;
		this.curInstance = 0;
		var _g12 = 0;
		while(_g12 < shadersData.length) {
			var s2 = shadersData[_g12];
			++_g12;
			var _g2 = 0;
			var _g3 = s2.vars;
			while(_g2 < _g3.length) {
				var v = _g3[_g2];
				++_g2;
				this.allocVar(v,null);
			}
			var _g21 = 0;
			var _g31 = s2.funs;
			while(_g21 < _g31.length) {
				var f = _g31[_g21];
				++_g21;
				var v1 = this.allocVar(f.ref,f.expr.p);
				v1.kind = f.kind;
			}
			this.curInstance++;
		}
		var priority = 0;
		var _g13 = 0;
		while(_g13 < shadersData.length) {
			var s3 = shadersData[_g13];
			++_g13;
			var _g22 = 0;
			var _g32 = s3.funs;
			while(_g22 < _g32.length) {
				var f1 = _g32[_g22];
				++_g22;
				var v2 = this.allocVar(f1.ref,f1.expr.p);
				if(v2.kind == null) throw "assert";
				var _g4 = v2.kind;
				switch(_g4[1]) {
				case 0:case 1:
					this.addShader(s3.name + "." + (v2.kind == hxsl.FunctionKind.Vertex?"vertex":"fragment"),v2.kind == hxsl.FunctionKind.Vertex,f1.expr,priority);
					break;
				case 2:
					{
						var _g5 = f1.expr.e;
						switch(_g5[1]) {
						case 4:
							var el = _g5[2];
							var index = 0;
							var priority1 = -el.length;
							var _g6 = 0;
							while(_g6 < el.length) {
								var e = el[_g6];
								++_g6;
								this.addShader(s3.name + ".__init__" + index++,null,e,priority1++);
							}
							break;
						default:
							this.addShader(s3.name + ".__init__",null,f1.expr,-1);
						}
					}
					break;
				case 3:
					throw "Unexpected helper function in linker " + v2.v.name;
					break;
				}
			}
			priority++;
		}
		this.shaders.sort($bind(this,this.sortByPriorityDesc));
		var entry = new hxsl._Linker.ShaderInfos("<entry>",false);
		entry.deps = new haxe.ds.ObjectMap();
		var _g14 = 0;
		while(_g14 < outVars.length) {
			var outVar = outVars[_g14];
			++_g14;
			var v3 = this.varMap.get(outVar);
			if(v3 == null) throw "Variable not found " + outVar;
			this.buildDependency(entry,v3,false);
		}
		var _g15 = 0;
		var _g23 = this.shaders;
		while(_g15 < _g23.length) {
			var s4 = _g23[_g15];
			++_g15;
			if(s4.hasDiscard) {
				this.initDependencies(s4);
				entry.deps.set(s4,true);
			}
		}
		var v4 = [];
		var f2 = [];
		this.collect(entry,v4,true);
		this.collect(entry,f2,false);
		if(f2.pop() != entry) throw "assert";
		var _g16 = 0;
		var _g24 = this.shaders;
		while(_g16 < _g24.length) {
			var s5 = _g24[_g16];
			++_g16;
			s5.marked = null;
		}
		var _g17 = 0;
		var _g25 = v4.concat(f2);
		while(_g17 < _g25.length) {
			var s6 = _g25[_g17];
			++_g17;
			var $it0 = s6.deps.keys();
			while( $it0.hasNext() ) {
				var d = $it0.next();
				if(d.marked == null) this.error(d.name + " needed by " + s6.name + " is unreachable",null);
			}
			s6.marked = true;
		}
		var outVars1 = [];
		var varMap = new haxe.ds.IntMap();
		var addVar;
		var addVar1 = null;
		addVar1 = function(v5) {
			if(varMap.exists(v5.id)) return;
			varMap.set(v5.id,true);
			if(v5.v.parent != null) addVar1(v5.parent); else outVars1.push(v5.v);
		};
		addVar = addVar1;
		var _g18 = 0;
		var _g26 = v4.concat(f2);
		while(_g18 < _g26.length) {
			var s7 = _g26[_g18];
			++_g18;
			var $it1 = s7.read.iterator();
			while( $it1.hasNext() ) {
				var v6 = $it1.next();
				addVar(v6);
			}
			var $it2 = s7.write.iterator();
			while( $it2.hasNext() ) {
				var v7 = $it2.next();
				addVar(v7);
			}
		}
		var cleanVar;
		var cleanVar1 = null;
		cleanVar1 = function(v8) {
			{
				var _g19 = v8.type;
				switch(_g19[1]) {
				case 11:
					var vl = _g19[2];
					if(v8.kind != hxsl.VarKind.Input) {
						var vout = [];
						var _g27 = 0;
						while(_g27 < vl.length) {
							var v9 = vl[_g27];
							++_g27;
							if(varMap.exists(v9.id)) {
								cleanVar1(v9);
								vout.push(v9);
							}
						}
						v8.type = hxsl.Type.TStruct(vout);
					} else {
					}
					break;
				default:
				}
			}
		};
		cleanVar = cleanVar1;
		var _g110 = 0;
		while(_g110 < outVars1.length) {
			var v10 = outVars1[_g110];
			++_g110;
			cleanVar(v10);
		}
		var build = function(kind,name,a) {
			var v11 = { id : hxsl.Tools.allocVarId(), name : name, type : hxsl.Type.TFun([{ ret : hxsl.Type.TVoid, args : []}]), kind : hxsl.VarKind.Function};
			outVars1.push(v11);
			var exprs = [];
			var _g111 = 0;
			while(_g111 < a.length) {
				var s8 = a[_g111];
				++_g111;
				{
					var _g28 = s8.body.e;
					switch(_g28[1]) {
					case 4:
						var el1 = _g28[2];
						var _g33 = 0;
						while(_g33 < el1.length) {
							var e1 = el1[_g33];
							++_g33;
							exprs.push(e1);
						}
						break;
					default:
						exprs.push(s8.body);
					}
				}
			}
			var expr = { e : hxsl.TExprDef.TBlock(exprs), t : hxsl.Type.TVoid, p : exprs.length == 0?null:exprs[0].p};
			_g1.uniqueLocals(expr,new haxe.ds.StringMap());
			return { kind : kind, ref : v11, ret : hxsl.Type.TVoid, args : [], expr : expr};
		};
		var funs = [build(hxsl.FunctionKind.Vertex,"vertex",v4),build(hxsl.FunctionKind.Fragment,"fragment",f2)];
		var $it3 = dupShaders.keys();
		while( $it3.hasNext() ) {
			var s9 = $it3.next();
			var sreal1 = dupShaders.h[s9.__id__];
			if(s9 == sreal1) continue;
			var _g29 = 0;
			var _g112 = s9.vars.length;
			while(_g29 < _g112) {
				var i = _g29++;
				this.allocVar(s9.vars[i],null).merged.unshift(sreal1.vars[i]);
			}
		}
		return { name : "out", vars : outVars1, funs : funs};
	}
	,__class__: hxsl.Linker
};
hxsl.Printer = function(varId) {
	if(varId == null) varId = false;
	this.varId = varId;
};
$hxClasses["hxsl.Printer"] = hxsl.Printer;
hxsl.Printer.__name__ = true;
hxsl.Printer.opStr = function(op) {
	switch(op[1]) {
	case 0:
		return "+";
	case 3:
		return "-";
	case 1:
		return "*";
	case 2:
		return "/";
	case 19:
		return "%";
	case 5:
		return "==";
	case 6:
		return "!=";
	case 7:
		return ">";
	case 9:
		return "<";
	case 8:
		return ">=";
	case 10:
		return "<=";
	case 13:
		return "^";
	case 12:
		return "|";
	case 11:
		return "&";
	case 16:
		return "<<";
	case 17:
		return ">>";
	case 18:
		return ">>>";
	case 14:
		return "&&";
	case 15:
		return "||";
	case 4:
		return "=";
	case 20:
		var op1 = op[2];
		return hxsl.Printer.opStr(op1) + "=";
	case 22:
		return "=>";
	case 21:
		return "...";
	}
};
hxsl.Printer.prototype = {
	add: function(v) {
		this.buffer.b += Std.string(v);
	}
	,exprString: function(e) {
		this.buffer = new StringBuf();
		this.addExpr(e,"");
		return this.buffer.b;
	}
	,addVar: function(v,defKind,tabs) {
		if(tabs == null) tabs = "";
		if(v.qualifiers != null) {
			var _g = 0;
			var _g1 = v.qualifiers;
			while(_g < _g1.length) {
				var q = _g1[_g];
				++_g;
				this.buffer.b += "@" + (function($this) {
					var $r;
					switch(q[1]) {
					case 0:
						$r = (function($this) {
							var $r;
							var max = q[2];
							$r = "const" + (max == null?"":"(" + max + ")");
							return $r;
						}($this));
						break;
					case 1:
						$r = "private";
						break;
					case 2:
						$r = "nullable";
						break;
					case 3:
						$r = "perObject";
						break;
					case 4:
						$r = (function($this) {
							var $r;
							var n = q[2];
							$r = "name('" + n + "')";
							return $r;
						}($this));
						break;
					}
					return $r;
				}(this)) + " ";
			}
		}
		if(v.kind != defKind) {
			var _g2 = v.kind;
			switch(_g2[1]) {
			case 4:
				this.buffer.b += "@local ";
				break;
			case 0:
				this.buffer.b += "@global ";
				break;
			case 3:
				this.buffer.b += "@var ";
				break;
			case 2:
				this.buffer.b += "@param ";
				break;
			case 1:
				this.buffer.b += "@input ";
				break;
			case 6:
				this.buffer.b += "@function ";
				break;
			case 5:
				this.buffer.b += "@output ";
				break;
			}
		}
		this.buffer.b += "var " + v.name + (this.varId?"@" + v.id:"") + " : ";
		{
			var _g3 = v.type;
			switch(_g3[1]) {
			case 11:
				var vl = _g3[2];
				this.buffer.b += "{";
				var first = true;
				var _g11 = 0;
				while(_g11 < vl.length) {
					var v1 = vl[_g11];
					++_g11;
					if(first) first = false; else this.buffer.b += ", ";
					this.addVar(v1,v1.kind);
				}
				this.buffer.b += "}";
				break;
			default:
				this.add(hxsl.Tools.toString(v.type));
			}
		}
	}
	,addVarName: function(v) {
		if(v.parent != null) {
			this.addVarName(v.parent);
			this.buffer.b += ".";
		}
		this.buffer.b += v.name;
		if(this.varId) this.buffer.b += "@" + v.id;
	}
	,addExpr: function(e,tabs) {
		{
			var _g = e.e;
			switch(_g[1]) {
			case 1:
				var v = _g[2];
				this.addVarName(v);
				break;
			case 7:
				var init = _g[3];
				var v1 = _g[2];
				this.addVar(v1,hxsl.VarKind.Local,tabs);
				if(init != null) {
					this.buffer.b += " = ";
					this.addExpr(init,tabs);
				}
				break;
			case 9:
				var regs = _g[3];
				var e1 = _g[2];
				this.addExpr(e1,tabs);
				this.buffer.b += ".";
				var _g1 = 0;
				while(_g1 < regs.length) {
					var r = regs[_g1];
					++_g1;
					this.add(Std.string(r).toLowerCase());
				}
				break;
			case 12:
				var e2 = _g[2];
				this.buffer.b += "return";
				if(e2 != null) {
					this.buffer.b += " ";
					this.addExpr(e2,tabs);
				}
				break;
			case 10:
				var eelse = _g[4];
				var eif = _g[3];
				var cond = _g[2];
				this.buffer.b += "if( ";
				this.addExpr(cond,tabs);
				this.buffer.b += " ) ";
				this.addExpr(eif,tabs);
				if(eelse != null) {
					this.buffer.b += " else ";
					this.addExpr(eelse,tabs);
				}
				break;
			case 2:
				var g = _g[2];
				this.add(hxsl.Tools2.toString(g));
				break;
			case 8:
				var el = _g[3];
				var e3 = _g[2];
				this.addExpr(e3,tabs);
				this.buffer.b += "(";
				var first = true;
				var _g11 = 0;
				while(_g11 < el.length) {
					var e4 = el[_g11];
					++_g11;
					if(first) first = false; else this.buffer.b += ", ";
					this.addExpr(e4,tabs);
				}
				this.buffer.b += ")";
				break;
			case 13:
				var loop = _g[4];
				var it = _g[3];
				var v2 = _g[2];
				this.buffer.b += "for( " + v2.name + " in ";
				this.addExpr(it,tabs);
				this.buffer.b += ") ";
				this.addExpr(loop,tabs);
				break;
			case 14:
				this.buffer.b += "continue";
				break;
			case 15:
				this.buffer.b += "break";
				break;
			case 11:
				this.buffer.b += "discard";
				break;
			case 4:
				var el1 = _g[2];
				this.buffer.b += "{";
				tabs += "\t";
				var _g12 = 0;
				while(_g12 < el1.length) {
					var e5 = el1[_g12];
					++_g12;
					this.buffer.b += "\n" + tabs;
					this.addExpr(e5,tabs);
					this.buffer.b += ";";
				}
				tabs = HxOverrides.substr(tabs,1,null);
				if(el1.length > 0) this.buffer.b += "\n" + tabs;
				this.buffer.b += "}";
				break;
			case 6:
				var e6 = _g[3];
				var op = _g[2];
				this.buffer.b += Std.string((function($this) {
					var $r;
					switch(op[1]) {
					case 2:
						$r = "!";
						break;
					case 3:
						$r = "-";
						break;
					case 4:
						$r = "~";
						break;
					case 0:
						$r = "++";
						break;
					case 1:
						$r = "--";
						break;
					}
					return $r;
				}(this)));
				this.addExpr(e6,tabs);
				break;
			case 5:
				var e21 = _g[4];
				var e11 = _g[3];
				var op1 = _g[2];
				this.addExpr(e11,tabs);
				this.add(" " + hxsl.Printer.opStr(op1) + " ");
				this.addExpr(e21,tabs);
				break;
			case 16:
				var e22 = _g[3];
				var e12 = _g[2];
				this.addExpr(e12,tabs);
				this.buffer.b += "[";
				this.addExpr(e22,tabs);
				this.buffer.b += "]";
				break;
			case 3:
				var e7 = _g[2];
				this.buffer.b += "(";
				this.addExpr(e7,tabs);
				this.buffer.b += ")";
				break;
			case 0:
				var c = _g[2];
				this.buffer.b += Std.string((function($this) {
					var $r;
					switch(c[1]) {
					case 0:
						$r = "null";
						break;
					case 1:
						$r = (function($this) {
							var $r;
							var b = c[2];
							$r = b;
							return $r;
						}($this));
						break;
					case 2:
						$r = (function($this) {
							var $r;
							var i = c[2];
							$r = i;
							return $r;
						}($this));
						break;
					case 3:
						$r = (function($this) {
							var $r;
							var f = c[2];
							$r = f;
							return $r;
						}($this));
						break;
					case 4:
						$r = (function($this) {
							var $r;
							var s = c[2];
							$r = "\"" + s + "\"";
							return $r;
						}($this));
						break;
					}
					return $r;
				}(this)));
				break;
			case 17:
				var el2 = _g[2];
				this.buffer.b += "[";
				var first1 = true;
				var _g13 = 0;
				while(_g13 < el2.length) {
					var e8 = el2[_g13];
					++_g13;
					if(first1) first1 = false; else this.buffer.b += ", ";
					this.addExpr(e8,tabs);
				}
				this.buffer.b += "]";
				break;
			}
		}
	}
	,__class__: hxsl.Printer
};
hxsl.AllocParam = function(pos,instance,index,type) {
	this.pos = pos;
	this.instance = instance;
	this.index = index;
	this.type = type;
};
$hxClasses["hxsl.AllocParam"] = hxsl.AllocParam;
hxsl.AllocParam.__name__ = true;
hxsl.AllocParam.prototype = {
	__class__: hxsl.AllocParam
};
hxsl.AllocGlobal = function(pos,path,type) {
	this.pos = pos;
	this.path = path;
	this.gid = hxsl.Globals.allocID(path);
	this.type = type;
};
$hxClasses["hxsl.AllocGlobal"] = hxsl.AllocGlobal;
hxsl.AllocGlobal.__name__ = true;
hxsl.AllocGlobal.prototype = {
	__class__: hxsl.AllocGlobal
};
hxsl.RuntimeShaderData = function() {
};
$hxClasses["hxsl.RuntimeShaderData"] = hxsl.RuntimeShaderData;
hxsl.RuntimeShaderData.__name__ = true;
hxsl.RuntimeShaderData.prototype = {
	__class__: hxsl.RuntimeShaderData
};
hxsl.RuntimeShader = function() {
	this.id = hxsl.RuntimeShader.UID++;
};
$hxClasses["hxsl.RuntimeShader"] = hxsl.RuntimeShader;
hxsl.RuntimeShader.__name__ = true;
hxsl.RuntimeShader.prototype = {
	__class__: hxsl.RuntimeShader
};
hxsl.ShaderInstance = function(shader) {
	this.id = hxsl.Tools.allocVarId();
	this.shader = shader;
	this.params = new haxe.ds.IntMap();
};
$hxClasses["hxsl.ShaderInstance"] = hxsl.ShaderInstance;
hxsl.ShaderInstance.__name__ = true;
hxsl.ShaderInstance.prototype = {
	__class__: hxsl.ShaderInstance
};
hxsl.ShaderGlobal = function(v,gid) {
	this.v = v;
	this.globalId = gid;
};
$hxClasses["hxsl.ShaderGlobal"] = hxsl.ShaderGlobal;
hxsl.ShaderGlobal.__name__ = true;
hxsl.ShaderGlobal.prototype = {
	__class__: hxsl.ShaderGlobal
};
hxsl.ShaderConst = function(v,pos,bits) {
	this.v = v;
	this.pos = pos;
	this.bits = bits;
};
$hxClasses["hxsl.ShaderConst"] = hxsl.ShaderConst;
hxsl.ShaderConst.__name__ = true;
hxsl.ShaderConst.prototype = {
	__class__: hxsl.ShaderConst
};
hxsl.SharedShader = function(src) {
	this.instanceCache = new haxe.ds.IntMap();
	this.data = haxe.Unserializer.run(src);
	this.consts = [];
	this.globals = [];
	var _g = 0;
	var _g1 = this.data.vars;
	while(_g < _g1.length) {
		var v = _g1[_g];
		++_g;
		this.browseVar(v);
	}
	if(this.consts.length == 0) {
		var i = new hxsl.ShaderInstance(this.data);
		this.paramsCount = 0;
		var _g2 = 0;
		var _g11 = this.data.vars;
		while(_g2 < _g11.length) {
			var v1 = _g11[_g2];
			++_g2;
			this.addSelfParam(i,v1);
		}
		this.instanceCache.set(0,i);
	}
};
$hxClasses["hxsl.SharedShader"] = hxsl.SharedShader;
hxsl.SharedShader.__name__ = true;
hxsl.SharedShader.prototype = {
	getInstance: function(constBits) {
		var i = this.instanceCache.get(constBits);
		if(i != null) return i;
		var $eval = new hxsl.Eval();
		var _g = 0;
		var _g1 = this.consts;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			$eval.setConstant(c.v,(function($this) {
				var $r;
				var _g2 = c.v.type;
				$r = (function($this) {
					var $r;
					switch(_g2[1]) {
					case 2:
						$r = hxsl.Const.CBool((constBits >>> c.pos & 1) != 0);
						break;
					case 1:
						$r = hxsl.Const.CInt(constBits >>> c.pos & (1 << c.bits) - 1);
						break;
					default:
						$r = (function($this) {
							var $r;
							throw "assert";
							return $r;
						}($this));
					}
					return $r;
				}($this));
				return $r;
			}(this)));
		}
		i = new hxsl.ShaderInstance($eval["eval"](this.data));
		this.paramsCount = 0;
		var _g3 = 0;
		var _g11 = this.data.vars;
		while(_g3 < _g11.length) {
			var v = _g11[_g3];
			++_g3;
			this.addParam($eval,i,v);
		}
		this.instanceCache.set(constBits,i);
		return i;
	}
	,addSelfParam: function(i,v) {
		{
			var _g = v.type;
			switch(_g[1]) {
			case 11:
				var vl = _g[2];
				var _g1 = 0;
				while(_g1 < vl.length) {
					var v1 = vl[_g1];
					++_g1;
					this.addSelfParam(i,v1);
				}
				break;
			default:
				if(v.kind == hxsl.VarKind.Param) {
					i.params.set(v.id,this.paramsCount);
					this.paramsCount++;
				}
			}
		}
	}
	,addParam: function($eval,i,v) {
		{
			var _g = v.type;
			switch(_g[1]) {
			case 11:
				var vl = _g[2];
				var _g1 = 0;
				while(_g1 < vl.length) {
					var v1 = vl[_g1];
					++_g1;
					this.addParam($eval,i,v1);
				}
				break;
			default:
				if(v.kind == hxsl.VarKind.Param) {
					i.params.set($eval.varMap.h[v.__id__].id,this.paramsCount);
					this.paramsCount++;
				}
			}
		}
	}
	,browseVar: function(v,path) {
		v.id = hxsl.Tools.allocVarId();
		if(path == null) path = hxsl.Tools.getName(v); else path += "." + v.name;
		{
			var _g = v.type;
			switch(_g[1]) {
			case 11:
				var vl = _g[2];
				var _g1 = 0;
				while(_g1 < vl.length) {
					var vs = vl[_g1];
					++_g1;
					this.browseVar(vs,path);
				}
				break;
			default:
				var globalId = 0;
				if(v.kind == hxsl.VarKind.Global) {
					globalId = hxsl.Globals.allocID(path);
					this.globals.push(new hxsl.ShaderGlobal(v,globalId));
				}
				if(!hxsl.Tools.isConst(v)) return;
				var bits = hxsl.Tools.getConstBits(v);
				if(bits > 0) {
					var prev = this.consts[this.consts.length - 1];
					var pos;
					if(prev == null) pos = 0; else pos = prev.pos + prev.bits;
					var c = new hxsl.ShaderConst(v,pos,bits);
					c.globalId = globalId;
					this.consts.push(c);
				}
			}
		}
	}
	,__class__: hxsl.SharedShader
};
hxsl.Splitter = function() {
};
$hxClasses["hxsl.Splitter"] = hxsl.Splitter;
hxsl.Splitter.__name__ = true;
hxsl.Splitter.prototype = {
	split: function(s) {
		var vfun = null;
		var vvars = new haxe.ds.IntMap();
		var ffun = null;
		var fvars = new haxe.ds.IntMap();
		this.varNames = new haxe.ds.StringMap();
		var _g = 0;
		var _g1 = s.funs;
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			var _g2 = f.kind;
			switch(_g2[1]) {
			case 0:
				this.vars = vvars;
				vfun = f;
				this.checkExpr(f.expr);
				break;
			case 1:
				this.vars = fvars;
				ffun = f;
				this.checkExpr(f.expr);
				break;
			default:
				throw "assert";
			}
		}
		this.varMap = new haxe.ds.ObjectMap();
		var $it0 = vvars.iterator();
		while( $it0.hasNext() ) {
			var inf = $it0.next();
			var v = inf.v;
			var _g3 = v.kind;
			switch(_g3[1]) {
			case 3:case 4:
				if(fvars.exists(v.id)) v.kind = hxsl.VarKind.Var; else v.kind = hxsl.VarKind.Local;
				break;
			default:
			}
			var _g4 = v.kind;
			switch(_g4[1]) {
			case 3:case 5:
				if(inf.read > 0 || inf.write > 1) {
					var nv = { id : hxsl.Tools.allocVarId(), name : v.name, kind : v.kind, type : v.type};
					this.vars = vvars;
					var ninf = this.get(nv);
					v.kind = hxsl.VarKind.Local;
					var p = vfun.expr.p;
					this.addExpr(vfun,{ e : hxsl.TExprDef.TBinop(haxe.macro.Binop.OpAssign,{ e : hxsl.TExprDef.TVar(nv), t : nv.type, p : p},{ e : hxsl.TExprDef.TVar(v), t : v.type, p : p}), t : nv.type, p : p});
					if(nv.kind == hxsl.VarKind.Var) {
						var old = fvars.get(v.id);
						this.varMap.set(v,nv);
						fvars.remove(v.id);
						fvars.set(nv.id,{ v : nv, read : old.read, write : old.write, local : false});
					}
				}
				break;
			default:
			}
		}
		var finits = [];
		var $it1 = fvars.iterator();
		while( $it1.hasNext() ) {
			var inf1 = $it1.next();
			var v1 = inf1.v;
			var _g5 = v1.kind;
			switch(_g5[1]) {
			case 1:
				var nv1 = { id : hxsl.Tools.allocVarId(), name : v1.name, kind : hxsl.VarKind.Var, type : v1.type};
				this.uniqueName(nv1);
				var i = vvars.get(v1.id);
				if(i == null) {
					i = { local : false, v : v1, read : 0, write : 0};
					vvars.set(v1.id,i);
				}
				i.read++;
				vvars.set(nv1.id,{ local : false, v : nv1, read : 0, write : 1});
				fvars.set(nv1.id,{ local : false, v : nv1, read : 1, write : 0});
				this.addExpr(vfun,{ e : hxsl.TExprDef.TBinop(haxe.macro.Binop.OpAssign,{ e : hxsl.TExprDef.TVar(nv1), t : v1.type, p : vfun.expr.p},{ e : hxsl.TExprDef.TVar(v1), t : v1.type, p : vfun.expr.p}), t : v1.type, p : vfun.expr.p});
				this.varMap.set(v1,nv1);
				inf1.local = true;
				break;
			case 3:
				if(inf1.write > 0) {
					var nv2 = { id : hxsl.Tools.allocVarId(), name : v1.name, kind : hxsl.VarKind.Local, type : v1.type};
					this.uniqueName(nv2);
					finits.push({ e : hxsl.TExprDef.TVarDecl(nv2,{ e : hxsl.TExprDef.TVar(v1), t : v1.type, p : ffun.expr.p}), t : hxsl.Type.TVoid, p : ffun.expr.p});
					this.varMap.set(v1,nv2);
				} else {
				}
				break;
			default:
			}
		}
		var $it2 = this.varMap.keys();
		while( $it2.hasNext() ) {
			var v2 = $it2.next();
			var v21;
			var key = this.varMap.h[v2.__id__];
			v21 = this.varMap.h[key.__id__];
			if(v21 != null) this.varMap.set(v2,v21);
		}
		ffun = { ret : ffun.ret, ref : ffun.ref, kind : ffun.kind, args : ffun.args, expr : this.mapVars(ffun.expr)};
		{
			var _g6 = ffun.expr.e;
			switch(_g6[1]) {
			case 4:
				var el = _g6[2];
				var _g11 = 0;
				while(_g11 < finits.length) {
					var e = finits[_g11];
					++_g11;
					el.unshift(e);
				}
				break;
			default:
				finits.push(ffun.expr);
				ffun.expr = { e : hxsl.TExprDef.TBlock(finits), t : hxsl.Type.TVoid, p : ffun.expr.p};
			}
		}
		return { vertex : { name : "vertex", vars : (function($this) {
			var $r;
			var _g7 = [];
			var $it3 = vvars.iterator();
			while( $it3.hasNext() ) {
				var v3 = $it3.next();
				if(!v3.local) _g7.push(v3.v);
			}
			$r = _g7;
			return $r;
		}(this)), funs : [vfun]}, fragment : { name : "fragment", vars : (function($this) {
			var $r;
			var _g12 = [];
			var $it4 = fvars.iterator();
			while( $it4.hasNext() ) {
				var v4 = $it4.next();
				if(!v4.local) _g12.push(v4.v);
			}
			$r = _g12;
			return $r;
		}(this)), funs : [ffun]}};
	}
	,addExpr: function(f,e) {
		{
			var _g = f.expr.e;
			switch(_g[1]) {
			case 4:
				var el = _g[2];
				el.push(e);
				break;
			default:
				f.expr = { e : hxsl.TExprDef.TBlock([f.expr,e]), t : hxsl.Type.TVoid, p : f.expr.p};
			}
		}
	}
	,mapVars: function(e) {
		{
			var _g = e.e;
			switch(_g[1]) {
			case 1:
				var v = _g[2];
				var v2 = this.varMap.h[v.__id__];
				if(v2 == null) return e; else return { e : hxsl.TExprDef.TVar(v2), t : e.t, p : e.p};
				break;
			default:
				return hxsl.Tools.map(e,$bind(this,this.mapVars));
			}
		}
	}
	,get: function(v) {
		var i = this.vars.get(v.id);
		if(i == null) {
			i = { v : v, read : 0, write : 0, local : false};
			this.vars.set(v.id,i);
			this.uniqueName(v);
		}
		return i;
	}
	,uniqueName: function(v) {
		if(v.kind == hxsl.VarKind.Global) return;
		v.parent = null;
		var n = this.varNames.get(v.name);
		if(n != null && n != v) {
			var k = 2;
			while(this.varNames.exists(v.name + k)) k++;
			v.name += k;
		}
		this.varNames.set(v.name,v);
	}
	,checkExpr: function(e) {
		{
			var _g = e.e;
			switch(_g[1]) {
			case 1:
				var v = _g[2];
				var inf = this.get(v);
				inf.read++;
				break;
			case 5:
				switch(_g[2][1]) {
				case 4:
					switch(_g[3].e[1]) {
					case 1:
						var e1 = _g[4];
						var v1 = _g[3].e[2];
						var inf1 = this.get(v1);
						inf1.write++;
						this.checkExpr(e1);
						break;
					case 9:
						switch(_g[3].e[2].e[1]) {
						case 1:
							var e1 = _g[4];
							var v1 = _g[3].e[2].e[2];
							var inf1 = this.get(v1);
							inf1.write++;
							this.checkExpr(e1);
							break;
						default:
							hxsl.Tools.iter(e,$bind(this,this.checkExpr));
						}
						break;
					default:
						hxsl.Tools.iter(e,$bind(this,this.checkExpr));
					}
					break;
				case 20:
					switch(_g[3].e[1]) {
					case 1:
						var e2 = _g[4];
						var v2 = _g[3].e[2];
						var inf2 = this.get(v2);
						inf2.read++;
						inf2.write++;
						this.checkExpr(e2);
						break;
					case 9:
						switch(_g[3].e[2].e[1]) {
						case 1:
							var e2 = _g[4];
							var v2 = _g[3].e[2].e[2];
							var inf2 = this.get(v2);
							inf2.read++;
							inf2.write++;
							this.checkExpr(e2);
							break;
						default:
							hxsl.Tools.iter(e,$bind(this,this.checkExpr));
						}
						break;
					default:
						hxsl.Tools.iter(e,$bind(this,this.checkExpr));
					}
					break;
				default:
					hxsl.Tools.iter(e,$bind(this,this.checkExpr));
				}
				break;
			case 7:
				var init = _g[3];
				var v3 = _g[2];
				var inf3 = this.get(v3);
				inf3.local = true;
				if(init != null) this.checkExpr(init);
				break;
			default:
				hxsl.Tools.iter(e,$bind(this,this.checkExpr));
			}
		}
	}
	,__class__: hxsl.Splitter
};
var js = {};
js.Boot = function() { };
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = true;
js.Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
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
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
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
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
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
};
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
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js.Boot.__interfLoop(js.Boot.getClass(o),cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js.html = {};
js.html._CanvasElement = {};
js.html._CanvasElement.CanvasUtil = function() { };
$hxClasses["js.html._CanvasElement.CanvasUtil"] = js.html._CanvasElement.CanvasUtil;
js.html._CanvasElement.CanvasUtil.__name__ = true;
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
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = true;
$hxClasses.Array = Array;
Array.__name__ = true;
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
Xml.Element = "element";
Xml.PCData = "pcdata";
Xml.CData = "cdata";
Xml.Comment = "comment";
Xml.DocType = "doctype";
Xml.ProcessingInstruction = "processingInstruction";
Xml.Document = "document";
haxe.Resource.content = [{ name : "R_hero_block_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgYDxco/MP6sQAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAABoElEQVR4nGOIY8ylKWIgXunfI+Ig8pk4ENHKAigixQ7CFkAcDnU7qh3E2ESUBQjjjpBsBz4LcDkZK8JlCBMDfqAERkBwDyH280sbGgMPwGdBonQYujUYdqCrJN6C+U9XARGmOEnOx2cBFNyDIRyGAkXw20Q4DhJtw6A2MTCw81QRUE+8BcBghaD5h2EBdQ8lqgUt16ExSLMAO0CK6vfHg9AYZFoADCJoKIEBWij9enmYgH6SCqJvt+ZCshWQAUdUK+zEsrnghn44nABE1CnsIEYjI2SH57syQhC5RQUSeJA/GYiADIWJuUC0I2suXKoyixGXLqIs+PvuHxDBrUGWer8nB79eEpMp6YBYC5iFECrhYUVNC4BA73IxECFbI+gyBYiA7PZp/3FqIyYVqawVACK0hAQUgaQlqqUiZABMRZd0e+FcPKmIBB9gIngmeLGeiSIfWIXEYhUEplGCyZSEogJr+QNxPhXiYMZNA1xS+JIQMT5AdjiRJSgJhR1y6QYxl1QLWIgMImC69JiWDGGA+FkMEC5hQNAJ8MyFxoWL4EcA1MhE/WHl7z8AAAAASUVORK5CYII"},{ name : "R_hero_lock_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgYFR8lWxoqogAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAABYklEQVR4nGOIY8ylKWIgVcPfI+Ig8pk4ENHKAigizg5iLYA4HOp2VDvw20SCBQjjjpBgB2ELcDkZK8LUzsRADFACIyC4hxD7+aUNjYEVELYgUToM3RoMO9BVEm/B/KergAhTnEjnE7YACu7BEA5DgSK4bCI2DhJtw6A2MTCw81QRpYsYC4DBCkHzD8MC6h5KVAtarkNjkGYBdoAU1e+PB6ExyLQAGETQUAIDtFD69fIwTp1kFETfbs2FZCsgA46oVtiJZXPBDf1wOAGIqFPYQYxGRvgdTrIFyIYiWwORxWMZsZH8990/IIKwH+RPhpBANOOmwbE1i/FoJCuZwuyAgwz1C0BEqQXMQlgUA821ConFo4s0HyhMzEVDhPUQE8MqawWACC0VwWMYPyIzDoCAz4mNKHXE+wATEaOX2HxAnumk5WTkkoeYPEyaBWim09ACNPYQsQAz4ROfFUizAG4i8dkNALdmocV7NXqwAAAAAElFTkSuQmCC"},{ name : "R_slime_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAACACAIAAADlBPxNAAAAB3RJTUUH3QgYDDQX9koetAAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAB40lEQVR4nO2ZTU7DMBCFTS8Dy0qI26DegBuw5CRcp0Xqspyje4RRJAu5Hs+bPxKJsWaRtvF8iV2P30vK4e4lNEoCEpAAAPB8OobfgYWBAtQMAUCHgeagi3CAiKEE4BgGMMkOMqwAFrMqAMw+Z+yKtr3eP7SoH7+Oh+FpJIDqQMGon8YAUfbH/b6GDODY9IC3z8ty8HE+13ADtFldGC3cAA2DnqpYBJfrtQv/hQZm50sFu56txW6IAbvIAOpIQAISsDLA6AwggJ0BCa9wQKwBsZiDTQKcNxyj+zABHPZku3afAUTm4C/8AdV81HX6g2EL8QfdrDr7g98z2c3q7umd7CZaByJnoF/JeHa+FlEYsNJBgA6Dp5YB1JGABCTgnwFin1UEPgyJVdfG7NsDOA+R3RzoAQ7+wEW7kwCpOZgwwgEmdR1rQJa8izmox+I3IF7N6g/m5uCnKf6mVfbi80zeASX5l6G/nVjq/FVtbL2o2+saGiaNw8HXnb7YsSSky5ZURQISkIAEEGFUvgzArnxnALvs5QFDkvMc2Adq8+8PTHtyoHyXZp8wwgFWdc2KO6sBKZxF2LA/KKBF0P1NcYvAqOvh9yKLoBmiJt8Ri8AAhhahjFwCaRHAmqUuR+I9WVpTwzf9b37GtXea8QOsAAAAAElFTkSuQmCC"},{ name : "R_monster_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAACACAIAAADlBPxNAAAAB3RJTUUH3QgYCiMmpprmqgAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAADwklEQVR4nO1ZsY4TQQzdo4A0ETRRmijFFdekjpSW0IXyinQrqugaOvYv8gGIH6BDVCdRXOiQaJHSUqSLohOKglIgCsyaGLMzO/aMlyr7NBpN9m78xvbMrL3O8ouXxjadTgN/zfSTi6JYLpfuP0wmExMBcsxLFCWABsYk3USA80HQ/ATOUUEKAXKgHlxWcUKFKZGgjoMz1RE8yCRcfR5Dfzweod/tdvhwOBz2+30c02A8HnvmazYiLG1yAl9+ZQyDFBMhAZdYB+9c2UQE1wLjn7eVgYsIApfj492PysBEsC0B7iWyp88e4hgGfg9naie7WF53fzfEdTfxJAdo/hCULTArzgcEMghYP+AAwUT8PkBMGcS1+zW4f/wGB/1XHXqI7oVBp9Pp9XrQ4/PbbzWODWsA6yp8wHttNpthD0pAL2pQJXj+5BHqTueeJNb1cQSoARlXlO69fwQNqMetGeaIJqi08NoJfHFxBCTCu/a//q/fslUCfsvDz8ViwQXV+RYJVBrwm8AlIMDzOreFCGjtdMksSrgEYcPy5rmLNpsNja/u30Lb7/f0ZF9CPsDek8xXxy9LcqDyBo3YRa4szqExV8T7wOUIvOtDPhCxvbyhPs4HyhaOUxowUVSzEoSzD4HAnn3IBMbsQyCwZx+yD4zZh4rAkn3k4kGzZh+agzY3ZB+yiXJb9iGbiJCWfWRR+UFC9hFBkJh9ZDonu1BmHyone2n0786UF05E9qExUV4GkFMHStVlAgzlKMmZqwP3iIMGskC0GEBaNfAGwo1pULk7m9eAJwRRGsjbdDQawQHudrv9r6+hrddrGB8OB+zF6TIBhrrfP7zHnxef7lA6sA4GA3G66hxgBA8ZADRvimDyAecg0UrpEQQ5i3n1U86NIJyuNkDAI4n/SxDFkR6+K18JfoJGAneBwB64hwgaCdwFH9gDd5nAGLhjq72uGwjcxet6bgvcBRPl5sBdMBEhOXBHqELHtMBdS5AeuCPCPnChD9xlJ3tpYj96JdZwVIG7aCJqybG7ykT8ez5CGbirCEg65QdRyUHIB1gKoTA0O+1X/iTdB1Sm4BpUwnerBgha72q1oocYbJs0yE8fu8WaQZO7iHMEvufHERT/gpj0JzmOgBCuGagIqH7gSk/PD+gVyG+0So0CfyZ+3nfvy/Dn/QYIAtZTlhA8B217efPl3Qts3qNDz+E/NyW0B01/gni0YdqmgaaRbiJI2UUJra0ftPWDtn6gcHJbP8ja+oEPbf3AtX5bP9Bo0NYPwq2tH5wNQXGm9YNfVTGccYkf2nAAAAAASUVORK5CYII"},{ name : "R_sfx_fire_wav", data : "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"},{ name : "R_sfx_time_wav", data : "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"},{ name : "R_timeBonus_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAABgCAIAAADzQOfPAAAAB3RJTUUH3QgYDhgRJZwEQQAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAADeklEQVR4nO1ZS24UMRA1HIQluxwEcYe+AZoLzCWSbU4wElsER2ANO3ZkkWNk4qjEy+v62p2JFJKxSi23x13P9XXZ05Z3X56V2hsA2F/doaP6eN0IoFi4ryVGCKC+x6uM2M4cgMsuAUsA3reg3ex2/Xnxscmzk4x8uLzkOfLanyDFJwRQ7fcfB16BCdUAdhUQRS2c2blfPbTcAIcfD/rtTzZAfxUacSQfgBkBQMYtd2XzUSOXTSzPqptTERbOS4ZArn5cIbI4ABdgyMjf26MdZCMNAfCXvdOZdpIOs1bGsBihilgbAACxX8nMZZ0WQyOzO3/+Hrj2PyNjAs9UAeF7UY+gb592PXpVAHOTnzrr3umTBaNzV/HsAyBQMfXnr6OQ9Ns6tsMwblUk8zjbgy3MsTnnpszUJct9FIA/sEzZfROJi1QB7cPUuc0nbGClVtIMprnaBkmKjkw6ChA5lbveuf0gSpAj2tgogV3pFMYLKB3PAK8XYNbfX54EkMMmhpMFmst6NmHMpet883Ipq025OJA+n0paeu6Y3nB4B44qRlemoqrYUxEP7tLHeG4bfz/AkrHYZV1hqHrA3UIyG3Qtj+zvPCc0xqAEXGAzsbrcSrsp7sCwerAFtoJZ6LDlAzASl1mKr3SsIzDSqBfZhfPysVKu+FQWqAEsRhLD1lN9AFvnRgaI8pUPACOz0VTZa49peZoajeTD+gBrK3heXB1oaD27SVHdD0lJlPH8ts6StQTL+uStjghqvlp+oSK2wUKZLt8kagArh3LB0wBEHEukOpItjKu9XPVbANw1JlE9ARCJfxqAcQU+C0BJZ4AzwBJEcumdowBRboi2l+0qGkmcLmU7GupA6chFslz7Yf8qand3R+MluzbAq6rgXXXVN16QAJej6rVogxqPLgXLPadF0vG2vDc3zSWY70XK+UD2DILaS93EF3uyldeWWXwHzxfl+6sBgBIjqrSZe6GixLxJHa/qMLaodlNciCO40K6/Hq0ToqSUmQhDePkjgIpbNzLk3l2a9Hs0qLJVx3akfRaWXcj+0bKsi1fl8RrARUrCzepdffWoIk5h0KP9b1Kard2hFv1VlCqsdymHgXLcPBjGgY1hjmRXVyp3TQMczHHejaxo88n+LGVduYbdCKDIJktrpIRGL6Ts+JMAlDFcsBMAuDBT3IcAnkj/P8A9hsE9OmOJXAQAAAAASUVORK5CYII"},{ name : "R_bg1_png", data : "iVBORw0KGgoAAAANSUhEUgAAAPoAAAA4CAIAAABbrnLVAAAAB3RJTUUH3QgZCBoExkaZ/wAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAE4UlEQVR4nO1dS24UMRD1tGYRpCyzC4gIReEaSBwDxI4la7IbDsAFOMBswx0QB+AC3IBlFixggiMPJY/dn3K57HJ3V+kpGk263fV5rip7pLZ5t/mgUKwERlwDhaIalO6KFeGR7le3l+J6KBTlAAw39lP7dO9Vsn21FY0AqNIZY7qzzbePdxamSfm+++o++BrCl6sSa3WzYWpWTvjz4tPTGSV40HMuavNinVZzOc3CwKfrz88aB+gNH8RVqu8BZ7u4JjNCSHdxhfB6Q7xnpDa7E3zbV+sHgtMsttuLTra1wkt3vrF///w62L8zUjtfhkx236tMimPO41/xmafAAMoxZPeVVzkaVpQjZy2Q2g+/H7qzzeH+wX4wK6ty+aLOmo34zFau00T9NVdRrlNEvJ1SpMJ27eI6zBRKd0UR7N6+thBXI4AWRJUTefPjhgU3T/5aSFsTitJd5UQcTfPhRhuaDGLmidcXRVPYv39VAVLWKd0V01C6K5YPt9z0wc7yynNA6c4JoIW4JixWsCTy2CGYyVCoSuhSNVfi7YgGdyTGpXdThcsKN1QT61S3MyOuRGXJsXdox22IH8htuzyDiA/tNaHQXB0af/fyJ6DEc0OBmhU3ajG4qqRIxQ9qNO32pApOuD4TSZ2AFHI4E3ssaYQtzDbead2bsSpX+UCHnKe7FIi/PvVZXJ45mtxYN4XM3EmcGfo+HuTkSsKyA4MS64yhGU/TAZMekoYSz5pDuPny3IGmJ9m61LDSrEsKuhm6jX0TKscRLH7BK4M3uXGiB5HF3+KmR+n45hhF09AUdXQmrevQHXI8oeEu6r064E1wI4sKrgSaM4Lh9V0hfhelOzixxLDNokTRznQvNF3kvmsSJmdyx/qNoH3GNw7rw16HiytWwXBATotlbzfkB6fODeT6MmmqiEdCMPDiykh5IOd2I24ABiwVYLVEqbP9UE5nxnFM42Y7AIN7U/54KRBXPjNI4tFpQQcuT4717kjUVLf3X8EtwRzAPwivlXZWs8OR7uJ6FDKMfVhM+wSP9teUmXvYCkYYcQ1aRi+bMYUu3q0St4WGQhM18Myki1KXbf6AfrrpaWbEXRy4W1al2H34cE5GukGHT2rr63x1eymlxngaGrrRCDqrF0NzVDbe+Itlta0Jdq4nrYJo+cLk6MeSn4amrNTib23rTvLPee6FrHU04XqEYRklXpnR1mfiVT7V0b1KkvUn/LaQUzwJgJcPX1d5tXyvXTnLCcPCksk1XLNVPsn7pZXBuJHg1dQxMXQv8a5tpHU5jDLihJMF+X2LlfWstijcj6YA/2gjd5IKI90rmGb2BZqwdjDpYggYV+QKGVIzRuMGBqcqCNKdcKPZ180clYGke4VElT+mIxkvwwgofWoIIZoJdNczT9i5Pt7+krH4MLko8OaIAOF7Zg73D+s84MoajrwS8x6L0qritZ2LAOvKvorDP3VynWd2wvmVyOtZmigaIDqLDFNQvkpsdx4PiXfUdyf+rE26842DtCIoWXDtdTx0/YWFjQgYy1bNhuaWokH4pXiRwQrs8n/VYoEBP7Kv2BTsWOq+gj+HYzA+yMRPFTdeMYJFpqSA3OUq2MnOzPai0+MLG5e5rDGSxGed69dtH+9aedfHsz1JfGYrFNf/2/Q4oxdsZhSK1qB0VyiI+AfohJtP6lGJNQAAAABJRU5ErkJggg"},{ name : "R_stone_png", data : "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"},{ name : "R_verdana_fnt", data : "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPEZvbnQgc2l6ZT0iMTciIGZhbWlseT0iVmVyZGFuYSIgaGVpZ2h0PSIyOCIgc3R5bGU9IlJlZ3VsYXIiPgogPENoYXIgd2lkdGg9IjkiIG9mZnNldD0iMyA2IiByZWN0PSIxIDIgMyAxNyIgY29kZT0iISIvPgogPENoYXIgd2lkdGg9IjEwIiBvZmZzZXQ9IjEgNSIgcmVjdD0iNSAxIDggNyIgY29kZT0iJnF1b3Q7Ii8+CiA8Q2hhciB3aWR0aD0iMTgiIG9mZnNldD0iMiA2IiByZWN0PSIxNCAyIDE0IDE3IiBjb2RlPSIjIi8+CiA8Q2hhciB3aWR0aD0iMTUiIG9mZnNldD0iMiA1IiByZWN0PSIyOSAxIDEyIDIyIiBjb2RlPSIkIi8+CiA8Q2hhciB3aWR0aD0iMjUiIG9mZnNldD0iMiA2IiByZWN0PSI0MiAyIDIyIDE3IiBjb2RlPSIlIi8+CiA8Q2hhciB3aWR0aD0iMTYiIG9mZnNldD0iMSA2IiByZWN0PSI2NSAyIDE2IDE3IiBjb2RlPSImYW1wOyIvPgogPENoYXIgd2lkdGg9IjYiIG9mZnNldD0iMSA1IiByZWN0PSI4MiAxIDQgNyIgY29kZT0iJyI+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJBIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSLDhiIvPgogPC9DaGFyPgogPENoYXIgd2lkdGg9IjEwIiBvZmZzZXQ9IjIgNSIgcmVjdD0iODcgMSA3IDIzIiBjb2RlPSIoIi8+CiA8Q2hhciB3aWR0aD0iMTAiIG9mZnNldD0iMSA1IiByZWN0PSI5NSAxIDggMjMiIGNvZGU9IikiLz4KIDxDaGFyIHdpZHRoPSIxNCIgb2Zmc2V0PSIyIDUiIHJlY3Q9IjEwNCAxIDExIDEwIiBjb2RlPSIqIi8+CiA8Q2hhciB3aWR0aD0iMTgiIG9mZnNldD0iMiA5IiByZWN0PSIxMTYgNSAxNCAxNCIgY29kZT0iKyIvPgogPENoYXIgd2lkdGg9IjgiIG9mZnNldD0iMSAyMCIgcmVjdD0iMTMxIDE2IDYgOCIgY29kZT0iLCIvPgogPENoYXIgd2lkdGg9IjExIiBvZmZzZXQ9IjIgMTUiIHJlY3Q9IjEzOCAxMSA3IDIiIGNvZGU9Ii0iPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0iSiIvPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0yIiBpZD0iVCIvPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0iWCIvPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0iWSIvPgogPC9DaGFyPgogPENoYXIgd2lkdGg9IjgiIG9mZnNldD0iMyAyMCIgcmVjdD0iMTQ2IDE2IDMgMyIgY29kZT0iLiI+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSIsIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTIiIGlkPSItIi8+CiA8L0NoYXI+CiA8Q2hhciB3aWR0aD0iMTAiIG9mZnNldD0iLTEgNSIgcmVjdD0iMTUwIDEgMTEgMjEiIGNvZGU9Ii8iLz4KIDxDaGFyIHdpZHRoPSIxNSIgb2Zmc2V0PSIyIDYiIHJlY3Q9IjE2MiAyIDEyIDE3IiBjb2RlPSIwIi8+CiA8Q2hhciB3aWR0aD0iMTQiIG9mZnNldD0iMyA2IiByZWN0PSIxNzUgMiA5IDE3IiBjb2RlPSIxIi8+CiA8Q2hhciB3aWR0aD0iMTQiIG9mZnNldD0iMiA2IiByZWN0PSIxODUgMiAxMSAxNyIgY29kZT0iMiIvPgogPENoYXIgd2lkdGg9IjE0IiBvZmZzZXQ9IjEgNiIgcmVjdD0iMTk3IDIgMTIgMTciIGNvZGU9IjMiLz4KIDxDaGFyIHdpZHRoPSIxNSIgb2Zmc2V0PSIxIDYiIHJlY3Q9IjIxMCAyIDEzIDE3IiBjb2RlPSI0Ii8+CiA8Q2hhciB3aWR0aD0iMTUiIG9mZnNldD0iMiA2IiByZWN0PSIyMjQgMiAxMSAxNyIgY29kZT0iNSIvPgogPENoYXIgd2lkdGg9IjE1IiBvZmZzZXQ9IjIgNiIgcmVjdD0iMjM2IDIgMTIgMTciIGNvZGU9IjYiLz4KIDxDaGFyIHdpZHRoPSIxNCIgb2Zmc2V0PSIyIDYiIHJlY3Q9IjI0OSAyIDExIDE3IiBjb2RlPSI3Ii8+CiA8Q2hhciB3aWR0aD0iMTQiIG9mZnNldD0iMSA2IiByZWN0PSIyNjEgMiAxMiAxNyIgY29kZT0iOCIvPgogPENoYXIgd2lkdGg9IjE0IiBvZmZzZXQ9IjEgNiIgcmVjdD0iMjc0IDIgMTIgMTciIGNvZGU9IjkiLz4KIDxDaGFyIHdpZHRoPSIxMCIgb2Zmc2V0PSI0IDEwIiByZWN0PSIyODcgNiAzIDEzIiBjb2RlPSI6Ii8+CiA8Q2hhciB3aWR0aD0iMTAiIG9mZnNldD0iMiAxMCIgcmVjdD0iMjkxIDYgNSAxOCIgY29kZT0iOyIvPgogPENoYXIgd2lkdGg9IjE5IiBvZmZzZXQ9IjMgOSIgcmVjdD0iMjk3IDUgMTMgMTQiIGNvZGU9IiZsdDsiLz4KIDxDaGFyIHdpZHRoPSIxOSIgb2Zmc2V0PSIzIDEyIiByZWN0PSIzMTEgOCAxMyA3IiBjb2RlPSI9Ii8+CiA8Q2hhciB3aWR0aD0iMTkiIG9mZnNldD0iMyA5IiByZWN0PSIzMjUgNSAxMyAxNCIgY29kZT0iPiIvPgogPENoYXIgd2lkdGg9IjEyIiBvZmZzZXQ9IjIgNiIgcmVjdD0iMzM5IDIgMTAgMTciIGNvZGU9Ij8iLz4KIDxDaGFyIHdpZHRoPSIyMyIgb2Zmc2V0PSIyIDYiIHJlY3Q9IjM1MCAyIDE5IDIwIiBjb2RlPSJAIi8+CiA8Q2hhciB3aWR0aD0iMTYiIG9mZnNldD0iMCA2IiByZWN0PSIzNzAgMiAxNiAxNyIgY29kZT0iQSI+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJUIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJWIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJZIi8+CiA8L0NoYXI+CiA8Q2hhciB3aWR0aD0iMTUiIG9mZnNldD0iMiA2IiByZWN0PSIzODcgMiAxMyAxNyIgY29kZT0iQiI+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJUIi8+CiA8L0NoYXI+CiA8Q2hhciB3aWR0aD0iMTUiIG9mZnNldD0iMSA2IiByZWN0PSI0MDEgMiAxNCAxNyIgY29kZT0iQyIvPgogPENoYXIgd2lkdGg9IjE3IiBvZmZzZXQ9IjIgNiIgcmVjdD0iNDE2IDIgMTQgMTciIGNvZGU9IkQiLz4KIDxDaGFyIHdpZHRoPSIxNCIgb2Zmc2V0PSIyIDYiIHJlY3Q9IjQzMSAyIDExIDE3IiBjb2RlPSJFIi8+CiA8Q2hhciB3aWR0aD0iMTMiIG9mZnNldD0iMiA2IiByZWN0PSI0NDMgMiAxMSAxNyIgY29kZT0iRiI+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTMiIGlkPSIsIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTMiIGlkPSIuIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSI6Ii8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSI7Ii8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iMSIgaWQ9Ij8iLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9IkEiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9ImEiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9IsOGIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSLDpiIvPgogPC9DaGFyPgogPENoYXIgd2lkdGg9IjE4IiBvZmZzZXQ9IjEgNiIgcmVjdD0iNDU1IDIgMTUgMTciIGNvZGU9IkciLz4KIDxDaGFyIHdpZHRoPSIxNyIgb2Zmc2V0PSIyIDYiIHJlY3Q9IjQ3MSAyIDEzIDE3IiBjb2RlPSJIIi8+CiA8Q2hhciB3aWR0aD0iMTEiIG9mZnNldD0iMiA2IiByZWN0PSI0ODUgMiA3IDE3IiBjb2RlPSJJIi8+CiA8Q2hhciB3aWR0aD0iMTAiIG9mZnNldD0iMCA2IiByZWN0PSI0OTMgMiA5IDE3IiBjb2RlPSJKIi8+CiA8Q2hhciB3aWR0aD0iMTUiIG9mZnNldD0iMiA2IiByZWN0PSIxIDI3IDE0IDE3IiBjb2RlPSJLIj4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9Ii0iLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9ImEiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9ImUiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9Im8iLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9InYiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9InciLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9InkiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9IsOmIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSLDuCIvPgogPC9DaGFyPgogPENoYXIgd2lkdGg9IjEzIiBvZmZzZXQ9IjIgNiIgcmVjdD0iMTYgMjcgMTEgMTciIGNvZGU9IkwiPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0iJyIvPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0yIiBpZD0iLSIvPgogIDxLZXJuaW5nIGFkdmFuY2U9IjEiIGlkPSJKIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTIiIGlkPSJUIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJWIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJXIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTIiIGlkPSJZIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJ2Ii8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJ5Ii8+CiA8L0NoYXI+CiA8Q2hhciB3aWR0aD0iMTkiIG9mZnNldD0iMiA2IiByZWN0PSIyOCAyNyAxNSAxNyIgY29kZT0iTSIvPgogPENoYXIgd2lkdGg9IjE3IiBvZmZzZXQ9IjIgNiIgcmVjdD0iNDQgMjcgMTMgMTciIGNvZGU9Ik4iLz4KIDxDaGFyIHdpZHRoPSIxNyIgb2Zmc2V0PSIxIDYiIHJlY3Q9IjU4IDI3IDE2IDE3IiBjb2RlPSJPIi8+CiA8Q2hhciB3aWR0aD0iMTQiIG9mZnNldD0iMiA2IiByZWN0PSI3NSAyNyAxMSAxNyIgY29kZT0iUCI+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTMiIGlkPSIsIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTMiIGlkPSIuIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSLDhiIvPgogPC9DaGFyPgogPENoYXIgd2lkdGg9IjE3IiBvZmZzZXQ9IjEgNiIgcmVjdD0iODcgMjcgMTYgMjIiIGNvZGU9IlEiLz4KIDxDaGFyIHdpZHRoPSIxNiIgb2Zmc2V0PSIyIDYiIHJlY3Q9IjEwNCAyNyAxNCAxNyIgY29kZT0iUiI+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSItIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJUIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJ5Ii8+CiA8L0NoYXI+CiA8Q2hhciB3aWR0aD0iMTUiIG9mZnNldD0iMSA2IiByZWN0PSIxMTkgMjcgMTMgMTciIGNvZGU9IlMiLz4KIDxDaGFyIHdpZHRoPSIxNCIgb2Zmc2V0PSIwIDYiIHJlY3Q9IjEzMyAyNyAxNCAxNyIgY29kZT0iVCI+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTMiIGlkPSIsIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTIiIGlkPSItIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTMiIGlkPSIuIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTIiIGlkPSI6Ii8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTIiIGlkPSI7Ii8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iMSIgaWQ9Ij8iLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9IkEiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMiIgaWQ9ImEiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMiIgaWQ9ImMiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMiIgaWQ9ImUiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMiIgaWQ9ImciLz4KICA8S2VybmluZyBhZHZhbmNlPSItMiIgaWQ9Im8iLz4KICA8S2VybmluZyBhZHZhbmNlPSItMiIgaWQ9InIiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMiIgaWQ9InMiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMiIgaWQ9InUiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMiIgaWQ9InYiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMiIgaWQ9InciLz4KICA8S2VybmluZyBhZHZhbmNlPSItMiIgaWQ9InkiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMiIgaWQ9InoiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9IsOGIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTIiIGlkPSLDpiIvPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0yIiBpZD0iw7giLz4KIDwvQ2hhcj4KIDxDaGFyIHdpZHRoPSIxNyIgb2Zmc2V0PSIyIDYiIHJlY3Q9IjE0OCAyNyAxMyAxNyIgY29kZT0iVSIvPgogPENoYXIgd2lkdGg9IjE2IiBvZmZzZXQ9IjAgNiIgcmVjdD0iMTYyIDI3IDE2IDE3IiBjb2RlPSJWIj4KICA8S2VybmluZyBhZHZhbmNlPSItMyIgaWQ9IiwiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMyIgaWQ9Ii4iLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9IjoiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9IjsiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9IkEiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9ImEiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9ImUiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9Im8iLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9InUiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9InkiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9IsOGIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSLDpiIvPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0iw7giLz4KIDwvQ2hhcj4KIDxDaGFyIHdpZHRoPSIyMiIgb2Zmc2V0PSIxIDYiIHJlY3Q9IjE3OSAyNyAyMSAxNyIgY29kZT0iVyI+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTMiIGlkPSIsIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTIiIGlkPSIuIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSI6Ii8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSI7Ii8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJhIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJlIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJvIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJyIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJ1Ii8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJ5Ii8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSLDhiIvPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0iw6YiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9IsO4Ii8+CiA8L0NoYXI+CiA8Q2hhciB3aWR0aD0iMTYiIG9mZnNldD0iMCA2IiByZWN0PSIyMDEgMjcgMTUgMTciIGNvZGU9IlgiPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0iLSIvPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0iZSIvPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0ibyIvPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0ieSIvPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0iw7giLz4KIDwvQ2hhcj4KIDxDaGFyIHdpZHRoPSIxNCIgb2Zmc2V0PSIwIDYiIHJlY3Q9IjIxNyAyNyAxNCAxNyIgY29kZT0iWSI+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTMiIGlkPSIsIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSItIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTMiIGlkPSIuIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTIiIGlkPSI6Ii8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTIiIGlkPSI7Ii8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJBIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJhIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJkIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJlIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJnIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJtIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJuIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJvIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJwIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJxIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJyIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJzIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJ1Ii8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSJ2Ii8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTEiIGlkPSLDhiIvPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0iw6YiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9IsO4Ii8+CiA8L0NoYXI+CiA8Q2hhciB3aWR0aD0iMTYiIG9mZnNldD0iMSA2IiByZWN0PSIyMzIgMjcgMTMgMTciIGNvZGU9IloiPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0iLSIvPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0iZSIvPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0ibyIvPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0ieSIvPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0iw7giLz4KIDwvQ2hhcj4KIDxDaGFyIHdpZHRoPSIxMSIgb2Zmc2V0PSIzIDUiIHJlY3Q9IjI0NiAyNiA2IDIzIiBjb2RlPSJbIi8+CiA8Q2hhciB3aWR0aD0iMTAiIG9mZnNldD0iMCA1IiByZWN0PSIyNTMgMjYgMTEgMjEiIGNvZGU9IlwiLz4KIDxDaGFyIHdpZHRoPSIxMSIgb2Zmc2V0PSIyIDUiIHJlY3Q9IjI2NSAyNiA3IDIzIiBjb2RlPSJdIi8+CiA8Q2hhciB3aWR0aD0iMTkiIG9mZnNldD0iMiA2IiByZWN0PSIyNzMgMjcgMTUgOSIgY29kZT0iXiIvPgogPENoYXIgd2lkdGg9IjE1IiBvZmZzZXQ9IjAgMjQiIHJlY3Q9IjI4OSA0NSAxNSAyIiBjb2RlPSJfIi8+CiA8Q2hhciB3aWR0aD0iMTQiIG9mZnNldD0iMyA0IiByZWN0PSIzMDUgMjUgNiA0IiBjb2RlPSJgIi8+CiA8Q2hhciB3aWR0aD0iMTMiIG9mZnNldD0iMSAxMCIgcmVjdD0iMzEyIDMxIDExIDEzIiBjb2RlPSJhIi8+CiA8Q2hhciB3aWR0aD0iMTQiIG9mZnNldD0iMiA1IiByZWN0PSIzMjQgMjYgMTEgMTgiIGNvZGU9ImIiLz4KIDxDaGFyIHdpZHRoPSIxMiIgb2Zmc2V0PSIxIDEwIiByZWN0PSIzMzYgMzEgMTAgMTMiIGNvZGU9ImMiPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0iVCIvPgogPC9DaGFyPgogPENoYXIgd2lkdGg9IjE0IiBvZmZzZXQ9IjEgNSIgcmVjdD0iMzQ3IDI2IDExIDE4IiBjb2RlPSJkIi8+CiA8Q2hhciB3aWR0aD0iMTMiIG9mZnNldD0iMSAxMCIgcmVjdD0iMzU5IDMxIDEyIDEzIiBjb2RlPSJlIj4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9IlQiLz4KIDwvQ2hhcj4KIDxDaGFyIHdpZHRoPSI4IiBvZmZzZXQ9IjEgNSIgcmVjdD0iMzcyIDI2IDggMTgiIGNvZGU9ImYiPgogIDxLZXJuaW5nIGFkdmFuY2U9IjEiIGlkPSImcXVvdDsiLz4KICA8S2VybmluZyBhZHZhbmNlPSIxIiBpZD0iJyIvPgogIDxLZXJuaW5nIGFkdmFuY2U9IjEiIGlkPSIpIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iMSIgaWQ9IioiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9IiwiLz4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9Ii4iLz4KICA8S2VybmluZyBhZHZhbmNlPSIxIiBpZD0iPyIvPgogIDxLZXJuaW5nIGFkdmFuY2U9IjEiIGlkPSJcIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iMSIgaWQ9Il0iLz4KICA8S2VybmluZyBhZHZhbmNlPSIxIiBpZD0ifSIvPgogPC9DaGFyPgogPENoYXIgd2lkdGg9IjE0IiBvZmZzZXQ9IjEgMTAiIHJlY3Q9IjM4MSAzMSAxMSAxOCIgY29kZT0iZyIvPgogPENoYXIgd2lkdGg9IjE0IiBvZmZzZXQ9IjIgNSIgcmVjdD0iMzkzIDI2IDExIDE4IiBjb2RlPSJoIi8+CiA8Q2hhciB3aWR0aD0iNiIgb2Zmc2V0PSIyIDYiIHJlY3Q9IjQwNSAyNyAzIDE3IiBjb2RlPSJpIi8+CiA8Q2hhciB3aWR0aD0iNyIgb2Zmc2V0PSItMSA2IiByZWN0PSI0MDkgMjcgNyAyMiIgY29kZT0iaiIvPgogPENoYXIgd2lkdGg9IjEzIiBvZmZzZXQ9IjIgNSIgcmVjdD0iNDE3IDI2IDEyIDE4IiBjb2RlPSJrIj4KICA8S2VybmluZyBhZHZhbmNlPSItMSIgaWQ9Ii0iLz4KIDwvQ2hhcj4KIDxDaGFyIHdpZHRoPSI2IiBvZmZzZXQ9IjIgNSIgcmVjdD0iNDMwIDI2IDMgMTgiIGNvZGU9ImwiLz4KIDxDaGFyIHdpZHRoPSIyMiIgb2Zmc2V0PSIyIDEwIiByZWN0PSI0MzQgMzEgMTkgMTMiIGNvZGU9Im0iLz4KIDxDaGFyIHdpZHRoPSIxNCIgb2Zmc2V0PSIyIDEwIiByZWN0PSI0NTQgMzEgMTEgMTMiIGNvZGU9Im4iLz4KIDxDaGFyIHdpZHRoPSIxMyIgb2Zmc2V0PSIxIDEwIiByZWN0PSI0NjYgMzEgMTIgMTMiIGNvZGU9Im8iLz4KIDxDaGFyIHdpZHRoPSIxNCIgb2Zmc2V0PSIyIDEwIiByZWN0PSI0NzkgMzEgMTEgMTgiIGNvZGU9InAiLz4KIDxDaGFyIHdpZHRoPSIxNCIgb2Zmc2V0PSIxIDEwIiByZWN0PSI0OTEgMzEgMTEgMTgiIGNvZGU9InEiLz4KIDxDaGFyIHdpZHRoPSIxMCIgb2Zmc2V0PSIyIDEwIiByZWN0PSIxIDU4IDggMTMiIGNvZGU9InIiPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0zIiBpZD0iLCIvPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0zIiBpZD0iLiIvPgogPC9DaGFyPgogPENoYXIgd2lkdGg9IjEyIiBvZmZzZXQ9IjEgMTAiIHJlY3Q9IjEwIDU4IDEwIDEzIiBjb2RlPSJzIi8+CiA8Q2hhciB3aWR0aD0iMTAiIG9mZnNldD0iMSA2IiByZWN0PSIyMSA1NCA4IDE3IiBjb2RlPSJ0Ii8+CiA8Q2hhciB3aWR0aD0iMTQiIG9mZnNldD0iMiAxMCIgcmVjdD0iMzAgNTggMTEgMTMiIGNvZGU9InUiLz4KIDxDaGFyIHdpZHRoPSIxMyIgb2Zmc2V0PSIwIDEwIiByZWN0PSI0MiA1OCAxMyAxMyIgY29kZT0idiI+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTIiIGlkPSIsIi8+CiAgPEtlcm5pbmcgYWR2YW5jZT0iLTIiIGlkPSIuIi8+CiA8L0NoYXI+CiA8Q2hhciB3aWR0aD0iMTkiIG9mZnNldD0iMCAxMCIgcmVjdD0iNTYgNTggMTggMTMiIGNvZGU9InciPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0iLCIvPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0xIiBpZD0iLiIvPgogPC9DaGFyPgogPENoYXIgd2lkdGg9IjEzIiBvZmZzZXQ9IjAgMTAiIHJlY3Q9Ijc1IDU4IDEzIDEzIiBjb2RlPSJ4Ii8+CiA8Q2hhciB3aWR0aD0iMTMiIG9mZnNldD0iMCAxMCIgcmVjdD0iODkgNTggMTMgMTgiIGNvZGU9InkiPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0yIiBpZD0iLCIvPgogIDxLZXJuaW5nIGFkdmFuY2U9Ii0yIiBpZD0iLiIvPgogPC9DaGFyPgogPENoYXIgd2lkdGg9IjEyIiBvZmZzZXQ9IjEgMTAiIHJlY3Q9IjEwMyA1OCAxMCAxMyIgY29kZT0ieiIvPgogPENoYXIgd2lkdGg9IjE0IiBvZmZzZXQ9IjEgNSIgcmVjdD0iMTE0IDUzIDExIDIzIiBjb2RlPSJ7Ii8+CiA8Q2hhciB3aWR0aD0iMTAiIG9mZnNldD0iNCA1IiByZWN0PSIxMjYgNTMgMyAyMyIgY29kZT0ifCIvPgogPENoYXIgd2lkdGg9IjE0IiBvZmZzZXQ9IjIgNSIgcmVjdD0iMTMwIDUzIDExIDIzIiBjb2RlPSJ9Ii8+CiA8Q2hhciB3aWR0aD0iMTgiIG9mZnNldD0iMiAxMyIgcmVjdD0iMTQyIDYxIDE0IDYiIGNvZGU9In4iLz4KIDxDaGFyIHdpZHRoPSI4IiBvZmZzZXQ9IjMgNiIgcmVjdD0iMTU3IDU0IDMgMTciIGNvZGU9IsKhIi8+CiA8Q2hhciB3aWR0aD0iMTUiIG9mZnNldD0iMiA2IiByZWN0PSIxNjEgNTQgMTEgMjEiIGNvZGU9IsKiIi8+CiA8Q2hhciB3aWR0aD0iMTUiIG9mZnNldD0iMSA2IiByZWN0PSIxNzMgNTQgMTIgMTciIGNvZGU9IsKjIi8+CiA8Q2hhciB3aWR0aD0iMTUiIG9mZnNldD0iMSA5IiByZWN0PSIxODYgNTcgMTMgMTMiIGNvZGU9IsKkIi8+CiA8Q2hhciB3aWR0aD0iMTQiIG9mZnNldD0iMSA2IiByZWN0PSIyMDAgNTQgMTIgMTciIGNvZGU9IsKlIi8+CiA8Q2hhciB3aWR0aD0iMTAiIG9mZnNldD0iNCA1IiByZWN0PSIyMTMgNTMgMyAyMyIgY29kZT0iwqYiLz4KIDxDaGFyIHdpZHRoPSIxNSIgb2Zmc2V0PSIyIDYiIHJlY3Q9IjIxNyA1NCAxMSAyMiIgY29kZT0iwqciLz4KIDxDaGFyIHdpZHRoPSIxNSIgb2Zmc2V0PSI0IDYiIHJlY3Q9IjIyOSA1NCA3IDIiIGNvZGU9IsKoIi8+CiA8Q2hhciB3aWR0aD0iMjMiIG9mZnNldD0iMSA2IiByZWN0PSIyMzcgNTQgMjAgMjAiIGNvZGU9IsKpIi8+CiA8Q2hhciB3aWR0aD0iMTMiIG9mZnNldD0iMiA2IiByZWN0PSIyNTggNTQgOSAxMiIgY29kZT0iwqoiLz4KIDxDaGFyIHdpZHRoPSIxNSIgb2Zmc2V0PSIyIDEwIiByZWN0PSIyNjggNTggMTEgMTIiIGNvZGU9IsKrIi8+CiA8Q2hhciB3aWR0aD0iMTkiIG9mZnNldD0iMiAxNCIgcmVjdD0iMjgwIDYyIDE1IDgiIGNvZGU9IsKsIi8+CiA8Q2hhciB3aWR0aD0iMjMiIG9mZnNldD0iMSA2IiByZWN0PSIyOTYgNTQgMjAgMjAiIGNvZGU9IsKuIi8+CiA8Q2hhciB3aWR0aD0iMTQiIG9mZnNldD0iMCAyIiByZWN0PSIzMTcgNTAgMTQgMiIgY29kZT0iwq8iLz4KIDxDaGFyIHdpZHRoPSIxMyIgb2Zmc2V0PSIyIDYiIHJlY3Q9IjMzMiA1NCA5IDkiIGNvZGU9IsKwIi8+CiA8Q2hhciB3aWR0aD0iMTgiIG9mZnNldD0iMiA2IiByZWN0PSIzNDIgNTQgMTQgMTUiIGNvZGU9IsKxIi8+CiA8Q2hhciB3aWR0aD0iMTIiIG9mZnNldD0iMiA2IiByZWN0PSIzNTcgNTQgOCAxMSIgY29kZT0iwrIiLz4KIDxDaGFyIHdpZHRoPSIxMiIgb2Zmc2V0PSIyIDYiIHJlY3Q9IjM2NiA1NCA5IDExIiBjb2RlPSLCsyIvPgogPENoYXIgd2lkdGg9IjE0IiBvZmZzZXQ9IjUgNCIgcmVjdD0iMzc2IDUyIDYgNCIgY29kZT0iwrQiLz4KIDxDaGFyIHdpZHRoPSIxNCIgb2Zmc2V0PSIyIDEwIiByZWN0PSIzODMgNTggMTEgMTgiIGNvZGU9IsK1Ii8+CiA8Q2hhciB3aWR0aD0iMTUiIG9mZnNldD0iMiA2IiByZWN0PSIzOTUgNTQgMTEgMjIiIGNvZGU9IsK2Ii8+CiA8Q2hhciB3aWR0aD0iOCIgb2Zmc2V0PSIzIDE0IiByZWN0PSI0MDcgNjIgMyAzIiBjb2RlPSLCtyIvPgogPENoYXIgd2lkdGg9IjE1IiBvZmZzZXQ9IjQgMjMiIHJlY3Q9IjQxMSA3MSA3IDUiIGNvZGU9IsK4Ii8+CiA8Q2hhciB3aWR0aD0iMTIiIG9mZnNldD0iMiA2IiByZWN0PSI0MTkgNTQgOCAxMSIgY29kZT0iwrkiLz4KIDxDaGFyIHdpZHRoPSIxMiIgb2Zmc2V0PSIxIDYiIHJlY3Q9IjQyOCA1NCAxMCAxMSIgY29kZT0iwroiLz4KIDxDaGFyIHdpZHRoPSIxNSIgb2Zmc2V0PSIyIDEwIiByZWN0PSI0MzkgNTggMTEgMTIiIGNvZGU9IsK7Ii8+CiA8Q2hhciB3aWR0aD0iMjMiIG9mZnNldD0iMSA2IiByZWN0PSI0NTEgNTQgMjAgMTciIGNvZGU9IsK8Ii8+CiA8Q2hhciB3aWR0aD0iMjMiIG9mZnNldD0iMSA2IiByZWN0PSI0NzIgNTQgMjEgMTciIGNvZGU9IsK9Ii8+CiA8Q2hhciB3aWR0aD0iMjMiIG9mZnNldD0iMiA2IiByZWN0PSIxIDg0IDIwIDE3IiBjb2RlPSLCviIvPgogPENoYXIgd2lkdGg9IjEyIiBvZmZzZXQ9IjEgNiIgcmVjdD0iMjIgODQgMTAgMTciIGNvZGU9IsK/Ii8+CiA8Q2hhciB3aWR0aD0iMTYiIG9mZnNldD0iMCAwIiByZWN0PSIzMyA3OCAxNiAyMyIgY29kZT0iw4AiLz4KIDxDaGFyIHdpZHRoPSIxNiIgb2Zmc2V0PSIwIDAiIHJlY3Q9IjUwIDc4IDE2IDIzIiBjb2RlPSLDgSIvPgogPENoYXIgd2lkdGg9IjE2IiBvZmZzZXQ9IjAgMCIgcmVjdD0iNjcgNzggMTYgMjMiIGNvZGU9IsOCIi8+CiA8Q2hhciB3aWR0aD0iMTUiIG9mZnNldD0iLTEgMCIgcmVjdD0iODQgNzggMTYgMjMiIGNvZGU9IsODIi8+CiA8Q2hhciB3aWR0aD0iMTUiIG9mZnNldD0iLTEgMiIgcmVjdD0iMTAxIDgwIDE3IDIxIiBjb2RlPSLDhCIvPgogPENoYXIgd2lkdGg9IjE2IiBvZmZzZXQ9IjAgMCIgcmVjdD0iMTE5IDc4IDE2IDIzIiBjb2RlPSLDhSIvPgogPENoYXIgd2lkdGg9IjIzIiBvZmZzZXQ9IjAgNiIgcmVjdD0iMTM2IDg0IDIyIDE3IiBjb2RlPSLDhiIvPgogPENoYXIgd2lkdGg9IjE1IiBvZmZzZXQ9IjEgNiIgcmVjdD0iMTU5IDg0IDE0IDIyIiBjb2RlPSLDhyIvPgogPENoYXIgd2lkdGg9IjE0IiBvZmZzZXQ9IjIgMCIgcmVjdD0iMTc0IDc4IDExIDIzIiBjb2RlPSLDiCIvPgogPENoYXIgd2lkdGg9IjE0IiBvZmZzZXQ9IjIgMCIgcmVjdD0iMTg2IDc4IDExIDIzIiBjb2RlPSLDiSIvPgogPENoYXIgd2lkdGg9IjE0IiBvZmZzZXQ9IjIgMCIgcmVjdD0iMTk4IDc4IDExIDIzIiBjb2RlPSLDiiIvPgogPENoYXIgd2lkdGg9IjE0IiBvZmZzZXQ9IjIgMiIgcmVjdD0iMjEwIDgwIDExIDIxIiBjb2RlPSLDiyIvPgogPENoYXIgd2lkdGg9IjExIiBvZmZzZXQ9IjIgMCIgcmVjdD0iMjIyIDc4IDcgMjMiIGNvZGU9IsOMIi8+CiA8Q2hhciB3aWR0aD0iMTEiIG9mZnNldD0iMiAwIiByZWN0PSIyMzAgNzggNyAyMyIgY29kZT0iw40iLz4KIDxDaGFyIHdpZHRoPSIxMSIgb2Zmc2V0PSIxIDAiIHJlY3Q9IjIzOCA3OCA5IDIzIiBjb2RlPSLDjiIvPgogPENoYXIgd2lkdGg9IjEwIiBvZmZzZXQ9IjIgMiIgcmVjdD0iMjQ4IDgwIDcgMjEiIGNvZGU9IsOPIi8+CiA8Q2hhciB3aWR0aD0iMTgiIG9mZnNldD0iMSA2IiByZWN0PSIyNTYgODQgMTYgMTciIGNvZGU9IsOQIi8+CiA8Q2hhciB3aWR0aD0iMTciIG9mZnNldD0iMiAwIiByZWN0PSIyNzMgNzggMTMgMjMiIGNvZGU9IsORIi8+CiA8Q2hhciB3aWR0aD0iMTciIG9mZnNldD0iMSAtMSIgcmVjdD0iMjg3IDc3IDE2IDI0IiBjb2RlPSLDkiIvPgogPENoYXIgd2lkdGg9IjE3IiBvZmZzZXQ9IjEgLTEiIHJlY3Q9IjMwNCA3NyAxNiAyNCIgY29kZT0iw5MiLz4KIDxDaGFyIHdpZHRoPSIxNyIgb2Zmc2V0PSIxIC0xIiByZWN0PSIzMjEgNzcgMTYgMjQiIGNvZGU9IsOUIi8+CiA8Q2hhciB3aWR0aD0iMTciIG9mZnNldD0iMSAwIiByZWN0PSIzMzggNzggMTYgMjMiIGNvZGU9IsOVIi8+CiA8Q2hhciB3aWR0aD0iMTciIG9mZnNldD0iMSAyIiByZWN0PSIzNTUgODAgMTYgMjEiIGNvZGU9IsOWIi8+CiA8Q2hhciB3aWR0aD0iMTkiIG9mZnNldD0iMyA5IiByZWN0PSIzNzIgODcgMTMgMTMiIGNvZGU9IsOXIi8+CiA8Q2hhciB3aWR0aD0iMTciIG9mZnNldD0iMSA0IiByZWN0PSIzODYgODIgMTYgMjEiIGNvZGU9IsOYIi8+CiA8Q2hhciB3aWR0aD0iMTciIG9mZnNldD0iMiAtMSIgcmVjdD0iNDAzIDc3IDEzIDI0IiBjb2RlPSLDmSIvPgogPENoYXIgd2lkdGg9IjE3IiBvZmZzZXQ9IjIgLTEiIHJlY3Q9IjQxNyA3NyAxMyAyNCIgY29kZT0iw5oiLz4KIDxDaGFyIHdpZHRoPSIxNyIgb2Zmc2V0PSIyIC0xIiByZWN0PSI0MzEgNzcgMTMgMjQiIGNvZGU9IsObIi8+CiA8Q2hhciB3aWR0aD0iMTciIG9mZnNldD0iMiAyIiByZWN0PSI0NDUgODAgMTMgMjEiIGNvZGU9IsOcIi8+CiA8Q2hhciB3aWR0aD0iMTQiIG9mZnNldD0iMCAwIiByZWN0PSI0NTkgNzggMTQgMjMiIGNvZGU9IsOdIi8+CiA8Q2hhciB3aWR0aD0iMTQiIG9mZnNldD0iMiA2IiByZWN0PSI0NzQgODQgMTEgMTciIGNvZGU9IsOeIi8+CiA8Q2hhciB3aWR0aD0iMTQiIG9mZnNldD0iMiA1IiByZWN0PSI0ODYgODMgMTEgMTgiIGNvZGU9IsOfIi8+CiA8Q2hhciB3aWR0aD0iMTMiIG9mZnNldD0iMSAzIiByZWN0PSI0OTggODEgMTEgMjAiIGNvZGU9IsOgIi8+CiA8Q2hhciB3aWR0aD0iMTMiIG9mZnNldD0iMSAzIiByZWN0PSIxIDExMCAxMSAyMCIgY29kZT0iw6EiLz4KIDxDaGFyIHdpZHRoPSIxMyIgb2Zmc2V0PSIxIDMiIHJlY3Q9IjEzIDExMCAxMSAyMCIgY29kZT0iw6IiLz4KIDxDaGFyIHdpZHRoPSIxMyIgb2Zmc2V0PSIxIDUiIHJlY3Q9IjI1IDExMiAxMSAxOCIgY29kZT0iw6MiLz4KIDxDaGFyIHdpZHRoPSIxMyIgb2Zmc2V0PSIxIDYiIHJlY3Q9IjM3IDExMyAxMSAxNyIgY29kZT0iw6QiLz4KIDxDaGFyIHdpZHRoPSIxMyIgb2Zmc2V0PSIxIDAiIHJlY3Q9IjQ5IDEwNyAxMSAyMyIgY29kZT0iw6UiLz4KIDxDaGFyIHdpZHRoPSIyMSIgb2Zmc2V0PSIxIDEwIiByZWN0PSI2MSAxMTcgMTkgMTMiIGNvZGU9IsOmIi8+CiA8Q2hhciB3aWR0aD0iMTIiIG9mZnNldD0iMSAxMCIgcmVjdD0iODEgMTE3IDEwIDE4IiBjb2RlPSLDpyIvPgogPENoYXIgd2lkdGg9IjEzIiBvZmZzZXQ9IjEgMyIgcmVjdD0iOTIgMTEwIDEyIDIwIiBjb2RlPSLDqCIvPgogPENoYXIgd2lkdGg9IjEzIiBvZmZzZXQ9IjEgMyIgcmVjdD0iMTA1IDExMCAxMiAyMCIgY29kZT0iw6kiLz4KIDxDaGFyIHdpZHRoPSIxMyIgb2Zmc2V0PSIxIDMiIHJlY3Q9IjExOCAxMTAgMTIgMjAiIGNvZGU9IsOqIi8+CiA8Q2hhciB3aWR0aD0iMTMiIG9mZnNldD0iMSA2IiByZWN0PSIxMzEgMTEzIDEyIDE3IiBjb2RlPSLDqyIvPgogPENoYXIgd2lkdGg9IjYiIG9mZnNldD0iLTEgNCIgcmVjdD0iMTQ0IDExMSA2IDE5IiBjb2RlPSLDrCIvPgogPENoYXIgd2lkdGg9IjYiIG9mZnNldD0iMSA0IiByZWN0PSIxNTEgMTExIDYgMTkiIGNvZGU9IsOtIi8+CiA8Q2hhciB3aWR0aD0iNiIgb2Zmc2V0PSItMSA0IiByZWN0PSIxNTggMTExIDggMTkiIGNvZGU9IsOuIi8+CiA8Q2hhciB3aWR0aD0iOCIgb2Zmc2V0PSIxIDYiIHJlY3Q9IjE2NyAxMTMgNyAxNyIgY29kZT0iw68iLz4KIDxDaGFyIHdpZHRoPSIxMyIgb2Zmc2V0PSIxIDQiIHJlY3Q9IjE3NSAxMTEgMTIgMTkiIGNvZGU9IsOwIi8+CiA8Q2hhciB3aWR0aD0iMTQiIG9mZnNldD0iMiA1IiByZWN0PSIxODggMTEyIDExIDE4IiBjb2RlPSLDsSIvPgogPENoYXIgd2lkdGg9IjEzIiBvZmZzZXQ9IjEgMyIgcmVjdD0iMjAwIDExMCAxMiAyMCIgY29kZT0iw7IiLz4KIDxDaGFyIHdpZHRoPSIxMyIgb2Zmc2V0PSIxIDMiIHJlY3Q9IjIxMyAxMTAgMTIgMjAiIGNvZGU9IsOzIi8+CiA8Q2hhciB3aWR0aD0iMTMiIG9mZnNldD0iMSAzIiByZWN0PSIyMjYgMTEwIDEyIDIwIiBjb2RlPSLDtCIvPgogPENoYXIgd2lkdGg9IjEzIiBvZmZzZXQ9IjEgNCIgcmVjdD0iMjM5IDExMSAxMiAxOSIgY29kZT0iw7UiLz4KIDxDaGFyIHdpZHRoPSIxMyIgb2Zmc2V0PSIxIDYiIHJlY3Q9IjI1MiAxMTMgMTIgMTciIGNvZGU9IsO2Ii8+CiA8Q2hhciB3aWR0aD0iMTgiIG9mZnNldD0iMiA4IiByZWN0PSIyNjUgMTE1IDE0IDE1IiBjb2RlPSLDtyIvPgogPENoYXIgd2lkdGg9IjEzIiBvZmZzZXQ9IjAgOCIgcmVjdD0iMjgwIDExNSAxMyAxNyIgY29kZT0iw7giLz4KIDxDaGFyIHdpZHRoPSIxNCIgb2Zmc2V0PSIyIDMiIHJlY3Q9IjI5NCAxMTAgMTEgMjAiIGNvZGU9IsO5Ii8+CiA8Q2hhciB3aWR0aD0iMTQiIG9mZnNldD0iMiAzIiByZWN0PSIzMDYgMTEwIDExIDIwIiBjb2RlPSLDuiIvPgogPENoYXIgd2lkdGg9IjE0IiBvZmZzZXQ9IjIgMyIgcmVjdD0iMzE4IDExMCAxMSAyMCIgY29kZT0iw7siLz4KIDxDaGFyIHdpZHRoPSIxNCIgb2Zmc2V0PSIyIDYiIHJlY3Q9IjMzMCAxMTMgMTEgMTciIGNvZGU9IsO8Ii8+CiA8Q2hhciB3aWR0aD0iMTMiIG9mZnNldD0iMCA0IiByZWN0PSIzNDIgMTExIDEzIDI0IiBjb2RlPSLDvSIvPgogPENoYXIgd2lkdGg9IjE0IiBvZmZzZXQ9IjIgNSIgcmVjdD0iMzU2IDExMiAxMSAyMyIgY29kZT0iw74iLz4KIDxDaGFyIHdpZHRoPSIxMyIgb2Zmc2V0PSIwIDYiIHJlY3Q9IjM2OCAxMTMgMTMgMjIiIGNvZGU9IsO/Ii8+CjwvRm9udD4K"},{ name : "R_bg2_png", data : "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"},{ name : "R_bg2a_png", data : "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"},{ name : "R_reactor_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAACgCAIAAADiqPl7AAAAB3RJTUUH3QgZCw0nY+TSQgAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAADUElEQVR4nO1bbU7sMBALD4mLc969A0gVwTue76Q8CTLqn5bGnniSxrMSY5w4UY73l9fPqzPy8e/tuhhxFd2BLiNOLHHxm51k8+hIU+OYNJ8jfeixMgkeeT1BylV0lGgWM5xTB318CR3WI0bHZC8awbcTHaGbuIjO0M3tHhI4s2lyI+KlhrrL+tIhRDJ9dZdk59HTJysdE6REKEVp665+UHG8xbSHY+ee+AkalUP9HK1+RZiDX7hlpXESt3OcOHHCjuY+d0631V7BP5aXegX/WN7QKyRP0BqHsKfhyzUCRA9HdtAdH9dZfNwQhOiFrBECfarQpwPN6fuutu8tVIlwQh1QiwBVsux7ed+qFkgUxpIu1SsghOpNOeVar2DNQOXo9AoWwTZjallPXEI+R63DmbelLJcmut+Aslz40b7FVOO375ZeYbjH/dg4LYdjZ6lu6dpOnDhRj44dtm6X2gU28Q50IYTVQLc6bdkSNN4OcsQbsmb060mmXQgSZwKhe6ddYGfnOMkmun8JxEK7kEG3qpqaQV6cQcXIolsE/M5MvCkRP8dWR+ThAH7fiPFimXKFfcutTAVf9aciHqrNiDWnbxSVBj9BS17IX5pYkjC8VNQPRiNijuw6aQd/8vB2Q7tQSpMzuItpxk7vbWHtKZXPceLEr44Nv0Ay4iq6dQwkT+D41zqVVfzIgkPEURoQONMS/mVo7YKpmG/2RbLz4QDduOeRBKogSGChZ1J8ylQ0MKrHesBv8zg2Rh+ay+O2SRScNdAJxFJBXLxQk+xphdCqXLxChKWICXhCEyJEiWmEOJx+A/pplKgYe1PHbKdUEoI4W5+tccpy++tHqKHqKTUJJIN8xSZgmlgfP9SNxsnFjY1zK2iaaWYWe1xMfzByZJysn5NEYA5Vt1JV5ctir/lJbVg/qaT+b5x24cTfi1/RK6TSDO0C9wrOa2X0kTMs+vzQhiyiP7hXsE5E7hVC9ZUUGV0YpOpBphAw+qj8z0FwnjNBcqlMxOA17jKyrvaZI0uQx63xY2F9I1wObAKE7vyQ1Ys3B29jq+HxR5n2kv+sSqRq66xvc4631Dm55K9wCm7+ySqU/9HOZBNzbAhEZI79JWGOpG5lDgfuJ5zz/lL94fgAm/hx5pqupAIAAAAASUVORK5CYII"},{ name : "R_sfx_hit3_wav", data : "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"},{ name : "R_shield_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgYDjgbUM3J/QAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAABIUlEQVR4nO1WsQ0CMQxMIhaACYBZQEwBNUIgKgomoKBFiC1YgF34kgo2ACxZRJFjO8lLL1HEcvG5j+O7OB+/WdhNp25qgpqgJvifBNupJZ4Z6EzK+pMTODzsV9Z7iCcsh/Xj6tDns3E4BE+qERV4dsjX29ONwqFXU6Yg5q67okOrAeHecqZEX2FaJIJXwDI6nD/kIUcETaCUixxT1uJwRgHGA83dZUheAUjowxwPsonFIpPjiKsDCB7mOC4bBGM2iQSD9x08RIAggoQpToNM7Dq9GAKC0kbLYGOE4lMFr9uaJWJ+BYjLoIfzW6QfRP0QU1Ouisx7wn9oLa/rHFM2jU+AWxmH4aknSyMiFq+oH7BDvR+kWyZ7dec3zs57cud/FV/HDnyJhQ6teAAAAABJRU5ErkJggg"},{ name : "R_sfx_laser_wav", data : "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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsTLAArs01z0kYACD6uomzDQAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxLsDyliQ4PxkAAAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU"},{ name : "R_bg1atrans_png", data : "iVBORw0KGgoAAAANSUhEUgAAAGQAAAA4CAIAAACEzMqPAAAAB3RJTUUH3QgZCCoDh2Q6rwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAADcklEQVR4nO2av2sUQRTH585r7hIbEwhoTgQlIdik8EcRDgP+DxYqFsEcWAhapkphF1IJNikUBC2s0ggWIqjYKMQIJkXkUDQpLHIIwVxhFN8xx9wwOzM3Mzuzb0f38SHsXWbf7nzvvbdvdpdcK90sMISgn0FEFGIVYhVioVOIVYgVSKxTy3UU1h7MRgeaWDEKlwuxYtELXyx0CQqx/lGxIhIOXyx0CcwpE2y7tNsS0I//+vYXFpVsFLEyQa/l1nH+4/Rc2/sRK5Vv8PfgoK4fVoJE8H5sX8ZkCiGQg+GnodRAJo9K7X8aBeg2BBGNIytrfxwD8As848u7KVtWb8wk2XzcABy8UXJd4M0tGREQdEm2Xv8BTBzSeBEgsmtIbwf0gHIOK48hQ2Gxmdx381YDQBbLfKrb74f9SmOikQCmWB6jhk3YViATjRj9mnV77agJfsoPIc8vDPtyRbjipRog1CC+xmncilXy3uXzlEfzsyYsXr3ohdrdEkB9sp+O33bLTen10Sp8VEcBJ8RQI+9QyTQD3KYUDvCPJpaUoYdlIOic05CvPmvp2dmNqUm/PtfvH6FoBpj6Qo+mlNn3/0YWbxsrhwHvbqULQ9MFY4jogMrN91PsCugQYk/nz6kucN6venpgvRnkftZE9feV9Qn+o9XuM83vbPt0c8/badkYBJrk9hZ6keKBds/2B/fbMWi8eeizhFbTo3DZ1++BuucrsrJRCkRxi8dys/FKAKNEiPZmZQzQj3G44UkNihGrR1ZOegUeusH+d0Nu5+DT+BqvMunzBXlhtnSidKtZRbM1tu1iOz+Z6Jxx0dQs/vygzwpav+xqlnnEZmNCAqr6LFjQqcoNWwz6gnku//jZAWyntDjZsmWrcyiJ7XGZTc+1VeVG+hRDypnmB5NhfddumeJwtw+3XcBMQ1jBqFiqv5B+73YglUmfYulJcziaj0Fq1vXRlw57aRorvzNP2sBuq5ePyXRI/9imulCq3ilZ7bL3+UQG7wylbR1CPOPqirUwWCz0961sCds67HS2AdV/DV/Iyo8FEevYyHhvozpO9nUjn4ycBEKcQwgLGFk7u8qYohaRTNSCiVXr/qF6DVQtFgu+3IGUZFnJW3RhRcKJ1a1WNcLLRMsTI9Bxw1rGb86gX/7TkKlY6LONSazYhcN8mQ198rb8BQ96msGJADJ/AAAAAElFTkSuQmCC"},{ name : "R_sfx_break_wav", data : "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"},{ name : "R_bgb_png", data : "iVBORw0KGgoAAAANSUhEUgAAAZAAAAA+CAIAAACKvNqxAAAAB3RJTUUH3QgZCQQruBTxTgAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAFB0lEQVR4nO3dPY7UQBCG4QGREIEQEhEEBBBA5oyQkENwA05FgMR9uAEJEgEiQKz4EV4ZWd4Z/7TbVfVVdX2lN0FiGbun/YwXmJ3T21vvGGMsRCf4ETDGWGEEizEWJoLFGAsTwWKMhYlgMcbCRLAYY2EiWIyxMBEs9r/uyf3Z4AfG2BjBYtctaUW2mKsIFruOYLEQESy2rdWsWUSN2UewWClYo0q8EWOoCFb2dmlVcSPGmGAEK3viYJEtphfBSp2SVmSLKUWwUqcNFs1ishGsvBloRbOYbAQraWZa0Sz7pxV+GHoRrIwZa9X8VaT3pFT/CfDTUYpgZQwCVtsXkt4zUveF8DNSimClC6hV29eS3jNS9yTCz0sjgpUuguUqrvaubp+Cz9cXH1dCH527+fT4PfoQXBxDnmlstaOCVUgS2eK4nZ4SG01aMiskWHsNolnD+Nm4fo4kyTSz4MHA4h1Tqvn87MM09OFw8BMGrINUkTlvs/mafylUS2w1c8tjPAHAkrqr4t1ZlFmHqSW2LKcNIv2CpfQvfTTL85RjFNcss79rn31oyOMKjl+w9CanWQ436/SQKu6b4prFqR6PYBl875bTLIczmFVNj4dvD8/+ZQB+POvj8HVr17gDy4ySVH+l5XmbHr/CUVIsPWgIuYKOI7BSCcLRGEsjSh6LbMkP/M1BQ29ePkIFP3eD4O8fXO/184eCGaxn9VHBlzr6uwu3wTI4SaBWScyCXyQ+zXr19MFY+WJWHxV8kdsHS/s84VSJ+2X2Il8e/AqBmLXyLEydumzzyQ2tVctgqZ4tXCUNtuy/NykJfoUAzTp7FtapWmerDa2aBUvvhOESyZpV/TpvFvwK8WBWOVWXYB0/APiqNsPWPFjiZwunR9asIy/yxsEvDA9m7dVqNEvqAOBL2jJYsicMF0dcriOv8wTLmK06qoYa1iquWTfAEj9zuDJSiWxcarU3oFZSZsHXsO7KdZs8WHBcHFIFMQt+MYiEokqELfjq7b14/XcS3NyNaSVLlb1Z8CtBKiBVR8yCr9uuKzdKJ43zVxJkaTPFAsvGLPg1IB5Qqwq24Mu1KzhD5btaBaxO2qzC/eTcKTOz4BeARnCtys2Cr1VdcI+QYHVCZlVvLJ9O1Zk1e8DZwOqWzbKhqoQt+BIdDE7S5pZWBGsIotVeyOy1WjerfInyaDUG12qWLfiySAW3aX1Lq4M15ESrWbZQWi2ZVYd7Eq26CVhAqsbgq6EdXCsMWN0es4Cvk1izjtyN9sE3t1nUyjgnWnWWYHWrZmF3Htysg1Sl0mqIWhkHp2rI9CeOfvl+Nf3ltx+/xiwP43J+/vrbBz2AP0e+/GxhM8zV77992R4aOMOH/Zh95M/So1j/iGTPlxaWrd6sob1f6HlJtccejoRUXY6qWesmAn6me3+BebirWpqBLaxchb+zX8nMWg1jeb9DrcaRvdsqv33DfAjFsMmcP/2jXPZ+ldxqkarpaO8l/9sVNeVmTVU6q/zhwJ+aE2gT2OO1wha1spxAuxQy6+jI3ovhP+YrxN3W2VjefJ2ZxW8Dl+bgFhr34WVSR9j2HL97Khk8WOPE3RnaeA1mkarNqdtCVCnQOALrFNmscZTYIlWFs0sfUhVufIF1unlnjj6W+hFn697dO4J/WvOzuXmib7C04w6slkaWLZq1a2ZJauC1MPvA/8v/evB3YEi9jUPwfTzwJyVcCd9J02r/AHlU7glcqCJXAAAAAElFTkSuQmCC"},{ name : "R_title2_png", data : "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"},{ name : "R_sfx_bossLand_wav", data : "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"},{ name : "R_laser_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgZBw0aMpZnNwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAA1klEQVR4nO2UMQ7DIAwAqdRX8AAvWdg65yP9QdW39EWd+yaWoFhxXccgUHCHiBMDJMRnDMTdLw/T5oZgCIbghIKJYSUQHROB4QoAgEoUQmiKpdY2u8koQOoF3nvh0DeZ1qEKggbO9yslAaxM1XCB3+CCqysyvz58+H7e+MM0jDHiEF8pHFwBR13BfwWwsf8gVRkyHBLwI7ufJjS1AoyeIuYEqoZywk5WQNHpaNffNaqVfpNF+iiovMOF9iPg0Vt/RM2CLul/BVSfvulLQaJvdFkiwkRg1BaWNtsP+YFGyAAAAABJRU5ErkJggg"},{ name : "R_sfx_hit_wav", data : "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"},{ name : "R_bgbend_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAAA+CAIAAADFxI5IAAAAB3RJTUUH3QgZDBIZapDX8gAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAAbUlEQVR4nO3NuQ2AQAxFwaUDKqCJ7YcO6D8lIGKFhL8POXnS5DPO7So1CAgICAgICAgICAgICAgICIRgHvujPCg6XkHFsQbpR0eQe3wHiUdfkNV0B/HjPwgepiByWAP3IQS+QwschxyojTOwNzeVr9+OQ2nWLwAAAABJRU5ErkJggg"},{ name : "R_knight_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAACACAIAAADlBPxNAAAAB3RJTUUH3QgZFzAwn+NFLwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAD4ElEQVR4nO1aPWuUQRDe0xhBI0gS8QsFMaQwwlmIgmChpb3tCQpa+QP8JaIQwdqfYGGlELsrEisRvwlItLBRT+KYIeNkv2Zmd0+ivMNw7L25d5+dj52d2Ykb9G6b+OKhSficm9kDrPm9KwBAVmJoAWguGHgYeaQdTkeHd42eTS8Cew9p7P3pD2nWHl1ylAsl+PhjAthb8tVjPW9QKAH5jMd3zuwFxkHGDIIEod5ty3dOpSLQDHJqUniSQiqxwaO36/j89Yud/GejyYdmgAtrN3BAy+eiPJ8aEQYM4GtkCusGRmdFC3tctdFOrN7iX0lLOOZfSyS4cvkcZ/JOb1AYi+DlEEDUjAqAz0KzX5vbDaycPQcQNSPOThgIWQLAgwGBnZ2dAOYYGoCIFx3tP8Bt+X54HRgHj999g8HC/i0768Cboeh+STelLQa0MnM3nB2pv7acB5gIH+GqNbMfmYq87pF2o4W0/vImDpJnGVLGPt4BwM0LTMbn7iAb+dOlJeRwKU8/+1pCL+DWCimpIvClKAZxiCQD0MJF39BTzsh4TomHokBh1IyGCu8hj535zZwE4DOKEdAQKmafnOdfQ+uljJmiLQDe7CkaTi/Qp/yWGNBD1mhGPg9asSEWvTp4z6VzvQYqspYeWhUVlx5aFZWXHqKKKksPlQRVpYcowaCu9BAkqC89kAQV1ZQeKoCa0kMAgJMWD9vy0gNJv4GtpYd2o0HpwasPQ+mxQbbEC+2Jk8InWljA0Ae7UD9tgh0wZeq8wlEuqyQ3/fB1BNw7eV/zYxXA8pefBeswAHCyJn1aAChmYOqClNIgAXq96Pg+abyTR2mvRBiLFyFBBq9KL/QSmE5Kw0arBNCqCEI3lQsUyVWkj0WmEGSLRf8LgHdrNHYAJYzhUnBgaRuUABTk7jJAZe4+EDdabe6e2WhNcndBgga5e0aCQYvcPSlBq9zd5Y/M+txdAKjP3ZMAzXJ3J50Hlbm7vNHK2wabpKoPcFCSuztLH60gd5dVxIkvVn/vJQPsO7U43z+NDFm720jf9csyZ3am2VUAS6vfaay5bvcpZRwKatj48Bot+hNNqyKuGZsc4hJ464bEanalRiqi/oHXP6oCCE8b3uMaC4A1d88ZmZpdtcTRoq3K1MlcYuQoQOZ6n97KAAgeHQY1eELtHRjQHXyKIjaAd7BtkAqZ9Fyc/TeFKtJoVp/B+wBK0+lX0/UPGqio6x/kl9/1D7r+wSZY1z8g2o79A1WWiTf588f7+M84eIOtrEG2Tf+guIVgkACv98fVP4j+f1FLANf1D4xnTtc/iPK/f73/V/sHYwfQw/wCQ8I2RkIXgr4AAAAASUVORK5CYII"},{ name : "R_redHalo_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgZCjo4fykVtAAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAAxklEQVR4nM3WwQ3CMAwFUKdiKAZgDu4cmKd35mAAtiqVkCrXaeyf2Ea1fKrS/+L00NC9PFObTge8psvWYQAPVboPAENN4wAYi/4TUDMS8KdrQEi6ACbC6kpFNPiiDbTiQMkAkJ3qa9AjGjY0AD9opWImoPZuwgBetzKnAHyIzUiZgNcOeC8PZ1z9JbQJPrQ4PQMIKQmIU+odol5vT7C+AzKHy9AjajG/59omMv5o/K+QBRi3ilMDHRcvZzR6sxvL7QCcnQ58Abpqr0TvrxcbAAAAAElFTkSuQmCC"},{ name : "R_bga_png", data : "iVBORw0KGgoAAAANSUhEUgAAAZAAAAA4CAIAAABc5TmsAAAAB3RJTUUH3QgZCDAOSfi8yQAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAADxUlEQVR4nO2U0W0cMRBDL52lEneQmtJRakoAA8blbN9J2tGQM3rA+16RHC5vbz9+AQCU4CZXAAAwCIMFAGVgsACgDAwWAJSBwQKAMjBYAFAGBgsAysBgAUAZGCwAKAODBQBlYLAAoAyjg/Xn989/yOUCwMkwWABQBgYLAMowNFjva8Vgfc5ELqMWJAYXmRssCvcQiFxJLUgMLjI9WHTujQW/kJtcA5SGwVqBNJZDk8vYbbC3Rzkrg8VJTo5izXL7xPhHcmCwVjg5ijXXjRP7/Hd0derA4mCdfIyTo1iz3DixJ2vVyaYPDNY0J0cx67r9z/x8sNrY9OH1YHGMl4HIJUmMLwTVKbSXU9XDphsM1jTHRhE7WNVDGxys6jbduDRYZx7j2BymLLf/mRksCS8Gy/wYEg2eUUiMz0bUKbRxj6VtuvFssMyPoRJgGIXK+Gw+nUI7waMhDNb6u1ZpSFwv5NMmtBM8GhIwWPLJ0L4uT0PoeiGcHomd4NGTbwfL9h7yKvhE4eB6NpweobU3aMvXg2V7D3kVfKJIhsG6blMuuwFfDJZt5+Q9MMlBwqDf5fJUya29QXMeB8v5HvIe+ETxRJ7E+0JEJqHt60Bdj86UGSx5CXyieClP4n02IofQdtfA3KObnhFqDJZDCUyiGJQn9O5ZIZMc5BYe7Mg1zBI5WPv8O5TAJIpxbULvbv2xykHu4t6OXMMs/w2W7THkJfCJYlye1r5Vf6xykLu4tyPXMAuDFSNAW83dAhiswBDkRu4dyTXMwmDFCBBWM0EDgxUbgtzLh6OExGK/yWDFCLAVJvRuGJdJCHI7945yEov6LIMVI0ClLUHApm2y/ZNzEvAxlRZUyBMMVowAz1hCBOz4XW1/4zT7PqbSsgp54jb4mPmfmXZdq3ASXt/0u9r+yZkJ+JhKC+r6KwxWzCXyw8kRsO93lZzSKgErU2kpXXyIwYo8RprOtNf3/a6SU7ol4OMoLaWLDzFYYZdIyydTQPgvKmyRoXcrUzlBXdTPYEUeIyGiTAHh3rUtkp/ewekOMZmWCwyW8PCGNc1Ussm+6poOp5ebDVeS7Dd4sHYcQHV1w5omy9iaQPI15VGbmDXp5LJ+BktWWRM9wgQyr2mSttxvrIx8y7fw86iqU66vJnqECaRVyPD6Er9WtVyzwGCJ+yrX4xDC7go5FyDTcriSfNd9BivwaaumqgRkhrC7QrbXT7YcK0bi2nqwJK9blVX4en4O+25qXoA0j7GqJMZv4RfSNqZTX4VPq3JIuK/h9RN8XXG3O6spC38BGdhutdQiNP4AAAAASUVORK5CYII"},{ name : "R_bg1b_png", data : "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"},{ name : "R_laserAnim_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAAIACAIAAABsK/m8AAAAB3RJTUUH3QgZBxoLXaXDUwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAABm0lEQVR4nO3X0U3DQBRE0UAd1EYHVEJFiGqoAyVQAkjsI77eI+3/kWzveOby/PAyei4AAAAAWAE8vr+NnhM8IgAAAAAAAAAA4CjAeH1/un6OHgMEAAAAAAAAALAP0K/vr7fr6DFADvCZAgAAAAAAAESAfrvu1/ePr9voOcEAsXDuHxUAAAAAAPwLMP5PVn7vX377wHh97wP9lzwO9KOiH9f9XyYAAAAcAdCuteu/A/3yC9gA6F+0caAf1wYIAAAArADsgw32Qb/ZAQABoB8V/bi2DwAAAGAFYB9ssA/GgX6zA2wA9C/aONCPa/sAAAAAVgD2wQb7oN/sAIAA0I+KflzbBwAAALACsA/sg0DxAgACQD8q+nFtHwAAAMAKwD7YYB+MA/1mB9gA6F+0caAf1/YBAAAArADsgw32Qb/ZAQABoB8V/bi2DwAAAGAFYB9ssA/GgX6zA2wA9C/aONCPa/sAAAAAAIBfAUbgj0C//I4D/ZesOgIAAAAAAACcBegvnH59164BAAAAAAAAAIBVwPg+6D8iAAAAACw43/6f6IdQ15/hAAAAAElFTkSuQmCC"},{ name : "R_bg1btrans_png", data : "iVBORw0KGgoAAAANSUhEUgAAAGQAAAA4CAIAAACEzMqPAAAAB3RJTUUH3QgZCQoV5/bBawAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAEE0lEQVR4nO2awWoUQRCGR92QhLgQxRz2oDcPGg8LcxFEyTvknoPiwYPPID6EJ0HBQ24Bn0NBvehZVBAvXlSSsKvYoaTSVFd3V09Xb8/KND/LbO9Mb883VdU1NdPsnXk4SKim+gyWSAOsAdYAq7oGWAOsQrDePN/podormz1UH2FVh+LT2aYf7f6jd6gS4x/NfuMGqMso1e3IZ1bbk7Hwgps95fpP3JBFIMGUs8PywfKdZ5SUxNy0SLV1Y9bFG99ABwcTEP4UiCkYdNZWzgV2ML+CFCc8It8/vZopju5r07vf3c7d3a/2V3KeiC9w/pJ9strLB7dsfXx9TV1f3p43Yn+6c/USERj8va0No2fXG/O5d2HdCHoWFp7YwZsSdIRiMQEpgwlkMMkpaK16vmugAOvD/m2jqBGBbCt2zQqQqZxwfurg7h+CRTwUZKPpIFz7CCDcLudN0eQLPB3ETuMUVtgiCEEhF1asQckxQQgzyvQp0m8GtH2fPVwtZkWTKbRNd7pJ1gRnks/LDpR4AQAW2hc5qkkyKzkalxEeq3ULgmeYSg1t2YViGxoK5ymyLDzhVEABh3UxlVjLWEbg8sKjbJRpbiihE41oJW5xU2G5+YpEIViub7Lro0oq2zqrVU8si8KSBKzUoCahY+T2gHR5+RbfLrBqCWHZ1HSR+dIUfTeUKOqJgZ9c4yKwiFg/zaGZemxNy5JjioIreguN28r1rNHoM9tJ+kk1hu0JNyxXlahbkT86La75FrhCq54vbKVals/KihpXBTfE/ybIVM6qBC8pLN2MwTdaay2LiuemDisSs+bzy1rOb8KWPZodpKD6Lg9b0Wd/HR8L+geZHp5U22kNPr9BLHcpkx4DyNCBCd2c/znpWl8Jj2zPPhDR1YO9md4MZugL2yoOyA5CohUEGrvQTsoAi7x/JP8LTwA6BngVgi13l2MmFK29qcvN5u2vpMJltrNWw2jFnZWZByGFj3BYaypUogjfAOHjJbh4oF5k8GTREfpIZ2TRG0a0LKyahtzQBDKfySQlsaxwxu7gtapa7E21Gz0LWlb0wSr5mmpcitaEu4WL1AXfdfDlaC/2t0DsV5UUCdvG6ghkd/46nhNB1rb94xh2gKyKaezF7/AmTGqEwm3Sr2tfwooVZAngdIFoqPbKUQd/dDEJYdmPXjo/E7OHYh98FYSVZFwuIJdXGFk+pvBVYdMUTVipTDN5ZWLqUoNfPCxUIRA5BhVWX95WXkCLvjIYbfpVB0kr9P4220we8K9m0DTvx6udxzGU61jW08dTokJ/BBnTzuQQZDIptK9UNbUsi7RMQ2Pz2PZobj7t5PLJz81m3Kzl/FOt6K5SQogeHn4NdSlXw2hBpta7JD2CVTF7WEpYy4WsF7CWhdpfJn1/TZ7gEIMAAAAASUVORK5CYII"},{ name : "R_missile_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAABgCAIAAADzQOfPAAAAB3RJTUUH3QgZCyg5cRg/xgAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAABQElEQVR4nO2ZsQrCMBCGozg4unXTJ7C4Kri4+AQ6Co4OfRU3cXQWF/EBCgXRVcHBSQRxEYUWEVwEL1YdappW8Qbx/zkSaI77ejSB/FQ0EhZrCAAAAAAAAACIAOQemjv91WKsCUowTVNZJCnCdb5JkxDQLO+8PlQAesWZjPY6fVNg9XjYvsbJ23ueR6tOdhQBoNJyqmVERdEB1dJ0oGSk1LkVOTxfn15QU1evYAfNaUFOLZci5jcg/G6zDF2Os4uGHWsy6miCEgzDoEwaGXcRJVd39Tc6+P2TDAAAAAAAAAAAAPAdAKM/8G/wjP5ATrUMiz+4i90fkGwefyB8izBwKeAPIjv4/ZMMAAAAAAAAAAAA8B0A7/8DRn/gV2f0B7J6l9sf2PIXApc/kCJ/YMe9XX/oDy6lMq8/IJ8DfwDAvwCuykcYVnGOrOwAAAAASUVORK5CYII"},{ name : "R_sfx_slide_wav", data : "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iJQCAgqdEREqWWdDREqWUPcwsVj3ZWp+VqfPK12ysWfYpEe5srVVTEFNRTMuOTYuMVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsRtg8wkgwAMJGlAAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxJqDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU"},{ name : "R_smallStone_png", data : "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAB3RJTUUH3QgYECAXzdiT9QAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAAQUlEQVR4nGOIY8wlCTFQqsEBFeDT4IADJCYmkqAhEQyGsIZEGCBKA1bV6PGAqZqABiBKxACEkwbJGpC10SDxEUQAubfUTRV2TsEAAAAASUVORK5CYII"},{ name : "R_victory_png", data : "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"},{ name : "R_sfx_warning_wav", data : "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"},{ name : "R_sfx_hit2_wav", data : "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"},{ name : "R_chain_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAAB4CAIAAAAcxWc5AAAAB3RJTUUH3QgZCSQbC0nlQAAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAACGklEQVR4nO2XvU7DQAzHA0t5AxgQLIiPpVRiYWMKMHSDrcJLZ8a+D6LqyMDKxgMwwFQhFhADvACiGy4Wx8nnXpzSNCSyZVUXN+dfzs4/lySwcJ7p7Xa71+u5sWaK8+S/ANC63S4NZg9Any67FpCmKQL8QTUB2OeiAMRAAGbHwewB7jbFQbEAqIPQCikRmNB0ABOaBgBVFRqYDnSAOemgkB6YDjTudFBIiUwHSobpoGTA/F68rAeZPbBNv0yAvfxqAFAHodlXZpkAE5oGAFUVGpgOdAB7u9YAoA46sK/MCMB0oAFAVXVgXzj/BWAvXhoA1EFo9oVTJsCEpgFAVYUGpgMdoFgd7Lea6K2dLXI9YDGJ2uPuLTmLP2zfkMenj40Br/sX7KpPj1Pf/XWgY4TNyi4Rnu1yhdl9J0AkuwwIs7O8PoAYtI4cAE121vZJnedNxn6+vr1nt04ysefyXbS6soy/SMqELTUa6JETBIDLHk+ttVBNmtKLzRC7/buCj6MhqwwekvuL8yPhCWedzsnlnlAijOJ/4frCIIuww/5gcAV3AgCj+F8ICIMs4h8+Pb+g8xTiQ22KBkySQsbD7u82A8DnaBT7O1wULTZvcbSPCrTm8DD5uQUjV03OZoUml8ip3yVi7s7cWF9Dj1RIBmzeH9AN7k+mXCySfEth0uWPTSyc20PY5kV7UVj3fDua6JQOE+Xd9LWAqb1wwBd6gGzeTI5zOQAAAABJRU5ErkJggg"},{ name : "R_hourGlass_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgYEx4bh+16+gAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAABMklEQVR4nGOIY8ylKWIYtWDUglELsFnw9MwUshGmaUwM2MCVgzPJQFiNwm6Bjn06EMEZaGxcUliNwhkHcF+/ebURmY3GxRM4+IIIDtjlZCEkBMEF4Vy4IC6A04JK05v4dRKpmIAPfj56TKECfBYQ6Qn8ygj4gAHmxpeHFkFIOGIgwvkgQDArQhLJ1TXBaAh/4iE2FcFDQEDBEVkQwiUmDAlbgMsgImOIKAvaT6sDSXG7OAgXwoAIUsECiEFoGQrCJcoOYmIYUkJgImLimbAPkN0OSZ1YpXABfBZghgAw9NHswKqMWAuA4MOD/cgmAtnwqIZkN6AC/CbgtADZXci5F5mNVTGxFkAAJEMBSQiCC8K5aBkQC8BT1ezs1cXKxiNFWp3MgFQ5M6BW1FilSPYBVVoVAEdXtvqwrOPoAAAAAElFTkSuQmCC"},{ name : "R_smoke_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgZDi8vzEbeuwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAApElEQVR4nO2UQQ7AIAgE8aP+wP9fm/RgCIu6oN40pGkRd9xiK7W0qyEP8ACmWvx6+UcGoFcKDJ2MOTCirjrCwoCl6FI9CcApFsC/kDwAG7CJ8QGMFj5SPYjuWqu7jAOAuQkvlZLu9+wx5UVN/gyAVGcB/NG66ID60LBdrtAuAK9XHExM8OrDHtQy/CP1jJ5NAtK7pgBzN6Q6CzC2YktC1Yl4gGV82Vc15x0JIsYAAAAASUVORK5CYII"},{ name : "R_bgatrans_png", data : "iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAIAAAAzjQvQAAAAB3RJTUUH3QgZCCASFzvy1wAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAAYklEQVR4nO3PQQ0AIBDAMDCKA/x/kUGyazIB6zr7jmp9PwAGBgYGBgYeE3A94HrA9YDrAdcDrgdcD7gecD3gesD1gOsB1wOuB1wPuB5wPeB6wPWA6wHXA64HXA+4HnA94HoPp2FxYvpJ7d0AAAAASUVORK5CYII"},{ name : "R_fireBall_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAACACAIAAADlBPxNAAAAB3RJTUUH3QgYFSQlZ6jFmgAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAClElEQVR4nO2asU7DMBCGSwdmnoAX6KtQ8QaRWGBiYGfmIVh4iPIEiKUzAytiRELNC7Tg4OBez/b57uKIil51qtrEuS9358T+40yao+tRbWIAAxjgcAGf02Nn8Hf4Wy2C4HcsQMDQQWwB6/m5s+GhUBF4hojkGzu/6+UsyUinKMnofS2mePtyFixmFGqAMChEz3PmvW/e7gIDA9Ap0ynyTnu/7sBf75v2yX1nI6BTnzv3YB3gx2QpSp47/N1Td2tAFZnuRWEvJBEVFkRAg6FrJSCbtF3X+ghoQM57tgbwryiI2HA3Db2QecMgXGdTpLvlCQB1zQAGMIABDMAwzXhQlzEIgAbkNGD4+EVrkC6CgQyWPpDOJGBjjT5AJDTJgPPGJqUPNEWGs+utLAD6wE+tPUMDSKQe6IN+7p7SB9OJ5PNw9g5/tB+v7eXCfa9ebrut7XPiGFF+4OkT+oASIHQXYuoDDOBMQ5n6IL4OuhpcPJ46o5Pu2+SaUR91L4Ln3uRvR+Pf7Di1VXsXFFltez9kGsAABjDAHwLoZ0Q1Iygyqq0f1I8gfhxYDRAvTbDWD4aHwnrq2MiHaP36QXYeV1EfIFlA6AO4fsCKgM4bvX4AD0zrAzcHdbNSaGGjb3ByP4f6oD9Mpw9QZnAQQB/E8iaRomTG472hzvQKUbnIyX6FelFDXgoCCZXbK77QpN6b8e5F8G+u8b6OaAYwgAEMYIB6gNH1AUeDiAHx2DvKiBaPmqOkqClNKXYA//H9Iiammj6Ikxnrg3j6rtEHyveLCI8xuM77RTEAOc3pg8L6AaEP6CJn1w+Y3ZHYS1wK5TWcoNE4n5uvK2dcjcbJEnxckWxQ6EWczBDeywBF0gUAZv1p2+8x+TAA36h45a8bE1atAAAAAElFTkSuQmCC"},{ name : "R_sfx_explode_wav", data : "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h1s91IJOC4HwQN+XJe3MTiRXbef/ym4ml8N1yRD6/HZXMplvS22YpH/+bqxdiopVyPRlMRxnCKZEcqlJd1lSv/T2+krNTvapnDpG9ABYAE6nZXiW5YpcvSZqEpVTnack//tSxDaACx2VUsMMUelppaloYRrwbjLmaIvFTOSJtNlR1bR2/2IKfKVW+hispTGMcMqVlaWGZmWzasb6+ZfoYzylKY7TGMYSGW5qIsFDSwVGr2/+RHEgarCQu6oMADjKAALCZCsu4i2STyFyKaFgAzAqFRM0sRPQ6ys2jRJbTMlErnKKJPlVX/8523DmsjONs5OHLBUaOSEoKkQETKjQVCQaInX//yIi50i5h2lf//j1HmUqrChAAAayywyUMFBAwQdBYoBDBQQMI6Eyyyy1ZVL/+1LEOoELGKMo5KTJQUSODMwxpWlNJeDw0FQGBUDgfEAXDBmRKqIPd/+SqqmTA1UQMREqoh//////yqqociqqqv//sJpphiH000xBTUUzLjk2LjFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsRDg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTYuMVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45Ni4xVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LE/4PAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk2LjFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsT/g8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTYuMVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxP+DwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45Ni4xVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LE/4PAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk2LjFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsT/g8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTYuMVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxP+DwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LE/4PAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ"},{ name : "R_explode_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgYCyQwHM2vCwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAAq0lEQVR4nO2TQQ6AIAwE+f8jfBpfUaORELbS3YbGi3PT0BmQWMpPPttDljclgHYnwG/EVFMnYJaitNYaCZgDpv0mGGhj5vvaQQUmjYl6fQDtwWsYhk0vBnqExsl+ITX8cwx2bPSPlHpooB2RryHdzgfwAlbacfuUfQggZmOZHTNZgZbRPpFpx98HS8EAqt9KWmCCuzJo59drAf/I0pSqlmdjamyEDWwmN/ANB/pMx+Gl7UnJAAAAAElFTkSuQmCC"},{ name : "R_verdana_png", data : "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"},{ name : "R_bgbtrans_png", data : "iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAIAAAAzjQvQAAAAB3RJTUUH3QgZCQgPKKJakwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAAmklEQVR4nO3PyQmAQBTAUO3ACmzCfuzA/q8KggeXcRlBfyaQAvKqvh6Kqvr8QLBgwYIFCxZcTILpCaYnmJ5geoLpCaYnmJ5geoLpCaYnmJ5geoLpCaYnmJ5geoLplQLu2maOD16ogomttHDwVksG72qx4CMtE5zQCo5fWssBnzpR4Ova2OBbztjgZ9SQ4Byq4N+Xr40EfkU7NQLqKxBq55wJyAAAAABJRU5ErkJggg"},{ name : "R_boss_hurt_png", data : "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"},{ name : "R_sfx_hit4_wav", data : "//tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAGAAAFtQAqKioqKioqKioqKioqKioqVVVVVVVVVVVVVVVVVVVVVVWAgICAgICAgICAgICAgICAqqqqqqqqqqqqqqqqqqqqqqrV1dXV1dXV1dXV1dXV1dXV1f////////////////////8AAAA6TEFNRTMuOTZyAaUAAAAALAoAABRAJAjiQgAAQAAABbWRUtvDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UMQAAAp8hVIUkwABbKFt5yTQAAQJIkYXBMVisVigUCgUIECCGf+7uyZMgCBBBDLu4iI/8ZdkyZMmne///9oJkyYPn8QAgCBQMf/ggGP8uD/1A+D/4gB8H/EAIAg/xACAY9YOAgCAIYYYYYYYYYYYAAuJOiorFUs8adjAeJusuF8xVemwf2otIhum5w/eftGkqSXWUOo13Mh6O63p7aPk9BVBE0Ot9f6uYppqV6n/q8r2TOFxqiWf3V5up1db6dKie6oKpQgEECdQjLLWNaL/+1LEBgALrStpnPKAAX8yq/aeoABevrTOtU3Bi3Q5FY8ivGAZWelFR0eZA8dtVQaBzN6C1F7/dlNkGi5P+rM5H9LEogBuyu7P66GVKI6aoOF7oP36IBIyKntB5QNPLK0Dg6spA7FgAM0EAwFptgN22s63vNos095Mb+Go5xz1QKw3Y35hinTj1/9DwME+nNo7UWxhxznaMUJgBQ0Zn1anXpSrG2IjAPEqWV1amatZ3WtBWCcLBAYa1dmr1/c93NU3b///2QqqNXcXIjaV/vHVyv/7UsQFAAt5hV4Y9oAJgRpu/5BQAW19XZw1FZuoIdBi9sszccP2uCRsic6im7U5qCFjsOOr7NtYqC8GdHRLP/SLxKGlTesxb/5ovWmMOkn+v//uakuZpMicRLH//VX//6zho/owLnTiHl0BGA8aXOQCTW5tU1xDfHAlDhtTf8qDzuKHOrTepREh2GARaaohhISDwmOD5To3+pSkOR8+m7mM4iRzL/TdC4rTn+/7CGkqiAhT+RUQYGIHWsFMHeY9/1gvd/////xX63qDOICCf+uG//tSxAUAC9FbefSzgAl3L60zDnAAW+aNTtz06tnqhEMZzz96eqDxb//oNjxo3/8445Rxu7ve9lImmHFj3rzfmmsco4z9tJs001DiJQsjfZN6moeYY3504446ah8aK/97zMLVA/e6x+LxsAT4AACIAAABeoAEGw+GruPCM56D8QwPHYakpmr+eDcceggf1B2GcTBlsCBr9igt541bQda3Uk/Qz1FE9laeSTa8t5+ZvQRZ3uo2x1vMO/qU9M8z56a6t7P7sO4kxWpxxtAWSip1aPL/+1LEBIPLkT1XvGGAAAAANIAAAAREjPaqmZmTTSIKBN7M3Wbqrsyqqrxm//YMBKJjHszKUDMGAgICAVUv+KqqqqX//7KqqpbMql//V/jMy///+qqqkx6qqqVCgICpYGjvxKCp3/8FQWpMQU1FMy45Ni4xqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7UsQ0A8AAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"},{ name : "R_block_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgZCTUYwZmX6gAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAABHklEQVR4nO2WMQ7CMAxFAwKJM6AKOAAr1+kN2LkHN6g4BVdgZWBCgBASEysLlAikEtk/dqxmQSLykCb5frGdtHVlZy6bQ01VfeVW11ZSW4CK6cY0Vb1s+vt1l9jztvoYX5wEDxc0Th+7gljIMEdA2ng05IP1daEKAQDGO5ie4eBhUwoqDIAVvm8LwvCPfnAyq6Bf6k44OWEB+j1HOn4q5spWgyYO0gkbzJIN4N6ZgfWINQpQ75ffO9x+KiB2GI6nS8ogkKtvCH6NickOdYDM4IslAEyOXBU+q0TAxbGp2LaSUhQqoS9Bpaco8fMAZxWAYELqFGE6INymHKsZAKuSDcAPUkrBMgASgzD84ZhS/wf8JkB4T2QA8BuQ8ya3sRcDzkcfUK4i1QAAAABJRU5ErkJggg"},{ name : "R_hero_slide_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgYEzAHmOsvmQAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAABdklEQVR4nGOIY8ylKWIYtWDUgiFpwd8j4iDymTgQ0coCKKKGHQzI5kIZz8TR7KDEJhQLEMYdoZodDHicjInIsICJAQKUwAgI7jHAwc8vbWgMMgDIgkTpMHRrMOwg34L5T1cBEaYEVZzPAPEBCNyDIRyGAkXIswkRB4m2YVCbGBjYearIMAu7BcAIgKD5h2EBdQ8lqgUt16ExSLMAuzBSVL8/HoTGINMCaBDBAFoo/Xp5GJk746YBEBFlA9aC6NutuZCc9eFwAhABuUAEV6OyVgBNBMJFFsFZ2IllcwERXAPEAiCCiMMVAO1AMxqXHQyYpqPZgSwINx2CME3HtAARBzuy5iIHncLEXDiJDPic2PCHOTBugEYhTMMMR0wnY3U+sj8wgwsepExwa+FOeJA/majkAQMZ6hfgDAgbxd+YlmPGB1bnY40AZLejxwEa8JiWTJI/0AA8DqAW6F0uhiC4fym3Awqwhg/WzEFM/QUPTJR8gN90ChEAnWnXactC1YoAAAAASUVORK5CYII"},{ name : "R_crow_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAACACAIAAADlBPxNAAAAB3RJTUUH3QgYFA4tB9rrtwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAABhUlEQVR4nO3aWwrCMBAF0PjhNt2By3YdVVD6SOZxZyaFgjfkoyjek4elHUh73J6n9kbgokA7Nu3Hy7JkgKa0MX1t1RmIzDf680kGsKUOeC33fZ8DrNdd+miEl6hr45CFGeBxImCszzaDKYC/ydF09yYoAUj6AZgerQL2nELp/n1Q7wQIECBAgIAHpJ9iYaDCBIBTnsmu4ZYI/ogMACkReiD05oKUCDKwTzFWCSkRrMHawHptlwiBGk1rdomQeTcdAbSEqgPzZ+D/y0N3QDQ9DyDRPqAxeDoEFDsBAgQIECBAIAtUHvEZwDbyBQjCZAoQ2+ikfAECGpcsQLQhGw0tQNLGvxUg+1/W09UlcueERKub7O45ng4BxU6AAAECBAjoQO7hlQHqTODoyeQ9cA3k9JIFiMY+HTm9VAWad3rpAIyLYKwSeHppA8QUDViv3dNLwgxCzT291O9BAkDPFyWG34DTSz8gl47cBPIeICSYLiyRu2J4tLDJ/XfldAeY0gkQIEDgL4A3KpeKnthda3YAAAAASUVORK5CYII"},{ name : "R_sfx_laserOff_wav", data : "//tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAAE5AAzMzMzMzMzMzMzMzMzMzMzMzMzZmZmZmZmZmZmZmZmZmZmZmZmZmaZmZmZmZmZmZmZmZmZmZmZmZmZmczMzMzMzMzMzMzMzMzMzMzMzMzM//////////////////////////8AAAA6TEFNRTMuOTZyAaUAAAAALAoAABRAJAjsQgAAQAAABOTjvuJ8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UMQAAAmsc1YUlIABkRrvNzEgAJzRkYrFaNGjFCCyMLgmK0ezRoyMVisnkKABgDBMVo0aNGjQCgKAgCAYJGIf/+c5toEDAIHBAD4P6QfeUBAHw/+kMfy4IAgCEBg+/8uD/A4HA4HA4HA4HA4GAACME1e+97hCpcorKNhhH6x7uaFngLmVTJIoAHsIJCtDQvLTuJ8AYoQVGVNXRtaLIGPIARpH/tzQiRJEmQUi3/5mkVjhRNTX//STNy6blFZuc/yhsLA2I1rgACk5JbdwIrr/+1LEBIALQMl1XIGAKX0SbHSRiiUQYH172KHGmk5qwMzIxIqkv3UkPXNmLWlWKSlmsmsOGTMfU9t1bQ85Zn9X8cbywTUrKSa9+/Gn+/87atw5UypZTzf0t3tJNC/63GmCufzX+1qgAABNpyWSXjpHIhDJxsKgiTTjlIpockq5ZmcopRvqxS4xqJXh/QEZl8pUMVvhgIrhrA3g2L95cXN6xNCivzQjsn5PjHf/Tpv/4rv/Fgb9/G/F/cXFk3HzQX/8Jl4/LKoJAANZtDgw04JvFP/7UsQFg8uwgw5N5MWAAAA0gAAABEo0kSAg2dDYhgHpm6g0wvmkC4zgxhh0BzztN1gR+qWtfBd4KIHEYJApcFmJonaRA4NMTUSsAiVerz0aJMHEngqRGpKhJ+VI8WJYuKuxZu0V1t66TEFNRTMuOTYuMaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tSxDSDwAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+1LEkoPAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg"},{ name : "R_sfx_bossJump_wav", data : "//tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAUAAARIwAMDAwMGRkZGRkmJiYmJjMzMzMzQEBAQEBMTExMTFlZWVlZZmZmZmZzc3Nzc4CAgICAjIyMjIyZmZmZmaampqams7Ozs7PAwMDAwMzMzMzM2dnZ2dnm5ubm5vPz8/Pz//////8AAAA6TEFNRTMuOTZyAaUAAAAALBgAABRAJAdqQgAAQAAAESNG5j6jAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UMQAAAoMO0w0wYABcRstZzKwAgDAmO7RIEgSDAwMBLJ5+vu2vXvoiBAAQiIBiwfB8HwcBAEAQBAHwfD6wcBAEAQDEHw/BwEIgOS4PjwcBDvlw/8H9vwf+CDoPv+CDvKOlPlDmGGGGGGGGGEAAA8cVyoEVTjhbho0VoL0tgtTS5vLy4G0IaeAeEUN7ZsqywmjU1zZuu6ECkakKQEz3xNcompIRJaFXHx8/m5Lo3PtL///+/0jq6i0JNQ/4VIhYuh6AAAACSqcjklltu12v3D/+1LEBwAMSE13uJGACWuNLIMwkACjTRk6LRx00tjLIVkOk5A3Cx4EOMbUE1ocJJZJsjoK1SBgXp5GRLVdw6KRYA5G1b3XmvDoTds9n6stKc2cuL117PvZ0oUbuNbmR4Xp5vZzYOwuDuXTfYqQlurtZvGp54Y606PxPCXV85odUZREbrpnWaQTcpPbizTLoZGMdhmLAEGBcEwiKhcIoJnzY5CzCEkHkQghJJrXDQAg4QOjeNrRRcOS8ywU0V6LGrV0x9rkVRg0NpJtJLksLikMUv/7UsQGAAswXWQZgwABkA6sizBgAcVfeWSuiltSRyIMmaiNE4RWUby4Xzas7IZKSz7BsLB8CEA+AybjSR5wPA+lQxghHkjA8XSOeZjyS1RUXSPF2r9IokexL+9ivpX+ubF5sABBSWYuc3QqFfpxWL3oxMTLff9PC6STz0J0TTHWusWakmllNmp5rWc0d8u677pTFJ1mnBjdFFDHUdT16cJTHrNMduyk3Zfb12brNMK+tXaMvs5rdLNy73Ms+t3bmvoKctRhmJUAAAgoJORxyWW2//tSxAUAC5hFebiBgAl+gHI3AjAD27bbcDHEc0HS0SpW5qdkRyKIRaUmGBkLYrbnQ/dSwmhC3LVTvw09pPt65Da9nMz+/L9tWf7STROlibxG27G6b3ujU0ztWY1b730zfumU0pjN2mgA2nHJJJbLbtdtttt/i7zOKLSZACVZuBSQHKjyIFGIXFkA4WssXlGBsMML0i3REcJHiMFsBK4HUo0cODKYV4ygZTuk0ht6y6vK5UdWknYuDIUjqULixCQDIVBMJXnrb4oYC1IQEh9CtmP/+1LEBIAKuGdmGYMAAYyOr+sMMAMCTzyPbVk05TyqbkNINTRRAzTEkE6LY2bnYrp5SoK2HyywbB0PgQUNIePOHhEk0gk8JnCC2BsXNIfVc0zmBdE0jFb2tQMayro9/jGXsA0abr/bjckjkkslG4OoaqMp83MLdPTNCAAjERHAQcGsnHtqITuZEnyGKFTEqK4dfzIV4n0UkIdYQIL112/84lFwSgeshLxKNKrnkLKJ1+BQKDzmWQrrO/DLSv+syQhxxAtMASLTbBiGJEpWdVrcbv/7UsQGAAqwVWIZgYABopQxdwYwAxqDpDYsT0pl9IIJgoYGqGJCiWFDMtUEsYWDhMGiRYDAUGAGEhEASZIShAmaabao6ePBdhk5oWRagrFmG3JCq1MGq1xZBpaf/s6QAko3I7JZLbbdbttttp3hRiLIKxk+KVHOCxQyNSTFmMLMyd6ZGTmjo6w0pO9lsJTQnM4kw4WkGYp2qXWSYjAZCkSF5BYgeWITqkAyGQiBhXJGknEkUedFMKoJTKrF7C1AynakjaRJo8sqAAkI//GmssHp//tSxASAC4BzYrmBgAFlEetDMoAAQ8hktSURfeWMUl9fKtdl4gQqhRYI2AWZBYSvdqqpCdEjv/4zgcKmGKEoSBgCIaPKBAKhqXJpDAHJO1LCQNEA8fPuaAEvR7Lho947om5Wz9KUoQgJFc0LHkQYeFI3KpmIOtLa8uuvxG6mUSEIRtkzQoIweKsFbW4mF4iLWLXUeKSOLXiL/aLx6UYDsKLuUBwwER6A6vXLkAiBxBZs+KhcQMC7/s/KEAuBCAeAhqoGSWWR1sAAaG7KI53UDw3/+1LEB4AMNH1aGYQAAX8lqtcycADD8Od1F6QTCdsIyBED0Wjw8OFDRUob/0KU5JBcp/5jnq59mQZ4HAgEBoWFTnCBw4FgcMgEK+gPky4gCQuI0B93wIMcNeHwZLCwqcNGf8+kggokaAAQSSQC2lnFJXgqJiDWd/7iLrlMZ/4v0dGuI4P0NM4TjAjjZDjvJiQ1Dlr8aDQgcNDVNZW/IE0MG5M6h07/dRuTIKek2ptv/IGTDDHMMzv//5OXD5cHCvs/8MKDDwHE9QAACBgKBgMBgP/7UsQEgAutC2u41oARdJdqQzKAAMBgIAgAlSVFaK1H5iXfCbDD+EVEmCrfhehAgHMAG7/LoxgLoSUOb/5gJKC0gtJ0S3/8FZHcWjhGMI0MN//k4S4J8YnBLh2jlNf//1mJdomKh4i//UNsJEDabASdb4EfxFWGv9/JyffX/sUBUEXmC8CUOgbfoH748oWFv8XPt32Flr/73tMok2CRX/+0rRKqVXkn4IOIHywFBoTB3y7wfh+IjwiJCE79E4UOKqErgVhJYiUEKeAAeFCcmGYK//tSxAUASnyBAt3zgAEul5+J/Zwgj0RhsIJQYCyBemC0AnZgSwBOBACQwFUBAAwBEXNMAYADXMy/////mgRF//9l9anq5tR0HovVD//cp//0kYjf/8HpVH/52d//AtD6H4Kh9hg0wHacuzGjGZkYwYcDgoCTpi0zGrL+nb/KgoWtnIcVMNPXU1Jhrp+cEQvf//57sc/1Gp76+g9wWD/9RcPeG+z4nBLhof7lsA9CcPsMGmA7zl2Y0YzMjGDDgcFASdMWmY1ZOzFQ3/6hiJh//2n/+1LEEwNJzaL8L+1BATM0H0H9qCDmTW/9Cwt//7mf/zSUn//1PNN//OM//1ZP/qajf/5AabR/+cf9P+RkR48Ij4YPICJnYvBqh6ZWPGKBoCCkwYelMWpX7o3b/IQ5/5lW6//oKy/9DJrf13+hdv+Yah3+/9ytv9T2O/0/nXT/kZN9/b81kun9B4aq8A2lkIZMB3AFCYBZKAB8rAAFamKtCe15QaBkTGTRlpllpmTMoyjGWa4El6uMo7aTNXSioqSy86KogBv/9V//6lWoff//9P/7UsQjA0pc+QIvpKnRMjPfSf2oIBQLZL8Mf61dv/z3U1wkHndhy5gv4G0cIvmelhjQqYSCFxVjTsqjNN9EQhJf//yjmf/3zyMwmW3/9mQmJG//0yEQ7//+xGB5///mFjaf/+pzv//81P//rISRVRGgAADtUQrswSECePE/NSaMgJAwJFFl07Wpcm+o2f//x8XiSWRjjjmsd7VPMOdlOOM//+pn//1ERv//geX//+eST//1c7///5zmf//HSbtQfMuGQmCmgXB8pps0RlhphwCA//tSxDEDSdWi/m/o4QEtI1+J/RwgFdUVrUtpvjH/26IPmM1d2ueYzc3s3ZDjT/X/0czR7f+KjddfX6AGP/7eo+e9fM/Cm0j4jfQzrExqAgAA/10MhMFNAuD5TTZojLDTDgEAK6orWpcm8aN//NFZIal3/Q/POOG5guK//oxyvt/81nv/+gREP/+FCdf/6FjrPixL+8KU/BvZ5VOMn5HhXpgkIE8eJ+as0ZASBgSKLLp2tS2uhVm//UjZeY9XSkjH5hMkqjmnulZ7od7Kf//nf///+1LEQgNJqRr8b+jhASOen839KCBBe//9AwPfiAlV6CX++hT/lRBVqQADU2wZ4wfsK5MIJBHzAuwJEwB8BIMBWAMjAIABYUAA0g1K2rw5GKSx3PTueiImhdYIACKACK7wIIoAIE4fQJDiwf8Pl31vD/Y/8j9k/+r////9ACSSS2A2O08FcIPBFL91HfbO4UPsQrWGJQG5EUHkADBYRyDEFAEQ6LMBuH9CiYNcORFPos8zupJD0gOTRQxIIuXt7KJQWyjD33ff7ijmFnKOGuZ6Iv/7UsRUgAqMXw5V8YAB9BvqlzKAAWlImntZJUmKPzHspJ80554LBREjggRxG/Pf//u1uFGbsbNFSfAR+HrKAABH/bB/GsDVNQEuq1UyLMdWs0CSNZihBwYcGRVCqSEqmZsREFIg4KNNhUmBiSAC8SCiHAEUUKSpt4TNFhdqOKCs2bjmfocKCrbm4r/mjFbd1XaDELsO4apPxqv1wiXEwH8KCu5VdkySeByaOIhmRk8uMxi8PenXeNrNfUIRGSCbDo0uGywwLIMEIwXLuQxilaUC//tSxEmACmRVYrjxgAE5jWxDHmAArTT3K3e8YLzKf/9qP6qKA7xSWnmEmQ9TtZ5MrkkorHK7VF3RImh4PZVol2Tp2zl5bnmQeceIhY0HBhELF3m7j4HYOckXtVIIuG1telIq1trV83fucjb/+n3V3RwdRZp4aZtbjRz9bVp1asrGzDuOSSnbUCW2qdBm7l8aKlAbPCENBEPixcqg8ChoRIIoFwsocXIIS1KCRKbY42xC0JU8huuWq/9O7vorvQleqkBJZZqjNPDBBbEU2x4tLv7/+1LEVoAJfFVkGPMAAUKKLMMekABY7RvTxncIQJBkGwqEQiQNPFwMDhMogVAzjLCCB7HOaSaC6zTlOFhS8cog56bQDe9iCb00Xb2LXfRpvnKF06nSVT+LiJBVX2XC4dy1HorJpXN2bcZp1BhlAQbK4GxQGQojcOeHCVJvd72mWOTW1oTNEw6KCl5tFyFAdO33IShjRc2lDdyPoR6NSv9rFQullhaxh1WrAz/QDKozWna1Wiy2BExKNUibR1pb6l0Nurmn7HCwjBUgKugEVMDgKf/7UsRmAAokL2xY8YABKw6swzAwAFauBmpADTY/lWQNWVq/AKYGUhDP+vV21LAAAhHkAN4I8CqEyWlKaJ0st2FWxYT67ChqQKASMEkjZ15mfRxLKrvLHEsOJU85RLDiSWvMz5xq1zSOyjjVzSOgqd+WPEcGlHv/KnRLlf8RdR7/8SpMQU1FMy45Ni4xqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tSxHYACRBdYhmDAAFQlKPnnmAAqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+1LEhYPAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg"},{ name : "R_bg_png", data : "iVBORw0KGgoAAAANSUhEUgAAAZAAAAA+CAYAAAAF3k3mAAAAB3RJTUUH3QgZCCAViV9ndAAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAACu0lEQVR4nO3VXYuOURSA4fFDJDU+pmF8TsZoDNP4TEpKUigpKf4IQgghhAgh5PdxInFA3jXP+6y993MdXOd7r7Xb98S5VVe/A8CoJrIPAECdBASAEAEBIERAAAgREABCBASAEAEBIERAAAgREABCBASAEAEBIERAAAgREABCBASAEAEBIERAAAgREABCBASAEAEBIERAAAgREABCBASAEAEBIERAAAgREABCBASAEAEBqnT025WQ7HO3RECAokVD0aXsGZRKQIB0h79erlL23LIJCE049OXSP2Wfj9F3VpPsWWYREKp28PPFkWSfd6hG3VOtsufcNwGhKgc+XVix7DsMQRd7qln2/PsiIFRh+eP5zmXfqTXj2FHNsvfRBwGhSEsfzvYm+6616XM3tcve1bgJCMXY//5Mquz7ly57PzXL3t24CAjp9r07XYzsWZQoeyetyN7jOAgIvVt8e6p42TPKlj3/lmXvtksCQq/2vjlZjexZ2U+7svfcFQFh7BZen6ha9vzspk3Zu++CgDA2e14db0b2LO2mTdnvYKUEhM7NvzzWpOy52k2bst/ESghI0O4XR37JPktJfp9Lq7JnbCftyX4jUQLy09zzQ53JvkvNs6tF9sztpD3ZbyZicAHZ9Ww5TfbdW5plKbJ3YB9tyX5Do2oqILNPl6qTPbMhzLjFfWbfkzbe0Uo1E5CdTxabkT3Llmdb4y6z70C9b2fcqg3IjscLg2C+MFzZ/2wzAdn+aH7QzBeGKfvvrSog2x7O8RdmC8OU/S8XH5AtD2YZkRnCcGT/0UUGZOb+DgD+Q/Z/XUxANt/bCkBAdjhSArLp7gwAHciOR28Bmb4zDcCYNBWQqdtTAPSo6oBsvLUegAIUH5ANNycBKFRRAVl/Yy0AFes1IOuurwGgcaP8/38EZPLa6u8AMCoBASDkByjkn89tsiGQAAAAAElFTkSuQmCC"},{ name : "R_boss_png", data : "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"},{ name : "R_sfx_fire2_wav", data : "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"},{ name : "R_sfx_hit5_wav", data : "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LjGqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjk2LjGqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7UsR+A8pwhwYnmZQAAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tSxLIDwAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo"},{ name : "R_sfx_item_wav", data : "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"},{ name : "R_title1_png", data : "iVBORw0KGgoAAAANSUhEUgAAAPoAAACWCAIAAAB4uAJLAAAAB3RJTUUH3QgZEBMi17xVgwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAADrUlEQVR4nO3cXY6bMBhAUTbY/W+hm6hSTVOlUwjms7Ehts9RHzqMQ1B08TjkZ1kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA9x6Px92HAFd5/FFwqxYHA22VhSt3ulQwu2udXj3bzSp4mNx//vrx/Hf3gXCV3NzL1vof6FW53CdSkHvLw7nI98TlPhG5y30iE+a+6lvuE8nKfYCF+zZuuU8kN/fGh9PW27LlPpF47qZ2ujdP7qZ25C73mbwKPkx5vNy1Pp1g7gXvNfgopna+xHPvt/VF7jx9j3gv6N6n9kXuPM2Qe/XWnSe9knutHdKB4XPfS/Oy3J0bH+Qw9/iVys/UYtUu917JvcoOK46nlW3Bqy2Rpc6Hkzt/zZn7lSuZ83dHNcPnfvvC/fzdUUd6pZ74f0davE/G89QuDZ97o/eEyb1L6avsi9zDu601mFYS+b59UWmA3LU+r6zce2x9kTsvWW/37TH3Rt+uIff+5H5wSe5l+5H7R4jkHhz/+F96n4mR1T8+0uJ7wlxx71Kt3Ld/BIIj3+7zNSZ4/qTJnS+RhiK5xyfpvXAPR54p/vALfgtalHt/KuYe3P/hVaDimyc8U0sEd03uq3+598gpwXTO5L76VXqGbpp7WdAVzxB93yneTd3cs46n7uxedpNa6x+536l4HRxfu2/H35J7YpKObK+Su9ZvVjf3JfbENP48dW977mGnV+17bwn+PrUnbhtfhcv9Tmcu6qVn6K23Y9JbEveVdeRlC5LV1H7mL0B8AA01yj1rJ2UX1OODixckBTcsyN0JcJEzF7CXTt5EsJqV0wuS7cb0rba/Srfb4lNUhJyPtYvcV7KuJ0YW5Wdyd9H9OnKP/zYr98QZ4gWme9Radp/fycWKX2ZqcTD0pMfcC2idLzPkrnX+kjsTkTsTkTsTGT53rfOP3JnI2LlrnbWBi5c7a6Pmfth64u3Ne5/5Kt6e+BBZ2ZtJKTTqoxzJfW9LIt+3Z0X6bEnfMH1I1DfeoxxZxlyQe3wAlxrscW+a+17NiTXM4QCuNtJDH8y9bO2+V2069/QAbjDGox+8IBPpe/Xjq9q3+e5tDw5YnXJcYYBHvHXuy9FsXTDNv/0RDsSvtSdSO8x9+f/Z5+H2vQHp+4WUrNeVtm1to8xa0ye2H/71sJIhm5dRmYXWmYjcmYXWmYXve2EWWmcKQmcKQmcWQmcKJnXG57t2GZxvlAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAj/QbgT3jxTRTwKMAAAAASUVORK5CYII"},{ name : "R_wizard_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgYDzQtMgB5XwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAABW0lEQVR4nN1WMU4DMRBch6PhHTyAIhJfoMxFpKUGCX5ASUEdCih5AEXKPIKOLsoDqFG6SLksWmll1vbYvlwaRqNT7s7e2R2vfaEb93BU0n8UWI1OlYcLjCjAsuv096N7E4bDBO/ttzA1pknNNPDncwb3beu/XS8WT91tdGKkAvpbBH7FoUH0uMAn3WENTZ9D8xVEjwukkuVb35yS6BkBDaq3El1sudhtmXj6L1LtNXeNz910JpT2PSNSVrdpCGOLJP7zdaJXgKSALHWJLR/dC1IA1QFbDEGQ5EbjzWk86Qe0BoWNeM0nGkC0LnPS9TMn00V+4s+uMdTnuDhKWWRsuXIuG6hOIITR2ExnzCEFRENk+CrbYhgB8yXRUsBxWyeAMabXowgUpt9T4HwyKR98qEXDC0j65qM/pEAIvM4ZAdOjvvuFRVRUULW2RQLgD52gqIjseTu/dEr8MMo9pfpKkWjjuycAAAAASUVORK5CYII"},{ name : "R_bg2b_png", data : "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"},{ name : "R_clock_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH3QgZCAENFqzqwQAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAABN0lEQVR4nM1Wuw0CMQwNLHArUNGyBRQUwAKUiIYa0dCyAmIJREEBG7AFBYNgFCk4/iTOcSfOchG49/zi51NybtnbtJquKwKjqiLZpACvbtfohkDI/XwI2coMfGmczQjwuqVKfafHYHYL69VuAcnXBMZDFgBOoGml8Rrj8wKk9HR8DI9gTX4SGWsHvrovoQE4WAwq4HcRCNf7GlIj40eewpuIBPBj4945mGgIFiX6TWuIRHUGCWdEsIb/ChD36wWfhNBBkftZlmxRPY0CAc1Q77Uon59BFooBBS3ys/P12FoSLhz+Jz9f1dc0u0djH4LA6XDO0kQNkRgJPC8TTDZquLhdXOQT2i2WMBqPIQC0202dgdgvMT2cEAlXBYHQI9DSRgHAJyFGYb/x+etoufdb/6r493fR7/kGLMsJhPX1uvQAAAAASUVORK5CYII"},{ name : "R_bg2c_png", data : "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"},{ name : "R_hero_png", data : "iVBORw0KGgoAAAANSUhEUgAAACAAAACACAIAAADlBPxNAAAAB3RJTUUH3QgYDxUFiyrERgAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAADjUlEQVR4nO2ZPWgVQRDHzw80iIhRMIUIIoKVklbBxspaQjCFwWAjhmCRzkZs7CxElICEFHaidoJVmhe0lVjF4iGIgo1KCAEfRDJ5c2+zb3d2Z2Z3BYv9MxzLcne/vf26mZ1mes+cyrZWxnau38fAJPc3CYDWZAwpABvetn2YEScpALuvW1EweECoyaT5j+9tJDrTN1B3t+7PxkOnQIoHzJycdDEew71TDlj69hLMrxc2nwe06g4s8FKoCZGkYzBzebIlNc3Bw/dET0kA0K1oS51BR3WHhnr04hunoAPQsob614drTiER0HbRQE4v9X50gk8KV/KJ2UNguNw2Py/isoKCsfStwrwCGWCm5nfnJlj6Zmc3MMRg2xccg4W18ciQnH48Z66MSOzZ10fBTBuxcHxqBMx8BBr7BQQAXwcAu5J8u4QR7KJLEzdM+e3153Ddd4y4+cvdJ/EeIp65fe4jWJG30wChrj67hYX3r17E7mPXFw44mN/1ZrQiU9b9AugQNL8pR64ccGqwM+3R8sWvg/Xlns0w5pN4gGn41wdPQwxUvNVBgC+YJzhVfIZU/moiNyK/UrgNM7PIf5e/9yWuZJQ/eqHBDClloSm20kb8R3NWn3Ar5ccg3xQAbeiRAlCFHlJAcuihAKSFHjwgM/RA49ZBRuiBigEyQw8GkB96MIBWGaGHDJARejCA/NCDAdDShB5SAHSRHX0oQg+UaiNShR7qzU4beigAjk9X8qdvA5wgR/hHE82irZ9/wbAs8ahtpXvXhQFkfFASALrwaR5NBdgvuWl0YgSuq+cfNXJ3aKD0MfDDBVqSqWaCHMeKrQOSUXKhoWkd9wooD9Buc1kAOUN3+q713XWABN+dB2T67iJAju8eAxTx3aeZX2a2797EXUcX4zHcO+WAUr57ENAq23fnANm+exBQyncPAmjpfXcekJ42MJJvRAm+u3SzS0gbpABUaQPZVtHXuzuLpqw76+pL6r6b883yrqOJDBp9cBADLKyNg/kn6/8qALF7Rsdgp4GdXDHn+SV9UwSY/IGTP8oFOB51QiSrA9iY3IWGs8ipXF/uqc/5/S3BOdgncziJkT4JiBzvZ3URKn68D30YyigZEQBYU/jeUKrA1J+6Pxtv3478LpJ8OC4OOyWTOE1ZRu46yLeaP6j5g5o/qPmD4YIOQKvmD6JW8wcR1fyBUDV/ELGaP6iAUoD/NH+wDSBXe4MjeaY8AAAAAElFTkSuQmCC"},{ name : "R_sfx_walk_wav", data : "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"},{ name : "R_sfx_block_wav", data : "//tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAAE5AAzMzMzMzMzMzMzMzMzMzMzMzMzZmZmZmZmZmZmZmZmZmZmZmZmZmaZmZmZmZmZmZmZmZmZmZmZmZmZmczMzMzMzMzMzMzMzMzMzMzMzMzM//////////////////////////8AAAA6TEFNRTMuOTZyAaUAAAAALBQAABRAJAjsQgAAQAAABOQM9AvXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UMQAAAm4hVAUxgABiptxtylCAjMQwbgfEdWws5hYscbJYJgTA+BACAAABAOCIeLDASxLMzM/Xr7ze/zSlKUvf5mlKUvf5mb3usWOAgCGXB8Hwcdwffl3//8HzXgcHw/+fwGAwGAwGAwGAwFAgAAAlcAS2ZVMDkowMYyvcDvHxOF3gKmgM0F8AYYAUCDz/g2sHwiDgup/xCIPmGSI8Y//w8A5hBURCUcz/8ghDyoRMi5Ai5//pGxuT58xLxif/6wUWPFCKgAAaGlFxKmC4HD/+1LEBQILvIdtPJMAOXMK6Q2GGRmIgNgiDqNlqmsjHnS1JvDezLf1uf6+V97uJzlxutOWi+/7XNfH61AVlztaNy+nnefbXvy87ylQ2mG58LovtGP1947Xu93fvU8yao6E6DYKyb+WE/YAJTlDMWoqVI7kQTHA2gRyZ6u4AI3llCEZ9bhKJxkFXlObACSOJbVftVHJJum8CoIKaKCgXoKb4LFZFHGxQUWd4rEKG+bGCjhpsqIoN/8uHTd/hUFx9EyKx/vTZu0HgAADoHBNGAwwzv/7UsQFg8vQoxBM4YNAAAA0gAAABINJ4BGSXDAqqrNWMvlxF1N1ZqrcOAGg5LANiCUBGIKsSTgnF1QZNnpysPjlw+SojJCLRysPkrh8lfEkpGxJWHyVxbA8c0eZiXQRu59aWZR////+1UxBTUUzLjk2LjFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxDQDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEkgPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ"},{ name : "R_sfx_missiles_wav", data : "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"},{ name : "R_bg1a_png", data : "iVBORw0KGgoAAAANSUhEUgAAAPoAAAA4CAIAAABbrnLVAAAAB3RJTUUH3QgZCDgX5UqeAQAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAFCUlEQVR4nO1bvY4UMQwOpyspkSgQD0BHi05IPAkFHRK8Aq9CR33PAdLRAA0NAuorabiCESOtovw4TvLZTmaz+orb3dn4i/3ZcTJz7uW9twsLZwJnzqAfb74+O4yVYzM0x8Ry36J79e7RCdK2RhaTmh/gXlW2eBC573/DI+HLaFgxTUGScLImJpa7aJj3ch6MD08qrB9OhM0pVcVO0+4R5C4R5jiXxiyf/vR9h5gTIxAsy5qmjyB3Cd8l6/qYcp+uuhuWD3fz/sWkiMOMHTmumqfPN5hPf8Op4wqomhNjBk6fsDOffBtEw5zrYeB5Bac6TioShIOoaRJ25vPvcZxQmAmhD6X1JFVzSlWEd8eqWXfm84c4DjisfyaT7GfMJ67jBwW2+pyd+fxRjhMNySytwuBIHu9qEnDmLmiGqMuScjef8gEQVxBN6858/gMiV92X4uHuVTbtgvfXr6/MYR6Pm1XdFR2rad0FUvvx6Qkcvz/f38C//kSOnyG7iTEzZy4oOBCr9apK6iT03YltDm1JVcyfhSIC141ZO5qlBZD7tw/PN5w0V1XIc3KE589cMOn3isv7ON6gq1uj3JOO9sUtp7wkgc0u3XTtLjAXKySc0gncYFRh25ZELSuW3JnpwnQNERK6VhHjM+1CqiAkTsxhUVUDqKFaVQAhYfE0Jqx35wuIFqicH2l6EhY7lR0HHqLgc4bLeZZGQ5k0nCRkKbdF26bIhGf8Yeci6Z+5ddJjVffa3kBIRkW7uyY2FOnxp4zqCprlopyNRF4p5BvEBDFIXTPD7HQhc2tuuyV65aQmirGhLZq0xXKrxBSLDyV3fu/Y76bO9a6KWBB1/y0kZiatUb+UJfTqH6blIlJll3Nxobp3DoGKluj4TFtMxUxRyfTZjr+BHvGuag60TJMfQtZuieAxh/LtWm0ncq6eK+d39Mq96GKF/B7E70VXBDz5Vx4bmqfDM1X3TleakzlnJLdG/orUfAhBGI1/BZY70VS0Dbg/s0CAnnPt0Y25LPrBnAukEQKWEvowrYFnMtzhA8BWTWFwfN5JKVczRAW0I3nqX/xtMSFR7U1zQOmqARQAcHYxbJqZOHhCTVtbdFFqIMbhr+NVbsSitsG4YTxWabvPLsgd61BiNKumot+o31O1zYJWj5orqohJFHgskmLTq+4jnDb0JFXyV5D8jAu8dNpzBgdW9HGAlzvwNvUIGaKD/oou1NznkMtJ/qaLnyS1YxIju9wX0g/r9McjGHzq3Bi5K8hFwZwDH43Pu0/xdJHEM6hJQ8WQ88eB71umTn45dDUz2Mfrho3QsMT66Q0+NYhz/DleuI7X3d3jDT0jBKMVr/nz/QEBFJMcscvLX5ABt3GqhgouDt72hAAYPpNX0ZOhRJM5EXfG/ldYEKkJ3/eIFjNgKzIjrv//7zz/epOFRfAg8vAL5RmCPm5PZnvDvSq5E/1DPSIWP1FTjFwQLYld4zGQvC3AcVGzynNreE8ZTctdOQXhDdIJ49wLtKXRX2KbbwtIdLlVc/Svubj98jAGfD9BX/D01a0QsBPhv6RdaviivRrHWjR2HA/713SdzASD5r4aefufzPYqbAGOP1GgEdslgHLXz49/6Qs0Y90yL+Ayt3B4qPV+Qi2ZM/fgwkQw3zl0wpkzWFhQgzNnsLCgBmfOYGFBDc6cwcKCGpw5g4UFNThzBgsLanDmDBYW1ODMGSwsqMGZM1hYUMM/nttEXnlcqEoAAAAASUVORK5CYII"},{ name : "R_boss_model_png", data : "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"},{ name : "R_star_png", data : "iVBORw0KGgoAAAANSUhEUgAAAAUAAAA3CAIAAABLvxcUAAAAB3RJTUUH3QgZEAwmHYufBAAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAAhElEQVR4nGNgIAoUFxcTp5BI0N/fT5F+a2trFM68efPQhUgyLzw8HIWzdu1adCG8+i0sLFD4VVVVCBkg58qVK0ASoQohj10/OkhOTkbhPHv2DF0Ir3504OXlhcLZtWsXuhBJ5hkYGKBwWltb0YVIMg8d+Pj4UKQfHZCaPggBRUVF4hQCAMu9K1dBPnDqAAAAAElFTkSuQmCC"},{ name : "R_title3_png", data : "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"}];
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
h3d.impl.GlDriver.TFILTERS = [[[9728,9728],[9729,9729]],[[9728,9984],[9729,9985]],[[9728,9986],[9729,9987]]];
h3d.impl.GlDriver.TWRAP = [33071,10497];
h3d.impl.GlDriver.FACES = [0,1028,1029,1032];
h3d.impl.GlDriver.BLEND = [1,0,770,768,772,774,771,769,773,775,32769,32771,32770,32772,776];
h3d.impl.GlDriver.COMPARE = [519,512,514,517,516,518,513,515];
h3d.impl.GlDriver.OP = [32774,32778,32779];
h3d.mat.Texture.UID = 0;
h3d.mat.Texture.COLOR_CACHE = new haxe.ds.IntMap();
h3d.shader.Base2d.SRC = "oy4:funsaoy4:argsahy4:exproy1:ejy13:hxsl.TExprDef:4:1aoR3jR4:5:3jy16:haxe.macro.Binop:4:0oR3jR4:1:1oy4:kindjy12:hxsl.VarKind:4:0y4:namey14:spritePositiony4:typejy9:hxsl.Type:5:2i4jy12:hxsl.VecType:1:0y2:idzgy1:poy4:filey60:D%3A%5CProjects%5Chxtools%5Cheaps%5Ch3d%2Fshader%2FBase2d.hxy3:maxi662y3:mini648gy1:tr12goR3jR4:8:2oR3jR4:2:1jy12:hxsl.TGlobal:32:0R14oR15R16R17i669R18i665gR19jR11:12:1ahgaoR3jR4:1:1oR6jR7:1:0R8y8:positionR10jR11:5:2i2r11y6:parentoR6r25R8y5:inputR10jR11:11:1ar24oR6r25R8y2:uvR10jR11:5:2i2r11R22r27R13zgoR6r25R8y5:colorR10jR11:5:2i4r11R22r27R13zghR13zgR13zgR14oR15R16R17i684R18i670gR19r26goR3jR4:1:1oR6jR7:2:0R8y6:zValueR10jR11:3:0R13zgR14oR15R16R17i692R18i686gR19r39goR3jR4:0:1jy10:hxsl.Const:3:1i1R14oR15R16R17i695R18i694gR19r39ghR14oR15R16R17i696R18i665gR19jR11:5:2i4r11gR14oR15R16R17i696R18i648gR19r12goR3jR4:10:3oR3jR4:1:1oR6r38R8y10:isRelativeR10jR11:2:0y10:qualifiersajy17:hxsl.VarQualifier:0:1nhR13zgR14oR15R16R17i716R18i706gR19r54goR3jR4:4:1aoR3jR4:5:3r7oR3jR4:9:2oR3jR4:1:1oR6r10R8y16:absolutePositionR10jR11:5:2i4r11R13zgR14oR15R16R17i742R18i726gR19r65gajy14:hxsl.Component:0:0hR14oR15R16R17i744R18i726gR19r39goR3jR4:8:2oR3jR4:2:1jR20:25:0R14oR15R16R17i772R18i747gR19jR11:12:1aoR1aoR8y1:_R10jR11:5:2i3r11goR8y1:bR10jR11:5:2i3r11ghy3:retr39ghgaoR3jR4:8:2oR3jR4:2:1jR20:31:0R14oR15R16R17i751R18i747gR19jR11:12:1ahgaoR3jR4:9:2oR3jR4:1:1r9R14oR15R16R17i766R18i752gR19r12gar69jR32:1:0hR14oR15R16R17i769R18i752gR19jR11:5:2i2r11goR3jR4:0:1jR27:3:1i1R14oR15R16R17i771R18i770gR19r39ghR14oR15R16R17i772R18i747gR19r81goR3jR4:1:1oR6r38R8y15:absoluteMatrixAR10jR11:5:2i3r11R13zgR14oR15R16R17i792R18i777gR19r111ghR14oR15R16R17i793R18i747gR19r39gR14oR15R16R17i793R18i726gR19r39goR3jR4:5:3r7oR3jR4:9:2oR3jR4:1:1r64R14oR15R16R17i816R18i800gR19r65gar99hR14oR15R16R17i818R18i800gR19r39goR3jR4:8:2oR3jR4:2:1r74R14oR15R16R17i846R18i821gR19jR11:12:1aoR1aoR8R33R10jR11:5:2i3r11gr82hR35r39ghgaoR3jR4:8:2oR3jR4:2:1r88R14oR15R16R17i825R18i821gR19r92gaoR3jR4:9:2oR3jR4:1:1r9R14oR15R16R17i840R18i826gR19r12gar69r99hR14oR15R16R17i843R18i826gR19jR11:5:2i2r11goR3jR4:0:1jR27:3:1i1R14oR15R16R17i845R18i844gR19r39ghR14oR15R16R17i846R18i821gR19r134goR3jR4:1:1oR6r38R8y15:absoluteMatrixBR10jR11:5:2i3r11R13zgR14oR15R16R17i866R18i851gR19r158ghR14oR15R16R17i867R18i821gR19r39gR14oR15R16R17i867R18i800gR19r39goR3jR4:5:3r7oR3jR4:9:2oR3jR4:1:1r64R14oR15R16R17i890R18i874gR19r65gajR32:2:0jR32:3:0hR14oR15R16R17i893R18i874gR19jR11:5:2i2r11goR3jR4:9:2oR3jR4:1:1r9R14oR15R16R17i910R18i896gR19r12gar171r172hR14oR15R16R17i913R18i896gR19jR11:5:2i2r11gR14oR15R16R17i913R18i874gR19r175ghR14oR15R16R17i920R18i719gR19jR11:0:0goR3jR4:5:3r7oR3jR4:1:1r64R14oR15R16R17i947R18i931gR19r65goR3jR4:1:1r9R14oR15R16R17i964R18i950gR19r12gR14oR15R16R17i964R18i931gR19r65gR14oR15R16R17i964R18i702gR19r188goR3jR4:5:3r7oR3jR4:1:1oR6jR7:3:0R8y12:calculatedUVR10jR11:5:2i2r11R13zgR14oR15R16R17i982R18i970gR19r204goR3jR4:1:1r29R14oR15R16R17i993R18i985gR19r30gR14oR15R16R17i993R18i970gR19r204goR3jR4:5:3r7oR3jR4:1:1oR6r10R8y10:pixelColorR10jR11:5:2i4r11R13zgR14oR15R16R17i1009R18i999gR19r215goR3jR4:10:3oR3jR4:1:1r53R14oR15R16R17i1022R18i1012gR19r54goR3jR4:5:3jR5:1:0oR3jR4:1:1oR6r38R8R25R10jR11:5:2i4r11R13zgR14oR15R16R17i1030R18i1025gR19r226goR3jR4:1:1r31R14oR15R16R17i1044R18i1033gR19r32gR14oR15R16R17i1044R18i1025gR19jR11:5:2i4r11goR3jR4:1:1r31R14oR15R16R17i1058R18i1047gR19r32gR14oR15R16R17i1058R18i1012gR19r234gR14oR15R16R17i1058R18i999gR19r215goR3jR4:5:3r7oR3jR4:1:1oR6r10R8y12:textureColorR10jR11:5:2i4r11R13zgR14oR15R16R17i1076R18i1064gR19r245goR3jR4:8:2oR3jR4:2:1jR20:28:0R14oR15R16R17i1086R18i1079gR19jR11:12:1aoR1aoR8R33R10jR11:9:0goR8R34R10jR11:5:2i2r11ghR35jR11:5:2i4r11ghgaoR3jR4:1:1oR6r38R8y7:textureR10r257R13zgR14oR15R16R17i1086R18i1079gR19r257goR3jR4:1:1r202R14oR15R16R17i1103R18i1091gR19r204ghR14oR15R16R17i1104R18i1079gR19r260gR14oR15R16R17i1104R18i1064gR19r245goR3jR4:5:3jR5:20:1r223oR3jR4:1:1r214R14oR15R16R17i1120R18i1110gR19r215goR3jR4:1:1r244R14oR15R16R17i1136R18i1124gR19r245gR14oR15R16R17i1136R18i1110gR19r215ghR14oR15R16R17i1142R18i642gR19r188gR6jy17:hxsl.FunctionKind:2:0y3:refoR6jR7:6:0R8y8:__init__R10jR11:12:1aoR1ahR35r188ghR13zgR35r188goR1ahR2oR3jR4:4:1aoR3jR4:5:3r7oR3jR4:1:1oR6jR7:5:0R8R21R10jR11:5:2i4r11R22oR6r300R8y6:outputR10jR11:11:1ar299oR6r300R8R25R10jR11:5:2i4r11R22r302R13zghR13zgR13zgR14oR15R16R17i1189R18i1174gR19r301goR3jR4:1:1r64R14oR15R16R17i1208R18i1192gR19r65gR14oR15R16R17i1208R18i1174gR19r301ghR14oR15R16R17i1214R18i1168gR19r188gR6jR42:0:0R43oR6r288R8y6:vertexR10jR11:12:1aoR1ahR35r188ghR13zgR35r188goR1ahR2oR3jR4:4:1aoR3jR4:5:3r7oR3jR4:1:1r304R14oR15R16R17i1260R18i1248gR19r305goR3jR4:1:1r214R14oR15R16R17i1273R18i1263gR19r215gR14oR15R16R17i1273R18i1248gR19r305ghR14oR15R16R17i1279R18i1242gR19r188gR6jR42:1:0R43oR6r288R8y8:fragmentR10jR11:12:1aoR1ahR35r188ghR13zgR35r188ghR8y17:h3d.shader.Base2dy4:varsar202r317r37r110r287r64r338r264r244r9r302r53r157r27r225r214hg";
h3d.shader.BaseMesh.SRC = "oy4:funsaoy4:argsahy4:exproy1:ejy13:hxsl.TExprDef:4:1aoR3jR4:5:3jy16:haxe.macro.Binop:4:0oR3jR4:1:1oy4:kindjy12:hxsl.VarKind:4:0y4:namey19:transformedPositiony4:typejy9:hxsl.Type:5:2i3jy12:hxsl.VecType:1:0y2:idzgy1:poy4:filey62:D%3A%5CProjects%5Chxtools%5Cheaps%5Ch3d%2Fshader%2FBaseMesh.hxy3:maxi860y3:mini841gy1:tr12goR3jR4:5:3jR5:1:0oR3jR4:1:1oR6jR7:1:0R8y8:positionR10jR11:5:2i3r11y6:parentoR6r19R8y5:inputR10jR11:11:1ar18oR6r19R8y6:normalR10jR11:5:2i3r11R21r21R13zghR13zgR13zgR14oR15R16R17i877R18i863gR19r20goR3jR4:8:2oR3jR4:2:1jy12:hxsl.TGlobal:42:0R14oR15R16R17i896R18i880gR19jR11:12:1ahgaoR3jR4:1:1oR6jR7:0:0R8y9:modelViewR10jR11:7:0R21oR6r38R8y6:globalR10jR11:11:1aoR6r38R8y4:timeR10jR11:3:0R21r40R13zgr37oR6r38R8y16:modelViewInverseR10r39R21r40y10:qualifiersajy17:hxsl.VarQualifier:3:0hR13zghR13zgR29ar46hR13zgR14oR15R16R17i896R18i880gR19r39ghR14oR15R16R17i905R18i880gR19jR11:8:0gR14oR15R16R17i905R18i863gR19jR11:5:2i3r11gR14oR15R16R17i905R18i841gR19r12goR3jR4:5:3r7oR3jR4:1:1oR6r10R8y17:projectedPositionR10jR11:5:2i4r11R13zgR14oR15R16R17i928R18i911gR19r62goR3jR4:5:3r16oR3jR4:8:2oR3jR4:2:1jR24:32:0R14oR15R16R17i935R18i931gR19jR11:12:1ahgaoR3jR4:1:1r9R14oR15R16R17i955R18i936gR19r12goR3jR4:0:1jy10:hxsl.Const:3:1i1R14oR15R16R17i958R18i957gR19r43ghR14oR15R16R17i959R18i931gR19jR11:5:2i4r11goR3jR4:1:1oR6r38R8y8:viewProjR10r39R21oR6r38R8y6:cameraR10jR11:11:1aoR6r38R8y4:viewR10r39R21r86R13zgoR6r38R8y4:projR10r39R21r86R13zgoR6r38R8R20R10jR11:5:2i3r11R21r86R13zgoR6r38R8y8:projDiagR10jR11:5:2i3r11R21r86R13zgr85oR6r38R8y15:inverseViewProjR10r39R21r86R13zgoR6jR7:3:0R8y3:dirR10jR11:5:2i3r11R21r86R13zghR13zgR13zgR14oR15R16R17i977R18i962gR19r39gR14oR15R16R17i977R18i931gR19jR11:5:2i4r11gR14oR15R16R17i977R18i911gR19r62goR3jR4:5:3r7oR3jR4:1:1oR6r10R8y17:transformedNormalR10jR11:5:2i3r11R13zgR14oR15R16R17i1000R18i983gR19r109goR3jR4:5:3r16oR3jR4:1:1r23R14oR15R16R17i1015R18i1003gR19r24goR3jR4:8:2oR3jR4:2:1jR24:40:0R14oR15R16R17i1041R18i1018gR19jR11:12:1ahgaoR3jR4:1:1r44R14oR15R16R17i1041R18i1018gR19r39ghR14oR15R16R17i1048R18i1018gR19jR11:6:0gR14oR15R16R17i1048R18i1003gR19r56gR14oR15R16R17i1048R18i983gR19r109goR3jR4:5:3r7oR3jR4:1:1r95R14oR15R16R17i1064R18i1054gR19r97goR3jR4:8:2oR3jR4:2:1jR24:27:0R14oR15R16R17i1106R18i1067gR19jR11:12:1aoR1aoR8y1:_R10jR11:5:2i3r11ghy3:retr56ghgaoR3jR4:3:1oR3jR4:5:3jR5:3:0oR3jR4:1:1r90R14oR15R16R17i1083R18i1068gR19r91goR3jR4:1:1r9R14oR15R16R17i1105R18i1086gR19r12gR14oR15R16R17i1105R18i1068gR19r147gR14oR15R16R17i1106R18i1067gR19r147ghR14oR15R16R17i1118R18i1067gR19r56gR14oR15R16R17i1118R18i1054gR19r97goR3jR4:5:3r7oR3jR4:1:1oR6r10R8y10:pixelColorR10jR11:5:2i4r11R13zgR14oR15R16R17i1134R18i1124gR19r170goR3jR4:1:1oR6jR7:2:0R8y5:colorR10jR11:5:2i4r11R13zgR14oR15R16R17i1142R18i1137gR19r176gR14oR15R16R17i1142R18i1124gR19r170ghR14oR15R16R17i1148R18i835gR19jR11:0:0gR6jy17:hxsl.FunctionKind:2:0y3:refoR6jR7:6:0R8y8:__init__R10jR11:12:1aoR1ahR42r183ghR13zgR42r183goR1ahR2oR3jR4:4:1aoR3jR4:5:3r7oR3jR4:1:1oR6jR7:5:0R8R20R10jR11:5:2i4r11R21oR6r198R8y6:outputR10jR11:11:1ar197oR6r198R8R44R10jR11:5:2i4r11R21r200R13zghR13zgR13zgR14oR15R16R17i1195R18i1180gR19r199goR3jR4:1:1r61R14oR15R16R17i1215R18i1198gR19r62gR14oR15R16R17i1215R18i1180gR19r199ghR14oR15R16R17i1221R18i1174gR19r183gR6jR45:0:0R46oR6r186R8y6:vertexR10jR11:12:1aoR1ahR42r183ghR13zgR42r183goR1ahR2oR3jR4:4:1aoR3jR4:5:3r7oR3jR4:1:1r202R14oR15R16R17i1267R18i1255gR19r203goR3jR4:1:1r169R14oR15R16R17i1280R18i1270gR19r170gR14oR15R16R17i1280R18i1255gR19r203ghR14oR15R16R17i1286R18i1249gR19r183gR6jR45:1:0R46oR6r186R8y8:fragmentR10jR11:12:1aoR1ahR42r183ghR13zgR42r183ghR8y19:h3d.shader.BaseMeshy4:varsar61r215r108r185r236r86r200r40r21r9r174r169hg";
h3d.shader.ColorKey.SRC = "oy4:funsaoy4:argsahy4:exproy1:ejy13:hxsl.TExprDef:4:1aoR3jR4:7:2oy4:kindjy12:hxsl.VarKind:4:0y4:namey5:cdiffy4:typejy9:hxsl.Type:5:2i4jy12:hxsl.VecType:1:0y2:idzgoR3jR4:5:3jy16:haxe.macro.Binop:3:0oR3jR4:1:1oR5r8R7y12:textureColorR9jR10:5:2i4r9R12zgy1:poy4:filey62:D%3A%5CProjects%5Chxtools%5Cheaps%5Ch3d%2Fshader%2FColorKey.hxy3:maxi199y3:mini187gy1:tr15goR3jR4:1:1oR5jR6:2:0R7y8:colorKeyR9jR10:5:2i4r9R12zgR15oR16R17R18i210R19i202gR20r21gR15oR16R17R18i210R19i187gR20r10gR15oR16R17R18i211R19i175gR20jR10:0:0goR3jR4:10:3oR3jR4:5:3jR13:9:0oR3jR4:8:2oR3jR4:2:1jy12:hxsl.TGlobal:25:0R15oR16R17R18i225R19i220gR20jR10:12:1aoR1aoR7y1:_R9r10goR7y1:bR9jR10:5:2i4r9ghy3:retjR10:3:0ghgaoR3jR4:1:1r7R15oR16R17R18i225R19i220gR20r10goR3jR4:1:1r7R15oR16R17R18i235R19i230gR20r10ghR15oR16R17R18i236R19i220gR20r43goR3jR4:0:1jy10:hxsl.Const:3:1d1e-005R15oR16R17R18i246R19i239gR20r43gR15oR16R17R18i246R19i220gR20jR10:2:0goR3jR4:11:0R15oR16R17R18i256R19i249gR20r28gnR15oR16R17R18i256R19i216gR20r28ghR15oR16R17R18i262R19i169gR20r28gR5jy17:hxsl.FunctionKind:1:0y3:refoR5jR6:6:0R7y8:fragmentR9jR10:12:1aoR1ahR25r28ghR12zgR25r28ghR7y19:h3d.shader.ColorKeyy4:varsar69r19r14hg";
h3d.shader.Texture.SRC = "oy4:funsaoy4:argsahy4:exproy1:ejy13:hxsl.TExprDef:4:1aoR3jR4:5:3jy16:haxe.macro.Binop:4:0oR3jR4:1:1oy4:kindjy12:hxsl.VarKind:4:0y4:namey12:calculatedUVy4:typejy9:hxsl.Type:5:2i2jy12:hxsl.VecType:1:0y2:idzgy1:poy4:filey61:D%3A%5CProjects%5Chxtools%5Cheaps%5Ch3d%2Fshader%2FTexture.hxy3:maxi376y3:mini364gy1:tr12goR3jR4:1:1oR6jR7:1:0R8y2:uvR10jR11:5:2i2r11y6:parentoR6r17R8y5:inputR10jR11:11:1ar16hR13zgR13zgR14oR15R16R17i387R18i379gR19r18gR14oR15R16R17i387R18i364gR19r12ghR14oR15R16R17i393R18i358gR19jR11:0:0gR6jy17:hxsl.FunctionKind:0:0y3:refoR6jR7:6:0R8y6:vertexR10jR11:12:1aoR1ahy3:retr28ghR13zgR26r28goR1ahR2oR3jR4:4:1aoR3jR4:7:2oR6r10R8y1:cR10jR11:5:2i4r11R13zgoR3jR4:8:2oR3jR4:2:1jy12:hxsl.TGlobal:28:0R14oR15R16R17i442R18i435gR19jR11:12:1aoR1aoR8y1:_R10jR11:9:0goR8y1:bR10jR11:5:2i2r11ghR26r42ghgaoR3jR4:1:1oR6jR7:2:0R8y7:textureR10r52R13zgR14oR15R16R17i442R18i435gR19r52goR3jR4:1:1r9R14oR15R16R17i459R18i447gR19r12ghR14oR15R16R17i460R18i435gR19r42gR14oR15R16R17i461R18i427gR19r28goR3jR4:10:3oR3jR4:5:3jR5:14:0oR3jR4:1:1oR6r59R8y9:killAlphaR10jR11:2:0y10:qualifiersajy17:hxsl.VarQualifier:0:1nhR13zgR14oR15R16R17i479R18i470gR19r74goR3jR4:5:3jR5:9:0oR3jR4:5:3jR5:3:0oR3jR4:9:2oR3jR4:1:1r41R14oR15R16R17i484R18i483gR19r42gajy14:hxsl.Component:3:0hR14oR15R16R17i486R18i483gR19jR11:3:0goR3jR4:1:1oR6r59R8y18:killAlphaThresholdR10r91R13zgR14oR15R16R17i507R18i489gR19r91gR14oR15R16R17i507R18i483gR19r91goR3jR4:0:1jy10:hxsl.Const:3:1zR14oR15R16R17i511R18i510gR19r91gR14oR15R16R17i511R18i483gR19r74gR14oR15R16R17i511R18i470gR19r74goR3jR4:11:0R14oR15R16R17i521R18i514gR19r28gnR14oR15R16R17i521R18i466gR19r28goR3jR4:10:3oR3jR4:1:1oR6r59R8y8:additiveR10r74R33ajR34:0:1nhR13zgR14oR15R16R17i539R18i531gR19r74goR3jR4:5:3jR5:20:1jR5:0:0oR3jR4:1:1oR6r10R8y10:pixelColorR10jR11:5:2i4r11R13zgR14oR15R16R17i557R18i547gR19r123goR3jR4:1:1r41R14oR15R16R17i562R18i561gR19r42gR14oR15R16R17i562R18i547gR19r123goR3jR4:5:3jR5:20:1jR5:1:0oR3jR4:1:1r122R14oR15R16R17i588R18i578gR19r123goR3jR4:1:1r41R14oR15R16R17i593R18i592gR19r42gR14oR15R16R17i593R18i578gR19r123gR14oR15R16R17i593R18i527gR19r28ghR14oR15R16R17i599R18i421gR19r28gR6jR23:1:0R24oR6r31R8y8:fragmentR10jR11:12:1aoR1ahR26r28ghR13zgR26r28ghR8y18:h3d.shader.Texturey4:varsar9r30r147r113r58r93r19r73r122hg";
h3d.shader.UVScroll.SRC = "oy4:funsaoy4:argsahy4:exproy1:ejy13:hxsl.TExprDef:4:1aoR3jR4:5:3jy16:haxe.macro.Binop:20:1jR5:0:0oR3jR4:1:1oy4:kindjy12:hxsl.VarKind:4:0y4:namey12:calculatedUVy4:typejy9:hxsl.Type:5:2i2jy12:hxsl.VecType:1:0y2:idzgy1:poy4:filey62:D%3A%5CProjects%5Chxtools%5Cheaps%5Ch3d%2Fshader%2FUVScroll.hxy3:maxi180y3:mini168gy1:tr13goR3jR4:1:1oR6jR7:2:0R8y7:uvDeltaR10jR11:5:2i2r12R13zgR14oR15R16R17i191R18i184gR19r19gR14oR15R16R17i191R18i168gR19r13ghR14oR15R16R17i197R18i162gR19jR11:0:0gR6jy17:hxsl.FunctionKind:0:0y3:refoR6jR7:6:0R8y6:vertexR10jR11:12:1aoR1ahy3:retr26ghR13zgR24r26ghR8y19:h3d.shader.UVScrolly4:varsar10r28r17hg";
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.crypto.Base64.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
haxe.crypto.Base64.BYTES = haxe.io.Bytes.ofString(haxe.crypto.Base64.CHARS);
haxe.ds.ObjectMap.count = 0;
haxe.xml.Parser.escapes = (function($this) {
	var $r;
	var h = new haxe.ds.StringMap();
	h.set("lt","<");
	h.set("gt",">");
	h.set("amp","&");
	h.set("quot","\"");
	h.set("apos","'");
	h.set("nbsp",String.fromCharCode(160));
	$r = h;
	return $r;
}(this));
hxd.Key.initDone = false;
hxd.Key.keyPressed = [];
hxd.System.LOOP_INIT = false;
hxd.System.setCursor = hxd.System.setNativeCursor;
hxd.impl.Memory.stack = new Array();
hxd.impl.Memory.inst = new hxd.impl.MemoryReader();
hxd.impl.Tmp.bytes = new Array();
hxd.res.EmbedFileSystem.invalidChars = new EReg("[^A-Za-z0-9_]","g");
hxsl.Tools.UID = 0;
hxsl.Tools.SWIZ = Type.allEnums(hxsl.Component);
hxsl.Globals.ALL = [];
hxsl.Globals.MAP = new haxe.ds.StringMap();
hxsl.RuntimeShader.UID = 0;
Game.main();
})();
