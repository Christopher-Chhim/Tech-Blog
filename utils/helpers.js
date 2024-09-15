const moment = require('moment');

const formatDate = (date) => {
    return moment(date).format('MMMM DD, YYYY');
};

const truncateText = (text, length) => {
    if (text.length > length) {
        return text.substring(0, length) + '...';
    }
    return text;
};

const isLoggedIn = (session) => {
    return session.logged_in;
};

const isAdmin = (user) => {
    return user && user.role === 'admin';
};

const timeFromNow = (date) => {
    return moment(date).fromNow();
};

module.exports = {
    formatDate,
    truncateText,
    isLoggedIn,
    isAdmin,
    timeFromNow
};