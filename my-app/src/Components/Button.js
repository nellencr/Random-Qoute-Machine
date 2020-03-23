import React, { Component } from 'react'
import { random } from 'lodash'
 class Button extends Component {
    constructor(props) {
      super(props);
     this.state= {
       quotes:[],
      getRandomQoute: null,
     }
     this.getRandomQoute = this.getRandomQoute.bind(this);
  }

    componentDidMount() {
      fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
       .then(quotes => this.setState({quotes}, () => {
         this.setState({getRandomQoute: this.getRandomQoute() })
       }));
    }
  getRandomQoute () {
    if (!this.state.quotes.length){
      return;
    }
    return random(0, this.state.quotes.length-1);
  }
  
   
  render() {
    console.log(this.state.getRandomQoute)
    return (
      <div>
        <button onClick = {this.getRandomQoute} id = "new-quote" > New quote </button>
      </div>
    )
  }
}

export default Button;

