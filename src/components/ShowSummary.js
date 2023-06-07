import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class ShowSummary extends React.Component {
    state = {
        show: null,
    };

    componentDidMount() {
        const {id} = this.props.match.params;
        this.fetchShowDetails(id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            const {id} = this.props.match.params;
            this.fetchShowDetails(id);
        }
    }

    fetchShowDetails = (id) => {
        axios
            .get(`https://api.tvmaze.com/shows/${id}`)
            .then((response) => {
                this.setState({show: response.data});
                console.log(response.data);
                localStorage.setItem('movieName', response.data.name);
            })
            .catch((error) => {
                console.error('Error fetching show details:', error);
            });
    };

    render() {
        const {id} = this.props.match.params;
        const {show} = this.state;

        // Inline styles for dark theme
        const containerStyle = {
            backgroundColor: '#333',
            color: '#fff',
            padding: '20px',
            borderRadius: '5px',
        };

        const headerStyle = {
            marginBottom: '20px',
        };

        const cardStyle = {
            backgroundColor: '#222',
            color: '#fff',
            padding: '20px',
            marginBottom: '20px',
            borderRadius: '5px',
        };

        const imageStyle = {
            width: '200px',
            marginBottom: '10px',
        };

        const infoStyle = {
            display: 'flex',
        };

        const infoDetailsStyle = {
            marginLeft: '20px',
        };

        const buttonStyle = {
            backgroundColor: '#fff',
            color: '#333',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            marginTop: '10px'
        };

        return (
            <div style={containerStyle}>
                <div style={cardStyle}>
                    {show && (
                        <div>
                            <h2 style={headerStyle}>{show.name}</h2>
                            <div style={infoStyle}>
                                <img src={show.image?.medium} alt={show.name} style={imageStyle}/>
                                <div style={infoDetailsStyle}>
                                    <p>
                                        <strong>Genre:</strong> {show.genres.join(', ')}
                                    </p>
                                    <p>
                                        <strong>Premiered:</strong> {show.premiered}
                                    </p>
                                    <p>
                                        <strong>Language:</strong> {show.language}
                                    </p>
                                    <p>
                                        <strong>Status:</strong> {show.status}
                                    </p>
                                    <p>
                                        <strong>Rating:</strong> {show.rating?.average || 'N/A'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div style={cardStyle}>
                    <h2 style={headerStyle}>Show Summary</h2>
                    <div dangerouslySetInnerHTML={{__html: show?.summary}}></div>
                    <Link to={`/shows/${id}/book`} style={buttonStyle}>
                        Book Movie Ticket
                    </Link>
                </div>
            </div>
        );
    }
}

export default ShowSummary;
