$(document).ready(function () {
  let slidershow = 4;
  let auto = false;
  let header = $(".headerr").height();
  let height = header + header / 3;
  let slider = $(".slider");
  let sliderwidth = slider.width();
  if (sliderwidth <= 987 && sliderwidth >= 764) {
    slidershow = 3;
    auto = true;
  } else if (sliderwidth <= 763) {
    slidershow = 1;
    auto = true;
  }
  //   let slidershow = slider[0].className;
  //   let tablet = slidershow.search("tablet");
  //  if(tablet !== -1 )
  //  {
  //   a = 3;
  //  }
  $(".page__home").css("marginTop", `${height}px`);
  $(".slider-content").slick({
    slidesToShow: slidershow,
    slidesToScroll: 1,
    autoplay: auto,
    autoplaySpeed: 2000,
    infinite: true,
    prevArrow: `<div class="news__arrow news__arrow_dir_left">
          <img class="prev" src="https://img.icons8.com/ios-glyphs/30/000000/chevron-left.png"/>
          </div>`,
    nextArrow: `<div class="news__arrow news__arrow_dir_right">
          <img class="next" src="https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png"/>
          </div>`,
  });
  $(".header__menu>ul>li.dots").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".header-sub-menu").toggleClass("show");
  });
});
