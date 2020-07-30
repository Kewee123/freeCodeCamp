import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, add_quote} from './actions';


function App() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Counter <code>{counter}</code> and save to reload.
                <button onClick={() => dispatch(increment(5))}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                {isLogged && <h3>Valuable Info</h3>}
                {dispatch(add_quote())}
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        </div>
    );
}

export default App;
