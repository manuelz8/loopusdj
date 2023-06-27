$('.about-img').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: true,
    autoplay: true
  });

  document.querySelector('.mobile-toggle').addEventListener('click', function() {
    document.querySelector('.menu-mobile').classList.toggle('active');
  });