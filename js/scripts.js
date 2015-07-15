$(document).ready(function() {
  return $('.bestseller__wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    dots: false
  });
});

var Item,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Item = (function() {
  function Item() {
    this.size = bind(this.size, this);
    this.list = $('.item__list');
    this.items = this.list.find('.item');
    this.links = this.list.find('.item__brief');
    this.list.isotope({
      itemSelector: '.item',
      layoutMode: 'masonry'
    });
    this.links.on('click', this.size);
  }

  Item.prototype.size = function(event) {
    var block;
    event.preventDefault();
    block = $(event.currentTarget.parentNode);
    this.items.css({
      width: 295,
      height: 380
    });
    block.css({
      width: 905,
      height: 770
    });
    return $('.item__list').isotope('layout');
  };

  return Item;

})();

$(document).ready(function() {
  return new Item;
});
