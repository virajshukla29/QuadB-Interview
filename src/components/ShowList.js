import React from 'react';
import {Link} from 'react-router-dom';

const ShowList = ({shows}) => {
    console.log("hi", shows);
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>List of Shows</h2>
            <div style={styles.showList}>
                {shows.map(show => (
                    <div key={show.show.id} style={styles.showCard}>
                        <img
                            src={show.show.image ? show.show.image.medium : 'placeholder.jpg'}
                            alt={show.show.name}
                            style={styles.showImage}
                        />
                        <div style={styles.showDetails}>
                            <h3 style={styles.showName}>{show.show.name}</h3>
                            <Link to={`/shows/${show.show.id}/summary`} style={styles.showLink}>
                                View Summary
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Inline styles
const styles = {
    container: {
        backgroundColor: '#222',
        padding: '20px',
        color: '#fff',
    },
    heading: {
        marginBottom: '20px',
    },
    showList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
    },
    showCard: {
        backgroundColor: '#333',
        padding: '10px',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    },
    showImage: {
        width: '150px',
        height: '225px',
        objectFit: 'cover',
        marginBottom: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    },
    showDetails: {
        textAlign: 'center',
    },
    showName: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    showLink: {
        display: 'block',
        color: '#007bff',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
    },
    showLinkHover: {
        color: '#fff',
    },

};

export default ShowList;
