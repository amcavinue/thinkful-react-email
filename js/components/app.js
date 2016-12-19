var React = require('react');
var router = require('react-router');
var Router = router.Router;
var Link = router.Link;

var App = function(props) {
    return (
        <div>
            <h1>
                Email App
            </h1>
            <ul>
                <li><Link to={'/inbox'}>Inbox</Link></li>
                <li><Link to={'/spam'}>Spam</Link></li>
            </ul>
            <div>
                {props.children}
            </div>
        </div>
    );
};

module.exports = App;