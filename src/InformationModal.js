import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { getStrainInformation } from './redux/selectors';
import { resetSelectedStrain } from './redux/actions';

const mapStateToProps = state => {
    let selected_strain = state.selected_strain || null;
    return {
        selected_strain
    };
}

class InformationModal extends React.Component {
    loadedData = false;

    handleClose = () => {
        this.props.resetSelectedStrain();
    }

    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            <Modal show={this.props.selected_strain != null} onHide={this.handleClose}>
                <Modal.Body>
                    <p>{this.state.description != null ? this.state.description.data.desc : ""}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    async componentDidUpdate() {
        if (!this.loadedData && this.props.selected_strain) {
            await getStrainInformation(this.props.selected_strain).then(data => {
                this.loadedData = true;
                this.setState({
                    ...data
                });
            });
        }
        this.loadedData = false;
    }
}

export default connect(mapStateToProps, {resetSelectedStrain})(InformationModal);