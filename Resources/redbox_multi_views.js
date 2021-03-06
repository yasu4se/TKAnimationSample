Ti.include("TKKeyframeAnimation.js");

//
(function() {
	
	//=== レイアウト
	var w = Ti.UI.currentWindow;
	var outerV = Ti.UI.createView({
		width : 30,
		height : 100*2,
		borderWidth: 0,
		borderColor: "white",
	});
	w.add(outerV);
	var v = Ti.UI.createView({
		backgroundColor : "red",
		borderRadius : 10,
		width : 30,
		height : 30,
	});
	outerV.add(v);
	
	//=== ボタン配置
	var bt = Ti.UI.createButton({
		title: "Hint",
		width: 150,
		height: 40,
		bottom: 20,
	});
	bt.addEventListener("click", function(){
		outerV.borderWidth = outerV.borderWidth ? 0 : 1; //=== 親ボックスの境界の表示＆非表示
	});
	w.add(bt);

	//=== アニメーションスタート
	var anim = new TKKeyframeAnimation([{
		duration : 800,
		transform : Ti.UI.create2DMatrix().translate(0, -100),
	}, {
		duration : 800,
		transform : Ti.UI.create2DMatrix().translate(0, 100),
	}], true);
	anim.play(v);
	
	//=== 親ボックスのアニメーションスタート
	var anim2 = new TKKeyframeAnimation([{
		duration : 600,
		transform : Ti.UI.create2DMatrix().translate(100, 0),
	}, {
		duration : 600,
		transform : Ti.UI.create2DMatrix().translate(-100, 0),
	}], true);
	anim2.play(outerV);

})();
