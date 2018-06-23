import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {getAllPreviews} from "../../selector";
import {connect} from "react-redux";
import SpecPreview from "./SpecPreview";

class SpecPreviewBlock extends Component {

    render() {
        const { previews } = this.props;

        return (
           <Fragment>

               <div className="container">
                   <div className="columns">
                       <div className="column">
                           {previews.map((specPreview, i)=>(
                               <SpecPreview key={i} content={specPreview.preview}/>
                           ))}
                       </div>
                   </div>
               </div>

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

