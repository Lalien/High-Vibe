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
            <div class="advance-search">
                <Container>
                    <Row style={{position:'relative'}}>
                        <label>Search Strain Database</label>
                        <input className="form-control"  name="search-text" onChange={this.updateSearch} value={this.props.search_text || ""}/>
                        <br/>
                        <div style={this.props.search_text.length ? {position:'absolute',bottom:0, width:'100%'} : {display:'none'}}>
                            <ul style={{position: 'absolute',width: '100%','max-height':'300px','overflow-y':'scroll'}}>
                                {this.state.results.map((result) =>
                                    <li style={{'text-align':'left','background-color':'rgb(0, 128, 79)'}}>
                                        <a href="#" onClick={() => this.handleSelect(result.id, result.name)} style={{width:'100%',display:'block',padding:'10px'}}>{result.name} - {result.race}</a>
                                    </li>
                                )}
                                <div style={this.state.results.length ? {display:'none'} : {}}>
                                    No Strains Found.
                                </div>
                            </ul>
                        </div>
                    </Row>
                </Container>
                <InformationModal/>
            </div>
        );
    }

    handleSelect = (id,name) => {
        this.props.selectStrain(id,name);
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