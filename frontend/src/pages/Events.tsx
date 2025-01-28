import React from 'react';

const Events = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Events</h1>
            <p style={styles.text}>Join us for exciting events at The Miniature Manager.</p>
            <section style={styles.section}>
                <h2 style={styles.subtitle}>Register for an Event</h2>
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
        margin: '0 auto',
        fontFamily: "'Roboto', sans-serif",
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
        marginBottom: '40px',
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
        marginBottom: '10px',
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