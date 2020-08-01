import React, { Component } from 'react'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    console.log("this me", state);
    console.log(state.addQuote.quotes);
    return { quotes : state.addQuote.quotes};
};

const DisplayList = ({ quotes }) => (
    <div>
        {quotes.map(item => {
            return <div id="quote-box" key={item.author}>
                <div id="author">{item.author}</div> 
                <div id="text">"{item.quote}"</div>
            </div>
        })}
    </div>
);


export default connect(mapStateToProps)(DisplayList);