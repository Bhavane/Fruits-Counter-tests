/* Write your CSS here */
import React, {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {mango: 0, banana: 0}

  onMango = () => {
    const {mango} = this.state
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBanana = () => {
    const {banana} = this.state
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="main">
        <div className="home">
          <h1 className="main-head">
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div className="container">
            <div className="fruit-contianer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
                className="image"
              />
              <button className="fruit-button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit-contianer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
                className="image"
              />
              <button className="fruit-button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
