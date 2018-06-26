import React, { Component } from 'react'
import PropTypes from 'prop-types'

const DEFAULT_MIN_WIDTH = 280
const DEFAULT_MIN_HEIGHT = 158

class PreviewCard extends Component {
  constructor(props) {
    super(props)
    this.svgParent = React.createRef()
  }

  // TODO: use other place to workaround svg sizes, no triggers on already mounted component
  componentDidMount() {
    const nodes = Array.from(this.svgParent.current.children)

    const svgPreview = nodes.pop()
    if (svgPreview) {
      svgPreview.setAttribute('width', DEFAULT_MIN_WIDTH)
      svgPreview.setAttribute('height', DEFAULT_MIN_HEIGHT)
    }
  }

  render() {
    let { content, title } = this.props

    content = content ? content : PreviewCard.defaultProps.content
    title = title ? title : PreviewCard.defaultProps.title

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

PreviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string
}

PreviewCard.defaultProps = {
  content: `<svg width="${DEFAULT_MIN_WIDTH}" height="${DEFAULT_MIN_HEIGHT}"/>`,
  title: 'Untitled'
}
export default PreviewCard
