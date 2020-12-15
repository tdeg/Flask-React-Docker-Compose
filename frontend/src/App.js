import React from 'react';
import FetchRandomUser from './components/FetchRandomUser';
import FlaskComponent from './components/FlaskComponent';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <FlaskComponent />
      </div>
    )
  }
}