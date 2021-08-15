import React from 'react';
import "./loader.css";

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="loader">
                <img className = "loader-gif" src="https://gifimage.net/wp-content/uploads/2018/04/loading-animated-gif-transparent-background-11.gif" alt="loader" />
            </div>
        )
    }
}

export default Loader;