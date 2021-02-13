import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/todo/todo'
import { Nav, Navbar } from 'react-bootstrap';
import SettingsProvider from './context/settings';
import Settings from './components/todo/settings'

export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>

        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Home
            {' '}
          </Navbar.Brand>
        </Navbar>
        
        <ToDo />

        <section>
          <Settings />
        </section>

      </SettingsProvider>
    );
  }
}