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

class DisplayQuote extends Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            retrieveQuote : "",
            fetched: false
        }
    }

    componentDidUpdate(prevProps,prevState){
        console.log("yo bro", this.props.quote);
        if( prevProps && (this.props.fetched !== this.state.fetched)){
            this.setState ({
                retrieveQuote: this.props.quote[Math.floor(Math.random() * this.props.quote.length)].starWarsQuote,
                fetched: this.props.fetched
            })
        }

        console.log("component did mount", this.state)
    }

    handleSubmit(event){
        this.setState ({
            retrieveQuote: this.props.quote[Math.floor(Math.random() * this.props.quote.length)].starWarsQuote
        })
    }

    render() {
        const {quote, fetched} = this.props;
        console.log("displayQuote state"+ this.state.retrieveQuote);
        return (
            <div>
                {fetched && this.state.retrieveQuote}
                <br/>
                <button id="random_quote" onClick={this.handleSubmit}>Random Quote</button>
             </div>
        )
    }
}



export default connect(mapStateToProps)(DisplayQuote);