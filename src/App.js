import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { sampleText } from './sampleText';
import { Component } from 'react'
import {marked} from 'marked'

class App extends Component {

  state = {
    text: sampleText
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({text: text})
  }

  renderText = text => marked(text, {sanitize: true})

  render(){
    return ( 
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <textarea className='form-control' 
            rows='35' value={this.state.text} onChange={this.handleChange}>
            </textarea>
          </div>
          <div className='col-sm-6'>
            <div dangerouslySetInnerHTML={{__html: this.renderText(this.state.text)}}>
               
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;