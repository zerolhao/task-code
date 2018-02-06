var $imgs = $('.window > img')
var n
init()
setInterval(() => {
  makeLeave($imgs.eq(n))
    .one('transitionend', (e) => {
      makeReady($(e.currentTarget))
    })
  makeActive($imgs.eq(checkN(n + 1)))
  n = checkN(++n)
}, 1300)



function checkN(n) {
  if (n === $imgs.length) {
    return 0
  } else {
    return n
  }
}

function init() {
  n = 0
  $imgs.eq(n).addClass('active')
  $imgs.eq(n).siblings().addClass('ready')
}
function makeLeave($obj){
  return $obj.addClass('leave').removeClass('active')
}
function makeReady($obj){
  return $obj.addClass('ready').removeClass('leave')
}
function makeActive($obj){
  return $obj.addClass('active').removeClass('ready')
}