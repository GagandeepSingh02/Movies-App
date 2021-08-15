import React from 'react';
import Pagination from '../../components/pagination/pagination';
import MoviesTable from '../../components/moviesTable/moviesTable';
import NavBar from '../../components/navBar/navBar';
import SideBar from '../../components/sideBar/sideBar';
import Loader from '../../components/loader/loader';
import './moviesList.css';
import { HandleGetMovies } from './dataManager';
import { connect } from 'react-redux';

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            pageNumber: 1,
            rating: "all",
            data: [],
            loader: true
        };
    }

    // "https://pephellomivies.free.beeceptor.com/movies"
    // "https://pepmovies.free.beeceptor.com/movies"
    // "https://gaganmovies.free.beeceptor.com/movies"
    // "https://messimovies.free.beeceptor.com/movies"

    async componentDidMount() {
        let data = await HandleGetMovies();
        this.setState({
            data: data,
            loader: false
        });

        this.props.updateMovies(data);
}

changeSearch = (e) => {
    this.setState({
        pageNumber: 1,
        search: e.target.value
    });
}

changePage = (pageNumber) => {
    this.setState({
        pageNumber: pageNumber
    });
}

changeRating = (e) => {
    this.setState({
        pageNumber: 1,
        rating: e.target.value === "all" ? "all" : parseInt(e.target.value)
    });
}

render() {
    let data = this.state.data;

    let filteredData = data.filter((movie) => {
        if (this.state.rating !== "all") {
            return movie.rating === this.state.rating;
        }
        return true;
    });

    filteredData = filteredData.filter((movie) => {
        let movieName = movie.name.toLowerCase();
        let search = this.state.search.toLowerCase();
        return movieName.includes(search);
    });

    let finalData = [];
    for (let i = (this.state.pageNumber - 1) * 5; i < (this.state.pageNumber) * 5 && i < filteredData.length; i++) {
        finalData.push(filteredData[i]);

    }

    return (
        <div className="main-container">
            {this.state.loader ? <Loader /> : ""}
            <NavBar />
            <SideBar />
            <div className="movies-table-container">
                <div className="filters">
                    <input placeholder="Search for movies" value={this.state.search} className="movie-search" type="text" onChange={this.changeSearch} />
                    <select className="rating-dropdown" name="rating" onChange={this.changeRating}>
                        <option value={"all"}>All Rating</option>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <MoviesTable data={finalData} />
                <Pagination totalMovies={filteredData.length} changePage={this.changePage} />
            </div>
        </div>
    );
}
}

const mapStateToProps = state => {
    // console.log(state);
    return{
        data: state.data
    }
}

const mapActionToProps = dispatch => {
    return{
        updateMovies: (data) => dispatch({type: "updateMovies", data: data})
    }
}

export default connect(mapStateToProps,mapActionToProps)(MoviesList);