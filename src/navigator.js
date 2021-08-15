import { Component } from "react";
import { Switch, Route } from "react-router-dom"
import NavBar from "./components/navBar/navBar";
import SideBar from "./components/sideBar/sideBar";
import MoviesList from "./containers/moviesList/moviesList";
class Navigator extends Component {
    render() {
        return (
            <Switch>
                <Route path="/movies" component={MoviesList}></Route>
                <Route path="/sidebar" component={SideBar}></Route>
                <Route path="/navbar" component={NavBar}></Route>
            </Switch>

        );
    }
}

export default Navigator;