import React, { Component } from 'react'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    console.log("yo", state)
    return { 
        quote: state.addQuote.quote,
        fetched: state.addQuote.fetched
    };
};

const DisplayQuote = ({ quote, fetched }) => (
    
    <div>
       {fetched && quote[0].starWarsQuote}
    </div>
);


export default connect(mapStateToProps)(DisplayQuote);