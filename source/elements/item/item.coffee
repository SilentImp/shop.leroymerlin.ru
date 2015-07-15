class Item
  constructor: ->
    $('.item__list').isotope
      itemSelector: '.grid-item'
      masonry:
        columnWidth: 295
      layoutMode: 'fitRows',
      fitRows:
        gutter: 10

$(document).ready ->
  new Item
