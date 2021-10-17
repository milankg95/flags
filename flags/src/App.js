import logo from './logo.svg';
import './App.css';
import GlobalStyle from './styles/globalStyle'

import FlagItem from './components/FlagItem';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header'
import MainWrapper from './components/MainWrapper'

function App() {
  return <>
    <GlobalStyle />
    <Router>
      <Header />
      <MainWrapper />
      <Route path="/:id" children={<FlagItem />} />
    </Router>
  </>
}

export default App;
