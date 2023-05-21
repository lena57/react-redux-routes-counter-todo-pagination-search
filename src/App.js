import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppRoutes} from './routes';
import { Link } from 'react-router-dom';


function App() {
  

  return (

      <div className="App">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" href="/counter">Counter</a>
                <a className="nav-link" href="/todo">ToDoList</a>
              </div>
            </div>
          </div>
        </nav>
        <AppRoutes/>
      </div>
  );
}

export default App;
