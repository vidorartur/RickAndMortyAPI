import React from 'react';
import './App.css';
import APIRequest from './components/API/APIRequest';
import CharactersCards from './components/CharactersCard/CharactersCards';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PageSelect from './components/PageSelect/PageSelect';
import SearchMachine from './components/SearchMachine/SearchMachine';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Header />
      <SearchMachine />
      <CharactersCards />
      <PageSelect />
      <Footer />
      <APIRequest />
    </Provider>
  );
}

export default App;
