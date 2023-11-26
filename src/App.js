import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Contacto from './components/Contacto';
import Home from './components/Home';
import Header from './components/Header'
import Footer from './components/Footer'
import Coleccion from './components/Coleccion';
import Poleras from './components/Poleras';
import Polerones from './components/Polerones';
import Zapatillas from './components/Zapatillas';
import Nosotros from './components/Nosotros';

class App extends React.Component {
  state = {
    productos: [
      { name: 'Polera de Eren Titan', team: 'Polera', price: 24990, img1: 'img/poleras/polera1.jpg' },
      { name: 'Polera de chihiro', team: 'Polera', price: 24990, img1: 'img/poleras/polera2.jpg'  },
      { name: 'Polera de Goku', team: 'Polera', price: 24990, img1: 'img/poleras/polera3.png'  },
      { name: 'Polera de Gon', team: 'Polera', price: 24990, img1: 'img/poleras/polera4.jpg'  },
      { name: 'Polera de One Piece', team: 'Polera', price: 24990, img1: 'img/poleras/polera5.jpg'  },
    ],

    carro: [],
  }

  componentDidMount() {
    this.obtenerCarro()
  }

  obtenerCarro = () => {
    const carro = localStorage.getItem('carro')
    const parseCarro = carro ? JSON.parse(carro) : []
    this.setState({
      carro: parseCarro
    })
  }

  guardarCarro = (carro) => {
    localStorage.setItem('carro', JSON.stringify(carro));
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
      this.setState({ carro: newCarro })
      this.guardarCarro(newCarro)
      return;
    }
    const arr = [...carro, {...producto, cantidad: 1}]
    this.setState({
      carro: arr 
    })
    this.guardarCarro(arr)
    return;
  }

  removeProduct = (name) => {
    const { carro } = this.state
    const index = carro.findIndex((c) => c.name == name)
    if (index !== -1) {
      carro.splice(index, 1)
      this.setState({carro})
      localStorage.setItem('carro', JSON.stringify(carro));
    }
  }
  
  render() {
    return (
      <div name="app">
        <Router>
          <Header 
            carro={this.state.carro}
            removeProduct={this.removeProduct}
          />

          <Routes>
            <Route path="/" element={<Home 
                agregarAlCarro={this.agregarAlCarro}
                productos={this.state.productos}
              />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/Coleccion" element={<Coleccion 
                agregarAlCarro={this.agregarAlCarro}
              />} />
            <Route path="/Poleras" element={<Poleras
                agregarAlCarro={this.agregarAlCarro}
              />} />
            <Route path="/Polerones" element={<Polerones
                agregarAlCarro={this.agregarAlCarro}
              />} />
            <Route path="/Zapatillas" element={<Zapatillas
                agregarAlCarro={this.agregarAlCarro}
              />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;