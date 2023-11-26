import React, { Component } from 'react'
import '../App.css'

export default class Footer extends Component {
  render() {
    return (
      <footer class="footer_area clearfix">
        <div class="container">
          <div class="row">

            <div class="col-12 col-md-6">
              <div class="single_widget_area d-flex mb-30">

                <div class="footer-logo mr-50">
                  <a href="#">Tienda proyecto</a>
                </div>

                <div class="footer_menu">
                  <ul>
                    <li><a href="/Coleccion">Tienda</a></li>
                    <li><a href="/Contacto">Contacto</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="single_widget_area mb-30">
                <ul class="footer_widget_menu">
                </ul>
              </div>
            </div>
          </div>

          <div class="row align-items-end">

            <div class="col-12 col-md-6">
              <div class="single_widget_area">
                <div class="footer_heading mb-30">
                  <h6>Suscribete</h6>
                </div>
                <div class="subscribtion_form">
                  <form>
                    <input type="email" name="mail" class="mail" placeholder="Correo..." />
                    <button type="button" class="submit"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                  </form>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="single_widget_area">
                <div class="footer_social_area">
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-md-12 text-center">
              <p>

                Copyright &copy;2023 Todos los derechos reservados

              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}