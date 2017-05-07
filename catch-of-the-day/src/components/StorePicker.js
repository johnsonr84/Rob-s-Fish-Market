import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      //Anywhere else
      <form action="" className="store-selector">
      {/* Hello */}
        <h2>Please Enter A Store</h2>
        <input type="text" require placeholder="Store Name" />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

export default StorePicker;
