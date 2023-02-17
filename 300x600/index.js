(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.banner = function() {
	this.initialize(img.banner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.exclusions = function() {
	this.initialize(img.exclusions);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.head1 = function() {
	this.initialize(img.head1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.head2 = function() {
	this.initialize(img.head2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.stroke = function() {
	this.initialize(img.stroke);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.stroke_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.stroke();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stroke_1, new cjs.Rectangle(0,0,300,600), null);


(lib.logo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.5,0.4999);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,300,600), null);


(lib.head2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.head2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head2_1, new cjs.Rectangle(0,0,300,600), null);


(lib.head1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.head1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head1_1, new cjs.Rectangle(0,0,300,600), null);


(lib.exclusions_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.exclusions();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.exclusions_1, new cjs.Rectangle(0,0,300,600), null);


(lib.cta_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cta();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,300,600), null);


(lib.clickTag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.banner_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.banner();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.banner_1, new cjs.Rectangle(0,0,300,600), null);


(lib.back_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back_1, new cjs.Rectangle(0,0,300,600), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,193];
	// timeline functions:
	this.frame_0 = function() {
		//DOUBLECLICK CLICKTAG//
		
		this.clickTag.on("click", function(){
			window.open(clickTag, "_blank");        
		});
		
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 200);
	}
	this.frame_193 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(193).call(this.frame_193).wait(1));

	// clickTag
	this.clickTag = new lib.clickTag();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(150,300,0.4121,6.6667,0,0,0,364,45);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.clickTag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(194));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(194));

	// logo
	this.instance = new lib.logo_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(194));

	// cta
	this.instance_1 = new lib.cta_1();
	this.instance_1.setTransform(147,466.05,0.3582,0.3582,0,0,0,147,466.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(130).to({_off:false},0).to({regY:466,scaleX:1,scaleY:1,y:466,alpha:1},43,cjs.Ease.backOut).wait(21));

	// exclusions
	this.instance_2 = new lib.exclusions_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(96).to({_off:false},0).to({alpha:1},43,cjs.Ease.backOut).wait(55));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_69 = new cjs.Graphics().p("AzlcrIAAngMAnLAAAIAAHgg");
	var mask_graphics_70 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_71 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_72 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_73 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_74 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_75 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_76 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_77 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_78 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_79 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_80 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_81 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_82 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_83 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_84 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_85 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_86 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_87 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_88 = new cjs.Graphics().p("AzkDwIAAnfMAnJAAAIAAHfg");
	var mask_graphics_89 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_90 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_91 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_92 = new cjs.Graphics().p("AzkDwIAAnfMAnJAAAIAAHfg");
	var mask_graphics_93 = new cjs.Graphics().p("AzkDwIAAnfMAnJAAAIAAHfg");
	var mask_graphics_94 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_95 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_96 = new cjs.Graphics().p("AzkDwIAAnfMAnJAAAIAAHfg");
	var mask_graphics_97 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_98 = new cjs.Graphics().p("AzkDwIAAnfMAnJAAAIAAHfg");
	var mask_graphics_99 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_100 = new cjs.Graphics().p("AzkDwIAAnfMAnJAAAIAAHfg");
	var mask_graphics_101 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_102 = new cjs.Graphics().p("AzkDwIAAnfMAnJAAAIAAHfg");
	var mask_graphics_103 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_104 = new cjs.Graphics().p("AzlDwIAAnfMAnLAAAIAAHfg");
	var mask_graphics_105 = new cjs.Graphics().p("AzkDwIAAnfMAnJAAAIAAHfg");
	var mask_graphics_106 = new cjs.Graphics().p("AzkDwIAAnfMAnJAAAIAAHfg");
	var mask_graphics_107 = new cjs.Graphics().p("AzkDwIAAnfMAnJAAAIAAHfg");
	var mask_graphics_108 = new cjs.Graphics().p("AzlDwIAAnfMAnKAAAIAAHfg");
	var mask_graphics_109 = new cjs.Graphics().p("AzlDwIAAnfMAnKAAAIAAHfg");
	var mask_graphics_110 = new cjs.Graphics().p("AzlDwIAAnfMAnKAAAIAAHfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(69).to({graphics:mask_graphics_69,x:-50.475,y:183.5}).wait(1).to({graphics:mask_graphics_70,x:-50.475,y:343}).wait(1).to({graphics:mask_graphics_71,x:-50.475,y:343}).wait(1).to({graphics:mask_graphics_72,x:-50.425,y:343}).wait(1).to({graphics:mask_graphics_73,x:-50.325,y:343}).wait(1).to({graphics:mask_graphics_74,x:-50.125,y:343}).wait(1).to({graphics:mask_graphics_75,x:-49.725,y:343}).wait(1).to({graphics:mask_graphics_76,x:-49.125,y:343}).wait(1).to({graphics:mask_graphics_77,x:-48.175,y:343}).wait(1).to({graphics:mask_graphics_78,x:-46.775,y:342.95}).wait(1).to({graphics:mask_graphics_79,x:-44.825,y:342.95}).wait(1).to({graphics:mask_graphics_80,x:-42.175,y:342.9}).wait(1).to({graphics:mask_graphics_81,x:-38.725,y:342.9}).wait(1).to({graphics:mask_graphics_82,x:-34.275,y:342.85}).wait(1).to({graphics:mask_graphics_83,x:-28.725,y:342.8}).wait(1).to({graphics:mask_graphics_84,x:-21.8,y:342.7}).wait(1).to({graphics:mask_graphics_85,x:-13.375,y:342.65}).wait(1).to({graphics:mask_graphics_86,x:-3.175,y:342.55}).wait(1).to({graphics:mask_graphics_87,x:8.975,y:342.4}).wait(1).to({graphics:mask_graphics_88,x:23.35,y:342.25}).wait(1).to({graphics:mask_graphics_89,x:40.15,y:342.1}).wait(1).to({graphics:mask_graphics_90,x:58.975,y:341.9}).wait(1).to({graphics:mask_graphics_91,x:75.775,y:341.75}).wait(1).to({graphics:mask_graphics_92,x:90.15,y:341.6}).wait(1).to({graphics:mask_graphics_93,x:102.3,y:341.45}).wait(1).to({graphics:mask_graphics_94,x:112.475,y:341.35}).wait(1).to({graphics:mask_graphics_95,x:120.925,y:341.3}).wait(1).to({graphics:mask_graphics_96,x:127.85,y:341.2}).wait(1).to({graphics:mask_graphics_97,x:133.4,y:341.15}).wait(1).to({graphics:mask_graphics_98,x:137.85,y:341.1}).wait(1).to({graphics:mask_graphics_99,x:141.3,y:341.1}).wait(1).to({graphics:mask_graphics_100,x:143.95,y:341.05}).wait(1).to({graphics:mask_graphics_101,x:145.9,y:341.05}).wait(1).to({graphics:mask_graphics_102,x:147.3,y:341}).wait(1).to({graphics:mask_graphics_103,x:148.25,y:341}).wait(1).to({graphics:mask_graphics_104,x:148.85,y:341}).wait(1).to({graphics:mask_graphics_105,x:149.25,y:341}).wait(1).to({graphics:mask_graphics_106,x:149.45,y:341}).wait(1).to({graphics:mask_graphics_107,x:149.55,y:341}).wait(1).to({graphics:mask_graphics_108,x:149.6,y:341}).wait(1).to({graphics:mask_graphics_109,x:149.6,y:341}).wait(1).to({graphics:mask_graphics_110,x:149.6,y:341}).wait(84));

	// stroke
	this.instance_3 = new lib.stroke_1();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(69).to({_off:false},0).wait(125));

	// head2
	this.instance_4 = new lib.head2_1();
	this.instance_4.setTransform(150,135,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).to({y:125,alpha:1},49,cjs.Ease.backOut).wait(91));

	// head1
	this.instance_5 = new lib.head1_1();
	this.instance_5.setTransform(150,135,1,1,0,0,0,150,125);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).to({y:125,alpha:1},49,cjs.Ease.backOut).wait(110));

	// banner
	this.instance_6 = new lib.banner_1();
	this.instance_6.setTransform(150,37,1,1,0,0,0,150,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({y:125},40,cjs.Ease.cubicOut).wait(152));

	// back
	this.instance_7 = new lib.back_1();
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(194));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(140.7,212,169.2,398);
// library properties:
lib.properties = {
	id: '90CE9A07CC2147BDA6C7E08CF861CD67',
	width: 300,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1676657232916", id:"back"},
		{src:"images/banner.png?1676657232916", id:"banner"},
		{src:"images/cta.png?1676657232916", id:"cta"},
		{src:"images/exclusions.png?1676657232916", id:"exclusions"},
		{src:"images/head1.png?1676657232916", id:"head1"},
		{src:"images/head2.png?1676657232916", id:"head2"},
		{src:"images/logo.png?1676657232916", id:"logo"},
		{src:"images/stroke.png?1676657232916", id:"stroke"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['90CE9A07CC2147BDA6C7E08CF861CD67'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;