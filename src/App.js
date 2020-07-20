import React from 'react';
import CountryList from './components/country-list';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const initialState = {
  countryList: []
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_COUNTRY_LIST':
      return {...state, countryList: action.payload}
    default:
      return state
  }
}

const store = createStore(reducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <CountryList/>
    </div>
    </Provider>
    
  );
}

export default App;
