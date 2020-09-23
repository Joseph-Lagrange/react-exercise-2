import React, { Component } from 'react';
import imgURL from '../src/assets/product_image_placeholder.png';
import './Body.scss';
import PropTypes from 'prop-types';

const URL = 'http://localhost:3000/products';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    fetch(URL)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          data: result,
        });
      });
  }

  render() {
    return (
      <div className="body">
        <table>
          <tbody>
            <tr>
              <td>
                <h2>iPhone</h2>
              </td>
            </tr>
            <tr>
              {Object.keys(this.state.data)
                .filter((key) => key < 3)
                .map((key) => (
                  <td key={key}>
                    <h3>{this.state.data[key].name}</h3>
                  </td>
                ))}
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
              {Object.keys(this.state.data)
                .filter((key) => key < 3)
                .map((key) => (
                  <td key={key}>
                    <p>{this.state.data[key].price}</p>
                    <button
                      className="btn btn-success m-2"
                      onClick={() => this.props.handleIncrement(this.props.id)}
                    >
                      add to cart
                    </button>
                  </td>
                ))}
            </tr>
            <tr>
              <td>
                <h2>HUAWEI</h2>
              </td>
            </tr>
            <tr>
              {Object.keys(this.state.data)
                .filter((key) => key >= 3)
                .map((key) => (
                  <td key={key}>
                    <h3>{this.state.data[key].name}</h3>
                  </td>
                ))}
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
              {Object.keys(this.state.data)
                .filter((key) => key >= 3)
                .map((key) => (
                  <td key={key}>
                    <p>{this.state.data[key].price}</p>
                    <button
                      className="btn btn-success m-2"
                      onClick={() => this.props.handleIncrement(this.props.id)}
                    >
                      add to cart
                    </button>
                  </td>
                ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Body.propTypes = {
  id: PropTypes.int,
  handleIncrement: PropTypes.method,
};

export default Body;
