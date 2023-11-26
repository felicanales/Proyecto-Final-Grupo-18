import { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import '../App.css'

export default class Carro extends Component {
  render() {
    const { carro } = this.props
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
    return (
      <div class="cart-area">
        <a href="#" id="essenceCartBtn"><img src="img/core-img/bag.svg" alt="" /> <BubbleAlert value={cantidad} /></a>
      </div>
    )
  }
}