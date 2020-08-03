import React, { Component } from 'react'
import { connect } from 'react-redux';
import {random_quote} from '../actions/';

const mapStateToProps = state => {
    console.log("yo", state)
    return { 
        quote: state.addQuote.quote,
        fetched: state.addQuote.fetched
    };
};

const mapDispatchToProps = dispatch => {
    return{
        random_quote: () => dispatch(random_quote())
    }
}


class DisplayQuote extends Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        this.props.random_quote()
    }

    render() {
        const {quote, fetched} = this.props;
        return (
            <div>
                {fetched && quote[0].starWarsQuote}
                <br/>
                <button id="random_quote" onClick={this.handleSubmit}>Random Quote</button>
             </div>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(DisplayQuote);