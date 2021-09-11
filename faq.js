

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
　　var elemPos = $(this).offset().top+50; //要素より、50px上の
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



  });// ここまで画面をスクロールをしたら動かしたい場合の記述

