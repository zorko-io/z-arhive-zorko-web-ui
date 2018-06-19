import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {getAllPreviews} from "../../selector";
import {connect} from "react-redux";

class SpecPreviewBlock extends Component {

    render() {
        const { previews } = this.props;

        return (
           <Fragment>
               {previews.map((specPreview, i)=>(
                   <div key={i} dangerouslySetInnerHTML={ {__html:specPreview.preview }}/>
               ))}
           </Fragment>
        );
    }
}

SpecPreviewBlock.propTypes = {
    previews: PropTypes.array.isRequired,
};

SpecPreviewBlock.defaultProps = {
    previews: []
};

const mapStateToProps = (state) => ({
    previews: getAllPreviews(state)
});

export default connect(mapStateToProps)(SpecPreviewBlock);

