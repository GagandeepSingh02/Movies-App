import React from 'react';
import Rating from '../rating/rating';
import './moviesTableRow.css';

class MoviesTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let {sno, name, genre, rating} = this.props.data;
        return(
            <div className = "movies-table-row" style = {this.props.header ? {fontWeight : "bolder"} : {}}>
                <div className = "column serial-number">{sno}</div>
                <div className = "column movie-name">{name}</div>
                <div className = "column Genre">{genre}</div>
                <div className = "column Rating">{this.props.header ? rating :<Rating  rating = {rating} />}</div>
                
            </div>
        )
    }
}

export default MoviesTableRow;