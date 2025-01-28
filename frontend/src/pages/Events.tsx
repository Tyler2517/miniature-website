import React from 'react';

const Events = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Events</h1>
            <p style={styles.text}>Join us for exciting events at The Miniature Manager.</p>
            <section style={styles.section}>
                <div style={styles.calendarContainer}>
                <iframe src="https://calendar.google.com/calendar/embed?src=b28067071a8f3c2f1ea88313c7d86863657a0215a170e79cfc6d38890159c62a%40group.calendar.google.com&ctz=America%2FBoise" style={styles.calendar}></iframe>
                </div>
            </section>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '1000px',
        margin: '20px auto', // Updated margin for better spacing
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: '#f5f5f5', // Light background color
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    title: {
        textAlign: 'center',
        color: '#415256',
        fontSize: '2.5rem',
        marginBottom: '20px',
    },
    text: {
        fontSize: '1.25rem',
        color: '#555',
        lineHeight: '1.6',
    },
    section: {
        marginBottom: '30px', // Reduced marginBottom for less white space
        padding: '20px',
        backgroundColor: '#fff', // White background for sections to stand out
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    subtitle: {
        fontSize: '2rem',
        color: '#415256',
        marginBottom: '10px',
    },
    eventList: {
        listStyleType: 'none',
        padding: 0,
    },
    eventItem: {
        fontSize: '1.25rem',
        color: '#555',
        marginBottom: '5px', // Reduced marginBottom for better spacing
    },
    calendarContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    calendar: {
        border: 1,
        width: '1000px',
        height: '800px',
    },
};

export default Events;