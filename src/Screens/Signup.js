import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup() {
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '', location: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.location
        })
      });

      if (response.ok) {
        setMessage('User registered successfully');
        setCredentials({ name: '', email: '', password: '', location: '' }); // Clear form
      } else {
        setMessage('Failed to register user');
      }
    } catch (error) {
      console.log(error);
      setMessage('An error occurred');
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: '#eee' }}>
        <Container className="h-100">
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col lg={12} xl={11}>
              <Card className="text-black" style={{ borderRadius: '25px' }}>
                <Card.Body className="p-md-5">
                  <Row className="justify-content-center">
                    <Col md={10} lg={6} xl={5} className="order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                      {message && <div className="text-center mb-4">{message}</div>}
                      <Form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <Form.Group className="mb-4 d-flex align-items-center">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="flex-fill mb-0">
                            <Form.Control
                              type="text"
                              id="form3Example1c"
                              placeholder="Your Name"
                              name="name"
                              value={credentials.name}
                              onChange={handleChange}
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-4 d-flex align-items-center">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="flex-fill mb-0">
                            <Form.Control
                              type="email"
                              id="form3Example3c"
                              placeholder="Your Email"
                              name="email"
                              value={credentials.email}
                              onChange={handleChange}
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-4 d-flex align-items-center">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="flex-fill mb-0">
                            <Form.Control
                              type="password"
                              id="form3Example4c"
                              placeholder="Password"
                              name="password"
                              value={credentials.password}
                              onChange={handleChange}
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-4 d-flex align-items-center">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="flex-fill mb-0">
                            <Form.Control
                              type="text"
                              id="form3Example5c"
                              placeholder="Enter your location"
                              name="location"
                              value={credentials.location}
                              onChange={handleChange}
                            />
                          </div>
                        </Form.Group>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <Button type="submit" className="btn btn-primary btn-lg">Register</Button>
                        </div>
                      </Form>
                    </Col>
                    <Col md={10} lg={6} xl={7} className="d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample illustration"
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
