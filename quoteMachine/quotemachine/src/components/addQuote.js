import React, { Component } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, add_quote, remove_quote, random_quote} from '../actions';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
      add_quote: (author, quote) => dispatch(add_quote(author,quote)),
      remove_quote: (author, quote) => dispatch(remove_quote(author, quote)),
      random_quote: () => dispatch(random_quote())
    };
  }
 class addQuote extends Component {
    
    constructor(props) {
        super(props)


        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            author: '',
            quote: ''
        }
    }

    onChange(event){
        this.setState(
            { [event.target.name] : event.target.value }
        )
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("potaotota", event.target)
        if(event.target.id === "remove_quote"){
            this.props.remove_quote(this.state.author,this.state.quote);
        } else  {
            this.props.add_quote(this.state.author,this.state.quote);
        } 
    }
    
    render() {
        return (
            <div>
                 <form onSub>
                     <div>
                        <label>Author</label>
                        <input type="text" name="author" onChange={this.onChange}/>
                     </div>
                     <div>
                        <label>Quote</label>
                        <input type="text" name="quote" onChange={this.onChange}/>
                     </div>
                     
                    <button id="add_quote" onClick={this.handleSubmit}>Add Quote</button>
                    <button id="remove_quote" onClick={this.handleSubmit}>Remove Quote</button>
                    
                </form>
            </div>
        );
    }
}


export default connect(null, mapDispatchToProps)(addQuote);