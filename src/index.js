import React from 'react';
import {render} from 'react-dom';
import App from 'components/app';
import SuggestionsView from 'components/suggestion-view'
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

var Container = React.createClass({
    render: function () {
        return <div>{this.props.children}</div>;
    }
});

render(<Router>
        <Route path="/" component={Container}>
            <IndexRoute component={App}/>
            <Route name="viewSuggestions" path="viewSuggestions" component={SuggestionsView}/>
        </Route>
    </Router>, document.getElementById("app"));