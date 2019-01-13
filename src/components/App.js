import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import SearchComponent from './search'
import ImageComponent from './images';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { search: false, loading: false, images: []};
  }

  searchClips = async(gamertag) => {
    this.setState({ loading: true });
    const val = await axios.get('https://damp-chamber-98722.herokuapp.com/xbox/clips/' + encodeURI(gamertag));
    this.setState({ loading: false });
    this.setState({images: val['data']});
  }


  componentDidMount() {
    var input = document.querySelector('.search-form');
    var search = document.querySelector('input')
    var button = document.querySelector('button');

    button.addEventListener('mouseover', function(e) {
      e.preventDefault();
      input.classList.toggle('active');
    })

    search.addEventListener('focus', function() {
      input.classList.add('focus')
    })

    search.addEventListener('blur', function() {
      search.value.length !== 0 ? input.classList.add('focus') : input.classList.remove('focus');
    })
    
  }

  render() {
    return(
      <div>
        <SearchComponent onSubmit={this.searchClips}/>
        <ImageComponent images={this.state.images} loading={this.state.loading}/>
      </div>
    );
  }
}

export default App;
