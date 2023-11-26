import React, { Component } from 'react'
import Producto from './Producto'
import '../App.css'

export default class Polerones extends Component {
  state = {
    productos: [
      { name: 'Poleron 1 ', type: 'Poleron', price: 24990, img1: 'img/polerones/poleron.png' },
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
