import './App.css';
import CounterExamplePage from "./pages/CounterExamplePage";
import WelcomeExamplePage from "./pages/WelcomeExamplePage";
import PokemonPage from "./pages/PokemonPage";
import {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PokemonListPage from "./pages/PokemonListPage";


const App = () => {
    return (
        <Router>
            <div className="app">
                <ul style={{ display: 'flex', listStyleType: 'none'} }>
                    <li>
                        <Link to="/welcome">Welcome</Link>
                    </li>
                    <li>
                        <Link to="/pokemon">Pokemon</Link>
                    </li>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                    <li>
                        <Link to="/pokemons-list">List Pokes</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/" exact>
                        <WelcomeExamplePage/>
                    </Route>
                    <Route path="/welcome" exact>
                        <WelcomeExamplePage/>
                    </Route>
                    <Route path="/pokemon">
                        <PokemonPage/>
                    </Route>
                    <Route path="/counter">
                        <CounterExamplePage/>
                    </Route>
                    <Route path="/pokemons-list">
                        <PokemonListPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
export default App;
