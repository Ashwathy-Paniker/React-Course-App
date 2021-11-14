import logo from './logo.svg';
import './App.css';
import Product from './component/Product';
import Registration from './component/RegistrationForm';
import CourseList from './component/CourseList';
import UserList from "./component/UserList";

import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import { Nav,Navbar, Card, Row, Container,Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function App() {
  return (

  <Router>
        <Nav variant="pills" className="bg-dark text-white" style={{ height: "50px",marginTop:"2px"}}>
          <Navbar.Brand className="justify-content">
            React Project
          </Navbar.Brand>
          <Container>
            <Nav className="justify-content-end">
              <Nav.Item>
                <Nav.Link  ><Link to="/" className="text-white">Product</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  ><Link to="/course" className="text-white">Course</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  ><Link to="/UserList" className="text-white">Registered User</Link></Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Nav> <br/><br/><br/>

        <Switch>
          <Route path="/" exact component={Product}></Route>
          <Route path="/course"  exact component={CourseList}></Route>
          <Route path="/UserList" exact component={UserList} />

        </Switch>
      </Router> 

  );
}

export default App;

