require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;
var App = require('./components/app');
var InboxContainer = require('./components/inbox-container');
var InboxEmails = require('./components/inbox-emails');
var Email = require('./components/email');
var SpamContainer = require('./components/spam-container');
var SpamEmails = require('./components/spam-emails');

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/inbox" component={InboxContainer}>
                <Route path=":emailId" component={Email} />
            </Route>
            <Route path="/spam" component={SpamContainer}>
                <IndexRoute component={SpamEmails} />
                <Route path=":emailId" component={Email} />
            </Route>
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});
