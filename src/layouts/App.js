import React, { Component } from 'react';
import "../styles/App.css"
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "../layouts/Header"
import Navigation from "../layouts/Navigation"
import Page from "../layouts/Page"





class App extends Component {

  render() {


    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="main-div-app">
          <header className="main-app-header">
            <Header />
          </header>
          <main>
            <aside>
              <Navigation />
            </aside>
            <section className="main-section-page">
              {<Page handleScroll={this.handleScroll} />}
            </section>
          </main>
          <footer>
            {/* <Footer /> */}
          </footer>

        </div>
      </Router >
    );
  }
}

export default App;
