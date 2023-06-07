import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import MovieBookingForm from './components/MovieBookingForm';

class App extends React.Component {
    state = {
        shows: [],
    };

    componentDidMount() {
        this.fetchShows();
    }

    fetchShows = () => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then(response => {
                this.setState({shows: response.data});
            })
            .catch(error => {
                console.error('Error fetching shows:', error);
            });
    };

    render() {
        return (
            <Router>
                <div className="container">
                    <Route exact path="/home" render={() => <ShowList shows={this.state.shows}/>}/>
                    <Route path="/shows/:id/summary" render={(props) => <ShowSummary {...props} />}/>
                    <Route path="/shows/:id/book" render={(props) => <MovieBookingForm {...props} />}/>
                </div>
            </Router>
        );
    }
}

export default App;
