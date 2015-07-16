class Information
  constructor: ->
    $('.information__header').on 'click', @togglePanel

  togglePanel: (event)=>
    link = $ event.currentTarget
    block = link.parent()
    body = block.find '.information__body'

    block.toggleClass('information__section_open')

    if block.hasClass('information__section_open')
      body.velocity("stop").velocity("slideDown", { duration: 250 })
    else
      body.velocity("stop").velocity("slideUp", { duration: 250 })

$(document).ready ->
  new Information
