import { h } from 'preact';
import { Router } from 'preact-router'; 
import './app.css'
import Login from './components/Login'
import LoginSecond from './components/LoginSecond';
import Navbar from './home/navbar';

export function App() {

  return (
    <Router>
      <Navbar path="/" />
      <LoginSecond path="/login-second" />
    </Router>

  )
}
