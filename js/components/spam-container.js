var React = require('react');
var SpamEmails = require('./spam-emails');

var SpamContainer = function(props) {
    return (
        <div>
            <h2>Spam</h2>
            {props.children}
        </div>
    );
};

module.exports = SpamContainer;