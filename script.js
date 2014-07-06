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