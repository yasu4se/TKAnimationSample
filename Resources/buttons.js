Ti.include("TKKeyframeAnimation.js");

//
(function() {

	//=== レイアウト
	var w = Ti.UI.currentWindow;
	var bt1 = Ti.UI.createButton({
		title : "Button 1",
		width : 150,
		height : 40,
		top : 150,
	});
	w.add(bt1);
	var bt2 = Ti.UI.createButton({
		title : "Button 2",
		width : 150,
		height : 40,
		top : 150 + 50,
	});
	w.add(bt2);
	var bt3 = Ti.UI.createButton({
		title : "Button 2",
		width : 150,
		height : 40,
		top : 150 + 50 * 2,
	});
	w.add(bt3);

	//=== 初期位置にセット
	bt1.opacity = bt2.opacity = bt3.opacity = 0.0;
	bt1.transform = bt2.transform = bt3.transform = Ti.UI.create2DMatrix().translate(0, 30);

	//=== 表示フラグ
	var isShow = false;

	//=== ウィンドウクリックでボタンを表示＆非表示に
	w.addEventListener("click", function() {
		isShow ? _hide() : _show();
		isShow = !isShow;
	});
	//

	function _show() {
		[bt1, bt2, bt3].forEach(function(bt, i) {
			bt.animate({
				duration : 300,
				curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
				delay : 100 * i,
				transform : Ti.UI.create2DMatrix(),
				opaque : true,
				opacity : 1.0,
			});
		});
	}

	function _hide() {
		[bt3, bt2, bt1].forEach(function(bt, i) {
			bt.animate({
				duration : 300,
				curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
				delay : 100 * i,
				transform : Ti.UI.create2DMatrix().translate(0, 30),
				opaque : true,
				opacity : 0.0,
			});
		});
	}

})();
