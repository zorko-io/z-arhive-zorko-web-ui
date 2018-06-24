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
    let { content, title } = this.props

    title = title ? title : SpecPreviewCard.defaultProps.title

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
              <span>{title}</span>
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
  content: PropTypes.string.isRequired,
  title: PropTypes.string
}

SpecPreviewCard.defaultProps = {
  content: '<svg></svg>',
  title: 'Untitled'
}
export default SpecPreviewCard
