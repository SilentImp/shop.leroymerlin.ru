class Item
  constructor: ->
    @list = $ '.item__list'
    @items = @list.find '.item'
    @links = @list.find '.item__brief'
    @wrappers = $ '.item__full-statistics'
    for scroll in @wrappers
      new IScroll scroll,
        mouseWheel: true
        scrollbars: 'custom'
    @list.isotope
      itemSelector: '.item'
      layoutMode: 'packery'
      packery:
        gutter: 10

    @links.on 'click', @size

  size: (event)=>
    event.preventDefault()
    link =  $ event.currentTarget
    block = link.parent()
    @items.removeClass 'item_open'
    block.addClass 'item_open'
    setTimeout =>
        $('.item__list').isotope('layout')
      , 0

$(document).ready ->
  new Item
