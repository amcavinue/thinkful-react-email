var React = require('react');

var InboxEmails = function(props) {
    var emailList = Object.keys(props.emails).map((key) => {
        return <li key={props.emails[key].id}>{props.emails[key].title}</li>;
    });
    
    return (
        <ul>{emailList}</ul>
    );
};

module.exports = InboxEmails;