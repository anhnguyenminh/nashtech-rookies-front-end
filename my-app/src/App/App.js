import React, { useState } from 'react';
import './App.css';
import Navbar from './NavBar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Posts from '../pages/Posts/Posts';
import Login from '../pages/Login/Login';
import Post from '../pages/Post/Post';
import Profile from '../pages/Profile/Profile';

const initialCurrentUser = {
    userId: null,
    token: null
}

const App = () => {
    const [currentUser, setCurrentUser] = useState(initialCurrentUser);
    const loginSuccess = ({ userId, token }) => setCurrentUser({userId, token});
    const logout = () => setCurrentUser(initialCurrentUser);
    const isUserLoggedIn = Boolean(currentUser.userId);
    return (
        <BrowserRouter>
            <div className="app-container">
                <Navbar
                    logout = { logout }
                    isUserLoggedIn = { isUserLoggedIn }
                />
                <Switch>
                    <Route
                        path="/"
                        exact
                    >
                        <Home/>
                    </Route>
                    <Route
                        path="/posts"
                        exact
                    >
                        <Posts/>
                    </Route>
                    <Route
                        path="/posts/:id"
                        exact
                    >
                        <Post/>
                    </Route>
                    <Route
                        path="/profile"
                        exact
                        render={ () => {
                            if(!isUserLoggedIn) return (
                                <Login
                                    title="You need to login to continue"
                                    loginSuccess={ loginSuccess }
                                />
                            );
                            return (
                                <Profile
                                    currentUser = { currentUser }
                                />
                            )
                        }}
                    />
                    <Route
                        path="/login"
                        exact
                    >
                        <Login
                            loginSuccess = { loginSuccess }
                        />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
