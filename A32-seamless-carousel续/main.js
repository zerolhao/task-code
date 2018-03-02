let $slides = $('#slides')
let $btns = $('#buttonWrapper > button')
let current = 0

// 制造假的 slides
makeFakeSlides()

$slides.css({ transform: 'translateX(-300px)' })

// 点击图片对应按钮切换
$btns.on('click', function(e) { //  $('#buttonWrapper').on('click', 'button', function(e){写法不同
  let $btn = $(e.currentTarget)
  let index = $btn.index()
  goToSlide(index)
})

// 点击上一张或下一张切换
$('#previous').on('click',function(){
  goToSlide(current-1)
})
$('#next').on('click',function(){
  goToSlide(current+1)
})

// 自动切换
let timer = setInterval(function(){
  goToSlide(current+1)
},2000)
// 鼠标移入暂停，移出继续
$('.container').on('mouseenter', function(){
  window.clearInterval(timer)
}).on('mouseleave', function(){
  timer = setInterval(function(){
    goToSlide(current+1)
  },2000)
})

function goToSlide(index) {
  if(index > $btns.length -1){
    index = 0
  }else if(index < 0){
    index = $btns.length -1
  }
  if (current === $btns.length - 1 && index === 0) { // 最后一张到第一张
    $slides.css({ transform: `translateX(${-($btns.length + 1) * 300}px)` })
      .one('transitionend', function() {
        $slides.hide().offset() // 只需要知道不加offset不行，原理不明
        $slides.css({ transform: `translateX(${-(index + 1) * 300}px)` }).show()
      })
  } else if (current === 0 && index === $btns.length - 1) { // 第一张到最后一张
    $slides.css({ transform: 'translateX(0px)' })
      .one('transitionend', function() {
        $slides.hide().offset()
        $slides.css({ transform: `translateX(${-(index + 1) * 300}px)` }).show()
      })
  } else {
    $slides.css({ transform: `translateX(${-(index + 1) * 300}px)` })
  }
  current = index // 更新
  console.log(current,index)
}

function makeFakeSlides() {
  let $images = $slides.children('img')
  let $firstCopy = $images.first().clone(true)
  let $lastCopy = $images.last().clone(true)
  $slides.prepend($lastCopy)
  $slides.append($firstCopy)
}