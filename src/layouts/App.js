import React, { Component } from 'react';
import "../styles/App.css"
import { BrowserRouter as Router, HashRouter, } from 'react-router-dom';
import Header from "../layouts/Header"
import Navigation from "../layouts/Navigation"
import Page from "../layouts/Page"





class App extends Component {

  render() {

    return (
      <HashRouter>
        <Router basename="/#">
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
            </footer>

          </div>
        </Router >
      </HashRouter>

    );
  }
}

export default App;
