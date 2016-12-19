var React = require('react');
var EMAILS = require('../emails');
var router = require('react-router');
var Router = router.Router;
var Link = router.Link;

var InboxEmails = function(props) {
    var emailList = Object.keys(EMAILS.inbox).map((key) => {
        return (
            <li key={EMAILS.inbox[key].id}>
                <Link to={'/inbox/' + EMAILS.inbox[key].id}>
                    {EMAILS.inbox[key].title}
                </Link>
            </li>
        );
    });
    
    return (
        <ul>{emailList}</ul>
    );
};

module.exports = InboxEmails;