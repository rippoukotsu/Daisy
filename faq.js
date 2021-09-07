
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
