import React from 'react';
import { connect } from 'react-redux';

const updateText = (text) => {
    return {
        type: 'UPDATE_TEXT',
        text
    };
}

const mapStateToProps = state => {
    let search_text = state.search_text || null;
    return {
        search_text
    };
}

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input onChange={this.updateSearch} value={this.props.search_text || ""}/>
            </div>
        );
    }
    updateSearch = (event) => {
        this.props.updateText(event.target.value);
    }
}

export default connect(mapStateToProps,{updateText})(Search);