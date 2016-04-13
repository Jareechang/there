var React = require('react');
var ReactDOM = require('react-dom');

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
