/*import _ from 'lodash';
function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  alert(1)
  return element;
}

document.body.appendChild(component());*/
document.body.innerText = 'webpack-demo'