import React from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

class SearchComponent extends React.Component {

  state = { term: '' }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  onChange = event => {
    this.setState({term: event.target.value});
  }

  render() {
      return (
          <div>
            <div class="heading">
              <div class="search-container">
                <div class="search-form">
                  <form onSubmit={this.onFormSubmit}>
                    <input 
                      type="text" 
                      value={this.state.term}
                      placeholder="Your Gamertag"
                      onChange={this.onChange}
                    >
                    </input>
                    <button></button>
                  </form>
                </div> 
              </div>
              Iris spike
            </div>
          </div>
      );
  }
};
export default SearchComponent;
