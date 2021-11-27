/*The MIT License (MIT)

Copyright (c) 2011-2018 Twitter, Inc.
Copyright (c) 2011-2018 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.*/
import React from 'react';
import {Link} from 'react-router-dom';
function Sign_Up() {
    return(
        <section>
            <div class="container-fluid">
                <h1 class="mt-2">Create your account</h1>
                <medium class="form-text text-muted">Please fill in the following details to Sign Up</medium>
            </div>
            
            <form method="POST" action="/do_sign_up" class="codehim-form">
                  <div>
                        <div class="form-group">
                            {/*<label for="exampleInputEmail1">Email address</label>*/}
                            <label for="email"><i class="fa fa-envelope"></i> Email address:</label>
                            <input type="email" name="inputemail" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address" required/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <br></br>
                        <div class="form-group">
                            {/*<label for="exampleInputPassword1">Password</label>*/}
                            <label for="pass"><i class="fa fa-lock"></i> Password:</label>
                            <input type="password" name="inputpassword" class="form-control" id="exampleInputPassword1" placeholder="Enter your password" required/>
                        </div>
                        <br></br>
                        <div class="form-group">
                            <label for="pass"><i class="fa fa-user"></i> Choose an account:</label>
                            <br></br>
                            <label><input type="radio" name="signUp" name="checkbox" value="student" id="student"  checked /> Student</label>
                            <br></br>
                            <label><input type="radio" name="signUp" name="checkbox" value="teacher" id="teacher" /> Teacher</label>
                        </div>
                        {/*<input type="submit" value="Send" class="btn btn-primary mb-2" />*/}   
                        <input type="submit" value="Send" class="btn-login  gr-bg" style={{marginLeft: "145px"}} />
                        <br></br>
                  </div>
            </form>
        </section>
    );
}

export default Sign_Up;