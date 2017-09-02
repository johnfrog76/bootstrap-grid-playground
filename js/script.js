$(function () {
  var addTransformCls = function () {
    setTimeout(function () {
      $('.mycol').addClass('transform')
    }, 500)
  }

  var addContainerTransformCls = function () {
    $('.container-hook').removeClass('transform')
    setTimeout(function () {
      $('.container-hook').addClass('transform')
    }, 500)
  }

  $('.select-theme').change(function () {
    var myval = $(this).val()

    if (myval === 'theme-dark') {
      $('body').addClass('dark-theme')
    } else {
      $('body').attr('class', '')
    }
  })

  $('.select-hero').change(function () {
    var myval = $(this).val()
    var imgArray = [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg'
    ]
    var random = Math.floor(Math.random() * imgArray.length)

    if (myval === 'hero') {
      $('.hero-section').addClass('hero').find('span').css('background-image', 'url(images/' + imgArray[random] + ')')
    } else {
      $('.hero-section').removeClass('hero').find('span').css('background-image', 'none')
    }
  })

  $('.six').show()

  $('select.layout').change(function () {
    var myval = $(this).val()

    addContainerTransformCls()

    if (myval === 'fluid') {
      $('.container-hook').removeClass('container')
                .addClass('container-fluid')
    } else {
      $('.container-hook').removeClass('container-fluid')
                .addClass('container')
    }
  })

  $('select.copy').change(function () {
    var myval = $(this).val()
    var replaceCopy = function (markup) {
      var i
      var ele = '.row.mycol  > div > span'
      $(ele).each(function (i) {
        $(this).html(markup)
      })
    }
    var copy = 'Nulla sollicitudin pharetra tortor a sollicitudin. ' +
            'Suspendisse pellentesque erat lacus, a facilisis orci sodales quis. ' +
            'Donec in lorem risus. Quisque at pharetra justo, id ultrices turpis. ' +
            'Morbi vel ex eget felis consequat placerat. Lorem ipsum dolor ' +
            'sit amet, consectetur adipiscing elit. Phasellus viverra, erat ' +
            'quis viverra dapibus, elit leo sagittis tortor, sit amet ' +
            'iaculis velit purus vitae ante. Proin congue arcu a tincidunt ' +
            'consequat. Duis ut dui nisl. Etiam non dui scelerisque, tempor ' +
            'mi in, rutrum nisl. Suspendisse mattis tincidunt purus, ' +
            'ut porttitor lectus egestas ut. Vestibulum aliquet turpis ' +
            'sit amet diam suscipit imperdiet. Fusce egestas erat non sem ' +
            'tristique dictum vitae vel tortor. Fusce elementum magna ' +
            'metus. Aliquam enim nisi, accumsan eget odio vitae, ' +
            'tincidunt pulvinar libero.'
    var copy1 = 'column'

    if (myval === 'lipsum') {
      replaceCopy(copy)
      $('.mycol').addClass('lipsum')
    } else {
      replaceCopy(copy1)
      $('.mycol').removeClass('lipsum')
    }
  })

  $('select.columns').change(function () {
    var myval = $(this).val()
    $('.mycol').hide()
    $('.mycol').removeClass('transform')
    switch (myval) {
      case '1':
        $('.one').show()
        break
      case '2':
        $('.two').show()
        break
      case '3':
        $('.three').show()
        break
      case '4':
        $('.four').show()
        break
      case '6':
        $('.six').show()
        break
      case '12':
        $('.twelve').show()
        break
      case 'sidebar':
        $('.sidebar').show()
        break
    }
    addTransformCls()
  })
  addTransformCls()
})
