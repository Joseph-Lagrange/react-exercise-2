import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.scss';

ReactDOM.render(<App />, document.getElementById('root'));

function fetchData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) {
        return;
      }
      if (xhr.status === 200) {
        return resolve(xhr.responseText);
      }
      return reject(xhr.statusText);
    };
    xhr.send();
  });
}

// 发出异步请求获得结果之后进行 then
const URL = 'http://localhost:3000/products';
fetchData(URL)
  .then((result) => {
    document.writeln(JSON.parse(result));
    console.log(JSON.parse(result));
  })
  .catch((error) => {
    console.error(error);
  });
