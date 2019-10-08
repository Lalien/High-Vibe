import React from 'react';
import { connect } from 'react-redux';
import { getSearchText, getSearchResults } from './redux/selectors';
const updateText = (text) => {
    return {
        type: 'UPDATE_TEXT',
        text
    };
}

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>
                    Search
                </label>
                <input name="search-text" onChange={this.updateSearch} value={this.props.search_text || ""}/>
                <span>{this.props.search_text}</span>
            </div>
        );
    }

    updateSearch = (event) => {
        this.props.updateText(event.target.value);
    }
}

export default connect(state => ({search_text: getSearchText(state)}),{updateText})(Search);