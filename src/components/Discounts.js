import React, { Component } from 'react'
import '../App.css'

export default class Discounts extends Component {
  render() {
    return (
      <div class="cta-area">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="cta-content bg-img background-overlay" style={{ backgroundImage: "url(img/bg-img/descuentos.jpg)" }}>
                  <div class="h-100 d-flex align-items-center justify-content-end">
                    <div class="cta--text">
                      <h6>-60%</h6>
                      <h2>Descuentos</h2>
                      <a href="#" class="btn essence-btn">Comprar ahora</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}