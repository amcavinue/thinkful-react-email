var React = require('react');
var InboxEmails = require('./inbox-emails');

var InboxContainer = function(props) {
    return (
        <div>
            <h2>Inbox</h2>
            {props.children}
        </div>
    );
    
};

module.exports = InboxContainer;