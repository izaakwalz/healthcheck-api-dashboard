import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './layouts/NavBar';
import FormNavBar from './layouts/FormNavBar';
import TableForm from './layouts/TableForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Container>
          <h2>Health Check Avalibility DashBoard</h2>
        </Container>
        <div style={{ margin: '1rem' }}>
          <Row xs='2'>
            <Col xs='5'>
              <FormNavBar />
            </Col>
            <Col xs='7'>
              <TableForm />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default App;
