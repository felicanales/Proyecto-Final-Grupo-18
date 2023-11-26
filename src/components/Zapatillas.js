import React, { Component } from 'react'
import Producto from './Producto'
import '../App.css'

export default class Zapatillas extends Component {
  state = {
    productos: [
      { name: 'Zapatillas 1 ', type: 'Zapatillas', price: 24990, img1: 'img/zapatillas/zapas1.png' },
      { name: 'Zapatillas 2 ', type: 'Zapatillas', price: 24990, img1: 'img/zapatillas/zapas3.png' },
      { name: 'Zapatillas 3 ', type: 'Zapatillas', price: 24990, img1: 'img/zapatillas/zapas4.png' },
      { name: 'Zapatillas 4 ', type: 'Zapatillas', price: 24990, img1: 'img/zapatillas/zapas5.png' },
      { name: 'Zapatillas 5 ', type: 'Zapatillas', price: 24990, img1: 'img/zapatillas/zapas6.png' },
    ],
  }

  render() {
    const { agregarAlCarro } = this.props

    return (
      <div class="container">
        <div class="row">
          <div class="wrapper">
            {this.state.productos.map(producto =>
              <Producto
                agregarAlCarro={agregarAlCarro}
                key={producto.name}
                producto={producto}
              />)}
          </div>
        </div>
      </div>
    )
  }
}
