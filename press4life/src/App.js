import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import RegForm from './RegForm';
import LoginForm from './LoginForm';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
            <div>
                <div class = "HderTitle">
                    <p>Press4 Life.</p>
                    <p>Press four seconds for your beloved ones.</p>
                    <img id="logo" src="" alt="" />
                </div>
            </div>
        </header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/Login">Log in</Nav.Link>
              <Nav.Link href= "/AccountPage">My account</Nav.Link>
              <Nav.Link href="/ButtonRegister">My Button</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Route exact path="/" component={Home}/>
        <Route path='/register' component={RegisterPage} />
        <Route path="/Login" component={Login}/>
        <Route path="/AccountPage" component={AccountPage}/>
        <Route path="/ButtonRegister" component={ButtonRegister}/>
      </div>
    </Router>
  );
}

const Home = () => <div>Hello World</div>

const RegisterPage = () => <RegForm />

const Login = () => <LoginForm/>

const AccountPage = () => <div> Display personal profile</div>

const ButtonRegister = () => <div> Register your button ID </div>


export default App;
