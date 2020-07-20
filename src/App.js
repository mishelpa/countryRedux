import React from 'react';
import CountryList from './components/country-list';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './components/reducer';
import ActionList from './components/action-list';

const initialState = {
  countryList: [],
  countryListByName: [],
  countryFilteredByRegion: [],
  filterByRegion: '',
}

const store = createStore(reducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ActionList/>
        <CountryList/>
    </div>
    </Provider>
    
  );
}

export default App;
