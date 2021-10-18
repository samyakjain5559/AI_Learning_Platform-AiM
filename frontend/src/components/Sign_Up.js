import React from 'react';
import {Link} from 'react-router-dom';
function Sign_Up() {
    return(
        <section>
            <div class="container-fluid">
                <h1 class="mt-5">Please Fill The Following Details To Sign Up</h1>
            </div>
            
            <form method="POST" action="/do_sign_up">
                  <div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" name="inputemail" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" name="inputpassword" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <input type="submit" value="Send" class="btn btn-primary mb-2" />   
                  </div>
            </form>
        </section>
    );
}

export default Sign_Up;