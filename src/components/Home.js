import React, { Component } from 'react'
import '../App.css'
import Banner from './Banner'
import Discounts from './Discounts'
import Productos from './Productos'
import Categorias from './Categorias';

export default class Home extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props
    return (
      <div>

        <Banner />
        <Categorias />
        <Discounts />
        <Productos
          agregarAlCarro={agregarAlCarro}
          productos={productos}
        />


      </div>
    )
  }
}
