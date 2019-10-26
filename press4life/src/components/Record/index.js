import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import Form from 'react-bootstrap/Form' ;
import {Button, Row, Col} from 'react-bootstrap';
import './index.css';

class Record extends Component{
    render = () => {
        return <Form className='form-container'>
            <Form.Row>
                <Form.Group as={Col} controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="first name" />
                </Form.Group>

                <Form.Group as={Col} controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="last name" />
                </Form.Group>
            </Form.Row>
            <fieldset>
                <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}>
                        Gender
                    </Form.Label>
                    <Form.Check
                        inline
                        type="radio"
                        label="Male"
                        name="gender"
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Female"
                        name="gender"
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Other"
                        name="gender"
                    />
                </Form.Group>
            </fieldset>
            <Form.Row>
                <Form.Group as={Col} controlId="firstName">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>

                <Form.Group as={Col} controlId="deviceID">
                    <Form.Label>Device ID</Form.Label>
                    <Form.Control placeholder="1001" />
                </Form.Group>
                <Form.Group as={Col} controlId="phoneNumber">
                    <Form.Label> Phone Number</Form.Label>
                    <Form.Control placeholder="0412345678" />
                </Form.Group>
            </Form.Row>
            <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="123 abc st."/>
            </Form.Group>
            <Form.Row>
                <Form.Group as={Col} controlId="region">
                    <Form.Label>Region</Form.Label>
                    <Form.Control as="select">
                        <option>VIC</option>
                        <option>NSW</option>
                        <option>ACT</option>
                        <option>QLD</option>
                        <option>WA</option>
                        <option>SA</option>
                        <option>NT</option>
                        <option>TAS</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="zipcode">
                    <Form.Label> Zip Code</Form.Label>
                    <Form.Control placeholder="1234" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="docName">
                    <Form.Label> Doctor Name </Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="docOrg">
                    <Form.Label> Doctor Orgnization </Form.Label>
                    <Form.Control />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="eName">
                    <Form.Label> Emergency Contact Name </Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="ePhone">
                    <Form.Label> Emergency Contact Phone </Form.Label>
                    <Form.Control />
                </Form.Group>
            </Form.Row>
            <Form.Group controlId="issues">
                    <Form.Label>Medical Conditions</Form.Label>
                    <Form.Control as="textarea" rows="3" />
            </Form.Group>
        
      
            <Form.Group as={Row}>
                <Col sm={{ span: 2, offset: 4 }}>
                    <Button type="submit">Submit</Button>
                </Col>
                <Col>
                    <Button type = "reset">&nbsp;&nbsp;Clear&nbsp;</Button>
                </Col>
            </Form.Group>
        </Form>
    } 
}
export default Record; 