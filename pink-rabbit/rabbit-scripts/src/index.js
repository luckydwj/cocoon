// import './index.less'
// import Icon from './icon.png';
import { cube ,square} from './math.js';
function component() {
    // const element = document.createElement("div");
    const element = document.createElement('pre');
    // element.innerHTML = "hello webapck7777"
    // const myIcon = new Image();
    // myIcon.src = Icon;
  
    // element.appendChild(myIcon);
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
      ].join('\n\n');
  return element;
}

document.body.appendChild(component());