var React = require('react');
var ReactDOM = require('react-dom');

import { Modal, Button } from 'react-bootstrap';

/**
 *  Create Modal Instance
 */


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
                            <Modal.Header>
                                 <Modal.Title>Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            testing
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

var LoginModal = React.createClass({

    getInitialState:  function() {
        return { active: false };
    }, 

    handleClick: function(event) {
        console.log(`state of login ${this.state.active}`);
        this.setState({active: !this.state.active});
    },

    render: function() {
        var link = '#';
        var text = "Log-in";
        return(
            <a href={link} onClick={this.handleClick}>
            {text}
            </a>
        );
    }
})

//ReactDOM.render(
    //<LoginModal />,
    //document.getElementById('login')
//);

ReactDOM.render(
    <CustomModal />, 
    document.getElementById('example')
);
