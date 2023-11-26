import React, { Component } from 'react'
import '../App.css'

export default class Banner extends Component {
  render() {
    return (
      <section class="welcome_area bg-img background-overlay" style={{ backgroundImage: "url(img/bg-img/banner2.jpg)" }}>
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12">
              <div class="hero-content">
                <h6>Tienda proyecto</h6>
                <h2>Nueva colección</h2>
                <a href="/Coleccion" class="btn essence-btn">ver colección</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}