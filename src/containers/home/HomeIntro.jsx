import React, { Component } from 'react'

class HomeIntro extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              An online community to share, find and build vega visualizations
            </h1>
            <h2 className="subtitle">
              Charts, graphincs and maps build on top of public data (json,csv) in the web
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default HomeIntro
