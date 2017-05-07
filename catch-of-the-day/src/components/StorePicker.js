import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  goToStore(event) {
    event.preventDefault();
    console.log('You Changed the URL');
    //first grab the text from the box
    console.log(this.storeInput.value);
    //second we're going to transition from / to /store/:storeId
  }

  render() {
    //Anywhere else
    return (
      <form action="" className="store-selector" onSubmit={(e) => this.goToStore(e)}>
      {/* Hello */}
        <h2>Please Enter A Store</h2>
        <input type="text" require placeholder="Store Name" defaultvalue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

export default StorePicker;
