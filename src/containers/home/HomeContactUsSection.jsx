import React, { Component } from 'react'

class HomeContactUsSection extends Component {
  render() {
    return (
      <section className="hero">
        <h1>Contact Us</h1>
        <div className="field">
          <label className="label">Label</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
          <p className="help">This is a help text</p>
        </div>
        <div className="field">
          <label className="label">Label</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
          <p className="help">This is a help text</p>
        </div>
        <div className="field">
          <label className="label">Label</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
          <p className="help">This is a help text</p>
        </div>
      </section>
    )
  }
}

export default HomeContactUsSection
