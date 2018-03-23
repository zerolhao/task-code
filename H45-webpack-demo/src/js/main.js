import module1 from './module-1'  // 引入模块1
import module2 from './module-2'  // 引入模块2
import '../css/style.scss'  // 引入 scss
let m1 = module1()  // use 模块
let m2 = module2()
var preview = function(){
  let str = ''
  for(let i=0; i< arguments.length; i++){
      str += `<p>${arguments[i]}</p>`
  }
  document.body.innerHTML = str
  console.log('over')
}
preview(m1,m2)