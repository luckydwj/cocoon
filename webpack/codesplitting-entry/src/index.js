import _ from 'loadsh'
function component() {
    const element = document.createElement('div');
    console.log(_.join(['Hellow', 'webpack'], ' '));
    return element;
  }
  
  document.body.appendChild(component());