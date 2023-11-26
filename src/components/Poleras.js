import React, { Component } from 'react'
import Producto from './Producto'
import '../App.css'

export default class Poleras extends Component {
  state = {
    productos: [
      { name: 'Polera de Eren Titán ', type: 'Polera', price: 24990, img1: 'img/poleras/polera1.jpg' },
      { name: 'Polera de chihiro ', type: 'Polera', price: 24990, img1: 'img/poleras/polera2.jpg'  },
      { name: 'Polera de Goku', type: 'Polera', price: 24990, img1: 'img/poleras/polera3.png'  },
      { name: 'Polera de Gon', type: 'Polera', price: 24990, img1: 'img/poleras/polera4.jpg'  },
      { name: 'Polera de One Piece', type: 'Polera', price: 24990, img1: 'img/poleras/polera5.jpg'  },
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
