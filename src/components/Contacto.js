import React, { Component } from 'react';
import '../App.css';

const styles = {
  contacto: {
    padding: '100px',
  },
};

export default class Contacto extends Component {
  componentDidMount() {
    this.setupIframeMessageHandler();
  }

  setupIframeMessageHandler() {
    window.handleIFrameMessage = (e) => {
      setTimeout(() => {
        const iframe = document.getElementById("forms-389958-349");
        if (typeof e.data === "object") {
          iframe.style.height = e.data.height;
          iframe.style.visibility = "visible";
          window.height = e.data.height;
          document.getElementById('forms-389958-349').style.height = window.height + "px";
          return;
        }
      }, 10);
    };

    if (window.addEventListener) {
      window.addEventListener("message", window.handleIFrameMessage, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmessage", window.handleIFrameMessage);
    }
  }

  render() {
    return (
      <div className="row" id="contacto">
        <div className="col-6" style={styles.contacto}>
          <h1>Formulario de contacto</h1>
          
          <iframe
            src='https://forms-sa1-389958-469-433853-349.public.500apps.org/forms?w_t=iframe&type=widget'
            frameborder="0"
            id="forms-389958-349"
            style={{ width: '100%', height: '600px', visibility: 'hidden' }}
            scrolling="no"
          ></iframe>
        </div>
      </div>
    );
  }
}
