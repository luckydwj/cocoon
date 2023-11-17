import data from './utils'
// const data=require('./utils')
import './style.css'
// import Icon from './icon.png'
import Data from './data.xml'
import Notes from './data.csv'
import toml from './data.toml'
import yaml from './data.yaml'
import json5 from './data.json5'

console.log("=========");
console.log(toml.title);
console.log(toml.owner.name);

console.log(yaml.title);
console.log(yaml.owner.name);

console.log(json5.title);
console.log(json5.owner.name);


function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "hello webapck"
    console.log("====data==", data);
    element.classList.add('hello')
    // const myIcon = new Image()
    // myIcon.src = Icon
    // myIcon.style.width = 30
    // myIcon.style.height = 30;
    // element.appendChild(myIcon)
  console.log(Data);
  console.log(Notes);
    return element;
  }
  
  document.body.appendChild(component());