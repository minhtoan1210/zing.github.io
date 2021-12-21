$(document).ready(function () {
    $('.slider-content').slick(
        {
          slidesToShow: 3,
          slidesToScroll: 1,
          //  autoplay: true,
          autoplaySpeed: 2000,
         infinite:false,
          prevArrow: `<div class="news__arrow news__arrow_dir_left">
          <img class="prev" src="https://img.icons8.com/ios-glyphs/30/000000/chevron-left.png"/>
          </div>`,
          nextArrow: `<div class="news__arrow news__arrow_dir_right">
          <img class="next" src="https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png"/>
          </div>`,
        }
      );
});