var React = require('react');
var EMAILS = require('../emails');

var SpamEmail = function(props) {
    return (
        <div>
            <h3>
                {EMAILS.spam[props.params.emailId].title}
            </h3>
            <div>
                From: {EMAILS.spam[props.params.emailId].from}
            </div>
            <div>
                To: {EMAILS.spam[props.params.emailId].to}
            </div>
            <p>
                {EMAILS.spam[props.params.emailId].content}
            </p>
        </div>
    );
};

module.exports = SpamEmail;