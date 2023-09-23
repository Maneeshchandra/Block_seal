// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';

function App() {
    return (
        <Router>
            <div>
                {/* Add navigation or header component here if needed */}
                <Switch>
                    <Route exact path="/" component={UserDashboard} />
                    <Route path="/admin" component={AdminDashboard} />
                    {/* Add more routes as needed */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
