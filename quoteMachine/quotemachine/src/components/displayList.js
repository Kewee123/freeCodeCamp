import React, { Component } from 'react'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { quotes: state.quotes };
};

const DisplayList = ({ quotes }) => (
    <div>
        {quotes.map(item => {
            return <li key={item.author}>{item.author}:{item.quote}</li>
        })}
    </div>
);


export default connect(mapStateToProps)(DisplayList);