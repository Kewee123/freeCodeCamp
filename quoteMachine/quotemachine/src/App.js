import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, add_quote} from './actions';
import AddQuote from './components/addQuote';
import DisplayList from './components/displayList';
import DisplayQuote from './components/displayQuote';

function App() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return (
        <div className="App">
        <header className="App-header">
            <p>
                Counter <code>{counter}</code>
                <button onClick={() => dispatch(increment(5))}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                {isLogged && <h3>Valuable Info</h3>}
            </p>
            <DisplayQuote/>
            <DisplayList/>
            <AddQuote/> 
        </header>
        </div>
    );
}

export default App;
