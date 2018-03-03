let $slides = $('#slides')

var $lis = $('#menu li') // 获取所有菜单选项
// 遍历所有li，为每一个btn添加click事件
/*for (let i = 0; i < $lis.length; i++) {
  $lis.eq(i).on('click', function(e) {
    let index = $(e.currentTarget).index() // 获取当前btn在它兄弟元素的下标
    let px = -index * 920 // 计算要移动的距离
    console.log(px)
    $slides.css({ // 为images添加 style
      transform: 'translate(' + px + 'px)'
    })
    n = index
  })
}*/
$lis.on('click',function(e){
  let index = $(e.currentTarget).index()
  let px = -index * 920
  $slides.css({ // 为images添加 style
      transform: 'translate(' + px + 'px)'
  })
  n = index
  activeLi($(e.currentTarget))
})
function activeLi($li) {
  $li.addClass('active')
    .siblings('li').removeClass('active')
}
// 添加自动轮播
var n = 0
var len = $lis.length
$lis.eq(n % len).trigger('click')
n++
var timerId = setTimer()

function setTimer() {
  return setInterval(function() {
    $lis.eq(n % len).trigger('click')
    n++
  }, 2000)
}

// 当标签页被隐藏时停止播放
document.addEventListener('visibilitychange', function(e) {
  if (document.hidden) {
    window.clearInterval(timer)
  } else {
    timer = setInterval(function() {
      goToSlide(current + 1)
    }, 2000)
  }
})