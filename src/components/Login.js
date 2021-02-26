import React, { useEffect } from "react";
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect(() => {
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <p>Build a login page here</p>
        <div>
          <form>
            <input
              type="text"
              name="username"
            // value={this.state.credentials.username}
            // onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
            // value={this.state.credentials.password}
            // onChange={this.handleChange}
            />
            {/* <p style={{ color: `red`, fontSize: "12px" }}>{this.state.error}</p> */}
            <button>Log in</button>
          </form>
        </div>
      </h1>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.