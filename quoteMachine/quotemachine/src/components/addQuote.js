import React, { Component } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, add_quote} from '../actions';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
      add_quote: (author, quote) => dispatch(add_quote(author,quote))
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

        this.props.add_quote(this.state.author,this.state.quote);
        
    }
    
    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                     <div>
                        <label>Author</label>
                        <input type="text" name="author" onChange={this.onChange}/>
                     </div>
                     <div>
                        <label>Quote</label>
                        <input type="text" name="quote" onChange={this.onChange}/>
                     </div>
                     
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}


export default connect(null, mapDispatchToProps)(addQuote);