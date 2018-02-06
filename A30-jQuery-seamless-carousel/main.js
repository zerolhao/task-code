var $imgs = $('.window > img')
var n = 0
$imgs.eq(n).addClass('active')
$imgs.eq(n).siblings().addClass('ready')

setInterval(()=>{
  $imgs.eq(n).addClass('leave').removeClass('active')
  .one('transitionend',(e)=>{
    $(e.currentTarget).addClass('ready').removeClass('leave')
  })
  $imgs.eq(checkN(n+1)).addClass('active').removeClass('ready')
  n = checkN(++n)
},1300)
function checkN(n){
  if(n === $imgs.length){
    return 0
  } else{
    return n
  }
}