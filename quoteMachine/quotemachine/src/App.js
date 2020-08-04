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
            <title>Star Wars Quote Generator</title>
            
            <header className="App-header">
                <h1 id="title">Star Wars Quote Generator</h1>
                <DisplayQuote/> 
            </header>
        </div>
    );
}

export default App;
