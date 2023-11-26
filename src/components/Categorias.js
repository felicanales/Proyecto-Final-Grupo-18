import React, { Component } from 'react'
import '../App.css'

export default class Categorias extends Component {
  render() {
    return (
      <div class="top_catagory_area section-padding-80 clearfix">
        <div class="container">
          <div class="row justify-content-center">

            <div class="col-12 col-sm-6 col-md-4">
              <div class="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{ backgroundImage: "url(img/bg-img/polera.jpg)" }}>
                <div class="catagory-content">
                  <a href="/Poleras">Poleras</a>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4">
              <div class="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{ backgroundImage: "url(img/bg-img/poleron.png)" }}>
                <div class="catagory-content">
                  <a href="/Polerones">Polerones</a>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <div class="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{ backgroundImage: "url(img/bg-img/zapas.jpg)" }}>
                <div class="catagory-content">
                  <a href="/Zapatillas">Zapatillas</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}