import React from 'react';
import ReactDOM from 'react-dom';

require('./stylesheets/main.scss');


//box for user input text
var InputBox = React.createClass({
    //setting initial html to cheat sheet for Markdown
    //text formatting in block is for MD input to read correctly
    render: function(){
        return <textarea className="half left" onChange={this.props.changeOutput} id="input"/>
    },
});


//Box where converted text will be displayed
var OutputBox = React.createClass({
    render: function () {
        return <div className="half right" id="output"></div>;
    }
});

//Render Both Compotents and run function to convert text to MD
var OuterBox = React.createClass({
    getInitialState: function() {
        return {
            input: ""
        }
    },
    componentDidMount: function() {
        document.getElementById("input").value = "# Hello World\n--------------\nThis is a Markdown Preview App.\nTest it Out by Typing your Markdown Text Here.\n*******\n*italic*, **bold**, ~~strikethrough~~\n******\n\nUnordered Lists:\n  + Ada Lovelace\n  + Grace Hopper\n  + Anita Borg\n \n******\n\nOrdered Lists:\n 1. Javascript\n 2. Python\n 3. PHP"
        return this.changeOutput()
    },

    changeOutput: function() {
        var newInput = document.getElementById('input').value;
        document.getElementById('output').innerHTML = marked(newInput);
        this.setState({
            input: newInput
        });
    },
    //render both components
    render: function() {
        return (
            <div>
                <InputBox changeOutput={this.changeOutput} />
                <OutputBox outputText={this.state.input}/>
            </div>
        )
    }
});

ReactDOM.render(<OuterBox />, document.getElementById('target'));

