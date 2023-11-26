import React, { Component } from 'react'
import Producto from './Producto'
import '../App.css'

export default class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props

    return (
      <section class="new_arrivals_area section-padding-80 clearfix">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-heading text-center">
                <h2>Productos Populares</h2>
              </div>
            </div>
          </div>
        </div>
        {this.props.children}

        <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="popular-products-slides owl-carousel">
                  {productos.map(producto =>
                    <Producto
                      agregarAlCarro={agregarAlCarro}
                      key={producto.name}
                      producto={producto}
                    />)}
                </div>
              </div>
            </div>
          </div>
      </section>
    )
  }
}