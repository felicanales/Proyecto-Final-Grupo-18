import { Component } from 'react'
import '../App.css'

export default class Button extends Component {
  render() {
    return (
      <div {...this.props} class="add-to-cart-btn">
        <a href="#" class="btn essence-btn">Añadir al carro</a>
      </div>
    )
  }
}