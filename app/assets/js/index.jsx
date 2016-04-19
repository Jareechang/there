var React = require('react');
var ReactDOM = require('react-dom');

import { Modal, Button } from 'react-bootstrap';

/**
 *  Create Modal Instance
 */

const modalInstance = ( 
    <div className="static-modal">
        <Modal.Dialog>

            <Modal.Header>
                 <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
               testing 123 body...
            </Modal.Body>

            <Modal.Footer>
                <Button>Close</Button>
                <Button bsStyle="primary">Save changes</Button>
            </Modal.Footer>

        </Modal.Dialog>

    </div>
);

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

ReactDOM.render(
    <LoginModal />,
    document.getElementById('login')
);

ReactDOM.render(
    modalInstance, 
    document.getElementById('example')
);
