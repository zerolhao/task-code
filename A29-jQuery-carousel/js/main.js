var $allBtns = $('#buttons > span') // 获取所有 button
// 遍历所有btn，为每一个btn添加click事件
for (let i = 0; i < $allBtns.length; i++) {
  $allBtns.eq(i).on('click', function(e) {
    let index = $(e.currentTarget).index() // 获取当前btn在它兄弟元素的下标
    let px = index * -300 // 计算要移动的距离
    $('#images').css({ // 为images添加 style
      transform: 'translate(' + px + 'px)'
    })
    n = index
    activeButton($allBtns.eq(index))
  })
}

function activeButton($btn) {
  $btn.addClass('redText')
    .siblings('.redText').removeClass('redText')
}
// 添加自动轮播
var n = 0
var len = $allBtns.length
$allBtns.eq(n % len).trigger('click')
n++
var timerId = setTimer()

function setTimer() {
  return setInterval(function() {
    $allBtns.eq(n % len).trigger('click')
    n++
  }, 1300)
}

// 添加鼠标悬停
$('.window').on('mouseover', function() {
  clearInterval(timerId)
})
$('.window').on('mouseout', function() {
  timerId = setTimer()
})