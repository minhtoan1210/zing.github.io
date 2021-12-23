$(document).ready(function () {
    let header = $(".headerr").height();
    let height = header + (header/3);
    console.log(header);
    $(".page__home-header").css('marginTop',`${height}px`);
    $('.slider-content').slick(
        {
          slidesToShow: 4,
          slidesToScroll: 1,
           //autoplay: true,
          autoplaySpeed: 2000,
         infinite: true,
         centerMode: true,
          prevArrow: `<div class="news__arrow news__arrow_dir_left">
          <img class="prev" src="https://img.icons8.com/ios-glyphs/30/000000/chevron-left.png"/>
          </div>`,
          nextArrow: `<div class="news__arrow news__arrow_dir_right">
          <img class="next" src="https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png"/>
          </div>`,
        }
      );
    $('.header__menu>ul>li.dots').click(function (e) { 
      e.preventDefault();
      $(this).toggleClass("active");
     $(".header-sub-menu").toggleClass("show");
    });
});