import logo from './logo.svg';
import './App.css';

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
    <Router>
      <Header />
      <MainWrapper />
    </Router>
  </>
}

export default App;
