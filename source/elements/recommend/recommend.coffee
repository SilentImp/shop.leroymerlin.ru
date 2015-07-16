$(document).ready ->
  for element in $('.recommend__list')
    $(element).slick
      infinite: true
      slidesToShow: 3
      slidesToScroll: 1
      variableWidth: true
      arrows: true
      dots: false
