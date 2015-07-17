class Item
  constructor: ->
    @list = $ '.item__list'
    @items = @list.find '.item'
    @links = @list.find '.item__brief'
    @wrappers = $ '.item__full-statistics'
    for scroll in @wrappers
      new IScroll scroll,
        mouseWheel: true
        interactiveScrollbars: true
        keyBindings: true
        scrollbars: 'custom'
    @list.isotope
      itemSelector: '.item'
      layoutMode: 'packery'
      packery:
        gutter: 0

    @links.on 'click', @size
    $('.item__save').on 'click', @saveItem

  saveItem: (event)=>
    event.preventDefault()
    link = $ event.currentTarget

    if link.hasClass 'item__save_saved'
      link.text 'В список покупок'
    else
      link.text 'В списке ('+Math.round(Math.random()*400)+')'

    link.toggleClass 'item__save_saved'

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
