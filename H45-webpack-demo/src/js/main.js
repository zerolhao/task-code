import module1 from './module-1'  // 引入模块1
import module2 from './module-2'  // 引入模块2
let m1 = module1()  // use 模块
let m2 = module2()
var preview = (str)=>{
  document.body.innerText = str
  console.log('over')
}
preview(m1+m2)