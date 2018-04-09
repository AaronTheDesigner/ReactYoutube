/* The search bar is an ES6 class based component,
which takes in information that can be used by other components.
 */
import React, { Component } from 'react';

// declare a new js class with 'class <title>
// grant all of the functionality of a component with 'extends React.Component'
// including {Component} in import statement does the same thing.

class SearchBar extends Component {
    //the following constructor initializes the state
    constructor(props) {
        super(props);
        //this.state = {} creates a new object to add properties
        this.state = { term: '' };
    }

    render() {
        //this refers to anything within SearchBar's render
        return (
        <div className = "search-bar">
            <input 
            value = {this.state.term}
            onChange = { event => this.onInputChange(event.target.value)} />
            
        </div>
        );
    }

    //event handler, named 'handler'/'on'
    /*onInputChange(event) {
        console.log(event);
    }*/
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

/* Understanding State
State is a plain javascript object used to record and REACT to user based events.
Each class based component has its own state object
whenever the object is changed it will be rerendered along with it's children.
*/
export default SearchBar;