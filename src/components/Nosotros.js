import React, { Component } from 'react'
import '../App.css'

const styles = {

  nosotros: {
    padding: '100px',
  }
  
}

export default class Nosotros extends Component {
  render() {
    return (
      <div id="contacto">
        <div class="col-6" style={styles.nosotros}>
          <h1>¿Quienes somos?</h1>
          <p class="parrafo_nosotros">
          "Somos estudiantes de la Universidad Adolfo Ibáñez que hemos decidido emprender la creación de una tienda en línea para una futura PYME que tengamos interés en desarrollar. 
           Nuestra colección de muestra constará de tres productos por categoría, entre ellos, poleras, polerones y zapatillas.

           Nuestra meta principal es establecer una tienda en línea que sea fácil de utilizar, atractiva e interactiva para los usuarios. 
           Queremos proporcionar una experiencia de compra que sea tanto intuitiva como agradable, con el objetivo de brindar un servicio de calidad a nuestros futuros clientes."
          </p>
        </div>
      </div>
    )
  }
}


