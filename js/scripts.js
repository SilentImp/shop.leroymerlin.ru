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

var Information,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Information = (function() {
  function Information() {
    this.togglePanel = bind(this.togglePanel, this);
    $('.information__header').on('click', this.togglePanel);
  }

  Information.prototype.togglePanel = function(event) {
    var block, body, link;
    link = $(event.currentTarget);
    block = link.parent();
    body = block.find('.information__body');
    block.toggleClass('information__section_open');
    if (block.hasClass('information__section_open')) {
      return body.velocity("stop").velocity("slideDown", {
        duration: 250
      });
    } else {
      return body.velocity("stop").velocity("slideUp", {
        duration: 250
      });
    }
  };

  return Information;

})();

$(document).ready(function() {
  return new Information;
});

var Item,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Item = (function() {
  function Item() {
    this.size = bind(this.size, this);
    this.saveItem = bind(this.saveItem, this);
    var i, len, ref, scroll;
    this.list = $('.item__list');
    this.items = this.list.find('.item');
    this.links = this.list.find('.item__brief');
    this.wrappers = $('.item__full-statistics');
    ref = this.wrappers;
    for (i = 0, len = ref.length; i < len; i++) {
      scroll = ref[i];
      new IScroll(scroll, {
        momentum: false,
        click: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        keyBindings: true,
        scrollbars: 'custom'
      });
    }
    this.list.isotope({
      itemSelector: '.item',
      layoutMode: 'packery',
      packery: {
        gutter: 0
      }
    });
    this.links.on('click', this.size);
    $('.item__save').on('click', this.saveItem);
  }

  Item.prototype.saveItem = function(event) {
    var link;
    event.preventDefault();
    link = $(event.currentTarget);
    if (link.hasClass('item__save_saved')) {
      link.text('В список покупок');
    } else {
      link.text('В списке (' + Math.round(Math.random() * 400) + ')');
    }
    return link.toggleClass('item__save_saved');
  };

  Item.prototype.size = function(event) {
    var block, link;
    event.preventDefault();
    link = $(event.currentTarget);
    block = link.parent();
    this.items.removeClass('item_open');
    block.addClass('item_open');
    return setTimeout((function(_this) {
      return function() {
        return $('.item__list').isotope('layout');
      };
    })(this), 0);
  };

  return Item;

})();

$(document).ready(function() {
  return new Item;
});

$(document).ready(function() {
  var element, i, len, ref, results;
  ref = $('.recommend__list');
  results = [];
  for (i = 0, len = ref.length; i < len; i++) {
    element = ref[i];
    results.push($(element).slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      arrows: true,
      dots: false
    }));
  }
  return results;
});
