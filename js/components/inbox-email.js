var React = require('react');
var EMAILS = require('../emails');

var InboxEmail = function(props) {
    return (
        <div>
            <h3>
                {EMAILS.inbox[props.params.emailId].title}
            </h3>
            <div>
                From: {EMAILS.inbox[props.params.emailId].from}
            </div>
            <div>
                To: {EMAILS.inbox[props.params.emailId].to}
            </div>
            <p>
                {EMAILS.inbox[props.params.emailId].content}
            </p>
        </div>
    );
};

module.exports = InboxEmail;