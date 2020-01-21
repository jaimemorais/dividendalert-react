import React from 'react';
import SelectStock from './SelectStock'

class MyStocks extends React.Component {
  render () {
    
    return (
      <div>
        <p>MyStocks Component</p>
        <p>TODO stock list here</p>

        <p>Add new stock : </p>
        <SelectStock />
      </div>
    );
  }
}

export default MyStocks;