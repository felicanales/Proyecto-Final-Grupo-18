import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Carro from './Carro'
import CarroNav from './CarroNav'
import '../App.css'

export default class Header extends Component {
  render() {
    const { carro, removeProduct } = this.props
    return (
      <header class="header_area">
        <div class="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">

          <nav class="classy-navbar" id="essenceNav">
            <a><img class="TiendaLogo" src="img/bg-img/logoTienda.jpg" alt="" /></a>
            <Link to="/" ><a class="nav-brand" href="/">Tienda proyecto</a></Link>

            <div class="classy-navbar-toggler">
              <span class="navbarToggler"><span></span><span></span><span></span></span>
            </div>

            <div class="classy-menu">

              <div class="classycloseIcon">
                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
              </div>

              <div class="classynav">
                <ul>
                  <li><Link to="/">Inicio</Link></li>
                  <li><a href="#">Tienda</a>
                    <div class="megamenu">
                      <ul class="single-mega cn-col-4">
                        <li class="title">Poleras</li>
                        <li><Link to="/Poleras">Poleras anime</Link></li>
                      </ul>
                      <ul class="single-mega cn-col-4">
                        <li class="title">Polerones</li>
                        <li><a href="/Polerones">Polerones anime</a></li>
                      </ul>
                      <ul class="single-mega cn-col-4">
                        <li class="title">Zapatillas</li>
                        <li><a href="/Zapatillas">Zapatillas Hombre</a></li>
                      </ul>
                      <div class="single-mega cn-col-4">
                        <img src="img/bg-img/perso.png" alt="" />
                      </div>
                    </div>
                  </li>
                  <li><Link to="/nosotros">¿Quienes somos?</Link></li>
                  <li><Link to="/contacto">Contacto</Link></li>
                </ul>
              </div>

            </div>
          </nav>


          <div class="header-meta d-flex clearfix justify-content-end">

            <div class="search-area">
              <form action="#" method="post">
                <input type="search" name="search" id="headerSearch" placeholder="Buscar..." />
                <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
              </form>
            </div>


            <CarroNav carro={carro} />
          </div>

        </div>

        <div class="cart-bg-overlay"></div>

        <Carro 
          carro={carro}
          removeProduct={removeProduct}
        />

      </header>
    )
  }
}
