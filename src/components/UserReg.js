import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import useHttp from '../hooks/useHttp.js';
function UserReg() {
  
    const requestConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const [validated, setValidated] = useState(false);
    const {
      data,
      isLoading: isSending,
      error,
      sendRequest,
      clearData
    } = useHttp('http://localhost:3000/saveCustomer', requestConfig);

    const handleSubmit1 = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      const fd = new FormData(event.target);
      const customerData = Object.fromEntries(fd.entries()); // { email: test@example.com }
      console.log(customerData);
      setValidated(true);
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      const fd = new FormData(event.target);
      const customerData = Object.fromEntries(fd.entries()); // { email: test@example.com }
      console.log(customerData);
      sendRequest(
        JSON.stringify(customerData)
      );
    
    };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} action="/googlePay">
       
       <Row className="mb-2">
          <Form.Group className="mb-2" id="formGridSubmit">
            <h4 className="sidebar__widget_title">NEW CUSTOMER REGISTRATION</h4>
          </Form.Group>
       </Row>      
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationfirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
            name="firstName"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationmiddelName">
          <Form.Label>Middel Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Middel name"
            defaultValue="Showrn"
            name="middelName"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationlastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Mark"
            name="lastName"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridfullName">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="datetime-local" name="dateBirth"/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridgender">
          <Form.Label>Gender</Form.Label>
          <Form.Select defaultValue="Choose..." name="gender">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              name="userName"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGriddateOfPlace">
          <Form.Label>Date of Place</Form.Label>
          <Form.Control
              type="text"
              placeholder="Jalgaon"
              name="datePlace"
              required
            />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email"/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="pwd"/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" name="address1"/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationmobileNo">
          <Form.Label>Mobile No</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Mobile No"
            name="mobileNo"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" name="address2"/>
      </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control name="city"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." name="state">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control name="zip"/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Kindly fill the correct details" name="chkValid"/>
               
            </Form.Group>
       </Row>
       <Row className="mb-2">
          <Form.Group className="mb-2" id="formGridSubmit">
              <div   style={{float: 'right'}}>              
                  <button type="submit" class="btn btn-outline-dark">Pay & Get Kundali</button>
              </div>
          </Form.Group>
       </Row>
    </Form>
  );
}

export default UserReg;