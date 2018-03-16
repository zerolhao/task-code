var pikachu = `
/* 
 * 这次我们要写一个皮卡丘
 */

.nose{
  border: 22px solid black;
  border-color: 
    black transparent transparent transparent;
  width: 0;
  position: absolute;
  top: 49px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 46%;
}
.eye{
  width: 63px;
  height: 63px;
  border: 3px solid black;
  border-radius: 50%;
  background: #2E2E2E;
  position: absolute;
  top: 15px;
}
.eye::before{
  display: block;
  content: '';
  width: 31px;
  height: 31px;
  border: 3px solid black;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  left: 7px;
  top: -2px;
}
.eye.left{
  right: 50%;
  margin-right: 76px;
}
.eye.right{
  left: 50%;
  margin-left: 76px;
}
.face{
  width: 88px;
  height: 88px;
  border: 3px solid black;
  border-radius: 50%;
  background: #FF0000;
  position: absolute;
  top: 125px;
}
.face.left{
  right: 50%;
  margin-right: 125px;
}
.face.right{
  left: 50%;
  margin-left: 125px;
}
.upperLip{
  width: 80px;
  height: 25px;
  border: 3px solid black;
  position: absolute;
  top: 83px;
  background: #ffe600;
}
.upperLip.left{
  right: 50%;
  border-top: none;
  border-right: none;
  border-bottom-left-radius: 50px 30px;
  transform: rotate(-25deg);
}
.upperLip.left::before{
  display: block;
  content:'';
  width: 80px;
  height: 25px;
  background: #FFE600;
  border-bottom-left-radius: 50px 30px;
  border-top-right-radius: 90% 90%;
  position: absolute;
  top: -8px;
}
.upperLip.right{
  left: 50%;
  transform: rotate(25deg);
  border-top: none;
  border-left: none;
  border-bottom-right-radius: 50px 30px;
}
.upperLip.right::before{
  display: block;
  content:'';
  width: 80px;
  height: 25px;
  background: #FFE600;
  border-bottom-right-radius: 50px 30px;
  border-top-left-radius: 90% 90%;
  position: absolute;
  top: -8px;
}
.lowerLip-wrapper{
  width: 100%;
  height: 170px;
  position: absolute;
  top: 86px;
  overflow: hidden;
}
.lowerLip{
  width: 150px;
  height: 600px;
  border: 3px solid black;
  border-radius: 80%;
  background: #9B000A;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
}
.lowerLip::before{
  display: block;
  content: '';
  width: 140px;
  height: 135px;
  background-color: #FF485F;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}
`

function writeCode(code, fn) {
  let codeView = document.querySelector('#codeView>.code')
  let styleTag = document.querySelector('#styleTag')
  let duration = 35
  let n = 0
  $('#btnBox').on('click', 'button', function(e) {
    let $btn = $(e.currentTarget)
    $btn.addClass('active')
      .siblings('.active').removeClass('active')
    let speed = $btn.attr('data-speed')
    switch (speed) {
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 35
        break
      case 'fast':
        duration = 5
        break
    }
  })
  setTimeout(function run(){
    codeView.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css)
    styleTag.innerText = code.substring(0, n)
    codeView.scrollTop = codeView.scrollHeight
    n++
    setTimeout(run, duration)
  }, duration)
}


writeCode(pikachu)