import React from 'react';
import { connect } from 'react-redux';
import { getSearchText, getSearchResults, getSelectedStrain } from './redux/selectors';
import { updateText, selectStrain } from './redux/actions';

class Search extends React.Component {
    loadedData = false;

    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }

    render() {
        return (
            <div>
                <label>
                    Search
                </label>
                <input name="search-text" onChange={this.updateSearch} value={this.props.search_text || ""}/>
                <div className={this.props.search_text.length ? '' : 'hidden'}>
                    {this.state.results.map((result) =>
                        <a onClick={() => this.handleSelect(result.id)} style={ this.props.selected_strain == result.id ? {color: 'green'} : {}}>{result.name}</a>
                    )}
                    <div className={this.state.results.length ? 'hidden' : ''}>
                        No Strains Found.
                    </div>
                </div>
            </div>
        );
    }

    handleSelect = id => {
        this.props.selectStrain(id);
    }

    async componentDidUpdate() {
        if (!this.loadedData && this.props.search_text.length) {
            await getSearchResults(this.props.search_text).then((results) => {
                this.loadedData = true;
                this.setState({
                    results
                });
            });
        }
    }

    updateSearch = (event) => {
        this.loadedData = false;
        this.props.updateText(event.target.value);
    }
}

export default connect(state => ({search_text: getSearchText(state), selected_strain: getSelectedStrain(state)}),{updateText,selectStrain})(Search);