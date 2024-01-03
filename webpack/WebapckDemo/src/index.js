import './index.less'
function component() {
    const element = document.createElement('div');
  
    element.innerHTML = "hello webapck"
    element.classList.add('hello')
    return element;
  }
  
  document.body.appendChild(component());