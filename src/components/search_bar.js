/* The search bar is an ES6 class based component,
which takes in information that can be used by other components.
 */
import React, { Component } from 'react';

// declare a new js class with 'class <title>
// grant all of the functionality of a component with 'extends React.Component'
// including {Component} in import statement does the same thing.

class SearchBar extends Component {
    render() {
        return <input/>;
    }

}

export default SearchBar;