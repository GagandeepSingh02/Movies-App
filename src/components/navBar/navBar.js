import React from 'react';
import './navBar.css';
import NavBarButtons from '../navBarButtons/navBarButtons';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className = "nav-bar">
                <img className = "logo" src = "https://tse1.mm.bing.net/th?id=OIP.Slm7FkzL6rgK9q8ZZUQrYAAAAA&pid=Api&P=0&w=300&h=300" alt = "logo" />
                <NavBarButtons text = {"Home"} />
                <NavBarButtons text = {"Movies"} />
                <NavBarButtons text = {"About"}/>
            </div>
        );
    }
}

export default NavBar;