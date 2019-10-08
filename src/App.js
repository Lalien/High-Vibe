import React from 'react';
import Search from './Search';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  let search_text = state.search_text || null;
  return {
    search_text
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Search store={this.context}/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);