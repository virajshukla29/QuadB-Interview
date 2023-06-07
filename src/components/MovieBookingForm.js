import React from 'react';

class MovieBookingForm extends React.Component {
    state = {
        name: '',
        email: '',
        guessedOutput: '',
    };

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        const {name, email} = this.state;

        localStorage.setItem('Name', name);
        localStorage.setItem('Email', email);

        this.setState({name: '', email: ''});
        this.setState({guessedOutput: 'Thank you ' + name + '! We have sent you the ticket on ' + email + '. Enjoy your show!'})
    };

    render() {
        const {name, email} = this.state;

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

        const formGroupStyle = {
            marginBottom: '20px',
        };

        const labelStyle = {
            marginBottom: '5px',
        };

        const inputStyle = {
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#222',
            color: '#fff',
        };

        const buttonStyle = {
            backgroundColor: '#fff',
            color: '#333',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
        };

        return (
            <div style={containerStyle}>
                <h2 style={headerStyle}>Movie Booking Form - {localStorage.getItem('movieName')}</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <div style={formGroupStyle}>
                        <label htmlFor="name" style={labelStyle}>
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={this.handleInputChange}
                            style={inputStyle}
                            required
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="email" style={labelStyle}>
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={this.handleInputChange}
                            style={inputStyle}
                            required
                        />
                    </div>
                    <button type="submit" style={buttonStyle}>
                        Submit
                    </button>
                    <p>{this.state.guessedOutput}</p>
                </form>
            </div>
        );
    }
}

export default MovieBookingForm;
