import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
import './components/login.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

render(<App />, document.getElementById('app'))
