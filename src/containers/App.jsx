import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';


class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            filteredRobots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        this.fetchRobots();
    }

    fetchRobots = () => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    robots: json,
                    filteredRobots: json
                });
            });
    }

    onSearchChange = (evt) => {
        let filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(evt.target.value.toLowerCase()));
        this.setState({ searchField: evt.target.value, filteredRobots });
    }

    render() {

        // If no data is supplied
        return !this.state.robots.length ?
            <h1 className='tc'>Loading...</h1> :

            <div className='tc'>
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={this.state.filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>

    }
}


export default App;
