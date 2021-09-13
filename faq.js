
var starttime = new Date().getTime();
// 自分のサイトからのアクセスなら「www.example.com」
const host = window.location.hostname;


$(".qa-list dd").hide();
$(".qa-list dl").on("click", function(e){
    $('dd',this).slideToggle('fast');
    if($(this).hasClass('open')){
        $(this).removeClass('open');
    }else{
        $(this).addClass('open');
    }
});



// $(function() {
// 	$('.btn-gNav').on("click", function(){
// 		$(this).toggleClass('open');
// 		$('#gNav').toggleClass('open');
// 	});
// });

$(function() {
  $('.btn-gNav').on("click", function(){

    $(this).toggleClass('open');
    $('#gNav').toggleClass('open');
  });

});

// メニューをクリックされたら、非表示にする
$(function() {
  $('.gNav-menu li a').on("click", function(){
     $('#gNav').removeClass('open');
     $('.btn-gNav').removeClass('open');
  });
});





// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
$('.lineTrigger').each(function(){ //fadeInUpTriggerというクラス名が
　　var elemPos = $(this).offset().top+200; //要素より、50px上の
　　var scroll = $(window).scrollTop();
　　var windowHeight = $(window).height();
　　if (scroll >= elemPos - windowHeight){
　
$(this).addClass('flipRightTop');
　$(this).addClass('line');
　　// 画面内に入ったらfadeInというクラス名を追記
　　}else{
　　　
　$(this).removeClass('flipRightTop');
$(this).removeClass('line');
　　// 画面外に出たらfadeInというクラス名を外す
　　}
　　});

$('.rlineTrigger').each(function(){
var elemPos = $(this).offset().top-50; //要素より、50px上の
　　var scroll = $(window).scrollTop();
　　var windowHeight = $(window).height();
　　if (scroll >= elemPos - windowHeight){
　
$(this).addClass('rflipRightTop');
　$(this).addClass('rline');
　　// 画面内に入ったらfadeInというクラス名を追記
　　}else{
　　　
　$(this).removeClass('rflipRightTop');
$(this).removeClass('rline');
　　// 画面外に出たらfadeInというクラス名を外す
　　}
　　});


$('.flineTrigger').each(function(){
var elemPos = $(this).offset().top-50; //要素より、50px上の
　　var scroll = $(window).scrollTop();
　　var windowHeight = $(window).height();
　　if (scroll >= elemPos - windowHeight){
　
$(this).addClass('flipRightTop');
　$(this).addClass('fline');
　　// 画面内に入ったらfadeInというクラス名を追記
　　}else{
　　　
　$(this).removeClass('flipRightTop');
$(this).removeClass('fline');
　　// 画面外に出たらfadeInというクラス名を外す
　　}
　　});


$('.clineTrigger').each(function(){
var elemPos = $(this).offset().top-50; //要素より、50px上の
　　var scroll = $(window).scrollTop();
　　var windowHeight = $(window).height();
　　if (scroll >= elemPos - windowHeight){
　
$(this).addClass('rflipRightTop');
　$(this).addClass('cline');
　　// 画面内に入ったらfadeInというクラス名を追記
　　}else{
　　　
　$(this).removeClass('rflipRightTop');
$(this).removeClass('cline');
　　// 画面外に出たらfadeInというクラス名を外す
　　}
　　});




$('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
　　var elemPos = $(this).offset().top-100; //要素より、50px上の
　　var scroll = $(window).scrollTop();
　　var windowHeight = $(window).height();
　　if (scroll >= elemPos - windowHeight){
　
$(this).addClass('fadeUp');

　　// 画面内に入ったらfadeInというクラス名を追記
　　}else{
　　　

$(this).removeClass('fadeUp');
　　// 画面外に出たらfadeInというクラス名を外す
　　}
　　});


$('.fadeDownTrigger').each(function(){ //fadeInUpTriggerというクラス名が
　　var elemPos = $(this).offset().top-100; //要素より、50px上の
　　var scroll = $(window).scrollTop();
　　var windowHeight = $(window).height();
　　if (scroll >= elemPos - windowHeight){
　
$(this).addClass('fadeDown');

　　// 画面内に入ったらfadeInというクラス名を追記
　　}else{
　　　

$(this).removeClass('fadeDown');
　　// 画面外に出たらfadeInというクラス名を外す
　　}
　　});



  });// ここまで画面をスクロールをしたら動かしたい場合の記述




 $(function () {
            $('a[href^="#"]').click(function () {
                var time = 500;
                var href = $(this).attr("href");
                var target = $(href == "#" || href == "" ? 'html' : href);
                var position = target.offset().top;
                $("html,body").animate({ scrollTop: position }, time, "swing");
                return false;
            });
        });




//  $(function() {
	
// 		// 自分のサイトからのアクセスでなければ...
// if (host !== "rippoukotsu.github.io") {

//  	$('.start p').fadeIn(1000);
		

// 		setInterval(function(){

// 		$('.fon').fadeOut(500,function(){$(this).fadeIn(500)});
// 		  },1000);//１秒毎に点滅


// 		setTimeout(function(){
// 		$('.start').fadeOut(500);
// 	},3000); //2.5秒後にロゴ含め真っ白背景をフェードアウト！


	
// }else{
// 	   stopload();
// }
	
	
// });






window.onload = function () {

var windowWidth = $(window).width();

if (windowWidth <= 640) {


 if(sessionStorage.getItem('loading') === null || sessionStorage.getItem('loading') != "1"){
   //ローディング実行


   $('.start p').fadeIn(1000);
   // $('.fon2').fadeIn(1000);
		  

		setInterval(function(){

		// $('.fon').fadeOut(500,function(){$(this).fadeIn(500)});
			$('.fon').fadeOut(500,function(){$(this).fadeIn(500)});
		  },1000);//１秒毎に点滅


		setTimeout(function(){
		$('.start').fadeOut(500);
	},3000); //2.5秒後にロゴ含め真っ白背景をフェードアウト！



   sessionStorage.setItem('loading',"1");
 }else{
 			
		$('.start').fadeOut(0.1);

	
 }


}else if(windowWidth >= 641){

 if(sessionStorage.getItem('loading') === null || sessionStorage.getItem('loading') != "1"){
   //ローディング実行



    $('.start p').fadeIn(1000);
   // $('.fon2').fadeIn(1000);
		   $('.start h3').fadeIn(1000);

		setInterval(function(){

		// $('.fon').fadeOut(500,function(){$(this).fadeIn(500)});
			$('.start h4').fadeOut(500,function(){$(this).fadeIn(500)});
		  },1300);//１秒毎に点滅


		setTimeout(function(){
		$('.start').fadeOut(500);
	},10000); //2.5秒後にロゴ含め真っ白背景をフェードアウト！



   sessionStorage.setItem('loading',"1");
 }else{
 			
		$('.start').fadeOut(0.1);

	
 }

}



};

/*
$(function(){

	// 自分のサイトからのアクセスでなければ...
if (host !== "rippoukotsu.github.io") {

 	$('.start p').fadeIn(1000);
		

		setInterval(function(){

		$('.fon').fadeOut(500,function(){$(this).fadeIn(500)});
		  },1000);//１秒毎に点滅
	
}else{
	   stopload();
}

 	});


 	$(window).on('load', function(){
 		 var now = new Date().getTime();
 		 if (host !== "rippoukotsu.github.io") {
  
  if (now-starttime<=3000) {
  	setTimeout('stopload()',3000-(now-starttime));
 			return;
  } else {
    stopload();
  }
}else{
	    stopload();
}

　

 	});
*/
 	// function stopload(){
 	// 	$('.start').fadeOut(500);
 	// }









 