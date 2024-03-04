import { h } from 'preact';
import { Router } from 'preact-router'; 
import './app.css'
import Login from './components/Login'
import LoginSecond from './components/LoginSecond';

export function App() {

  return (
    <Router>
      <Login path="/" />
      <LoginSecond path="/login-second" />
    </Router>

  )
}
