import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
function Home() {
    return(
        <section>
            <div class="container-fluid">
                <h1 class="mt-5">Welcome</h1>
                <h5 class="mt-7">Please Login Using Your Email and Password</h5>
            </div>
            <form method="POST" action="/do_login">
                  <div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" name="inputemail_login" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" name="inputpassword_login" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <input type="submit" value="Login" class="btn btn-primary mb-2" />   
                  </div>
            </form>

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