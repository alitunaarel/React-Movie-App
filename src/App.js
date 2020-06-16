import React, { useState } from 'react';
import './App.css';
import Search from './components/Search'
import axios from 'axios';


const App = () => {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  })
  const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=fc699da0';

  const search = (e) => {
    if (e.key === 'Enter') {
      axios(apiUrl + "&s=" + state.s)
        .then((data) => { console.log(data) })
    }
  }

  const handlerInput = (e) => {

    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    })

  }

  return (
    <div>
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handlerInput={handlerInput} search={search} />
      </main>
    </div>
  )
}


export default App;
