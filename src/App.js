import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlatfileImporter from "flatfile-csv-importer";

const LICENSE_KEY = '88710974-8ddc-4c56-a7e7-a051c4e7045f'


function App() {
  const importer = new FlatfileImporter(LICENSE_KEY, {
    fields: [{
      label: 'Product ID',
      key: 'product-id',
      isRequired: true
    }, {
      label: 'Name',
      key: 'product-name',
      isRequired: true
    }, {
      label: 'Price',
      key: 'price',
      isRequired: true
    }, {
      label: 'Category',
      key: 'category',
      alternates: ['type', 'type id'],
      isRequired: false
    }],
    type: 'Product',
    allowCustom: false,
    maxRecords: 100
  })
  const launch = () => {
    importer.requestDataFromUser()
    .then(results => {
      // Tell us what you want to happen to this data
    })
    .catch(function(error) {
      console.info(error || "window close");
    });

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
            type="button"
            id="launch"
            value="Launch Importer"
            onClick={launch}
            />
      </header>
    </div>
  );
}

export default App;
