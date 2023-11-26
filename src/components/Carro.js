import { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import '../App.css'

export default class Carro extends Component {

  render() {
    const { carro, removeProduct } = this.props
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
    const total = carro.reduce((acc, el) => acc + parseInt(el.cantidad)*parseInt(el.price), 0)
    return (
      <div class="right-side-cart-area">


        <div class="cart-button">
          <a href="#" id="rightSideCart"><img src="img/core-img/bag.svg" alt="" /> 
            {cantidad !== 0
              ? <BubbleAlert value={cantidad}/>
              : null}
          </a>
        </div>

        <div class="cart-content d-flex">
            
          <div class="cart-list">
            {carro.map(x => 
              <div onClick={() => removeProduct(x.name)} class="single-cart-item" key={x.name}>
                <a href="#" class="product-image">
                  <img src={x.img1} class="cart-thumb" alt="" />

                  <div class="cart-item-desc">
                    <span class="product-remove"><i class="fa fa-close" aria-hidden="true"></i></span>
                    <span class="badge">{x.team}</span>
                    <h6>{x.name}</h6>
                    <p class="size">Size: M</p>
                    <p class="color">Cantdad: {x.cantidad}</p>
                    <p class="price">${x.price*x.cantidad}</p>
                  </div>
                </a>
              </div>
            )}
          </div>

          <div class="cart-amount-summary">

            <h2>Resumen</h2>
            <ul class="summary-table">
              <li><span>subtotal:</span> <span>${total}</span></li>
              <li><span>envío:</span> <span>Gratis</span></li>
              <li><span>descuento:</span> <span>0%</span></li>
              <li><span>total:</span> <span>${total}</span></li>
            </ul>
            <div class="checkout-btn mt-100">
              <a href="#" class="btn essence-btn">Ir a pagar</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}