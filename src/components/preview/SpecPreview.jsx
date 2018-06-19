import React, {Component} from "react";
import PropTypes from "prop-types";

class SpecPreview extends Component {

    render() {
        const { content } = this.props;

        return (
            <div  dangerouslySetInnerHTML={ {__html: content }}/>

        );
    }
}

SpecPreview.propTypes = {
    content: PropTypes.string.isRequired,
};

SpecPreview.defaultProps = {
    content: '<svg></svg>'
};
export default SpecPreview;

