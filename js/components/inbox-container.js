var React = require('react');
var EMAILS = require('../emails');
var InboxEmails = require('./inbox-emails');

var InboxContainer = function(props) {
    return <InboxEmails emails={EMAILS.inbox} />;
};

module.exports = InboxContainer;