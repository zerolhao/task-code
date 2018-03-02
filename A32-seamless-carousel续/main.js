let $slides = $('#slides')
let $btns = $('#buttonWrapper > button')
let current = 0

// 制造假的 slides
makeFakeSlides()

$slides.css({ transform: 'translateX(-300px)' })

$btns.on('click', function(e){
  let $btn = $(e.currentTarget)
  let index = $btn.index()
  if(current === $btns.length-1 && index === 0){ // 最后一张到第一张
    $slides.css({ transform: `translateX(${-($btns.length + 1) * 300}px)` })
    .one('transitionend', function(){
      $slides.hide().offset() // 只需要知道不加offset不行，原理不明
      $slides.css({ transform: `translateX(${-(index + 1) * 300}px)` }).show()
    })
  } else if(current === 0 && index === $btns.length-1){ // 第一张到最后一张
    $slides.css({ transform: 'translateX(0px)' })
    .one('transitionend', function(){
      $slides.hide().offset()
      $slides.css({ transform: `translateX(${-(index + 1) * 300}px)` }).show()
    })
  } else{
    $slides.css({ transform: `translateX(${-(index + 1) * 300}px)` })
  }
  current = index // 更新
})
/*
$btns.eq(0).on('click', function() {
  if(current === 4){ // 最后一张到第一张
    $slides.css({ transform: 'translateX(-1800px)' })
    .one('transitionend', function(){
      $slides.hide().offset() // 只需要知道不加offset不行，原理不明
      $slides.css({ transform: 'translateX(-300px)' }).show()
    })
  } else{
    $slides.css({ transform: 'translateX(-300px)' })
  }
  current = 0
})
$btns.eq(1).on('click', function() {
  $slides.css({ transform: 'translateX(-600px)' })
  current = 1
})
$btns.eq(2).on('click', function() {
  $slides.css({ transform: 'translateX(-900px)' })
  current = 2
})
$btns.eq(3).on('click', function() {
  $slides.css({ transform: 'translateX(-1200px)' })
  current = 3
})
$btns.eq(4).on('click', function() {
  if(current === 0){ // 第一张到最后一张
    $slides.css({ transform: 'translateX(0px)' })
    .one('transitionend', function(){
      $slides.hide().offset()
      $slides.css({ transform: 'translateX(-1500px)' }).show()
    })
  } else{
    $slides.css({ transform: 'translateX(-1500px)' })
  }
  current = 4
})*/


/*  工具函数   */

function makeFakeSlides() {
  let $images = $slides.children('img')
  let $firstCopy = $images.first().clone(true)
  let $lastCopy = $images.last().clone(true)
  $slides.prepend($lastCopy)
  $slides.append($firstCopy)
}