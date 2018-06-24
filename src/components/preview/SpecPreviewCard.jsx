import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SpecPreviewCard extends Component {
  constructor(props) {
    super(props)
    this.svgParent = React.createRef()
  }

  componentDidMount() {
    const nodes = Array.from(this.svgParent.current.children)

    const svgPreview = nodes.pop()
    if (svgPreview) {
      svgPreview.setAttribute('width', '280')
      svgPreview.setAttribute('height', '158')
    }
  }

  render() {
    const { content } = this.props

    return (
      <div className="card">
        <div className="card-image">
          <figure
            ref={this.svgParent}
            className="image"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-24x24">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="subtitle is-6">admin</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SpecPreviewCard.propTypes = {
  content: PropTypes.string.isRequired
}

SpecPreviewCard.defaultProps = {
  content: '<svg></svg>'
}
export default SpecPreviewCard
