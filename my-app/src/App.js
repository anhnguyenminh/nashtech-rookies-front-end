import './App.css';
import HomePage from './pages/HomePage';
import LoginFormPage from './pages/LoginFormPage';
import PostsPage from "./pages/PostsPage";
import ProfilePage from "./pages/ProfilePage";
import {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="app container">
                <ul style={{display: 'flex', listStyleType: 'none'}}>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/" exact>
                        <HomePage/>
                    </Route>
                    <Route path="/home">
                        <HomePage/>
                    </Route>
                    <Route path="/posts">
                        <PostsPage/>
                    </Route>
                    {/*<Router path="/post/:id">*/}
                    {/*    <PostsPage/>*/}
                    {/*</Route>*/}
                    <Route path="/profile">
                        <ProfilePage/>
                    </Route>
                    <Route path="/login">
                        <LoginFormPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
export default App;
