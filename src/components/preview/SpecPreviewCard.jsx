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
          <div className="content">
            <div className="item-title">
              <span>[Seattle weather in 2000]</span>
            </div>
            <div className="card-content-author">
              <span
                className="card-content-author-ava"
                style={{
                  backgroundImage: `url(https://bulma.io/images/placeholders/96x96.png)`
                }}
              />
              <span className="card-content-author-login">admin</span>
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
