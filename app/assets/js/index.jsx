var React = require('react');
var ReactDOM = require('react-dom');

import { Modal, Button } from 'react-bootstrap';

/**
 *  Create Modal Instance
 */

var styles = {
    headerModal : {
        color: '#000'
    },
    bodyModal: {
        color: '#000'
    }
}

var CustomModal = React.createClass({
    
    getInitialState:  function() {
        return { show: false };
    }, 

    handleClick: function(event) {
        this.setState({active: !this.state.active});
    },

    render: function() {
        let close = () => this.setState({ show: false });
        var link = '#';
        var text = "Log-in";
            return (
                <div>
                    <div id="newRender" href={link} onClick={ () => this.setState({show: true})}>
                        {text}
                    </div>
                    <Modal show={this.state.show} onHide={close} container={this} aria-labelledby="contained-modal-title">
                            <Modal.Header style={styles.headerModal}>
                                 <Modal.Title>Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={styles.bodyModal}>
                           stuff 
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={close}>Close</Button>
                                <Button bsStyle="primary">Save changes</Button>
                            </Modal.Footer>
                    </Modal>
                </div>
        );
    }
})

ReactDOM.render(
    <CustomModal />, 
    document.getElementById('login')
);
