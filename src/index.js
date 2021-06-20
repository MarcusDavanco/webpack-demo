import _ from 'lodash';
import './style.css';
import awesomeFace from './awesome-face.png';
import csvData from './sample.csv';
import xmlSample from './sample.xml';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output TOML Example
console.log(toml.owner.name); // output Tom Prest-Werner

console.log(yaml.title); // output YAML Example
console.log(yaml.owner.name); // output Tom Prest-Werner

console.log(json.title); // output JSON5 Example
console.log(json.owner.name); // output Tom Preston-Werner

function component() {
  const element = document.createElement('div');

  // Loadash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], '');
  element.classList.add('hello');

  const myImg = new Image();
  myImg.src = awesomeFace;

  console.log(csvData);
  console.log(xmlSample);

  element.appendChild(myImg);

  return element;
}

document.body.appendChild(component());
