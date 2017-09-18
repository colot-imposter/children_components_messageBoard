import React, { Component } from 'react';
import '../styles/App.css';
import Footer from './Footer.js'
import Header from './Header.js'


class BaseLayout extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <Header/>
          <div className="row justify-content-center">
            {this.props.children}
          <Footer />
        </div>
      </div>
    </div>
    );
  }
}

export default BaseLayout
