import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
function Home() {
    return(
        <section>
            <div class="container-fluid">
                <h1 class="mt-5">Welcome</h1>
                <h4 class="mt-7">Please Login Using Your Email and Password</h4>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <div class="container-fluid">
                <h1 class="mt-5">Dont have a Account ?</h1>
                <p>Sign Up here !!</p>
            </div>
              
            <Link to='/sign_up'> 
                <Button variant="primary" type="submit" >
                      Sign Up
                </Button>    
            </Link>
          
        </section>
    );
}

export default Home;