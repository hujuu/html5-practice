//定数
var FPS = 60; //1秒間に描写する回数
var SCREEN_WIDTH = window.innerWidth; //画面の幅]
var SCREEN_HEIGHT = window.innerHeight; //画面の高さ
var GRAVITY = 0.4;

//変数
var ctx;
var paticleList = [];
var mx = null;
var my = null;

var Particle = function(x, y){
	this.x = x;
	this.y = y;
};

//プロパティとメソッド
Particle.prototype = {
	//プロパティ
	x: null,
	y: null,
	vx: 0,
	vy: 0,
	radius: 0,
	color: null,
	isRemove: false,
	//初速度、サイズ、色をランダムに設定
	create: function(){
		this.vx = Math.random() * 6 - 3;
		this.vy = Math.random() * (-6) - 2;
		this.radius = Math.random() * 20 + 5;
		var r = 150;
		var g = Math.floor(Math.random() * 100 + 155);
		var b = Math.floor(Math.random() * 155 + 100);
		this.color = "rgb(" + r + "," + g + "," + b + ")";
	},
	//位置を更新
	update: function(){
		this.vy += GRAVITY;
		this.x += this.vx;
		this.y += this.vy;
		this.radius *= .97;

		//パーティクルが画面の外に出たとき削除をフラグをたてる
		if(this.x < 0 || this.x > SCREEN_WIDTH || this.y > SCREEN_HEIGHT){
			this.isRemove = true;
		}
	},