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
p.nominalBounds = new cjs.Rectangle(0,0,1940,500);


(lib.banner = function() {
	this.initialize(img.banner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,500);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,500);


(lib.exclusions = function() {
	this.initialize(img.exclusions);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,500);


(lib.head1 = function() {
	this.initialize(img.head1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,500);


(lib.head2 = function() {
	this.initialize(img.head2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,500);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,500);


(lib.stroke = function() {
	this.initialize(img.stroke);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,500);// helper functions:

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

}).prototype = getMCSymbolPrototype(lib.stroke_1, new cjs.Rectangle(0,0,970,250), null);


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

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,970,250), null);


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

}).prototype = getMCSymbolPrototype(lib.head2_1, new cjs.Rectangle(0,0,970,250), null);


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

}).prototype = getMCSymbolPrototype(lib.head1_1, new cjs.Rectangle(0,0,970,250), null);


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

}).prototype = getMCSymbolPrototype(lib.exclusions_1, new cjs.Rectangle(0,0,970,250), null);


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

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,970,250), null);


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

}).prototype = getMCSymbolPrototype(lib.banner_1, new cjs.Rectangle(0,0,970,250), null);


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

}).prototype = getMCSymbolPrototype(lib.back_1, new cjs.Rectangle(0,0,970,250), null);


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

	this.actionFrames = [0,179];
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
	this.frame_179 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(179).call(this.frame_179).wait(1));

	// clickTag
	this.clickTag = new lib.clickTag();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(364,125,1.3324,2.7778,0,0,0,273.2,45);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.clickTag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(180));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EhLxgThMCXjAAAMAAAAnDMiXjAAAg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

	// logo
	this.instance = new lib.logo_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180));

	// cta
	this.instance_1 = new lib.cta_1();
	this.instance_1.setTransform(810,189,0.3443,0.3443,0,0,0,810,189);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(116).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},43,cjs.Ease.backOut).wait(21));

	// exclusions
	this.instance_2 = new lib.exclusions_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(82).to({_off:false},0).to({alpha:1},43,cjs.Ease.backOut).wait(55));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_61 = new cjs.Graphics().p("AGVQ9IAAl8IeAAAIAAF8g");
	var mask_graphics_62 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_63 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_64 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_65 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_66 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_67 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_68 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_69 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_70 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_71 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_72 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_73 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_74 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_75 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_76 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_77 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_78 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_79 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_80 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_81 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_82 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_83 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_84 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_85 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_86 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_87 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_88 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_89 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_90 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_91 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_92 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_93 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_94 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_95 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");
	var mask_graphics_96 = new cjs.Graphics().p("Au/C+IAAl7Id/AAIAAF7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(61).to({graphics:mask_graphics_61,x:232.5,y:108.5}).wait(1).to({graphics:mask_graphics_62,x:369,y:198}).wait(1).to({graphics:mask_graphics_63,x:369,y:198}).wait(1).to({graphics:mask_graphics_64,x:369.1,y:198}).wait(1).to({graphics:mask_graphics_65,x:369.25,y:198}).wait(1).to({graphics:mask_graphics_66,x:369.6,y:198}).wait(1).to({graphics:mask_graphics_67,x:370.25,y:198}).wait(1).to({graphics:mask_graphics_68,x:371.3,y:197.95}).wait(1).to({graphics:mask_graphics_69,x:372.95,y:197.95}).wait(1).to({graphics:mask_graphics_70,x:375.3,y:197.9}).wait(1).to({graphics:mask_graphics_71,x:378.6,y:197.85}).wait(1).to({graphics:mask_graphics_72,x:383.05,y:197.75}).wait(1).to({graphics:mask_graphics_73,x:388.9,y:197.65}).wait(1).to({graphics:mask_graphics_74,x:396.4,y:197.55}).wait(1).to({graphics:mask_graphics_75,x:405.85,y:197.4}).wait(1).to({graphics:mask_graphics_76,x:417.6,y:197.2}).wait(1).to({graphics:mask_graphics_77,x:431.9,y:196.95}).wait(1).to({graphics:mask_graphics_78,x:449.15,y:196.65}).wait(1).to({graphics:mask_graphics_79,x:468.85,y:196.35}).wait(1).to({graphics:mask_graphics_80,x:486.1,y:196.05}).wait(1).to({graphics:mask_graphics_81,x:500.4,y:195.8}).wait(1).to({graphics:mask_graphics_82,x:512.15,y:195.6}).wait(1).to({graphics:mask_graphics_83,x:521.6,y:195.45}).wait(1).to({graphics:mask_graphics_84,x:529.1,y:195.35}).wait(1).to({graphics:mask_graphics_85,x:534.95,y:195.25}).wait(1).to({graphics:mask_graphics_86,x:539.4,y:195.15}).wait(1).to({graphics:mask_graphics_87,x:542.7,y:195.1}).wait(1).to({graphics:mask_graphics_88,x:545.05,y:195.05}).wait(1).to({graphics:mask_graphics_89,x:546.7,y:195.05}).wait(1).to({graphics:mask_graphics_90,x:547.75,y:195}).wait(1).to({graphics:mask_graphics_91,x:548.4,y:195}).wait(1).to({graphics:mask_graphics_92,x:548.75,y:195}).wait(1).to({graphics:mask_graphics_93,x:548.9,y:195}).wait(1).to({graphics:mask_graphics_94,x:549,y:195}).wait(1).to({graphics:mask_graphics_95,x:549,y:195}).wait(1).to({graphics:mask_graphics_96,x:549,y:195}).wait(84));

	// stroke
	this.instance_3 = new lib.stroke_1();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(61).to({_off:false},0).wait(119));

	// head2
	this.instance_4 = new lib.head2_1();
	this.instance_4.setTransform(150,135,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).to({y:125,alpha:1},35,cjs.Ease.backOut).wait(91));

	// head1
	this.instance_5 = new lib.head1_1();
	this.instance_5.setTransform(150,135,1,1,0,0,0,150,125);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).to({y:125,alpha:1},35,cjs.Ease.backOut).wait(110));

	// banner
	this.instance_6 = new lib.banner_1();
	this.instance_6.setTransform(150,77,1,1,0,0,0,150,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({y:125},40,cjs.Ease.cubicOut).wait(138));

	// back
	this.instance_7 = new lib.back_1();
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(180));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(432.1,77,548.4,183);
// library properties:
lib.properties = {
	id: '7A62D8A06BDB4911B96058D46D13B159',
	width: 970,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1676658420380", id:"back"},
		{src:"images/banner.png?1676658420380", id:"banner"},
		{src:"images/cta.png?1676658420380", id:"cta"},
		{src:"images/exclusions.png?1676658420380", id:"exclusions"},
		{src:"images/head1.png?1676658420380", id:"head1"},
		{src:"images/head2.png?1676658420380", id:"head2"},
		{src:"images/logo.png?1676658420380", id:"logo"},
		{src:"images/stroke.png?1676658420380", id:"stroke"}
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
an.compositions['7A62D8A06BDB4911B96058D46D13B159'] = {
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