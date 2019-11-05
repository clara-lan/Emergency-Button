import React, {Component} from 'react';
import Form from 'react-bootstrap/Form' ;
import {Button, Row, Col} from 'react-bootstrap';
import './index.css'
class LoginForm extends Component {
    render = () => {
        return <div className='pageContainer'>
            <Form className='login-form-container'>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check label="Remember me" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Log in</Button>
                    </Col>
                </Form.Group>
            </Form>    
        
        </div>
    }
}
export default LoginForm;