import React from 'react';
import './App.css';
import { submitLink } from './link-api.js';

class App extends React.Component {
  state = {
    url: '',
    cool: ''
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const word = await submitLink(this.state.url)
      console.log(word);
      await this.setState({
        cool: word.body.cool
      })
      await console.log(this.state.cool);
    } catch(e) {
      return { error: e.message }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit} >
            <input onChange={e => this.setState({ url: e.target.value })} />
            <button>Button</button>
          </form>
          <div>
            <h3>Here's your cool links</h3>
            <a href={`https://urcoolurl.herokuapp.com/${this.state.cool}`}>{`https://urcoolurl.herokuapp.com/${this.state.cool}`}</a>
          </div>
        </header>
      </div>
    );
  };
}

export default App;
