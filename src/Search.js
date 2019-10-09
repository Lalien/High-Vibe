import React from 'react';
import { connect } from 'react-redux';
import { getSearchText, getSearchResults, getSelectedStrain } from './redux/selectors';
import { updateText, selectStrain } from './redux/actions';
import {Button, Container, Row, Modal} from 'react-bootstrap';
import InformationModal from './InformationModal';

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
            <>
                <Container>
                    <Row>
                        <label>Search Strain Database</label>
                        <input className="form-control"  name="search-text" onChange={this.updateSearch} value={this.props.search_text || ""}/>
                        <div style={this.props.search_text.length ? {} : {display:'none'}}>
                            <div>
                                {this.state.results.map((result) =>
                                    <div>
                                        <a href="#" onClick={() => this.handleSelect(result.id)} style={ this.props.selected_strain == result.id ? {color: 'green'} : {}}>{result.name}</a>
                                    </div>
                                )}
                                <div style={this.state.results.length ? {display:'none'} : {}}>
                                    No Strains Found.
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
                <InformationModal/>
            </>
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