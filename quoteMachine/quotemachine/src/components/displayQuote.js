import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button';


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
            <div id="quote-box">
                {!fetched &&  <FontAwesomeIcon icon={["fas", "spinner"]} />}
                    <div id="text">{fetched && this.state.retrieveQuote}</div>
                    <br/>
                    {fetched && <Button variant="contained" color="primary" id="random_quote" onClick={this.handleSubmit}>Random Quote</Button>}
             </div>
        )
    }
}



export default connect(mapStateToProps)(DisplayQuote);