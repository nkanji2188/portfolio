
// //////////////////////////  
// ファーストビューは最後に記述
// //////////////////////////

$(function(){

  $('#gnav__nav').css('transition', '1s');
  $('#gnav__btn').on('click', function(){
    
      // $('#gnav__nav').toggleClass('gnav__nav--02');
      $('#gnav__nav').toggleClass('gnav__nav--02');
      $('#gnav__btn-top').toggleClass('gnav__btn-top--02');
      $('#gnav__btn-mid').toggleClass('gnav__btn-mid--02');
      $('#gnav__btn-btm').toggleClass('gnav__btn-btm--02');
    });
    $('#gnav__nav').on('click', function(){
      
      $('#gnav__nav').toggleClass('gnav__nav--02');
      $('#gnav__btn-top').toggleClass('gnav__btn-top--02');
      $('#gnav__btn-mid').toggleClass('gnav__btn-mid--02');
      $('#gnav__btn-btm').toggleClass('gnav__btn-btm--02');
    });
    
// //////////////////////////  
// スライダーの設定
// //////////////////////////

// #sec-new__slickは親のクラス・クラス名は任意
$('#sec-new__slick').slick({
  autoplay: true,
  // 切り替わりの時間
  autoplaySpeed: 3000,
  // 切り替わりのスピード
  speed: 1000,
  // 繰り返しループ
  infinite: true,
  arrows: false,
  // 表示する数
  slidesToShow: 3,
  // 一度にスクロールする数
  slidesToScroll: 3,
  dots: true,
  centerMode: true,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '100px',
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // センターモード時、見切れたコンテンツの幅をpx指定
        // 設定しない場合はデフォルトで50px
        centerMode: true,
        centerPadding: '50px',
      }
    }

  ]
});

  /////////////////////////////////////
  // セクションメイン画像のアニメーション
  /////////////////////////////////////

  // var top = $('.main').offset().top;

  $(window).scroll(function(){

    var target = $('#sec1').offset().top;
      target -= 250;
    var target02 = $('#sec1').offset().top;
      target02 += 250;
    if( $(window).scrollTop() > target && $(window).scrollTop() < target02){
      $('#sec1__pic').addClass('sec1__pic--02') ;
      // $('.sec1__txt').addClass('sec__txt--02') ;
    }else{
      $('#sec1__pic').removeClass('sec1__pic--02');
      // $('.sec1__txt').removeClass('sec__txt--02') ;
     }
  

    var target = $('#sec2').offset().top;
      target -= 250;
    var target02 = $('#sec2').offset().top;
      target02 += 250;
      if( $(window).scrollTop() > target && $(window).scrollTop() < target02){
        $('#sec2__pic').addClass('sec2__pic--02') ;
        // $('.sec2__txt').addClass('sec__txt--02') ;
      }else{
        $('#sec2__pic').removeClass('sec2__pic--02');
      }

    var target = $('#sec3').offset().top;
        target -= 250;
    var target02 = $('#sec3').offset().top;
        target02 += 250;
      if( $(window).scrollTop() > target && $(window).scrollTop() < target02){
        $('#sec3__pic').addClass('sec3__pic--02') ;
        // $('.sec3__txt').addClass('sec__txt--02') ;
      }else{
        $('#sec3__pic').removeClass('sec3__pic--02');
      }

      var target = $('#sec4').offset().top;
      target -= 250;
    var target02 = $('#sec4').offset().top;
      target02 += 250;
     if( $(window).scrollTop() > target && $(window).scrollTop() < target02){
        $('#sec4__pic').addClass('sec4__pic--02') ;
        // $('.sec4__txt').addClass('sec__txt--02') ;
      }else{
        $('#sec4__pic').removeClass('sec4__pic--02');
       }

    var target = $('#sec5').offset().top;
      target -= 250;
    var target02 = $('#sec5').offset().top;
      target02 += 250;
     if( $(window).scrollTop() > target && $(window).scrollTop() < target02){
        $('#sec5__pic').addClass('sec5__pic--02') ;
        // $('.sec5__txt').addClass('sec__txt--02') ;
      }else{
        $('#sec5__pic').removeClass('sec5__pic--02');
       }

    var target = $('#sec6').offset().top;
      target -= 250;
    var target02 = $('#sec6').offset().top;
      target02 += 250;
     if( $(window).scrollTop() > target && $(window).scrollTop() < target02){
        $('#sec6__pic').addClass('sec6__pic--02') ;
        // $('.sec6__txt').addClass('sec__txt--02') ;
      }else{
        $('#sec6__pic').removeClass('sec6__pic--02');
       }

  });

});





     