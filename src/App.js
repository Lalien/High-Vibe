import React from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Search/>
      </div>
    );
  }
}

export default connect()(App);