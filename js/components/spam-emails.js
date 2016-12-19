var React = require('react');
var EMAILS = require('../emails');
var router = require('react-router');
var Router = router.Router;
var Link = router.Link;

var SpamEmails = function(props) {
    var spamList = Object.keys(EMAILS.spam).map((key) => {
        return (
            <li key={EMAILS.spam[key].id}>
                <Link to={'/spam/' + EMAILS.spam[key].id}>
                    {EMAILS.spam[key].title}
                </Link>
            </li>
        );
    });
    
    return (
        <ul>{spamList}</ul>
    );
};

module.exports = SpamEmails;