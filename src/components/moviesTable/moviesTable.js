import React from 'react';
import MoviesTableRow from '../moviesTableRow/moviesTableRow';
import './moviesTable.css';

class MoviesTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let data = this.props.data;
        let header = {
            sno : "S.NO.",
            name : "Movie Name",
            genre : "Genre",
            rating : "Rating"
        };

        let rows = [];
        for(let i of data){
            rows.push(<MoviesTableRow key = {i.sno} data = {i}></MoviesTableRow>)
        }

        return(
            <div className = "movies-table">
                <MoviesTableRow data = {header} header = {true}/>
                {rows}
            </div>
        )
    }
}

export default MoviesTable;