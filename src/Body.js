import React, { Component } from 'react';
import imgURL from '../src/assets/product_image_placeholder.png';
import './Body.scss';

class Body extends Component {
  render() {
    return (
      <div className="body">
        <Product />
      </div>
    );
  }
}

function Product() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <h2>iPhone</h2>
          </tr>
          <tr>
            <td>
              <h3>iPhone11</h3>
            </td>
            <td>
              <h3>iPhoneXS</h3>
            </td>
            <td>
              <h3>iPhoneSE</h3>
            </td>
          </tr>
          <tr>
            <td>
              <img src={imgURL} alt="iPhone11" />
            </td>
            <td>
              <img src={imgURL} alt="iPhoneXS" />
            </td>
            <td>
              <img src={imgURL} alt="iPhoneSE" />
            </td>
          </tr>
          <tr>
            <td>
              <p>￥ 5999</p>
            </td>
            <td>
              <p>￥ 5399</p>
            </td>
            <td>
              <p>￥ 3599</p>
            </td>
          </tr>
          <tr>
            <h2>HUAWEI</h2>
          </tr>
          <tr>
            <td>
              <h3>HUAWEI P40 Pro+</h3>
            </td>
            <td>
              <h3>HUAWEI Mate 30</h3>
            </td>
            <td>
              <h3>HUAWEI nova 7</h3>
            </td>
          </tr>
          <tr>
            <td>
              <img src={imgURL} alt="HUAWEI P40 Pro+" />
            </td>
            <td>
              <img src={imgURL} alt="HUAWEI Mate 30" />
            </td>
            <td>
              <img src={imgURL} alt="HUAWEI nova 7" />
            </td>
          </tr>
          <tr>
            <td>
              <p>￥ 7999</p>
            </td>
            <td>
              <p>￥ 5000</p>
            </td>
            <td>
              <p>￥ 4000</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Body;
