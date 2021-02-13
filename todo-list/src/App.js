import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/todo/todo'
import { Nav, Navbar } from 'react-bootstrap';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">
            {' '}
  Home   </Navbar.Brand>
        </Navbar>
        <ToDo />

      </>
    );
  }
}